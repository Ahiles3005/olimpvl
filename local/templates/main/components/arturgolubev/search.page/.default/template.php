<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();
global $APPLICATION;

if($arResult["DEBUG"]["SHOW"] == 'Y')
{
	echo '
	Debug Info:
	<pre>';
		echo 'Type: '; print_r($arResult["DEBUG"]["TYPE"]); echo "\r\n";
		echo 'Mode: '; print_r($arResult["DEBUG"]["SMARTMODE"]); echo "\r\n";
		echo 'Max count: '; print_r($arResult["DEBUG"]["TOP_COUNT"]); echo "\r\n";

		echo 'F List: '; print_r($arResult["DEBUG"]["RESULT_WORDS"]); echo "\r\n";
		echo 'Q List: '; print_r($arResult["DEBUG"]["Q"]); echo "\r\n";
		echo 'Times: '; print_r($arResult["DEBUG"]["TIMES"]); echo "\r\n";
	echo '</pre>';

	if(false)
	{
		foreach($arResult["SEARCH"] as $arItem){
			?>
			<div class="">
				<?echo '<pre>'; print_r($arItem["TITLE_SF"].' ('.$arItem["TITLE"].') ['.$arItem["ITEM_ID"].']'); echo '</pre>';?>
				<?echo '<pre>'; print_r('CUSTOM_RANK = '.$arItem["CUSTOM_RANK"].'; TITLE_RANK = '.$arItem["TITLE_RANK"]); echo '</pre>';?>
			</div>
			<?
		}
	}
}
?>

<div class="bx-ag-search-page search-page <?=$arResult["VISUAL_PARAMS"]["THEME_CLASS"]?>">
	<form class="search-page-form" action="" method="get" style="display:flex;">
		<input placeholder="<?=$arParams["INPUT_PLACEHOLDER"]?>" type="text" name="q" value="<?=$arResult["REQUEST"]["QUERY"]?>" size="50" />

		<?if($arParams["SHOW_WHERE"]):?>
			<select name="where">
				<option value=""><?=GetMessage("SEARCH_ALL")?></option>
				<?foreach($arResult["DROPDOWN"] as $key=>$value):?>
					<option value="<?=$key?>"<?if($arResult["REQUEST"]["WHERE"]==$key) echo " selected"?>><?=$value?></option>
				<?endforeach?>
			</select>
		<?endif;?>

		<input type="submit" value="<?=GetMessage("SEARCH_GO")?>" />
		<input type="hidden" name="how" value="<?echo $arResult["REQUEST"]["HOW"]=="d"? "d": "r"?>" />

		<?if($arParams["SHOW_WHEN"]):?>
			<script>
			var switch_search_params = function()
			{
				var sp = document.getElementById('search_params');
				var flag;
				var i;

				if(sp.style.display == 'none')
				{
					flag = false;
					sp.style.display = 'block'
				}
				else
				{
					flag = true;
					sp.style.display = 'none';
				}

				var from = document.getElementsByName('from');
				for(i = 0; i < from.length; i++)
					if(from[i].type.toLowerCase() == 'text')
						from[i].disabled = flag;

				var to = document.getElementsByName('to');
				for(i = 0; i < to.length; i++)
					if(to[i].type.toLowerCase() == 'text')
						to[i].disabled = flag;

				return false;
			}
			</script>
			<br /><a class="search-page-params" href="#" onclick="return switch_search_params()"><?echo GetMessage('CT_BSP_ADDITIONAL_PARAMS')?></a>
			<div id="search_params" class="search-page-params" style="display:<?echo $arResult["REQUEST"]["FROM"] || $arResult["REQUEST"]["TO"]? 'block': 'none'?>">
				<?$APPLICATION->IncludeComponent(
					'bitrix:main.calendar',
					'',
					array(
						'SHOW_INPUT' => 'Y',
						'INPUT_NAME' => 'from',
						'INPUT_VALUE' => $arResult["REQUEST"]["~FROM"],
						'INPUT_NAME_FINISH' => 'to',
						'INPUT_VALUE_FINISH' =>$arResult["REQUEST"]["~TO"],
						'INPUT_ADDITIONAL_ATTR' => 'size="10"',
					),
					null,
					array('HIDE_ICONS' => 'Y')
				);?>
			</div>
		<?endif?>
	</form>

	<?if(isset($arResult["REQUEST"]["ORIGINAL_QUERY"])):
		?>
		<div class="search-language-guess">
			<?echo GetMessage("CT_BSP_KEYBOARD_WARNING", array("#query#"=>'<a href="'.$arResult["ORIGINAL_QUERY_URL"].'">'.$arResult["REQUEST"]["ORIGINAL_QUERY"].'</a>'))?>
		</div><br /><?
	endif;?>

	<?/* if($arResult["VISUAL_PARAMS"]["CLARIFY"] && count($arResult["CLARIFY_WORDS"]) > 1):?>
		<div class="ag-spage-clarify-list">
			<div class="ag-spage-clarify-title"><?=GetMessage("AG_SPAGE_CLARIFY_TITLE");?></div>
			<?foreach($arResult["CLARIFY_WORDS"] as $word):
			$word = strtolower($word);
			?>
				<a class="ag-spage-clarify-item" href="<?=$APPLICATION->GetCurPageParam('q='.$word, array("q"))?>"><?=$word?></a>
			<?endforeach;?>
		</div>
	<?endif; */?>

	<?if($arResult["REQUEST"]["QUERY"] === false && $arResult["REQUEST"]["TAGS"] === false):?>
		<?// clear //?>
	<?elseif($arResult["ERROR_CODE"]!=0):?>
		<p><?=GetMessage("SEARCH_ERROR")?></p>
		<?ShowError($arResult["ERROR_TEXT"]);?>
		<p><?=GetMessage("SEARCH_CORRECT_AND_CONTINUE")?></p>
		<br /><br />
	<?elseif(count($arResult["SEARCH"])>0):?>
		<div class="search-view-default">
			<?if($arParams["DISPLAY_TOP_PAGER"] != "N"):?>
				<?echo $arResult["NAV_STRING"]?><br />
			<?endif;?>

			<?foreach($arResult["SEARCH"] as $k=>$arItem):
				$arElement = $arResult["ELEMENTS"][$arItem["ITEM_ID"]];
				// echo '<pre>'; print_r($arElement); echo '</pre>';
			?>
				<div class="<?if($k==0) echo 'search-item-first'?> search-item">
					<?if(is_array($arItem["PICTURE"])):?>
						<div class="search-preview"><img src="<?=$arItem["PICTURE"]["src"]?>"></div>
					<?endif;?>

					<div class="search-description">
						<div class="search-title">
							<a href="<?echo $arItem["URL"]?>"><?echo $arItem["TITLE_FORMATED"]?></a>

							<div class="search-price">
								<?foreach($arItem["PRICES"] as $code=>$arPrice)
								{
									if ($arPrice["MIN_PRICE"] != "Y")
										continue;

									if($arPrice["CAN_ACCESS"])
									{
										if($arPrice["DISCOUNT_VALUE"] < $arPrice["VALUE"]) { ?>
											<span class="bx_item_block_item_price">
												<span class="bx_price_new">
													<?=$arPrice["PRINT_DISCOUNT_VALUE"]?>
												</span>
												<span class="bx_price_old"><?=$arPrice["PRINT_VALUE"]?></span>
											</span>
										<? } else { ?>
											<span class="bx_item_block_item_price bx_item_block_item_price_only_one">
												<span class="bx_price_new"><?=$arPrice["PRINT_VALUE"]?></span>
											</span>
										<? }
									}
									if ($arPrice["MIN_PRICE"] == "Y")
										break;
								} ?>
							</div>
						</div>

						<div class="search-previewtext"><?echo $arItem["BODY_FORMATED"]?></div>

						<?if(!empty($arElement["PROPS"])):?>
							<div class="search-propslist">
								<?foreach($arElement["PROPS"] as $prop):
								if(empty($prop["VALUE"])) continue;
								?>
									<div class="search-propsitem">
										<span class="search-propsitem-name"><?=$prop["NAME"]?>:</span> <span class="search-propsitem-value"><?=implode(', ', $prop["VALUE"])?></span>
									</div>
								<?endforeach;?>
							</div>
						<?endif;?>

						<?if (
							$arParams["SHOW_RATING"] == "Y"
							&& strlen($arItem["RATING_TYPE_ID"]) > 0
							&& $arItem["RATING_ENTITY_ID"] > 0
						):?>
							<div class="search-item-rate"><?
								$APPLICATION->IncludeComponent(
									"bitrix:rating.vote", $arParams["RATING_TYPE"],
									Array(
										"ENTITY_TYPE_ID" => $arItem["RATING_TYPE_ID"],
										"ENTITY_ID" => $arItem["RATING_ENTITY_ID"],
										"OWNER_ID" => $arItem["USER_ID"],
										"USER_VOTE" => $arItem["RATING_USER_VOTE_VALUE"],
										"USER_HAS_VOTED" => $arItem["RATING_USER_VOTE_VALUE"] == 0? 'N': 'Y',
										"TOTAL_VOTES" => $arItem["RATING_TOTAL_VOTES"],
										"TOTAL_POSITIVE_VOTES" => $arItem["RATING_TOTAL_POSITIVE_VOTES"],
										"TOTAL_NEGATIVE_VOTES" => $arItem["RATING_TOTAL_NEGATIVE_VOTES"],
										"TOTAL_VALUE" => $arItem["RATING_TOTAL_VALUE"],
										"PATH_TO_USER_PROFILE" => $arParams["~PATH_TO_USER_PROFILE"],
									),
									$component,
									array("HIDE_ICONS" => "Y")
								);?>
							</div>
						<?endif;?>
						<p><?=GetMessage("SEARCH_ID")?> <span class="copy-click" data-mess="Код скопирован"><?=$arElement["ID"]?></span></p>
						<div class="clear"></div>
					</div>
				</div>
			<?endforeach;?>

			<?if($arParams["DISPLAY_BOTTOM_PAGER"] != "N"):?>
				<?echo $arResult["NAV_STRING"]?><br />
			<?endif;?>

			<div class="search-change-how">
				<?if($arResult["REQUEST"]["HOW"]=="d"):?>
					<a href="<?=$arResult["URL"]?>&amp;how=r<?echo $arResult["REQUEST"]["FROM"]? '&amp;from='.$arResult["REQUEST"]["FROM"]: ''?><?echo $arResult["REQUEST"]["TO"]? '&amp;to='.$arResult["REQUEST"]["TO"]: ''?>"><?=GetMessage("SEARCH_SORT_BY_RANK")?></a>&nbsp;|&nbsp;<b><?=GetMessage("SEARCH_SORTED_BY_DATE")?></b>
				<?else:?>
					<b><?=GetMessage("SEARCH_SORTED_BY_RANK")?></b>&nbsp;|&nbsp;<a href="<?=$arResult["URL"]?>&amp;how=d<?echo $arResult["REQUEST"]["FROM"]? '&amp;from='.$arResult["REQUEST"]["FROM"]: ''?><?echo $arResult["REQUEST"]["TO"]? '&amp;to='.$arResult["REQUEST"]["TO"]: ''?>"><?=GetMessage("SEARCH_SORT_BY_DATE")?></a>
				<?endif;?>
			</div>
		</div>
	<?else:?>
		<h2><?= GetMessage("SEARCH_NOTHING_TO_FOUND") ?></h2>
		<p style="margin-bottom: 40px;"><?= GetMessage("SEARCH_NOTHING_TO_FOUND_2", array("#CATALOG_LINK#" => "/catalog/")) ?></p>
		
		<div class="search-section-block">
			<p class="search-section-block__title">Популярные категории</p>
			<? $APPLICATION->IncludeComponent(
                "bitrix:catalog.section.list",
                "popular",
                Array(
                    "ADD_SECTIONS_CHAIN" => "N",
                    "CACHE_GROUPS" => "Y",
                    "CACHE_TIME" => "36000000",
                    "CACHE_TYPE" => "A",
                    "COMPOSITE_FRAME_MODE" => "A",
                    "COMPOSITE_FRAME_TYPE" => "AUTO",
                    "COUNT_ELEMENTS" => "Y",
                    "IBLOCK_ID" => "1",
                    "IBLOCK_TYPE" => "CATALOG",
                    "SECTION_CODE" => "",
                    "SECTION_FIELDS" => array("PICTURE", ""),
                    "SECTION_ID" => "",
                    "SECTION_URL" => "",
                    "SECTION_USER_FIELDS" => array("", ""),
                    "TOP_DEPTH" => "5",
                    "UF_FILTER" => array(
                        "!UF_POPULAR_SECTION"=>false
                    )
                )
            );?>
		</div>
		
		<div class="search-section-block">
			<p class="search-section-block__title">Товары со скидкой</p>
			<?
			$keyCity = (empty($_COOKIE['KEY_CITY'])) ? Olimp\City::getDefaultCityCode() : $_COOKIE['KEY_CITY'];
			if (!$keyCity) $keyCity = 'vladivostok';
			$APPLICATION->IncludeComponent(
                "kontora:element.list",
                "popular",
                Array(
                    "CATALOG_PAGE" => "search",
                    "CATALOG_TYPE" => "tile",
                    "CITY_CODE" => $keyCity,
                    "ELEMENT_COUNT" => "12",
                    "FILTER" => array("!PROPERTY_DISCOUNT" => false),
                    "HTML_TYPE" => array(''),
                    "IBLOCK_ID" => IBLOCK_ID_CATALOG,
                    "ITEM_TEMPLATE" => "",
                    "MAIN_TYPE" => "sale",
                    "ORDER" => array('id' => 'asc'),
                    "PAGER_PARAMS_NAME" => "",
                    "PROPS" => array("CODE" => "PICTURES"),
                    "SELECT" => array("IBLOCK_ID", "ID", 'NAME', 'DETAIL_PAGE_URL', 'PREVIEW_PICTURE', "PROPERTY_MIN_PRICE_" . $keyCity, "PROPERTY_NEW", "PROPERTY_BEST_PRICE", "PROPERTY_BEST", "PROPERTY_DISCOUNT", "PROPERTY_ARTICUL"),
                    "SHOW_NAV_BLOCK" => "N"
                )
            ); ?>
		</div>
	<?endif;?>
</div>

<?if($arResult["VISUAL_PARAMS"]["THEME_COLOR"]):?>
	<style>
		.search-page .search-item, .search-page input[type=text], .search-page input[type=submit], .ag-spage-clarify-item, .ag-spage-clarify-item:hover {
			border-color: <?=$arResult["VISUAL_PARAMS"]["THEME_COLOR"]?> !important;
		}
		.search-page input[type=submit] {
			background-color: <?=$arResult["VISUAL_PARAMS"]["THEME_COLOR"]?> !important;
		}
	</style>
<?endif;?>
