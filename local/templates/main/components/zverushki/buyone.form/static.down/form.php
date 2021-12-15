<?
use Bitrix\Main\Localization\Loc,
	Bitrix\Main\Web;

if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
    die();

$this->setFrameMode(true);

$mainId = $this->getEditAreaId('zverushki_buyone_');


foreach ($arResult['form']['input'] as &$input) {
	switch ($input['code']){
		case "mail":
			$input['title'] = Loc::getMessage('EMAIL_INPUT_TITLE');
			break;
		case "comment":
			$input['title'] = Loc::getMessage('ADDRESS_INPUT_TITLE');
			break;
	}
}
unset($input);


$title = $arResult['form']['mess']['form']
	? $arResult['form']['mess']['form']
	: Loc::getMessage('BUYONE_BUTTON_FORM_TITLE');

$jsParams = array(
	'formId' => $mainId.'form',
	'closeButtonId' => $mainId.'closebutton',
	'consentId' => $mainId.'consent'
);



?><form id=<?=$jsParams['formId'];?> action="" method=post autocomplete=off class=buyone-form><?
	?><div class=htop><?
if ($title):
		?><div class=title><?=$title;?></div><?
endif;

		?><button id=<?=$jsParams['closeButtonId'];?> type=button class=btn-close>&times;</button><?
	?></div><?

	?><div class=cscroll><?

foreach ($arResult['form']['input'] as $a):

	switch ($a['type']) {
		case 'textarea':
			?><div data-code="<?=$a['code'];?>"><?
				?><textarea name="<?=$a['code'];?>" placeholder="<?=$a['title'].($a['required'] ? ' *' : '');?>"></textarea><?
			?></div><?
			break;

		default:
			?><div data-code="<?=$a['code'];?>"><?
				?><input type="<?=$a['type'];?>" name="<?=$a['code'];?>" placeholder="<?=$a['title'].($a['required'] ? ' *' : '');?>" value="<?=$a['value'];?>"><?
			?></div><?
			break;
	};

endforeach;

		if ($arParams['USER_CONSENT'] === 'Y'):
			?><div class=consent><?
				?><label for=<?=$jsParams['consentId'];?>><?
					?><input id=<?=$jsParams['consentId'];?> type=checkbox <?=($arResult['consent']['isChecked'] ? ' checked' : '');?>><?
					echo ' '.$arResult['consent']['labelText'];
				?></label><?
			?></div><?
		endif;

		?><input type=submit value="<?=($arResult['form']['mess']['button'] ? $arResult['form']['mess']['button'] : loc::getMessage('BUYONE_FORM_BUTTONSUBMIT_TITLE'));?>"><?

	?></div><?
?></form><?

?><script type=text/javascript>new ZverushkiBuyoneForm(<?=Web\Json::encode($jsParams);?>);</script><?