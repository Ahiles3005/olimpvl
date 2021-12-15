<?

use Bitrix\Main,Bitrix\Sale\Internals;

Trait TradexDiscGrp
{

    public static function discgrp($status)
    {
        $arParams = array(
            "MAIN_CITY" => array(
                101 => "vladivostok",
                301 => "ussurijsk",
                401 => "arsenev",
                501 => "naxodka",
                901 => "komsomolsk_na_amure"
            )
        );

        TradexLog::clearFile("discgrp.txt");
        TradexLog::addLog("Начало импорта файла discgrp (" . $status . ")");
        $start = microtime(true);
        $arDiscID = array();
        $arResult = TradexGeneral::getArrayByXml("discgrp", $status);

        $arListObject = TradexGeneral::getPriceTypeByObject();
        $arListPriceTypeID = TradexGeneral::getListPriceTypeID();
        $arDiscGrpListID = TradexGeneral::getListDiscGrp();
        $arCond = TradexImport::getListDiscGrpConditionsDefault();
        $arAct = TradexImport::getListDiscGrpActionsDefault();

        //верхний(1) уровень
        $templateAct1["CLASS_ID"] = "CondGroup";
        $templateAct1["DATA"]["All"] = "AND";
        $templateAct1["CHILDREN"] = [];

        //уровень содержащий параметры скидки
        $templateAct2["CLASS_ID"] = "ActSaleBsktGrp";
        $templateAct2["DATA"]["Type"] = "Discount";
        $templateAct2["DATA"]["Value"] = 0;
        $templateAct2["DATA"]["Unit"] = "Perc";
        $templateAct2["DATA"]["Max"] = 0;
        $templateAct2["DATA"]["All"] = "AND";
        $templateAct2["DATA"]["True"] = "True";
        $templateAct2["CHILDREN"] = [];

        //уровень содержащий все условия

        $templateAct3Articul["CLASS_ID"] = "ActSaleSubGrp";
        $templateAct3Articul["DATA"]["All"] = "OR";
        $templateAct3Articul["DATA"]["True"] = "True";
        $templateAct3Articul["CHILDREN"][] = ["CLASS_ID"=>"CondIBProp:1:5","DATA"=>["logic"=>"Equal","value"=>"dummy_articul"]];

        $templateAct3Plu["CLASS_ID"] = "ActSaleSubGrp";
        $templateAct3Plu["DATA"]["All"] = "OR";
        $templateAct3Plu["DATA"]["True"] = "True";
        $templateAct3Plu["CHILDREN"] = [];

        $templateAct3LimitProduct["CLASS_ID"] = "ActSaleSubGrp";
        $templateAct3LimitProduct["DATA"]["All"] = "OR";
        $templateAct3LimitProduct["DATA"]["True"] = "True";
        $templateAct3LimitProduct["CHILDREN"] = [];

        $templateAct3LimitOffer["CLASS_ID"] = "ActSaleSubGrp";
        $templateAct3LimitOffer["DATA"]["All"] = "OR";
        $templateAct3LimitOffer["DATA"]["True"] = "True";
        $templateAct3LimitOffer["CHILDREN"] = [];

        foreach ($arResult["discgrp"] as $arDiscGrp) {
            if (array_key_exists($arDiscGrp["objectcode"], $arParams["MAIN_CITY"]) && $arDiscGrp["discprocent"]>0) {
                //$notes = TradexImport::getNotesForDisc($arDiscGrp["weekday"]);
                $XML_ID = $arDiscGrp["objectcode"] . "_" . $arDiscGrp["mdg"];
                $ID = (!empty($arDiscGrpListID[$XML_ID])) ? $arDiscGrpListID[$XML_ID] : 0;

                $filter = ["ID" => $ID];

                //Internals\DiscountTable
                $discountIterator = Internals\DiscountTable::getList(array(
                    'select' => array("ACTIONS_LIST","CONDITIONS"),
                    'filter' => $filter
                ));
                while ($discount = $discountIterator->fetch()){
                    $actions = $discount["ACTIONS_LIST"];
                    $condition = $discount["CONDITIONS"];
                }

                //CSaleDiscount
                /*$discountIterator = CSaleDiscount::GetList(
                    array(),
                    $filter,
                    false,
                    false,
                    array("ACTIONS")
                );
                while ($discount = $discountIterator->fetch()){
                    $actions = unserialize($discount["ACTIONS"]);
                }*/

                //собираем вместе
                $templateAct2["DATA"]["Value"] = (int)$arDiscGrp["discprocent"];
                $templateAct2["DATA"]["Max"] = 0;
                $templateAct2["CHILDREN"][0] = $templateAct3Articul;
                $templateAct2["CHILDREN"][1] = $templateAct3Plu;
                $templateAct2["CHILDREN"][2] = $templateAct3LimitProduct;
                $templateAct2["CHILDREN"][3] = $templateAct3LimitOffer;
                $templateAct1["CHILDREN"][0] = $templateAct2;

                //ставим по умолчанию массивы
                if($status == 3 && $actions && $condition){
                    $actions["CHILDREN"][0]["DATA"]["Value"] = $arDiscGrp["discprocent"];
                    $actions["CHILDREN"][0]["DATA"]["Max"] = 0;
                }else{
                    $actions = $templateAct1;
                    $condition = 'a:3:{s:8:"CLASS_ID";s:9:"CondGroup";s:4:"DATA";a:2:{s:3:"All";s:3:"AND";s:4:"True";s:4:"True";}s:8:"CHILDREN";a:0:{}}';
                }

                //Internals\DiscountTable
                /*$arFields = array(
                    "LID" => SITE_ID,
                    "NAME" => $arDiscGrp["name"],
                    "ACTIVE" => ($arCond[$ID] == "Y") ? "Y" : "N",
                    //"VALUE" => $arDiscGrp["discprocent"],
                    //"MAX_DISCOUNT" => $arDiscGrp["maxdiscprocent"],
                    "ACTIVE_FROM" =>Main\Type\DateTime::createFromUserTime(date_format(date_create_from_format("Y-m-dH:i", $arDiscGrp["datefrom"] . $arDiscGrp["timefrom"]), 'd.m.Y H:i:s')),
                    "ACTIVE_TO" => Main\Type\DateTime::createFromUserTime(date_format(date_create_from_format("Y-m-dH:i", $arDiscGrp["dateto"] . $arDiscGrp["timeto"]), 'd.m.Y H:i:s')),
                    "CURRENCY" => "P",
                    "XML_ID" => $XML_ID,
                    "ACTIONS_LIST"=>$actions,
                    "CONDITIONS"=>$condition,
                    //"CATALOG_GROUP_IDS" => array(
                    //    $arListPriceTypeID[$arListObject[$arDiscGrp["objectcode"]]["CODE"]]
                    //),
                    //"NOTES" => $notes
                );*/


                //CSaleDiscount
                $arFields = array(
                    "LID" => "s1",
                    "NAME" => $arDiscGrp["name"],
                    "ACTIVE" => ($arAct[$ID] == "Y") ? "Y" : "N",
                    "ACTIVE_FROM" =>Main\Type\DateTime::createFromUserTime(date_format(date_create_from_format("Y-m-dH:i", $arDiscGrp["datefrom"] . $arDiscGrp["timefrom"]), 'd.m.Y H:i:s')),
                    "ACTIVE_TO" => Main\Type\DateTime::createFromUserTime(date_format(date_create_from_format("Y-m-dH:i", $arDiscGrp["dateto"] . $arDiscGrp["timeto"]), 'd.m.Y H:i:s')),
                    "CURRENCY" => "RUB",
                    "XML_ID" => $XML_ID,
                    "ACTIONS"=>serialize($actions),
                    "CONDITIONS"=>$condition,
                    "USER_GROUPS"=>[1,2,3,4,5,6,7],

                );
              //  $arFields['LAST_DISCOUNT'] = "N";
                $action = ($ID) ? "UPDATE" : "ADD";
                //$class = new CCatalogDiscount;

                //старый метод
                //$result = ($ID) ? $class->Update($ID, $arFields) : $class->Add($arFields);

                //Internals\DiscountTable
                //$result = ($ID) ? Internals\DiscountTable::update($ID,$arFields) : Internals\DiscountTable::add($arFields);

                //CSaleDiscount
                $result = ($ID) ? CSaleDiscount::Update($ID, $arFields) : CSaleDiscount::Add($arFields);

                if ($status == 2) $arDiscID[] = $ID;
                $error = ($result) ? false : true;

                if ($error) {
                    if ($arFields["VALUE"] == 0) {
                        TradexLog::addLog("Файл discgrp, значение скидки равно 0, MDG: " . $arDiscGrp["mdg"] . ", добавлен статус ограничения действия скидок", "discgrp.txt");
                    } else {
                        TradexLog::addLog("Файл discgrp, Ошибка записи, MDG: " . $arDiscGrp["mdg"] . ", действие: " . $action, "error.txt");
                    }
                } else {
                    TradexLog::addLog("Файл discgrp, XML_ID скидки - " . $arDiscGrp["mdg"] . ", ID: " . $ID . ", действие: " . $action, "discgrp.txt");
                }
            }
        }

        TradexHash::addHash("discgrp", $status);
        $end = microtime(true) - $start;
        TradexLog::addLog("Время выполнения " . $end . " : ");
        TradexLog::addLog("Конец импорта файла discgrp");
    }

    public static function getListDiscGrp()
    {
        $arResult = array();

        //старый метод
        /*$class = new CCatalogDiscount;
        $dbProductDiscounts = $class->GetList(
            array(),
            array(),
            false,
            false,
            array("XML_ID", "ID")
        );*/

        //Internals\DiscountTable
        /*$dbProductDiscounts = Internals\DiscountTable::getList(array(
            'select' => array("XML_ID", "ID"),
        ));*/

        //CSaleDiscount
        $dbProductDiscounts = CSaleDiscount::GetList(
            array(),
            array(),
            false,
            false,
            array("XML_ID", "ID")
        );

        while ($rsProductDiscounts = $dbProductDiscounts->Fetch()) {
            $arResult[$rsProductDiscounts["XML_ID"]] = $rsProductDiscounts["ID"];
        }
        return $arResult;
    }


    public static function getNotesForDisc($intParam)
    {
        $arWeek = array(1 => 2, 2 => 3, 3 => 4, 4 => 5, 5 => 6, 6 => 7, 7 => 1);
        $count = 1;
        $arResult = $arDisc = array();
        if ($intParam == 127) return "";
        while ($count != 8) {
            $res = $intParam % 2;
            $arDisc[$count] = $res;
            $intParam = $intParam / 2;
            $count++;
        }

        foreach ($arWeek as $key => $day) {
            if ($arDisc[$day] == 1) $arResult[] = $key;
        }
        return implode(", ", $arResult);
    }

    public static function getListDiscGrpNotes($arXml_ID)
    {
        $arResult = array();

        //старый метод
        /*$class = new CCatalogDiscount;
        $dbProductDiscounts = $class->GetList(
            array(),
            array(
                "XML_ID" => $arXml_ID
            ),
            false,
            false,
            array("XML_ID", "ID", "NOTES")
        );*/

        //Internals\DiscountTable
        /*$dbProductDiscounts = Internals\DiscountTable::getList(array(
            'select' => array("XML_ID", "ID"),
            'filter' => array("XML_ID" => $arXml_ID),
        ));*/

        //CSaleDiscount
        $dbProductDiscounts = CSaleDiscount::GetList(
            array(),
            array(
                "XML_ID" => $arXml_ID
            ),
            false,
            false,
            array("XML_ID", "ID")
        );

        while ($rsProductDiscounts = $dbProductDiscounts->Fetch()) {
            $arResult[$rsProductDiscounts["XML_ID"]] = $rsProductDiscounts["NOTES"];
        }
        return $arResult;
    }

    public static function getDiscConditions($arParam, $prop = false)
    {
        $arResult = array();

        //старый метод
        /*$class = new CCatalogDiscount;
        $dbProductDiscounts = $class->GetList(
            array(),
            array(),
            false,
            false,
            array("XML_ID", "ID", "CONDITIONS")
        );*/

        //Internals\DiscountTable
        /*$dbProductDiscounts = Internals\DiscountTable::getList(array(
            'select' => array("XML_ID", "ID", "CONDITIONS"),
        ));*/

        //CSaleDiscount
        $dbProductDiscounts = CSaleDiscount::GetList(
            array(),
            array(),
            false,
            false,
            array("XML_ID", "ID", "CONDITIONS")
        );

        $arMdg = array();
        while ($rsProductDiscounts = $dbProductDiscounts->Fetch()) {

            $arKey = explode("_", $rsProductDiscounts["XML_ID"]);
            $mdg = $arKey[1];
            if (!in_array($mdg, $arMdg) && !empty($mdg) && in_array($mdg, $arParam)) {
                $arResult[$mdg] = TradexGeneral::checkArrayCond($rsProductDiscounts["CONDITIONS"], $prop);
                $arMdg[] = $mdg;
            }
        }
        return $arResult;
    }

    public static function getDiscActions($arParam, $prop = false)
    {
        $arResult = array();

        //старый метод
        /*$class = new CCatalogDiscount;
        $dbProductDiscounts = $class->GetList(
            array(),
            array(),
            false,
            false,
            array("XML_ID", "ID", "ACTIONS")
        );*/

        //Internals\DiscountTable
        /*$dbProductDiscounts = Internals\DiscountTable::getList(array(
            'select' => array("XML_ID", "ID", "ACTIONS"),
        ));*/

        //CSaleDiscount
        $dbProductDiscounts = CSaleDiscount::GetList(
            array(),
            array(),
            false,
            false,
            array("XML_ID", "ID", "ACTIONS")
        );

        $arMdg = array();
        while ($rsProductDiscounts = $dbProductDiscounts->Fetch()) {
            $arKey = explode("_", $rsProductDiscounts["XML_ID"]);
            $mdg = $arKey[1];

            if (!in_array($mdg, $arMdg) && !empty($mdg) && in_array($mdg, $arParam)) {

                $arResult[$mdg] = TradexGeneral::checkArrayCond($rsProductDiscounts["ACTIONS"], $prop);

                $arMdg[] = $mdg;
            }
        }

        return $arResult;
    }

    public static function checkArrayCond($arCond, $prop = false)
    {
        $arCond = unserialize($arCond);
        $arResult = $arCond;

        if ($prop == "ARTICUL") {
            if ($arArticul = TradexGeneral::getArticul($arCond)) {
                $arResult["ARTICUL"] = $arArticul;
            }
        } elseif ($prop == "PLU") {
            if ($arPLU = TradexGeneral::getPLU($arCond)) {
                $arResult["PLU"] = $arPLU;
            }
        }

        return $arResult;
    }


    public static function getArticul($arCond)
    {
        return (!empty($arCond[0]["ARTICUL"])) ? $arCond[0]["ARTICUL"] : false;
    }

    protected function getPLU($arCond)
    {
        return (!empty($arCond[0]["CondIBXmlID"])) ? $arCond[0]["CondIBXmlID"] : false;
    }


    public static function checkCond($arCond)
    {
        $arResult = false;
        $cond = array();

        switch ($arCond["CLASS_ID"]) {
            case "CondGroup":
                foreach ($arCond["CHILDREN"] as $child) {

                    $cond = TradexGeneral::checkCond($child);
                    if (!empty($cond["KEY"])) {
                        $arResult[$cond["KEY"]][] = $cond["VALUE"];
                    } else {
                        $arResult[] = $cond;
                    }
                }
                break;
            case "CondIBProp:" . IBLOCK_ID_CATALOG . ":5":
                $cond["VALUE"] = $arCond["DATA"]["value"];
                $cond["KEY"] = "ARTICUL";
                $arResult = $cond;
                break;
            case "CondIBXmlID":
                $cond["VALUE"] = $arCond["DATA"]["value"];
                $cond["KEY"] = "PLU";
                $arResult = $cond;
                break;
        }

        return $arResult;
    }

    public static function getCondArray($field = "CondGroupOR", $value = "True", $PROP_ID=0)
    {
        $arResult = array();
        switch ($field) {
            case "CondGroupOR":
                $arResult = array(
                    "CLASS_ID" => "CondGroup",
                    "DATA" => array(
                        "All" => "OR",
                        "True" => $value
                    ),
                    "CHILDREN" => array()
                );
                break;
            case "CondGroupAND":
                $arResult = array(
                    "CLASS_ID" => "CondGroup",
                    "DATA" => array(
                        "All" => "AND",
                        "True" => $value
                    ),
                    "CHILDREN" => array()
                );
                break;
            case "PLU":
                $arResult = array(
                    "CLASS_ID" => "CondIBXmlID",
                    "DATA" => array(
                        "logic" => "Equal",
                        "value" => $value
                    ),
                    "CHILDREN" => array()
                );
                break;
            case "ARTICUL":
                $arResult = array(
                    "CLASS_ID" => "CondIBProp:" . IBLOCK_ID_CATALOG . ":" . $PROP_ID,
                    "DATA" => array(
                        "logic" => "Equal",
                        "value" => $value
                    ),
                    "CHILDREN" => array()
                );
                break;
            /*
            case "DISCOUNT_LIMIT":
                $arResult = array(
                    "CLASS_ID" => "CondIBProp:" . IBLOCK_ID_CATALOG . ":" . $PROP_ID,
                    "DATA" => array(
                        "logic" => "Not",
                        "value" => $value
                    ),
                    "CHILDREN" => array()
                );
                break;
            */
            case "DISCOUNT_LIMIT_OFFERS":
                $arResult = array(
                    "CLASS_ID" => "CondIBProp:" . IBLOCK_ID_OFFERS . ":" . $PROP_ID,
                    "DATA" => array(
                        "logic" => "Not",
                        "value" => $value
                    ),
                    "CHILDREN" => array()
                );
                break;

        }
        return $arResult;
    }

    public static function getListDiscGrpConditionsDefault()
    {
        $arResult = array();

        //старый метод
        /*$class = new CCatalogDiscount;
        $dbProductDiscounts = $class->GetList(
            array(),
            array(),
            false,
            false,
            array("XML_ID", "ID", "CONDITIONS")
        );*/

        //Internals\DiscountTable
        /*$dbProductDiscounts = Internals\DiscountTable::getList(array(
            'select' => array("XML_ID", "ID", "CONDITIONS"),
        ));*/

        //CSaleDiscount
        $dbProductDiscounts = CSaleDiscount::GetList(
            array(),
            array(),
            false,
            false,
            array("XML_ID", "ID", "CONDITIONS")
        );

        while ($rsProductDiscounts = $dbProductDiscounts->Fetch()) {
            $arCond = unserialize($rsProductDiscounts["CONDITIONS"]);
            if ((!empty($arCond["CHILDREN"]))) $arResult[$rsProductDiscounts["ID"]] = "Y";
        }
        return $arResult;
    }

    public static function getListDiscGrpActionsDefault()
    {
        $arResult = array();

        //старый метод
        /*$class = new CCatalogDiscount;
        $dbProductDiscounts = $class->GetList(
            array(),
            array(),
            false,
            false,
            array("XML_ID", "ID", "ACTIONS")
        );*/

        //Internals\DiscountTable
        /*$dbProductDiscounts = Internals\DiscountTable::getList(array(
            'select' => array("XML_ID", "ID", "ACTIONS"),
        ));*/

        //CSaleDiscount
        $dbProductDiscounts = CSaleDiscount::GetList(
            array(),
            array(),
            false,
            false,
            array("XML_ID", "ID", "ACTIONS")
        );

        while ($rsProductDiscounts = $dbProductDiscounts->Fetch()) {
            $arCond = unserialize($rsProductDiscounts["ACTIONS"]);
            if ((!empty($arCond["CHILDREN"]))) $arResult[$rsProductDiscounts["ID"]] = "Y";
        }
        return $arResult;
    }

    public static function getCondDiscountLimit($IBLOCK_ID)
    {

        $properties = CIBlockProperty::GetList(Array("sort" => "asc", "name" => "asc"), Array("CODE" => "DISCOUNT_LIMIT", "IBLOCK_ID" => $IBLOCK_ID));
        if ($prop_fields = $properties->GetNext()) {
            $DISCOUNT_LIMIT_PROP_ID = $prop_fields["ID"]; // id свойства для ограничения распространения скидки на товар
        }

        $db_enum_list = CIBlockProperty::GetPropertyEnum("DISCOUNT_LIMIT", Array(), Array("IBLOCK_ID" => $IBLOCK_ID, "VALUE" => "Y"));
        if ($ar_enum_list = $db_enum_list->GetNext()) {
            $DISCOUNT_LIMIT_PROP_VALUE_ID = $ar_enum_list["ID"]; // id значения свойства для ограничения распространения скидки на товар
        }

        $condType = ($IBLOCK_ID == IBLOCK_ID_CATALOG) ? "DISCOUNT_LIMIT" : "DISCOUNT_LIMIT_OFFERS";
        if (empty($DISCOUNT_LIMIT_PROP_VALUE_ID) || empty($DISCOUNT_LIMIT_PROP_ID)) return false;
        $arCond = TradexGeneral::getCondArray($condType, $DISCOUNT_LIMIT_PROP_VALUE_ID, $DISCOUNT_LIMIT_PROP_ID);

        return $arCond;
    }
}
