(function ($) {
    /**
     * глобальные переменные, которые используются многократно
     */
    var global = {
        // время для анимаций
        animationTime: 200,
        animationLongTime: 1500,

        // контрольные точки адаптива
        wdDesktopXxl: 1919,
        wdDesktopXl: 1599,
        wdDesktopLg: 1279,
        wdDesktop: 1023,
        wdTabletLg: 959,
        wdTabletMd: 767,
        wdTabletSm: 639,
        wdPhone: 479,

        // проверка на ios
        isIos: navigator.userAgent.match(/(iPod|iPhone|iPad)/)
    };


    /**
     * Подключение js partials
     */
    @@include('partials/add_to_favorite.js')
    @@include('partials/catalog-navigation-select.js')
    @@include('partials/catalog-sort.js')
    @@include('partials/change_catalog_view.js')
    @@include('partials/collapse.js')
    @@include('partials/color_list.js')
    @@include('partials/compare-product-slider.js')
    @@include('partials/dropkick.js')
    @@include('partials/fancybox_img.js')
    @@include('partials/filter_popup.js')
    @@include('partials/form_elem_styled.js')
    @@include('partials/geo.js')
    @@include('partials/jquery-ui.js')
    @@include('partials/jquery.mCustomScrollbar.js')
    @@include('partials/jquery-placeholder.js')
    @@include('partials/jquery.ui.slider.js')
    @@include('partials/map.js')
    @@include('partials/pagination_count.js')
    @@include('partials/popups.js')
    @@include('partials/product_count.js')
    @@include('partials/product_detail.js')
    @@include('partials/range.js')
    @@include('partials/show_more.js')
    @@include('partials/slider_brand_recent.js')
    @@include('partials/slider_carousel.js')
    @@include('partials/slider_product.js')
    @@include('partials/slider_product_recent.js')
    @@include('partials/slider_product_recommended.js')
    @@include('partials/slider_product_similar.js')
    @@include('partials/sort_select.js')
    @@include('partials/sorter.js')
    @@include('partials/swiper-brand-catalog.js')
    @@include('partials/tab_switcher.js')
    @@include('partials/tooltip.js')
    @@include('partials/validation.js')
    @@include('partials/visibility_control.js')
    @@include('partials/product-detail-mobile.js')
    @@include('partials/checkout.js')
    @@include('partials/custom_scrollbar.js')

    $(window).load(function () {
        // стилизация элементов формы
        //$('select').styleSelectField();
        $('input[type="file"]').styleFileField();
        $('input[data-check="checkbox"], input[data-check="radio"]').styledCheck();

        $('.b-tabs').tabSwitcher();

        visibilityControl();

        $("#slider-brand").carousel();
    });

    var resizeTimer;
    function MobileContentResize(){
        clearTimeout(resizeTimer);
        /**
         * Отрабатывает после завершения события ресайза
         */
        resizeTimer = setTimeout(function () {
            @@include('partials/product-detail-mobile.js')
        }, 250);
    }
    $(window).resize(function (e) {
        MobileContentResize();
    });
    MobileContentResize();

    $('#myTab a').click(function (e) {
        e.preventDefault();

        $(this).tab('show');
    });

    //$('.selectpicker').selectpicker();

    $(".select-header").dropkick({

        change: function () {
            console.log(this);
            var key = this.value.split(';')[0];
            $.cookie('KEY_CITY', key, { expires: 365, path: '/' });
            window.location.reload();
        },
        mobile: true
    })

    $(".b-my-orders__item--open").click(function () {
        //$(".b-my-orders__info").slideToggle("slow");
        $(this).parent().parent().parent().find(".b-my-orders__info").slideToggle("slow");
        $(this).toggleClass("active");
        return false;
    });

    // скрытие/показ поиска в мобильной версии
    $(".b-header-mobile__search").click(function () {
        $(".b-header-mobile__list").addClass("hidden");
        $(".b-header-mobile__search-list").addClass("show");
        return false;
    });

    $(".b-header-mobile__search-list--close").click(function () {
        $(".b-header-mobile__search-list").removeClass("show");
        $(".b-header-mobile__list").removeClass("hidden");
        return false;
    });

    // выпадающее меню в мобильной версии
    $(".b-header-mobile__menu").click(function () {
        $(".b-header-mobile__menu-dropdown").slideToggle("slow");
        return false;
    });

    $(".js-modile-menu-link-level-one").click(function () {
        $(this).parent().addClass("active");
        $(".js-mobile-menu-level-two.js-mobile-menu-level-one").removeClass("js-mobile-menu-level-one");
        $(this).parent().find(".b-header-mobile__menu--section").addClass("show");
        $(".b-header-mobile__menu--nav").addClass("show");
        $('.b-header-mobile__menu--item-category:not(.active)').css('display', 'none');
        return false;
    });

    $(".js-backwards-two").click(function () {
        $(".b-header-mobile__menu--section, .b-header-mobile__menu--nav").removeClass("show");
        $(".js-mobile-menu-level-two").addClass("js-mobile-menu-level-one");
        $(".b-header-mobile__menu--item-category").css('display', 'block');
        $('.b-header-mobile__menu--item.active').removeClass('active');
        return false;
    });

    $(".b-tab__accordion--name").click(function () {
        $(this).parent(".b-tab__accordion--item").toggleClass("active");
        return false;
    });

    $(".js-modile-menu-link-level-two").click(function () {
        var elem_id = $(this).attr('id');
        $('#level3_' + elem_id).removeClass("hidden");
        $('#level3_' + elem_id).find(".b-header-mobile__menu--item-category").css('display', 'block');
        $('#level3_' + elem_id).find(".b-header-mobile__menu--section").css('display', 'block');
        $(".js-mobile-menu-level-two").removeClass("show");
        $(".js-mobile-menu-level-two").addClass("hidden");
        return false;
    });

    $(".js-modile-menu-link-level-three").click(function () {
        $(this).parents(".js-mobile-menu-level-three").addClass("hidden");
        $(".js-mobile-menu-level-two").removeClass("hidden");
        $(".js-mobile-menu-level-two").addClass("show");
        $(".b-header-mobile__menu--nav").addClass("show");
        $('.b-header-mobile__menu--item-category:not(.active)').css('display', 'none');
        $(".b-header-mobile__menu--section, .b-header-mobile__menu--nav").addClass("show");
        return false;
    });

    $(".js-modile-menu-link-level-categories").click(function () {
        $(this).parents(".js-mobile-menu-level-three").addClass("hidden");
        $(".js-mobile-menu-level-two").removeClass("hidden");
        $(".js-mobile-menu-level-two").addClass("show");
        $(".b-header-mobile__menu--nav").addClass("show");
        $('.b-header-mobile__menu--item-category:not(.active)').css('display', 'none');
        $(".b-header-mobile__menu--section, .b-header-mobile__menu--nav").addClass("show");
        $(".b-header-mobile__menu--section, .b-header-mobile__menu--nav").removeClass("show");
        $(".js-mobile-menu-level-two").addClass("js-mobile-menu-level-one");
        $(".b-header-mobile__menu--item-category").css('display', 'block');
        $('.b-header-mobile__menu--item.active').removeClass('active');
        return false;
    });

    $(".js-nav__see-link").click(function () {
        $(this).parents(".b-nav-column__list").addClass("active");
        return false;
    });

    $('[data-toggle="tooltip"]').tooltip()

    $(function(){
        $(document).click(function(event) {
            if ($(event.target).closest(".b-header-mobile__menu-dropdown").length) return;
            if ($(".b-header-mobile__menu-dropdown").css("display") != "none") $(".b-header-mobile__menu-dropdown").slideToggle("slow");
        });
    });

    $('[data-action="add-review"]').click(function() {
        var parent = $(this).closest('.b-personal-information__archives-product--item'),
            review = $('[data-review="true"]', parent);
        
        parent.toggleClass('active');
        
        if (parent.hasClass('active')) {
            review.attr('data-rules', 'req');
        } else {
            review.removeAttr('data-rules');
        }
        
        return false;
    });

    $(function() {
        $('#b-datepicker__input').datepicker();
    });

    var li_count = $('.b-brand-list--index li').length;
    $('.b-brand-list--index').css('width', li_count * 255/2 - 56);

    if ($('.js_substribe').length){
        $('.js_substribe').on('click',function(){
            var email;
            $(".popup-substribe-text").html("Отправка запроса");
            if ($(this).prev('[type="email"]').length){//форма на главной
                email = $(this).prev('[type="email"]').val()
            }else{//форма в футере
                email = $('.js_footer_substr').val()
            }

            $.post('/ajax/csubscriptionadd.php', {
                action: 'add_sub',
                EMAIL: email
            }, function (data) {
                $(".popup-substribe-text").html(data);
                console.log(data);
            }, 'html');
            //return false;
        });
    }

    if ($('.js_filter_clear').length){
        $('.js_filter_clear').on('click',function(){
            $("#del_filter").click();
        });
    }

    $('.b-popup-avaiable__button--not-avaiable').prop('disabled', true);
    
    /*Подключаем маски всем телефонным инпутам*/
    $('input[type="tel"]').inputmask("+7 (999) 999-99-99");

    /* ajax запрос для обратной связи */
    $(".form-feedback").submit(function (e) {
      $("#web_form_submit").prop('disabled', true);
      $.ajax({
         url: $(this).attr("action"),
         data: $(this).serialize(),
         type: 'post',
         success: function (data) {
            $( ".message_from_feedback" ).html(data);
            $(this).hide();
         },
         error: function (data) {
            $( ".message_from_feedback" ).html("Произошла ошибка.");
            $("#web_form_submit").prop('disabled', false);
         }
      });
      e.preventDefault();
    });
            
})(jQuery);
	