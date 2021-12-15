<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

$cur_level1 = 0;
$cur_level2 = 0;
$newArResult = array();

foreach ($arResult as $key => $arItem) {
	if ($arItem['DEPTH_LEVEL'] == 1) {
		$cur_level1 = $key;
		$newArResult[$key] = $arItem;
	} elseif ($arItem['DEPTH_LEVEL'] == 2) {
		$cur_level2 = $key;
		$newArResult[$cur_level1]['SECTIONS'][$key] = $arItem;
	} elseif ($arItem['DEPTH_LEVEL'] == 3) {
		if ($arItem['PARAMS']['UF_NOT_MENU'] == 1)
			$newArResult[$cur_level1]['SECTIONS'][$cur_level2]['SECTIONS_HIDE'][] = $arItem;
		else
			$newArResult[$cur_level1]['SECTIONS'][$cur_level2]['SECTIONS_SHOW'][] = $arItem;
	}
}

$arResult = $newArResult;