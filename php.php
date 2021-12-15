<?
error_reporting(E_ALL);
ini_set("display_errors",1);
var_dump(mail("maxim@bashtov.net",'test','test'));;
var_dump(error_get_last());
exit;
phpinfo();
