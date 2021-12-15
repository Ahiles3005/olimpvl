<?php
namespace Olimp;

class City
{


/**

ХЗ что это

**/
	public static function getIdByCode($code) {
		\CModule::IncludeModule('iblock');
		$arFilter = array(
			"IBLOCK_ID"    => IBLOCK_ID_GEO_CITY,
			"ACTIVE"       => "Y",
			'PROPERTY_key' => $code
		);
		$res = \CIBlockElement::GetList(array(), $arFilter, false, false, array('ID', 'PROPERTY_ID_CITY_BANNER'));
		if ($ob = $res->GetNext())
			return $ob['PROPERTY_ID_CITY_BANNER_VALUE'];
		else
			return 0;
	}
	
	
	
	
	/**
	
	Получаем ИД из кода
	
	**/
		public static function getByCode($code) {
		\CModule::IncludeModule('iblock');
		$arFilter = array(
			"IBLOCK_ID"    => IBLOCK_ID_GEO_CITY,
			"ACTIVE"       => "Y",
			'PROPERTY_key' => $code
		);
		$res = \CIBlockElement::GetList(array(), $arFilter, false, false, array('ID'));
		if ($ob = $res->GetNext())
			return $ob['ID'];
		else
			return 0;
	}
	
	

	public static function getCurCityInfo() {
		\CModule::IncludeModule('iblock');
		$keyCity = (empty($_COOKIE['KEY_CITY'])) ? \Olimp\City::getDefaultCityCode() : $_COOKIE['KEY_CITY'];

		$arFilter = array(
			"IBLOCK_ID"    => IBLOCK_ID_GEO_CITY,
			"ACTIVE"       => "Y",
			'PROPERTY_key' => $keyCity
		);
		$res = \CIBlockElement::GetList(array(), $arFilter, false, false, array('ID', 'PROPERTY_PHONE', 'PROPERTY_EMAIL'));
		if ($ob = $res->GetNext()) {
			return array(
				'PHONE' => $ob['PROPERTY_PHONE_VALUE'],
				'EMAIL' => $ob['PROPERTY_EMAIL_VALUE']
			);
		}
	}

	public static function getDefaultCityCode() {
		\CModule::IncludeModule('iblock');

		$arFilter = array(
			"IBLOCK_ID"    			 => IBLOCK_ID_GEO_CITY,
			"ACTIVE"      		     => "Y",
			'PROPERTY_DEFAULT_VALUE' => 'Y'
		);
		$res = \CIBlockElement::GetList(array(), $arFilter, false, false, array('ID', 'PROPERTY_KEY'));
		if ($ob = $res->GetNext())
			return $ob['PROPERTY_KEY_VALUE'];
		else
			return 0;
	}
}