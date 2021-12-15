<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<? if (!empty($arResult["BANNERS"])): ?>
	<div class="b-indexbanners__slider">
		<div id="slider-main" class="carousel slide" data-ride="carousel">
			<? if (count($arResult["BANNERS"]) > 1): ?>
				<!-- Indicators -->
				<ol class="carousel-indicators">
					<? foreach ($arResult["BANNERS"] as $bannerKey => $arBanner): ?>
						<li data-target="#slider-main" data-slide-to="<?= $bannerKey ?>"<?= ($bannerKey) ? '' : ' class="active"' ?>></li>
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
					</div>
					<? if (count($arResult["BANNERS"]) > 1): ?>
						<!-- Controls -->
						  <a class="left carousel-control" href="#slider-main" role="button" data-slide="prev">
						    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
						    <span class="sr-only"></span>
						  </a>
						  <a class="right carousel-control" href="#slider-main" role="button" data-slide="next">
						    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
						    <span class="sr-only"></span>
						  </a>
					<? endif; ?>
				<? endforeach; ?>
			</div>
		</div>
	</div>
<? endif; ?>