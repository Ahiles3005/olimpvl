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

					<!--<form class="b-form form-signup" method="post" action="<?=POST_FORM_ACTION_URI?>" name="regform" enctype="multipart/form-data">-->
					<form  autocomplete="off" id="modal-register" class="b-form form-signup" method="post" action="/null" name="regform" enctype="multipart/form-data">


					<?
                                        $FIELDS = $arResult["SHOW_FIELDS"];
CJSCore::Init(array('jquery','date'));
// 					var_dump($FIELDS);
					?>
						<?if($arResult["BACKURL"] <> ''):?>
							<input type="hidden" name="backurl" value="<?=$arResult["BACKURL"]?>" />
						<?endif;?>
						<!--<input size="30" type="hidden" name="REGISTER[LOGIN]" value="">-->
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

                            <!--
							<div class="form-group b-popup-feedback__form-group">
								<label class="b-form__label" for="index-signup">Индекс</label>
								<input type="text" name="REGISTER[PERSONAL_ZIP]" id="index-signup" class="b-form__input b-popup-feedback__input js-validation-change" data-rules="">
							</div>
							<div class="form-group b-popup-feedback__form-group">
								<label class="b-form__label" for="street-signup">Улица</label>
								<input type="text" name="REGISTER[PERSONAL_STREET]" id="street-signup" class="b-form__input b-popup-feedback__input js-validation-change" data-rules="">
							</div>
							<div class="form-group b-popup-feedback__form-group">
								<label class="b-form__label" for="passport-series-signup">Серия и номер паспорта</label>
								<input type="text" name="UF_PASSPORT_SERIES" id="passport-series-signup" class="b-form__input b-popup-feedback__input b-popup-feedback__input-passport-series js-validation-change" data-rules="">
								<input type="text" name="UF_PASSPORT_NUMBER" id="passport-number-signup" class="b-form__input b-popup-feedback__input b-popup-feedback__input-passport-number js-validation-change" data-rules="">
								<div class="clearfix-new"></div>
							</div>

							<div class="form-group b-popup-feedback__form-group b-checkbox__item">
								<input type="checkbox" id="data-processing-signup" name="UF_CONSENT" class="js-validation-change" data-rules="req">
								<label for="data-processing-signup">Я согласен<br><a href="" class="b-link__dotted">на обработку персональных данных*</a></label>
							</div>
                            -->


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
                            <!--
							<div class="form-group b-popup-feedback__form-group">
								<label class="b-form__label" for="city-signup">Город*</label>
								<input type="text" name="REGISTER[PERSONAL_CITY]" id="city-signup" class="b-form__input b-popup-feedback__input js-validation-change" data-rules="req">
							</div>

							<div class="form-group b-popup-feedback__form-group--mini">
								<label class="b-form__label" for="home-signup">Дом</label>
								<input type="text" name="UF_PERSONAL_HOUSE" id="home-signup" class="b-form__input b-popup-feedback__input--adress js-validation-change" data-rules="">
							</div>
							<div class="form-group b-popup-feedback__form-group--mini">
								<label class="b-form__label" for="flat-signup">Квартира</label>
								<input type="text" name="UF_PERSONAL_FLAT" id="flat-signup" class="b-form__input b-popup-feedback__input--adress js-validation-change" data-rules="">
							</div>
							<div class="form-group b-popup-feedback__form-group">
								<label class="b-form__label" for="home-phone-signup">Телефон</label>
								<input type="text" name="REGISTER[PERSONAL_PHONE]" id="home-phone-signup" class="b-form__input b-popup-feedback__input js-validation-change" data-rules="">
							</div>
                            -->
						</div>
			<!--			<div class="b-popup-sign-up__item b-popup-sign-up__item-top-mobile">
							<div class="form-group b-popup-feedback__form-group">
								<label class="b-form__label" for="surname-signup-mobile">Фамилия*</label>
								<input type="text" name="REGISTER[LAST_NAME]" id="surname-signup-mobile" class="b-form__input b-popup-feedback__input js-validation-change" data-rules="req">
							</div>
							<div class="form-group b-popup-feedback__form-group">
								<label class="b-form__label" for="name-signup-mobile">Имя*</label>
								<input type="text" name="REGISTER[FIRST_NAME]" id="name-signup-mobile" class="b-form__input b-popup-feedback__input js-validation-change" data-rules="req">
							</div>
							<div class="form-group b-popup-feedback__form-group">
								<label class="b-form__label" for="patronymic-signup-mobile">Отчество*</label>
								<input type="text" name="REGISTER[SECOND_NAME]" id="patronumic-signup-mobile" class="b-form__input b-popup-feedback__input js-validation-change" data-rules="req">
							</div>
							<div class="form-group b-popup-feedback__form-group">
								<label class="b-form__label" for="birthday-signup-mobile">Дата рождения*</label>
								<input type="text" name="REGISTER[PERSONAL_BIRTHDAY]" id="birthday-signup-mobile" class="b-form__input b-popup-feedback__input js-validation-change">
							</div>
							<div class="form-group b-popup-feedback__form-group">
								<label class="b-form__label" for="phone-signup-mobile">Мобильный телефон*</label>
								<input type="tel" name="REGISTER[PERSONAL_MOBILE]" id="phone-signup-mobile" class="b-form__input b-popup-feedback__input js-validation-change" data-rules="req;phone" placeholder="+7 (___) ___-__-__">
							</div>
							<div class="form-group b-popup-feedback__form-group">
								<label class="b-form__label" for="email-signup">Эл. почта*</label>
								<input type="email" name="email-signup" id="email-signup" class="b-form__input b-popup-feedback__input js-validation-change" data-rules="req;email">
							</div>
							<div class="form-group b-popup-feedback__form-group">
								<label class="b-form__label" for="index-signup-mobile">Индекс</label>
								<input type="text" name="index-signup-mobile" id="index-signup-mobile" class="b-form__input b-popup-feedback__input js-validation-change" data-rules="">
							</div>
							<div class="form-group b-popup-feedback__form-group">
								<label class="b-form__label" for="city-signup-mobile">Город*</label>
								<input type="text" name="city-signup-mobile" id="city-signup-mobile" class="b-form__input b-popup-feedback__input js-validation-change" data-rules="req">
							</div>
							<div class="form-group b-popup-feedback__form-group">
								<label class="b-form__label" for="street-signup-mobile">Улица</label>
								<input type="text" name="street-signup-mobile" id="street-signup-mobile" class="b-form__input b-popup-feedback__input js-validation-change" data-rules="">
							</div>
							<div class="form-group b-popup-feedback__form-group--mini">
								<label class="b-form__label" for="home-signup-mobile">Дом</label>
								<input type="text" name="home-signup-mobile" id="home-signup-mobile" class="b-form__input b-popup-feedback__input--adress js-validation-change" data-rules="">
							</div>
							<div class="form-group b-popup-feedback__form-group--mini">
								<label class="b-form__label" for="flat-signup-mobile">Квартира</label>
								<input type="text" name="flat-signup-mobile" id="flat-signup-mobile" class="b-form__input b-popup-feedback__input--adress js-validation-change" data-rules="">
							</div>
							<div class="form-group b-popup-feedback__form-group">
								<label class="b-form__label" for="passport-series-signup-mobile">Серия и номер паспорта</label>
								<input type="text" name="passport-series-signup-mobile" id="passport-series-signup-mobile" class="b-form__input b-popup-feedback__input b-popup-feedback__input-passport-series js-validation-change" data-rules="">
								<input type="text" name="passport-number-signup-mobile" id="passport-number-signup-mobile" class="b-form__input b-popup-feedback__input b-popup-feedback__input-passport-number js-validation-change" data-rules="">
								<div class="clearfix-new"></div>
							</div>
							<div class="form-group b-popup-feedback__form-group">
								<label class="b-form__label" for="home-phone-signup-mobile">Телефон</label>
								<input type="text" name="home-phone-signup-mobile" id="home-phone-signup-mobile" class="b-form__input b-popup-feedback__input js-validation-change" data-rules="">
							</div>

						</div>-->
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



<!--

<div id="popup-sign-up" class="popup popup_auth_signup" style="display: none;">
	<div class="auth">
		<div class="auth__head">Регистрация</div>
		<div class="auth__subhead">
			Уже зарегистрированы? <a  href="#popup-sign-in" data-popup="open">Авторизуйтесь</a>
		</div>

		<form class="auth-form auth-form_signup" data-validate="true" method="post" action="<?=POST_FORM_ACTION_URI?>" enctype="multipart/form-data">
			<?if($arResult["BACKURL"] <> ''):?>
				<input type="hidden" name="backurl" value="<?=$arResult["BACKURL"]?>" />
			<?endif;?>
			<input size="30" type="hidden" name="REGISTER[LOGIN]" value="">

			<div class="flex">
				<div class="auth-form__col">
					<input class="auth-form__input" placeholder="Имя" type="text" required name="REGISTER[NAME]">
				</div>

				<div class="auth-form__col">
					<input class="auth-form__input" placeholder="Фамилия" type="text" required name="REGISTER[LAST_NAME]">
				</div>
			</div>

			<div class="flex">
				<div class="auth-form__col">
					<input class="auth-form__input emailValidate signInError" placeholder="E-mail" type="email" required name="REGISTER[EMAIL]">
				</div>

				<div class="auth-form__col">
					<input class="auth-form__input" data-mask="phoneRu" placeholder="Телефон" type="text" name="REGISTER[PERSONAL_PHONE]">
				</div>
			</div>

			<div class="flex">
				<div class="auth-form__col">
					<input type="text" placeholder="Дата рождения (дд.мм.гггг)" class="dateFormatRu" data-mask="dateRu" name="REGISTER[PERSONAL_BIRTHDAY]">
				</div>

				<div class="auth-form__col flex flex_middle">
					<span class="auth-form__label">Пол:</span>

					<label class="custom-check custom-check_type_radio">
						<input name="REGISTER[PERSONAL_GENDER]" data-custom="check" type="radio" value="M">
						Мужской
					</label>

					<label class="custom-check custom-check_type_radio">
						<input name="REGISTER[PERSONAL_GENDER]" data-custom="check" type="radio" value="F">
						Женский
					</label>
				</div>
			</div>

			<div class="flex">
				<div class="auth-form__col">
					<input class="auth-form__input" id="registration-password" placeholder="Пароль" minlength="6" type="password" required name="REGISTER[PASSWORD]" autocomplete="off" >
				</div>

				<div class="auth-form__col">
					<input class="auth-form__input" equalto="#registration-password" placeholder="Подтвердите пароль" minlength="6" type="password" required name="REGISTER[CONFIRM_PASSWORD]" autocomplete="off" >
				</div>
			</div>

			<div class="flex flex_column flex_center flex_middle">
				<label class="auth-form__subscribe custom-check custom-check_type_check">

					<input name="UF_SUBSCRIBE" data-custom="check" type="checkbox">

					Подписаться на новости
				</label>

				<input class="btn auth-form__btn" type="submit" name="register_submit_button" disabled value="Зарегистрироваться">
			</div>
		</form>
	</div>
</div>
-->

<script>
		$(document).ready(function () {
			$('#phone-signup').mask("+7(999)999-99-99");
			$('#birthday-signup').mask("99.99.9999");

		});
	</script>
