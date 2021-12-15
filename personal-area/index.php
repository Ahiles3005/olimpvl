<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("keywords", "личный кабинет, история заказов, оплатить заказ, профиль пользователя, аккаунт, кабинет, заказы, покупки");
$APPLICATION->SetPageProperty("description", "Ваши заказы сохраняются в Личном кабинете, вы всегда можете вернуться к заказам и оплатить их");
$APPLICATION->SetPageProperty("title", "Личный кабинет профиля");
$APPLICATION->SetTitle("Личный кабинет");
?><div>
	 <?$APPLICATION->IncludeComponent(
	"bitrix:breadcrumb",
	"template-breadcrumb",
	Array(
		"COMPONENT_TEMPLATE" => "template-breadcrumb",
		"PATH" => "",
		"SITE_ID" => "s1",
		"START_FROM" => "0"
	)
);?><?$APPLICATION->IncludeComponent(
	"bitrix:main.profile", 
	"mp", 
	array(
		"CHECK_RIGHTS" => "Y",
		"COMPOSITE_FRAME_MODE" => "A",
		"COMPOSITE_FRAME_TYPE" => "AUTO",
		"SEND_INFO" => "N",
		"SET_TITLE" => "Y",
		"USER_PROPERTY" => array(
		),
		"USER_PROPERTY_NAME" => "",
		"COMPONENT_TEMPLATE" => "mp"
	),
	false
);?>
</div>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>