$(document).ready(function() {
	if ($(window).width() < 960 && $('.b-events').length > 0) {
		
		var as = $('.b-events > div');
		as.wrapAll('<ul class="b-events__list"></ul>');
		var count = 0;
		var li;
		as.each(function(i, obj) {
		  if (count % 3 == 0)
		  {
			$('.b-events ul').append('<li class="b-events__item"></li>');
			li = $($('.b-events ul li')[count/3]);
		  }
		  li.append(obj);
		  count++;
		});
		
		var bxWidth = $(window).width() - 20;
		
		$('.b-events ul').bxSlider({
			pager: false,
			adaptiveHeight: true,
			responsive: true,
			minSlides: 1,
			controls: false,
			moveSlides: 1,
			maxSlides: 1,
			slideWidth: bxWidth,
			slideMargin: 20,
		});
		
	} 

});

