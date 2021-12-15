<?

Class TradexHash
{
    public static function hashGetStatus($typeXml, $checkHash = true)
    {
        $impFull = $impPartial = false;
        $dateFull = TradexGeneral::getFileInfo($typeXml, true, "date");
        $datePartial = TradexGeneral::getFileInfo($typeXml, false, "date");
        $arOldHash = TradexHash::getOldHash($typeXml);
        $arNewHash = TradexHash::getNewHash($typeXml);
        if (!$arNewHash["full"]) return 0;
        $checkHash = false; // @TODO VERI IMPORTANT HZ KAK RABOTAET
        if ($checkHash) {
            if ($arOldHash["full"] != $arNewHash["full"]) $impFull = true;
            if ($arOldHash["partial"] != $arNewHash["partial"] && $dateFull < $datePartial && $arNewHash["partial"]) $impPartial = true;
        } else {
            $impFull = true;
            if ($dateFull < $datePartial && $arNewHash["partial"]) $impPartial = true;
        }

        if ($impPartial && $impFull) {
            $arResult = 1;//выполняем импорт записей из новых файлов в папке full и partial, записи которые отсутствуют в файлах удаляем
        } elseif ($impFull) {
            $arResult = 2;//выполняем импорт записей из новых файлов в папке full, записи которые отсутствуют в файлах удаляем
        } elseif ($impPartial) {
            $arResult = 3;//выполняем только импорт записей из новых файлов в папке partial
        } else {
            $arResult = 0;//импорт не будет выполнен для текущего файла
        }
        return $arResult;
    }

    public static function getHashList($checkHash = true, $import = 0)
    {
        $arResult = array();
        //$arTypeXml = array("group", "object", "pricelist", "good", "discgrp", "pludiscgrp", "artdiscgrp", "stock");
        $arTypeXml = array("group", "object", "pricelist", "good", "price", "discgrp", "pludiscgrp", "artdiscgrp", "stock");
        //$arTypeXml = array("price", "discgrp", "pludiscgrp", "artdiscgrp", "stock");

        foreach ($arTypeXml as $typeXml) {
            $status = self::hashGetStatus($typeXml, $checkHash);
            var_dump($status);
        
            switch ($status) {
                case 0:
                    break;
                case 1:
                    if ($import != 0) {
                        $arResult[] = array(
                            "TYPE" => $typeXml,
                            "STATUS" => $import
                        );
                    } else {
                        $arResult[] = array(
                            "TYPE" => $typeXml,
                            "STATUS" => 2
                        );
                        $arResult[] = array(
                            "TYPE" => $typeXml,
                            "STATUS" => 3
                        );
                    }
                    break;
                case 2:
                case 3:
                    if ($import != 0) {
                        if ($import == $status)
                            $arResult[] = array(
                                "TYPE" => $typeXml,
                                "STATUS" => $status
                            );
                    } else {
                        $arResult[] = array(
                            "TYPE" => $typeXml,
                            "STATUS" => $status
                        );
                    }
                    break;
            }

        }
        
//             var_dump($arResult);
//              die($status);
        return $arResult;
    }

    public static function getOldHash($typeXml)
    {
        $arResult = array();
        $filePath = $_SERVER["DOCUMENT_ROOT"] . "/local/php_interface/tradex/log/hash.txt";
        $arHash = (array)json_decode(file_get_contents($filePath, true));

        $arResult["full"] = $arHash[$typeXml . "_full"];
        $arResult["partial"] = $arHash[$typeXml . "_partial"];

        return $arResult;
    }

    public static function getNewHash($typeXml)
    {
        $arResult = array();

        $file = TradexGeneral::getFileInfo($typeXml, true);
        $arResult["full"] = hash_file('md5', $file);
        $file = TradexGeneral::getFileInfo($typeXml, false);
        $arResult["partial"] = hash_file('md5', $file);

        return $arResult;
    }

    public static function addHash($typeXML, $status = 0)
    {
        $filePath = $_SERVER["DOCUMENT_ROOT"] . "/local/php_interface/tradex/log/hash.txt";
        $res = (array)json_decode(file_get_contents($filePath, true));
        $full = $partial = false;
        //$arTypeXml = array("group", "object", "pricelist", "good", "discgrp", "pludiscgrp", "artdiscgrp", "stock");
        $arTypeXml = array("group", "object", "pricelist", "good", "price", "discgrp", "pludiscgrp", "artdiscgrp", "stock");
        //$arTypeXml = array("price", "discgrp", "pludiscgrp", "artdiscgrp", "stock");

        switch ($status) {
            case 1:
                $full = true;
                $partial = true;
                break;
            case 2:
                $full = true;
                break;
            case 3:
                $partial = true;
                break;
        }
        if (($full || $partial) && in_array($typeXML, $arTypeXml)) {

            if ($full) {
                $file = TradexGeneral::getFileInfo($typeXML, true);
                $res[$typeXML . "_full"] = hash_file('md5', $file);
            }
            if ($partial) {
                $file = TradexGeneral::getFileInfo($typeXML, false);
                $res[$typeXML . "_partial"] = hash_file('md5', $file);
            }

            $info = json_encode($res, JSON_FORCE_OBJECT);
            file_put_contents($filePath, $info);
        }
    }

    public static function get($XML_ID, $PRICE_CODE = 1)
    {
        global $DB;
        $strSql = "SELECT `HASH` FROM `tradex_offers_hash` WHERE `XML_ID` = " . $XML_ID . " AND `PRICE_CODE` = " . $PRICE_CODE;
        $res = $DB->Query($strSql);
        return ($row = $res->Fetch()) ? $row["HASH"] : false;
    }

    public static function insert($XML_ID, $arParam, $PRICE_CODE, $oldHash = false)
    {
        global $DB;
        $HASH = md5(implode($arParam));
        if ($oldHash) {
            $strSql = "UPDATE `tradex_offers_hash` SET `HASH`='" . $HASH . "' WHERE `XML_ID` = '" . $XML_ID . "' AND `PRICE_CODE` = '" . $PRICE_CODE . "';";
        } else {
            $strSql = "INSERT INTO `tradex_offers_hash`(`XML_ID`, `HASH`, `PRICE_CODE`) VALUES ('" . $XML_ID . "','" . $HASH . "','" . $PRICE_CODE . "');";
        }
        $DB->Query($strSql);
    }

    public static function getList($arXML_ID)
    {
        global $DB;
        $arResult = array();
        foreach ($arXML_ID as $key => $XML_ID) {
            $arXML_ID[$key] = " `XML_ID` = '" . $XML_ID . "' ";
        }

        $strOR = implode(" OR ", $arXML_ID);
        $strSql = "SELECT * FROM `tradex_offers_hash` WHERE (" . $strOR . ")";
        $res = $DB->Query($strSql);
        while ($row = $res->Fetch()) {
            $arResult[] = $row;
        }

        return $arResult;
    }

    public static function checkTable()
    {
        global $DB;
        $sql = "SHOW TABLES LIKE 'tradex_offers_hash'";
        $res = $DB->Query($sql);
        $row = $res->Fetch();
        if (!$row) {

            $sql = '
            -- Создание таблицы
            CREATE TABLE IF NOT EXISTS `tradex_offers_hash` (
              `ID` int(10) NOT NULL,
              `XML_ID` int(10) NOT NULL,
              `HASH` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
              `PRICE_CODE` int(3) NOT NULL
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

            ';
            $DB->Query($sql);

            $sql = '
            -- Добавление первичного ключа и индекс
             ALTER TABLE `tradex_offers_hash`
               ADD PRIMARY KEY (`XML_ID`,`PRICE_CODE`), ADD KEY `ID` (`ID`);
            ';
            $DB->Query($sql);
        }
    }

}