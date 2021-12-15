<?
	if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
	$this->setFrameMode(true);
?>
<? if ($arParams['MAIN_PAGE'] != 'Y'): ?>
	<div class="b-alphabet-eng">
		<ul class="b-alphabet-eng__list">
			<? foreach ($arResult["LETTERS"] as $letter): ?>
				<li class="b-alphabet-eng__item">
					<a href="<?= $APPLICATION->GetCurPageParam("brandName=".$letter."", array("brandName", "PAGEN_2"));?>"
						class="b-alphabet-eng__letter<?= ($_REQUEST["brandName"] == $letter) ? " b-alphabet-eng__letter--active" : "" ?>"><?= $letter ?>
					</a>
				</li>
			<? endforeach; ?>
			<li class="b-alphabet-eng__item">
				<a href="<?= $APPLICATION->GetCurPageParam("brandName=rus", array("brandName"));?>" class="b-alphabet-eng__letter<?= ($_REQUEST["brandName"] == "rus") ? " b-alphabet-eng__letter--active" : "" ?>">А - Я</a>
			</li>
		</ul>
	</div>
<? endif; ?>
<ul class="b-brand-list">
	<? foreach ($arResult["ITEMS"] as $arItem): ?>
		<li class="b-brand-list__item">
			<a href="<?= $arItem["DETAIL_PAGE_URL"] ?>" class="b-brand-list__link" title="<?= GetMessage("LINK_TITTLE") ?> <?= $arItem["NAME"] ?>">
				<img src="<?= ($arItem["PREVIEW_PICTURE"]["SRC"]) ? $arItem["PREVIEW_PICTURE"]["SRC"] : DEF_PIC_BRAND_LIST;?>" alt="<?= $arItem["NAME"] ?>" title="<?= $arItem["NAME"] ?>" class="b-brand__image" />
				<div><?= $arItem["NAME"] ?></div>
			</a>
		</li>
	<? endforeach; ?>
</ul>
<? if ($arParams['MAIN_PAGE'] != 'Y'): ?>
	<?=$arResult["NAV_STRING"]?>
<?endif?>
