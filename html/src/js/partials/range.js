$(document).ready(function(){
    if ($(".js-range-slider").length) {
        $(".js-range-slider").slider({
            range: true,
            min: 0,
            max: 459,
            step: 100,
            animate: true,
            values: [0, 459]
            , create: function( event, ui ) {
                $(this).find("span:first").addClass("first-a");
                $(this).find("span:last").addClass("last-a");
                $(".js-range-min-cost").val(0);
                $(".js-range-max-cost").val(459);
            }
            , slide: function( event, ui ) {
                if ($(ui.handle).hasClass("first-a")) {
                    $(".js-range-min-cost").val(ui.value + ' руб.').attr('value', ui.value);
                }
                if ($(ui.handle).hasClass("last-a")) {
                    $(".js-range-max-cost").val(ui.value + ' руб.').attr('value', ui.value);
                }
            }
        });
    }
});