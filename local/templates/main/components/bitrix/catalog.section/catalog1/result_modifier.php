<?
	if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();
	/** @var CBitrixComponentTemplate $this */
	/** @var array $arParams */
	/** @var array $arResult */
    $keyCity = (empty($_COOKIE['KEY_CITY'])) ? Olimp\City::getDefaultCityCode() : $_COOKIE['KEY_CITY'];

    $arResultItems = array();
	//Получение цен для торговых предложений
	if (!empty($arResult['ITEMS'])) {
		$arNewItemsList = array();
		
		//костыль для обнаружения фильтра на наличие, следует совсем переписать и каталог и фильтр
		foreach($_GET as $key=>$value){
			if(substr_count($key, 'smart_filter_142')){
				$flagForAllProduct = $value;
			}
		}

		foreach ($arResult['ITEMS'] as $key => $arItem) {

			if(count($arItem['OFFERS']) == 0){
				unset($arResult['ITEMS'][$key]);
				continue;
			}

			//Количество товара на складах и выбор товара который есть на складе либо товара с минимальной ценой
			//$arOfferID = array();
			foreach ($arItem['OFFERS'] as $arOffer) {
				//$arOfferID[] = $arOffer["ID"];
				$productOffers[$arOffer["ID"]]=$arOffer;
			}
			$arProduct = array();
			$PRODUCT_ID = $arItem['OFFERS'][0]["ID"];
			$PRODUCT_KEY = 0;
			$ifOfferForValue = 0;
			/*$arProduct["NUMBER_OF_STORES"] = Olimp\Catalog::getCountStoreWithProduct($arOfferID, $keyCity);

			foreach($arProduct["NUMBER_OF_STORES"] as $number => $value){
				if($value>0){
					$ifOfferForValue=$number;
					break;
				}
			}*/
			//если товара нет на складе не показываем и фильтр на наличие не выставлен
			/*if(($ifOfferForValue == 0)&&($flagForAllProduct == "Y")){
				unset($arResult['ITEMS'][$key]);
				continue;
			}*/

			//$minprice=$productOffers[$ifOfferForValue]["MIN_PRICE"];
			$mainPicKey        = getMainPictureKey($arItem["PROPERTIES"]["PICTURES"]["DESCRIPTION"]);
			$arItem['PICTURE'] = CFile::ResizeImageGet($arItem['PROPERTIES']['PICTURES']['VALUE'][$mainPicKey], array('width' => 270, 'height' => 270), BX_RESIZE_IMAGE_PROPORTIONAL, false)['src'];
			if(empty($arItem['PICTURE'])) $arItem['PICTURE'] = DEF_PIC_LIST;

			if (isset($arItem['OFFERS']) && !empty($arItem['OFFERS'])) {
				//new 20145

				foreach($arItem['OFFERS'] as $arOffer){
					if($arOffer['CATALOG_QUANTITY'] > 0){
						$arItem['MIN_PRICE']=$arOffer['MIN_PRICE'];
						break;
					}
				}
				//old
				/*$arItem['MIN_PRICE'] = CIBlockPriceTools::getMinPriceFromOffers(
					$arItem['OFFERS'],
					(isset($arResult['CONVERT_CURRENCY']['CURRENCY_ID'])) ? $arResult['CONVERT_CURRENCY']['CURRENCY_ID'] : ''
				);*/
			}

            //TODO найти причину такого поведения
			//$arItem['MIN_PRICE']=$minprice;
            if (empty($arItem['MIN_PRICE'])){
                $PRODUCT_KEY = 0;
                $minPrice = $arItem["OFFERS"][0]["MIN_PRICE"]["DISCOUNT_VALUE"];
			    foreach ($arItem["OFFERS"] as $key2 => $offer) {
			        if ($offer["MIN_PRICE"]["DISCOUNT_VALUE"] < $minPrice && $offer["MIN_PRICE"]["DISCOUNT_VALUE"] != 0) {
			            $PRODUCT_KEY = $key2;
			        }
			    }

                $arItem['MIN_PRICE'] = $arItem['OFFERS'][$PRODUCT_KEY]['MIN_PRICE'];
                // $arItem['MIN_PRICE']['VALUE'] =  $arItem['MIN_PRICE']['DISCOUNT_VALUE'] = $arItem['PROPERTIES']['MIN_PRICE_'.$keyCity]['VALUE'];
            }

			if($arItem['MIN_PRICE']>0){
				$arNewItemsList[$key] = $arItem;
				$arResultItems[] = $arItem['ID'];
			}
		}
		$arResult['ITEMS'] = $arNewItemsList;
	}
	
	//Проверяем есть ли новинки и акции
	$arFilter = array(
		'IBLOCK_ID'  => $arParams['IBLOCK_ID'],
		'ACTIVE'	 => 'Y',
		'SECTION_ID' => $arResult['ID']
	);
	$arFilterNew = $arFilter;
	$arFilterNew['PROPERTY_NEW_VALUE'] = 'Y';
	
	$arResult['NEW_COUNT'] = CIBlockElement::GetList(array(), $arFilterNew, array(), false, array());

	// $arFilterSales = $arFilter;
	// $arFilterSales['PROPERTY_DISCOUNT_VALUE'] = 'Y';
	// $arResult['SALES_COUNT'] = CIBlockElement::GetList(array(), $arFilterSales, array(), false, array());
	$arResult['SALES_COUNT'] = count(Olimp\Catalog::GetDiscountProductsId($arResult["ID"], $arParams['IBLOCK_ID']));
	
	$arItemsId = array();
	foreach ($arResult["ITEMS"] as $arItem) {
	    $arItemsId[$arItem['ID']] = $arItem['IBLOCK_SECTION_ID'];
	}
	
	$arResult['STICKERS'] = getItemStickers($arItemsId);
