<?



$_SERVER["DOCUMENT_ROOT"] = realpath(dirname(__FILE__) . "/../../..");

try {

require_once($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_before.php");
} catch (Exception $e) {
    echo 'Выброшено исключение: ',  $e->getMessage(), "\n";
}

require_once dirname(__FILE__) . '/PHPExcel/Classes/PHPExcel.php';
CModule::IncludeModule("iblock");
CModule::IncludeModule("catalog");
CModule::IncludeModule("sale");
set_time_limit(0);


spl_autoload_register(function ($class) {
    $class = strtolower($class);
    $class = str_replace("tradex", "tradex_", $class);
    $class = str_replace("xls", "xls_", $class);
  echo  $_SERVER["DOCUMENT_ROOT"]."/local/php_interface/tradex/class/" .str_replace(array("table","\\"),array("","/"), $class) . '.php'.PHP_EOL;
    include $_SERVER["DOCUMENT_ROOT"]."/local/php_interface/tradex/class/" .str_replace(array("table","\\"),array("","/"), $class) . '.php';
});
// changeStatusUpdateMinPriceFunction