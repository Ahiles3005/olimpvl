<?
	require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("keywords", "бренды, купить бренд, бренд обуви, бренд одежды, все бренды, магазин брендовых товаров, магазин брендовой одежды, магазин брендовой обуви, где купить брендовые товары");
$APPLICATION->SetPageProperty("description", "Список 100 самых популярных брендов в мире — рейтинг лучших брендов одежды, обуви, товаров для спорта и туризма. Каталог лучших брендов мира. Не нашли любимый бренд? Напишите или позвоните нам");
$APPLICATION->SetPageProperty("TITLE", "Все бренды");
	$APPLICATION->SetTitle("Все бренды");

	$alfabetRus = array("а%", "б%", "в%", "г%", "д%", "е%", "ё%", "ж%", "з%", "и%", "й%", "к%", "л%", "м%", "н%", "о%", "п%", "р%", "с%", "т%", "у%", "ф%", "х%", "ц%", "ч%", "ш%", "щ%", "э%", "ю%", "я%");
	if (isset($_REQUEST["brandName"]) && !empty($_REQUEST["brandName"])) {
		if ($_REQUEST["brandName"] == "rus") {
			$GLOBALS['arrFilterBrands']['NAME'] = $alfabetRus;
		} else {
			$GLOBALS['arrFilterBrands']['NAME'][] = mb_strtolower($_REQUEST["brandName"])."%";
			$GLOBALS['arrFilterBrands']['NAME'][] = mb_strtoupper($_REQUEST["brandName"])."%";
		}
	}

	$APPLICATION->IncludeComponent("bitrix:breadcrumb", "main", array(
		"START_FROM" => "0",
		"PATH"       => "",
	));
?>

<h1 class="b-container__headline b-container__headline--catalog"><?= $APPLICATION->ShowTitle("Все бренды"); ?></h1>

<?
	$product_count   = (isset($_REQUEST['productCount']) && !empty($_REQUEST['productCount'])) ? intval($_REQUEST['productCount']) : 24;

	$APPLICATION->IncludeComponent("bitrix:news.list", "brands", array(
		"AJAX_MODE" 				=> "N",
		"IBLOCK_TYPE" 				=> "catalog",
		"IBLOCK_ID" 				=> IBLOCK_ID_BRAND,
		"NEWS_COUNT" 				=> $product_count,
		"SORT_BY1" 					=> "NAME",
		"SORT_ORDER1" 				=> "ASC",
		"SORT_BY2" 					=> "ID",
		"SORT_ORDER2" 				=> "DESC",
		"FILTER_NAME" 				=> "arrFilterBrands",
		"FIELD_CODE" 				=> array("ID"),
		"PROPERTY_CODE" 			=> array("DESCRIPTION"),
		"CHECK_DATES" 				=> "Y",
		"ACTIVE_DATE_FORMAT" 		=> "d.m.Y",
		"SET_TITLE" 				=> "N",
		"SET_BROWSER_TITLE" 		=> "N",
		"SET_META_KEYWORDS" 		=> "N",
		"SET_META_DESCRIPTION" 		=> "N",
		"SET_LAST_MODIFIED" 		=> "Y",
		"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
		"ADD_SECTIONS_CHAIN" 		=> "N",
		"HIDE_LINK_WHEN_NO_DETAIL" 	=> "Y",
		"INCLUDE_SUBSECTIONS" 		=> "N",
		"CACHE_TYPE" 				=> "A",
		"CACHE_TIME" 				=> "3600",
		"CACHE_FILTER" 				=> "Y",
		"CACHE_GROUPS" 				=> "Y",
		"DISPLAY_TOP_PAGER" 		=> "N",
		"DISPLAY_BOTTOM_PAGER" 		=> "Y",
		"SET_STATUS_404" 			=> "Y",
		"SHOW_404" 					=> "Y",
		"AJAX_OPTION_JUMP" 			=> "N",
		"AJAX_OPTION_STYLE" 		=> "Y",
		"AJAX_OPTION_HISTORY" 		=> "N",
	));

	require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");
?>