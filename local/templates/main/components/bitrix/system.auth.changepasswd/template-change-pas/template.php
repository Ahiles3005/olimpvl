<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<div class="bx-auth">

<?
ShowMessage($arParams["~AUTH_RESULT"]);
?>
<?//pp($arResult)?>

<?
$isValidationNewPas = $_POST['USER_PASSWORD'] == $_POST['USER_CONFIRM_PASSWORD'] && strlen($_POST['USER_PASSWORD']) >= 6;
if ($isValidationNewPas) {
	LocalRedirect('/auth/successful-change-pas.php');
}
?>

	<script>
		function checkForm() {
			var pas = $('.new-pas__input[name=USER_PASSWORD]').val(),
				pasCon = $('.new-pas__input[name=USER_CONFIRM_PASSWORD]').val();

			if (pas !== pasCon) {
				$('.new-pas__input[name=USER_CONFIRM_PASSWORD]').next().html('Неверно введен пароль').show();
				return false;
			}
			if (pas.length < 6) {
				$('.new-pas__input[name=USER_PASSWORD]').next().html('Пароль должен быть не менее 6 символов длиной').show();
				return false;
			}
			return true;
		}
	</script>
	<div class="content">
	<div class="new-password content__new-password">
		<h1 class="title new-password__title">Вход <span class="orange">/</span> Регистрация
		</h1>
		<div class="new-pas new-password__new-pas">
			<div class="new-pas__title">
				<h1 class="new-pas__title-text">Новый пароль</h1>
			</div>
			<p class="new-pas__text">Введите новый пароль,<br/>убедившись в его безопасности<br/>и запоминаемости =)
			</p>
			<div class="new-pas__form">
				<form method="post" action="<?=$arResult["AUTH_FORM"]?>" name="bform" onsubmit="return checkForm()">

					<?if (strlen($arResult["BACKURL"]) > 0): ?>
						<input type="hidden" name="backurl" value="<?=$arResult["BACKURL"]?>" />
					<? endif ?>
					<input type="hidden" name="AUTH_FORM" value="Y">
					<input type="hidden" name="TYPE" value="CHANGE_PWD">


					<div class="input-block new-pas__input-block">
						<label class="caption new-pas__caption">Пароль</label>
						<input type="password" name="USER_PASSWORD" maxlength="50" value="<?=$arResult["USER_PASSWORD"]?>" autocomplete="off" placeholder="Введите новый пароль" class="input new-pas__input"/>
						<label class="caption-error new-pas__caption-error"></label>
					</div>
					<div class="input-block new-pas__input-block">
						<label class="caption new-pas__caption">Повторите пароль</label>
						<input type="password" name="USER_CONFIRM_PASSWORD" maxlength="50" value="<?=$arResult["USER_CONFIRM_PASSWORD"]?>" autocomplete="off" placeholder="Повторите пароль" class="input new-pas__input"/>
						<label class="caption-error new-pas__caption-error"></label>
					</div>
					<input type="submit" class="btn new-pas__btn"/>
				</form>
			</div>
		</div>
	</div>
</div>

<?if(false):?>
<form method="post" action="<?=$arResult["AUTH_FORM"]?>" name="bform">
	<?if (strlen($arResult["BACKURL"]) > 0): ?>
	<input type="hidden" name="backurl" value="<?=$arResult["BACKURL"]?>" />
	<? endif ?>
	<input type="hidden" name="AUTH_FORM" value="Y">
	<input type="hidden" name="TYPE" value="CHANGE_PWD">
	<table class="data-table bx-changepass-table">
		<thead>
			<tr>
				<td colspan="2"><b><?=GetMessage("AUTH_CHANGE_PASSWORD")?></b></td>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><span class="starrequired">*</span><?=GetMessage("AUTH_LOGIN")?></td>
				<td><input type="text" name="USER_LOGIN" maxlength="50" value="<?=$arResult["LAST_LOGIN"]?>" class="bx-auth-input" /></td>
			</tr>
			<tr>
				<td><span class="starrequired">*</span><?=GetMessage("AUTH_CHECKWORD")?></td>
				<td><input type="text" name="USER_CHECKWORD" maxlength="50" value="<?=$arResult["USER_CHECKWORD"]?>" class="bx-auth-input" /></td>
			</tr>
			<tr>
				<td><span class="starrequired">*</span><?=GetMessage("AUTH_NEW_PASSWORD_REQ")?></td>
				<td><input type="password" name="USER_PASSWORD" maxlength="50" value="<?=$arResult["USER_PASSWORD"]?>" class="bx-auth-input" autocomplete="off" />
<?if($arResult["SECURE_AUTH"]):?>
				<span class="bx-auth-secure" id="bx_auth_secure" title="<?echo GetMessage("AUTH_SECURE_NOTE")?>" style="display:none">
					<div class="bx-auth-secure-icon"></div>
				</span>
				<noscript>
				<span class="bx-auth-secure" title="<?echo GetMessage("AUTH_NONSECURE_NOTE")?>">
					<div class="bx-auth-secure-icon bx-auth-secure-unlock"></div>
				</span>
				</noscript>
<script type="text/javascript">
document.getElementById('bx_auth_secure').style.display = 'inline-block';
</script>
<?endif?>
				</td>
			</tr>
			<tr>
				<td><span class="starrequired">*</span><?=GetMessage("AUTH_NEW_PASSWORD_CONFIRM")?></td>
				<td><input type="password" name="USER_CONFIRM_PASSWORD" maxlength="50" value="<?=$arResult["USER_CONFIRM_PASSWORD"]?>" class="bx-auth-input" autocomplete="off" /></td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<td></td>
				<td><input type="submit" name="change_pwd" value="<?=GetMessage("AUTH_CHANGE")?>" /></td>
			</tr>
		</tfoot>
	</table>

<p><?echo $arResult["GROUP_POLICY"]["PASSWORD_REQUIREMENTS"];?></p>
<p><span class="starrequired">*</span><?=GetMessage("AUTH_REQ")?></p>
<p>
<a href="<?=$arResult["AUTH_AUTH_URL"]?>"><b><?=GetMessage("AUTH_AUTH")?></b></a>
</p>

</form>

<script type="text/javascript">
document.bform.USER_LOGIN.focus();
</script>
</div>

<?endif;?>