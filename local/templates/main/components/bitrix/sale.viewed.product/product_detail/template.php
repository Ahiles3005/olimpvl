<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<? if (!empty($arResult)): ?>
    <div class="b-goods__recent">
        <h2 class="b-goods__headline">Недавно просмотренные товары</h2>
        <div class="slider-goods">
            <ul class="b-goods__list b-goods__list--recent slider-product-recent">
                <? foreach ($arResult as $arItem): ?>
                    <li class="b-goods__item b-goods__item--recent">
                        <a href="<?= $arItem["DETAIL_PAGE_URL"] ?>"
                           title="<?= $arItem["NAME"] . ' ' . $arItem["BRAND"] ?>" class="b-goods__name">
                            <div class="b-goods__image-owerflow--recent">
                            <div class="b-goods__image-owerflow-horisontal--recent">
                            <img src="<?= ( $arItem["PICTURE"] ) ? $arItem["PICTURE"] : "/catalog/images/170x170.png" ?>" alt="<?= $arItem["NAME"] ?>"
                                 title="<?= $arItem["NAME"] . " " . $arItem["BRAND"] ?>"
                                 class="b-goods__pic"
                            />
                            </div>
                            </div>
                            <div class="b-goods__text"><?= $arItem["NAME"] ?></div>
                            <br/><?= $arItem["BRAND"] ?>
                        </a>

                        <p class="b-goods__price"><?= round($arItem["PRICE"]) ?> <span class="b-rouble">a</span></p>
                    </li>
                <? endforeach; ?>
            </ul>
        </div>
    </div>
<? endif; ?>

