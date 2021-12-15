<?php
namespace Olimp;
use Bitrix\Main\Diag\Debug;
use Bitrix\Main\Loader;

class Order
{
	public static function checkPayment(\Bitrix\Main\Event $event)
	{
		$order = $event->getParameter("ENTITY");
		$isNew = $event->getParameter("IS_NEW");

		if ($isNew) {
			$basketHelper = new Basket();
			$allowPayment = $basketHelper->checkOrder($order->getId());
			if (!$allowPayment) {
				$order->setField('STATUS_ID', 'CP');
				$order->save();
			}
			
			
			

	}
	}
	
	
		public static function checkPayment1(\Bitrix\Main\Event $event)
	{
		$order = $event->getParameter("ENTITY");
		$isNew = $event->getParameter("IS_NEW");

		if ($isNew) {
			$basketHelper = new Basket();
			$allowPayment = $basketHelper->checkOrder($order->getId());
			if (!$allowPayment) {
				$order->setField('STATUS_ID', 'CP');
				$order->save();
			}
			
			
			
			   /** @var \Bitrix\Sale\PropertyValueCollection $propertyCollection */
    $propertyCollection = $order->getPropertyCollection();
$ordera = [];
    $propsData = [];

    /**
     * Собираем все свойства и их значения в массив
     * @var \Bitrix\Sale\PropertyValue $propertyItem
     */
    foreach ($propertyCollection as $propertyItem) {
        if (!empty($propertyItem->getField("CODE"))) {
            $propsData[$propertyItem->getField("CODE")] = trim($propertyItem->getValue());
        }
    }

    
    $ordera['PROPS'] = $propsData;
    
    $dbBasketItems = CSaleBasket::GetList(array(), 
	array("ORDER_ID"=>$order->getId()));
	// Выбираем записи из корзины, по id заказа
$ordera['ITEMS'] = [];
	while ($arItems = $dbBasketItems->Fetch())
	{
	
	
	$ordera['PROPS'][] = $arItems;
	
// 		// Выбираем необходимые свойства
// 		$db_props = CSaleBasket::GetPropsList(
// 		array(),
// 		array(
// 		"BASKET_ID"=>$arItems["ID"],
// 		"CODE"=>"FABRIC"    )
// 		);
// 		while ($item = $db_props->Fetch())
// 		{
// 			$articles = "<br/>Артикулы из обложки: " . $item["VALUE"];
// 		}
	}
			
			
			file_put_contents($_SERVER['DOCUMENT_ROOT']."/sl.txt",json_encode($propsData));
			
			
			
			
			
			
			
		}
	}


	public static function prepareShop($result, $params)
	{
		$selectPaySystem = null;
		foreach ($result['PAY_SYSTEM'] as $paySystem) {
			if ($paySystem['CHECKED'] == 'Y') {
				$selectPaySystem = $paySystem['ID'];
			}
		}
		$stores = self::getStoreAmount($selectPaySystem);

		foreach ($result['JS_DATA']['ORDER_PROP']['properties'][3]['OPTIONS'] as $key=>$value){
			if(!isset($stores[$key])){
				unset($result['JS_DATA']['ORDER_PROP']['properties'][3]['OPTIONS'][$key]);
			}
		}

	}

	public static function getStoreAmount($paySystem)
	{
		Loader::includeModule('sale');
		$stores = [];
		$KEY_CITY = (empty($_COOKIE['KEY_CITY'])) ? Olimp\City::getDefaultCityCode() : $_COOKIE['KEY_CITY'];

		$basket = \Bitrix\Sale\Basket::loadItemsForFUser(\Bitrix\Sale\Fuser::getId(), \Bitrix\Main\Context::getCurrent()->getSite());
		$basketItems = $basket->getBasketItems();
		foreach ($basketItems as $basketItem) {
			$productId = $basketItem->getProductId();
			$rsStore = \CCatalogStoreProduct::GetList([], ['PRODUCT_ID' => $productId, 'AMOUNT' > 0], false, false, ['AMOUNT', "STORE_ID"]);
			while ($arStore = $rsStore->Fetch()) {
				if ($arStore["AMOUNT"] > 0) {
					$productStores[] = $arStore["STORE_ID"];
				}
			}
		}

		Debug::dumpToFile($paySystem);
		//Получить ID города
		$arFilterCity = array("IBLOCK_ID" => IBLOCK_ID_GEO_CITY, "ACTIVE" => "Y", 'PROPERTY_KEY' => $KEY_CITY);
		$arSelect = array("ID", "IBLOCK_ID", "PROPERTY_MAP_CENTER", "PROPERTY_KEY", "NAME");
		$resCity = \CIBlockElement::GetList(array("SORT" => "asc"), $arFilterCity, false, false, $arSelect );
		while ($obCity = $resCity->GetNextElement()) {
			$arCity = $obCity->GetFields();

			$arSelect = array("ID", "IBLOCK_ID", "NAME" , 'PROPERTY_PRODUCT_PROPERTY_CODE');
			$arFilter = array("IBLOCK_ID" => IBLOCK_ID_SHOPS, "ACTIVE" => "Y", "PROPERTY_REF_CITY" => $arCity["ID"], "PROPERTY_SHOW_IN_ORDER_VALUE" =>'Да');
			$resElem = \CIBlockElement::GetList(Array("SORT" => "asc"), $arFilter, false, false, $arSelect);
			while ($obStore = $resElem->GetNextElement()) {
				$arFields = $obStore->GetFields();
				$arProp = $obStore->GetProperties(array(), array("CODE" => "REF_STORE"));

				$storeList = $arProp["REF_STORE"]["VALUE_XML_ID"];
				$intersect = array_intersect($storeList, $productStores);

				if (count($intersect) > 0 && $paySystem != 3) {
					$stores[$arFields['ID']] = $arFields['NAME'];
				}
				if ($paySystem == 3) {
					$stores[$arFields['ID']] = $arFields['NAME'];
				}
			}
		}
		return $stores;
	}
}