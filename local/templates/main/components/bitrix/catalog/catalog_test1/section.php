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
                    'REAL_SECTION_ID'    => $arSect["IBLOCK_SECTION_ID"]
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
            $catalog_type    = (isset($_COOKIE['CATALOG_TYPE']) && !empty($_COOKIE['CATALOG_TYPE']) && in_array($_COOKIE['CATALOG_TYPE'], $catalogTypesArr)) ? $_COOKIE['CATALOG_TYPE'] : 'tile';
            $product_count   = (isset($_REQUEST['productCount']) && !empty($_REQUEST['productCount'])) ? intval($_REQUEST['productCount']) : '24';
            $sort_field      = (isset($_REQUEST['sortField']) && !empty($_REQUEST['sortField'])) ? $_REQUEST['sortField'] : 'shows';
            $sort_order      = (isset($_REQUEST['sortOrder']) && !empty($_REQUEST['sortOrder'])) ? $_REQUEST['sortOrder'] : 'desc';
            $catalog_nav     = (isset($_REQUEST['catalogNav']) && !empty($_REQUEST['catalogNav'])) ? $_REQUEST['catalogNav'] : 'all';
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


                $APPLICATION->IncludeComponent("bitrix:catalog.smart.filter", "smart_filter", array(
                    "IBLOCK_TYPE"         => $arParams["IBLOCK_TYPE"],
                    "IBLOCK_ID"           => $arParams["IBLOCK_ID"],
                    "SECTION_ID"          => $arCurSection['ID'],
                    "FILTER_NAME"         => $arParams["FILTER_NAME"],
                    "PRICE_CODE"          => $arParams["PRICE_CODE"],
                    "CACHE_TYPE"          => $arParams["CACHE_TYPE"],
                    "CACHE_TIME"          => $arParams["CACHE_TIME"],
                    "CACHE_GROUPS"        => $arParams["CACHE_GROUPS"],
                    "SAVE_IN_SESSION"     => "N",
                    "FILTER_VIEW_MODE"    => $arParams["FILTER_VIEW_MODE"],
                    "XML_EXPORT"          => "Y",
                    "SECTION_TITLE"       => "NAME",
                    "SECTION_DESCRIPTION" => "DESCRIPTION",
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
        </div>
        <div class="b-main">
            <?
                $APPLICATION->IncludeComponent("bitrix:breadcrumb", "main", array(
                    "START_FROM" => "0",
                    "PATH"       => "",
                ));
            ?>
            <h1 class="b-container__headline"><?= $APPLICATION->ShowTitle() ?></h1>

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

                $APPLICATION->IncludeComponent("bitrix:catalog.section", "catalog1", Array(
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
		"AJAX_MODE" => "N",	// Включить режим AJAX
		"SEF_MODE" => "N",	// Включить поддержку ЧПУ
		"IBLOCK_TYPE" => "CATALOG",	// Тип инфоблока
		"IBLOCK_ID" => $arParams["IBLOCK_ID"],	// Инфоблок
		"SECTION_ID" => $arResult["VARIABLES"]["SECTION_ID"],	// ID раздела
		"SECTION_USER_FIELDS" => "",	// Свойства раздела
		"ELEMENT_SORT_FIELD" => $sort_field,	// По какому полю сортируем элементы
		"ELEMENT_SORT_ORDER" => $sort_order,	// Порядок сортировки элементов
		"ELEMENT_SORT_FIELD2" => "created",	// Поле для второй сортировки элементов
		"ELEMENT_SORT_ORDER2" => "desc",	// Порядок второй сортировки элементов
		"FILTER_NAME" => $arParams["FILTER_NAME"],	// Имя массива со значениями фильтра для фильтрации элементов
		"INCLUDE_SUBSECTIONS" => "Y",	// Показывать элементы подразделов раздела
		"SHOW_ALL_WO_SECTION" => "Y",	// Показывать все элементы, если не указан раздел
		"SECTION_URL" => "",	// URL, ведущий на страницу с содержимым раздела
		"DETAIL_URL" => "",	// URL, ведущий на страницу с содержимым элемента раздела
		"BASKET_URL" => "/personal/basket.php",	// URL, ведущий на страницу с корзиной покупателя
		"ACTION_VARIABLE" => "action",	// Название переменной, в которой передается действие
		"PRODUCT_ID_VARIABLE" => "id",	// Название переменной, в которой передается код товара для покупки
		"PRODUCT_QUANTITY_VARIABLE" => "quantity",	// Название переменной, в которой передается количество товара
		"ADD_PROPERTIES_TO_BASKET" => "Y",	// Добавлять в корзину свойства товаров и предложений
		"PRODUCT_PROPS_VARIABLE" => "prop",	// Название переменной, в которой передаются характеристики товара
		"PARTIAL_PRODUCT_PROPERTIES" => "N",	// Разрешить добавлять в корзину товары, у которых заполнены не все характеристики
		"SECTION_ID_VARIABLE" => "SECTION_ID",	// Название переменной, в которой передается код группы
		"ADD_SECTIONS_CHAIN" => "Y",	// Включать раздел в цепочку навигации
		"DISPLAY_COMPARE" => "N",
		"SET_TITLE" => "Y",	// Устанавливать заголовок страницы
		"SET_BROWSER_TITLE" => "Y",	// Устанавливать заголовок окна браузера
		"BROWSER_TITLE" => "-",	// Установить заголовок окна браузера из свойства
		"SET_META_KEYWORDS" => "Y",	// Устанавливать ключевые слова страницы
		"META_KEYWORDS" => "",	// Установить ключевые слова страницы из свойства
		"SET_META_DESCRIPTION" => "Y",	// Устанавливать описание страницы
		"META_DESCRIPTION" => "",	// Установить описание страницы из свойства
		"SET_LAST_MODIFIED" => "Y",	// Устанавливать в заголовках ответа время модификации страницы
		"USE_MAIN_ELEMENT_SECTION" => "Y",	// Использовать основной раздел для показа элемента
		"SET_STATUS_404" => "Y",	// Устанавливать статус 404
		"PAGE_ELEMENT_COUNT" => $product_count,	// Количество элементов на странице
		"LINE_ELEMENT_COUNT" => "3",	// Количество элементов выводимых в одной строке таблицы
		"PROPERTY_CODE" => array(	// Свойства
			0 => "CML2_LINK",
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
		"OFFERS_LIMIT" => "0",	// Максимальное количество предложений для показа (0 - все)
		"BACKGROUND_IMAGE" => "-",
		"PRICE_CODE" => array(	// Тип цены
			0 => $keyCity,
		),
		"USE_PRICE_COUNT" => "Y",	// Использовать вывод цен с диапазонами
		"SHOW_PRICE_COUNT" => "1",	// Выводить цены для количества
		"PRICE_VAT_INCLUDE" => "Y",	// Включать НДС в цену
		"PRODUCT_PROPERTIES" => "",	// Характеристики товара
		"USE_PRODUCT_QUANTITY" => "Y",	// Разрешить указание количества товара
		"CACHE_TYPE" => "A",	// Тип кеширования
		"CACHE_TIME" => "36000000",	// Время кеширования (сек.)
		"CACHE_FILTER" => "Y",	// Кешировать при установленном фильтре
		"CACHE_GROUPS" => "Y",	// Учитывать права доступа
		"DISPLAY_TOP_PAGER" => "N",	// Выводить над списком
		"DISPLAY_BOTTOM_PAGER" => "Y",	// Выводить под списком
		"PAGER_TITLE" => "Товары",	// Название категорий
		"PAGER_SHOW_ALWAYS" => "Y",	// Выводить всегда
		"PAGER_TEMPLATE" => "",	// Шаблон постраничной навигации
		"PAGER_DESC_NUMBERING" => "N",	// Использовать обратную навигацию
		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",	// Время кеширования страниц для обратной навигации
		"PAGER_SHOW_ALL" => "Y",	// Показывать ссылку "Все"
		"HIDE_NOT_AVAILABLE" => "N",	// Не отображать товары, которых нет на складах
		"OFFERS_CART_PROPERTIES" => "",
		"AJAX_OPTION_JUMP" => "N",	// Включить прокрутку к началу компонента
		"AJAX_OPTION_STYLE" => "Y",	// Включить подгрузку стилей
		"AJAX_OPTION_HISTORY" => "Y",	// Включить эмуляцию навигации браузера
		"CONVERT_CURRENCY" => "Y",	// Показывать цены в одной валюте
		"CURRENCY_ID" => "RUB",	// Валюта, в которую будут сконвертированы цены
		"ADD_TO_BASKET_ACTION" => "ADD",
		"PAGER_BASE_LINK_ENABLE" => "Y",	// Включить обработку ссылок
		"SHOW_404" => "Y",	// Показ специальной страницы
		"MESSAGE_404" => "",
		"PAGER_BASE_LINK" => "",	// Url для построения ссылок (по умолчанию - автоматически)
		"PAGER_PARAMS_NAME" => "arrPager",	// Имя массива с переменными для построения ссылок
		"SHOW_NAV_BLOCK" => "Y",
		"CATALOG_TYPE" => $catalog_type
	),
	false
);
            ?>
        </div>
    <? endif; ?>
