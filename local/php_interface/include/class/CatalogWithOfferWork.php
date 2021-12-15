<?php
namespace Olimp;

use \Bitrix\Main;
use \Bitrix\Main\Loader;
use \Bitrix\Main\Error;
use \Bitrix\Main\Type\DateTime;
use \Bitrix\Main\Localization\Loc;
use \Bitrix\Iblock;
use \Bitrix\Iblock\Component\ElementList;
use \Bitrix\Catalog as BCatalog;
use \Bitrix\Highloadblock\HighloadBlockTable;
use \Bitrix\Currency;

class CatalogWithOfferWork
{
    protected static $catalogIncluded = null;
    protected static $highLoadInclude = null;
    protected static $needDiscountCache = null;
    protected static $calculationDiscounts = 0;

    public static function getOffersArrayFilterOffersId($arFilter, $arFilterIdsOffer, $arElementID, $arOrder, $arSelectFields, $arSelectProperties, $limit, $arPrices, $vat_include, $arCurrencyParams = array(), $USER_ID = 0, $LID = SITE_ID)
    {

        global $USER;
        
      //  $GLOBALS['fb']->fb($arFilter,"arFilter");

        $arResult = array();

        $boolCheckPermissions = false;
        $boolHideNotAvailable = false;
        $showPriceCount = false;
        $customFilter = false;
        $IBLOCK_ID = 0;

        if (!empty($arFilter) && is_array($arFilter))
        {
            if (isset($arFilter['IBLOCK_ID']))
                $IBLOCK_ID = $arFilter['IBLOCK_ID'];
            if (isset($arFilter['HIDE_NOT_AVAILABLE']))
                $boolHideNotAvailable = ($arFilter['HIDE_NOT_AVAILABLE'] === 'Y');
            if (isset($arFilter['CHECK_PERMISSIONS']))
                $boolCheckPermissions = ($arFilter['CHECK_PERMISSIONS'] === 'Y');
            if (isset($arFilter['SHOW_PRICE_COUNT']))
            {
                $showPriceCount = (int)$arFilter['SHOW_PRICE_COUNT'];
                if ($showPriceCount <= 0)
                    $showPriceCount = false;
            }

            if (isset($arFilter['CUSTOM_FILTER']))
            {
                $customFilter = $arFilter['CUSTOM_FILTER'];
            }
        }
        else
        {
            $IBLOCK_ID = $arFilter;
        }

        if (self::$needDiscountCache === null)
        {
            if(\Bitrix\Main\Config\Option::get('sale', 'use_sale_discount_only') === 'Y')
            {
                self::$needDiscountCache = false;
            }
            else
            {
                $pricesAllow = \CIBlockPriceTools::GetAllowCatalogPrices($arPrices);
                if (empty($pricesAllow))
                {
                    self::$needDiscountCache = false;
                }
                else
                {
                    $USER_ID = (int)$USER_ID;
                    $userGroups = array(2);
                    if ($USER_ID > 0)
                        $userGroups = \CUser::GetUserGroup($USER_ID);
                    elseif (isset($USER) && $USER instanceof CUser)
                        $userGroups = $USER->GetUserGroupArray();
                    self::$needDiscountCache = \CIBlockPriceTools::SetCatalogDiscountCache($pricesAllow, $userGroups);
                    unset($userGroups);
                }
                unset($pricesAllow);
            }
        }

        $arOffersIBlock = \CIBlockPriceTools::GetOffersIBlock($IBLOCK_ID);
        if($arOffersIBlock)
        {
            $arDefaultMeasure = \CCatalogMeasure::getDefaultMeasure(true, true);

            $limit = (int)$limit;
            if (0 > $limit)
                $limit = 0;

            if (!isset($arOrder["ID"]))
                $arOrder["ID"] = "DESC";

            $intOfferIBlockID = $arOffersIBlock["OFFERS_IBLOCK_ID"];

            $productProperty = 'PROPERTY_'.$arOffersIBlock['OFFERS_PROPERTY_ID'];
            $productPropertyValue = $productProperty.'_VALUE';

            $propertyList = array();
            if (!empty($arSelectProperties))
            {
                $selectProperties = array_fill_keys($arSelectProperties, true);
                $propertyIterator = Iblock\PropertyTable::getList(array(
                    'select' => array('ID', 'CODE'),
                    'filter' => array('=IBLOCK_ID' => $intOfferIBlockID, '=ACTIVE' => 'Y'),
                    'order' => array('SORT' => 'ASC', 'ID' => 'ASC')
                ));
                while ($property = $propertyIterator->fetch())
                {
                    $code = (string)$property['CODE'];
                    if ($code == '')
                        $code = $property['ID'];
                    if (!isset($selectProperties[$code]))
                        continue;
                    $propertyList[] = $code;
                    unset($code);
                }
                unset($property, $propertyIterator);
                unset($selectProperties);
            }

            $arFilter = array(
                "IBLOCK_ID" => $intOfferIBlockID,
                $productProperty => $arElementID,
                "ACTIVE" => "Y",
                "ACTIVE_DATE" => "Y",
            );

            if (!empty($customFilter))
            {
                $arFilter[] = $customFilter;
            }

            if ($boolHideNotAvailable)
                $arFilter['CATALOG_AVAILABLE'] = 'Y';
            if ($boolCheckPermissions)
            {
                $arFilter['CHECK_PERMISSIONS'] = "Y";
                $arFilter['MIN_PERMISSION'] = "R";
            }

            $arSelect = array(
                "ID" => 1,
                "IBLOCK_ID" => 1,
                $productProperty => 1,
                "CATALOG_QUANTITY" => 1
            );
            //if(!$arParams["USE_PRICE_COUNT"])
            {
                foreach($arPrices as $value)
                {
                    if (!$value['CAN_VIEW'] && !$value['CAN_BUY'])
                        continue;
                    $arSelect[$value["SELECT"]] = 1;
                    if ($showPriceCount !== false)
                    {
                        $arFilter['CATALOG_SHOP_QUANTITY_'.$value['ID']] = $showPriceCount;
                    }
                }
            }

            if (!empty($arSelectFields))
            {
                foreach ($arSelectFields as $code)
                    $arSelect[$code] = 1; //mark to select
                unset($code);
            }
            $checkFields = array();
            foreach (array_keys($arOrder) as $code)
            {
                $code = strtoupper($code);
                $arSelect[$code] = 1;
                if ($code == 'ID' || $code == 'CATALOG_AVAILABLE')
                    continue;
                $checkFields[] = $code;
            }
            unset($code);

            if (!isset($arSelect['PREVIEW_PICTURE']))
                $arSelect['PREVIEW_PICTURE'] = 1;
            if (!isset($arSelect['DETAIL_PICTURE']))
                $arSelect['DETAIL_PICTURE'] = 1;

            $arOfferIDs = array();
            $arMeasureMap = array();
            $intKey = 0;
            $arOffersPerElement = array();
            $arOffersLink = array();
            $extPrices = array();

            // единственная модификация стандартной функции
            if(count($arFilterIdsOffer) > 0){
                $arFilter["ID"] = $arFilterIdsOffer;
            }
            //добавление xml_id
            $arSelect["XML_ID"] = "XML_ID";
            $arSelect["PROPERTY_CML2_LINK.PROPERTY_ARTICUL"] = "PROPERTY_CML2_LINK.PROPERTY_ARTICUL";

            $rsOffers = \CIBlockElement::GetList($arOrder, $arFilter, false, false, array_keys($arSelect));

            while($arOffer = $rsOffers->GetNext())
            {
                $arOffer['ID'] = (int)$arOffer['ID'];
                $element_id = (int)$arOffer[$productPropertyValue];
                //No more than limit offers per element
                if($limit > 0)
                {
                    $arOffersPerElement[$element_id]++;
                    if($arOffersPerElement[$element_id] > $limit)
                        continue;
                }

                if($element_id > 0)
                {
                    $arOffer['SORT_HASH'] = 'ID';
                    if (!empty($checkFields))
                    {
                        $checkValues = '';
                        foreach ($checkFields as $code)
                            $checkValues .= (isset($arOffer[$code]) ? $arOffer[$code] : '').'|';
                        unset($code);
                        if ($checkValues != '')
                            $arOffer['SORT_HASH'] = md5($checkValues);
                        unset($checkValues);
                    }
                    $arOffer["LINK_ELEMENT_ID"] = $element_id;
                    $arOffer["PROPERTIES"] = array();
                    $arOffer["DISPLAY_PROPERTIES"] = array();

                    Iblock\Component\Tools::getFieldImageData(
                        $arOffer,
                        array('PREVIEW_PICTURE', 'DETAIL_PICTURE'),
                        Iblock\Component\Tools::IPROPERTY_ENTITY_ELEMENT,
                        ''
                    );

                    $arOffer['CHECK_QUANTITY'] = ('Y' == $arOffer['CATALOG_QUANTITY_TRACE'] && 'N' == $arOffer['CATALOG_CAN_BUY_ZERO']);
                    $arOffer['CATALOG_TYPE'] = \CCatalogProduct::TYPE_OFFER;
                    $arOffer['CATALOG_MEASURE_NAME'] = $arDefaultMeasure['SYMBOL_RUS'];
                    $arOffer['~CATALOG_MEASURE_NAME'] = $arDefaultMeasure['SYMBOL_RUS'];
                    $arOffer["CATALOG_MEASURE_RATIO"] = 1;
                    if (!isset($arOffer['CATALOG_MEASURE']))
                        $arOffer['CATALOG_MEASURE'] = 0;
                    $arOffer['CATALOG_MEASURE'] = (int)$arOffer['CATALOG_MEASURE'];
                    if (0 > $arOffer['CATALOG_MEASURE'])
                        $arOffer['CATALOG_MEASURE'] = 0;
                    if (0 < $arOffer['CATALOG_MEASURE'])
                    {
                        if (!isset($arMeasureMap[$arOffer['CATALOG_MEASURE']]))
                            $arMeasureMap[$arOffer['CATALOG_MEASURE']] = array();
                        $arMeasureMap[$arOffer['CATALOG_MEASURE']][] = $intKey;
                    }

                    if($arOffer['ID']!=="N")
                    $arOfferIDs[] = $arOffer['ID'];
                    $arResult[$intKey] = $arOffer;
                    if (!isset($arOffersLink[$arOffer['ID']]))
                    {
                        $arOffersLink[$arOffer['ID']] = &$arResult[$intKey];
                    }
                    else
                    {
                        if (!isset($extPrices[$arOffer['ID']]))
                        {
                            $extPrices[$arOffer['ID']] = array();
                        }
                        $extPrices[$arOffer['ID']][] = &$arResult[$intKey];
                    }
                    $intKey++;
                }
            }

            if (!empty($arOfferIDs))
            {

                $rsRatios = \CCatalogMeasureRatio::getList(
                    array(),
                    array('@PRODUCT_ID' => $arOfferIDs),
                    false,
                    false,
                    array('PRODUCT_ID', 'RATIO')
                );
                while ($arRatio = $rsRatios->Fetch())
                {
                    $arRatio['PRODUCT_ID'] = (int)$arRatio['PRODUCT_ID'];
                    if (isset($arOffersLink[$arRatio['PRODUCT_ID']]))
                    {
                        $intRatio = (int)$arRatio['RATIO'];
                        $dblRatio = (float)$arRatio['RATIO'];
                        $mxRatio = ($dblRatio > $intRatio ? $dblRatio : $intRatio);
                        if (CATALOG_VALUE_EPSILON > abs($mxRatio))
                            $mxRatio = 1;
                        elseif (0 > $mxRatio)
                            $mxRatio = 1;
                        $arOffersLink[$arRatio['PRODUCT_ID']]['CATALOG_MEASURE_RATIO'] = $mxRatio;
                    }
                }

                if (!empty($propertyList))
                {
                    \CIBlockElement::GetPropertyValuesArray($arOffersLink, $intOfferIBlockID, $arFilter);
                    foreach ($arResult as &$arOffer)
                    {
                        if (self::$needDiscountCache)
                            \CCatalogDiscount::SetProductPropertiesCache($arOffer['ID'], $arOffer["PROPERTIES"]);
                        if (\Bitrix\Main\Config\Option::get('sale', 'use_sale_discount_only') === 'Y')
                            BCatalog\Discount\DiscountManager::setProductPropertiesCache($arOffer['ID'], $arOffer["PROPERTIES"]);

                        foreach ($propertyList as $pid)
                        {
                            if (!isset($arOffer["PROPERTIES"][$pid]))
                                continue;
                            $prop = &$arOffer["PROPERTIES"][$pid];
                            $boolArr = is_array($prop["VALUE"]);
                            if(
                                ($boolArr && !empty($prop["VALUE"])) ||
                                (!$boolArr && (string)$prop["VALUE"] !== '')
                            )
                            {
                                $arOffer["DISPLAY_PROPERTIES"][$pid] = \CIBlockFormatProperties::GetDisplayValue($arOffer, $prop, "catalog_out");
                            }
                            unset($boolArr, $prop);
                        }
                        unset($pid);
                    }
                    unset($arOffer);
                }

                if (!empty($extPrices))
                {
                    foreach ($extPrices as $origID => $prices)
                    {
                        foreach ($prices as $oneRow)
                        {
                            $oneRow['PROPERTIES'] = $arOffersLink[$origID]['PROPERTIES'];
                            $oneRow['DISPLAY_PROPERTIES'] = $arOffersLink[$origID]['DISPLAY_PROPERTIES'];
                            $oneRow['CATALOG_MEASURE_RATIO'] = $arOffersLink[$origID]['CATALOG_MEASURE_RATIO'];
                        }
                    }
                }
                if (self::$needDiscountCache)
                {
                    \CCatalogDiscount::SetProductSectionsCache($arOfferIDs);
                    \CCatalogDiscount::SetDiscountProductCache($arOfferIDs, array('IBLOCK_ID' => $intOfferIBlockID, 'GET_BY_ID' => 'Y'));
                }

                if (\Bitrix\Main\Config\Option::get('sale', 'use_sale_discount_only') === 'Y')
                {
                    $pricesAllow = \CIBlockPriceTools::GetAllowCatalogPrices($arPrices);
                    if (!empty($pricesAllow))
                    {
                        $USER_ID = (int)$USER_ID;
                        $userGroups = array(2);
                        if ($USER_ID > 0)
                            $userGroups = CUser::GetUserGroup($USER_ID);
                        elseif (isset($USER) && $USER instanceof CUser)
                            $userGroups = $USER->GetUserGroupArray();
                        BCatalog\Discount\DiscountManager::preloadPriceData($arOfferIDs, $pricesAllow);
                        BCatalog\Discount\DiscountManager::preloadProductDataToExtendOrder($arOfferIDs, $userGroups);
                        unset($userGroups);
                    }
                    unset($pricesAllow);
                }

                //исправленный фрагмент получаем все скидки и кидаем в функцию, чтобы не рассчитывать в цикле
                if(\CModule::IncludeModule("sale"))
                {
                    $dbProductDiscounts = \CSaleDiscount::GetList(
                        array(),
                        array(),
                        false,
                        false,
                        array("XML_ID", "ID","ACTIONS","NAME")
                    );

                    while ($rsProductDiscounts = $dbProductDiscounts->Fetch()) {

                        $actions = unserialize($rsProductDiscounts["ACTIONS"]);

                        //массивы всех условий
                        $artArray = [];
                        $arrayArticul = $actions["CHILDREN"][0]["CHILDREN"][0]["CHILDREN"];
                        foreach($arrayArticul as $element){
                            $resultArrayArticul[$element["DATA"]["value"]][$rsProductDiscounts["ID"]] = $rsProductDiscounts["ID"];
                            $artArray[$element["DATA"]["value"]] = $element["DATA"]["value"];
                        }

                        $xmlArray = [];
                        $arrayXmlId = $actions["CHILDREN"][0]["CHILDREN"][1]["CHILDREN"];
                        foreach($arrayXmlId as $element){
                            $resultArrayXmlId[$element["DATA"]["value"]][$rsProductDiscounts["ID"]] = $rsProductDiscounts["ID"];
                            $xmlArray[$element["DATA"]["value"]] = $element["DATA"]["value"];
                        }

                        $discountArray[$rsProductDiscounts["ID"]]["VALUE"] = $actions["CHILDREN"][0]["DATA"]["Value"];
                        $discountArray[$rsProductDiscounts["ID"]]["NAME"] = $rsProductDiscounts["NAME"];
                        $discountArray[$rsProductDiscounts["ID"]]["ACTIONS"]["ARTICUL"] = $artArray;
                        $discountArray[$rsProductDiscounts["ID"]]["ACTIONS"]["XML"] = $xmlArray;
                        $discountArray[$rsProductDiscounts["ID"]]["ACTIONS"]["productLimit"] = $actions["CHILDREN"][0]["CHILDREN"][2];
                        $discountArray[$rsProductDiscounts["ID"]]["ACTIONS"]["OfferLimit"] =$actions["CHILDREN"][0]["CHILDREN"][3];
                    }
                }

                foreach ($arResult as &$arOffer)
                {
                    $arOffer['CATALOG_QUANTITY'] = (
                        0 < $arOffer['CATALOG_QUANTITY'] && is_float($arOffer['CATALOG_MEASURE_RATIO'])
                        ? (float)$arOffer['CATALOG_QUANTITY']
                        : (int)$arOffer['CATALOG_QUANTITY']
                    );
                    $arOffer['MIN_PRICE'] = false;


                    $arOffer["PRICES"] = CatalogWithOfferWork::GetItemPricesWithDiscounts($arOffersIBlock["OFFERS_IBLOCK_ID"], $arPrices, $arOffer, $vat_include, $arCurrencyParams, $USER_ID, $LID, $resultArrayArticul, $resultArrayXmlId, $discountArray);

                    if (!empty($arOffer["PRICES"]))
                    {
                        foreach ($arOffer['PRICES'] as &$arOnePrice)
                        {
                            if ($arOnePrice['MIN_PRICE'] == 'Y')
                            {
                                $arOffer['MIN_PRICE'] = $arOnePrice;
                                break;
                            }
                        }
                        unset($arOnePrice);
                    }
                    $arOffer["CAN_BUY"] = \CIBlockPriceTools::CanBuy($arOffersIBlock["OFFERS_IBLOCK_ID"], $arPrices, $arOffer);
                }

                if (isset($arOffer))
                    unset($arOffer);
            }
            if (!empty($arMeasureMap))
            {
                $rsMeasures = \CCatalogMeasure::getList(
                    array(),
                    array('@ID' => array_keys($arMeasureMap)),
                    false,
                    false,
                    array('ID', 'SYMBOL_RUS')
                );
                while ($arMeasure = $rsMeasures->GetNext())
                {
                    $arMeasure['ID'] = (int)$arMeasure['ID'];
                    if (isset($arMeasureMap[$arMeasure['ID']]) && !empty($arMeasureMap[$arMeasure['ID']]))
                    {
                        foreach ($arMeasureMap[$arMeasure['ID']] as $intOneKey)
                        {
                            $arResult[$intOneKey]['CATALOG_MEASURE_NAME'] = $arMeasure['SYMBOL_RUS'];
                            $arResult[$intOneKey]['~CATALOG_MEASURE_NAME'] = $arMeasure['~SYMBOL_RUS'];
                        }
                        unset($intOneKey);
                    }
                }
            }
        }
        return $arResult;
    }

    /*
        Функция скопирвоанная из ядра, чтобы выднести получение скидок за цикл
    */
    public static function GetItemPricesWithDiscounts(
        $IBLOCK_ID,
        $arCatalogPrices,
        $arItem, $bVATInclude = true,
        $arCurrencyParams = array(),
        $USER_ID = 0,
        $LID = SITE_ID,
        $resultArrayArticul,
        $resultArrayXmlId,
        $discountArray
    )
    {

        $arPrices = array();

        if (empty($arCatalogPrices) || !is_array($arCatalogPrices))
            return $arPrices;

        global $USER;
        static $arCurUserGroups = array();
        static $strBaseCurrency = '';

        if (self::$catalogIncluded === null)
            self::$catalogIncluded = Loader::includeModule('catalog');
        if (self::$catalogIncluded)
        {
            $existUser = (isset($USER) && $USER instanceof CUser);
            $USER_ID = (int)$USER_ID;
            $intUserID = ($USER_ID > 0 ? $USER_ID : 0);
            if ($intUserID == 0 && $existUser)
                $intUserID = (int)$USER->GetID();
            if (!isset($arCurUserGroups[$intUserID]))
            {
                $arUserGroups = array(2);
                if ($intUserID > 0)
                    $arUserGroups = CUser::GetUserGroup($intUserID);
                elseif ($existUser)
                    $arUserGroups = $USER->GetUserGroupArray();
                Main\Type\Collection::normalizeArrayValuesByInt($arUserGroups);
                $arCurUserGroups[$intUserID] = $arUserGroups;
                unset($arUserGroups);
            }
            $arUserGroups = $arCurUserGroups[$intUserID];

            $boolConvert = false;
            $resultCurrency = '';
            if (isset($arCurrencyParams['CURRENCY_ID']) && !empty($arCurrencyParams['CURRENCY_ID']))
            {
                $boolConvert = true;
                $resultCurrency = $arCurrencyParams['CURRENCY_ID'];
            }
            if (!$boolConvert && '' == $strBaseCurrency)
                $strBaseCurrency = Currency\CurrencyManager::getBaseCurrency();

            $percentVat = $arItem['CATALOG_VAT'] * 0.01;
            $percentPriceWithVat = 1 + $arItem['CATALOG_VAT'] * 0.01;

            $strMinCode = '';
            $boolStartMin = true;
            $dblMinPrice = 0;
            $strMinCurrency = ($boolConvert ? $resultCurrency : $strBaseCurrency);
            \CCatalogDiscountSave::Disable();

            foreach ($arCatalogPrices as $key => $value)
            {
                $catalogPriceValue = 'CATALOG_PRICE_'.$value['ID'];
                $catalogCurrencyValue = 'CATALOG_CURRENCY_'.$value['ID'];
                if (
                    !$value['CAN_VIEW']
                    || !isset($arItem[$catalogPriceValue])
                    || $arItem[$catalogPriceValue] == ''
                )
                    continue;

                $arItem[$catalogPriceValue] = (float)$arItem[$catalogPriceValue];
                // get final price with VAT included.
                if ($arItem['CATALOG_VAT_INCLUDED'] != 'Y')
                    $arItem[$catalogPriceValue] *= $percentPriceWithVat;

                $originalCurrency = $arItem[$catalogCurrencyValue];
                $calculateCurrency = $arItem[$catalogCurrencyValue];
                $calculatePrice = $arItem[$catalogPriceValue];
                $cnangeCurrency = ($boolConvert && $resultCurrency != $calculateCurrency);
                if ($cnangeCurrency)
                {
                    $calculateCurrency = $resultCurrency;
                    $calculatePrice = \CCurrencyRates::ConvertCurrency($calculatePrice, $originalCurrency, $resultCurrency);
                }

                // so discounts will include VAT
                $discounts = array();
                if (self::isEnabledCalculationDiscounts())
                {
                    //старый вариант расчета
                    /*$discounts = CAllCatalogDiscountCustom::GetDiscount(
                        $arItem['ID'],
                        $arItem['IBLOCK_ID'],
                        array($value['ID']),
                        $arUserGroups,
                        'N',
                        $LID,
                        array()
                    );*/
                    if(count($discountArray) > 0)
                    {
                        $availableDiscount = [];
                        //выбираем скидки для артикулов 
                        foreach($resultArrayArticul[$arItem['PROPERTY_CML2_LINK_PROPERTY_ARTICUL_VALUE']] as $discountId){
                            //если есть в скидке есть xmlid и артикулы
                            if(count($discountArray[$discountId]["ACTIONS"]["ARTICUL"]) > 0 && count($discountArray[$discountId]["ACTIONS"]["XML"]) > 0){
                                //если в массивах есть нужные то добавляем
                                if($discountArray[$discountId]["ACTIONS"]["ARTICUL"][$arItem['PROPERTY_CML2_LINK_PROPERTY_ARTICUL_VALUE']] && $discountArray[$discountId]["ACTIONS"]["XML"][$arItem['XML_ID']]){
                                    $availableDiscount[$discountId] = $discountArray[$discountId];
                                }
                            }elseif(count($discountArray[$discountId]["ACTIONS"]["ARTICUL"]) > 0){
                                //если в массивах есть артикул то добавляем
                                if($discountArray[$discountId]["ACTIONS"]["ARTICUL"][$arItem['PROPERTY_CML2_LINK_PROPERTY_ARTICUL_VALUE']]){
                                    $availableDiscount[$discountId] = $discountArray[$discountId];
                                }
                            }elseif(count($discountArray[$discountId]["ACTIONS"]["XML"]) > 0){
                                //если в массивах есть артикул то добавляем
                                if($discountArray[$discountId]["ACTIONS"]["XML"][$arItem['XML_ID']]){
                                    $availableDiscount[$discountId] = $discountArray[$discountId];
                                }
                            }
                        }
                        foreach($resultArrayXmlId[$arItem['XML_ID']] as $discountId){
                            //если есть в скидке есть xmlid и артикулы
                            if(count($discountArray[$discountId]["ACTIONS"]["ARTICUL"]) > 0 && count($discountArray[$discountId]["ACTIONS"]["XML"]) > 0){
                                //если в массивах есть нужные то добавляем
                                if($discountArray[$discountId]["ACTIONS"]["ARTICUL"][$arItem['PROPERTY_CML2_LINK_PROPERTY_ARTICUL_VALUE']] && $discountArray[$discountId]["ACTIONS"]["XML"][$arItem['XML_ID']]){
                                    $availableDiscount[$discountId] = $discountArray[$discountId];
                                }
                            }elseif(count($discountArray[$discountId]["ACTIONS"]["ARTICUL"]) > 0){
                                //если в массивах есть артикул то добавляем
                                if($discountArray[$discountId]["ACTIONS"]["ARTICUL"][$arItem['PROPERTY_CML2_LINK_PROPERTY_ARTICUL_VALUE']]){
                                    $availableDiscount[$discountId] = $discountArray[$discountId];
                                }
                            }elseif(count($discountArray[$discountId]["ACTIONS"]["XML"]) > 0){
                                //если в массивах есть артикул то добавляем
                                if($discountArray[$discountId]["ACTIONS"]["XML"][$arItem['XML_ID']]){
                                    $availableDiscount[$discountId] = $discountArray[$discountId];
                                }
                            }
                        }

                        if(count($availableDiscount)>0){
                            //ищем наибольшую скидку
                            $maxDiscountValue = 100;
                            foreach($availableDiscount as $discount){
                                if($discount["VALUE"] < $maxDiscountValue){
                                    $maxDiscountValue = $discount["VALUE"];
                                    $discountPriceNew = $calculatePrice - $calculatePrice*$maxDiscountValue/100; 
                                }
                            }
                        }
                    }
                }

                //старый вариант расчета
                /*$discountPrice = \CCatalogProduct::CountPriceWithDiscount(
                    $calculatePrice,
                    $calculateCurrency,
                    $discounts
                );*/
                if($discountPriceNew)
                    $discountPrice = $discountPriceNew;
                else
                    $discountPrice = $calculatePrice;

                unset($discounts);
                if ($discountPrice === false)
                    continue;

                $originalPriceWithVat = $arItem[$catalogPriceValue];
                $priceWithVat = $calculatePrice;
                $discountPriceWithVat = $discountPrice;

                if ($cnangeCurrency)
                    $originalDiscountPrice = \CCurrencyRates::ConvertCurrency($discountPrice, $calculateCurrency, $arItem[$catalogCurrencyValue]);
                else
                    $originalDiscountPrice = $discountPrice;
                $originalDiscountPriceWithVat = $originalDiscountPrice;

                $arItem[$catalogPriceValue] /= $percentPriceWithVat;
                $calculatePrice /= $percentPriceWithVat;
                $originalDiscountPrice /= $percentPriceWithVat;
                $discountPrice /= $percentPriceWithVat;

                $originalVatValue = $originalPriceWithVat - $arItem[$catalogPriceValue];
                $vatValue = $priceWithVat - $calculatePrice;
                $originalDiscountVatValue = $originalDiscountPriceWithVat - $originalDiscountPrice;
                $discountVatValue = $discountPriceWithVat - $discountPrice;

                $roundPriceWithVat = BCatalog\Product\Price::roundPrice($value['ID'], $discountPriceWithVat, $calculateCurrency);
                $roundPrice = BCatalog\Product\Price::roundPrice($value['ID'], $discountPrice, $calculateCurrency);

                $priceResult = array(
                    'VALUE_NOVAT' => $calculatePrice,
                    'PRINT_VALUE_NOVAT' => \CCurrencyLang::CurrencyFormat($calculatePrice, $calculateCurrency, true),

                    'VALUE_VAT' => $priceWithVat,
                    'PRINT_VALUE_VAT' => \CCurrencyLang::CurrencyFormat($priceWithVat, $calculateCurrency, true),

                    'VATRATE_VALUE' => $vatValue,
                    'PRINT_VATRATE_VALUE' => \CCurrencyLang::CurrencyFormat($vatValue, $calculateCurrency, true),

                    'DISCOUNT_VALUE_NOVAT' => $discountPrice,
                    'PRINT_DISCOUNT_VALUE_NOVAT' => \CCurrencyLang::CurrencyFormat($discountPrice, $calculateCurrency, true),

                    'DISCOUNT_VALUE_VAT' => $discountPriceWithVat,
                    'PRINT_DISCOUNT_VALUE_VAT' => \CCurrencyLang::CurrencyFormat($discountPriceWithVat, $calculateCurrency, true),

                    'DISCOUNT_VATRATE_VALUE' => $discountVatValue,
                    'PRINT_DISCOUNT_VATRATE_VALUE' => \CCurrencyLang::CurrencyFormat($discountVatValue, $calculateCurrency, true),

                    'CURRENCY' => $calculateCurrency,

                    'ROUND_VALUE_VAT' => $roundPriceWithVat,
                    'ROUND_VALUE_NOVAT' => $roundPrice,
                    'ROUND_VATRATE_VALUE' => $roundPriceWithVat - $roundPrice,
                );

                if ($cnangeCurrency)
                {
                    $priceResult['ORIG_VALUE_NOVAT'] = $arItem[$catalogPriceValue];
                    $priceResult['ORIG_VALUE_VAT'] = $originalPriceWithVat;
                    $priceResult['ORIG_VATRATE_VALUE'] = $originalVatValue;
                    $priceResult['ORIG_DISCOUNT_VALUE_NOVAT'] = $originalDiscountPrice;
                    $priceResult['ORIG_DISCOUNT_VALUE_VAT'] = $originalDiscountPriceWithVat;
                    $priceResult['ORIG_DISCOUNT_VATRATE_VALUE'] = $originalDiscountVatValue;
                    $priceResult['ORIG_CURRENCY'] = $originalCurrency;
                }

                $priceResult['PRICE_ID'] = $value['ID'];
                $priceResult['ID'] = $arItem['CATALOG_PRICE_ID_'.$value['ID']];
                $priceResult['CAN_ACCESS'] = $arItem['CATALOG_CAN_ACCESS_'.$value['ID']];
                $priceResult['CAN_BUY'] = $arItem['CATALOG_CAN_BUY_'.$value['ID']];
                $priceResult['MIN_PRICE'] = 'N';

                if ($bVATInclude)
                {
                    $priceResult['VALUE'] = $priceWithVat;
                    $priceResult['PRINT_VALUE'] = $priceResult['PRINT_VALUE_VAT'];
                    $priceResult['UNROUND_DISCOUNT_VALUE'] = $discountPriceWithVat;
                    $priceResult['DISCOUNT_VALUE'] = $roundPriceWithVat;
                    $priceResult['PRINT_DISCOUNT_VALUE'] = \CCurrencyLang::CurrencyFormat(
                        $roundPriceWithVat,
                        $calculateCurrency,
                        true
                    );
                }
                else
                {
                    $priceResult['VALUE'] = $calculatePrice;
                    $priceResult['PRINT_VALUE'] = $priceResult['PRINT_VALUE_NOVAT'];
                    $priceResult['UNROUND_DISCOUNT_VALUE'] = $discountPrice;
                    $priceResult['DISCOUNT_VALUE'] = $roundPrice;
                    $priceResult['PRINT_DISCOUNT_VALUE'] = \CCurrencyLang::CurrencyFormat(
                        $roundPrice,
                        $calculateCurrency,
                        true
                    );;
                }

                if ((roundEx($priceResult['VALUE'], 2) - roundEx($priceResult['UNROUND_DISCOUNT_VALUE'], 2)) < 0.01)
                {
                    $priceResult['VALUE'] = $priceResult['DISCOUNT_VALUE'];
                    $priceResult['PRINT_VALUE'] = $priceResult['PRINT_DISCOUNT_VALUE'];
                    $priceResult['DISCOUNT_DIFF'] = 0;
                    $priceResult['DISCOUNT_DIFF_PERCENT'] = 0;
                }
                else
                {
                    $priceResult['DISCOUNT_DIFF'] = $priceResult['VALUE'] - $priceResult['DISCOUNT_VALUE'];
                    $priceResult['DISCOUNT_DIFF_PERCENT'] = roundEx(100*$priceResult['DISCOUNT_DIFF']/$priceResult['VALUE'], 0);
                }
                $priceResult['PRINT_DISCOUNT_DIFF'] = \CCurrencyLang::CurrencyFormat(
                    $priceResult['DISCOUNT_DIFF'],
                    $calculateCurrency,
                    true
                );

                if ($boolStartMin)
                {
                    $dblMinPrice = ($boolConvert || ($calculateCurrency == $strMinCurrency)
                        ? $priceResult['DISCOUNT_VALUE']
                        : \CCurrencyRates::ConvertCurrency($priceResult['DISCOUNT_VALUE'], $calculateCurrency, $strMinCurrency)
                    );
                    $strMinCode = $key;
                    $boolStartMin = false;
                }
                else
                {
                    $dblComparePrice = ($boolConvert || ($calculateCurrency == $strMinCurrency)
                        ? $priceResult['DISCOUNT_VALUE']
                        : \CCurrencyRates::ConvertCurrency($priceResult['DISCOUNT_VALUE'], $calculateCurrency, $strMinCurrency)
                    );
                    if ($dblMinPrice > $dblComparePrice)
                    {
                        $dblMinPrice = $dblComparePrice;
                        $strMinCode = $key;
                    }
                }
                unset($calculateCurrency);
                unset($originalCurrency);

                $arPrices[$key] = $priceResult;
                unset($priceResult);
            }
            if ($strMinCode != '')
                $arPrices[$strMinCode]['MIN_PRICE'] = 'Y';
            \CCatalogDiscountSave::Enable();

            unset($percentPriceWithVat);
            unset($percentVat);
        }
        else
        {
            $strMinCode = '';
            $boolStartMin = true;
            $dblMinPrice = 0;
            foreach($arCatalogPrices as $key => $value)
            {
                if (!$value['CAN_VIEW'])
                    continue;

                $dblValue = round(doubleval($arItem["PROPERTY_".$value["ID"]."_VALUE"]), 2);
                if ($boolStartMin)
                {
                    $dblMinPrice = $dblValue;
                    $strMinCode = $key;
                    $boolStartMin = false;
                }
                else
                {
                    if ($dblMinPrice > $dblValue)
                    {
                        $dblMinPrice = $dblValue;
                        $strMinCode = $key;
                    }
                }
                $arPrices[$key] = array(
                    "ID" => $arItem["PROPERTY_".$value["ID"]."_VALUE_ID"],
                    "VALUE" => $dblValue,
                    "PRINT_VALUE" => $dblValue." ".$arItem["PROPERTY_".$value["ID"]."_DESCRIPTION"],
                    "DISCOUNT_VALUE" => $dblValue,
                    "PRINT_DISCOUNT_VALUE" => $dblValue." ".$arItem["PROPERTY_".$value["ID"]."_DESCRIPTION"],
                    "CURRENCY" => $arItem["PROPERTY_".$value["ID"]."_DESCRIPTION"],
                    "CAN_ACCESS" => true,
                    "CAN_BUY" => false,
                    'DISCOUNT_DIFF_PERCENT' => 0,
                    'DISCOUNT_DIFF' => 0,
                    'PRINT_DISCOUNT_DIFF' => '0 '.$arItem["PROPERTY_".$value["ID"]."_DESCRIPTION"],
                    "MIN_PRICE" => "N",
                    'PRICE_ID' => $value['ID']
                );
            }
            if ($strMinCode != '')
                $arPrices[$strMinCode]['MIN_PRICE'] = 'Y';
        }
        return $arPrices;
    }

    public static function isEnabledCalculationDiscounts()
    {
        return (self::$calculationDiscounts >= 0);
    }
}
