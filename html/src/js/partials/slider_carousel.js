if ($('.bxslider-tab').length > 0) {
    if ($('.tab-carousel-indicator--desctop li').length > 3)
        var infiniteLoop = true;
    else
        var infiniteLoop = false;

    var product_slider_desctop = $('.js-picture-slider-desctop').bxSlider({
        mode: 'vertical',
        moveSlides: 1,
        minSlides: 4,
        maxSlides: 10,
        slideWidth: 100,
        slideMargin: 5,
        pager: false,
        infiniteLoop: infiniteLoop
    });
    var product_slider_mobile = $('.js-picture-slider-mobile').bxSlider({
        mode: 'horizontal',
        moveSlides: 1,
        minSlides: 4,
        maxSlides: 10,
        slideWidth: 100,
        slideMargin: 10,
        pager: false,
        infiniteLoop: infiniteLoop
    });
}