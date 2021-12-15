<?
	if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

	$keyCity = (empty($_COOKIE['KEY_CITY'])) ? Olimp\City::getDefaultCityCode() : $_COOKIE['KEY_CITY'];
	
	$cache = new \CPHPCache();
	if ( $cache->InitCache(3600, "olimp_section_{$arParams['SECTION_ID']}_".getCahceKey(), "/catalog/") ) {
        $arResult = $cache->GetVars();
    } elseif( $cache->StartDataCache() ) {
        $arSelect = array("ID", "SECTION_ID", "IBLOCK_ID", "NAME", "DATE_ACTIVE_FROM", "PROPERTY_*");
        $arFilter = array(
            "SECTION_ID" => IntVal($arParams['SECTION_ID']),
        );
        $res = CIBlockElement::GetList(array(), $arFilter, false, false, $arSelect);

        $count = 0;
        while ($ob = $res->GetNextElement()) {
            $arProps = $ob->GetProperties();
            if ($arProps['AMOUNT_' . $keyCity]['VALUE'] == "Y") {
                $count++;
            }
        }

        $arResult['AMOUNT_COUNT'] = $count;

        foreach ($arResult["ITEMS"] as $key => $arItem) {
            foreach ($arItem["VALUES"] as $val => $ar) {
                if (empty(trim($ar["VALUE"])))
                    unset($arResult['ITEMS'][$key]['VALUES'][$val]);
            }
        }

        $cache->EndDataCache($arResult);
    }


    function getCahceKey() {
	    $params = [];
        foreach ($_REQUEST as $key => $param) {
            if (strpos($key, 'smart_filter_') === false) continue;
            $params[] = $param;
        }

        return md5(json_encode($params));
    }