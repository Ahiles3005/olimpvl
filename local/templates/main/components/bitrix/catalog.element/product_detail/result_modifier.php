<?



if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();






$this->__component->SetResultCacheKeys(array("CACHED_TPL"));

CModule::IncludeModule('sale');
CModule::IncludeModule("catalog");

//Количество товара на складах и выбор товара который есть на складе либо товара с минимальной ценой



$ya = json_encode($arResult["OFFERS"]);

file_put_contents($_SERVER['DOCUMENT_ROOT']."/ya",$ya);


$arOfferID = array();
foreach ($arResult["OFFERS"] as $arOffer) {
    $arOfferID[] = $arOffer["ID"];
}
//var_dump($arOfferID); exit;

$arProduct = array();
$PRODUCT_ID = $arResult["OFFERS"][0]["ID"];
$PRODUCT_KEY = 0;
$arProduct["NUMBER_OF_STORES"] = Olimp\Catalog::getCountStoreWithProduct($arOfferID, isCity($arParams["PRICE_CODE"][0]));

//находим магазин, в котором есть товары(не нужно, дальше ищется, но пока оставлю)
/*foreach($arProduct["NUMBER_OF_STORES"] as $id => $amount){
    if($amount>0){
        $idForCount = $id;
        break;
    }
}*/

//находим магазин, в котором есть товары
foreach ($arResult["OFFERS"] as $key => $offer) {
    if ($arProduct["NUMBER_OF_STORES"][$offer["ID"]] > 0) {
        $PRODUCT_ID = $offer["ID"];
        $PRODUCT_KEY = $key;
        break;
    }
}
//смотрим сколько товаров
$summ=0;
$rsStore = CCatalogStoreProduct::GetList(array(), array('PRODUCT_ID' => $PRODUCT_ID), false, false, array('AMOUNT', "STORE_ID"));
while ($arStore = $rsStore->Fetch()) {
	if($arStore["AMOUNT"]>0)
	$summ=$summ+1;
}

//пока неактуально, синхронизировал с ajax он вроде правильно показывает
//$arProduct["SHOPS_AMOUNT"] = ($arProduct["NUMBER_OF_STORES"][$PRODUCT_ID]) ? $arProduct["NUMBER_OF_STORES"][$PRODUCT_ID] : 0;

$arProduct["SHOPS_AMOUNT"] = $summ;

if ($arProduct["SHOPS_AMOUNT"] == 0) {
    $minPrice = $arResult["OFFERS"][0]["MIN_PRICE"]["DISCOUNT_VALUE"];
    foreach ($arResult["OFFERS"] as $key => $offer) {
        if ($offer["MIN_PRICE"]["DISCOUNT_VALUE"] < $minPrice && $offer["MIN_PRICE"]["DISCOUNT_VALUE"] != 0) {
            $PRODUCT_ID = $offer["ID"];
            $PRODUCT_KEY = $key;
        }
    }
}

$arProduct["ID"] = $PRODUCT_ID;
$arProduct["KEY"] = $PRODUCT_KEY;

$check = false;
//------------------информация о бренде товара----------------------------------
$res = CIBlockElement::GetByID($arResult["PROPERTIES"]["BRAND"]["VALUE"]);
if ($arFields = $res->GetNext()) {
    $arPic = CFile::ResizeImageGet($arFields["PREVIEW_PICTURE"], array('width' => 78, 'height' => 18), BX_RESIZE_IMAGE_PROPORTIONAL, false);
    $arResult["PROPERTIES"]["BRAND"]["NAME"] = $arFields["NAME"];
    $arResult["PROPERTIES"]["BRAND"]["PICTURE"] = $arPic["src"];
    $arResult["PROPERTIES"]["BRAND"]["SRC"] = "/brands/" . $arFields["CODE"] . "/";
}

$secList = array(/*0 => $arResult["IBLOCK_SECTION_ID"]*/);
if (!empty($arResult["PROPERTIES"]["RECOMMENDED"]["VALUE"])) {
    $arFilter = array(
        'IBLOCK_ID' => IBLOCK_ID_CATALOG,
        "XML_ID" => $arResult["PROPERTIES"]["RECOMMENDED"]["VALUE"]
    );
    $res = CIBlockSection::GetList(array(), $arFilter, true, array("ID", "IBLOCK_ID", "XML_ID"));

    while ($ob = $res->GetNext()) {
        $secList[] = $ob['ID'];
    }
}

$arResult["PROPERTIES"]["RECOMMENDED"]["SECTIONS_ID"] = $secList;

//Картинки
$arProduct["PICTURES"]["PIC_SMALL"] = array();
$arProduct["PICTURES"]["PIC_BIG"] = array();
$arProduct["PICTURES"]["ORIGINAL"] = array();
foreach ($arResult["PROPERTIES"]["PICTURES"]["VALUE"] as $key => $picId) {
		$arProduct["PICTURES"]["ORIGINAL"][$key] = CFile::GetPath($picId);

    $arPicSmall = CFile::ResizeImageGet($picId, array('width' => 100, 'height' => 100), BX_RESIZE_IMAGE_PROPORTIONAL, false);
    $arProduct["PICTURES"]["PIC_SMALL"][$key] = $arPicSmall["src"];

    $arPicBig = CFile::ResizeImageGet($picId, array('width' => 680, 'height' => 398), BX_RESIZE_IMAGE_PROPORTIONAL, false);
    $arProduct["PICTURES"]["PIC_BIG"][$key] = $arPicBig["src"];
}

$arProduct["PICTURES"]["MAIN"] = getMainPictureKey($arResult["PROPERTIES"]["PICTURES"]["DESCRIPTION"]);

//Правила подбора

$arResult['SECTION_TERMS'] = '';
$arFilterSection = array(
    'IBLOCK_ID' => $arParams['IBLOCK_ID'],
    'ID' => $arResult['IBLOCK_SECTION_ID']
);
$db_listSection = CIBlockSection::GetList(array(), $arFilterSection, false, array('ID', 'IBLOCK_ID', 'UF_TERMS'));
if ($ar_resultSection = $db_listSection->GetNext()) {
    $arResult['SECTION_TERMS'] = CFile::GetPath($ar_resultSection['UF_TERMS']);
}

//Телефон выбранного города
$arResult['CITY_INFO'] = Olimp\City::getCurCityInfo();

//Отзывы

$arProduct['RESPONSES'] = array();
$rating_summ = 0;
$rating_count = 0;

$arFilterResponse = array(
    'IBLOCK_ID' => IBLOCK_ID_RESPONSE,
    'ACTIVE' => 'Y',
    'PROPERTY_PRODUCT' => $arResult['ID']
);
$arSelectResponse = array(
    'ID',
    'TIMESTAMP_X',
    'CREATED_BY',
    'PREVIEW_TEXT',
    'PROPERTY_PARENT_COMMENT',
    'PROPERTY_PRODUCT_RATING',
    'PROPERTY_CITY.NAME',
        'PROPERTY_UNAME'
);

$resResponse = CIBlockElement::GetList(array("created" => "desc"), $arFilterResponse, false, false, $arSelectResponse);
while ($response = $resResponse->GetNext()) {
    $response["TIMESTAMP_X"] = ConvertDateTime($response["TIMESTAMP_X"], "DD.MM.YYYY");
    if (!empty($response["PROPERTY_PARENT_COMMENT_VALUE"])) {
        $arProduct['RESPONSES'][$response["PROPERTY_PARENT_COMMENT_VALUE"]]["ANSWERS"][$response['ID']] = $response['PREVIEW_TEXT'];
    } else {
        $rsUser = CUser::GetByID($response["CREATED_BY"]);
        $arUser = $rsUser->Fetch();
        $city = $response['PROPERTY_CITY_NAME'];
        if(!empty($response['PROPERTY_UNAME_VALUE'])){
          $response["CREATED_USER_NAME"] = (!empty($city)) ? $response['PROPERTY_UNAME_VALUE'] : $response['PROPERTY_UNAME_VALUE'];
        }else{

          $response["CREATED_USER_NAME"] = (!empty($city)) ? $arUser["NAME"]  : $arUser["NAME"];
        }

        if (!empty($response["PROPERTY_PRODUCT_RATING_VALUE"])) {
            $rating_summ += $response["PROPERTY_PRODUCT_RATING_VALUE"];
            $rating_count++;
        }
    }
    $arProduct['RESPONSES'][$response['ID']] = $response;
}

if (($rating_summ) && ($rating_count)) {
    $star = (int)(2 * $rating_summ / $rating_count);
    $intStar = (int)($star / 2);
    $hallfStar = ($star % 2 != 0) ? true : false;
    $arResult["RATING"] = array("SUMM" => $rating_summ, "COUNT" => $rating_count, "VALUE" => $intStar, "HALFSTAR" => $hallfStar);
}

$arResult["PRODUCT"] = $arProduct;


$arResult["PRODUCT_SPECIFICATIONS"] = array(
    array(
        "NAME" => GetMessage("PRODUCT_NAME"),
        "VALUE" => $arResult["NAME"]
    ),
    array(
        "NAME" => $arResult["PROPERTIES"]["COUNTRY_OF_PRODUCTION"]["NAME"],
        "VALUE" => $arResult["PROPERTIES"]["COUNTRY_OF_PRODUCTION"]["VALUE"]
    ),
    array(
        "NAME" => $arResult["PROPERTIES"]["ARTICUL"]["NAME"],
        "VALUE" => $arResult["PROPERTIES"]["ARTICUL"]["VALUE"]
    ),
    array(
        "NAME" => GetMessage("BRAND"),
        "VALUE" => $arResult["PROPERTIES"]["BRAND"]["NAME"]
    ),
    array(
        "NAME" => $arResult["PROPERTIES"]["SEX"]["NAME"],
        "VALUE" => $arResult["PROPERTIES"]["SEX"]["VALUE"]
    ),
    array(
        "NAME" => $arResult["PROPERTIES"]["SEASON"]["NAME"],
        "VALUE" => implode(", ", $arResult["PROPERTIES"]["SEASON"]["VALUE"])
    ),
    array(
        "NAME" => $arResult["PROPERTIES"]["SEASONALITY"]["NAME"],
        "VALUE" => $arResult["PROPERTIES"]["SEASONALITY"]["VALUE"]
    ),
    array(
        "NAME" => $arResult["PROPERTIES"]["UNITS"]["NAME"],
        "VALUE" => $arResult["PROPERTIES"]["UNITS"]["VALUE"]
    ),
    array(
        "NAME" => $arResult["PROPERTIES"]["COLOR"]["NAME"],
        "VALUE" => $arResult["PROPERTIES"]["COLOR"]["VALUE"]
    )
);
$arPropList = array();
$arFilter = array('IBLOCK_ID' => IBLOCK_ID_CATALOG, "ID" => $arResult["IBLOCK_SECTION_ID"]);
$arSelect = Array("ID", "IBLOCK_ID", "NAME", "UF_PROP_LIST");
$obSection = new CIBlockSection;
$rsSections = $obSection->GetList(array(), $arFilter, false, $arSelect, false);
if ($arSection = $rsSections->Fetch()) {
    $arPropList = explode(",", str_replace(" ", "", $arSection["UF_PROP_LIST"]));
}
foreach ($arPropList as $prop) {
    if (array_key_exists($prop, $arResult["PROPERTIES"])) {
        $strPropCode = $arResult["PROPERTIES"][$prop]["PROPERTY_TYPE"];
        $VALUE = "";
        switch ($strPropCode) {
            case "F":
                if (($arResult["PROPERTIES"][$prop]["MULTIPLE"] == "Y")) {
                    $count = 1;
                    $arFile = array();
                    foreach ($arResult["PROPERTIES"][$prop]["VALUE"] as $fileID) {
                        $arFile[] = "<a download href=\"" . CFile::getPath($fileID) . "\"> Приложение " . $count . "</a>";
                        $count++;
                    }
                    $VALUE = implode(", ", $arFile);
                } else {
                    $VALUE = "<a download href=\"" . CFile::getPath($arResult["PROPERTIES"][$prop]["VALUE"]) . "\">Приложение 1</a>";
                }
                $arrayProperty = array(
                    "NAME" => $arResult["PROPERTIES"][$prop]["NAME"],
                    "VALUE" => $VALUE,
                    "FILE" => "Y"
                );
                $arResult["PRODUCT_SPECIFICATIONS"][] = $arrayProperty;
                break;
            case "N":
            case "L":
            case "S":
                $VALUE = ($arResult["PROPERTIES"][$prop]["MULTIPLE"] == "Y") ? implode(", ", $arResult["PROPERTIES"][$prop]["VALUE"]) : $arResult["PROPERTIES"][$prop]["VALUE"];
                $arrayProperty = array(
                    "NAME" => $arResult["PROPERTIES"][$prop]["NAME"],
                    "VALUE" => $VALUE
                );
                $arResult["PRODUCT_SPECIFICATIONS"][] = $arrayProperty;
                break;
            default:
                continue;
        }
    }
}
$arResult['OFFERS_SIZES'] = 0;
foreach ($arResult["OFFERS"] as $offer) {
    if (strlen($offer["PROPERTIES"]["SIZE"]["VALUE"]) > 1)
        $arResult['OFFERS_SIZES']++;
}

$arResult['STICKERS'] = getItemStickers([$arResult['ID'] => $arResult['IBLOCK_SECTION_ID']]);

$cp = $this->__component;

if (is_object($cp)) {
    $cp->arResult['PRODUCT'] = $arResult['PRODUCT'];
    $cp->arResult['DETAIL_PAGE_URL'] = $arResult['DETAIL_PAGE_URL'];
    $cp->arResult['DETAIL_TEXT'] = $arResult['DETAIL_TEXT'];
    $cp->arResult['PICTURE'] = $arProduct["PICTURES"]["PIC_BIG"][0];
    $cp->SetResultCacheKeys(array('PRODUCT', 'DETAIL_PAGE_URL', 'DETAIL_TEXT', 'PICTURE'));
    $arResult['PRODUCT'] = $cp->arResult['PRODUCT'];
    $arResult['DETAIL_PAGE_URL'] = $cp->arResult['DETAIL_PAGE_URL'];
    $arResult['DETAIL_TEXT'] = $cp->arResult['DETAIL_TEXT'];
    $arResult['PICTURE'] = $cp->arResult['PICTURE'];
}
