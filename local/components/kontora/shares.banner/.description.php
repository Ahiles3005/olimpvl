<?
    if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

    $arComponentDescription = array(
        "NAME"        => 'Список баннеров для раздела',
        "DESCRIPTION" => 'Выводит список баннеров одного типа для одного раздела',
        "ICON"        => "/images/banner.gif",
        "CACHE_PATH"  => "Y",
        "PATH"        => array(
            "ID"    => "service",
            "CHILD" => array(
                "ID"   => "advertising",
                "NAME" => 'Реклама'
            )
        ),
    );
?>