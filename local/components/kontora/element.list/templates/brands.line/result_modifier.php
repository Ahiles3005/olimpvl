<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

$arImages = array();

foreach ($arResult["ITEMS"] as $key => $arItem) {
    $file = CFile::GetFileArray($arItem["PREVIEW_PICTURE"]["ID"]);
    $picture = CFile::ResizeImageGet(
        $file,
        array(
            "width" => 50,
            "height" => 50
        ),
        false
    );
    $arResult["ITEMS"][$key]["PREVIEW_PICTURE"]["SRC_SMALL"] = (!empty($picture["src"])) ? $picture["src"] : DEF_PIC_BRAND_LINE;
}