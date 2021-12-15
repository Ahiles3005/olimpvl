<!DOCTYPE html>
<html prefix="og: http://ogp.me/ns#">
<head>

	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="google-site-verification" content="aj2jl3aMAPGIRpkhkY8qrWPlfNnVZevPA_ihkmGk_8I" />
	<meta name="google-site-verification" content="JWp031S1faZ4b7NqzawonscV8vM-2w0O0H7l8xMATn4" />
    <meta name="p:domain_verify" content="f85da581b96c41db58215fad799e2e33"/>
	<!-- <meta name="skype_toolbar" content="skype_toolbar_parser_compatible"> -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><? if($APPLICATION) $APPLICATION->ShowTitle('title'); ?></title>
	<? $dateTime = new DateTime('now'); ?>

<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
global $APPLICATION;
$APPLICATION->SetAdditionalCss(SITE_TEMPLATE_PATH."/css/main.css?1235");

?>
<link media="print" rel="stylesheet" href="/html/src/style/partials/print.css">


<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">
	<!-- jquery подключаем в шапке т.к. какой-то js может быть внутри компонентов -->
	<!--<script  src="<?= SITE_TEMPLATE_PATH ?>/js/jquery/jquery.min.js" type="text/javascript"></script>-->
    <script defer src="https://use.fontawesome.com/releases/v5.2.0/js/all.js" integrity="sha384-4oV5EgaV02iISL2ban6c/RmotsABqE4yZxZLcYMAdG7FAPsyHYAPpywE9PJo+Khy" crossorigin="anonymous"></script>
	<!--[if lte IE 8]>
		<script async src="<?= SITE_TEMPLATE_PATH ?>/js/html5shiv/html5shiv.min.js" type="text/javascript"></script>
	<![endif]-->

	<? $APPLICATION->ShowHead(); ?>
   <script  src="<?= SITE_TEMPLATE_PATH ?>/js/internal_new.js?<?=$dateTime->format('U'); ?>" type="text/javascript"></script>

	      <script  src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js" type="text/javascript"></script>
	    <?

    if(empty($_COOKIE['KEY_CITY']) || $_COOKIE['KEY_CITY']==='null'){
    ?>

    <script>
    $(document).ready(function(){
      $.get("/sel_city.php?city="+'<?=$keyCity?>&die=1',function(){

      });
    });

    </script>

    <?
    }
    ?>

<?
global $USER;
?>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KPFBVQS');</script>
<!-- End Google Tag Manager -->
<script type="application/ld+json">
{
  "@context" : "http://schema.org",
  "@type" : "Organization",
  "name" : "Сеть спортивных магазинов Олимп",
  "url" : "https://olimpvl.ru",
  "sameAs" : [
    "https://vk.com/olimpvl",
    "https://www.facebook.com/olimpvl/",
    "https://twitter.com/olimpvl"
  ]
}
</script>

<?php global $USER;
if($USER->GetId()!=7602){?>
<script src="//code.jivosite.com/widget/NH8XE4fi35" async></script>
<?php }?>

<?$APPLICATION->IncludeComponent(
	"webes:oneclickheader",
	"",
Array()
);?>

</head>


<script>
//  CJSCore::Init(array('popup', 'date'));
</script>

<body>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KPFBVQS"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<? /* exit; */ ?>
	<? $APPLICATION->ShowPanel();?>

	<!--[if lt IE 10]>
	<div class="b-browser-happy">
		<div class="b-container">
			<p class="b-browser-happy__notice">Мы обнаружили, что вы используете <strong>устаревшую версию</strong> браузера Internet Explorer</p>
			<p class="b-browser-happy__security">Из соображений безопасности этот сайт поддерживает Internet Explorer версии 10 и выше
				<br>Кроме того, этот и многие другие сайты могут отображаться <strong>некорректно</strong></p>
			<p class="b-browser-happy__update">Пожалуйста, обновите свой браузер по этой <a href="http://browsehappy.com/" target="_blank">ссылке</a></p>
			<p class="b-browser-happy__recommend">(мы рекомендуем <a href="http://www.google.com/chrome" target="_blank">Google Chrome</a>)</p>
		</div>
	</div>
	<![endif]-->

	<header class="b-header">
		<div class="b-header__top">
			<div class="b-container">
				<div class="pull-left">
					<a href="/shops/" class="adr-mag">Адреса магазинов</a>
					<?
						$APPLICATION->IncludeComponent("bitrix:news.list", "select_city", array(
							"DISPLAY_NAME"              => "Y",
							"IBLOCK_TYPE"               => "GEO_CITY",
							"IBLOCK_ID"                 => IBLOCK_ID_GEO_CITY,
							"NEWS_COUNT"                => 10000,
							"PROPERTY_CODE"             => array('key', 'latitude', 'longitude'),
							"SORT_BY1"                  => "SORT",
							"SORT_ORDER1"               => "ASC",
							"SORT_BY2"                  => "ID",
							"SORT_ORDER2"               => "ASC",
							'SET_TITLE'                 => 'N',
							'SET_BROWSER_TITLE'         => 'N',
							'INCLUDE_IBLOCK_INTO_CHAIN' => 'N',
							'ADD_SECTIONS_CHAIN'        => 'N'
						));
					?>
				</div>
				<?
					$APPLICATION->IncludeComponent("bitrix:menu", "header_right", array(
						"ROOT_MENU_TYPE"        => "header_right",
						"MAX_LEVEL"             => "1",
						"CHILD_MENU_TYPE"       => "",
						"USE_EXT"               => "Y",
						"MENU_CACHE_TYPE"       => "A",
						"MENU_CACHE_TIME"       => "3600",
						"MENU_CACHE_USE_GROUPS" => "Y",
						"MENU_CACHE_GET_VARS"   => array()
					));
				?>
			</div>
		</div>
		<div class="b-header__bottom clearfix">
			<div class="b-container clearfix">
				<div class="b-header__logo">
					<?$href=($APPLICATION->GetCurPage()!='/')?'href="/"':'';?>
					<a <?=$href?> title="Сеть спортивных магазинов Олимп"><img src="<?= SITE_TEMPLATE_PATH ?>/img/inhtml/logo.png" alt="Логотип спортивного магазина Олимп" title="Сеть спортивных магазинов Олимп" /></a>
				</div>
                <div style="width:300px" class="b-header__search">
                    <?
                    $APPLICATION->SetTitle("");?><?$APPLICATION->IncludeComponent(
                            "arturgolubev:search.title",
                            "",
                            Array(
                                "CATEGORY_0" => array("iblock_CATALOG"),
                                "CATEGORY_0_TITLE" => "",
                                "CATEGORY_0_iblock_CATALOG" => array("all"),
                                "CHECK_DATES" => "N",
                                "COMPOSITE_FRAME_MODE" => "A",
                                "COMPOSITE_FRAME_TYPE" => "AUTO",
                                "CONTAINER_ID" => "title-search",
                                "CONVERT_CURRENCY" => "N",
                                "INPUT_ID" => "title-search-input",
                                "NUM_CATEGORIES" => "1",
                                "ORDER" => "date",
                                "PAGE" => "#SITE_DIR#search/index.php",
                                "PREVIEW_HEIGHT" => "75",
                                "PREVIEW_TRUNCATE_LEN" => "",
                                "PREVIEW_WIDTH" => "75",
                                "PRICE_CODE" => array("vladivostok","ussurijsk","arsenev","naxodka","komsomolsk_na_amure","BASE"),
                                "PRICE_VAT_INCLUDE" => "Y",
                                "SHOW_INPUT" => "Y",
                                "SHOW_OTHERS" => "N",
                                "SHOW_PREVIEW" => "Y",
                                "TEMPLATE_THEME" => "blue",
                                "TOP_COUNT" => "5",
                                "USE_LANGUAGE_GUESS" => "Y"
                            )
                        );
                    ?>
                </div>
				<?
//					$APPLICATION->IncludeComponent(
//						"bitrix:search.form",
//						"header",
//						array(
//							"USE_SUGGEST" => "N",
//							"PAGE" => "#SITE_DIR#search/index.php",
//							"COMPONENT_TEMPLATE" => "header",
//							"COMPOSITE_FRAME_MODE" => "A",
//							"COMPOSITE_FRAME_TYPE" => "AUTO"
//						),
//						false,
//						array(
//							"ACTIVE_COMPONENT" => "Y"
//						)
//					);
				?>
				<!--<div class="b-header__bottom--account"  style=""><?//2 спринт?>
					<a href="<?=($USER->IsAuthorized()) ? "/lk/" : "#popup-login";?>" data-popup="open">
						<div class="b-personal-account">
							<div class="b-personal-account__ico">
								<div class="b-personal-account__ico__pic pic-auth"></div>
								<div class="b-personal-account__ico-name"><?=($USER->IsAuthorized()) ? $USER->GetFirstName() : "войти";?></div>
							</div>
								<div class="b-personal-account__dropdown">
									<div class="b-personal-account__dropdown-name">Личный кабинет</div>
									<div class="b-personal-account__auth"><a href="<?=($USER->IsAuthorized()) ? "/lk/" : "#popup-login";?>" data-popup="open"><?=($USER->IsAuthorized()) ? "Профиль" : "Войти";?></a></div>
									<div class="b-personal-account__register"><a href="<?=($USER->IsAuthorized()) ? "/?logout=yes" : "#popup-sign-up";?>" data-popup="open"><?=($USER->IsAuthorized()) ? "Выйти" : "Зарегистрироваться";?></a></div>
								</div>
						</div>
					</a>
					<a href="/favorites/">
						<div class="b-personal-account">
							<div class="b-personal-account__ico">
								<div class="b-personal-account__ico__pic pic-favorite"></div>
								<div class="b-personal-account__ico-title">10</div>
								<div class="b-personal-account__ico-name">избранное</div>
							</div>
							<div class="b-personal-account__dropdown">
								<div class="b-personal-account__dropdown-name">Избранное</div>
								<div class="b-personal-account__dropdown-favoritesnum">Отложено 10 товаров</div>
								<div class="b-personal-account__enter personal-account__btn"><a href="/favorites/" class="link">В ИЗБРАННОЕ</a></div>
							</div>
						</div>
					</a>
					<a href="/cart/">
						<div class="b-personal-account">
							<div class="b-personal-account__ico">
								<div class="b-personal-account__ico__pic pic-basket"></div>
								<div class="b-personal-account__ico-title">12</div>
								<div class="b-personal-account__ico-name">корзина</div>
							</div>
							<div class="b-personal-account__dropdown">
								<div class="b-personal-account__dropdown-name">Ваша корзина</div>
								<div class="b-personal-account__allitem">12 товаров</div>
								<div class="b-personal-account__summ">на сумму 13 860 р</div>
								<div class="b-personal-account__bonus">Бонусов: 350</div>
								<div class="b-personal-account__btn personal-account__btn"><a href="/cart/" class="link">Оформить заказ</a> </div>
							</div>
						</div>
					</a>
				</div>-->
				<? $cityInfo = Olimp\City::getCurCityInfo(); ?>
				<div class="b-contact-header">
					<div class="contact-header">
						<? if (!empty($cityInfo['PHONE'])): ?>
							<a href="tel:88001001215">88001001215</a>
						<? endif; ?>
						<? if (!empty($cityInfo['EMAIL'])): ?>
							<p class="mail">Эл. почта: <a href="mailto:<?=$cityInfo['EMAIL']?>"><?=$cityInfo['EMAIL']?></a></p>
						<? endif; ?>
					</div>
				</div>

<div class="siteusers">
<?if($USER->IsAuthorized()):?>
<a href="/personal-area/" data-popup="open"><i class="fas fa-user"></i> &nbsp;Личный кабинет</a><br>
<a href="/?logout=yes" data-popup="open"><i class="fas fa-sign-out-alt"></i> &nbsp;Выход</a>
<?else:?>
<a href="#popup-login" data-popup="open"><i class="fas fa-sign-in-alt"></i> &nbsp;&nbsp;Авторизация</a><br>
<a href="#popup-sign-up" data-popup="open"><i class="fas fa-user-plus"></i> &nbsp;Регистрация</a>
<?endif;?>
</div>

			</div>
		</div>
		<?
			$APPLICATION->IncludeComponent(
	"bitrix:menu", 
	"header_middle", 
	array(
		"ROOT_MENU_TYPE" => "header_middle",
		"MAX_LEVEL" => "3",
		"CHILD_MENU_TYPE" => "",
		"USE_EXT" => "Y",
		"DELAY" => "Y",
		"ALLOW_MULTI_SELECT" => "Y",
		"MENU_CACHE_TYPE" => "A",
		"MENU_CACHE_TIME" => "36000",
		"MENU_CACHE_USE_GROUPS" => "Y",
		"MENU_CACHE_GET_VARS" => array(
		),
		"COMPONENT_TEMPLATE" => "header_middle",
		"COMPOSITE_FRAME_MODE" => "Y",
		"COMPOSITE_FRAME_TYPE" => "AUTO"
	),
	false
);
		?>
		<div class="b-header-mobile">
			<div class="b-container">
				<div class="b-header-mobile__menu">

				</div>
				<div class="b-header-mobile__logo">
					<?$href=($APPLICATION->GetCurPage()!='/')?'href="/"':'';?>
					<a <?=$href?> title="Интернет-магазин Олимп"><img src="/html/src/img/inhtml/logo-mobile.png" alt="Интернет-магазин Олимп" title="спортивный интернет-магазин Олимп" /></a>
				</div>
				<?
					$APPLICATION->IncludeComponent("bitrix:search.form", "header_mobile", array(
						"USE_SUGGEST" => "N",
						"PAGE"        => "#SITE_DIR#search/index.php"
					));
				?>
				<!--<div class="b-header__bottom--account" style=""><?//2 спринт?>
					<div class="b-personal-account">
						<div class="b-personal-account__ico">
							<div class="b-personal-account__ico__pic pic-auth"></div>
							<div class="b-personal-account__ico-name"><a href="<?=($USER->IsAuthorized()) ? "/lk/" : "#popup-login";?>" data-popup="open"><?=($USER->IsAuthorized()) ? $USER->GetFirstName() : "Войти";?></a></div>
						</div>
						<div class="b-personal-account__dropdown">
							<div class="b-personal-account__dropdown-name">Личный кабинет</div>
							<div class="b-personal-account__auth"><a href="<?=($USER->IsAuthorized()) ? "/lk/" : "#popup-login";?>" data-popup="open">Войти</a></div>
							<div class="b-personal-account__register"><a href="#popup-sign-up" data-popup="open">Зарегистрироваться</a></div>
						</div>
					</div>
					<div class="b-personal-account">
						<div class="b-personal-account__ico">
							<div class="b-personal-account__ico__pic pic-favorite"></div>
							<div class="b-personal-account__ico-title">10</div>
							<div class="b-personal-account__ico-name">Избранное</div>
						</div>
						<div class="b-personal-account__dropdown">
							<div class="b-personal-account__dropdown-name">Избранное</div>
							<div class="b-personal-account__dropdown-favoritesnum">Отложено 10 товаров</div>
							<div class="b-personal-account__enter personal-account__btn"><a href="/favorites/" class="link">В ИЗБРАННОЕ</a></div>
						</div>
					</div>
					<div class="b-personal-account">
						<div class="b-personal-account__ico">
							<div class="b-personal-account__ico__pic pic-basket"></div>
							<div class="b-personal-account__ico-title">12</div>
							<div class="b-personal-account__ico-name">Корзина</div>
						</div>
						<div class="b-personal-account__dropdown">
							<div class="b-personal-account__dropdown-name">Ваша корзина</div>
							<div class="b-personal-account__allitem">12 товаров</div>
							<div class="b-personal-account__summ">на сумму 13 860 р</div>
							<div class="b-personal-account__bonus">Бонусов: 350</div>
							<div class="b-personal-account__btn personal-account__btn"><a href="/cart/" class="link">Оформить заказ</a> </div>
						</div>
					</div>
				</div>-->
				<div class="b-header-mobile__list" style="">
					<!--<a href="<?=($USER->IsAuthorized()) ? "/lk/" : "#popup-login";?>" data-popup="open" class="b-header-mobile__link">
						<div class="b-header-mobile__auth">
							<div class="b-header-mobile-ov">
								<div class="b-header-mobile__auth--pic"></div>
								<div class="text-uppercase b-header-mobile__auth--name"><?=($USER->IsAuthorized()) ? $USER->GetFirstName() : "войти";?></div>
								<div class="b-header-mobile__auth--tooltip">3</div>
							</div>
							<div class="b-personal-account__dropdown">
								<div class="b-personal-account__dropdown-name">Личный кабинет</div>
								<div class="b-personal-account__auth"><a href="#popup-login" data-popup="open">Войти</a></div>
								<div class="b-personal-account__register"><a href="#popup-sign-up" data-popup="open">Зарегистрироваться</a></div>
							</div>
						</div>
					</a>
					<a href="/favorites/" class="b-header-mobile__link">
						<div class="b-header-mobile__favorite">
							<div class="b-header-mobile-ov">
								<div class="b-header-mobile__favorite--pic"></div>
								<div class="text-uppercase b-header-mobile__favorite--name">Избранное</div>
								<div class="b-header-mobile__favorite--tooltip">10</div>
							</div>
							<div class="b-personal-account__dropdown">
								<div class="b-personal-account__dropdown-name">Избранное</div>
								<div class="b-personal-account__dropdown-favoritesnum">Отложено 10 товаров</div>
								<div class="b-personal-account__btn personal-account__btn"><a href="/favorites/" class="link">В ИЗБРАННОЕ</a></div>
							</div>
						</div>
					</a>
					<a href="/cart/" class="b-header-mobile__link">
						<div class="b-header-mobile__basket">
							<div class="b-header-mobile-ov">
								<div class="b-header-mobile__basket--pic"></div>
								<div class="text-uppercase b-header-mobile__basket--name">Корзина</div>
								<div class="b-header-mobile__basket--tooltip">12</div>
							</div>
							<div class="b-personal-account__dropdown">
								<div class="b-personal-account__dropdown-name">Ваша корзина</div>
								<div class="b-personal-account__allitem">12 товаров</div>
								<div class="b-personal-account__summ">на сумму 13 860 р</div>
								<div class="b-personal-account__bonus">Бонусов: 350</div>
								<div class="b-personal-account__btn personal-account__btn"><a href="/cart/" class="link">Оформить заказ</a> </div>
							</div>
						</div>
					</a>-->

					<div class="b-header-mobile__search">
					<div class="b-header-mobile__search--pic"></div>
					<div class="b-header-mobile__search--name">Поиск</div>
					</div>
				</div>

<!--
				Модальное окно "Восстановление пароля"
				<div id="popup-pass-recovery" style="display:none;">
					<div class="b-popup-pass-recovery b-popup">
						<div class="b-popup__modal-content">
							<div class="b-popup__modal-header">
								<a class="close b-popup__close" data-popup="close">×</a>
								<div class="b-popup__header-text">Восстановление<br> пароля</div>
							</div>
							<div class="b-popup__modal-body">
								<div class="b-popup-feedback__form b-popup__main-block">
									<form class="b-form" method="post" action="handler.php">
										<p class="b-popup-pass-recovery__text">
											Контрольное слово для смены пароля, а также ваши регистрационные данные, будут высланы вам на эл. почту.
										</p>
										<div class="form-group b-popup-feedback__form-group">
											<label class="b-form__label" for="email-login">Эл. почта*</label>
											<input type="email" id="email-login" class="b-popup-feedback__input b-form__input js-validation-change" data-rules="req;email">
										</div>
										<input type="submit" class="b-popup-feedback__input-popup--feedback btn b-btn__default" value="Отправить"/>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
-->
				<?
					$APPLICATION->IncludeComponent("bitrix:search.form", "header_mobile_list", array(
						"USE_SUGGEST" => "N",
						"PAGE"        => "#SITE_DIR#search/index.php"
					));

					$APPLICATION->IncludeComponent("bitrix:menu", "header_middle_mobile", array(
						"ROOT_MENU_TYPE"        => "header_middle",
						"MAX_LEVEL"             => "3",
						"CHILD_MENU_TYPE"       => "",
						"USE_EXT"               => "Y",
						"DELAY"                 => "N",
						"ALLOW_MULTI_SELECT"    => "Y",
						"MENU_CACHE_TYPE"       => "A",
						"MENU_CACHE_TIME"       => "3600",
						"MENU_CACHE_USE_GROUPS" => "Y",
						"MENU_CACHE_GET_VARS"   => ""
					));
				?>


				</div>
			</div>
		</div>


	</header>
	<!-- Открывается центральная часть (100%) -->
	<? if ($APPLICATION->GetProperty("container") !== "false"): ?>
		<div class="b-wrapper">
			<div class="b-container <? $APPLICATION->ShowViewContent('catalogDetail'); ?>">

			<? if ($APPLICATION->GetProperty("breadcrumbs") !== "false" && $APPLICATION->GetCurDir() != '/' && !ERROR_404): ?>
				<?
					$APPLICATION->IncludeComponent("bitrix:breadcrumb", "main", array(
						"START_FROM" => "0",
						"PATH"       => "",
					));
				?>
				<h1 class="b-container__headline"><? $APPLICATION->ShowTitle(false); ?></h1>
			<? endif; ?>
	<? endif; ?>

	 <?
// var_dump($_SESSION["CATALOG_COMPARE_LIST"]);
// exit;
    if(!empty($_SESSION["CATALOG_COMPARE_LIST"][1])){

    $a = count($_SESSION["CATALOG_COMPARE_LIST"][1]['ITEMS']);

    }else{
    $a=0;

    }

//     var_dump($a);
//     die();
    ?>



<div class="inf-holder">

<?if($USER->IsAuthorized()):?>
<span id="persona" class="informer"><a href="/personal-area/" class="btn btn-default btn-awe" data-toggle="tooltip" data-placement="left" title="Личный кабинет" data-original-title="Вход в личный кабинет"><span class="fa-layers fa-fw"><i class="fas fa-user"></i></span></a></span>
<?else:?>
<span id="persona" class="informer"><a  href="#popup-login" data-popup="open" class="btn btn-default btn-awe" data-toggle="tooltip" data-placement="left" title="Вход в личный кабинет" data-original-title="Вход в личный кабинет"><span class="fa-layers fa-fw"><i class="fas fa-user"></i></span></a></span>
<?endif;?>


<span id="comparison" class="informer"><a href="/compare" class="btn btn-default btn-awe" data-toggle="tooltip" data-placement="left" title="Сравнение" data-original-title="Сравнение"><span class="fa-layers fa-fw"><i class="far fa-chart-bar"></i> <span class="fa-layers-counter fff-shop cnt_compare"><?=(int)$a?></span></span></a></span>

<span id="wishlist" class="informer">
	<?$APPLICATION->IncludeComponent(
	"h2o:favorites.line",
	"",
	Array(
		"CACHE_TIME" => "36000000",
		"CACHE_TYPE" => "A",
		"URL_LIST" => ""
	)
);?>
</span>

<span id="cart_informer" class="informer"><a href="/cart" class="btn btn-default btn-awe" data-toggle="tooltip" data-placement="left" title="Корзина" data-original-title="Корзина"><span class="fa-layers fa-fw"><i class="fas fa-shopping-cart"></i> <span class="fa-layers-counter fff-shop cart_counter">0</span></span></a></span>

<script>
 $(document).ready(function() {
  $(".inf-holder").css('display', 'inline-block');
   setTimeout(function(){
      $.post("/ajax/getcartamount.php",{ },function(data){

        var data = JSON.parse(data);
          console.log(data,data.count);
         $('.cart_counter').text(data.count);

    });

   },500)  ;



 });
</script>

</div>




<script type="text/javascript">
function changeCalendar() {
    var el = $('[id ^= "calendar_popup_"]'); //найдем div  с календарем
    var links = el.find(".bx-calendar-cell"); //найдем элементы отображающие дни
    $('.bx-calendar-left-arrow').attr({'onclick': 'changeCalendar();',}); //вешаем функцию изменения  календаря на кнопку смещения календаря на месяц назад
    $('.bx-calendar-right-arrow').attr({'onclick': 'changeCalendar();',}); //вешаем функцию изменения  календаря на кнопку смещения календаря на месяц вперед
    $('.bx-calendar-top-month').attr({'onclick': 'changeMonth();',}); //вешаем функцию изменения  календаря на кнопку выбора месяца
    $('.bx-calendar-top-year').attr({'onclick': 'changeYear();',}); //вешаем функцию изменения  календаря на кнопку выбора года
    var date = new Date();
    for (var i =0; i < links.length; i++)
    {
        var atrDate = links[i].attributes['data-date'].value;
        var d = date.valueOf();
        var g = links[i].innerHTML;
        if (date - atrDate < 24*60*60*1000) {
            $('[data-date="' + atrDate +'"]').addClass("bx-calendar-date-hidden disabled"); //меняем класс у элемента отображающего день, который меньше по дате чем текущий день
        }
    }
}



function changeMonth() {
    var el = $('[id ^= "calendar_popup_month_"]'); //найдем div  с календарем
    var links = el.find(".bx-calendar-month");
    for (var i =0; i < links.length; i++) {
        var func = links[i].attributes['onclick'].value;
        $('[onclick="' + func +'"]').attr({'onclick': func + '; changeCalendar();',}); //повесим событие на выбор месяца
    }
}



function changeYear() {
    var el = $('[id ^= "calendar_popup_year_"]'); //найдем div  с календарем
    var link = el.find(".bx-calendar-year-input");
    var func2 = link[0].attributes['onkeyup'].value;
    $('[onkeyup="' + func2 +'"]').attr({'onkeyup': func2 + '; changeCalendar();',}); //повесим событие на ввод года
    var links = el.find(".bx-calendar-year-number");
    for (var i =0; i < links.length; i++) {
        var func = links[i].attributes['onclick'].value;
        $('[onclick="' + func +'"]').attr({'onclick': func + '; changeCalendar();',}); //повесим событие на выбор года
    }
}


</script>

<style>

.bx-calendar-date-hidden .disabled{
  pointer-events: none;
  display:none
}


</style>



