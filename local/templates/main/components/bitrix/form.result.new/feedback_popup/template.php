<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
?>
<?
if($arResult["FORM_NOTE"]){
    echo $arResult["FORM_NOTE"];
}elseif($arResult["isFormErrors"] == "Y"){
    echo $arResult["FORM_ERRORS_TEXT"];
}else{
    echo "Произошла ошибка при создании обращения.";
}
?>


