<?
    require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
	$APPLICATION->SetPageProperty("TITLE", "Новости");
	$APPLICATION->SetPageProperty("keywords", "ключевые слова");
	$APPLICATION->SetPageProperty("description", "Описание");
    $APPLICATION->SetTitle("Новости");

	$product_count   = (isset($_REQUEST['productCount']) && !empty($_REQUEST['productCount'])) ? intval($_REQUEST['productCount']) : 24;
	$APPLICATION->IncludeComponent("bitrix:news", "news", array(
		"IBLOCK_TYPE"					 => "CONTENT",
		"IBLOCK_ID"						 => IBLOCK_ID_NEWS,
		"NEWS_COUNT"					 => $product_count,
		"SORT_BY1"						 => "ACTIVE_FROM",
		"SORT_ORDER1"					 => "DESC",
		"SORT_BY2"						 => "SORT",
		"SORT_ORDER2"					 => "ASC",
		"CHECK_DATES"					 => "Y",
		"SEF_MODE"						 => "Y",
		"CACHE_TYPE"					 => "A",
		"CACHE_TIME"					 => "36000000",
		"CACHE_FILTER"					 => "N",
		"CACHE_GROUPS"					 => "Y",
		"SET_LAST_MODIFIED"				 => "N",
		"INCLUDE_IBLOCK_INTO_CHAIN"		 => "N",
		"ADD_SECTIONS_CHAIN"	 		 => "N",
		"ADD_ELEMENT_CHAIN"				 => "Y",
		"LIST_ACTIVE_DATE_FORMAT"		 => "d.m.Y",
		"DETAIL_SET_CANONICAL_URL"		 => "N",
		"DETAIL_ACTIVE_DATE_FORMAT"		 => "d.m.Y",
		"DETAIL_DISPLAY_TOP_PAGER"	 	 => "N",
		"DETAIL_DISPLAY_BOTTOM_PAGER"	 => "Y",
		"DETAIL_PAGER_TEMPLATE"			 => "",
		"DETAIL_PAGER_SHOW_ALL"			 => "Y",
		"PAGER_TEMPLATE"				 => ".default",
		"DISPLAY_TOP_PAGER"				 => "N",
		"DISPLAY_BOTTOM_PAGER"			 => "Y",
		"PAGER_SHOW_ALWAYS"				 => "Y",
		"PAGER_DESC_NUMBERING"			 => "N",
		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
		"PAGER_SHOW_ALL"				 => "N",
		"PAGER_BASE_LINK_ENABLE"		 => "Y",
		"SET_STATUS_404"				 => "N",
		"SHOW_404"						 => "N",
		"MESSAGE_404"					 => "",
		"COMPONENT_TEMPLATE"			 => "news",
		"SEF_FOLDER"					 => "/news/",
		"PAGER_BASE_LINK"				 => "",
		"PAGER_PARAMS_NAME"				 => "arrPager",
		"SEF_URL_TEMPLATES"				 => array(
			"news"	  => "",
			"section" => "",
			"detail"  => "#ELEMENT_CODE#/",
		),
		'TITLE_RIGHT' 					 => 'Другие новости'
	), false);

    require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");