<?

Trait TradexGroup
{
    public static function group($status)
    {
        $arParams = array(
            "KEY_XML" => array("group4", "group7", "group8", "group9", "group11", "group12", "group16", "group17", "group18"),
            "TYPE_XML" => array(
                "group4" => array(
                    "TYPE" => "PROPERTY",
                    "CODE" => "SEASON"
                ),
                "group7" => array(
                    "TYPE" => "ELEMENT",
                ),
                "group8" => array(
                    "TYPE" => "PROPERTY",
                    "CODE" => "STOCK_TYPE"
                ),
                "group9" => array(
                    "TYPE" => "PROPERTY",
                    "CODE" => "TYPE_CARGO"
                ),
                "group11" => array(
                    "TYPE" => "PROPERTY",
                    "CODE" => "SEASONALITY"
                ),
                "group12" => array(
                    "TYPE" => "PROPERTY",
                    "CODE" => "SEX"
                ),
                "group16" => array(
                    "TYPE" => "SECTION",
                ),
                "group17" => array(
                    "TYPE" => "SECTION",
                ),
                "group18" => array(
                    "TYPE" => "SECTION",
                ),
            ),
        );
        $resCount = 0;
        $arSectParams = array();
        TradexLog::clearFile("group.txt");
        TradexLog::addLog("Начало импорта файла group (" . $status . ")");
        $start = microtime(true);

        $arResult = TradexGeneral::getArrayByXml("group", $status);

        if (!empty($arResult)) {
            $arSectParams = TradexGeneral::getSecTree($status);
            foreach ($arResult as $group) {
                $resCount += count($group);
            }
        }
        foreach ($arParams["KEY_XML"] as $key) {
            switch ($arParams["TYPE_XML"][$key]["TYPE"]) {
                case "PROPERTY":
                    $strPropCode = $arParams["TYPE_XML"][$key]["CODE"];
                    TradexProp::initImportProp($arResult[$key], $key, $strPropCode, true);
                    break;
                case "SECTION":
                    foreach ($arResult[$key] as $elem) {
                        $arFields = array(
                            "NAME" => $elem["name"],
                            "IBLOCK_ID" => IBLOCK_ID_CATALOG,
                            "CODE" => TradexGeneral::getCode($elem["name"])
                        );
                        if ($key == "group16") {
                            $arFields["XML_ID"] = $elem["referenceNo"];
                            $ID = $arSectParams["DEPTH_LEVEL_1"][$elem["referenceNo"]];
                            $res = TradexGeneral::importSection($ID, $arFields, $key);
                            if ($res) {
                                $arSectParams["DEPTH_LEVEL_1"][$elem["referenceNo"]] = $res;
                            }
                        } elseif ($key == "group17") {
                            foreach ($arSectParams["DEPTH_LEVEL_2"][$elem["referenceNo"]] as $refGrop16 => $ID) {
                                $PARENT_SECTION_ID = $arSectParams["DEPTH_LEVEL_1"][$refGrop16];
                                if (!empty($PARENT_SECTION_ID)) {
                                    $arFields["IBLOCK_SECTION_ID"] = $PARENT_SECTION_ID;
                                    $arFields["XML_ID"] = $refGrop16 . "_" . $elem["referenceNo"];
                                } else continue;
                                $res = TradexGeneral::importSection($ID, $arFields, $key);
                                if ($res) {
                                    $arSectParams["DEPTH_LEVEL_2"][$elem["referenceNo"]][$refGrop16] = $res;
                                }
                            }
                        } elseif ($key == "group18") {
                            foreach ($arSectParams["DEPTH_LEVEL_3"][$elem["referenceNo"]] as $refGrop17 => $arParent17) {
                                foreach ($arParent17 as $refGrop16 => $ID) {
                                    $PARENT_SECTION_ID = $arSectParams["DEPTH_LEVEL_2"][$refGrop17][$refGrop16];
                                    if (!empty($PARENT_SECTION_ID)) {
                                        $arFields["IBLOCK_SECTION_ID"] = $PARENT_SECTION_ID;
                                        $arFields["XML_ID"] = $refGrop16 . "_" . $refGrop17 . "_" . $elem["referenceNo"];
                                    } else continue;
                                    $res = TradexGeneral::importSection($ID, $arFields, $key);
                                    if ($res) {
                                        $arSectParams["DEPTH_LEVEL_3"][$elem["referenceNo"]][$refGrop17][$refGrop16] = $res;
                                    }
                                }
                            }
                        }
                    }
                    break;
                case "ELEMENT":
                    $brandList = array();
                    foreach ($arResult[$key] as $elem) {
                        $brandList[] = $elem["referenceNo"];
                    }
                    $arListBrandId = TradexGeneral::getElemListId($brandList, IBLOCK_ID_BRAND);
                    foreach ($arResult[$key] as $elem) {
                        $ID = $arListBrandId[$elem["referenceNo"]];
                        $code = TradexGeneral::getCode($elem["name"]);
                        $arFields = array(
                            "XML_ID" => $elem["referenceNo"],
                            "NAME" => $elem["name"],
                            "IBLOCK_ID" => IBLOCK_ID_BRAND,
                            "CODE" => $code
                        );
                        $obElement = new CIBlockElement;
                        $res = (!empty($ID)) ? $obElement->Update($ID, $arFields) : $obElement->Add($arFields);
                        if (!$res) {
                            TradexLog::addLog("Файл group, поле " . $key . ", XML_ID - " . $elem["referenceNo"] . ", символьный код: " . $code . ", текст ошибки: " . $obElement->LAST_ERROR, "error.txt");
                        } else {
                            TradexLog::addLog("Файл group, поле " . $key . ", XML_ID - " . $elem["referenceNo"] . ", символьный код: " . $code, "group.txt");
                        }
                    }
                    break;
            }
        }

        TradexHash::addHash("group", $status);
        $end = microtime(true) - $start;
        TradexLog::addLog("Время выполнения " . $end . " : ");
        TradexLog::addLog("Конец импорта файла group");
    }
}