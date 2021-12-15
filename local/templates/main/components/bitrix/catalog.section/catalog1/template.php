<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();
$keyCity = (empty($_COOKIE['KEY_CITY'])) ? Olimp\City::getDefaultCityCode() : $_COOKIE['KEY_CITY'];
?>

    <?

    if(!empty($_SESSION["CATALOG_COMPARE_LIST"][1])){

    $a = count($_SESSION["CATALOG_COMPARE_LIST"][1]['ITEMS']);

    }else{
    $a=0;

    }




    ?>

<? if (!empty($arResult['ITEMS'])): ?>
	<?if ($arParams['SHOW_NAV_BLOCK']=="Y"){?>
	<div class="b-catalog-navigation">
		<? if ($arResult['SALES_COUNT'] > 0 || $arResult['NEW_COUNT'] > 0): ?>
			<ul class="b-catalog-navigation__list" id="nav">
				<li class="b-catalog-navigation__item">
					<a href="<?= $APPLICATION->GetCurPageParam("catalogNav=all", array("catalogNav")) ?>#nav" class="b-catalog-navigation__link b-catalog-navigation__link--allproducts <?= (!isset($_REQUEST["catalogNav"]) || $_REQUEST["catalogNav"] == "all") ? 'b-catalog-navigation__link--active' : '' ?>">Все товары</a>
				</li>
				<? if ($arResult['SALES_COUNT'] > 0): ?>
					<li class="b-catalog-navigation__item">
						<a href="<?= $APPLICATION->GetCurPageParam("catalogNav=sale", array("catalogNav")) ?>#nav" class="b-catalog-navigation__link b-catalog-navigation__link--sales <?= (isset($_REQUEST["catalogNav"]) && $_REQUEST["catalogNav"] == "sale") ? 'b-catalog-navigation__link--active' : '' ?>">Акции и скидки</a>
					</li>
				<? endif; ?>

				<? if ($arResult['NEW_COUNT'] > 0): ?>
					<li class="b-catalog-navigation__item">
						<a href="<?= $APPLICATION->GetCurPageParam("catalogNav=new", array("catalogNav")) ?>#nav" class="b-catalog-navigation__link b-catalog-navigation__link--new <?= (isset($_REQUEST["catalogNav"]) && $_REQUEST["catalogNav"] == "new") ? 'b-catalog-navigation__link--active' : '' ?>">Новинки</a>
					</li>
				<? endif; ?>
			</ul>

			<div class="b-catalog-navigation__select-wrapper">
				<select class="b-catalog-navigation__select-smallest" id="nav_mobile">
					<option class="b-catalog-navigation__item" value="all"<?= (!isset($_REQUEST["catalogNav"]) || $_REQUEST["catalogNav"] == "all") ? ' selected' : '' ?>>Все товары</option>
					<? if ($arResult['SALES_COUNT'] > 0): ?>
						<option class="b-catalog-navigation__item" value="sale"<?= ($_REQUEST["catalogNav"] == "sale") ? ' selected' : '' ?>>Акции и скидки</option>
					<? endif; ?>
					<? if ($arResult['NEW_COUNT'] > 0): ?>
						<option class="b-catalog-navigation__item" value="new"<?= ($_REQUEST["catalogNav"] == "new") ? ' selected' : '' ?>>Новинки</option>
					<? endif; ?>
				</select>
			</div>
		<? endif; ?>


		<?php


		$akc = array(
		'vladivostok'=>10,
		'ussurijsk'=>12,
		'arsenev'=>13,
		'naxodka'=>14,
		'komsomolsk_na_amure'=>16
		/*
		12
		13
		14
		16

		*/


		);

		$prrr = isset($akc[$keyCity])?$akc[$keyCity]:10;




		?>

		<div class="b-sortby">
			<label for="sort-by"><span class="b-sortby__name">Сортировать</span>
				<select id="sort-by" class="b-sortby__select js-sort-by">


					<option value="shows" data-order="desc,nulls" class="b-sortby__item"
					<?= ($_REQUEST["sortField"] == "shows" && $_REQUEST["sortOrder"] == "desc,nulls") ? "selected" : "" ?>>
						По популярности &darr;
					</option>
					<option value="shows" data-order="nulls,asc" class="b-sortby__item"
					<?= ($_REQUEST["sortField"] == "shows" && $_REQUEST["sortOrder"] == "nulls,asc") ? "selected" : "" ?>>
						По популярности &uarr;
					</option>


				<!--		<option value="catalog_PRICE_<?=$prrr?>" data-order="desc" class="b-sortby__item"
					<?= ($_REQUEST["sortField"] == "catalog_PRICE_" . $prrr && $_REQUEST["sortOrder"] == "desc") ? "selected" : "" ?>>
						По цене &darr;
					</option>
					<option value="catalog_PRICE_<?=$prrr?>" data-order="asc" class="b-sortby__item"
					<?= ($_REQUEST["sortField"] == "catalog_PRICE_".$prrr && $_REQUEST["sortOrder"] == "asc") ? "selected" : "" ?>>
						По цене &uarr;
					</option>
					-->

					<option value="PROPERTY_MIN_PRICE_<?=$keyCity?>" data-order="desc,nulls" class="b-sortby__item"
					<?= ($_REQUEST["sortField"] == "PROPERTY_MIN_PRICE_" . $keyCity && $_REQUEST["sortOrder"] == "desc,nulls")
						? "selected" : "" ?>>
						По цене &darr;
					</option>

					<option value="PROPERTY_MIN_PRICE_<?=$keyCity?>" data-order="asc,nulls" class="b-sortby__item"
					<?= (!isset($_REQUEST["sortField"]) || ($_REQUEST["sortField"] == "PROPERTY_MIN_PRICE_".$keyCity && $_REQUEST["sortOrder"] == "asc,nulls"))
						? "selected" : "" ?>>
						По цене &uarr;
					</option>

					<option value="NAME" data-order="desc" class="b-sortby__item"
					<?= ($_REQUEST["sortField"] == "NAME" && $_REQUEST["sortOrder"] == "desc") ? "selected" : "" ?>>
						По названию &darr;
					</option>
					<option value="NAME" data-order="asc" class="b-sortby__item"
					<?= ($_REQUEST["sortField"] == "NAME" && $_REQUEST["sortOrder"] == "asc") ? "selected" : "" ?>>
						По названию &uarr;
					</option>

				</select>
			</label>
		</div>
	</div>
	<?}?>
	<? if ($arParams['CATALOG_TYPE'] == 'tile'): ?>
		<div class="b-product b-product--inner <?= ($arParams["CATALOG_PAGE"] == 'main') ? "frame b-product--index" : "";?> ">
		<ul class="b-product__list <?= ($arParams["CATALOG_PAGE"] == 'main') ? "b-products-spec ".$arParams['MAIN_TYPE'] : "";?>">
	<? elseif ($arParams['CATALOG_TYPE'] == 'imagelist'): ?>
		<div class="b-catalog-photo">
	    <div class="b-catalog-photo__list">
	<? elseif ($arParams['CATALOG_TYPE'] == 'list'): ?>
		<div class="b-catalog-photo b-catalog-no-photo">
	    <div class="b-catalog-photo__list">
	<? endif; ?>
			<? foreach ($arResult["ITEMS"] as $arItem): ?>
				<?//echo 'ID = '.$arItem['ID']?>
				<? if ($arParams['CATALOG_TYPE'] == 'tile'): ?>
					<li class="b-product__item">
						<? if (isset($arResult["STICKERS"][$arItem["ID"]])
							|| $arItem['PROPERTIES']['NEW']['VALUE'] == 'Y'
							|| $arItem['PROPERTIES']['BEST_PRICE']['VALUE'] == 'Y'
							|| $arItem['PROPERTIES']['BEST']['VALUE'] == 'Y'
							|| $arItem['PROPERTIES']['FREE_SHPPING']['VALUE'] == 'Y'
							|| $arItem['PROPERTIES']['KREDIT']['VALUE'] == 'Y'
							|| $arItem['PROPERTIES']['UTILIZ']['VALUE'] == 'Y'
							|| $arItem['PROPERTIES']['TO1']['VALUE'] == 'Y'
							|| $arItem['PROPERTIES']['GARANT5']['VALUE'] == 'Y'
							|| $arItem['PROPERTIES']['GARANT3']['VALUE'] == 'Y'
							|| $arItem['PROPERTIES']['RASSROCHKA']['VALUE'] == 'Y'
							|| $arItem['PROPERTIES']['SVOI']['VALUE'] == 'Y'

							|| $arItem['PROPERTIES']['SVOI25']['VALUE'] == 'Y'
							|| $arItem['PROPERTIES']['SVOI20']['VALUE'] == 'Y'
							|| $arItem['PROPERTIES']['SVOI15']['VALUE'] == 'Y'

							|| $arItem['PROPERTIES']['BLACK_FRIDAY']['VALUE'] == 'Y'


							|| ($arItem["MIN_PRICE"]["VALUE"] != $arItem['MIN_PRICE']['DISCOUNT_VALUE'])): ?>

							<div class="b-product__item--badge">
								<? if ($arItem['PROPERTIES']['SVOI15']['VALUE'] == 'Y') { ?>
									<div class="b-product__item--badge--item b-product__item--badge--discount15 b-product__item--sticker b-tooltip--product-grid">
										Скидка для своих -15% по карте или при первом заказе
									</div>
								<? }
								if ($arItem['PROPERTIES']['SVOI20']['VALUE'] == 'Y') { ?>
									<div class="b-product__item--badge--item b-product__item--badge--discount20 b-product__item--sticker b-tooltip--product-grid">
										Скидка для своих -20% по карте или при первом заказе
									</div>
								<? }
								if ($arItem['PROPERTIES']['SVOI25']['VALUE'] == 'Y') { ?>
									<div class="b-product__item--badge--item b-product__item--badge--discount25 b-product__item--sticker b-tooltip--product-grid">
										Скидка для своих -25% по карте или при первом заказе
									</div>
								<? }
								if ($arItem['PROPERTIES']['NEW']['VALUE'] == 'Y') { ?>
									<div class="b-product__item--badge--item b-product__item--badge--new b-product__item--sticker b-tooltip--product-grid">
										Новинка
									</div>
								<? }
								if ($arItem['PROPERTIES']['BEST_PRICE']['VALUE'] == 'Y') { ?>
									<div class="b-product__item--badge--item b-product__item--badge--best-price b-product__item--sticker b-tooltip--product-grid">
										Лучшая цена
									</div>
								<? }
								if ($arItem['PROPERTIES']['BEST']['VALUE'] == 'Y') { ?>
									<div class="b-product__item--badge--item b-product__item--badge--best-choice b-product__item--sticker b-tooltip--product-grid">
										Лучший выбор
									</div>
								<? }
								if ($arItem['PROPERTIES']['FREE_SHPPING']['VALUE'] == 'Y') { ?>
									<div class="b-product__item--badge--item b-product__item--badge--FREE_SHPPING b-product__item--sticker b-tooltip--product-grid">
										Бесплатная доставка
									</div>
								<? }
								if ($arItem['PROPERTIES']['KREDIT']['VALUE'] == 'Y') { ?>
									<div class="b-product__item--badge--item b-product__item--badge--KREDIT b-product__item--sticker b-tooltip--product-grid">
										Можно в кредит
									</div>
								<? }
								if ($arItem['PROPERTIES']['UTILIZ']['VALUE'] == 'Y') {  ?>
									<div class="b-product__item--badge--item b-product__item--badge--UTILIZ b-product__item--sticker b-tooltip--product-grid">
										Утилизация
									</div>
								<? }
								if ($arItem['PROPERTIES']['TO1']['VALUE'] == 'Y') {  ?>
									<div class="b-product__item--badge--item b-product__item--badge--TO1 b-product__item--sticker b-tooltip--product-grid">
										Бесплатное ТО-1
									</div>
								<? }
								if ($arItem['PROPERTIES']['GARANT5']['VALUE'] == 'Y') { ?>
									<div class="b-product__item--badge--item b-product__item--badge--GARANT5 b-product__item--sticker b-tooltip--product-grid">
										Гарантия 5 лет
									</div>
								<? }
								if ($arItem['PROPERTIES']['GARANT3']['VALUE'] == 'Y') { ?>
									<div class="b-product__item--badge--item b-product__item--badge--GARANT3 b-product__item--sticker b-tooltip--product-grid">
										Гарантия 3 года
									</div>
								<? }
								if ($arItem['PROPERTIES']['BLACK_FRIDAY']['VALUE'] == 'Y') { ?>
									<div class="b-product__item--badge--item b-product__item--badge--BLACK_FRIDAY b-product__item--sticker b-tooltip--product-grid">
										Черная пятница
									</div>
								<? }
								if ($arItem['PROPERTIES']['RASSROCHKA']['VALUE'] == 'Y') { ?>
									<div class="b-product__item--badge--item b-product__item--badge--KREDIT b-product__item--sticker b-tooltip--product-grid">
										Рассрочка без переплаты
									</div>
								<? }
								if ($arItem['PROPERTIES']['SVOI']['VALUE'] == 'Y') { ?>
									<div class="b-product__item--badge--item b-product__item--badge--discount-svoi b-product__item--sticker b-tooltip--product-grid">
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
								/*
									$APPLICATION->IncludeComponent("bitrix:rating.vote", "like_graphic", array(
										"ENTITY_TYPE_ID" => "IBLOCK_ELEMENT",
										"ENTITY_ID"      => $arItem["ID"],
										"OWNER_ID"       => $USER->GetID(),
									), null, array("HIDE_ICONS" => "Y"));*/
								?>


								<a href="#add-to-favorite" class="b-product__item--list b-product__item--add-favorites h2o_add_favor"  type="button" data-id="<?=$arItem["ID"]?>" title="Избранное" data-tooltip="right" ></a>
								<a href="#add-to-compare" class="b-product__item--list b-product__item--add-compare mgc-add-compare"  type="button" data-id="<?=$arItem["ID"]?>" title="Сравнить" data-tooltip="right" ></a>
								<!-- <a href="#add-to-compare" class="b-product__item--list fawe-btn fbtn-chart mgc-add-compare"  type="button" data-id="<?=$arItem["ID"]?>" title="Сравнить" data-tooltip="right" ><i class="fas fa-chart-bar"></i></a> -->
								<a href="#add-to-basket" class="b-product__item--list fawe-btn fbtn-buy"  type="button" data-id="<?=$arItem["ID"]?>" onclick="addBasket(this)" titile="В корзину" data-tooltip="right"><i class="fas fa-shopping-cart"></i></a>


								<div class="b-product__item--price">
									<? if ($arItem["MIN_PRICE"]["VALUE"] != $arItem['MIN_PRICE']['DISCOUNT_VALUE']): ?>
										<span <?/* if (!$USER->IsAdmin()) { ?> style="display:none" <? }*/ ?>  class="b-product__item--discount" data-discount="<?=$arItem["MIN_PRICE"]["DISCOUNT_DIFF_PERCENT"]?>">-<?=$arItem["MIN_PRICE"]["DISCOUNT_DIFF_PERCENT"]?>%</span>
										<span class="b-product__item--priceold-line-through"><span class="b-product__item--priceold" data-price="<?=$arItem["MIN_PRICE"]["VALUE"]?>"><?=$arItem["MIN_PRICE"]["VALUE"]?><span class="b-rouble">q</span></span></span>
										<span <?/* if (!$USER->IsAdmin()) { ?> style="display:none" <? } */?>  class="b-product__item--pricenew b-price-large" data-price="<?=round($arItem["MIN_PRICE"]["DISCOUNT_VALUE"])?>"><?=round($arItem['MIN_PRICE']['DISCOUNT_VALUE'])?><span class="b-rouble">q</span></span>
									<? else: ?>
										<span class="b-product__item--pricenew b-price-large" data-price="<?=round($arItem["MIN_PRICE"]["VALUE"])?>"><?=round($arItem["MIN_PRICE"]["VALUE"])?><span class="b-rouble">q</span></span>
									<? endif; ?>
								</div>
								<div class="b-product__item--id">
									<?= GetMessage("ID") ?> <span class="copy-click" data-mess="Код скопирован"><?= $arItem["ID"]?></span>
								</div>
							</div>
						</a>
						<input type="hidden" name="artikcul" value="<?=$arItem['PROPERTIES']['ARTICUL']['VALUE']?>" />
					</li>
				<? elseif ($arParams['CATALOG_TYPE'] == 'imagelist'): ?>
					<div class="b-catalog-photo__item">
						<div class="b-catalog-photo__item--photo">
							<a href="<?= $arItem["DETAIL_PAGE_URL"] ?>" title="<?= $arItem["NAME"] ?>" class="">
								<img class="" src="<?= $arItem["PICTURE"] ?>" alt="<?= $arItem["NAME"] ?>" title="<?= $arItem["NAME"] ?>">
							</a>
						</div>
						<div class="b-catalog-photo__item--text">
							<a href="<?= $arItem["DETAIL_PAGE_URL"] ?>" class=""><?= $arItem["NAME"] ?></a>
							<? if (!empty($arItem['PROPERTIES']['ARTICUL']['VALUE'])): ?>
								<span class="b-catalog-photo__item--bar-code" data-articul="<?=$arItem['PROPERTIES']['ARTICUL']['VALUE']?>"><i>Артикул</i> <?=$arItem['PROPERTIES']['ARTICUL']['VALUE']?></span>
							<? endif; ?>
						</div>

						<? if ($arItem['PROPERTIES']['NEW']['VALUE'] == 'Y'
							|| $arItem['PROPERTIES']['BEST_PRICE']['VALUE'] == 'Y'
							|| $arItem['PROPERTIES']['BEST']['VALUE'] == 'Y'
							|| $arItem['PROPERTIES']['DISCOUNT']['VALUE'] == 'Y'): ?>
							<div class="b-product__item--badge">
								<? if ($arItem['PROPERTIES']['NEW']['VALUE'] == 'Y'): ?>
									<a class="b-product__item--badge--item b-product__item--badge--new b-tooltip--product-list" title="Новинка" data-tooltip="right"></a>
								<? endif; ?>

								<? if ($arItem['PROPERTIES']['BEST_PRICE']['VALUE'] == 'Y'): ?>
									<a class="b-product__item--badge--item b-product__item--badge--best-price b-tooltip--product-list" title="Лучшая цена" data-tooltip="right"></a>
								<? endif; ?>

								<? if ($arItem['PROPERTIES']['BEST']['VALUE'] == 'Y'): ?>
									<a class="b-product__item--badge--item b-product__item--badge--best-choice b-tooltip--product-list" title="Лучший выбор" data-tooltip="right"></a>
								<? endif; ?>

								<? if ($arItem['PROPERTIES']['DISCOUNT']['VALUE'] == 'Y'): ?>
									<a class="b-product__item--badge--item b-product__item--badge--discount b-tooltip--product-list" title="Скидка" data-tooltip="right"></a>
								<? endif; ?>
							</div>
						<? endif; ?>

						<? if ($arItem["MIN_PRICE"]["VALUE"] != $arItem['MIN_PRICE']['DISCOUNT_VALUE']): ?>
							<?/*div class="b-catalog-photo__item--badge b-catalog-photo__item--badge-discount text-uppercase">Скидка <?=$arItem["MIN_PRICE"]["DISCOUNT_DIFF_PERCENT"]?>%</div*/?>
							<span class="b-catalog-photo__item--discount" data-discount="<?=$arItem["MIN_PRICE"]["DISCOUNT_DIFF_PERCENT"]?>">-<?=$arItem["MIN_PRICE"]["DISCOUNT_DIFF_PERCENT"]?>%</span>
							<span class="b-catalog-photo__item--priceold-line-through">
								<span class="b-catalog-photo__item--priceold" data-price="<?=$arItem["MIN_PRICE"]["VALUE"]?>"><?=$arItem["MIN_PRICE"]["VALUE"]?><span class="b-rouble">q</span></span>
							</span>
							<p class="b-price-large b-catalog-photo__item--price" data-price="<?=$arItem["MIN_PRICE"]["DISCOUNT_VALUE"]?>"><?=$arItem["MIN_PRICE"]["DISCOUNT_VALUE"]?><span class="b-rouble">a</span></p>
						<? else: ?>
							<p class="b-price-large b-catalog-photo__item--price" data-price="<?=$arItem["MIN_PRICE"]["VALUE"]?>"><?=$arItem["MIN_PRICE"]["VALUE"]?><span class="b-rouble">a</span></p>
						<? endif; ?>

						<a class="b-product__item--list b-product__item--inline b-catalog-photo__item--add-favorites h2o_add_favor" type="button" data-id="<?=$arItem["ID"]?>" title="В избранном" ></a>
						<a class="b-product__item--list b-product__item--inline b-catalog-photo__item--add-compare"  type="button" data-id="<?=$arItem["ID"]?>" title="Сравнить" data-tooltip="right" ></a>					</div>
				<? elseif ($arParams['CATALOG_TYPE'] == 'list'): ?>
					<div class="b-catalog-photo__item b-catalog-photo__item--no-photo">
						<div class="b-catalog-photo__item--photo b-catalog-photo__item--photo-hidden">
					 		<a href="<?= $arItem["DETAIL_PAGE_URL"] ?>" title="<?= $arItem["NAME"] ?>" class="">
					            <img class="" src="<?= $arItem["PICTURE"] ?>" alt="<?= $arItem["NAME"] ?>" title="<?= $arItem["NAME"] ?>">
					        </a>
					    </div>
					    <div class="b-catalog-photo__item--text b-catalog-photo__item--text-no-photo">
					        <a class="b-catalog-photo__item--nopic-link" href="<?= $arItem["DETAIL_PAGE_URL"] ?>" class=""><?= $arItem["NAME"] ?></a>
					        <? if (!empty($arItem['PROPERTIES']['ARTICUL']['VALUE'])): ?>
					        	<span class="b-catalog-photo__item--bar-code b-catalog-photo__item--bar-code-no-photo" data-articul="<?=$arItem['PROPERTIES']['ARTICUL']['VALUE']?>"><i>Артикул</i> <?=$arItem['PROPERTIES']['ARTICUL']['VALUE']?></span>
					    	<? endif; ?>
					    </div>

						<? if ($arItem['PROPERTIES']['NEW']['VALUE'] == 'Y'
							|| $arItem['PROPERTIES']['BEST_PRICE']['VALUE'] == 'Y'
							|| $arItem['PROPERTIES']['BEST']['VALUE'] == 'Y'
							|| $arItem['PROPERTIES']['DISCOUNT']['VALUE'] == 'Y'): ?>
							<div class="b-product__item--badge">
								<? if ($arItem['PROPERTIES']['NEW']['VALUE'] == 'Y'): ?>
									<a class="b-product__item--badge--item b-product__item--badge--new b-tooltip--product-list" title="Новинка" data-tooltip="right"></a>
								<? endif; ?>

								<? if ($arItem['PROPERTIES']['BEST_PRICE']['VALUE'] == 'Y'): ?>
									<a class="b-product__item--badge--item b-product__item--badge--best-price b-tooltip--product-list" title="Лучшая цена" data-tooltip="right"></a>
								<? endif; ?>

								<? if ($arItem['PROPERTIES']['BEST']['VALUE'] == 'Y'): ?>
									<a class="b-product__item--badge--item b-product__item--badge--best-choice b-tooltip--product-list" title="Лучший выбор" data-tooltip="right"></a>
								<? endif; ?>

								<? if ($arItem['PROPERTIES']['DISCOUNT']['VALUE'] == 'Y'): ?>
									<a class="b-product__item--badge--item b-product__item--badge--discount b-tooltip--product-list" title="Скидка" data-tooltip="right"></a>
								<? endif; ?>
							</div>
						<? endif; ?>

					    <? if ($arItem["MIN_PRICE"]["VALUE"] != $arItem['MIN_PRICE']['DISCOUNT_VALUE']): ?>
						    <?/*div class="b-catalog-photo__item--badge b-catalog-photo__item--badge-discount text-uppercase">Скидка <?=$arItem["MIN_PRICE"]["DISCOUNT_DIFF_PERCENT"]?>%</div*/?>
						    <span class="b-catalog-photo__item--discount" data-discount="<?=$arItem["MIN_PRICE"]["DISCOUNT_DIFF_PERCENT"]?>">-<?=$arItem["MIN_PRICE"]["DISCOUNT_DIFF_PERCENT"]?>%</span>
						    <span class="b-catalog-photo__item--priceold-line-through">
						        <span class="b-catalog-photo__item--priceold" data-price="<?=round($arItem["MIN_PRICE"]["VALUE"])?>"><?=round($arItem["MIN_PRICE"]["VALUE"])?><span class="b-rouble">q</span></span>
						    </span>
						    <p class="b-price-large b-catalog-photo__item--price" data-price="<?=round($arItem['MIN_PRICE']['DISCOUNT_VALUE'])?>"><?=round($arItem['MIN_PRICE']['DISCOUNT_VALUE'])?><span class="b-rouble">a</span></p>
						<? else: ?>
						    <p class="b-price-large b-catalog-photo__item--price" data-price="<?=round($arItem["MIN_PRICE"]["VALUE"])?>"><?=round($arItem["MIN_PRICE"]["VALUE"])?><span class="b-rouble">a</span></p>
						<? endif; ?>

					    <a class="b-product__item--list b-product__item--inline b-product__item--inline-nopic b-catalog-photo__item--add-favorites h2o_add_favor" type="button" data-id="<?=$arItem["ID"]?>" title="В избранное"></a>
						<a class="b-product__item--list b-product__item--inline b-product__item--inline-nopic b-catalog-photo__item--add-compare mgc-add-compare" type="button" data-id="<?=$arItem["ID"]?>" title="Сравнить" data-tooltip="right"></a>
					</div>
				<? endif; ?>
			<? endforeach; ?>
	<? if ($arParams['CATALOG_TYPE'] == 'tile'): ?>
		</ul>
	<? else: ?>
		</div>
	<? endif; ?>
	</div>
	<? if ($arParams['CATALOG_PAGE'] != 'main') : ?>
		<? /*if (!empty($arResult["NAV_STRING"]) && $arResult['NAV_RESULT']->NavPageNomer != $arResult['NAV_RESULT']->NavPageCount):
			$curPage = (isset($_REQUEST['PAGEN_2']) && !empty($_REQUEST['PAGEN_2'])) ? $_REQUEST['PAGEN_2'] : '1'?>
			<div class="b-products__showmore">
				<a
					class="b-link__show-more text-uppercase"
					href="javascript: void(0);"
					data-current_page="<?=$curPage?>"
					data-product_count="<?=$arParams['PAGE_ELEMENT_COUNT']?>"
					data-category_id="<?=$arResult['ID']?>"
					data-sort_field="<?=$arParams['ELEMENT_SORT_FIELD']?>"
					data-sort_order="<?=$arParams['ELEMENT_SORT_ORDER']?>"
					data-filter="<?=http_build_query($GLOBALS[$arParams['FILTER_NAME']])?>"
				>Показать еще</a>
			</div>
		<? endif; */?>
		<?= $arResult["NAV_STRING"] ?>
	<? endif; ?>

	<? /*if ($arParams['CATALOG_PAGE'] == 'main' && !empty($arResult["NAV_STRING"]) && $arResult['NAV_RESULT']->NavPageNomer != $arResult['NAV_RESULT']->NavPageCount): ?>
		<div class="b-products__showmore <?=$arParams['MAIN_TYPE']?>">
            <a
            	href="javascript: void(0);"
            	class="b-link__show-more text-uppercase"
				data-current_page="1"
				data-product_count="<?=$arParams['PAGE_ELEMENT_COUNT']?>"
            	data-sort_field="<?=$arParams['ELEMENT_SORT_FIELD']?>"
				data-sort_order="<?=$arParams['ELEMENT_SORT_ORDER']?>"
            	data-filter="<?=http_build_query($GLOBALS[$arParams['FILTER_NAME']])?>"
 				data-main="1"
 				data-main-type="<?=$arParams['MAIN_TYPE']?>"
            >показать еще</a>
        </div>
	<? endif;*/ ?>

<? else: ?>
	<p class="b-catalog-empty">К сожалению, таких товаров нет!</p>
<? endif; ?>
<br>
<div class="descrip"><?=$arResult["DESCRIPTION"];?></div>
