<?
	if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();
	$this->setFrameMode(true);
?>
<? if (!empty($arResult["DETAIL_TEXT"])): ?>
	<div class="b-brand-catalog__about">
		<?= $arResult["DETAIL_TEXT"] ?>
	</div>
<? endif; ?>