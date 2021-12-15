<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();?>

<div id="popup-login" style="display: none;">
	<div class="b-popup-login b-popup">
		<div class="b-popup__modal-content">
			<div class="b-popup__modal-header">
				<a class="close b-popup__close" data-popup="close">×</a>
				<div class="b-popup__header-text"><?=GetMessage("AUTH_AUTH")?></div>
			</div>
			<div class="b-popup__modal-body">
				<div class="b-popup-feedback__form b-popup__main-block">
					<form class="b-form" method="post" action="<?=$arResult["AUTH_URL"]?>">
						<input type="hidden" name="AUTH_FORM" value="Y" />
						<input type="hidden" name="TYPE" value="AUTH" />
						<?if (strlen($arResult["BACKURL"]) > 0):?>
							<input type="hidden" name="backurl" value="<?=$arResult["BACKURL"]?>" />
						<?endif?>
						<?foreach ($arResult["POST"] as $key => $value):?>
							<input type="hidden" name="<?=$key?>" value="<?=$value?>" />
						<?endforeach?>

						<div class="form-group b-popup-feedback__form-group">
							<label class="b-form__label" for="email-login"><?=GetMessage("AUTH_EMAIL")?></label>
							<input type="email" id="email-login" name="USER_LOGIN" class="b-popup-feedback__input b-form__input js-validation-change" data-rules="req;email">
						</div>
						<div class="form-group b-popup-feedback__form-group">
							<label class="b-form__label" for="password-login"><?=GetMessage("AUTH_PASSWORD")?></label>
							<input type="password" id="password-login" name="USER_PASSWORD" class="b-popup-feedback__input b-form__input js-validation-change" data-rules="req;min=5" autocomplete="off">
						</div>
						<div class="form-group b-popup-feedback__form-group">
							<div class="b-popup-login__login-link">
								<a href="/personal-area/recovery.php?clear_cache=Y" class="b-popup-login__forgot-password" ><?=GetMessage("AUTH_FORGOT_PASSWORD")?></a>
								<a href="#popup-sign-up" class="b-popup-login__sign-up" data-popup="open"><?=GetMessage("AUTH_REGISTER")?></a>
							</div>
							<input type="submit" class="b-popup-feedback__input-popup--feedback btn b-btn__default" value="<?=GetMessage("AUTH_ENTER")?>"/>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>


<?
/*<div id="popup-login" class="popup popup_auth" style="display: none;">
	<div class="auth">
		<div class="auth__head">Авторизация</div>
		<div class="auth__subhead">
			Еще не завели свой личный кабинет?<br>
			<a href="#popup-sign-up" data-popup="open">Зарегистрируйтесь</a>
		</div>

		<form class="auth-form" data-validate="true" method="POST" action="<?=$arResult["AUTH_URL"]?>">
			<input type="hidden" name="AUTH_FORM" value="Y" />
				<input type="hidden" name="TYPE" value="AUTH" />
			<?if (strlen($arResult["BACKURL"]) > 0):?>
				<input type="hidden" name="backurl" value="<?=$arResult["BACKURL"]?>" />
			<?endif?>
			<?foreach ($arResult["POST"] as $key => $value):?>
				<input type="hidden" name="<?=$key?>" value="<?=$value?>" />
			<?endforeach?>

			<input class="auth-form__input amount" placeholder="Логин" type="text" required name="USER_LOGIN" value="<?=$arResult["LAST_LOGIN"]?>">
			<input class="auth-form__input signInError" placeholder="Пароль" type="password" required name="USER_PASSWORD" autocomplete="off">

			<div class="flex flex_column flex_center flex_middle">
				<button class="btn auth-form__btn" type="submit" disabled>Войти</button>

				<a href="#popup-forgot-pass" data-popup="open" class="auth-form__forgot">Забыли пароль?</a>
			</div>
			
			<?if ($arResult["STORE_PASSWORD"] == "Y"):?>
				<input type="hidden" id="USER_REMEMBER" name="USER_REMEMBER" value="Y" />
			<?endif?>
		</form>

		<?if(!empty($arParams["~AUTH_RESULT"])):?>
			<?$text = str_replace(array("<br>", "<br />"), "\n", $arParams["~AUTH_RESULT"]["MESSAGE"]);?>
			<div class="alert alert-danger"><?=nl2br(htmlspecialcharsbx($text))?></div>
		<?endif?>

		<?if($arResult['ERROR_MESSAGE'] <> ''):?>
			<?$text = str_replace(array("<br>", "<br />"), "\n", $arResult['ERROR_MESSAGE']);?>
			<div class="alert alert-danger"><?=nl2br(htmlspecialcharsbx($text))?></div>
		<?endif?>

		<?if($arResult["AUTH_SERVICES"]):?>
			<?$APPLICATION->IncludeComponent("bitrix:socserv.auth.form",
				"custom",
				array(
					"AUTH_SERVICES" => $arResult["AUTH_SERVICES"],
					"AUTH_URL" => $arResult["AUTH_URL"],
					"POST" => $arResult["POST"],
				),
				$component,
				array("HIDE_ICONS"=>"Y")
			);
			?>
		<?endif?>
	</div>
</div>
*/
?>