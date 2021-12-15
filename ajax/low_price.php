<?php 

require($_SERVER['DOCUMENT_ROOT'] .'/bitrix/modules/main/include/prolog_before.php');
CModule::IncludeModule("form");
if(!sizeof($_POST)) die("error");

$ib =  19;


// ID веб-формы
$FORM_ID = 5;

// массив описывающий загруженную на сервер фотографию
//$arImage = CFile::MakeFileArray($_SERVER["DOCUMENT_ROOT"]."/images/photo.gif");

// массив значений ответов
$arValues = $_POST;

// создадим новый результат


//var_dump($arValues);
if ($RESULT_ID = CFormResult::Add($FORM_ID, false,"N"))
{
    echo "Результат #".$RESULT_ID." успешно создан";
}
else
{
    global $strError;
    echo $strError;
    
    
    }

// $APPLICATION->IncludeComponent(
// 	"bitrix:form.result.new",
// 	"",
// 	Array(
// 		"CACHE_TIME" => "3600",
// 		"CACHE_TYPE" => "A",
// 		"CHAIN_ITEM_LINK" => "",
// 		"CHAIN_ITEM_TEXT" => "",
// 		"COMPONENT_TEMPLATE" => ".default",
// 		"EDIT_URL" => "",
// 		"IGNORE_CUSTOM_TEMPLATE" => "N",
// 		"LIST_URL" => "",
// 		"SEF_MODE" => "N",
// 		"SUCCESS_URL" => "",
// 		"USE_EXTENDED_ERRORS" => "N",
// 		"VARIABLE_ALIASES" => Array("RESULT_ID"=>"RESULT_ID","WEB_FORM_ID"=>"WEB_FORM_ID"),
// 		"WEB_FORM_ID" => "5" // ID нашей веб-формы
// 	)
//     );
//     
    
 /*$APPLICATION->IncludeComponent(
	"bitrix:form",
	"",
	Array(
		"AJAX_MODE" => "Y",
		"AJAX_OPTION_ADDITIONAL" => "",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"CACHE_TIME" => "3600",
		"CACHE_TYPE" => "A",
		"CHAIN_ITEM_LINK" => "",
		"CHAIN_ITEM_TEXT" => "",
		"COMPOSITE_FRAME_MODE" => "A",
		"COMPOSITE_FRAME_TYPE" => "AUTO",
		"EDIT_ADDITIONAL" => "N",
		"EDIT_STATUS" => "Y",
		"IGNORE_CUSTOM_TEMPLATE" => "N",
		"NOT_SHOW_FILTER" => array("", ""),
		"NOT_SHOW_TABLE" => array("", ""),
		"RESULT_ID" => $_REQUEST['RESULT_ID'],
		"SEF_MODE" => "N",
		"SHOW_ADDITIONAL" => "N",
		"SHOW_ANSWER_VALUE" => "N",
		"SHOW_EDIT_PAGE" => "Y",
		"SHOW_LIST_PAGE" => "Y",
		"SHOW_STATUS" => "Y",
		"SHOW_VIEW_PAGE" => "Y",
		"START_PAGE" => "new",
		"SUCCESS_URL" => "",
		"USE_EXTENDED_ERRORS" => "N",
		"VARIABLE_ALIASES" => Array(
			"action" => "action"
		),
		"WEB_FORM_ID" => "5"
	)
);*/



?>