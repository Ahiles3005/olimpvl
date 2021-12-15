<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>

<? if (!empty($arResult["BANNERS"])): ?>
	<div id="slider-brand" class="carousel slide slider-brand-mobile-min" data-ride="carousel">
		<? if (count($arResult["BANNERS"]) > 1): ?>
			<!-- Indicators -->
			<ol class="carousel-indicators">
				<? foreach ($arResult["BANNERS"] as $bannerKey => $arBanner): ?>
					<li data-target="#slider-brand" data-slide-to="<?= $bannerKey ?>"<?= ($bannerKey) ? '' : ' class="active"' ?>></li>
				<? endforeach; ?>
			</ol>
		<? endif; ?>
		<!-- Wrapper for slides -->
		<div class="carousel-inner" role="listbox">
			<? foreach ($arResult["BANNERS"] as $bannerKey => $arBanner): ?>
				<div class="item<?= ($bannerKey) ? '' : ' active' ?>">
					<? if (!empty($arBanner['URL'])):?>
						<a href="<?=$arBanner['URL']?>" target="<?=$arBanner['URL_TARGET']?>">
					<? endif; ?>
						<img src="<?= $arBanner["IMAGE"] ?>" alt="<?= $arBanner["IMAGE_ALT"] ?>" title="<?= $arBanner["IMAGE_ALT"] ?>">
					<? if (!empty($arBanner['URL'])):?>
						</a>
					<? endif; ?>

					<div class="carousel-caption">
						<h3><?= $arBanner["GROUP_SID"] ?></h3>
						<p><?= $arBanner["NAME"] ?></p>
					</div>
				</div>
			<? endforeach; ?>
		</div>
	</div>
<? endif; ?>