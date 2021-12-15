<?

if(!empty($_SESSION["CATALOG_COMPARE_LIST"][CATALOG_BLOCK_ID])){

$a = count($_SESSION["CATALOG_COMPARE_LIST"][CATALOG_BLOCK_ID]['ITEMS']);

}else{
$a=0;

}
?>





<a href="/compare/" class="btn btn-default navbar-btn navbar-right btn-cmp" data-language="index_comparison" data-toggle="tooltip" data-placement="bottom" title="Сравнение">
<span class="fa-layers fa-fw">
    <i class="fas fa-exchange-alt fa-flip-horizontal"></i>
   <span class="fa-layers-counter fff-shop  cart_counter cnt_compare" style="background:#e90c2d; color:#fff;"><?=$a;?></span>
</span>
</a>
<script>
 $(document).ready(function() {
	 <?if ($a){ ?>
  $(".fff-shop").css('display', 'inline-block');
  
  <? }else{ ?>
   $(".fff-shop").css('display', 'none');
   <? } ?> 
  
 });
</script>
 
