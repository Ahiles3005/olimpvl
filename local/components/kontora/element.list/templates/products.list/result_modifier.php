<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

$arParams['ELEMENT_SORT_FIELD'] = "id";
$arParams['ELEMENT_SORT_ORDER'] = "asc";
$obCatalog = new CCatalog;
$arCatalog = $obCatalog->GetByID(IBLOCK_ID_OFFERS);
$intSKUProperty = $arCatalog['SKU_PROPERTY_ID'];

$keyCity = $arParams["CITY_CODE"];
$arPrices = CIBlockPriceTools::GetCatalogPrices(IBLOCK_ID_CATALOG, array($keyCity));
$priceTypeID = $arPrices[$keyCity]["ID"];

$arOffers = CIBlockPriceTools::GetOffersArray(
    array("IBLOCK_ID" => IBLOCK_ID_CATALOG, "ACTIVE" => "Y"),
    $arResult["ELEMENTS"],
    array("catalog_PRICE_" . $priceTypeID => "asc"),
    array("ID", "IBLOCK_ID", "catalog_PRICE_" . $priceTypeID),
    array("PROPERTY_" . $intSKUProperty),
    1,
    $arPrices,
    false,
    array(),
    0,
    SITE_ID
);

foreach ($arOffers as $offer) {
	$productOffers[$offer["PROPERTY_14_VALUE"]] = $offer;
}

$arBrandID = array();
foreach ($arResult["ITEMS"] as $key => $arItem) {
	if($productOffers[$arItem["ID"]]["MIN_PRICE"]["DISCOUNT_VALUE"]){
		$arResult["ITEMS"][$key]["MIN_PRICE"] = $productOffers[$arItem["ID"]]["MIN_PRICE"];
	}else{
		unset($arResult["ITEMS"][$key]);
	}
}

if (!empty($arResult['ITEMS'])) {
    $arItemsId = array();
    $arNewItemsList = array();
    foreach ($arResult['ITEMS'] as $key => $arItem) {
        $mainPicKey = getMainPictureKey($arItem["PROPERTIES"]["PICTURES"]["DESCRIPTION"]);
        $picture = CFile::ResizeImageGet($arItem['PROPERTIES']['PICTURES']['VALUE'][$mainPicKey], array('width' => 270, 'height' => 270), BX_RESIZE_IMAGE_PROPORTIONAL, false)['src'];
        if (empty($picture)) $picture = DEF_PIC_LIST;
        $arResult['ITEMS'][$key]["PICTURE"] = $picture;
        $arItemsId[$arItem['ID']] = $arItem['IBLOCK_SECTION_ID'];
    }
}
$arResult['STICKERS'] = getItemStickers($arItemsId);

