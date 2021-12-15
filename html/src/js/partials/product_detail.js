$(".b-tab-available__choice_by_user").children("input").change(function () {
    if ($("#radio22").prop("checked")) {
        $(".b-tab-available__shop-block").show();
        $(".b-tab-available__not-available").show();
        $('.b-tab-available__shop-adress').show();
        $(".b-tab-available__in-stock").show();
        $(".js-empty-stores").hide();
    } else {
        $(".b-tab-available__not-available").each(function () {
            if ($(this).siblings('.b-tab-available__in-stock').length == 0)
                $(this).parents(".b-tab-available__shop-block").hide();
            $(this).hide().next('.b-tab-available__shop-adress').hide();
        });
        if ($(".b-tab-available__in-stock").length == 0) $(".js-empty-stores").show();
    }
});

$(".b-product-info__size-link").on("click", function () {
    if ($(this).hasClass("b-product-info__size-link--no-size") || $(this).hasClass("b-product-info__size-link--active")) {
        return false;
    } else {
        var val = $(this).attr("title");
        $(".b-product-info__size-link").removeClass("b-product-info__size-link--active");
        $(this).addClass("b-product-info__size-link--active");

        var id = $(this).attr("data-id-offer");
        var price_type_id = $("#price_type_id").text();

        $.ajax({
            type: 'POST',
            url: '/ajax/catalog.element_main.php',
            data: {'id': id, "price_type_id": price_type_id},
            success: function (data) {
                $(".b-product-info__price").html(data);
            }
        });

        $.ajax({
            type: 'POST',
            url: '/ajax/store_amount.php',
            data: {'id': id},
            success: function (data) {
                var obj = jQuery.parseJSON(data);
                $("[data-store]").each(function () {
                    var store = $(this).attr("data-store");
                    if (store) $(this).replaceWith(obj[store]);
                });

                $(".b-product-info__extra-link").text($(".b-tab-available__in-stock").length + " магазинах");
                var text = ($(".b-tab-available__in-stock").length == 0) ? "наличие" : "наличие (" + $(".b-tab-available__in-stock").length + ")";
                $("a[href = '#tab4']").text(text);
                if ($("#radio2").prop("checked")) {
                    $(".b-tab-available__not-available").each(function () {
                        if ($(this).siblings('.b-tab-available__in-stock').length == 0)
                            $(this).parents(".b-tab-available__shop-block").hide();
                        $(this).hide().next('.b-tab-available__shop-adress').hide();
                    });
                    $(".b-tab-available__in-stock").each(function () {
                        $(this).next('.b-tab-available__shop-adress').show();
                        $(this).parents(".b-tab-available__shop-block").show();
                    });
                    if ($(".b-tab-available__in-stock").length == 0) $(".js-empty-stores").show();
                } else {
                    $(".b-tab-available__shop-block").show();
                    $(".b-tab-available__not-available").show();
                    $('.b-tab-available__shop-adress').show();
                    $(".js-empty-stores").hide();
                }
            }
        });

        $.ajax({
            type: "POST",
            url: "/ajax/catalog.element_favorite.php",
            data: {"id": +id, "action": "check", "price_code": $(".b-link__add-favorites").attr('data-price_code')},
            success: function (data) {
                $(".b-link__add-favorites.b-link__add-favorites--button").replaceWith(data);
                addToFavorites();
            }
        });
    }
});

var Share = {

    vkontakte: function (purl, ptitle, pimg, text) {
        url = 'http://vkontakte.ru/share.php?';
        url += 'url=' + encodeURIComponent(purl);
        url += '&title=' + encodeURIComponent(ptitle);
        url += '&description=' + encodeURIComponent(text);
        url += '&image=' + encodeURIComponent(pimg);
        url += '&noparse=true';
        Share.popup(url);
    }
    ,
    odnoklassniki: function (purl, text) {
        url = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
        url += '&st.comments=' + encodeURIComponent(text);
        url += '&st._surl=' + encodeURIComponent(purl);
        Share.popup(url);
    }
    ,
    facebook: function (purl, ptitle, pimg, text) {
        url = 'http://www.facebook.com/sharer.php?s=100';
        url += '&p[title]=' + encodeURIComponent(ptitle);
        url += '&p[summary]=' + encodeURIComponent(text);
        url += '&p[url]=' + encodeURIComponent(purl);
        url += '&p[images][0]=' + encodeURIComponent(pimg);
        Share.popup(url);
    }
    ,
    twitter: function (purl, ptitle) {
        url = 'http://twitter.com/share?';
        url += 'text=' + encodeURIComponent(ptitle);
        url += '&url=' + encodeURIComponent(purl);
        url += '&counturl=' + encodeURIComponent(purl);
        Share.popup(url);
    }
    ,
    me: function (el) {
        Share.popup(el.href);
        return false;
    }
    ,

    popup: function (url) {
        var myWin = window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
        setTimeout(function () {
            if (myWin.closed) {
                $.get(location.href, {ajax: "Y"}, function (data) {
                    $('.b-product-info__favorite').empty().html(data);
                });

            } else
                setTimeout(arguments.callee, 10);
        }, 10);

    }
};

function addResponse() {
    $(".b-popup-feedback__input-popup--feedback.btn.b-btn__default[data-type = response_add]").on("click", function () {
        var url = "/ajax/product_responses.php";
        var text = $("#text-contact").val();
        var vote = $('input:radio[name=rating-input-1]:checked').attr("data-vote");
        var product = $("#parent_product_id").text();
        if (text != "") {
            $.ajax({
                type: "POST",
                url: url,
                data: {"text": text, "vote": vote, "product": product},
                success: function (data) {
                    $(data).insertAfter(".b-tab-review__add-review").promise().done(function () {
                        updateRating();
                        update_response_text();
                        $('input:radio[name=rating-input-1]:checked').attr("checked", false);
                    });
                    $(".close.b-popup__close").click();
                    $("#text-contact").val("");
                }
            });
        }
    });
}
addResponse();

function updateRating() {
    var summ = 2 * $(".b-tab-review__star_by_user").length;
    var count = $(".b-tab-review__user-list").length;

    var star = summ / count;
    var intStar = star / 2 >> 0;
    var halfstar = (star % 2 != 0) ? true : false;
    var i = 0;
    var data = "";
    while (i != 5) {
        if (intStar > i) {
            data += '<li class="b-tab-review__star"></li>';
        }
        else if ((halfstar) && (intStar == i)) {
            data += '<li class="b-tab-review__star--halfstar"></li>';
        }
        else {
            data += '<li class="b-tab-review__star--nostar"></li>';
        }
        i++;
    }

    $(".b-tab-review__star-rating").html(data);
}

function update_response_text() {
    var count = $(".b-tab-review__user-list").length;
    var text = (count != 0) ? "Отзывы (" + count + ")" : "Отзывы";
    $(".b-tab__nav--link.tx-dec_no[href = '#tab3']").text(text);
}