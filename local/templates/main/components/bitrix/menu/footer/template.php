<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>

<? if (!empty($arResult)): ?>
    <div class="b-footer-nav">
        <ul class="b-footer-nav__list">
            <? foreach ($arResult as $arItem): ?>
                <li class="b-footer-nav__item">
                    <a href="<?=$arItem["LINK"]?>" class="b-footer-nav__item--link" title="<?=$arItem["TEXT"]?>"><?=$arItem["TEXT"]?></a>
                </li>
            <? endforeach; ?>
        </ul>
    </div>
<? endif; ?>