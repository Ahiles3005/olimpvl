$(document).ready(function() {
    $('.slider-product-recent').bxSlider({
        prevText: '<div class="b-btn__arrow b-btn__arrow--left b-btn-arrow-left"></div>',
        nextText: '<div class="b-btn__arrow b-btn__arrow--right b-btn-arrow-right"></div>',
        pager: false,
        minSlides: 2,
        moveSlides: 0,
        maxSlides: 80,
        slideWidth: 190,
        slideMargin: 16,
    });
    if ($(window).width() >= 1600 && $('.b-goods__item--recent').length > 7) {
        $(".b-goods__recent").addClass("b-goods__recent--arrow");
    }
    if ($(window).width() < 1600 && $('.b-goods__item--recent').length > 7) {
        $(".b-goods__recent").addClass("b-goods__recent--arrow");
    }
    if ($(window).width() < 1400 && $('.b-goods__item--recent').length > 6) {
        $(".b-goods__recent").addClass("b-goods__recent--arrow");
    }
    if ($(window).width() < 1280 && $('.b-goods__item--recent').length > 4) {
        $(".b-goods__recent").addClass("b-goods__recent--arrow");
    }
    if ($(window).width() < 960 && $('.b-goods__item--recent').length > 4) {
        $(".b-goods__recent").addClass("b-goods__recent--arrow");
    }
});