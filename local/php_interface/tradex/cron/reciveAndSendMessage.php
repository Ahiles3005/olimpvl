<?
require_once(dirname(__FILE__)."/../main.php");

$messageFromImport = trim($argv[1]);

$pos = strripos($messageFromImport, "Import success.");

$file = file_get_contents('../log/import.txt', true);

if($pos === false){

    $arEventFields = array(
      "EMAIL_TO" => "maxim@bashtov.net",
//         "EMAIL_TO" => "kaznacheev@greensight.ru,sitkin@greensight.ru",
        "ERROR" => "$messageFromImport",
        "IMPORT_FILE" => "$file"
    );

    CEvent::Send("RESULT_IMPORT_ERROR", SITE_ID, $arEventFields);

    echo date("Y-m-d H:i:s")." Import failed,send message. Stack:";
    echo $file;

}else{

    echo date("Y-m-d H:i:s")." Import success.";

}
