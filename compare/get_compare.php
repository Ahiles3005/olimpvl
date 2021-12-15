<?

define('LANG', 's1');
define('SITE_ID', 's1');
define("NO_KEEP_STATISTIC", true);
 
require_once($_SERVER['DOCUMENT_ROOT'] . "/bitrix/modules/main/include/prolog_before.php");
CModule::IncludeModule('main');
header('Content-Type:application/json; charset=UTF-8');
// var_dump($_SESSION["CATALOG_COMPARE_LIST"][CATALOG_BLOCK_ID]);

if(!empty($_SESSION["CATALOG_COMPARE_LIST"][1])){

$a = count($_SESSION["CATALOG_COMPARE_LIST"][1]['ITEMS']);

}else{
$a=0;

}


die(json_encode(array('count'=>$a)));