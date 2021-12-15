<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("TITLE", "Личный кабинет - Детальная заказа");
$APPLICATION->SetTitle("Детальная заказа");
?><?$APPLICATION->IncludeComponent(
	"bitrix:breadcrumb",
	"template-breadcrumb",
	Array(
		"PATH" => "",
		"SITE_ID" => "s1",
		"START_FROM" => "0"
	)
);?><br>
 <?$APPLICATION->IncludeComponent(
	"bitrix:sale.personal.order.detail", 
	"template-detail-order", 
	array(
		"ACTIVE_DATE_FORMAT" => "d.m.Y",
		"ALLOW_INNER" => "N",
		"CACHE_GROUPS" => "Y",
		"CACHE_TIME" => "3600",
		"CACHE_TYPE" => "A",
		"CUSTOM_SELECT_PROPS" => array(
		),
		"ID" => $_GET["id"],
		"ONLY_INNER_FULL" => "N",
		"PATH_TO_CANCEL" => "",
		"PATH_TO_COPY" => "/cart/",
		"PATH_TO_LIST" => "/personal-area/list-order.php",
		"PATH_TO_PAYMENT" => "/order/payment.php",
		"PICTURE_HEIGHT" => "",
		"PICTURE_RESAMPLE_TYPE" => "1",
		"PICTURE_WIDTH" => "",
		"PROP_1" => array(
		),
		"RESTRICT_CHANGE_PAYSYSTEM" => array(
			0 => "0",
		),
		"SET_TITLE" => "N",
		"COMPONENT_TEMPLATE" => "template-detail-order"
	),
	false
);?><br><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>