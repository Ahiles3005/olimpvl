<?
require_once(dirname(__FILE__)."/../main.php");

$IBLOCK_ID = 1; 
$arInfo = GetInfoByProductIBlock($IBLOCK_ID); 
if (is_array($arInfo)) 
{ 
     $rsOffers = CIBlockElement::GetList(array(),array('IBLOCK_ID' => $arInfo['IBLOCK_ID'])); 
     while ($arOffer = $rsOffers->GetNext()) 
    { echo "1234";
	
	break; } 
}