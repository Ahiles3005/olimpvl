<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

if ($arParams['MAIN_PAGE'] != 'Y') {
	foreach (range('A', 'Z') as $i) $arResult["LETTERS"][] = $i;
}