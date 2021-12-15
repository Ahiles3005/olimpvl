<?
require_once($_SERVER["DOCUMENT_ROOT"] . "/local/php_interface/tradex/main.php");
require_once($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_admin_before.php"); // первый общий пролог

IncludeModuleLangFile(__FILE__);

$POST_RIGHT = $APPLICATION->GetGroupRight("tradex");
if ($POST_RIGHT == "D")
    $APPLICATION->AuthForm(GetMessage("ACCESS_DENIED"));

$aTabs = array(
    array("DIV" => "edit1", "TAB" => "Интеграция с TradeX", "ICON" => "main_user_edit", "TITLE" => "Импорт")
);

$tabControl = new CAdminTabControl("tabControl", $aTabs);

$message = null;        // сообщение об ошибке
$bVarsFromForm = false; // флаг "Данные получены с формы", обозначающий, что выводимые данные получены с формы, а не из БД.

// ******************************************************************** //
//                ОБРАБОТКА ИЗМЕНЕНИЙ ФОРМЫ                             //
// ******************************************************************** //

if (
    $REQUEST_METHOD == "POST" // проверка метода вызова страницы
    &&
    ($save != "" || $apply != "") // проверка нажатия кнопок "Сохранить" и "Применить"
    &&
    $POST_RIGHT == "W"          // проверка наличия прав на запись для модуля
) {

    $arFields = Array(
        "file_check" => $_REQUEST["file_check"],
        "file_list" => $_REQUEST["file_list"]
    );

    $class = new TradexImport;
    $result = TradexImport::adminImport($_REQUEST["file_list"], ($_REQUEST["file_check"]) ? true : false );
    if ($result != "ERROR") {
        if ($save != "")
            LocalRedirect("/bitrix/admin/tradex_index.php?&mess=ok&lang=" . LANG . "&" . $tabControl->ActiveTabParam());
        else
            LocalRedirect("/bitrix/admin/tradex_index.php?&mess=ok&lang=" . LANG . "&" . $tabControl->ActiveTabParam());
    } else {
        $e = $APPLICATION->GetException();
        $message = new CAdminMessage("Ошибка при импорте", $e);
    }
}

// ******************************************************************** //
//                ВЫБОРКА И ПОДГОТОВКА ДАННЫХ ФОРМЫ                     //
// ******************************************************************** //

// значения по умолчанию
$str_SORT = 100;
$str_ACTIVE = "Y";
$str_AUTO = "N";
$str_DAYS_OF_MONTH = "";
$str_DAYS_OF_WEEK = "";
$str_TIMES_OF_DAY = "";
$str_VISIBLE = "Y";
$str_LAST_EXECUTED = ConvertTimeStamp(false, "FULL");
$str_FROM_FIELD = COption::GetOptionString("subscribe", "default_from");

// ******************************************************************** //
//                ВЫВОД ФОРМЫ                                           //
// ******************************************************************** //
// не забудем разделить подготовку данных и вывод
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_admin_after.php");

// конфигурация административного меню
$aMenu = array(
    array(
        "TEXT" => "Административная панель",
        "TITLE" => "Возврат к административной панели",
        "LINK" => "/bitrix/admin/index.php?lang=" . LANG,
        "ICON" => "btn_list",
    )
);

// создание экземпляра класса административного меню
$context = new CAdminContextMenu($aMenu);

// вывод административного меню
$context->Show();
?>

<?
// если есть сообщения об ошибках или об успешном сохранении - выведем их.
if ($_REQUEST["mess"] == "ok"){
    $strRes = "Импорт успешно завершен";
    CAdminMessage::ShowMessage(array("MESSAGE" => $strRes, "TYPE" => "OK"));
}

if ($message)
    echo $message->Show();
?>

<?
// далее выводим собственно форму
?>
<form method="POST" Action="<? echo $APPLICATION->GetCurPage() ?>" ENCTYPE="multipart/form-data" name="post_form">
<? // проверка идентификатора сессии ?>
<? echo bitrix_sessid_post(); ?>
<?
// отобразим заголовки закладок
$tabControl->Begin();

$tabControl->BeginNextTab();
?>
    <tr>
        <td>Список файлов для импорта:</td>
        <td><select name = "file_list[]" multiple size = "9">
            <option value = "group" selected>Выгрузка файла group</option>
            <option value = "discgrp" selected>Выгрузка файла discgrp</option>
            <option value = "artdiscgrp" selected>Выгрузка файла artdiscgrp</option>
            <option value = "pludiscgrp" selected>Выгрузка файла pludiscgrp</option>
            <option value = "object" selected>Выгрузка файла object</option>
            <option value = "pricelist" selected>Выгрузка файла pricelist</option>
            <option value = "good" selected>Выгрузка файла good</option>
            <option value = "price" selected>Выгрузка файла price</option>
            <option value = "stock" selected>Выгрузка файла stock</option>
        <select></td>
    </tr>
    <tr>
        <td>Включить проверку файлов на изменения:</td>
        <td><input name = "file_check" type="checkbox"></td>
    </tr>
       
<?

$tabControl->Buttons();
?>
    <input class="adm-btn-save"
           type="submit" name="save"
           value="Импортировать"
           title="Импортировать"/>
<?
// завершаем интерфейс закладок
$tabControl->End();
?>

<?
// дополнительное уведомление об ошибках - вывод иконки около поля, в котором возникла ошибка
$tabControl->ShowWarnings("post_form", $message);

require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/epilog_admin.php");
?>