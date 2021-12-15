<?php 

require($_SERVER['DOCUMENT_ROOT'] .'/bitrix/modules/main/include/prolog_before.php');
CModule::IncludeModule("form");
if(!sizeof($_POST)) die("error");

$ib =  19;


// ID веб-формы
$FORM_ID = 6;

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





?> 
