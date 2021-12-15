<?

Class XlsExport
{
    use XlsGeneral;

    public function initExport($xlsType, $SECTION_ID = 0, $skipProp = false)
    {
        $this->xlsType = $xlsType;
        $this->fName = $xlsType;
        $arResult = $this->export($SECTION_ID, $skipProp);
        return $arResult;
    }

    public function export($SECTION_ID = 0, $skipProp = false)
    {
        $arResult = array();
        $this->XlsBegin();

        switch ($this->xlsType) {
            case "group_img":
                $this->objPHPExcel->setActiveSheetIndex($this->worksheet);
                $fileName = $this->arParams[$this->xlsType]["LIST_NAME"];
                $this->objPHPExcel->getActiveSheet()->setTitle($fileName);
                $arTitle = $this->arParams[$this->xlsType]["TITLE"];
                $this->XlsAddTitle($arTitle);
                $arResult = XlsExport::sectGetList();
                foreach ($arResult as $arItem) {
                    $this->XlsAddItem($arItem);
                }
                break;
            case "good_img":
                $this->objPHPExcel->setActiveSheetIndex($this->worksheet);
                $fileName = $this->arParams[$this->xlsType]["LIST_NAME"];
                $this->objPHPExcel->getActiveSheet()->setTitle($fileName);
                $arTitle = $this->arParams[$this->xlsType]["TITLE"];
                $this->XlsAddTitle($arTitle);
                $arResult = $this->goodGetList();
                foreach ($arResult as $arItem) {
                    $this->XlsAddItem($arItem);
                }
                break;
            case "brand_img":
                $this->objPHPExcel->setActiveSheetIndex($this->worksheet);
                $fileName = $this->arParams[$this->xlsType]["LIST_NAME"];
                $this->objPHPExcel->getActiveSheet()->setTitle($fileName);
                $arTitle = $this->arParams[$this->xlsType]["TITLE"];
                $this->XlsAddTitle($arTitle);
                $arResult = XlsExport::brandGetList();
                foreach ($arResult as $arItem) {
                    $this->XlsAddItem($arItem);
                }
                break;
            case "good_prop":
                TradexLog::clearFile("good_prop_export.txt");
                TradexLog::addLog("Начало экспорта файла", "good_prop_export.txt");
                $resPropList = array();
                $this->arSectPropList = XlsExport::sectGetListProp();
                foreach ($this->arSectPropList as $arSection) {
                    foreach ($arSection["PROP_LIST"] as $prop) {
                        if (!in_array($prop, $resPropList)) $resPropList[] = $prop;
                    }
                }
                $this->arPropListInfo = XlsExport::getPropList($resPropList);
                $arResult = $this->goodGetListProp($SECTION_ID);
                TradexLog::addLog("Конец подготовки экспорта разделов", "good_prop_export.txt");
                foreach ($arResult as $SECTION_ID => $arList) {
                    $SECTION_NAME = (strlen($this->arSectPropList[$SECTION_ID]["NAME"]) < 27) ? $this->arSectPropList[$SECTION_ID]["NAME"] : "ID Раздела " . $SECTION_ID;
                    if (empty($SECTION_NAME)) continue;
                    if ($this->worksheet != 0) $this->objPHPExcel->createSheet();
                    $this->objPHPExcel->setActiveSheetIndex($this->worksheet);
                    $this->objPHPExcel->getActiveSheet()->setTitle($SECTION_NAME);
                    $arPropSection = $this->arSectPropList[$SECTION_ID]["PROP_LIST"];
                    $arTitle = $this->arParams[$this->xlsType]["TITLE"];
                    $this->XlsAddTitle($arTitle, $arPropSection);
                    $this->lineKey = 2;
                    foreach ($arList as $arItem) {
                        $this->XlsAddItem($arItem);
                    }
                    TradexLog::addLog("Конец экспорта " . $SECTION_NAME . " - " . $SECTION_ID, "good_prop_export.txt");
                    $this->worksheet++;
                }
                if (!$skipProp) {
                    $arTitle = array(
                        "Название свойства",
                        "Код свойства",
                        "Тип свойства",
                        "Множественное",
                        "Описание"
                    );
                    $this->objPHPExcel->createSheet();
                    $this->objPHPExcel->setActiveSheetIndex($this->worksheet);
                    $this->objPHPExcel->getActiveSheet()->setTitle("Property");

                    $this->XlsAddTitle($arTitle);
                    $this->lineKey = 2;
                    foreach ($this->arPropListInfo as $key => $arItem) {
                        $this->XlsAddItem($arItem);
                    }
                    TradexLog::addLog("Конец экспорта Property", "good_prop_export.txt");
                }

                TradexLog::addLog("Конец экспорта файла", "good_prop_export.txt");
                break;
        }
        $this->XlsEnd();

        return $arResult;
    }

    public function XlsAddTitle($arTitleFirst, $arTitleSecond = array())
    {
        $y = 64;
        $add_symbol = false;
        $i = 65;

        foreach ($arTitleFirst as $title) {
            if ($i == 91) {
                $i = 65;
                $add_symbol = true;
                $y++;
            }
            $symbol = ($add_symbol) ? chr($i) . chr($y) : chr($i);

            $this->objPHPExcel->setActiveSheetIndex($this->worksheet)
                ->setCellValue($symbol . "1", $title);
            $i++;
        }
        foreach ($arTitleSecond as $title) {
            if ($i == 91) {
                $i = 65;
                $add_symbol = true;
                $y++;
            }
            $symbol = ($add_symbol) ? chr($y) . chr($i) : chr($i);
            $this->objPHPExcel->setActiveSheetIndex($this->worksheet)
                ->setCellValue($symbol . "1", $title);
            $i++;
        }
    }

    public function XlsAddItem($arItem)
    {
        $y = 64;
        $add_symbol = false;
        $i = 65;
        foreach ($arItem as $key => $value) {
            if ($key == "ID") continue;
            if ($i == 91) {
                $i = 65;
                $add_symbol = true;
                $y++;
            }
            $symbol = ($add_symbol) ? chr($y) . chr($i) : chr($i);
            $this->objPHPExcel->setActiveSheetIndex($this->worksheet)
                ->getStyle($symbol . $this->lineKey)->getNumberFormat()->setFormatCode(PHPExcel_Style_NumberFormat::FORMAT_TEXT);
            $this->objPHPExcel->setActiveSheetIndex($this->worksheet)
                ->setCellValue($symbol . $this->lineKey, $value);
            $i++;
        }
        $this->lineKey++;
    }

    public function goodGetListProp($SECTION_ID = 0)
    {
        $arResult = array();
        $arSelect = Array("ID", "IBLOCK_ID", "NAME", "PROPERTY_ARTICUL", "IBLOCK_SECTION_ID", "PREVIEW_TEXT");
        $arFilter = Array("IBLOCK_ID" => IBLOCK_ID_CATALOG);
        if ($SECTION_ID != 0) {
            $arFilter["SECTION_ID"] = $SECTION_ID;
            $arFilter["INCLUDE_SUBSECTIONS"] = 1;
        }
        $good = new CIBlockElement();
        $res = $good->GetList(Array("ID" => "ASC"), $arFilter, false, false, $arSelect);
        while ($ob = $res->GetNextElement()) {
            $arFields = $ob->GetFields();
            if (!empty($arResult[$arFields["IBLOCK_SECTION_ID"]][$arFields["PROPERTY_ARTICUL_VALUE"]])) continue;
            $arProps = $ob->GetProperties();
            $resFields = array(
                "ARTICUL" => $arFields["PROPERTY_ARTICUL_VALUE"],
                "NAME" => $arFields["NAME"],
                "DESCRIPTION" => $arFields["PREVIEW_TEXT"],
            );

            $arPropsList = $this->arSectPropList[$arFields["IBLOCK_SECTION_ID"]]["PROP_LIST"];

            foreach ($arPropsList as $prop) {
                if (in_array($prop, $this->arCloseProp)) continue;
                if ($prop == "WIDTH" || $prop == "HEIGHT" || $prop == "LENGTH") {
                    $obCatalogProduct = new CCatalogProduct;
                    $arCatalogProduct = $obCatalogProduct->GetByID($arFields["ID"]);
                    $resFields[$prop] = $arCatalogProduct[$prop];
                    continue;
                }

                $propInfo = $this->arPropListInfo[$prop];
                if ($propInfo["MULTIPLE"] == "N") {
                    $resFields[$prop] = $arProps[$prop]["VALUE"];
                } else {
                    $arValue = array();
                    foreach ($arProps[$prop]["VALUE"] as $value) {
                        if (strpos(",", $value)) $value = '"' . $value . '"';
                        $arValue[] = $value;
                    }
                    $resFields[$prop] = implode(",", $arValue);
                }
            }
            $arResult[$arFields["IBLOCK_SECTION_ID"]][$arFields["PROPERTY_ARTICUL_VALUE"]] = $resFields;
        }
        return $arResult;
    }

    public static function sectGetListProp()
    {
        $arResult = array();
        $arFilter = array('IBLOCK_ID' => IBLOCK_ID_CATALOG);
        $arSelect = Array("ID", "IBLOCK_ID", "NAME", "UF_PROP_LIST", "XML_ID");
        $obSection = new CIBlockSection;
        $rsSections = $obSection->GetList(array('LEFT_MARGIN' => 'ASC'), $arFilter, false, $arSelect, false);
        while ($arSection = $rsSections->Fetch()) {
            $arResult[$arSection["ID"]] = array(
                "PROP_LIST" => explode(",", str_replace(" ", "", $arSection["UF_PROP_LIST"])),
                "NAME" => $arSection["NAME"],
                "XML_ID" => $arSection["XML_ID"]
            );
        }
        return $arResult;
    }
}
