<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

// Избранное и соц сети
ob_start();
	//---Проверка добавлен ли товар в избранное
	$resBasketItems = \Olimp\Favorite::favoriteGetList($arResult["PRODUCT"]["ID"]);
	foreach ($resBasketItems as $arItem) {
	    $resBasketItems[] = $arItem["PRODUCT_ID"];
	}
	$arResult["FAVORITE"] = $resBasketItems; 

	$arResult["SOCIAL_SHARE_BLOCK"] = Olimp\Catalog::getSocialShareCount($arResult["DETAIL_PAGE_URL"], $arResult['NAME'], $arResult['DETAIL_TEXT'], $arResult['PICTURE']); ?>

	<? if (in_array($arResult["PRODUCT"]["ID"], $arResult["FAVORITE"])): ?>
	    <a href="javascript:void(0)"
	        data-action="remove"
	        data-product="<?=$arResult['PRODUCT']['ID']?>"
	        data-price_code="<?=$arParams['PRICE_CODE'][0]?>"
	        class="b-link__add-favorites b-link__add-favorites--button b-link__add-favorites--button-active"
	        title="В избранном"
            style="display: none"<?//2 спринт?>
	    ><span class="text-link">В избранном</span></a>
	<? else: ?>
	    <a href="javascript:void(0)"
	        data-action="add"
	        data-product="<?=$arResult['PRODUCT']['ID']?>"
	        data-price_code="<?=$arParams['PRICE_CODE'][0]?>"
	        class="b-link__add-favorites b-link__add-favorites--button"
            style="display: none"<?//2 спринт?>
	        title="В избранное"
	    ><span class="text-link">В избранное</span></a>
	<? endif; ?>
	<div class="b-product-info__social">
        <ul class="b-product-info__social-list">
            <li class="b-product-info__social-item">
                <a href="<?= $arResult["SOCIAL_SHARE_BLOCK"]["SOCIAL_URL"]["FACEBOOK"] ?>"
                   onclick="return Share.me(this);"
                   class="b-product-info__social-link b-product-info__social-link--fb"
                   title=""><?=$arResult["SOCIAL_SHARE_BLOCK"]["SOCIAL_COUNT"]["FACEBOOK"] ?></a>
            </li>
            <li class="b-product-info__social-item">
                <a href="<?= $arResult["SOCIAL_SHARE_BLOCK"]["SOCIAL_URL"]["VK"] ?>"
                   onclick="return Share.me(this);"
                   class="b-product-info__social-link b-product-info__social-link--vk"
                   title=""><?= $arResult["SOCIAL_SHARE_BLOCK"]["SOCIAL_COUNT"]["VK"] ?></a>
            </li>
            <li class="b-product-info__social-item">
                <a href="<?= $arResult["SOCIAL_SHARE_BLOCK"]["SOCIAL_URL"]["OK"] ?>"
                   class="b-product-info__social-link b-product-info__social-link--ok" title=""
                   onclick="return Share.me(this);"><?= $arResult["SOCIAL_SHARE_BLOCK"]["SOCIAL_COUNT"]["OK"] ?></a>
            </li>
            <li class="b-product-info__social-item" style = "vertical-align: top;">
                <a href="<?= $arResult["SOCIAL_SHARE_BLOCK"]["SOCIAL_URL"]["TWITTER"] ?>"
                   class="b-product-info__social-link b-product-info__social-link--tw" title=""
                   onclick="return Share.me(this)"></a>
            </li>
        </ul>
    </div>

    <?
	$retrunStr = @ob_get_contents();
ob_get_clean();

echo preg_replace(
	"/#FAVORITE_AND_SOCIALS#/is",
	$retrunStr,
	$arResult["CACHED_TPL"]
);
if ($_REQUEST["ajax"] && $_REQUEST["ajax"]=="Y")
{
    $APPLICATION->restartbuffer();
    echo $retrunStr;
}
if ($_REQUEST["ajax"] && $_REQUEST["ajax"]=="Y") die();

global $goods_chain_info;

// Хлебные крошки
if (is_array($arResult) && isset($arResult['PROPERTIES']["ARTICUL"]["VALUE"])) {
    $goods_chain_info = array(
        'NAME'            => "Арт. " . $arResult['PROPERTIES']["ARTICUL"]["VALUE"],
        'DETAIL_PAGE_URL' => ''
    );
}