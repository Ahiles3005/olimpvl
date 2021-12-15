<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
$product_count = (isset($_REQUEST['productCount']) && !empty($_REQUEST['productCount'])) ? intval($_REQUEST['productCount']) : 24;
?>

<? if (true): ?>
    <?
    if (!$arResult["NavShowAlways"]) {
        if ($arResult["NavRecordCount"] == 0 || ($arResult["NavPageCount"] == 1 && $arResult["NavShowAll"] == false))
            return;
    }

    $strNavQueryString = ($arResult["NavQueryString"] != "" ? $arResult["NavQueryString"] . "&amp;" : "");
    $strNavQueryStringFull = ($arResult["NavQueryString"] != "" ? "?" . $arResult["NavQueryString"] : "");
    ?>

    <? if ($arResult["bDescPageNumbering"] === true): ?>
        <div class="b-pagination">
            <div class="b-pagination__limit">
                <label class="b-pagination__label">Выводить по:
                    <select class="b-pagination__select js-product_count">
                        <option<? if ($product_count == '24'): ?> selected<? endif; ?> value="24">24</option>
                        <option<? if ($product_count == '48'): ?> selected<? endif; ?> value="48">48</option>
                        <option<? if ($product_count == '96'): ?> selected<? endif; ?> value="96">96</option>
                    </select>
                </label>
            </div>
            <div class="b-pagination__showed">
                <?= $arResult["NavFirstRecordShow"] ?> - <?= $arResult["NavLastRecordShow"] ?>
                <?= GetMessage("nav_of") ?> <?= $arResult["NavRecordCount"] ?>
            </div>
            <ul class="b-pagination__pageslist">
                <li class="b-pagination__page">
                    <? if ($arResult["NavPageNomer"] < $arResult["NavPageCount"]): ?>
                        <? if ($arResult["bSavePage"]): ?>
                            <a class="b-pagination__prev"
                               href="<?= $arResult["sUrlPath"] ?>?<?= $strNavQueryString ?>PAGEN_<?= $arResult["NavNum"] ?>=<?= ($arResult["NavPageNomer"] + 1) ?>"></a>
                        <? else: ?>
                            <? if ($arResult["NavPageCount"] == ($arResult["NavPageNomer"] + 1)): ?>
                                <a class="b-pagination__prev"
                                   href="<?= $arResult["sUrlPath"] ?><?= $strNavQueryStringFull ?>"></a>
                            <? else: ?>
                                <a class="b-pagination__prev"
                                   href="<?= $arResult["sUrlPath"] ?>?<?= $strNavQueryString ?>PAGEN_<?= $arResult["NavNum"] ?>=<?= ($arResult["NavPageNomer"] + 1) ?>"></a>
                            <? endif ?>
                        <? endif ?>
                    <? endif ?>
                </li>

                <? while ($arResult["nStartPage"] >= $arResult["nEndPage"]): ?>
                    <? $NavRecordGroupPrint = $arResult["NavPageCount"] - $arResult["nStartPage"] + 1; ?>
                    <? if ($arResult["nStartPage"] == $arResult["NavPageNomer"]): ?>
                        <li class="b-pagination__page b-pagination__page--active"><?= $NavRecordGroupPrint ?></li>
                    <? elseif ($arResult["nStartPage"] == $arResult["NavPageCount"] && $arResult["bSavePage"] == false): ?>
                        <li class="b-pagination__page">
                            <a class="b-pagination__pagelink"
                               href="<?= $arResult["sUrlPath"] ?><?= $strNavQueryStringFull ?>"><?= $NavRecordGroupPrint ?></a>
                        </li>
                    <? else: ?>
                        <li class="b-pagination__page">
                            <a class="b-pagination__pagelink"
                               href="<?= $arResult["sUrlPath"] ?>?<?= $strNavQueryString ?>PAGEN_<?= $arResult["NavNum"] ?>=<?= $arResult["nStartPage"] ?>"><?= $NavRecordGroupPrint ?></a>
                        </li>
                    <? endif ?>
                    <? $arResult["nStartPage"]-- ?>
                <? endwhile ?>

                <li class="b-pagination__page">
                    <? if ($arResult["NavPageNomer"] > 1): ?>
                        <a class="b-pagination__next"
                           href="<?= $arResult["sUrlPath"] ?>?<?= $strNavQueryString ?>PAGEN_<?= $arResult["NavNum"] ?>=<?= ($arResult["NavPageNomer"] - 1) ?>">
                        </a>
                    <? endif ?>
                </li>
            </ul>
        </div>
    <? else: ?>
        <div class="b-pagination">
            <div class="b-pagination__limit">
                <label class="b-pagination__label">Выводить по:
                    <select class="b-pagination__select js-product_count">
                        <option<? if ($product_count == '24'): ?> selected<? endif; ?> value="24">24</option>
                        <option<? if ($product_count == '48'): ?> selected<? endif; ?> value="48">48</option>
                        <option<? if ($product_count == '96'): ?> selected<? endif; ?> value="96">96</option>
                    </select>
                </label>
            </div>
            
            <?
            $mcl = max(1,$arResult["NavLastRecordShow"]-1); 
            $mc = max(1,$arResult["NavRecordCount"]-1); 
            ?>
            <div class="b-pagination__showed">
                <?= $arResult["NavFirstRecordShow"] ?> - <?= $mcl ?>
                <?= GetMessage("nav_of") ?> <?= $mc ?>
            </div>
            <ul class="b-pagination__pageslist">
                <li class="b-pagination__page">
                    <? if ($arResult["NavPageNomer"] > 1): ?>
                        <? if ($arResult["bSavePage"]): ?>
                            <a class="b-pagination__prev"
                               href="<?= $arResult["sUrlPath"] ?>?<?= $strNavQueryString ?>PAGEN_<?= $arResult["NavNum"] ?>=<?= ($arResult["NavPageNomer"] - 1) ?>">
                            </a>
                        <? else: ?>
                            <? if ($arResult["NavPageNomer"] > 2): ?>
                                <a class="b-pagination__prev"
                                   href="
                                   <?=$APPLICATION->GetCurPageParam("PAGEN_".$arResult["NavNum"]."=".($arResult["NavPageNomer"] - 1), array("PAGEN_".$arResult["NavNum"]))?>">
                                </a>
                            <? else: ?>
                                <a class="b-pagination__prev"
                                   href="<?=$APPLICATION->GetCurPageParam("PAGEN_".$arResult["NavNum"]."=1", array("PAGEN_".$arResult["NavNum"]))?>">
                                </a>
                            <? endif ?>
                        <? endif ?>
                    <? endif ?>
                </li>

                <? $count = 1;

                while ($count < $arResult["NavPageNomer"]):
                    if ($count == 2 && $arResult["NavPageNomer"] > 3):
                        echo "...";
                        $count = $arResult["NavPageNomer"] - 1;
                        continue;
                    else: ?>

                    <li class="b-pagination__page">
                        <a class="b-pagination__pagelink"
                           href="<?=$APPLICATION->GetCurPageParam("PAGEN_" . $arResult["NavNum"] . "=" . $count, array("PAGEN_" . $arResult["NavNum"]))?>">
                            <?= $count ?>
                        </a>&nbsp;
                    </li>

                    <? $count++;
                    endif;
                endwhile; ?>

                <li class="b-pagination__page b-pagination__page--active"><?= $arResult["NavPageNomer"] ?></li>

                <? $count = $arResult["NavPageNomer"] + 1;
                    while ($count <= $arResult["NavPageCount"]):
                        if ($count == $arResult["NavPageNomer"] + 2 && $arResult["NavPageCount"] - $arResult["NavPageNomer"] > 2):
                            echo "...";
                            $count = $arResult["NavPageCount"];
                        else: ?>

                    <li class="b-pagination__page">
                        <a class="b-pagination__pagelink"
                           href="<?=$APPLICATION->GetCurPageParam("PAGEN_" . $arResult["NavNum"] . "=" . $count, array("PAGEN_" . $arResult["NavNum"]))?>">
                            <?= $count ?>
                        </a>&nbsp;
                    </li>

                    <? $count++;
                    endif;
                endwhile; ?>
             
                <li class="b-pagination__page">
                    <? if ($arResult["NavPageNomer"] < $arResult["NavPageCount"]): ?>
                    	<? $nextPage = $arResult["NavPageNomer"] + 1?>
                        <a class="b-pagination__next"
                           href="<?=$APPLICATION->GetCurPageParam("PAGEN_".$arResult["NavNum"]."=".$nextPage, array("PAGEN_".$arResult["NavNum"]))?>">
                        </a>
                    <? endif ?>
                </li>
            </ul>
        </div>
    <? endif ?>
<? endif; ?>