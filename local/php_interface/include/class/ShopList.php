<?php

namespace Olimp;

use \Bitrix\Sale\Internals\Input\Base,
    \Bitrix\Iblock\IblockTable,
    Bitrix\Main\Localization\Loc;

class ShopList extends Base
{
    private static $initialized = false;

    private static function initialize()
    {
        \Bitrix\Main\Loader::includeModule('iblock');
    }

    /**
     * @param $iblock_id integer
     * @return array
     * @throws \Bitrix\Main\ArgumentException
     * @throws \Bitrix\Main\ObjectPropertyException
     * @throws \Bitrix\Main\SystemException
     */
    private static function list($iblock_id)
    {

        $res = \Bitrix\Iblock\ElementTable::GetList(
            [
                'select' => [
                    'ID',
                    'NAME'
                ],
                'filter' => [
                    'IBLOCK_ID' => $iblock_id,
                    'ACTIVE' => 'Y',
                ]
            ]

        );

        $options = [];

        while($ar_res = $res->Fetch())
        {
            $options[$ar_res['ID']] = $ar_res['NAME'];
        }
 //var_dump($options);
        return $options;
    }

    public static function getViewHtmlSingle(array $input, $value)
    {
        $options = self::list($input['SETTINGS']['IBLOCK']);

        if (is_array($options))
        {
            $options = self::list($input['SETTINGS']['IBLOCK']);

            if ($v = $options[$value])
                $value = $v;
        }
        
        var_dump($value);

        return htmlspecialcharsbx($value);
    }

    public static function getFilterEditHtml($name, array $input, $value)
    {
        return static::getEditHtml($name, $input, $value);
    }

    public static function getEditHtml($name, array $input, $value = null)
    {
        $options = self::list($input['SETTINGS']['IBLOCK']);

        if (! is_array($options))
            return Loc::getMessage('INPUT_ENUM_OPTIONS_ERROR');

        $multiple = $input['MULTIPLE'] == 'Y';

        $name = htmlspecialcharsbx($name);

        if ($value === null && isset($input['VALUE']))
            $value = $input['VALUE'];

        $originalValue = $value;
        $html = '';

        if ($input['HIDDEN'] == 'Y')
        {
            $html .= static::getHiddenRecursive($name
                , $multiple ? static::asMultiple($value) : static::asSingle($value)
                , static::extractAttributes($input, array('DISABLED'=>''), array('FORM'=>1), false));
        }
        else
        {
            if ($value === null)
                $value = array();
            else
                $value = $multiple ? array_flip(static::asMultiple($value)) : array(static::asSingle($value) => true);

            if ($input['MULTIELEMENT'] == 'Y')
            {
                $tag = isset($input['MULTITAG']) ? htmlspecialcharsbx($input['MULTITAG']) : static::MULTITAG;
                list ($startTag, $endTag) = $tag ? array("<$tag>", "</$tag>") : array('', '');

                $attributes = static::extractAttributes($input, array('DISABLED'=>''), array('FORM'=>1), false);

                $type = 'radio';

                if ($multiple)
                {
                    $type = 'checkbox';
                    $name .= '[]';
                }

                $html .= self::getEditOptionsHtml($options, $value, ' checked',
                    '<fieldset><legend>{GROUP}</legend>{OPTIONS}</fieldset>',
                    $startTag.'<label><input type="'.$type.'" name="'.$name.'" value="{VALUE}"{SELECTED}'.$attributes.'> {TEXT} </label>'.$endTag
                );
            }
            else // select
            {
                $attributes = static::extractAttributes($input, array('DISABLED'=>'', 'AUTOFOCUS'=>'', 'REQUIRED'=>''), array('FORM'=>1, 'SIZE'=>1));

                $html .= '<select'.$attributes.' name="'.$name.($multiple ? '[]" multiple>' : '">');

                $html .= self::getEditOptionsHtml($options, $value, ' selected',
                    '<optgroup label="{GROUP}">{OPTIONS}</optgroup>',
                    '<option value="{VALUE}"{SELECTED}>{TEXT}</option>'
                );

                $html .= '</select>';
            }
        }

        if ($input['ADDITIONAL_HIDDEN'] === 'Y')
        {
            $html .= static::getHiddenRecursive($name
                , $multiple ? static::asMultiple($originalValue) : static::asSingle($originalValue)
                , static::extractAttributes($input, array(), array('FORM'=>1), false));
        }

        return $html;
    }

    private static function getEditOptionsHtml(array $options, array $selected, $selector, $group, $option)
    {
        $result = '';

        foreach ($options as $key => $value)
        {
            $result .= is_array($value)
                ? str_replace(
                    array('{GROUP}', '{OPTIONS}'),
                    array(
                        htmlspecialcharsEx($key),
                        self::getEditOptionsHtml($value, $selected, $selector, $group, $option),
                    ),
                    $group
                )
                : str_replace(
                    array('{VALUE}', '{SELECTED}', '{TEXT}'),
                    array(
                        htmlspecialcharsEx($key),
                        isset($selected[$key]) ? $selector : '',
                        htmlspecialcharsEx($value) ?: htmlspecialcharsEx($key),
                    ),
                    $option
                );
        }

        return $result;
    }


    public static function getErrorSingle(array $input, $value)  // TODO optimize to getError
    {
        $options = self::list($input['IBLOCK']);

        if (is_array($options))
        {
            return isset($options[$value])
                ? array()
                : array('INVALID' => Loc::getMessage('INPUT_INVALID_ERROR').$input['IBLOCK']);
        }
        else
        {
            return array('OPTIONS' => Loc::getMessage('INPUT_ENUM_OPTIONS_ERROR'));
        }
    }

    /**
     * @param array $input
     * @param $reload
     * @return array|void
     */
    static function getSettings(array $input, $reload)
    {
        if (! static::$initialized)
            static::initialize();

        $res = IblockTable::GetList(
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

        $settings = parent::getSettings($input, $reload);
        $settings['IBLOCK'] = ['TYPE' => 'ENUM', 'LABEL' => 'Инфоблок', 'OPTIONS' => $typeOptions, 'ONCHANGE' => $reload];

        $settings['OPTIONS'] = ['TYPE' => 'ENUM', 'LABEL' => 'Список магазинов', 'OPTIONS' => self::list($input['IBLOCK']), 'ONCHANGE' => $reload];

        return $settings;
    }
}