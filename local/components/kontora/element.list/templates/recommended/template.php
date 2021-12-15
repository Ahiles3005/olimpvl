<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>

<div class="b-goods__recommended">
    <h2 class="b-goods__headline"><?= GetMessage("PRODUCT_RECOMMENDED") ?></h2>
    <ul class="b-goods__list b-goods__list--recommended slider-product-recommended">
        <? foreach ($arResult["ITEMS"] as $product): ?>
            <li class="b-goods__item b-goods__item--recommended">
                <a href="<?= $product["DETAIL_PAGE_URL"] ?>" title="<?= $product["NAME"] ?>"
                   class="b-goods__name">
                    <img src="<?= $product["PICTURE"] ?>" alt="<?= $product["NAME"] ?>"
                         title="<?= $product["NAME"] . ' ' . $product["PROPERTY_BRAND_NAME"] ?>"
                         class="b-goods__image b-goods__image--recommended">
                        <span class="b-goods__name--title"><?= $product["NAME"] ?></span>
                        <?= $product["PROPERTY_BRAND_NAME"] ?>
                </a>

                <p class="b-goods__price"><?= $product["MIN_PRICE"]["VALUE"] ?> <span class="b-rouble">a</span>
                </p>
            </li>
        <? endforeach ?>
    </ul>
</div>
