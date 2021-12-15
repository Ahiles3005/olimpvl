<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Новый пароль");
?><?$APPLICATION->IncludeComponent("bitrix:main.auth.changepasswd", ".default", Array(
	"AUTH_AUTH_URL" => "",	// Страница для авторизации
		"AUTH_REGISTER_URL" => "",	// Страница для регистрации
		"COMPOSITE_FRAME_MODE" => "A",	// Голосование шаблона компонента по умолчанию
		"COMPOSITE_FRAME_TYPE" => "AUTO",	// Содержимое компонента
	),
	false
);?><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>