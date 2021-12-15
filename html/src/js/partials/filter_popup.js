$('.b-filterbuttons__categories').on('click', function() {
	
	if ($('.b-category').parents('.b-filterbuttons__container-categories').length == 0) {
		$('.b-filterbuttons__container-categories').append($('.b-category').detach());
	}
		
	if ($(this).hasClass('b-filterbuttons__categories--active')) {
		$('.b-category').css('display', 'none');
		$(this).removeClass('b-filterbuttons__categories--active');
	} else {
		$(this).addClass('b-filterbuttons__categories--active');
		$('.b-category').css('display', 'block');
	}
	
	
});

$('.b-filterbuttons__productfilter').on('click', function() {
	
	if ($('.b-filter').parents('.b-filterbuttons__container-productfilter').length == 0) {
		$('.b-filterbuttons__container-productfilter').append($('.b-filter').detach());
	}

	if ($(this).hasClass('b-filterbuttons__productfilter--active')) {
		$('.b-filter').css('display', 'none');
		$(this).removeClass('b-filterbuttons__productfilter--active');
	} else {
		$(this).addClass('b-filterbuttons__productfilter--active');
		$('.b-filter').css('display', 'block'); 
	}
	
	
});