<?

error_reporting(E_ALL);
ini_set("display_errors",1);

$memcached = new Memcache();
$memcached->addServer('localhost', 11211);



 $memcached->set('xxxxxxxxx',true,0);
var_dump($memcached->get('xxxxxxxxx'));
exit;

    require($_SERVER['DOCUMENT_ROOT'].'/bitrix/header.php');
    
    
    
    
    
    
    echo "******************************************<br>";
    
         $arResult = array();
        $arRefStore = array();
        $obCache = new \CPHPCache();
        $cache_time = 43200;
    
    
    
    
      //$cache_id = 'function_getCountStoreWithProduct_cache_' . md5(serialize($arProductID));
          $cache_id = 'function_getCountStoreWithProductAll_cache_ALL1111' ;
        
         if ($obCache->InitCache($cache_time, $cache_id)) {
         $arAmount =  $obCache->GetVars();
         echo "IN CACHE<br>";
         } elseif ($obCache->StartDataCache()) {
             echo "IN NO CACHE<br>";
//                $rsStore = \CCatalogStoreProduct::GetList(array('PRODUCT_ID' => 'asc'), array('PRODUCT_ID' => $arProductID, '>AMOUNT' => 0, "STORE_ID" => array_keys($arRefStore)), false, false, array('AMOUNT', "STORE_ID", "PRODUCT_ID"));
            
               $rsStore = \CCatalogStoreProduct::GetList(array('PRODUCT_ID' => 'asc'), array( '>AMOUNT' => 0), false, false, array('AMOUNT', "STORE_ID", "PRODUCT_ID"));
               
                
        while ($arStore = $rsStore->Fetch()) {
            $arAmount[$arStore['PRODUCT_ID']][$arStore["STORE_ID"]] = $arStore["AMOUNT"];
        }
      

     
         
           $obCache->EndDataCache($arAmount);
         }
        
        
        
        var_dump(sizeof($arAmount));
        exit;
        
        
    
       $rsStore = \CCatalogStoreProduct::GetList(array('PRODUCT_ID' => 'asc'), array( '>AMOUNT' => 0), false, false, array('AMOUNT', "STORE_ID", "PRODUCT_ID"));
        
        echo "NO cache";  
        $i=10;
        
//         $arStore = $rsStore->Fetch();
//         var_dump($arStore);
        
        
           while ($arStore = $rsStore->Fetch()) {
           //if(!$i) break;
          // var_dump($arStore);
             $arAmount[$arStore['PRODUCT_ID']][$arStore["STORE_ID"]] = $arStore["AMOUNT"];
           $i--;
           }
                     
           
         var_dump(sizeof($arAmount));    
           
           die();
    
           $obCache = new \CPHPCache();
        $cache_time = 43200;
        $cache_id = 'function_getCountStoreWithProductAll_cache_ALL' ;
        
        
    
     if ($obCache->InitCache($cache_time, $cache_id)) {
         $arResult =  $obCache->GetVars();
         
         
         echo "cache";
         } elseif ($obCache->StartDataCache()) {
         
               $rsStore = \CCatalogStoreProduct::GetList(array('PRODUCT_ID' => 'asc'), array( '>AMOUNT' => 0), false, false, array('AMOUNT', "STORE_ID", "PRODUCT_ID"));
                 echo "NO cache";     
                
        while ($arStore = $rsStore->Fetch()) {
            $arAmount[$arStore['PRODUCT_ID']][$arStore["STORE_ID"]] = $arStore["AMOUNT"];
        }
      

        foreach ($arProductID as $productID) {
            $arResult[$productID] = 0;
            $amount = array();
            foreach ($arRefStore as $store => $STORE_ID) {
                if ($arAmount[$productID][$store]) {
                    if(!in_array($STORE_ID, $amount))$amount[] = $STORE_ID;
                }
                $arResult[$productID] = count($amount);
            }
        }
         
           $obCache->EndDataCache($arResult);
         }
        else{
        echo "FUCK";
        }
        
       var_dump(sizeof($arResult)); 
   
    exit;
    
    ?>
 <br><? require($_SERVER['DOCUMENT_ROOT'].'/bitrix/footer.php'); ?>