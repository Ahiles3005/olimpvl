<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
global $goods_chain_info;
$goods_chain_info = false;

$APPLICATION->IncludeComponent("bitrix:breadcrumb", "main", array(
    "START_FROM" => "0",
    "PATH"       => "",
));

$ElementID=$APPLICATION->IncludeComponent("bitrix:catalog.element", "product_detail1", Array(
	"IBLOCK_TYPE" => "CATALOG",	// Тип инфоблока
		"IBLOCK_ID" => $arParams["IBLOCK_ID"],	// Инфоблок
		"PROPERTY_CODE" => array(	// Свойства
			0 => "",
			1 => $arParams["DETAIL_PROPERTY_CODE"],
			2 => "",
		),
		"META_KEYWORDS" => "-",	// Установить ключевые слова страницы из свойства
		"META_DESCRIPTION" => "-",	// Установить описание страницы из свойства
		"BROWSER_TITLE" => "-",	// Установить заголовок окна браузера из свойства
		"SET_CANONICAL_URL" => "N",	// Устанавливать канонический URL
		"BASKET_URL" => $arParams["BASKET_URL"],	// URL, ведущий на страницу с корзиной покупателя
		"ACTION_VARIABLE" => $arParams["ACTION_VARIABLE"],	// Название переменной, в которой передается действие
		"PRODUCT_ID_VARIABLE" => $arParams["PRODUCT_ID_VARIABLE"],	// Название переменной, в которой передается код товара для покупки
		"SECTION_ID_VARIABLE" => $arParams["SECTION_ID_VARIABLE"],	// Название переменной, в которой передается код группы
		"CHECK_SECTION_ID_VARIABLE" => "N",	// Использовать код группы из переменной, если не задан раздел элемента
		"PRODUCT_QUANTITY_VARIABLE" => $arParams["PRODUCT_QUANTITY_VARIABLE"],	// Название переменной, в которой передается количество товара
		"PRODUCT_PROPS_VARIABLE" => $arParams["PRODUCT_PROPS_VARIABLE"],	// Название переменной, в которой передаются характеристики товара
		"CACHE_TYPE" => "A",	// Тип кеширования
		"CACHE_TIME" => $arParams["CACHE_TIME"],	// Время кеширования (сек.)
		"CACHE_GROUPS" => "N",	// Учитывать права доступа
		"SET_TITLE" => "N",	// Устанавливать заголовок страницы
		"SET_LAST_MODIFIED" => "N",	// Устанавливать в заголовках ответа время модификации страницы
		"MESSAGE_404" => $arParams["MESSAGE_404"],	// Сообщение для показа (по умолчанию из компонента)
		"SET_STATUS_404" => "N",	// Устанавливать статус 404
		"SHOW_404" => "N",	// Показ специальной страницы
		"FILE_404" => $arParams["FILE_404"],
		"PRICE_CODE" => "",	// Тип цены
		"USE_PRICE_COUNT" => "N",	// Использовать вывод цен с диапазонами
		"SHOW_PRICE_COUNT" => $arParams["SHOW_PRICE_COUNT"],	// Выводить цены для количества
		"PRICE_VAT_INCLUDE" => "N",	// Включать НДС в цену
		"PRICE_VAT_SHOW_VALUE" => "N",	// Отображать значение НДС
		"USE_PRODUCT_QUANTITY" => "Y",	// Разрешить указание количества товара
		"PRODUCT_PROPERTIES" => "",	// Характеристики товара
		"ADD_PROPERTIES_TO_BASKET" => "Y",	// Добавлять в корзину свойства товаров и предложений
		"PARTIAL_PRODUCT_PROPERTIES" => "Y",	// Разрешить добавлять в корзину товары, у которых заполнены не все характеристики
		"LINK_IBLOCK_TYPE" => $arParams["LINK_IBLOCK_TYPE"],	// Тип инфоблока, элементы которого связаны с текущим элементом
		"LINK_IBLOCK_ID" => $arParams["LINK_IBLOCK_ID"],	// ID инфоблока, элементы которого связаны с текущим элементом
		"LINK_PROPERTY_SID" => $arParams["LINK_PROPERTY_SID"],	// Свойство, в котором хранится связь
		"LINK_ELEMENTS_URL" => $arParams["LINK_ELEMENTS_URL"],	// URL на страницу, где будет показан список связанных элементов
		"OFFERS_CART_PROPERTIES" => $arParams["OFFERS_CART_PROPERTIES"],
		"OFFERS_FIELD_CODE" => $arParams["DETAIL_OFFERS_FIELD_CODE"],
		"OFFERS_PROPERTY_CODE" => $arParams["DETAIL_OFFERS_PROPERTY_CODE"],
		"OFFERS_SORT_FIELD" => $arParams["OFFERS_SORT_FIELD"],
		"OFFERS_SORT_ORDER" => $arParams["OFFERS_SORT_ORDER"],
		"OFFERS_SORT_FIELD2" => $arParams["OFFERS_SORT_FIELD2"],
		"OFFERS_SORT_ORDER2" => $arParams["OFFERS_SORT_ORDER2"],
		"ELEMENT_ID" => $arResult["VARIABLES"]["ELEMENT_ID"],	// ID элемента
		"ELEMENT_CODE" => $arResult["VARIABLES"]["ELEMENT_CODE"],	// Код элемента
		"SECTION_ID" => $arResult["VARIABLES"]["SECTION_ID"],	// ID раздела
		"SECTION_CODE" => $arResult["VARIABLES"]["SECTION_CODE"],	// Код раздела
		"SECTION_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["section"],	// URL, ведущий на страницу с содержимым раздела
		"DETAIL_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["element"],	// URL, ведущий на страницу с содержимым элемента раздела
		"CONVERT_CURRENCY" => "N",	// Показывать цены в одной валюте
		"CURRENCY_ID" => $arParams["CURRENCY_ID"],
		"HIDE_NOT_AVAILABLE" => $arParams["HIDE_NOT_AVAILABLE"],
		"USE_ELEMENT_COUNTER" => "N",	// Использовать счетчик просмотров
		"SHOW_DEACTIVATED" => "N",	// Показывать деактивированные товары
		"USE_MAIN_ELEMENT_SECTION" => "N",	// Использовать основной раздел для показа элемента
		"ADD_PICT_PROP" => $arParams["ADD_PICT_PROP"],
		"LABEL_PROP" => $arParams["LABEL_PROP"],
		"OFFER_ADD_PICT_PROP" => $arParams["OFFER_ADD_PICT_PROP"],
		"OFFER_TREE_PROPS" => $arParams["OFFER_TREE_PROPS"],
		"PRODUCT_SUBSCRIPTION" => "N",
		"SHOW_DISCOUNT_PERCENT" => "N",
		"SHOW_OLD_PRICE" => "N",
		"SHOW_MAX_QUANTITY" => "N",
		"MESS_BTN_BUY" => $arParams["MESS_BTN_BUY"],
		"MESS_BTN_ADD_TO_BASKET" => $arParams["MESS_BTN_ADD_TO_BASKET"],
		"MESS_BTN_SUBSCRIBE" => $arParams["MESS_BTN_SUBSCRIBE"],
		"MESS_BTN_COMPARE" => $arParams["MESS_BTN_COMPARE"],
		"MESS_NOT_AVAILABLE" => $arParams["MESS_NOT_AVAILABLE"],
		"USE_VOTE_RATING" => "N",
		"VOTE_DISPLAY_AS_RATING" => (isset($arParams["DETAIL_VOTE_DISPLAY_AS_RATING"])?$arParams["DETAIL_VOTE_DISPLAY_AS_RATING"]:""),
		"USE_COMMENTS" => "N",
		"BLOG_USE" => (isset($arParams["DETAIL_BLOG_USE"])?$arParams["DETAIL_BLOG_USE"]:""),
		"BLOG_URL" => (isset($arParams["DETAIL_BLOG_URL"])?$arParams["DETAIL_BLOG_URL"]:""),
		"BLOG_EMAIL_NOTIFY" => (isset($arParams["DETAIL_BLOG_EMAIL_NOTIFY"])?$arParams["DETAIL_BLOG_EMAIL_NOTIFY"]:""),
		"VK_USE" => (isset($arParams["DETAIL_VK_USE"])?$arParams["DETAIL_VK_USE"]:""),
		"VK_API_ID" => (isset($arParams["DETAIL_VK_API_ID"])?$arParams["DETAIL_VK_API_ID"]:"API_ID"),
		"FB_USE" => (isset($arParams["DETAIL_FB_USE"])?$arParams["DETAIL_FB_USE"]:""),
		"FB_APP_ID" => (isset($arParams["DETAIL_FB_APP_ID"])?$arParams["DETAIL_FB_APP_ID"]:""),
		"BRAND_USE" => "N",
		"BRAND_PROP_CODE" => (isset($arParams["DETAIL_BRAND_PROP_CODE"])?$arParams["DETAIL_BRAND_PROP_CODE"]:""),
		"DISPLAY_NAME" => "N",
		"ADD_DETAIL_TO_SLIDER" => "N",
		"TEMPLATE_THEME" => (isset($arParams["TEMPLATE_THEME"])?$arParams["TEMPLATE_THEME"]:""),
		"ADD_SECTIONS_CHAIN" => "N",	// Включать раздел в цепочку навигации
		"ADD_ELEMENT_CHAIN" => "N",	// Включать название элемента в цепочку навигации
		"DISPLAY_PREVIEW_TEXT_MODE" => "H",
		"DETAIL_PICTURE_MODE" => "",
		"ADD_TO_BASKET_ACTION" => "",
		"SHOW_CLOSE_POPUP" => "N",
		"DISPLAY_COMPARE" => "N",	// Разрешить сравнение товаров
		"COMPARE_PATH" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["compare"],
		"SHOW_BASIS_PRICE" => (isset($arParams["DETAIL_SHOW_BASIS_PRICE"])?$arParams["DETAIL_SHOW_BASIS_PRICE"]:"Y"),
		"COMPONENT_TEMPLATE" => "product_detail",
		"HIDE_NOT_AVAILABLE_OFFERS" => "N",	// Недоступные торговые предложения
		"OFFERS_LIMIT" => "0",	// Максимальное количество предложений для показа (0 - все)
		"BACKGROUND_IMAGE" => "-",	// Установить фоновую картинку для шаблона из свойства
		"PRODUCT_INFO_BLOCK_ORDER" => "sku,props",
		"PRODUCT_PAY_BLOCK_ORDER" => "rating,price,priceRanges,quantityLimit,quantity,buttons",
		"IMAGE_RESOLUTION" => "16by9",
		"SHOW_SLIDER" => "N",
		"MESS_SHOW_MAX_QUANTITY" => "Наличие",
		"MESS_PRICE_RANGES_TITLE" => "Цены",
		"MESS_DESCRIPTION_TAB" => "Описание",
		"MESS_PROPERTIES_TAB" => "Характеристики",
		"MESS_COMMENTS_TAB" => "Комментарии",
		"SEF_MODE" => "N",	// Включить поддержку ЧПУ
		"SET_BROWSER_TITLE" => "Y",	// Устанавливать заголовок окна браузера
		"SET_META_KEYWORDS" => "Y",	// Устанавливать ключевые слова страницы
		"SET_META_DESCRIPTION" => "Y",	// Устанавливать описание страницы
		"STRICT_SECTION_CHECK" => "N",	// Строгая проверка раздела для показа элемента
		"USE_RATIO_IN_RANGES" => "Y",
		"ADD_TO_BASKET_ACTION_PRIMARY" => "",
		"USE_GIFTS_DETAIL" => "Y",	// Показывать блок "Подарки" в детальном просмотре
		"USE_GIFTS_MAIN_PR_SECTION_LIST" => "Y",	// Показывать блок "Товары к подарку" в детальном просмотре
		"GIFTS_DETAIL_PAGE_ELEMENT_COUNT" => "4",	// Количество элементов в блоке "Подарки" в строке в детальном просмотре
		"GIFTS_DETAIL_HIDE_BLOCK_TITLE" => "N",	// Скрыть заголовок "Подарки" в детальном просмотре
		"GIFTS_DETAIL_BLOCK_TITLE" => "Выберите один из подарков",	// Текст заголовка "Подарки"
		"GIFTS_DETAIL_TEXT_LABEL_GIFT" => "Подарок",	// Текст метки "Подарка" в детальном просмотре
		"GIFTS_SHOW_DISCOUNT_PERCENT" => "Y",	// Показывать процент скидки
		"GIFTS_SHOW_OLD_PRICE" => "Y",	// Показывать старую цену
		"GIFTS_SHOW_NAME" => "Y",	// Показывать название
		"GIFTS_SHOW_IMAGE" => "Y",	// Показывать изображение
		"GIFTS_MESS_BTN_BUY" => "Выбрать",	// Текст кнопки "Выбрать"
		"GIFTS_MAIN_PRODUCT_DETAIL_PAGE_ELEMENT_COUNT" => "4",	// Количество элементов в блоке "Товары к подарку" в строке в детальном просмотре
		"GIFTS_MAIN_PRODUCT_DETAIL_HIDE_BLOCK_TITLE" => "N",	// Скрыть заголовок "Товары к подарку" в детальном просмотре
		"GIFTS_MAIN_PRODUCT_DETAIL_BLOCK_TITLE" => "Выберите один из товаров, чтобы получить подарок",	// Текст заголовка "Товары к подарку"
		"USE_ENHANCED_ECOMMERCE" => "N",
		"COMPATIBLE_MODE" => "Y",	// Включить режим совместимости
		"DISABLE_INIT_JS_IN_COMPONENT" => "N",	// Не подключать js-библиотеки в компоненте
		"SET_VIEWED_IN_COMPONENT" => "N",	// Включить сохранение информации о просмотре товара для старых шаблонов
	),
	false
);

//Добавляем хлебные крошки товара
if (is_array($goods_chain_info) && isset($goods_chain_info['NAME']) && isset($goods_chain_info['DETAIL_PAGE_URL'])) {
    $APPLICATION->AddChainItem($goods_chain_info['NAME'], $goods_chain_info['DETAIL_PAGE_URL']);
} ?>