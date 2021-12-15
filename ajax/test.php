<?


require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");
global $USER;
 

 $isIncudeModules = CModule::IncludeModule("iblock") && CModule::IncludeModule("main") && CModule::IncludeModule("catalog") && CModule::IncludeModule("sale");
 
 var_dump($_COOKIE['KEY_CITY']);
 
 var_dump(\Olimp\City::getByCode($_COOKIE['KEY_CITY']));
 
 
     $db_result = \CCatalogStore::GetList(
        array(),
        array('UF_CITY' =>\Olimp\City::getByCode($_COOKIE['KEY_CITY'])),
        false,
        false,
        array('UF_CITY')
    );

    $stores = array();
    while ($store = $db_result->Fetch()) {
        $stores[] = $store;
    }
    
    
    var_dump($stores);