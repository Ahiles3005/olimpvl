<?
	if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
	$this->setFrameMode(true);
?>

<p class="b-news__date">
	<?= $arResult['ACTIVE_FROM']?>
</p>
<div class="b-news-main">
	<div class="b-news-detail">
		<?if (!empty($arResult['DETAIL_PICTURE']['ID'])): ?>
			<img class="b-news-detail__image" src="<?= $arResult['DETAIL_PICTURE']['SRC']?>" alt="<?=$arResult['NAME']?>" title="<?=$arResult['NAME']?>" />
		<? endif; ?>

		<?if (!empty($arResult['DETAIL_TEXT'])): ?>
			<div class="b-news-detail__text">
				<p><?= $arResult['DETAIL_TEXT']?></p>
			</div>
		<? endif; ?>
	</div>
<script src="https://yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
<script src="https://yastatic.net/share2/share.js"></script>
<div class="ya-share2" data-services="collections,vkontakte,facebook,odnoklassniki,moimir,pinterest,linkedin,lj,tumblr,viber,whatsapp,skype,telegram" data-image="https://olimpvl.ru/upload/resize_cache/iblock/ccf/270_270_1/ccff317fd3bd62bd5fc2df51aff241c6.jpg"></div>
</div>
<? if (!empty($arResult['NEWS'])): ?>
	<aside class="b-right-side">
		<h3 class="b-right-side__sign"><?=$arParams['TITLE_RIGHT']?></h3>
		<ul class="b-right-side__list">
			<? foreach ($arResult['NEWS'] as $arNew): ?>
				<? if ($arResult['ID'] != $arNew['ID']): ?>
					<li class="b-right-side__item">
						<? if (!empty($arNew['PREVIEW_PICTURE'])): ?>
							<a href="<?= $arNew['DETAIL_PAGE_URL'] ?>" title="<?= $arNew['NAME']?>">
								<img class="b-right-side__image" src="<?= $arNew['PREVIEW_PICTURE_SRC']?>" alt="<?= $arNew['NAME']?>" title="<?= $arNew['NAME']?>" />
							</a>
						<? endif; ?>
						<p class="b-right-side__date">
							<?= $arNew['ACTIVE_FROM'] ?>
						</p>
						<a href="<?= $arNew['DETAIL_PAGE_URL'] ?>" class="b-right-side__headline">
							<?= $arNew['NAME'] ?>
						</a>
					</li>
				<? endif; ?>
			<? endforeach; ?>
		</ul>
	</aside>
<? endif; ?>