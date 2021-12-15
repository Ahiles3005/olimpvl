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
    array("DIV" => "edit1", "TAB" => "Экспорт изображений", "ICON" => "main_user_edit", "TITLE" => "Экспорт изображений"),
    array("DIV" => "edit2", "TAB" => "Экспорт свойств товаров", "ICON" => "main_user_edit", "TITLE" => "Экспорт свойств товаров"),
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
    ($export != "") // проверка нажатия кнопки
    &&
    $POST_RIGHT == "W"          // проверка наличия прав на запись для модуля
) {

    $class = new XlsExport();
    $SECTION_ID = $_REQUEST["SECTION_ID"];
    if ($SECTION_ID != "none") {
        $class->initExport("good_prop", $SECTION_ID, ($_REQUEST["SKIP_PROP"] == "add") ? false : true);
        $result = "Done";
    } elseif ($XLS_TYPE) {
        switch ($XLS_TYPE) {
            case "good_img":
            case "group_img":
            case "brand_img":
            $class->initExport($XLS_TYPE);
            $result = "Done";
                break;
            default:
                $result = "ERROR";
        }
    }

    if ($result != "ERROR") {
        if ($result == "Done")
            LocalRedirect("/bitrix/admin/xls_export_index.php?&mess=ok&lang=" . LANG . "&" . $tabControl->ActiveTabParam());
        else
            LocalRedirect("/bitrix/admin/xls_export_index.php?&mess=ok&lang=" . LANG . "&" . $tabControl->ActiveTabParam());
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

require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_admin_after.php");

$aMenu = array(
    array(
        "TEXT" => "Административная панель",
        "TITLE" => "Возврат к административной панели",
        "LINK" => "index?lang=" . LANG,
        "ICON" => "btn_list",
    )
);

$context = new CAdminContextMenu($aMenu);

$context->Show();
?>

<?
if ($_REQUEST["mess"] == "ok") {
    $strRes = "Экспорт успешно завершен";
    CAdminMessage::ShowMessage(array("MESSAGE" => $strRes, "TYPE" => "OK"));
}

if ($message)
    echo $message->Show();
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
        <td>Экспорт файла с информацией об:</td>
        <td>
            <select name="XLS_TYPE" class="typeselect">
                <option value="good_img">Картинки товаров</option>
                <option value="group_img">Картинки разделов</option>
                <option value="brand_img">Картинки брендов</option>
            </select>
        </td>

    </tr>


    <?
    $tabControl->BeginNextTab();
    ?>
    <tr>
        <td>Выберите раздел для экспорта:</td>
        <td>
            <select name="SECTION_ID">
                <option value="none" selected>Выберите раздел</option>
                <option value="0">Все разделы</option>
                <?
                $obSection = new CIBlockSection;
                $arFilter = Array('IBLOCK_ID' => IBLOCK_ID_CATALOG, "ELEMENT_SUBSECTIONS" => "N");
                $db_list = $obSection->GetList(Array("NAME" => "ASC"), $arFilter, true);
                while ($ar_result = $db_list->GetNext()) {
                    if ($ar_result["ELEMENT_CNT"] > 0) echo "<option value=\"" . $ar_result['ID'] . "\">" . $ar_result['NAME'] . "(" . $ar_result['ID'] . ")" . "</option>";
                }
                ?>
            </select>
        </td>
    </tr>
    <tr>
        <td>Добавить лист с описанием свойств:</td>
        <td>
            <input name = "SKIP_PROP" value = "add" type="checkbox" checked>
        </td>
    </tr>
    <?
    $tabControl->Buttons();
    ?>

    <input class="adm-btn-save"
           type="submit" name="export"
           value="Экспортировать"
           title="Экспортировать"/>
    <?
    // завершаем интерфейс закладок
    $tabControl->End();
    ?>

    <?
    // дополнительное уведомление об ошибках - вывод иконки около поля, в котором возникла ошибка
    $tabControl->ShowWarnings("post_form", $message);

    require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/epilog_admin.php");
    ?>

