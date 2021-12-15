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

$isAjax = false;
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
	$isAjax = (
		(isset($_POST['ajax_action']) && $_POST['ajax_action'] == 'Y')
		|| (isset($_POST['compare_result_reload']) && $_POST['compare_result_reload'] == 'Y')
	);
}

$templateData = array(
	'TEMPLATE_THEME' => $this->GetFolder().'/themes/'.$arParams['TEMPLATE_THEME'].'/style.css',
	'TEMPLATE_CLASS' => $arParams['TEMPLATE_THEME']
);

?>


<style>
.btn {padding:6px 12px; display:inline-block; text-decoration:none!important}
.btn-active {background:#e3e3e3; text-decoration:none!important; color:#333!important}
</style>
<div class="mb-3 d-flex align-items-center">
		<div class="pr-2">
			<small class="text-muted"><?= GetMessage("CATALOG_SHOWN_CHARACTERISTICS") ?>:</small>
		</div>
		<div class="pr-2">
			<a style="color:#333"
				class="btn btn-sm <? echo (!$arResult["DIFFERENT"] ? 'btn-active' : 'btn-secondary'); ?>"
				href="<? echo $arResult['COMPARE_URL_TEMPLATE'].'DIFFERENT=N'; ?>"
				rel="nofollow"><?=GetMessage("CATALOG_ALL_CHARACTERISTICS")?></a>
		</div>
		<div class="pr-2">
			<a style="color:#333"
				class="btn btn-sm <? echo ($arResult["DIFFERENT"] ? 'btn-active' : 'btn-secondary'); ?>"
				href="<? echo $arResult['COMPARE_URL_TEMPLATE'].'DIFFERENT=Y'; ?>"
				rel="nofollow"><?=GetMessage("CATALOG_ONLY_DIFFERENT")?></a>
		</div>
	</div>
    
<style>
.panel-heading {background:#f9f9f9} .panel-heading a {text-decoration:none; color:#000; padding:10px; display:block; border:1px solid #dcdcdc} .panel-heading a:hover {/*text-decoration:underline;*/ background:#f5f5f5}  .bx-red.catalog-compare .catalog-compare-filter {background:f9f9f9} .catalog-compare-filter-title {display:none}
</style>
<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingOne">
      <h4 class="panel-title" style="margin:0px">
        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="афдыу" aria-controls="collapseOne">
          Параметры сравнения
        </a>
      </h4>
    </div>
    <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">

<div class="catalog-compare mb-4 bx-<? echo $templateData['TEMPLATE_CLASS']; ?>" id="bx_catalog_compare_block"><?
	if ($isAjax)
	{
		$APPLICATION->RestartBuffer();
	}
	?>
	<div class="mb-3 d-flex align-items-center" style="display:none">
		<div class="pr-2">
			<small class="text-muted"><?= GetMessage("CATALOG_SHOWN_CHARACTERISTICS") ?>:</small>
		</div>
		<div class="pr-2">
			<a
				class="btn btn-sm <? echo (!$arResult["DIFFERENT"] ? 'btn-secondary' : 'btn-active'); ?>"
				href="<? echo $arResult['COMPARE_URL_TEMPLATE'].'DIFFERENT=N'; ?>"
				rel="nofollow"><?=GetMessage("CATALOG_ALL_CHARACTERISTICS")?></a>
		</div>
		<div class="pr-2">
			<a
				class="btn btn-sm <? echo ($arResult["DIFFERENT"] ? 'btn-secondary' : 'btn-active'); ?>"
				href="<? echo $arResult['COMPARE_URL_TEMPLATE'].'DIFFERENT=Y'; ?>"
				rel="nofollow"><?=GetMessage("CATALOG_ONLY_DIFFERENT")?></a>
		</div>
	</div>
	<? if (!empty($arResult["ALL_FIELDS"]) || !empty($arResult["ALL_PROPERTIES"]) || !empty($arResult["ALL_OFFER_FIELDS"]) || !empty($arResult["ALL_OFFER_PROPERTIES"]))
	{
		?>
		<div class="catalog-compare-filter p-3 mb-3">
			<div class="catalog-compare-filter-title"><?=GetMessage("CATALOG_COMPARE_PARAMS")?></div>
			<div class="row">
				<? if (!empty($arResult["ALL_FIELDS"]))
				{
					foreach ($arResult["ALL_FIELDS"] as $propCode => $arProp)
					{
						if (!isset($arResult['FIELDS_REQUIRED'][$propCode]))
						{
							?>
							<div class="col-12 col-lg-3 col-md-4">
								<span class="form-check" onclick="CatalogCompareObj.MakeAjaxAction('<?=CUtil::JSEscape($arProp["ACTION_LINK"])?>')">
									<input type="checkbox" class="form-check-input" id="PF_<?=$propCode?>"<? echo ($arProp["IS_DELETED"] == "N" ? ' checked="checked"' : ''); ?>>
									<label class="form-check-label" for="PF_<?=$propCode?>"><?=GetMessage("IBLOCK_FIELD_".$propCode)?></label>
								</span>
							</div>
							<?
						}
					}
				}

				if (!empty($arResult["ALL_OFFER_FIELDS"]))
				{
					foreach($arResult["ALL_OFFER_FIELDS"] as $propCode => $arProp)
					{
						?>
						<div class="col-12 col-lg-3 col-md-4">
							<span class="form-check" onclick="CatalogCompareObj.MakeAjaxAction('<?=CUtil::JSEscape($arProp["ACTION_LINK"])?>')">
								<input type="checkbox" class="form-check-input" id="OF_<?=$propCode?>"<? echo ($arProp["IS_DELETED"] == "N" ? ' checked="checked"' : ''); ?>>
								<label class="form-check-label" for="OF_<?=$propCode?>"><?=GetMessage("IBLOCK_OFFER_FIELD_".$propCode)?></label>
							</span>
						</div>
						<?
					}
				}

				if (!empty($arResult["ALL_PROPERTIES"]))
				{
					foreach($arResult["ALL_PROPERTIES"] as $propCode => $arProp)
					{
						?>
						<div class="col-12 col-lg-3 col-md-4">
							<span class="form-check" onclick="CatalogCompareObj.MakeAjaxAction('<?=CUtil::JSEscape($arProp["ACTION_LINK"])?>')">
								<input type="checkbox" class="form-check-input" id="PP_<?=$propCode?>"<?echo ($arProp["IS_DELETED"] == "N" ? ' checked="checked"' : '');?>>
								<label class="form-check-label" for="PP_<?=$propCode?>"><?=$arProp["NAME"]?></label>
							</span>
						</div>
						<?
					}
				}

				if (!empty($arResult["ALL_OFFER_PROPERTIES"]))
				{
					foreach($arResult["ALL_OFFER_PROPERTIES"] as $propCode => $arProp)
					{
						?>
						<div class="col-12 col-lg-3 col-md-4">
							<span class="form-check" onclick="CatalogCompareObj.MakeAjaxAction('<?=CUtil::JSEscape($arProp["ACTION_LINK"])?>')">
								<input type="checkbox" class="form-check-input" id="OP_<?=$propCode?>"<? echo ($arProp["IS_DELETED"] == "N" ? ' checked="checked"' : ''); ?>>
								<label class="form-check-label" for="OP_<?=$propCode?>"><?=$arProp["NAME"]?></label>
							</span>
						</div>
						<?
					}
				}
				?>
			</div>
		</div>
		<?
	}
	?>

      </div>
    </div>
  </div>
</div> 
    
    
<style>
.table-bordered td,.table-bordered th{border:1px solid #ddd!important} .table{width:100%;max-width:100%;margin-bottom:20px}.table>tbody>tr>td,.table>tbody>tr>th,.table>tfoot>tr>td,.table>tfoot>tr>th,.table>thead>tr>td,.table>thead>tr>th{/*padding:8px;*/line-height:1.42857143;vertical-align:top;border-top:1px solid #ddd}.table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #ddd}.table>caption+thead>tr:first-child>td,.table>caption+thead>tr:first-child>th,.table>colgroup+thead>tr:first-child>td,.table>colgroup+thead>tr:first-child>th,.table>thead:first-child>tr:first-child>td,.table>thead:first-child>tr:first-child>th{border-top:0}.table>tbody+tbody{border-top:2px solid #ddd}.table .table{background-color:#fff}.table-condensed>tbody>tr>td,.table-condensed>tbody>tr>th,.table-condensed>tfoot>tr>td,.table-condensed>tfoot>tr>th,.table-condensed>thead>tr>td,.table-condensed>thead>tr>th{padding:5px}.table-bordered{border:1px solid #ddd}.table-bordered>tbody>tr>td,.table-bordered>tbody>tr>th,.table-bordered>tfoot>tr>td,.table-bordered>tfoot>tr>th,.table-bordered>thead>tr>td,.table-bordered>thead>tr>th{border:1px solid #ddd}.table-bordered>thead>tr>td,.table-bordered>thead>tr>th{border-bottom-width:2px}.table-striped>tbody>tr:nth-of-type(odd){background-color:#f9f9f9}.table-hover>tbody>tr:hover{background-color:#f5f5f5}table col[class*=col-]{position:static;display:table-column;float:none}table td[class*=col-],table th[class*=col-]{position:static;display:table-cell;float:none}.table>tbody>tr.active>td,.table>tbody>tr.active>th,.table>tbody>tr>td.active,.table>tbody>tr>th.active,.table>tfoot>tr.active>td,.table>tfoot>tr.active>th,.table>tfoot>tr>td.active,.table>tfoot>tr>th.active,.table>thead>tr.active>td,.table>thead>tr.active>th,.table>thead>tr>td.active,.table>thead>tr>th.active{background-color:#f5f5f5}.table-hover>tbody>tr.active:hover>td,.table-hover>tbody>tr.active:hover>th,.table-hover>tbody>tr:hover>.active,.table-hover>tbody>tr>td.active:hover,.table-hover>tbody>tr>th.active:hover{background-color:#e8e8e8}.table>tbody>tr.success>td,.table>tbody>tr.success>th,.table>tbody>tr>td.success,.table>tbody>tr>th.success,.table>tfoot>tr.success>td,.table>tfoot>tr.success>th,.table>tfoot>tr>td.success,.table>tfoot>tr>th.success,.table>thead>tr.success>td,.table>thead>tr.success>th,.table>thead>tr>td.success,.table>thead>tr>th.success{background-color:#dff0d8}.table-hover>tbody>tr.success:hover>td,.table-hover>tbody>tr.success:hover>th,.table-hover>tbody>tr:hover>.success,.table-hover>tbody>tr>td.success:hover,.table-hover>tbody>tr>th.success:hover{background-color:#d0e9c6}.table>tbody>tr.info>td,.table>tbody>tr.info>th,.table>tbody>tr>td.info,.table>tbody>tr>th.info,.table>tfoot>tr.info>td,.table>tfoot>tr.info>th,.table>tfoot>tr>td.info,.table>tfoot>tr>th.info,.table>thead>tr.info>td,.table>thead>tr.info>th,.table>thead>tr>td.info,.table>thead>tr>th.info{background-color:#d9edf7}.table-hover>tbody>tr.info:hover>td,.table-hover>tbody>tr.info:hover>th,.table-hover>tbody>tr:hover>.info,.table-hover>tbody>tr>td.info:hover,.table-hover>tbody>tr>th.info:hover{background-color:#c4e3f3}.table>tbody>tr.warning>td,.table>tbody>tr.warning>th,.table>tbody>tr>td.warning,.table>tbody>tr>th.warning,.table>tfoot>tr.warning>td,.table>tfoot>tr.warning>th,.table>tfoot>tr>td.warning,.table>tfoot>tr>th.warning,.table>thead>tr.warning>td,.table>thead>tr.warning>th,.table>thead>tr>td.warning,.table>thead>tr>th.warning{background-color:#fcf8e3}.table-hover>tbody>tr.warning:hover>td,.table-hover>tbody>tr.warning:hover>th,.table-hover>tbody>tr:hover>.warning,.table-hover>tbody>tr>td.warning:hover,.table-hover>tbody>tr>th.warning:hover{background-color:#faf2cc}.table>tbody>tr.danger>td,.table>tbody>tr.danger>th,.table>tbody>tr>td.danger,.table>tbody>tr>th.danger,.table>tfoot>tr.danger>td,.table>tfoot>tr.danger>th,.table>tfoot>tr>td.danger,.table>tfoot>tr>th.danger,.table>thead>tr.danger>td,.table>thead>tr.danger>th,.table>thead>tr>td.danger,.table>thead>tr>th.danger{background-color:#f2dede}.table-hover>tbody>tr.danger:hover>td,.table-hover>tbody>tr.danger:hover>th,.table-hover>tbody>tr:hover>.danger,.table-hover>tbody>tr>td.danger:hover,.table-hover>tbody>tr>th.danger:hover{background-color:#ebcccc}.table-responsive{min-height:.01%;overflow-x:auto}@media screen and (max-width:767px){.table-responsive{width:100%;margin-bottom:15px;overflow-y:hidden;-ms-overflow-style:-ms-autohiding-scrollbar;border:1px solid #ddd}.table-responsive>.table{margin-bottom:0}.table-responsive>.table>tbody>tr>td,.table-responsive>.table>tbody>tr>th,.table-responsive>.table>tfoot>tr>td,.table-responsive>.table>tfoot>tr>th,.table-responsive>.table>thead>tr>td,.table-responsive>.table>thead>tr>th{white-space:nowrap}.table-responsive>.table-bordered{border:0}.table-responsive>.table-bordered>tbody>tr>td:first-child,.table-responsive>.table-bordered>tbody>tr>th:first-child,.table-responsive>.table-bordered>tfoot>tr>td:first-child,.table-responsive>.table-bordered>tfoot>tr>th:first-child,.table-responsive>.table-bordered>thead>tr>td:first-child,.table-responsive>.table-bordered>thead>tr>th:first-child{border-left:0}.table-responsive>.table-bordered>tbody>tr>td:last-child,.table-responsive>.table-bordered>tbody>tr>th:last-child,.table-responsive>.table-bordered>tfoot>tr>td:last-child,.table-responsive>.table-bordered>tfoot>tr>th:last-child,.table-responsive>.table-bordered>thead>tr>td:last-child,.table-responsive>.table-bordered>thead>tr>th:last-child{border-right:0}.table-responsive>.table-bordered>tbody>tr:last-child>td,.table-responsive>.table-bordered>tbody>tr:last-child>th,.table-responsive>.table-bordered>tfoot>tr:last-child>td,.table-responsive>.table-bordered>tfoot>tr:last-child>th{border-bottom:0}}
.table td {border:none}
.btn.btn-primary {display:inline-block; padding:6px 12px; background:#bb2821; color:#fff; margin-top:10px}
.btn.btn-primary:hover {background:#a8241e; text-decoration:none}
.catalog-compare-item-title {display:block}
</style>

	<div class="catalog-compare-table table-responsive">
		<table class="table table-striped table-hover table-chart">
			<? if (!empty($arResult["SHOW_FIELDS"]))
			{
				foreach ($arResult["SHOW_FIELDS"] as $code => $arProp)
				{
					$showRow = true;
					if ((!isset($arResult['FIELDS_REQUIRED'][$code]) || $arResult['DIFFERENT']) && count($arResult["ITEMS"]) > 1)
					{
						$arCompare = array();
						foreach($arResult["ITEMS"] as $arElement)
						{
							$arPropertyValue = $arElement["FIELDS"][$code];
							if (is_array($arPropertyValue))
							{
								sort($arPropertyValue);
								$arPropertyValue = implode(" / ", $arPropertyValue);
							}
							$arCompare[] = $arPropertyValue;
						}
						unset($arElement);
						$showRow = (count(array_unique($arCompare)) > 1);
					}
					if ($showRow)
					{
					
					
						
					if(($code)=='DETAIL_PICTURE') continue;
					
					if(($code)=='PREVIEW_PICTURE') continue;
					if(($code)=='PICTURES') continue;
					
						?>
						<tr>
							<th><?=GetMessage("IBLOCK_FIELD_".$code)?></th>
							<?
							
							//var_dump($arResult["ITEMS"]['PICTURES']);
							
							foreach($arResult["ITEMS"] as $arElement)
							{
								?>
								<td>
									<? switch($code)
									{
										case "NAME":
											?>
											<a class="catalog-compare-item-title" href="<?=$arElement["DETAIL_PAGE_URL"]?>"><?=$arElement[$code]?></a>
											
										<?	if(isset($arElement["DISPLAY_PROPERTIES"]['PICTURES']["VALUE"][0])){
								
								?>
								<div class="b-product__image-owerflow-horisontal">
								<img style="" class="b-product__item--image" src="<?=CFile::GetPath($arElement["DISPLAY_PROPERTIES"]['PICTURES']['VALUE'][0])?>" / >
								</div>
								<?
								
								}
								?>
								
								
								
											<? if($arElement["CAN_BUY"]): ?>
											<!--	<div class="pt-2">
													<a class="btn btn-primary btn-sm" href="<?=$arElement["BUY_URL"]?>" rel="nofollow"><?=GetMessage("CATALOG_COMPARE_BUY"); ?></a>
												</div>-->
											<? elseif(!empty($arResult["PRICES"]) || is_array($arElement["PRICE_MATRIX"])): ?>
												<div class="pt-2"><?=GetMessage("CATALOG_NOT_AVAILABLE")?></div>
											<?endif;
											break;
										case "PREVIEW_PICTURE":
										case "DETAIL_PICTURE":
										case 'PICTURES':
											
											
											//var_dump($arElement["FIELDS"][$code]);
											
											if (!empty($arElement["FIELDS"][$code]) && is_array($arElement["FIELDS"][$code])):?>
												<a href="<?=$arElement["DETAIL_PAGE_URL"]?>">
													<img
														border="0"
														src="<?=$arElement["FIELDS"][$code]["SRC"]?>"
														class="catalog-compare-item-image"
														alt="<?=$arElement["FIELDS"][$code]["ALT"]?>"
														title="<?=$arElement["FIELDS"][$code]["TITLE"]?>"
													/>
												</a>
											<?endif;
											break;
										default:
											echo $arElement["FIELDS"][$code];
											break;
									}
									?>
								</td>
								<?
								
								
								
								//var_dump($arElement["DISPLAY_PROPERTIES"]['PICTURES']["VALUE"]);
							}
							
							
							unset($arElement);
							
							//var_dump(CFile::GetPath($arResult["SHOW_PROPERTIES"]['PICTURES']['VALUE'][0]));
							
							
							
							?>
						</tr>
						<?
					}
				}
			}

			if (!empty($arResult["SHOW_OFFER_FIELDS"]))
			{
				foreach ($arResult["SHOW_OFFER_FIELDS"] as $code => $arProp)
				{
					$showRow = true;
					if ($arResult['DIFFERENT'])
					{
						$arCompare = array();
						foreach($arResult["ITEMS"] as $arElement)
						{
							$Value = $arElement["OFFER_FIELDS"][$code];
							if(is_array($Value))
							{
								sort($Value);
								$Value = implode(" / ", $Value);
							}
							$arCompare[] = $Value;
						}
						unset($arElement);
						$showRow = (count(array_unique($arCompare)) > 1);
					}
					if ($showRow)
					
					
					{
					
				
						?>
						<tr>
							<th><?=GetMessage("IBLOCK_OFFER_FIELD_".$code)?></th>
							<?foreach($arResult["ITEMS"] as $arElement)
							{
								?>
								<td>
									<? switch ($code)
									{
										case 'PREVIEW_PICTURE':
										case 'DETAIL_PICTURE':
									
										case 'PICTURES':
									
										
											if (!empty($arElement["OFFER_FIELDS"][$code]) && is_array($arElement["OFFER_FIELDS"][$code]))
											{
												?>
												<img
													border="0"
													src="<?= $arElement["OFFER_FIELDS"][$code]["SRC"] ?>"
													width="auto"
													height="150"
													alt="<?= $arElement["OFFER_FIELDS"][$code]["ALT"] ?>" title="<?= $arElement["OFFER_FIELDS"][$code]["TITLE"] ?>"
												/><?
											}
											break;
										default:
											?><?=(is_array($arElement["OFFER_FIELDS"][$code])? implode("/ ", $arElement["OFFER_FIELDS"][$code]): $arElement["OFFER_FIELDS"][$code]);
											break;
									}
									?>
								</td>
								<?
							}
							unset($arElement);
							?>
						</tr>
						<?
					}
				}
			}
			?>

			<tr>
				<th><?=GetMessage('CATALOG_COMPARE_PRICE');?></th>
				<? foreach ($arResult["ITEMS"] as $arElement)
				{
					if (isset($arElement['MIN_PRICE']) && is_array($arElement['MIN_PRICE']))
					{
					
											?>
						<td> 
						
						<?php
						
// 						echo "*";
// 					var_dump($arElement['MIN_PRICE']);
// 					echo "*";

//var_dump($arElement['PRICE_MATRIX']);




						?>
						
						
						
		<div class="b-product__item--pric1e">
								<? if ($arElement["MIN_PRICE"]["VALUE"] != $arElement['MIN_PRICE']['DISCOUNT_VALUE']): ?>
									<span class="b-product__item--discount" data-discount="<?=$arElement["MIN_PRICE"]["DISCOUNT_DIFF_PERCENT"]?>">-<?=$arElement["MIN_PRICE"]["DISCOUNT_DIFF_PERCENT"]?>%</span>
									<span class="b-product__item--priceold-line-through"><span class="b-product__item--priceold" data-price="<?=$arElement["MIN_PRICE"]["VALUE"]?>"><?=$arElement["MIN_PRICE"]["VALUE"]?><span class="b-rouble">q</span></span></span>
									<span class="b-product__item--pricenew b-price-large" data-price="<?=round($arElement["MIN_PRICE"]["DISCOUNT_VALUE"])?>"><?=round($arElement['MIN_PRICE']['DISCOUNT_VALUE'])?><span class="b-rouble">q</span></span>
								<? else: ?>
									<span class="b-product__item--pricenew b-price-large" data-price="<?=round($arElement['MIN_PRICE']['DISCOUNT_VALUE'])?>"><?=round($arElement['MIN_PRICE']['DISCOUNT_VALUE'])?><span class="b-rouble">q</span></span>
								<? endif; ?>
							</div>

							
							
						
						</td>
						<?
					}
					elseif (!empty($arElement['PRICE_MATRIX']) && is_array($arElement['PRICE_MATRIX']))
					{
						?>
						<td><?
						$matrix = $arElement['PRICE_MATRIX'];
						$rows = $matrix['ROWS'];
						$rowsCount = count($rows);
						if ($rowsCount > 0)
						{
							?><table class="compare-price"><?
							if (count($rows) > 1)
							{
								foreach ($rows as $index => $rowData)
								{
									if (empty($matrix['MIN_PRICES'][$index]))
										continue;
									if ($rowData['QUANTITY_FROM'] == 0)
										$rowTitle = GetMessage('CP_TPL_CCR_RANGE_TO', array('#TO#' => $rowData['QUANTITY_TO']));
									elseif ($rowData['QUANTITY_TO'] == 0)
										$rowTitle = GetMessage('CP_TPL_CCR_RANGE_FROM', array('#FROM#' => $rowData['QUANTITY_FROM']));
									else
										$rowTitle = GetMessage(
											'CP_TPL_CCR_RANGE_FULL',
											array('#FROM#' => $rowData['QUANTITY_FROM'], '#TO#' => $rowData['QUANTITY_TO'])
										);
									echo '<tr><td>'.$rowTitle.'</td><td>';
									echo \CCurrencyLang::CurrencyFormat($matrix['MIN_PRICES'][$index]['PRICE'], $matrix['MIN_PRICES'][$index]['CURRENCY']);
									echo '</td></tr>';
									unset($rowTitle);
								}
								unset($index, $rowData);
							}
							else
							{
								$currentPrice = current($matrix['MIN_PRICES']);
								echo '<tr><td class="simple">'.\CCurrencyLang::CurrencyFormat($currentPrice['PRICE'], $currentPrice['CURRENCY']).'</td></tr>';
								unset($currentPrice);
							}
							?></table><?
						}
						unset($rowsCount, $rows, $matrix);
						?></td><?
					}
					else
					{
						?><td>&nbsp;</td><?
					}
				}
				unset($arElement);
				?>
			</tr>

			<? if (!empty($arResult["SHOW_PROPERTIES"]))
			{
				foreach ($arResult["SHOW_PROPERTIES"] as $code => $arProperty)
				{
				
				
				
				if($code=="PICTURES") continue;
					$showRow = true;
					if ($arResult['DIFFERENT'])
					{
						$arCompare = array();
						foreach($arResult["ITEMS"] as $arElement)
						{
							$arPropertyValue = $arElement["DISPLAY_PROPERTIES"][$code]["VALUE"];
							if (is_array($arPropertyValue))
							{
								sort($arPropertyValue);
								$arPropertyValue = implode(" / ", $arPropertyValue);
							}
							$arCompare[] = $arPropertyValue;
						}
						unset($arElement);
						$showRow = (count(array_unique($arCompare)) > 1);
					}

					if ($showRow)
					{
						?>
						<tr>
							<th><?=$arProperty["NAME"]?></th>
							<?foreach($arResult["ITEMS"] as $arElement)
							{
								?>
								<td>
									<?=(is_array($arElement["DISPLAY_PROPERTIES"][$code]["DISPLAY_VALUE"])? implode("/ ", $arElement["DISPLAY_PROPERTIES"][$code]["DISPLAY_VALUE"]): $arElement["DISPLAY_PROPERTIES"][$code]["DISPLAY_VALUE"])?>
								</td>
							<?
							}
							unset($arElement);
							?>
						</tr>
					<?
					}
				}
			}

			if (!empty($arResult["SHOW_OFFER_PROPERTIES"]))
			{
				foreach($arResult["SHOW_OFFER_PROPERTIES"] as $code=>$arProperty)
				{
					$showRow = true;
					if ($arResult['DIFFERENT'])
					{
						$arCompare = array();
						foreach($arResult["ITEMS"] as $arElement)
						{
							$arPropertyValue = $arElement["OFFER_DISPLAY_PROPERTIES"][$code]["VALUE"];
							if(is_array($arPropertyValue))
							{
								sort($arPropertyValue);
								$arPropertyValue = implode(" / ", $arPropertyValue);
							}
							$arCompare[] = $arPropertyValue;
						}
						unset($arElement);
						$showRow = (count(array_unique($arCompare)) > 1);
					}
					if ($showRow)
					{
						?>
						<tr>
							<th><?=$arProperty["NAME"]?>1</th>
							<? foreach($arResult["ITEMS"] as $arElement)
							{
								?>
								<td>
									<?=(is_array($arElement["OFFER_DISPLAY_PROPERTIES"][$code]["DISPLAY_VALUE"])? implode("/ ", $arElement["OFFER_DISPLAY_PROPERTIES"][$code]["DISPLAY_VALUE"]): $arElement["OFFER_DISPLAY_PROPERTIES"][$code]["DISPLAY_VALUE"])?>
								</td>
								<?
							}
							unset($arElement);
							?>
						</tr>
						<?
					}
				}
			}
			?>
			<tr>
				<th></th>
				<?foreach($arResult["ITEMS"] as $arElement)
				{
					?>
					<td>
						<a class="text-danger mgc-del-compare" data-id="<?=$arElement['ID']?>" data-href="<?=CUtil::JSEscape($arElement['~DELETE_URL'])?>"  onclick="CatalogCompareObj.delete('<?=CUtil::JSEscape($arElement['~DELETE_URL'])?>');" href="javascript:void(0)"><?=GetMessage("CATALOG_REMOVE_PRODUCT")?></a>
					</td>
					<?
				}
				unset($arElement);
				?>
			</tr>
		</table>
</div>
<?
if ($isAjax)
{
	die();
}
?>
<script type="text/javascript">
	var CatalogCompareObj = new BX.Iblock.Catalog.CompareClass("bx_catalog_compare_block", '<?=CUtil::JSEscape($arResult['~COMPARE_URL_TEMPLATE']); ?>');
	
	$(document).ready(function(){
	
	$(".mgc-del-compare").click(function(){
	
	location.href=$(this).data("href");
	
	})
	
	})
	
</script>