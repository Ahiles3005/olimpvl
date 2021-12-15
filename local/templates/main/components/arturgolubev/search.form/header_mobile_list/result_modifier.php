<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

$cntSearch = 10;
$cache = new CPHPCache();
$cache_time = 86400;
$cache_id = 'arCntSearch'.$cntSearch;
$cache_path = 'arCntSearch';

if ($cache_time > 0 && $cache->InitCache($cache_time, $cache_id, $cache_path))
{
    $res = $cache->GetVars();

    if (is_array($res))
        $arResult['PRODUNCT_CNT_STRING'] = $res["arCntSearch"];
}
if (!($arResult['PRODUNCT_CNT_STRING'])){
    if (CModule::IncludeModule('iblock')) {
        $arFilter = array(
            "IBLOCK_ID" => IBLOCK_ID_CATALOG,
            "ACTIVE"    => "Y"
        );
        $arResult['PRODUCTS_CNT'] = CIBlockElement::GetList(array(), $arFilter, array(), false, array());
        $arResult['PRODUNCT_CNT_STRING'] = declOfNum($arResult['PRODUCTS_CNT'], array('товара', 'товаров', 'товаров'));
    }
    //////////// end cache /////////
    if ($cache_time > 0)
    {
        $cache->StartDataCache($cache_time, $cache_id, $cache_path);
        $cache->EndDataCache(array("arCntSearch"=>$arResult['PRODUNCT_CNT_STRING']));
    }
}