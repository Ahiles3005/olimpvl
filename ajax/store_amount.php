<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_before.php");
//require($_SERVER["DOCUMENT_ROOT"] . "/local/templates/main/components/kontora/element.list/store.amount/lang/ru/template.php");

CModule::IncludeModule("catalog");

if (!empty($_REQUEST["id"])) {

    $arRefStore = array();
    $arResult = false;
    $text = array();
    $arAmount = array();
    $obCache = new CPHPCache();
    $cache_time = 3600;
    $cache_id = 'ajax_store_id';
    $PRODUCT_ID = $_REQUEST["id"];
    if ($obCache->InitCache($cache_time, $cache_id)) {
        $arRefStore = $obCache->GetVars();
    } elseif ($obCache->StartDataCache()) {
        $arFilter = array("IBLOCK_ID" => IBLOCK_ID_SHOPS, "ACTIVE" => "Y", ">PROPERTY_REF_CITY" => 0);
        $resStore = CIBlockElement::GetList(array("SORT" => "ASC"), $arFilter, false, false, array("ID", "IBLOCK_ID"));
        while ($obStore = $resStore->GetNextElement()) {
            $arFields = $obStore->GetFields();
            $arProp = $obStore->GetProperties(array(), array("CODE" => "REF_STORE"));
            $storeList = $arProp["REF_STORE"]["VALUE_XML_ID"];
            $arRefStore[$arFields["ID"]] = (!empty($storeList) ? $storeList : array());
        }
        unset($obStore);
        $obCache->EndDataCache($arRefStore);
    }

    $rsStore = CCatalogStoreProduct::GetList(array(), array('PRODUCT_ID' => $PRODUCT_ID, 'AMOUNT' > 0), false, false, array('AMOUNT', "STORE_ID"));
    while ($arStore = $rsStore->Fetch()) {
        $arAmount[$arStore["STORE_ID"]] = $arStore["AMOUNT"];
    }

    foreach ($arRefStore as $STORE_ID => $arStore) {
        $amount = false;
        foreach ($arStore as $store) {
            if ($arAmount[$store]) {
                $amount = true;
            }
        }

        
        if($USER->IsAuthorized()){
         $str = ($amount) ? '<div class="b-tab-available__in-stock" data-store="store_' . $STORE_ID . '">' . GetMessage("S_AVAILABLE") . '</div>' : '<div class="b-tab-available__not-available" data-store="store_' . $STORE_ID . '">' . GetMessage("S_NOT_AVAILABLE") . '</div>';
     
        
        }else {
          $str = ($amount) ? '<div class="b-tab-available__in-stock" data-store="store_' . $STORE_ID . '">' . GetMessage("S_AVAILABLE") . '</div>' : '<div class="b-tab-available__not-available" data-store="store_' . $STORE_ID . '">' . GetMessage("S_NOT_AVAILABLE") . '</div>';
    
        // <a type="button" href="#popup-login" data-popup="open" class="btn b-btn__default b-btn__default--sm b-btn__default--product mgc-btn-login-before-cart">Добавить в корзину</a>
        }
      //  $str = ($amount) ? '<div class="b-tab-available__in-stock" data-store="store_' . $STORE_ID . '">' . GetMessage("S_AVAILABLE") . '</div>' : '<div class="b-tab-available__not-available" data-store="store_' . $STORE_ID . '">' . GetMessage("S_NOT_AVAILABLE") . '</div>';
        $text["store_" . $STORE_ID] = $str;

    }

    $arResult = json_encode($text);
    echo $arResult;
}