/**
 * Открытие и закрытие попапов и модальных окон
 *
 * Использование:
 * <a href="#popupId" data-popup="open">Text</a>
 *
 * <div id="popupId" style="display: none;">Popup content</div>
 *
 * Закроет все попапы и модальные окна
 * <button type="button" data-popup="close">Text</button>
 */
(function() {
    var settings = {
        padding: 0,
        margin: [10, 27, 10, 10],
        transitionIn: 'none',
        transitionOut: 'none',
        speedIn	: 600, 
        speedOut: 200, 
        overlayShow: true,
        helpers: {
            title : null,
            overlay : {
                showEarly: false,
                locked: true,
                autoCenter: false,
                css : {'background' : 'rgba(0, 0, 0, .5)'}
            }
        },
        afterShow: function() {
            $('.fancybox-wrap').has('.b-popup-sign-up').css('max-width', '700px');

            $('.fancybox-wrap').has('.b-popup-avaiable').css('max-width', '900px');
            
            var img = $('.tab-carousel-indicator__carousel-inner .item.active img');
            $('.fancybox-wrap').has('.b-popup-product').css('max-width', img.attr('width') + 'px');
            
            /*Решение бага с перемещением fancybox-wrap из fancybox-overlay при открытии вложенных попапов*/
            $('html').addClass('fancybox-margin fancybox-lock');
            $('.fancybox-overlay').append($('.fancybox-wrap'));
        },
        afterClose: function() {
            if ($('#tab10').length)
                $('a[href="#tab10"]').tab('show');
            if ($('#tab12').length)
                $('a[href="#tab12"]').tab('show');
        }
    };

    if ($('[data-popup="open"]').length) {
        $('[data-popup="open"]').fancybox(settings);
        $('a[href="#popup-product"]').click(function() {
            var img = $('.tab-carousel-indicator__carousel-inner .item.active img');
            var src = img.attr('src');
            $('#popup-product #product-detail-image').attr('src', src);
        });
    }

    if ($('[data-popup="close"]').length) {
        $('[data-popup="close"]').on('click', function () {
            $.fancybox.close();
        });
    }
})();



