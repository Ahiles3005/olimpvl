<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();?>
<?
$arTitle = array();
$arResult["TEST_COUNT"] = count($arResult["SEARCH"]);
foreach($arResult["SEARCH"] as  $key => $search){
	if($search["PARAM2"] == 7){
		unset($arResult["SEARCH"][$key]);
	}
	if($search["PARAM2"] == 1){
		if(in_array($search["TITLE"], $arTitle)){
			unset($arResult["SEARCH"][$key]);
		}else{
			$arTitle[] = $search["TITLE"];			
		}
	}
}


//$GLOBALS['fb']->fb(count($arResult["SEARCH"]));


?>



