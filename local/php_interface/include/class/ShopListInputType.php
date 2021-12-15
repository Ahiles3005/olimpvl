<?php
namespace Olimp;


class ShopListInputType extends \Bitrix\Sale\Internals\Input\StringInput {

    private static $initialized = false;

    private static function initialize()
    {
        \Bitrix\Main\Loader::includeModule('iblock');
    }

    private static function flatten($iblock)
    {

        $res = \Bitrix\Iblock\ElementTable::GetList(
            [
                'select' => [
                    'ID',
                    'NAME'
                ],
                'filter' => [
                    'IBLOCK_ID' => $iblock,
                    'ACTIVE' => 'Y',
                ]
            ]

        );

        $options = [];

        while($ar_res = $res->Fetch())
        {
            $options[$ar_res['ID']] = $ar_res['NAME'];
        }

        return $options;
    }


    public static function getEditHtmlSingle($name, array $input, $value)
    {
        if (! static::$initialized)
            static::initialize();


        $options = [];

        if($input['SETTINGS']['IBLOCK']){
            $options = static::flatten($input['SETTINGS']['IBLOCK']);
        }
        $html = '<select name="'.$name.'">';

        foreach ($options as $key => $option)
        {
            $selected = ($value == $key)?'selected':'';

            $html .= '<option value="'.$key.'" '.$selected.'>'.$option.'</option>';
        }

        $html .= '</select>';

        return $html;

    }


    public static function getFilterEditHtml($name, array $input, $value)
    {
        return static::getEditHtmlSingle($name, $input, $value);
    }

    public static function getErrorSingle(array $input, $value)
    {
        $errors = array();

        $value = trim($value);

        return $errors;
    }

    static function getSettings(array $input, $reload)
    {
        if (! static::$initialized)
            static::initialize();

        $res = \Bitrix\Iblock\IblockTable::GetList(
            [
                'select' => [
                    'ID',
                    'NAME'
                ],
                'filter' => [
                    'IBLOCK_TYPE_ID' => 'GEO_CITY',
                    'ACTIVE' => 'Y',
                ]
            ]

        );

        while($ar_res = $res->Fetch())
        {
            $typeOptions[$ar_res['ID']] = $ar_res['NAME'];
        }

        $settings = array(
            'IBLOCK' => array('TYPE' => 'ENUM', 'LABEL' => 'Инфоблок', 'OPTIONS' => $typeOptions, 'ONCHANGE' => $reload),
        );



        return $settings;
    }
}