if ($(window).width() < 960) {
	if ($('.b-product-info--mobile').length <= 0) {
		$('.b-product-info__compare').find('.b-checkbox__item--product').addClass('b-checkbox__item--mobile');
		var compare = $('.b-product-info__compare');

		$('.b-product-main')
			.removeClass('b-product-main')
			.addClass('b-product-info')
			.addClass('b-product-info--mobile')
			.prepend($('.b-product-info__extra'))
			.prepend($('.b-product-info__favorite'))
			.prepend($('.b-product-info__bonus'))

			.prepend($('.b-product-info__form'))
			.prepend($('#tab-carousel-product').addClass('carousel-product-mobile'))
			.prepend($('.b-product-info__head'));

		$('.b-product-info__form form').prepend($('.b-product-info__price').addClass('b-product-info__price--mobile').append(compare));

		$('.b-product-info--mobile').siblings('.b-product-info').remove();
		//$('.b-product-info>.b-product-info__head').detach().prependTo('.b-product-main');
	}

} else {
	if ($('.b-product-info--mobile').length > 0) {
		$('.b-product-info__compare').find('.b-checkbox__item--product').removeClass('b-checkbox__item--mobile');
		var compare = $('.b-product-info__compare');
		$('.b-product-info__action').prepend(compare);
		$('.b-product-info--mobile').removeClass('b-product-info').removeClass('b-product-info--mobile').addClass('b-product-main');
		$('#tab-carousel-product').removeClass('carousel-product-mobile');
		$('.b-product-main').after('<div class="b-product-info"></div>');

		$('.b-product-info')
			.append($('.b-product-info__head'))
			.append($('.b-product-info__form'))
			.append($('.b-product-info__bonus'))
			.append($('.b-product-info__favorite'))
			.append($('.b-product-info__extra'));

		$('.b-product-info__form form').append($('.b-product-info__price').removeClass('b-product-info__price--mobile'));
	}
}