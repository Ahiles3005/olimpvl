<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();?>


<div class="mgc-error-body">
	<?
	if (count($arResult["ERRORS"]) > 0) {


        if ($_REQUEST['TYPE'] == "REGISTRATION") {

            $APPLICATION->RestartBuffer();
        }
        ?>

        <div class="error ">
            <?

            //var_dump($arResult["ERRORS"]);
            foreach ($arResult["ERRORS"] as $key => $error) {
                if (intval($key) == 0 && $key !== 0)
                    $arResult["ERRORS"][$key] = str_replace("#FIELD_NAME#", "&quot;" . GetMessage("REGISTER_FIELD_" . $key) . "&quot;", $error);
            }
            ShowError(implode("<br />", $arResult["ERRORS"]));

            ?>
        </div>

        <?

        if ($_REQUEST['TYPE'] == "REGISTRATION") {


            die("");

        }

    }elseif($arResult["USE_EMAIL_CONFIRMATION"] === "Y"){


	?>
	<p><?echo GetMessage("REGISTER_EMAIL_WILL_BE_SENT")?></p>

	<? } ?>


	</div>


					<form  autocomplete="off" id="modal-register" class="b-form form-signup" method="post" action="/null" name="regform" enctype="multipart/form-data">


					<?
                                        $FIELDS = $arResult["SHOW_FIELDS"];
/*CJSCore::Init(array('jquery','date'));*/
// 					var_dump($FIELDS);
					?>
						<?if($arResult["BACKURL"] <> ''):?>
							<input type="hidden" name="backurl" value="<?=$arResult["BACKURL"]?>" />
						<?endif;?>

						<div class="b-popup-sign-up__item b-popup-sign-up__item-top b-popup-sign-up__item-addon">
							<div class="form-group b-popup-feedback__form-group">
								<label class="b-form__label" for="surname-signup">Фамилия*</label>
								<input required="required"  minlength="3" type="text" name="REGISTER[LAST_NAME]" tabindex="1" value="<?=$arResult["VALUES"]['LAST_NAME']?>" id="surname-signup" class="b-form__input b-popup-feedback__input js-validation-change" data-rules="req">
							</div>
                            <div class="form-group b-popup-feedback__form-group fga">
								<label class="b-form__label" for="name-signup">Имя*</label>
								<input required="required"  minlength="3"  type="text" name="REGISTER[NAME]" tabindex="2" id="name-signup" value="<?=$arResult["VALUES"]['NAME']?>"  class="b-form__input b-popup-feedback__input js-validation-change" data-rules="req">
							</div>
                            <div style="clear:both"></div>
							<div class="form-group b-popup-feedback__form-group">
								<label class="b-form__label" for="patronymic-signup">Отчество*</label>
								<input name="REGISTER[SECOND_NAME]"  tabindex="3" id="patronumic-signup"  value="<?=$arResult["VALUES"]['SECOND_NAME']?>" class="b-form__input b-popup-feedback__input js-validation-change" data-rules="req">
							</div>



							<div class="form-group b-popup-feedback__form-group fga">
								<label class="b-form__label" for="birthday-signup">Дата рождения</label>
								<input data-mask="99.99.9999" type="text" name="REGISTER[PERSONAL_BIRTHDAY]"  tabindex="5" id="birthday-signup" value="<?=$arResult["VALUES"]['PERSONAL_BIRTHDAY']?>"  class="b-form__input b-popup-feedback__input js-validation-change"



								onclick="BX.calendar({node:this, field:'<?=htmlspecialcharsbx('REGISTER[PERSONAL_BIRTHDAY]')?>', form: 'modal-register', bTime:  false,  bHideTime: true }); changeCalendar();"

								data-rules="date">
							</div>
                            <div style="clear:both"></div>
                            <div class="form-group b-popup-feedback__form-group">
								<label class="b-form__label" for="phone-signup">Мобильный телефон*</label>
								<input required="required" data-mask="+7(999)999-99-99"    name="REGISTER[PERSONAL_MOBILE]"  tabindex="4" id="phone-signup" value="<?=$arResult["VALUES"]['PERSONAL_MOBILE']?>"  class="b-form__input b-popup-feedback__input js-validation-change" data-rules="req;phone" placeholder="+7 (___) ___-__-__">
							</div>

							<div class="form-group b-popup-feedback__form-group fga">
								<label class="b-form__label" for="email-signup">Эл. почта*</label>
								<input  required="required"  minlength="3"  type="email" name="REGISTER[EMAIL]" id="email-signup"  tabindex="6" value="<?=$arResult["VALUES"]['EMAIL']?>"  class="b-form__input b-popup-feedback__input js-validation-change" data-rules="req;email">
							</div>

						</div>

                        <div style="clear:both"></div>
                        <div style="margin:0px 40px">
                        	<div class="form-group b-popup-feedback__form-group b-checkbox__item">
								<input required="required"  required type="checkbox" tabindex="9" id="data-processing-signup-mobile" name="data-processing-signup-mobile" class="js-validation-change" data-rules="req">
								<label for="data-processing-signup-mobile">Я согласен <a href="/personal_data/" target="_blank" class="b-link__dotted">на обработку персональных данных</a></label>
							</div>
                        </div>
						<div class="clearfix-new"></div>



						<div class="b-popup-sign-up__item b-popup-sign-up__item-bottom">
							<div class="form-group b-popup-feedback__form-group">
								<label class="b-form__label" for="password-signup">Пароль*</label>
								<input required="required"   minlength="5"  type="password" name="REGISTER[PASSWORD]" tabindex="7"  id="password-signup" value="<?=$arResult["VALUES"]['PASSWORD']?>"  class="b-form__input b-popup-feedback__input js-validation-change" data-rules="req;min=5"  autocomplete="new-password">
							</div>


						</div>
						<div class="b-popup-sign-up__item b-popup-sign-up__item-bottom">
							<div class="form-group b-popup-feedback__form-group">
								<label class="b-form__label" for="password-repeat-signup">Повторите пароль*</label>
								<input required="required" minlength="5"  type="password" name="REGISTER[CONFIRM_PASSWORD]"  tabindex="8" value="<?=$arResult["VALUES"]['CONFIRM_PASSWORD']?>"  id="password-repeat-signup" class="b-form__input b-popup-feedback__input js-validation-change" data-rules="req;compare=password-signup" autocomplete="off">
							</div>

						</div>


                        <div style="clear:both"></div>
                        <div style="margin:0px 40px">
                        	<div class="form-group b-popup-feedback__form-group b-checkbox__item">
								<input type="checkbox"  required="required"  tabindex="10" id="rules-sales-signup" name="rules-sales-signup" class="js-validation-change" data-rules="req">
								<label for="rules-sales-signup">Я ознакомлен <a href="/rules/" target="_blank" class="b-link__dotted">с правилами и условиями продаж</a></label>
							</div>
                            <div class="form-group b-popup-feedback__form-group">
								<p>* Поля, обязательные для заполнения</p>
							</div>
							<input type="hidden" name="TYPE" value="REGISTRATION"/>
							<input type="hidden" name="REGISTER[LOGIN]" value="" class="login_hidden">
							<input type="hidden" name="register_submit_button" value="Y" />
							<input type="hidden" class="api-mf-antibot" value="" name="ANTIBOT[NAME]">

         <input style="margin-right:0px" type="submit" id="b-popup-feedback__input-popup--sign-up" onclick=" $('.login_hidden').val($('#email-signup').val())"  class="b-popup-feedback__input-popup--sign-up" value="Зарегистрироваться"  data-disabled="true">
    </div>



					</form>



<script>
		$(document).ready(function () {
			$('#phone-signup').mask("+7(999)999-99-99");
			$('#birthday-signup').mask("99.99.9999");

		});
	</script>
