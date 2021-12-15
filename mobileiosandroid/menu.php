<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");

$arParams = array(
    "MENU_FILE_PATH" => SITE_DIR . "mobileapp/.mobile_menu.php",
);

$APPLICATION->IncludeComponent(
    'bitrix:mobileapp.menu',
    'mobile',
    $arParams,
    false,
    Array('HIDE_ICONS' => 'Y'));
?>

<script type="text/javascript">
    app.enableSliderMenu(true);
</script>
<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php") ?>
