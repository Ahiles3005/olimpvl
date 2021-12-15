<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<div class="b-header__search">
	<form action="<?= $arResult["FORM_ACTION"] ?>">
		<input type="text" name="q" id="search_input_header" class="b-header__search--input" placeholder="Поиск среди <?=$arResult['PRODUNCT_CNT_STRING']?>" />
		<input type="submit" class="b-header__search--button" />
	</form>
</div>