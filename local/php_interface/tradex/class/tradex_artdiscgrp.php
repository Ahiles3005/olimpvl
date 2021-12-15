<?
use Bitrix\Main,Bitrix\Sale\Internals;

Trait TradexArtDiscGrp
{
    public static function artdiscgrp($status)
    {
        TradexLog::clearFile("tests.txt");
        $arXmlId = $arNewCond = $resDiscGrpListID = array();
        $ARTICUL_PROP_ID = 0;
        TradexLog::clearFile("artdiscgrp.txt");
        TradexLog::addLog("Начало импорта файла artdiscgrp(" . $status . ")");
        $start = microtime(true);
        $arResult = TradexGeneral::getArrayByXml("artdiscgrp", $status);

        foreach ($arResult["artdiscgrp"] as $mdg => $arMDG) {
            foreach ($arMDG as $elem) {
                if (!in_array($elem["articul"], $arNewCond[$mdg])) $arNewCond[$mdg][] = $elem["articul"];
            }
            $arXmlId[] = $mdg;
        }

        //пересортировка массива пока, добавлял для старого массива
        foreach ($arNewCond as $mdg => $arArticul) {
            //TradexLog::addLog("be back", "tests.txt");
            ////старый метод
            //$dbProductDiscounts = CCatalogDiscount::GetList(
            //    array("SORT" => "ASC"),
            //    array(
            //        "ACTIVE" => "Y",
            //        //"!>ACTIVE_FROM" => $DB->FormatDate(date("Y-m-d H:i:s"), "YYYY-MM-DD HH:MI:SS", CSite::GetDateFormat("FULL")),
            //        //"!<ACTIVE_TO" => $DB->FormatDate(date("Y-m-d H:i:s"), "YYYY-MM-DD HH:MI:SS", CSite::GetDateFormat("FULL")),
            //        "COUPON" => ""
            //    ),
            //    false,
            //    false,
            //    array(
            //        "ID",
            //        "CONDITIONS"
            //    )
            //);

            //Internals\DiscountTable
            //$dbProductDiscounts = Internals\DiscountTable::getList(array(
            //    'select' => array("ID","CONDITIONS"),
            //    'filter' => array("ACTIVE" => "Y"),
            //));

            //CSaleDiscount
            $dbProductDiscounts = CSaleDiscount::GetList(
                array(),
                array("ACTIVE" => "Y"),
                false,
                false,
                array("ID","CONDITIONS","ACTIONS")
            );
            TradexLog::addLog("got to while", "tests.txt");
            //удаляем дубли в ACTIONS и CONDITIONS
            while ($arProductDiscounts = $dbProductDiscounts->Fetch()) {

                //$curConditions = unserialize($arProductDiscounts["CONDITIONS"]);
                $curActions = unserialize($arProductDiscounts["ACTIONS"]);

                //удаляем дубли для CONDITION
                /*$hasBeenUnset = false;
                foreach ($curConditions["CHILDREN"][0]["CHILDREN"][0]["CHILDREN"][0]["CHILDREN"] as $condCount => $condValue) {
                    if (in_array($condValue["DATA"]["value"], $arArticul)) {
                        if (count($curConditions["CHILDREN"][0]["CHILDREN"][0]["CHILDREN"][0]["CHILDREN"]) == 1) {
                            $curConditions["CHILDREN"][0]["CHILDREN"][0]["CHILDREN"][0]["CHILDREN"][$condCount]["DATA"]["value"] = "dummy_articul"; // заглушка, если скидка остается безусловной по артикулам
                        } else {
                            unset($curConditions["CHILDREN"][0]["CHILDREN"][0]["CHILDREN"][0]["CHILDREN"][$condCount]);
                        }
                        $hasBeenUnset = true;
                    }
                }
                if ($hasBeenUnset) {
                    array_merge($curConditions["CHILDREN"][0]["CHILDREN"][0]["CHILDREN"][0]["CHILDREN"]); //переиндексируем
                    //CCatalogDiscount::Update($arProductDiscounts["ID"], array("CONDITIONS" => $curConditions));
                    //Internals\DiscountTable::update($arProductDiscounts["ID"],["ACTIONS_LIST" => $curConditions]);
                    CSaleDiscount::Update($arProductDiscounts["ID"], array("CONDITIONS" => $curConditions));
                }*/

                //удаляем дубли для ACTION
                $hasBeenUnset = false;
                foreach ($curActions["CHILDREN"][0]["CHILDREN"][0]["CHILDREN"] as $actCount => $actValue) {
                    if (in_array($actValue["DATA"]["value"], $arArticul)) {
                        if (count($curActions["CHILDREN"][0]["CHILDREN"][0]["CHILDREN"]) == 1) {
                            $curActions["CHILDREN"][0]["CHILDREN"][0]["CHILDREN"][$actCount]["DATA"]["value"] = "dummy_articul"; // заглушка, если скидка остается безусловной по артикулам
                        } else {
                            unset($curActions["CHILDREN"][0]["CHILDREN"][0]["CHILDREN"][$actCount]);
                        }
                        $hasBeenUnset = true;
                    }
                }
                if ($hasBeenUnset) {
                    array_merge($curActions["CHILDREN"][0]["CHILDREN"][0]["CHILDREN"]); //переиндексируем
                    //CCatalogDiscount::Update($arProductDiscounts["ID"], array("CONDITIONS" => $curConditions));
                    //Internals\DiscountTable::update($arProductDiscounts["ID"],["ACTIONS_LIST" => $curConditions]);

                    CSaleDiscount::Update($arProductDiscounts["ID"], array("ACTIONS" => $curActions));
                }
            }
        }


        $properties = CIBlockProperty::GetList(Array("sort" => "asc", "name" => "asc"), Array("CODE" => "ARTICUL", "IBLOCK_ID" => IBLOCK_ID_CATALOG));
        if ($prop_fields = $properties->GetNext()) {
            $ARTICUL_PROP_ID = $prop_fields["ID"]; // id свойства артикула товара
        }

        //массив с условиями ограничения действия скидок на товары
        $arCondDiscLimitProduct = TradexImport::getCondDiscountLimit(IBLOCK_ID_CATALOG);

        //массив с условиями ограничения действия скидок на торговые предложения
        $arCondDiscLimitOffers = TradexImport::getCondDiscountLimit(IBLOCK_ID_OFFERS);

        //id значения свойства ограничения действия скидки
        $db_enum_list = CIBlockProperty::GetPropertyEnum("DISCOUNT_LIMIT", Array(), Array("IBLOCK_ID" => IBLOCK_ID_CATALOG, "VALUE" => "Y"));
        if ($ar_enum_list = $db_enum_list->GetNext()) {
            $DISCOUNT_LIMIT_PROP_VALUE_ID = $ar_enum_list["ID"]; // id значения свойства для ограничения распространения скидки на товар
        }

        $arDiscGrpListID = TradexGeneral::getListDiscGrp();
        foreach ($arDiscGrpListID as $XML_ID => $ID) {
            $arKey = explode("_", $XML_ID);
            $resDiscGrpListID[$arKey[1]][] = $ID;
        }
        $arDiscGrpListID = $resDiscGrpListID;
        unset($resDiscGrpListID);

        //$arConditions = TradexGeneral::getDiscConditions($arXmlId, "ARTICUL");
        $arActions = TradexGeneral::getDiscActions($arXmlId, "ARTICUL");


        $arDiscGrpListNotes = TradexGeneral::getListDiscGrpNotes($arXmlId);

        if (empty($DISCOUNT_LIMIT_PROP_VALUE_ID)) {
            TradexLog::addLog("Не определены свойства артикула и ограничения скидок при импорте файла artdiscgrp");
            return "ERROR";
        }

        foreach ($arNewCond as $mdg => $arArticul) {

            if ($mdg == 0) {
                /*
                $arProductID = TradexImport::gesListIdByArticul($arArticul);
                if (!empty($arProductID)) {
                    foreach ($arProductID as $PRODUCT_ID) {
                        $obElem = new CIBlockElement();
                        $obElem->SetPropertyValues($PRODUCT_ID, IBLOCK_ID_CATALOG, array("VALUE" => $DISCOUNT_LIMIT_PROP_VALUE_ID), "DISCOUNT_LIMIT");
                    }
                }
                */
            } elseif (empty($arActions[$mdg])) continue;

            /*$oldCond = array();
            $arCond = $arConditions[$mdg];*/

            $arAct = $arActions[$mdg];
            $oldAct = array();

            foreach ($arAct["CHILDREN"][0]["CHILDREN"][0]["CHILDREN"] as $Child) {
                if (!in_array($Child["DATA"]["value"], $oldAct)) {
                    $oldAct[] = $Child["DATA"]["value"];
                }
            }

            if ($status != 3 || empty($oldAct)) {
                foreach ($arArticul as $articul) {
                    //$arCondChild["CHILDREN"][0]["CHILDREN"][0]["CHILDREN"][] = TradexGeneral::getCondArray("ARTICUL", $articul, $ARTICUL_PROP_ID);
                    $arAct["CHILDREN"][0]["CHILDREN"][0]["CHILDREN"][] = TradexGeneral::getCondArray("ARTICUL", $articul, $ARTICUL_PROP_ID);
                }
            } else {
                foreach ($arArticul as $articul) {
                    $arAct["CHILDREN"][0]["CHILDREN"][0]["CHILDREN"][] = TradexGeneral::getCondArray("ARTICUL", $articul, $ARTICUL_PROP_ID);
                }
            }

            $arAct["CHILDREN"][0]["CHILDREN"][2] = $arCondDiscLimitProduct;
            $arAct["CHILDREN"][0]["CHILDREN"][3] = $arCondDiscLimitOffers;

            if (empty($arDiscGrpListNotes[$mdg])) {
                $active = "Y";
            } else {
                $days = explode(',', $arDiscGrpListNotes[$mdg]);
                $active = (in_array(date('N'), $days)) ? "Y" : "N";
            }
            $arFields = array(
                //"CONDITIONS" => serialize($arCond),
                "ACTIONS" => serialize($arAct),
                "ACTIVE" => $active,
                "LID" => SITE_ID,
            );

            foreach ($arDiscGrpListID[$mdg] as $ID) {

                /*$class = new CCatalogDiscount;
                $ID = $class->Update($ID, $arFields);*/

                //Internals\DiscountTable
                //$res = Internals\DiscountTable::update($ID,$arFields);
   //$arFields['LAST_DISCOUNT'] = "N";
                //CSaleDiscount
                $res = CSaleDiscount::Update($ID, $arFields);

                if ($res) {
                    TradexLog::addLog("MDG скидки: " . $mdg . ", Обновлена скидка ID: " . $ID, "artdiscgrp.txt");
                } else {
                    TradexLog::addLog("Файл artdiscgrp, MDG скидки: " . $mdg . ", Ошибка при обновлении скидки, ID скидки: " . $ID, "error.txt");
                }
            }
        }

        TradexHash::addHash("artdiscgrp", $status);
        $end = microtime(true) - $start;
        TradexLog::addLog("Время выполнения " . $end . " : ");
        TradexLog::addLog("Конец импорта файла artdiscgrp");
    }
}
