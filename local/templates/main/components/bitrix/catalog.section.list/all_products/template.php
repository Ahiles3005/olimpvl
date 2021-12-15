<?
	if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
	$this->setFrameMode(true);

?>
<div class="wrapper-bordered">
	<div class="b-sort b-sort-by-sections">
        <div class="b-sort__products">
            <label for="sort-by-sections" class="b-sort__text">Сортировать
                <select id="sort-by-sections" class="b-sort__select b-sort__select--sections js-products-sort" name="all-products-sort">
                    <option value="sections" <?= (!isset($_REQUEST["sort"]) || (isset($_REQUEST["sort"]) && $_REQUEST["sort"] == "sections")) ? "selected" : "" ?>>По разделам</option>
					<option value="alphabet" <?= (isset($_REQUEST["sort"]) && $_REQUEST["sort"] == "alphabet") ? "selected" : "" ?>>А-Я</option>
                </select>
            </label>
        </div>
    </div>

	<div class="b-alphabet">
		<ul class="b-alphabet__list">
			<? foreach($arResult["AVAILIBLE_LETTERS"] as $letter): ?>
				<li class="b-alphabet__item">
					<a href="<?= $APPLICATION->GetCurPageParam("catalogFilter=".$letter, array("catalogFilter"));?>" class="b-alphabet__letter<?= (isset($_REQUEST["catalogFilter"]) && $_REQUEST["catalogFilter"] == $letter) ? " b-alphabet__letter--active" : "" ?>"><?= $letter ?></a>
				</li>
			<? endforeach; ?>
		</ul>
	</div>

	<div class="b-column-container">
		<? foreach ($arResult["SECTIONS_A"] as $let): ?>
			<div class="b-column<?if ($let["SECTIONS_CNT"] >= 10): ?> b-column--x2<? endif; ?>">
				<h3 class="b-column__name"><?= $let['THIS']["NAME"] ?></h3>
				<div class="b-column__inner b-column__by-letter<?if ($let["SECTIONS_CNT"] >= 10): ?> b-column__inner--double<? endif; ?>">
					<? foreach ($let["SECTIONS"] as $arSectionDepth1): ?>
						<? foreach ($arSectionDepth1["SECTIONS"] as $arSectionDepth2): ?>
							<ul class="b-column__list">
								<li class="b-column__item">
									<a href="<?= $arSectionDepth2['THIS']["SECTION_PAGE_URL"] ?>" class="b-column__link"><?= $arSectionDepth2['THIS']["NAME"] ?></a>
								</li>
								<? foreach ($arSectionDepth2["SECTIONS"] as $arSectionDepth3): ?>
									<li class="b-column__item">
										<a href="<?= $arSectionDepth3['THIS']["SECTION_PAGE_URL"] ?>" class="b-column__link"><?= $arSectionDepth3['THIS']["NAME"] ?></a>
									</li>
								<? endforeach; ?>
							</ul>
						<? endforeach; ?>
					<? endforeach; ?>
				</div>
			</div>
		<? endforeach; ?>
		<? foreach ($arResult["ALL_SECTIONS"] as $arSectionDepth1): ?>
			<div class="b-column<?if (count($arSectionDepth1["SECTIONS"]) >= 10): ?> b-column--x2<? endif; ?>">
				<h3 class="b-column__name"><?= $arSectionDepth1['THIS']["NAME"] ?></h3>
				<div class="b-column__inner<?if ($arSectionDepth1['SECTIONS_CNT'] >= 10): ?> b-column__inner--double<? endif; ?>">
					<? foreach ($arSectionDepth1["SECTIONS"] as $arSectionDepth2): ?>
						<ul class="b-column__list">
							<li class="b-column__item">
								<a href="<?= $arSectionDepth2['THIS']["SECTION_PAGE_URL"] ?>" class="b-column__link"><?= $arSectionDepth2['THIS']["NAME"] ?></a>
							</li>
							<? foreach ($arSectionDepth2["SECTIONS"] as $arSectionDepth3): ?>
								<li class="b-column__item">
									<a href="<?= $arSectionDepth3['THIS']["SECTION_PAGE_URL"] ?>" class="b-column__link"><?= $arSectionDepth3['THIS']["NAME"] ?></a>
								</li>
							<? endforeach; ?>
						</ul>
					<? endforeach; ?>
				</div>
			</div>
		<? endforeach; ?>
	</div>
</div>