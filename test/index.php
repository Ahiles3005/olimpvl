<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Demo");
$keyCity = (empty($_COOKIE['KEY_CITY'])) ? Olimp\City::getDefaultCityCode() : $_COOKIE['KEY_CITY'];
if (!$keyCity) $keyCity = 'vladivostok';

?>
<script src="<?php echo SITE_TEMPLATE_PATH."/js/owl.carousel/owl.carousel.min.js";?>" type="text/javascript"></script>
<link media="print" rel="stylesheet" href="<?php echo SITE_TEMPLATE_PATH."/js/owl.carousel/owl.carousel.min.css";?>">
<?

$APPLICATION->IncludeComponent(
    "bitrix:catalog.section.list",
    "popular",
    Array(
        "ADD_SECTIONS_CHAIN" => "N",
        "CACHE_GROUPS" => "Y",
        "CACHE_TIME" => "36000000",
        "CACHE_TYPE" => "A",
        "COMPOSITE_FRAME_MODE" => "A",
        "COMPOSITE_FRAME_TYPE" => "AUTO",
        "COUNT_ELEMENTS" => "Y",
        "IBLOCK_ID" => "1",
        "IBLOCK_TYPE" => "CATALOG",
        "SECTION_CODE" => "",
        "SECTION_FIELDS" => array("PICTURE", ""),
        "SECTION_ID" => "",
        "SECTION_URL" => "",
        "SECTION_USER_FIELDS" => array("", ""),
        "TOP_DEPTH" => "5",
        "UF_FILTER" => array(
            "!UF_POPULAR_SECTION"=>false
        )
    )
);

$APPLICATION->IncludeComponent(
    "kontora:element.list",
    "popular",
    Array(
        "CATALOG_PAGE" => "search",
        "CATALOG_TYPE" => "tile",
        "CITY_CODE" => $keyCity,
        "ELEMENT_COUNT" => "12",
        "FILTER" => array("!PROPERTY_DISCOUNT" => false),
        "HTML_TYPE" => array(''),
        "IBLOCK_ID" => IBLOCK_ID_CATALOG,
        "ITEM_TEMPLATE" => "",
        "MAIN_TYPE" => "sale",
        "ORDER" => array('id' => 'asc'),
        "PAGER_PARAMS_NAME" => "",
        "PROPS" => array("CODE" => "PICTURES"),
        "SELECT" => array("IBLOCK_ID", "ID", 'NAME', 'DETAIL_PAGE_URL', 'PREVIEW_PICTURE', "PROPERTY_MIN_PRICE_" . $keyCity, "PROPERTY_NEW", "PROPERTY_BEST_PRICE", "PROPERTY_BEST", "PROPERTY_DISCOUNT", "PROPERTY_ARTICUL"),
        "SHOW_NAV_BLOCK" => "N"
    )
);
/*$APPLICATION->IncludeComponent(
	"bitrix:form", 
	".default", 
	array(
		"AJAX_MODE" => "N",
		"AJAX_OPTION_ADDITIONAL" => "",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "N",
		"CACHE_TIME" => "3600",
		"CACHE_TYPE" => "A",
		"CHAIN_ITEM_LINK" => "",
		"CHAIN_ITEM_TEXT" => "",
		"COMPOSITE_FRAME_MODE" => "A",
		"COMPOSITE_FRAME_TYPE" => "AUTO",
		"EDIT_ADDITIONAL" => "N",
		"EDIT_STATUS" => "Y",
		"IGNORE_CUSTOM_TEMPLATE" => "Y",
		"NOT_SHOW_FILTER" => array(
			0 => "",
			1 => "",
		),
		"NOT_SHOW_TABLE" => array(
			0 => "",
			1 => "",
		),
		"RESULT_ID" => $_REQUEST[RESULT_ID],
		"SEF_MODE" => "N",
		"SHOW_ADDITIONAL" => "Y",
		"SHOW_ANSWER_VALUE" => "N",
		"SHOW_EDIT_PAGE" => "N",
		"SHOW_LIST_PAGE" => "N",
		"SHOW_STATUS" => "Y",
		"SHOW_VIEW_PAGE" => "Y",
		"START_PAGE" => "new",
		"SUCCESS_URL" => "",
		"USE_EXTENDED_ERRORS" => "Y",
		"WEB_FORM_ID" => "6",
		"COMPONENT_TEMPLATE" => ".default",
		"VARIABLE_ALIASES" => array(
			"action" => "action",
		)
	),
	false
);*/

?>
<script>
    $(function(){
    	$(document).resize();
    });
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>