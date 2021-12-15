<?php

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");
global $USER;

$isIncudeModules = CModule::IncludeModule("iblock") && CModule::IncludeModule("main") && CModule::IncludeModule("catalog") && CModule::IncludeModule("sale");

use Bitrix\Highloadblock as HL;
use Bitrix\Main\Entity;

$answer = array(
    "isSuccess" => true,
);

$cityName = $_SESSION['CITY'];



$_POST['count'] = isset($_POST['count'])?intval($_POST['count']):1;
$_POST['count'] = $_POST['count']<=0?1:$_POST['count'];

$convectorCity = array(
    'Владивосток' => 6,
    'Якутск' => 9,
    'Находка' => 10
);
if ($isIncudeModules && !empty($_POST)) {

    $db_result = CCatalogStore::GetList(
        array(),
        array('UF_CITY' => $convectorCity[$cityName]),
        false,
        false,
        array('UF_CITY')
    );

    $stores = array();
    while ($store = $db_result->Fetch()) {
        $stores[] = $store;
    }

    if (!empty($stores)) {
        foreach ($stores as $store) {
            $rsStore = CCatalogStoreProduct::GetList(array(), array('PRODUCT_ID' => $_POST['id'], 'STORE_ID' => $store['ID']), false, false, array('AMOUNT'));

            if ($arStore = $rsStore->Fetch()) {
                $dbBasketItems = CSaleBasket::GetList(
                    array(),
                    array(
                        "PRODUCT_ID" => $_POST['id'],
                        "FUSER_ID" => CSaleBasket::GetBasketUserID(),
                        "ORDER_ID" => "NULL"
                    ),
                    false,
                    false,
                    array()
                );
                // получаем такие же товары из корчины
                $arItems = $dbBasketItems->Fetch();
///var_dump($_POST['count'] + $arItems['QUANTITY']);
                if ($arStore['AMOUNT'] >= $_POST['count'] + $arItems['QUANTITY']) {
                    // получаем инфу о товаре
                    $arItemCatalog = CCatalogProduct::GetByID($_POST['id']);
                    
                    
                    
                    /** если первый раз добавляем в корзину, привязываем к складу  **/
                    if(!isset($_SESSION['storeId'])){
                    
                    $_SESSION['storeId'] = $store['ID'];
                   
                   }
                   
                   
                   /** если другой склад  **/
                   if($_SESSION['storeId'] !== $store['ID']){
                  // echo "***";
                  // не добавляем, а задаем вопрос очистить крзину и добавить или не добавлять
                   $answer['isSuccess'] = false;
                   $answer['status'] = 'newsklad';
                   $answer['code'] = 7777777;
                   
                 //  var_dump($_SESSION['storeId']);
                  // var_dump( $store['ID']);
                  
                   break;
                   }
                   
                    
                //    var_dump($arItemCatalog);
                    
               //     exit;
                    
                    $arItem = CIBlockElement::GetList(
                        array(),
                        array(
                            'ID' => $_POST['id']
                        )
                    )->Fetch();

                    // получаем id цены соответствующая текущему городу
                    $id_price_city = getCityId();
                   
                    $db_price = CPrice::GetList(
                        array(),
                        array(
                            "PRODUCT_ID" => $_POST['id'],
                            "CATALOG_GROUP_ID" => $id_price_city
                        )
                    );
                    // получаем цену товара по городу
                    $priceItem = $db_price->Fetch();

                    // Добавляем товар в корзину
                    $arField = array(
                        "PRODUCT_ID" => $_POST['id'],
                        "PRICE" => $priceItem['PRICE'],
                        "CURRENCY" => "RUB",
                        "WEIGHT" => $arItemCatalog['WEIGHT'],
                        "QUANTITY" => $_POST['count'],
                        "LID" => LANG,
                        "CAN_BUY" => "Y",
                        "NOTES" => "",
                        "NAME" => $arItem['NAME'],
                        "DETAIL_PAGE_URL" => $arItem['DETAIL_PAGE_URL']
                    );
//                    pp($arField);
                    $answer['code'] = CSaleBasket::Add($arField);
                    $answer['isAlreadyAdd'] = $arItems;

                    if(isset($_POST['newsklad']) && $_POST['newsklad'])
                 {   $answer['price'] = number_format($priceItem['PRICE']* $_POST['count'], 0, '', ' ');
                    $answer['count'] = $_POST['count'];}
                    else 
                    $answer['price'] = number_format(\Bitrix\Sale\BasketComponentHelper::getFUserBasketPrice(CSaleBasket::GetBasketUserID(), SITE_ID), 0, '', ' ');
                    $answer['isSuccess'] = true;
                    break;
                }
                else {
                    $answer['isSuccess'] = false;
                    $answer['status'] = 'pre-order';
                }
            }
        }
        if (!$answer['code']) {
//            $answer['debug'] = 'asdasd';
            $answer['isSuccess'] = false;
            $answer['status'] = 'pre-order';
        }
    }
    else {
        $answer['isSuccess'] = false;
//        $answer['debug'] = $cityName;
    }
    
    echo json_encode($answer);
    return true;
}

$answer['isSuccess'] = false;
echo json_encode($answer);
return false; 
