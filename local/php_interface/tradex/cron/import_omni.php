<?
require_once(dirname(__FILE__)."/../main.php");
if (!empty($argv[1]) && $argv[1] == 2 | 3) {
    TradexImport::cronOmni(true, $argv[1]);
} 
