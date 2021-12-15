<?
	if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

	if (isset($_REQUEST["catalogFilter"]) && !empty($_REQUEST["catalogFilter"])) {
		$breadcrumbTitle = ($_REQUEST["catalogFilter"] == "rus") ? "А - Я" : $_REQUEST["catalogFilter"];
		$breadcrumbLink = $APPLICATION->GetCurPageParam("catalogFilter=".$_REQUEST["catalogFilter"]."", array("catalogFilter"));
		$APPLICATION->AddChainItem($breadcrumbTitle, $breadcrumbLink);
	}