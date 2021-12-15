<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<?if(count($arResult["ITEMS"])>0) :?>
<div class="b-goods__similar">
    <h2 class="b-goods__headline"><?= GetMessage("SIMILAR_PRODUCT") ?></h2>
    <ul class="b-goods__list b-goods__list--similar slider-product-similar">
        <? foreach ($arResult["ITEMS"] as $product): ?>
            <li class="b-goods__item b-goods__item--similar">
                <a href="<?= $product["DETAIL_PAGE_URL"] ?>" title="<?= $product["NAME"] ?>"
                   class="b-goods__name b-goods__name--similar">
                    <div class="b-goods__image-owerflow">
                        <div class="b-goods__image-owerflow-horisontal">
                            <img
                                src="<?= $product["PICTURE"] ?>"
                                alt="<?= $product["NAME"] ?>"
                                title="<?= $product["NAME"] . " " . $product["PROPERTY_BRAND_NAME"] ?>"
                                class="b-goods__image b-goods__image--similar"/>
                        </div>
                    </div>
                    <div><?= $product["NAME"] ?></div>
                    <?= $product["PROPERTY_BRAND_NAME"] ?>
                </a>

                <div class="b-goods__footer">
                    <a style="display: none" class="b-product__add-favorites" href="javascript: void(0);"
                       title="<?= GetMessage("TO_FAVORITES") ?>"></a><? //2 спринт?>

                    <div class="b-product__price">
                            <span class="b-goods__price b-goods__price--similar"><?= (int)round($product["MIN_PRICE"]["VALUE"]) ?>
                                <span class="b-rouble">a</span></span>
                    </div>
                </div>
            </li>
        <? endforeach ?>
    </ul>

</div>
<?endif?>
