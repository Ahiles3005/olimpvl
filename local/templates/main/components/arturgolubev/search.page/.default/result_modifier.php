<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();
$PREVIEW_WIDTH = intval($arParams["PREVIEW_WIDTH"]);
if ($PREVIEW_WIDTH <= 0)
	$PREVIEW_WIDTH = 120;

$PREVIEW_HEIGHT = intval($arParams["PREVIEW_HEIGHT"]);
if ($PREVIEW_HEIGHT <= 0)
	$PREVIEW_HEIGHT = 100;

foreach($arResult["SEARCH"] as $arItem){
	if($arItem["MODULE_ID"] == "iblock" && substr($arItem["ITEM_ID"], 0, 1) !== "S")
	{
		$arResult["ELEMENTS"][$arItem["ITEM_ID"]] = $arItem["ITEM_ID"];
	}
	elseif($arItem["MODULE_ID"] == "iblock" && substr($arItem["ITEM_ID"], 0, 1) == "S")
	{
		$arResult["SECTIONS"][$arItem["ITEM_ID"]] = str_replace('S', '', $arItem["ITEM_ID"]);
	}
}

if (!empty($arResult["ELEMENTS"]) && CModule::IncludeModule("iblock"))
{
	$arConvertParams = array();
	if ('Y' == $arParams['CONVERT_CURRENCY'])
	{
		if (!CModule::IncludeModule('currency'))
		{
			$arParams['CONVERT_CURRENCY'] = 'N';
			$arParams['CURRENCY_ID'] = '';
		}
		else
		{
			$arCurrencyInfo = CCurrency::GetByID($arParams['CURRENCY_ID']);
			if (!(is_array($arCurrencyInfo) && !empty($arCurrencyInfo)))
			{
				$arParams['CONVERT_CURRENCY'] = 'N';
				$arParams['CURRENCY_ID'] = '';
			}
			else
			{
				$arParams['CURRENCY_ID'] = $arCurrencyInfo['CURRENCY'];
				$arConvertParams['CURRENCY_ID'] = $arCurrencyInfo['CURRENCY'];
			}
		}
	}

	if (is_array($arParams["PRICE_CODE"]))
		$arResult["PRICES"] = CIBlockPriceTools::GetCatalogPrices(0, $arParams["PRICE_CODE"]);
	else
		$arResult["PRICES"] = array();

	$arParams['PRICE_VAT_INCLUDE'] = $arParams['PRICE_VAT_INCLUDE'] === 'Y';


	$arSelect = array(
		"ID",
		"IBLOCK_ID",
		"PREVIEW_TEXT",
		"PREVIEW_PICTURE",
		"DETAIL_PICTURE",
	);
	$arFilter = array(
		"IBLOCK_LID" => SITE_ID,
		"IBLOCK_ACTIVE" => "Y",
		"ACTIVE_DATE" => "Y",
		"ACTIVE" => "Y",
		"CHECK_PERMISSIONS" => "Y",
		"MIN_PERMISSION" => "R",
	);
	foreach($arResult["PRICES"] as $value)
	{
		$arSelect[] = $value["SELECT"];
		$arFilter["CATALOG_SHOP_QUANTITY_".$value["ID"]] = 1;
	}
	$arFilter["=ID"] = $arResult["ELEMENTS"];
	$arResult["ELEMENTS"] = array();
	$rsElements = CIBlockElement::GetList(array(), $arFilter, false, false, $arSelect);
	while($arElement = $rsElements->Fetch())
	{
		$arElement["PROPS"] = array();
		if(!empty($arParams["SHOW_PROPS"])){
			foreach($arParams["SHOW_PROPS"] as $prop){
				$prop = IntVal(trim($prop));
				if(!$prop) continue;

				$tmp = array();
				$vals = array();

				$db_props = CIBlockElement::GetProperty($arElement["IBLOCK_ID"], $arElement["ID"], array("sort" => "asc"), Array("ID"=>$prop));
				while($ar_props = $db_props->Fetch())
				{
					$tmp = $ar_props;

					if($ar_props["VALUE"])
						$vals[] = $ar_props["VALUE"];
				}
				$tmp["VALUE"] = $vals;

				$arElement["PROPS"][] = $tmp;
			}
		}

		$arElement["PRICES"] = CIBlockPriceTools::GetItemPrices($arElement["IBLOCK_ID"], $arResult["PRICES"], $arElement, $arParams['PRICE_VAT_INCLUDE'], $arConvertParams);



		$arCatalog = CCatalogSku::GetInfoByIBlock($arElement["IBLOCK_ID"]);
		if (!empty($arCatalog) && is_array($arCatalog))
		{
			$bIBlockCatalog = $arCatalog['CATALOG_TYPE'] != CCatalogSku::TYPE_PRODUCT;
			$existIblockOffers = $arCatalog['CATALOG_TYPE'] == CCatalogSku::TYPE_FULL || $arCatalog['CATALOG_TYPE'] == CCatalogSku::TYPE_PRODUCT;
		}

		if($existIblockOffers && $arElement['CATALOG_TYPE'] == \Bitrix\Catalog\ProductTable::TYPE_SKU)
		{
			$offersFilter = array(
				'IBLOCK_ID' => $arElement['IBLOCK_ID'],
				'HIDE_NOT_AVAILABLE' => $arParams['HIDE_NOT_AVAILABLE']
			);
			if (!$arParams["USE_PRICE_COUNT"])
				$offersFilter['SHOW_PRICE_COUNT'] = $arParams['SHOW_PRICE_COUNT'];

			$arOffers = CIBlockPriceTools::GetOffersArray(
				$offersFilter,
				array($arElement["ID"]),
				array(),
				$arParams["OFFERS_FIELD_CODE"],
				$arParams["OFFERS_PROPERTY_CODE"],
				$arParams["OFFERS_LIMIT"],
				$arResult["PRICES"],
				$arParams['PRICE_VAT_INCLUDE'],
				$arConvertParams
			);
			if (!empty($arOffers))
			{
				$uniqueSortHash = array();
				foreach ($arOffers as &$arOffer)
				{
					$uniqueSortHash[$arOffer['SORT_HASH']] = true;
					unset($arOffer['SORT_HASH']);

					$arElement["OFFERS"][] = $arOffer;
					if ($arElement['OFFER_ID_SELECTED'] == 0 && $arOffer['CAN_BUY'])
						$arElement['OFFER_ID_SELECTED'] = $arOffer['ID'];
				}
				unset($arOffer);
				if (count($uniqueSortHash) < 2)
					$arElement['OFFER_ID_SELECTED'] = 0;
				unset($uniqueSortHash);
			}
			unset($arOffers);
		}

		$arResult["ELEMENTS"][$arElement["ID"]] = $arElement;
	}
}



if (!empty($arResult["SECTIONS"]) && CModule::IncludeModule("iblock"))
{
	$arFilter = array(
		"IBLOCK_LID" => SITE_ID,
		"IBLOCK_ACTIVE" => "Y",
		"ACTIVE_DATE" => "Y",
		"ACTIVE" => "Y",
		"CHECK_PERMISSIONS" => "Y",
		"MIN_PERMISSION" => "R",
	);
	$arFilter["=ID"] = $arResult["SECTIONS"];

	$arSelect = array(
		"ID",
		"IBLOCK_ID",
		"PICTURE",
		"DESCRIPTION",
	);

	$db_list = CIBlockSection::GetList(Array($by=>$order), $arFilter, false, $arSelect);
	while($ar_result = $db_list->GetNext())
	{
		$arResult["SECTIONS"]["S".$ar_result["ID"]] = $ar_result;
	}
}

foreach($arResult["SEARCH"] as $i=>&$arItem)
{
	if($arResult["sphrase_id"])
	{
		$arItem["URL"] = $arItem["URL"] . (strstr($arItem["URL"], '?') === false ? '?' : '&') . 'sphrase_id='.$arResult["sphrase_id"];
	}


	if(!empty($arResult["ELEMENTS"][$arItem["ITEM_ID"]])) {
		$arElement = $arResult["ELEMENTS"][$arItem["ITEM_ID"]];

		if(isset($arElement['OFFER_ID_SELECTED'])) {
			$arItem['PRICES'] = $arElement['OFFERS'][$arElement['OFFER_ID_SELECTED']]['PRICES'];
		} else {
			$arItem['PRICES'] = $arElement['PRICES'];
		}
	}


	if($arItem["MODULE_ID"] == "iblock" && !empty($arResult["ELEMENTS"][$arItem["ITEM_ID"]]))
	{
		$arElement = $arResult["ELEMENTS"][$arItem["ITEM_ID"]];

		if ($arElement["PREVIEW_PICTURE"] > 0)
			$arItem["PICTURE"] = CFile::ResizeImageGet($arElement["PREVIEW_PICTURE"], array("width"=>$PREVIEW_WIDTH, "height"=>$PREVIEW_HEIGHT), BX_RESIZE_IMAGE_PROPORTIONAL, true);
		elseif ($arElement["DETAIL_PICTURE"] > 0)
			$arItem["PICTURE"] = CFile::ResizeImageGet($arElement["DETAIL_PICTURE"], array("width"=>$PREVIEW_WIDTH, "height"=>$PREVIEW_HEIGHT), BX_RESIZE_IMAGE_PROPORTIONAL, true);

	}
	elseif($arItem["MODULE_ID"] == "iblock" && !empty($arResult["SECTIONS"][$arItem["ITEM_ID"]]))
	{
		$arElement = $arResult["SECTIONS"][$arItem["ITEM_ID"]];

		if ($arElement["PICTURE"] > 0)
			$arItem["PICTURE"] = CFile::ResizeImageGet($arElement["PICTURE"], array("width"=>$PREVIEW_WIDTH, "height"=>$PREVIEW_HEIGHT), BX_RESIZE_IMAGE_PROPORTIONAL, true);

	}
}
unset($arItem);
