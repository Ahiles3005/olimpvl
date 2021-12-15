<?
use Bitrix\Main\Localization\Loc,
	Bitrix\Main\Web;

if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
    die();

$this->setFrameMode(true);

$mainId = $this->getEditAreaId('zverushki_buyone_');

$jsParams = array(
	'containerId' => $mainId.'container',
	'openFormButtonId' => $mainId.'openformbutton',
	'containerFormId' => $mainId.'containerform'
);


?><div id=<?=$jsParams['containerId'];?> class=buyone-fixed buyone-disabled="true" buyone-theme=<?=$arParams['TEMPLATE_THEME'];?>><?
	?><button id="<?=$jsParams['openFormButtonId'];?>" class=btn-open><span><?=($arResult['form']['mess']['form'] ? $arResult['form']['mess']['form'] : Loc::getMessage('BUYONE_BUTTON_FORM_TITLE'));?></span></button><?
	?><div id=<?=$jsParams['containerFormId'];?> class=buyone-form-container></div><?
?></div><?

?><script type=text/javascript>new ZverushkiBuyoneButton(<?=Web\Json::encode($jsParams);?>);</script><?