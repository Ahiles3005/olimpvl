<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();
$keyCity = (empty($_COOKIE['KEY_CITY'])) ? Olimp\City::getDefaultCityCode() : $_COOKIE['KEY_CITY'];
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

		<div class="b-sortby">
			<label for="sort-by"><span class="b-sortby__name">Сортировать</span>
				<select id="sort-by" class="b-sortby__select js-sort-by">

					<option value="shows" data-order="desc" class="b-sortby__item" 
					<?= (!isset($_REQUEST["sortField"]) || ($_REQUEST["sortField"] == "shows" && $_REQUEST["sortOrder"] == "desc")) ? "selected" : "" ?>>
						По популярности &darr;
					</option>
					<option value="shows" data-order="asc" class="b-sortby__item" 
					<?= ($_REQUEST["sortField"] == "shows" && $_REQUEST["sortOrder"] == "asc") ? "selected" : "" ?>>
						По популярности &uarr;
					</option>

					<option value="PROPERTY_MIN_PRICE_<?=$keyCity?>" data-order="desc" class="b-sortby__item" 
					<?= ($_REQUEST["sortField"] == "PROPERTY_MIN_PRICE_" . $keyCity && $_REQUEST["sortOrder"] == "desc") ? "selected" : "" ?>>
						По цене &darr;
					</option>
					<option value="PROPERTY_MIN_PRICE_<?=$keyCity?>" data-order="asc" class="b-sortby__item" 
					<?= ($_REQUEST["sortField"] == "PROPERTY_MIN_PRICE_".$keyCity && $_REQUEST["sortOrder"] == "asc") ? "selected" : "" ?>>
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
						<? if ($arItem['PROPERTIES']['NEW']['VALUE'] == 'Y'
							|| $arItem['PROPERTIES']['BEST_PRICE']['VALUE'] == 'Y'
							|| $arItem['PROPERTIES']['BEST']['VALUE'] == 'Y'
							|| ($arItem["MIN_PRICE"]["VALUE"] != $arItem['MIN_PRICE']['DISCOUNT_VALUE'])): ?>

							<div class="b-product__item--badge">
		                        <? if ($arItem['PROPERTIES']['NEW']['VALUE'] == 'Y'): ?>
									<a class="b-product__item--badge--item b-product__item--badge--new b-tooltip--product-grid" title="Новинка" data-tooltip="right"></a>
								<? endif; ?>

								<? if ($arItem['PROPERTIES']['BEST_PRICE']['VALUE'] == 'Y'): ?>
									<a class="b-product__item--badge--item b-product__item--badge--best-price b-tooltip--product-grid" title="Лучшая цена" data-tooltip="right"></a>
								<? endif; ?>

								<? if ($arItem['PROPERTIES']['BEST']['VALUE'] == 'Y'): ?>
									<a class="b-product__item--badge--item b-product__item--badge--best-choice b-tooltip--product-grid" title="Лучший выбор" data-tooltip="right"></a>
								<? endif; ?>
								<? if ($arItem["MIN_PRICE"]["VALUE"] != $arItem['MIN_PRICE']['DISCOUNT_VALUE']): ?>
									<a class="b-product__item--badge--item b-product__item--badge--discount b-tooltip--product-grid" title="Скидка" data-tooltip="right"></a>
								<? endif; ?>
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
										<span class="b-product__item--pricenew b-price-large" data-price="<?=round($arItem["MIN_PRICE"]["VALUE"])?>"><?=round($arItem["MIN_PRICE"]["VALUE"])?><span class="b-rouble">q</span></span>
									<? endif; ?>
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

						<a class="b-catalog-photo__item--add-favorites b-catalog-photo__item--add-favorites--active" href="javascript: void(0);" title="В избранном"  style="display: none"><?//2 спринт?>
						</a>
						<a class="b-catalog-photo__item--add-compare" href="javascript: void(0);" title="Сравнить" data-tooltip="right" style="display: none"></a><?//2 спринт?>
					</div>
				<? elseif ($arParams['CATALOG_TYPE'] == 'list'): ?>
					<div class="b-catalog-photo__item b-catalog-photo__item--no-photo">
						<div class="b-catalog-photo__item--photo b-catalog-photo__item--photo-hidden">
					 		<a href="<?= $arItem["DETAIL_PAGE_URL"] ?>" title="<?= $arItem["NAME"] ?>" class="">
					            <img class="" src="<?= $arItem["PICTURE"] ?>" alt="<?= $arItem["NAME"] ?>" title="<?= $arItem["NAME"] ?>">
					        </a>
					    </div>
					    <div class="b-catalog-photo__item--text b-catalog-photo__item--text-no-photo">
					        <a href="<?= $arItem["DETAIL_PAGE_URL"] ?>" class=""><?= $arItem["NAME"] ?></a>
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

					    <a class="b-catalog-photo__item--add-favorites" href="javascript: void(0);" title="В избранное"  style="display: none"><?//2 спринт?>
					    </a>
						<a class="b-catalog-photo__item--add-compare" href="javascript: void(0);" title="Сравнить" data-tooltip="right"  style="display: none"><?//2 спринт?>
						</a>
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
	<p class="b-catalog-empty">К сожалению, таких товаров нет.</p>
<? endif; ?>