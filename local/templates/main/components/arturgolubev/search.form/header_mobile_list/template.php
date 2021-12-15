<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<div class="b-header-mobile__search-list">
    <div class="b-header__search b-header__search-mobile">
		<form action="<?= $arResult["FORM_ACTION"] ?>">
			<input type="text" name="q" class="b-header__search--input" placeholder="Поиск среди <?=$arResult['PRODUNCT_CNT_STRING']?>" />
			<input type="submit" class="b-header__search--button" />
		</form>
	</div>
    <div class="b-header-mobile__search-list--close">×</div>
</div>