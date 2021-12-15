<?
require_once(dirname(__FILE__)."/../main.php");
ini_set('memory_limit','6144M');
CModule::IncludeModule('iblock'); 

$index = \Bitrix\Iblock\PropertyIndex\Manager::createIndexer(1);

$index->startIndex();

$index->continueIndex(0); // создание без ограничения по времени

$index->endIndex();



echo " test";