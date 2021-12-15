<?

Trait TradexPluDiscGrp
{
    public static function pludiscgrp($status)
    {

        $arXmlId = $arNewCond = $resDiscGrpListID = array();
        TradexLog::clearFile("pludiscgrp.txt");
        TradexLog::addLog("Начало импорта файла pludiscgrp (" . $status . ")");
        $start = microtime(true);
        $arResult = TradexImport::getArrayByXml("pludiscgrp", $status);

        foreach ($arResult["pludiscgrp"] as $mdg => $arMDG) {
            foreach ($arMDG as $elem) {
                if (!in_array($elem["plu"], $arNewCond[$mdg])) $arNewCond[$mdg][] = $elem["plu"];
            }
            $arXmlId[] = $mdg;
        }

        $arDiscGrpListID = TradexGeneral::getListDiscGrp();
        foreach ($arDiscGrpListID as $XML_ID => $ID) {
            $arKey = explode("_", $XML_ID);
            $resDiscGrpListID[$arKey[1]][] = $ID;
        }
        $arDiscGrpListID = $resDiscGrpListID;
        unset($resDiscGrpListID);

        //массив с условиями ограничения действия скидок на товары
        $arCondDiscLimitProduct = TradexImport::getCondDiscountLimit(IBLOCK_ID_CATALOG);

        //массив с условиями ограничения действия скидок на торговые предложения
        $arCondDiscLimitOffers = TradexImport::getCondDiscountLimit(IBLOCK_ID_OFFERS);

        //id значения свойства ограничения действия скидки
        $db_enum_list = CIBlockProperty::GetPropertyEnum("DISCOUNT_LIMIT", Array(), Array("IBLOCK_ID" => IBLOCK_ID_OFFERS, "VALUE" => "Y"));
        if ($ar_enum_list = $db_enum_list->GetNext()) {
            $DISCOUNT_LIMIT_PROP_VALUE_ID = $ar_enum_list["ID"]; // id значения свойства для ограничения распространения скидки на товар
        }

        $arDiscGrpListNotes = TradexGeneral::getListDiscGrpNotes($arXmlId);

        //$arConditions = TradexGeneral::getDiscConditions($arXmlId, "PLU");
        $arActions = TradexGeneral::getDiscActions($arXmlId, "PLU");

        if (empty($DISCOUNT_LIMIT_PROP_VALUE_ID)) {
            TradexLog::addLog("Не определены свойства артикула и ограничения скидок при импорте файла artdiscgrp");
            return "ERROR";
        }

        foreach ($arNewCond as $mdg => $arPLU) {
            if ($mdg == 0) {
                $arProductID = array();
                $arSelect = Array("ID", "IBLOCK_ID", "XML_ID");
                $arFilter = array('IBLOCK_ID' => IBLOCK_ID_OFFERS, "XML_ID" => $arPLU);
                $obElement = new CIBlockElement;
                $res = $obElement->GetList(Array(), $arFilter, false, false, $arSelect);
                while ($ob = $res->GetNextElement()) {
                    $arItem = $ob->GetFields();
                    $arProductID[] = $arItem["ID"];
                }

                if (!empty($arProductID)) {
                    foreach ($arProductID as $PRODUCT_ID) {
                        $obElem = new CIBlockElement();
                        $obElem->SetPropertyValues($PRODUCT_ID, IBLOCK_ID_OFFERS, array("VALUE" => $DISCOUNT_LIMIT_PROP_VALUE_ID), "DISCOUNT_LIMIT");
                    }
                }
            } elseif (empty($arActions[$mdg])) continue;
            $oldCond = array();
            $oldAct = array();
            //$arCond = $arConditions[$mdg];
            $arAct = $arActions[$mdg];

            foreach ($arAct["CHILDREN"][0]["CHILDREN"][0]["CHILDREN"][1]["CHILDREN"] as $Child) {
                if (!in_array($Child["DATA"]["value"], $oldAct)) {
                    $oldAct[] = $Child["DATA"]["value"];
                }
            }

            if ($status != 3 || empty($oldAct)) {
                foreach ($arPLU as $plu) {
                    $arAct["CHILDREN"][0]["CHILDREN"][1]["CHILDREN"][] = TradexGeneral::getCondArray("PLU", $plu);
                }
            } else {
                foreach ($arPLU as $plu) {
                    if (!in_array($plu, $oldAct)){
                        $arAct["CHILDREN"][0]["CHILDREN"][1]["CHILDREN"][] = TradexGeneral::getCondArray("PLU", $plu);
                    }
                }
            }

            if (empty($arDiscGrpListNotes[$mdg])) {
                $active = "Y";
            } else {
                $days = explode(',', $arDiscGrpListNotes[$mdg]);
                $active = (in_array(date('N'), $days)) ? "Y" : "N";
            }
            $arFields = array(
                //"CONDITIONS" => serialize($arAct),
                "ACTIONS" => serialize($arAct),
                "ACTIVE" => $active
            );

            foreach ($arDiscGrpListID[$mdg] as $ID) {
             //   $arFields['LAST_DISCOUNT'] = "N";
                $ID = CSaleDiscount::Update($ID, $arFields);
                if ($ID) {
                    TradexLog::addLog("MDG скидки: " . $mdg . ", Обновлена скидка ID: " . $ID, "pludiscgrp.txt");
                } else {
                    TradexLog::addLog("Файл artdiscgrp, MDG скидки: " . $mdg . ", Ошибка при обновлении скидки, ID скидки: " . $ID, "error.txt");
                }
            }
        }

        TradexHash::addHash("pludiscgrp", $status);
        $end = microtime(true) - $start;
        TradexLog::addLog("Время выполнения " . $end . " : ");
        TradexLog::addLog("Конец импорта файла pludiscgrp");
    }
}
