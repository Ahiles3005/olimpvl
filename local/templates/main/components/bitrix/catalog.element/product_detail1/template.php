   <? /*var_dump ($arResult["OFFERS"][$arResult["PRODUCT"]["KEY"]]); exit;*/ ?>
<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
$this->SetViewTarget('catalogDetail'); ?> b-container--product<? $this->EndViewTarget();
ob_start();
?>


    <?

    if(!empty($_SESSION["CATALOG_COMPARE_LIST"][1])){

    $a = count($_SESSION["CATALOG_COMPARE_LIST"][1]['ITEMS']);

    }else{
    $a=0;

    }
    ?>


<div class="inf-holder">

<span id="persona" class="informer"><a href="/personal-area/" class="btn btn-default btn-awe" data-toggle="tooltip" data-placement="left" title="Вход в личный кабинет" data-original-title="Вход в личный кабинет"><span class="fa-layers fa-fw"><i class="fas fa-user"></i></span></a></span>
  
<span id="comparison" class="informer"><a href="/compare" class="btn btn-default btn-awe" data-toggle="tooltip" data-placement="left" title="Сравнение" data-original-title="Сравнение"><span class="fa-layers fa-fw"><i class="fas fa-exchange-alt"></i> <span class="fa-layers-counter fff-shop cnt_compare"><?=$a?></span></span></a></span>

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



<div class="b-product-main">
    <div id="tab-carousel-product"
         class="carousel slide <? if (count($arResult["PRODUCT"]["PICTURES"]["PIC_SMALL"]) > 1): ?>b-tab-slider__product--big<? endif; ?>"
         data-ride="carousel">
        <!-- Indicators -->
        <? if (count($arResult["PRODUCT"]["PICTURES"]["PIC_SMALL"]) > 1): ?>
            <div class="tab-carousel-indicator tab-carousel-indicator--desctop">
                <!-- Controls -->
                <div class="tab-bxslider">
                    <ul class="bxslider bxslider-tab js-picture-slider-desctop">
                        <? foreach ($arResult["PRODUCT"]["PICTURES"]["PIC_SMALL"] as $key => $src): ?>
                            <li data-target="#tab-carousel-product" data-slide-to="<?= $key ?>">
                                <img src="<?= $src ?>" alt="..." title=""/>
                            </li>
                        <? endforeach; ?>
                    </ul>
                </div>
            </div>
        <? endif; ?>
        <!-- Wrapper for slides -->
        <div
            class="carousel-inner tab-carousel-indicator__carousel-inner <? if (count($arResult["PRODUCT"]["PICTURES"]["PIC_SMALL"]) < 2): ?>carousel-inner-nolist<? endif; ?>"
            role="listbox">
            <? if (count($arResult["PRODUCT"]["PICTURES"]["PIC_SMALL"]) == 0) : ?>
                <div class="item<? if ($key == $arResult["PRODUCT"]["PICTURES"]["MAIN"]) echo " active" ?>">
                    <img src="<?= DEF_PIC_DETAIL ?>" alt="..." title="">
                </div>
            <? else: ?>
                <? foreach ($arResult["PRODUCT"]["PICTURES"]["PIC_BIG"] as $key => $src): ?>
                    <div class="item<? if ($key == $arResult["PRODUCT"]["PICTURES"]["MAIN"]) echo " active" ?>">
                        <img src="<?= $src ?>" alt="..." title="">
                    </div>
                <? endforeach ?>
            <? endif ?>
        </div>
        <? if (count($arResult["PRODUCT"]["PICTURES"]["PIC_SMALL"]) > 1): ?>
            <div class="tab-carousel-indicator tab-carousel-indicator--mobile">
                <!-- Controls -->
                <div class="tab-bxslider">
                    <ul class="bxslider bxslider-tab js-picture-slider-mobile">
                        <? foreach ($arResult["PRODUCT"]["PICTURES"]["PIC_SMALL"] as $key => $src): ?>
                            <li data-target="#tab-carousel-product" data-slide-to="<?= $key ?>">
                                <img src="<?= $src ?>" alt="..." title=""/>
                            </li>
                        <? endforeach; ?>
                    </ul>
                </div>
            </div>
        <? endif; ?>
    </div>

    <div class="b-tab">
        <ul class="b-tab__nav--list b-tab__nav--main-page text-uppercase nav-tabs clearfix">
            <li class="b-tab__nav--item active">
                <a href="#tab1" data-toggle="tab"
                   class="b-tab__nav--link tx-dec_no"><?= GetMessage("PRODUCT_DESCRIPTION") ?></a>
            </li>
            <li class="b-tab__nav--item">
                <a href="#tab2" data-toggle="tab"
                   class="b-tab__nav--link tx-dec_no"><?= GetMessage("PRODUCT_CHARACTERISTICS") ?></a>
            </li>
            <li class="b-tab__nav--item">
                <a href="#tab3" data-toggle="tab"
                   class="b-tab__nav--link tx-dec_no"><?= ($arResult["RATING"]["COUNT"] != 0) ? "Отзывы" . " (" . $arResult["RATING"]["COUNT"] . ")" : "Отзывы"; ?><? // $APPLICATION->ShowViewContent('countResponse'); ?></a>
            </li>
            <li class="b-tab__nav--item">
                <a href="#tab4" data-toggle="tab"
                   class="b-tab__nav--link tx-dec_no"><?= ($arResult["PRODUCT"]["SHOPS_AMOUNT"]) ? GetMessage("PRODUCT_PRESENCE"). " (" .$arResult["PRODUCT"]["SHOPS_AMOUNT"] .")" : GetMessage("PRODUCT_PRESENCE") ?></a>
            </li>
        </ul>
        <div class="b-tab__content b-tab__content--mobile tab-content">
            <div class="b-tab__content--item active" id="tab1">
                <div class="b-tab__accordion--item">
                    <div class="b-tab__accordion--name">
                        <a href="#" class="b-tab__accordion--link"><?= GetMessage("PRODUCT_DESCRIPTION") ?></a>
                    </div>
                    <div class="b-tab__accordion--text collapse">
                        <div class="b-tab-description">
                            <? if (!empty($arResult["PREVIEW_TEXT"])): ?>
                            <p><?= $arResult["PREVIEW_TEXT"] ?></p><? endif ?>
                                <? if (!empty($arResult["PROPERTIES"]["FEATURES"]["VALUE"])): ?>
                            <div class="b-content-list">
                                <h3 class="mg-tp_lg"><?= GetMessage("PRODUCT_FEATURES") ?></h3>
                                <ul>
                                    <? foreach ($arResult["PROPERTIES"]["FEATURES"]["VALUE"] as $features): ?>
                                    <li><?= $features ?></li>
                                    <? endforeach; ?>
                                </ul>
                            </div>
                            <? endif ?>
                                <? if (!empty($arResult["PRODUCT"]["ADVANTAGES"])): ?>
                            <h4><?= GetMessage("PRODUCT_ADVANTAGES") ?></h4>

                            <div class="b-tab-description__benefits">
                                <? foreach ($arResult["PRODUCT"]["ADVANTAGES"] as $advantage): ?>
                                <div class="b-tab-description__benefits--item">
                                    <div class="b-tab-description__benefits--item-pic"><img class=""
                                                                                            src="<?= CFile::GetPath($advantage["UF_PICTURE"]) ?>"
                                                                                            alt="<?= $advantage["UF_NAME"] ?>">
                                    </div>
                                    <div
                                        class="b-tab-description__benefits--item-text"><?= $advantage["UF_NAME"] ?></div>
                                </div>
                                <? endforeach; ?>
                            </div>
                            <? endif ?>
                                <? if (!empty($arResult["PRODUCT"]["REC_FOR_CARE"])): ?>
                            <h4><?= GetMessage("PRODUCT_RECOMENDATIONS") ?></h4>
                            <? if (!empty($arResult["PROPERTIES"]["REC_FOR_CARE_TEXT"]["VALUE"])): ?>
                            <p><?= $arResult["PROPERTIES"]["REC_FOR_CARE_TEXT"]["VALUE"] ?></p>
                            <? endif; ?>

                            <div class="b-tab-description__recommended">
                                <? foreach ($arResult["PRODUCT"]["REC_FOR_CARE"] as $recPic): ?>
                                <div class="b-tab-description__recommended--item"><img class=""
                                                                                       src="<?= (CFile::GetPath($recPic["UF_FILE"])) ? CFile::GetPath($recPic["UF_FILE"]) : "DEF_PIC_DETAIL" ?>"
                                                                                       alt=""></div>
                                <? endforeach; ?>
                            </div>
                            <? endif ?>
                                <? if (!empty($arResult["PROPERTIES"]["DOWNLOAD_INSTRUCTIONS"]["VALUE"])): ?>
                            <h4><?= GetMessage("INSTRUCTIONS_TO_PRODUCT") ?></h4>
                            <a href="<?= CFile::GetPath($arResult["PROPERTIES"]["DOWNLOAD_INSTRUCTIONS"]["VALUE"]) ?>"
                               target="_blank" title="<?= GetMessage("DOWNLOAD_INSTRUCTIONS") ?>"
                               class="b-tab-description__link-download"><?= GetMessage("DOWNLOAD_INSTRUCTIONS") ?></a>
                            <? endif ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="b-tab__content--item" id="tab2">
                <div class="b-tab__accordion--item">
                    <div class="b-tab__accordion--name">
                        <a href="#" class="b-tab__accordion--link"><?= GetMessage("PRODUCT_CHARACTERISTICS") ?></a>
                    </div>
                    <div class="b-tab__accordion--text collapse">
                        <div class="b-tab-features">
                            <table class="b-table table table-striped">
                                <tbody>
                                <? foreach ($arResult["PRODUCT_SPECIFICATIONS"] as $arItemProp): ?>
                                        <? if (!empty($arItemProp["VALUE"])): ?>
                                <tr class="b-table__row">
                                    <td class="b-table__item"><?= $arItemProp["NAME"] ?></td>
                                    <td class="b-table__item"><?= $arItemProp["VALUE"] ?></td>
                                </tr>
                                <? endif ?>
                                    <? endforeach ?>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="b-tab__content--item" id="tab3">
                <div class="b-tab__accordion--item">
                    <div class="b-tab__accordion--name">
                        <a href="#" class="b-tab__accordion--link"><?= GetMessage("PRODUCT_REVIEWS") ?></a>
                    </div>
                    <div class="b-tab__accordion--text collapse">
                        <div class="b-tab-review clearfix">
                            <div class="b-tab-review__add-review">
                                <ul class="b-tab-review__star-rating">
                                    <? for ($count = 0;
                                    $count != 5;
                                    $count++): ?>
                                            <? if ($arResult["RATING"]["VALUE"] > $count): ?>
                                        <li class="b-tab-review__star"></li>
                                    <? elseif (($arResult["RATING"]["HALFSTAR"]) && ($arResult["RATING"]["VALUE"] == $count)): ?>
                                        <li class="b-tab-review__star--halfstar"></li>
                                    <? else : ?>
                                        <li class="b-tab-review__star--nostar"></li>
                                    <? endif ?>
                                        <? endfor ?>
                                </ul>
                                <? if ($USER->IsAuthorized()): ?>
                                    <a href="#popup-add-review" class="b-tab-review__add-rating" data-toggle="modal">Добавить
                                        отзыв</a>

                                    <div style="display: none;" id="popup-add-review" class="modal fade in">
                                        <div class="modal-dialog b-popup-pass-recovery b-popup">
                                            <div class="modal-content b-popup__modal-content">
                                                <div class="modal-header b-popup__modal-header">
                                                    <a class="close b-popup__close" data-dismiss="modal"
                                                       aria-hidden="true">×</a>

                                                    <div class="b-popup__header-text b-popup__header-text--feedback">
                                                        Написать отзыв
                                                    </div>
                                                </div>
                                                <div class="modal-body b-popup__modal-body">
                                                    <div class="b-popup-feedback__form">
                                                        <form class="b-form" type="POST" action="">
                                                            <div class="form-group b-popup-feedback__form-group">
                                                                <label class="b-form__label" for="text-contact">Сообщение*</label>
                                                                    <textarea id="text-contact" name="text"
                                                                              class="b-popup-feedback__input b-popup-feedback__textarea js-validation-change"
                                                                              rows="3"
                                                                              data-rules="req;min=2"></textarea>
                                                            </div>
                                                            <div class="b-popup-feedback__form-rating">
                                                                <span class="b-popup-feedback__form-rating--name">Оценка:</span>
                                                            <span class="rating">
                                                                <input class="rating-input" id="rating-input-1-5"
                                                                       data-vote="5"
                                                                       name="rating-input-1" type="radio">
                                                                <label for="rating-input-1-5"
                                                                       class="rating-star"></label>
                                                                <input class="rating-input" id="rating-input-1-4"
                                                                       data-vote="4"
                                                                       name="rating-input-1" type="radio">
                                                                <label for="rating-input-1-4"
                                                                       class="rating-star"></label>
                                                                <input class="rating-input" id="rating-input-1-3"
                                                                       data-vote="3"
                                                                       name="rating-input-1" type="radio">
                                                                <label for="rating-input-1-3"
                                                                       class="rating-star"></label>
                                                                <input class="rating-input" id="rating-input-1-2"
                                                                       data-vote="2"
                                                                       name="rating-input-1" type="radio">
                                                                <label for="rating-input-1-2"
                                                                       class="rating-star"></label>
                                                                <input class="rating-input" id="rating-input-1-1"
                                                                       data-vote="1"
                                                                       name="rating-input-1" type="radio">
                                                                <label for="rating-input-1-1"
                                                                       class="rating-star"></label>
                                                            </span>
                                                            </div>

                                                            <a href="javascript:void(0)"
                                                               class="b-popup-feedback__input-popup--feedback btn b-btn__default"
                                                               data-type="response_add">Отправить</a>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <? else: ?>
                                    <a href="#popup-addreview-sign-up" class="b-tab-review__add-rating"
                                       data-toggle="modal">Добавить
                                        отзыв</a>
                                    <div style="display: none;" id="popup-addreview-sign-up" class="modal fade">
                                        <div class="modal-dialog b-popup-login b-popup">
                                            <div class="modal-content b-popup__modal-content">
                                                <div class="modal-header b-popup__modal-header">
                                                    <a class="close b-popup__close" data-dismiss="modal"
                                                       aria-hidden="true">×</a>

                                                    <div class="b-popup__header-text b-popup__header-text--feedback">
                                                        Написать отзыв
                                                    </div>
                                                </div>
                                                <div class="modal-body b-popup__modal-body">
                                                    <div class="b-popup-feedback__form">
                                                        <p class="b-popup-pass-recovery__text">Оставить отзыв могут
                                                            только<br>
                                                            зарегистрированные пользователи</p>

                                                        <form class="b-form" method="post" action="handler.php">
                                                            <div class="form-group b-popup-feedback__form-group">
                                                                <label class="b-form__label" for="email-login">Эл.
                                                                    почта*</label>
                                                                <input id="email-login"
                                                                       class="b-popup-feedback__input b-form__input js-validation-change"
                                                                       data-rules="email;req;">
                                                            </div>
                                                            <div class="form-group b-popup-feedback__form-group">
                                                                <label class="b-form__label"
                                                                       for="password-login">Пароль</label>
                                                                <input id="password-login"
                                                                       class="b-popup-feedback__input b-form__input js-validation-change"
                                                                       data-rules="req;min=2">
                                                            </div>
                                                            <div class="form-group b-popup-feedback__form-group">
                                                                <div class="b-popup-login__login-link">
                                                                    <a href="#" class="b-popup-login__forgot-password">Забыли
                                                                        пароль?</a>
                                                                    <a href="#" class="b-popup-login__sign-up">Зарегистрироваться</a>
                                                                </div>
                                                                <input
                                                                    class="b-popup-feedback__input-popup--feedback btn b-btn__default"
                                                                    value="Войти" type="submit">
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <? endif ?>
                            </div>
                            <? foreach ($arResult["PRODUCT"]['RESPONSES'] as $arItem): ?>
                                    <? if (empty($arItem["PROPERTY_PARENT_COMMENT_VALUE"])): ?>
                            <div class="b-tab-review__user-list">
                                <div class="b-tab-review__user-item">
                                    <div class="b-tab-review__user-info">
                                        <p class="b-tab-review__name"><?= $arItem["CREATED_USER_NAME"] ?></p>

                                        <p class="b-tab-review__date"><?= $arItem["TIMESTAMP_X"] ?></p>

                                        <p class="b-tab-review__rating">Оценка:</p>
                                        <ol class="b-tab-review__star-rating_by_user">
                                            <? for ($count = 0;
                                            $count != 5;
                                            $count++): ?>
                                                            <? if ($arItem["PROPERTY_PRODUCT_RATING_VALUE"] > $count): ?>
                                                <li class="b-tab-review__star_by_user"></li>
                                            <? else: ?>
                                                <li class="b-tab-review__star_by_user--nostar"></li>
                                            <? endif ?>
                                                        <? endfor ?>
                                        </ol>
                                    </div>
                                </div>
                                <div class="b-tab-review__user-item">
                                    <p class="b-tab-review__review">
                                        <?= $arItem["PREVIEW_TEXT"]; ?>
                                    </p>
                                </div>
                            </div>
                            <? foreach ($arItem["ANSWERS"] as $arAnswer): ?>
                            <div class="b-tab-review__support-answer">
                                <div class="b-tab-review__support">Служба поддержки отвечает</div>
                                <div class="b-tab-review__answer">
                                    <?= $arAnswer["TEXT"] ?>
                                </div>
                            </div>
                            <? endforeach ?>
                                    <? endif ?>
                                <? endforeach; ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="b-tab__content--item" id="tab4">
                <div class="b-tab__accordion--item">
                    <div class="b-tab__accordion--name">
                        <a href="#" class="b-tab__accordion--link"><?= GetMessage("PRODUCT_PRESENCE") ?></a>
                    </div>
                    <? $APPLICATION->IncludeComponent("kontora:element.list", "store.amount", array(
                    'IBLOCK_ID' => IBLOCK_ID_SHOPS,
                    'HTML_TYPE' => array(''),
                    'ITEM_TEMPLATE' => '',
                    'SELECT' => array("ID", "IBLOCK_ID", "NAME", "PROPERTY_REF_CITY.NAME"),
                    'FILTER' => array(),
                    "PAGER_PARAMS_NAME" => "arrPager",
                    "SHOW_NAV_BLOCK" => "N",
                    "ORDER" => array("PROPERTY_REF_CITY" => "asc"),
                    "PRODUCT_ID" => $arResult["PRODUCT"]["ID"],
                    "PROPS" => "Y"
                    )); ?>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="b-product-info">
    <div class="b-product-info__head">
        <div class="b-product-info__brand">
            <? if (!empty($arResult["PROPERTIES"]["BRAND"]["PICTURE"])): ?>
            <img src="<?= $arResult["PROPERTIES"]["BRAND"]["PICTURE"] ?>"
                 class="b-product-info__brand-logo"
                 alt="<?= $arResult["PROPERTIES"]["BRAND"]["NAME"] ?>"
                 title="<?= $arResult["PROPERTIES"]["BRAND"]["NAME"] ?>"/>
            <? endif; ?>
            <a href="<?= $arResult["PROPERTIES"]["BRAND"]["SRC"] ?>"
               class="b-product-info__brand-link"
               title="<?= GetMessage("SEE_ALL_PRODUCTS") . " " . $arResult["PROPERTIES"]["BRAND"]["NAME"] ?>"><?= GetMessage("SEE_ALL_PRODUCTS") . " " . $arResult["PROPERTIES"]["BRAND"]["NAME"] ?></a>
        </div>
        <h2 class="b-product-info__name"><?= $arResult["NAME"] ?></h2>

        <div
            class="b-product-info__article"><?= GetMessage("ARTICUL") . " " . $arResult["PROPERTIES"]["ARTICUL"]["VALUE"] ?></div>
        <div class="b-product-info__action">

            <ul class="b-tab-review__star-rating mg-l_xs">
                <? for ($count = 0;
                $count != 5;
                $count++): ?>
                        <? if ($arResult["RATING"]["VALUE"] > $count): ?>
                    <li class="b-tab-review__star"></li>
                <? elseif (($arResult["RATING"]["HALFSTAR"]) && ($arResult["RATING"]["VALUE"] == $count)): ?>
                    <li class="b-tab-review__star--halfstar"></li>
                <? else : ?>
                    <li class="b-tab-review__star--nostar"></li>
                <? endif ?>
                    <? endfor ?>
            </ul>
            <div class="b-product-info__compare">
                <div class="b-checkbox__item b-checkbox__item--product" style="display: none"> <? //2 спринт?>
                    <input id="checkbox21" type="checkbox" checked name="compare"/>
                    <label for="checkbox21"><span><?= GetMessage("COMPARE_PRODUCTS") ?></span></label>
                </div>
                <a href="javascript:void(0)" onclick="window.print()" class="b-link__print"
                   title="<?= GetMessage("PRINT_PRODUCT") ?>"><?= GetMessage("PRINT_PRODUCT") ?></a>
            </div>
        </div>
    </div>
    <div class="b-product-info__form">
        <form action="#" method="post">
            <div id="parent_product_id" style="display:none;"><?= $arResult["ID"] ?></div>
            <div id="price_type_id"
                 style="display:none;"><?= $arResult["CAT_PRICES"][$arParams["PRICE_CODE"][0]]["ID"] ?></div>
            <? if ($arResult['COLORS'] && false): ?><? //2 спринт?>
            <div class="b-product-info__colorlist">
                <p class="b-product-info__title"><?= GetMessage("PRODUCT_COLOR") ?></p>
                <ul class="b-colorlist__list b-colorlist__list--product">
                    <? foreach ($arResult["PRODUCT"]["COLOR"] as $id => $arColor): ?>
                    <li class="b-colorlist__item <? if ($arResult["PRODUCT"]["CURRENT"]["COLOR"] == $arColor["VALUE"]) echo " b-colorlist__item--active"; ?> js-color-item"
                        data-color="<?= $arColor["VALUE"] ?>">
                        <a href="<?= $arColor["DETAIL_PAGE_URL"] ?>" class="b-colorlist__link"
                           title=""></a>
                    </li>
                    <? endforeach; ?>
                </ul>
            </div>
            <? endif; ?>
                <? if ($arResult['OFFERS_SIZES']): ?>
            <div class="b-product-info__size">
                <p class="b-product-info__title"><?= GetMessage("PRODUCT_SIZE") ?></p>
                <ul class="b-product-info__size-list">
                    <? foreach ($arResult["OFFERS"] as $count => $offer): ?>
                    <li class="b-product-info__size-item">
                        <a href="javascript:void(0)"
                           class="b-product-info__size-link <? if ($offer["ID"] == $arResult["PRODUCT"]["ID"]) echo "b-product-info__size-link--active" ?> <? if ($arResult["PRODUCT"]["NUMBER_OF_STORES"][$offer["ID"]] == 0) echo "b-product-info__size-link--no-size" ?>"
                           title="<?= $offer["PROPERTIES"]["SIZE"]["VALUE"] ?>"
                           data-id-offer="<?= $offer["ID"] ?>"
                            ><?= htmlspecialchars_decode($offer["PROPERTIES"]["SIZE"]["VALUE"]) ?></a>
                    </li>
                    <? endforeach; ?>
                </ul>
                <? if (!empty($arResult['SECTION_TERMS'])): ?>
                <a href="#popup-terms" data-toggle="modal" class="b-product-info__link"
                   title="<?= GetMessage("RULES_OF_SELECTION_GOODS") ?>"><?= GetMessage("RULES_OF_SELECTION_GOODS") ?></a>
                <? endif; ?>
            </div>
            <? endif; ?>
            <div class="b-product-info__price">
            
            
            <? /* var_dump ($arResult["OFFERS"][$arResult["PRODUCT"]["KEY"]]["PRICES"]); exit; */ ?>
                <div
                    class="b-product-info__price-block clearfix <? if (!$arResult["PRODUCT"]["NUMBER_OF_STORES"][$arResult["PRODUCT_ID"]]) echo "b-product-info__price--not-available" ?>">
                <? /*var_dump($arResult["OFFERS"]); */ ?>
                    <? if ($arPrice = reset($arResult["OFFERS"][$arResult["PRODUCT"]["KEY"]]["PRICES"])): ?>
                            <?
                            
//                             var_dump($arPrice);
                            if (!empty($arPrice["DISCOUNT_DIFF_PERCENT"])): ?>
                    <span
                        class="b-product__pricenew b-price-large b-price-large--product"><?= round($arPrice["DISCOUNT_VALUE"]) ?>
                        <span class="b-rouble">q</span></span>
                    <span class="b-product__priceold-line-through b-product__priceold-line-through--product"><span
                            class="b-product__priceold"><?= round($arPrice["VALUE"]) ?><span class="b-rouble">q</span></span></span>
                    <span
                        class="b-product__discount b-product__discount--product"><?= " - " . round($arPrice["DISCOUNT_DIFF_PERCENT"]) . "%" ?></span>
                    <? else: ?>
                    <span class="b-product__pricenew b-price-large b-price-large--product"><?= round($arPrice["VALUE"]) ?><span
                            class="b-rouble">q</span></span>
                    <? endif ?>
                    
                    <?
//                     var_dump($arResult["PRODUCT"]["KEY"]);
                    ?>
                    
                        <? endif ?>
                </div>
              
                    <? if ($arResult["PRODUCT"]["NUMBER_OF_STORES"][$arResult["PRODUCT"]["ID"]]): ?>
                    
        
											
											
                        <input type="button" data-id="<?=$arResult["PRODUCT"]["ID"]?>" onclick="addBasket(this)"
                               class="btn b-btn__default b-btn__default--sm b-btn__default--product"
                               value="<?= GetMessage("IN_CART") ?> "/>
                    <? else: ?>

                        <input type="button" data-id="<?=$arResult["PRODUCT"]["ID"]?>"
                               class="btn b-btn__default b-btn__default--sm b-btn__default--product b-btn__default--product-not-available"
                               value="<?= GetMessage("NOT_AVAILABLE") ?>"/>
                    <? endif; ?>
                    



              <!-- <div class="b-product-info__buy-block">Вы можете заказать товар по телефону или электронной почте: <a
                        href="mailto:shop@olimpvl.ru" target="_blank">shop@olimpvl.ru</a></div>
                <? if (!empty($arResult['CITY_INFO']['PHONE'])): ?>
                <p class="b-product-info__price-text"><?= GetMessage("MESSAGE_ORDER_PHONE") ?><?= $arResult['CITY_INFO']['PHONE'] ?></p>
                <? endif; ?>-->
				
				
				
				
                <div class="b-checkbox__item b-checkbox__item--product b-checkbox__item--product--mobile"
                     style="display: none"> <? //2 спринт?>
                    <input id="checkbox21" type="checkbox" checked name="compare"/>
                    <label for="checkbox21"><span><?= GetMessage("COMPARE_PRODUCTS") ?></span></label>
                </div>
            </div>
            
            <div class="add-to-wish-n-compare">
<? 
?>
<button type="button" data-id="<?=$arResult["PRODUCT"]["ID"]?>" class="mgc-add-compare"><?=(!empty($_SESSION["CATALOG_COMPARE_LIST"][1]['ITEMS'][$arResult["PRODUCT"]["ID"]]))?'В сравнении':'Добавить в сравнение';?></button>
<button type="button" data-id="<?=$arResult["PRODUCT"]["ID"]?>" class="bx_big bx_bt_button h2o_add_favor">Добавить в избранное</button>
</div>



<?
 if (!$USER->IsAuthorized()): ?>
<div class="do-login-register">              
<a class="btn b-btn__default" href="#popup-login" data-popup="open" >Авторизация</a> &nbsp; <a class="btn b-btn__default" href="#popup-sign-up" data-popup="open" >Регистрация</a>
</div>
<? endif; ?>
        </form>
    </div>
    <div class="b-product-info__bonus" style="display: none"> <? //2 спринт?>
        <p class="b-product-info__bonus-title">При покупке данного товара будет начислено:</p>
        <ul class="b-product-info__bonus-list">
            <li class="b-product-info__bonus-item">
                <img src="/html/src/img/card1.png" class="b-product-info__bonus-image" alt="+250 бонусов"
                     title="+250 бонусов">

                <div class="b-product-info__bonus-advantage">
                        <span class="b-product-info__bonus-text">+<span
                                class="b-product-info__bonus-count">250<br></span>бонусов</span>
                </div>
            </li>
            <li class="b-product-info__bonus-item">
                <img src="/html/src/img/card2.png" class="b-product-info__bonus-image" alt="+350 бонусов"
                     title="+350 бонусов">

                <div class="b-product-info__bonus-advantage">
                        <span class="b-product-info__bonus-text">+<span
                                class="b-product-info__bonus-count">350<br></span>бонусов</span>
                </div>
            </li>
            <li class="b-product-info__bonus-item">
                <img src="/html/src/img/card3.png" class="b-product-info__bonus-image" alt="+500 бонусов"
                     title="+500 бонусов">

                <div class="b-product-info__bonus-advantage">
                        <span class="b-product-info__bonus-text">+<span
                                class="b-product-info__bonus-count">500<br></span>бонусов</span>
                </div>
            </li>
        </ul>
        <a href="#" class="b-product-info__link" title="Условия бонусной программы">Условия бонусной программы</a>
    </div>
    <div class="b-product-info__favorite clearfix" style="margin-top: 30px;border-bottom: unset;"><? //2 спринт?>
        #FAVORITE_AND_SOCIALS#
    </div>
    <div class="b-product-info__extra" style="display: none"> <? //2 спринт?>
        <div class="b-content-list">
            <h3><?= GetMessage("HOW_TO_GET_ORDER") ?></h3>
            <ul>
                <li>Доставка курьером: через 1 день</li>
                <li>
                    <?= GetMessage("ORDER_AND_TAKE") ?>
                    <a href="" onclick="$('a[href=#tab4]').click(); return false;" class="b-product-info__extra-link"
                       title="">
                        <?= $arResult["PRODUCT"]["NUMBER_OF_STORES"] ?><?= $arResult["STORE_AMOUNT"] ?> магазинах
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>

<div class="b-goods">
    <!-- рекомендуемые товары -->
    <!-- Используется карусель partials/slider_product_recommended.js -->

    <? if (!empty($arResult["PROPERTIES"]["RECOMMENDED"]["SECTIONS_ID"])): ?>
    <?
    $APPLICATION->IncludeComponent("kontora:element.list", "recommended", array(
    'IBLOCK_ID' => IBLOCK_ID_CATALOG,
    'HTML_TYPE' => array(''),
    'ELEMENT_COUNT' => '12',
    'ITEM_TEMPLATE' => '',
    'SELECT' => array("IBLOCK_ID", "ID", 'NAME', "PROPERTY_BRAND.NAME", "DETAIL_PAGE_URL"),
    'FILTER' => array("SECTION_ID" => $arResult["PROPERTIES"]["RECOMMENDED"]["SECTIONS_ID"]),
    "PAGER_PARAMS_NAME" => "arrPager",
    "SHOW_NAV_BLOCK" => "N",
    'CATALOG_TYPE' => 'tile',
    'CATALOG_PAGE' => 'main',
    'MAIN_TYPE' => 'new',
    'CITY_CODE' => $arParams["PRICE_CODE"][0],
    'ORDER' => array('id' => 'asc'),
    'PROPS' => array("CODE" => "PICTURES")
    ));
    ?>
    <? endif; ?>
        <!-- похожие товары -->
        <!-- Используется карусель partials/slider_product_similar.js -->
    <? if (!empty($arResult["IBLOCK_SECTION_ID"])): ?>
    <?
    $APPLICATION->IncludeComponent("kontora:element.list", "similar", array(
    'IBLOCK_ID' => IBLOCK_ID_CATALOG,
    'HTML_TYPE' => array(''),
    'ELEMENT_COUNT' => '12',
    'ITEM_TEMPLATE' => '',
    'SELECT' => array("IBLOCK_ID", "ID", 'NAME', "PROPERTY_BRAND.NAME", "DETAIL_PAGE_URL"),
    'FILTER' => array("SECTION_ID" => $arResult["IBLOCK_SECTION_ID"]),
    "PAGER_PARAMS_NAME" => "arrPager",
    "SHOW_NAV_BLOCK" => "N",
    'CATALOG_TYPE' => 'tile',
    'CATALOG_PAGE' => 'main',
    'MAIN_TYPE' => 'new',
    'CITY_CODE' => $arParams["PRICE_CODE"][0],
    'ORDER' => array('id' => 'asc'),
    'PROPS' => array("CODE" => "PICTURES")
    ));
    ?>
    <? endif; ?>
        <!-- недавно просмотренные товары -->
        <!-- Используется карусель partials/slider_product_recent.js -->
    <?
    $APPLICATION->IncludeComponent("kontora:sale.viewed.product", "product_detail", array(
    "VIEWED_COUNT" => "15",
    "VIEWED_IMG_HEIGHT" => "290",
    "VIEWED_IMG_WIDTH" => "180",
    "PRODUCT_ID_VARIABLE" => "id",
    "KEY_CITY" => $arParams["PRICE_CODE"][0]
    ));
    ?>
</div>
<? if (!empty($arResult['SECTION_TERMS'])): ?>
<div id="popup-terms" class="modal fade">
    <div class="modal-dialog b-popup b-popup-terms">
        <div class="modal-content b-popup__modal-content">
            <div class="modal-header b-popup__modal-header">
                <a class="close b-popup__close" data-dismiss="modal" aria-hidden="true">×</a>

                <div class="b-popup__header-text b-popup__header-text--feedback">Правила подбора товара</div>
            </div>
            <div class="modal-body b-popup-feedback__modal-body">
                <img src="<?= $arResult['SECTION_TERMS'] ?>"/>
            </div>
        </div>
    </div>
</div>
<? endif; ?>
<?
$this->__component->arResult["CACHED_TPL"] = @ob_get_contents();
ob_get_clean();
?>