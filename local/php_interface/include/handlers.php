<?
CModule::IncludeModule("statistic");
CModule::IncludeModule("iblock");

#Ticket #21247
/**
 * Исправление размеров в торговых предложениях (запятой на точку)
 *
 */
class CorrectOffersSize
{
    public static function replaceSize()
    {
        \Bitrix\Main\Loader::includeModule('iblock');
        $arProducts = array();
        $arSelect = Array("ID","PROPERTY_SIZE");
        $arFilter = Array("IBLOCK_ID"=>IBLOCK_ID_OFFERS,"?PROPERTY_SIZE"=>",");
        $res = CIBlockElement::GetList(Array(), $arFilter, false, array("nTopCount"=>500), $arSelect);
        while($ob = $res->Fetch())
        {
            $arProducts[$ob['ID']] = str_replace(",",".",$ob["PROPERTY_SIZE_VALUE"]);
        }
        
        if(is_array($arProducts) && count($arProducts))
        {
            foreach($arProducts as $ID=>$SIZE)
            {
                CIBlockElement::SetPropertyValuesEx($ID, IBLOCK_ID_OFFERS, array("SIZE" => $SIZE));
            }
        }
        
        return "CorrectOffersSize::replaceSize();";
    }
}
##


#Ticket #21424
/**
 * Подстановка в детпльную и анонсовую картинку первого изображения из свойства "Картинки товара бол"
 * Class ControlElementImages
 */
class ControlElementImages
{
	public static function setImages()
	{
	    \Bitrix\Main\Loader::includeModule('iblock');
	    $arProducts = [];
	    $arSelect = Array("ID","PROPERTY_PICTURES","DETAIL_PICTURE","PREVIEW_PICTURE");
	    $arFilter = Array("IBLOCK_ID"=>IBLOCK_ID_CATALOG,"ACTIVE_DATE"=>"Y","ACTIVE"=>"Y","!PROPERTY_PICTURES"=>false,"DETAIL_PICTURE"=>false);
	    $res = CIBlockElement::GetList(Array(), $arFilter, false, false, $arSelect);
	    while($ob = $res->Fetch())
	    {
	        if(!$arProducts[$ob['ID']] && CFile::GetPath(intval($ob['PROPERTY_PICTURES_VALUE'])))
	            $arProducts[$ob['ID']] = intval($ob['PROPERTY_PICTURES_VALUE']);
	    }
	    
	    if(is_array($arProducts) && count($arProducts))
	    {
    	    $i=0;
    	    foreach($arProducts as $elId=>$firstImage)
    	    {
    	        if($i==200) break;
    	        $el = new CIBlockElement;
    	        $arFirstImage = CFile::MakeFileArray($firstImage);
    	        $arLoadProductArray = Array(
    	            "PREVIEW_PICTURE" => $arFirstImage,
    	            "DETAIL_PICTURE" => $arFirstImage
    	        );
    	        $res = $el->Update($elId, $arLoadProductArray);
    	        $i++;
    	    }
	    }
	    
	    return "ControlElementImages::setImages();";
	}
}

##


AddEventHandler("statistic", "OnCityLookup", array("CCityLookup_siteshouse_getip", "OnCityLookupGetIp"));
AddEventHandler("main", "OnBuildGlobalMenu", "ImportTradex");
function ImportTradex(&$adminMenu, &$moduleMenu)
{
	$moduleMenu[] = array(
		"parent_menu" => "global_menu_content", // поместим в раздел "Контент"
		"section" => "Интеграция с TradeX",
		"sort" => 1000,                    // сортировка пункта меню
		"url" => "/bitrix/admin/tradex_index.php",  // ссылка на пункте меню
		"text" => 'Интеграция с TradeX',       // текст пункта меню
		"title" => 'Интеграция с TradeX', // текст всплывающей подсказки
		"icon" => "form_menu_icon", // малая иконка
		"page_icon" => "form_page_icon", // большая иконка
		"items_id" => "Интеграция с TradeX",  // идентификатор ветви
		"items" => array()          // остальные уровни меню сформируем ниже.
	);
	$moduleMenu[] = array(
		"parent_menu" => "global_menu_content",
		"section" => "Экспорт XLS",
		"sort" => 1000,
		"url" => "/bitrix/admin/xls_export_index.php",
		"text" => 'Экспорт XLS',
		"title" => 'Экспорт XLS',
		"icon" => "form_menu_icon",
		"page_icon" => "form_page_icon",
		"items_id" => "Экспорт XLS",
		"items" => array()
	);
	$moduleMenu[] = array(
		"parent_menu" => "global_menu_content",
		"section" => "Импорт XLS",
		"sort" => 1000,
		"url" => "/bitrix/admin/xls_import_index.php",
		"text" => 'Импорт XLS',
		"title" => 'Импорт XLS',
		"icon" => "form_menu_icon",
		"page_icon" => "form_page_icon",
		"items_id" => "Импорт XLS",
		"items" => array()
	);
}

class CCityLookup_siteshouse_getip extends CCityLookup
{
	var $country_avail = false;
	var $city_avail = false;

	function OnCityLookupGetIp($arDBRecord = false)
	{
		return new \CCityLookup_siteshouse_getip($arDBRecord);
	}

	function __construct($arDBRecord = false)
	{
		parent::__construct($arDBRecord);
		$DB = \CDatabase::GetModuleConnection('statistic');

		if (!$arDBRecord) {
			$country_recs = \COption::GetOptionString("statistic", "COUNTRY_INDEX_LOADED", "N");
			if ($country_recs !== "Y") {
				$rs = $DB->Query(\CStatistics::DBTopSql("SELECT /*TOP*/ * FROM b_stat_country", 1));
				if ($rs->Fetch()) {
					$country_recs = "Y";
					\COption::SetOptionString("statistic", "COUNTRY_INDEX_LOADED", "Y");
				}
			}

			$this->country_avail = $country_recs === "Y";

			if ($this->country_avail) {
				$city_recs = \COption::GetOptionString("statistic", "CITY_INDEX_LOADED", "N");
				if ($city_recs !== "Y") {
					$rs = $DB->Query(\CStatistics::DBTopSql("SELECT /*TOP*/ * FROM b_stat_city", 1));
					if ($rs->Fetch())
						\COption::SetOptionString("statistic", "CITY_INDEX_LOADED", "Y");
				}
				$this->city_avail = \COption::GetOptionString("statistic", "CITY_INDEX_LOADED", "N") === "Y";
			}

			$this->is_installed = $this->country_avail;
		}
	}

	function GetFullInfo()
	{
		global $APPLICATION;
		// print_r($this->city_id);
		//если в куках есть город, то переопределяем
		$townid = (empty($_COOKIE['KEY_CITY'])) ? Olimp\City::getDefaultCityCode() : $_COOKIE['KEY_CITY'];
		if ($townid) {
			$this->city_id = Olimp\City::getIdByCode($townid);
			$this->country_code = "RU";
		}

		if (!$this->country_full_name && !$this->region_name && !$this->city_name) {
			if ($this->city_id > 0) {
				$DB = \CDatabase::GetModuleConnection('statistic');
				$rs = $DB->Query("
						SELECT
						  C.NAME COUNTRY_NAME,
						  CITY.REGION REGION_NAME,
						  CITY.NAME CITY_NAME
						from
						  b_stat_city CITY
						  INNER JOIN b_stat_country C on C.ID = CITY.COUNTRY_ID
						WHERE
						  CITY.ID = " . intval($this->city_id)
				);
				$ar = $rs->Fetch();
				if ($ar) {
					$this->country_full_name = $ar["COUNTRY_NAME"];
					$this->region_name = $ar["REGION_NAME"];
					$this->city_name = $ar["CITY_NAME"];
				}
			}
		}
		return parent::GetFullInfo();
	}

	function GetDescription()
	{
		return array(
			"CLASS" => "CCityLookup_siteshouse_getip",
			"DESCRIPTION" => 'измененный выбор города',
			"IS_INSTALLED" => true,
			"CAN_LOOKUP_COUNTRY" => $this->country_avail,
			"CAN_LOOKUP_CITY" => $this->city_avail,
		);
	}

	function IsInstalled()
	{
		return true;
	}

	function Lookup()
	{
		$DB = \CDatabase::GetModuleConnection('statistic');

		global $APPLICATION;

		$townid = (empty($_COOKIE['KEY_CITY'])) ? Olimp\City::getDefaultCityCode() : $_COOKIE['KEY_CITY'];;
		if ($townid) {
			$this->city_id = Olimp\City::getIdByCode($townid);
			$this->country_code = "RU";

			return;
		}
		if ($this->city_avail && $this->ip_number) {
			$rs = $DB->Query("
					SELECT *
					FROM b_stat_city_ip
					WHERE START_IP = (
					SELECT MAX(START_IP)
					FROM b_stat_city_ip
					WHERE START_IP <= " . $this->ip_number . "
					)
					AND END_IP >= " . $this->ip_number . "
				", true);

			if ($rs) {
				$ar = $rs->Fetch();
				if ($ar) {
					$this->country_code = $ar["COUNTRY_ID"];
					$this->city_id = $ar["CITY_ID"];
				}
			} else {
				//Here is mysql 4.0 version which does not supports subqueries
				//and not smart to optimeze query
				$rs = $DB->Query("
						SELECT START_IP
						FROM b_stat_city_ip
						WHERE START_IP <= " . $this->ip_number . "
						ORDER BY START_IP DESC
						LIMIT 1
					");
				$ar = $rs->Fetch();
				if ($ar && strlen($ar["START_IP"]) > 0) {
					$rs = $DB->Query("
							SELECT *
							FROM b_stat_city_ip
							WHERE START_IP = " . $ar["START_IP"] . "
							AND END_IP >= " . $this->ip_number . "
						");
					$ar = $rs->Fetch();
					if ($ar) {
						$this->country_code = $ar["COUNTRY_ID"];
						$this->city_id = $ar["CITY_ID"];
					}
				}
			}
		}
		if (!$this->country_code && $this->country_avail) {
			$this->country_code = i2c_get_country();
		}
	}
}


//временно для отлова создания пользователей
/*AddEventHandler("main", "OnBeforeUserAdd", array("CatchUserAdd", "OnBeforeUserAddHandler"));
AddEventHandler("main", "OnAfterUserAdd", array("CatchUserAdd", "OnAfterUserAddHandler"));
class CatchUserAdd
{
	function OnBeforeUserAddHandler(&$arFields)
	{

		//  $arFields["LOGIN"] = $arFields["EMAIL"];
		return $arFields;

//             global $USER;
//             $file = $_SERVER["DOCUMENT_ROOT"]."/log/logUserAdd.txt";
//             $massiveToWrite = $arFields;
//             unset($massiveToWrite["PASSWORD"]);
//             unset($massiveToWrite["CONFIRM_PASSWORD"]);
//             $person = "\n".date("Y-m-d H:i:s")." - [".$USER->GetID()."] (".$USER->GetLogin().") ".$USER->GetFullName()." ".json_encode($massiveToWrite)."\n";
//             file_put_contents($file, $person, FILE_APPEND | LOCK_EX);
//             if(!$USER->GetID() || !$USER->GetLogin()){
//                 file_put_contents($file, "\n".$massiveToWrite["LOGIN"]." not add.\n", FILE_APPEND | LOCK_EX);
//                 $APPLICATION->throwException("Пользователь не авторизован.");
//                 return false;
//             }
	}


	function OnAfterUserAddHandler(&$arFields)
	{

//         header("Location: /");
//         exit;

	}


}*/

/*
	AddEventHandler("main", "OnBuildGlobalMenu", "tradexImport");
	AddEventHandler("main", "OnBuildGlobalMenu", "xlsHelper");

	AddEventHandler("iblock", "OnAfterIBlockElementUpdate", array("EventsHook", "OnAfterIBlockElementUpdateHandler"));
	AddEventHandler("iblock", "OnAfterIBlockElementDelete", array("EventsHook", "IBlockElementDelete"));

	AddEventHandler("catalog", "OnPriceAdd", array("EventsHook", "PriceUpdate"));
	AddEventHandler("catalog", "OnPriceUpdate", array("EventsHook", "PriceUpdate"));

	AddEventHandler("catalog", "OnStoreProductAdd", array("EventsHook", "StoreProductUpdate"));
	AddEventHandler("catalog", "OnStoreProductUpdate", array("EventsHook", "StoreProductUpdate"));

	AddEventHandler("catalog", "OnDiscountAdd", array("EventsHook", "CatalogSaleCalc"));
	AddEventHandler("catalog", "OnDiscountUpdate", array("EventsHook", "CatalogSaleCalc"));
	AddEventHandler("catalog", "OnBeforeDiscountDelete", array("EventsHook", "CatalogSaleDeleteCalc"));

class EventsHook
{
	function OnAfterIBlockElementUpdateHandler(&$arFields)
	{
		if ($arFields['IBLOCK_ID'] == IBLOCK_ID_GEO_CITY) {
			$res = \CIBlockElement::GetProperty($arFields['IBLOCK_ID'], $arFields['ID'], array(), array("CODE" => "DEFAULT"));
			if ($ob = $res->GetNext()) {
				if ($ob['VALUE_ENUM'] == 'Y') {
					$arFilter = array(
						"IBLOCK_ID" => $arFields['IBLOCK_ID'],
						"!ID" => $arFields['ID']
					);
					$resElem = \CIBlockElement::GetList(array(), $arFilter, false, false, array());
					while ($obElem = $resElem->GetNextElement()) {
						$arElement = $obElem->GetFields();
						\CIBlockElement::SetPropertyValuesEx($arElement['ID'], $arElement['IBLOCK_ID'], array('DEFAULT' => ""));
					}
				}
			}
		}
	}

	function IBlockElementDelete($arFields)
	{
		if ($arFields['IBLOCK_ID'] == IBLOCK_ID_OFFERS) {
			$products = \CIBlockElement::GetList(array(), array('ID' => $arFields['PRODUCT_ID']), false, false, array('ID', 'PROPERTY_CML2_LINK'));
			while ($item = $products->GetNext()) {
				if (!empty($item['PROPERTY_CML2_LINK_VALUE']))
					Olimp\Catalog::calcPrice($item['PROPERTY_CML2_LINK_VALUE'], Olimp\Catalog::getPrices(), 's1');
			}
		}
	}

	function PriceUpdate($ID, $arFields)
	{
		$products = \CIBlockElement::GetList(array(), array('ID' => $arFields['PRODUCT_ID']), false, false, array('ID', 'PROPERTY_CML2_LINK', 'IBLOCK_ID'));
		while ($item = $products->GetNext()) {
			if ($item['IBLOCK_ID'] == IBLOCK_ID_OFFERS)
				Olimp\Catalog::calcPrice($item['PROPERTY_CML2_LINK_VALUE'], Olimp\Catalog::getPrices(), 's1');
		}
	}

	/**
	 * Обновление свойства - наличие на складе
	 * @param $ID
	 * @param $arFields
	 *
	function StoreProductUpdate($ID, $arFields)
	{
		//получем элемент
		file_put_contents($_SERVER['DOCUMENT_ROOT'] . '/log.log', "-------------\n", FILE_APPEND);

		$products = \CIBlockElement::GetList(array(), array('ID' => $arFields['PRODUCT_ID']), false, false, array('ID', 'PROPERTY_CML2_LINK', 'IBLOCK_ID'));
		while ($item = $products->GetNext()) {
			//обрабатываем элемент если он ТП
			if ($item['IBLOCK_ID'] == IBLOCK_ID_OFFERS) {
				Olimp\Catalog::UpdateItemAmount($item['PROPERTY_CML2_LINK_VALUE'], $arFields['STORE_ID'], $arFields['AMOUNT']);
			}
		}
	}

	function CatalogSaleCalc($id = false, $arFields = false)
	{
		if (!empty($arFields['PRODUCT_IDS'])) {
			$products = \CIBlockElement::GetList(array(), array('ID' => $arFields['PRODUCT_IDS']), false, false, array('ID', 'PROPERTY_CML2_LINK', 'IBLOCK_ID'));
			while ($item = $products->GetNext()) {
				if ($item['IBLOCK_ID'] == IBLOCK_ID_OFFERS) {
					$prices = (in_array('-1', $arFields['CATALOG_GROUP_IDS'])) ? Olimp\Catalog::getPrices() : Olimp\Catalog::getPrices($arFields['CATALOG_GROUP_IDS']);
					Olimp\Catalog::calcPrice($item['PROPERTY_CML2_LINK_VALUE'], $prices, 's1');
				}
			}
		}
	}

	function CatalogSaleDeleteCalc($ID)
	{
		$arProducts = array();
		$priceId = '';
		$dbProductDiscounts = \CCatalogDiscount::GetList(array("SORT" => "ASC"), array("ID" => $ID));
		while ($arProductDiscounts = $dbProductDiscounts->Fetch()) {
			$arProducts[] = $arProductDiscounts['PRODUCT_ID'];
			$priceId = $arProductDiscounts['CATALOG_GROUP_ID'];
		}

		if (!empty($arProducts)) {
			$products = \CIBlockElement::GetList(array(), array('ID' => $arProducts), false, false, array('ID', 'PROPERTY_CML2_LINK', 'IBLOCK_ID'));
			while ($item = $products->GetNext()) {
				if ($item['IBLOCK_ID'] == IBLOCK_ID_OFFERS) {
					$prices = ($priceId == '-1') ? Olimp\Catalog::getPrices() : Olimp\Catalog::getPrices($priceId);
					Olimp\Catalog::calcPrice($item['PROPERTY_CML2_LINK_VALUE'], $prices, 'hfg');
				}
			}
		}
	}
}
*/
