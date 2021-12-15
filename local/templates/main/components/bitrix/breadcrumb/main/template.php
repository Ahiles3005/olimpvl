<?
	if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

	if (empty($arResult)) return "";
	$strReturn = '';

	$strReturn .= '<ol class="b-breadcrumb">';
	$formatItemSize = count($arResult) - 1;
	for ($index = 0; $index <= $formatItemSize; $index++) {
		$title = htmlspecialcharsex($arResult[$index]["TITLE"]);
		$link = $arResult[$index]["LINK"];
		if ($index != $formatItemSize) {
			$strReturn .= '<li class="b-breadcrumb__item"><a href="'.$link.'" class="b-breadcrumb__link" title="'.$title.'">'.$title.'</a></li>';
		} else {
			$strReturn .= '<li class="b-breadcrumb__item active">'.$title.'</li>';
		}
	}

	$strReturn .= '</ol>';

	return $strReturn;