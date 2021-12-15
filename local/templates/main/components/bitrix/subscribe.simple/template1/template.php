<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
?>

<?if(count($arResult["ERRORS"]) > 0):?>
	<?foreach($arResult["ERRORS"] as $strError):?>
		<p class="errortext"><?= $strError?></p>
	<?endforeach?>
	<?$this->setFrameMode(false);?>
<?elseif(count($arResult["RUBRICS"]) <= 0):?>
	<p class="errortext"><?= GetMessage("CT_BSS_NO_RUBRICS_FOUND")?></p>
	<?$this->setFrameMode(false);?>
<?else:?>
	<?$frame=$this->createFrame()->begin();?>
	<?if($arResult["MESSAGE"]):?>
		<p class="notetext"><?= $arResult["MESSAGE"]?></p>
	<?endif?>

	<form method="POST" action="/">
		<input name="RUB_ID[]" value="1" id="RUB_2" type="checkbox" checked="">
		<label for="RUB_2">Новости</label>
		<input name="FORMAT" value="text" id="FORMAT_text" type="radio" checked="">
		<label for="FORMAT_text">Текст</label>
		<input name="FORMAT" value="html" id="FORMAT_html" type="radio">
		<label for="FORMAT_html">HTML</label>
		<?= bitrix_sessid_post();?>			
		<input type="submit" name="Update" value="Подписаться">		
	</form>
<?endif?>

	