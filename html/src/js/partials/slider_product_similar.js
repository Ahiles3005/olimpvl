$(document).ready(function() {
    $('.slider-product-similar').bxSlider({
        prevText: '<div class="b-btn__arrow b-btn__arrow--left b-btn-arrow-left"></div>',
        nextText: '<div class="b-btn__arrow b-btn__arrow--right b-btn-arrow-right"></div>',
        pager: false,
        minSlides: 1,
        moveSlides: 1,
        maxSlides: 4,
        slideWidth: 295,
        //slideMargin: 19,
    });
    if ($(window).width() >= 1600 && $('.b-goods__item--similar').length > 4) {
        $(".b-goods__similar").addClass("b-goods__similar--arrow");
    }
    if ($(window).width() < 1600 && $('.b-goods__item--similar').length > 3) {
        $(".b-goods__similar").addClass("b-goods__similar--arrow");
    }
    if ($(window).width() < 1280 && $('.b-goods__item--similar').length > 3) {
        $(".b-goods__similar").addClass("b-goods__similar--arrow");
    }
});