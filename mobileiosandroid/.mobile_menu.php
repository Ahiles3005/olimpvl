<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true)
{
    die();
}
IncludeModuleLangFile($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/mobileapp/public/.mobile_menu.php");
$arMobileMenuItems = array(
    array(
        "type" => "section",
        "text" => 'Интернет-магазин',
        "sort" => "100",
        "items" => array(
            array(
                "text" => 'Каталог товаров',
                "data-url" => SITE_DIR . "mobileapp/index.php",
                "class" => "",
                "id" => "",
            ),
            array(
                "text" => 'Акции',
                "data-url" => SITE_DIR . "mobileapp/index.php",
                "class" => "",
                "id" => "",
            ),
            array(
                "text" => 'Распродажа',
                "data-url" => SITE_DIR . "mobileapp/index.php",
                "class" => "",
                "id" => "",
            ),
            array(
                "text" => 'Топовые товары',
                "data-url" => SITE_DIR . "mobileapp/index.php",
                "class" => "",
                "id" => "",
            )
        )
    ),
    array(
        "type" => "section",
        "text" => 'Информация',
        "sort" => "200",
        "items" => array(
            array(
                "text" => 'Адреса магазинов',
                "data-url" => SITE_DIR . "mobileapp/index.php",
                "class" => "",
                "id" => "",
            ),
            array(
                "text" => 'Условия покупки',
                "data-url" => SITE_DIR . "mobileapp/index.php",
                "class" => "",
                "id" => "",
            ),
            array(
                "text" => 'Условия доставки',
                "data-url" => SITE_DIR . "mobileapp/index.php",
                "class" => "",
                "id" => "",
            )
        )
    ),
    array(
        "type" => "section",
        "text" => 'Персональный раздел',
        "sort" => "200",
        "items" => array(
            array(
                "text" => 'Личные данные',
                "data-url" => SITE_DIR . "mobileapp/index.php",
                "class" => "",
                "id" => "",
            ),
            array(
                "text" => 'История заказов',
                "data-url" => SITE_DIR . "mobileapp/index.php",
                "class" => "",
                "id" => "",
            ),
            array(
                "text" => 'Корзина',
                "data-url" => SITE_DIR . "mobileapp/index.php",
                "class" => "",
                "id" => "",
            )
        )
    )
);
?>