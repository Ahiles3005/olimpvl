<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();
$keyCity = (empty($_COOKIE['KEY_CITY'])) ? Olimp\City::getDefaultCityCode() : $_COOKIE['KEY_CITY'];
$upKeyCity = mb_strtoupper($keyCity);
?>

<div class="popular-sale-list-wrap">
    <div class="b-goods__similar">
    <? if (!empty($arResult['ITEMS'])): ?>
    	<div class="slider-goods">
    		<ul class="b-goods__list b-goods__list--similar slider-product-similar">
    			<? foreach ($arResult["ITEMS"] as $arItem): ?>
    				<li class="b-goods__item b-goods__item--similar">
    					<? if (isset($arResult["STICKERS"][$arItem["ID"]])
    					    || $arItem['PROPERTY_NEW_VALUE'] == 'Y'
    					    || $arItem['PROPERTY_BEST_PRICE_VALUE'] == 'Y'
    						|| $arItem['PROPERTY_FREE_SHPPING_VALUE'] == 'Y'
    						|| $arItem['PROPERTY_KREDIT_VALUE'] == 'Y'
    						|| $arItem['PROPERTY_UTILIZ_VALUE'] == 'Y'
    						|| $arItem['PROPERTY_TO1_VALUE'] == 'Y'
    						|| $arItem['PROPERTY_GARANT5_VALUE'] == 'Y'
    						|| $arItem['PROPERTY_GARANT3_VALUE'] == 'Y'
    
    
    
    						|| $arItem['PROPERTY_SVOI_VALUE'] == 'Y'
    						|| $arItem['PROPERTY_RASSROCHKA_VALUE'] == 'Y'
    
    
    						|| $arItem['PROPERTY_SVOI20_VALUE'] == 'Y'
    						|| $arItem['PROPERTY_SVOI15_VALUE'] == 'Y'
    
    						|| $arItem['PROPERTY_SVOI25_VALUE'] == 'Y'
    
    							|| $arItem['PROPERTY_BLACK_FRIDAY_VALUE'] == 'Y'
    						|| $arItem['PROPERTY_BEST_VALUE'] == 'Y'): ?>
    
    						<div class="b-product__item--badge">
    
    
    
    								<? if ($arItem['PROPERTY_SVOI20_VALUE'] == 'Y'): ?>
    								<a class="b-product__item--badge--item b-product__item--badge--discount20 b-tooltip--product-grid" title="Скидка для своих -20% по карте или при первом заказе" data-tooltip="right"></a>
    							<? endif; ?>
    
    
    
    								<? if ($arItem['PROPERTY_SVOI15_VALUE'] == 'Y'): ?>
    								<a class="b-product__item--badge--item b-product__item--badge--discount15 b-tooltip--product-grid" title="Скидка для своих -15% по карте или при первом заказе" data-tooltip="right"></a>
    							<? endif; ?>
    
    
    
    
    
    							<? if ($arItem['PROPERTY_SVOI25_VALUE'] == 'Y'): ?>
    								<a class="b-product__item--badge--item b-product__item--badge--discount25 b-tooltip--product-grid" title="Скидка для своих -25% по карте или при первом заказе" data-tooltip="right"></a>
    							<? endif; ?>
    
    
    
    
    							<? if ($arItem['PROPERTY_NEW_VALUE'] == 'Y'): ?>
    								<a class="b-product__item--badge--item b-product__item--badge--new b-tooltip--product-grid" title="Новинка" data-tooltip="right"></a>
    							<? endif; ?>
    
    							<? if ($arItem['PROPERTY_BEST_PRICE_VALUE'] == 'Y'): ?>
    								<a class="b-product__item--badge--item b-product__item--badge--best-price b-tooltip--product-grid" title="Лучшая цена" data-tooltip="right"></a>
    							<? endif; ?>
    
    							<? if ($arItem['PROPERTY_BEST_VALUE'] == 'Y'): ?>
    								<a class="b-product__item--badge--item b-product__item--badge--best-choice b-tooltip--product-grid" title="Лучший выбор" data-tooltip="right"></a>
    							<? endif; ?>
    
    
    
    							<? if ($arItem['PROPERTY_FREE_SHPPING_VALUE'] == 'Y'): ?>
    									<a class="b-product__item--badge--item b-product__item--badge--FREE_SHPPING b-tooltip--product-grid" title="Бесплатная доставка" data-tooltip="right"></a>
    								<? endif; ?>
    								<? if ($arItem['PROPERTY_KREDIT_VALUE'] == 'Y'): ?>
    									<a class="b-product__item--badge--item b-product__item--badge--KREDIT b-tooltip--product-grid" title="Можно в кредит" data-tooltip="right"></a>
    								<? endif; ?>
    								<? if ($arItem['PROPERTY_UTILIZ_VALUE'] == 'Y'): ?>
    									<a class="b-product__item--badge--item b-product__item--badge--UTILIZ b-tooltip--product-grid" title="Утилизация" data-tooltip="right"></a>
    								<? endif; ?>
    								<? if ($arItem['PROPERTY_TO1_VALUE'] == 'Y'): ?>
    									<a class="b-product__item--badge--item b-product__item--badge--TO1 b-tooltip--product-grid" title="Бесплатное ТО-1" data-tooltip="right"></a>
    								<? endif; ?>
    								<? if ($arItem['PROPERTY_GARANT5_VALUE'] == 'Y'): ?>
    									<a class="b-product__item--badge--item b-product__item--badge--GARANT5 b-tooltip--product-grid" title="Гарантия 5 лет" data-tooltip="right"></a>
    								<? endif; ?>
    								<? if ($arItem['PROPERTY_GARANT3_VALUE'] == 'Y'): ?>
    									<a class="b-product__item--badge--item b-product__item--badge--GARANT3 b-tooltip--product-grid" title="Гарантия 3 года" data-tooltip="right"></a>
    								<? endif; ?>
    
    									<? if ($arItem['PROPERTY_BLACK_FRIDAY_VALUE'] == 'Y'): ?>
    									<a class="b-product__item--badge--item b-product__item--badge--BLACK_FRIDAY b-tooltip--product-grid" title="Черная пятница" data-tooltip="right"></a>
    								<? endif; ?>
    
    
    
    
    
    							<? if ($arItem['PROPERTY_SVOI_VALUE'] == 'Y'): ?>
    								<a class="b-product__item--badge--item b-product__item--badge--discount-svoi b-tooltip--product-grid" title="Скидка для своих " data-tooltip="right"></a>
    							<? endif; ?>
    
    
    
    								<? if ($arItem['PROPERTY_RASSROCHKA_VALUE'] == 'Y'): ?>
    									<a class="b-product__item--badge--item b-product__item--badge--KREDIT b-tooltip--product-grid" title="Рассрочка без переплаты" data-tooltip="right"></a>
    								<? endif; ?>
    
    
    
    
    							<? if ($arItem["MIN_PRICE"]["VALUE"] != $arItem['MIN_PRICE']['DISCOUNT_VALUE']): ?>
    								<a class="b-product__item--badge--item b-product__item--badge--discount b-tooltip--product-grid" title="Скидка" data-tooltip="right"></a>
    							<? endif; ?>

    							<?php 
    							if(isset($arResult["STICKERS"][$arItem["ID"]])) {
    							    foreach($arResult["STICKERS"][$arItem["ID"]] as $arAction) {?>
    									<a class="b-product__item--badge--item b-product__item--sticker b-tooltip--product-grid" style="background:<?php echo $arAction['COLOR'];?>" title="<?php echo $arAction['NAME'];?>" data-tooltip="right">
    										<img src="<?php echo CFile::GetPath($arAction['ICON']);?>" />
    									</a>
    							    <?php }
    							}?>
    						</div>
    					<? endif; ?>
    
    					<a href="<?= $arItem["DETAIL_PAGE_URL"] ?>" class="b-product__item--name">
    						<div class="b-product__image-owerflow"><div class="b-product__image-owerflow-horisontal"><img class="b-product__item--image" src="<?= $arItem["PICTURE"] ?>" alt="<?= $arItem["NAME"] ?>" /></div></div>
    						<p class="b-product__item-text"><?= $arItem["NAME"] ?></p>
    						<div class="b-product__item--footer">
    							<?
    							$APPLICATION->IncludeComponent("bitrix:rating.vote", "like_graphic", array(
    								"ENTITY_TYPE_ID" => "IBLOCK_ELEMENT",
    								"ENTITY_ID"      => $arItem["ID"],
    								"OWNER_ID"       => $USER->GetID(),
    							), null, array("HIDE_ICONS" => "Y"));
    							?>
    							<a class="b-product__item--add-compare b-product__item--add-compare--active" href="javascript: void(0);" title="Сравнить" data-tooltip="right" style="display: none"> <?//2 спринт?>
    							</a>
    							<div class="b-product__item--price">
    								<? if ($arItem["MIN_PRICE"]["VALUE"] != $arItem['MIN_PRICE']['DISCOUNT_VALUE']): ?>
    									<span class="b-product__item--discount" data-discount="<?=$arItem["MIN_PRICE"]["DISCOUNT_DIFF_PERCENT"]?>">-<?=$arItem["MIN_PRICE"]["DISCOUNT_DIFF_PERCENT"]?>%</span>
    									<span class="b-product__item--priceold-line-through"><span class="b-product__item--priceold" data-price="<?=$arItem["MIN_PRICE"]["VALUE"]?>"><?=$arItem["MIN_PRICE"]["VALUE"]?><span class="b-rouble">q</span></span></span>
    									<span class="b-product__item--pricenew b-price-large" data-price="<?=round($arItem["MIN_PRICE"]["DISCOUNT_VALUE"])?>"><?=round($arItem['MIN_PRICE']['DISCOUNT_VALUE'])?><span class="b-rouble">q</span></span>
    								<? else: ?>
    									<span class="b-product__item--pricenew b-price-large" data-price="<?=round($arItem['MIN_PRICE']['DISCOUNT_VALUE'])?>"><?=round($arItem['MIN_PRICE']['DISCOUNT_VALUE'])?><span class="b-rouble">q</span></span>
    								<? endif; ?>
    							</div>
    						</div>
    					</a>
    					<input type="hidden" name="artikcul" value="<?=$arItem['PROPERTY_ARTICUL_VALUE']?>" />
    				</li>
    			<? endforeach; ?>
    		</ul>
    	</div>
    </div>
</div>

<? else: ?>
	<p class="b-catalog-empty">К сожалению, таких товаров нет</p>
<? endif; ?>
