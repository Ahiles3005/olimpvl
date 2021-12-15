$('.b-catalog-navigation__select-smallest').change(function(){
	var params  = {
		'catalogNav' : $(this).val(),
	};

	setAttr(params, '#nav_mobile');
});