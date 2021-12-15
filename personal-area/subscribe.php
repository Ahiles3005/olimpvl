<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("TITLE", "Личный кабинет - Рассылка");
$APPLICATION->SetTitle("Рассылка");
?>

<? $APPLICATION->IncludeComponent(
    "bitrix:breadcrumb",
    "template-breadcrumb",
    Array(
        "PATH" => "",
        "SITE_ID" => "s1",
        "START_FROM" => "0"
    )
); ?><br>
<?
$idUser = $USER->GetId();
$rsUser = CUser::GetById($idUser);
$arUser = $rsUser->Fetch();
?>

    <div class="content">
        <div class="personal-area content__personal-area">
            <h1 class="title personal-area__title">Личный кабинет</h1>
            <ul class="personal-area__menu">
                <li class="personal-area__item"><a href="/personal-area/" class="personal-area__item-text">Профиль</a>
                </li>
                <li class="personal-area__item"><a href="list-order.php" class='personal-area__item-text'>История
                        заказов</a></li>
                <li class="personal-area__item"><a href="favorite.php" class='personal-area__item-text'>Избранное</a>
                </li>
                <li class="personal-area__item"><a href="subscribe.php" class='personal-area__item-text personal-area__item-text_selected'>Рассылка</a></li>
                <li class="personal-area__item"><a href="/compare/" class="personal-area__item-text">Сравнение</a></li>
                <li class="personal-area__item"><a href="bonus.php"
                                                   class="personal-area__item-text">Бонусы</a>
                </li>
            </ul>


            <?$APPLICATION->IncludeComponent(
                "bitrix:sender.subscribe",
                "template-sender-subscribe",
                Array(
                    "AJAX_MODE" => "N",
                    "AJAX_OPTION_ADDITIONAL" => "",
                    "AJAX_OPTION_HISTORY" => "N",
                    "AJAX_OPTION_JUMP" => "N",
                    "AJAX_OPTION_STYLE" => "Y",
                    "CACHE_TIME" => "3600",
                    "CACHE_TYPE" => "A",
                    "CONFIRMATION" => "Y",
                    "HIDE_MAILINGS" => "Y",
                    "SET_TITLE" => "Y",
                    "SHOW_HIDDEN" => "N",
                    "USER_CONSENT" => "N",
                    "USER_CONSENT_ID" => "0",
                    "USER_CONSENT_IS_CHECKED" => "Y",
                    "USER_CONSENT_IS_LOADED" => "N",
                    "USE_PERSONALIZATION" => "Y"
                )
            );?>
        </div>
    </div>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>