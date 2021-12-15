<?
    require($_SERVER['DOCUMENT_ROOT'].'/bitrix/header.php');
$APPLICATION->SetTitle(""); 
    
  
  if(empty($_SESSION['okkka'])){
  
  $_SESSION['okkka'] = 1;
  
  
 echo "NO OKKAA";
  
  }else{
  echo "YES OKKAA"; 
  
  }
  
  ?>
</p><? require($_SERVER['DOCUMENT_ROOT'].'/bitrix/footer.php'); ?>