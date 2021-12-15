<?
include($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_before.php");
CModule::IncludeModule("catalog");

if (!empty($_REQUEST["text"])) {
    $el = new CIBlockElement;
    $PROP = array();
    if (!empty($_REQUEST["vote"])) {
        $property_enums = CIBlockPropertyEnum::GetList(
            array(
                "DEF"  => "DESC",
                "SORT" => "ASC"
            ),
            array(
                "IBLOCK_ID" => IBLOCK_ID_RESPONSE,
                "CODE"      => "PRODUCT_RATING"
            )
        );

        while ($enum_fields = $property_enums->GetNext()) {
            $voteValue = $_REQUEST["vote"];
            if ($voteValue == $enum_fields["VALUE"]) {
                $PROP["PRODUCT_RATING"] = array("VALUE" => $enum_fields["ID"]);
            }
        }
    }

    $keyCity = (empty($_COOKIE['KEY_CITY'])) ? Olimp\City::getDefaultCityCode() : $_COOKIE['KEY_CITY'];
    if (!empty($keyCity)) {
        $cityName = "";
        $arSelect = array("ID", "IBLOCK_ID", "NAME");
        $arFilter = array(
            "IBLOCK_ID"    => IBLOCK_ID_GEO_CITY,
            "PROPERTY_key" => $keyCity
        );
        $res = CIBlockElement::GetList(array(), $arFilter, false, false, $arSelect);
        if ($ob = $res->GetNextElement()) {
            $arFields = $ob->GetFields();
            $PROP["CITY"] = $arFields["ID"];
            $cityName = $arFields["NAME"];
        }
    }

    if (!empty($_REQUEST["product"])) {
        $PROP["PRODUCT"] = $_REQUEST["product"];
    }
    
    
    if (!empty($_REQUEST["UNAME"])) {
        $PROP["UNAME"] = strip_tags($_REQUEST["UNAME"]);
    }
    
    

    $arLoadProductArray = array(
        "MODIFIED_BY"       => $USER->GetID(),
        "IBLOCK_SECTION_ID" => false,
        "IBLOCK_ID"         => IBLOCK_ID_RESPONSE,
        "PROPERTY_VALUES"   => $PROP,
        "NAME"              => "Отзыв №" . rand(0, 100),
        "ACTIVE"            => "Y",
        "PREVIEW_TEXT"      => $_REQUEST["text"]
    );


    if ($PRODUCT_ID = $el->Add($arLoadProductArray)):?>
        <div class="b-tab-review__user-list">
            <div class="b-tab-review__user-item">
                <div class="b-tab-review__user-info">
                    <p class="b-tab-review__name"><?= !empty($PROP["UNAME"])?$PROP["UNAME"]:$USER->GetFirstName() ?><? if (!empty($cityName)) echo " (" . $cityName . ")"; ?></p>

                    <p class="b-tab-review__date"><?= date('d.m.Y') ?></p>

                    <p class="b-tab-review__rating">Оценка:</p>
                    <ol class="b-tab-review__star-rating_by_user">
                        <? for ($count = 0; $count != 5; $count++): ?>
                            <? if ($_REQUEST["vote"] > $count): ?>
                                <li class="b-tab-review__star_by_user"></li>
                            <? else: ?>
                                <li class="b-tab-review__star_by_user--nostar"></li>
                            <? endif ?>
                        <? endfor ?>
                    </ol>
                </div>
            </div>
            <div class="b-tab-review__user-item">
                <p class="b-tab-review__review"><?= (!empty($_REQUEST['text'])) ? $_REQUEST["text"] : "" ?> </p>
            </div>
        </div>
    <? endif ?>
<? } ?>