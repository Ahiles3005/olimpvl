<?
    if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
    $keyCity = (empty($_COOKIE['KEY_CITY'])) ? Olimp\City::getDefaultCityCode() : $_COOKIE['KEY_CITY'];
    /** @var array $arParams */
    /** @var array $arResult */
    /** @global CMain $APPLICATION */
    /** @global CUser $USER */
    /** @global CDatabase $DB */
    /** @var CBitrixComponentTemplate $this */
    /** @var string $templateName */
    /** @var string $templateFile */
    /** @var string $templateFolder */
    /** @var string $componentPath */
    /** @var CBitrixComponent $component */

    $this->setFrameMode(true);
?>

<div class="b-catalog-sidebar b-catalog-sidebar1 bx-filter">
    <div class="bx-filter-section1 b-filter">
        <form name="<?echo $arResult["FILTER_NAME"]."_form"?>" action="<?echo $arResult["FORM_ACTION"]?>" method="get" class="smartfilter">
            <? foreach ($arResult["HIDDEN"] as $arItem): ?>
                <input type="hidden" name="<?echo $arItem["CONTROL_NAME"]?>" id="<?echo $arItem["CONTROL_ID"]?>" value="<?echo $arItem["HTML_VALUE"]?>" />
            <? endforeach; ?>
            <? /*=$keyCity*/ ?>
                <?
                $oo = array();
                //amount - товары в наличии
                foreach ($arResult["ITEMS"] as $key=>$arItem) {
                
//                 $oo[$arItem['CODE']] = $arItem['VALUES'];
                     if (empty($arItem["VALUES"]) || isset($arItem["PRICE"]))
                         continue;
                    //нас интересует только наличие в нашем регионе, который хранится в куках

                    if ($arItem['CODE']!='AMOUNT_'.$keyCity) continue;


                    ?>
                    
                  
                    
                    
                    <?  ?>
                    <div class="b-filter__block b-filter__block--accordion <?if ($arParams["FILTER_VIEW_MODE"] == "HORIZONTAL"):?>col-sm-6 col-md-4<?else:?>col-lg-12<?endif?> bx-filter-parameters-box <?if ($arItem["DISPLAY_EXPANDED"]== "Y"):?>bx-active<?endif?>">
                        <span class="bx_filter_container_modef"></span>
                        <div class="b-checkbox">
                            <ul class="b-checkbox__list">
                                <?foreach ($arItem["VALUES"] as $val => $ar): ?>
                                    <?if ($ar["VALUE"]=="Y"){?>
                                        <li class="bx_filter_input_checkbox b-checkbox__item">
                                            <input
                                                type="checkbox"
                                                value="<? echo $ar["HTML_VALUE"] ?>"
                                                name="<? echo $ar["CONTROL_NAME"] ?>"
                                                id="<? echo $ar["CONTROL_ID"] ?>"
                                                <? echo (!empty($_REQUEST[$ar["CONTROL_NAME"]]))? 'checked="checked"': '' ?>
                                                onclick="smartFilter.click(this)"
                                                
                                                />
                                            <label data-role="label_<?=$ar["CONTROL_ID"]?>" class="bx_filter_param_label <? echo $ar["DISABLED"] ? 'disabled': '' ?>" for="<? echo $ar["CONTROL_ID"] ?>">
                                             В наличии в городе (<?=$arResult['AMOUNT_COUNT']?>)
                                            </label>
                                        </li>
                                    <?}?>
                                <? endforeach; ?>
                            </ul>
                        </div>
                    </div>
                    
                    
                    <?  ?>
                    
                    
                    <?
                }
                
                
                file_put_contents($_SERVER['DOCUMENT_ROOT']."/filters.txt",json_encode($oo));

                ?>

            <div>
                <?
                    //prices
                    foreach ($arResult["ITEMS"] as $key=>$arItem) {
                    if (empty($arItem["VALUES"]) || isset($arItem["PRICE"]))
                        continue;
                    //нас интересует только цена из нашего региона, который хранится в куках

                    if ($arItem['CODE'] != 'MIN_PRICE_'.$keyCity) continue;

                    ?>

                    <div class="b-filter__block b-filter__block--accordion <?if ($arParams["FILTER_VIEW_MODE"] == "HORIZONTAL"):?>col-sm-6 col-md-4<?else:?>col-lg-12<?endif?> bx-filter-parameters-box <?if ($arItem["DISPLAY_EXPANDED"]== "Y"):?>bx-active<?endif?>">
                        <span class="bx_filter_container_modef"></span>
                        <p class="b-filter__title">Цена</p>
                        <div id="filter<?=$arItem["CODE"]?><?=$arItem["ID"]?>-collapse" class="b-range clearfix" role="tabpanel" aria-labelledby="filter<?=$arItem["CODE"]?><?=$arItem["ID"]?>">
                            <?
                                $minValue = (empty($arItem["VALUES"]["MIN"]["HTML_VALUE"])) ? $arItem["VALUES"]["MIN"]["VALUE"] : $arItem["VALUES"]["MIN"]["HTML_VALUE"];
                                $maxValue = (empty($arItem["VALUES"]["MAX"]["HTML_VALUE"])) ? $arItem["VALUES"]["MAX"]["VALUE"] : $arItem["VALUES"]["MAX"]["HTML_VALUE"];
                            ?>
                            <div class="bx-filter-block b-range__form-cost" data-role="bx_filter_block">
                                    <?
                                    $arCur = current($arItem["VALUES"]);

                                        ?>
                                        <div class="b-range__form-row">
                                        <label for="js-range-min-cost" class="b-range__title-cost">от</label>
                                    <input
                                        class="min-price b-range__min-cost js-range-min-cost"
                                        type="text"
                                        name="<?echo $arItem["VALUES"]["MIN"]["CONTROL_NAME"]?>"
                                        id="<?echo $arItem["VALUES"]["MIN"]["CONTROL_ID"]?>"
                                        value="<?echo $minValue?>"
                                        placeholder="<?echo $arItem["VALUES"]["MIN"]["VALUE"]?>"
                                        size="5"
                                        onkeyup="smartFilter.keyup(this)"
                                        />
                                        <span class="b-rouble b-rouble--desktop-hidden">q</span>
                                        </div>
                                        <div class="b-range__form-row">
                                        <label for="js-range-max-cost" class="b-range__title-cost">до</label>
                                    <input
                                        class="max-price b-range__max-cost js-range-max-cost"
                                        type="text"
                                        name="<?echo $arItem["VALUES"]["MAX"]["CONTROL_NAME"]?>"
                                        id="<?echo $arItem["VALUES"]["MAX"]["CONTROL_ID"]?>"
                                        value="<?echo $maxValue?>"
                                        placeholder="<?echo $arItem["VALUES"]["MAX"]["VALUE"]?>"
                                        size="5"
                                        onkeyup="smartFilter.keyup(this)"
                                        />
                                        <span class="b-rouble">q</span>
                                        </div>



                            </div>
                            <div class="bx-ui-slider-track-container">
                                <div class="bx-ui-slider-track" id="drag_track_<?=$key?>">
                                    <?
                                    $precision = $arItem["DECIMALS"]? $arItem["DECIMALS"]: 0;
                                    $step      = ($arItem["VALUES"]["MAX"]["VALUE"] - $arItem["VALUES"]["MIN"]["VALUE"]) / 4;
                                    ?>

                                    <div class="bx-ui-slider-pricebar-vd" style="left: 0;right: 0;" id="colorUnavailableActive_<?=$key?>"></div>
                                    <div class="bx-ui-slider-pricebar-vn" style="left: 0;right: 0;" id="colorAvailableInactive_<?=$key?>"></div>
                                    <div class="bx-ui-slider-pricebar-v"  style="left: 0;right: 0;" id="colorAvailableActive_<?=$key?>"></div>
                                    <div class="bx-ui-slider-range" id="drag_tracker_<?=$key?>"  style="left: 0%; right: 0%;">
                                        <a class="bx-ui-slider-handle left"  style="left:0;" href="javascript:void(0)" id="left_slider_<?=$key?>"></a>
                                        <a class="bx-ui-slider-handle right" style="right:0;" href="javascript:void(0)" id="right_slider_<?=$key?>"></a>
                                    </div>
                                </div>
                            </div>
                            <?
                            $arJsParams = array(
                                "leftSlider"             => 'left_slider_'.$key,
                                "rightSlider"            => 'right_slider_'.$key,
                                "tracker"                => "drag_tracker_".$key,
                                "trackerWrap"            => "drag_track_".$key,
                                "minInputId"             => $arItem["VALUES"]["MIN"]["CONTROL_ID"],
                                "maxInputId"             => $arItem["VALUES"]["MAX"]["CONTROL_ID"],
                                "minPrice"               => $arItem["VALUES"]["MIN"]["VALUE"],
                                "maxPrice"               => $arItem["VALUES"]["MAX"]["VALUE"],
                                "curMinPrice"            => $minValue,
                                "curMaxPrice"            => $maxValue,
                                "fltMinPrice"            => intval($arItem["VALUES"]["MIN"]["FILTERED_VALUE"]) ? $arItem["VALUES"]["MIN"]["FILTERED_VALUE"] : $arItem["VALUES"]["MIN"]["VALUE"] ,
                                "fltMaxPrice"            => intval($arItem["VALUES"]["MAX"]["FILTERED_VALUE"]) ? $arItem["VALUES"]["MAX"]["FILTERED_VALUE"] : $arItem["VALUES"]["MAX"]["VALUE"],
                                "precision"              => $arItem["DECIMALS"]? $arItem["DECIMALS"]: 0,
                                "colorUnavailableActive" => 'colorUnavailableActive_'.$key,
                                "colorAvailableActive"   => 'colorAvailableActive_'.$key,
                                "colorAvailableInactive" => 'colorAvailableInactive_'.$key,
                            );
                            ?>
                            <script type="text/javascript">
                                BX.ready(function(){
                                    window['trackBar<?=$key?>'] = new BX.Iblock.SmartFilter(<?=CUtil::PhpToJSObject($arJsParams)?>);
                                });
                            </script>
                        </div>
                    </div>
                    <?
                }

                    //not prices
                    foreach ($arResult["ITEMS"] as $key => $arItem) {
                        if (empty($arItem["VALUES"]) || isset($arItem["PRICE"]))
                            continue;

                        //эти блоки мы уже вывели
                        if (strpos($arItem['CODE'], 'MIN_PRICE') !== false) continue;
                        if (strpos($arItem['CODE'], 'AMOUNT') !== false) continue;

                        if (
                            $arItem["DISPLAY_TYPE"] == "A"
                            && (
                                $arItem["VALUES"]["MAX"]["VALUE"] - $arItem["VALUES"]["MIN"]["VALUE"] <= 0
                            )
                        )
                            continue;
                        ?>
                        <div class="b-filter__block b-filter__block--accordion <?if ($arParams["FILTER_VIEW_MODE"] == "HORIZONTAL"):?>col-sm-6 col-md-4<?else:?>col-lg-12<?endif?> bx-filter-parameters-box <?if ($arItem["DISPLAY_EXPANDED"]== "Y"):?>bx-active<?endif?>">
                            <span class="bx_filter_container_modef"></span>

                            <div role="tab" id="filter<?=$arItem["CODE"]?><?=$arItem["ID"]?>">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#filter<?=$arItem["CODE"]?><?=$arItem["ID"]?>-collapse" aria-expanded="true" aria-controls="filter<?=$arItem["CODE"]?><?=$arItem["ID"]?>-collapse" class="b-filter__title b-filter__title--accordion"><?=$arItem["NAME"]?></a>
                            </div>
                            <?
                            $js_collapse = true;
                            if ($arItem['CODE'] == 'BRAND') {
                                foreach ($arItem["VALUES"] as $val => $ar) {
                                    if ($ar["CHECKED"])  $js_collapse = false;
                                }
                            }
                            ?>
                            <div id="filter<?=$arItem["CODE"]?><?=$arItem["ID"]?>-collapse" class="panel-collapse collapse in <?=($js_collapse)?"js-collapse":""?>" role="tabpanel" aria-labelledby="filter<?=$arItem["CODE"]?><?=$arItem["ID"]?>">
                            <div class="bx-filter-block b-checkbox b-checkbox--accordion" data-role="bx_filter_block">
                                <div class="bx-filter-parameters-box-container b-checkbox__list">
                                    <?
                                    $arCur = current($arItem["VALUES"]);
                                    switch ($arItem["DISPLAY_TYPE"]) {
                                        case "A"://NUMBERS_WITH_SLIDER
                                            ?>
                                            <label for="js-range-min-cost" class="b-range__title-cost">от</label>
                                            <input
                                                class="min-price b-range__min-cost js-range-min-cost"
                                                type="text"
                                                name="<?echo $arItem["VALUES"]["MIN"]["CONTROL_NAME"]?>"
                                                id="<?echo $arItem["VALUES"]["MIN"]["CONTROL_ID"]?>"
                                                value="<?echo $arItem["VALUES"]["MIN"]["HTML_VALUE"]?>"
                                                size="5"
                                                onkeyup="smartFilter.keyup(this)"
                                                />
                                            <label for="js-range-max-cost" class="b-range__title-cost">до</label>
                                            <input
                                                class="max-price b-range__max-cost js-range-max-cost"
                                                type="text"
                                                name="<?echo $arItem["VALUES"]["MAX"]["CONTROL_NAME"]?>"
                                                id="<?echo $arItem["VALUES"]["MAX"]["CONTROL_ID"]?>"
                                                value="<?echo $arItem["VALUES"]["MAX"]["HTML_VALUE"]?>"
                                                size="5"
                                                onkeyup="smartFilter.keyup(this)"
                                                />
                                            <span class="b-rouble">q</span>

                                        <div class="bx-ui-slider-track-container">
                                            <div class="bx-ui-slider-track" id="drag_track_<?=$key?>">
                                                <?
                                                $precision = $arItem["DECIMALS"]? $arItem["DECIMALS"]: 0;
                                                $step      = ($arItem["VALUES"]["MAX"]["VALUE"] - $arItem["VALUES"]["MIN"]["VALUE"]) / 4;
                                                ?>

                                                <div class="bx-ui-slider-pricebar-vd" style="left: 0;right: 0;" id="colorUnavailableActive_<?=$key?>"></div>
                                                <div class="bx-ui-slider-pricebar-vn" style="left: 0;right: 0;" id="colorAvailableInactive_<?=$key?>"></div>
                                                <div class="bx-ui-slider-pricebar-v"  style="left: 0;right: 0;" id="colorAvailableActive_<?=$key?>"></div>
                                                <div class="bx-ui-slider-range" id="drag_tracker_<?=$key?>"  style="left: 0%; right: 0%;">
                                                    <a class="bx-ui-slider-handle left"  style="left:0;" href="javascript:void(0)" id="left_slider_<?=$key?>"></a>
                                                    <a class="bx-ui-slider-handle right" style="right:0;" href="javascript:void(0)" id="right_slider_<?=$key?>"></a>
                                                </div>
                                            </div>
                                        </div>
                                        <?
                                            $arJsParams = array(
                                                "leftSlider"             => 'left_slider_'.$key,
                                                "rightSlider"            => 'right_slider_'.$key,
                                                "tracker"                => "drag_tracker_".$key,
                                                "trackerWrap"            => "drag_track_".$key,
                                                "minInputId"             => $arItem["VALUES"]["MIN"]["CONTROL_ID"],
                                                "maxInputId"             => $arItem["VALUES"]["MAX"]["CONTROL_ID"],
                                                "minPrice"               => $arItem["VALUES"]["MIN"]["VALUE"],
                                                "maxPrice"               => $arItem["VALUES"]["MAX"]["VALUE"],
                                                "curMinPrice"            => $arItem["VALUES"]["MIN"]["HTML_VALUE"],
                                                "curMaxPrice"            => $arItem["VALUES"]["MAX"]["HTML_VALUE"],
                                                "fltMinPrice"            => intval($arItem["VALUES"]["MIN"]["FILTERED_VALUE"]) ? $arItem["VALUES"]["MIN"]["FILTERED_VALUE"] : $arItem["VALUES"]["MIN"]["VALUE"] ,
                                                "fltMaxPrice"            => intval($arItem["VALUES"]["MAX"]["FILTERED_VALUE"]) ? $arItem["VALUES"]["MAX"]["FILTERED_VALUE"] : $arItem["VALUES"]["MAX"]["VALUE"],
                                                "precision"              => $arItem["DECIMALS"]? $arItem["DECIMALS"]: 0,
                                                "colorUnavailableActive" => 'colorUnavailableActive_'.$key,
                                                "colorAvailableActive"   => 'colorAvailableActive_'.$key,
                                                "colorAvailableInactive" => 'colorAvailableInactive_'.$key,
                                            );
                                        ?>
                                            <script type="text/javascript">
                                                BX.ready(function(){
                                                    window['trackBar<?=$key?>'] = new BX.Iblock.SmartFilter(<?=CUtil::PhpToJSObject($arJsParams)?>);
                                                });
                                            </script>
                                        <?
                                        break;
                                        case "B"://NUMBERS
                                        ?>
                                            <div class="col-xs-6 bx-filter-parameters-box-container-block bx-left">
                                                <i class="bx-ft-sub"><?=GetMessage("CT_BCSF_FILTER_FROM")?></i>
                                                <div class="bx-filter-input-container">
                                                    <input
                                                        class="min-price"
                                                        type="text"
                                                        name="<?echo $arItem["VALUES"]["MIN"]["CONTROL_NAME"]?>"
                                                        id="<?echo $arItem["VALUES"]["MIN"]["CONTROL_ID"]?>"
                                                        value="<?echo $arItem["VALUES"]["MIN"]["HTML_VALUE"]?>"
                                                        size="5"
                                                        onkeyup="smartFilter.keyup(this)"
                                                        />
                                                </div>
                                            </div>
                                            <div class="col-xs-6 bx-filter-parameters-box-container-block bx-right">
                                                <i class="bx-ft-sub"><?=GetMessage("CT_BCSF_FILTER_TO")?></i>
                                                <div class="bx-filter-input-container">
                                                    <input
                                                        class="max-price"
                                                        type="text"
                                                        name="<?echo $arItem["VALUES"]["MAX"]["CONTROL_NAME"]?>"
                                                        id="<?echo $arItem["VALUES"]["MAX"]["CONTROL_ID"]?>"
                                                        value="<?echo $arItem["VALUES"]["MAX"]["HTML_VALUE"]?>"
                                                        size="5"
                                                        onkeyup="smartFilter.keyup(this)"
                                                        />
                                                </div>
                                            </div>
                                        <?
                                        break;
                                        case "G"://CHECKBOXES_WITH_PICTURES
                                        ?>
                                            <div class="bx-filter-param-btn-inline">
                                                <?foreach ($arItem["VALUES"] as $val => $ar):?>
                                                    <input
                                                        style="display: none"
                                                        type="checkbox"
                                                        name="<?=$ar["CONTROL_NAME"]?>"
                                                        id="<?=$ar["CONTROL_ID"]?>"
                                                        value="<?=$ar["HTML_VALUE"]?>"
                                                        <? echo $ar["CHECKED"]? 'checked="checked"': '' ?>
                                                        />
                                                    <?
                                                        $class = "";
                                                        if ($ar["CHECKED"])
                                                            $class.= " bx-active";
                                                        if ($ar["DISABLED"])
                                                            $class.= " disabled";
                                                    ?>
                                                    <label for="<?=$ar["CONTROL_ID"]?>" data-role="label_<?=$ar["CONTROL_ID"]?>" class="bx-filter-param-label <?=$class?>" onclick="smartFilter.keyup(BX('<?=CUtil::JSEscape($ar["CONTROL_ID"])?>')); BX.toggleClass(this, 'bx-active');">
                                                    <span class="bx-filter-param-btn bx-color-sl">
                                                        <?if (isset($ar["FILE"]) && !empty($ar["FILE"]["SRC"])):?>
                                                            <span class="bx-filter-btn-color-icon" style="background-image:url('<?=$ar["FILE"]["SRC"]?>');"></span>
                                                        <?endif?>
                                                    </span>
                                                    </label>
                                                <?endforeach?>
                                            </div>
                                        <?
                                        break;
                                        case "H"://CHECKBOXES_WITH_PICTURES_AND_LABELS
                                        ?>
                                            <div class="bx-filter-param-btn-block">
                                                <?foreach ($arItem["VALUES"] as $val => $ar):?>
                                                    <input
                                                        style="display: none"
                                                        type="checkbox"
                                                        name="<?=$ar["CONTROL_NAME"]?>"
                                                        id="<?=$ar["CONTROL_ID"]?>"
                                                        value="<?=$ar["HTML_VALUE"]?>"
                                                        <? echo $ar["CHECKED"]? 'checked="checked"': '' ?>
                                                        />
                                                    <?
                                                        $class = "";
                                                        if ($ar["CHECKED"])
                                                            $class.= " bx-active";
                                                        if ($ar["DISABLED"])
                                                            $class.= " disabled";
                                                    ?>
                                                    <label for="<?=$ar["CONTROL_ID"]?>" data-role="label_<?=$ar["CONTROL_ID"]?>" class="bx-filter-param-label<?=$class?>" onclick="smartFilter.keyup(BX('<?=CUtil::JSEscape($ar["CONTROL_ID"])?>')); BX.toggleClass(this, 'bx-active');">
                                                    <span class="bx-filter-param-btn bx-color-sl">
                                                        <?if (isset($ar["FILE"]) && !empty($ar["FILE"]["SRC"])):?>
                                                            <span class="bx-filter-btn-color-icon" style="background-image:url('<?=$ar["FILE"]["SRC"]?>');"></span>
                                                        <?endif?>
                                                    </span>
                                                    <span class="bx-filter-param-text" title="<?=$ar["VALUE"];?>"><?=$ar["VALUE"];?><?
                                                        if ($arParams["DISPLAY_ELEMENT_COUNT"] !== "N" && isset($ar["ELEMENT_COUNT"])):
                                                            ?> (<span data-role="count_<?=$ar["CONTROL_ID"]?>"><? echo $ar["ELEMENT_COUNT"]; ?></span>)<?
                                                        endif;?></span>
                                                    </label>
                                                <?endforeach?>
                                            </div>
                                        <?
                                        break;
                                        case "P"://DROPDOWN
                                            $checkedItemExist = false;
                                            ?>
                                            <div class="bx-filter-select-container">
                                                <div class="bx-filter-select-block" onclick="smartFilter.showDropDownPopup(this, '<?=CUtil::JSEscape($key)?>')">
                                                    <div class="bx-filter-select-text" data-role="currentOption">
                                                        <?
                                                            foreach ($arItem["VALUES"] as $val => $ar) {
                                                                if ($ar["CHECKED"]) {
                                                                    echo $ar["VALUE"];
                                                                    $checkedItemExist = true;
                                                                }
                                                            }
                                                            if (!$checkedItemExist) {
                                                                echo GetMessage("CT_BCSF_FILTER_ALL");
                                                            }
                                                        ?>
                                                    </div>
                                                    <div class="bx-filter-select-arrow"></div>
                                                    <input
                                                        style="display: none"
                                                        type="radio"
                                                        name="<?=$arCur["CONTROL_NAME_ALT"]?>"
                                                        id="<? echo "all_".$arCur["CONTROL_ID"] ?>"
                                                        value=""
                                                        />
                                                    <?foreach ($arItem["VALUES"] as $val => $ar):?>
                                                        <input
                                                            style="display: none"
                                                            type="radio"
                                                            name="<?=$ar["CONTROL_NAME_ALT"]?>"
                                                            id="<?=$ar["CONTROL_ID"]?>"
                                                            value="<? echo $ar["HTML_VALUE_ALT"] ?>"
                                                            <? echo $ar["CHECKED"]? 'checked="checked"': '' ?>
                                                            />
                                                    <?endforeach?>
                                                    <div class="bx-filter-select-popup" data-role="dropdownContent" style="display: none;">
                                                        <ul>
                                                            <li>
                                                                <label for="<?="all_".$arCur["CONTROL_ID"]?>" class="bx_filter_param_label" data-role="label_<?="all_".$arCur["CONTROL_ID"]?>" onclick="smartFilter.selectDropDownItem(this, '<?=CUtil::JSEscape("all_".$arCur["CONTROL_ID"])?>')">
                                                                    <? echo GetMessage("CT_BCSF_FILTER_ALL"); ?>
                                                                </label>
                                                            </li>
                                                            <? foreach ($arItem["VALUES"] as $val => $ar):
                                                                $class = "";
                                                                if ($ar["CHECKED"])
                                                                    $class.= " selected";
                                                                if ($ar["DISABLED"])
                                                                    $class.= " disabled";
                                                                ?>
                                                                <li>
                                                                    <label for="<?=$ar["CONTROL_ID"]?>" class="bx_filter_param_label<?=$class?>" data-role="label_<?=$ar["CONTROL_ID"]?>" onclick="smartFilter.selectDropDownItem(this, '<?=CUtil::JSEscape($ar["CONTROL_ID"])?>')"><?=$ar["VALUE"]?></label>
                                                                </li>
                                                            <? endforeach ?>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        <?
                                        break;
                                        case "R"://DROPDOWN_WITH_PICTURES_AND_LABELS
                                        ?>
                                            <div class="bx-filter-select-container">
                                                <div class="bx-filter-select-block" onclick="smartFilter.showDropDownPopup(this, '<?=CUtil::JSEscape($key)?>')">
                                                    <div class="bx-filter-select-text fix" data-role="currentOption">
                                                        <?
                                                            $checkedItemExist = false;
                                                            foreach ($arItem["VALUES"] as $val => $ar):
                                                                if ($ar["CHECKED"]) {
                                                                    ?>
                                                                    <?if (isset($ar["FILE"]) && !empty($ar["FILE"]["SRC"])):?>
                                                                        <span class="bx-filter-btn-color-icon" style="background-image:url('<?=$ar["FILE"]["SRC"]?>');"></span>
                                                                    <?endif?>
                                                                    <span class="bx-filter-param-text">
                                                                        <?=$ar["VALUE"]?>
                                                                    </span>
                                                                    <?
                                                                    $checkedItemExist = true;
                                                                }
                                                            endforeach;
                                                            if (!$checkedItemExist) {
                                                                ?><span class="bx-filter-btn-color-icon all"></span> <?
                                                                echo GetMessage("CT_BCSF_FILTER_ALL");
                                                            }
                                                        ?>
                                                    </div>
                                                    <div class="bx-filter-select-arrow"></div>
                                                    <input
                                                        style="display: none"
                                                        type="radio"
                                                        name="<?=$arCur["CONTROL_NAME_ALT"]?>"
                                                        id="<? echo "all_".$arCur["CONTROL_ID"] ?>"
                                                        value=""
                                                        />
                                                    <?foreach ($arItem["VALUES"] as $val => $ar):?>
                                                        <input
                                                            style="display: none"
                                                            type="radio"
                                                            name="<?=$ar["CONTROL_NAME_ALT"]?>"
                                                            id="<?=$ar["CONTROL_ID"]?>"
                                                            value="<?=$ar["HTML_VALUE_ALT"]?>"
                                                            <? echo $ar["CHECKED"]? 'checked="checked"': '' ?>
                                                            />
                                                    <?endforeach?>
                                                    <div class="bx-filter-select-popup" data-role="dropdownContent" style="display: none">
                                                        <ul>
                                                            <li style="border-bottom: 1px solid #e5e5e5;padding-bottom: 5px;margin-bottom: 5px;">
                                                                <label for="<?="all_".$arCur["CONTROL_ID"]?>" class="bx-filter-param-label" data-role="label_<?="all_".$arCur["CONTROL_ID"]?>" onclick="smartFilter.selectDropDownItem(this, '<?=CUtil::JSEscape("all_".$arCur["CONTROL_ID"])?>')">
                                                                    <span class="bx-filter-btn-color-icon all"></span>
                                                                    <? echo GetMessage("CT_BCSF_FILTER_ALL"); ?>
                                                                </label>
                                                            </li>
                                                            <? foreach ($arItem["VALUES"] as $val => $ar):
                                                                $class = "";
                                                                if ($ar["CHECKED"])
                                                                    $class.= " selected";
                                                                if ($ar["DISABLED"])
                                                                    $class.= " disabled";
                                                                ?>
                                                                <li>
                                                                    <label for="<?=$ar["CONTROL_ID"]?>" data-role="label_<?=$ar["CONTROL_ID"]?>" class="bx-filter-param-label<?=$class?>" onclick="smartFilter.selectDropDownItem(this, '<?=CUtil::JSEscape($ar["CONTROL_ID"])?>')">
                                                                        <? if (isset($ar["FILE"]) && !empty($ar["FILE"]["SRC"])): ?>
                                                                            <span class="bx-filter-btn-color-icon" style="background-image:url('<?=$ar["FILE"]["SRC"]?>');"></span>
                                                                        <? endif ?>
                                                                        <span class="bx-filter-param-text">
                                                                        <?=$ar["VALUE"]?>
                                                                    </span>
                                                                    </label>
                                                                </li>
                                                            <? endforeach ?>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        <?
                                        break;
                                        case "K"://RADIO_BUTTONS
                                        ?>
                                            <div class="radio">
                                                <label class="bx_filter_param_label" for="<? echo "all_".$arCur["CONTROL_ID"] ?>">
                                                    <span class="bx_filter_input_checkbox">
                                                        <input
                                                            type="radio"
                                                            value=""
                                                            name="<? echo $arCur["CONTROL_NAME_ALT"] ?>"
                                                            id="<? echo "all_".$arCur["CONTROL_ID"] ?>"
                                                            onclick="smartFilter.click(this)"
                                                            />
                                                        <span class="bx_filter_param_text"><? echo GetMessage("CT_BCSF_FILTER_ALL"); ?></span>
                                                    </span>
                                                </label>
                                            </div>
                                            <? foreach ($arItem["VALUES"] as $val => $ar): ?>
                                                <div class="radio">
                                                    <label data-role="label_<?=$ar["CONTROL_ID"]?>" class="bx_filter_param_label" for="<? echo $ar["CONTROL_ID"] ?>">
                                                            <span class="bx_filter_input_checkbox <? echo $ar["DISABLED"] ? 'disabled': '' ?>">
                                                                <input
                                                                    type="radio"
                                                                    value="<? echo $ar["HTML_VALUE_ALT"] ?>"
                                                                    name="<? echo $ar["CONTROL_NAME_ALT"] ?>"
                                                                    id="<? echo $ar["CONTROL_ID"] ?>"
                                                                    <? echo $ar["CHECKED"]? 'checked="checked"': '' ?>
                                                                    onclick="smartFilter.click(this)"
                                                                    />
                                                                <span class="bx_filter_param_text" title="<?=$ar["VALUE"];?>"><?=$ar["VALUE"];?><?
                                                                    if ($arParams["DISPLAY_ELEMENT_COUNT"] !== "N" && isset($ar["ELEMENT_COUNT"])):
                                                                        ?> (<span data-role="count_<?=$ar["CONTROL_ID"]?>"><? echo $ar["ELEMENT_COUNT"]; ?></span>)<?
                                                                    endif;?></span>
                                                            </span>
                                                    </label>
                                                </div>
                                            <?endforeach;?>
                                        <?
                                        break;
                                        case "U"://CALENDAR
                                        ?>
                                            <div class="bx_filter_parameters_box_container_block"><div class="bx_filter_input_container bx_filter_calendar_container">
                                                    <?
                                                        $APPLICATION->IncludeComponent('bitrix:main.calendar', '', array(
                                                            'FORM_NAME'             => $arResult["FILTER_NAME"]."_form",
                                                            'SHOW_INPUT'            => 'Y',
                                                            'INPUT_ADDITIONAL_ATTR' => 'class="calendar" placeholder="'.FormatDate("SHORT", $arItem["VALUES"]["MIN"]["VALUE"]).'" onkeyup="smartFilter.keyup(this)" onchange="smartFilter.keyup(this)"',
                                                            'INPUT_NAME'            => $arItem["VALUES"]["MIN"]["CONTROL_NAME"],
                                                            'INPUT_VALUE'           => $arItem["VALUES"]["MIN"]["HTML_VALUE"],
                                                            'SHOW_TIME'             => 'N',
                                                            'HIDE_TIMEBAR'          => 'Y',
                                                        ), null, array('HIDE_ICONS' => 'Y'));
                                                    ?>
                                                </div></div>
                                            <div class="bx_filter_parameters_box_container_block"><div class="bx_filter_input_container bx_filter_calendar_container">
                                                    <?
                                                        $APPLICATION->IncludeComponent('bitrix:main.calendar', '', array(
                                                            'FORM_NAME'             => $arResult["FILTER_NAME"]."_form",
                                                            'SHOW_INPUT'            => 'Y',
                                                            'INPUT_ADDITIONAL_ATTR' => 'class="calendar" placeholder="'.FormatDate("SHORT", $arItem["VALUES"]["MAX"]["VALUE"]).'" onkeyup="smartFilter.keyup(this)" onchange="smartFilter.keyup(this)"',
                                                            'INPUT_NAME'            => $arItem["VALUES"]["MAX"]["CONTROL_NAME"],
                                                            'INPUT_VALUE'           => $arItem["VALUES"]["MAX"]["HTML_VALUE"],
                                                            'SHOW_TIME'             => 'N',
                                                            'HIDE_TIMEBAR'          => 'Y',
                                                        ), null, array('HIDE_ICONS' => 'Y'));
                                                    ?>
                                                </div></div>
                                        <?
                                        break;
                                        default://CHECKBOXES
                                        ?>
                                        <?
                                        
//                                         var_dump($arItem);
                                        foreach ($arItem["VALUES"] as $val => $ar): ?>
                                            <? if ($arItem["CODE"] == 'COLOR') { ?>
                                                <div class="bx_filter_input_checkbox panel-collapse text-left collapse in" style="display: inline-block">
                                                    <input
                                                        type="checkbox"
                                                        value="<? echo $ar["HTML_VALUE"] ?>"
                                                        name="<? echo $ar["CONTROL_NAME"] ?>"
                                                        id="<? echo $ar["CONTROL_ID"] ?>"
                                                        <? echo $ar["CHECKED"]? 'checked="checked"': '' ?>
                                                        onclick="smartFilter.click(this)"
                                                        style="display: none;"
                                                        class="b-colorlist__input"
                                                        />
                                                    <label data-role="label_<?=$ar["CONTROL_ID"]?>" class="b-colorlist__label b-colorlist__label--<?=$val?> <? echo $ar["DISABLED"] ? 'disabled': '' ?>" for="<? echo $ar["CONTROL_ID"] ?>"></label>
                                                </div>
                                            <? } elseif (strpos($arItem["CODE"], "AMOUNT") !== false) {?>
                                                <span class="bx_filter_input_checkbox b-checkbox__item">
                                                    <input
                                                        type="checkbox"
                                                        value="<? echo $ar["HTML_VALUE"] ?>"
                                                        name="<? echo $ar["CONTROL_NAME"] ?>"
                                                        id="<? echo $ar["CONTROL_ID"] ?>"
                                                        <? echo $ar["CHECKED"]? 'checked="checked"': '' ?>
                                                        onclick="smartFilter.click(this)"
                                                        style="display: none;"
                                                        />
                                                    <label data-role="label_<?=$ar["CONTROL_ID"]?>" class="bx_filter_param_label <? echo $ar["DISABLED"] ? 'disabled': '' ?>" for="<? echo $ar["CONTROL_ID"] ?>">
                                                        <?=$ar["VALUE"];?>
                                                    </label>
                                                </span>
                                            <?} else { ?>
                                                <span class="bx_filter_input_checkbox b-checkbox__item">
                                                    <input
                                                        type="checkbox"
                                                        value="<? echo $ar["HTML_VALUE"] ?>"
                                                        name="<? echo $ar["CONTROL_NAME"] ?>"
                                                        id="<? echo $ar["CONTROL_ID"] ?>"
                                                        <? echo $ar["CHECKED"]? 'checked="checked"': '' ?>
                                                        onclick="smartFilter.click(this)"
                                                        style="display: none;"
                                                        />
                                                    <label data-role="label_<?=$ar["CONTROL_ID"]?>" class="bx_filter_param_label <? echo $ar["DISABLED"] ? 'disabled': '' ?>" for="<? echo $ar["CONTROL_ID"] ?>">
                                                       <?/*var_dump($ar);*/?> <?=$ar["VALUE"];?>
                                                    </label>
                                                </span>
                                            <? } ?>
                                        <? endforeach; ?>
                                        <?
                                    }
                                    ?>
                                </div>
                                <div style="clear: both"></div>
                            </div>
                            </div>
                        </div>
                        <?
                    }
                ?>
            </div><!--//row-->
            <div >
                <div class="b-filter__block b-filter__block--clear bx-filter-button-box">
                    <div class="bx-filter-block">
                        <div class="bx-filter-parameters-box-container">
                            <input
                                class="btn b-btn__default--apply"
                                type="submit"
                                id="set_filter"
                                name="set_filter"
                                value="<?=GetMessage("CT_BCSF_SET_FILTER")?>"
                                />
                            <a
                                class="b-filter__clear js_filter_clear"

                                /><?=GetMessage("CT_BCSF_DEL_FILTER")?></a>
                            <input
                                style="display: none"
                                type="submit"
                                id="del_filter"
                                name="del_filter"
                                value="<?=GetMessage("CT_BCSF_DEL_FILTER")?>"
                                />
                            <?/*div class="bx-filter-popup-result <?if ($arParams["FILTER_VIEW_MODE"] == "VERTICAL") echo $arParams["POPUP_POSITION"]?>" id="modef" <?if(!isset($arResult["ELEMENT_COUNT"])) echo 'style="display:none"';?> style="display: inline-block;">
                                <?echo GetMessage("CT_BCSF_FILTER_COUNT", array("#ELEMENT_COUNT#" => '<span id="modef_num">'.intval($arResult["ELEMENT_COUNT"]).'</span>'));?>
                                <span class="arrow"></span>
                                <br/>
                                <a href="<?echo $arResult["FILTER_URL"]?>"><?echo GetMessage("CT_BCSF_FILTER_SHOW")?></a>
                            </div*/?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clb"></div>
        </form>
    </div>
</div>
<script>
    var smartFilter = new JCSmartFilter('<?echo CUtil::JSEscape($arResult["FORM_ACTION"])?>', '<?=CUtil::JSEscape($arParams["FILTER_VIEW_MODE"])?>', <?=CUtil::PhpToJSObject($arResult["JS_FILTER_PARAMS"])?>);
</script>