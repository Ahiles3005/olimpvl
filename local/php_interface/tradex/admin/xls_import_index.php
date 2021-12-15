<?
// подключим все необходимые файлы:
require_once($_SERVER["DOCUMENT_ROOT"] . "/local/php_interface/tradex/main.php");
require_once($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_admin_before.php"); // первый общий пролог
?>

<?
// подключим языковой файл
IncludeModuleLangFile(__FILE__);

// получим права доступа текущего пользователя на модуль
$POST_RIGHT = $APPLICATION->GetGroupRight("tradex");
// если нет прав - отправим к форме авторизации с сообщением об ошибке
if ($POST_RIGHT == "D")
    $APPLICATION->AuthForm(GetMessage("ACCESS_DENIED"));

// сформируем список закладок
$aTabs = array(
    array("DIV" => "edit1", "TAB" => "Импорт", "ICON" => "main_user_edit", "TITLE" => "Импорт")
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
    ($import != "") // проверка нажатия кнопки
    &&
    $POST_RIGHT == "W"          // проверка наличия прав на запись для модуля
) {

// обработка данных формы

    if ($XLS_TYPE) {
        $class = new XlsImport();
        switch ($XLS_TYPE) {
            case "good_img":
                $result = $class->initImport("good_img");
                break;
            case "group_img":
                $result = $class->initImport("group_img");
                break;
            case "brand_img":
                $result = $class->initImport("brand_img");
                break;
            case "good_prop":
                $result = $class->initImport("good_prop");
                break;
            default :
                $result = "ERROR";
        }
    }

    if ($result != "ERROR") {
        if ($import != "")
            LocalRedirect("/bitrix/admin/xls_import_index.php?&mess=ok&lang=" . LANG . "&" . $tabControl->ActiveTabParam());
        else
            LocalRedirect("/bitrix/admin/xls_import_index.php?&mess=ok&lang=" . LANG . "&" . $tabControl->ActiveTabParam());
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
        "LINK" => "index?lang=" . LANG,
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
if ($_REQUEST["mess"] == "ok") {
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
        <td>Импорт файла с информацией об:</td>
        <td>
            <select name="XLS_TYPE" class="typeselect">
                <option value="good_img">Картинки товаров</option>
                <option value="group_img">Картинки разделов</option>
                <option value="brand_img">Картинки брендов</option>
                <option value="good_prop">Свойства товаров</option>
            </select>
        </td>
    </tr>

    <?
    $tabControl->Buttons();
    ?>

    <input class="adm-btn-save"
           type="submit" name="import"
           value="Импортировать"
           title="Импортировать"/>
    <?
    // завершаем интерфейс закладок
    $tabControl->End();

    // дополнительное уведомление об ошибках - вывод иконки около поля, в котором возникла ошибка
    $tabControl->ShowWarnings("post_form", $message);

    require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/epilog_admin.php");
    ?>

