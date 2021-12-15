<?

Trait TradexPriceList
{
    public static function pricelist($status)
    {
        TradexLog::addLog("Начало импорта файла pricelist (" . $status . ")");
        $start = microtime(true);
        TradexLog::clearFile("group.txt");
        $arResult = array();//TradexGeneral::getArrayByXml("pricelist", $status);

        $arListPriceId = TradexGeneral::getListPriceTypeID();
        $arCityList = TradexGeneral::getCityList();
        foreach ($arCityList as $city) {
            $arResult["pricelist"][] = array(
                "name" => $city["NAME"],
                "referenceNo" => $city["XML_ID"]
            );
        }
        $class = new CUser;
        $arUserGrp = $class->GetUserGroup(1);
        foreach ($arResult["pricelist"] as $elem) {

            $elem = (array)$elem;
            $ID = (int)$arListPriceId[$elem["referenceNo"]];

            $arFieldsPriceType = array(
                "NAME" => TradexGeneral::getCode($elem["name"]),
                "XML_ID" => $elem["referenceNo"],
                "USER_GROUP" => $arUserGrp,
                "USER_GROUP_BUY" => $arUserGrp,
                "USER_LANG" => array(
                    "ru" => $elem["name"],
                )
            );

            $action = (!empty($ID)) ? "UPDATE" : "ADD";
            $class = new CCatalogGroup;
            $res = (!empty($ID)) ? $class->Update($ID, $arFieldsPriceType) : $class->Add($arFieldsPriceType);
            $importRes["pricelist"]["IMPORT"][] = ($res) ? array("XML_ID" => $elem["referenceNo"], "ERROR" => 0, "TYPE" => $action) : array("XML_ID" => $elem["referenceNo"], "ERROR" => 1, "TYPE" => $action);
        }

        TradexHash::addHash("pricelist", $status);
        $end = microtime(true) - $start;
        TradexLog::addLog("Время выполнения " . $end . " : ");
        TradexLog::addLog("Конец импорта файла pricelist");
    }
}