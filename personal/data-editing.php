<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("title", "Редактирование данных — Торговый центр Йо-Хо-Хо");
$APPLICATION->SetTitle("Редактирование данных");
?><?$APPLICATION->IncludeComponent(
	"bitrix:breadcrumb", 
	"template-breadcrumb", 
	array(
		"PATH" => "",
		"SITE_ID" => "s1",
		"START_FROM" => "0",
		"COMPONENT_TEMPLATE" => "template-breadcrumb"
	),
	false
);?><?$APPLICATION->IncludeComponent(
	"yohoho_components:main.yohoho_profile",
	"template-read-info",
	Array(
		"AJAX_MODE" => "N",
		"AJAX_OPTION_ADDITIONAL" => "",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"CHECK_RIGHTS" => "N",
		"SEND_INFO" => "N",
		"SET_TITLE" => "Y",
		"USER_PROPERTY" => array("UF_PERSONAL_HOME","UF_PERSONAL_APARTMEN"),
		"USER_PROPERTY_NAME" => ""
	)
);?><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>