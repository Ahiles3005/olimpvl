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



$adds = [ "PROPERTY_AMOUNT_KOMSOMOLSK_NA_AMURE","PROPERTY_AMOUNT_NAXODKA",'PROPERTY_AMOUNT_ARSENEV','PROPERTY_AMOUNT_USSURIJSK','PROPERTY_AMOUNT_VLADIVOSTOK'];
$arSelect1 = Array("ID", "IBLOCK_ID", "NAME", "DATE_ACTIVE_FROM","CODE","XML_ID","PROPERTY_ARTICUL","IBLOCK_SECTION_ID"


        );

        $arSelect = array_merge($arSelect1,$adds);
$arFilter = Array("IBLOCK_ID"=>1, "ACTIVE_DATE"=>"Y", "ACTIVE"=>"Y","ID"=>$ob['ID']);
  $res_id = CIBlockElement::GetList(Array(), $arFilter, false, Array("nPageSize"=>500000), $arSelect);
$qty = 0;

      while($ar_res = $res_id->GetNextElement()) {
       $arFields = $ar_res->GetFields();


foreach ($adds as $a){
    if($arFields[$a."_VALUE"]==="Y")$qty++;
}



         //         $dbProperties = CIBlock::GetProperties($res_id, Array(), Array("XML_ID" => $ob['ID');
      $external_id = $arFields["NAME"];


 //$arProps = $ar_res->GetProperties();

     // echo $arFields["PROPERTY_ARTICUL_VALUE"]." \t<a href='/bitrix/admin/cat_product_edit.php?IBLOCK_ID=1&type=CATALOG&lang=ru&ID=".$arFields["ID"]."&find_section_section=0&WF=Y'>".$arFields["NAME"]."</a>"."\n<br>";

      }

        if(!$qty) continue;
        $quantity++;
   $arExternal_ID[] = $arFields;
   }

   $out = [];
   foreach ($arExternal_ID as $k=>$fl){
       $out[ $fl['IBLOCK_SECTION_ID'] ][$fl["ID"]] = $fl;
   }
//var_dump($out);

ksort($out);


?>
    <!doctype html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

        <title>NO IMG</title>
          <style>
              .card-body {border: none; background: none;}
          </style>
      </head>
      <body>
<?php

   foreach ($out as $SECTION_ID => $items){
       $nav = CIBlockSection::GetNavChain(1, $SECTION_ID, array(), true);
       echo '<a style="display:block; text-align:left" class="btn btn-default" data-bs-toggle="collapse" href="#collapseExample'.$SECTION_ID.'" role="button" aria-expanded="false" aria-controls="collapseExample'.$SECTION_ID.'">';
       $cname = '';
       foreach ($nav as $arSectionPath){

       $cname .= '<b>'.$arSectionPath['NAME'].'</b>'.' / ';

        //  echo '<pre>';print_r($arSectionPath);echo '</pre>';
       }
            echo $cname;
       echo " ".count($items)." шт.";
echo "</a>";


    ?>
<div class="collapse" id="collapseExample<?=$SECTION_ID?>">
  <div class="card card-body">
      <table class="table table-hover">


       <?
       foreach ($items as $arFields){
       echo "<tr> <td>".$arFields["PROPERTY_ARTICUL_VALUE"]."</td> <td><a href='/bitrix/admin/cat_product_edit.php?IBLOCK_ID=1&type=CATALOG&lang=ru&ID=".$arFields["ID"]."&find_section_section=0&WF=Y'>".$arFields["NAME"]."</a></td><td>".$cname."</td>"."</tr>\n";
       }
         $cname = '';
/* while($nav->ExtractFields("nav_")) {

 }*/
?>
      </table>
  </div>
 </div>

      <?

   }







//echo "<pre>";print_r($arExternal_ID);echo "</pre>";
echo '<br><br>Всего элементов без картинок - '.$quantity;

?>
      <!-- Optional JavaScript; choose one of the two! -->

      <!-- Option 1: Bootstrap Bundle with Popper -->
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>

      <!-- Option 2: Separate Popper and Bootstrap JS -->
      <!--
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>
      -->
    </body>
  </html>
