<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->createFrame()->begin("");
?><div class="ajax-h2ofavorites-list"><?


//var_dump($arResult  );
	if(is_array($arResult['ERRORS']['FATAL']) && !empty($arResult['ERRORS']['FATAL'])):?>

		<?foreach($arResult['ERRORS']['FATAL'] as $error):?>
			<?=ShowError($error)?>
		<?endforeach?>

	<?elseif(is_array($arResult["FAVORITES"]) && !empty($arResult['FAVORITES'])):?>

		<?if(is_array($arResult['ERRORS']['NONFATAL']) && !empty($arResult['ERRORS']['NONFATAL'])):?>

			<?foreach($arResult['ERRORS']['NONFATAL'] as $error):?>
				<?=ShowError($error)?>
			<?endforeach?>

		<?endif?>

		<?if($arParams["DISPLAY_TOP_PAGER"]):?>
			<?=$arResult["NAV_STRING"]?><br />
		<?endif;?>
	
		
		
		
	<div	class="b-product b-product--inner">  
		
		<div class="b-product__list"> 
		
		
		
		<?foreach($arResult["FAVORITES"] as $arItem):?>
		<li class="b-product__item">
        
        <div class="b-product__item--remove  mgc-remove-fav" style=""><a data-id="<?=$arItem["ID"]?>" class='mgc-remove-fav-a delete_favorites'  href="#close"><i class="fas fa-window-close"></i></a></div>
        
<div class="b-product__item--name">

<div class="b-product__image-owerflow"><div class="b-product__image-owerflow-horisontal"><a href="<?=$arItem['ELEMENT']['DETAIL_PAGE_URL']?>" class="b-product__item--name"><img class="b-product__item--image" src="<?=$arItem['PICTURE']?>" alt="<?=$arItem['ELEMENT']['NAME']?>"></a></div></div>
<p class="b-product__item-text"><?=$arItem['ELEMENT']['NAME']?></p>
<div class="b-product__item--footer">



                                

  <a href="#add-to-compare" class="b-product__item--list b-product__item--add-compare mgc-add-compare"  type="button" data-id="<?=$arItem["ELEMENT_ID"]?>" title="Сравнить" data-tooltip="right" ></a>




		<div class="b-product__item--price">
								<? if ($arItem["MIN_PRICE"]["VALUE"] != $arItem['MIN_PRICE']['DISCOUNT_VALUE']): ?>
									<span class="b-product__item--discount" data-discount="<?=$arItem["MIN_PRICE"]["DISCOUNT_DIFF_PERCENT"]?>">-<?=$arItem["MIN_PRICE"]["DISCOUNT_DIFF_PERCENT"]?>%</span>
									<span class="b-product__item--priceold-line-through"><span class="b-product__item--priceold" data-price="<?=$arItem["MIN_PRICE"]["VALUE"]?>"><?=$arItem["MIN_PRICE"]["VALUE"]?><span class="b-rouble">q</span></span></span>
									<span class="b-product__item--pricenew b-price-large" data-price="<?=round($arItem["MIN_PRICE"]["DISCOUNT_VALUE"])?>"><?=round($arItem['MIN_PRICE']['DISCOUNT_VALUE'])?><span class="b-rouble">q</span></span>
								<? else: ?>
									<span class="b-product__item--pricenew b-price-large" data-price="<?=round($arItem['MIN_PRICE']['DISCOUNT_VALUE'])?>"><?=round($arItem['MIN_PRICE']['DISCOUNT_VALUE'])?><span class="b-rouble">q</span></span>
								<? endif; ?>
							</div>


</div>


</li>
		
	<?endforeach;?>	
	
	</div>
	</div>
		
		<?if($arParams["DISPLAY_BOTTOM_PAGER"]):?>
			<br /><?=$arResult["NAV_STRING"]?>
		<?endif;?>

	<?else:?>
		В избранном еще нет товаров
	<?endif;?>
</div>

<script>
$(document).ready(function(){

$(".mgc-remove-fav-a").click(function(){
$(this).closest(".b-product__item").remove();
});

});
</script>
