<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<!--<p>--><?//echo $arResult["MESSAGE_TEXT"]?><!--</p>-->

<?//pp($arResult)?>
	<div class="container">
<?//here you can place your own messages
	switch($arResult["MESSAGE_CODE"])
	{
	case "E01":
		LocalRedirect('/auth/');?>

		<? //When user not found
		break;
	case "E02":
		?>
		<div class="successful-subscribe">
			<div class="content">
				<h1>
					Йо-хо-хо! Вы уже зарегестрированы!
				</h1>
				<a href="/" class="btn btn-primary">Вернуться на главную страницу</a>
			</div>
		</div>
		<? //User was successfully authorized after confirmation

		break;
	case "E03":
		?><? //User already confirm his registration
		break;
	case "E04":
		?><? //Missed confirmation code
		break;
	case "E05":
		?><? //Confirmation code provided does not match stored one
		break;
	case "E06":
		?>
		<div class="successful-subscribe">
			<div class="content">
				<h1>
					Йо-хо-хо! Вы успешно зарегистрированы!
				</h1>
				<a href="/" class="btn btn-primary">Вернуться на главную страницу</a>
			</div>
		</div>
		<? // Подтверждение регистрации
		CUser::Authorize($_GET['confirm_user_id']);
		break;
	case "E07":
		?><? //Some error occured during confirmation
		break;
	}
?>
</div>
<?if($arResult["SHOW_FORM"] && false):  // FALSE?>
	<form method="post" action="<?echo $arResult["FORM_ACTION"]?>">
		<table class="data-table bx-confirm-table">
			<tr>
				<td>
					<?echo GetMessage("CT_BSAC_LOGIN")?>:
				</td>
				<td>
					<input type="text" name="<?echo $arParams["LOGIN"]?>" maxlength="50" value="<?echo (strlen($arResult["LOGIN"]) > 0? $arResult["LOGIN"]: $arResult["USER"]["LOGIN"])?>" size="17" />
				</td>
			</tr>
			<tr>
				<td>
					<?echo GetMessage("CT_BSAC_CONFIRM_CODE")?>:
				</td>
				<td>
					<input type="text" name="<?echo $arParams["CONFIRM_CODE"]?>" maxlength="50" value="<?echo $arResult["CONFIRM_CODE"]?>" size="17" />
				</td>
			</tr>
			<tr>
				<td colspan="2"><input type="submit" value="<?echo GetMessage("CT_BSAC_CONFIRM")?>" /></td>
			</tr>
		</table>
		<input type="hidden" name="<?echo $arParams["USER_ID"]?>" value="<?echo $arResult["USER_ID"]?>" />
	</form>
<?elseif(!$USER->IsAuthorized() && false):  // FALSE?>
	<?$APPLICATION->IncludeComponent("bitrix:system.auth.authorize", "", array());?>
<?endif // END FALSE ?>