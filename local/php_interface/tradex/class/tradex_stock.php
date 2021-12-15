<?

Trait TradexStock
{
    public static function stock($status, $limit = false)
    {
        $stockList = $impRes = array();
        TradexLog::addLog("Начало импорта файла stock (" . $status . ")");
        $start = microtime(true);
        TradexLog::clearFile("stock.txt");
        TradexGeneral::updatePropAmount();
        $arStore = TradexGeneral::getStoreList();

        $limit = ($limit) ? $limit : 100;

        switch ($status) {
            case 1:
                $pathXML = TradexGeneral::getFileInfo("stock", true);
                $arArticul = TradexImport::getStockArticul($pathXML);

                $pathXML = TradexGeneral::getFileInfo("stock", false);
                $arOffersPartial = TradexImport::getStockArticul($pathXML);

                foreach ($arOffersPartial as $offers) {
                    if (!in_array($offers, $arArticul)) {
                        $arArticul[] = $offers;
                    }
                }
                unset($arOffersPartial);
                break;
            case 2:
                $pathXML = TradexGeneral::getFileInfo("stock", true);
                $arArticul = TradexImport::getStockArticul($pathXML);
                break;
            case 3:
                $pathXML = TradexGeneral::getFileInfo("stock", false);
                $arArticul = TradexImport::getStockArticul($pathXML);
                break;
            default:
                return "ERROR";
        }

        $count = 0;
        $countArticul = count($arArticul);
        $arCurArticul = array();
        foreach ($arArticul as $key => $articul) {
            if ($count + 1 == $limit || $key + 1 == $countArticul) {
                $arCurArticul[] = $articul;
                $count++;
                $arList = TradexImport::getAmountByArticul($status, $arCurArticul);
                $arPlu = array();
                foreach ($arList as $plu => $store) {
                    $arPlu[] = $plu;
                }
                $arOffersID = TradexImport::getOfferList($arPlu);
                $rsStock = CCatalogStoreProduct::GetList(array(), array("PRODUCT_ID" => $arOffersID), false, false, array('PRODUCT_ID', 'ID', 'STORE_ID', 'AMOUNT'));
                while ($arStock = $rsStock->Fetch()) {
                    $stockList[$arStock["PRODUCT_ID"]][$arStock["STORE_ID"]] = $arStock["ID"];
                }
                
                $stockList1= $stockList;
                
                unset($rsStock);
                foreach ($arList as $plu => $ofStore) {
                    foreach ($ofStore as $keyStore => $quantity) {
                        if (empty($arStore[$keyStore])) {
                            TradexLog::addLog("Файл stock, XML_ID товара- " . $plu . ", количество: " . $quantity . ", XML_ID магазина: " . $keyStore, "error.txt");
                            continue;
                        }
                        $arFields = array(
                            "PRODUCT_ID" => $arOffersID[$plu],
                            "AMOUNT" => $quantity,
                            "STORE_ID" => $arStore[$keyStore]
                        );
                        $ID = $stockList[$arOffersID[$plu]][$arStore[$keyStore]];
                      
                        TradexGeneral::importStock($ID, $arFields, $plu);
                          unset($stockList1[$arOffersID[$plu]][$arStore[$keyStore]]);
                    }
                }
                
                foreach($stockList1 as $kOfferId=> $oIds){
                
                foreach($oIds as $kStore=>$vID){
                
                  $arFields = array(
                            "PRODUCT_ID" => (int)$kOfferId,
                            "AMOUNT" => 0,
                            "STORE_ID" => (int)$kStore
                        );
                        $ID = $vID;
                         TradexGeneral::importStock($ID, $arFields, $plu);
                
                }
                
                }
                
                
                //TradexImport::updateAmount($arArticul); - для фильтра наличия товаров идет отдельный пересчет
                $count = 0;
                $arCurArticul = $stockList = array();
                $intKey = $key + 1;
                TradexLog::addLog("Обработано: " . $intKey . "; Всего:" . $countArticul . ";", "stock.txt");
            } else {
                $arCurArticul[] = $articul;
                $count++;
            }
        }

        TradexHash::addHash("stock", $status);
        $end = microtime(true) - $start;
        TradexLog::addLog("Время выполнения " . $end . " : ");
        TradexLog::addLog("Конец импорта файла stock");
    }

    public static function getStockArticul($pathXML)
    {
        $arResult = array();
        $f = fopen($pathXML, "r");
        while (($string = fgets($f))) {
            preg_match_all("/\<([a-z0-9]+)\>([^<>]+)*\<\/[a-z0-9]+\>/", $string, $output_array);
            if (!empty($output_array[1])) {
                $elem = array();
                foreach ($output_array[1] as $key => $title) {
                    $elem[$title] = $output_array[2][$key];
                }
                if (!in_array($elem["articul"], $arResult)) {
                    $arResult[] = $elem["articul"];
                }
            }
        }
        fclose($f);
        return $arResult;
    }

    public static function getAmountByArticul($status, $arArticul)
    {
        $arResult = array();
        $pathXML = TradexGeneral::getFileInfo("stock", true);

        $f = fopen($pathXML, "r");
        while (($string = fgets($f))) {
            preg_match_all("/\<([a-z0-9]+)\>([^<>]+)*\<\/[a-z0-9]+\>/", $string, $output_array);
            if (!empty($output_array[1])) {
                $elem = array();
                foreach ($output_array[1] as $key => $title) {
                    $elem[$title] = $output_array[2][$key];
                }
                if (in_array($elem["articul"], $arArticul)) {
                    $arResult[$elem["plu"]][$elem["objectcode"]] = $elem["quantity"];
                }
            }
        }
        fclose($f);
        if ($status != 2) {
            $pathXML = TradexGeneral::getFileInfo("stock", false);
            $f = fopen($pathXML, "r");
            while (($string = fgets($f))) {
                preg_match_all("/\<([a-z0-9]+)\>([^<>]+)*\<\/[a-z0-9]+\>/", $string, $output_array);
                if (!empty($output_array[1])) {
                    $elem = array();
                    foreach ($output_array[1] as $key => $title) {
                        $elem[$title] = $output_array[2][$key];
                    }

                    if (in_array($elem["articul"], $arArticul)) {
                        $arResult[$elem["plu"]][$elem["objectcode"]] = $elem["quantity"];
                    }/*else{
                    
                     $arResult[$elem["plu"]][$elem["objectcode"]] = 0 ;
                    }*/
                }
            }
            fclose($f);
        }

        return $arResult;
    }

    protected function importStock($ID, $arFields, $plu)
    {
        $action = (!empty($ID)) ? "UPDATE" : "ADD";
        $res = (!empty($ID)) ? CCatalogStoreProduct::Update($ID, $arFields) : CCatalogStoreProduct::Add($arFields);
        if (!$res) {
            TradexLog::addLog("Файл stock, XML_ID товара- " . $plu . ", количество: " . $arFields["AMOUNT"] . ", ID магазина: " . $arFields["STORE_ID"] . ", действие: " . $action, "error.txt");
        } else {
            $ID = (!empty($ID)) ? $ID : $res;
            TradexLog::addLog("Файл stock, XML_ID товара- " . $plu . ", количество: " . $arFields["AMOUNT"] . ", ID магазина: " . $arFields["STORE_ID"] . ", действие: " . $action, "stock.txt");
        }
        return $ID;
    }

    public static function getStoreList()
    {
        $res = array();
        $list = CCatalogStore::GetList(
            array(),
            array(),
            false,
            false,
            array("XML_ID", "ID")
        );

        while ($arStore = $list->GetNext()) {
            $res[$arStore["XML_ID"]] = $arStore["ID"];
        }
        return $res;
    }

    public static function getObjectByCategory()
    {
        $resPriceType = array(
            101, 301, 401, 501, 901
        );
        $status = TradexHash::hashGetStatus("object");
        $resObject = TradexGeneral::getArrayByXml("object", $status);
        $arResult = $resObjectList = array();
        foreach ($resObject["object"] as $arObject) {
            $arObject = (array)$arObject;

            if (($arObject["clientType"] == 13 || $arObject["clientType"] == 14) && !empty($arObject["city"])) {
                $resObjectList[$arObject["city"]][$arObject["clientType"]][] = array("XML_ID" => $arObject["referenceNo"], "NAME" => explode(" ", $arObject["name"]), "CATEGORY" => (string)$arObject["сategory3"]);
            }
        }

        foreach ($resObjectList as $listCity) {
            foreach ($listCity["13"] as $arStore) {
                foreach ($listCity["14"] as $arObject) {
                    if ($arStore["CATEGORY"] == $arObject["CATEGORY"]) {
                        if (in_array($arStore["XML_ID"], $resPriceType)) continue;
                        $check = true;
                        foreach ($arStore["NAME"] as $strName) {
                            if (!in_array($strName, $arObject["NAME"])) $check = false;
                        }
                        if ($check) $arResult[$arObject["XML_ID"]] = $arStore["XML_ID"];
                    }
                }
            }
        }
        return $arResult;
    }

    public function updatePropAmount()
    {
        $arCityList = TradexGeneral::getCityList();
        $arPropAmount = $resPropAmount = $res = array();
        foreach ($arCityList as $arCity) {
            $arPropAmount[$arCity["NAME"]] = "AMOUNT_" . $arCity["CODE"];
        }
        if (!empty($arPropAmount)) {
            $properties = CIBlockProperty::GetList(Array("sort" => "asc", "name" => "asc"), Array("IBLOCK_ID" => IBLOCK_ID_CATALOG, "CODE" => "AMOUNT_%"));;
            while ($prop_fields = $properties->GetNext()) {
                $resPropAmount[$prop_fields["CODE"]] = $prop_fields["ID"];
            }
        }

        foreach ($arPropAmount as $name => $code) {
            $arFields = Array(
                "NAME" => "Наличее товара в " . $name,
                "ACTIVE" => "Y",
                "SORT" => "100",
                "CODE" => $code,
                "PROPERTY_TYPE" => "L",
                "SMART_FILTER" => "Y",
                "IBLOCK_ID" => IBLOCK_ID_CATALOG,
                "VALUES" => array(
                    array(
                        "VALUE" => "Y",
                        "DEF" => "N",
                        "SORT" => "100",
                        "XML_ID" => "Y"
                    ),
                    array(
                        "VALUE" => "N",
                        "DEF" => "Y",
                        "SORT" => "200",
                        "XML_ID" => "N"
                    )
                )
            );
            $ID = $resPropAmount[$code];
            $ibp = new CIBlockProperty;
            $res[] = ($ID) ? $ibp->Update($ID, $arFields) : $ibp->Add($arFields);
        }
        return $res;
    }

    public static function updateAmount($arArticul)
    {
        $arRefStore = array();
        $storeID = array();
        $arCityList = array();
        $arPropEnumVal = array();
        $arProductID = array();

        $arSelect = Array("ID", "IBLOCK_ID", "PROPERTY_ARTICUL");
        $arFilter = array('IBLOCK_ID' => IBLOCK_ID_CATALOG, "PROPERTY_ARTICUL" => $arArticul);
        $obElement = new CIBlockElement;
        $res = $obElement->GetList(Array(), $arFilter, false, false, $arSelect);
        while ($ob = $res->GetNextElement()) {
            $arItem = $ob->GetFields();
            $arProductID[] = $arItem["ID"];
        }

        if (empty($arProductID)) return "ERROR";

        $obCatalog = new CCatalog;
        $arCatalog = $obCatalog->GetByID(IBLOCK_ID_OFFERS);
        $intSKUProperty = $arCatalog['SKU_PROPERTY_ID'];

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

        $arSelect = Array("ID", "IBLOCK_ID", "XML_ID");
        $arFilter = array('IBLOCK_ID' => IBLOCK_ID_CATALOG, "ID" => $arProductID);
        $obElement = new CIBlockElement;
        $res = $obElement->GetList(Array("ID" => "asc"), $arFilter, false, false, $arSelect);
        while ($ob = $res->GetNextElement()) {
            $arItem = $ob->GetFields();
            $arProductID[] = $arItem["ID"];
        }

        if (count($arProductID)) {
            $arOffersID = array();
            $arProduct = array();
            $arSelect = array("ID", "IBLOCK_ID", "PROPERTY_" . $intSKUProperty);
            $arFilter = array('IBLOCK_ID' => IBLOCK_ID_OFFERS, "PROPERTY_" . $intSKUProperty => $arProductID);
            $obElement = new CIBlockElement;
            $res = $obElement->GetList(Array("ID" => "asc"), $arFilter, false, false, $arSelect);
            while ($ob = $res->GetNextElement()) {
                $arItem = $ob->GetFields();
                $arProduct[$arItem["ID"]] = $arItem["PROPERTY_" . $intSKUProperty . "_VALUE"];
                $arOffersID[] = $arItem["ID"];
            }

            $stockList = array();
            $rsStock = CCatalogStoreProduct::GetList(array(), array("PRODUCT_ID" => $arOffersID, "STORE_ID" => $storeID, ">AMOUNT" => 0), false, false, array('PRODUCT_ID', 'ID', 'STORE_ID', 'AMOUNT'));
            while ($arStock = $rsStock->Fetch()) {
                $propCode = $arCityList[$arRefStore[$arStock["STORE_ID"]]];
                $stockList[$arProduct[$arStock["PRODUCT_ID"]]][$propCode] = true;
            }

            foreach ($arProductID as $PRODUCT_ID) {
                foreach ($arPropEnumVal as $propCode => $arValue) {
                    $resPropCode = (!empty($stockList[$PRODUCT_ID][$propCode])) ? "Y" : "N";
                    CIBlockElement::SetPropertyValuesEx($PRODUCT_ID, IBLOCK_ID_CATALOG, array($propCode => $arPropEnumVal[$propCode][$resPropCode]));
                }
            }
        }
        return "Done";
    }
}