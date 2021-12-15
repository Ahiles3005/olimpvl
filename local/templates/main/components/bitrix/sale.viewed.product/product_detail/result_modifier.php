<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

if (!empty($arResult)) {
    $listID  = array();
    $listKey = array();

    foreach ($arResult as $key => $arItem) {
        $listID[$key] = $arItem["PRODUCT_ID"];
        $listKey[$arItem["PRODUCT_ID"]] = $key;
    }

    $arProp = array();

    $arSelect = array("ID", "IBLOCK_ID", "PROPERTY_PICTURES");
    $arFilter = array(
        "IBLOCK_ID" => IBLOCK_ID_CATALOG,
        "ID"        => $listID
    );
    $res = CIBlockElement::GetList(array(), $arFilter, false, false, $arSelect);
    while ($ob = $res->GetNextElement()) {
        $arFields = $ob->GetFields();
        $arProp = $ob->GetProperties(array(),array("CODE" => "PICTURES"));
        $mainPicKey = getMainPictureKey($arProp["PICTURES"]["DESCRIPTION"]);
        $picture = CFile::ResizeImageGet($arProp['PICTURES']['VALUE'][$mainPicKey], array('width' => 170, 'height' => 170), BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false);
        $arProp[$arFields["ID"]] = ( $picture["src"] ) ? $picture["src"] : DEF_PIC_VIEWED;
    }

    foreach ($arResult as $key => $arItem) {
        $arResult[$key]["PICTURE"] = $arProp[$arItem["PRODUCT_ID"]];
        $minPrice = 0;
        foreach ($arItem["OFFERS"] as $offer) {
            $price = $offer["PRICES"][$arParams["PRICE_CODE"][0]]["DISCOUNT_VALUE"];
            if (($minPrice == 0) || ($minPrice > $price)) $minPrice = $price;
        }
        if ($minPrice > 0) $arResult[$key]["PRICE"] = $minPrice;
    }
}