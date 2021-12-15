$('body').on('mouseover', 'a[data-tooltip]', function() {
	
	if ($('.b-tooltip').length > 0) return;
	$(this).append('<span class="b-tooltip">' + $(this).attr('title') + '</span>');
	
	$(this).on('mouseout', function() {
		
		$('.b-tooltip').remove();
		
	});
});