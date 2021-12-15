<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
?>
<div class="b-catalog-sidebar">
    <div class="b-category">
    	<button class="b-category__toggle" type="button" value="toggle-section-list">Категории</button>
    	
        <ul class="b-category__list" style="display: none;">
            <? if (!isset($arParams['BRAND_CODE']) && empty($arParams['BRAND_CODE'])): ?>
                <? if ($arResult["SECTION"]["DEPTH_LEVEL"] > 1 || !empty($arParams["ACTIVE_SECTION_CODE"])): ?>
                    <li class="b-category__item">
                        <a href="<?= $arResult["SECTIONS_BACK_URL"] ?>"
                           class="b-category__link b-category__link--previous"
                           title="<?= GetMessage("SECTIONS_BACK") ?>"><?= GetMessage("SECTIONS_BACK") ?></a>
                    </li>
                <? else: ?>
                    <li class="b-category__item">
                        <a href="<?= $arResult["SECTION"]["SECTION_PAGE_URL"] ?>"
                           class="b-category__link  b-category__link--active"
                           title="<?= $arResult["SECTION"]["NAME"] ?>"><?= $arResult["SECTION"]["NAME"] ?></a>
                    </li>
                <? endif; ?>
            <? endif; ?>
            <? foreach ($arResult["SECTIONS"] as $arSection):
                if ($arSection["ELEMENT_CNT"] && empty($arParams['BRAND_CODE'])):
                    $liClass = ($arSection["CODE"] == $arParams["ACTIVE_SECTION_CODE"]) ? 'b-category__link  b-category__link--active' : 'b-category__link' ?>
                    <li class="b-category__item">
                        <a href="<?= $arSection["SECTION_PAGE_URL"] . $arResult['URL_PARAMETER'] ?>"
                           class="<?= $liClass ?>"
                           title="<?= $arSection["NAME"] ?>">
                            <?= $arSection["NAME"] ?> <span class="b-category__count"><? if($arSection["ELEMENT_CNT"]){ ?>(<?= $arSection["ELEMENT_CNT"] ?>  <?  } ?>
                                )</span>
                        </a>
                    </li>
                <? else: ?>
                    <? $liClass = ($arSection["CODE"] == $arParams["ACTIVE_SECTION_CODE"]) ? 'b-category__link  b-category__link--active' : 'b-category__link' ?>
                    <li class="b-category__item">
                        <a href="<?= ($arSection["DEPTH_LEVEL"] == 3) ? $arSection["SECTION_PAGE_URL"] . $arResult['URL_PARAMETER'] : $arSection["SECTION_PAGE_URL"] ?>"
                           class="<?= $liClass ?>"
                           title="<?= $arSection["NAME"] ?>">
                            <?= $arSection["NAME"] ?>
                            <? if ($arSection["DEPTH_LEVEL"] == 3 && $arSection["ELEMENT_CNT"]) echo '<span class="b-category__count">(' . $arSection["ELEMENT_CNT"] . ')</span>' ?>
                        </a>
                    </li>
                <? endif ?>
            <? endforeach; ?>
        </ul>
    </div>
</div>