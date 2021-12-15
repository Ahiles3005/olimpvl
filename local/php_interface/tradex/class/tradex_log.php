<?

Class TradexLog
{
    public static function clearFile($fileName = "import.txt")
    {
        $file = $_SERVER["DOCUMENT_ROOT"] . "/local/php_interface/tradex/log/" . $fileName;
        file_put_contents($file, "");
    }

    public static function addLog($str, $fileName = "import.txt", $date = true)
    {
        $file = $_SERVER["DOCUMENT_ROOT"] . "/local/php_interface/tradex/log/" . $fileName;
        $str = ($date) ? date('d-m-Y H:i:s') . " - " . $str . "\n" : $str . "\n";
        file_put_contents($file, $str, FILE_APPEND | LOCK_EX);
    }

    public static function getTime($time_1, $time_2)
    {
        $time = $time_2 - $time_1;
        return (int)$time;
    }
}
