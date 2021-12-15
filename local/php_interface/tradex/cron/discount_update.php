<?
require_once(dirname(__FILE__)."/../main.php");

$dbProductDiscounts = CCatalogDiscount::GetList(
	array("SORT" => "ASC"),
	array("!NOTES" => "", "!CONDITIONS" => ""),
	false,
	false,
	array("ID", "ACTIVE", "NOTES")
);

while ($arProductDiscounts = $dbProductDiscounts->Fetch()) {
	$arFields = array();
	$days = explode(',', $arProductDiscounts['NOTES']);

	if (in_array(date('N'), $days) && $arProductDiscounts['ACTIVE'] == 'N') {
		$arFields = array('ACTIVE' => 'Y');
	} elseif (!in_array(date('N'), $days) && $arProductDiscounts['ACTIVE'] == 'Y') {
		$arFields = array('ACTIVE' => 'N');
	}

	if (!empty($arFields)) {
		$res = CCatalogDiscount::Update($arProductDiscounts['ID'], $arFields);
		if (!$res) {
			$ex = $APPLICATION->GetException();
			$ex->GetString();
		}
	}
}
