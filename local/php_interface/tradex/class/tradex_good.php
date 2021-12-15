<?

Trait TradexGood
{

    public static function good($status, $startLine = false, $endLine = false, $limit = 500)
    {
        TradexLog::clearFile("good.txt");
        TradexLog::clearFile("good_import_elem.txt");
        TradexLog::addLog("Начало импорта файла good (" . $status . ")");
        $start = microtime(true);
        $arPropList = array();
        $curStatus = ($status == 1) ? 2 : $status;
        $flag = ($curStatus == 2) ? true : false;
        $pathXML = TradexGeneral::getFileInfo("good", $flag);
        $startLine = ($startLine) ? $startLine : 0;
        $endLine = ($endLine) ? $endLine : TradexImport::getFileLength($pathXML);
        $flag_worked = true;

        TradexImport::initImportColor();

        $arProp = array(
            "SEASON" => array("VALUE" => "groupcode4", "KEY" => "group4"),
            "STOCK_TYPE" => array("VALUE" => "groupcode8", "KEY" => "group8"),
            "TYPE_CARGO" => array("VALUE" => "groupcode9", "KEY" => "group9"),
            "SEASONALITY" => array("VALUE" => "groupcode11", "KEY" => "group11"),
            "SEX" => array("VALUE" => "groupcode12", "KEY" => "group12"),
        );

        foreach ($arProp as $key => $arField) {
            $arPropList["PROP_VALUE_ID"][$key] = TradexProp::getListProp($key);
            $arPropList["PROP_KEY"][$key] = TradexProp::getListPropKey($arField["KEY"]);
        }

        while ($flag_worked) {

            $arList = TradexImport::getArrayByString($pathXML, $startLine, $limit);
            $arSections = array();
            $arArticul = array();
            $arBrand = array();

            foreach ($arList as $key => $arElement) {
                $sec16 = $arElement["groupcode16"];
                $sec17 = $arElement["groupcode17"];
                $sec18 = $arElement["groupcode18"];
                if (!empty($sec18)) {
                    $str = $sec16 . "_" . $sec17 . "_" . $sec18;
                    $arSections[] = $str;
                    $arList[$key]["SECTION_XML_ID"] = $str;
                } elseif (!empty($sec17)) {
                    $str = $sec16 . "_" . $sec17;
                    $arSections[] = $str;
                    $arList[$key]["SECTION_XML_ID"] = $str;
                } else {
                    continue;
                }
                $arArticul[] = $arElement["articul"];
                $arBrand[] = $arElement["groupcode7"];
            }

            $arColor = TradexImport::getColorListByArticul($arArticul);

            $arSections = TradexImport::getSectionList($arSections);

            $arBrand = TradexImport::getBrandList($arBrand);
            $arProductID = TradexImport::gesListIdByArticul($arArticul);

            $obCatalog = new CCatalog;
            $arCatalog = $obCatalog->GetByID(IBLOCK_ID_OFFERS);
            $intSKUProperty = $arCatalog['SKU_PROPERTY_ID'];

            foreach ($arList as $arElement) {
                $arElement["name"] = htmlspecialchars_decode($arElement["name"]);
                $arFields = array(
                    "NAME" => $arElement["name"],
                    "ACTIVE" => "Y",
                    "IBLOCK_SECTION" => $arSections[$arElement["SECTION_XML_ID"]],
                    "IBLOCK_ID" => IBLOCK_ID_CATALOG,
                    $intSKUProperty => IBLOCK_ID_OFFERS
                );
                $articul = $arElement["articul"];
                $name = $arElement["name"];
                foreach ($arColor[$articul] as $color) {
                    $XML_ID = ($color) ? TradexImport::getCode($articul . "_" . $color) : TradexImport::getCode($articul);
                    $CODE = ($color) ? $name . "_" . $articul . "_" . $color : $name ."_". $articul;
                    $PRODUCT_ID = ($arProductID[$XML_ID]) ? $arProductID[$XML_ID] : 0;
                    $arFields["XML_ID"] = $XML_ID;
                    $arFields["CODE"] = TradexImport::getCode($CODE);
                    //if ($PRODUCT_ID == 0) $arFields["ACTIVE"] = "N";
                    $PRODUCT_ID = TradexImport::importElemGood($PRODUCT_ID, $arFields);

                    if ($PRODUCT_ID) {
                        foreach ($arProp as $keyProp => $arField) {
                            $propName = $arPropList["PROP_KEY"][$keyProp][$arElement[$arField["VALUE"]]];
                            $value = $arPropList["PROP_VALUE_ID"][$keyProp][$propName];
                            if (!empty($value)) {
                                $arFields[$keyProp] = $value;
                            }
                        }

                        if (!empty($country)) {
                            $arFields["COUNTRY_OF_PRODUCTION"] = $arElement["country"];
                        }

                        if (!empty($units)) {
                            $arFields["UNITS"] = $arElement["units"];
                        }

                        if (!empty($color)) {
                            $arFields["COLOR"] = $color;
                        }
                        if (!empty($arBrand[$arElement["groupcode7"]])) {
                            $arFields["BRAND"] = $arBrand[$arElement["groupcode7"]];
                        }

                        $arFields["ARTICUL"] = $arElement["articul"];

                        $arFields[$intSKUProperty] = IBLOCK_ID_OFFERS;
                        if ($color) {
                            $arFields["COLOR"] = $color;
                        }
                        CIBlockElement::SetPropertyValuesEx($PRODUCT_ID, IBLOCK_ID_CATALOG, $arFields);
                    }
                }
            }

            $startLine += $limit;
            TradexLog::addLog(" Текущая строка: " . $startLine . "; Конечная строка: " . $endLine, "good.txt");
            if ($startLine >= $endLine || !count($arList)) {
                $flag_worked = false;
            }
        }

        TradexHash::addHash("good", $status);
        $end = microtime(true) - $start;
        TradexLog::addLog("Время выполнения " . $end . " : ");
        TradexLog::addLog("Конец импорта файла good");
    }

    public static function importElemGood($ID, $arFields, $file = "good")
    {
        $select = array_keys($arFields);
        $select[] = "IBLOCK_SECTION_ID";

        $obElement = new CIBlockElement;

        if (!empty($ID)) {
            $db_element = CIBlockElement::GetList(array(), array("ID"=>$ID, "SHOW_HISTORY"=>"Y"), false, false,$select);
            if(!($ar_element = $db_element->Fetch()))
                return false;

            if (($ar_element["IBLOCK_ID"]!=$arFields["IBLOCK_ID"])||
              ($ar_element["NAME"]!=$arFields["NAME"])||
              ($ar_element["CODE"]!=$arFields["CODE"])||
              ($ar_element["XML_ID"]!=$arFields["XML_ID"])||
              ($ar_element["ACTIVE"]!=$arFields["ACTIVE"])||
              ($ar_element["IBLOCK_SECTION_ID"]!=$arFields["IBLOCK_SECTION"])) {

                TradexLog::addLog("Не равны, update".$ID,"good_import_elem.txt");
                TradexLog::addLog($ar_element["IBLOCK_ID"]." - ".$ar_element["NAME"]." - ".$ar_element["CODE"]." - ".$ar_element["XML_ID"]." - ".$ar_element["ACTIVE"]." - ".$ar_element["IBLOCK_SECTION_ID"], "good_import_elem.txt");
                TradexLog::addLog($arFields["IBLOCK_ID"]." - ".$arFields["NAME"]." - ".$arFields["CODE"]." - ".$arFields["XML_ID"]." - ".$arFields["ACTIVE"]." - ".$arFields["IBLOCK_SECTION"], "good_import_elem.txt");

               unset($arFields["IBLOCK_SECTION"]);
               $res = $obElement->Update($ID, $arFields);
               // TradexLog::addLog("result ".$res, "good_import_elem.txt");

                if (!$res) {
                    TradexLog::addLog("ERROR UPDATE XML_ID - " . $arFields["XML_ID"] . ", IBLOCK_ID - " . $arFields["IBLOCK_ID"] . ", текст ошибки: " . $obElement->LAST_ERROR.PHP_EOL, "good_import_elem.txt");
                TradexLog::addLog("" . json_encode($arFields) .PHP_EOL, "good_import_elem.txt");


                        }


            }else{
                //TradexLog::addLog("Равны","price.txt");
            }
        }else{
            $res = $obElement->Add($arFields);
            if (!$res) {
                      TradexLog::addLog("ERROR ADD  XML_ID - " . $arFields["XML_ID"] . ", IBLOCK_ID - " . $arFields["IBLOCK_ID"] . ", текст ошибки: " . $obElement->LAST_ERROR.PHP_EOL, "good_import_elem.txt");
                TradexLog::addLog("" . json_encode($arFields) .PHP_EOL, "good_import_elem.txt");
                  }
        }
        if (!$res) {
          //  TradexLog::addLog("Файл good, XML_ID - " . $arFields["XML_ID"] . ", IBLOCK_ID - " . $arFields["IBLOCK_ID"] . ", текст ошибки: " . $obElement->LAST_ERROR, "good_import_elem.txt");


        } else {
            $action = (!empty($ID)) ? "UPDATE" : "ADD";
            $ID = (!empty($ID)) ? $ID : $res;
            TradexLog::addLog("Файл ".$file.", XML_ID - " . $arFields["XML_ID"] . ", IBLOCK_ID - " . $arFields["IBLOCK_ID"] . ", ID - " . $ID . ", Действие: " . $action, "good_import_elem.txt");
        }
        return (!empty($ID)) ? $ID : $res;
    }

    public function getSectionList($arSectionXML)
    {
        $arResult = $arList = array();
        $arSelect = Array("ID", "IBLOCK_ID", "XML_ID");
        $arFilter = array('IBLOCK_ID' => IBLOCK_ID_CATALOG, "XML_ID" => $arSectionXML);
        $obSection = new CIBlockSection();
        $resSection = $obSection->GetList(Array(), $arFilter, false, $arSelect);
        while ($arSection = $resSection->GetNext()) {
            $arResult[$arSection["XML_ID"]] = $arSection["ID"];
        }
        return $arResult;
    }

    public function getBrandList($arBrand)
    {
        $arResult = $arList = array();
        $arSelect = Array("ID", "IBLOCK_ID", "XML_ID", "ID");
        $arFilter = array('IBLOCK_ID' => IBLOCK_ID_BRAND, "XML_ID" => $arBrand);
        $obElement = new CIBlockElement;
        $res = $obElement->GetList(Array(), $arFilter, false, false, $arSelect);
        while ($ob = $res->GetNextElement()) {
            $arItem = $ob->GetFields();
            $arResult[$arItem["XML_ID"]] = $arItem["ID"];
        }
        return $arResult;
    }

    public static function gesListIdByArticul($arArticul)
    {
        $arResult = $arList = array();
        $arSelect = Array("ID", "IBLOCK_ID", "XML_ID");
        $arFilter = array('IBLOCK_ID' => IBLOCK_ID_CATALOG, "PROPERTY_ARTICUL" => $arArticul);
        $obElement = new CIBlockElement;
        $res = $obElement->GetList(Array(), $arFilter, false, false, $arSelect);
        while ($ob = $res->GetNextElement()) {
            $arItem = $ob->GetFields();
            $arResult[$arItem["XML_ID"]] = $arItem["ID"];
        }
        return $arResult;
    }

    public static function getOfferList($arXmlID)
    {
        $arResult = $arList = array();
        $arSelect = Array("ID", "IBLOCK_ID", "XML_ID");
        $arFilter = array('IBLOCK_ID' => IBLOCK_ID_OFFERS, "XML_ID" => $arXmlID);
        $obElement = new CIBlockElement;
        $res = $obElement->GetList(Array(), $arFilter, false, false, $arSelect);
        while ($ob = $res->GetNextElement()) {
            $arItem = $ob->GetFields();
            $arResult[$arItem["XML_ID"]] = $arItem["ID"];
        }
        return $arResult;
    }

    public static function getProductList($arArticul)
    {
        $arResult = $arList = array();
        $arSelect = Array("ID", "IBLOCK_ID", "XML_ID", "PROPERTY_ARTICUL", "NAME");
        $arFilter = array('IBLOCK_ID' => IBLOCK_ID_CATALOG, "PROPERTY_ARTICUL" => $arArticul);
        $obElement = new CIBlockElement;
        $res = $obElement->GetList(Array(), $arFilter, false, false, $arSelect);
        while ($ob = $res->GetNextElement()) {
            $arItem = $ob->GetFields();
            $arResult[$arItem["XML_ID"]] = array(
                "ID" => $arItem["ID"],
                "NAME" => $arItem["NAME"],
            );
        }
        return $arResult;
    }

    public static function getColorListByArticul($arArticul)
    {
        $status = TradexHash::hashGetStatus("price", false);
        $pathXML = TradexGeneral::getFileInfo("price", true);
        $f = fopen($pathXML, "r");
        $ln = 0;
        $arResult = array();
        while (($line = fgets($f))) {
            ++$ln;
            preg_match_all("/\<([a-z0-9]+)\>([^<>]+)*\<\/[a-z0-9]+\>/", $line, $output_array);
            $arElem = array();
            foreach ($output_array[1] as $key => $title) {
                $arElem[$title] = $output_array[2][$key];
            }
            $color = trim($arElem["color"]);
            $articul = $arElem["articul"];

            if (!in_array($color, $arResult[$articul]) && in_array($articul, $arArticul)) {
                $arResult[$articul][] = $color;
            }
        }
        fclose($f);
        if ($status != 2) {
            $pathXML = TradexGeneral::getFileInfo("price", false);
            $f = fopen($pathXML, "r");
            $ln = 0;
            //$arResult = array();
            while (($line = fgets($f))) {
                ++$ln;
                preg_match_all("/\<([a-z0-9]+)\>([^<>]+)*\<\/[a-z0-9]+\>/", $line, $output_array);
                $arElem = array();
                foreach ($output_array[1] as $key => $title) {
                    $arElem[$title] = $output_array[2][$key];
                }
                $color = trim($arElem["color"]);
                $articul = $arElem["articul"];

                if (!in_array($color, $arResult[$articul]) && in_array($articul, $arArticul)) {
                    $arResult[$articul][] = $color;
                }
            }
            fclose($f);
        }

        return $arResult;
    }


    public static function clearProductList($arList)
    {
        $arArticul = array();
        foreach ($arList as $arElem) {
            $arArticul = $arElem["articul"];
        }
        $pathXML = TradexGeneral::getFileInfo("price", true);
        $f = fopen($pathXML, "r");
        $ln = 0;
        $arResult = array();
        while (($line = fgets($f))) {
            ++$ln;
            preg_match_all("/\<([a-z0-9]+)\>([^<>]+)*\<\/[a-z0-9]+\>/", $line, $output_array);
            $arElem = array();
            foreach ($output_array[1] as $key => $title) {
                $arElem[$title] = $output_array[2][$key];
            }

            $color = trim($arElem["color"]);
            $articul = $arElem["articul"];
            $code = ($color) ? $articul . "_" . $color : $articul;
            $code = TradexImport::getCode($code);

            if (!in_array($code, $arResult[$articul]) && in_array($articul, $arArticul)) {
                $arResult[$articul][] = $code;
            }
        }
        fclose($f);

        $arSelect = Array("ID", "IBLOCK_ID", "XML_ID", "PROPERTY_ARTICUL");
        $arFilter = array('IBLOCK_ID' => IBLOCK_ID_CATALOG, "PROPERTY_ARTICUL" => $arArticul);
        $obElement = new CIBlockElement;
        $res = $obElement->GetList(Array(), $arFilter, false, false, $arSelect);
        while ($ob = $res->GetNextElement()) {
            $arItem = $ob->GetFields();
            $resElement = new CIBlockElement;
            if (!in_array($arItem["XML_ID"], $arResult[$arItem["PROPERTY_ARTICUL_VALUE"]])) {
                $resElement->delete($arItem["ID"]);
                TradexLog::addLog("delete ID - " . $arItem["ID"], "clear.txt");
            } else {
                foreach ($arResult[$arItem["PROPERTY_ARTICUL_VALUE"]] as $key => $XML_ID) {
                    if ($XML_ID == $arItem["XML_ID"]) unset($arResult[$arItem["PROPERTY_ARTICUL_VALUE"]][$key]);
                }
            }
        }
    }

    public static function getOffersByArticul($arArticul)
    {
        $pathXML = TradexGeneral::getFileInfo("price", true);
        $f = fopen($pathXML, "r");
        $ln = 0;
        $arResult = array();
        while (($line = fgets($f))) {
            ++$ln;
            preg_match_all("/\<([a-z0-9]+)\>([^<>]+)*\<\/[a-z0-9]+\>/", $line, $output_array);
            $arElem = array();
            foreach ($output_array[1] as $key => $title) {
                $arElem[$title] = $output_array[2][$key];
            }
            if (in_array($arElem["articul"], $arArticul)) $arResult[] = $arElem;

        }
        fclose($f);
        return $arResult;
    }
}
