<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<? $this->SetViewTarget('storePhone'); ?>
<? if (!empty($arResult["STORE_PHONE"])): ?>
    <p class="b-product-info__price-text"><?= GetMessage('MESSAGE_ORDER_PHONE') ?><?= $store["STORE_PHONE"] ?></p>
<? endif ?>
<? $this->EndViewTarget(); ?>
<div class="b-tab__accordion--text collapse">
    <div class="b-tab-available">
        <div class="b-tab-available__select">
            <p class="b-tab-available__choice_by_user"><?= GetMessage('S_SHOW') ?></p>

            <div class="b-tab-available__choice_by_user">
                <input id="radio2" type="radio" checked name="radio2"/>
                <label for="radio2"><?= GetMessage('S_ONLY_AVAILABLE') ?></label>
            </div>
            <div class="b-tab-available__choice_by_user">
                <input id="radio22" type="radio" name="radio2"/>
                <label for="radio22"><?= GetMessage('S_ALL') ?></label>
            </div>
        </div>
        <? foreach ($arResult["CITIES"] as $keyCity => $arCity): ?>
            <div
                class="b-tab-available__shop-block" <? if (!$arCity["AMOUNT"]): ?> style="display: none;"<? endif; ?>>
                <div class="b-tab-available__city-name"><?= $arCity["NAME"] ?></div>
                <div class="b-tab-available__shop-list">
                    <? foreach ($arCity["SHOPS"] as $arStore): ?>
                        <? if ($arStore["AMOUNT"]): ?>
                            <div class="b-tab-available__in-stock"
                                 data-store="store_<?= $arStore["ID"] ?>"> <?= GetMessage('S_AVAILABLE') ?></div>
                        <? else: ?>
                            <div class="b-tab-available__not-available"
                                 data-store="store_<?= $arStore["ID"] ?>"
                                 style="display: none;"
                            ><?= GetMessage('S_NOT_AVAILABLE') ?></div>
                        <? endif; ?>
                        <div class="b-tab-available__shop-adress"<? if (!$arStore["AMOUNT"]): ?> style="display: none;"<? endif; ?>>
                            <? if (!empty($arStore["NAME"])): ?>
                                <h4><?= $arStore["NAME"] ?></h4>
                            <? endif; ?>
                            <? if (!empty($arStore["ADDRESS"])): ?>
                                <?= GetMessage('S_ADDRESS') ?><?= $arStore["ADDRESS"] ?></br>
                            <? endif; ?>
                            <? if (!empty($arStore["PHONE"])): ?>
                                <?= GetMessage('S_PHONE') ?> <a href="tel:<?= $arStore["PHONE"] ?>"><?= $arStore["PHONE"] ?></a></br>
                            <? endif; ?>
                            <? if (!empty($store["SCHEDULE"])): ?>
                                <?= GetMessage('S_SCHEDULE') ?> <?= $arStore["SCHEDULE"] ?>
                            <? endif; ?>
                        </div>
                    <? endforeach ?>
                </div>
            </div>
        <? endforeach ?>
        <? if ($arResult['EMPTY']): ?>
            <span class="b-tab-available__empty-stores js-empty-stores">Нет в наличии</span>
        <? endif; ?>
    </div>
</div>