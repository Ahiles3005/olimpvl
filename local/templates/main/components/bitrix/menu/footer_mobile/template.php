<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>

<? if (!empty($arResult)): ?>
    <div class="b-footer-filter__item b-footer-filter__item--accordion" id="accordion" role="tablist" aria-multiselectable="true">
        <div role="tab" id="<?=$arParams['ROOT_MENU_TYPE']?>">
            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#<?=$arParams['ROOT_MENU_TYPE']?>-collapse" aria-expanded="true" aria-controls="filterbrand-collapse" class="b-footer-filter__title"><?=$arResult[0]['TEXT']?></a>
        </div>
        <div id="<?=$arParams['ROOT_MENU_TYPE']?>-collapse" class="panel-collapse collapse in js-collapse" role="tabpanel" aria-labelledby="<?=$arParams['ROOT_MENU_TYPE']?>">
            <div class="b-footer__menu-wrapper">
                <ul class="b-footer__menu-mobile-list">
                    <? foreach ($arResult as $key => $arItem): ?>
                        <? if ($key > 0): ?>
                            <li class="b-footer__menu-mobile-item">
                                <a href="<?=$arItem["LINK"]?>"><?=$arItem["TEXT"]?></a>
                            </li>
                        <? endif; ?>
                    <? endforeach; ?>
                </ul>
            </div>
        </div>
    </div>
<? endif; ?>