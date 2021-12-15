<? include($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_before.php");
//2 спринт
/*
CModule::IncludeModule("sale");

$ID = $_REQUEST["id"];

if ($ID > 0) {
    $res = false;

    $resBasketItems = \Olimp\Favorite::favoriteGetList($ID);

    foreach ($resBasketItems as $arItem) {
        $res[] = $arItem["PRODUCT_ID"];
    }
    $in_favorite = false;

    if ((!in_array($ID, $res))) {
        if ($_REQUEST["action"] == "check") {
            ?>
            <a href="javascript:void(0)"
                data-action="add"
                data-product="<?=$ID?>"
                data-price_code="<?=$_REQUEST['price_code']?>"
                class="b-link__add-favorites b-link__add-favorites--button"
                title="В избранное"
            ><span class="text-link">В избранное</span></a>
            <?
        } else {
            \Olimp\Favorite::addToFavoriteByID($ID, $_REQUEST['price_code']);
            ?>
            <a href="javascript:void(0)"
                data-action="remove"
                data-product="<?=$ID?>"
                data-price_code="<?=$_REQUEST['price_code']?>"
                class="b-link__add-favorites b-link__add-favorites--button b-link__add-favorites--button-active"
                title="В избранном"
            ><span class="text-link">В избранном</span></a>
            <?
        }
    } else {
        if ($_REQUEST["action"] == "check") {
            ?>
            <a href="javascript:void(0)"
                data-action="remove"
                data-product="<?=$ID?>"
                data-price_code="<?=$_REQUEST['price_code']?>"
                class="b-link__add-favorites b-link__add-favorites--button b-link__add-favorites--button-active"
                title="В избранном"
            ><span class="text-link">В избранном</span></a>
            <?
        } else {
            \Olimp\Favorite::removeFromFavoriteByID($ID);
            ?>
            <a href="javascript:void(0)"
                data-action="add"
                data-product="<?=$ID?>"
                data-price_code="<?=$_REQUEST['price_code']?>"
                class="b-link__add-favorites b-link__add-favorites--button"
                title="В избранное"><span class="text-link">В избранное</span></a>
            <?
        }
    }
}
*/
