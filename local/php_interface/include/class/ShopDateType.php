<?php
namespace Olimp;

use Bitrix\Sale\Internals\Input\Base,
    Bitrix\Main\Localization\Loc;

class ShopDateType extends Base {

    public static function getEditHtmlSingle($name, array $input, $value)
    {
        $showTime = $input['TIME'] == 'Y';

        // TODO HTML5 input="date|datetime|datetime-local" & min & max & step(date:integer|datetime..:float)

        $textAttributes = static::extractAttributes($input,
            array('DISABLED'=>'', 'AUTOCOMPLETE'=>'on', 'AUTOFOCUS'=>'', 'READONLY'=>'',  'REQUIRED'=>''),
            array('FORM'=>1, 'LIST'=>1));

        $buttonAttributes = static::extractAttributes($input, array('DISABLED'=>''), array(), false);

        return '<input type="text" name="'.$name.'" size="'.($showTime ? 20 : 10).'" value="'.htmlspecialcharsbx($value).'"'.$textAttributes.'>'
            .'<input type="button" value="'.Loc::getMessage('INPUT_DATE_SELECT').'"'.$buttonAttributes.' onclick="'
            ."BX.calendar({node:this, field:'$name', form:'', bTime:".($showTime ? 'true' : 'false').", bHideTime:false});"
            .'">';
    }

    /**
     * @param $name
     * @param array $input
     * @param $value
     * @return string
     */
    public static function getFilterEditHtml($name, array $input, $value)
    {
        return static::getEditHtmlSingle($name, $input, $value);
    }

    public static function getEditHtmlSingleDelete($name, array $input)
    {
        return '<label> '.Loc::getMessage('INPUT_DELETE').' <input type="checkbox" onclick="'

            ."var disabled = this.checked;"
            ."var button = this.parentNode.previousSibling;"
            ."button.disabled = disabled;"
            ."button.previousSibling.disabled = disabled;"

            .'"> </label>';
    }

    public static function getErrorSingle(array $input, $value)
    {
        return CheckDateTime($value, FORMAT_DATE)
            ? array()
            : array('INVALID' => Loc::getMessage('INPUT_INVALID_ERROR'));
    }

    static function getSettings(array $input, $reload)
    {
        $settings = [
            'TIME' => ['TYPE' => 'Y/N', 'LABEL' => Loc::getMessage('INPUT_DATE_TIME'), 'ONCLICK' => $reload],
            'LIMIT' => ['TYPE' => 'NUMBER', 'LABEL' => 'Лимит доступных дней', 'ONCHANGE' => $reload]
        ];

        return $settings;
    }
}