<?
	if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

	$avgSectCount = 0;

	$arSectionsSortByLettersDepthLevel3 = array();
	$arSectionsSortByLettersDepthLevel2 = array();
	$arSectionsSortByLettersDepthLevel1 = array();
	$arSectionsDepthLevel3 = array();
	$arSectionsDepthLevel2 = array();

	/**
	 * Собираем буквы
	 *
	 */
	foreach ($arResult["SECTIONS"] as $sectKey => $arSection) {
		if ($arSection["RELATIVE_DEPTH_LEVEL"] >= 2 && $arSection["ELEMENT_CNT"]) {
			// выбор букв для фильтрации
			$firstNameLetter = mb_substr($arSection["NAME"], 0, 1);
			if (!in_array($firstNameLetter, $arResult["AVAILIBLE_LETTERS"])) {
				$arResult["AVAILIBLE_LETTERS"][] = $firstNameLetter;
			}

		}
	}
	sort($arResult["AVAILIBLE_LETTERS"]);

	/**
	 * Получение структуры каталога в виде иерархического массива
	 * @param $level
	 * @param $IBLOCK_SECTION_ID
	 * @param $arResult
	 * @return mixed
	 */
	function GETDEPTH_SECTION($level, $IBLOCK_SECTION_ID, $arResult) {
		foreach ($arResult as $element) {
			if ($element['RELATIVE_DEPTH_LEVEL'] == $level
					&& $element['IBLOCK_SECTION_ID'] == $IBLOCK_SECTION_ID
					&& $element["ELEMENT_CNT"]) {

				$array[$element['ID']]["THIS"] = $element;
				$array[$element['ID']]['SECTIONS'] = GETDEPTH_SECTION($level + 1, $element['ID'], $arResult);
				$array[$element['ID']]['CNT'] = $element["ELEMENT_CNT"];

				if ($level == 1 && count($array[$element['ID']]['SECTIONS']) == 0) unset ($array[$element['ID']]);

				$array[$element['ID']]['SECTIONS_CNT'] = count($array[$element['ID']]['SECTIONS']);
			}
		}

		return $array;
	}


	function GETDEPTH_ALPHABET($level, $IBLOCK_SECTION_ID, $arResult, $letter) {
		foreach ($arResult as $element) {
			if ($element['RELATIVE_DEPTH_LEVEL'] == $level && $element['IBLOCK_SECTION_ID'] == $IBLOCK_SECTION_ID && $element["ELEMENT_CNT"]) {
				//сортировка по буквам

				$array[$element['ID']]["THIS"] = $element;
				$array[$element['ID']]['SECTIONS'] = GETDEPTH_ALPHABET($level + 1, $element['ID'], $arResult, $letter);
				$array[$element['ID']]['CNT'] = $element["ELEMENT_CNT"];

				if ($level == 1 && count($array[$element['ID']]['SECTIONS']) == 0) unset ($array[$element['ID']]);

				$array[$element['ID']]['SECTIONS_CNT'] = count($array[$element['ID']]['SECTIONS']);
			}
		}
		foreach ($array as $key=>$try) {
			if (mb_substr($try['THIS']['NAME'], 0, 1) != $letter && count($try['SECTIONS'])==0 ) {
				unset ($array[$key]);
			}
		}

		return $array;
	}

	function GETSECTIONS_CNT($array, $cnt) {
		foreach ($array as $section) {
			if ($section['THIS']['DEPTH_LEVEL'] != 1) {
				++$cnt;
			}
			if (isset($section['SECTIONS']) && !empty($section['SECTIONS'])) {
				$cnt += GETSECTIONS_CNT($section['SECTIONS'], 0);
			}
		}
		return $cnt;
	}

	$alph_array = array();
	if (isset($_REQUEST['sort']) && $_REQUEST['sort'] == 'alphabet')
		$alph_array = (isset($_REQUEST['catalogFilter']) && $_REQUEST['catalogFilter'] != '') ? array($_REQUEST['catalogFilter']) : $arResult["AVAILIBLE_LETTERS"];
	elseif (isset($_REQUEST['catalogFilter']) && !empty($_REQUEST['catalogFilter']))
		$alph_array = array($_REQUEST['catalogFilter']);

	if (!empty($alph_array)) {
		foreach ($alph_array as $key => $letter) {
			$arResult["SECTIONS_A"][$letter]["THIS"]['NAME'] = $letter;
			$arResult["SECTIONS_A"][$letter]['SECTIONS'] = GETDEPTH_ALPHABET(1, '', $arResult["SECTIONS"], $letter);
		}
		foreach ($arResult["SECTIONS_A"] as $letter => $value) {
			$arResult["SECTIONS_A"][$letter]['SECTIONS_CNT'] = GETSECTIONS_CNT($value['SECTIONS'], 0);
		}
	} else {
		$arResult["ALL_SECTIONS"] = GETDEPTH_SECTION(1, "", $arResult["SECTIONS"]);
	}