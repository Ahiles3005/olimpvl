<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
$arLevel3 = array();
?>

<? if (!empty($arResult)): ?>
    <div class="b-header-mobile__menu-dropdown">
        <div class="js-mobile-menu-level-two js-mobile-menu-level-one">
            <div class="b-header-mobile__menu--nav">
                <a href="" class="pull-left b-header-mobile__menu--nav-backwards js-backwards-two">Назад</a>
                <a href="" class="pull-right b-header-mobile__menu--nav-categories js-backwards-two">Категории</a>
            </div>
            <ul class="b-header-mobile__menu--list">
                <?
                $previous_level = 0;
                $key_for_level3 = 0;
                $item_for_level3 = 0;
                ?>
                <? foreach ($arResult as $key => $arItem): ?>
                    <? if ($arItem['DEPTH_LEVEL'] == 1 && $previous_level == 0): ?>
                        <li class="b-header-mobile__menu--item b-header-mobile__menu--item-category">
                            <a href="<?=$arItem['LINK']?>" class="b-header-mobile__menu--link b-header-mobile__menu--category-link<? if ($arItem['PARAMS']['IS_PARENT'] == 1): ?>  js-modile-menu-link-level-one<? endif; ?>"><?=$arItem['TEXT']?></a>
                    <? elseif ($arItem['DEPTH_LEVEL'] == 1 && $previous_level == 1): ?>
                        </li>
                        <li class="b-header-mobile__menu--item b-header-mobile__menu--item-category">
                           <a href="<?=$arItem['LINK']?>" class="b-header-mobile__menu--link b-header-mobile__menu--category-link<? if ($arItem['PARAMS']['IS_PARENT'] == 1): ?>  js-modile-menu-link-level-one<? endif; ?>"><?=$arItem['TEXT']?></a>
                    <? elseif ($arItem['DEPTH_LEVEL'] == 2 && $previous_level == 1): ?>
                        <?
                        if ($arItem['PARAMS']['IS_PARENT'] == 1) {
                            $key_for_level3  = $key;
                            $item_for_level3 = $arItem;
                        }
                        ?>
                        <ul class="b-header-mobile__menu--section">
                            <li class="b-header-mobile__menu--item">
                                <a href="<?=$arItem['LINK']?>" id="<?=$key?>" class="b-header-mobile__menu--link<? if ($arItem['PARAMS']['IS_PARENT'] == 1): ?>  js-modile-menu-link-level-two<? endif; ?>"><?=$arItem['TEXT']?></a>
                            </li>
                    <? elseif ($arItem['DEPTH_LEVEL'] == 1 && ($previous_level == 2 || $previous_level == 3)): ?>
                            </ul>
                        </li>
                        <li class="b-header-mobile__menu--item b-header-mobile__menu--item-category">
                            <a href="<?=$arItem['LINK']?>" class="b-header-mobile__menu--link b-header-mobile__menu--category-link<? if ($arItem['PARAMS']['IS_PARENT'] == 1): ?>  js-modile-menu-link-level-one<? endif; ?>"><?=$arItem['TEXT']?></a>

                    <? elseif ($arItem['DEPTH_LEVEL'] == 2 && ($previous_level == 2 || $previous_level == 3)): ?>
                        <?
                        if ($arItem['PARAMS']['IS_PARENT'] == 1) {
                            $key_for_level3  = $key;
                            $item_for_level3 = $arItem;
                        }
                        ?>
                        </ul>
                        <ul class="b-header-mobile__menu--section">
                            <li class="b-header-mobile__menu--item">
                                <a href="<?=$arItem['LINK']?>" id="<?=$key?>" class="b-header-mobile__menu--link<? if ($arItem['PARAMS']['IS_PARENT'] == 1): ?>  js-modile-menu-link-level-two<? endif; ?>"><?=$arItem['TEXT']?></a>
                            </li>
                    <? elseif ($arItem['DEPTH_LEVEL'] == 3): ?>
                        <?
                        $arLevel3[$key_for_level3]['CUR'] = $item_for_level3;
                        $arLevel3[$key_for_level3]['ITEMS'][] = $arItem;
                        ?>
                    <? endif; ?>
                    <? $previous_level = $arItem['DEPTH_LEVEL']; ?>
                <? endforeach; ?>

                <? if ($previous_level <= 1): ?>
                    </li>
                <? else: ?>
                        </ul>
                    </li>
                <? endif; ?>
            </ul>
        </div>
        <? foreach ($arLevel3 as $keylevel => $menu3): ?>
            <div id="level3_<?=$keylevel?>" class="js-mobile-menu-level-three hidden">
                <div class="b-header-mobile__menu--nav">
                    <a href="" class="pull-left b-header-mobile__menu--nav-backwards js-modile-menu-link-level-three">Назад</a>
                    <a href="" class="pull-right b-header-mobile__menu--nav-categories js-modile-menu-link-level-categories">Категории</a>
                </div>
                <ul class="b-header-mobile__menu--list">
                    <li class="b-header-mobile__menu--item b-header-mobile__menu--item-category">
                        <a href="<?=$menu3['CUR']['LINK']?>" class="b-header-mobile__menu--link b-header-mobile__menu--category-link"><?=$menu3['CUR']['TEXT']?></a>
                        <ul class="b-header-mobile__menu--section">
                            <? foreach ($menu3['ITEMS'] as $arItem): ?>
                                <li class="b-header-mobile__menu--item">
                                    <a href="<?=$arItem['LINK']?>" class="b-header-mobile__menu--link"><?=$arItem['TEXT']?></a>
                                </li>
                            <? endforeach; ?>
                        </ul>
                    </li>
                </ul>
            </div>
        <? endforeach; ?>
    </div>
<? endif ?>