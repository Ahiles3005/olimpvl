<?

Class TradexGeneral
{
    use TradexGroup;
    use TradexGood;
    use TradexObject;
    use TradexPriceList;
    use TradexPrice;
    use TradexStock;
    use TradexDiscGrp;
    use TradexArtDiscGrp;
    use TradexPluDiscGrp;
    use TradexConsole;

    public static function getCode($text)
    {

        $translit = array(

            'а' => 'a', 'б' => 'b', 'в' => 'v',

            'г' => 'g', 'д' => 'd', 'е' => 'e',

            'ё' => 'yo', 'ж' => 'zh', 'з' => 'z',

            'и' => 'i', 'й' => 'j', 'к' => 'k',

            'л' => 'l', 'м' => 'm', 'н' => 'n',

            'о' => 'o', 'п' => 'p', 'р' => 'r',

            'с' => 's', 'т' => 't', 'у' => 'u',

            'ф' => 'f', 'х' => 'x', 'ц' => 'c',

            'ч' => 'ch', 'ш' => 'sh', 'щ' => 'shh',

            'ь' => '', 'ы' => 'y', 'ъ' => '',

            'э' => 'e', 'ю' => 'yu', 'я' => 'ya'
        );
        $res = mb_strtolower($text, 'UTF-8');
        $res = strtr($res, $translit);
        $res = preg_replace("/[^a-z0-9\_]/", "_", $res);
        return $res;
    }

    public static function getFileInfo($name, $full, $info = "path")
    {
        $type = ($full) ? "full" : "partial";

        $uploadPath = $_SERVER['DOCUMENT_ROOT'] . "/upload/tradex/" . $type . "/" . $name . "/";

        $resDate = array();
        $resFileName = false;
        foreach (scandir($uploadPath) as $file) {
            $pos = strpos($file, $name);
            if ($pos !== false) {
                preg_match("/(\d+)\_(\d+)/", $file, $arDate);
                $resDate[] = date_create_from_format("dmYHi", $arDate[1] . $arDate[2]);
            }
        }

        if (!empty($resDate)) {
            $obDate = max($resDate);
            $resFileName = ($info == "path") ? $uploadPath . $name . "_" . date_format($obDate, 'dmY_Hi') . ".xml" : date_format($obDate, 'YmdHi');
        }

//             var_dump($resFileName);
//
//         exit;
        return ($resFileName) ? $resFileName : "нет подходящего файла";
    }

    public static function getArrayByXml($typeXml, $status)
    {
        $arResult = $elemList = array();
        switch ($status) {
            case 1:
                if ($typeXml == "discgrp" || $typeXml == "object") {
                    $pathXML = TradexImport::getFileInfo($typeXml, true);
                    $xml = simplexml_load_file($pathXML);
                    foreach ($xml as $key => $elemList) {
                        $arResult[$key][] = (array)$elemList;
                    }
                    $pathXML = TradexImport::getFileInfo($typeXml, false);
                    $xml = simplexml_load_file($pathXML);
                    foreach ($xml as $key => $elemList) {
                        $arResult[$key][] = (array)$elemList;
                    }
                } elseif ($typeXml == "artdiscgrp" || $typeXml == "pludiscgrp") {
                    $pathXML = TradexImport::getFileInfo($typeXml, true);
                    $xml = simplexml_load_file($pathXML);
                    foreach ($xml as $key => $elemList) {
                        $arResult[$key][(int)$elemList->{"mdg"}][] = (array)$elemList;
                    }
                    $pathXML = TradexImport::getFileInfo($typeXml, false);
                    $xml = simplexml_load_file($pathXML);
                    foreach ($xml as $key => $elemList) {
                        $arResult[$key][(int)$elemList->{"mdg"}][] = (array)$elemList;
                    }
                } else {
                    $pathXML = TradexImport::getFileInfo($typeXml, true);
                    $xml = simplexml_load_file($pathXML);
                    foreach ($xml as $key => $elemList) {
                        $arResult[$key][(int)$elemList->{"referenceNo"}] = (array)$elemList;
                    }
                }

                break;
            case 2:
                $pathXML = TradexImport::getFileInfo($typeXml, true);
                //var_dump($pathXML);
                $xml = simplexml_load_file($pathXML);
                if ($typeXml == "discgrp" || $typeXml == "object") {
                    foreach ($xml as $key => $elemList) {
                        $arResult[$key][] = (array)$elemList;
                    }
                } elseif ($typeXml == "artdiscgrp" || $typeXml == "pludiscgrp") {
                    foreach ($xml as $key => $elemList) {
                        $arResult[$key][(int)$elemList->{"mdg"}][] = (array)$elemList;
                    }
                } else {
               // var_dump($xml);


               if(!$xml){
               echo "FILE_GET_CONTENTS";
               $xml = file_get_contents($pathXML);
                preg_match_all("|\<articul\>([0-9a-z-A-z\-\.\_\ ]+)\<\/articul\>|i",$xml,$ch);
                 preg_match_all("|\<referenceNo\>(\d+)\<\/referenceNo\>|i",$xml,$ch1);
                foreach($ch[1] as $k=>$v){

                 $arResult['good'][$k]['articul'] = $v;
                }

               return $arResult;
               }


                    foreach ($xml as $key => $elemList) {
                  //  echo (int)$elemList->{"referenceNo"}.PHP_EOL;
                        $arResult[$key][(int)$elemList->{"referenceNo"}] = (array)$elemList;
                    }
                }
                break;
            case 3:
                $pathXML = self::getFileInfo($typeXml, false);
                $xml = simplexml_load_file($pathXML);
                if ($typeXml == "discgrp" || $typeXml == "object") {
                    foreach ($xml as $key => $elemList) {
                        $arResult[$key][] = (array)$elemList;
                    }
                } elseif ($typeXml == "artdiscgrp" || $typeXml == "pludiscgrp") {
                    foreach ($xml as $key => $elemList) {
                        $arResult[$key][(int)$elemList->{"mdg"}][] = (array)$elemList;
                    }
                } else {
                    foreach ($xml as $key => $elemList) {
                        $arResult[$key][(int)$elemList->{"referenceNo"}] = (array)$elemList;
                    }
                }
                break;
        }

        return $arResult;
    }

    public static function getElemListId($arElemList, $IBLOCK_ID, $remove = false)
    {
        $arResult = $arList = array();
        $arSelect = Array("ID", "IBLOCK_ID", "XML_ID");
        $arFilter = array('IBLOCK_ID' => $IBLOCK_ID);
        $obElement = new CIBlockElement;
        $res = $obElement->GetList(Array(), $arFilter, false, false, $arSelect);
        while ($ob = $res->GetNextElement()) {
            $arItem = $ob->GetFields();
            if ($remove) {
                if (!in_array($arItem["XML_ID"], $arElemList)) {
                    CIBlockElement::Delete($arItem["ID"]);
                    TradexLog::addLog("Файл good, XML_ID - " . $arItem["XML_ID"] . ", IBLOCK_ID - " . $IBLOCK_ID . ", ID - " . $arItem["XML_ID"] . ", Действие: DELETE", "good.txt");
                }
            } else {
                if (in_array($arItem["XML_ID"], $arElemList)) {
                    $arResult[$arItem["XML_ID"]] = $arItem["ID"];
                }
            }
        }
        return $arResult;
    }

    public static function getSecTree($status)
    {
        $arResult = TradexGeneral::getSecListId();

        $xml = TradexGeneral::getArrayByXml("good", $status);

        foreach ($xml["good"] as $elem) {
            $xmlId = $elem["groupcode16"];
            $xmlId2 = $elem["groupcode17"];
            $xmlId3 = $elem["groupcode18"];

            if (!empty($xmlId)) {
                if (empty($arResult["DEPTH_LEVEL_1"][$xmlId]))
                    $arResult["DEPTH_LEVEL_1"][$xmlId] = 0;
                if (!empty($xmlId2)) {
                    if (empty($arResult["DEPTH_LEVEL_2"][$xmlId2][$xmlId]))
                        $arResult["DEPTH_LEVEL_2"][$xmlId2][$xmlId] = 0;
                    if (!empty($xmlId3)) {
                        if (empty($arResult["DEPTH_LEVEL_3"][$xmlId3][$xmlId2][$xmlId]))
                            $arResult["DEPTH_LEVEL_3"][$xmlId3][$xmlId2][$xmlId] = 0;
                    }
                }
            }
        }

        return $arResult;
    }

    public static function getSecListId($skipLvl = false)
    {
        $arResult = $arList = array();
        $arSelect = Array("ID", "IBLOCK_ID", "XML_ID");
        if (!$skipLvl) $arSelect[] = "DEPTH_LEVEL";
        $arFilter = array('IBLOCK_ID' => IBLOCK_ID_CATALOG);
        $obSection = new CIBlockSection();
        $resSection = $obSection->GetList(Array(), $arFilter, false, $arSelect);
        while ($arSection = $resSection->GetNext()) {
            if (!$skipLvl) {
                switch ($arSection["DEPTH_LEVEL"]) {
                    case 1:
                        $arResult["DEPTH_LEVEL_1"][$arSection["XML_ID"]] = $arSection["ID"];
                        break;
                    case 2:
                        $arPar = explode("_", $arSection["XML_ID"]);
                        $arResult["DEPTH_LEVEL_2"][$arPar[1]][$arPar[0]] = $arSection["ID"];
                        break;
                    case 3:
                        $arPar = explode("_", $arSection["XML_ID"]);
                        $arResult["DEPTH_LEVEL_3"][$arPar[2]][$arPar[1]][$arPar[0]] = $arSection["ID"];
                        break;
                }
            } else {
                $arResult[$arSection["XML_ID"]] = $arSection["ID"];
            }
        }
        return $arResult;
    }

    public static function importSection($ID, $arFields, $key)
    {
        $obSection = new CIBlockSection;
        $res = (!empty($ID)) ? $obSection->Update($ID, $arFields) : $obSection->Add($arFields);
        if (!$res) {
            TradexLog::addLog("Файл group, поле " . $key . ", XML_ID - " . $arFields["XML_ID"] . ", текст ошибки: " . $obSection->LAST_ERROR);
        } else {
            $action = (!empty($ID)) ? "UPDATE" : "ADD";
            $ID = (!empty($ID)) ? $ID : $res;
            TradexLog::addLog("Файл group, поле " . $key . ", XML_ID - " . $arFields["XML_ID"] . ", ID: " . $ID . ", Действие: " . $action, "group.txt");
        }
        return $ID;
    }

    public static function importElem($ID, $arFields, $file = "good")
    {
        $obElement = new CIBlockElement;
        $res = (!empty($ID)) ? $obElement->Update($ID, $arFields) : $obElement->Add($arFields);
        if (!$res) {
            TradexLog::addLog("Файл good, XML_ID - " . $arFields["XML_ID"] . ", IBLOCK_ID - " . $arFields["IBLOCK_ID"] . ", текст ошибки: " . $obElement->LAST_ERROR, "error.txt");
        } else {
            $action = (!empty($ID)) ? "UPDATE" : "ADD";
            $ID = (!empty($ID)) ? $ID : $res;
            TradexLog::addLog("Файл ".$file.", XML_ID - " . $arFields["XML_ID"] . ", IBLOCK_ID - " . $arFields["IBLOCK_ID"] . ", ID - " . $ID . ", Действие: " . $action, "good.txt");
        }
        return (!empty($ID)) ? $ID : $res;
    }

    public static function getCityList()
    {
        $arResult = array();
        $arSelect = Array("ID", "NAME", "IBLOCK_ID", "XML_ID", "PROPERTY_KEY");
        $arFilter = Array("IBLOCK_ID" => IBLOCK_ID_GEO_CITY);
        $obElement = new CIBlockElement;
        $res = $obElement->GetList(Array(), $arFilter, false, false, $arSelect);
        while ($ob = $res->GetNextElement()) {
            $arFields = $ob->GetFields();
            $arResult[] = array(
                "ID" => $arFields["ID"],
                "XML_ID" => $arFields["XML_ID"],
                "NAME" => $arFields["NAME"],
                "CODE" => $arFields["PROPERTY_KEY_VALUE"]
            );
        }

        return $arResult;
    }

    public static function getListPriceTypeID()
    {
        $result = array();
        $class = new CCatalogGroup;
        $dbPriceType = $class->GetList(
            array(),
            array()
        );
        while ($arPriceType = $dbPriceType->Fetch()) {
            $result[$arPriceType["XML_ID"]] = $arPriceType["ID"];
        }

        return $result;
    }

    public static function  getPriceTypeByObject()
    {
        $status = TradexHash::hashGetStatus("object", false);
        $arResult = TradexGeneral::getArrayByXml("object", $status);
        $resPriceType = array(
            101, 301, 401, 501, 901
        );
        $res = array();
        foreach ($arResult["object"] as $arObject) {
            if (in_array($arObject["referenceNo"], $resPriceType)) {
                $res[$arObject["referenceNo"]] = array(
                    "NAME" => $arObject["city"],
                    "CODE" => TradexGeneral::getCode($arObject["city"]),
                    "PRICE_TYPE" => $arObject["pricecode"]
                );
            }
        }
        return $res;
    }

    public static function importColor($arColor)
    {
        $obResult = array();
        if (CModule::IncludeModule('highloadblock')) {
            $arHLBlock = Bitrix\Highloadblock\HighloadBlockTable::getById(HIGHLOAD_ID_COLOR)->fetch();
            $obEntity = Bitrix\Highloadblock\HighloadBlockTable::compileEntity($arHLBlock);
            $strEntityDataClass = $obEntity->getDataClass();
            $arColorList = TradexImport::colorGetList();
            foreach ($arColor as $key => $color) {
                $ID = (!empty($arColorList[$key])) ? $arColorList[$key] : 0;
                $arFields = array(
                    'UF_NAME' => $color,
                    'UF_XML_ID' => $key
                );
                $obResult[] = ($ID) ? $strEntityDataClass::update($ID, $arFields) : $strEntityDataClass::add($arFields);
            }
        }
        return $obResult;
    }

    public static function colorGetList()
    {
        $arItems = array();
        if (CModule::IncludeModule('highloadblock')) {
            $arHLBlock = Bitrix\Highloadblock\HighloadBlockTable::getById(HIGHLOAD_ID_COLOR)->fetch();
            $obEntity = Bitrix\Highloadblock\HighloadBlockTable::compileEntity($arHLBlock);
            $strEntityDataClass = $obEntity->getDataClass();
            $rsData = $strEntityDataClass::getList(array(
                'select' => array('ID', 'UF_NAME', 'UF_XML_ID'),
                'order' => array('ID' => 'ASC')
            ));
            while ($arItem = $rsData->Fetch()) {
                $arItems[$arItem["UF_XML_ID"]] = $arItem["ID"];
            }
        }
        return $arItems;
    }

    public static function initImportColor()
    {
        $pathXML = TradexGeneral::getFileInfo("stock", true);
        $f = fopen($pathXML, "r");
        $ln = 0;
        $arColor = array();
        while (($line = fgets($f))) {
            ++$ln;
            preg_match_all("/\<([a-z0-9]+)\>([^<>]+)*\<\/[a-z0-9]+\>/", $line, $output_array);
            $arStock = array();
            foreach ($output_array[1] as $key => $title) {
                $arStock[$title] = $output_array[2][$key];
            }
            $color = $arStock["color"];
            $color2 = $arStock["color2"];
            if (!empty($color) && !empty($color2)) {
                $arColor[$color] = $color2;
            }
        }
        fclose($f);
        TradexImport::importColor($arColor);
        return $arColor;
    }

    public static function getArrayByString($pathXML, $line = 0, $length = false)
    {
        $arResult = array();
        $data =  file_get_contents($pathXML);
       if(strpos($data,"</good>")!==false){


           $data =  str_replace(" 
           (red)",'(red)',$data);
        //        $data =  str_replace("</good>","</good>".PHP_EOL,$data);
          // $data =  str_replace("TradeX>","TradeX>".PHP_EOL,$data);

                  file_put_contents($pathXML,$data);
       }


        $f = fopen($pathXML, "r");
        $ln = 0;
        $length = ($length) ? $length : 500;
        $count = 0;
        while (($string = fgets($f)) && $ln < $line + $length) {
            if ($ln >= $line) {
                preg_match_all("/\<([a-z0-9]+)\>([^<>]+)*\<\/[a-z0-9]+\>/", $string, $output_array);
                if (!empty($output_array[1])) {
                    foreach ($output_array[1] as $key => $title) {
                        $arResult[$count][$title] = $output_array[2][$key];
                    }
                    $count++;
                }
            }
            $ln++;
        }
        fclose($f);

        return $arResult;
    }

    public static function getFileLength($pathXML)
    {
        $f = fopen($pathXML, "r");
        $ln = 0;

        while ($string = fgets($f)) {
            $ln++;
        }
        fclose($f);

        return $ln;
    }

    public static function sectList()
    {
        $arResult = $arList = array();

        $arSelect = Array("ID", "IBLOCK_ID", "XML_ID", "IBLOCK_SECTION_ID", "DEPTH_LEVEL", "NAME");
        $arFilter = array('IBLOCK_ID' => IBLOCK_ID_CATALOG);
        $obSection = new CIBlockSection;
        $resSection = $obSection->GetList(Array("DEPTH_LEVEL" => "ASC"), $arFilter, false, $arSelect);
        while ($arSection = $resSection->GetNext()) {
            switch ($arSection["DEPTH_LEVEL"]) {
                case 1:
                    $arResult["group16"][$arSection["XML_ID"]] = $arSection["ID"];
                    break;
                case 2:
                    $resParent = CIBlockSection::GetByID($arSection["IBLOCK_SECTION_ID"]);
                    if ($arParent = $resParent->GetNext()) {
                        $parXML_ID = $arParent["XML_ID"];
                        $arResult["group17"][$parXML_ID][$arSection["XML_ID"]] = $arSection["ID"];
                    }
                    break;
                case 3:
                    $resParent1 = CIBlockSection::GetByID($arSection["IBLOCK_SECTION_ID"]);
                    if ($arParent1 = $resParent1->GetNext()) {
                        $resParent2 = CIBlockSection::GetByID($arParent1["IBLOCK_SECTION_ID"]);
                        if ($arParent2 = $resParent2->GetNext()) {
                            $arResult["group18"][$arParent1["XML_ID"]][$arParent2["XML_ID"]][$arSection["XML_ID"]] = $arSection["ID"];
                        }
                    }
                    break;
            }
        }
        return $arResult;
    }


}
