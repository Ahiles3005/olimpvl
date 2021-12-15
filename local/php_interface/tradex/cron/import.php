<?

require_once(dirname(__FILE__)."/../main.php");

if (!empty($argv[1]) && $argv[1] == 2 | 3) {

    TradexImport::cronImport(true, $argv[1]);
}