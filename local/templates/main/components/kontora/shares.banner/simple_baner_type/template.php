<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die(); ?>

<? if (!empty($arResult["BANNERS"])): ?>
	<? foreach ($arResult['BANNERS'] as $Bannerkey => $arBanner): ?>
		<div class="b-image-sport">
			<?=$arBanner["HTML"]; ?>
		</div>
	<? endforeach; ?>
<? endif; ?>