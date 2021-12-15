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
		<?$APPLICATION->IncludeFile(SITE_DIR."personal-area/personal_menu.php",Array(),Array("MODE"=>"html"));?>
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
				4 => "PICTURES",
		),
		"OFFERS_LIMIT" => "5",
		"OFFERS_PROPERTY_CODE" => array(
			0 => "",
			1 => "",
		),
		"PRICE_CODE" => "",
		"PRODUCT_PROPERTIES" => "",
		"PROPERTY_CODE" => array(
			0 => "PICTURES",
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