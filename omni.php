<?php

header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Cache-Control: no-store, no-cache, must-revalidate');
header('Cache-Control: post-check=0, pre-check=0', FALSE);
header('Pragma: no-cache');



if(sizeof($_POST)){



$str = PHP_EOL.date("d/m/Y H:i ")." POST: ".json_encode($_POST)." GET: ".json_encode($_GET).PHP_EOL.PHP_EOL;
//echo $str;
file_put_contents($_SERVER['DOCUMENT_ROOT']."/omni.log",$str,FILE_APPEND);



require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");
if (CModule::IncludeModule("sale") && CModule::IncludeModule("catalog"))
{



$_POST = (array)$_POST;

$token = "NB67tbnt67676767";

if(!empty($_POST['qwr'])){


$ORDER_ID =  (int)$_POST['qwr']['Head']['OrdNumber'];

$omni_status = (int)$_POST['qwr']['Head']['status'];


$statuses = [
0=>"DN",
1=>"N",
2=>"ND",
3=>"GP",
4=>"DF",
5=>"F",
6=>"C"

];

$status = isset($statuses[$omni_status])?$statuses[$omni_status]:false;


if($status!==false){
if(!$ORDER_ID)  return;
// получаем объект существующего заказа
$order = Bitrix\Sale\Order::load($ORDER_ID);
 
// задаем значение для поля STATUS_ID - N (статус: принят)
$order->setField('STATUS_ID', $status);
 
// сохраняем изменения
$order->save();

if($omni_status===6){
CSaleOrder::CancelOrder($ORDER_ID, 'Y');
}


$str = PHP_EOL.date("d/m/Y H:i ")." OKAY ".$ORDER_ID." ".$status.PHP_EOL.PHP_EOL;
echo "success";
file_put_contents($_SERVER['DOCUMENT_ROOT']."/omni.log",$str,FILE_APPEND);

}
}





}
}else{

echo "no query";
}




/**


Текущие статусы в битриксе

CP - Ожидает оплаты
DF - Отгружен
DN - Ожидает обработки
F - Выполнен
N - Принят
S - Отправлен

$statuses = [
0=>"N",
1=>"SB",
2=>"ND",
3=>"GP",
4=>"DF",
5=>"F",
6=>""

];

Нужно как - то сопоставить со статусами из омни и добавить недостающие

Проверьте правильно ли сопоставил и непонятен статус недостача, что с заказом делать при нем?

0 – в согласовании,   (N - Принят, если правильно понял)

1 – в подборе, ( SB - Собирается)

2 – недостача, ( ND что это ? )

3 – готов к отгрузке (GP	100	Готов к выдаче),

4 – отгружен,  (DF - Отгружен)

5 – закрыт,    (F - Выполнен)

6 – аннулирован (отмена заказа).


**/
