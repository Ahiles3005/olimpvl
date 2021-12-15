<?

Trait XlsGeneral
{
    public $objPHPExcel;
    private $fName;
    private $lineKey = 2;
    private $xlsType;
    private $worksheet = 0;
    private $arSectPropList = array();
    private $arPropListInfo = array();
    private $arParams = array(
        "group_img" => array(
            "TITLE" => array(
                "XML_ID",
                "NAME",
                "SECTION_PAGE_URL",
                "PICTURE"
            ),
            "LIST_NAME" => "GROUP_IMG"
        ),
        "good_img" => array(
            "TITLE" => array(
                "ARTICUL",
                "COLOR",
                "NAME",
                "PICTURES"
            ),
            "LIST_NAME" => "GOOD_IMG"

        ),
        "brand_img" => array(
            "TITLE" => array(
                "XML_ID",
                "NAME",
                "PICTURE",
            ),
            "LIST_NAME" => "BRAND_IMG"
        ),
        "good_prop" => array(
            "TITLE" => array(
                "ARTICUL",
                "NAME",
                "DESCRIPTION"
            )
        ),
    );

    public $arCloseProp = array(
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

    public function XlsBegin()
    {
        /** Error reporting */
        error_reporting(E_ALL);
        ini_set('display_errors', TRUE);
        ini_set('display_startup_errors', TRUE);
        date_default_timezone_set('Europe/London');

        define('EOL', (PHP_SAPI == 'cli') ? PHP_EOL : '<br />');

        $this->objPHPExcel = new PHPExcel();

        $this->objPHPExcel->getProperties()->setCreator("Vladimir")
            ->setLastModifiedBy("Vladimir")
            ->setTitle("Import XLS")
            ->setSubject("Import XLS")
            ->setDescription("Import XLS")
            ->setKeywords("office PHPExcel php")
            ->setCategory("Test result file");
    }

    public function XlsEnd()
    {
        header('Content-Type: application/vnd.ms-excel');
        header('Content-Disposition: attachment;filename=' . $this->fName . "_" . date('dmY_Hi') . '.xlsx');
        header('Cache-Control: max-age=0');
        ob_end_clean();
        $objWriter = PHPExcel_IOFactory::createWriter($this->objPHPExcel, 'Excel2007');
        $objWriter->save('php://output');
        exit();
    }

    public static function sectGetList()
    {
        $arResult = $arList = array();
        $arSelect = Array("ID", "IBLOCK_ID", "XML_ID", "NAME", "SECTION_PAGE_URL", "PICTURE");
        $arFilter = array('IBLOCK_ID' => IBLOCK_ID_CATALOG);
        $sect = new CIBlockSection;
        $resSection = $sect->GetList(Array("DEPTH_LEVEL" => "ASC"), $arFilter, false, $arSelect);
        while ($arSection = $resSection->GetNext()) {
            $ObCFile = new CFile;
            $imgPath = ($arSection["PICTURE"]) ? $ObCFile->GetPath($arSection["PICTURE"]) : "";
            $arResult[$arSection["ID"]] = array(
                "XML_ID" => $arSection["XML_ID"],
                "SECTION_PAGE_URL" => $arSection["SECTION_PAGE_URL"],
                "NAME" => $arSection["NAME"],
                "PICTURE" => $imgPath
            );
        }
        return $arResult;
    }

    public function goodGetList()
    {
        $arResult = array();

        $arSelect = Array("ID", "IBLOCK_ID", "NAME", "PROPERTY_COLOR", "PROPERTY_ARTICUL");
        $arFilter = Array("IBLOCK_ID" => IBLOCK_ID_CATALOG);
        $good = new CIBlockElement();
        $res = $good->GetList(Array("ID" => "ASC"), $arFilter, false, false, $arSelect);
        while ($ob = $res->GetNextElement()) {
            $props = $ob->GetProperties(array(), array("CODE" => "PICTURES"));
            $arImg = array();
            foreach ($props["PICTURES"]["VALUE"] as $key => $img) {
                $ObCFile = new CFile;
                $arImg[] = $ObCFile->GetPath($img);
            }
            $arFields = $ob->GetFields();
            $arResult[$arFields["ID"]] = array(
                "ARTICUL" => $arFields["PROPERTY_ARTICUL_VALUE"],
                "COLOR" => $arFields["PROPERTY_COLOR_VALUE"],
                "NAME" => $arFields["NAME"],
                "PICTURES" => implode(", ", $arImg)
            );
        }
        return $arResult;
    }


    public static function brandGetList()
    {
        $arResult = array();
        $arSelect = Array("ID", "IBLOCK_ID", "NAME", "XML_ID", "PREVIEW_PICTURE");
        $arFilter = Array("IBLOCK_ID" => IBLOCK_ID_BRAND);
        $brand = new CIBlockElement;
        $res = $brand->GetList(Array("XML_ID" => "ASC"), $arFilter, false, false, $arSelect);
        while ($ob = $res->GetNextElement()) {
            $arFields = $ob->GetFields();
            $ObCFile = new CFile;
            $imgPath = ($arFields["PREVIEW_PICTURE"]) ? $ObCFile->GetPath($arFields["PREVIEW_PICTURE"]) : "";
            $arResult[$arFields["ID"]] = array(
                "XML_ID" => $arFields["XML_ID"],
                "NAME" => $arFields["NAME"],
                "PICTURE" => $imgPath
            );
        }
        return $arResult;
    }

    public function hashGetStatus()
    {
        $file = XlsImport::getFilePath($this->xlsType);
        $filePath = $_SERVER["DOCUMENT_ROOT"] . "/local/php_interface/tradex/log/hash.txt";
        $arHash = (array)json_decode(file_get_contents($filePath, true));

        $arNewHash = hash_file('md5', $file);
        $arOldHash = $arHash[$this->xlsType];

        return ($arOldHash != $arNewHash) ? true : false;
    }

    public function addHash()
    {
        $filePath = $_SERVER["DOCUMENT_ROOT"] . "/local/php_interface/tradex/log/hash.txt";
        $res = (array)json_decode(file_get_contents($filePath, true));
        $file = XlsImport::getFilePath($this->xlsType);
        $res[$this->xlsType] = hash_file('md5', $file);
        $info = json_encode($res, JSON_FORCE_OBJECT);
        file_put_contents($filePath, $info);
    }

    public function ReadXls()
    {
        $arResult = array();
        $pExcel = PHPExcel_IOFactory::load($this->fName);
        $arListName = $pExcel->getSheetNames();
        foreach ($pExcel->getWorksheetIterator() as $key => $worksheet) {
            $arResult[$arListName[$key]] = $worksheet->toArray();
        }
        return $arResult;
    }

    public function getArrayFromXLS()
    {
        $arResult = $arList = array();
        $arXLS = $this->ReadXls();
        if (empty($arXLS)) return "ERROR";
        switch ($this->xlsType) {
            case "group_img":
                foreach ($arXLS as $keyList => $arList) {
                    foreach ($arList as $key => $arItem) {
                        if ($key == 0) continue;
                        $arResult[$arItem[1]] = (string)$arItem[3];
                    }
                }
                break;
            case "good_img":
                foreach ($arXLS as $keyList => $arList) {
                    foreach ($arList as $key => $arItem) {
                        if ($key == 0) continue;
                        $color = trim($arItem[1]);
                        $articul = trim($arItem[0]);
                        $str = (!empty($color)) ? $articul . "_" . $color : $articul;
                        $str = str_replace(" ", "", $str);
                        $arResult[TradexGeneral::getCode($str)] = $arItem[3];
                    }
                }
                break;
            case "brand_img":
                foreach ($arXLS as $keyList => $arList) {
                    foreach ($arList as $key => $arItem) {
                        if ($key == 0) continue;
                        $arResult[$arItem[0]] = (string)$arItem[2];
                    }
                }
                break;
            case "good_prop":

                $arResult = $arXLS;

                break;
        }
        return $arResult;
    }

    public static function getFilePath($name)
    {
        $uploadPath = $_SERVER['DOCUMENT_ROOT'] . "/upload/tradex/xls/";

        //$resDate = array(); //temp
        $resFileName = array();
        //$resFileName = false; //temp
        foreach (scandir($uploadPath) as $file) {
            $pos = strpos($file, $name);
            if ($pos !== false) {
                preg_match("/(\d+)\_(\d+)/", $file, $arDate);
                /* $resDate[] = date_create_from_format("dmYHi", $arDate[1] . $arDate[2]); */ //temp
                $resDate = date_create_from_format("dmYHi", $arDate[1] . $arDate[2]);
                $resFileName[] = $uploadPath . $name . "_" . date_format($resDate, 'dmY_Hi') . ".xlsx";
            }
        }
        /* if (!empty($resDate)) {
            $obDate = max($resDate);
            $resFileName = $uploadPath . $name . "_" . date_format($obDate, 'dmY_Hi') . ".xlsx";
        } */ //temp
        return ($resFileName) ? $resFileName : "ERROR";
    }

    public static function  getPropList($arProp = array())
    {
        $result = array();
        $properties = CIBlockProperty::GetList(Array("sort" => "asc", "name" => "asc"), Array("ACTIVE" => "Y", "IBLOCK_ID" => IBLOCK_ID_CATALOG));
        while ($prop_fields = $properties->GetNext()) {
            if (in_array($prop_fields["CODE"], $arProp) && $arProp) {
                switch ($prop_fields["PROPERTY_TYPE"]) {
                    case "L":
                        $type = "Список";
                        break;
                    case "S":
                        $type = "Строка";
                        break;
                    case "E":
                        $type = "Привязка к элементу";
                        break;
                    case "N":
                        $type = "Число";
                        break;
                    case "F":
                        $type = "Файл";
                        break;
                    default:
                        $type = $prop_fields["PROPERTY_TYPE"];
                }

                $result[$prop_fields["CODE"]] = array(
                    "ID" => $prop_fields["ID"],
                    "NAME" => $prop_fields["NAME"],
                    "CODE" => $prop_fields["CODE"],
                    "PROPERTY_TYPE" => $type,
                    "MULTIPLE" => ($prop_fields["MULTIPLE"] == "Y") ? 1 : 0,
                    "DESCRIPTION" => $prop_fields["HINT"]
                );

                if ($type == "Список") {
                    $result[$prop_fields["CODE"]]["VALUE"] = TradexProp::getListProp($prop_fields["CODE"]);
                }
            }
        }
        return $result;
    }

    public static function getFiles($arFiles, $typeXLS = "good_prop")
    {
        $arResult = array();
        switch ($typeXLS) {
            case "brand_img":
                $path = TRADEX_XLS_BRAND_IMG;
                break;
            case "good_img":
                $path = TRADEX_XLS_GOOD_IMG;
                break;
            case "group_img":
                $path = TRADEX_XLS_GROUP_IMG;
                break;
            case "good_prop":
                $path = TRADEX_XLS_GOOD_PROP;
                break;
            default :
                $path = "";
        }
        $arFiles = str_replace(' ', '', $arFiles);
        $arFiles = explode(",", $arFiles);

        foreach ($arFiles as $key => $filePath) {

            if (mb_stristr($filePath, "/upload/iblock/")) {
                $strFilePath = $_SERVER["DOCUMENT_ROOT"] . $filePath;
            } else {
                $strFilePath = $_SERVER["DOCUMENT_ROOT"] . "/upload/" . $path . $filePath;
            }

            if (is_file($strFilePath)) {
                $count = $key + 1;
                $arResult["file_" . $count] = $strFilePath;
            }
        }

        return $arResult;
    }

    public static function getHashFile($filePath)
    {
        $str = hash_file('md5', $filePath);
        return $str;
    }

    public static function updateFile($ELEMENT_ID, $arFiles, $PROPERTY_CODE = "PICTURES")
    {
        $arOldFile = array();
        $resFileArray = array();
        $arNewFile = array();
        $result = array();
        $flag_update = false;
        foreach ($arFiles as $file) {
            $hash = XlsGeneral::getHashFile($file);
            $arNewFile[$hash] = $file;
        }
        $res = CIBlockElement::GetProperty(IBLOCK_ID_CATALOG, $ELEMENT_ID, "sort", "asc", array("CODE" => $PROPERTY_CODE));
        while ($ob = $res->GetNext()) {
            $obFile = new CFile;
            $arFile = $obFile->GetFileArray($ob["VALUE"]);
            $hash = XlsGeneral::getHashFile($_SERVER["DOCUMENT_ROOT"] . $arFile["SRC"]);
            if (empty($arNewFile[$hash])) {
                $arDelFile["MODULE_ID"] = "iblock";
                $arDelFile["del"] = "Y";
                $resFileArray[$ob["PROPERTY_VALUE_ID"]] = array("VALUE" => $arDelFile);
                $flag_update = true;
            } else {
                $arOldFile[] = $hash;
                $result[] = $arFile["SRC"];
            }
        }

        foreach ($arNewFile as $hash => $img) {
            if (!in_array($hash, $arOldFile)) {
                $arFile = CFile::MakeFileArray($img);
                if (!empty($arFile)) {
                    $arFile["MODULE_ID"] = "iblock";
                    $arOldFile[] = $hash;
                    $resFileArray[] = $arFile;
                    $flag_update = true;
                }
            }
        }
        TradexLog::addLog($flag_update, "file.txt");
        if ($flag_update == true) {
            $obElement = new CIBlockElement;
            $obElement->SetPropertyValues($ELEMENT_ID, IBLOCK_ID_CATALOG, $resFileArray, $PROPERTY_CODE);
        }
        return $resFileArray;
    }

    public static function getArrayFromStr($str)
    {
        $arResult = array();
        preg_match('/\"([^\"]+\,[^\"]+)\"\,|\,\"([^\"]+\,[^\"]+)\"/', $str, $maskRes);

        if (empty($maskRes[1]) && empty($maskRes[2])) {
            $arResult = explode(",", $str);
        } elseif (!empty($maskRes[1])) {
            $value = $maskRes[1];
            $arResult[] = $value;
            $arNext = XlsGeneral::getArrayFromStr(str_replace($maskRes[0], "", $str));
            foreach ($arNext as $strValue) {
                $arResult[] = $strValue;
            }
        } elseif (!empty($maskRes[2])) {
            $value = $maskRes[2];
            $arResult[] = $value;
            $arNext = XlsGeneral::getArrayFromStr(str_replace($maskRes[0], "", $str));
            foreach ($arNext as $strValue) {
                $arResult[] = $strValue;
            }
        }

        return $arResult;
    }
}