<?

Class TradexStore
{
    public static function priceExtraGetListSLT()
    {
        $arResult = array();
        $class = new CExtra;
        $res = $class->GetList(array(), array(), false, false, array());
        while ($arExtra = $res->GetNext()) {
            $arResult[$arExtra["NAME"]] = $arExtra["ID"];
        }

        return $arResult;
    }

    public static function priceExtraImportSLT($ID, $percent)
    {
        $arFields = array(
            "NAME" => $percent,
            "PERCENTAGE" => $percent,
            "RECALCULATE" => "Y"
        );
        $class = new CExtra;
        return (!empty($ID)) ? $class->Update($ID, $arFields) : $class->Add($arFields);

    }

    public static function priceExtraGetListVAT()
    {
        $arResult = array();
        $class = new CCatalogVat;
        $res = $class->GetList(array(), array(), array("ID", "NAME"));
        while ($arExtra = $res->GetNext()) {
            $arResult[$arExtra["NAME"]] = $arExtra["ID"];
        }

        return $arResult;
    }

    public static function priceExtraImportVAT($ID, $percent)
    {
        $arFields = array(
            "ACTIVE" => "Y",
            "SORT" => 100,
            "NAME" => $percent,
            "RATE" => $percent
        );
        $class = new CCatalogVat;
        return (!empty($ID)) ? $class->Update($ID, $arFields) : $class->Add($arFields);
    }

}