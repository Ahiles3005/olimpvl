<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
$this->setFrameMode(true);
?>
<div class="b-news-index">
    <? foreach ($arResult['ITEMS'] as $arItem): ?>
        <div class="b-news-index__item">
            <a href="<?= $arItem['DETAIL_PAGE_URL'] ?>" class="b-news-index__link" title="">
                <div class="b-news-index__date">
                    <?= $arItem['ACTIVE_FROM'] ?>
                </div>
                <div class="b-news-index__title">
                    <?= $arItem['NAME'] ?>
                </div>
                <div class="b-news-index__text">
                <? if ($arItem['PROPERTIES']["TYPE"]["VALUE"] == "Новость"): ?>
					<? if (!empty($arItem['PREVIEW_TEXT'])): ?>
                        <img width="350" alt="<?=$arItem['PREVIEW_PICTURE']["ALT"]?>" src="<?=$arItem['PREVIEW_PICTURE']["SRC"]?>" height="250" title="<?=$arItem['PREVIEW_PICTURE']["TITLE"]?>">
                        <br><br>
					<? endif; ?>
                    <? if (!empty($arItem['PREVIEW_TEXT'])): ?>
                        <?= $arItem['PREVIEW_TEXT'] ?>
                    <? endif; ?>

                <? else: ?>

                    <? if (!empty($arItem['PREVIEW_TEXT'])): ?>
                        <?= $arItem['PREVIEW_TEXT'] ?>
                    <? endif; ?>

                <? endif; ?>
                </div>
            </a>
        </div>
    <? endforeach; ?>
</div>