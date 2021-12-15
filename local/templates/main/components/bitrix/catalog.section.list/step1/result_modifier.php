<?
	if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

	$arResult['URL_PARAMETER'] = '';
	if ($arParams['FILTER_PROPERTY'] == 'BRAND' && !empty($arParams['BRAND_CODE'])) {
		$arResult['URL_PARAMETER'] = getUrlForBrandFilter($arParams['BRAND_CODE']);
	}