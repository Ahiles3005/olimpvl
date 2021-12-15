<?
    if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

    global $APPLICATION;

    $aMenuLinksExt = $APPLICATION->IncludeComponent("bitrix:menu.sections", "", array(
        "IS_SEF"           => "Y",
        "SEF_BASE_URL"     => "/",
        "SECTION_PAGE_URL" => "/catalog/#SECTION_CODE_PATH#/",
        "DETAIL_PAGE_URL"  => "/catalog/#SECTION_CODE_PATH#/#ELEMENT_CODE#/",
        "IBLOCK_TYPE"      => "CATALOG",
        "IBLOCK_ID"        => IBLOCK_ID_CATALOG,
        "DEPTH_LEVEL"      => "1",
        "CACHE_TYPE"       => "A",
        "CACHE_TIME"       => "36000000",
        'ORDER'            => array('sort' => 'asc'),
    ), false);

    $aMenuLinks = array_merge($aMenuLinks, $aMenuLinksExt);

    $aMenuLinks[] = array(
        "Бренды",
        "/brands/",
        array(),
        array(),
        ""
    );

    $aMenuLinks[] = array(
        "Все товары",
        "/catalog/",
        array(),
        array(),
        ""
    );