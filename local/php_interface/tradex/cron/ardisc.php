<?php
require_once(dirname(__FILE__)."/../main.php");
$status = 3;

TradexLog::clearFile("tests.txt");
TradexLog::addLog("start", "tests.txt");

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

foreach ($arNewCond as $mdg => $arArticul) {
/*  */
    TradexLog::addLog("be back", "tests.txt");
    $dbProductDiscounts = CCatalogDiscount::GetList(
        array("SORT" => "ASC"),
        array(
            "ACTIVE" => "Y",
            "!>ACTIVE_FROM" => $DB->FormatDate(date("Y-m-d H:i:s"), "YYYY-MM-DD HH:MI:SS", CSite::GetDateFormat("FULL")),
            "!<ACTIVE_TO" => $DB->FormatDate(date("Y-m-d H:i:s"), "YYYY-MM-DD HH:MI:SS", CSite::GetDateFormat("FULL")),
            "COUPON" => ""
        ),
        false,
        false,
        array(
            "ID",
            "CONDITIONS"
        )
    );
    TradexLog::addLog("got to while", "tests.txt");
    while ($arProductDiscounts = $dbProductDiscounts->Fetch()) {
        $curConditions = unserialize($arProductDiscounts["CONDITIONS"]);
        $hasBeenUnset = false;
        foreach ($curConditions["CHILDREN"][0]["CHILDREN"] as $condCount => $condValue) {
            if (in_array($condValue["DATA"]["value"], $arArticul)) {
                //TradexLog::addLog("got to del", "tests.txt");
                if (count($curConditions["CHILDREN"][0]["CHILDREN"]) == 1) {
                    TradexLog::addLog("there you are!", "tests.txt");
                    $curConditions["CHILDREN"][0]["CHILDREN"][$condCount]["DATA"]["value"] = "dummy_articul";
                } else {
                    unset($curConditions["CHILDREN"][0]["CHILDREN"][$condCount]);
                }
                $hasBeenUnset = true;
            }
        }
        if ($hasBeenUnset) {
            array_merge($curConditions["CHILDREN"][0]["CHILDREN"]); //переиндексируем
            CCatalogDiscount::Update($arProductDiscounts["ID"], array("CONDITIONS" => $curConditions));
        }
    }
    TradexLog::addLog("got out", "tests.txt");

/* */
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

$arConditions = TradexGeneral::getDiscConditions($arXmlId, "ARTICUL");

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
    } elseif (empty($arConditions[$mdg])) continue;

    $oldCond = array();
    $arCond = $arConditions[$mdg];
    foreach ($arCond["CHILDREN"][0]["CHILDREN"] as $Child) {
        if (!in_array($Child["DATA"]["value"], $oldCond)) {
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
            if (!in_array($articul, $oldCond)) $arCondChild["CHILDREN"][] = TradexGeneral::getCondArray("ARTICUL", $articul, $ARTICUL_PROP_ID);
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
        $class = new CCatalogDiscount;
        $ID = $class->Update($ID, $arFields);
        if ($ID) {
            TradexLog::addLog("MDG скидки: " . $mdg . ", Обновлена скидка ID: " . $ID, "artdiscgrp.txt");
        } else {
            TradexLog::addLog("Файл artdiscgrp, MDG скидки: " . $mdg . ", Ошибка при обновлении скидки, ID скидки: " . $ID, "error.txt");
        }
    }
}

TradexLog::addLog("ended", "tests.txt");
TradexHash::addHash("artdiscgrp", $status);
$end = microtime(true) - $start;
TradexLog::addLog("Время выполнения " . $end . " : ");
TradexLog::addLog("Конец импорта файла artdiscgrp");
echo "ok artdisc";