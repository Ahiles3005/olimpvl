<?


//die("ok");
    require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");

    $APPLICATION->SetTitle("Бренд");
?>
<div class="b-leftcolumn">
<?
	$APPLICATION->IncludeComponent("bitrix:catalog.section.list", "catalog_left_menu", array(
		"VIEW_MODE" 			=> "TEXT",
		"SHOW_PARENT_NAME" 		=> "Y",
		"IBLOCK_TYPE" 			=> "catalog",
		"IBLOCK_ID" 			=> IBLOCK_ID_CATALOG,
		"COUNT_ELEMENTS" 		=> "Y",
		"TOP_DEPTH" 			=> "3",
		"ADD_SECTIONS_CHAIN" 	=> "N",
		"CACHE_TYPE" 			=> "A",
		"CACHE_TIME" 			=> "36000000",
		"CACHE_GROUPS" 			=> "Y",
		"BREADCRUMB_LINK"		=> "/catalog/",
		"BRAND_CODE"			=> $_REQUEST["ELEMENT_CODE"],
		"FILTER_PROPERTY"		=> "BRAND",
	));
?>
</div>
<div class="b-main b-main-brand-catalog">
	<!-- хлебные крошки -->
	<?
		$APPLICATION->IncludeComponent("bitrix:breadcrumb", "main", array(
			"START_FROM" => "0",
			"PATH"       => "",
		));
	?>
	<h1 class="b-container__headline b-container__headline--catalog"><? $APPLICATION->ShowTitle(false); ?></h1>

	<!-- слайдер -->
	<?
		$APPLICATION->IncludeComponent("kontora:shares.banner", "banners", array(
			"TYPE"		 => "NEW_BANNER_TYPE",
			"NOINDEX"    => "Y",
			"BY" 	     => "s_weight",
			"ORDER"      => "desc",
			"CACHE_TYPE" => "A",
            "CACHE_TIME" => "0"
		));
	?>
	<!-- баннер -->
	<?
		$APPLICATION->IncludeComponent("kontora:shares.banner", "brand.banners", array(
			"TYPE"	     => "BRAND_BANNER_TYPE",
			"NOINDEX"    => "Y",
			"BY" 	     => "s_weight",
			"ORDER"      => "desc",
			"CACHE_TYPE" => "A",
            "CACHE_TIME" => "0"
		));

		$APPLICATION->IncludeComponent("bitrix:news.detail", "brand_about", array(
			"DISPLAY_DATE" 				=> "Y",
			"DISPLAY_NAME" 				=> "Y",
			"DISPLAY_PICTURE" 			=> "Y",
			"DISPLAY_PREVIEW_TEXT" 		=> "Y",
			"USE_SHARE" 				=> "Y",
			"SHARE_HIDE" 				=> "N",
			"SHARE_TEMPLATE" 			=> "",
			"SHARE_HANDLERS" 			=> array("delicious"),
			"SHARE_SHORTEN_URL_LOGIN" 	=> "",
			"SHARE_SHORTEN_URL_KEY" 	=> "",
			"AJAX_MODE" 				=> "N",
			"IBLOCK_TYPE" 				=> "catalog",
			"IBLOCK_ID" 				=> IBLOCK_ID_BRAND,
			"ELEMENT_ID" 				=> '',
			"ELEMENT_CODE" 				=> $_REQUEST["ELEMENT_CODE"],
			"CHECK_DATES" 				=> "Y",
			"FIELD_CODE" 				=> array("ID"),
			"PROPERTY_CODE" 			=> array("DESCRIPTION"),
			"IBLOCK_URL" 				=> "",
			"DETAIL_URL" 				=> "",
			"SET_TITLE" 				=> "Y",
			"SET_CANONICAL_URL" 		=> "Y",
			"SET_BROWSER_TITLE" 		=> "Y",
			"BROWSER_TITLE" 			=> "-",
			"SET_META_KEYWORDS" 		=> "Y",
			"META_KEYWORDS" 			=> "-",
			"SET_META_DESCRIPTION" 		=> "Y",
			"META_DESCRIPTION" 			=> "-",
			"SET_STATUS_404" 			=> "Y",
			"SET_LAST_MODIFIED" 		=> "Y",
			"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
			"ADD_SECTIONS_CHAIN" 		=> "N",
			"ADD_ELEMENT_CHAIN" 		=> "Y",
			"ACTIVE_DATE_FORMAT" 		=> "d.m.Y",
			"USE_PERMISSIONS" 			=> "N",
			"GROUP_PERMISSIONS" 		=> array("1"),
			"CACHE_TYPE" 				=> "A",
			"CACHE_TIME" 				=> "3600",
			"CACHE_GROUPS" 				=> "Y",
			"DISPLAY_TOP_PAGER" 		=> "Y",
			"DISPLAY_BOTTOM_PAGER" 		=> "Y",
			"PAGER_TITLE" 				=> "Страница",
			"PAGER_TEMPLATE" 			=> "",
			"PAGER_SHOW_ALL" 			=> "Y",
			"PAGER_BASE_LINK_ENABLE" 	=> "Y",
			"SET_STATUS_404" 			=> "Y",
			"SHOW_404" 					=> "N",
			"MESSAGE_404" 				=> "",
			"PAGER_BASE_LINK" 			=> "",
			"PAGER_PARAMS_NAME" 		=> "arrPager",
			"AJAX_OPTION_JUMP" 			=> "N",
			"AJAX_OPTION_STYLE" 		=> "Y",
			"AJAX_OPTION_HISTORY" 		=> "N"
		));

		$APPLICATION->IncludeComponent("bitrix:catalog.section.list", "step1", array(
			"VIEW_MODE" 			=> "TEXT",
			"SHOW_PARENT_NAME" 		=> "Y",
			"IBLOCK_TYPE" 			=> "catalog",
			"IBLOCK_ID" 			=> IBLOCK_ID_CATALOG,
			"COUNT_ELEMENTS" 		=> "Y",
			"TOP_DEPTH" 			=> "3",
			"ADD_SECTIONS_CHAIN" 	=> "N",
			"CACHE_TYPE" 			=> "A",
			"CACHE_TIME" 			=> "36000000",
			"CACHE_GROUPS" 			=> "Y",
			"BRAND_CODE"			=> $_REQUEST["ELEMENT_CODE"],
			"FILTER_PROPERTY"		=> "BRAND",
		));
	?>
</div>
<? require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php"); ?>