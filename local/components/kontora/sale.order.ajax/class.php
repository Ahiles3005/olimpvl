<?php if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();
use Bitrix\Sale;
CBitrixComponent::includeComponentClass("bitrix:sale.order.ajax");

class SaleOrderAjaxNew extends SaleOrderAjax
{
    protected function getShops($iblock_id)
    {
        Bitrix\Main\Loader::includeModule('iblock');

        $res = \Bitrix\Iblock\ElementTable::GetList(
            [
                'select' => [
                    'ID',
                    'NAME'
                ],
                'filter' => [
                    'IBLOCK_ID' => $iblock_id,
                    'ACTIVE' => 'Y',
                ]
            ]

        );

        $options = [];

        while($ar_res = $res->Fetch())
        {
            $options[$ar_res['ID']] = $ar_res['NAME'];
        }

        return $options;
    }


    protected function getOrderPropFormatted(&$arProperty, &$arDeleteFieldLocation = array())
    {
        if($arProperty['ID'] == 14) {
            $arProperty['OPTIONS'] = $this->getStoreAmount();
	        $arProperty['VALUE']  = array_keys( $arProperty['OPTIONS']);

        }

        return parent::getOrderPropFormatted($arProperty, $arDeleteFieldLocation);
    }

	protected function getStoreAmount()
	{
		$stores = [];
		$KEY_CITY = (empty($_COOKIE['KEY_CITY'])) ? Olimp\City::getDefaultCityCode() : $_COOKIE['KEY_CITY'];

		$basket = Sale\Basket::loadItemsForFUser(Sale\Fuser::getId(), Bitrix\Main\Context::getCurrent()->getSite());
		$basketItems = $basket->getBasketItems();
		foreach ($basketItems as $basketItem) {
			$productId = $basketItem->getProductId();
			$rsStore = CCatalogStoreProduct::GetList([], ['PRODUCT_ID' => $productId, 'AMOUNT' > 0], false, false, ['AMOUNT', "STORE_ID"]);
			while ($arStore = $rsStore->Fetch()) {
				if ($arStore["AMOUNT"] > 0) {
					$productStores[] = $arStore["STORE_ID"];
				}
			}
		}


		//Получить ID города
		$arFilterCity = array("IBLOCK_ID" => IBLOCK_ID_GEO_CITY, "ACTIVE" => "Y", 'PROPERTY_KEY' => $KEY_CITY);
		$arSelect = array("ID", "IBLOCK_ID", "PROPERTY_MAP_CENTER", "PROPERTY_KEY", "NAME");
		$resCity = CIBlockElement::GetList(array("SORT" => "asc"), $arFilterCity, false, false, $arSelect );
		while ($obCity = $resCity->GetNextElement()) {
			$arCity = $obCity->GetFields();

			$arSelect = array("ID", "IBLOCK_ID", "NAME" , 'PROPERTY_PRODUCT_PROPERTY_CODE');
			$arFilter = array("IBLOCK_ID" => IBLOCK_ID_SHOPS, "ACTIVE" => "Y", "PROPERTY_REF_CITY" => $arCity["ID"], "PROPERTY_SHOW_IN_ORDER_VALUE" =>'Да');
			$resElem = CIBlockElement::GetList(Array("SORT" => "asc"), $arFilter, false, false, $arSelect);
			while ($obStore = $resElem->GetNextElement()) {
				$arFields = $obStore->GetFields();
				$arProp = $obStore->GetProperties(array(), array("CODE" => "REF_STORE"));

				$storeList = $arProp["REF_STORE"]["VALUE_XML_ID"];
				$intersect = array_intersect($storeList, $productStores);

				if (count($intersect) > 0) {
					$stores[$arFields['ID']] = $arFields['NAME'];
				}
			}
		}
		return $stores;
	}

}