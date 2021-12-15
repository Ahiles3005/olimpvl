<?
require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_before.php');

global $APPLICATION;
$data = array();

CModule::IncludeModule("iblock");

$KEY_CITY = (empty($_COOKIE['KEY_CITY'])) ? Olimp\City::getDefaultCityCode() : $_COOKIE['KEY_CITY'];

//Получить ID города
$arFilterCity = array("IBLOCK_ID" => IBLOCK_ID_GEO_CITY, "ACTIVE" => "Y");
$arSelect = array("ID", "IBLOCK_ID", "PROPERTY_MAP_CENTER", "PROPERTY_KEY", "NAME");
$resCity = CIBlockElement::GetList(array("SORT" => "asc"), $arFilterCity, false, false, $arSelect );
while ($obCity = $resCity->GetNextElement()) {
    $arCity = $obCity->GetFields();

    //Координаты центра карты
    if ($arCity['PROPERTY_KEY_VALUE'] == $KEY_CITY) {
        // $data['center'] = explode(',', $arCity['PROPERTY_MAP_CENTER_VALUE']);
        $data['center'] = array("55.76", "37.64");
    }

    $city = array(
        'name' => $arCity['NAME'],
        'shops' => array()
    );

    $arSelect = array("ID", "IBLOCK_ID", "NAME", "PROPERTY_LOCATION", "PROPERTY_ADDRESS", "PROPERTY_PHONE");
    $arFilter = array("IBLOCK_ID" => IBLOCK_ID_SHOPS, "ACTIVE" => "Y", "PROPERTY_REF_CITY" => $arCity["ID"]);
    $resElem = CIBlockElement::GetList(Array("SORT" => "asc"), $arFilter, false, false, $arSelect);
    while ($obElem = $resElem->GetNextElement()) {
        $arStore = $obElem->GetFields();
        if (!empty($arStore['PROPERTY_LOCATION_VALUE'])) {
            $city['shops'][] = array(
                'id' => $arStore['ID'],
                'name' => htmlspecialchars_decode($arStore['NAME']),
                'address' => htmlspecialchars_decode($arStore["PROPERTY_ADDRESS_VALUE"]),
                'telephone' => $arStore["PROPERTY_PHONE_VALUE"],
                'worktime' => $arStore["PROPERTY_SCHEDULE_VALUE"],
                'coordinates' => explode(',', $arStore['PROPERTY_LOCATION_VALUE']),
            );
        }
    }

    $data['cities'][] = $city;
}

echo json_encode($data);