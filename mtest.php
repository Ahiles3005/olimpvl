<?php
/**
 * Created by el.
 * @autor: el
 * @pakage: el
 * @version: 0.1 06.07.2021 15:19
 * Date: 06.07.2021
 */

// Сообщение
$message = "Line 1\r\nLine 2\r\nLine 3";

// На случай если какая-то строка письма длиннее 70 символов мы используем wordwrap()
$message = wordwrap($message, 70, "\r\n");

/*// Отправляем
var_dump(mail('maxim@bashtov.net', 'My Subject', $message));*/
