<?
require($_SERVER['DOCUMENT_ROOT'] .'/bitrix/modules/main/include/prolog_before.php');

$RUB_ID = array(2);
$EMAIL  = $_REQUEST['EMAIL'];
CModule::IncludeModule("subscribe");

//there must be at least one newsletter category
if (!is_array($RUB_ID) || count($RUB_ID) == 0)
    $strWarning .= "Не указан раздел подписки."."<br>";

if ($strWarning == "") {
    $arFields = array(
        "USER_ID" => ($USER->IsAuthorized()? $USER->GetID():false),
        "FORMAT"  => ($FORMAT <> "html"? "text":"html"),
        "EMAIL"   => $EMAIL,
        "ACTIVE"  => "Y",
        "RUB_ID"  => $RUB_ID
    );
    $subscr = new CSubscription;

    //can add without authorization
    $ID = $subscr->Add($arFields);
    if ($ID > 0) {
        CSubscription::Authorize($ID);
        $strWarning .= "Подписка подтверждена";
    } else {
        $strWarning .= "Ошибка добавления подписки: ".$subscr->LAST_ERROR."<br>";
    }
}
echo $strWarning;