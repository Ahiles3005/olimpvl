<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<? if (isset($_GET['formresult']) && $_GET['formresult'] == 'addok'): ?>
	<p style="color:green">Ваши данные отправлены</p>
<? endif ?>
<form class="b-form" name="<?=$arResult["WEB_FORM_NAME"] ?>" action="<?= POST_FORM_ACTION_URI ?>" method="POST" enctype="multipart/form-data">
	<?=bitrix_sessid_post()?>
	<input type="hidden" name="WEB_FORM_ID" value="<?= $arParams["WEB_FORM_ID"] ?>">
	<div class="form-group b-form__form-group">
		<label for="name-contact"><?= $arResult['arQuestions']['SIMPLE_QUESTION_492']['TITLE'] ?></label>
		<input id="name-contact" name="form_text_6" class="b-form__input b-form__input--fedbackform js-validation-change" data-rules="req;min=2" value="" size="0">
	</div>
	<div class="form-group b-form__form-group">
		<label for="tel-contact"><?= $arResult['arQuestions']['SIMPLE_QUESTION_366']['TITLE'] ?></label>
		<input id="tel-contact" name="form_text_7" class="b-form__input b-form__input--fedbackform js-validation-change" data-rules="req;phone" value="" size="0">
	</div>
	<div class="form-group b-form__form-group">
		<label for="email-contact"><?= $arResult['arQuestions']['SIMPLE_QUESTION_216']['TITLE'] ?></label>
		<input id="email-contact" name="form_email_8" class="b-form__input b-form__input--fedbackform js-validation-change" data-rules="email;req;" value="" size="0">
	</div>
	<div class="form-group b-form__form-group">
		<label for="text-contact"><?= $arResult['arQuestions']['SIMPLE_QUESTION_770']['TITLE']?></label>
		<textarea id="text-contact" name="form_textarea_9" class="b-form__textarea b-form__textarea--fedbackform js-validation-change" rows="3" data-rules="req;min=2"></textarea>
	</div>
	<input class="b-form__input js-validation-change" type="submit" name="web_form_submit" value="Отправить">
	<input type="hidden" name="web_form_apply" value="Y">
</form>