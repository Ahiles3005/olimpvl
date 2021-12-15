<?php

session_start();

$c = !empty($_REQUEST['city'])?strip_tags($_REQUEST['city']):'vladivostok';

setcookie('KEY_CITY',$c,time()+(3600*24*365),"/");

$r = !empty($_SERVER['HTTP_REFERER']) && strpos($_SERVER['HTTP_REFERER'],'sel_city')===false ? $_SERVER['HTTP_REFERER'] : "/";

if(isset($_REQUEST['die'])){

json_encode(array("success"=>true));
exit;
}

$_r = "__=".time();

if(strpos($r,"?")!==false){

$re = explode("?",$r);

if(!empty($re[1])){

parse_str($re[1], $r1);
 
 if(isset($r1["__"])){
    unset($r1["__"]); 
 }
 
 $r1 = implode("&",$r1);
 
 
 $r = $re[0]."?".$r1;

}


 
}

// header("Location: ".$r);exit;

//die($r.(strpos($r,"?")!==false ? ( $r."&".$_r ) : $r."?".$_r  ));
header("Location: ".$r.(strpos($r,"?")!==false ? ( "&".$_r ) : "?".$_r ));exit;


