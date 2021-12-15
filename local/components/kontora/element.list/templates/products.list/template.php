<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();
$keyCity = (empty($_COOKIE['KEY_CITY'])) ? Olimp\City::getDefaultCityCode() : $_COOKIE['KEY_CITY'];
$upKeyCity = mb_strtoupper($keyCity);
?>
<? if (!empty($arResult['ITEMS'])): ?>
	<div class="b-product b-product--inner <?= ($arParams["CATALOG_PAGE"] == 'main') ? "frame b-product--index" : "";?> ">
		<ul class="b-product__list <?= ($arParams["CATALOG_PAGE"] == 'main') ? "b-products-spec ".$arParams['MAIN_TYPE'] : "";?>">
			<? foreach ($arResult["ITEMS"] as $arItem): ?>
				<li class="b-product__item">
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
							<? if ($arItem['PROPERTY_SVOI15_VALUE'] == 'Y') { ?>
								<div
										class="b-product__item--badge--item b-product__item--badge--discount15 b-product__item--sticker b-tooltip--product-grid">
									Скидка для своих -15% по карте или при первом заказе
								</div>
							<? }
							if ($arItem['PROPERTY_SVOI20_VALUE'] == 'Y') { ?>
								<div
										class="b-product__item--badge--item b-product__item--badge--discount20 b-product__item--sticker b-tooltip--product-grid">
									Скидка для своих -20% по карте или при первом заказе
								</div>
							<? }
							if ($arItem['PROPERTY_SVOI25_VALUE'] == 'Y') { ?>
								<div
										class="b-product__item--badge--item b-product__item--badge--discount25 b-product__item--sticker b-tooltip--product-grid">
									Скидка для своих -25% по карте или при первом заказе
								</div>
							<? }
							if ($arItem['PROPERTY_NEW_VALUE'] == 'Y') { ?>
								<div
										class="b-product__item--badge--item b-product__item--badge--new b-product__item--sticker b-tooltip--product-grid">
									Новинка
								</div>
							<? }
							if ($arItem['PROPERTY_BEST_PRICE_VALUE'] == 'Y') { ?>
								<div
										class="b-product__item--badge--item b-product__item--badge--best-price b-product__item--sticker b-tooltip--product-grid">
									Лучшая цена
								</div>
							<? }
							if ($arItem['PROPERTY_BEST_VALUE'] == 'Y') { ?>
								<div
										class="b-product__item--badge--item b-product__item--badge--best-choice b-product__item--sticker b-tooltip--product-grid">
									Лучший выбор
								</div>
							<? }
							if ($arItem['PROPERTY_FREE_SHPPING_VALUE'] == 'Y') { ?>
								<div
										class="b-product__item--badge--item b-product__item--badge--FREE_SHPPING b-product__item--sticker b-tooltip--product-grid">
									Бесплатная доставка
								</div>
							<? }
							if ($arItem['PROPERTY_KREDIT_VALUE'] == 'Y') { ?>
								<div
										class="b-product__item--badge--item b-product__item--badge--KREDIT b-product__item--sticker b-tooltip--product-grid">
									Можно в кредит
								</div>
							<? }
							if ($arItem['PROPERTY_UTILIZ_VALUE'] == 'Y') { ?>
								<div
										class="b-product__item--badge--item b-product__item--badge--UTILIZ b-product__item--sticker b-tooltip--product-grid">
									Утилизация
								</div>
							<? }
							if ($arItem['PROPERTY_TO1_VALUE'] == 'Y') { ?>
								<div
										class="b-product__item--badge--item b-product__item--badge--TO1 b-product__item--sticker b-tooltip--product-grid">
									Бесплатное ТО-1
								</div>
							<? }
							if ($arItem['PROPERTY_GARANT5_VALUE'] == 'Y') { ?>
								<div
										class="b-product__item--badge--item b-product__item--badge--GARANT5 b-product__item--sticker b-tooltip--product-grid">
									Гарантия 5 лет
								</div>
							<? }
							if ($arItem['PROPERTY_GARANT3_VALUE'] == 'Y') { ?>
								<div
										class="b-product__item--badge--item b-product__item--badge--GARANT3 b-product__item--sticker b-tooltip--product-grid">
									Гарантия 3 года
								</div>
							<? }
							if ($arItem['PROPERTY_BLACK_FRIDAY_VALUE'] == 'Y') { ?>
								<div
										class="b-product__item--badge--item b-product__item--badge--BLACK_FRIDAY b-product__item--sticker b-tooltip--product-grid">
									Черная пятница
								</div>
							<? }
							if ($arItem['PROPERTY_RASSROCHKA_VALUE'] == 'Y') { ?>
								<div
										class="b-product__item--badge--item b-product__item--badge--KREDIT b-product__item--sticker b-tooltip--product-grid">
									Рассрочка без переплаты
								</div>
							<? }
							if ($arItem['PROPERTY_SVOI_VALUE'] == 'Y') { ?>
								<div
										class="b-product__item--badge--item b-product__item--badge--discount-svoi b-product__item--sticker b-tooltip--product-grid">
									Скидка для своих
								</div>
							<? }
							if ($arItem["MIN_PRICE"]["VALUE"] != $arItem['MIN_PRICE']['DISCOUNT_VALUE']) { ?>
								<div class="b-product__item--badge--item b-product__item--badge--discount b-product__item--sticker b-tooltip--product-grid">
									Скидка
								</div>
							<? }
							if (isset($arResult["STICKERS"][$arItem["ID"]])) {
								foreach ($arResult["STICKERS"][$arItem["ID"]] as $arAction) { ?>
									<div class="b-product__item--badge--item b-product__item--sticker b-tooltip--product-grid"
											 style="background-color:<?= $arAction['BACKGROUND_COLOR'] ?>; color: <?= $arAction['COLOR'] ?>">
										<?= $arAction['NAME']; ?>
									</div>
								<?php }
							} ?>

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

	<? if ($arParams['CATALOG_PAGE'] == 'main' && !empty($arResult["NAV_STRING"]) && $arResult['NAV_RESULT']->NavPageNomer != $arResult['NAV_RESULT']->NavPageCount): ?>
		<div class="b-products__showmore <?=$arParams['MAIN_TYPE']?>">
            <a
            	href="javascript: void(0);"
            	class="b-link__show-more text-uppercase"
				data-current_page="1"
				data-product_count="<?=$arParams['ELEMENT_COUNT']?>"
            	data-sort_field="<?=$arParams['ELEMENT_SORT_FIELD']?>"
				data-sort_order="<?=$arParams['ELEMENT_SORT_ORDER']?>"
            	data-filter="<?=http_build_query($arParams['FILTER'])?>"
 				data-main="1"
 				data-main-type="<?=$arParams['MAIN_TYPE']?>"
            >показать еще</a>
        </div>
	<? endif; ?>

<? else: ?>
	<p class="b-catalog-empty">К сожалению, таких товаров нет</p>
<? endif; ?>
