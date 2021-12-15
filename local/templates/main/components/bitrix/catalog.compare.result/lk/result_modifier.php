<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @global array $arParams */
use Bitrix\Main\Type\Collection;



$obCatalog = new CCatalog;
$arCatalog = $obCatalog->GetByID(IBLOCK_ID_OFFERS);
$intSKUProperty = $arCatalog['SKU_PROPERTY_ID'];

 $keyCity = (empty($_COOKIE['KEY_CITY'])) ? Olimp\City::getDefaultCityCode() : $_COOKIE['KEY_CITY'];
    if(!$keyCity) $keyCity = 'vladivostok';
$arPrices = CIBlockPriceTools::GetCatalogPrices(IBLOCK_ID_CATALOG, array($keyCity));
$priceTypeID = $arPrices[$keyCity]["ID"];




$arParams['TEMPLATE_THEME'] = (string)($arParams['TEMPLATE_THEME']);


$arResult['ALL_FIELDS'] = array();
$existShow = !empty($arResult['SHOW_FIELDS']);
$existDelete = !empty($arResult['DELETED_FIELDS']);
if ($existShow || $existDelete)
{
	if ($existShow)
	{
		foreach ($arResult['SHOW_FIELDS'] as $propCode)
		{
			$arResult['SHOW_FIELDS'][$propCode] = array(
				'CODE' => $propCode,
				'IS_DELETED' => 'N',
				'ACTION_LINK' => str_replace('#CODE#', $propCode, $arResult['~DELETE_FEATURE_FIELD_TEMPLATE']),
				'SORT' => $arResult['FIELDS_SORT'][$propCode]
			);
		}
		unset($propCode);
		$arResult['ALL_FIELDS'] = $arResult['SHOW_FIELDS'];
	}
	if ($existDelete)
	{
		foreach ($arResult['DELETED_FIELDS'] as $propCode)
		{
			$arResult['ALL_FIELDS'][$propCode] = array(
				'CODE' => $propCode,
				'IS_DELETED' => 'Y',
				'ACTION_LINK' => str_replace('#CODE#', $propCode, $arResult['~ADD_FEATURE_FIELD_TEMPLATE']),
				'SORT' => $arResult['FIELDS_SORT'][$propCode]
			);
		}
		unset($propCode, $arResult['DELETED_FIELDS']);
	}
	Collection::sortByColumn($arResult['ALL_FIELDS'], array('SORT' => SORT_ASC));
}

$arResult['ALL_PROPERTIES'] = array();
$existShow = !empty($arResult['SHOW_PROPERTIES']);
$existDelete = !empty($arResult['DELETED_PROPERTIES']);
if ($existShow || $existDelete)
{
	if ($existShow)
	{
		foreach ($arResult['SHOW_PROPERTIES'] as $propCode => $arProp)
		{
			$arResult['SHOW_PROPERTIES'][$propCode]['IS_DELETED'] = 'N';
			$arResult['SHOW_PROPERTIES'][$propCode]['ACTION_LINK'] = str_replace('#CODE#', $propCode, $arResult['~DELETE_FEATURE_PROPERTY_TEMPLATE']);
		}
		$arResult['ALL_PROPERTIES'] = $arResult['SHOW_PROPERTIES'];
	}
	unset($arProp, $propCode);
	if ($existDelete)
	{
		foreach ($arResult['DELETED_PROPERTIES'] as $propCode => $arProp)
		{
			$arResult['DELETED_PROPERTIES'][$propCode]['IS_DELETED'] = 'Y';
			$arResult['DELETED_PROPERTIES'][$propCode]['ACTION_LINK'] = str_replace('#CODE#', $propCode, $arResult['~ADD_FEATURE_PROPERTY_TEMPLATE']);
			$arResult['ALL_PROPERTIES'][$propCode] = $arResult['DELETED_PROPERTIES'][$propCode];
		}
		unset($arProp, $propCode, $arResult['DELETED_PROPERTIES']);
	}
	Collection::sortByColumn($arResult["ALL_PROPERTIES"], array('SORT' => SORT_ASC, 'ID' => SORT_ASC));
}

$arResult["ALL_OFFER_FIELDS"] = array();
$existShow = !empty($arResult["SHOW_OFFER_FIELDS"]);
$existDelete = !empty($arResult["DELETED_OFFER_FIELDS"]);
if ($existShow || $existDelete)
{
	if ($existShow)
	{
		foreach ($arResult["SHOW_OFFER_FIELDS"] as $propCode)
		{
			$arResult["SHOW_OFFER_FIELDS"][$propCode] = array(
				"CODE" => $propCode,
				"IS_DELETED" => "N",
				"ACTION_LINK" => str_replace('#CODE#', $propCode, $arResult['~DELETE_FEATURE_OF_FIELD_TEMPLATE']),
				'SORT' => $arResult['FIELDS_SORT'][$propCode]
			);
		}
		unset($propCode);
		$arResult['ALL_OFFER_FIELDS'] = $arResult['SHOW_OFFER_FIELDS'];
	}
	if ($existDelete)
	{
		foreach ($arResult['DELETED_OFFER_FIELDS'] as $propCode)
		{
			$arResult['ALL_OFFER_FIELDS'][$propCode] = array(
				"CODE" => $propCode,
				"IS_DELETED" => "Y",
				"ACTION_LINK" => str_replace('#CODE#', $propCode, $arResult['~ADD_FEATURE_OF_FIELD_TEMPLATE']),
				'SORT' => $arResult['FIELDS_SORT'][$propCode]
			);
		}
		unset($propCode, $arResult['DELETED_OFFER_FIELDS']);
	}
	Collection::sortByColumn($arResult['ALL_OFFER_FIELDS'], array('SORT' => SORT_ASC));
}

$arResult['ALL_OFFER_PROPERTIES'] = array();
$existShow = !empty($arResult["SHOW_OFFER_PROPERTIES"]);
$existDelete = !empty($arResult["DELETED_OFFER_PROPERTIES"]);
if ($existShow || $existDelete)
{
	if ($existShow)
	{
		foreach ($arResult['SHOW_OFFER_PROPERTIES'] as $propCode => $arProp)
		{
			$arResult["SHOW_OFFER_PROPERTIES"][$propCode]["IS_DELETED"] = "N";
			$arResult["SHOW_OFFER_PROPERTIES"][$propCode]["ACTION_LINK"] = str_replace('#CODE#', $propCode, $arResult['~DELETE_FEATURE_OF_PROPERTY_TEMPLATE']);
		}
		unset($arProp, $propCode);
		$arResult['ALL_OFFER_PROPERTIES'] = $arResult['SHOW_OFFER_PROPERTIES'];
	}
	if ($existDelete)
	{
		foreach ($arResult['DELETED_OFFER_PROPERTIES'] as $propCode => $arProp)
		{
			$arResult["DELETED_OFFER_PROPERTIES"][$propCode]["IS_DELETED"] = "Y";
			$arResult["DELETED_OFFER_PROPERTIES"][$propCode]["ACTION_LINK"] = str_replace('#CODE#', $propCode, $arResult['~ADD_FEATURE_OF_PROPERTY_TEMPLATE']);
			$arResult['ALL_OFFER_PROPERTIES'][$propCode] = $arResult["DELETED_OFFER_PROPERTIES"][$propCode];
		}
		unset($arProp, $propCode, $arResult['DELETED_OFFER_PROPERTIES']);
	}
	Collection::sortByColumn($arResult['ALL_OFFER_PROPERTIES'], array('SORT' => SORT_ASC, 'ID' => SORT_ASC));
}


$ids = array();


if(count($arResult["ITEMS"])){
foreach($arResult["ITEMS"] as $key=>$arItem){

// var_dump($arItem);
// exit;
//$arResult["ITEMS"]
// $test = 	CCatalogSku::GetProductInfo(
//     $arItem['ID'], 
//     7
// );


//var_dump($arItem['ID']);
//exit;


$ids[] = $arItem['ID'];

$arResult["ITEMS"][$key]['ELEMENT_ID'] = $arItem['ID'];

	$arSort = array('SORT' => 'ASC', 'ID' => 'DESC');
   $arFilter = array('ACTIVE' => 'Y', 'IBLOCK_ID' => $arItem['IBLOCK_ID'], "ID"=>$arItem['ID']);
   $arSelect = array('ID', 'IBLOCK_ID',  'NAME', 'DETAIL_PAGE_URL',"PREVIEW_PICTURE","DETAIL_PICTURE","PROPERTY_40");
   
   $res = CIBlockElement::getList($arSort, $arFilter, false, array('nElementID' => $element['ID'], 'nPageSize' => 1), $arSelect);
   



$data = $res->fetch();

	//var_dump($data);	
		$arResult["SHOW_FIELDS"]['DETAIL_PICTURE'] = 'DETAIL_PICTURE';
	$arResult["ITEMS"][$key]['DETAIL_PICTURE']['SRC'] = 	 CFile::GetPath($data["PROPERTY_40_VALUE"]);
	
	$arResult["ITEMS"][$key]["FIELDS"]['DETAIL_PICTURE'] = array("SRC"=>$arResult["ITEMS"][$key]['DETAIL_PICTURE']['SRC'],"ALT"=>'',"TITLE"=>'');

}


//var_dump($priceTypeID);

$arOffers = CIBlockPriceTools::GetOffersArray(
    array("IBLOCK_ID" => IBLOCK_ID_CATALOG, "ACTIVE" => "Y"),
    $ids,
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

//var_dump($productOffers[$offer["PROPERTY_14_VALUE"]]);

foreach ($arResult["ITEMS"] as $key => $arItem) {
	if($productOffers[$arItem["ID"]]["MIN_PRICE"]["DISCOUNT_VALUE"]){
		$arResult["ITEMS"][$key]["MIN_PRICE"] = $productOffers[$arItem["ID"]]["MIN_PRICE"];
	}else{
		// unset($arResult["ITEMS"][$key]);
	}
}

}


