<?
/** @global CMain $APPLICATION
 * @global CUser $USER
 * @global array $arParams */
use Bitrix\Main\Loader;
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

$arParams["VIEWED_COUNT"] = IntVal($arParams["VIEWED_COUNT"]);
if ($arParams["VIEWED_COUNT"] <= 0)
	$arParams["VIEWED_COUNT"] = 5;
$arParams["VIEWED_IMG_HEIGHT"] = IntVal($arParams["VIEWED_IMG_HEIGHT"]);
if($arParams["VIEWED_IMG_HEIGHT"] <= 0)
	$arParams["VIEWED_IMG_HEIGHT"] = 150;
$arParams["VIEWED_IMG_WIDTH"] = IntVal($arParams["VIEWED_IMG_WIDTH"]);
if ($arParams["VIEWED_IMG_WIDTH"] <= 0)
	$arParams["VIEWED_IMG_WIDTH"] = 150;

if($arParams["SET_TITLE"] == "Y")
	$APPLICATION->SetTitle(GetMessage("VIEW_TITLE"));

$arParams["VIEWED_NAME"] = (($arParams["VIEWED_NAME"] == "Y") ? "Y" : "N");
$arParams["VIEWED_IMAGE"] = (($arParams["VIEWED_IMAGE"] == "Y") ? "Y" : "N");
$arParams["VIEWED_PRICE"] = (($arParams["VIEWED_PRICE"] == "Y") ? "Y" : "N");

if (!isset($arParams["VIEWED_CURRENCY"]) || strlen($arParams["VIEWED_CURRENCY"]) <= 0)
	$arParams["VIEWED_CURRENCY"] = "default";

$arResult = array();
$arFilter = array();

if (!Loader::includeModule('sale'))
{
	ShowError(GetMessage("VIEWE_NOT_INSTALL"));
	return;
}

if (!Loader::includeModule('catalog'))
{
	ShowError(GetMessage("VIEWCATALOG_NOT_INSTALL"));
	return;
}

$fuserId = (int)CSaleBasket::GetBasketUserID(true);
$newUser = $fuserId <= 0;

if (!$newUser)
{
	$arFilter = array(
		'LID' => SITE_ID,
		'FUSER_ID' => $fuserId
	);
}
unset($fuserId);

//add to basket
if (isset($_REQUEST[$arParams["ACTION_VARIABLE"]]) && isset($_REQUEST[$arParams["PRODUCT_ID_VARIABLE"]]))
{
	if("BUY" ==  $_REQUEST[$arParams["ACTION_VARIABLE"]])
		$action = "BUY";
	elseif("ADD2BASKET" == $_REQUEST[$arParams["ACTION_VARIABLE"]])
		$action = "ADD2BASKET";
	else
		$action = ToUpper($_REQUEST[$arParams["ACTION_VARIABLE"]]);

	$productID = intval($_REQUEST[$arParams["PRODUCT_ID_VARIABLE"]]);
	if ($productID > 0)
	{
		//get props sku
		$product_properties = array();
		$arPropsSku = array();

		$arParentSku = CCatalogSku::GetProductInfo($productID);
		if (!empty($arParentSku) && is_array($arParentSku))
		{
			$dbProduct = CIBlockElement::GetList(array(), array("ID" => $productID), false, false, array('IBLOCK_ID', 'IBLOCK_SECTION_ID'));
			$arProduct = $dbProduct->Fetch();

			$dbOfferProperties = CIBlock::GetProperties($arProduct["IBLOCK_ID"], array(), array("!XML_ID" => "CML2_LINK"));
			while($arOfferProperties = $dbOfferProperties->Fetch())
				$arPropsSku[] = $arOfferProperties["CODE"];

			$product_properties = CIBlockPriceTools::GetOfferProperties(
				$productID,
				$arParentSku["IBLOCK_ID"],
				$arPropsSku
			);
		}

		if (($action == "ADD2BASKET" || $action == "BUY") && $productID > 0)
		{
			Add2BasketByProductID($productID, 1, array(), $product_properties);

			if ($action == "BUY")
				LocalRedirect($arParams["BASKET_URL"]);
			else
				LocalRedirect($APPLICATION->GetCurPageParam("", array($arParams["PRODUCT_ID_VARIABLE"], $arParams["ACTION_VARIABLE"])));
		}
	}
}//end add to basket

$arViewed = array();
$arViewedId = array();
$arElementSort = array();
if (!$newUser)
{
	$db_res = CSaleViewedProduct::GetList(
		array(
			"DATE_VISIT" => "DESC"
		),
		$arFilter,
		false,
		array(
			"nTopCount" => $arParams["VIEWED_COUNT"]
		),
		array('ID', 'IBLOCK_ID', 'PRICE', 'CURRENCY', 'CAN_BUY', 'PRODUCT_ID', 'DATE_VISIT', 'DETAIL_PAGE_URL', 'NAME')
	);
	while ($arItems = $db_res->Fetch())
	{
		$arViewedId[] = $arItems["PRODUCT_ID"];
		$arViewed[] = $arItems;
	}
}

//check catalog
if (!empty($arViewedId))
{
    $arProps = array();
    $arFilter = array("IBLOCK_ID" => IBLOCK_ID_CATALOG, "ID" => $arViewedId);
    $res = CIBlockElement::GetList(array("ID" => "asc"), $arFilter, false, false, array("ID", "IBLOCK_ID"));
    while ($ob = $res->GetNextElement()) {
        $arFields = $ob->GetFields();
        $arProps[$arFields["ID"]] = $ob->GetProperties(array(),array("CODE" => "PICTURES"));
    }

    foreach($arViewed as $key => $arItem){
        $arViewed[$key]["PROPERTIES"] = $arProps[$arItem["PRODUCT_ID"]];
    }

	$arResult = $arViewed;

	$obCatalog = new CCatalog;
	$arCatalog = $obCatalog->GetByID(IBLOCK_ID_OFFERS);
	$intSKUProperty = $arCatalog['SKU_PROPERTY_ID'];

	$keyCity = $arParams["KEY_CITY"];
	$arPrices = CIBlockPriceTools::GetCatalogPrices(IBLOCK_ID_CATALOG, array($keyCity));
	$priceTypeID = $arPrices[$keyCity]["ID"];

	$arOffers = CIBlockPriceTools::GetOffersArray(
		array("IBLOCK_ID" => IBLOCK_ID_CATALOG, "ACTIVE" => "Y"),
		$arViewedId,
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

	foreach ($arResult as $key => $arItem) {
		if($productOffers[$arItem["PRODUCT_ID"]]["MIN_PRICE"]["DISCOUNT_VALUE"]){
			$arResult[$key]["PRICE"] = $productOffers[$arItem["PRODUCT_ID"]]["MIN_PRICE"]["DISCOUNT_VALUE"];
		}else{
			unset($arResult[$key]);
		}
	}

    if (!empty($arResult)) {
		$arNewItemsList = array();
		foreach ($arResult as $key => $arItem) {
			$mainPicKey = getMainPictureKey($arItem["PROPERTIES"]["PICTURES"]["DESCRIPTION"]);
			$picture = CFile::ResizeImageGet($arItem['PROPERTIES']['PICTURES']['VALUE'][$mainPicKey], array('width' => $arParams["VIEWED_IMG_WIDTH"], 'height' => $arParams["VIEWED_IMG_HEIGHT"]), BX_RESIZE_IMAGE_PROPORTIONAL, false)['src'];
			if (empty($picture)) $picture = DEF_PIC_LIST;
			$arResult[$key]["PICTURE"] = $picture;
		}
	}
}

$this->IncludeComponentTemplate();