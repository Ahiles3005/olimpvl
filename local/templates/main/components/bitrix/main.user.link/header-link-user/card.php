<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<?
$arFieldsSorted = array(
	"LOGIN",
	"NAME",	
	"SECOND_NAME",
	"LAST_NAME",
	"WORK_POSITION",
	"UF_DEPARTMENT",
	"MANAGERS",
	"EMAIL",
	"LAST_LOGIN",
	"DATE_REGISTER",
	"PERSONAL_BIRTHDAY",
	"PERSONAL_GENDER",
	"PERSONAL_COUNTRY",
	"PERSONAL_STATE",
	"PERSONAL_ZIP",
	"PERSONAL_CITY",
	"PERSONAL_STREET",
	"PERSONAL_MAILBOX",
	"PERSONAL_PROFESSION",
	"PERSONAL_PHONE",
	"PERSONAL_FAX",
	"PERSONAL_MOBILE",
	"PERSONAL_WWW",	
	"PERSONAL_ICQ",	
	"PERSONAL_PAGER",
	"PERSONAL_NOTES",
	"WORK_COMPANY",	
	"WORK_LOGO",
	"WORK_WWW",	
	"WORK_PROFILE",
	"WORK_COUNTRY",	
	"WORK_STATE",
	"WORK_ZIP",
	"WORK_CITY",
	"WORK_STREET",
	"WORK_MAILBOX",
	"WORK_DEPARTMENT",
	"WORK_PHONE",
	"WORK_FAX",
	"WORK_PAGER",
	"WORK_NOTES",	
);

$arUserOutFields = array();

// USER FIELDS

if (count($arParams["SHOW_FIELDS"]) > 0)
{
	foreach ($arFieldsSorted as $userFieldName)
	{
		if (in_array($userFieldName, $arParams["SHOW_FIELDS"]))
		{
			$val = $arResult["User"][$userFieldName];
			switch ($userFieldName)
			{
				case 'LOGIN':
				case 'NAME':
				case 'LAST_NAME':
				case 'SECOND_NAME':
				case 'PERSONAL_PROFESSION':
				case 'PERSONAL_NOTES':
				case 'PERSONAL_PAGER':
				case 'PERSONAL_STATE':
				case 'PERSONAL_ZIP':
				case 'PERSONAL_CITY':
				case 'PERSONAL_STREET':
				case 'PERSONAL_MAILBOX':
				case 'WORK_COMPANY':
				case 'WORK_DEPARTMENT':
				case 'WORK_POSITION':
				case 'WORK_PROFILE':
				case 'WORK_NOTES':
				case 'WORK_PAGER':
				case 'WORK_STATE':
				case 'WORK_ZIP':
				case 'WORK_CITY':
				case 'WORK_STREET':
				case 'WORK_MAILBOX':
					if (StrLen($val) > 0)
						$val = htmlspecialcharsbx($val);
					break;

				case 'LAST_LOGIN':
				case 'DATE_REGISTER':
					if (StrLen($val) > 0)
						$val = date($arParams["DATE_TIME_FORMAT"], MakeTimeStamp($val, CSite::GetDateFormat("FULL")));
					break;

				case 'EMAIL':
					if ($bIntranet && StrLen($val) > 0):
						$val = '<a href="mailto:'.htmlspecialcharsbx($val).'">'.htmlspecialcharsbx($val).'</a>';
					else:
						$val = '';
					endif;
					break;

				case 'PERSONAL_WWW':
				case 'WORK_WWW':
					if ($val == "https://")
						$val = "";
					elseif (StrLen($val) > 0)
					{
						$val = htmlspecialcharsbx($val);
						$valLink = $val;
						if (StrToLower(SubStr($val, 0, StrLen("https://"))) != "https://")
							$valLink = "https://".$val;
						$val = '<a href="'.$valLink.'" target="_blank">'.$val.'</a>';
					}
					break;

				case 'PERSONAL_COUNTRY':
				case 'WORK_COUNTRY':
					if (StrLen($val) > 0)
						$val = GetCountryByID($val);
					break;

				case 'PERSONAL_ICQ':
					if (StrLen($val) > 0)
						$val = htmlspecialcharsbx($val).'<!-- <img src="https://web.icq.com/whitepages/online?icq='.htmlspecialcharsbx($val).'&img=5" alt="" />-->';
					break;

				case 'PERSONAL_PHONE':
				case 'PERSONAL_FAX':
				case 'PERSONAL_MOBILE':
				case 'WORK_PHONE':
				case 'WORK_FAX':
					if (StrLen($val) > 0)
					{
						$valEncoded = preg_replace('/[^\d\+]+/', '', htmlspecialcharsbx($val));
						$val = '<a href="callto:'.$valEncoded.'">'.htmlspecialcharsbx($val).'</a>';
					}
					break;

				case 'PERSONAL_GENDER':
					$val = (($val == 'F') ? GetMessage("MAIN_UL_SEX_F") : (($val == 'M') ? GetMessage("MAIN_UL_SEX_M") : ""));
					break;

				case 'PERSONAL_BIRTHDAY':
					if (StrLen($val) > 0)
					{
						$arDateTmp = ParseDateTime($val, CSite::GetDateFormat('SHORT'));
						$day = IntVal($arDateTmp["DD"]);
						$month = IntVal($arDateTmp["MM"]);
						$year = IntVal($arDateTmp["YYYY"]);

						$val = $day.' '.ToLower(GetMessage('MONTH_'.$month.'_S'));
						if (($arParams['SHOW_YEAR'] == 'Y') || ($arParams['SHOW_YEAR'] == 'M' && $arResult["User"]['PERSONAL_GENDER'] == 'M'))
							$val .= ' '.$year;

						$arResult['IS_BIRTHDAY'] = (intval($arDateTmp['MM']) == date('n') && intval($arDateTmp['DD']) == date('j'));
					}
					break;

				case 'WORK_LOGO':
					if (IntVal($val) > 0)
					{
						$iSize = 150;
						$imageFile = CFile::GetFileArray($val);
						if ($imageFile !== false)
						{
							$arFileTmp = CFile::ResizeImageGet(
								$imageFile,
								array("width" => $iSize, "height" => $iSize),
								BX_RESIZE_IMAGE_PROPORTIONAL,
								false
							);
							$val = CFile::ShowImage($arFileTmp["src"], $iSize, $iSize, "border=0", "");
						}
					}
					break;

				case 'MANAGERS':
					$sManagers = '';
					if(is_array($val))
					{
						foreach($val as $manager)
						{
							$sManagers .= ($sManagers <> ''? ', ':'').(
								$arResult["CurrentUser"]
								&& !in_array($arResult["CurrentUser"]["EXTERNAL_AUTH_ID"], array('email'))
									? '<a href="'.$manager["URL"].'">'.$manager["NAME_FORMATTED"].'</a>'
									: $manager["NAME_FORMATTED"]
							);
						}
					}
					$val = $sManagers;


					$strCard .= '<div class="bx-user-info-data-name '.$strUserNameClass.'"><a href="'.($arResult["CurrentUser"] && !in_array($arResult["CurrentUser"]["EXTERNAL_AUTH_ID"], array('email')) ? $arTmpUser["DETAIL_URL"] : 'javascript:void(0);').'">'.$strNameFormatted.'</a></div>';



					break;
				default:
					$val = "";
					break;
			}
			if($val <> '')
				$arUserOutFields[$userFieldName] = array("name"=>GetMessage("MAIN_UL_".$userFieldName), "value"=>$val);
		}
	}
}
				
// USER PROPERIES
if (count($arParams["USER_PROPERTY"]) > 0)
{
	$arUserFields = $GLOBALS["USER_FIELD_MANAGER"]->GetUserFields("USER", $arResult["User"]["ID"], LANGUAGE_ID);

	foreach ($arUserFields as $fieldName => $arUserField)
	{
		if (in_array($fieldName, $arParams["USER_PROPERTY"]))
		{
			if (
				$bIntranet
				&& $arUserField["FIELD_NAME"] == "UF_DEPARTMENT"
				&& strlen(trim($arParams["PATH_TO_CONPANY_DEPARTMENT"])) > 0
			)
			{
				$arUserField['SETTINGS']['SECTION_URL']	= trim($arParams["PATH_TO_CONPANY_DEPARTMENT"]);
			}

			if (
				(
					CModule::IncludeModule('extranet')
					&& !CExtranet::IsIntranetUser()
				)
				|| (
					$arResult["CurrentUser"]
					&& in_array($arResult["CurrentUser"]["EXTERNAL_AUTH_ID"], array('email'))
				)
			)
			{
				$arUserField['SETTINGS']['SECTION_URL'] = false;
			}

			$arUserField["EDIT_FORM_LABEL"] = StrLen($arUserField["EDIT_FORM_LABEL"]) > 0 ? $arUserField["EDIT_FORM_LABEL"] : $arUserField["FIELD_NAME"];
			$arUserField["EDIT_FORM_LABEL"] = htmlspecialcharsEx($arUserField["EDIT_FORM_LABEL"]);
			$arUserField["~EDIT_FORM_LABEL"] = $arUserField["EDIT_FORM_LABEL"];

			$tmpVal = "";
			
			if (
				(
					(is_array($arUserField["VALUE"]) && count($arUserField["VALUE"]) == 0)
					|| (!is_array($arUserField["VALUE"]) && !$arUserField["VALUE"])
				)
				&& $arUserField["USER_TYPE_ID"] != "boolean"
			)
			{
				continue;
			}

			ob_start();
			$APPLICATION->IncludeComponent(
				"bitrix:system.field.view", 
				$arUserField["USER_TYPE_ID"], 
				array("arUserField" => $arUserField),
				null,
				array("HIDE_ICONS"=>"Y")
			);
			$tmpVal .= ob_get_contents();
			ob_end_clean();
			
			if($tmpVal <> '')
				$arUserOutFields[$fieldName] = array("name"=>htmlspecialcharsEx(StrLen($arUserField["EDIT_FORM_LABEL"]) > 0 ? $arUserField["EDIT_FORM_LABEL"] : $arUserField["FIELD_NAME"]), "value"=>$tmpVal);
		}
	}
}	

if(!function_exists('__card_sort'))
{
	function __card_sort($a, $b)
	{
		if(isset($a["sort"]) && !isset($b["sort"]))
			return -1;
		if(!isset($a["sort"]) && isset($b["sort"]))
			return 1;
		if($a["sort"] == $b["sort"]) 
			return 0; 
		return ($a["sort"] < $b["sort"]? -1 : 1);
	}
}

//sorting fields
foreach($arFieldsSorted as $index=>$field)
	if(isset($arUserOutFields[$field]))
		$arUserOutFields[$field]["sort"] = $index;
uasort($arUserOutFields, '__card_sort');

$strUserFields = '';
foreach($arUserOutFields as $field)
	$strUserFields .= "<span class='field-name'>".$field["name"]."</span>: ".$field["value"]."<br>\n";

// RATING
$strTmpUserRatings = "";
				
if (array_key_exists("USER_RATING", $arParams) && is_array($arParams["USER_RATING"]) && count($arParams["USER_RATING"]) > 0)
{
	$tmpVal = "";
	foreach ($arParams["USER_RATING"] as $rating_id)
	{
		ob_start();
		$arRating = $APPLICATION->IncludeComponent(
			"bitrix:rating.result", 
			"",
			Array(
				"RATING_ID" => $rating_id,
				"ENTITY_ID" => $arResult["User"]["ID"],
				"TEMPLATE_HIDE" => "Y",
			),
			null,
			array("HIDE_ICONS"=>"Y")
		);
		ob_end_clean();
		
		if (is_array($arRating))
			$strTmpUserRatings .= '<span class="field-name">'.htmlspecialcharsEx($arRating["RATING_NAME"]).'</span>: <span title="'.$arRating["RATING_NAME"].': '.$arRating["CURRENT_VALUE"].' ('.GetMessage("MAIN_UL_RATING_PROGRESS").' '.$arRating["PROGRESS_VALUE"].')">'.$arRating["ROUND_CURRENT_VALUE"].'</span><br>';

	}
	
}

if (in_array("PERSONAL_PHOTO", $arParams["SHOW_FIELDS"]))
{
	$iSize = $arParams["THUMBNAIL_DETAIL_SIZE"];
	$imageFile = false;
	$imageImg = false;

	if (intval($arResult["User"]["PERSONAL_PHOTO"]) > 0)
	{
		$imageFile = CFile::GetFileArray($arResult["User"]["PERSONAL_PHOTO"]);
		if ($imageFile !== false)
		{
			$arFileTmp = CFile::ResizeImageGet(
				$imageFile,
				array("width" => $iSize, "height" => $iSize),
				BX_RESIZE_IMAGE_PROPORTIONAL,
				false
			);
			$arTmpUser["PERSONAL_PHOTO"] = CFile::ShowImage($arFileTmp["src"], $iSize, $iSize, "border=0", "");
		}	
	}
	else
	{
		switch ($arResult["User"]["PERSONAL_GENDER"])
		{
			case "M":
				$suffix = "male";
				break;
			case "F":
				$suffix = "female";
				break;
			default:
				$suffix = "unknown";
		}
		$tmpImageID = COption::GetOptionInt("socialnetwork", "default_user_picture_".$suffix, false, SITE_ID);
		$imageFile = CFile::GetFileArray($tmpImageID);
		if ($imageFile !== false)
		{
			$arFileTmp = CFile::ResizeImageGet(
				$imageFile,
				array("width" => $iSize, "height" => $iSize),
				BX_RESIZE_IMAGE_PROPORTIONAL,
				false
			);
			$arTmpUser["PERSONAL_PHOTO"] = CFile::ShowImage($arFileTmp["src"], $iSize, $iSize, "border=0", "");
		}	
	}
}

if (array_key_exists("PERSONAL_PHOTO", $arTmpUser) && strlen($arTmpUser["PERSONAL_PHOTO"]) > 0)
{
	$photoClass = "bx-user-info-data-photo";
	$strPhoto = $arTmpUser["PERSONAL_PHOTO"];
}
else
{
	$photoClass = "bx-user-info-data-photo no-photo";
	$strPhoto = "";
}

if (IsModuleInstalled('extranet'))
{
	if (
		!is_array($arUserFields) 
		|| count($arUserFields) <= 0
	)
	{
		$arUserFields = $GLOBALS["USER_FIELD_MANAGER"]->GetUserFields("USER", $arResult["User"]["ID"], LANGUAGE_ID);
	}

	$bExtranetUser = (
		(is_array($arUserFields["UF_DEPARTMENT"]["VALUE"]) && count($arUserFields["UF_DEPARTMENT"]["VALUE"]) <= 0)
		|| (!is_array($arUserFields["UF_DEPARTMENT"]["VALUE"]) && intval($arUserFields["UF_DEPARTMENT"]["VALUE"]) <= 0)
	);
	$strUserNameClass = ($bExtranetUser ? " bx-user-info-extranet" : "");
}
		
$strNameFormatted = CUser::FormatName($arParams['NAME_TEMPLATE'], $arTmpUser, $bUseLogin);
		
$strPhoto = '<a href="'.$arTmpUser["DETAIL_URL"].'" class="'.$photoClass.'">'.$strPhoto.'</a>';

$data_cont_class = ($GLOBALS["USER"]->IsAuthorized() && $arResult["CurrentUserPerms"]["Operations"]["videocall"] ? "bx-user-info-data-cont-video" : "bx-user-info-data-cont");

$strCard = '<div class="'.$data_cont_class.'" id="bx_user_info_data_cont_'.$arTmpUser["ID"].'">';

$strCard .= '<div class="bx-user-info-data-name '.$strUserNameClass.'"><a href="'.($arResult["CurrentUser"] && !in_array($arResult["CurrentUser"]["EXTERNAL_AUTH_ID"], array('email')) ? $arTmpUser["DETAIL_URL"] : 'javascript:void(0);').'">'.$strNameFormatted.'</a></div>';

$strCard .= ($bExtranetUser ? '<div class="bx-user-info-extranet-description">'.GetMessage("MAIN_UL_EXTRANET_USER").'</div>' : '');
$strCard .= '<div class="bx-user-info-data-info">'.$strUserFields.$strTmpUserRatings.'</div>';
$strCard .= '</div>';
?>