<?
	if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

	if (!CModule::IncludeModule("advertising"))
		return;

	$arComponentParameters = array(
		"PARAMETERS" => array(
			"FILTER"       => array(
				"NAME"				=> "Фильтр",
				"PARENT" 			=> "BASE",
				"TYPE"				=> "STRING",
				"DEFAULT" 			=> "",
			),
			"BY" => array(
				"NAME"				=> "Поле для сортировки",
				"PARENT" 			=> "BASE",
				"TYPE"				=> "STRING",
				"DEFAULT" 			=> "",
			),
			"ORDER" => array(
				"NAME"				=> "Порядок сортировки",
				"PARENT" 			=> "BASE",
				"TYPE"				=> "STRING",
				"DEFAULT" 			=> "",
			),
			"NOINDEX"    => array(
				"NAME"    => "Добавлять в ссылки noindex/nofollow",
				"PARENT"  => "BASE",
				"TYPE"    => "CHECKBOX",
				"DEFAULT" => "N",
			),
			"CACHE_TIME" => array("DEFAULT"=>"0"),
		)
	);