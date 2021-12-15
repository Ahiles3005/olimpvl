<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("TITLE", "Личный кабинет - Избранное");
$APPLICATION->SetTitle("Избранное");

$obParser = new CTextParser;
$idUser = $USER->GetId();
define('PATH_TO_NO_PHOTO', '/bitrix/templates/yohoho/components/bitrix/catalog.section/template-section-slider/images/no_photo.png');
if (is_null($idUser)) {
    LocalRedirect('/');
}
$rsUser = CUser::GetById($idUser);
$arUser = $rsUser->Fetch();
$idFavorite = $arUser['UF_FAVORITE'];
?><?$APPLICATION->IncludeComponent(
	"bitrix:breadcrumb",
	"template-breadcrumb",
	Array(
		"COMPONENT_TEMPLATE" => "template-breadcrumb",
		"PATH" => "",
		"SITE_ID" => "s1",
		"START_FROM" => "0"
	)
);?>
<div class="container">
	 <!--        --><?//pp($arUser)?>
	<div class="personal-area content__personal-area">
		<h1 class="title personal-area__title">Личный кабинет</h1>
		<ul class="personal-area__menu" style="margin-right: 60px;">
			<li class="personal-area__item"><a href="/personal-area/" class="personal-area__item-text">Профиль</a></li>
			<li class="personal-area__item"><a href="list-order.php" class="personal-area__item-text">История заказов</a></li>
			<li class="personal-area__item"><a href="favorite.php" class="personal-area__item-text personal-area__item-text_selected">Избранное</a></li>
			<li class="personal-area__item"><a href="subscribe.php" class="personal-area__item-text">Рассылка</a></li>
			<li class="personal-area__item"><a href="/compare/" class="personal-area__item-text">Сравнение</a></li>
			<li class="personal-area__item"><a href="bonus.php" class="personal-area__item-text">Бонусы</a></li>
		</ul>
		<div class="list-order personal-area__list-order">
			<div>
				 <?$APPLICATION->IncludeComponent("h2o:favorites.list", "lk", Array(
	"ADD_PROPERTIES_TO_BASKET" => "Y",
		"BASKET_URL" => "/cart/",
		"CACHE_FILTER" => "N",	// Кешировать при установленном фильтре
		"CACHE_GROUPS" => "Y",	// Учитывать права доступа
		"CACHE_TIME" => "36000000",	// Время кеширования (сек.)
		"CACHE_TYPE" => "A",	// Тип кеширования
		"DATE_FORMAT" => "d.m.Y",	// Формат показа даты
		"DISPLAY_BOTTOM_PAGER" => "Y",	// Выводить под списком
		"DISPLAY_TOP_PAGER" => "Y",	// Выводить над списком
		"ELEMENT_SORT_FIELD" => "sort",
		"ELEMENT_SORT_FIELD2" => "id",
		"ELEMENT_SORT_ORDER" => "asc",
		"ELEMENT_SORT_ORDER2" => "desc",
		"FAVORITES_COUNT" => "20",	// Количество избранных товаров на странице
		"FILTER_NAME" => "",	// Фильтр
		"IBLOCK_ID" => "1",
		"IBLOCK_TYPE" => "CATALOG",
		"NAV_TEMPLATE" => "",	// Имя шаблона для постраничной навигации
		"OFFERS_CART_PROPERTIES" => "",
		"OFFERS_FIELD_CODE" => array(
			0 => "PREVIEW_PICTURE",
			1 => "DETAIL_PICTURE",
			2 => "UF_PICTURE",
			3 => "PICTURE",
		),
		"OFFERS_LIMIT" => "5",
		"OFFERS_PROPERTY_CODE" => array(
			0 => "",
			1 => "",
		),
		"PRICE_CODE" => "",
		"PRODUCT_PROPERTIES" => "",
		"PROPERTY_CODE" => array(
			0 => "",
			1 => "",
		),
		"SET_TITLE" => "Y",	// Устанавливать заголовок страницы
		"SHOW_DISCOUNT_PERCENT" => "Y",
		"SHOW_OLD_PRICE" => "Y",
		"SORT_BY" => "DATE_INSERT",	// Поле для сортировки избранных товаров
		"SORT_ORDER" => "DESC",	// Направление для сортировки избранных товаров
		"COMPONENT_TEMPLATE" => ".default"
	),
	false
);?>
			</div>
		
		</div>
	</div>
</div><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>