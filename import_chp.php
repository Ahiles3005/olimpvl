<?php



$_SERVER["DOCUMENT_ROOT"] = __DIR__ ;
require(__DIR__."/bitrix/modules/main/include/prolog_before.php");
global $USER;

$isIncudeModules = CModule::IncludeModule("iblock") && CModule::IncludeModule("main") && CModule::IncludeModule("catalog") && CModule::IncludeModule("sale");



  $arFilter = array('IBLOCK_ID' => 1,'DEPTH_LEVEL' => 1,'ACTIVE'=>'Y'); // выберет потомков без учета активности
   $rsSect1 = CIBlockSection::GetList(array('left_margin' => 'asc'),$arFilter);
   while ($arSect1 = $rsSect1->GetNext())
   {
   



$rsParentSection = CIBlockSection::GetByID($arSect1['ID']);
if ($arParentSection = $rsParentSection->GetNext())
{
   $arFilter = array('IBLOCK_ID' => 1,'>LEFT_MARGIN' => $arParentSection['LEFT_MARGIN'],'<RIGHT_MARGIN' => $arParentSection['RIGHT_MARGIN'],'>DEPTH_LEVEL' => $arParentSection['DEPTH_LEVEL']); // выберет потомков без учета активности
   $rsSect = CIBlockSection::GetList(array('left_margin' => 'asc'),$arFilter);
   while ($arSect = $rsSect->GetNext())
   {
       
       if($arSect['ACTIVE']=="N"){
       $arTest[] = $arSect['NAME'];// получаем подразделы
       }
   }
}

   // $arTest[] = $arSect['NAME'];// получаем подразделы
   }

var_dump($arTest);

exit;


$data = file($_SERVER["DOCUMENT_ROOT"]."/upload/lg.csv");

ob_start();

 @ini_set('implicit_flush', 1);
 
 
foreach($data as $k=> $row){
if(!$k) continue;
$row = explode(";",$row);


    $el = CIBlockElement::GetList(
                    Array("SORT" => "ASC"),
                    Array(
                        "IBLOCK_ID" => 7,
                        "XML_ID" => trim($row[1],'"')
                    )
                );;

                
                $v = $el->Fetch();
                
                
             //   $el = new CIBlockElement;
                
                $arLoadProductArray = array(
                "WEIGHT"=>(int)$row[3],
                "WIDTH"=>(int)$row[4],
                "HEIGHT"=>(int)$row[5],
                "LENGTH"=>(int)$row[6]
                
                );
                
                
//                 var_dump($v['ID']);
//                 var_dump($arLoadProductArray);
                
            $upd =    CCatalogProduct::Update((int)$v['ID'], $arLoadProductArray);
                
                
          //  $upd =    $el->Update((int)$v['ID'], $arLoadProductArray);
                
                
//                 var_dump($upd );
//                 
//                 exit;
                
echo "IPDA ".$v['ID'].PHP_EOL;
ob_flush(); flush(); 
}

ob_end_flush();



die("OK");








exit;

$_SERVER["DOCUMENT_ROOT"] = __DIR__ ;
require(__DIR__."/bitrix/modules/main/include/prolog_before.php");
global $USER;

$isIncudeModules = CModule::IncludeModule("iblock") && CModule::IncludeModule("main") && CModule::IncludeModule("catalog") && CModule::IncludeModule("sale");

$data = file($_SERVER["DOCUMENT_ROOT"]."/upload/chp.csv");

    $data = CIBlockElement::GetList(
                    Array("SORT" => "ASC"),
                    Array(
                        "IBLOCK_ID" => 1,
                        "PROPERTY_BLACK_FRIDAY" => "15327"
                    )
                );;
                
     
   //var_dump(count($data));
while($v = $data->Fetch()){
//if($k==0) continue;

// $v = explode(";",$v);
// 
// 
// $v = trim(trim($v[0],'"'));
// 


        //проверяем инфоблок на наличие
//                 $item = CIBlockElement::GetList(
//                     Array("SORT" => "ASC"),
//                     Array(
//                         "IBLOCK_ID" => 1,
//                         "PROPERTY_5" => strval($v)
//                     )
//                 )->Fetch();;
//                 
//                 


              //  $item
                
                if(!empty($v['ID'])){
                
                  CIBlockElement::SetPropertyValuesEx($v['ID'], 1, array("BLACK_FRIDAY" => false));
                
                
                echo ($v['ID'])."  OK".PHP_EOL;
                }else{
                
                   echo ($v['ID'])."  NO GOOD".PHP_EOL;
                
                }

                
             //   exit;

                
                
                
}




















exit;
use Bitrix\Highloadblock as HL;
use Bitrix\Main\Entity;


$answer = array(
    "isSuccess" => true,
);

$cityName = $_COOKIE['KEY_CITY'];

$id = (int)$_REQUEST["id"];

$_POST['count'] = isset($_POST['count'])?intval($_POST['count']):1;
$_POST['count'] = $_POST['count']<=0?1:$_POST['count'];


$optimalPrice = \CCatalogProduct::GetOptimalPrice($id, 1, array(2), 'N', array(), "s1", array());

$arResult["PRICE"] = (int)round($optimalPrice["RESULT_PRICE"]["BASE_PRICE"]);
$arResult["DISCOUNT_PRICE"] = (int)round($optimalPrice["RESULT_PRICE"]["DISCOUNT_PRICE"]);
$arResult["DISCOUNT_DIFF_PERCENT"] = (int)round($optimalPrice["RESULT_PRICE"]["PERCENT"]);


//var_dump($optimalPrice);

/*
$arAmount = \Olimp\Catalog::getCountStoreWithProduct(array($id), $_COOKIE['KEY_CITY']);


$arResult["NUMBER_OF_STORES"] = ($arAmount[$id]) ? $arAmount[$id] : 0;
*/





if ($isIncudeModules && !empty($_POST)) {

   $db_result = \CCatalogStore::GetList(
        array(),
        array('UF_CITY' =>\Olimp\City::getByCode($_COOKIE['KEY_CITY'])),
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
              //  var_dump($arItems);
                // $answer['count'] = count($arItems)+(int)$_POST['count'];
                
///var_dump($_POST['count'] + $arItems['QUANTITY']);
                if ($arStore['AMOUNT'] >= $_POST['count'] + $arItems['QUANTITY']) {
                    // получаем инфу о товаре
                    $arItemCatalog = CCatalogProduct::GetByID($_POST['id']);
                    
                    
                    
                    /** если первый раз добавляем в корзину, привязываем к складу  **/
                    if(!isset($_SESSION['storeId'])){
                    
                    $_SESSION['storeId'] = $store['ID'];
                   
                   }
                   
                   
                   /** если другой склад  **/
//                    if($_SESSION['storeId'] !== $store['ID']){
//                   // echo "***";
//                   // не добавляем, а задаем вопрос очистить крзину и добавить или не добавлять
//                    $answer['isSuccess'] = false;
//                    $answer['status'] = 'newsklad';
//                    $answer['code'] = 7777777;
//                    
//                  //  var_dump($_SESSION['storeId']);
//                   // var_dump( $store['ID']);
//                   
//                    break;
//                    }
                   
                    
                //    var_dump($arItemCatalog);
                    
               //     exit;
                    
                    $arItem = CIBlockElement::GetList(
                        array(),
                        array(
                            'ID' => $id
                        )
                    )->Fetch();

                    // получаем id цены соответствующая текущему городу
                    $id_price_city = $optimalPrice['RESULT_PRICE']['PRICE_TYPE_ID'];
                   
                    $db_price = CPrice::GetList(
                        array(),
                        array(
                            "PRODUCT_ID" => $id,
                            "CATALOG_GROUP_ID" => $id_price_city
                        )
                    );
                    // получаем цену товара по городу
                    $priceItem = $db_price->Fetch();

                    // Добавляем товар в корзину
                    $arField = array(
                        "PRODUCT_ID" => $id,
                        "PRICE" => $priceItem['PRICE']- ($priceItem['PRICE']*$optimalPrice['RESULT_PRICE']['PERCENT']/100),
                        "CURRENCY" => "RUB",
                        "WEIGHT" => $arItemCatalog['WEIGHT'],
                        "QUANTITY" => $_POST['count'],
                        "LID" => LANG,
                        "CUSTOM_PRICE"=>"Y",
                        "CAN_BUY" => "Y",
                        "NOTES" => "",
                        "NAME" => $arItem['NAME'],
                        "DETAIL_PAGE_URL" => $arItem['DETAIL_PAGE_URL'],
                        
                        
                       // "DISCOUNT_PRICE"=>$optimalPrice['RESULT_PRICE']['DISCOUNT_PRICE'],
//                         "DISCOUNT_NAME"=>$optimalPrice['RESULT_PRICE'][''],
                        "DISCOUNT_VALUE"=>$optimalPrice['RESULT_PRICE']['PERCENT']
//                         "DISCOUNT_COUPON"=>$optimalPrice['RESULT_PRICE']['']
                       
                        
                        
                        
                    );
//                    pp($arField);

// $aaa =  CIBlockElement::GetByID($id);
// 
// $ar_res = $aaa->GetNext();
// var_dump($ar_res);
// exit;
                 //  $answer['code'] = CSaleBasket::Add($arField);
                    
                    
                    
                    
                $answer['code'] =       Add2BasketByProductID(
                $id,
                (int)$_POST['count']
                    );
          
            
                    
                    
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
    
    
    
    $dbBasketItems = CSaleBasket::GetList(
                    array(),
                    array(
                       
                        "FUSER_ID" => CSaleBasket::GetBasketUserID(),
                        "ORDER_ID" => "NULL"
                    ),
                    false,
                    false,
                    array()
                );
                $n = 0;
                // получаем такие же товары из корчины
                while($arItems = $dbBasketItems->Fetch())$n+=$arItems['QUANTITY'];
                
             $answer['count']  = $n;  
    
    echo json_encode($answer);
    return true;
}

$answer['isSuccess'] = false;
echo json_encode($answer);
return false; 
