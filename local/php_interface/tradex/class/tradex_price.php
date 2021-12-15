<?

Trait TradexPrice
{
    public static function price($status, $limit = 25, $ln = 0)
    {
#        ini_set('memory_limit', '5G');
        TradexLog::addLog("Начало импорта файла price (" . $status . ")");
        $start = microtime(true);
        TradexLog::clearFile("offers.txt");
        TradexLog::clearFile("price.txt");
        $full = ($status == 2) ? true : false;
        TradexGeneral::updatePropMinPrice();

        $pathXML = TradexGeneral::getFileInfo("price", $full);
        $fileLength = TradexImport::getFileLength($pathXML);
        while ($arXML = TradexImport::getArrayByString($pathXML, $ln, $limit)) {

            //-----------формируем массив для импорта
            $arOffers = TradexImport::getOffersInfo($arXML);

            //-----------импорт торговых предложений
            $arOffers = TradexImport::importOffers($arOffers);
            //-----------импорт цен
            TradexImport::importPrice($arOffers);
            unset($arOffers);
            $ln += $limit;
            TradexLog::addLog("Текущая строка: " . $ln . ", Всего: " . $fileLength, "offers.txt");
        }

        $start = microtime(true) - $start;
        TradexLog::addLog("Время выполнения :" . $start);
        TradexLog::addLog("Конец импорта файла price");
    }

    public static function getListPriceProductId($elemListID)
    {
        $arResult = array();
        $class = new CPrice;
        $res = $class->GetList(
            array(),
            array("PRODUCT_ID" => $elemListID)
        );
        while ($ar = $res->Fetch()) {
            $arResult[$ar["PRODUCT_ID"]][$ar["CATALOG_GROUP_ID"]] = $ar["ID"];
        }
        return $arResult;
    }

    public static function updatePropMinPrice()
    {
        $arCityList = TradexGeneral::getCityList();
        $arPropMinPrice = $resPropMinPrice = $res = array();
        foreach ($arCityList as $arCity) {
            $arPropMinPrice[$arCity["NAME"]] = "MIN_PRICE_" . $arCity["CODE"];
        }
        if (!empty($arPropMinPrice)) {
            $properties = CIBlockProperty::GetList(Array("sort" => "asc", "name" => "asc"), Array("IBLOCK_ID" => IBLOCK_ID_CATALOG, "CODE" => "MIN_PRICE_%"));;
            while ($prop_fields = $properties->GetNext()) {
                $resPropMinPrice[$prop_fields["CODE"]] = $prop_fields["ID"];
            }
        }

        foreach ($arPropMinPrice as $name => $code) {
            $arFields = Array(
                "NAME" => "Минимальная цена " . $name,
                "ACTIVE" => "Y",
                "SORT" => "100",
                "CODE" => $code,
                "PROPERTY_TYPE" => "N",
                "SMART_FILTER" => "Y",
                "IBLOCK_ID" => IBLOCK_ID_CATALOG
            );
            $ID = $resPropMinPrice[$code];
            $ibp = new CIBlockProperty;
            $res[] = ($ID) ? $ibp->Update($ID, $arFields) : $ibp->Add($arFields);
        }
        return $res;
    }

    public static function updateMinPrice($arProductID = array())
    {
        if (empty($arProductID)) return false;
        $arResult = array();
        $obCatalog = new CCatalog;
        $arCatalog = $obCatalog->GetByID(IBLOCK_ID_OFFERS);
        $intSKUProperty = $arCatalog['SKU_PROPERTY_ID'];
        $arSelect = Array("ID", "IBLOCK_ID");
        $arPriceCode = array();
        $class = new CCatalogGroup;
        $dbPriceType = $class->GetList(
            array(),
            array(),
            false,
            false,
            array("ID", "NAME")
        );
        while ($arPriceType = $dbPriceType->Fetch()) {
            $arPriceCode[] = $arPriceType["NAME"];
            $arSelect[] = "PROPERTY_MIN_PRICE_" . strtoupper($arPriceType["NAME"]);
        }

        $minID = min($arProductID);
        $maxID = max($arProductID);
        $arFilter = array('IBLOCK_ID' => IBLOCK_ID_CATALOG, "ID" => $arProductID);
        $obElement = new CIBlockElement;
        $res = $obElement->GetList(array("ID" => "ASC"), $arFilter, false, false, $arSelect);
        $arPriceFields = array();
        while ($arItem = $res->GetNext()) {
            $arPriceFields[$arItem["ID"]] = $arItem;
        }

        $arPriceProducts = TradexImport::updateMinPriceByID($arProductID, $arPriceCode, $intSKUProperty);

        foreach ($arPriceProducts as $PRODUCT_ID => $arPrice) {
            $arFields = array();
            foreach ($arPrice as $priceCode => $minPrice) {
                $oldPrice = $arPriceFields[$PRODUCT_ID]["PROPERTY_MIN_PRICE_" . mb_strtoupper($priceCode) . "_VALUE"];
                if($minPrice > 0 && (int)$oldPrice != $minPrice){
                    $arFields["MIN_PRICE_" . $priceCode] = $minPrice;
                }
            }
            if (!empty($arFields)) {
                $arResult[$PRODUCT_ID] = $arFields;
                CIBlockElement::SetPropertyValuesEx($PRODUCT_ID, IBLOCK_ID_CATALOG, $arFields);
            }
        }

        TradexLog::addLog("Установлена минимальная цена для ID в промежутке с " . $minID . " по " . $maxID . ", всего записей обновлено " . count($arProductID), "min_price.txt");
        return true;
    }

    public static function updateMinPriceByID($arProductID, $arPriceCode, $intSKUProperty)
    {
        $arResult = array();
        $arPrices = CIBlockPriceTools::GetCatalogPrices(IBLOCK_ID_CATALOG, $arPriceCode);

        //получаем ids
        $arSelect = Array("ID","PROPERTY_CML2_LINK");
        $arFilter = Array("IBLOCK_ID" => IntVal(IBLOCK_ID_OFFERS), "ACTIVE" => "Y", "PROPERTY_CML2_LINK" => $arProductID);
        $res = CIBlockElement::GetList(Array(), $arFilter, false, false, $arSelect);
        while($ob = $res->GetNext())
        {
            $ids[] = $ob["ID"];
            // массив торговых предложений с списком id товаров
            $idsOfferProduct[$ob["ID"]] = $ob["PROPERTY_CML2_LINK_VALUE"];
            // обратный массив 
            $idsProductOffer[$ob["PROPERTY_CML2_LINK_VALUE"]] = $ob["ID"];
        }

        //все города
        $arFilter = array(
            "IBLOCK_ID" => IBLOCK_ID_GEO_CITY,
            "ACTIVE" => "Y",
        );
        $res = \CIBlockElement::GetList(array(), $arFilter, false, false, array('ID', 'PROPERTY_KEY'));
        if ($ob = $res->GetNext()) {
            $cities[] = $ob['PROPERTY_KEY_VALUE'];
        }

        // массив товаров, которые в наличии
        $arrayProductHaveCount = array();

        foreach($cities as $keyCity){
            //получение по торговым предложениям количества
            $arProductNumberOfStores = Olimp\Catalog::getCountStoreWithProduct($ids, $keyCity);
            foreach($arProductNumberOfStores as $key => $count){
                if($count > 0){
                    $offerWithProduct[] = $key;
                    $arrayProductHaveCount[$idsOfferProduct[$key]] = $idsOfferProduct[$key];
                }
            }
        }

        // перебираем массив всех товаров, если его нет в предыдущем массиве, то записываем ему хоть одно торговое предложение
        foreach($idsProductOffer as $product => $offerId){
            if(!$arrayProductHaveCount[$product]){
                $offerWithProduct[] = $offerId;
            }
        }

        $offersFilter = array(
            'IBLOCK_ID' => IBLOCK_ID_CATALOG,
            'HIDE_NOT_AVAILABLE' => 'N'
        );

		//echo "\n".$arProductID." ".count($offerWithProduct)."\n";
		if(count($offerWithProduct) > 0){
			$arOffers = Olimp\CatalogWithOfferWork::getOffersArrayFilterOffersId(
				$offersFilter,
				$offerWithProduct,
				$arProductID,
				array('id' => 'asc'),
				array(),
				array(),
				0,
				$arPrices,
				true
			);
		}else{
			return array();
		}

        //название городов
        $arFilter = array("IBLOCK_CODE" => "cities_presence", "ACTIVE" => "Y");
        $resCity = CIBlockElement::GetList(array("SORT" => "ASC"), $arFilter, false, false, array("ID", "PROPERTY_key"));
        while ($obCity = $resCity->GetNext()) {
            $city[$obCity["ID"]] = $obCity["PROPERTY_KEY_VALUE"];
        }

        $arFilter = array("IBLOCK_ID" => IBLOCK_ID_SHOPS, "ACTIVE" => "Y", ">PROPERTY_REF_CITY" => 0);
        $resStore = CIBlockElement::GetList(array("SORT" => "ASC"), $arFilter, false, false, array("ID", "IBLOCK_ID"));
        while ($obStore = $resStore->GetNextElement()) {
            $arProp = $obStore->GetProperties();
            foreach ($arProp["REF_STORE"]["VALUE_XML_ID"] as $store) {
                $arRefStore[$store]["CITY"]["ID"] = $arProp["REF_CITY"]["VALUE"];
                $arRefStore[$store]["CITY"]["CODE"] = $city[$arRefStore[$store]["CITY"]["ID"]];
            }
        }

        //для выбора только тех торговых предложений, которые есть на складах
        foreach ($arOffers as $offer) {
            $arOfferIds[] = $offer['ID'];
        };

        $rsStock = CCatalogStoreProduct::GetList(array(), array("PRODUCT_ID" => $arOfferIds, ">AMOUNT" => 0), false, false, array('PRODUCT_ID', 'ID', 'STORE_ID', 'AMOUNT'));
        while ($arStock = $rsStock->Fetch()) {
            //PRODUCT_ID - это id торгового предложения
            $offersAvailible[$arStock['PRODUCT_ID']][$arRefStore[$arStock['STORE_ID']]["CITY"]["CODE"]] = $arStock['AMOUNT'];
        }
//         var_dump(count($offersAvailible));
//         exit;

        if (!empty($arOffers)) {
            $arPriceRes = array();
            $arPriceResZero = array();
            foreach ($arOffers as $offer) {
                $cityAvailibleInOffer = array_keys($offersAvailible[$offer['ID']]);
                foreach ($offer["PRICES"] as $key => $price) {
                    if(in_array($key,$cityAvailibleInOffer)){
                        $arPriceRes[$offer["PROPERTY_" . $intSKUProperty . "_VALUE"]][$key][] = round(strval($price["DISCOUNT_VALUE"]));
                    }
                    //для выставления цены магазинам без товаров
                    $arPriceResZero[$offer["PROPERTY_" . $intSKUProperty . "_VALUE"]][$key][] = round(strval($price["DISCOUNT_VALUE"]));
                }
            }

            $arResult = array();
            foreach ($arPriceRes as $key => $arItem) {
                foreach ($arItem as $priceCode => $arPrice) {
                    $arResult[$key][$priceCode] = min($arPrice);
                }
            }

            //для выставления цены магазинам без товаров
            foreach ($arPriceResZero as $key => $arItem) {
                foreach ($arItem as $priceCode => $arPrice) {
                    if(!$arResult[$key][$priceCode])
                        $arResult[$key][$priceCode] = min($arPrice);
                }
            }
        }

        return $arResult;
    }

    public static function importPrice($arList)
    {
        $elemListID = array();
        $resListObject = array();
        $arListPriceOffers = array();
        $arProductID = array();
        foreach ($arList as $elem) {
            $elemListID[] = $elem["offer_id"];
        }

        $class = new CPrice;
        $res = $class->GetList(
            array(),
            array("PRODUCT_ID" => $elemListID),
            false,
            false,
            array("CATALOG_GROUP_ID", "ID", "PRICE", "PRODUCT_ID")
        );
        while ($ar = $res->Fetch()) {
            $arListPriceOffers[$ar["PRODUCT_ID"]][$ar["CATALOG_GROUP_ID"]] = array(
                "ID" => $ar["ID"],
                "PRICE" => $ar["PRICE"]
            );
        }

        $arListPriceType = TradexGeneral::getListPriceTypeID();
        $arListObject = TradexGeneral::getPriceTypeByObject();

        foreach ($arListObject as $arObject) {
            $resListObject[$arObject["PRICE_TYPE"]][] = $arListPriceType[$arObject["CODE"]];
        }

        foreach ($arList as $elem) {
            $PRODUCT_ID = $elem["offer_id"];
            if (empty($PRODUCT_ID)) continue;
            $arFields = array(
                "EXTRA_ID" => false,
                "PRODUCT_ID" => $PRODUCT_ID,
                "PRICE" => DoubleVal($elem["retailprice"]),
                "CURRENCY" => "RUB",
                "QUANTITY_FROM" => false,
                "QUANTITY_TO" => false,
            );

            $PRICE_TYPE = $elem["pricecode"];
            if (!empty($resListObject[$PRICE_TYPE])) {
                foreach ($resListObject[$PRICE_TYPE] as $PRICE_TYPE_CITY_ID) {
                    $arFields["CATALOG_GROUP_ID"] = $PRICE_TYPE_CITY_ID;
                    $ID = $arListPriceOffers[$PRODUCT_ID][$PRICE_TYPE_CITY_ID]["ID"];
                    if ((int)$arListPriceOffers[$PRODUCT_ID][$PRICE_TYPE_CITY_ID]["PRICE"] == (int)$elem["retailprice"]) continue;
                    $arProductID[] = $PRODUCT_ID;
                    $action = ($ID) ? "UPDATE" : "ADD";
                    $class = new CPrice;
                    $ID = ($ID) ? $class->Update($ID, $arFields) : $class->Add($arFields);
                    TradexLog::addLog("Файл price, XML_ID - " . $elem["plu"] . ", PRICE - " . $arFields["PRICE"] . ", ID - " . $ID . ", Действие: " . $action, "price.txt");
                }
            }

/*            $arFields = array(
                "ID" => $PRODUCT_ID,
                "VAT_INCLUDED" => "N",
            );
            $class = new CCatalogProduct;
            $class->Add($arFields);*/


            if ((int)$elem["retailprice"] == 0) {
                $arFields = array("ID" => $PRODUCT_ID,
                    "ACTIVE" => "N",
                );
                $class = new CIBlockElement();
                $class->update($PRODUCT_ID, $arFields);
            }
        }
    }

    public static function importOffers($arOffers)
    {
        $obCatalog = new CCatalog;
        $arCatalog = $obCatalog->GetByID(IBLOCK_ID_OFFERS);
        $intSKUProperty = $arCatalog['SKU_PROPERTY_ID'];

        foreach ($arOffers as $key => $arElement) {
            $OFFER_ID = $arElement["offer_id"];
            $articul = $arElement["articul"];
            $color = trim($arElement["color"]);
            $size = trim($arElement["size"]);
            $old_size = trim($arElement["old_size"]);
            $PRODUCT_ID = $arElement["product_id"];
            $PRODUCT_NAME = $arElement["product_name"];

            $XML_ID = $arElement["plu"];
            $CODE = ($color) ? $PRODUCT_NAME . "_" . $articul . "_" . $color : $PRODUCT_NAME . "_" . $articul;

            if ($size) $CODE .= "_" . $size;

            $arFields = array(
                "NAME" => $PRODUCT_NAME,
                "CODE" => TradexImport::getCode($CODE),
                "XML_ID" => $XML_ID,
                "IBLOCK_ID" => IBLOCK_ID_OFFERS,
            );

            $OFFER_ID = TradexImport::importElemPrice($OFFER_ID, $arFields, "price");

            if ($OFFER_ID) {
                $arFields = array();
                if ($old_size != $size) {
                    $arFields["SIZE"] = $size;
                }
                if ($arElement["link"] != $PRODUCT_ID) {
                    $arFields[$intSKUProperty] = $PRODUCT_ID;
                    $arOffers[$key]["product_id"] = $PRODUCT_ID;
                }
                if (!empty($arFields)) {
                    CIBlockElement::SetPropertyValuesEx($OFFER_ID, IBLOCK_ID_OFFERS, $arFields);
                }
            }
            $arOffers[$key]["offer_id"] = $OFFER_ID;
        }
        return $arOffers;
    }

    public static function importElemPrice($ID, $arFields, $file = "good")
    {
        $obElement = new CIBlockElement;

        if(!empty($ID)){
            $db_element = CIBlockElement::GetList(array(), array("ID"=>$ID, "SHOW_HISTORY"=>"Y"), false, false,
            array(
                    "ID",
                    "IBLOCK_ID",
                    "NAME",
                    "CODE",
                    "XML_ID",
                )
            );
            if(!($ar_element = $db_element->Fetch()))
                return false;

            if(($ar_element["IBLOCK_ID"]!=$arFields["IBLOCK_ID"])||($ar_element["NAME"]!=$arFields["NAME"])||($ar_element["CODE"]!=$arFields["CODE"])||($ar_element["XML_ID"]!=$arFields["XML_ID"])){
                TradexLog::addLog("Не равны, update","price.txt");
                $res = $obElement->Update($ID, $arFields);
            }else{
                //TradexLog::addLog("Равны","price.txt");
            }
        }else{
            $res = $obElement->Add($arFields);
            if($res){
                //добавление к элементу инфоблока свойств товара
                CCatalogProduct::Add(array("ID" => $res));
                //обновление товар
                $arLoadProductArray = Array(
                    "ACTIVE"         => "Y",            // активен
                );
                $result = $obElement->Update($res, $arLoadProductArray);
            }
        }
        if (!$res) {
            TradexLog::addLog("Файл good, XML_ID - " . $arFields["XML_ID"] . ", IBLOCK_ID - " . $arFields["IBLOCK_ID"] . ", текст ошибки: " . $obElement->LAST_ERROR, "error.txt");
        } else {

            $action = (!empty($ID)) ? "UPDATE" : "ADD";
            $ID = (!empty($ID)) ? $ID : $res;
            TradexLog::addLog("Файл ".$file.", XML_ID - " . $arFields["XML_ID"] . ", IBLOCK_ID - " . $arFields["IBLOCK_ID"] . ", ID - " . $ID . ", Действие: " . $action, "good.txt");
        }
        return (!empty($ID)) ? $ID : $res;
    }

    public static function getOffersInfo($arResult)
    {
        $arGood = array();
        $arArticul = array();
        $arOffers = array();
        $arPlu = array();
        $obCatalog = new CCatalog;
        $arCatalog = $obCatalog->GetByID(IBLOCK_ID_OFFERS);
        $intSKUProperty = $arCatalog['SKU_PROPERTY_ID'];

        foreach ($arResult as $key => $arItem) {
            $XML_ID = TradexImport::getCode((trim($arItem["color"])) ? trim($arItem["articul"]) . "_" . trim($arItem["color"]) : trim($arItem["articul"]));
            $arResult[$key]["product_code"] = $XML_ID;
            $arArticul[] = $arItem["articul"];
            $arPlu[] = $arItem["plu"];
        }

        if (!empty($arArticul)) {
            $objElement = new CIBlockElement();
            $res = $objElement->GetList(
                array("ID" => "ASC"),
                array('IBLOCK_ID' => IBLOCK_ID_CATALOG, "PROPERTY_ARTICUL" => $arArticul),
                false,
                false,
                array("ID", "IBLOCK_ID", "PROPERTY_ARTICUL", "PROPERTY_COLOR", "NAME", "XML_ID")
            );
            while ($ob = $res->GetNextElement()) {
                $arItem = $ob->GetFields();
                $arGood[$arItem["XML_ID"]] = array(
                    "ID" => $arItem["ID"],
                    "NAME" => $arItem["NAME"],
                );
            }
            unset($res);

            $arSelect = Array("ID", "IBLOCK_ID", "XML_ID", "NAME", "PROPERTY_SIZE", "PROPERTY_" . $intSKUProperty);
            $arFilter = array('IBLOCK_ID' => IBLOCK_ID_OFFERS, "XML_ID" => $arPlu);
            $obElement = new CIBlockElement;
            $res = $obElement->GetList(Array(), $arFilter, false, false, $arSelect);
            while ($ob = $res->GetNextElement()) {
                $arItem = $ob->GetFields();
                $arOffers[$arItem["XML_ID"]] = array(
                    "ID" => $arItem["ID"],
                    "SIZE" => $arItem["PROPERTY_SIZE_VALUE"],
                    "LINK" => $arItem["PROPERTY_" . $intSKUProperty . "_VALUE"]
                );
            }
            unset($res);

            foreach ($arResult as $key => $arItem) {
                if (empty($arGood[$arItem["product_code"]]["ID"])) {
                    TradexLog::addLog("Отсутствует артикул для торгового предложенияс XML_ID: " . $arItem["plu"] . ", Артикул: " . $arItem["articul"], "error.txt");
                    unset($arResult[$key]);
                    continue;
                }
                $arResult[$key]["product_id"] = $arGood[$arItem["product_code"]]["ID"];
                $ID = $arOffers[$arItem["plu"]]["ID"];
                $arResult[$key]["offer_id"] = ($ID != 0) ? $ID : 0;
                $arResult[$key]["old_size"] = $arOffers[$arItem["plu"]]["SIZE"];
                $arResult[$key]["link"] = $arOffers[$arItem["plu"]]["LINK"];
                $arResult[$key]["product_name"] = $arGood[$arItem["product_code"]]["NAME"];
            }
        }

        return $arResult;
    }
}