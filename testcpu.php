<?php

$start = microtime(true);

for($i=0;$i<100000000;$i++){
$a = 10000*10000*10000;
}

echo 'ok '.( microtime(true)-$start ) ;
echo PHP_EOL;

