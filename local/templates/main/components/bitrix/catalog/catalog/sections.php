<?
	if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

	$this->setFrameMode(true);

    $APPLICATION->IncludeComponent("bitrix:breadcrumb", "main", array(
        "START_FROM" => "0",
        "PATH"       => "/",
    ));

    $APPLICATION->AddChainItem("Все товары", $APPLICATION->GetCurDir());
?>
<h1 class="b-container__headline"><?$APPLICATION->ShowTitle()?></h1>

<?
   $APPLICATION->IncludeComponent("bitrix:catalog.section.list", "all_products", array(
        "VIEW_MODE" 			=> "TEXT",
        "SHOW_PARENT_NAME" 		=> "Y",
        "IBLOCK_TYPE" 			=> "catalog",
        "IBLOCK_ID" 			=> IBLOCK_ID_CATALOG,
        "SECTION_ID" 			=> $_REQUEST["SECTION_ID"],
        "COUNT_ELEMENTS" 		=> "Y",
        "TOP_DEPTH" 			=> "3",
        "ADD_SECTIONS_CHAIN" 	=> "N",
        "CACHE_TYPE" 			=> "N",
        "CACHE_TIME" 			=> "36000000",
        "ORDER" 				=> array("SORT" => "asc"),
        "CACHE_GROUPS" 			=> "Y",
		"BREADCRUMB_LINK"		=> "/catalog/"
    ));
?>