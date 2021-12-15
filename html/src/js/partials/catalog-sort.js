$('.js-sort-by').change(function(){
	var params  = {
		'sortField'   : $(this).val(),
		'sortOrder'   : $(this).find(':selected').attr('data-order'),
	};

	setAttr(params, '');
});