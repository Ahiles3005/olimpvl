<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<div class="b-header-mobile__search-top">
	<form action="<?= $arResult["FORM_ACTION"] ?>">
		<input type="text" name="q" class="b-header-mobile__search-top--input" placeholder="Поиск среди <?=$arResult['PRODUNCT_CNT_STRING']?>" />
		<input type="submit" class="b-header-mobile__search-top--button" />
	</form>
</div>