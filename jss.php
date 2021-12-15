<?php 



$data = file_get_contents("./local/templates/main/js/internal.js");

$data = str_replace("KEY_CITY","KEY_CITY1",$data);

file_put_contents("./local/templates/main/js/internal.js",$data);


die("ok");