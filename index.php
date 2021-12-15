<?php

header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Cache-Control: no-store, no-cache, must-revalidate');
header('Cache-Control: post-check=0, pre-check=0', FALSE);
header('Pragma: no-cache');

    require($_SERVER['DOCUMENT_ROOT'].'/bitrix/header.php');

$APPLICATION->SetPageProperty("tags", "спорт, велосипеды, лодки, моторы");
$APPLICATION->SetPageProperty("description", "ОЛИМП — крупнейшая сеть спортивных магазинов на Дальнем Востоке и Сибири. Горные лыжи, одежда и обувь, salomon, тренажеры, палатки, спальные мешки");
$APPLICATION->SetPageProperty("keywords", "Велосипеды, лодочные моторы, подвесные моторы, надувные лодки, транцевые лодки, палатки, спортивная одежда, кроссовки, тренажеры, беговые дорожки, велотренажеры, эллипсоид, спортивное питание, термос, кемпинговая мебель, сапборд, гидрокостюм, подводная маска, дайвинг, подводная охота");
$APPLICATION->SetPageProperty("title", "Олимп — сеть спортивных магазинов");
    $APPLICATION->SetTitle("Сеть спортивных магазинов Олимп");
    $keyCity = (empty($_COOKIE['KEY_CITY'])) ? Olimp\City::getDefaultCityCode() : $_COOKIE['KEY_CITY'];
    if(!$keyCity) $keyCity = 'vladivostok';
?>
<div class="b-indexbanners">
	 <?$APPLICATION->IncludeComponent(
	"kontora:shares.banner",
	"home.banners",
	Array(
		"BY" => "s_weight",
		"CACHE_TIME" => "86400",
		"CACHE_TYPE" => "A",
		"COMPONENT_TEMPLATE" => "home.banners",
		"NOINDEX" => "Y",
		"ORDER" => "desc",
		"TYPE" => "HOME_BANNER_TYPE"
	)
);?>
	<div class="b-indexbanners__banner">
		<h1 style="font-size:22px">Сеть спортивных магазинов<span class="b-indexbanners__name"> ОЛИМП</span></h1>
		<ul class="b-indexbanners__features">
			<li class="b-indexbanners__item"><img src="/html/src/img/inhtml/feature_box.png" class="b-indexbanners__icon" alt=""> <span class="b-indexbanners__text">Более 20 000 товаров</span></li>
			<li class="b-indexbanners__item"><img src="/html/src/img/inhtml/feature_star.png" class="b-indexbanners__icon" alt=""> <span class="b-indexbanners__text">Гарантия качества</span></li>
			<li class="b-indexbanners__item"><img src="/html/src/img/inhtml/feature_tag.png" class="b-indexbanners__icon" alt=""> <span class="b-indexbanners__text">Известные бренды</span></li>
			<li class="b-indexbanners__item"><img src="/html/src/img/inhtml/feature_assistant.png" class="b-indexbanners__icon" alt=""> <span class="b-indexbanners__text">Консультации и помощь</span></li>
			<li class="b-indexbanners__item"><img src="/html/src/img/inhtml/feature_card.png" class="b-indexbanners__icon" alt=""> <span class="b-indexbanners__text">Клубная программа</span></li>
			<li class="b-indexbanners__item"><img src="/html/src/img/inhtml/feature_support.png" class="b-indexbanners__icon" alt=""> <span class="b-indexbanners__text">Сервисный центр</span></li>
		</ul>
	</div>
</div>
 <!-- Карусель --> <? $arBrand = $APPLICATION->IncludeComponent(
	"kontora:element.list", 
	"brands.line1", 
	array(
		"IBLOCK_ID" => IBLOCK_ID_BRAND,
		"HTML_TYPE" => array(
		),
		"ELEMENT_COUNT" => "20",
		"ITEM_TEMPLATE" => "",
		"SELECT" => array(
			0 => "NAME",
			1 => "DETAIL_PAGE_URL",
			2 => "PREVIEW_PICTURE",
		),
		"RETURN" => "ITEMS",
		"COMPONENT_TEMPLATE" => "brands.line1",
		"COMPOSITE_FRAME_MODE" => "Y",
		"COMPOSITE_FRAME_TYPE" => "AUTO"
	),
	false
);   ?>
<div class="b-delivery-offer">
 <a href="/service/#dostavka" class="b-delivery-offer__link">
	<div class="b-delivery-offer__item">
		<p class="b-delivery-offer__truck">
		</p>
		<div class="b-delivery-offer__text-delivery">
			<p class="b-delivery-offer__delivery">
				 Бесплатная доставка
			</p>
			<p class="b-delivery-offer__money">
				 При заказе от 20 000 <span class="b-rouble">q</span>
			</p>
		</div>
	</div>
 </a> <a href="#subscribe" class="b-delivery-offer__link">
	<div class="b-delivery-offer__item">
		<p class="b-delivery-offer__gift">
		</p>
		<div class="b-delivery-offer__text-delivery">
			<p class="b-delivery-offer__delivery-two">
				 300 бонусов
			</p>
			<p class="b-delivery-offer__money-two">
				 За подписку на рассылку
			</p>
		</div>
	</div>
 </a>
</div>
 <!-- Алфавит --> <?$APPLICATION->IncludeComponent(
	"kontora:shares.banner",
	"home.content.banners",
	Array(
		"BY" => "s_weight",
		"CACHE_TIME" => "86400",
		"CACHE_TYPE" => "A",
		"COMPONENT_TEMPLATE" => "home.content.banners",
		"NOINDEX" => "Y",
		"ORDER" => "desc",
		"TYPE" => "CENTRE_BANNER_TYPE"
	)
);?><?$APPLICATION->IncludeComponent(
	"bitrix:main.include",
	"",
Array()
);?>
<div class="b-tab b-tab-min b-tab--index">
	<ul class="b-tab__nav--list b-tab__nav--list-center text-uppercase nav-tabs clearfix">
		<li class="b-tab__nav--item b-tab__nav--item-center active"> <a href="#tab1_1" data-toggle="tab" class="b-tab__nav--link tx-dec_no">Рекомендуем</a> </li>
		<li class="b-tab__nav--item b-tab__nav--item-center"> <a href="#tab1_2" data-toggle="tab" class="b-tab__nav--link tx-dec_no">Новинки</a> </li>
		 <!--<li class="b-tab__nav--item b-tab__nav--item-center"> <a href="#tab1_3" data-toggle="tab" class="b-tab__nav--link tx-dec_no">Бренды</a> </li>-->
	</ul>
	<div class="b-tab__content b-products-slider">
		<div class="b-tab__content--item active" id="tab1_1">
			 <?$APPLICATION->IncludeComponent(
	"kontora:element.list",
	"products.list",
	Array(
		"CATALOG_PAGE" => "main",
		"CATALOG_TYPE" => "tile",
		"CITY_CODE" => $keyCity,
		"ELEMENT_COUNT" => "15",
		"FILTER" => array(">PROPERTY_BEST"=>0,">PROPERTY_MUST_THE_MAIN"=>0),
		"HTML_TYPE" => array(''),
		"IBLOCK_ID" => IBLOCK_ID_CATALOG,
		"ITEM_TEMPLATE" => "",
		"MAIN_TYPE" => "recommend",
		"ORDER" => array('id'=>'asc'),
		"PAGER_PARAMS_NAME" => "arrPager",
		"PROPS" => array("CODE"=>"PICTURES"),
		"SELECT" => array("IBLOCK_ID","ID",'NAME','DETAIL_PAGE_URL','PREVIEW_PICTURE',"PROPERTY_MIN_PRICE_".$keyCity,"PROPERTY_NEW","PROPERTY_BEST_PRICE","PROPERTY_BEST","PROPERTY_ARTICUL","PROPERTY_FREE_SHPPING","PROPERTY_KREDIT","PROPERTY_UTILIZ","PROPERTY_TO1","PROPERTY_GARANT5","PROPERTY_GARANT3","PROPERTY_BLACK_FRIDAY","PROPERTY_SVOI","PROPERTY_SVOI15","PROPERTY_SVOI20","PROPERTY_RASSROCHKA"),
		"SHOW_NAV_BLOCK" => "N"
	)
);?>
		</div>
		<div class="b-tab__content--item" id="tab1_2">
			 <?$APPLICATION->IncludeComponent(
	"kontora:element.list",
	"products.list",
	Array(
		"CATALOG_PAGE" => "main",
		"CATALOG_TYPE" => "tile",
		"CITY_CODE" => $keyCity,
		"ELEMENT_COUNT" => "15",
		"FILTER" => array(">PROPERTY_NEW"=>0,">PROPERTY_MUST_THE_MAIN"=>0),
		"HTML_TYPE" => array(''),
		"IBLOCK_ID" => IBLOCK_ID_CATALOG,
		"ITEM_TEMPLATE" => "",
		"MAIN_TYPE" => "new",
		"ORDER" => array('id'=>'asc'),
		"PAGER_PARAMS_NAME" => "arrPager",
		"PROPS" => array("PICTURES"),
		"SELECT" => array("IBLOCK_ID","ID",'NAME','DETAIL_PAGE_URL','PREVIEW_PICTURE',"PROPERTY_MIN_PRICE_".$keyCity,"PROPERTY_NEW","PROPERTY_BEST_PRICE","PROPERTY_BEST","PROPERTY_ARTICUL","PROPERTY_FREE_SHPPING","PROPERTY_KREDIT","PROPERTY_UTILIZ","PROPERTY_TO1","PROPERTY_GARANT5","PROPERTY_GARANT3","PROPERTY_BLACK_FRIDAY","PROPERTY_SVOI","PROPERTY_SVOI15","PROPERTY_SVOI20","PROPERTY_RASSROCHKA"),
		"SHOW_NAV_BLOCK" => "N"
	)
);?>
		</div>
		<div class="b-tab__content--item" id="tab1_3">
			<ul class="b-brand-list">
				 <? foreach ($arBrand as $arItem): ?>
				<li><a >
				<div>
					 
				</div>
 </a> </li>
				 <? endforeach;  ?>
			</ul>
		</div>
	</div>
</div>
 <br>
 <br>
 <!--tabs-->
<div class=" data-bx-app-ex-src=">
	<ul class="b-tab__nav--list b-tab__nav--list-center b-tab__nav--index text-uppercase nav-tabs clearfix">
		<li class="b-tab__nav--item b-tab__nav--item-center active"> <a href="#tab1" data-toggle="tab" class="b-tab__nav--link tx-dec_no">Вся лента</a> </li>
		<li class="b-tab__nav--item b-tab__nav--item-center"> <a href="#tab2" data-toggle="tab" class="b-tab__nav--link tx-dec_no">Новости и акции</a></li>
		<li class="b-tab__nav--item b-tab__nav--item-center"> <a href="#tab3" data-toggle="tab" class="b-tab__nav--link tx-dec_no">Видео</a> </li>
	</ul>
	<div class="b-tab__content">
		<div class="b-tab__content--item active" id="tab1">
			 <?$APPLICATION->IncludeComponent(
	"bitrix:news.list",
	"news_main",
	Array(
		"ACTIVE_DATE_FORMAT" => "d.m.Y",
		"ADD_SECTIONS_CHAIN" => "N",
		"AJAX_MODE" => "N",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"CACHE_FILTER" => "Y",
		"CACHE_GROUPS" => "Y",
		"CACHE_TIME" => "3600",
		"CACHE_TYPE" => "A",
		"CHECK_DATES" => "Y",
		"DISPLAY_BOTTOM_PAGER" => "Y",
		"DISPLAY_TOP_PAGER" => "Y",
		"FIELD_CODE" => array("ID"),
		"FILTER_NAME" => "",
		"HIDE_LINK_WHEN_NO_DETAIL" => "Y",
		"IBLOCK_ID" => IBLOCK_ID_NEWS,
		"IBLOCK_TYPE" => "CONTENT",
		"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
		"INCLUDE_SUBSECTIONS" => "Y",
		"NEWS_COUNT" => "4",
		"PROPERTY_CODE" => array("DESCRIPTION"),
		"SET_BROWSER_TITLE" => "N",
		"SET_LAST_MODIFIED" => "Y",
		"SET_META_DESCRIPTION" => "Y",
		"SET_META_KEYWORDS" => "Y",
		"SET_STATUS_404" => "Y",
		"SET_TITLE" => "N",
		"SHOW_404" => "Y",
		"SORT_BY1" => "ACTIVE_FROM",
		"SORT_BY2" => "SORT",
		"SORT_ORDER1" => "DESC",
		"SORT_ORDER2" => "ASC"
	)
);?>
		</div>
		<div class="b-tab__content--item" id="tab2">
			 <?
                $GLOBALS["NEWS"]['PROPERTY_TYPE_VALUE'] = "Новость";
                $APPLICATION->IncludeComponent("bitrix:news.list", "news_main", array(
                    "AJAX_MODE"                 => "N",
                    "IBLOCK_TYPE"               => "CONTENT",
                    "IBLOCK_ID"                 => IBLOCK_ID_NEWS,
                    "NEWS_COUNT"                => "4",
                    "SORT_BY1"                  => "ACTIVE_FROM",
                    "SORT_ORDER1"               => "DESC",
                    "SORT_BY2"                  => "SORT",
                    "SORT_ORDER2"               => "ASC",
                    "FILTER_NAME"               => "NEWS",
                    "FIELD_CODE"                => array("ID"),
                    "PROPERTY_CODE"             => array("DESCRIPTION"),
                    "CHECK_DATES"               => "Y",
                    "ACTIVE_DATE_FORMAT"        => "d.m.Y",
                    "SET_TITLE"                 => "N",
                    "SET_BROWSER_TITLE"         => "N",
                    "SET_META_KEYWORDS"         => "Y",
                    "SET_META_DESCRIPTION"      => "Y",
                    "SET_LAST_MODIFIED"         => "Y",
                    "INCLUDE_IBLOCK_INTO_CHAIN" => "N",
                    "ADD_SECTIONS_CHAIN"        => "N",
                    "HIDE_LINK_WHEN_NO_DETAIL"  => "Y",
                    "INCLUDE_SUBSECTIONS"       => "Y",
                    "CACHE_TYPE"                => "A",
                    "CACHE_TIME"                => "3600",
                    "CACHE_FILTER"              => "Y",
                    "CACHE_GROUPS"              => "Y",
                    "DISPLAY_TOP_PAGER"         => "Y",
                    "DISPLAY_BOTTOM_PAGER"      => "Y",
                    "SET_STATUS_404"            => "Y",
                    "SHOW_404"                  => "Y",
                    "AJAX_OPTION_JUMP"          => "N",
                    "AJAX_OPTION_STYLE"         => "Y",
                    "AJAX_OPTION_HISTORY"       => "N",
                ));
            ?>
		</div>
		<div class="b-tab__content--item" id="tab3">
			 <?
                $GLOBALS["VIDEO"]['PROPERTY_TYPE_VALUE'] = "Видео";
                $APPLICATION->IncludeComponent("bitrix:news.list", "news_main", array(
                    "AJAX_MODE"                 => "N",
                    "IBLOCK_TYPE"               => "CONTENT",
                    "IBLOCK_ID"                 => IBLOCK_ID_NEWS,
                    "NEWS_COUNT"                => "4",
                    "SORT_BY1"                  => "ACTIVE_FROM",
                    "SORT_ORDER1"               => "DESC",
                    "SORT_BY2"                  => "SORT",
                    "SORT_ORDER2"               => "ASC",
                    "FILTER_NAME"               => "VIDEO",
                    "FIELD_CODE"                => array("ID"),
                    "PROPERTY_CODE"             => array("DESCRIPTION"),
                    "CHECK_DATES"               => "Y",
                    "ACTIVE_DATE_FORMAT"        => "d.m.Y",
                    "SET_TITLE"                 => "N",
                    "SET_BROWSER_TITLE"         => "N",
                    "SET_META_KEYWORDS"         => "Y",
                    "SET_META_DESCRIPTION"      => "Y",
                    "SET_LAST_MODIFIED"         => "Y",
                    "INCLUDE_IBLOCK_INTO_CHAIN" => "N",
                    "ADD_SECTIONS_CHAIN"        => "N",
                    "HIDE_LINK_WHEN_NO_DETAIL"  => "Y",
                    "INCLUDE_SUBSECTIONS"       => "Y",
                    "CACHE_TYPE"                => "A",
                    "CACHE_TIME"                => "3600",
                    "CACHE_FILTER"              => "Y",
                    "CACHE_GROUPS"              => "Y",
                    "DISPLAY_TOP_PAGER"         => "Y",
                    "DISPLAY_BOTTOM_PAGER"      => "Y",
                    "SET_STATUS_404"            => "Y",
                    "SHOW_404"                  => "Y",
                    "AJAX_OPTION_JUMP"          => "N",
                    "AJAX_OPTION_STYLE"         => "Y",
                    "AJAX_OPTION_HISTORY"       => "N",
                ));
            ?>
		</div>
	</div>
</div>
 <br><? require($_SERVER['DOCUMENT_ROOT'].'/bitrix/footer.php'); ?>