<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?

ShowMessage($arParams["~AUTH_RESULT"]);

?>

<?//pp($arResult);?>
<?//pp($arParams);?>
<?
$rsUsers = CUser::GetList(($by = "id"), ($order = "desc"));
$users = array();
while($user = $rsUsers->NavNext()) {
	$users[] = $user['EMAIL'];
}

?>
<div class="container">
<div class="rec-password content__rec-password">
	<h1 class="title rec-password__title">Вход <span class="orange">/</span> Регистрация
	</h1>
	<div class="rec-pas rec-password__rec-pas">
		<div class="rec-pas__title">
			<h1 class="rec-pas__title-text">Восстановление пароля</h1>
		</div>
		<p class="rec-pas__text">Введите вашу электронную почту<br/>и мы отправим вам письмо <br/>для восстановления пароля
		</p>
		<div class="rec-pas__form">
			<form name="bform" method="post" target="_top" action="<?=$arResult["AUTH_URL"]?>">

				<?
				if (strlen($arResult["BACKURL"]) > 0)
				{
					?>
					<input type="hidden" name="backurl" value="<?=$arResult["BACKURL"]?>" />
					<?
				}
				?>
				<input type="hidden" name="AUTH_FORM" value="Y">
				<input type="hidden" name="TYPE" value="SEND_PWD">


				<div class="input-block rec-pas__input-block">
					<label class="caption rec-pas__caption">Эл. почта</label>
					<input type="email" name="USER_EMAIL" value="" maxlength="255" placeholder="Введите эл. почту" class="input rec-pas__input"/>
					<label class="caption-error rec-pas__caption-error">Такой пользователь не зарегистрирован</label>
				</div>
				<input type="submit" name="send_account_info" value="Отправить" class="btn rec-pas__btn"/>
			</form>
		</div>
		<script>
			$(document).ready(function() {
				$('form[name=bform]').submit(function(e) {
					var emailUser = <?=json_encode($users)?>;
//					console.log(e);
					var enterEmail = $('.rec-pas__input').val();

					if(enterEmail.length === 0) {
						$('.rec-pas__caption-error').html('Поле не должно быть пустым');
						$('.rec-pas__caption-error').show();
						e.preventDefault();
						return false;
					}

					var flag = false;
					for(var i = 0; i < emailUser.length; i++) {
						if(emailUser[i] === enterEmail) {
							flag = true;
							break;
						}
					}
					if (!flag) {
						$('.rec-pas__caption-error').show();
						e.preventDefault();
						return false;
					}
					return true;
				});
			});
		</script>
	</div>
</div>

<?//pp($arResult);?>
<?if($_GET['forgot_password'] == 'yes'): ?>

<div class="email-password content__email-password" style="display: none;">
	<h1 class="title email-password__title">Вход <span class="orange">/</span> Регистрация
	</h1>
	<div class="email-pas email-password__email-pas">
		<div class="email-pas__title">
			<h1 class="email-pas__title-text">Восстановление пароля</h1>
		</div>
		<p class="email-pas__text">Успех! На <span class="email-pas__email email-pas__email_color_orange"><?=$_POST['USER_EMAIL']?></span>, отправлено письмо.<br/>Для восстановления пароля, пожалуйста, перейдите по ссылке в этом письме.
		</p>
	</div>
</div>
<script>
	$(document).ready(function () {
		$('.rec-password').hide();
		$('.email-password').show();
	});
//	$('.rec-pas__btn').click(function (event) {
//		var valEmail = $('.rec-pas__input').val();
//		var reg = /^\w+@\w+\.\w{2,4}$/i;
//		var isValidEMail = reg.test(valEmail);
//
//		if(valEmail === '') {
//			$('.rec-pas__input').next().html('Поле не должно быть пустым').show();
//			return false;
//		}
//		if (!isValidEMail) {
//			$('.rec-pas__input').next().html('Не верно введен пароль').show();
//			return false;
//		}
//		return true;
//	});
</script>
</div>
<?endif;?>




<?if(false):?>
<form name="bform" method="post" target="_top" action="<?=$arResult["AUTH_URL"]?>">
<?
if (strlen($arResult["BACKURL"]) > 0)
{
?>
	<input type="hidden" name="backurl" value="<?=$arResult["BACKURL"]?>" />
<?
}
?>
	<input type="hidden" name="AUTH_FORM" value="Y">
	<input type="hidden" name="TYPE" value="SEND_PWD">
	<p>
	<?=GetMessage("AUTH_FORGOT_PASSWORD_1")?>
	</p>

<table class="data-table bx-forgotpass-table">
	<thead>
		<tr> 
			<td colspan="2"><b><?=GetMessage("AUTH_GET_CHECK_STRING")?></b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><?=GetMessage("AUTH_LOGIN")?></td>
			<td><input type="text" name="USER_LOGIN" maxlength="50" value="<?=$arResult["LAST_LOGIN"]?>" />&nbsp;<?=GetMessage("AUTH_OR")?>
			</td>
		</tr>
		<tr> 
			<td><?=GetMessage("AUTH_EMAIL")?></td>
			<td>
				<input type="text" name="USER_EMAIL" maxlength="255" />
			</td>
		</tr>
	</tbody>
	<tfoot>
		<tr> 
			<td colspan="2">
				<input type="submit" name="send_account_info" value="<?=GetMessage("AUTH_SEND")?>" />
			</td>
		</tr>
	</tfoot>
</table>
<p>
<a href="<?=$arResult["AUTH_AUTH_URL"]?>"><b><?=GetMessage("AUTH_AUTH")?></b></a>
</p> 
</form>
<script type="text/javascript">
document.bform.USER_LOGIN.focus();
</script>
<?endif;?>