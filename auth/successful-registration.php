<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("TITLE", "Подтверждение регистрации - Торговый центр Йо-хо-хо");
$APPLICATION->SetTitle("Подтверждение регистрации - Торговый центр Йо-хо-хо");
?><?$APPLICATION->IncludeComponent(
	"bitrix:system.auth.confirmation", 
	"template-confirmation-register", 
	array(
		"CONFIRM_CODE" => "confirm_code",
		"LOGIN" => "login",
		"USER_ID" => "confirm_user_id",
		"COMPONENT_TEMPLATE" => "template-confirmation-register"
	),
	false
);?><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>