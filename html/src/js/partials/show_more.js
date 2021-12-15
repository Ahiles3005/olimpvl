//code
function updatePaginationUrl() {

    $(".b-pagination__pagelink").each(function () {
        var curParams = window.location.href.slice(window.location.href.indexOf('?') + 1).replace('&&', '&').split('&');
        curParams.forEach(function (val, i) {
            if (val.indexOf('PAGEN_') != -1)
                curParams.splice(i, 1);
        });
        var reg4 = /(\?)/g;
        var href = window.location.href;
        var check = href.match(reg4);
        if (check) {
            $(this).attr('href').split('?')[1].split('&').forEach(function (val, i) {
                if (val.indexOf('PAGEN_') != -1)
                    curParams.push(val);
            });
            var url = "?" + curParams.join('&');
            $(this).attr("href", url.replace('&&', '&'));
        }
    })
}

function updatePageNavString() {
    var range = 2;
    var last = $(".b-pagination__pagelink:last").text();//($(".b-pagination__pagelink:last").text() < $(".b-pagination__page--active").text()) ? $(".b-pagination__page--active").text() : $(".b-pagination__pagelink:last").text();
    $(".b-pagination__page--shorten").remove();
    $(".b-pagination__pagelink").each(function () {
        var value = $(this).text();
        var diff = $(".b-pagination__page--active").text() - value;
        if ((Math.abs(diff) > range) && (value != 1) && (value != last))
            $(this).parent().hide();
        else
            $(this).parent().show();

        if ((Math.abs(diff) == range) && (value > range) && (value <= last - range)) {
            if (diff < 0)   $(this).parent().after('<li class="b-pagination__page--shorten"><span class="b-pagination__link" href="#" title="">...</span></li>');
            else $(this).parent().before('<li class="b-pagination__page--shorten"><span class="b-pagination__link" href="#" title="">...</span></li>');
        }

        if (parseInt($(".b-pagination__pagelink:last").text()) < parseInt($(".b-pagination__page--active").text()) && (value == parseInt($(".b-pagination__page--active").text()) - range)&&(parseInt($(".b-pagination__page--active").text()) > 4))
            $(this).parent().before('<li class="b-pagination__page--shorten"><span class="b-pagination__link" href="#" title="">...</span></li>');
    })
}


$('.b-link__show-more').on('click', function () {

    var dataForAjax = {
        'category_id'  : $(this).attr('data-category_id'),
        'current_page' : $(this).attr('data-current_page'),
        'product_count': $(this).attr('data-product_count'),
        'sort_field'   : $(this).attr('data-sort_field'),
        'sort_order'   : $(this).attr('data-sort_order'),
        'filter'       : $(this).attr('data-filter')
    };
    var main = 0;
    if ($(this).attr('data-main') == 1) {
        main = 1;
        var main_type = $(this).attr('data-main-type');
    }
    $.ajax({
        url      : '/ajax/load_more.php',
        data     : dataForAjax,
        method   : 'GET',
        dataType : 'json',
        success  : function (json) {
            var html = '';
            var current_type = $('.b-catalog-type__link--active');

            $.each(json['products'], function (i, val) {

                if (current_type.hasClass('b-catalog-type__link--tile') || main == 1)
                    html += catalog_tile_template(json['products'][i]);
                else if (current_type.hasClass('b-catalog-type__link--imagelist'))
                    html += catalog_imagelist_template(json['products'][i]);
                else if (current_type.hasClass('b-catalog-type__link--list'))
                    html += catalog_list_template(json['products'][i]);
            });

            if (main != 1) {
                if (current_type.hasClass('b-catalog-type__link--tile') || main == 1)
                    $('.b-product__list').append(html);
                else
                    $('.b-catalog-photo__list').append(html);

                $('.b-link__show-more').attr('data-current_page', json['page']);
            } else {
                $('.b-product__list.' + main_type).append(html);

                if (json['more'] == '0') {
                    $('.b-products__showmore.' + main_type).hide();
                }

                $('.b-products__showmore.' + main_type + ' .b-link__show-more').attr('data-current_page', json['page']);

            }

            if (main != 1) {
                var old_page = $(".b-pagination__page--active").text();
                $(".b-pagination__page--active").replaceWith('<li class="b-pagination__page"><a class="b-pagination__pagelink" href="' + window.location.href.slice(0, window.location.href.indexOf('\?')) + '?PAGEN_2=' + old_page + '">' + old_page + '</a></li>');
                $('.b-pagination__pagelink:contains("' + json['page'] + '")').parents(".b-pagination__page").replaceWith('<li class="b-pagination__page b-pagination__page--active">' + json['page'] + '</li>');

                if (parseInt($(".b-pagination__pagelink:last").text()) < parseInt($(".b-pagination__page--active").text())) {
                    $(".b-pagination__next").parent().html("");
                    $(".b-products__showmore").hide();
                }

                if ($(".b-pagination__page--active").text() != "1") {
                    var intNav = parseInt(json['page']) - 1;
                    $(".b-pagination__page:first").html('<a class="b-pagination__prev" href="' + window.location.href.slice(0, window.location.href.indexOf('\?')) + '?PAGEN_2=' + intNav + '"></a>');
                }

                var reg4 = /(\d+)/g;
                var old_text = $(".b-pagination__showed").text();
                var text_param = old_text.match(reg4);

                var length = (current_type.hasClass('b-catalog-type__link--tile')) ? $(".b-product__item").length : $(".b-catalog-photo__item").length;

                text_param[1] = parseInt(text_param[0]) + length - 1;
                var new_text = text_param[0] + " - " + text_param[1] + " из " + text_param[2];
                $(".b-pagination__showed").text(new_text);

                updatePageNavString();
                updatePaginationUrl();
            }
        }
    });
});
// updatePageNavString();
// updatePaginationUrl();