<?

Class XlsImport
{
    use XlsGeneral;
    private $IBLOCK_PROP_LIST = array();

    public function initImport($xlsType, $checkHash = false)
    {
        $this->xlsType = $xlsType;
        $this->fName = $xlsType;
        $arResult = $this->import($checkHash);
        return $arResult;
    }

    public function import($checkHash = false)
    {
        if ($checkHash) {
            $status = $this->hashGetStatus();
            if (!$status) return "ERROR";
        }

        $arResult = $arOld = array();
        $fileNames = XlsImport::getFilePath($this->xlsType);
        foreach ($fileNames as $curFileName) {
            $this->fName = $curFileName;
            //$this->fName = XlsImport::getFilePath($this->xlsType);
            if ($this->fName == "ERROR") return "ERROR";
            switch ($this->xlsType) {
                case "group_img":
                    $arNew = $this->getArrayFromXLS();
                    if ($arNew == "ERROR") return "ERROR";
                    $arOld = $this->sectGetList();
                    foreach ($arOld as $ID => $arItem) {
                        $value = $arNew[$arItem["SECTION_PAGE_URL"]];
                        if (!empty($value) && $value != $arItem["PICTURE"]) {
                            $filePath = $_SERVER["DOCUMENT_ROOT"] . "/upload/" . TRADEX_XLS_GROUP_IMG . $value;
                            $arFields = array(
                                "PICTURE" => CFile::MakeFileArray($filePath)
                            );

                            $obSection = new CIBlockSection();
                            $arResult[$ID] = ($obSection->Update($ID, $arFields)) ? "Успешно" : "Ошибка";
                        }
                    }
                    break;
                case "good_img":
                    $arImages = $this->getArrayFromXLS();
                    TradexLog::clearFile("xls_good_img_file.txt");
                    if ($arImages == "ERROR") return "ERROR";
                    $filterCode = array();
                    foreach ($arImages as $code => $strImg) {
                        $filterCode[] = $code;
                    }
                    $arSelect = Array("ID", "IBLOCK_ID", "CODE", "XML_ID");
                    $arFilter = Array("IBLOCK_ID" => IBLOCK_ID_CATALOG, "XML_ID" => $filterCode);
                    $good = new CIBlockElement();
                    $res = $good->GetList(Array("ID" => "ASC"), $arFilter, false, false, $arSelect);
                    while ($ob = $res->GetNextElement()) {
                        $arFields = $ob->GetFields();
                        $arFile = XlsGeneral::getFiles($arImages[$arFields["XML_ID"]], "good_img");
                        XlsGeneral::updateFile($arFields["ID"], $arFile);
                        TradexLog::addLog("ID товара - " . $arFields["ID"] . ". Прикрепленные файлы: " . implode(",", $arFile), "xls_good_img_file.txt");
                        $arResult[$arFields["ID"]] = $arFile;
                    }
                    break;
                case "brand_img":
                    $arNew = $this->getArrayFromXLS();
                    if ($arNew == "ERROR") return "ERROR";
                    $arOld = $this->brandGetList();
                    foreach ($arOld as $ID => $arItem) {
                        $value = $arNew[$arItem["XML_ID"]];
                        if (!empty($value) && $value != $arItem["PICTURE"]) {
                            $filePath = $_SERVER["DOCUMENT_ROOT"] . "/upload/" . TRADEX_XLS_BRAND_IMG . $value;
                            $arFields = array(
                                "PREVIEW_PICTURE" => CFile::MakeFileArray($filePath)
                            );
                            $obElement = new CIBlockElement();
                            $arResult[$ID] = $obElement->Update($ID, $arFields);
                        }
                    }
                    break;
                case "good_prop":
                    TradexLog::clearFile("good_prop_import.txt");
                    TradexLog::addLog("Начало импорта файла", "good_prop_import.txt");
                    $arNew = $this->ReadXls();
                    if (empty($arNew)) return "ERROR";
                    if (!empty($arNew["Property"])) {
                        $arResult["Property"] = $this->importProperty($arNew["Property"]);
                        TradexLog::addLog("Конец импорта Property", "good_prop_import.txt");
                    }
                    foreach ($arNew as $key => $arList) {
                        if ($key == "Property") {
                            continue;
                        } else {
                            $arResult[$key] = $this->importElemList($arList);
                            TradexLog::addLog("Конец импорта " . $key, "good_prop_import.txt");
                        }
                    }
                    TradexLog::addLog("Конец импорта файла", "good_prop_import.txt");
            }
        }

        $this->addHash();
        return $arResult;
    }

    public function importItemImg($arItem, $arTitle)
    {
        $arResult = array();
        foreach ($arTitle as $key => $title) {
            $arResult[$title] = $arItem[$key];
        }
        return $arResult;
    }


    public function importElemList($arList)
    {
        $arResult = $arTitle = $arArticul = array();
        $arCloseProp = array(
            "BRAND",
            "ARTICUL",
            "SEASON",
            "STOCK_TYPE",
            "TYPE_CARGO",
            "SEASONALITY",
            "SEX",
            "BRAND",
            "COUNTRY_OF_PRODUCTION",
            "UNITS",
            "PICTURES"
        );
        foreach ($arList as $key => $elem) {
            if ($key == 0) {
                $arTitle = $elem;
                continue;
            }
            $arArticul[] = $elem[0];
            $arFields = array();
            foreach ($elem as $keyElem => $value) {
                $arFields[$arTitle[$keyElem]] = $value;
            }
            $arResult[] = $arFields;
        }

        $resTitle = array();
        foreach ($arTitle as $key => $title) {
            if ($key < 3) continue;
            if ($title && !in_array($title, $arCloseProp)) $resTitle[] = $title;
        }

        $arProp = XlsExport::getPropList($resTitle);

        $arListId = XlsImport::getIDByArticul($arArticul, $arProp);
        $res = array();
        foreach ($arResult as $arItem) {
            foreach ($arListId[$arItem["ARTICUL"]] as $PRODUCT_ID) {
                $arItem["DESCRIPTION"] = (!empty($arItem["DESCRIPTION"])) ? $arItem["DESCRIPTION"] : $arItem["Description"];
                $arFields = array(
                    "PREVIEW_TEXT" => $arItem["DESCRIPTION"],
                );
                $el = new CIBlockElement;
                $el->Update($PRODUCT_ID, $arFields);

                foreach ($arItem as $PROPERTY_CODE => $PROPERTY_VALUE) {

                    if ($PROPERTY_CODE == "WIDTH" || $PROPERTY_CODE == "HEIGHT" || $PROPERTY_CODE == "LENGTH") {
                        $obCatalogProduct = new CCatalogProduct;
                        $arFields = array($PROPERTY_CODE => $PROPERTY_VALUE);
                        $obCatalogProduct->Update($PRODUCT_ID, $arFields);
                        continue;
                    }
                    if (in_array($PROPERTY_CODE, $arCloseProp)) continue;

                    if (!empty($arProp[$PROPERTY_CODE])) {
                        $res[$arItem["ARTICUL"]][$PRODUCT_ID][$PROPERTY_CODE] = array();
                        $obElem = new CIBlockElement;
                        if ($arProp[$PROPERTY_CODE]["MULTIPLE"]) {
                            switch ($arProp[$PROPERTY_CODE]["PROPERTY_TYPE"]) {
                                case "Строка":
                                    $EX_PROPERTY_VALUE = XlsGeneral::getArrayFromStr($PROPERTY_VALUE);
                                    $arPropValue = array();
                                    foreach ($EX_PROPERTY_VALUE as $key => $value) {
                                        $arPropValue[] = array("VALUE" => $value);
                                    }
                                    $obElem->SetPropertyValues($PRODUCT_ID, IBLOCK_ID_CATALOG, $arPropValue, $PROPERTY_CODE);
                                    break;
                                case "Число":
                                    $EX_PROPERTY_VALUE = explode(",", str_replace(" ", "", $PROPERTY_VALUE));
                                    $arPropValue = array();
                                    foreach ($EX_PROPERTY_VALUE as $key => $value) {
                                        $arPropValue[] = array("VALUE" => $value);
                                    }
                                    $obElem->SetPropertyValues($PRODUCT_ID, IBLOCK_ID_CATALOG, $arPropValue, $PROPERTY_CODE);
                                    break;
                                case "Список":
                                    $arPropValue = array();
                                    $EX_PROPERTY_VALUE = XlsGeneral::getArrayFromStr($PROPERTY_VALUE);
                                    foreach ($EX_PROPERTY_VALUE as $key => $value) {
                                        $PROPERTY_VALUE_ID = $arProp[$PROPERTY_CODE]["VALUE"][$value];
                                        if (empty($PROPERTY_VALUE_ID)) {
                                            $ibpenum = new CIBlockPropertyEnum;
                                            $PROPERTY_VALUE_ID = $ibpenum->Add(Array('PROPERTY_ID' => $arProp[$PROPERTY_CODE]["ID"], 'VALUE' => $value));
                                            $arProp[$PROPERTY_CODE]["VALUE"][$value] = $PROPERTY_VALUE_ID;
                                        }
                                        $arPropValue[] = $PROPERTY_VALUE_ID;
                                    }
                                    $obElem->SetPropertyValuesEx($PRODUCT_ID, IBLOCK_ID_CATALOG, array($PROPERTY_CODE => $arPropValue));
                                    //$res[$arItem["ARTICUL"]][$PRODUCT_ID][$PROPERTY_CODE]["VALUE"] = $arPropValue;
                                    break;

                                case "Файл":
                                    $arFile = XlsGeneral::getFiles($PROPERTY_VALUE);
                                    XlsGeneral::updateFile($PRODUCT_ID, $arFile, $PROPERTY_CODE);
                                    break;
                                default :
                                    continue;
                            }
                        } else {
                            switch ($arProp[$PROPERTY_CODE]["PROPERTY_TYPE"]) {
                                case "Строка":
                                case "Число":
                                    $obElem->SetPropertyValuesEx($PRODUCT_ID, IBLOCK_ID_CATALOG, array($PROPERTY_CODE => $PROPERTY_VALUE));
                                    break;
                                case "Список":
                                    $PROPERTY_VALUE_ID = $arProp[$PROPERTY_CODE]["VALUE"][$PROPERTY_VALUE];
                                    if (empty($PROPERTY_VALUE_ID)) {
                                        $ibpenum = new CIBlockPropertyEnum;
                                        $PROPERTY_VALUE_ID = $ibpenum->Add(Array('PROPERTY_ID' => $arProp[$PROPERTY_CODE]["ID"], 'VALUE' => $PROPERTY_VALUE));
                                        $arProp[$PROPERTY_CODE]["VALUE"][$PROPERTY_VALUE] = $PROPERTY_VALUE_ID;
                                    }
                                    $obElem->SetPropertyValuesEx($PRODUCT_ID, IBLOCK_ID_CATALOG, array($PROPERTY_CODE => $PROPERTY_VALUE_ID));
                                    break;

                                case "Файл":
                                    $arFile = XlsGeneral::getFiles($PROPERTY_VALUE);
                                    XlsGeneral::updateFile($PRODUCT_ID, $arFile, $PROPERTY_CODE);
                                    break;
                                default :
                                    continue;
                            }
                        }

                    }
                }
                $res[$PRODUCT_ID] = "UPDATE";
            }
        }

        $arSect = XlsImport::getSectByArticul($arArticul);
        foreach ($arSect as $SECTION_ID) {
            $bs = new CIBlockSection;
            $arFields = Array(
                "IBLOCK_ID" => IBLOCK_ID_CATALOG,
                "UF_PROP_LIST" => implode(",", $resTitle)
            );
            $bs->Update($SECTION_ID, $arFields);
        }
        return $res;
    }


    public function getIDByArticul($arElemList, $arProp)
    {
        $arResult = $arList = array();
        $arSelect = Array("ID", "IBLOCK_ID", "XML_ID", "PROPERTY_ARTICUL");
        foreach ($arProp as $prop) {
            $arSelect[] = "PROPERTY_" . $prop["CODE"];
        }
        $arFilter = array('IBLOCK_ID' => IBLOCK_ID_CATALOG);
        $obElem = new CIBlockElement;
        $res = $obElem->GetList(Array(), $arFilter, false, false, $arSelect);
        while ($ob = $res->GetNextElement()) {
            $arItem = $ob->GetFields();
            if (in_array($arItem["PROPERTY_ARTICUL_VALUE"], $arElemList)) {
                $arResult[$arItem["PROPERTY_ARTICUL_VALUE"]][] = $arItem["ID"];
            }
        }
        return $arResult;
    }

    public static function getSectByArticul($arArticul)
    {
        $arResult = array();
        $arSelect = Array("ID", "IBLOCK_ID", "NAME", "PROPERTY_ARTICUL", "IBLOCK_SECTION_ID");
        $arFilter = Array("IBLOCK_ID" => IBLOCK_ID_CATALOG, "PROPERTY_ARTICUL" => $arArticul);
        $good = new CIBlockElement();
        $res = $good->GetList(Array("ID" => "ASC"), $arFilter, false, false, $arSelect);
        while ($ob = $res->GetNextElement()) {
            $arFields = $ob->GetFields();
            $arResult[] = $arFields["IBLOCK_SECTION_ID"];
        }
        return $arResult;
    }

    public static function getPropList()
    {
        $result = array();
        $properties = CIBlockProperty::GetList(Array("sort" => "asc", "name" => "asc"), Array("ACTIVE" => "Y", "IBLOCK_ID" => IBLOCK_ID_CATALOG));
        while ($prop_fields = $properties->GetNext()) {
            $result[] = $prop_fields["CODE"];
        }
        $result[] = "SIZE";
        $result[] = "AMOUNT";
        //$result[] = "TRAINING_LEVEL";
        $result[] = "AGE";
        $result[] = "PRODUCING_COUNTRY";
        $result[] = "SEASON";
        $result[] = "BRAND";
        $result[] = "UNITS";
        return $result;
    }

    public function importProperty($arRes)
    {
        $result = array();
        $this->IBLOCK_PROP_LIST = $this->getPropList();
        foreach ($arRes as $key => $arItem) {
            if ($key == 0) continue;
            $arItem[1] = str_replace(' ', '', $arItem[1]);
            //$arItem[2] = str_replace(' ', '', $arItem[2]);
            if (!in_array($arItem[1], $this->IBLOCK_PROP_LIST)) {
                $id = $this->addUserField($arItem);
                if (!empty($id)) {
                    $result[$arItem[1]] = $id;
                } else {
                    $result[$arItem[1]] = "cant add";
                }
            } else {
                $arFilter = array(
                    'IBLOCK_ID' => IBLOCK_ID_CATALOG,
                    'CODE' => $arItem[1]
                );
                $rsProperty = CIBlockProperty::GetList(
                    array(),
                    $arFilter
                );

                if ($element = $rsProperty->Fetch()) {
                    $arFields = array(
                        "NAME" => $arItem[0],
                        "HINT" => $arItem[4]
                    );
                    $prop = new CIBlockProperty;
                    $prop->Update($element["ID"], $arFields);
                    $result[$arItem[1]] = "update";
                } else {
                    $result[$arItem[1]] = "exist";
                }


            }
        }
        return $result;
    }

    public function addUserField($arUserField)
    {
        $result = 0;
        $arType = array(
            "Строка" => "S",
            "Список" => "L",
            "Число" => "S",
            "Файл" => "F"
        );
        $name = $arUserField[0];
        $code = $arUserField[1];
        $type = $arType[$arUserField[2]];
        $multiple = ($arUserField[3]) ? "Y" : "N";
        $description = $arUserField[4];

        if (!empty($name) && !empty($code) && !empty($type)) {

            $arFields = Array(
                "NAME" => $name,
                "ACTIVE" => "Y",
                "SORT" => "500",
                "CODE" => $code,
                "PROPERTY_TYPE" => $type,
                "IBLOCK_ID" => IBLOCK_ID_CATALOG,
                "MULTIPLE" => $multiple,
                "HINT" => $description
            );

            $prop = new CIBlockProperty;
            $result = $prop->Add($arFields);

        }

        return $result;
    }


}