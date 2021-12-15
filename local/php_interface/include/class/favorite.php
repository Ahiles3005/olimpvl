<?php
namespace Olimp;

class Favorite
{
    function addToFavoriteByID($ID, $PRICE_TYPE_ID = 'vladivostok') {
        \CModule::IncludeModule("sale");
        \CModule::IncludeModule("iblock");

        global $USER;

        $arResult = array();

        $res = \CIBlockElement::GetByID($ID);
        if ($ar_res = $res->GetNext()) {
            $arResult["NAME"] = $ar_res['NAME'];
            $arResult["DETAIL_PAGE_URL"] = $ar_res['DETAIL_PAGE_URL'];
        }

        $arResultPrices = \CIBlockPriceTools::GetCatalogPrices(IBLOCK_ID_CATALOG, array($PRICE_TYPE_ID));

        $dbPrice = \CPrice::GetList(
            array(),
            array(
                "PRODUCT_ID"       => $ID,
                "CATALOG_GROUP_ID" => $arResultPrices[$PRICE_TYPE_ID]['ID']
            ),
            false,
            false,
            array("ID", "CATALOG_GROUP_ID", "PRICE", "CURRENCY",
                "QUANTITY_FROM", "QUANTITY_TO", "PRODUCT_ID", 'NAME')
        );
        while ($arPrice = $dbPrice->Fetch()) {
            $arDiscounts = \CCatalogDiscount::GetDiscountByPrice(
                $arPrice["ID"],
                $USER->GetUserGroupArray(),
                "N",
                SITE_ID
            );
            $discountPrice = \CCatalogProduct::CountPriceWithDiscount(
                $arPrice["PRICE"],
                $arPrice["CURRENCY"],
                $arDiscounts
            );
            $arResult["PRODUCT_PRICE_ID"] = $arPrice["ID"];
            $arResult["DISCOUNT_PRICE"] = $discountPrice;
            $arResult["CURRENCY"] = $arPrice["CURRENCY"];
        }

        $fUserID = \CSaleBasket::GetBasketUserID(True);
        $fUserID = IntVal($fUserID);
        $arFields = array(
            "PRODUCT_ID"       => $ID,
            "PRODUCT_PRICE_ID" => $arResult["PRODUCT_PRICE_ID"],
            "PRICE"            => $arResult["DISCOUNT_PRICE"],
            "CURRENCY"         => $arResult["CURRENCY"],
            "WEIGHT"           => 0,
            "QUANTITY"         => 1,
            "LID"              => 's1',
            "DELAY"            => "Y",
            "CAN_BUY"          => "Y",
            "NAME"             => $arResult["NAME"],
            "MODULE"           => "sale",
            "NOTES"            => "",
            "DETAIL_PAGE_URL"  => $arResult["DETAIL_PAGE_URL"],
            "FUSER_ID"         => $fUserID
        );

        return \CSaleBasket::Add($arFields);
    }

    function favoriteGetList($array_id) {
        \CModule::IncludeModule("sale");

        $result  = array();
        $fUserID = \CSaleBasket::GetBasketUserID(True);
        $fUserID = IntVal($fUserID);

        $dbBasketItems = \CSaleBasket::GetList(
            array(
                "NAME" => "ASC",
                "ID"   => "ASC"
            ),
            array(
                "FUSER_ID"   => $fUserID,
                "ORDER_ID"   => "NULL",
                "DELAY"      => "Y",
                "PRODUCT_ID" => $array_id
            ),
            false,
            false,
            array()
        );
        while ($arItem = $dbBasketItems->Fetch()) {
            $result[] = $arItem;
        }
        return $result;
    }

    function removeFromFavoriteByID($array_id) {
        \CModule::IncludeModule("sale");

        $arItems = \Olimp\Favorite::favoriteGetList($array_id);

        foreach ($arItems as $arItem) {
            $result[] = \CSaleBasket::Delete($arItem["ID"]);
        }

        return $result;
    }
}