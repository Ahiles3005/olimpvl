<?php

if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true) die();

if(!isset($arParams["CACHE_TIME"]))
	$arParams["CACHE_TIME"] = 36000000;

if (!isset($arParams['GROUP_BY']))
	$arParams['GROUP_BY'] = false;

$arSelect = (isset($arParams['SELECT']) && !empty($arParams['SELECT']))?$arParams['SELECT']:array();
$arOrder = (isset($arParams['ORDER']) && !empty($arParams['ORDER']))?$arParams['ORDER']:array('sort' => 'asc');
$arNavParams = (isset($arParams['ELEMENT_COUNT']) && !empty($arParams['ELEMENT_COUNT']))?array("nPageSize" => $arParams["ELEMENT_COUNT"]):false;
$arParams["IBLOCK_ID"] = trim($arParams["IBLOCK_ID"]);

$arFilter = array('IBLOCK_ID' => $arParams["IBLOCK_ID"], 'ACTIVE' => 'Y');
if (!empty($arParams['FILTER']))
	$arFilter = array_merge($arFilter, $arParams['FILTER']);

if ($this->StartResultCache(false)) {
	if (!CModule::IncludeModule("iblock")) {
		$this->AbortResultCache();
		ShowError(GetMessage("IBLOCK_MODULE_NOT_INSTALLED"));
		return;
	}
	
	$arResult['ITEMS'] = array();
	$arResult['ELEMENTS'] = array();

	$res = CIBlockElement::GetList($arOrder, $arFilter, $arParams['GROUP_BY'], $arNavParams, $arSelect);
	while ($ob = $res->GetNextElement()) {
		$arFields = $ob->GetFields();
		$arProps = array();
		if ($arParams['PROPS'] == 'Y'){
			$arFields['PROPERTIES'] = $ob->GetProperties();
		}elseif(is_array($arParams['PROPS'])){
			$arFields['PROPERTIES'] = $ob->GetProperties(array(), $arParams['PROPS']);
		}

		$arFields['PREVIEW_PICTURE'] = array(
			'ID'  => $arFields['PREVIEW_PICTURE'],
			'SRC' => CFile::GetPath($arFields['PREVIEW_PICTURE'])
		);
		$arFields['DETAIL_PICTURE'] = array(
			'ID'  => $arFields['DETAIL_PICTURE'],
			'SRC' => CFile::GetPath($arFields['DETAIL_PICTURE'])
		);
		$arResult['ITEMS'][] = array_merge($arFields);
		$arResult['ELEMENTS'][] = $arFields["ID"];
	}

	//для recommended и similar
	if(($componentTemplate == "similar" || $componentTemplate == "recommended") && (!empty($arResult["ELEMENTS"]))){
		if($componentTemplate == "similar"){
			$pictureTemplateEmpty = DEF_PIC_SIM;
		}else{
			$pictureTemplateEmpty = DEF_PIC_REC;
		}

		$obCatalog = new CCatalog;
		$arCatalog = $obCatalog->GetByID(IBLOCK_ID_OFFERS);
		$intSKUProperty = $arCatalog['SKU_PROPERTY_ID'];

		$keyCity = $arParams["CITY_CODE"];
		$arPrices = CIBlockPriceTools::GetCatalogPrices(IBLOCK_ID_CATALOG, array($keyCity));
		$priceTypeID = $arPrices[$keyCity]["ID"];


		//измененная часть для задачи 35358
		//получаем ids
		$arSelect = Array("ID");
		$arFilter = Array("IBLOCK_ID"=>IntVal(IBLOCK_ID_OFFERS), "ACTIVE_DATE"=>"Y", "ACTIVE"=>"Y", "PROPERTY_CML2_LINK"=>$arResult["ELEMENTS"]);
		$res = CIBlockElement::GetList(Array(), $arFilter, false, false, $arSelect);
		while($ob = $res->GetNext())
		{
			$ids[] = $ob["ID"];
		}

		//получение по торговым предложениям количества
		$arProductNumberOfStores = Olimp\Catalog::getCountStoreWithProduct($ids, $keyCity);

		foreach($arProductNumberOfStores as $key => $count){
			if($count > 0){
				$offerWithProduct[] = $key;
			}
		}

		$arOffers = Olimp\CatalogWithOfferWork::getOffersArrayFilterOffersId(
			array("IBLOCK_ID" => IBLOCK_ID_CATALOG, "ACTIVE" => "Y"),
			$offerWithProduct,
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
		//конец измененной части

		foreach ($arOffers as $offer) {
			$productOffers[$offer["PROPERTY_14_VALUE"]] = $offer;
		}

		$arBrandID = array();
		foreach ($arResult["ITEMS"] as $key => $arItem) {
			if($productOffers[$arItem["ID"]]["MIN_PRICE"]["DISCOUNT_VALUE"]){
				$arResult["ITEMS"][$key]["MIN_PRICE"]["VALUE"] = $productOffers[$arItem["ID"]]["MIN_PRICE"]["DISCOUNT_VALUE"];
			}else{
				unset($arResult["ITEMS"][$key]);
			}
		}

		if (!empty($arResult['ITEMS'])) {
			$arNewItemsList = array();
			foreach ($arResult['ITEMS'] as $key => $arItem) {
				$mainPicKey = getMainPictureKey($arItem["PROPERTIES"]["PICTURES"]["DESCRIPTION"]);
				$picture = CFile::ResizeImageGet($arItem['PROPERTIES']['PICTURES']['VALUE'][$mainPicKey], array('width' => 170, 'height' => 170), BX_RESIZE_IMAGE_PROPORTIONAL, false)['src'];
				if (empty($picture)) $picture = $pictureTemplateEmpty;
				$arResult['ITEMS'][$key]["PICTURE"] = $picture;
			}
		}
	}elseif(($componentTemplate == "store.amount") && ($arParams["PRODUCT_ID"])){
		$arCity = array();
		$arStrCity = array();
		$keyCity = -1;
		$PRODUCT_ID = $arParams["PRODUCT_ID"];
		$arStoreID = array();
		$arAmount = array();

		$rsStore = CCatalogStoreProduct::GetList(array(), array('PRODUCT_ID' => $PRODUCT_ID, '>AMOUNT' => 0), false, false, array('AMOUNT', "STORE_ID"));
		while ($arStore = $rsStore->Fetch()) {
			$arAmount[$arStore["STORE_ID"]] = $arStore["AMOUNT"];
		}

		foreach ($arResult["ITEMS"] as $key => $arStore) {
			$amount = false;

			if (!in_array($arStore["PROPERTIES"]["REF_CITY"]["VALUE"], $arStrCity)) {
				$keyCity++;
				$arResult["CITIES"][$keyCity] = array(
					"NAME" => $arStore["PROPERTY_REF_CITY_NAME"],
					"AMOUNT" => false,
				);
				$arStrCity[] = $arStore["PROPERTIES"]["REF_CITY"]["VALUE"];
			}

			$arResult["CITIES"][$keyCity]["SHOPS"][$key] = array(
				"NAME" => $arResult["ITEMS"][$key]["NAME"],
				"ADDRESS" => $arResult["ITEMS"][$key]["PROPERTIES"]["ADDRESS"]["VALUE"],
				"SCHEDULE" => $arResult["ITEMS"][$key]["PROPERTIES"]["SCHEDULE"]["VALUE"],
				"PHONE" => $arResult["ITEMS"][$key]["PROPERTIES"]["PHONE"]["VALUE"],
				"AMOUNT" => false,
				"ID" => $arResult["ITEMS"][$key]["ID"]
			);

			foreach ($arStore["PROPERTIES"]["REF_STORE"]["VALUE_XML_ID"] as $value) {
				$storeAmount = ($arAmount[$value]) ? $arAmount[$value] : 0;
				if ($storeAmount > 0) {
					$arResult["CITIES"][$keyCity]["SHOPS"][$key]["AMOUNT"] = true;
					$amount = true;
				}
			}

			if ($amount) $arResult["CITIES"][$keyCity]["AMOUNT"] = true;
		}
	}


	$arResult["NAV_STRING"] = $res->GetPageNavStringEx($navComponentObject, '', '', 'N');
	$arResult["NAV_CACHED_DATA"] = $navComponentObject->GetTemplateCachedData();
	$arResult["NAV_RESULT"] = $res;
	$this->SetResultCacheKeys(array(
		"ID",
		"IBLOCK_TYPE_ID",
		"DETAIL_PAGE_URL",
		"NAV_CACHED_DATA",
		"NAME",
		"SECTION",
		"ELEMENTS",
		"PROPERTIES",
		"PREVIEW_PICTURE",
		"ITEMS"
	));

	if(!empty($arResult["ITEMS"])){
		$this->IncludeComponentTemplate();
	}else{
		$this->AbortResultCache();
		return;
	}

}
return ($arParams["RETURN"]) ? $arResult[$arParams["RETURN"]] : "";
