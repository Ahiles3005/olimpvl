<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");
global $USER;

$isIncudeModules = CModule::IncludeModule("iblock") && CModule::IncludeModule("main") && CModule::IncludeModule("catalog") && CModule::IncludeModule("sale");

use Bitrix\Highloadblock as HL;
use Bitrix\Main\Entity;

$answer = array(
    "isSuccess" => true,
);
 

 
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