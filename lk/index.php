<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Личный кабинет");
?>
    <br />
        <div class="b-tab b-tab-min">
            <ul class="b-tab__nav--list text-uppercase nav-tabs clearfix">
                <li class="b-tab__nav--item active mg-l_no">
                    <a href="#tab1" data-toggle="tab" class="b-tab__nav--link tx-dec_no">Персональные данные</a>
                </li>
                <li class="b-tab__nav--item">
                    <a href="#tab2" data-toggle="tab" class="b-tab__nav--link tx-dec_no">Избранное</a>
                </li>
                <li class="b-tab__nav--item">
                    <a href="#tab3" data-toggle="tab" class="b-tab__nav--link tx-dec_no">Бонусы</a>
                </li>
                <li class="b-tab__nav--item">
                    <a href="#tab4" data-toggle="tab" class="b-tab__nav--link tx-dec_no">Архив<span class="hidden-xs"> заказов</span></a>
                </li>
            </ul>
            <div class="b-tab__content">
                <? require "partials/personal_information.php"; ?>
                <? require "partials/account_favorites.php"; ?>
                <? require "partials/reward.php"; ?>
                <? require "partials/account_archive.php"; ?>
            </div>
        </div>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>