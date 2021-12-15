<?

Class TradexProp
{
    public static function initImportProp($arListXML, $strElemName, $strPropCode, $arParams = false)
    {
        $arListElem = array();

        if ($arParams) {
            foreach ($arListXML as $elem) {
                $resElemName = $elem["name"];
                if ((!array_key_exists($resElemName, $arListElem)) && (!empty($resElemName))) {
                    $arListElem[] = $resElemName;
                }
            }
        } else {
            foreach ($arListXML as $elem) {
                $elem = (array)$elem;
                $resElemName = $elem[$strElemName];
                if ((!in_array($resElemName, $arListElem)) && (!empty($resElemName))) {
                    $arListElem[] = $resElemName;
                }
            }
        }
        self::importProp($arListElem, $strPropCode);
        return $arListElem;
    }


    public static function importProp($arListElem, $strPropCode)
    {
        $arResult = array();
        $arListPropID = self::getListProp($strPropCode);
        $properties = CIBlockProperty::GetList(Array("sort" => "asc", "name" => "asc"), Array("ACTIVE" => "Y", "IBLOCK_ID" => IBLOCK_ID_CATALOG, "CODE" => $strPropCode));
        if ($prop_fields = $properties->GetNext()) {
            $PROPERTY_ID = $prop_fields["ID"];
        }
        if (!empty($PROPERTY_ID)) {
            foreach ($arListElem as $elem) {
                $ibpenum = new CIBlockPropertyEnum;
                if (empty($arListPropID[$elem])) {
                    $arResult[] = $ibpenum->Add(Array('PROPERTY_ID' => $PROPERTY_ID, 'VALUE' => $elem));
                }
            }
        }
        return $arResult;
    }

    public static function getListProp($strPropCode)
    {
        $arResult = array();
        $property_enums = CIBlockPropertyEnum::GetList(Array("DEF" => "DESC", "SORT" => "ASC"), Array("IBLOCK_ID" => IBLOCK_ID_CATALOG, "CODE" => $strPropCode));
        while ($enum_fields = $property_enums->GetNext()) {
            $arResult[$enum_fields["VALUE"]] = $enum_fields["ID"];
        }
        return $arResult;
    }

    public static function getListPropKey($strPropCode, $typeXML = "group", $status = 2)
    {
        $arListElem = array();
        $arResult = TradexGeneral::getArrayByXml($typeXML, $status);
        foreach ($arResult[$strPropCode] as $elem) {
            $elem = (array)$elem;
            if (!in_array($elem["name"], $arResult))
                $arListElem[$elem["referenceNo"]] = $elem["name"];
        }
        return $arListElem;
    }

    /*
    * Обновить пользовательское св-во
    * $entity_id - код объекта (в вашем случае "CAT_STORE")
    * $value_id - id элемента ( в нашем случае id склада)
    * $uf_id - символьный код поля (всегда начинается с "UF_" )
    * $uf_value - значение, которое сохраняем
    */
    public static function SetUserField($entity_id, $value_id, $uf_id, $uf_value)
    {
        return $GLOBALS["USER_FIELD_MANAGER"]->Update($entity_id, $value_id, array($uf_id => $uf_value));
    }

    public static function GetUserField($entity_id, $value_id, $uf_id) //считывание значения
    {
        $arUF = $GLOBALS["USER_FIELD_MANAGER"]->GetUserFields($entity_id, $value_id);
        return $arUF[$uf_id]["VALUE"];
    }


}