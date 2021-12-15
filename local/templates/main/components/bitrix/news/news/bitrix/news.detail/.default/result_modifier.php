<?
	if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

	$rs = CIBlockElement::GetList(
		array('active_from' => 'DESC'), 
		array('IBLOCK_ID' => $arParams['IBLOCK_ID'], '!ID' => $arResult['ID'], '<=DATE_ACTIVE_FROM' => date($DB->DateFormatToPHP(CLang::GetDateFormat("LONG"))), 'ACTIVE' => 'Y'),
		false, 
		array("nPageSize" => 3), 
		array()
	);
	while ($ar = $rs->GetNext()) {
		$arResult['NEWS'][$ar['ID']] = $ar;
		$arResult['NEWS'][$ar['ID']]['PREVIEW_PICTURE_SRC'] = CFile::GetPath($ar["PREVIEW_PICTURE"]);
	}