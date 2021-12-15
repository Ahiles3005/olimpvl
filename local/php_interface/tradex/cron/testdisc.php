<?
require_once(dirname(__FILE__)."/../main.php");

$arXmlId = $arNewCond = $resDiscGrpListID = array();
$ARTICUL_PROP_ID = 0;
    TradexLog::clearFile("test.txt");
    //TradexLog::addLog("Начало импорта файла artdiscgrp(" . $status . ")");
    //$start = microtime(true);
    $arResult = TradexGeneral::getArrayByXml("artdiscgrp", 3);
    foreach ($arResult["artdiscgrp"] as $mdg => $arMDG) {
        foreach ($arMDG as $elem) {
            if (!in_array($elem["articul"], $arNewCond[$mdg])) $arNewCond[$mdg][] = $elem["articul"];
        }
        $arXmlId[] = $mdg;
    }

    //TradexLog::addLog(print_r($arXmlId, true), "test.txt");
    //TradexLog::addLog(print_r($arNewCond, true), "test.txt"); размер новой скидки -> товары

    $properties = CIBlockProperty::GetList(Array("sort" => "asc", "name" => "asc"), Array("CODE" => "ARTICUL", "IBLOCK_ID" => IBLOCK_ID_CATALOG));
    if ($prop_fields = $properties->GetNext()) {
        $ARTICUL_PROP_ID = $prop_fields["ID"]; // id свойства артикула товара
    }

    //массив с условиями ограничения действия скидок на товары
    $arCondDiscLimitProduct = TradexImport::getCondDiscountLimit(IBLOCK_ID_CATALOG);
    //пусто

    //массив с условиями ограничения действия скидок на торговые предложения
    $arCondDiscLimitOffers = TradexImport::getCondDiscountLimit(IBLOCK_ID_OFFERS);
    //TradexLog::addLog(print_r($arCondDiscLimitOffers, true), "test.txt");
    //не 1003

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

    $arConditions = TradexGeneral::getDiscConditions($arXmlId, "ARTICUL");
    //TradexLog::addLog(print_r($arConditions, true), "test.txt");

    $arDiscGrpListNotes = TradexGeneral::getListDiscGrpNotes($arXmlId);

    if (empty($DISCOUNT_LIMIT_PROP_VALUE_ID)) {
        //TradexLog::addLog("Не определены свойства артикула и ограничения скидок при импорте файла artdiscgrp");
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
        } elseif (empty($arConditions[$mdg])) continue; //если нет скидок такой величины - пропускаем

        $oldCond = array();
        $arCond = $arConditions[$mdg];
        //$arConditions - существуюшие условия
        foreach ($arCond["CHILDREN"][0]["CHILDREN"] as $Child) { //чилдрен0чилдрен - конкретно условия через "или" по артикулам
            if (!in_array($Child["DATA"]["value"], $oldCond)) { //если артикул еще не записали в олдконд
                $oldCond[] = $Child["DATA"]["value"];
            }
        }

        if ($status != 3 || empty($oldCond)) {
            $arCondChild = TradexGeneral::getCondArray("CondGroupOR");
            foreach ($arArticul as $articul) {
                $arCondChild["CHILDREN"][] = TradexGeneral::getCondArray("ARTICUL", $articul, $ARTICUL_PROP_ID);
            }
        } else {
            $arCondChild = $arCond["CHILDREN"][0];
            foreach ($arArticul as $articul) {
                if (!in_array($articul, $oldCond)) $arCondChild["CHILDREN"][] = TradexGeneral::getCondArray("ARTICUL", $articul, $ARTICUL_PROP_ID); //добавляем маленький массивчик с условием
            }
        }

        $arCond["CHILDREN"][0] = $arCondChild;
        $arCond["CHILDREN"][2] = $arCondDiscLimitProduct;
        $arCond["CHILDREN"][3] = $arCondDiscLimitOffers;

        if (empty($arDiscGrpListNotes[$mdg])) {
            $active = "Y";
        } else {
            $days = explode(',', $arDiscGrpListNotes[$mdg]);
            $active = (in_array(date('N'), $days)) ? "Y" : "N";
        }
        $arFields = array(
            "CONDITIONS" => $arCond,
            "ACTIVE" => $active
        );

        foreach ($arDiscGrpListID[$mdg] as $ID) {
            /* $class = new CCatalogDiscount;
            $ID = $class->Update($ID, $arFields); */
            //if ($ID) {
                //TradexLog::addLog("MDG скидки: " . $mdg . ", Обновлена скидка ID: " . $ID, "artdiscgrp.txt");
            //} else {
                //TradexLog::addLog("Файл artdiscgrp, MDG скидки: " . $mdg . ", Ошибка при обновлении скидки, ID скидки: " . $ID, "error.txt");
            //}
            TradexLog::addLog(print_r($arFields, true), "test.txt");
        }
    }

    //TradexHash::addHash("artdiscgrp", $status);
    //$end = microtime(true) - $start;
    //TradexLog::addLog("Время выполнения " . $end . " : ");
    //TradexLog::addLog("Конец импорта файла artdiscgrp");
//}