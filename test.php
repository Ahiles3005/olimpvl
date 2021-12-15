<?
require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/header.php');
$APPLICATION->SetPageProperty("tags", "спорт, велосипеды, лодки, моторы");
$APPLICATION->SetPageProperty("description", "Приглашаем Вас окунуться в незабываемую и увлекательную атмосферу спортивных достижений, удовольствия от движения, отдыха на природе, познать мир подводных тайн и приключений! Тысячи возможностей ждут Вас теперь в одном месте — сети спортивных магазинов \"ОЛИМП\"!  Качество и профессионализм проверенные временем Компания \"ОЛИМП\" — это один из лидеров среди розничных сетей по продаже товаров для спорта и активного отдыха. Благодаря сложившимся традициям и накопленным знаниям за 15 лет существования на рынке, мы с уверенностью можем сказать, что готовы обеспечить каждого широким ассортиментом лучшего снаряжения и экипировки по самым выгодным ценам.  Команда профессионалов, работающая в сети наших магазинов, всегда поможет найти оптимальное решение, исходя из Ваших потребностей и уровня подготовки. Специалисты сервисных центров окажут квалифицированную помощь, предоставят детальную информацию по техническим аспектам при выборе и эксплуатации оборудования.");
$APPLICATION->SetPageProperty("keywords", "Велосипеды, лодочные моторы, подвесные моторы, надувные лодки, транцевые лодки, палатки, спортивная одежда, кроссовки, тренажеры, беговые дорожки, велотренажеры, эллипсоид, спортивное питание, термос, кемпинговая мебель, сапборд, гидрокостюм, подводная маска, дайвинг, подводная охота");
$APPLICATION->SetPageProperty("title", "Олимп - сеть спортивных магазинов");
$APPLICATION->SetTitle("Сеть спортивных магазинов Олимп");
$keyCity = (empty($_COOKIE['KEY_CITY'])) ? Olimp\City::getDefaultCityCode() : $_COOKIE['KEY_CITY'];
if (!$keyCity) $keyCity = 'vladivostok';

?>
    <div class="b-tab b-tab-min b-tab--index">
        <ul class="b-tab__nav--list b-tab__nav--list-center text-uppercase nav-tabs clearfix">
            <li class="b-tab__nav--item b-tab__nav--item-center active"><a href="#tab1_1" data-toggle="tab"
                                                                           class="b-tab__nav--link tx-dec_no">Рекомендуем</a>
            </li>
            <li class="b-tab__nav--item b-tab__nav--item-center"><a href="#tab1_2" data-toggle="tab"
                                                                    class="b-tab__nav--link tx-dec_no">Новинки</a></li>

        </ul>
        <div class="b-tab__content b-products-slider">
            <div class="b-tab__content--item active" id="tab1_1">
                <? $APPLICATION->IncludeComponent(
                    "kontora:element.list",
                    "products.list",
                    Array(
                        "CATALOG_PAGE" => "main",
                        "CATALOG_TYPE" => "tile",
                        "CITY_CODE" => $keyCity,
                        "ELEMENT_COUNT" => "12",
                        "FILTER" => array(">PROPERTY_BEST" => 0, ">PROPERTY_MUST_THE_MAIN" => 0),
                        "HTML_TYPE" => array(''),
                        "IBLOCK_ID" => IBLOCK_ID_CATALOG,
                        "ITEM_TEMPLATE" => "",
                        "MAIN_TYPE" => "recommend",
                        "ORDER" => array('id' => 'asc'),
                        "PAGER_PARAMS_NAME" => "arrPager",
                        "PROPS" => array("CODE" => "PICTURES"),
                        "SELECT" => array("IBLOCK_ID", "ID", 'NAME', 'DETAIL_PAGE_URL', 'PREVIEW_PICTURE', "PROPERTY_MIN_PRICE_" . $keyCity, "PROPERTY_NEW", "PROPERTY_BEST_PRICE", "PROPERTY_BEST", "PROPERTY_ARTICUL"),
                        "SHOW_NAV_BLOCK" => "N"
                    )
                ); ?>
            </div>
            <div class="b-tab__content--item" id="tab1_2">
                <? $APPLICATION->IncludeComponent(
                    "kontora:element.list",
                    "products.list",
                    Array(
                        "CATALOG_PAGE" => "main",
                        "CATALOG_TYPE" => "tile",
                        "CITY_CODE" => $keyCity,
                        "ELEMENT_COUNT" => "12",
                        "FILTER" => array(">PROPERTY_NEW" => 0, ">PROPERTY_MUST_THE_MAIN" => 0),
                        "HTML_TYPE" => array(''),
                        "IBLOCK_ID" => IBLOCK_ID_CATALOG,
                        "ITEM_TEMPLATE" => "",
                        "MAIN_TYPE" => "new",
                        "ORDER" => array('id' => 'asc'),
                        "PAGER_PARAMS_NAME" => "arrPager",
                        "PROPS" => array("PICTURES"),
                        "SELECT" => array("IBLOCK_ID", "ID", 'NAME', 'DETAIL_PAGE_URL', 'PREVIEW_PICTURE', "PROPERTY_MIN_PRICE_" . $keyCity, "PROPERTY_NEW", "PROPERTY_BEST_PRICE", "PROPERTY_BEST", "PROPERTY_ARTICUL"),
                        "SHOW_NAV_BLOCK" => "N"
                    )
                ); ?>
            </div>

        </div>
    </div>
    <br>
    <br><? require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/footer.php'); ?>