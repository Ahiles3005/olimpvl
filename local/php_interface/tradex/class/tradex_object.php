<?

Trait TradexObject
{
    public static function object($status)
    {
        $arParams = array(
            "TYPE" => "object",
            "UF_TYPE" => array(
                11 => "центральный офис",
                12 => "региональный офис",
                13 => "магазин",
                14 => "рабочий склад",
                15 => "транзитный склад"
            ),
            "CITY_PROP" => array(
                "Владивосток" => array(
                    "latitude" => 43.1312489,
                    "longitude" => 131.9050921
                ),
                "Находка" => array(
                    "latitude" => 42.8390867,
                    "longitude" => 132.8911717
                ),
                "Уссурийск" => array(
                    "latitude" => 43.7930037,
                    "longitude" => 131.9602132
                ),
                "Комсомольск-на-Амуре" => array(
                    "latitude" => 50.5442067,
                    "longitude" => 137.0304805
                ),
                "Арсеньев" => array(
                    "latitude" => 44.1600968,
                    "longitude" => 133.2585971
                ),
            )
        );
        $resStoreCity = $resStoreNewCity = array();
        $start = microtime(true);
        TradexLog::clearFile("object.txt");
        TradexLog::addLog("Начало импорта файла object (" . $status . ")");

        $arResult = TradexGeneral::getArrayByXml("object", $status);

        $arList = TradexImport::getStoreListId();

        $arStoreCity = TradexGeneral::getCityList();
        foreach ($arStoreCity as $city) {
            $resStoreCity[$city["NAME"]] = $city["ID"];
        }

        foreach ($arResult["object"] as $object) {
            $object = (array)$object;
            if ($object["clientType"] != 13 && $object["clientType"] != 14) continue;
            $ID = $arList[$object["referenceNo"]];
            $arFields = array(
                "XML_ID" => $object["referenceNo"],
                "TITLE" => $object["name"]
            );
            $arFields["ACTIVE"] = (empty($object["city"])) ? "N" : "Y";
            if (!array_key_exists($object["city"], $arParams["CITY_PROP"])) $object["city"] = "Владивосток";

            $resID = ($ID) ? CCatalogStore::Update($ID, $arFields) : CCatalogStore::Add($arFields);

            //обновляем список
            $ibpenum = new CIBlockPropertyEnum;
            if($ID){
                $property_enums = CIBlockPropertyEnum::GetList(Array("DEF"=>"DESC", "SORT"=>"ASC"), Array("IBLOCK_ID"=>IBLOCK_ID_SHOPS, "CODE"=>"REF_STORE","XML_ID"=>$resID));
                $obEnum = $property_enums->GetNext();
                if($obEnum)
                    $statusUpdate = $ibpenum->Update($obEnum["ID"], Array('VALUE'=>$object["referenceNo"]." - ".$object["name"],'XML_ID'=>$resID,"SORT"=>$object["referenceNo"]));
                else
                    $PropID = $ibpenum->Add(Array('PROPERTY_ID'=>REF_STORE_ENUM_ID, 'VALUE'=>$object["referenceNo"]." - ".$object["name"],'XML_ID'=>$resID,"SORT"=>$object["referenceNo"]));
            }else{
                $PropID = $ibpenum->Add(Array('PROPERTY_ID'=>REF_STORE_ENUM_ID, 'VALUE'=>$object["referenceNo"]." - ".$object["name"],'XML_ID'=>$resID,"SORT"=>$object["referenceNo"]));
            }
            //если нужно полностью обновить список по новой
            //$PropID = $ibpenum->Add(Array('PROPERTY_ID'=>REF_STORE_ENUM_ID, 'VALUE'=>$object["referenceNo"]." - ".$object["name"],'XML_ID'=>$resID,"SORT"=>$object["referenceNo"]));

            if (!empty($resID)) {
                if (!empty($resStoreNewCity[$object["city"]])) {
                    $CITY_ID = $resStoreNewCity[$object["city"]];
                } else {
                    $el = new CIBlockElement;
                    $code = TradexGeneral::getCode($object["city"]);

                    if (!empty($arParams["CITY_PROP"][$object["city"]])) {
                        $prop["latitude"] = $arParams["CITY_PROP"][$object["city"]]["latitude"];
                        $prop["longitude"] = $arParams["CITY_PROP"][$object["city"]]["longitude"];
                    }

                    $prop["key"] = $code;

                    $arCityField = array(
                        "NAME" => $object["city"],
                        "XML_ID" => $code,
                        "IBLOCK_ID" => IBLOCK_ID_GEO_CITY,
                    );

                    $CITY_ID = $resStoreCity[$object["city"]];
                    $res = ($CITY_ID) ? $el->Update($CITY_ID, $arCityField) : $el->Add($arCityField);
                    $CITY_ID = ($CITY_ID) ? $CITY_ID : $res;
                    CIBlockElement::SetPropertyValuesEx($CITY_ID, IBLOCK_ID_GEO_CITY, $prop);
                    $resStoreNewCity[$object["city"]] = $CITY_ID;
                }

                if (!empty($CITY_ID)) {
                    TradexProp::SetUserField("CAT_STORE", $resID, "UF_CITY", $CITY_ID);
                    $resStoreCity[$object["city"]] = $CITY_ID;
                }
            }
        }

        TradexHash::addHash("object", $status);
        $end = microtime(true) - $start;
        TradexLog::addLog("Время выполнения " . $end . " : ");
        TradexLog::addLog("Конец импорта файла object");
    }

    public static function getStoreListId()
    {
        $list = CCatalogStore::GetList(
            array(),
            array(),
            false,
            false,
            array("XML_ID", "ID")
        );
        $arResult = array();
        while ($arStore = $list->GetNext()) {
            $arResult[$arStore["XML_ID"]] = $arStore["ID"];
        }
        return $arResult;
    }
}