<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Поиск");
?>
<?
$APPLICATION->IncludeComponent(
	"arturgolubev:search.page",
	"",
	array(
		"AJAX_MODE" => "Y",
		"AJAX_OPTION_ADDITIONAL" => "",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"CACHE_TIME" => "3600",
		"CACHE_TYPE" => "A",
		"CHECK_DATES" => "N",
		"COMPOSITE_FRAME_MODE" => "A",
		"COMPOSITE_FRAME_TYPE" => "AUTO",
		"DEFAULT_SORT" => "rank",
		"DISPLAY_BOTTOM_PAGER" => "Y",
		"DISPLAY_TOP_PAGER" => "Y",
		"FILTER_NAME" => "",
		"NO_WORD_LOGIC" => "N",
		"PAGER_SHOW_ALWAYS" => "Y",
		"PAGER_TEMPLATE" => "",
		"PAGER_TITLE" => "Результаты поиска",
		"PAGE_RESULT_COUNT" => "50",
		"PATH_TO_USER_PROFILE" => "",
		"RATING_TYPE" => "",
		"RESTART" => "Y",
		"SHOW_RATING" => "",
		"SHOW_WHEN" => "N",
		"SHOW_WHERE" => "N",
		"USE_LANGUAGE_GUESS" => "Y",
		"USE_SUGGEST" => "Y",
		"USE_TITLE_RANK" => "N",
		"arrFILTER" => array(
			0 => "iblock_news",
			1 => "iblock_1c_catalog",
			2 => "iblock_CATALOG",
			3 => "iblock_CONTENT",
			4 => "blog",
		),
		"arrFILTER_forum" => array(
			0 => "all",
		),
		"arrFILTER_main" => array(
			0 => "12345",
		),
		"arrWHERE" => "",
		"COMPONENT_TEMPLATE" => ".default",
		"arrFILTER_iblock_news" => array(
			0 => "all",
		),
		"arrFILTER_iblock_CATALOG" => array(
			0 => "all",
		),
		"arrFILTER_iblock_CONTENT" => array(
			0 => "all",
		),
		"arrFILTER_iblock_1c_catalog" => array(
			0 => "all",
		),
		"arrFILTER_blog" => array(
			0 => "all",
		),
		"INPUT_PLACEHOLDER" => "",
		"PRICE_CODE" => array("vladivostok","ussurijsk","arsenev","naxodka","komsomolsk_na_amure","BASE"),
		"PRICE_VAT_INCLUDE" => "Y"
	),
	false
);
?>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
