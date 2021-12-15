<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>

<? if (!empty($arResult)): ?>
    <div class="pull-right">
        <nav class="b-topnavbar">
            <ul class="b-topnavbar__list">
                <? foreach ($arResult as $arItem): ?>
                    <?
                        if ($arParams["MAX_LEVEL"] == 1 && $arItem["DEPTH_LEVEL"] > 1)
                            continue;
                    ?>

                    <? if ($arItem["SELECTED"]): ?>
                        <li class="b-topnavbar__item">
                            <a href="<?=$arItem["LINK"]?>" title="<?=$arItem["TEXT"]?>"><?=$arItem["TEXT"]?></a>
                        </li>
                    <? else: ?>
                        <li class="b-topnavbar__item">
                            <a href="<?=$arItem["LINK"]?>" title="<?=$arItem["TEXT"]?>"><?=$arItem["TEXT"]?></a>
                        </li>
                    <? endif; ?>

                <? endforeach; ?>
            </ul>
        </nav>
    </div>
<? endif; ?>