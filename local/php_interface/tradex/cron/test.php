<?
require_once(dirname(__FILE__)."/../main.php");

/*$arEventFields = array(
	"EMAIL_TO" => "aakzn@mail.ru",
);
echo SITE_ID;
CEvent::SendImmediate("RESULT_IMPORT_ERROR", SITE_ID, $arEventFields, "N", "");*/

/*$arEventFields = array(
        //"EMAIL_TO" => "kaznacheev@greensight.ru,sitkin@greensight.ru",
		//"kaznacheev@greensight.ru",
		"EMAIL_TO" => "aakzn@mail.ru",
        "ERROR" => "test",
        "IMPORT_FILE" => "test"
);

CEvent::SendImmediate("RESULT_IMPORT_ERROR", SITE_ID, $arEventFields, "N", "");*/

/*$arEventFields = array(
    "EMAIL_TO" => "aakzn@mail.ru",
	"ERROR" => "test",
	"IMPORT_FILE" => "test",
    );

CEvent::Send("RESULT_IMPORT_ERROR", SITE_ID, $arEventFields);*/

/*$arFields = array("ID" => 277374,
                    "ACTIVE" => "N",
                );
$class = new CIBlockElement();
echo " test ";
echo CIBlockElement::Delete(277374);*/
/*
        $arListPriceType = TradexGeneral::getListPriceTypeID();
        $arListObject = TradexGeneral::getPriceTypeByObject();
		echo " first";
		print_r($arListPriceType);
		echo " second";
		print_r($arListObject);
		        foreach ($arListObject as $arObject) {
            $resListObject[$arObject["PRICE_TYPE"]][] = $arListPriceType[$arObject["CODE"]];
        }
		echo " !!!!";
print_r($resListObject);
		*/
		/*$class = new CPrice;
        $res = $class->GetList(
            array(),
            array("PRODUCT_ID" => [243661]),
            false,
            false,
            array("CATALOG_GROUP_ID", "ID", "PRICE", "PRODUCT_ID")
        );
        while ($ar = $res->Fetch()) {
            $arListPriceOffers[$ar["PRODUCT_ID"]][$ar["CATALOG_GROUP_ID"]] = array(
                "ID" => $ar["ID"],
                "PRICE" => $ar["PRICE"]
            );
        }
		print_r($arListPriceOffers);

        $arListPriceType = TradexGeneral::getListPriceTypeID();
        $arListObject = TradexGeneral::getPriceTypeByObject();

        foreach ($arListObject as $arObject) {
            $resListObject[$arObject["PRICE_TYPE"]][] = $arListPriceType[$arObject["CODE"]];
        }
print_r($resListObject);

$arFields = array(
	"EXTRA_ID" => false,
	"PRODUCT_ID" => 243661,
	"PRICE" => DoubleVal(153991),
	"CURRENCY" => "RUB",
	"QUANTITY_FROM" => false,
	"QUANTITY_TO" => false,
);

$PRICE_TYPE = 1;

if (!empty($resListObject[$PRICE_TYPE])) {
	foreach ($resListObject[$PRICE_TYPE] as $PRICE_TYPE_CITY_ID) {
		
		$arFields["CATALOG_GROUP_ID"] = $PRICE_TYPE_CITY_ID;
		$ID = $arListPriceOffers[243661][$PRICE_TYPE_CITY_ID]["ID"];
		if ((int)$arListPriceOffers[243661][$PRICE_TYPE_CITY_ID]["PRICE"] == (int)$elem["retailprice"]) continue;
		$arProductID[] = $PRODUCT_ID;
		$action = ($ID) ? "UPDATE" : "ADD";
		print_r($arFields);
		print_r($ID);
		print_r($action);
		$class = new CPrice;
		echo $class->Update($ID, $arFields)."<br>";
		//TradexLog::addLog("Файл price, XML_ID - " . $elem["plu"] . ", PRICE - " . $arFields["PRICE"] . ", ID - " . $ID . ", Действие: " . $action, "price.txt");
	}
}
*/

//чистка
/*$class = new CPrice;
        $res = $class->GetList(
            array(),
            array("PRODUCT_ID" => [399163]),
            false,
            false,
            array("CATALOG_GROUP_ID", "ID", "PRICE", "PRODUCT_ID")
        );
        while ($ar = $res->Fetch()) {
            $arListPriceOffers[$ar["PRODUCT_ID"]][$ar["CATALOG_GROUP_ID"]][] = array(
                "ID" => $ar["ID"],
                "PRICE" => $ar["PRICE"]
            );
        }
		print_r($arListPriceOffers);
		

*/
/*CPrice::Delete(3154455);//297988
CPrice::Delete(3154456);//297988
CPrice::Delete(3154457);//297988
CPrice::Delete(3154458);//297988
CPrice::Delete(3154459);//297988*/




TradexLog::addLog("Добавление активным товарам характеристик продуктов", "add_to_element_products_property.txt");

$obEl = new CIBlockElement();
$arSelect = Array("ID", "PROPERTY_ARTICUL", "ACTIVE");
$arFilter = Array("IBLOCK_ID" => IBLOCK_ID_OFFERS, "ACTIVE" => "Y");
$res = $obEl->GetList(Array(), $arFilter, false, false, $arSelect);
$count = 0;
while($ob = $res->GetNext())
{
	CCatalogProduct::Add(array("ID" => $ob['ID']));

	$allElemt[] = $ob['ID'];


	$count = $count + 1;
	if($count % 5000 == 0){
		TradexLog::addLog($count, "add_to_element_products_property.txt");
	}
}
TradexLog::addLog("Конец добавление активным товарам характеристик продуктов", "add_to_element_products_property.txt");

/*
$el = new CIBlockElement;
$count = 0;
foreach($allElemt as $elemId){
	$arLoadProductArray = Array(
	  "ACTIVE"         => "Y",            // активен
	);
	$res = $obEl->Update($elemId, $arLoadProductArray);

	$count = $count + 1;
	if($count % 50 == 0){
		TradexLog::addLog($count, "add_to_element_products_property.txt");
	}
}


TradexLog::addLog("Конец апдейта", "add_to_element_products_property.txt");*/


echo " test";