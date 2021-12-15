$(document).ready(function() {
    && $(window).width() < 960
    if ($('.b-tab--index .b-tab__content').length > 0) {
        $('.b-tab--index .b-tab__content').mCustomScrollbar({
            theme: "olimp",
            axis: "x"
        });
    }
});