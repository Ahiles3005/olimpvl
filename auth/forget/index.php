<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("title", "Восстановление пароля - Торговый центр Йо-хо-хо");
$APPLICATION->SetTitle("Восстановление пароля");
?><?$APPLICATION->IncludeComponent(
	"bitrix:breadcrumb",
	"template-breadcrumb",
	Array(
		"PATH" => "",
		"SITE_ID" => "ln",
		"START_FROM" => "0"
	)
);?><?$APPLICATION->IncludeComponent("bitrix:system.auth.forgotpasswd", "template-forget-pas", Array(
	
	),
	false
);?><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>