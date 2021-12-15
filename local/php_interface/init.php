<?php
include $_SERVER["DOCUMENT_ROOT"].'/vendor/autoload.php';
require_once($_SERVER['DOCUMENT_ROOT'].'/local/php_interface/include/const.php');
require_once($_SERVER['DOCUMENT_ROOT'].'/local/php_interface/include/functions.php');
require_once($_SERVER['DOCUMENT_ROOT'].'/local/php_interface/include/handlers.php');

use \Bitrix\Main\Loader;
use \Bitrix\Main\SystemException;
use \Bitrix\Sale;
use \Bitrix\Main\UserTable;
use \Bitrix\Main\EventManager;


AddEventHandler("main", "OnBeforeUserRegister", "OnBeforeUserUpdateHandler");
AddEventHandler("main", "OnBeforeUserUpdate", "OnBeforeUserUpdateHandler");

AddEventHandler("main", "OnPageStart", "registerJqueryHandler");
function registerJqueryHandler()
{
        //Hack: when init first extension - bitrix register standart extensions
        $emptyHack = [
            'css' => "",
            'skip_core' => true,
        ];
        \CJSCore::RegisterExt('emptyHack', $emptyHack);
        \CJSCore::Init('emptyHack');

        $arJSLib = array(
            'js' => '/bitrix/js/main/jquery/jquery.min.js',
            'skip_core' => true
        );
        \CJSCore::RegisterExt('jquery', $arJSLib);
}

$GLOBALS['fb'] = FirePHP::getInstance(true);


function isCity($city=''){

return '';

return $city;
}


/**
 * Дополнительные стикеры на товарах из инфоблока "Акции"
 * #Ticket #22332
 * @param int[] $arItemsId [elementId => sectionId]
 * @return array[] [elementId => [actionId => action]]
 * @throws Exception
 */
function getItemStickers($arItemsId)
{
	$result = array();
	$sections = array();

	if (Loader::includeModule('iblock')) {

		$productIds = array_unique(array_keys($arItemsId));
		$sectionIds = array_unique(array_values($arItemsId));
		$select = array(
			"ID", "IBLOCK_ID", "NAME", "PREVIEW_PICTURE", "PROPERTY_STIKER_COLOR", "PROPERTY_FONT_COLOR", "PROPERTY_PRODUCTS", "PROPERTY_SECTIONS"
		);
		$filter = array("IBLOCK_ID" => 35, "ACTIVE_DATE" => "Y", "ACTIVE" => "Y", array(
			'LOGIC' => 'OR',
			["PROPERTY_PRODUCTS" => $productIds],
			["PROPERTY_SECTIONS" => $sectionIds]
		));


		$dbItems = CIBlockElement::GetList(array(), $filter, false, false, $select);
		while ($item = $dbItems->fetch()) {
			$productId = $item['PROPERTY_PRODUCTS_VALUE'];
			$sectionId = $item['PROPERTY_SECTIONS_VALUE'];
			$actionId = $item['ID'];
			$actionData = array(
				'NAME' => $item['NAME'],
				'ICON' => $item['PREVIEW_PICTURE'],
				'BACKGROUND_COLOR' => $item['PROPERTY_STIKER_COLOR_VALUE'],
				'COLOR' => $item['PROPERTY_FONT_COLOR_VALUE'],
			);
			if ($sectionId) {
				$sections[$sectionId][$actionId] = $actionData;
			} elseif ($productId) {
				$result[$productId][$actionId] = $actionData;
			}
		}

		if (count($sections)) {
			foreach ($arItemsId as $productId => $sectionId) {
				if (isset($sections[$sectionId])) {
					$result[$productId] = $sections[$sectionId];
				}
			}
		}
	}

	return $result;
}


$class_file = scandir($_SERVER['DOCUMENT_ROOT'].'/local/php_interface/include/class/');
$class = array();
foreach ($class_file as $k => $v) {
    if ($v!='.' && $v != '..') {
        $name_class = basename($v, '.php');
        $class['Olimp\\'.$name_class] = '/local/php_interface/include/class/' . $v;
    }
}

//Подключение своих классов вне папки class
//$class[ИмяКласса] = 'Путь до класса';
CModule::AddAutoloadClasses('', $class);
Bitrix\Main\EventManager::getInstance()->addEventHandler(
	'sale',
	'OnSaleOrderSaved',
	'Olimp\Order::checkPayment'
	);

Bitrix\Main\EventManager::getInstance()->addEventHandler(
	'sale',
	'OnSaleComponentOrderJsData',
	'Olimp\Order::prepareShop'
);

//  CLEAR OLD BAD COOKIE
// $pth = explode("?",$_SERVER['REQUEST_URI']);
// $pth = $pth[0];
//
// if($pth!=='/')
// 	    setcookie(
// 'KEY_CITY',
// '',
// time()-365*3600*24
//
// );





// Bitrix\Sale\OrderOnSaleComponentOrderCreated

Bitrix\Main\EventManager::getInstance()->addEventHandler(
    'sale',
    'OnSaleOrderSaved',
    'OnOrderAddSubscribe'
);





/*
Bitrix\Main\EventManager::getInstance()->addEventHandler(
	'sale',
	'OnSaleOrderSaved',
	'Olimp\Order::checkPayment'
	);*/



	$eventManager = Bitrix\Main\EventManager::getInstance();
$eventManager->addEventHandler('sale', 'OnOrderNewSendEmail', 'customSaleMails');



function customSaleMails($orderId, &$eventName, &$arFields)
{


    try
    {
        if (Loader::includeModule('sale'))
        {



        $nOrder = new stdClass();

$nOrder->head = [];
$nOrder->body = [];
$nOrder->zakaz = [];



            /**
             *
             * $order - Загруженный заказ на D7.
             * $arOrder - Загруженный заказ на старом ядре, понадобился, т.к на D7 не удалось получить свойство USER_DESCRIPTION
             * $propsCollection - Список свойств заказа.
             * $priceOrder - Стоимость заказа.
             * $priceDeliveryOrder - Стоимость доставки.
             * $currencyOrder - Валюта заказа.
             *
             */
            $order = Sale\Order::load($orderId);
            $arOrder = CSaleOrder::GetByID($orderId);
            $propsCollection = $order->getPropertyCollection();
            $priceOrder = $order->getPrice();
            $priceDeliveryOrder = $order->getDeliveryPrice();
            $currencyOrder = $order->getCurrency();

            if (!empty($arOrder) && !empty($propsCollection))
            {


              $propsData1 = [];

    /**
     * Собираем все свойства и их значения в массив
     * @var \Bitrix\Sale\PropertyValue $propertyItem
     */
    foreach ($propsCollection as $propertyItem) {
        if (!empty($propertyItem->getField("CODE"))) {
            $propsData1[$propertyItem->getField("CODE")] = trim($propertyItem->getValue());
        }
    }


   // $ordera['PROPS'] = $propsData;



                if (is_array($arOrder))
                {
                    $arFields1['CLIENT_COMMENT_ORDER'] = $arOrder['USER_DECRIPTION'];
                }

                if ($emailPropValue = $propsCollection->getUserEmail())
                {
                    $arFields1['CLIENT_EMAIL'] = $emailPropValue->getValue();
                }

                if ($namePropValue = $propsCollection->getPayerName())
                {
                    $arFields1['CLIENT_NAME'] = $namePropValue->getValue();
                }

                if ($phonePropValue = $propsCollection->getPhone())
                {
                    $arFields1['CLIENT_PHONE'] = $phonePropValue->getValue();
                }

                if ($locationPropValue = $propsCollection->getDeliveryLocation())
                {
                    $res = \Bitrix\Sale\Location\LocationTable::getList(array(
                        'filter' => array(
                            '=CODE' => $locationPropValue->getValue(),
                            '=PARENTS.NAME.LANGUAGE_ID' => LANGUAGE_ID,
                            '=PARENTS.TYPE.NAME.LANGUAGE_ID' => LANGUAGE_ID,
                        ),
                        'select' => array(
                            'I_ID' => 'PARENTS.ID',
                            'I_NAME_RU' => 'PARENTS.NAME.NAME',
                            'I_TYPE_CODE' => 'PARENTS.TYPE.CODE',
                            'I_TYPE_NAME_RU' => 'PARENTS.TYPE.NAME.NAME'
                        ),
                        'order' => array(
                            'PARENTS.DEPTH_LEVEL' => 'asc'
                        )
                    ));

                    /**
                     * $deliveryAddress - Итоговый адресс доставки.
                     * $countryName - Страна.
                     * $regionName - Регион.
                     * $cityName - Город.
                     * $subregionName - Район.
                     */
                    $deliveryAddress = '';
                    $countryName = '';
                    $regionName = '';
                    $cityName = '';
                    $subregionName = '';

                    while($item = $res->fetch())
                    {
                        if (!empty($item))
                        {
                            if ($item['I_TYPE_CODE'] == 'COUNTRY')
                            {
                                $countryName = $item['I_NAME_RU'];
                            }
                            if ($item['I_TYPE_CODE'] == 'REGION')
                            {
                                $regionName = $item['I_NAME_RU'];
                            }

                            if ($item ['I_TYPE_CODE'] == 'CITY')
                            {
                                $cityName = $item['I_NAME_RU'] ;
                            }

                            if ($item['I_TYPE_CODE'] == 'SUBREGION')
                            {
                                $subregionName = $item['I_NAME_RU'];
                            }
                        }
                        else
                        {
                            $deliveryAddress = "Адрес доставки не был указан в заказе";
                        }
                    }
                    $deliveryAddress = "Страна: $countryName Регион: $regionName Город: $cityName Район: $subregionName";
                    $arFields1['DELIVERY_ADDRESS'] = $deliveryAddress;
                }

                $arFields1['PRICE_ORDER'] = $priceOrder;
                $arFields1['PRICE_DELIVERY_ORDER'] = $priceDeliveryOrder;
                $arFields1['CURRENCY_ORDER'] = $currencyOrder;
            }




    $dbBasketItems = CSaleBasket::GetList(array(),
	array("ORDER_ID"=>$order->getId()));
	// Выбираем записи из корзины, по id заказа
$ordera = [];
	while ($arItems = $dbBasketItems->Fetch())
	{


// 	"XML_ID" => $arXmlID

 $arResult = $arList = array();
        $arSelect = Array("ID", "IBLOCK_ID", "XML_ID","SIZE","PROPERTY_SIZE");
        $arFilter = array('IBLOCK_ID' => IBLOCK_ID_OFFERS, "ID" => $arItems['PRODUCT_ID']);
        $obElement = new CIBlockElement;
        $res = $obElement->GetList(Array(), $arFilter, false, false, $arSelect);
        while ($ob = $res->GetNextElement()) {
            $arItem = $ob->GetFields();
           // $arResult[$arItem["XML_ID"]] = $arItem["ID"];


           $mxResult = CCatalogSku::GetProductInfo(
$arItems['PRODUCT_ID']
);


$arSelect = Array( "XML_ID","COLOR","PROPERTY_COLOR");
        $arFilter = array('IBLOCK_ID' => IBLOCK_ID_CATALOG, "ID" => $mxResult['ID']);
 $obElement_good = new CIBlockElement;
        $res_good = $obElement_good->GetList(Array(), $arFilter, false, false, $arSelect);

        $ob_good = $res_good->GetNextElement();

          $arItem_good = $ob_good->GetFields();



        }



	$ordera[] = ["IT"=>$arItems,"ITN"=>$arItem,"GOOD"=>$arItem_good];

	}





            $propsData['arFields'] = $arFields;
             $propsData['arFields1'] = $arFields1;
            $propsData['arOrder'] = $arOrder;
            $propsData['ITEMS'] = $ordera;

           $propsData['PROPS'] =   $propsData1;
           // $propsCollection;



            /*{
      "ID": 1,
      "OrdNumber": "00001/17",
      "OrdDate": "2017-02-01",
      "ID_Objects": 100,
      "ID_Client": "K1",
      "BonusCard": "12345678901234567890",
      "LastName": "Фамилия",
      "FirstName": "Имя",
      "Email": "xyz@abc.ru",
      "Phone": "+79163222223",
      "Phone1": "+79163222223",
      "Discount": 0.0000,
      "TransferSum": 0.0000,
      "PaymentAmt": 0.0000,
      "Delivery": 1,
      "PayLevel": 0,
      "Comments": "Комментарий заказа"
    },*/

            $nOrder->head[0] = new stdClass();


            $nOrder->head[0]->ID = $orderId;
            $nOrder->head[0]->OrdNumber = $orderId."/1";
            $nOrder->head[0]->OrdDate = date("Y-m-d",strtotime($propsData['arFields']['ORDER_DATE']));
            $nOrder->head[0]->ID_Objects = '0';
            $nOrder->head[0]->ID_Client = '';
            $nOrder->head[0]->BonusCard = '';
            $nOrder->head[0]->LastName = (string)  $propsData['arOrder']['USER_LAST_NAME'];
            $nOrder->head[0]->FirstName =  (string) $propsData['arOrder']['USER_NAME'];
            $nOrder->head[0]->Email =   (string) $propsData['arOrder']['USER_EMAIL'];
            $nOrder->head[0]->Phone =  preg_replace('/\D/', '',(string) $propsData['arFields1']['CLIENT_PHONE']);;
            $nOrder->head[0]->Phone1 =  '';
            $nOrder->head[0]->Discount = 0;//(float)$propsData['arOrder']['DISCOUNT_VALUE'];
            $nOrder->head[0]->TransferSum = 0;
            $nOrder->head[0]->PaymentAmt = 0;
            $nOrder->head[0]->PayLevel = 0;
            $nOrder->head[0]->Delivery = 1;
            $nOrder->head[0]->Comments = (string) $propsData['arOrder']['COMMENTS'];

            $discount = 0;

            /*{
      "ID_HeOrder": 1,
      "ID_PLU": 100,
      "Barcode": "",
      "ModelID": "",
      "Color": "",
      "SizeName": "",
      "Price": 1000.0000,
      "RowDiscount": 20.0000,
      "Ordered": 2
    },*/


    $qty = explode(".",$item['IT']['QUANTITY']);

    $item['IT']['QUANTITY'] = (int)$qty[0];


            foreach($propsData['ITEMS'] as $k=> $item){
            $nOrder->body[$k] = new stdClass();
            $nOrder->body[$k]->ID_HeOrder = $orderId;
            $nOrder->body[$k]->ID_PLU = $item['ITN']['XML_ID'];
            $nOrder->body[$k]->Barcode = '';
            $nOrder->body[$k]->ModelID = '';
            $nOrder->body[$k]->Color = (string)$item['GOOD']['PROPERTY_COLOR_VALUE'];;
            $nOrder->body[$k]->SizeName = str_replace('"',"", (string)$item['ITN']['PROPERTY_SIZE_VALUE']);
            $nOrder->body[$k]->Price = $item['IT']['PRICE'];
            $nOrder->body[$k]->RowDiscount = 0;//$item['IT']['DISCOUNT_PRICE'];
            $discount+=  $item['IT']['DISCOUNT_PRICE'];
            $nOrder->body[$k]->Ordered = (int)$item['IT']['QUANTITY'];

            }


          $nOrder->head[0]->Discount = 0;//(float)$discount;

            /*{
      "ID_HeOrder": 1,
      "DeliveryService": "Служба доставки 1",
      "Zip": "123456",
      "Address1": "Москва",
      "Address2": "Улица №1",
      "Address3": "д.2 кв.3",
      "ContactPerson": "Иван Иванович Иванов",
      "ContactPhone": "+79163222223",
      "ContactEmail": "xyz@abc.ru",
      "DeliveryDate": "2017-02-05",
      "DeliveryTime": "c 10 до 18",
      "DeliverySum": 100.0000,
      "CommentsD": "Комментарий доставки"
    }*/


// $nOrder->body = new stdClass();
// $nOrder->zakaz = new stdClass();

         $nOrder->zakaz[0] = new stdClass();

         $nOrder->zakaz[0]->ID_HeOrder = $orderId;
         $nOrder->zakaz[0]->DeliveryService = '';
         $nOrder->zakaz[0]->Zip = '';
         $nOrder->zakaz[0]->Address1 = '';
        $nOrder->zakaz[0]->Address2 = '';
        $nOrder->zakaz[0]->Address3 = '';
        $nOrder->zakaz[0]->ContactPerson = '';
        $nOrder->zakaz[0]->ContactPhone = '';
        $nOrder->zakaz[0]->ContactEmail = '';
        $nOrder->zakaz[0]->DeliveryDate = !empty($propsData['PROPS']['DELIVERY_DATE'])?date("Y-m-d",strtotime($propsData['PROPS']['DELIVERY_DATE'])):'';;
        $nOrder->zakaz[0]->DeliveryTime = '';
        $nOrder->zakaz[0]->DeliverySum = '';
        $nOrder->zakaz[0]->CommentsD = '';




         $je = json_encode($nOrder);

            file_put_contents($_SERVER['DOCUMENT_ROOT']."/upload/omni/OrderIN/".$orderId.".json",$je);
             file_put_contents($_SERVER['DOCUMENT_ROOT']."/upload/omni/testOrderIN/".$orderId.".json",$je);


            file_put_contents($_SERVER['DOCUMENT_ROOT']."/sl.txt",json_encode($propsData));


        }
    }
    catch (LoaderException $e)
    {
        ShowError($e->getMessage());
    }
    catch (\Bitrix\Main\ObjectPropertyException $e)
    {
        ShowError($e->getMessage());
    }
    catch (\Bitrix\Main\SystemException $e)
    {
        ShowError($e->getMessage());
    }
}


Bitrix\Main\EventManager::getInstance()->addEventHandler(
    'sale',
    '\Bitrix\Sale\Internals\OrderProps::OnBeforeUpdate',
    function (\Bitrix\Main\Event $e) {

        $params = $e->getParameters();

        if($params['fields']['CODE'] === 'STORE_ID'){

            \Bitrix\Main\Loader::includeModule('iblock');

            // Получаем список магазинов
            $resStores = \Bitrix\Iblock\ElementTable::GetList(
                [
                    'select' => ['ID', 'NAME'],
                    'filter' => ['IBLOCK_ID' => 11, 'ACTIVE' => 'Y',]
                ]
            );
            $stores = [];
            while($ar_store = $resStores->Fetch())
                $stores[$ar_store['ID']] = $ar_store['NAME'];


            // Получаем список вариантов для этого списка
            $resVariants = \Bitrix\Sale\Internals\OrderPropsVariantTable::GetList(
                [
                    'select' => ['ID', 'NAME','VALUE'],
                    'filter' => ['ORDER_PROPS_ID' => 14]
                ]
            );
            $variants = [];
            while($ar_variants = $resVariants->Fetch())
                $variants[$ar_variants['VALUE']] = $ar_variants['NAME'];

            // Проверяем наличие магазина
            foreach ($stores as $store_id => $store) {
                // Если нет то добавляем
                if(!in_array($store, $variants)){
                    \Bitrix\Sale\Internals\OrderPropsVariantTable::add([
                        'ORDER_PROPS_ID' => 14,
                        'NAME' => $store,
                        'VALUE' => $store_id,
                    ]);
                }
            }
        }
    }
);





/**
Проверить кусок
**/


// function OnBeforeOrderPropsAddHandler(\Bitrix\Main\Event  $event)
// {
//     print_r($event);
//     die();
// }
//
//
// \Bitrix\Main\EventManager::getInstance()->addEventHandler(
//     'sale',
//     'OnBeforeOrderPropsAdd',
//     'beforeOrderPropsAddHandler'
// );


\Bitrix\Main\EventManager::getInstance()->addEventHandler(
    'sale',
    'OnBeforeOrderPropsUpdate',
    'beforeOrderPropsAddHandler'
);


function addShopListInputType(\Bitrix\Main\Event $event)
{

    \Bitrix\Sale\Internals\Input\Manager::register(
        "ShopList",
        array(
            'CLASS' => '\Olimp\ShopList',
            'NAME' => 'Список магазинов',
        )
    );

}

\Bitrix\Main\EventManager::getInstance()->addEventHandler(
    'sale',
    'registerInputTypes',
    'addShopListInputType'
);

/**
    / Проверить кусок
**/






//var_dump(Olimp\City::getDefaultCityCode());
if (empty($_COOKIE['KEY_CITY']) ||   $_COOKIE['KEY_CITY']==='null') {
   $kc = Olimp\City::getDefaultCityCode();
    $_COOKIE['KEY_CITY'] = $kc;

       setcookie(
'KEY_CITY',
$kc,
time()+365*3600*24,
'/'
);


}

 $_SESSION['KEY_CITY'] = $_COOKIE['KEY_CITY'];
//var_dump( $_COOKIE['KEY_CITY']);

/* Change login on email for authorization with email*/
function OnBeforeUserUpdateHandler(&$arFields)
{
        $arFields["LOGIN"] = $arFields["EMAIL"];
        return $arFields;
}

if (!function_exists('pre'))
{
    /**
     * @param bool|array $array
     * @param bool $vardump
     * @param bool $description
     * @param bool $debug_print_trace
     *
     * @return bool
     */
    function pre($array = false, $vardump = false, $description = false, $debug_print_trace = false)
    {
        $debug_trace = debug_backtrace();
        if ($debug_print_trace)
        {
            $backtrace = "";
            foreach ($debug_trace as $k => $v)
            {
                if ($v['function'] == "include" || $v['function'] == "include_once" || $v['function'] == "require_once"
                    || $v['function'] == "require"
                )
                {
                    $backtrace
                        .= "#".$k." ".$v['function']."(".$v['args'][0].") called at [".$v['file'].":".$v['line']."]<br />";
                }
                else
                {
                    $backtrace .= "#".$k." ".$v['function']."() called at [".$v['file'].":".$v['line']."]<br />";
                }
            }
            echo "<br /><b>".$backtrace."</b><br />";
        }
        else
        {
            print("<br /><b>".$debug_trace[0]["file"].": ".$debug_trace[0]["line"]."</b><br />");
        }

        if ($description)
        {
            echo "<b>".$description."</b><br />";
        }

        echo "<pre>";
        if ($vardump)
        {
            var_dump($array);
        }
        else
        {
            print_r($array);
        }
        echo "</pre>";

        return true;
    }
}

//удобный админский принт
function dump($array=array(), $count=0, $name='') {
    global $USER;
    if (!is_object($USER)) $USER = new CUser;
    if($USER->GetId()==7602) {
        if($name) echo "=====".$name."====="."<br>";
        echo "<pre>";
        if($count===2) {
            var_dump($array);
        } else {
            if($count===1)  echo "Count = ".count($array)."<br>";
            print_r($array);
        }
        echo "</pre>";
    }
}
?>
