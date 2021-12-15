<?php
/*exit;*/
//error_reporting(E_ERROR);
ini_set("display_errors",1);
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");

error_reporting(E_ERROR);
ini_set("display_errors",1);
echo "*";
global $USER;
echo "*";
$USER->Authorize(6980);
echo "*";
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");


die("ok");
