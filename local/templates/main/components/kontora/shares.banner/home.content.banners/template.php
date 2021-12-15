<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>

<? if (!empty($arResult["BANNERS"])): ?>
	<div class="b-events" id="content-1">
        <div class="b-events--overflow">
			<? $i = 0;
			foreach ($arResult['BANNERS'] as $BannerWeight => $arBanner): ?>
				<div class="<?= (($i == 0) || ($i == 5)) ? 'b-events__banner2x' : 'b-events__banner';?>">
					<? if (!empty($arBanner['URL'])):?>
						<a href="<?=$arBanner['URL']?>" target="<?=$arBanner['URL_TARGET']?>">
					<? endif; ?>
						<img src="<?= $arBanner['IMAGE']?>" class="b-events__banner-image" alt="" />
					<? if (!empty($arBanner['URL'])):?>
						</a>
					<? endif; ?>
				</div>
			<? $i++;
			endforeach ?>
		</div>
	</div>
<? endif; ?>