<?
	if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
	$keyCity = (empty($_COOKIE['KEY_CITY'])) ? Olimp\City::getDefaultCityCode() : $_COOKIE['KEY_CITY'];
	
	    setcookie(
'KEY_CITY', 
$keyCity,
time()+365*3600*24,
"/"
);


?>
<div class="b-sort b-sort__header">

	
<?php 

global $USER;
if (/*$USER->IsAuthorized()*/ 1 ) {
?>
	
<style>
.dd-root {padding:0; margin:0} .dd-root li {list-style-type:none; padding: 0 14px 0 .5em} .dd-root li.dropdown {margin:0; cursor:default; font-weight:bold}
.dd-root .dropdown-menu {display:block; opacity:0; visibility:hidden; background:#e3e3e3; border-radius:0px; border:none}
.dd-root li.dropdown:hover > ul {opacity:1; visibility:visible}
.dd-root .dropdown-menu li {margin-bottom:5px; font-weight:normal; padding:0px}
.dd-root .dropdown-menu a {display:block; white-space:nowrap; padding: 0 .5em; text-decoration:none; font-size:inherit} .dd-root .dropdown-menu a:hover {background:#e3e3e3; color:#cc2226}
.dd-root li.dropdown::after {content: ''; display: block; position: absolute; right: 0; margin-top:-1px; top: 50%; border: 4px solid transparent; border-top-color: #000; border-bottom: 0;}
</style>


<? if (!empty($arResult['ITEMS'])): ?>
			
			    <? foreach ($arResult['ITEMS'] as $arItem){
			    
			    if(empty($selName)){
			    $selName =  $arItem['NAME']; 
			    }
			    
			    if ($keyCity == $arItem['PROPERTIES']['key']['VALUE']){
			    
			    $selName = $arItem['NAME'];  
			    $selId = $keyCity; 
			    			    
			    };
			    
			    
			    
			    
			    };
			    
			    
			    
			    
			    
			    ?>
		
<? endif; ?>
		
		
		
<ul class="dd-root">
<li class="dropdown"><span id="mgc-cur-city"><?=$selName?></span>
<ul class="dropdown-menu">
  <? foreach ($arResult['ITEMS'] as $arItem){ ?>
<li><a class="mgc-sel-city" href="/sel_city.php?city=<?=$arItem['PROPERTIES']['key']['VALUE']?>" data-val="<?=$arItem['PROPERTIES']['key']['VALUE']?>;<?=$arItem['PROPERTIES']['latitude']['VALUE']?>;<?=$arItem['PROPERTIES']['longitude']['VALUE']?>"><?=$arItem['NAME']?></a></li>

<?php } ?>
</ul>
</li>
</ul>
<?php }else{
?>


    <div class="b-sort__select">
		<? if (!empty($arResult['ITEMS'])): ?>
			<select class="select-header" id="bitrix_search_location">
			    <? foreach ($arResult['ITEMS'] as $arItem): ?>
			        <option <?if ($keyCity == $arItem['PROPERTIES']['key']['VALUE']): $selName = $arItem['NAME'];   ?>selected<?endif;?>
			            value="<?=$arItem['PROPERTIES']['key']['VALUE']?>;<?=$arItem['PROPERTIES']['latitude']['VALUE']?>;<?=$arItem['PROPERTIES']['longitude']['VALUE']?>">
			            <?=$arItem['NAME']?>
			        </option>
			    <? endforeach; ?>
			</select>
		<? endif; ?>
	</div>


<?

} ?>
	
	

	
	
</div>