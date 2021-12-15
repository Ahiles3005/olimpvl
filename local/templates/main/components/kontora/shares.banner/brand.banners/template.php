<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>

<? if (!empty($arResult["BANNERS"])): ?>
	<div class="b-swiper">
        <ul class="b-swiper__list bxslider swiper-brand">
			<? foreach ($arResult["BANNERS"] as $bannerKey => $arBanner): ?>
				<li class="b-swiper__item">
	                <? if (!empty($arBanner['URL'])):?>
	                	<a class="b-swiper__link" href="<?= $arBanner["URL"] ?>" title="<?= $arBanner["NAME"] ?>" target="<?= $arBanner["URL_TARGET"] ?>">
	                <? endif; ?>
	                    <img class="b-swiper__image" src="<?= $arBanner["IMAGE"] ?>" alt="<?= $arBanner["NAME"] ?>" title="<?= $arBanner["NAME"] ?>">
	                <? if (!empty($arBanner['URL'])):?>
	                	</a>
	                <? endif; ?>
	            </li>
			<? endforeach; ?>
		</ul>
	</div>
<? endif; ?>