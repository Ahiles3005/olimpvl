<?
	if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

	if (isset($_REQUEST["brandName"]) && !empty($_REQUEST["brandName"])) {
		$breadcrumbTitle = ($_REQUEST["brandName"] == "rus") ? "А - Я" : $_REQUEST["brandName"];
		$breadcrumbLink = $APPLICATION->GetCurPageParam("brandName=".$_REQUEST["brandName"]."", array("brandName"));
		$APPLICATION->AddChainItem($breadcrumbTitle, $breadcrumbLink);
	}