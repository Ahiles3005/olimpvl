<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?
if (!empty($_GET['order']) && $_GET['order'] == 'Y') {
	LocalRedirect('/order/');
}
if ($arResult['FORM_TYPE'] == 'logout') {
	LocalRedirect('/personal-area/');
}
?>
<?
if ($arResult['SHOW_ERRORS'] == 'Y' && $arResult['ERROR']):
	ShowMessage($arResult['ERROR_MESSAGE']);
	
	endif;
?>

    <?
	if (count($arResult["ERRORS"]) > 0):
		foreach ($arResult["ERRORS"] as $key => $error)
			    if (intval($key) == 0 && $key !== 0) 
					    $arResult["ERRORS"][$key] = str_replace("#FIELD_NAME#", "&quot;".GetMessage("REGISTER_FIELD_".$key)."&quot;", $error);
					    
						    ShowError(implode("<br />", $arResult["ERRORS"]));
						    
							elseif($arResult["USE_EMAIL_CONFIRMATION"] === "Y"):
							    ?>
								<p><?echo GetMessage("REGISTER_EMAIL_WILL_BE_SENT")?></p>
								    <?endif;?>