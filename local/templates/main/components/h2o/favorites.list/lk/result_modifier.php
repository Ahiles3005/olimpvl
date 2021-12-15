<?php 

	$obCatalog = new CCatalog;
		$arCatalog = $obCatalog->GetByID(IBLOCK_ID_OFFERS);
		$intSKUProperty = $arCatalog['SKU_PROPERTY_ID'];
		
		

   $keyCity = (empty($_COOKIE['KEY_CITY'])) ? Olimp\City::getDefaultCityCode() : $_COOKIE['KEY_CITY'];
    if(!$keyCity) $keyCity = 'vladivostok';

    	$arPrices = CIBlockPriceTools::GetCatalogPrices(IBLOCK_ID_CATALOG, array($keyCity));
	$priceTypeID = $arPrices[$keyCity]["ID"];
	//var_dump($priceTypeID);	
	
	$ids = array();
	
	
	if(sizeof($arResult["FAVORITES"])){
	
	
	

	
	
	foreach ($arResult["FAVORITES"] as $key => $arItem)
	{
	$ids[] = $arItem['ELEMENT_ID'];
	
	}
	$offerWithProduct = array();
	
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
		//конец измене
		
	//var_dump($arOffers);	
	
	
foreach ($arOffers as $offer) {
	$productOffers[$offer["PROPERTY_14_VALUE"]] = $offer;
}

$arBrandID = array();
foreach ($arResult["FAVORITES"] as $key => $arItem) {
	if($productOffers[$arItem["ELEMENT_ID"]]["MIN_PRICE"]["DISCOUNT_VALUE"]){
		$arResult["FAVORITES"][$key]["MIN_PRICE"] = $productOffers[$arItem["ELEMENT_ID"]]["MIN_PRICE"];
	}else{
		unset($arResult["FAVORITES"][$key]);
	}
}



		
foreach ($arResult["FAVORITES"] as $key => $arItem)
	{

	//var_dump($arItem);
	//echo "<br><br>";
// $test = 	CCatalogSku::GetProductInfo(
//     $arItem['ELEMENT_ID']
// );


	
	$arSort = array('SORT' => 'ASC', 'ID' => 'DESC');
   $arFilter = array('ACTIVE' => 'Y', 'IBLOCK_ID' => 1, "ID"=>$arItem['ELEMENT_ID']);
   $arSelect = array('ID', 'IBLOCK_ID',  'NAME', 'DETAIL_PAGE_URL',"PREVIEW_PICTURE","DETAIL_PICTURE","PROPERTY_40","PROPERTY_PICTURES","PROPERTY_MIN_PRICE","PRICE");
   
   $res = CIBlockElement::getList($arSort, $arFilter, false, array('nElementID' => $element['ID'], 'nPageSize' => 1), $arSelect);
	
// $data =	CIBlockElement::GetList(
// Array("SORT"=>"ASC"),
//  Array("ID"=>$arItem['ID']),
//  false,
// false,
//  Array("PREVIEW_PICTURE","DETAIL_PICTURE")
// );

$data = $res->fetch();

	//var_dump($data);	
		
	$arResult["FAVORITES"][$key]['PICTURE'] = 	 CFile::GetPath($data["PROPERTY_40_VALUE"]);
		
		
		
		
		
		
		
		
		}
		
		
			}