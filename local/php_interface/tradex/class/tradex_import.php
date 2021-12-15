<?php



Class TradexImport extends TradexGeneral
{
    public static $dir = "/home/bitrix/ext_www/n.olimpvl.ru/";
    public static function adminImport($checkHash = true)
    {
        TradexLog::clearFile();
        TradexLog::clearFile("error.txt");
        TradexLog::clearFile("status.txt");
        $start = microtime(true);
        TradexLog::addLog("Начало импорта");

        $arTypeXml = TradexHash::getHashList($checkHash);
        foreach ($arTypeXml as $arType) {
            eval('TradexImport::' . $arType["TYPE"] . "(" . $arType["STATUS"] . ");");
        }

        TradexLog::addLog("Конец импорта");
        $end = microtime(true) - $start;
        TradexLog::addLog("Время выполнения " . $end . " : ");
    }

    public static function statusImport($checkHash = true, $status = 0)
    {
        TradexLog::clearFile();
        TradexLog::clearFile("error.txt");
        TradexLog::clearFile("status.txt");
        $start = microtime(true);
        TradexLog::addLog("Начало импорта");
        $arTypeXml = TradexHash::getHashList($checkHash, $status);
        foreach ($arTypeXml as $arType) {
            TradexLog::addLog('TradexImport::' . $arType["TYPE"] . "(" . $arType["STATUS"] . ");", "import_status.txt");
        }
        TradexLog::addLog("Конец импорта");
        $end = microtime(true) - $start;
        TradexLog::addLog("Время выполнения " . $end . " : ");
    }

    public static function cronImport($checkHash = true, $status = 0)
    {
    echo "*";
        TradexLog::clearFile();
        TradexLog::clearFile("error.txt");
        TradexLog::clearFile("status.txt");
        $start = microtime(true);
        TradexLog::addLog("Начало импорта");
        $arTypeXml = TradexHash::getHashList($checkHash, $status);
        var_dump($arTypeXml);

        foreach ($arTypeXml as $arType) {

        try{
            eval('TradexImport::' . $arType["TYPE"] . "(" . $arType["STATUS"] . ");");



        } catch (Exception $e) {

         echo 'Выброшено исключение: ',  $e->getMessage(), "\n";

         TradexLog::addLog('Выброшено исключение: ',  $e->getMessage(), "\n");

        }

        }

        TradexImport::updateAmountConsole();

        //перерасчет минимальных цен
        $filePathMinPriceStatus = self::$dir . "/local/php_interface/tradex/log/min_price_status.txt";
        $resMinPriceStatus = (array)json_decode(file_get_contents($filePathMinPriceStatus, true));
        $oldStatusMinPriceStatus = $resMinPriceStatus["STATUS"];
        if($status == "2" || $oldStatusMinPriceStatus == "COMPLETE"){
            TradexImport::setStatusUpdateMinPriceFunction();
            TradexLog::addLog("Установка старта пересчета минимальных цен.");
        }

        if($status == "2"){
            TradexImport::deactivationProducts($status);
        }

        echo "Import success.";

        TradexLog::addLog("Начало очистки файлов кэша");
        $obCache = new CPHPCache();
        $obCache->CleanDir();
        TradexLog::addLog("Конец очистки файлов кэша");
        TradexLog::addLog("Конец импорта");
        $end = microtime(true) - $start;
        TradexLog::addLog("Время выполнения " . $end . " : ");
    }


        public static function cronOmni($checkHash = true, $status = 0)
    {
        TradexLog::clearFile();
        TradexLog::clearFile("error.txt");
        TradexLog::clearFile("status.txt");
        $start = microtime(true);
        TradexLog::addLog("Начало импорта");


        if($status==2){
        $price_file = self::$dir."/upload/omni/Stock/stock.txt"; // full
        }else{
        $price_file = self::$dir."/upload/omni/Stock/tmp_ldrStock.txt";
        }

        $price_file = self::$dir."/upload/omni/Stock/stock.txt"; // full


 // [XML_ID=>ID]
        $SKLAD = TradexStock::getStoreList();


           $xml = simplexml_load_string(file_get_contents($price_file));
           $arList = array();


           $arts = array();
           $plus = array();
          // var_dump(sizeof($xml->body->stock));
           foreach($xml->body->stock as $k=> $v){
           $sklad = (int)$v->ObjSt2;
           $count = (int)$v->st;
           $plu = (string)$v->PLU;
           $article = (string)$v->ModelId;
           $plus[(string)$v->PLU] = (string)$v->PLU;
        //   var_dump($article);
           $arts[$article][$plu] = $plu;
           //unset($xml->body->stock[$k]);

           $arList[$plu][$sklad]=$count;


         //  echo $v->NmeSt.PHP_EOL;

           }

           unset($xml);



           $AllarOffersID = array();

           foreach($arts as $art=> $arPlu){

//              foreach ($arList as $plu => $store) {
//                     $arPlu[] = $plu;
//                 }

//                 var_dump($arPlu);
//                 exit;


                 /**   PLU=>PRODUCT_ID  **/
                 $arOffersID = TradexImport::getOfferList(array_map("intval",$arPlu));

                 $prod_plu = array_flip($arOffersID);
                 $prod_plu = array_map("intval",$prod_plu);
               //  var_dump($arOffersID);

                 /**   PLU=>PRODUCT_ID  **/

                 foreach( $arOffersID as $pplu=>$ppropd_id){

                  $AllarOffersID[(string)$pplu] = $ppropd_id;

                 }
               //  $AllarOffersID = array_merge($AllarOffersID,$arOffersID);

                $rsStock = CCatalogStoreProduct::GetList(array(), array("PRODUCT_ID" => $arOffersID), false, false, array('PRODUCT_ID', 'ID', 'STORE_ID', 'AMOUNT'));
                while ($arStock = $rsStock->Fetch()) {



                    $stockList[(string)$prod_plu[(int)$arStock["PRODUCT_ID"]]][(int)$arStock["STORE_ID"]] = $arStock["ID"];

                }

                unset($rsStock);



                }











                           foreach ($arList as $plu => $ofStore) {
                    foreach ($ofStore as $keyStore => $quantity) {

//                     $plu = (string)$plu;
                        if (empty($SKLAD[$keyStore])) {
                        echo "Файл stock, XML_ID товара- " . $plu . ", количество: " . $quantity . ", XML_ID магазина: " . $keyStore, "error.txt".PHP_EOL;
                            TradexLog::addLog("Файл stock, XML_ID товара- " . $plu . ", количество: " . $quantity . ", XML_ID магазина: " . $keyStore, "error.txt");
                            continue;
                        }


//                         var_dump(($AllarOffersID));
//                         exit;
                        $arFields = array(
                            "PRODUCT_ID" => $AllarOffersID[(string)$plu],
                            "AMOUNT" => (int)$quantity,
                            "STORE_ID" => $SKLAD[$keyStore]
                        );
                        $ID = $stockList[$plu][(string)$SKLAD[$keyStore]];

                        if($AllarOffersID[(string)$plu]){


                        TradexGeneral::importStock($ID, $arFields, $plu);

                        }

                        if(!$ID){
                             var_dump($plu);


                        echo "------------------".PHP_EOL;;

                        }


                    }
                }










                /***


                PRICE


                ***/






                   if($status==2){
        $price_file = self::$dir."/upload/omni/Price/price.txt"; // full
        }else{
        $price_file = self::$dir."/upload/omni/Price/tmp_ldrPrice.txt";
        }

        $price_file = self::$dir."/upload/omni/Price/price.txt"; // full















        echo "Import success.";

        TradexLog::addLog("Начало очистки файлов кэша");
//         $obCache = new CPHPCache();
//         $obCache->CleanDir();
        TradexLog::addLog("Конец очистки файлов кэша");
        TradexLog::addLog("Конец импорта");
        $end = microtime(true) - $start;
        TradexLog::addLog("Время выполнения " . $end . " : ");
    }
}
