<?
/**
 * @global CMain $APPLICATION
 * @param array $arParams
 * @param array $arResult
 */
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true)
	die();
?>
<? if ($arResult['DATA_SAVED'] == 'Y') {
	LocalRedirect('/personal-area/');
}?>


<div class="content">
<div class="personal-area content__personal-area">

<?$APPLICATION->IncludeFile(SITE_DIR."personal-area/personal_menu.php",Array(),Array("MODE"=>"html"));?>


	
	<div class="personal-area-read-info personal-area__personal-area-read-info">

<?//ShowError($arResult["strProfileError"]);?>
<?
//if ($arResult['DATA_SAVED'] == 'Y')
//	ShowNote(GetMessage('PROFILE_DATA_SAVED'));

?>
        <script>
            var inputs;
            $(document).ready(function () {
                inputs = [$('input[name=NAME]'), $('input[name=LAST_NAME]'), $('input[name=PERSONAL_MOBILE]'), $('input[name=EMAIL]')];
                $('form[name=form1]').submit(function () {
                    var isValid = true;

                    for(var i = 0; i < inputs.length; i++) {
                        var input = inputs[i];
                        isValid = !!input.val();
                        if (!isValid) {
                            input.next().text("Поле не должно быть пустым").show();
                            return isValid;
                        }
                        else {
                            input.next().hide();
                        }
                    }

                    return isValid;
                });
            });
        </script>

<?
	if (!empty($arResult["strProfileError"])): // CHECK FIELDS
?>
		<script>
			$(document).ready(function () {
				// var rTel = /[+][7][0-9]{10}/i;
                var rEmail = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/;
				var valEmail = $('.personal-area-read-info__input[name=EMAIL]').val();
				var isValidEmail = rEmail.test(valEmail);

				if (valEmail === '') {
					$('.personal-area-read-info__input[name=EMAIL]').next().html('Поле должно быть заполнено').show();
				}
				else if (!isValidEmail) {
					$('.personal-area-read-info__input[name=EMAIL]').next().html('Неверно введен E-mail').show();
				}
			});
		</script>
<?
	endif; // END CHECK FIELDS
?>
<script type="text/javascript">
<!--
var opened_sections = [<?
$arResult["opened"] = $_COOKIE[$arResult["COOKIE_PREFIX"]."_user_profile_open"];
$arResult["opened"] = preg_replace("/[^a-z0-9_,]/i", "", $arResult["opened"]);
if (strlen($arResult["opened"]) > 0)
{
	echo "'".implode("', '", explode(",", $arResult["opened"]))."'";
}
else
{
	$arResult["opened"] = "reg";
	echo "'reg'";
}
?>];
//-->









var cookie_prefix = '<?=$arResult["COOKIE_PREFIX"]?>';

</script>



<!--		--><?//pp($arResult)?>

		<div class="personal-area-read-info__form">
				<?//
	//			$rsUser = CUser::GetByID($arResult["ID"]);
	//			$arUser = $rsUser->Fetch();
 				//var_dump($arResult);

$au = $arResult['arUser'];
// foreach($arResult['User'] as $k=>$v){
// 
// $au[$k] = $v['VALUE'];
// 
// }
// 
// var_dump($au);
	//			?>
				<form  autocomplete="off"  method="post" name="form1" action="<?=$arResult["FORM_TARGET"]?>" enctype="multipart/form-data">

					<?=$arResult["BX_SESSION_CHECK"]?>
					<input type="hidden" name="lang" value="<?=LANG?>" />
					<input type="hidden" name="ID" value="<?=$au["ID"]?>" />
					<input type="hidden" name="sessid" value="<?=bitrix_sessid()?>">
					
					<input type="hidden" name="SIGNED_DATA" value="<?=htmlspecialcharsbx($arResult["SIGNED_DATA"])?>" />
					<input type="hidden" name="LOGIN" value="<?=$au["LOGIN"]?>">
					
<h3>Ваши данные</h3>
					<div class="input-block personal-area-read-info__input-block"><label for="" class="caption personal-area-read-info__caption1">Имя</label>
						<input type="text" name="NAME" maxlength="50" value="<?=$au["NAME"]?>" placeholder="Имя" class="input personal-area-read-info__input"/>
						<label for="" class="caption-error personal-area-read-info__caption-error"></label>
					</div><div class="input-block personal-area-read-info__input-block"><label for="" class="caption personal-area-read-info__caption1">Отчество</label>
						<input type="text" name="SECOND_NAME" maxlength="50" value="<?=$au["SECOND_NAME"]?>" placeholder="Отчество" class="input personal-area-read-info__input"/>
						<label for="" class="caption-error personal-area-read-info__caption-error"></label>
					</div><div class="input-block personal-area-read-info__input-block">
						<label for="" class="caption personal-area-read-info__caption1">Фамилия</label><input type="text" name="LAST_NAME" maxlength="50" value="<?=$au["LAST_NAME"]?>" placeholder="Фамилия" class="input personal-area-read-info__input"/>
						<label for="" class="caption-error personal-area-read-info__caption-error"></label>
					</div><div class="input-block personal-area-read-info__input-block">
						<label for="" class="caption personal-area-read-info__caption1">Телефон</label><input type="text" name="PERSONAL_MOBILE" maxlength="255" value="<?=$au["PERSONAL_MOBILE"]?>" placeholder="+7 (___) ___ __ __" class="input personal-area-read-info__input"/>
						<label for="" class="caption-error personal-area-read-info__caption-error"></label>
					</div><div class="input-block personal-area-read-info__input-block">
						<label for="" class="caption personal-area-read-info__caption1">Эл. почта</label><input type="text" name="EMAIL" maxlength="50" value="<? echo $au["EMAIL"]?>" placeholder="E-mail" class="input personal-area-read-info__input"/>
						<label for="" class="caption-error personal-area-read-info__caption-error"></label>
					</div><div class="input-block personal-area-read-info__input-block"><label for="" class="caption personal-area-read-info__caption1">День рождения</label>
						
						
						
						
<!-- 		$APPLICATION->IncludeComponent(
				'bitrix:main.calendar',
				'',
				array(
					'SHOW_INPUT' => 'Y',
					'FORM_NAME' => 'form1',
					'INPUT_NAME' => 'PERSONAL_BIRTHDAY',
					'INPUT_VALUE' => $arResult["arUser"]["PERSONAL_BIRTHDAY"],
					'SHOW_TIME' => 'N'
				),
				null,
				array('HIDE_ICONS' => 'Y')
			);				 -->
						
						
						
						<input type="text" name="PERSONAL_BIRTHDAY" maxlength="12" value="<?=$au["PERSONAL_BIRTHDAY"]?>" placeholder="ДД.ММ.ГГГГ" class="input personal-area-read-info__input"
						
						
						onclick="BX.calendar({node:this, field:'<?=htmlspecialcharsbx('PERSONAL_BIRTHDAY')?>', form: 'form1', bTime:  false,  bHideTime: true }); changeCalendar();" 
						
						
						/>
						<label for="" class="caption-error personal-area-read-info__caption-error"></label>
						
					</div>	
					
					
					<br>
					
					
					
					<div id="mgc-new-pass" style="display:none" >
					<div class="input-block personal-area-read-info__input-block">
						<label for="" class="caption personal-area-read-info__caption1">Новый пароль</label>
						<input type="password" name="NEW_PASSWORD" maxlength="50"     autocomplete="new-password" class="input personal-area-read-info__input"/>
						<label for="" class="caption-error personal-area-read-info__caption-error"></label>
					</div>
					
					
					<div class="input-block personal-area-read-info__input-block">
						<label for="" class="caption personal-area-read-info__caption1">Повторить пароль</label>
						<input type="password" name="NEW_PASSWORD_CONFIRM" maxlength="255"  autocomplete="off"  class="input personal-area-read-info__input"/>
						<label for="" class="caption-error personal-area-read-info__caption-error"></label>
						
					</div>	
					
					</div>
					
					
					<br><br>
					
						
					<!--<div class="input-block personal-area-read-info__input-block">
						<label for="" class="caption personal-area-read-info__caption">Индекс</label>
						<input type="text" name="PERSONAL_ZIP" maxlength="255" value="<?=$au["PERSONAL_BIRTHDAY"]?>" placeholder="600000" class="input personal-area-read-info__input"/>
						<label for="" class="caption-error personal-area-read-info__caption-error"></label>
					</div>
					<div class="input-block personal-area-read-info__input-block">
						<label for="" class="caption personal-area-read-info__caption">Город</label>
						<input type="text" name="PERSONAL_CITY" maxlength="255" value="<?=$au["PERSONAL_CITY"]?>" placeholder="Город" class="input personal-area-read-info__input"/>
						<label for="" class="caption-error personal-area-read-info__caption-error"></label>
					</div>
					<div class="input-block personal-area-read-info__input-block">
						<label for="" class="caption personal-area-read-info__caption">Улица</label>
						<input type="text" name="PERSONAL_STREET" value="<?=$au["PERSONAL_STREET"]?>" placeholder="Улица" class="input personal-area-read-info__input"/>
						<label for="" class="caption-error personal-area-read-info__caption-error"></label>
					</div>
					<div class="input-block personal-area-read-info__input-block">
						<label for="" class="caption personal-area-read-info__caption">Дом</label>
						<input type="text" name="UF_PERSONAL_HOME" value="<?=$au["UF_PERSONAL_HOME"]?>" placeholder="Дом" class="input personal-area-read-info__input"/>
						<label for="" class="caption-error personal-area-read-info__caption-error"></label>
					</div>
					<div class="input-block personal-area-read-info__input-block">
						<label for="" class="caption personal-area-read-info__caption">Квартира</label>
						<input type="text" name="UF_PERSONAL_APARTMEN" value="<?=$au["UF_PERSONAL_APARTMEN"]?>" placeholder="Квартира" class="input personal-area-read-info__input"/>
						<label for="" class="caption-error personal-area-read-info__caption-error"></label>
					</div>-->

					<input type="submit"  name="save" value="Сохранить" class="btn personal-area-read-info__btn-save">
					
					
					<a id="mgc-new-pass-a" class="btn personal-area-read-info__btn-cancel" href="javascript:void(0);">Сменить пароль</a>
				<!--	<a href="/personal-area/" class="btn personal-area-read-info__btn-cancel">Отменить изменения</a>-->


	<!--				<button class="btn personal-area-read-info__btn-save">Сохранить изменения</button>-->
	<!--				<button class="btn personal-area-read-info__btn-cancel">Отменить изменения</button>-->
				</form>
			</div>
		</div>
		</div>
<script>
	$(document).ready(function () {
		$('.personal-area-read-info__input[name=PERSONAL_MOBILE]').mask("+7 (999) 999-99-99");
		$('.personal-area-read-info__input[name=PERSONAL_BIRTHDAY]').mask("99.99.9999");
		$("#mgc-new-pass-a").click(function(){
		$("#mgc-new-pass").toggle();
		
		})
	});
</script>

<!--	Main component -->

<?if(false):  // FALSE ?>


<form method="post" name="form1" action="<?=$arResult["FORM_TARGET"]?>" enctype="multipart/form-data">
<?=$arResult["BX_SESSION_CHECK"]?>
<input type="hidden" name="lang" value="<?=LANG?>" />
<input type="hidden" name="ID" value=<?=$arResult["ID"]?> />

<div class="profile-link profile-user-div-link"><a title="<?=GetMessage("REG_SHOW_HIDE")?>" href="javascript:void(0)" onclick="SectionClick('reg')"><?=GetMessage("REG_SHOW_HIDE")?></a></div>
<div class="profile-block-<?=strpos($arResult["opened"], "reg") === false ? "hidden" : "shown"?>" id="user_div_reg">
<table class="profile-table data-table">
	<thead>
		<tr>
			<td colspan="2">&nbsp;</td>
		</tr>
	</thead>
	<tbody>
	<?
	if($arResult["ID"]>0)
	{
	?>
		<?
		if (strlen($arResult["arUser"]["TIMESTAMP_X"])>0)
		{
		?>
		<tr>
			<td><?=GetMessage('LAST_UPDATE')?></td>
			<td><?=$arResult["arUser"]["TIMESTAMP_X"]?></td>
		</tr>
		<?
		}
		?>
		<?
		if (strlen($arResult["arUser"]["LAST_LOGIN"])>0)
		{
		?>
		<tr>
			<td><?=GetMessage('LAST_LOGIN')?></td>
			<td><?=$arResult["arUser"]["LAST_LOGIN"]?></td>
		</tr>
		<?
		}
		?>
	<?
	}
	?>
	<tr>
		<td><?echo GetMessage("main_profile_title")?></td>
		<td><input type="text" name="TITLE" value="<?=$arResult["arUser"]["TITLE"]?>" /></td>
	</tr>
	<tr>
		<td><?=GetMessage('NAME')?></td>
		<td><input type="text" name="NAME" maxlength="50" value="<?=$arResult["arUser"]["NAME"]?>" /></td>
	</tr>
	<tr>
		<td><?=GetMessage('LAST_NAME')?></td>
		<td><input type="text" name="LAST_NAME" maxlength="50" value="<?=$arResult["arUser"]["LAST_NAME"]?>" /></td>
	</tr>
	<tr>
		<td><?=GetMessage('SECOND_NAME')?></font></td>
		<td><input type="text" name="SECOND_NAME" maxlength="50" value="<?=$arResult["arUser"]["SECOND_NAME"]?>" /></td>
	</tr>
	<tr>
		<td><?=GetMessage('EMAIL')?><?if($arResult["EMAIL_REQUIRED"]):?><span class="starrequired">*</span><?endif?></td>
		<td><input type="text" name="EMAIL" maxlength="50" value="<? echo $arResult["arUser"]["EMAIL"]?>" /></td>
	</tr>
	<tr>
		<td><?=GetMessage('LOGIN')?><span class="starrequired">*</span></td>
		<td><input type="text" name="LOGIN" maxlength="50" value="<? echo $arResult["arUser"]["LOGIN"]?>" /></td>
	</tr>
<?if($arResult["arUser"]["EXTERNAL_AUTH_ID"] == ''):?>
	<tr>
		<td><?=GetMessage('NEW_PASSWORD_REQ')?></td>
		<td><input type="password" name="NEW_PASSWORD" maxlength="50" value="" autocomplete="off" class="bx-auth-input" />
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
		</td>
	</tr>
<?endif?>
	<tr>
		<td><?=GetMessage('NEW_PASSWORD_CONFIRM')?></td>
		<td><input type="password" name="NEW_PASSWORD_CONFIRM" maxlength="50" value="" autocomplete="off" /></td>
	</tr>
<?endif?>
<?if($arResult["TIME_ZONE_ENABLED"] == true):?>
	<tr>
		<td colspan="2" class="profile-header"><?echo GetMessage("main_profile_time_zones")?></td>
	</tr>
	<tr>
		<td><?echo GetMessage("main_profile_time_zones_auto")?></td>
		<td>
			<select name="AUTO_TIME_ZONE" onchange="this.form.TIME_ZONE.disabled=(this.value != 'N')">
				<option value=""><?echo GetMessage("main_profile_time_zones_auto_def")?></option>
				<option value="Y"<?=($arResult["arUser"]["AUTO_TIME_ZONE"] == "Y"? ' SELECTED="SELECTED"' : '')?>><?echo GetMessage("main_profile_time_zones_auto_yes")?></option>
				<option value="N"<?=($arResult["arUser"]["AUTO_TIME_ZONE"] == "N"? ' SELECTED="SELECTED"' : '')?>><?echo GetMessage("main_profile_time_zones_auto_no")?></option>
			</select>
		</td>
	</tr>
	<tr>
		<td><?echo GetMessage("main_profile_time_zones_zones")?></td>
		<td>
			<select name="TIME_ZONE"<?if($arResult["arUser"]["AUTO_TIME_ZONE"] <> "N") echo ' disabled="disabled"'?>>
<?foreach($arResult["TIME_ZONE_LIST"] as $tz=>$tz_name):?>
				<option value="<?=htmlspecialcharsbx($tz)?>"<?=($arResult["arUser"]["TIME_ZONE"] == $tz? ' SELECTED="SELECTED"' : '')?>><?=htmlspecialcharsbx($tz_name)?></option>
<?endforeach?>
			</select>
		</td>
	</tr>
<?endif?>
	</tbody>
</table>
</div>
<div class="profile-link profile-user-div-link"><a title="<?=GetMessage("USER_SHOW_HIDE")?>" href="javascript:void(0)" onclick="SectionClick('personal')"><?=GetMessage("USER_PERSONAL_INFO")?></a></div>
<div id="user_div_personal" class="profile-block-<?=strpos($arResult["opened"], "personal") === false ? "hidden" : "shown"?>">
<table class="data-table profile-table">
	<thead>
		<tr>
			<td colspan="2">&nbsp;</td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><?=GetMessage('USER_PROFESSION')?></td>
			<td><input type="text" name="PERSONAL_PROFESSION" maxlength="255" value="<?=$arResult["arUser"]["PERSONAL_PROFESSION"]?>" /></td>
		</tr>
		<tr>
			<td><?=GetMessage('USER_WWW')?></td>
			<td><input type="text" name="PERSONAL_WWW" maxlength="255" value="<?=$arResult["arUser"]["PERSONAL_WWW"]?>" /></td>
		</tr>
		<tr>
			<td><?=GetMessage('USER_ICQ')?></td>
			<td><input type="text" name="PERSONAL_ICQ" maxlength="255" value="<?=$arResult["arUser"]["PERSONAL_ICQ"]?>" /></td>
		</tr>
		<tr>
			<td><?=GetMessage('USER_GENDER')?></td>
			<td><select name="PERSONAL_GENDER">
				<option value=""><?=GetMessage("USER_DONT_KNOW")?></option>
				<option value="M"<?=$arResult["arUser"]["PERSONAL_GENDER"] == "M" ? " SELECTED=\"SELECTED\"" : ""?>><?=GetMessage("USER_MALE")?></option>
				<option value="F"<?=$arResult["arUser"]["PERSONAL_GENDER"] == "F" ? " SELECTED=\"SELECTED\"" : ""?>><?=GetMessage("USER_FEMALE")?></option>
			</select></td>
		</tr>
		<tr>
			<td><?=GetMessage("USER_BIRTHDAY_DT")?> (<?=$arResult["DATE_FORMAT"]?>):</td>
			<td><?
			$APPLICATION->IncludeComponent(
				'bitrix:main.calendar',
				'',
				array(
					'SHOW_INPUT' => 'Y',
					'FORM_NAME' => 'form1',
					'INPUT_NAME' => 'PERSONAL_BIRTHDAY',
					'INPUT_VALUE' => $arResult["arUser"]["PERSONAL_BIRTHDAY"],
					'SHOW_TIME' => 'N'
				),
				null,
				array('HIDE_ICONS' => 'Y')
			);

			//=CalendarDate("PERSONAL_BIRTHDAY", $arResult["arUser"]["PERSONAL_BIRTHDAY"], "form1", "15")
			?></td>
		</tr>
		<tr>
			<td><?=GetMessage("USER_PHOTO")?></td>
			<td>
			<?=$arResult["arUser"]["PERSONAL_PHOTO_INPUT"]?>
			<?
			if (strlen($arResult["arUser"]["PERSONAL_PHOTO"])>0)
			{
			?>
			<br />
				<?=$arResult["arUser"]["PERSONAL_PHOTO_HTML"]?>
			<?
			}
			?></td>
		<tr>
			<td colspan="2" class="profile-header"><?=GetMessage("USER_PHONES")?></td>
		</tr>
		<tr>
			<td><?=GetMessage('USER_PHONE')?></td>
			<td><input type="text" name="PERSONAL_PHONE" maxlength="255" value="<?=$arResult["arUser"]["PERSONAL_PHONE"]?>" /></td>
		</tr>
		<tr>
			<td><?=GetMessage('USER_FAX')?></td>
			<td><input type="text" name="PERSONAL_FAX" maxlength="255" value="<?=$arResult["arUser"]["PERSONAL_FAX"]?>" /></td>
		</tr>
		<tr>
			<td><?=GetMessage('USER_MOBILE')?></td>
			<td><input type="text" name="PERSONAL_MOBILE" maxlength="255" value="<?=$arResult["arUser"]["PERSONAL_MOBILE"]?>" /></td>
		</tr>
		<tr>
			<td><?=GetMessage('USER_PAGER')?></td>
			<td><input type="text" name="PERSONAL_PAGER" maxlength="255" value="<?=$arResult["arUser"]["PERSONAL_PAGER"]?>" /></td>
		</tr>
		<tr>
			<td colspan="2" class="profile-header"><?=GetMessage("USER_POST_ADDRESS")?></td>
		</tr>
		<tr>
			<td><?=GetMessage('USER_COUNTRY')?></td>
			<td><?=$arResult["COUNTRY_SELECT"]?></td>
		</tr>
		<tr>
			<td><?=GetMessage('USER_STATE')?></td>
			<td><input type="text" name="PERSONAL_STATE" maxlength="255" value="<?=$arResult["arUser"]["PERSONAL_STATE"]?>" /></td>
		</tr>
		<tr>
			<td><?=GetMessage('USER_CITY')?></td>
			<td><input type="text" name="PERSONAL_CITY" maxlength="255" value="<?=$arResult["arUser"]["PERSONAL_CITY"]?>" /></td>
		</tr>
		<tr>
			<td><?=GetMessage('USER_ZIP')?></td>
			<td><input type="text" name="PERSONAL_ZIP" maxlength="255" value="<?=$arResult["arUser"]["PERSONAL_ZIP"]?>" /></td>
		</tr>
		<tr>
			<td><?=GetMessage("USER_STREET")?></td>
			<td><textarea cols="30" rows="5" name="PERSONAL_STREET"><?=$arResult["arUser"]["PERSONAL_STREET"]?></textarea></td>
		</tr>
		<tr>
			<td><?=GetMessage('USER_MAILBOX')?></td>
			<td><input type="text" name="PERSONAL_MAILBOX" maxlength="255" value="<?=$arResult["arUser"]["PERSONAL_MAILBOX"]?>" /></td>
		</tr>
		<tr>
			<td><?=GetMessage("USER_NOTES")?></td>
			<td><textarea cols="30" rows="5" name="PERSONAL_NOTES"><?=$arResult["arUser"]["PERSONAL_NOTES"]?></textarea></td>
		</tr>
	</tbody>
</table>
</div>

<div class="profile-link profile-user-div-link"><a title="<?=GetMessage("USER_SHOW_HIDE")?>" href="javascript:void(0)" onclick="SectionClick('work')"><?=GetMessage("USER_WORK_INFO")?></a></div>
<div id="user_div_work" class="profile-block-<?=strpos($arResult["opened"], "work") === false ? "hidden" : "shown"?>">
<table class="data-table profile-table">
	<thead>
		<tr>
			<td colspan="2">&nbsp;</td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><?=GetMessage('USER_COMPANY')?></td>
			<td><input type="text" name="WORK_COMPANY" maxlength="255" value="<?=$arResult["arUser"]["WORK_COMPANY"]?>" /></td>
		</tr>
		<tr>
			<td><?=GetMessage('USER_WWW')?></td>
			<td><input type="text" name="WORK_WWW" maxlength="255" value="<?=$arResult["arUser"]["WORK_WWW"]?>" /></td>
		</tr>
		<tr>
			<td><?=GetMessage('USER_DEPARTMENT')?></td>
			<td><input type="text" name="WORK_DEPARTMENT" maxlength="255" value="<?=$arResult["arUser"]["WORK_DEPARTMENT"]?>" /></td>
		</tr>
		<tr>
			<td><?=GetMessage('USER_POSITION')?></td>
			<td><input type="text" name="WORK_POSITION" maxlength="255" value="<?=$arResult["arUser"]["WORK_POSITION"]?>" /></td>
		</tr>
		<tr>
			<td><?=GetMessage("USER_WORK_PROFILE")?></td>
			<td><textarea cols="30" rows="5" name="WORK_PROFILE"><?=$arResult["arUser"]["WORK_PROFILE"]?></textarea></td>
		</tr>
		<tr>
			<td><?=GetMessage("USER_LOGO")?></td>
			<td>
			<?=$arResult["arUser"]["WORK_LOGO_INPUT"]?>
			<?
			if (strlen($arResult["arUser"]["WORK_LOGO"])>0)
			{
			?>
				<br /><?=$arResult["arUser"]["WORK_LOGO_HTML"]?>
			<?
			}
			?></td>
		</tr>
		<tr>
			<td colspan="2" class="profile-header"><?=GetMessage("USER_PHONES")?></td>
		</tr>
		<tr>
			<td><?=GetMessage('USER_PHONE')?></td>
			<td><input type="text" name="WORK_PHONE" maxlength="255" value="<?=$arResult["arUser"]["WORK_PHONE"]?>" /></td>
		</tr>
		<tr>
			<td><?=GetMessage('USER_FAX')?></font></td>
			<td><input type="text" name="WORK_FAX" maxlength="255" value="<?=$arResult["arUser"]["WORK_FAX"]?>" /></td>
		</tr>
		<tr>
			<td><?=GetMessage('USER_PAGER')?></font></td>
			<td><input type="text" name="WORK_PAGER" maxlength="255" value="<?=$arResult["arUser"]["WORK_PAGER"]?>" /></td>
		</tr>
		<tr>
			<td colspan="2" class="profile-header"><?=GetMessage("USER_POST_ADDRESS")?></td>
		</tr>
		<tr>
			<td><?=GetMessage('USER_COUNTRY')?></td>
			<td><?=$arResult["COUNTRY_SELECT_WORK"]?></td>
		</tr>
		<tr>
			<td><?=GetMessage('USER_STATE')?></td>
			<td><input type="text" name="WORK_STATE" maxlength="255" value="<?=$arResult["arUser"]["WORK_STATE"]?>" /></td>
		</tr>
		<tr>
			<td><?=GetMessage('USER_CITY')?></td>
			<td><input type="text" name="WORK_CITY" maxlength="255" value="<?=$arResult["arUser"]["WORK_CITY"]?>" /></td>
		</tr>
		<tr>
			<td><?=GetMessage('USER_ZIP')?></td>
			<td><input type="text" name="WORK_ZIP" maxlength="255" value="<?=$arResult["arUser"]["WORK_ZIP"]?>" /></td>
		</tr>
		<tr>
			<td><?=GetMessage("USER_STREET")?></td>
			<td><textarea cols="30" rows="5" name="WORK_STREET"><?=$arResult["arUser"]["WORK_STREET"]?></textarea></td>
		</tr>
		<tr>
			<td><?=GetMessage('USER_MAILBOX')?></td>
			<td><input type="text" name="WORK_MAILBOX" maxlength="255" value="<?=$arResult["arUser"]["WORK_MAILBOX"]?>" /></td>
		</tr>
		<tr>
			<td><?=GetMessage("USER_NOTES")?></td>
			<td><textarea cols="30" rows="5" name="WORK_NOTES"><?=$arResult["arUser"]["WORK_NOTES"]?></textarea></td>
		</tr>
	</tbody>
</table>
</div>
	<?
	if ($arResult["INCLUDE_FORUM"] == "Y")
	{
	?>

<div class="profile-link profile-user-div-link"><a title="<?=GetMessage("USER_SHOW_HIDE")?>" href="javascript:void(0)" onclick="SectionClick('forum')"><?=GetMessage("forum_INFO")?></a></div>
<div id="user_div_forum" class="profile-block-<?=strpos($arResult["opened"], "forum") === false ? "hidden" : "shown"?>">
<table class="data-table profile-table">
	<thead>
		<tr>
			<td colspan="2">&nbsp;</td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><?=GetMessage("forum_SHOW_NAME")?></td>
			<td><input type="checkbox" name="forum_SHOW_NAME" value="Y" <?if ($arResult["arForumUser"]["SHOW_NAME"]=="Y") echo "checked=\"checked\"";?> /></td>
		</tr>
		<tr>
			<td><?=GetMessage('forum_DESCRIPTION')?></td>
			<td><input type="text" name="forum_DESCRIPTION" maxlength="255" value="<?=$arResult["arForumUser"]["DESCRIPTION"]?>" /></td>
		</tr>
		<tr>
			<td><?=GetMessage('forum_INTERESTS')?></td>
			<td><textarea cols="30" rows="5" name="forum_INTERESTS"><?=$arResult["arForumUser"]["INTERESTS"]; ?></textarea></td>
		</tr>
		<tr>
			<td><?=GetMessage("forum_SIGNATURE")?></td>
			<td><textarea cols="30" rows="5" name="forum_SIGNATURE"><?=$arResult["arForumUser"]["SIGNATURE"]; ?></textarea></td>
		</tr>
		<tr>
			<td><?=GetMessage("forum_AVATAR")?></td>
			<td><?=$arResult["arForumUser"]["AVATAR_INPUT"]?>
			<?
			if (strlen($arResult["arForumUser"]["AVATAR"])>0)
			{
			?>
				<br /><?=$arResult["arForumUser"]["AVATAR_HTML"]?>
			<?
			}
			?></td>
		</tr>
	</tbody>
</table>
</div>

	<?
	}
	?>
	<?
	if ($arResult["INCLUDE_BLOG"] == "Y")
	{
	?>
<div class="profile-link profile-user-div-link"><a title="<?=GetMessage("USER_SHOW_HIDE")?>" href="javascript:void(0)" onclick="SectionClick('blog')"><?=GetMessage("blog_INFO")?></a></div>
<div id="user_div_blog" class="profile-block-<?=strpos($arResult["opened"], "blog") === false ? "hidden" : "shown"?>">
<table class="data-table profile-table">
	<thead>
		<tr>
			<td colspan="2">&nbsp;</td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><?=GetMessage('blog_ALIAS')?></td>
			<td><input class="typeinput" type="text" name="blog_ALIAS" maxlength="255" value="<?=$arResult["arBlogUser"]["ALIAS"]?>" /></td>
		</tr>
		<tr>
			<td><?=GetMessage('blog_DESCRIPTION')?></td>
			<td><input class="typeinput" type="text" name="blog_DESCRIPTION" maxlength="255" value="<?=$arResult["arBlogUser"]["DESCRIPTION"]?>" /></td>
		</tr>
		<tr>
			<td><?=GetMessage('blog_INTERESTS')?></td>
			<td><textarea cols="30" rows="5" class="typearea" name="blog_INTERESTS"><?echo $arResult["arBlogUser"]["INTERESTS"]; ?></textarea></td>
		</tr>
		<tr>
			<td><?=GetMessage("blog_AVATAR")?></td>
			<td><?=$arResult["arBlogUser"]["AVATAR_INPUT"]?>
			<?
			if (strlen($arResult["arBlogUser"]["AVATAR"])>0)
			{
			?>
				<br /><?=$arResult["arBlogUser"]["AVATAR_HTML"]?>
			<?
			}
			?></td>
		</tr>
	</tbody>
</table>
</div>
	<?
	}
	?>
	<?if ($arResult["INCLUDE_LEARNING"] == "Y"):?>
	<div class="profile-link profile-user-div-link"><a title="<?=GetMessage("USER_SHOW_HIDE")?>" href="javascript:void(0)" onclick="SectionClick('learning')"><?=GetMessage("learning_INFO")?></a></div>
	<div id="user_div_learning" class="profile-block-<?=strpos($arResult["opened"], "learning") === false ? "hidden" : "shown"?>">
	<table class="data-table profile-table">
		<thead>
			<tr>
				<td colspan="2">&nbsp;</td>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><?=GetMessage("learning_PUBLIC_PROFILE");?>:</td>
				<td><input type="checkbox" name="student_PUBLIC_PROFILE" value="Y" <?if ($arResult["arStudent"]["PUBLIC_PROFILE"]=="Y") echo "checked=\"checked\"";?> /></td>
			</tr>
			<tr>
				<td><?=GetMessage("learning_RESUME");?>:</td>
				<td><textarea cols="30" rows="5" name="student_RESUME"><?=$arResult["arStudent"]["RESUME"]; ?></textarea></td>
			</tr>

			<tr>
				<td><?=GetMessage("learning_TRANSCRIPT");?>:</td>
				<td><?=$arResult["arStudent"]["TRANSCRIPT"];?>-<?=$arResult["ID"]?></td>
			</tr>
		</tbody>
	</table>
	</div>
	<?endif;?>
	<?if($arResult["IS_ADMIN"]):?>
	<div class="profile-link profile-user-div-link"><a title="<?=GetMessage("USER_SHOW_HIDE")?>" href="javascript:void(0)" onclick="SectionClick('admin')"><?=GetMessage("USER_ADMIN_NOTES")?></a></div>
	<div id="user_div_admin" class="profile-block-<?=strpos($arResult["opened"], "admin") === false ? "hidden" : "shown"?>">
	<table class="data-table profile-table">
		<thead>
			<tr>
				<td colspan="2">&nbsp;</td>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><?=GetMessage("USER_ADMIN_NOTES")?>:</td>
				<td><textarea cols="30" rows="5" name="ADMIN_NOTES"><?=$arResult["arUser"]["ADMIN_NOTES"]?></textarea></td>
			</tr>
		</tbody>
	</table>
	</div>
	<?endif;?>
	<?// ********************* User properties ***************************************************?>
	<?if($arResult["USER_PROPERTIES"]["SHOW"] == "Y"):?>
	<div class="profile-link profile-user-div-link"><a title="<?=GetMessage("USER_SHOW_HIDE")?>" href="javascript:void(0)" onclick="SectionClick('user_properties')"><?=strlen(trim($arParams["USER_PROPERTY_NAME"])) > 0 ? $arParams["USER_PROPERTY_NAME"] : GetMessage("USER_TYPE_EDIT_TAB")?></a></div>
	<div id="user_div_user_properties" class="profile-block-<?=strpos($arResult["opened"], "user_properties") === false ? "hidden" : "shown"?>">
	<table class="data-table profile-table">
		<thead>
			<tr>
				<td colspan="2">&nbsp;</td>
			</tr>
		</thead>
		<tbody>
		<?$first = true;?>
		<?foreach ($arResult["USER_PROPERTIES"]["DATA"] as $FIELD_NAME => $arUserField):?>
		<tr><td class="field-name">
			<?if ($arUserField["MANDATORY"]=="Y"):?>
				<span class="starrequired">*</span>
			<?endif;?>
			<?=$arUserField["EDIT_FORM_LABEL"]?>:</td><td class="field-value">
				<?$APPLICATION->IncludeComponent(
					"bitrix:system.field.edit",
					$arUserField["USER_TYPE"]["USER_TYPE_ID"],
					array("bVarsFromForm" => $arResult["bVarsFromForm"], "arUserField" => $arUserField), null, array("HIDE_ICONS"=>"Y"));?></td></tr>
		<?endforeach;?>
		</tbody>
	</table>
	</div>
	<?endif;?>
	<?// ******************** /User properties ***************************************************?>
	<p><?echo $arResult["GROUP_POLICY"]["PASSWORD_REQUIREMENTS"];?></p>
	<p>
		<input type="submit" name="save" value="<?=(($arResult["ID"]>0) ? GetMessage("MAIN_SAVE") : GetMessage("MAIN_ADD"))?>">&nbsp;&nbsp;
		<input type="reset" value="<?=GetMessage('MAIN_RESET');?>"></p>
</form>
<?
if($arResult["SOCSERV_ENABLED"])
{
	$APPLICATION->IncludeComponent("bitrix:socserv.auth.split", "register-template", array(
			"SHOW_PROFILES" => "Y",
			"ALLOW_DELETE" => "Y"
		),
		false
	);
}
?>

<?  endif; // END FALSE ?>


	</div>
</div>