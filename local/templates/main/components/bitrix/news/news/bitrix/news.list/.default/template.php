<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<div class="b-news">
	<? if (!empty($arResult['ITEMS'])): ?>
		<ul class="b-news__list">
			<? foreach ($arResult['ITEMS'] as $arItem): ?>
				<li class="b-news__item">
					<? if (!empty($arItem['PREVIEW_PICTURE'])): ?>
						<a class="b-news__link" href="<?= $arItem['DETAIL_PAGE_URL']?>" title="<?= $arItem['NAME'] ?>">
							<img class="b-news__image" src="<?= $arItem['PREVIEW_PICTURE']['SRC']?>" alt="<?= $arItem['NAME'] ?>" title="<?= $arItem['NAME'] ?>" /></a>
					<? endif; ?>

					<div class="b-news__text">
						<p class="b-news__date"><?= $arItem['ACTIVE_FROM']?></p>
						<a class="b-news__headline" href="<?= $arItem['DETAIL_PAGE_URL']?>" title="<?= $arItem['NAME'] ?>"><?= $arItem['NAME'] ?></a>
						<?if (!empty($arItem['PREVIEW_TEXT'])): ?>
							<p class="b-news__message"><?= $arItem['PREVIEW_TEXT']?></p>
						<? endif; ?>
					</div>
				</li>
			<? endforeach; ?>
		</ul>

		<?=$arResult["NAV_STRING"]?>
	<? endif; ?>
</div>