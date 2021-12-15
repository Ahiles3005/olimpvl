<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

$arImages = array();
foreach (range('A', 'Z') as $i) $arResult["LETTERS"][] = $i;
/*
foreach ($arResult["ITEMS"] as $key => $arItem) {
    $k = $arItem["PREVIEW_PICTURE"]['HEIGHT'] / 51;
    $arImages['IMAGES'][$key] = CFile::ResizeImageGet(
        $arItem["PREVIEW_PICTURE"],
        array(
            "width" => round($arItem["PREVIEW_PICTURE"]['WIDTH'] / $k),
            "height" => 51
        )
    );
    $arResult['ELEMENT_IMG'][$key] = $arImages['IMAGES'][$key]['src'];
}
    */