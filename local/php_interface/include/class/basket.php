<?php
namespace Olimp;

use Bitrix\Main\Loader;
use Bitrix\Sale;

class Basket
{
	private $expansiveGood = [
		523,180,178,179, //моторы
		181, // квадроциклы,
		483, // снегоходы
		797, // беговые дорожки под заказ
		509 // снегоуборщики
	];

	/**
	 * @param $orderId
	 * @return bool
	 * @throws \Bitrix\Main\ArgumentNullException
	 * @throws \Bitrix\Main\LoaderException
	 * @throws \Bitrix\Main\NotImplementedException
	 */
	public function checkOrder($orderId)
	{
		Loader::includeModule('sale');
		$order = Sale\Order::load($orderId);
		$basket = $order->getBasket();
		$basketItems = $basket->getBasketItems();
		foreach ($basketItems as $basketItem) {
			$productId = $basketItem->getProductId();
			if (!$this->checkCategory($productId)) {
				return false;
			}
		}
		return true;
	}

	/**
	 * Проверяем есть ли в корзине товары из константы
	 * @throws \Bitrix\Main\LoaderException
	 */
	public function checkBasketGoods()
	{
		Loader::includeModule('sale');
		$basket = Sale\Basket::loadItemsForFUser(Sale\Fuser::getId(), \Bitrix\Main\Context::getCurrent()->getSite());
		$basketItems = $basket->getBasketItems();
		foreach ($basketItems as $basketItem) {
			$productId = $basketItem->getProductId();
			if (!$this->checkCategory($productId)) {
				return false;
			}
		}
		return true;
	}

	/**
	 * @param $productId
	 * @return bool
	 * @throws \Bitrix\Main\LoaderException
	 */
	private function checkCategory($productId)
	{
		$categories = $this->getProductCategory($productId);

		foreach ($categories as $category) {
			if (in_array($category['ID'], $this->expansiveGood) || in_array($category['IBLOCK_SECTION_ID'], $this->expansiveGood)) {
				return false;
			}
		}
		return true;
	}

	/**
	 * @param $productId
	 * @return array
	 * @throws \Bitrix\Main\LoaderException
	 */
	private function getProductCategory($productId)
	{
		Loader::includeModule('iblock');
		$productInfo = \CCatalogSKU::GetProductInfo($productId);
		if ($productInfo !== false) {
			$productId = $productInfo["ID"];
		}
		$obCategory = \CIBlockElement::GetElementGroups($productId, false, ['ID', 'IBLOCK_SECTION_ID']);
		$categories = [];
		while($category = $obCategory->Fetch()) {

			$categories[] = $category;
		}
		return $categories;
	}
}