<?


	if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

	$LIKE_Y = '<a class="b-product__item--add-favorites" href="javascript: void(0);" title="В избранное" data-tooltip="right" style="display: none"></a>';//2 спринт
	$LIKE_N = '<a class="b-product__item--add-favorites b-product__item--add-favorites--active" href="javascript: void(0);" title="В избранном" data-tooltip="right"></a>';
?>

<span id="bx-ilike-button-<?=htmlspecialcharsbx($arResult['VOTE_ID'])?>">
	<span class="bx-ilike-left-wrap <?=($arResult['USER_HAS_VOTED'] == 'N'? '': 'bx-you-like')?>">
		<span class="bx-ilike-text">
			<?=($arResult['USER_HAS_VOTED'] == 'N') ? $LIKE_Y : $LIKE_N;?>
		</span>
	</span>
	<span class="bx-ilike-right-wrap" style = "display:none;">
		<span class="bx-ilike-right">
			<?=htmlspecialcharsEx($arResult['TOTAL_VOTES'])?>
		</span>
	</span>
</span>

<script type="text/javascript">

/*
	BX.ready(function() {
		if (!window.RatingLike && top.RatingLike)
			RatingLike = top.RatingLike;
		RatingLike.Set(
			'<?=CUtil::JSEscape($arResult['VOTE_ID'])?>',
			'<?=CUtil::JSEscape($arResult['ENTITY_TYPE_ID'])?>',
			'<?=IntVal($arResult['ENTITY_ID'])?>',
			'<?=CUtil::JSEscape($arResult['VOTE_AVAILABLE'])?>',
			'<?=$USER->GetId()?>',
			{
				'LIKE_Y' : '<?=(CUtil::JSEscape($LIKE_N))?>',
				'LIKE_N' : '<?=(CUtil::JSEscape($LIKE_Y))?>',
				'LIKE_D' : '<?=(CUtil::JSEscape($LIKE_Y))?>'
			},
			'standart',
			'<?=CUtil::JSEscape($arResult['PATH_TO_USER_PROFILE'])?>'
		);

		if (typeof(RatingLikePullInit) == 'undefined') {
			RatingLikePullInit = true;
			BX.addCustomEvent("onPullEvent-main", function(command,params) {
				if (command == 'rating_vote') {
					RatingLike.LiveUpdate(params);
				}
			});
		}
	});
	
	*/
</script>


