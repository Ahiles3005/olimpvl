<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

//есть ли что вывести
$show = isset($arResult["STICKERS"][$arResult["ID"]])
	|| $arResult['PROPERTIES']['NEW']['VALUE'] == 'Y'
	|| $arResult['PROPERTIES']['BEST_PRICE']['VALUE'] == 'Y'
	|| $arResult['PROPERTIES']['BEST']['VALUE'] == 'Y'
	|| $arResult['PROPERTIES']['FREE_SHPPING']['VALUE'] == 'Y'
	|| $arResult['PROPERTIES']['KREDIT']['VALUE'] == 'Y'
	|| $arResult['PROPERTIES']['UTILIZ']['VALUE'] == 'Y'
	|| $arResult['PROPERTIES']['TO1']['VALUE'] == 'Y'
	|| $arResult['PROPERTIES']['GARANT5']['VALUE'] == 'Y'
	|| $arResult['PROPERTIES']['GARANT3']['VALUE'] == 'Y'
	|| $arResult['PROPERTIES']['RASSROCHKA']['VALUE'] == 'Y'
	|| $arResult['PROPERTIES']['SVOI']['VALUE'] == 'Y'
	|| $arResult['PROPERTIES']['SVOI25']['VALUE'] == 'Y'
	|| $arResult['PROPERTIES']['SVOI20']['VALUE'] == 'Y'
	|| $arResult['PROPERTIES']['SVOI15']['VALUE'] == 'Y'
	|| $arResult['PROPERTIES']['BLACK_FRIDAY']['VALUE'] == 'Y'
	|| ($arResult["MIN_PRICE"]["VALUE"] != $arResult['MIN_PRICE']['DISCOUNT_VALUE']);

//отризовка одного стикера
$vBadge = function ($class = '', $text = '', $style = '') { ?>
	<div class="b-product__item--badge--item <?= $class ?> b-product__item--sticker b-tooltip--product-grid"
		<?= $style <> "" ? "style='$style'" : '' ?>>
		<?= $text ?>
	</div>
	<?php
};

//отрисовка стикеров товара
$vBadges = function ($arItem) use ($vBadge, $show) {
	if ($show) { ?>
		<div class="b-product__item--badge">
			<?php
			$arItem['PROPERTIES']['SVOI15']['VALUE'] == 'Y' ? $vBadge(
				'b-product__item--badge--discount15',
				'Скидка для своих -15% по карте или при первом заказе'
			) : null;

			$arItem['PROPERTIES']['SVOI20']['VALUE'] == 'Y' ? $vBadge(
				'b-product__item--badge--discount20',
				'Скидка для своих -20% по карте или при первом заказе'
			) : null;

			$arItem['PROPERTIES']['SVOI25']['VALUE'] == 'Y' ? $vBadge(
				'b-product__item--badge--discount25',
				'Скидка для своих -25% по карте или при первом заказе'
			) : null;

			$arItem['PROPERTIES']['NEW']['VALUE'] == 'Y' ? $vBadge(
				'b-product__item--badge--new',
				'Новинка'
			) : null;

			$arItem['PROPERTIES']['BEST_PRICE']['VALUE'] == 'Y' ? $vBadge(
				'b-product__item--badge--best-price',
				'Лучшая цена'
			) : null;

			$arItem['PROPERTIES']['BEST']['VALUE'] == 'Y' ? $vBadge(
				'b-product__item--badge--best-choice',
				'Лучший выбор'
			) : null;

			$arItem['PROPERTIES']['FREE_SHPPING']['VALUE'] == 'Y' ? $vBadge(
				'b-product__item--badge--FREE_SHPPING',
				'Бесплатная доставка'
			) : null;

			$arItem['PROPERTIES']['KREDIT']['VALUE'] == 'Y' ? $vBadge(
				'b-product__item--badge--KREDIT',
				'Можно в кредит'
			) : null;

			$arItem['PROPERTIES']['UTILIZ']['VALUE'] == 'Y' ? $vBadge(
				'b-product__item--badge--UTILIZ',
				'Утилизация'
			) : null;

			$arItem['PROPERTIES']['TO1']['VALUE'] == 'Y' ? $vBadge(
				'b-product__item--badge--TO1',
				'Бесплатное ТО-1'
			) : null;

			$arItem['PROPERTIES']['GARANT5']['VALUE'] == 'Y' ? $vBadge(
				'b-product__item--badge--GARANT5',
				'Гарантия 5 лет'
			) : null;

			$arItem['PROPERTIES']['GARANT3']['VALUE'] == 'Y' ? $vBadge(
				'b-product__item--badge--GARANT3',
				'Гарантия 3 года'
			) : null;

			$arItem['PROPERTIES']['BLACK_FRIDAY']['VALUE'] == 'Y' ? $vBadge(
				'b-product__item--badge--BLACK_FRIDAY',
				'Черная пятница'
			) : null;

			$arItem['PROPERTIES']['RASSROCHKA']['VALUE'] == 'Y' ? $vBadge(
				'b-product__item--badge--KREDIT',
				'Рассрочка без переплаты'
			) : null;

			$arItem['PROPERTIES']['SVOI']['VALUE'] == 'Y' ? $vBadge(
				'b-product__item--badge--discount-svoi',
				'Скидка для своих'
			) : null;

			$arItem["MIN_PRICE"]["VALUE"] != $arItem['MIN_PRICE']['DISCOUNT_VALUE'] ? $vBadge(
				'b-product__item--badge--discount',
				'Скидка'
			) : null;

			if (isset($arResult["STICKERS"][$arItem["ID"]])) {
				foreach ($arResult["STICKERS"][$arItem["ID"]] as $arAction) {
					$vBadge('', $arAction['NAME'],
						'background-color: ' . $arAction['BACKGROUND_COLOR'] . '; color: ' . $arAction['COLOR'] . ';'
					);
				}
			} ?>

		</div>
	<?php }
};
