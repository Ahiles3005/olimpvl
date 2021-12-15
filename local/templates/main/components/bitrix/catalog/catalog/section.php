<?
    if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
    /** @var array $arParams */
    /** @var array $arResult */
    /** @global CMain $APPLICATION */
    /** @global CUser $USER */
    /** @global CDatabase $DB */
    /** @var CBitrixComponentTemplate $this */
    /** @var string $templateName */
    /** @var string $templateFile */
    /** @var string $templateFolder */
    /** @var string $componentPath */
    /** @var CBitrixComponent $component */
    use Bitrix\Main\Loader;
    use Bitrix\Main\ModuleManager;

    $this->setFrameMode(true);

    $keyCity = (empty($_COOKIE['KEY_CITY'])) ? Olimp\City::getDefaultCityCode() : $_COOKIE['KEY_CITY'];



    // получить ID текущего раздела
    $arFilter = array(
        "IBLOCK_ID" => $arParams["IBLOCK_ID"],
        "ID"        => $arResult["VARIABLES"]["SECTION_ID"]
    );
    $rsSect = CIBlockSection::GetList(array(), $arFilter);
    $arSect = $rsSect->GetNext();

    // проверить есть ли подразделы у данного раздела
    if (CIBlockSection::GetCount(array("IBLOCK_ID" => $arParams["IBLOCK_ID"], "SECTION_ID" => $arResult["VARIABLES"]["SECTION_ID"]))): ?>
        <div class="b-leftcolumn">
            <?
                $APPLICATION->IncludeComponent("bitrix:catalog.section.list", "catalog_left_menu", array(
                    "VIEW_MODE"          => $arParams["SECTIONS_VIEW_MODE"],
                    "SHOW_PARENT_NAME"   => "Y",
                    "IBLOCK_TYPE"        => $arParams["IBLOCK_TYPE"],
                    "IBLOCK_ID"          => $arParams["IBLOCK_ID"],
                    "CACHE_TYPE"         => $arParams["CACHE_TYPE"],
                    "SECTION_ID"         => $arResult["VARIABLES"]["SECTION_ID"],
                    "COUNT_ELEMENTS"     => "N",
                    "TOP_DEPTH"          => "1",
                    "ADD_SECTIONS_CHAIN" => "N",
                    "CACHE_TYPE"         => "A",
                    "CACHE_TIME"         => $arParams["CACHE_TIME"],
                    "CACHE_GROUPS"       => $arParams["CACHE_GROUPS"],
                    'SEO'                => 'Y',
                    'SECTION_NAME'       => $arSect['NAME'],
                    'REAL_SECTION_ID'    => $arSect["IBLOCK_SECTION_ID"],
                    'VERSION' => '170920212',
                ), false, array("HIDE_ICONS" => "Y"));
            ?>
        </div>
        <div class="b-main">
            <?
                $APPLICATION->IncludeComponent("bitrix:breadcrumb", "main", array(
                    "START_FROM" => "0",
                    "PATH"       => "",
                ));
            ?>
            <h1 class="b-container__headline b-container__headline--catalog"><?$APPLICATION->ShowTitle(false)?></h1>

            <?
                $APPLICATION->IncludeComponent("kontora:shares.banner", "banners", array(
                    "TYPE"       => "NEW_BANNER_TYPE",
                    "NOINDEX"    => "Y",
                    "BY"         => "s_weight",
                    "ORDER"      => "desc",
                    "CACHE_TYPE" => "A",
                    "CACHE_TIME" => "86400"
                ));

                $APPLICATION->IncludeComponent("bitrix:catalog.section.list", "step1", array(
                    "IBLOCK_TYPE"           => $arParams["IBLOCK_TYPE"],
                    "IBLOCK_ID"             => $arParams["IBLOCK_ID"],
                    "CACHE_TYPE"            => $arParams["CACHE_TYPE"],
                    "SECTION_ID"            => $arResult["VARIABLES"]["SECTION_ID"],
                    "CACHE_TIME"            => $arParams["CACHE_TIME"],
                    "CACHE_GROUPS"          => $arParams["CACHE_GROUPS"],
                    "COUNT_ELEMENTS"        => "Y",
                    "TOP_DEPTH"             => "1",
                    "SECTION_URL"           => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["section"],
                    "VIEW_MODE"             => $arParams["SECTIONS_VIEW_MODE"],
                    "SHOW_PARENT_NAME"      => $arParams["SECTIONS_SHOW_PARENT_NAME"],
                    "HIDE_SECTION_NAME"     => (isset($arParams["SECTIONS_HIDE_SECTION_NAME"]) ? $arParams["SECTIONS_HIDE_SECTION_NAME"] : "N"),
                    "ADD_SECTIONS_CHAIN"    => (isset($arParams["ADD_SECTIONS_CHAIN"]) ? $arParams["ADD_SECTIONS_CHAIN"] : ''),
                ), false, array("HIDE_ICONS" => "Y"));
            ?>
        </div>
    <? else: ?>
			<?
			$catalogTypesArr = array('tile', 'imagelist', 'list');
			$catalog_type = (isset($_COOKIE['CATALOG_TYPE']) && !empty($_COOKIE['CATALOG_TYPE']) && in_array($_COOKIE['CATALOG_TYPE'], $catalogTypesArr)) ? $_COOKIE['CATALOG_TYPE'] : 'tile';
			$product_count = (isset($_REQUEST['productCount']) && !empty($_REQUEST['productCount'])) ? intval($_REQUEST['productCount']) : '24';
			$sort_field_1 = 'PROPERTY_NEW_VALUE';
			$sort_order_1 = 'desc,nulls';
			$sort_field_2 = (isset($_REQUEST['sortField']) && !empty($_REQUEST['sortField'])) ? $_REQUEST['sortField'] : "PROPERTY_MIN_PRICE_$keyCity";
			$sort_order_2 = (isset($_REQUEST['sortOrder']) && !empty($_REQUEST['sortOrder'])) ? $_REQUEST['sortOrder'] : 'asc,nulls';
			$catalog_nav = (isset($_REQUEST['catalogNav']) && !empty($_REQUEST['catalogNav'])) ? $_REQUEST['catalogNav'] : 'all';
			?>

        <div class="b-leftcolumn b-left-column-catalog">
            <?
                $APPLICATION->IncludeComponent("bitrix:catalog.section.list", "catalog_left_menu", array(
                    "VIEW_MODE"           => $arParams["SECTIONS_VIEW_MODE"],
                    "SHOW_PARENT_NAME"    => "Y",
                    "IBLOCK_TYPE"         => $arParams["IBLOCK_TYPE"],
                    "IBLOCK_ID"           => $arParams["IBLOCK_ID"],
                    "CACHE_TYPE"          => $arParams["CACHE_TYPE"],
                    "SECTION_ID"          => $arSect["IBLOCK_SECTION_ID"],
                    "COUNT_ELEMENTS"      => "N",
                    "TOP_DEPTH"           => "1",
                    "ADD_SECTIONS_CHAIN"  => "N",
                    "CACHE_TYPE"          => "A",
                    "CACHE_TIME"          => $arParams["CACHE_TIME"],
                    "CACHE_GROUPS"        => $arParams["CACHE_GROUPS"],
                    "ACTIVE_SECTION_CODE" => $arResult["VARIABLES"]["SECTION_CODE"],
                    'REAL_SECTION_ID'     => $arSect["IBLOCK_SECTION_ID"]
                ), false, array("HIDE_ICONS" => "Y"));

                if (!isset($arParams['FILTER_VIEW_MODE']) || (string)$arParams['FILTER_VIEW_MODE'] == '')
                    $arParams['FILTER_VIEW_MODE'] = 'VERTICAL';
                $arParams['USE_FILTER'] = (isset($arParams['USE_FILTER']) && $arParams['USE_FILTER'] == 'Y' ? 'Y' : 'N');

                if ($arParams['USE_FILTER'] == 'Y') {
                    $arFilter = array(
                        "IBLOCK_ID"     => $arParams["IBLOCK_ID"],
                        "ACTIVE"        => "Y",
                        "GLOBAL_ACTIVE" => "Y",
                    );
                    if (0 < intval($arResult["VARIABLES"]["SECTION_ID"])) {
                        $arFilter["ID"] = $arResult["VARIABLES"]["SECTION_ID"];
                    } elseif ('' != $arResult["VARIABLES"]["SECTION_CODE"]) {
                        $arFilter["=CODE"] = $arResult["VARIABLES"]["SECTION_CODE"];
                    }

                    $obCache = new CPHPCache();
                    if ($obCache->InitCache(36000, serialize($arFilter), "/iblock/catalog")) {
                        $arCurSection = $obCache->GetVars();
                    } elseif ($obCache->StartDataCache()) {
                        $arCurSection = array();
                        if (Loader::includeModule("iblock")) {
                            $dbRes = CIBlockSection::GetList(array(), $arFilter, false, array("ID"));

                            if (defined("BX_COMP_MANAGED_CACHE")) {
                                global $CACHE_MANAGER;
                                $CACHE_MANAGER->StartTagCache("/iblock/catalog");

                                if ($arCurSection = $dbRes->Fetch()) {
                                    $CACHE_MANAGER->RegisterTag("iblock_id_".$arParams["IBLOCK_ID"]);
                                }
                                $CACHE_MANAGER->EndTagCache();
                            } else {
                                if (!$arCurSection = $dbRes->Fetch())
                                    $arCurSection = array();
                            }
                        }
                        $obCache->EndDataCache($arCurSection);
                    }
                    if (!isset($arCurSection)) {
                        $arCurSection = array();
                    }
                }

// var_dump($arFilter);

                $APPLICATION->IncludeComponent("bitrix:catalog.smart.filter", "smart_filter", array(
                    "IBLOCK_TYPE"         => $arParams["IBLOCK_TYPE"],
                    "IBLOCK_ID"           => $arParams["IBLOCK_ID"],
                    "SECTION_ID"          => $arCurSection['ID'],
                    "FILTER_NAME"         => $arParams["FILTER_NAME"],
                    "PRICE_CODE"          => $arParams["PRICE_CODE"],
                    "CACHE_TYPE"          => "N",
                    "CACHE_TIME"          => $arParams["CACHE_TIME"],
                    "CACHE_GROUPS"        => $arParams["CACHE_GROUPS"],
                    "SAVE_IN_SESSION"     => "N",
                    "FILTER_VIEW_MODE"    => $arParams["FILTER_VIEW_MODE"],
                    "XML_EXPORT"          => "Y",
                    "HIDE_NOT_AVAILABLE"  => "Y",
                    "SECTION_TITLE"       => "NAME",
                    "SECTION_DESCRIPTION" => "DESCRIPTION",
                     "DISPLAY_ELEMENT_COUNT" => "Y",
                    'HIDE_NOT_AVAILABLE'  => $arParams["HIDE_NOT_AVAILABLE"],
                    "TEMPLATE_THEME"      => "new",
                    'CONVERT_CURRENCY'    => $arParams['CONVERT_CURRENCY'],
                    'CURRENCY_ID'         => $arParams['CURRENCY_ID'],
                    "SEF_MODE"            => 'N',
                    "SEF_RULE"            => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["smart_filter"],
                    "SMART_FILTER_PATH"   => $arResult["VARIABLES"]["SMART_FILTER_PATH"],
                    "PAGER_PARAMS_NAME"   => $arParams["PAGER_PARAMS_NAME"],
                    "INSTANT_RELOAD"      => "Y"
                ), false,array('HIDE_ICONS' => 'Y'));
            ?>
            <?
                //sotbit seometa component start
                $APPLICATION->IncludeComponent(	
                    "sotbit:seo.meta",
                    ".default",	
                    Array(	
                    "FILTER_NAME" => $arParams["FILTER_NAME"],	
                    "SECTION_ID" => $arCurSection['ID'],	
                    "CACHE_TYPE" => $arParams["CACHE_TYPE"],	
                    "CACHE_TIME" => $arParams["CACHE_TIME"],	
                    )	
                );	
                //sotbit seometa component end
            ?>
        </div>
        <div class="b-main">
            <?
                $APPLICATION->IncludeComponent(
                    "bitrix:breadcrumb", 
                    "main", 
                    array(
                        "START_FROM" => "0",
                        "PATH" => "",
                        "COMPONENT_TEMPLATE" => "main",
                        "SITE_ID" => "s1"
                    ),
                    false
                );
            ?>
            <h1 class="b-container__headline"><?= $APPLICATION->ShowTitle(false) ?></h1>

            <div class="b-catalog-type">
                <span class="b-catalog-type__title">Вид каталога</span>
                <ul class="b-catalog-type__list">
                    <li class="b-catalog-type__item">
                        <a class="b-catalog-type__link  b-catalog-type__link--tile<? if ($catalog_type == 'tile'): ?> b-catalog-type__link--active<? endif; ?>" href="javascript: void(0);" title="Плитка"></a>
                    </li>
                    <li class="b-catalog-type__item">
                        <a class="b-catalog-type__link b-catalog-type__link--imagelist<? if ($catalog_type == 'imagelist'): ?> b-catalog-type__link--active<? endif; ?>" href="javascript: void(0);" title="Список с фото"></a>
                    </li>
                    <li class="b-catalog-type__item">
                        <a class="b-catalog-type__link b-catalog-type__link--list<? if ($catalog_type == 'list'): ?> b-catalog-type__link--active<? endif; ?>" href="javascript: void(0);" title="Список"></a>
                    </li>
                </ul>
            </div>

            <?
                $APPLICATION->IncludeComponent("kontora:shares.banner", "simple_baner_type", array(
                    "TYPE"       => "SIMPLE_BANNER_TYPE",
                    "NOINDEX"    => "Y",
                    "BY"         => "s_weight",
                    "ORDER"      => "desc",
                    "CACHE_TYPE" => "A",
                    "CACHE_TIME" => "86400"
                ));
            ?>

            <div class="b-filterbuttons">
                <div class="b-filterbuttons__container-categories">
                    <a class="b-filterbuttons__categories" href="javascript: void(0);">Категории</a>
                </div>
                <div class="b-filterbuttons__container-productfilter">
                    <a class="b-filterbuttons__productfilter" href="javascript: void(0);">Фильтр товаров</a>
                </div>
            </div>

            <?
                if ($catalog_nav == "new") {
                    $GLOBALS[$arParams["FILTER_NAME"]]['PROPERTY_NEW_VALUE'] = 'Y';
                } elseif ($catalog_nav == "sale") {
                    $GLOBALS[$arParams["FILTER_NAME"]]['ID'] = \Olimp\Catalog::GetDiscountProductsId($arResult["VARIABLES"]["SECTION_ID"], $arParams['IBLOCK_ID']);
                }


			global $sotbitSeoMetaTopDesc;//для установки верхнего описания
            global $USER;
            if($USER->IsAdmin()){
				echo $sotbitSeoMetaTopDesc."rasa_test";//вывод верхнего описания
            }

                $APPLICATION->IncludeComponent(
	"bitrix:catalog.section", 
	"catalog1", 
	array(
		"TEMPLATE_THEME" => "blue",
		"PRODUCT_DISPLAY_MODE" => "N",
		"ADD_PICT_PROP" => "MORE_PHOTO",
		"LABEL_PROP" => "NEW_BOOK",
		"OFFER_ADD_PICT_PROP" => "FILE",
		"OFFER_TREE_PROPS" => array(
			0 => "-",
		),
		"PRODUCT_SUBSCRIPTION" => "N",
		"SHOW_DISCOUNT_PERCENT" => "N",
		"SHOW_OLD_PRICE" => "N",
		"SHOW_CLOSE_POPUP" => "Y",
		"MESS_BTN_BUY" => "Купить",
		"MESS_BTN_ADD_TO_BASKET" => "В корзину",
		"MESS_BTN_SUBSCRIBE" => "Подписаться",
		"MESS_BTN_DETAIL" => "Подробнее",
		"MESS_NOT_AVAILABLE" => "Нет в наличии",
		"AJAX_MODE" => "N",
		"SEF_MODE" => "N",
		"IBLOCK_TYPE" => "CATALOG",
		"IBLOCK_ID" => $arParams["IBLOCK_ID"],
		"SECTION_ID" => $arResult["VARIABLES"]["SECTION_ID"],
		"SECTION_USER_FIELDS" => array(
			0 => "",
			1 => "",
		),
		"ELEMENT_SORT_FIELD" => $sort_field_1,
		"ELEMENT_SORT_ORDER" => $sort_order_1,
		"ELEMENT_SORT_FIELD2" => $sort_field_2,
		"ELEMENT_SORT_ORDER2" => $sort_order_2,
		"FILTER_NAME" => $arParams["FILTER_NAME"],
		"INCLUDE_SUBSECTIONS" => "Y",
		"SHOW_ALL_WO_SECTION" => "Y",
		"SECTION_URL" => "",
		"DETAIL_URL" => "",
		"BASKET_URL" => "/personal/basket.php",
		"ACTION_VARIABLE" => "action",
		"PRODUCT_ID_VARIABLE" => "id",
		"PRODUCT_QUANTITY_VARIABLE" => "quantity",
		"ADD_PROPERTIES_TO_BASKET" => "Y",
		"PRODUCT_PROPS_VARIABLE" => "prop",
		"PARTIAL_PRODUCT_PROPERTIES" => "N",
		"SECTION_ID_VARIABLE" => "SECTION_ID",
		"ADD_SECTIONS_CHAIN" => "Y",
		"DISPLAY_COMPARE" => "N",
		"SET_TITLE" => "Y",
		"SET_BROWSER_TITLE" => "Y",
		"BROWSER_TITLE" => "-",
		"SET_META_KEYWORDS" => "Y",
		"META_KEYWORDS" => "",
		"SET_META_DESCRIPTION" => "Y",
		"META_DESCRIPTION" => "",
		"SET_LAST_MODIFIED" => "Y",
		"USE_MAIN_ELEMENT_SECTION" => "Y",
		"SET_STATUS_404" => "Y",
		"PAGE_ELEMENT_COUNT" => $product_count,
		"LINE_ELEMENT_COUNT" => "3",
		"PROPERTY_CODE" => array(
			0 => "",
			1 => "CML2_LINK",
			2 => "",
		),
		"OFFERS_FIELD_CODE" => array(
			0 => "CML2_LINK",
		),
		"OFFERS_PROPERTY_CODE" => array(
			0 => "CML2_LINK",
		),
		"OFFERS_SORT_FIELD" => "sort",
		"OFFERS_SORT_ORDER" => "asc",
		"OFFERS_SORT_FIELD2" => "active_from",
		"OFFERS_SORT_ORDER2" => "desc",
		"OFFERS_LIMIT" => "0",
		"BACKGROUND_IMAGE" => "-",
		"PRICE_CODE" => array(
			0 => "vladivostok",
			1 => "ussurijsk",
			2 => "arsenev",
			3 => "naxodka",
			4 => "komsomolsk_na_amure",
			5 => "BASE",
		),
		"USE_PRICE_COUNT" => "Y",
		"SHOW_PRICE_COUNT" => "1",
		"PRICE_VAT_INCLUDE" => "Y",
		"PRODUCT_PROPERTIES" => array(
		),
		"USE_PRODUCT_QUANTITY" => "Y",
		"CACHE_TYPE" => "A",
		"CACHE_TIME" => "36000000",
		"CACHE_FILTER" => "Y",
		"CACHE_GROUPS" => "Y",
		"DISPLAY_TOP_PAGER" => "N",
		"DISPLAY_BOTTOM_PAGER" => "Y",
		"PAGER_TITLE" => "Товары",
		"PAGER_SHOW_ALWAYS" => "Y",
		"PAGER_TEMPLATE" => "",
		"PAGER_DESC_NUMBERING" => "N",
		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
		"PAGER_SHOW_ALL" => "Y",
		"HIDE_NOT_AVAILABLE" => "N",
		"OFFERS_CART_PROPERTIES" => "",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"AJAX_OPTION_HISTORY" => "Y",
		"CONVERT_CURRENCY" => "Y",
		"CURRENCY_ID" => "RUB",
		"ADD_TO_BASKET_ACTION" => "ADD",
		"PAGER_BASE_LINK_ENABLE" => "Y",
		"SHOW_404" => "Y",
		"MESSAGE_404" => "",
		"PAGER_BASE_LINK" => "",
		"PAGER_PARAMS_NAME" => "arrPager",
		"SHOW_NAV_BLOCK" => "Y",
		"CATALOG_TYPE" => $catalog_type,
		"COMPONENT_TEMPLATE" => "catalog1",
		"SECTION_CODE" => "",
		"AJAX_OPTION_ADDITIONAL" => "",
		"COMPOSITE_FRAME_MODE" => "A",
		"COMPOSITE_FRAME_TYPE" => "AUTO",
		"FILE_404" => ""
	),
	false
);


            ?>
        </div>
    <? endif; ?>


<?
//sotbit seometa meta start
    global $sotbitSeoMetaTitle;
    global $sotbitSeoMetaKeywords;
    global $sotbitSeoMetaDescription;
    global $sotbitSeoMetaBreadcrumbTitle;
    global $sotbitSeoMetaH1;
    if(!empty($sotbitSeoMetaH1))
    {
        $APPLICATION->SetTitle($sotbitSeoMetaH1);
    }
    if(!empty($sotbitSeoMetaTitle))
    {
        $APPLICATION->SetPageProperty("title", $sotbitSeoMetaTitle);
    }
    if(!empty($sotbitSeoMetaKeywords))
    {
        $APPLICATION->SetPageProperty("keywords", $sotbitSeoMetaKeywords);
    }
    if(!empty($sotbitSeoMetaDescription))
    {
        $APPLICATION->SetPageProperty("description", $sotbitSeoMetaDescription);
    }
    if(!empty($sotbitSeoMetaBreadcrumbTitle) ) {
        $APPLICATION->AddChainItem($sotbitSeoMetaBreadcrumbTitle  );
    }
//sotbit seometa meta end
?>
