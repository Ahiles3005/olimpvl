<? include($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_before.php");
require_once($_SERVER["DOCUMENT_ROOT"] . "/local/templates/main/components/bitrix/catalog.element/product_detail/lang/ru/template.php");

CModule::IncludeModule("catalog");

$arResult = array();

$id = (int)$_REQUEST["id"];
/*$price_type_id = $_REQUEST["price_type_id"];

$dbPrice = CPrice::GetList(
    array(),
    array(
        "PRODUCT_ID" => $id,
        "CATALOG_GROUP_ID" => $price_type_id
    ),
    false,
    false,
    array("ID", "CATALOG_GROUP_ID", "PRICE", "CURRENCY", "PRODUCT_ID")
);
if ($arPrice = $dbPrice->Fetch()) {
    $arDiscounts = CCatalogDiscount::GetDiscountByPrice(
        $arPrice["ID"],
        $USER->GetUserGroupArray(),
        "N",
        SITE_ID
    );
    $discountPrice = CCatalogProduct::CountPriceWithDiscount(
        $arPrice["PRICE"],
        $arPrice["CURRENCY"],
        $arDiscounts
    );

    $arPrice["DISCOUNT_PRICE"] = $discountPrice;
    $arResult["PRICE"] = (int)round($arPrice["PRICE"]);
    $arResult["DISCOUNT_PRICE"] = (int)round($arPrice["DISCOUNT_PRICE"]);
    $arResult["DISCOUNT_DIFF_PERCENT"] = (int)round($arDiscounts[0]["VALUE"]);
}*/

$optimalPrice = \CCatalogProduct::GetOptimalPrice($id, 1, array(2), 'N', array(), "s1", array());

$arResult["PRICE"] = (int)round($optimalPrice["RESULT_PRICE"]["BASE_PRICE"]);
$arResult["DISCOUNT_PRICE"] = (int)round($optimalPrice["RESULT_PRICE"]["DISCOUNT_PRICE"]);
$arResult["DISCOUNT_DIFF_PERCENT"] = (int)round($optimalPrice["RESULT_PRICE"]["PERCENT"]);

$arAmount = \Olimp\Catalog::getCountStoreWithProduct(array($id), $_COOKIE['KEY_CITY']);

//Телефон выбранного города
$arResult['CITY_INFO'] = Olimp\City::getCurCityInfo();

$arResult["NUMBER_OF_STORES"] = ($arAmount[$id]) ? $arAmount[$id] : 0;
?>
<div
    class="b-product-info__price-block clearfix <? if (!$arResult["NUMBER_OF_STORES"]) echo "b-product-info__price--not-available" ?>">
    <? if (($arResult["PRICE"] != $arResult["DISCOUNT_PRICE"]) && (!empty($arResult["DISCOUNT_DIFF_PERCENT"]))): ?>
        <span
            class="b-product__pricenew b-price-large b-price-large--product"><?= $arResult["DISCOUNT_PRICE"] ?>
            <span
                class="b-rouble">q</span></span>
        <span
            class="b-product__priceold-line-through b-product__priceold-line-through--product"><span
                class="b-product__priceold"><?= $arResult["PRICE"] ?><span class="b-rouble">q</span></span></span>
        <span
            class="b-product__discount b-product__discount--product"><?= " - " . $arResult["DISCOUNT_DIFF_PERCENT"] . "%" ?></span>
    <? else: ?>
        <span class="b-product__pricenew b-price-large b-price-large--product"><?= $arResult["PRICE"] ?><span
                class="b-rouble">q</span></span>
    <? endif ?>
</div>


<? if($USER->IsAuthorized()) { ?>
<!-- ЕСЛИ АВТОРИЗОВАН  -->
<? if ($arResult["NUMBER_OF_STORES"]): ?>
    <input type="button" data-id="<?=$id?>" onclick="addBasket(this)"  class="btn b-btn__default b-btn__default--sm b-btn__default--product mgc-product"
           value="<?= GetMessage("IN_CART") ?>"/>
<? else: ?>

    <input type="button"
           class="btn b-btn__default b-btn__default--sm b-btn__default--product b-btn__default--product-not-available"
           value="<?= GetMessage("NOT_AVAILABLE") ?>"/>
<? endif; ?>


<? }else{  ?>

<!-- ЕСЛИ НЕ АВТОРИЗОВАН  -->

<? if ($arResult["NUMBER_OF_STORES"]): ?>

<a type="button" href="#popup-login" data-popup="open" class="btn b-btn__default b-btn__default--sm b-btn__default--product mgc-btn-login-before-cart"><?= GetMessage("IN_CART") ?></a>

  <!--  <input type="button" data-id="<?=$id?>" onclick="addBasket(this)"  class="btn b-btn__default b-btn__default--sm b-btn__default--product mgc-product"
           value="<?= GetMessage("IN_CART") ?>"/>-->
<? else: ?>

    <input type="button"
           class="btn b-btn__default b-btn__default--sm b-btn__default--product b-btn__default--product-not-available"
           value="<?= GetMessage("NOT_AVAILABLE") ?>"/>
<? endif; ?>


<? } ?>

      <!--  <div class="b-product-info__buy-block" style="display:block!important">Вы можете заказать товар по телефону или электронной почте: <a
                        href="mailto:shop@olimpvl.ru" target="_blank">shop@olimpvl.ru</a></div>
             
                <p class="b-product-info__price-text" style="display:block!important; text-align:center; margin-top:8px"><?= GetMessage("MESSAGE_ORDER_PHONE") ?>8-800-100-1215</p>
          
				-->
				
<!--<p><?= GetMessage("MESSAGE_ORDER_PHONE") ?></p>-->
<!--
<div class="b-product-info__buy-block">Вы можете заказать товар по телефону или электронной почте: <a href="mailto:shop@olimpvl.ru" target="_blank">shop@olimpvl.ru</a></div>
<? if (!empty($arResult['CITY_INFO']['PHONE'])): ?>
<p class="b-product-info__price-text">Оформить заказ по телефону: <?= $arResult['CITY_INFO']['PHONE'] ?></p>
<? endif; ?>
<div class="b-checkbox__item b-checkbox__item--product b-checkbox__item--product--mobile"
     style="display: none"> <? //2 спринт?>
    <input id="checkbox21" type="checkbox" checked name="compare"/>
    <label for="checkbox21"><span><?= GetMessage("COMPARE_PRODUCTS") ?></span></label>
</div>-->
