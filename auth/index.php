<?

if(isset($_GET['change_password'])){


header("Location: /personal-area/new_password.php?".$_SERVER['QUERY_STRING']);
exit;

}
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("title", "Вход и Регистрация");
$APPLICATION->SetTitle("Вход и Регистрация");
?>
<?
if ($USER->IsAuthorized()) {
	if (isset($_REQUEST["backurl"]) && strlen($_REQUEST["backurl"]) > 0) {
		LocalRedirect($backurl);
	}
}
//else {
//	LocalRedirect('/');
//}
?>
<?$APPLICATION->IncludeComponent(
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
	<div class="login-register content__login-register">
		<h1 class="title login-register__title">Вход <span class="orange">/</span> Регистрация
		</h1>

		<?$APPLICATION->IncludeComponent(
	"bitrix:system.auth.form",
	"auth-template",
	Array(
		"FORGOT_PASSWORD_URL" => "forget/",
		"PROFILE_URL" => "/personal-area/",
		"REGISTER_URL" => "",
		"SHOW_ERRORS" => "Y"
	)
);?>
		<?$APPLICATION->IncludeComponent(
	"bitrix:main.register", 
	"register-template", 
	array(
		"AUTH" => "Y",
		"COMPONENT_TEMPLATE" => "register-template",
		"REQUIRED_FIELDS" => array(
			0 => "EMAIL",
			1 => "NAME",
			2 => "LAST_NAME",
			3 => "PERSONAL_MOBILE",
		),
		"SET_TITLE" => "Y",
		"SHOW_FIELDS" => array(
			0 => "EMAIL",
			1 => "NAME",
			2 => "LAST_NAME",
			3 => "PERSONAL_MOBILE",
		),
		"SUCCESS_PAGE" => "",
		"USER_PROPERTY" => array(
		),
		"USER_PROPERTY_NAME" => "",
		"USE_BACKURL" => "Y"
	),
	false
);?>
	</div>
	</div><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>