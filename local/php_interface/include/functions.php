<?
function tradexImport(&$adminMenu, &$moduleMenu)
{
    $moduleMenu[] = array(
        "parent_menu" => "global_menu_content", // поместим в раздел "Контент"
        // "section"     => "import",
        "sort" => 1000,                  // сортировка пункта меню
        "url" => "tradex_index.php",    // ссылка на пункте меню
        "text" => 'Интеграция с Tradex', // текст пункта меню
        "title" => 'Импорт из xml',       // текст всплывающей подсказки
        "icon" => "form_menu_icon",      // малая иконка
        "page_icon" => "form_page_icon",      // большая иконка
        "items_id" => "menu_tradex",         // идентификатор ветви
        "items" => array()                // остальные уровни меню сформируем ниже.
    );
}

function xlsHelper(&$adminMenu, &$moduleMenu)
{
    $moduleMenu[] = array(
        "parent_menu" => "global_menu_content", // поместим в раздел "Контент"
        // "section"     => "import",
        "sort" => 1000,                  // сортировка пункта меню
        "url" => "javascript:void(0)",  // ссылка на пункте меню
        "text" => 'XLS помощник',        // текст пункта меню
        "title" => 'XLS помощник',        // текст всплывающей подсказки
        "icon" => "form_menu_icon",      // малая иконка
        "page_icon" => "form_page_icon",      // большая иконка
        "items_id" => "menu_xls",            // идентификатор ветви
        "items" => array(
            array(
                "text" => "Экспорт",
                "url" => "xls_export_index.php",
                "icon" => "form_menu_icon",
                "page_icon" => "form_page_icon",
                "more_url" => array(),
                "title" => "Экспорт из XLS",
            ),
            array(
                "text" => "Импорт",
                "url" => "xls_import_index.php",
                "icon" => "form_menu_icon",
                "page_icon" => "form_page_icon",
                "more_url" => array(),
                "title" => "Импорт из XLS",
            )

        )
    );
}

function getMainPictureKey($propertyPictureDecription)
{
    $pictureKey = 0;

    foreach ($propertyPictureDecription as $picKey => $arPicDescription) {
        if (!empty($arPicDescription)) {
            $pictureKey = $picKey;
            break;
        }
    }
    return $pictureKey;
}

function getUrlForBrandFilter($brandCode)
{
    $brandId = 0;
    $brandUrl = '';

    $arFilter = array(
        "IBLOCK_ID" => IBLOCK_ID_BRAND,
        "CODE" => $brandCode
    );
    $res = CIBlockElement::GetList(array(), $arFilter, false, false, array('ID'));
    if ($ob = $res->GetNextElement()) {
        $arFields = $ob->GetFields();
        $brandId = $arFields['ID'];
    }

    if ($brandId > 0) {
        $htmlKey = htmlspecialcharsbx($brandId);
        $brandKey = abs(crc32($htmlKey));
        $brandUrl = '?set_filter=y&smart_filter_' . BRAND_PROP_ID . '_' . $brandKey . '=Y';
    }

    return $brandUrl;
}

/**
 * Получение ID свойства типа список по коду и значению свойства
 * @param $IBLOCK_ID
 * @param $CODE
 * @param $VALUE
 * @return mixed
 */
function GetIDByCode($IBLOCK_ID, $CODE, $VALUE)
{
    $property_enums = \CIBlockPropertyEnum::GetList(
        array(),
        array(
            "IBLOCK_ID" => $IBLOCK_ID,
            "CODE" => $CODE
        )
    );
    while ($enum_fields = $property_enums->GetNext()) {
        if ($VALUE == $enum_fields['VALUE']) return $enum_fields['ID'];
    }
}

function declOfNum($number, $titles)
{
    $cases = array(2, 0, 1, 1, 1, 2);
    return $number . " " . $titles[($number % 100 > 4 && $number % 100 < 20) ? 2 : $cases[min($number % 10, 5)]];
}

//declOfNum(5, array('иностранный язык', 'иностранных языка', 'иностранных языков'));

function getPropertyAmountID($keyCity)
{
    CModule::IncludeModule('iblock');
    $propertyID = 0;
    $IBLOCK_ID = IBLOCK_ID_CATALOG;
    $properties = CIBlockProperty::GetList(array("sort" => "asc"), array("CODE" => "AMOUNT_" . mb_strtoupper($keyCity), "IBLOCK_ID" => $IBLOCK_ID));
    if ($prop_fields = $properties->GetNext()) {
        $propertyID = $prop_fields["ID"];
    }
    return $propertyID;
}

function getPropertyMinPriceID($keyCity)
{
    CModule::IncludeModule('iblock');
    $propertyID = 0;
    $IBLOCK_ID = IBLOCK_ID_CATALOG;
    $properties = CIBlockProperty::GetList(array("sort" => "asc"), array("CODE" => "MIN_PRICE_" . mb_strtoupper($keyCity), "IBLOCK_ID" => $IBLOCK_ID));
    if ($prop_fields = $properties->GetNext()) {
        $propertyID = $prop_fields["ID"];
    }
    return $propertyID;
}

function getPropertyValueAmountID($propertyID)
{
    CModule::IncludeModule('iblock');
    $PropertyValueID = 0;
    $IBLOCK_ID = IBLOCK_ID_CATALOG;
    $property_enums = \CIBlockPropertyEnum::GetList(array("sort" => "asc"), array("IBLOCK_ID" => $IBLOCK_ID, "PROPERTY_ID" => $propertyID, "VALUE" => "Y"));
    if ($enum_fields = $property_enums->GetNext()) {
        $PropertyValueID = $enum_fields["ID"];
    }
    return $PropertyValueID;
}

function getFilterArray($keyCity)
{
    $arCatalogAmountFilter = array();
    $cache_time = 36000;
    $cache_id = 'arCatalogAmountFilter';
    $cache_path = '/arCatalogAmountFilter/';
    $obCache = new CPHPCache();
    if( $obCache->InitCache($cache_time, $cache_id, $cache_path) )// Если кэш валиден
    {
        $arCatalogAmountFilter = $obCache->GetVars();// Извлечение переменных из кэша
    }
    elseif( $obCache->StartDataCache()  )// Если кэш невалиден
    {
        CModule::IncludeModule('iblock');
        $arFilter = array(
            "IBLOCK_ID" => IBLOCK_ID_GEO_CITY,
            "ACTIVE" => "Y"
        );
        $res = \CIBlockElement::GetList(array(), $arFilter, false, false, array('ID', 'IBLOCK_ID', 'PROPERTY_KEY'));
        while ($ob = $res->GetNext()) {
            $propertyID = getPropertyAmountID($ob["PROPERTY_KEY_VALUE"]);
            $propertyValueID = getPropertyValueAmountID($propertyID);
            $arCatalogAmountFilter[$ob["PROPERTY_KEY_VALUE"]]["=PROPERTY_" . $propertyID] = [$propertyValueID];

            $propertyID = getPropertyMinPriceID($ob["PROPERTY_KEY_VALUE"]);
            $arCatalogAmountFilter[$ob["PROPERTY_KEY_VALUE"]][">=PROPERTY_{$propertyID}"] =  1;
        }

        $obCache->EndDataCache($arCatalogAmountFilter);
    }

    return $arCatalogAmountFilter[$keyCity];
}

/** вывод в php в консоль
 * @param $arg
 */
function _c($arg) {
	$arg = json_encode($arg);

	$backtrace = debug_backtrace();
	$cp = $backtrace[2]["file"] . ", " . $backtrace[2]["line"];

	$js = <<<JSCODE
            \n<script>
                if (! window.console) console = {};
                console.log = console.log || function(name, data){};
                console.log('$cp');
                console.log($arg);
            </script>
JSCODE;

	echo $js;
}
