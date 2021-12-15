$(document).ready(function() {
    var MaxSlides,
    MinSlides;
    
    MinSlides = 1;
    MaxSlides = 6;
    
    //  320 960 1280 1560 
    if ($(window).width() >= 1590) {
        MaxSlides = 9;
        //alert(1);
    } else if ($(window).width() >= 1280){
        MaxSlides = 7;
        //alert(2);
    } else if ($(window).width() >= 960){
        MaxSlides = 4;
        //alert(3);
    } else if ($(window).width() >= 320) {
        MaxSlides = 4;
        //alert(4);
    }


    $('.b-brand-carousel__list').bxSlider({
        nextText: '<div class="b-btn__arrow b-btn__arrow--right b-btn-arrow-right"></div>',
        prevText: '<div class="b-btn__arrow b-btn__arrow--left b-btn-arrow-left"></div>',
        pager: false,
        adaptiveHeight: false,
        responsive: false,
        minSlides: MinSlides,
        moveSlides: 1,
        maxSlides: MaxSlides,
        slideWidth: 80,
        slideMargin: 30,
    });
});

