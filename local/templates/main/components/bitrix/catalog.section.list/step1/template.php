<?
	if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();
?>
<div class="b-catalog-category">
	<ul class="b-catalog-category__list">
		<? foreach ($arResult["SECTIONS"] as $arSection):
			if ($arSection["ELEMENT_CNT"] && ($arParams["FILTER_PROPERTY"] != "BRAND" || $arSection["DEPTH_LEVEL"] == 3)): ?>
				<li class="b-catalog-category__item">
					<a href="<?= $arSection["SECTION_PAGE_URL"].$arResult['URL_PARAMETER'] ?>" class="b-catalog-category__link" title="<?= $arSection["NAME"] ?>">
						<div class="b-catalog-category__image">
							<img src="<?= ($arSection["PICTURE"]["SRC"]) ? $arSection["PICTURE"]["SRC"] : "/catalog/images/170x170.png";?>" alt="<?= $arSection["NAME"] ?>" title="<?= $arSection["NAME"] ?>" />
						</div>
						<p class="b-catalog-category__title"><?= $arSection["NAME"] ?></p>
					</a>
				</li>
			<? endif;
		endforeach; ?>
	</ul>
</div>
