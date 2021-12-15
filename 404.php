<?

if(!defined('MYERROR_404'))
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");


CHTTP::SetStatus("404 Not Found");
@define("ERROR_404","Y");
  $APPLICATION->SetTitle("Страница не найдена");

$APPLICATION->SetPageProperty("breadcrumbs", false);
?>
    
<!-- Текст ошибки -->
<div class="row b-error">
    <p class="col-md-6 text-center b-error__number">404</p>
    <div class="col-md-6 b-error__text-align">
        <div class="b-error__text">
            <h1>Страница не найдена</h1>
            <p>К сожалению, запрашиваемая Вами страница была перемещена или удалена, а возможно, её никогда не было.</p>
            <p>А пока Вы можете подписаться на обновления или стать нашими друзьями в соцсетях:</p>
        </div>  
        <div class="b-social">
            <ul class="b-social__list clearfix">
                <li class="b-social__item"><a href="1#" class="b-social__link b-social__link--facebook"></a></li>
                <li class="b-social__item"><a href="#" class="b-social__link b-social__link--twitter"></a></li>
                <li class="b-social__item"><a href="#" class="b-social__link b-social__link--vkontakte"></a></li>
                <li class="b-social__item"><a href="#" class="b-social__link b-social__link--odnoklassniki"></a></li>
                <li class="b-social__item"><a href="#" class="b-social__link b-social__link--youtube"></a></li>
                <li class="b-social__item"><a href="#" class="b-social__link b-social__link--insagram"></a></li> 
            </ul>
        </div>
    </div>
</div>

<?
    // Карусель 
    $arBrand = $APPLICATION->IncludeComponent("kontora:element.list", "brands.line", array(
        'IBLOCK_ID'     => IBLOCK_ID_BRAND,
        'HTML_TYPE'     => array(''),
        'ELEMENT_COUNT' => '20',
        'ITEM_TEMPLATE' => '',
        'SELECT'         => array('NAME', 'DETAIL_PAGE_URL', 'PREVIEW_PICTURE'),
        'RETURN'        => 'ITEMS'
    ));
?>



<!-- Алфавит -->
<?
    $APPLICATION->IncludeComponent("kontora:shares.banner", "home.content.banners", array(
        "TYPE"               => "CENTRE_BANNER_TYPE",
        "PAGE_404"           => "Y",
        "NOINDEX"            => "Y",
        "BY"                 => "s_weight",
        "ORDER"              => "desc",
        "COMPONENT_TEMPLATE" => "home.content.banners",
        "CACHE_TYPE"         => "A",
        "CACHE_TIME"         => "0"
    ),false);
?>

<?

if(!defined('MYERROR_404')) require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");
?>
