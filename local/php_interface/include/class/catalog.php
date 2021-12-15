<?php
namespace Olimp;

class Catalog
{
    //Пересчет доп полей цен товара
    public static function calcPrice($id, $arPricesId, $LID)
    {
        if ($id) {
            foreach ($arPricesId as $priceId) {
                $arMinPrice = \Olimp\Catalog::getProductMinPrice($id, $priceId, $LID);
                if (!empty($arMinPrice)) {
                    \CIBlockElement::SetPropertyValuesEx($id, false, array("MIN_PRICE_" . $priceId => $arMinPrice['DISCOUNT_VALUE']));
                }
            }
        }
    }

    //Получение символьных кодов Типов цен по их ID (если пусто то получить все кроме BASE)
    public static function getPrices($ids = array())
    {
        $arPricesId = array();
        $arFilter = array();

        if (!empty($ids)){
            sort($ids);
            $arFilter['ID'] = $ids;
        }

        $cache_id = "function_getPrices_cache_".implode("_", $ids);
        $obCache  = new \CPHPCache;
        if ($obCache->InitCache(604800, $cache_id, '/')) {
            $vars     = $obCache->GetVars();
            $arPricesId = $vars['arPricesId'];
        } elseif ($obCache->StartDataCache()) {
            $dbPriceType = \CCatalogGroup::GetList(array(), $arFilter);
            while ($arPriceType = $dbPriceType->Fetch()) {
                if ($arPriceType['NAME'] != 'BASE')
                    $arPricesId[] = $arPriceType['NAME'];
            }
            $obCache->EndDataCache(array(
                'arPricesId' => $arPricesId
            ));
        }

        return $arPricesId;
    }

    /**
     * Обновление свойства наличие на складе
     * @param $id ID Товара
     * @param $STORE_ID ID склада
     * @param $AMOUNT Сколько товара на складе
     * @return array
     */
    public static function UpdateItemAmount($id, $STORE_ID, $AMOUNT)
    {

        //получаем свойства  склада
        \CModule::IncludeModule('catalog');
        $arFilter = array(
            "PRODUCT_ID" => $id,
            "ID" => $STORE_ID
        );
        $arSelectFields = array("ID", "ACTIVE", "TITLE", "UF_CITY");
        $res = \CCatalogStore::GetList(array(), $arFilter, false, false, $arSelectFields);
        if ($arRes = $res->GetNext()) {
            $CITY = \CIBlockElement::GetProperty(IBLOCK_ID_GEO_CITY, $arRes["UF_CITY"], array("sort" => "asc"), array("CODE" => "key"));

            if ($CITY_NAME = $CITY->GetNext()) {

                //формируем имя свойства
                $Prop_name = 'AMOUNT_' . $CITY_NAME['VALUE'];

                //записываем свойства
                if ($AMOUNT > 0) {//если товары есть
                    \CIBlockElement::SetPropertyValuesEx($id, false, array($Prop_name => GetIDByCode(IBLOCK_ID_CATALOG, $Prop_name, "Y")));
                } else {//если их нет
                    \CIBlockElement::SetPropertyValuesEx($id, false, array($Prop_name => GetIDByCode(IBLOCK_ID_CATALOG, $Prop_name, "N")));
                }
            }
        }
    }

    //Получение минимальной цены товара (минимальная цена торговых предложений + скидка)
    public static function getProductMinPrice($itemId, $priceCode, $LID)
    {
        $arMinPrice = array();
        $arPrices = \CIBlockPriceTools::GetCatalogPrices(IBLOCK_ID_CATALOG, array($priceCode));

        $offersFilter = array(
            'IBLOCK_ID' => IBLOCK_ID_CATALOG,
            'HIDE_NOT_AVAILABLE' => 'N'
        );

        $arOffers = \CIBlockPriceTools::GetOffersArray(
            $offersFilter,
            array($itemId),
            array('sort' => 'asc'),
            array(),
            array(),
            20,
            $arPrices,
            true,
            array(),
            0,
            $LID
        );

        if (!empty($arOffers)) {
            $arMinPrice = \CIBlockPriceTools::getMinPriceFromOffers(
                $arOffers,
                'RUB'
            );
        }

        return $arMinPrice;
    }

    //Получение свойств товара из highload блока
    public static function getHighloadProductProperty($VALUE_ID, $HIGHLOAD_IBLOCK_ID, $arSelect)
    {
        \CModule::IncludeModule('highloadblock');
        $arResult = array();
        $hldata = \Bitrix\Highloadblock\HighloadBlockTable::getById($HIGHLOAD_IBLOCK_ID)->fetch();
        $hlentity = \Bitrix\Highloadblock\HighloadBlockTable::compileEntity($hldata);
        "\\" . $hlDataClass = $hldata['NAME'] . 'Table';

        $result = $hlDataClass::getList(array(
            'select' => $arSelect,
            'order' => array(),
            'filter' => array('UF_XML_ID' => $VALUE_ID),
        ));

        while ($res = $result->fetch()) {
            $arResult[] = $res;
        }

        return $arResult;
    }

    public static function gerBrandInfoByID($ID)
    {
        $arSelect = array("PREVIEW_PICTURE", "DETAIL_PAGE_URL", "NAME");
        $arFilter = array(
            "IBLOCK_ID" => IBLOCK_ID_BRAND,
            "ID" => $ID
        );

        $res = \CIBlockElement::GetList(array(), $arFilter, false, false, $arSelect);

        if ($ob = $res->GetNextElement()) {
            $arFields = $ob->GetFields();
            $arPic = \CFile::ResizeImageGet($arFields["PREVIEW_PICTURE"], array('width' => 78, 'height' => 18), BX_RESIZE_IMAGE_PROPORTIONAL, false);
            $res = array(
                "NAME" => $arFields["NAME"],
                "FILE_PATH" => $arPic["src"],
                "DETAIL_PAGE_URL" => $arFields["DETAIL_PAGE_URL"]
            );

            return $res;
        }
    }

    //Получение списка товаров с помощью ID разделов
    public static function getProductBySection($arSection, $ID = 0, $picWidth = 270, $picHeight = 273)
    {
        $arRecommendedProduct = array();
        $arElementsId = array();
        $arSelect = array("ID", "IBLOCK_ID", "DETAIL_PAGE_URL", "NAME", "PROPERTY_BRAND.NAME");
        $arFilter = array(
            "IBLOCK_ID" => IBLOCK_ID_CATALOG,
            "SECTION_ID" => $arSection
        );

        $res = \CIBlockElement::GetList(array(), $arFilter, false, false, $arSelect);
        while ($ob = $res->GetNextElement()) {
            $arFields = $ob->GetFields();

            if ($ID == $arFields["ID"]) continue;

            $props = $ob->GetProperties(array(), array("CODE" => "PICTURES"));

            $key = getMainPictureKey($props["PICTURES"]["DESCRIPTION"]);
            if ((!empty($picWidth)) && (!empty($picHeight))) {
                $picPath = \CFile::ResizeImageGet($props["PICTURES"]["VALUE"][$key], array('width' => $picWidth, 'height' => $picHeight), BX_RESIZE_IMAGE_PROPORTIONAL, false);
                $arFields["PICTURE"] = $picPath["src"];
            }

            $arRecommendedProduct[$arFields["ID"]] = array(
                "NAME" => $arFields["NAME"],
                "BRAND_NAME" => $arFields["PROPERTY_BRAND_NAME"],
                "DETAIL_PAGE_URL" => $arFields["DETAIL_PAGE_URL"],
                "PICTURE" => $arFields["PICTURE"],
                "IBLOCK_SECTION_ID" => $arFields["IBLOCK_SECTION_ID"]
            );

            $arElementsId[] = $arFields["ID"];
        }

        //Получить все торговые предложения и минимальную цену товара
      //  $keyCity = (empty($_COOKIE['KEY_CITY'])) ? \Olimp\City::getDefaultCityCode() : $_COOKIE['KEY_CITY'];
        $arPrices = \CIBlockPriceTools::GetCatalogPrices(IBLOCK_ID_CATALOG, array());

        $offersFilter = array(
            'IBLOCK_ID' => IBLOCK_ID_CATALOG,
            'HIDE_NOT_AVAILABLE' => 'N'
        );

        $arOffers = \CIBlockPriceTools::GetOffersArray(
            $offersFilter,
            $arElementsId,
            array('sort' => 'asc'),
            array(),
            array(),
            20,
            $arPrices,
            true
        );

        if (!empty($arOffers)) {
            foreach ($arElementsId as $id)
                $arElementLink[$id]['OFFERS'] = array();

            foreach ($arOffers as $arOffer) {
                if (isset($arElementLink[$arOffer["LINK_ELEMENT_ID"]])) {
                    $arElementLink[$arOffer["LINK_ELEMENT_ID"]]['OFFERS'][] = $arOffer;
                }
            }

            foreach ($arElementLink as $elemID => $arElement) {
                $arMinPrice = \CIBlockPriceTools::getMinPriceFromOffers(
                    $arElement['OFFERS'],
                    'RUB'
                );
                $arRecommendedProduct[$elemID]['OLD_PRICE'] = $arMinPrice['VALUE'];
                $arRecommendedProduct[$elemID]['NEW_PRICE'] = $arMinPrice['DISCOUNT_VALUE'];
                $arRecommendedProduct[$elemID]['DISCOUNT']  = $arMinPrice['DISCOUNT_DIFF_PERCENT'];
            }
        }

        return $arRecommendedProduct;
    }

    //Счетчик расшаривания в соц.сетях
    public static function getSocialShareCount($DETAIL_PAGE_URL, $title, $description, $image)
    {
        require_once($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/classes/general/short_uri.php");
        $res = array();
        $image = "http://" . $_SERVER['SERVER_NAME'] . $image;
        $url = "http://" . $_SERVER['SERVER_NAME'] . $DETAIL_PAGE_URL;
        $short_url = "http://" . SITE_SERVER_NAME . \CBXAllShortUri::GetShortUri($DETAIL_PAGE_URL);
        $res["SOCIAL_URL"] = array(
            "VK" => "http://vk.com/share.php?url=$url&title=" . $title . "&description=" . $description . "&image=" . $image . "&noparse=true",
            "FACEBOOK" => "http://www.facebook.com/sharer/sharer.php?s=100&p%5Btitle%5D=" . $title . "&p%5Bsummary%5D=" . $description . "&p%5Burl%5D=" . $url . "&p%5Bimages%5D%5B0%5D=" . $image,
            "OK" => "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st.comments=" . $description . "&st._surl=" . $url,
            "TWITTER" => "https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Ffiddle.jshell.net%2F_display%2F&text=" . $title . "&url=" . $short_url,
        );
        $res["SOCIAL_GET_COUNT"] = array(
            "VK" => "http://vk.com/share.php?act=count&index=1&url=" . $url,
            "FACEBOOK" => "http://graph.facebook.com/?id=" . $url,
            "OK" => "http://ok.ru/dk?st.cmd=extLike&uid=odklcnt0&ref=" . $url,
            "TWITTER" => "http://urls.api.twitter.com/1/urls/count.json?url=" . $short_url,
        );

        preg_match('/^VK.Share.count\(1, (\d+)\);$/i', file_get_contents($res["SOCIAL_GET_COUNT"]["VK"]), $temp);
        $facebook_request = file_get_contents($res["SOCIAL_GET_COUNT"]["FACEBOOK"]);
        $fb = json_decode($facebook_request);
        $fb_shares = ((int)$fb->shares) ? "+" . (int)$fb->shares : 0;

        $vk_request = file_get_contents($res["SOCIAL_GET_COUNT"]["VK"]);
        $temp = array();
        preg_match('/^VK.Share.count\(1, (\d+)\);$/i', $vk_request, $temp);
        $vk_shares = ((int)$temp[1]) ? "+" . (int)$temp[1] : 0;

        $twitter_request = file_get_contents($res["SOCIAL_GET_COUNT"]["TWITTER"]);
        $twitter_res = json_decode($twitter_request);
        $twitter_shares = ((int)$twitter_res->count) ? "+" . (int)$twitter_res->count : 0;

        $ok_request = file_get_contents($res["SOCIAL_GET_COUNT"]["OK"]);
        $tmp = array();

        preg_match("/'(\d+)'/", $ok_request, $tmp);
        $ok_shares = ((int)$tmp[1]) ? "+" . (int)$tmp[1] : 0;

        $res["SOCIAL_COUNT"] = array(
            "FACEBOOK" => $fb_shares,
            "VK" => $vk_shares,
            "OK" => $ok_shares,
            "TWITTER" => $twitter_shares,
        );

        return $res;
    }

    //Количество магазинов с наличием товара
    public static function getCountStoreWithProduct($arProductID, $keyCity='')
    {
        $arResult = array();
        $arRefStore = array();
        $obCache = new \CPHPCache();
        $cache_time = 43200;
        $cache_id =  md5( 'function_getCountStoreWithProduct_cache1_' . $keyCity.json_encode($arProductID) ); // @CHANGED
        $arAmount = array();
        if ($obCache->InitCache($cache_time, $cache_id)) {
            $arRefStore = $obCache->GetVars();
        } elseif ($obCache->StartDataCache()) {
            $CITY_ID = "";
            
            if(!empty($keyCity))
            $arFilter = array("IBLOCK_ID" => IBLOCK_ID_GEO_CITY, "ACTIVE" => "Y", "PROPERTY_KEY" => mb_strtoupper($keyCity));
            else
             $arFilter = array("IBLOCK_ID" => IBLOCK_ID_GEO_CITY, "ACTIVE" => "Y");
            
            $resStore = \CIBlockElement::GetList(array("SORT" => "ASC"), $arFilter, false, false, array("ID", "IBLOCK_ID"));
            while ($obStore = $resStore->GetNextElement()) {
                $arFields = $obStore->GetFields();
                $CITY_ID = $arFields["ID"];
            }

            if(!empty($keyCity))
            $arFilter = array("IBLOCK_ID" => IBLOCK_ID_SHOPS, "ACTIVE" => "Y", "PROPERTY_REF_CITY" => $CITY_ID);
             else 
              $arFilter = array("IBLOCK_ID" => IBLOCK_ID_SHOPS, "ACTIVE" => "Y");
             
            $resStore = \CIBlockElement::GetList(array("SORT" => "ASC"), $arFilter, false, false, array("ID", "IBLOCK_ID"));
            while ($obStore = $resStore->GetNextElement()) {
                $arFields = $obStore->GetFields();
                $arProp = $obStore->GetProperties(array(), array("CODE" => "REF_STORE"));
                $storeList = $arProp["REF_STORE"]["VALUE_XML_ID"];
                foreach ($storeList as $store) {
                    $arRefStore[$store] = $arFields["ID"];
                }
            }
            unset($obStore);
            $obCache->EndDataCache($arRefStore);
        }

        $ne = array();
        if(is_array($arProductID))
           foreach ($arProductID as $productID) {
           if(intval($productID))
           $ne []= $productID;
           }
      $arProductID = $ne;
        
        
        
         //$cache_id = 'function_getCountStoreWithProduct_cache_' . md5(serialize($arProductID));
          $cache_id = 'function_getCountStoreWithProductAll_cache_ALL1' ;
        
         if ($obCache->InitCache($cache_time+1, $cache_id)) {
         $arAmount =  $obCache->GetVars();
         
         } elseif ($obCache->StartDataCache()) {
         
//                $rsStore = \CCatalogStoreProduct::GetList(array('PRODUCT_ID' => 'asc'), array('PRODUCT_ID' => $arProductID, '>AMOUNT' => 0, "STORE_ID" => array_keys($arRefStore)), false, false, array('AMOUNT', "STORE_ID", "PRODUCT_ID"));
            
               $rsStore = \CCatalogStoreProduct::GetList(array('PRODUCT_ID' => 'asc'), array( '>AMOUNT' => 0), false, false, array('AMOUNT', "STORE_ID", "PRODUCT_ID"));
               
                
        while ($arStore = $rsStore->Fetch()) {
            $arAmount[$arStore['PRODUCT_ID']][$arStore["STORE_ID"]] = $arStore["AMOUNT"];
        }
      

     
         
           $obCache->EndDataCache($arAmount);
         }
        
        
           foreach ($arProductID as $productID) {
            $arResult[$productID] = 0;
            $amount = array();
            foreach ($arRefStore as $store => $STORE_ID) {
                if (isset($arAmount[$productID][$store]) && $arAmount[$productID][$store]) {
                    if(!in_array($STORE_ID, $amount))$amount[] = $STORE_ID;
                }
                $arResult[$productID] = count($amount);
            }
        }
        
          
        return $arResult;
    }

    //Получаем ID товаров со скидками для определенного раздела
    function GetDiscountProductsId($sectionId, $iblockId = IBLOCK_ID_CATALOG)
    {

        $cache_id = "function_GetDiscountProductsId_cache_".$sectionId."_".$iblockId;
        $obCache  = new \CPHPCache;
        if ($obCache->InitCache(43200, $cache_id, '/')) {

            $vars     = $obCache->GetVars();
            $offersId = $vars['offersId'];

        } elseif ($obCache->StartDataCache()) {

            \CModule::IncludeModule('iblock');
            \CModule::IncludeModule('catalog');
            \CModule::IncludeModule('sale');

            $arDiscountElementArt = array();
            $dbProductDiscounts  = \CSaleDiscount::GetList(
                array(),
                array('ACTIVE' => 'Y'),
                false,
                false,
                array('ID', 'ACTIONS')
            );
            while ($arProductDiscounts = $dbProductDiscounts->Fetch()) {

                $cond = unserialize($arProductDiscounts['ACTIONS']);

                foreach ($cond['CHILDREN'] as $child) {
                    foreach ($child['CHILDREN'] as $child) {
                        if ($child['DATA']['All'] == 'OR') {
                            foreach ($child['CHILDREN'] as $condition) {
                                $arDiscountElementArt[] = $condition['DATA']['value'];
                            }
                        }
                    }
                }
            }
            array_unique($arDiscountElementArt);

            $offersId = array();
            if (!empty($arDiscountElementArt)) {
                $arFilter = array(
                    "SECTION_ID"       => $sectionId,
                    "IBLOCK_ID"        => $iblockId,
                    "ACTIVE"           => "Y",
                    'PROPERTY_ARTICUL' => $arDiscountElementArt
                );
                $arSelectFields = array("ID");
                $res = \CIBlockElement::GetList(array(), $arFilter, false, false, false, $arSelectFields );
                while ($arFields = $res->GetNext()) {
                    $offersId[] = $arFields["ID"];
                }
            }

            $obCache->EndDataCache(array(
                'offersId' => $offersId
            ));
        }

        return $offersId;
    }
}