<?

Trait TradexConsole
{

    public static function tradexEvalCode($str)
    {
        eval('TradexImport::' . $str . ';');
    }


    public static function getHashList($checkHash = "true")
    {
        $arResult = array();
        $arTypeXml = array("group", "object", "pricelist", "discgrp", "pludiscgrp", "artdiscgrp", "good", "price", "stock");
        foreach ($arTypeXml as $typeXml) {
            $arResult[] = TradexHash::hashGetStatus($typeXml, $checkHash);
        }

        return $arResult;
    }

    public static function getGoodCount($full = false)
    {
        $line = 0;
        $limit = 500;
        $pathXML = TradexGeneral::getFileInfo("good", $full);
        $arResult = array(
            "PRODUCTS_ALL" => 0,
            "PRODUCTS_WITH_PRICE" => 0,
        );
        while ($arList = TradexImport::getArrayByString($pathXML, $line, $limit)) {
            $arArticul = array();
            foreach ($arList as $key => $arElement) {
                $arArticul[] = $arElement["articul"];
            }
            $arColor = TradexImport::getColorListByArticul($arArticul);
            foreach ($arColor as $color) {
                $arResult["PRODUCTS_WITH_PRICE"] += count($color);
            }
            $line += $limit;
            $arResult["PRODUCTS_ALL"] += count($arList);
        }
        return $arResult;
    }

    public static function updateAmountConsole($limit = 200)
    {
        TradexLog::clearFile("update_amount.txt");
        TradexLog::addLog("Начало пересчета фильтра наличия товаров");
        $flag = true;
        $obCatalog = new CCatalog;
        $arCatalog = $obCatalog->GetByID(IBLOCK_ID_OFFERS);
        $intSKUProperty = $arCatalog['SKU_PROPERTY_ID'];

        $ID = $count = 0;
        $arRefStore = array();
        $storeID = array();
        $arCityList = array();
        $arPropEnumVal = array();

        $arFilter = array("IBLOCK_ID" => IBLOCK_ID_SHOPS, "ACTIVE" => "Y", ">PROPERTY_REF_CITY" => 0);
        $resStore = CIBlockElement::GetList(array("SORT" => "ASC"), $arFilter, false, false, array("ID", "IBLOCK_ID"));
        while ($obStore = $resStore->GetNextElement()) {
            $arProp = $obStore->GetProperties();
            foreach ($arProp["REF_STORE"]["VALUE_XML_ID"] as $store) {
                $arRefStore[$store] = $arProp["REF_CITY"]["VALUE"];
                $storeID[] = $store;
            }
        }

        $arSelect = Array("ID", "NAME", "IBLOCK_ID", "XML_ID", "PROPERTY_KEY");
        $arFilter = Array("IBLOCK_ID" => IBLOCK_ID_GEO_CITY);
        $obElement = new CIBlockElement;
        $res = $obElement->GetList(Array(), $arFilter, false, false, $arSelect);
        while ($ob = $res->GetNextElement()) {
            $arFields = $ob->GetFields();
            $arCityList[$arFields["ID"]] = "AMOUNT_" . $arFields["PROPERTY_KEY_VALUE"];
        }

        foreach ($arCityList as $strPropCode) {
            $property_enums = CIBlockPropertyEnum::GetList(Array("DEF" => "DESC", "SORT" => "ASC"), Array("IBLOCK_ID" => IBLOCK_ID_CATALOG, "CODE" => $strPropCode));
            while ($enum_fields = $property_enums->GetNext()) {
                $arPropEnumVal[$strPropCode][$enum_fields["VALUE"]] = $enum_fields["ID"];
            }
        }

        while ($flag) {
            $arProductID = array();
            $res = CIBlockElement::GetList(Array("ID" => "asc"), array('IBLOCK_ID' => IBLOCK_ID_CATALOG, ">ID" => $ID), false, array("nTopCount" => $limit), array("ID", "IBLOCK_ID"));
            while ($ob = $res->GetNextElement()) {
                $arItem = $ob->GetFields();
                $arProductID[] = $arItem["ID"];
                $ID = $arItem["ID"];
            }

            $count += count($arProductID);

            if (count($arProductID)) {
                $arOffersID = array();
                $arProduct = array();
                $arSelect = array("ID", "IBLOCK_ID", "PROPERTY_" . $intSKUProperty, "ACTIVE");
                $arFilter = array('IBLOCK_ID' => IBLOCK_ID_OFFERS, "PROPERTY_" . $intSKUProperty => $arProductID);
                $obElement = new CIBlockElement;
                $res = $obElement->GetList(Array("ID" => "asc"), $arFilter, false, false, $arSelect);
                while ($ob = $res->GetNextElement()) {
                    $arItem = $ob->GetFields();
                    $arProduct[$arItem["ID"]] = $arItem["PROPERTY_" . $intSKUProperty . "_VALUE"];
                    $arOffersID[] = $arItem["ID"];
                    $arOffersIDActive[$arItem["ID"]] = $arItem["ACTIVE"];
                }

                $stockList = array();
                $rsStock = CCatalogStoreProduct::GetList(array(), array("PRODUCT_ID" => $arOffersID, "STORE_ID" => $storeID, ">AMOUNT" => 0), false, false, array('PRODUCT_ID', 'ID', 'STORE_ID', 'AMOUNT'));
                while ($arStock = $rsStock->Fetch()) {
                    $propCode = $arCityList[$arRefStore[$arStock["STORE_ID"]]];
                    $stockList[$arProduct[$arStock["PRODUCT_ID"]]][$propCode] = true;
                    //если предложение не активно, активируем
                    if($arOffersIDActive[$arStock["PRODUCT_ID"]] == "N"){
                        //обновляем на активный
                        $ids[$arStock["PRODUCT_ID"]] =  $arStock;
                        TradexLog::addLog("Активируем торговое предложение(есть на складе): " . $arStock["PRODUCT_ID"]."; магазин: ".$arStock["STORE_ID"]."; количество товара на складе: ".$arStock["AMOUNT"], "update_amount.txt");
                        TradexLog::addLog("Активируем торговое предложение(есть на складе): " . $arStock["PRODUCT_ID"]."; магазин: ".$arStock["STORE_ID"]."; количество товара на складе: ".$arStock["AMOUNT"], "update_activity_by_amount.txt");
                        $arOffersIDActive[$arStock["PRODUCT_ID"]] = "Y";
                        $arLoadProductArray = Array("ACTIVE" => "Y");
                        $el = new CIBlockElement;
                        $resultUpdate = $el -> Update($arStock["PRODUCT_ID"], $arLoadProductArray);
                    }
                }

                foreach ($arProductID as $PRODUCT_ID) {
                    foreach ($arPropEnumVal as $propCode => $arValue) {
                        $resPropCode = (!empty($stockList[$PRODUCT_ID][$propCode])) ? "Y" : "N";
                        CIBlockElement::SetPropertyValuesEx($PRODUCT_ID, IBLOCK_ID_CATALOG, array($propCode => $arPropEnumVal[$propCode][$resPropCode]));
                    }
                }
                TradexLog::addLog("Обработано: " . $count, "update_amount.txt");
            } else {
                $flag = false;
            }
        }
        TradexLog::addLog("Конец пересчета фильтра наличия товаров");
    }

    
        public static function changeStatusUpdateMinPriceFunction_OLD($limit = 100)
    {
    //    ini_set('memory_limit', '1G');
//        ini_set('max_execution_time', 600);
        $start = microtime(true);
        $arResult = array();
        $filePath = $_SERVER["DOCUMENT_ROOT"] . "/local/php_interface/tradex/log/min_price_status.txt";
        $res = (array)json_decode(file_get_contents($filePath, true));
        $oldStatus = $res["STATUS"];
        $oldTime = $res["TIME"];
        if ($oldStatus == "WORKING") {
            $last_id = (int)$res["LAST_ID"];
            $arProduct = array();
            $arFilter = array('IBLOCK_ID' => IBLOCK_ID_CATALOG, ">ID" => $last_id);
            $obElement = new CIBlockElement;
            $res = $obElement->GetList(array("ID" => "ASC"), $arFilter, false, array("nTopCount" => $limit), array("ID", "IBLOCK_ID"));
            while ($arItem = $res->GetNext()) {
                $arProduct[] = $arItem["ID"];
                $last_id = $arItem["ID"];
            }
        
            if (count($arProduct) > 0) {
                //записываем что надо подождать
                $arResult = array("STATUS" => "WAIT", "LAST_ID" => $last_id, "TIME" => $oldTime);
                $info = json_encode($arResult, JSON_FORCE_OBJECT);
                file_put_contents($filePath, $info);

                //начинаем работать
                TradexImport::updateMinPrice($arProduct);

                //записываем что делаем следующю итерацию
                if(count($arProduct) < $limit){
                    $arResult = array("STATUS" => "COMPLETE", "LAST_ID" => $last_id);
                }else{
                    $time = microtime(true) - $start;
                    $arResult = array("STATUS" => "WORKING", "LAST_ID" => $last_id, "TIME" => $time);
                }
                $info = json_encode($arResult, JSON_FORCE_OBJECT);
                file_put_contents($filePath, $info);
            } else {
                $obCache = new CPHPCache();
                $obCache->CleanDir();
            }
        }elseif ($oldStatus != "COMPLETE") {
            $last_id = (int)$res["LAST_ID"];
            $arResult = array("STATUS" => "WAIT", "LAST_ID" => $last_id, "TIME" => $oldTime);
            $info = json_encode($arResult, JSON_FORCE_OBJECT);
            file_put_contents($filePath, $info);
        }
    }

    
    
    
    public static function changeStatusUpdateMinPriceFunction($limit = 100)
    {
    
    error_reporting(E_ERROR);
    //    ini_set('memory_limit', '1G');
//        ini_set('max_execution_time', 600);
        $start = microtime(true);
        $arResult = array();
        $filePath = $_SERVER["DOCUMENT_ROOT"] . "/local/php_interface/tradex/log/min_price_status.txt";
        $res = (array)json_decode(file_get_contents($filePath), true);
        $oldStatus = $res["STATUS"];
        $oldTime = $res["TIME"];
       
        $last_id = 1;
       
       do {
           
            $arProduct = array();
            $arFilter = array('IBLOCK_ID' => IBLOCK_ID_CATALOG, ">ID" => $last_id);
            $obElement = new CIBlockElement;
            $res = $obElement->GetList(array("ID" => "ASC"), $arFilter, false, array("nTopCount" => $limit), array("ID", "IBLOCK_ID"));
            while ($arItem = $res->GetNext()) {
                $arProduct[] = $arItem["ID"];
                $last_id = $arItem["ID"];
            }
            
           file_put_contents( $_SERVER["DOCUMENT_ROOT"] . "/local/php_interface/tradex/log/min_price_last.txt",$last_id.PHP_EOL,FILE_APPEND  );
        echo $last_id.PHP_EOL;
        if(!count($arProduct)) {
        
        ini_set('memory_limit','6144M');


$index = \Bitrix\Iblock\PropertyIndex\Manager::createIndexer(1);

$index->startIndex();

$index->continueIndex(0); // создание без ограничения по времени

$index->endIndex();
 $obCache = new CPHPCache();
                $obCache->CleanDir();

       echo PHP_EOL."END MIN PRICE UPDATE".PHP_EOL; 
        break;
        
        }
        
            if (count($arProduct) > 0) {
                //записываем что надо подождать
                $arResult = array("STATUS" => "WAIT", "LAST_ID" => $last_id, "TIME" => $oldTime);
                $info = json_encode($arResult, JSON_FORCE_OBJECT);
                file_put_contents($filePath, $info);

                //начинаем работать
                TradexImport::updateMinPrice($arProduct);

                //записываем что делаем следующю итерацию
                if(count($arProduct) < $limit){
                    $arResult = array("STATUS" => "COMPLETE", "LAST_ID" => $last_id);
                }else{
                    $time = microtime(true) - $start;
                    $arResult = array("STATUS" => "WORKING", "LAST_ID" => $last_id, "TIME" => $time);
                }
                $info = json_encode($arResult, JSON_FORCE_OBJECT);
                file_put_contents($filePath, $info);
            } else {
                $obCache = new CPHPCache();
                $obCache->CleanDir();
            }
        }while(1);
   
   
   
   
   
   }

    public static function skuUpdateFunction($limit = 50)
    {
        $arResult = array();
        $filePath = $_SERVER["DOCUMENT_ROOT"] . "/local/php_interface/tradex/log/sku_update_status.txt";
        $res = (array)json_decode(file_get_contents($filePath, true));
        $oldStatus = $res["STATUS"];
        if ($oldStatus == "WORKING") {
            $last_id = (int)$res["LAST_ID"];
            $arFilter = array('IBLOCK_ID' => IBLOCK_ID_OFFERS, "ACTIVE" => "Y", ">ID" => $last_id);
            $obElement = new CIBlockElement;
            $res = $obElement->GetList(array("ID" => "ASC"), $arFilter, false, array("nTopCount" => $limit), array("ID", "IBLOCK_ID"));
            while ($arItem = $res->GetNext()) {
                $idArray[] = $arItem["ID"];
            }
            foreach($idArray as $idObject){
                $arLoadProductArray = Array(
                    "ACTIVE"         => "Y",            // активен
                );
                $last_id = $idObject;
                $res = $obElement->Update($last_id, $arLoadProductArray);
            }
            TradexLog::addLog(count($idArray), "add_to_element_products_property.txt");
            if (count($idArray) > 0) {
                file_put_contents($filePath, "");
                $arResult = array("STATUS" => "WORKING", "LAST_ID" => $last_id);
            }
        }
        $info = json_encode($arResult, JSON_FORCE_OBJECT);
        file_put_contents($filePath, $info);
    }

    public static function setSkuUpdateFunction()
    {
        $arResult = array(
            "STATUS" => "WORKING",
            "LAST_ID" => 0
        );
        $filePath = $_SERVER["DOCUMENT_ROOT"] . "/local/php_interface/tradex/log/sku_update_status.txt";
        $info = json_encode($arResult, JSON_FORCE_OBJECT);
        file_put_contents($filePath, $info);
    }

    public static function setStatusUpdateMinPriceFunction()
    {
        $arResult = array(
            "STATUS" => "WORKING",
            "LAST_ID" => 0
        );
        $filePath = $_SERVER["DOCUMENT_ROOT"] . "/local/php_interface/tradex/log/min_price_status.txt";
        $info = json_encode($arResult, JSON_FORCE_OBJECT);
        file_put_contents($filePath, $info);
    }

    public static function deactivationProducts($status)
    {
        TradexLog::addLog("Начало деактивации товаров не содержащихся в файле good", "deactivation_products.txt");

        $arResult = TradexGeneral::getArrayByXml("good", $status);

        foreach ($arResult["good"] as $object) {
            $arArticul[] = $object["articul"];
        }

        $obEl = new CIBlockElement();
        $arSelect = Array("ID", "PROPERTY_ARTICUL", "ACTIVE");
        $arFilter = Array("IBLOCK_ID" => IBLOCK_ID_CATALOG,"!PROPERTY_ARTICUL" => $arArticul, "ACTIVE" => "Y");
        $res = $obEl->GetList(Array(), $arFilter, false, false, $arSelect);
        while($ob = $res->GetNext())
        {
            $boolResult = $obEl->Update($ob["ID"],array("ACTIVE" => "N"));
            TradexLog::addLog($ob["ID"]." ".$ob["PROPERTY_ARTICUL_VALUE"]." Результат обновления:".$boolResult, "deactivation_products.txt");
        }

        TradexLog::addLog("Конец деактивации товаров не содержащихся в файле good", "deactivation_products.txt");
    }
    
       public static function activationProducts($status)
    {
    
  
        TradexLog::addLog("Начало активации товаров не содержащихся в файле good", "activation_products.txt");

        $arResult = TradexGeneral::getArrayByXml("good", $status);
var_dump(sizeof($arResult["good"]));


        foreach ($arResult["good"] as $k=> $object) {
        
      
           // $arArticul[] = $object["articul"];
        
echo $object["articul"].PHP_EOL;
        
        $obEl = new CIBlockElement();
        $arSelect = Array("ID", "PROPERTY_ARTICUL", "ACTIVE");
        $arFilter = Array("IBLOCK_ID" => IBLOCK_ID_CATALOG,"PROPERTY_ARTICUL" => $object["articul"]);
        $res = $obEl->GetList(Array(), $arFilter, false, false, $arSelect);
      //  var_dump(sizeof($arArticul));
        while($ob = $res->GetNext())
        {
  
        echo $ob["ID"].PHP_EOL;
            $boolResult = $obEl->Update($ob["ID"],array("ACTIVE" => "Y"));
            TradexLog::addLog($ob["ID"]." ".$ob["PROPERTY_ARTICUL_VALUE"]." Результат обновления:".$boolResult, "activation_products.txt");
       ob_flush();
       }
       
       
        
}
        TradexLog::addLog("Конец активации товаров не содержащихся в файле good", "deactivation_products.txt");
    }
    
    
}
