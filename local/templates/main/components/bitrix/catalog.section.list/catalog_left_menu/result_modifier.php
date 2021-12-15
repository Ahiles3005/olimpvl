<?
	if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

	if (!isset($arParams['BRAND_CODE']) && empty($arParams['BRAND_CODE'])) {
		// получение ссылки на родительский раздел
		$arResult["SECTIONS_BACK_URL"] = $arResult["SECTION"]["SECTION_PAGE_URL"];
		if ($arResult["SECTION"]["DEPTH_LEVEL"] > 1) {
			foreach ($arResult["SECTION"]["PATH"] as $path) {
				if ($path["ID"] == $arParams["REAL_SECTION_ID"]) {
					$arResult["SECTIONS_BACK_URL"] = $path["SECTION_PAGE_URL"];
					break;
				}
			}
		}
	}

	$arResult['URL_PARAMETER'] = '';
	if ($arParams['FILTER_PROPERTY'] == 'BRAND' && !empty($arParams['BRAND_CODE'])) {
		$arResult['URL_PARAMETER'] = getUrlForBrandFilter($arParams['BRAND_CODE']);
	}