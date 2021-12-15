<? if  (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<fieldset class="b-form b-form-cooperation">
    <h3><?= $arResult['arForm']['NAME'] ?></h3>
    <? if (isset($_GET['formresult']) && $_GET['formresult'] == 'addok'): ?>
        <p style="color:green">Ваши данные отправлены</p>
    <? endif ?>
    <form id="cooperation" class="b-form__control--cooperation" name="<?= $arResult["WEB_FORM_NAME"] ?>" action="<?= POST_FORM_ACTION_URI ?>" method="POST" enctype="multipart/form-data">
        <?=bitrix_sessid_post()?>
        <input type="hidden" name="WEB_FORM_ID" value="<?= $arParams["WEB_FORM_ID"] ?>">
        <div class="b-form__item b-form__item--cooperation">
            <label for="name"><?= $arResult['arQuestions']['SIMPLE_QUESTION_892']['TITLE'] ?></label>
            <input type="text" class="b-form__input b-form__input--cooperation b-form__control--cooperation js-validation-change" data-rules="req;min=2" name="form_text_1" value="" size="0">
        </div>
        <div class="b-form__item b-form__item--cooperation">
            <label for="city"><?= $arResult['arQuestions']['SIMPLE_QUESTION_773']['TITLE'] ?></label>
            <input type="text" class="b-form__input b-form__input--cooperation b-form__control--cooperation js-validation-change" data-rules="req" name="form_text_2" value="" size="0">
        </div>
        <div class="b-form__item b-form__item--cooperation">
            <label for="tel"><?= $arResult['arQuestions']['SIMPLE_QUESTION_628']['TITLE'] ?></label>
            <input type="text" class="b-form__input b-form__input--cooperation b-form__control--cooperation js-validation-change" data-rules="req;phone;" name="form_text_3" value="" size="0">
        </div>
        <div class="b-form__item b-form__item--cooperation">
            <label for="email"><?= $arResult['arQuestions']['SIMPLE_QUESTION_859']['TITLE'] ?></label>
            <input type="text" class="b-form__input b-form__input--cooperation b-form__control--cooperation js-validation-change" data-rules="email;req;" name="form_email_4" value="" size="0">
        </div>
        <div class="b-form__item b-form__item--textarea-cooperation">
            <label for="text"><?= $arResult['arQuestions']['SIMPLE_QUESTION_218']['TITLE'] ?></label>
            <textarea rows="10" cols="10" class="b-form__textarea b-form__textarea--cooperation b-form__control--cooperation js-validation-change"  data-rules="req;" name="form_textarea_5"></textarea>
        </div>
        <input class="btn b-btn__default b-btn__default--lg b-form__control--cooperation js-validation-change" type="submit" name="web_form_submit" value="ОТПРАВИТЬ">
        <input type="hidden" name="web_form_apply" value="Y">
    </form>
</fieldset>