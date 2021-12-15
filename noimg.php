<?php 

define("NO_KEEP_STATISTIC", true);
define("NOT_CHECK_PERMISSIONS", true);
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");
CModule::IncludeModule('iblock');

$quantity = 0;
$arExternl_ID = array();

$arSelect = Array("IBLOCK_ID", "ID");
$arFilter = Array("IBLOCK_ID"=>1,"PROPERTY_PICTURES" => false); // Здесь надо поставить ваш ID инфоблока.
$res = CIBlockElement::GetList(Array("ID"=>"ASC"), $arFilter, false, false, $arSelect);
while($ob = $res->Fetch())
    {
        $quantity++;
      
        
        $arSelect = Array("ID", "IBLOCK_ID", "NAME", "DATE_ACTIVE_FROM","CODE","XML_ID","PROPERTY_ARTICUL");
$arFilter = Array("IBLOCK_ID"=>1, "ACTIVE_DATE"=>"Y", "ACTIVE"=>"Y","ID"=>$ob['ID']);
  $res_id = CIBlockElement::GetList(Array(), $arFilter, false, Array("nPageSize"=>500000), $arSelect);

  
      while($ar_res = $res_id->GetNextElement()) {
       $arFields = $ar_res->GetFields();
         //         $dbProperties = CIBlock::GetProperties($res_id, Array(), Array("XML_ID" => $ob['ID');
      $external_id = $arFields["NAME"];
      
      
 //$arProps = $ar_res->GetProperties();

      echo $arFields["PROPERTY_ARTICUL_VALUE"]." \t<a href='/bitrix/admin/cat_product_edit.php?IBLOCK_ID=1&type=CATALOG&lang=ru&ID=".$arFields["ID"]."&find_section_section=0&WF=Y'>".$arFields["NAME"]."</a>"."\n<br>";

      }
   $arExternal_ID[] = $external_id;     
   }
sort($arExternal_ID);





//echo "<pre>";print_r($arExternal_ID);echo "</pre>";
echo '<br><br>Всего элементов без картинок - '.$quantity;
