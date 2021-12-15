"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
};
! function(t) {
    function e() {
        t(".b-link__add-favorites").on("click", function() {
            var i = t(this).attr("data-product"),
                s = t(this);
            t.ajax({
                type: "POST",
                url: "/ajax/catalog.element_favorite.php",
                data: {
                    id: +i,
                    price_code: t(s).attr("data-price_code")
                },
                success: function(t) {
                    s.replaceWith(t), e()
                }
            })
        })
    }

    function i(t) {
        var e = '<li class="b-product__item">';
        return (1 == t.new || 1 == t.best_price || 1 == t.best || 1 == t.sale) && (e += '<div class="b-product__item--badge">', 1 == t.new && (e += '<a class="b-product__item--badge--item b-product__item--badge--new" title="Новинка" data-tooltip="right"></a>'), 1 == t.best_price && (e += '<a class="b-product__item--badge--item b-product__item--badge--best-price" title="Лучшая цена" data-tooltip="right"></a>'), 1 == t.best && (e += '<a class="b-product__item--badge--item b-product__item--badge--best-choice" title="Лучший выбор" data-tooltip="right"></a>'), 1 == t.sale && (e += '<a class="b-product__item--badge--item b-product__item--badge--discount" title="Скидка" data-tooltip="right"></a>'), e += "</div>"), e += '<a href="' + t.url + '" class="b-product__item--name">    \t\t<div class="b-product__image-owerflow">    \t\t\t<div class="b-product__image-owerflow-horisontal"><img class="b-product__item--image" src="' + t.image + '" alt="' + t.name + '"></div>    \t\t\t</div>    \t\t<p class="b-product__item-text">' + t.name + '</p></a>    \t\t<div class="b-product__item--footer">', e += "1" == t.favorite ? '<a class="b-product__item--add-favorites b-product__item--add-favorites--active" href="javascript: void(0);" title="В избранном" data-tooltip="right" style="display: none"></a>' : '<a class="b-product__item--add-favorites" href="javascript: void(0);" title="В избранное" data-tooltip="right" style="display: none"></a>', e += '<a class="b-product__item--add-compare b-product__item--add-compare--active" href="javascript: void(0);" title="Сравнить" data-tooltip="right" style="display: none"></a>    \t\t<div class="b-product__item--price">', t.newprice != t.oldprice && (e += '<span class="b-product__item--discount" data-discount="' + t.discount + '">-' + t.discount + '%</span>    \t\t\t\t<span class="b-product__item--priceold-line-through"><span class="b-product__item--priceold" data-price="' + t.oldprice + '">' + t.oldprice + '<span class="b-rouble">q</span></span></span>'), e + '<span class="b-product__item--pricenew b-price-large" data-price="' + t.newprice + '">' + t.newprice + '<span class="b-rouble">a</span></span>    \t\t</div>    \t\t</div>    \t\t<input type="hidden" name="artikcul" value="' + t.articul + '" />    \t</li>'
    }

    function s(t) {
        return '<div class="b-product b-product--inner">    \t\t<ul class="b-product__list">' + t + "</ul>        </div>"
    }

    function n(t) {
        var e = '<div class="b-catalog-photo__item">            <div class="b-catalog-photo__item--photo">                <a href="' + t.url + '" title="' + t.name + '" class="">                    <img class="" src="' + t.image + '" alt="' + t.name + '" title="' + t.name + '" />                </a>            </div>            <div class="b-catalog-photo__item--text">                <a href="' + t.url + '" class="">' + t.name + "</a>";
        return t.articul && "undefined" !== t.articul && (e += '<span class="b-catalog-photo__item--bar-code" data-articul="' + t.articul + '">Артикул ' + t.articul + "</span>"), e += "</div>", (1 == t.new || 1 == t.best_price || 1 == t.best || 1 == t.sale) && (e += '<div class="b-product__item--badge">', 1 == t.new && (e += '<a class="b-product__item--badge--item b-product__item--badge--new" title="Новинка" data-tooltip="right"></a>'), 1 == t.best_price && (e += '<a class="b-product__item--badge--item b-product__item--badge--best-price" title="Лучшая цена" data-tooltip="right"></a>'), 1 == t.best && (e += '<a class="b-product__item--badge--item b-product__item--badge--best-choice" title="Лучший выбор" data-tooltip="right"></a>'), 1 == t.sale && (e += '<a class="b-product__item--badge--item b-product__item--badge--discount" title="Скидка" data-tooltip="right"></a>'), e += "</div>"), t.newprice != t.oldprice && (e += '<span class="b-catalog-photo__item--discount" data-discount="' + t.discount + '">-' + t.discount + '%</span>            \t<span class="b-catalog-photo__item--priceold-line-through"><span class="b-catalog-photo__item--priceold" data-price="' + t.oldprice + '">' + t.oldprice + '<span class="b-rouble">q</span></span></span>'), e += '<p class="b-price-large b-catalog-photo__item--price" data-price="' + t.newprice + '">' + t.newprice + '<span class="b-rouble">a</span></span></p>', (e += "1" == t.favorite ? '<a class="b-catalog-photo__item--add-favorites b-catalog-photo__item--add-favorites--active" href="javascript: void(0);" title="В избранном" style="display: none"></a>' : '<a class="b-catalog-photo__item--add-favorites" href="javascript: void(0);" title="В избранное" style="display: none"></a>') + '<a class="b-catalog-photo__item--add-compare" href="javascript: void(0);" title="Сравнить" data-tooltip="right" style="display: none"></a>        </div>'
    }

    function a(t) {
        return '<div class="b-catalog-photo">            <div class="b-catalog-photo__list">' + t + "</div>        </div>"
    }

    function o(t) {
        var e = '<div class="b-catalog-photo__item b-catalog-photo__item--no-photo">            <div class="b-catalog-photo__item--photo b-catalog-photo__item--photo-hidden">                <a href="' + t.url + '" title="' + t.name + '" class="">                    <img class="" src="' + t.image + '" alt="' + t.name + '" title="' + t.name + '">                </a>            </div>            <div class="b-catalog-photo__item--text b-catalog-photo__item--text-no-photo">                <a href="' + t.url + '" class="">' + t.name + "</a>";
        return t.articul && "undefined" !== t.articul && (e += '<span class="b-catalog-photo__item--bar-code b-catalog-photo__item--bar-code-no-photo" data-articul="' + t.articul + '">Артикул ' + t.articul + "</span>"), e += "</div>", (1 == t.new || 1 == t.best_price || 1 == t.best || 1 == t.sale) && (e += '<div class="b-product__item--badge">', 1 == t.new && (e += '<a class="b-product__item--badge--item b-product__item--badge--new" title="Новинка" data-tooltip="right"></a>'), 1 == t.best_price && (e += '<a class="b-product__item--badge--item b-product__item--badge--best-price" title="Лучшая цена" data-tooltip="right"></a>'), 1 == t.best && (e += '<a class="b-product__item--badge--item b-product__item--badge--best-choice" title="Лучший выбор" data-tooltip="right"></a>'), 1 == t.sale && (e += '<a class="b-product__item--badge--item b-product__item--badge--discount" title="Скидка" data-tooltip="right"></a>'), e += "</div>"), t.newprice != t.oldprice && (e += '<span class="b-catalog-photo__item--discount" data-discount="' + t.discount + '">-' + t.discount + '%</span>    \t        <span class="b-catalog-photo__item--priceold-line-through"><span class="b-catalog-photo__item--priceold" data-price="' + t.oldprice + '">' + t.oldprice + '<span class="b-rouble">q</span></span></span>'), e += '<p class="b-price-large b-catalog-photo__item--price" data-price="' + t.newprice + '">' + t.newprice + '<span class="b-rouble">a</span></p>', (e += "1" == t.favorite ? '<a class="b-catalog-photo__item--add-favorites b-catalog-photo__item--add-favorites--active" href="javascript: void(0);" title="В избранном" style="display: none"></a>' : '<a class="b-catalog-photo__item--add-favorites" href="javascript: void(0);" title="В избранное" style="display: none"></a>') + '<a class="b-catalog-photo__item--add-compare" href="javascript: void(0);" title="Сравнить" data-tooltip="right" style="display: none"></a>        </div>'
    }

    function r(t) {
        return '<div class="b-catalog-photo b-catalog-no-photo">            <div class="b-catalog-photo__list">' + t + "</div>        </div>"
    }

    function l(e) {
        t(".b-catalog-type__link--active").removeClass("b-catalog-type__link--active"), e.addClass("b-catalog-type__link--active");
        var i = function() {
            if (t(".b-catalog-type__link--active").hasClass("b-catalog-type__link--tile")) var e = "tile";
            else if (t(".b-catalog-type__link--active").hasClass("b-catalog-type__link--imagelist")) var e = "imagelist";
            else if (t(".b-catalog-type__link--active").hasClass("b-catalog-type__link--list")) var e = "list";
            return e
        }();
        document.cookie = "CATALOG_TYPE=" + i + "; path=/"
    }

    function h(e, i) {
        t(".b-catalog-navigation__list").length && t(".b-catalog-navigation__list li").each(function() {
            var s = t(this).find(".b-catalog-navigation__link").attr("href");
            t(this).find(".b-catalog-navigation__link").attr("href", s.replace(e, i))
        })
    }

    function c(e, i) {
        var s = "",
            n = location.href.split("#")[0].split("?"),
            a = n[0],
            o = n[1];
        if (o)
            for (var r = o.split("&"), l = 0; l < r.length; l++) {
                r[l].split("=")[0] in e == 0 && (s += r[l] + "&")
            }
        return t.each(e, function(t, e) {
            s += t + "=" + e + "&"
        }), window.location.href = a + "?" + s + i, !1
    }

    function d(t, e) {
        return 0 == e ? t : parseFloat(t)
    }

    function u() {
        clearTimeout(C), C = setTimeout(function() {
            if (t(window).width() < 960) {
                if (t(".b-product-info--mobile").length <= 0) {
                    t(".b-product-info__compare").find(".b-checkbox__item--product").addClass("b-checkbox__item--mobile");
                    var e = t(".b-product-info__compare");
                    t(".b-product-main").removeClass("b-product-main").addClass("b-product-info").addClass("b-product-info--mobile").prepend(t(".b-product-info__extra")).prepend(t(".b-product-info__favorite")).prepend(t(".b-product-info__bonus")).prepend(t(".b-product-info__form")).prepend(t("#tab-carousel-product").addClass("carousel-product-mobile")).prepend(t(".b-product-info__head")), t(".b-product-info__form form").prepend(t(".b-product-info__price").addClass("b-product-info__price--mobile").append(e)), t(".b-product-info--mobile").siblings(".b-product-info").remove()
                }
            } else if (t(".b-product-info--mobile").length > 0) {
                t(".b-product-info__compare").find(".b-checkbox__item--product").removeClass("b-checkbox__item--mobile");
                e = t(".b-product-info__compare");
                t(".b-product-info__action").prepend(e), t(".b-product-info--mobile").removeClass("b-product-info").removeClass("b-product-info--mobile").addClass("b-product-main"), t("#tab-carousel-product").removeClass("carousel-product-mobile"), t(".b-product-main").after('<div class="b-product-info"></div>'), t(".b-product-info").append(t(".b-product-info__head")).append(t(".b-product-info__form")).append(t(".b-product-info__bonus")).append(t(".b-product-info__favorite")).append(t(".b-product-info__extra")), t(".b-product-info__form form").append(t(".b-product-info__price").removeClass("b-product-info__price--mobile"))
            }
        }, 250)
    }
    var p, f, m, g, v, _, b, y, w = {
        animationTime: 200,
        animationLongTime: 1500,
        wdDesktopXxl: 1919,
        wdDesktopXl: 1599,
        wdDesktopLg: 1279,
        wdDesktop: 1023,
        wdTabletLg: 959,
        wdTabletMd: 767,
        wdTabletSm: 639,
        wdPhone: 479,
        isIos: navigator.userAgent.match(/(iPod|iPhone|iPad)/)
    };
    if (e(), t(".b-catalog-navigation__select-smallest").change(function() {
            c({
                catalogNav: t(this).val()
            }, "#nav_mobile")
        }), t(".js-sort-by").change(function() {
            c({
                sortField: t(this).val(),
                sortOrder: t(this).find(":selected").attr("data-order")
            }, "")
        }), t(".b-catalog-type__link").on("click", function() {
            var e = t(this),
                c = "";
            if (0 == t(this).hasClass("b-catalog-type__link--active"))
                if (t(".b-catalog-type__link--active").hasClass("b-catalog-type__link--tile")) {
                    if (l(e), t(".b-product__item").each(function() {
                            var i = [];
                            i.name = t(this).find(".b-product__item--name").text(), i.url = t(this).find(".b-product__item--name").attr("href"), i.image = t(this).find(".b-product__item--image").attr("src"), i.favorite = t(this).find(".b-product__item--add-favorites").hasClass("b-product__item--add-favorites--active"), i.articul = t(this).find('input[name="artikcul"]').val(), i.newprice = t(this).find(".b-price-large").attr("data-price"), t(this).find(".b-product__item--badge--new").length ? i.new = 1 : i.new = 0, t(this).find(".b-product__item--badge--best-price").length ? i.best_price = 1 : i.best_price = 0, t(this).find(".b-product__item--badge--best-choice").length ? i.best = 1 : i.best = 0, t(this).find(".b-product__item--badge--discount").length ? i.sale = 1 : i.sale = 0, t(this).find(".b-product__item--priceold").length ? i.oldprice = t(this).find(".b-product__item--priceold").attr("data-price") : i.oldprice = i.newprice, t(this).find(".b-product__item--discount").length ? i.discount = t(this).find(".b-product__item--discount").attr("data-discount") : i.discount = 0, e.hasClass("b-catalog-type__link--imagelist") ? c += n(i) : e.hasClass("b-catalog-type__link--list") && (c += o(i))
                        }), e.hasClass("b-catalog-type__link--imagelist")) {
                        var d = a(c);
                        h("tile", "imagelist")
                    } else if (e.hasClass("b-catalog-type__link--list")) {
                        d = r(c);
                        h("tile", "list")
                    }
                    t(".b-product").replaceWith(d)
                } else if (t(".b-catalog-type__link--active").hasClass("b-catalog-type__link--imagelist")) {
                if (l(e), t(".b-catalog-photo__item").each(function() {
                        var s = [];
                        s.name = t(this).find(".b-catalog-photo__item--text a").text(), s.url = t(this).find(".b-catalog-photo__item--text a").attr("href"), s.image = t(this).find(".b-catalog-photo__item--photo img").attr("src"), s.favorite = t(this).find(".b-product__item--add-favorites").hasClass("b-product__item--add-favorites--active"), s.articul = t(this).find(".b-catalog-photo__item--bar-code").attr("data-articul"), s.newprice = t(this).find(".b-price-large").attr("data-price"), t(this).find(".b-product__item--badge--new").length ? s.new = 1 : s.new = 0, t(this).find(".b-product__item--badge--best-price").length ? s.best_price = 1 : s.best_price = 0, t(this).find(".b-product__item--badge--best-choice").length ? s.best = 1 : s.best = 0, t(this).find(".b-product__item--badge--discount").length ? s.sale = 1 : s.sale = 0, t(this).find(".b-catalog-photo__item--priceold").length ? s.oldprice = t(this).find(".b-catalog-photo__item--priceold").attr("data-price") : s.oldprice = s.newprice, t(this).find(".b-catalog-photo__item--discount").length ? s.discount = t(this).find(".b-catalog-photo__item--discount").attr("data-discount") : s.discount = 0, e.hasClass("b-catalog-type__link--tile") ? (c += i(s), h("imagelist", "tile")) : e.hasClass("b-catalog-type__link--list") && (c += o(s), h("imagelist", "list"))
                    }), e.hasClass("b-catalog-type__link--tile")) d = s(c);
                else if (e.hasClass("b-catalog-type__link--list")) d = r(c);
                t(".b-catalog-photo").replaceWith(d)
            } else if (t(".b-catalog-type__link--active").hasClass("b-catalog-type__link--list")) {
                if (l(e), t(".b-catalog-photo__item").each(function() {
                        var s = [];
                        s.name = t(this).find(".b-catalog-photo__item--text a").text(), s.url = t(this).find(".b-catalog-photo__item--text a").attr("href"), s.image = t(this).find(".b-catalog-photo__item--photo img").attr("src"), s.favorite = t(this).find(".b-catalog-photo__item--add-favorites").hasClass("b-catalog-photo__item--add-favorites--active"), s.articul = t(this).find(".b-catalog-photo__item--bar-code").attr("data-articul"), s.newprice = t(this).find(".b-price-large").attr("data-price"), t(this).find(".b-product__item--badge--new").length ? s.new = 1 : s.new = 0, t(this).find(".b-product__item--badge--best-price").length ? s.best_price = 1 : s.best_price = 0, t(this).find(".b-product__item--badge--best-choice").length ? s.best = 1 : s.best = 0, t(this).find(".b-product__item--badge--discount").length ? s.sale = 1 : s.sale = 0, t(this).find(".b-catalog-photo__item--priceold").length ? s.oldprice = t(this).find(".b-catalog-photo__item--priceold").attr("data-price") : s.oldprice = s.newprice, t(this).find(".b-catalog-photo__item--discount").length ? s.discount = t(this).find(".b-catalog-photo__item--discount").attr("data-discount") : s.discount = 0, e.hasClass("b-catalog-type__link--tile") ? c += i(s) : e.hasClass("b-catalog-type__link--imagelist") && (c += n(s))
                    }), e.hasClass("b-catalog-type__link--tile")) {
                    d = s(c);
                    h("list", "tile")
                } else if (e.hasClass("b-catalog-type__link--imagelist")) {
                    d = a(c);
                    h("list", "imagelist")
                }
                t(".b-catalog-no-photo").replaceWith(d)
            }
        }), t(document).ready(function() {
            t(".js-collapse").collapse()
        }), t(".js-color-item").each(function() {
            t(this).css("background", t(this).attr("data-color"))
        }), t(document).ready(function() {
            t(".compare-product-slider").bxSlider({
                nextText: '<div class="b-btn__arrow b-btn__arrow--left b-btn-arrow-left"></div>',
                prevText: '<div class="b-btn__arrow b-btn__arrow--right b-btn-arrow-right"></div>',
                pager: !1,
                minSlides: 1,
                moveSlides: 1,
                maxSlides: 5,
                slideWidth: 190,
                slideMargin: 20
            })
        }), function(t) {
            var e;
            if ("object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports))) {
                try {
                    e = require("jquery")
                } catch (t) {}
                module.exports = t(window, document, e)
            } else window.Dropkick = t(window, document, window.jQuery)
        }(function(t, e, i, s) {
            var n, a = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                o = t.parent !== t.self && location.host === parent.location.host,
                r = -1 !== navigator.appVersion.indexOf("MSIE"),
                l = function i(s, n) {
                    var a, o;
                    if (this === t) return new i(s, n);
                    for ("string" == typeof s && "#" === s[0] && (s = e.getElementById(s.substr(1))), a = 0; a < i.uid; a++)
                        if (o = i.cache[a], o instanceof i && o.data.select === s) return d.extend(o.data.settings, n), o;
                    return s ? "SELECT" === s.nodeName ? this.init(s, n) : void 0 : (console.error("You must pass a select to DropKick"), !1)
                },
                h = function() {},
                c = {
                    initialize: h,
                    change: h,
                    open: h,
                    close: h,
                    search: "strict",
                    bubble: !0
                },
                d = {
                    hasClass: function(t, e) {
                        var i = new RegExp("(^|\\s+)" + e + "(\\s+|$)");
                        return t && i.test(t.className)
                    },
                    addClass: function(t, e) {
                        t && !d.hasClass(t, e) && (t.className += " " + e)
                    },
                    removeClass: function(t, e) {
                        var i = new RegExp("(^|\\s+)" + e + "(\\s+|$)");
                        t && (t.className = t.className.replace(i, " "))
                    },
                    toggleClass: function(t, e) {
                        var i = d.hasClass(t, e) ? "remove" : "add";
                        d[i + "Class"](t, e)
                    },
                    extend: function(t) {
                        return Array.prototype.slice.call(arguments, 1).forEach(function(e) {
                            if (e)
                                for (var i in e) t[i] = e[i]
                        }), t
                    },
                    offset: function(i) {
                        var s = i.getBoundingClientRect() || {
                                top: 0,
                                left: 0
                            },
                            n = e.documentElement,
                            a = r ? n.scrollTop : t.pageYOffset,
                            o = r ? n.scrollLeft : t.pageXOffset;
                        return {
                            top: s.top + a - n.clientTop,
                            left: s.left + o - n.clientLeft
                        }
                    },
                    position: function(t, e) {
                        for (var i = {
                                top: 0,
                                left: 0
                            }; t && t !== e;) i.top += t.offsetTop, i.left += t.offsetLeft, t = t.parentNode;
                        return i
                    },
                    closest: function(t, e) {
                        for (; t;) {
                            if (t === e) return t;
                            t = t.parentNode
                        }
                        return !1
                    },
                    create: function(t, i) {
                        var s, n = e.createElement(t);
                        i || (i = {});
                        for (s in i) i.hasOwnProperty(s) && ("innerHTML" === s ? n.innerHTML = i[s] : n.setAttribute(s, i[s]));
                        return n
                    },
                    deferred: function(e) {
                        return function() {
                            var i = arguments,
                                s = this;
                            t.setTimeout(function() {
                                e.apply(s, i)
                            }, 1)
                        }
                    }
                };
            return l.cache = {}, l.uid = 0, l.prototype = {
                add: function(t, i) {
                    var s, n, a;
                    "string" == typeof t && (s = t, (t = e.createElement("option")).text = s), "OPTION" === t.nodeName && (n = d.create("li", {
                        class: "dk-option",
                        "data-value": t.value,
                        innerHTML: t.text,
                        role: "option",
                        "aria-selected": "false",
                        id: "dk" + this.data.cacheID + "-" + (t.id || t.value.replace(" ", "-"))
                    }), d.addClass(n, t.className), this.length += 1, t.disabled && (d.addClass(n, "dk-option-disabled"), n.setAttribute("aria-disabled", "true")), this.data.select.add(t, i), "number" == typeof i && (i = this.item(i)), this.options.indexOf(i) > -1 ? i.parentNode.insertBefore(n, i) : this.data.elem.lastChild.appendChild(n), n.addEventListener("mouseover", this), a = this.options.indexOf(i), this.options.splice(a, 0, n), t.selected && this.select(a))
                },
                item: function(t) {
                    return t = 0 > t ? this.options.length + t : t, this.options[t] || null
                },
                remove: function(t) {
                    var e = this.item(t);
                    e.parentNode.removeChild(e), this.options.splice(t, 1), this.data.select.remove(t), this.select(this.data.select.selectedIndex), this.length -= 1
                },
                init: function(t, i) {
                    var s, r = l.build(t, "dk" + l.uid);
                    if (this.data = {}, this.data.select = t, this.data.elem = r.elem, this.data.settings = d.extend({}, c, i), this.disabled = t.disabled, this.form = t.form, this.length = t.length, this.multiple = t.multiple, this.options = r.options.slice(0), this.selectedIndex = t.selectedIndex, this.selectedOptions = r.selected.slice(0), this.value = t.value, this.data.cacheID = l.uid, l.cache[this.data.cacheID] = this, this.data.settings.initialize.call(this), l.uid += 1, this._changeListener || (t.addEventListener("change", this), this._changeListener = !0), !a || this.data.settings.mobile) {
                        if (t.parentNode.insertBefore(this.data.elem, t), t.setAttribute("data-dkCacheId", this.data.cacheID), this.data.elem.addEventListener("click", this), this.data.elem.addEventListener("keydown", this), this.data.elem.addEventListener("keypress", this), this.form && this.form.addEventListener("reset", this), !this.multiple)
                            for (s = 0; s < this.options.length; s++) this.options[s].addEventListener("mouseover", this);
                        n || (e.addEventListener("click", l.onDocClick), o && parent.document.addEventListener("click", l.onDocClick), n = !0)
                    }
                    return this
                },
                close: function() {
                    var t, e = this.data.elem;
                    if (!this.isOpen || this.multiple) return !1;
                    for (t = 0; t < this.options.length; t++) d.removeClass(this.options[t], "dk-option-highlight");
                    e.lastChild.setAttribute("aria-expanded", "false"), d.removeClass(e.lastChild, "dk-select-options-highlight"), d.removeClass(e, "dk-select-open-(up|down)"), this.isOpen = !1, this.data.settings.close.call(this)
                },
                open: d.deferred(function() {
                    var i, s, n, a, o = this.data.elem,
                        l = o.lastChild;
                    return n = r ? d.offset(o).top - e.documentElement.scrollTop : d.offset(o).top - t.scrollY, a = t.innerHeight - (n + o.offsetHeight), !this.isOpen && !this.multiple && (l.style.display = "block", i = l.offsetHeight, l.style.display = "", s = n > i && !(a > i) ? "-up" : "-down", this.isOpen = !0, d.addClass(o, "dk-select-open" + s), l.setAttribute("aria-expanded", "true"), this._scrollTo(this.options.length - 1), this._scrollTo(this.selectedIndex), void this.data.settings.open.call(this))
                }),
                disable: function(t, e) {
                    var i = "dk-option-disabled";
                    (0 === arguments.length || "boolean" == typeof t) && (e = t === s, t = this.data.elem, i = "dk-select-disabled", this.disabled = e), e === s && (e = !0), "number" == typeof t && (t = this.item(t)), d[e ? "addClass" : "removeClass"](t, i)
                },
                select: function(t, e) {
                    var i, s, n, a, o = this.data.select;
                    if ("number" == typeof t && (t = this.item(t)), "string" == typeof t)
                        for (i = 0; i < this.length; i++) this.options[i].getAttribute("data-value") === t && (t = this.options[i]);
                    return !(!t || "string" == typeof t || !e && d.hasClass(t, "dk-option-disabled")) && (d.hasClass(t, "dk-option") ? (s = this.options.indexOf(t), n = o.options[s], this.multiple ? (d.toggleClass(t, "dk-option-selected"), n.selected = !n.selected, d.hasClass(t, "dk-option-selected") ? (t.setAttribute("aria-selected", "true"), this.selectedOptions.push(t)) : (t.setAttribute("aria-selected", "false"), s = this.selectedOptions.indexOf(t), this.selectedOptions.splice(s, 1))) : (a = this.data.elem.firstChild, this.selectedOptions.length && (d.removeClass(this.selectedOptions[0], "dk-option-selected"), this.selectedOptions[0].setAttribute("aria-selected", "false")), d.addClass(t, "dk-option-selected"), t.setAttribute("aria-selected", "true"), a.setAttribute("aria-activedescendant", t.id), a.className = "dk-selected " + n.className, a.innerHTML = n.text, this.selectedOptions[0] = t, n.selected = !0), this.selectedIndex = o.selectedIndex, this.value = o.value, e || this.data.select.dispatchEvent(new CustomEvent("change", {
                        bubbles: this.data.settings.bubble
                    })), t) : void 0)
                },
                selectOne: function(t, e) {
                    return this.reset(!0), this._scrollTo(t), this.select(t, e)
                },
                search: function(t, e) {
                    var i, s, n, a, o, r, l, h, c = this.data.select.options,
                        d = [];
                    if (!t) return this.options;
                    for (e = "fuzzy" === (e = e ? e.toLowerCase() : "strict") ? 2 : "partial" === e ? 1 : 0, h = new RegExp((e ? "" : "^") + t, "i"), i = 0; i < c.length; i++)
                        if (n = c[i].text.toLowerCase(), 2 == e) {
                            for (s = t.toLowerCase().split(""), a = o = r = l = 0; o < n.length;) n[o] === s[a] ? (r += 1 + r, a++) : r = 0, l += r, o++;
                            a === s.length && d.push({
                                e: this.options[i],
                                s: l,
                                i: i
                            })
                        } else h.test(n) && d.push(this.options[i]);
                    return 2 === e && (d = d.sort(function(t, e) {
                        return e.s - t.s || t.i - e.i
                    }).reduce(function(t, e) {
                        return t[t.length] = e.e, t
                    }, [])), d
                },
                focus: function() {
                    this.disabled || (this.multiple ? this.data.elem : this.data.elem.children[0]).focus()
                },
                reset: function(t) {
                    var e, i = this.data.select;
                    for (this.selectedOptions.length = 0, e = 0; e < i.options.length; e++) i.options[e].selected = !1, d.removeClass(this.options[e], "dk-option-selected"), this.options[e].setAttribute("aria-selected", "false"), !t && i.options[e].defaultSelected && this.select(e, !0);
                    this.selectedOptions.length || this.multiple || this.select(0, !0)
                },
                refresh: function() {
                    this.dispose().init(this.data.select, this.data.settings)
                },
                dispose: function() {
                    return delete l.cache[this.data.cacheID], (!a || this.data.settings.mobile) && (this.data.elem.parentNode.removeChild(this.data.elem), this.data.select.removeAttribute("data-dkCacheId")), this
                },
                handleEvent: function(t) {
                    if (!this.disabled) switch (t.type) {
                        case "click":
                            this._delegate(t);
                            break;
                        case "keydown":
                            this._keyHandler(t);
                            break;
                        case "keypress":
                            this._searchOptions(t);
                            break;
                        case "mouseover":
                            this._highlight(t);
                            break;
                        case "reset":
                            this.reset();
                            break;
                        case "change":
                            this.data.settings.change.call(this)
                    }
                },
                _delegate: function(e) {
                    var i, s, n, a, o = e.target;
                    if (d.hasClass(o, "dk-option-disabled")) return !1;
                    if (this.multiple) {
                        if (d.hasClass(o, "dk-option"))
                            if (i = t.getSelection(), "Range" === i.type && i.collapseToStart(), e.shiftKey)
                                if (n = this.options.indexOf(this.selectedOptions[0]), a = this.options.indexOf(this.selectedOptions[this.selectedOptions.length - 1]), s = this.options.indexOf(o), s > n && a > s && (s = n), s > a && a > n && (a = n), this.reset(!0), a > s)
                                    for (; a + 1 > s;) this.select(s++);
                                else
                                    for (; s > a - 1;) this.select(s--);
                        else e.ctrlKey || e.metaKey ? this.select(o) : (this.reset(!0), this.select(o))
                    } else this[this.isOpen ? "close" : "open"](), d.hasClass(o, "dk-option") && this.select(o)
                },
                _highlight: function(t) {
                    var e, i = t.target;
                    if (!this.multiple) {
                        for (e = 0; e < this.options.length; e++) d.removeClass(this.options[e], "dk-option-highlight");
                        d.addClass(this.data.elem.lastChild, "dk-select-options-highlight"), d.addClass(i, "dk-option-highlight")
                    }
                },
                _keyHandler: function(t) {
                    var e, i, s = this.selectedOptions,
                        n = this.options,
                        a = 1,
                        o = 9,
                        r = 13,
                        l = 27,
                        h = 32,
                        c = 38,
                        u = 40;
                    switch (t.keyCode) {
                        case c:
                            a = -1;
                        case u:
                            if (t.preventDefault(), e = s[s.length - 1], d.hasClass(this.data.elem.lastChild, "dk-select-options-highlight"))
                                for (d.removeClass(this.data.elem.lastChild, "dk-select-options-highlight"), i = 0; i < n.length; i++) d.hasClass(n[i], "dk-option-highlight") && (d.removeClass(n[i], "dk-option-highlight"), e = n[i]);
                            (a = n.indexOf(e) + a) > n.length - 1 ? a = n.length - 1 : 0 > a && (a = 0), this.data.select.options[a].disabled || (this.reset(!0), this.select(a), this._scrollTo(a));
                            break;
                        case h:
                            if (!this.isOpen) {
                                t.preventDefault(), this.open();
                                break
                            }
                        case o:
                        case r:
                            for (a = 0; a < n.length; a++) d.hasClass(n[a], "dk-option-highlight") && this.select(a);
                        case l:
                            this.isOpen && (t.preventDefault(), this.close())
                    }
                },
                _searchOptions: function(t) {
                    var e, i = this,
                        n = String.fromCharCode(t.keyCode || t.which);
                    this.data.searchString === s && (this.data.searchString = ""), i.data.searchTimeout && clearTimeout(i.data.searchTimeout), i.data.searchTimeout = setTimeout(function() {
                        i.data.searchString = ""
                    }, 1e3), this.data.searchString += n, (e = this.search(this.data.searchString, this.data.settings.search)).length && (d.hasClass(e[0], "dk-option-disabled") || this.selectOne(e[0]))
                },
                _scrollTo: function(t) {
                    var e, i, s = this.data.elem.lastChild;
                    return !(-1 === t || "number" != typeof t && !t || !this.isOpen && !this.multiple) && ("number" == typeof t && (t = this.item(t)), void((i = (e = d.position(t, s).top) - s.scrollTop) + t.offsetHeight > s.offsetHeight ? (e += t.offsetHeight, s.scrollTop = e - s.offsetHeight) : 0 > i && (s.scrollTop = e)))
                }
            }, l.build = function(t, e) {
                var i, s, n, a = [],
                    o = {
                        elem: null,
                        options: [],
                        selected: []
                    };
                for (o.elem = d.create("div", {
                        class: "dk-select" + (t.multiple ? "-multi" : "")
                    }), s = d.create("ul", {
                        class: "dk-select-options",
                        id: e + "-listbox",
                        role: "listbox"
                    }), t.disabled && d.addClass(o.elem, "dk-select-disabled"), o.elem.id = e + (t.id ? "-" + t.id : ""), d.addClass(o.elem, t.className), t.multiple ? (o.elem.setAttribute("tabindex", t.getAttribute("tabindex") || "0"), s.setAttribute("aria-multiselectable", "true")) : (i = t.options[t.selectedIndex], o.elem.appendChild(d.create("div", {
                        class: "dk-selected " + i.className,
                        tabindex: t.tabindex || 0,
                        innerHTML: i ? i.text : "&nbsp;",
                        id: e + "-combobox",
                        "aria-live": "assertive",
                        "aria-owns": s.id,
                        role: "combobox"
                    })), s.setAttribute("aria-expanded", "false")), n = t.children.length; n--; a.unshift(t.children[n]));
                return a.forEach(function t(i) {
                    var s, n, a, r, l = [];
                    switch (i.nodeName) {
                        case "OPTION":
                            s = d.create("li", {
                                class: "dk-option ",
                                "data-value": i.value,
                                innerHTML: i.text,
                                role: "option",
                                "aria-selected": "false",
                                id: e + "-" + (i.id || i.value.replace(" ", "-"))
                            }), d.addClass(s, i.className), i.disabled && (d.addClass(s, "dk-option-disabled"), s.setAttribute("aria-disabled", "true")), i.selected && (d.addClass(s, "dk-option-selected"), s.setAttribute("aria-selected", "true"), o.selected.push(s)), o.options.push(this.appendChild(s));
                            break;
                        case "OPTGROUP":
                            for (n = d.create("li", {
                                    class: "dk-optgroup"
                                }), i.label && n.appendChild(d.create("div", {
                                    class: "dk-optgroup-label",
                                    innerHTML: i.label
                                })), a = d.create("ul", {
                                    class: "dk-optgroup-options"
                                }), r = i.children.length; r--; l.unshift(i.children[r]));
                            l.forEach(t, a), this.appendChild(n).appendChild(a)
                    }
                }, o.elem.appendChild(s)), o
            }, l.onDocClick = function(t) {
                var e, i;
                if (1 !== t.target.nodeType) return !1;
                null !== (e = t.target.getAttribute("data-dkcacheid")) && l.cache[e].focus();
                for (i in l.cache) d.closest(t.target, l.cache[i].data.elem) || i === e || l.cache[i].disabled || l.cache[i].close()
            }, i !== s && (i.fn.dropkick = function() {
                var t = Array.prototype.slice.call(arguments);
                return i(this).each(function() {
                    t[0] && "object" !== _typeof(t[0]) ? "string" == typeof t[0] && l.prototype[t[0]].apply(new l(this), t.slice(1)) : new l(this, t[0] || {})
                })
            }), l
        }), t(document).ready(function() {
            t("a2").fancybox()
        }), t(".b-filterbuttons__categories").on("click", function() {
            0 == t(".b-category").parents(".b-filterbuttons__container-categories").length && t(".b-filterbuttons__container-categories").append(t(".b-category").detach()), t(this).hasClass("b-filterbuttons__categories--active") ? (t(".b-category").css("display", "none"), t(this).removeClass("b-filterbuttons__categories--active")) : (t(this).addClass("b-filterbuttons__categories--active"), t(".b-category").css("display", "block"))
        }), t(".b-filterbuttons__productfilter").on("click", function() {
            0 == t(".b-filter").parents(".b-filterbuttons__container-productfilter").length && t(".b-filterbuttons__container-productfilter").append(t(".b-filter").detach()), t(this).hasClass("b-filterbuttons__productfilter--active") ? (t(".b-filter").css("display", "none"), t(this).removeClass("b-filterbuttons__productfilter--active")) : (t(this).addClass("b-filterbuttons__productfilter--active"), t(".b-filter").css("display", "block"))
        }), (y = jQuery).fn.styleSelectField = function(t) {
            var e = "field-bl_type_select",
                i = "field-bl_type_select__tx",
                s = this.prop("class"),
                n = '<div class="field-bl ' + e + " " + s + '" />',
                a = '<span class="' + i + '" />';
            this.each(function() {
                y(this).wrap(n).before(a),
                    function(t) {
                        var e = t.find("option:selected").text();
                        if (e) t.siblings("." + i).text(e);
                        else {
                            var s = t.find("option:first-child").text();
                            t.siblings("." + i).text(s)
                        }
                    }(y(this)), y(this).on("focus", function() {
                        y(this).closest("." + e).addClass("focus")
                    }), y(this).on("blur", function() {
                        y(this).closest("." + e).removeClass("focus")
                    }), y(this).on("change", function() {
                        var t, e;
                        t = y(this), e = t.find("option:selected").text(), t.siblings("." + i).text(e)
                    }), y(this).is(":disabled") && y(this).closest("." + e).addClass("disabled"), y(this).closest("form").on("submit", function() {
                        var t;
                        t = y(this), y(t).find("select").each(function() {
                            s = y(this).prop("class"), y(this).closest("." + e).addClass(s)
                        })
                    })
            })
        }, y.fn.styleFileField = function(t) {
            var e = "field-bl_type_file",
                i = "field-bl_type_file__tx",
                s = this.prop("class"),
                n = '<div class="field-bl ' + e + " " + s + '" />',
                a = '<input class="' + i + '" type="text" value="" name="" readonly>';
            this.each(function() {
                y(this).wrap(n).after(a).wrap('<a class="btn" title="выберите файл">Обзор...</a>'), y(this).on("change", function() {
                    var t, s, n;
                    t = y(this), s = t.closest("." + e).find("." + i), n = t.val(), s.attr("value", n)
                }), y(this).on("focus", function() {
                    y(this).closest("." + e).addClass("focus")
                }), y(this).on("blur", function() {
                    y(this).closest("." + e).removeClass("focus")
                }), y(this).is(":disabled") && y(this).closest("." + e).addClass("disabled").end().closest("." + e).find("button, ." + i).prop("disabled", !0)
            })
        }, y.fn.styledCheck = function(t) {
            var e = this;
            this.each(function() {
                y(this).attr("checked", y(this).attr("checked")), y(this).prop("checked") && y(this).parent("label").addClass("active"), y(this).prop("disabled") && y(this).parent("label").addClass("disabled")
            }), this.on("click", function() {
                e.switchState(y(this))
            }), this.switchState = function(t) {
                if ("checkbox" == t.prop("type")) t.parent().toggleClass("active");
                else {
                    var e = t.attr("name");
                    y('[name="' + e + '"]').parent("label").removeClass("active"), t.parent("label").addClass("active")
                }
            }
        }, b = function(t) {
            function e(t) {
                return n.raw ? t : encodeURIComponent(t)
            }

            function i(e, i) {
                var a = n.raw ? e : function(t) {
                    0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
                    try {
                        return t = decodeURIComponent(t.replace(s, " ")), n.json ? JSON.parse(t) : t
                    } catch (t) {}
                }(e);
                return t.isFunction(i) ? i(a) : a
            }
            var s = /\+/g,
                n = t.cookie = function(s, a, o) {
                    if (void 0 != a && t.post("/ajax/geo.php"), arguments.length > 1 && !t.isFunction(a)) {
                        if ("number" == typeof(o = t.extend({}, n.defaults, o)).expires) {
                            var r = o.expires,
                                l = o.expires = new Date;
                            l.setMilliseconds(l.getMilliseconds() + 864e5 * r)
                        }
                        return document.cookie = [e(s), "=", (h = a, e(n.json ? JSON.stringify(h) : String(h))), o.expires ? "; expires=" + o.expires.toUTCString() : "", o.path ? "; path=" + o.path : "", o.domain ? "; domain=" + o.domain : "", o.secure ? "; secure" : ""].join("")
                    }
                    for (var h, c, d = s ? void 0 : {}, u = document.cookie ? document.cookie.split("; ") : [], p = 0, f = u.length; f > p; p++) {
                        var m = u[p].split("="),
                            g = (c = m.shift(), n.raw ? c : decodeURIComponent(c)),
                            v = m.join("=");
                        if (s === g) {
                            d = i(v, a);
                            break
                        }
                        s || void 0 === (v = i(v)) || (d[g] = v)
                    }
                    return d
                };
            n.defaults = {}, t.removeCookie = function(e, i) {
                return t.cookie(e, "", t.extend({}, i, {
                    expires: -1
                })), !t.cookie(e)
            }
        }, "function" == typeof define && define.amd ? define(["jquery"], b) : "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? module.exports = b(require("jquery")) : b(jQuery), t.cookie("KEY_CITY1111") || t.getScript("https://api-maps.yandex.ru/2.0-stable/?load=package.standard&lang=ru-RU", function(e, i, s) {
            var n = {
                    latitude: 0,
                    longitude: 0
                },
                a = {
                    latitude: 0,
                    longitude: 0
                };
            window.ymaps && ymaps.ready(function() {
                n.latitude = ymaps.geolocation.latitude, n.longitude = ymaps.geolocation.longitude
            });
            var o = function(e) {
                var i = 999999999,
                    s = null;
                t("#bitrix_search_location").find("[value]").each(function() {
                    var n = t(this).attr("value").split(";"),
                        a = {
                            key: n[0],
                            latitude: n[1],
                            longitude: n[2]
                        },
                        o = Math.sqrt(Math.pow(a.latitude - e.latitude, 2) + Math.pow(a.longitude - e.longitude, 2));
                    i > o && (i = o, s = a.key)
                }), t.cookie("KEY_CITY1111", s, {
                    expires: 365,
                    path: "/"
                }), t.post("/ajax/geo.php", function() {
                    window.location.reload()
                })
            };
            "geolocation" in navigator ? navigator.geolocation.getCurrentPosition(function(t) {
                a.latitude = t.coords.latitude, a.longitude = t.coords.longitude, o(a)
            }, function() {
                o(n)
            }) : o(n)
        }), _ = function(t) {
            function e(e, s) {
                var n, a, o, r = e.nodeName.toLowerCase();
                return "area" === r ? (a = (n = e.parentNode).name, !(!e.href || !a || "map" !== n.nodeName.toLowerCase()) && (!!(o = t("img[usemap='#" + a + "']")[0]) && i(o))) : (/^(input|select|textarea|button|object)$/.test(r) ? !e.disabled : "a" === r && e.href || s) && i(e)
            }

            function i(e) {
                return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
                    return "hidden" === t.css(this, "visibility")
                }).length
            }

            function s() {
                this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                    closeText: "Done",
                    prevText: "Prev",
                    nextText: "Next",
                    currentText: "Today",
                    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                    weekHeader: "Wk",
                    dateFormat: "dd-mm-yy",
                    firstDay: 1,
                    isRTL: !1,
                    showMonthAfterYear: !1,
                    yearSuffix: ""
                }, this._defaults = {
                    showOn: "focus",
                    showAnim: "fadeIn",
                    showOptions: {},
                    defaultDate: null,
                    appendText: "",
                    buttonText: "...",
                    buttonImage: "",
                    buttonImageOnly: !1,
                    hideIfNoPrevNext: !1,
                    navigationAsDateFormat: !1,
                    gotoCurrent: !1,
                    changeMonth: !1,
                    changeYear: !1,
                    yearRange: "c-10:c+10",
                    showOtherMonths: !1,
                    selectOtherMonths: !1,
                    showWeek: !1,
                    calculateWeek: this.iso8601Week,
                    shortYearCutoff: "+10",
                    minDate: null,
                    maxDate: null,
                    duration: "fast",
                    beforeShowDay: null,
                    beforeShow: null,
                    onSelect: null,
                    onChangeMonthYear: null,
                    onClose: null,
                    numberOfMonths: 1,
                    showCurrentAtPos: 0,
                    stepMonths: 1,
                    stepBigMonths: 12,
                    altField: "",
                    altFormat: "",
                    constrainInput: !0,
                    showButtonPanel: !1,
                    autoSize: !1,
                    disabled: !1
                }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = n(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
            }

            function n(e) {
                var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
                return e.delegate(i, "mouseout", function() {
                    t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
                }).delegate(i, "mouseover", a)
            }

            function a() {
                t.datepicker._isDisabledDatepicker(v.inline ? v.dpDiv.parent()[0] : v.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
            }

            function o(e, i) {
                t.extend(e, i);
                for (var s in i) null == i[s] && (e[s] = i[s]);
                return e
            }

            function r(t) {
                return function() {
                    var e = this.element.val();
                    t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
                }
            }
            var l, h, c, d;
            t.ui = t.ui || {}, t.extend(t.ui, {
                version: "1.11.4",
                keyCode: {
                    BACKSPACE: 8,
                    COMMA: 188,
                    DELETE: 46,
                    DOWN: 40,
                    END: 35,
                    ENTER: 13,
                    ESCAPE: 27,
                    HOME: 36,
                    LEFT: 37,
                    PAGE_DOWN: 34,
                    PAGE_UP: 33,
                    PERIOD: 190,
                    RIGHT: 39,
                    SPACE: 32,
                    TAB: 9,
                    UP: 38
                }
            }), t.fn.extend({
                scrollParent: function(e) {
                    var i = this.css("position"),
                        s = "absolute" === i,
                        n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                        a = this.parents().filter(function() {
                            var e = t(this);
                            return (!s || "static" !== e.css("position")) && n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                        }).eq(0);
                    return "fixed" !== i && a.length ? a : t(this[0].ownerDocument || document)
                },
                uniqueId: (d = 0, function() {
                    return this.each(function() {
                        this.id || (this.id = "ui-id-" + ++d)
                    })
                }),
                removeUniqueId: function() {
                    return this.each(function() {
                        /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
                    })
                }
            }), t.extend(t.expr[":"], {
                data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
                    return function(i) {
                        return !!t.data(i, e)
                    }
                }) : function(e, i, s) {
                    return !!t.data(e, s[3])
                },
                focusable: function(i) {
                    return e(i, !isNaN(t.attr(i, "tabindex")))
                },
                tabbable: function(i) {
                    var s = t.attr(i, "tabindex"),
                        n = isNaN(s);
                    return (n || s >= 0) && e(i, !n)
                }
            }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(e, i) {
                function s(e, i, s, a) {
                    return t.each(n, function() {
                        i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), a && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
                    }), i
                }
                var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                    a = i.toLowerCase(),
                    o = {
                        innerWidth: t.fn.innerWidth,
                        innerHeight: t.fn.innerHeight,
                        outerWidth: t.fn.outerWidth,
                        outerHeight: t.fn.outerHeight
                    };
                t.fn["inner" + i] = function(e) {
                    return void 0 === e ? o["inner" + i].call(this) : this.each(function() {
                        t(this).css(a, s(this, e) + "px")
                    })
                }, t.fn["outer" + i] = function(e, n) {
                    return "number" != typeof e ? o["outer" + i].call(this, e) : this.each(function() {
                        t(this).css(a, s(this, e, !0, n) + "px")
                    })
                }
            }), t.fn.addBack || (t.fn.addBack = function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = (c = t.fn.removeData, function(e) {
                return arguments.length ? c.call(this, t.camelCase(e)) : c.call(this)
            })), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.fn.extend({
                focus: (h = t.fn.focus, function(e, i) {
                    return "number" == typeof e ? this.each(function() {
                        var s = this;
                        setTimeout(function() {
                            t(s).focus(), i && i.call(s)
                        }, e)
                    }) : h.apply(this, arguments)
                }),
                disableSelection: (l = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function() {
                    return this.bind(l + ".ui-disableSelection", function(t) {
                        t.preventDefault()
                    })
                }),
                enableSelection: function() {
                    return this.unbind(".ui-disableSelection")
                },
                zIndex: function(e) {
                    if (void 0 !== e) return this.css("zIndex", e);
                    if (this.length)
                        for (var i, s, n = t(this[0]); n.length && n[0] !== document;) {
                            if (("absolute" === (i = n.css("position")) || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                            n = n.parent()
                        }
                    return 0
                }
            }), t.ui.plugin = {
                add: function(e, i, s) {
                    var n, a = t.ui[e].prototype;
                    for (n in s) a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]])
                },
                call: function(t, e, i, s) {
                    var n, a = t.plugins[e];
                    if (a && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                        for (n = 0; n < a.length; n++) t.options[a[n][0]] && a[n][1].apply(t.element, i)
                }
            };
            var u, p = 0,
                f = Array.prototype.slice;
            t.cleanData = (u = t.cleanData, function(e) {
                var i, s, n;
                for (n = 0; null != (s = e[n]); n++) try {
                    (i = t._data(s, "events")) && i.remove && t(s).triggerHandler("remove")
                } catch (t) {}
                u(e)
            }), t.widget = function(e, i, s) {
                var n, a, o, r, l = {},
                    h = e.split(".")[0];
                return e = e.split(".")[1], n = h + "-" + e, s || (s = i, i = t.Widget), t.expr[":"][n.toLowerCase()] = function(e) {
                    return !!t.data(e, n)
                }, t[h] = t[h] || {}, a = t[h][e], o = t[h][e] = function(t, e) {
                    return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new o(t, e)
                }, t.extend(o, a, {
                    version: s.version,
                    _proto: t.extend({}, s),
                    _childConstructors: []
                }), (r = new i).options = t.widget.extend({}, r.options), t.each(s, function(e, s) {
                    return t.isFunction(s) ? void(l[e] = (n = function() {
                        return i.prototype[e].apply(this, arguments)
                    }, a = function(t) {
                        return i.prototype[e].apply(this, t)
                    }, function() {
                        var t, e = this._super,
                            i = this._superApply;
                        return this._super = n, this._superApply = a, t = s.apply(this, arguments), this._super = e, this._superApply = i, t
                    })) : void(l[e] = s);
                    var n, a
                }), o.prototype = t.widget.extend(r, {
                    widgetEventPrefix: a && r.widgetEventPrefix || e
                }, l, {
                    constructor: o,
                    namespace: h,
                    widgetName: e,
                    widgetFullName: n
                }), a ? (t.each(a._childConstructors, function(e, i) {
                    var s = i.prototype;
                    t.widget(s.namespace + "." + s.widgetName, o, i._proto)
                }), delete a._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
            }, t.widget.extend = function(e) {
                for (var i, s, n = f.call(arguments, 1), a = 0, o = n.length; o > a; a++)
                    for (i in n[a]) s = n[a][i], n[a].hasOwnProperty(i) && void 0 !== s && (t.isPlainObject(s) ? e[i] = t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : e[i] = s);
                return e
            }, t.widget.bridge = function(e, i) {
                var s = i.prototype.widgetFullName || e;
                t.fn[e] = function(n) {
                    var a = "string" == typeof n,
                        o = f.call(arguments, 1),
                        r = this;
                    return a ? this.each(function() {
                        var i, a = t.data(this, s);
                        return "instance" === n ? (r = a, !1) : a ? t.isFunction(a[n]) && "_" !== n.charAt(0) ? (i = a[n].apply(a, o)) !== a && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0 : t.error("no such method '" + n + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + n + "'")
                    }) : (o.length && (n = t.widget.extend.apply(null, [n].concat(o))), this.each(function() {
                        var e = t.data(this, s);
                        e ? (e.option(n || {}), e._init && e._init()) : t.data(this, s, new i(n, this))
                    })), r
                }
            }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: {
                    disabled: !1,
                    create: null
                },
                _createWidget: function(e, i) {

                    try{
                    i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = p++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                        remove: function(t) {
                            t.target === i && this.destroy()
                        }
                    }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()


                    }catch(e){



                    }

                    },
                _getCreateOptions: t.noop,
                _getCreateEventData: t.noop,
                _create: t.noop,
                _init: t.noop,
                destroy: function() {
                    this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
                },
                _destroy: t.noop,
                widget: function() {
                    return this.element
                },
                option: function(e, i) {
                    var s, n, a, o = e;
                    if (0 === arguments.length) return t.widget.extend({}, this.options);
                    if ("string" == typeof e)
                        if (o = {}, s = e.split("."), e = s.shift(), s.length) {
                            for (n = o[e] = t.widget.extend({}, this.options[e]), a = 0; a < s.length - 1; a++) n[s[a]] = n[s[a]] || {}, n = n[s[a]];
                            if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
                            n[e] = i
                        } else {
                            if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                            o[e] = i
                        }
                    return this._setOptions(o), this
                },
                _setOptions: function(t) {
                    var e;
                    for (e in t) this._setOption(e, t[e]);
                    return this
                },
                _setOption: function(t, e) {
                    return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
                },
                enable: function() {
                    return this._setOptions({
                        disabled: !1
                    })
                },
                disable: function() {
                    return this._setOptions({
                        disabled: !0
                    })
                },
                _on: function(e, i, s) {
                    var n, a = this;
                    "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function(s, o) {
                        function r() {
                            return e || !0 !== a.options.disabled && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0
                        }
                        "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || t.guid++);
                        var l = s.match(/^([\w:-]*)\s*(.*)$/),
                            h = l[1] + a.eventNamespace,
                            c = l[2];
                        c ? n.delegate(c, h, r) : i.bind(h, r)
                    })
                },
                _off: function(e, i) {
                    i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(i).undelegate(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
                },
                _delay: function(t, e) {
                    var i = this;
                    return setTimeout(function() {
                        return ("string" == typeof t ? i[t] : t).apply(i, arguments)
                    }, e || 0)
                },
                _hoverable: function(e) {
                    this.hoverable = this.hoverable.add(e), this._on(e, {
                        mouseenter: function(e) {
                            t(e.currentTarget).addClass("ui-state-hover")
                        },
                        mouseleave: function(e) {
                            t(e.currentTarget).removeClass("ui-state-hover")
                        }
                    })
                },
                _focusable: function(e) {
                    this.focusable = this.focusable.add(e), this._on(e, {
                        focusin: function(e) {
                            t(e.currentTarget).addClass("ui-state-focus")
                        },
                        focusout: function(e) {
                            t(e.currentTarget).removeClass("ui-state-focus")
                        }
                    })
                },
                _trigger: function(e, i, s) {
                    var n, a, o = this.options[e];
                    if (s = s || {}, (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
                        for (n in a) n in i || (i[n] = a[n]);
                    return this.element.trigger(i, s), !(t.isFunction(o) && !1 === o.apply(this.element[0], [i].concat(s)) || i.isDefaultPrevented())
                }
            }, t.each({
                show: "fadeIn",
                hide: "fadeOut"
            }, function(e, i) {
                t.Widget.prototype["_" + e] = function(s, n, a) {
                    "string" == typeof n && (n = {
                        effect: n
                    });
                    var o, r = n ? !0 === n || "number" == typeof n ? i : n.effect || i : e;
                    "number" == typeof(n = n || {}) && (n = {
                        duration: n
                    }), o = !t.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function(i) {
                        t(this)[e](), a && a.call(s[0]), i()
                    })
                }
            });
            var m = (t.widget, !1);
            t(document).mouseup(function() {
                    m = !1
                }), t.widget("ui.mouse", {
                    version: "1.11.4",
                    options: {
                        cancel: "input,textarea,button,select,option",
                        distance: 1,
                        delay: 0
                    },
                    _mouseInit: function() {
                        var e = this;
                        this.element.bind("mousedown." + this.widgetName, function(t) {
                            return e._mouseDown(t)
                        }).bind("click." + this.widgetName, function(i) {
                            return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
                        }), this.started = !1
                    },
                    _mouseDestroy: function() {
                        this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
                    },
                    _mouseDown: function(e) {
                        if (!m) {
                            this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                            var i = this,
                                s = 1 === e.which,
                                n = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                            return !(s && !n && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                                i.mouseDelayMet = !0
                            }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                                return i._mouseMove(t)
                            }, this._mouseUpDelegate = function(t) {
                                return i._mouseUp(t)
                            }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), m = !0, !0))
                        }
                    },
                    _mouseMove: function(e) {
                        if (this._mouseMoved) {
                            if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
                            if (!e.which) return this._mouseUp(e)
                        }
                        return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
                    },
                    _mouseUp: function(e) {
                        return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), m = !1, !1
                    },
                    _mouseDistanceMet: function(t) {
                        return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
                    },
                    _mouseDelayMet: function() {
                        return this.mouseDelayMet
                    },
                    _mouseStart: function() {},
                    _mouseDrag: function() {},
                    _mouseStop: function() {},
                    _mouseCapture: function() {
                        return !0
                    }
                }),
                function() {
                    function e(t, e, i) {
                        return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)]
                    }

                    function i(e, i) {
                        return parseInt(t.css(e, i), 10) || 0
                    }
                    t.ui = t.ui || {};
                    var s, n, a = Math.max,
                        o = Math.abs,
                        r = Math.round,
                        l = /left|center|right/,
                        h = /top|center|bottom/,
                        c = /[\+\-]\d+(\.[\d]+)?%?/,
                        d = /^\w+/,
                        u = /%$/,
                        p = t.fn.position;
                    t.position = {
                            scrollbarWidth: function() {
                                if (void 0 !== s) return s;
                                var e, i, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                                    a = n.children()[0];
                                return t("body").append(n), e = a.offsetWidth, n.css("overflow", "scroll"), e === (i = a.offsetWidth) && (i = n[0].clientWidth), n.remove(), s = e - i
                            },
                            getScrollInfo: function(e) {
                                var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                                    s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                                    n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth;
                                return {
                                    width: "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0,
                                    height: n ? t.position.scrollbarWidth() : 0
                                }
                            },
                            getWithinInfo: function(e) {
                                var i = t(e || window),
                                    s = t.isWindow(i[0]),
                                    n = !!i[0] && 9 === i[0].nodeType;
                                return {
                                    element: i,
                                    isWindow: s,
                                    isDocument: n,
                                    offset: i.offset() || {
                                        left: 0,
                                        top: 0
                                    },
                                    scrollLeft: i.scrollLeft(),
                                    scrollTop: i.scrollTop(),
                                    width: s || n ? i.width() : i.outerWidth(),
                                    height: s || n ? i.height() : i.outerHeight()
                                }
                            }
                        }, t.fn.position = function(s) {
                            if (!s || !s.of) return p.apply(this, arguments);
                            s = t.extend({}, s);
                            var u, f, m, g, v, _, b, y, w = t(s.of),
                                x = t.position.getWithinInfo(s.within),
                                C = t.position.getScrollInfo(x),
                                k = (s.collision || "flip").split(" "),
                                D = {};
                            return _ = 9 === (y = (b = w)[0]).nodeType ? {
                                width: b.width(),
                                height: b.height(),
                                offset: {
                                    top: 0,
                                    left: 0
                                }
                            } : t.isWindow(y) ? {
                                width: b.width(),
                                height: b.height(),
                                offset: {
                                    top: b.scrollTop(),
                                    left: b.scrollLeft()
                                }
                            } : y.preventDefault ? {
                                width: 0,
                                height: 0,
                                offset: {
                                    top: y.pageY,
                                    left: y.pageX
                                }
                            } : {
                                width: b.outerWidth(),
                                height: b.outerHeight(),
                                offset: b.offset()
                            }, w[0].preventDefault && (s.at = "left top"), f = _.width, m = _.height, g = _.offset, v = t.extend({}, g), t.each(["my", "at"], function() {
                                var t, e, i = (s[this] || "").split(" ");
                                1 === i.length && (i = l.test(i[0]) ? i.concat(["center"]) : h.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = l.test(i[0]) ? i[0] : "center", i[1] = h.test(i[1]) ? i[1] : "center", t = c.exec(i[0]), e = c.exec(i[1]), D[this] = [t ? t[0] : 0, e ? e[0] : 0], s[this] = [d.exec(i[0])[0], d.exec(i[1])[0]]
                            }), 1 === k.length && (k[1] = k[0]), "right" === s.at[0] ? v.left += f : "center" === s.at[0] && (v.left += f / 2), "bottom" === s.at[1] ? v.top += m : "center" === s.at[1] && (v.top += m / 2), u = e(D.at, f, m), v.left += u[0], v.top += u[1], this.each(function() {
                                var l, h, c = t(this),
                                    d = c.outerWidth(),
                                    p = c.outerHeight(),
                                    _ = i(this, "marginLeft"),
                                    b = i(this, "marginTop"),
                                    y = d + _ + i(this, "marginRight") + C.width,
                                    S = p + b + i(this, "marginBottom") + C.height,
                                    T = t.extend({}, v),
                                    I = e(D.my, c.outerWidth(), c.outerHeight());
                                "right" === s.my[0] ? T.left -= d : "center" === s.my[0] && (T.left -= d / 2), "bottom" === s.my[1] ? T.top -= p : "center" === s.my[1] && (T.top -= p / 2), T.left += I[0], T.top += I[1], n || (T.left = r(T.left), T.top = r(T.top)), l = {
                                    marginLeft: _,
                                    marginTop: b
                                }, t.each(["left", "top"], function(e, i) {
                                    t.ui.position[k[e]] && t.ui.position[k[e]][i](T, {
                                        targetWidth: f,
                                        targetHeight: m,
                                        elemWidth: d,
                                        elemHeight: p,
                                        collisionPosition: l,
                                        collisionWidth: y,
                                        collisionHeight: S,
                                        offset: [u[0] + I[0], u[1] + I[1]],
                                        my: s.my,
                                        at: s.at,
                                        within: x,
                                        elem: c
                                    })
                                }), s.using && (h = function(t) {
                                    var e = g.left - T.left,
                                        i = e + f - d,
                                        n = g.top - T.top,
                                        r = n + m - p,
                                        l = {
                                            target: {
                                                element: w,
                                                left: g.left,
                                                top: g.top,
                                                width: f,
                                                height: m
                                            },
                                            element: {
                                                element: c,
                                                left: T.left,
                                                top: T.top,
                                                width: d,
                                                height: p
                                            },
                                            horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                                            vertical: 0 > r ? "top" : n > 0 ? "bottom" : "middle"
                                        };
                                    d > f && o(e + i) < f && (l.horizontal = "center"), p > m && o(n + r) < m && (l.vertical = "middle"), a(o(e), o(i)) > a(o(n), o(r)) ? l.important = "horizontal" : l.important = "vertical", s.using.call(this, t, l)
                                }), c.offset(t.extend(T, {
                                    using: h
                                }))
                            })
                        }, t.ui.position = {
                            fit: {
                                left: function(t, e) {
                                    var i, s = e.within,
                                        n = s.isWindow ? s.scrollLeft : s.offset.left,
                                        o = s.width,
                                        r = t.left - e.collisionPosition.marginLeft,
                                        l = n - r,
                                        h = r + e.collisionWidth - o - n;
                                    e.collisionWidth > o ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - o - n, t.left += l - i) : t.left = h > 0 && 0 >= l ? n : l > h ? n + o - e.collisionWidth : n : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = a(t.left - r, t.left)
                                },
                                top: function(t, e) {
                                    var i, s = e.within,
                                        n = s.isWindow ? s.scrollTop : s.offset.top,
                                        o = e.within.height,
                                        r = t.top - e.collisionPosition.marginTop,
                                        l = n - r,
                                        h = r + e.collisionHeight - o - n;
                                    e.collisionHeight > o ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - o - n, t.top += l - i) : t.top = h > 0 && 0 >= l ? n : l > h ? n + o - e.collisionHeight : n : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = a(t.top - r, t.top)
                                }
                            },
                            flip: {
                                left: function(t, e) {
                                    var i, s, n = e.within,
                                        a = n.offset.left + n.scrollLeft,
                                        r = n.width,
                                        l = n.isWindow ? n.scrollLeft : n.offset.left,
                                        h = t.left - e.collisionPosition.marginLeft,
                                        c = h - l,
                                        d = h + e.collisionWidth - r - l,
                                        u = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                                        p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                                        f = -2 * e.offset[0];
                                    0 > c ? (0 > (i = t.left + u + p + f + e.collisionWidth - r - a) || i < o(c)) && (t.left += u + p + f) : d > 0 && (((s = t.left - e.collisionPosition.marginLeft + u + p + f - l) > 0 || o(s) < d) && (t.left += u + p + f))
                                },
                                top: function(t, e) {
                                    var i, s, n = e.within,
                                        a = n.offset.top + n.scrollTop,
                                        r = n.height,
                                        l = n.isWindow ? n.scrollTop : n.offset.top,
                                        h = t.top - e.collisionPosition.marginTop,
                                        c = h - l,
                                        d = h + e.collisionHeight - r - l,
                                        u = "top" === e.my[1],
                                        p = u ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                                        f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                                        m = -2 * e.offset[1];
                                    0 > c ? (0 > (s = t.top + p + f + m + e.collisionHeight - r - a) || s < o(c)) && (t.top += p + f + m) : d > 0 && (((i = t.top - e.collisionPosition.marginTop + p + f + m - l) > 0 || o(i) < d) && (t.top += p + f + m))
                                }
                            },
                            flipfit: {
                                left: function() {
                                    t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                                },
                                top: function() {
                                    t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                                }
                            }
                        },
                        function() {
                            var e, i, s, a, o, r = document.getElementsByTagName("body")[0],
                                l = document.createElement("div");
                            e = document.createElement(r ? "div" : "body"), s = {
                                visibility: "hidden",
                                width: 0,
                                height: 0,
                                border: 0,
                                margin: 0,
                                background: "none"
                            }, r && t.extend(s, {
                                position: "absolute",
                                left: "-1000px",
                                top: "-1000px"
                            });
                            for (o in s) e.style[o] = s[o];
                            e.appendChild(l), (i = r || document.documentElement).insertBefore(e, i.firstChild), l.style.cssText = "position: absolute; left: 10.7432222px;", a = t(l).offset().left, n = a > 10 && 11 > a, e.innerHTML = "", i.removeChild(e)
                        }()
                }(), t.ui.position, t.widget("ui.accordion", {
                    version: "1.11.4",
                    options: {
                        active: 0,
                        animate: {},
                        collapsible: !1,
                        event: "click",
                        header: "> li > :first-child,> :not(li):even",
                        heightStyle: "auto",
                        icons: {
                            activeHeader: "ui-icon-triangle-1-s",
                            header: "ui-icon-triangle-1-e"
                        },
                        activate: null,
                        beforeActivate: null
                    },
                    hideProps: {
                        borderTopWidth: "hide",
                        borderBottomWidth: "hide",
                        paddingTop: "hide",
                        paddingBottom: "hide",
                        height: "hide"
                    },
                    showProps: {
                        borderTopWidth: "show",
                        borderBottomWidth: "show",
                        paddingTop: "show",
                        paddingBottom: "show",
                        height: "show"
                    },
                    _create: function() {
                        var e = this.options;
                        this.prevShow = this.prevHide = t(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), e.collapsible || !1 !== e.active && null != e.active || (e.active = 0), this._processPanels(), e.active < 0 && (e.active += this.headers.length), this._refresh()
                    },
                    _getCreateEventData: function() {
                        return {
                            header: this.active,
                            panel: this.active.length ? this.active.next() : t()
                        }
                    },
                    _createIcons: function() {
                        var e = this.options.icons;
                        e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader), this.headers.addClass("ui-accordion-icons"))
                    },
                    _destroyIcons: function() {
                        this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
                    },
                    _destroy: function() {
                        var t;
                        this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
                    },
                    _setOption: function(t, e) {
                        return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), void("disabled" === t && (this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e))))
                    },
                    _keydown: function(e) {
                        if (!e.altKey && !e.ctrlKey) {
                            var i = t.ui.keyCode,
                                s = this.headers.length,
                                n = this.headers.index(e.target),
                                a = !1;
                            switch (e.keyCode) {
                                case i.RIGHT:
                                case i.DOWN:
                                    a = this.headers[(n + 1) % s];
                                    break;
                                case i.LEFT:
                                case i.UP:
                                    a = this.headers[(n - 1 + s) % s];
                                    break;
                                case i.SPACE:
                                case i.ENTER:
                                    this._eventHandler(e);
                                    break;
                                case i.HOME:
                                    a = this.headers[0];
                                    break;
                                case i.END:
                                    a = this.headers[s - 1]
                            }
                            a && (t(e.target).attr("tabIndex", -1), t(a).attr("tabIndex", 0), a.focus(), e.preventDefault())
                        }
                    },
                    _panelKeyDown: function(e) {
                        e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus()
                    },
                    refresh: function() {
                        var e = this.options;
                        this._processPanels(), !1 === e.active && !0 === e.collapsible || !this.headers.length ? (e.active = !1, this.active = t()) : !1 === e.active ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
                    },
                    _processPanels: function() {
                        var t = this.headers,
                            e = this.panels;
                        this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"), this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
                    },
                    _refresh: function() {
                        var e, i = this.options,
                            s = i.heightStyle,
                            n = this.element.parent();
                        this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function() {
                            var e = t(this),
                                i = e.uniqueId().attr("id"),
                                s = e.next(),
                                n = s.uniqueId().attr("id");
                            e.attr("aria-controls", n), s.attr("aria-labelledby", i)
                        }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                            "aria-selected": "false",
                            "aria-expanded": "false",
                            tabIndex: -1
                        }).next().attr({
                            "aria-hidden": "true"
                        }).hide(), this.active.length ? this.active.attr({
                            "aria-selected": "true",
                            "aria-expanded": "true",
                            tabIndex: 0
                        }).next().attr({
                            "aria-hidden": "false"
                        }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (e = n.height(), this.element.siblings(":visible").each(function() {
                            var i = t(this),
                                s = i.css("position");
                            "absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0))
                        }), this.headers.each(function() {
                            e -= t(this).outerHeight(!0)
                        }), this.headers.next().each(function() {
                            t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
                        }).css("overflow", "auto")) : "auto" === s && (e = 0, this.headers.next().each(function() {
                            e = Math.max(e, t(this).css("height", "").height())
                        }).height(e))
                    },
                    _activate: function(e) {
                        var i = this._findActive(e)[0];
                        i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                            target: i,
                            currentTarget: i,
                            preventDefault: t.noop
                        }))
                    },
                    _findActive: function(e) {
                        return "number" == typeof e ? this.headers.eq(e) : t()
                    },
                    _setupEvents: function(e) {
                        var i = {
                            keydown: "_keydown"
                        };
                        e && t.each(e.split(" "), function(t, e) {
                            i[e] = "_eventHandler"
                        }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
                            keydown: "_panelKeyDown"
                        }), this._hoverable(this.headers), this._focusable(this.headers)
                    },
                    _eventHandler: function(e) {
                        var i = this.options,
                            s = this.active,
                            n = t(e.currentTarget),
                            a = n[0] === s[0],
                            o = a && i.collapsible,
                            r = o ? t() : n.next(),
                            l = {
                                oldHeader: s,
                                oldPanel: s.next(),
                                newHeader: o ? t() : n,
                                newPanel: r
                            };
                        e.preventDefault(), a && !i.collapsible || !1 === this._trigger("beforeActivate", e, l) || (i.active = !o && this.headers.index(n), this.active = a ? t() : n, this._toggle(l), s.removeClass("ui-accordion-header-active ui-state-active"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), a || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), n.next().addClass("ui-accordion-content-active")))
                    },
                    _toggle: function(e) {
                        var i = e.newPanel,
                            s = this.prevShow.length ? this.prevShow : e.oldPanel;
                        this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({
                            "aria-hidden": "true"
                        }), s.prev().attr({
                            "aria-selected": "false",
                            "aria-expanded": "false"
                        }), i.length && s.length ? s.prev().attr({
                            tabIndex: -1,
                            "aria-expanded": "false"
                        }) : i.length && this.headers.filter(function() {
                            return 0 === parseInt(t(this).attr("tabIndex"), 10)
                        }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
                            "aria-selected": "true",
                            "aria-expanded": "true",
                            tabIndex: 0
                        })
                    },
                    _animate: function(t, e, i) {
                        var s, n, a, o = this,
                            r = 0,
                            l = t.css("box-sizing"),
                            h = t.length && (!e.length || t.index() < e.index()),
                            c = this.options.animate || {},
                            d = h && c.down || c,
                            u = function() {
                                o._toggleComplete(i)
                            };
                        return "number" == typeof d && (a = d), "string" == typeof d && (n = d), n = n || d.easing || c.easing, a = a || d.duration || c.duration, e.length ? t.length ? (s = t.show().outerHeight(), e.animate(this.hideProps, {
                            duration: a,
                            easing: n,
                            step: function(t, e) {
                                e.now = Math.round(t)
                            }
                        }), void t.hide().animate(this.showProps, {
                            duration: a,
                            easing: n,
                            complete: u,
                            step: function(t, i) {
                                i.now = Math.round(t), "height" !== i.prop ? "content-box" === l && (r += i.now) : "content" !== o.options.heightStyle && (i.now = Math.round(s - e.outerHeight() - r), r = 0)
                            }
                        })) : e.animate(this.hideProps, a, n, u) : t.animate(this.showProps, a, n, u)
                    },
                    _toggleComplete: function(t) {
                        var e = t.oldPanel;
                        e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
                    }
                }), t.widget("ui.menu", {
                    version: "1.11.4",
                    defaultElement: "<ul>",
                    delay: 300,
                    options: {
                        icons: {
                            submenu: "ui-icon-carat-1-e"
                        },
                        items: "> *",
                        menus: "ul",
                        position: {
                            my: "left-1 top",
                            at: "right top"
                        },
                        role: "menu",
                        blur: null,
                        focus: null,
                        select: null
                    },
                    _create: function() {
                        this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                            role: this.options.role,
                            tabIndex: 0
                        }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                            "mousedown .ui-menu-item": function(t) {
                                t.preventDefault()
                            },
                            "click .ui-menu-item": function(e) {
                                var i = t(e.target);
                                !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && t(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                            },
                            "mouseenter .ui-menu-item": function(e) {
                                if (!this.previousFilter) {
                                    var i = t(e.currentTarget);
                                    i.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i)
                                }
                            },
                            mouseleave: "collapseAll",
                            "mouseleave .ui-menu": "collapseAll",
                            focus: function(t, e) {
                                var i = this.active || this.element.find(this.options.items).eq(0);
                                e || this.focus(t, i)
                            },
                            blur: function(e) {
                                this._delay(function() {
                                    t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                                })
                            },
                            keydown: "_keydown"
                        }), this.refresh(), this._on(this.document, {
                            click: function(t) {
                                this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
                            }
                        })
                    },
                    _destroy: function() {
                        this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                            var e = t(this);
                            e.data("ui-menu-submenu-carat") && e.remove()
                        }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
                    },
                    _keydown: function(e) {
                        var i, s, n, a, o = !0;
                        switch (e.keyCode) {
                            case t.ui.keyCode.PAGE_UP:
                                this.previousPage(e);
                                break;
                            case t.ui.keyCode.PAGE_DOWN:
                                this.nextPage(e);
                                break;
                            case t.ui.keyCode.HOME:
                                this._move("first", "first", e);
                                break;
                            case t.ui.keyCode.END:
                                this._move("last", "last", e);
                                break;
                            case t.ui.keyCode.UP:
                                this.previous(e);
                                break;
                            case t.ui.keyCode.DOWN:
                                this.next(e);
                                break;
                            case t.ui.keyCode.LEFT:
                                this.collapse(e);
                                break;
                            case t.ui.keyCode.RIGHT:
                                this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                                break;
                            case t.ui.keyCode.ENTER:
                            case t.ui.keyCode.SPACE:
                                this._activate(e);
                                break;
                            case t.ui.keyCode.ESCAPE:
                                this.collapse(e);
                                break;
                            default:
                                o = !1, s = this.previousFilter || "", n = String.fromCharCode(e.keyCode), a = !1, clearTimeout(this.filterTimer), n === s ? a = !0 : n = s + n, i = this._filterMenuItems(n), (i = a && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i).length || (n = String.fromCharCode(e.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(e, i), this.previousFilter = n, this.filterTimer = this._delay(function() {
                                    delete this.previousFilter
                                }, 1e3)) : delete this.previousFilter
                        }
                        o && e.preventDefault()
                    },
                    _activate: function(t) {
                        this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(t) : this.select(t))
                    },
                    refresh: function() {
                        var e, i = this,
                            s = this.options.icons.submenu,
                            n = this.element.find(this.options.menus);
                        this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), n.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                            role: this.options.role,
                            "aria-hidden": "true",
                            "aria-expanded": "false"
                        }).each(function() {
                            var e = t(this),
                                i = e.parent(),
                                n = t("<span>").addClass("ui-menu-icon ui-icon " + s).data("ui-menu-submenu-carat", !0);
                            i.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", i.attr("id"))
                        }), (e = n.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function() {
                            var e = t(this);
                            i._isDivider(e) && e.addClass("ui-widget-content ui-menu-divider")
                        }), e.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                            tabIndex: -1,
                            role: this._itemRole()
                        }), e.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
                    },
                    _itemRole: function() {
                        return {
                            menu: "menuitem",
                            listbox: "option"
                        }[this.options.role]
                    },
                    _setOption: function(t, e) {
                        "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this._super(t, e)
                    },
                    focus: function(t, e) {
                        var i, s;
                        this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                            this._close()
                        }, this.delay), (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
                            item: e
                        })
                    },
                    _scrollIntoView: function(e) {
                        var i, s, n, a, o, r;
                        this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = e.outerHeight(), 0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r))
                    },
                    blur: function(t, e) {
                        e || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
                            item: this.active
                        }))
                    },
                    _startOpening: function(t) {
                        clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                            this._close(), this._open(t)
                        }, this.delay))
                    },
                    _open: function(e) {
                        var i = t.extend({
                            of: this.active
                        }, this.options.position);
                        clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
                    },
                    collapseAll: function(e, i) {
                        clearTimeout(this.timer), this.timer = this._delay(function() {
                            var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                            s.length || (s = this.element), this._close(s), this.blur(e), this.activeMenu = s
                        }, this.delay)
                    },
                    _close: function(t) {
                        t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
                    },
                    _closeOnDocumentClick: function(e) {
                        return !t(e.target).closest(".ui-menu").length
                    },
                    _isDivider: function(t) {
                        return !/[^\-\u2014\u2013\s]/.test(t.text())
                    },
                    collapse: function(t) {
                        var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                        e && e.length && (this._close(), this.focus(t, e))
                    },
                    expand: function(t) {
                        var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                        e && e.length && (this._open(e.parent()), this._delay(function() {
                            this.focus(t, e)
                        }))
                    },
                    next: function(t) {
                        this._move("next", "first", t)
                    },
                    previous: function(t) {
                        this._move("prev", "last", t)
                    },
                    isFirstItem: function() {
                        return this.active && !this.active.prevAll(".ui-menu-item").length
                    },
                    isLastItem: function() {
                        return this.active && !this.active.nextAll(".ui-menu-item").length
                    },
                    _move: function(t, e, i) {
                        var s;
                        this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s)
                    },
                    nextPage: function(e) {
                        var i, s, n;
                        return this.active ? void(this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                            return (i = t(this)).offset().top - s - n < 0
                        }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(e)
                    },
                    previousPage: function(e) {
                        var i, s, n;
                        return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                            return (i = t(this)).offset().top - s + n > 0
                        }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))) : void this.next(e)
                    },
                    _hasScroll: function() {
                        return this.element.outerHeight() < this.element.prop("scrollHeight")
                    },
                    select: function(e) {
                        this.active = this.active || t(e.target).closest(".ui-menu-item");
                        var i = {
                            item: this.active
                        };
                        this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
                    },
                    _filterMenuItems: function(e) {
                        var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                            s = new RegExp("^" + i, "i");
                        return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                            return s.test(t.trim(t(this).text()))
                        })
                    }
                }), t.widget("ui.autocomplete", {
                    version: "1.11.4",
                    defaultElement: "<input>",
                    options: {
                        appendTo: null,
                        autoFocus: !1,
                        delay: 300,
                        minLength: 1,
                        position: {
                            my: "left top",
                            at: "left bottom",
                            collision: "none"
                        },
                        source: null,
                        change: null,
                        close: null,
                        focus: null,
                        open: null,
                        response: null,
                        search: null,
                        select: null
                    },
                    requestIndex: 0,
                    pending: 0,
                    _create: function() {
                        var e, i, s, n = this.element[0].nodeName.toLowerCase(),
                            a = "textarea" === n,
                            o = "input" === n;
                        this.isMultiLine = !!a || !o && this.element.prop("isContentEditable"), this.valueMethod = this.element[a || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                            keydown: function(n) {
                                if (this.element.prop("readOnly")) return e = !0, s = !0, void(i = !0);
                                e = !1, s = !1, i = !1;
                                var a = t.ui.keyCode;
                                switch (n.keyCode) {
                                    case a.PAGE_UP:
                                        e = !0, this._move("previousPage", n);
                                        break;
                                    case a.PAGE_DOWN:
                                        e = !0, this._move("nextPage", n);
                                        break;
                                    case a.UP:
                                        e = !0, this._keyEvent("previous", n);
                                        break;
                                    case a.DOWN:
                                        e = !0, this._keyEvent("next", n);
                                        break;
                                    case a.ENTER:
                                        this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
                                        break;
                                    case a.TAB:
                                        this.menu.active && this.menu.select(n);
                                        break;
                                    case a.ESCAPE:
                                        this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
                                        break;
                                    default:
                                        i = !0, this._searchTimeout(n)
                                }
                            },
                            keypress: function(s) {
                                if (e) return e = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault());
                                if (!i) {
                                    var n = t.ui.keyCode;
                                    switch (s.keyCode) {
                                        case n.PAGE_UP:
                                            this._move("previousPage", s);
                                            break;
                                        case n.PAGE_DOWN:
                                            this._move("nextPage", s);
                                            break;
                                        case n.UP:
                                            this._keyEvent("previous", s);
                                            break;
                                        case n.DOWN:
                                            this._keyEvent("next", s)
                                    }
                                }
                            },
                            input: function(t) {
                                return s ? (s = !1, void t.preventDefault()) : void this._searchTimeout(t)
                            },
                            focus: function() {
                                this.selectedItem = null, this.previous = this._value()
                            },
                            blur: function(t) {
                                return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
                            }
                        }), this._initSource(), this.menu = t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                            role: null
                        }).hide().menu("instance"), this._on(this.menu.element, {
                            mousedown: function(e) {
                                e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                                    delete this.cancelBlur
                                });
                                var i = this.menu.element[0];
                                t(e.target).closest(".ui-menu-item").length || this._delay(function() {
                                    var e = this;
                                    this.document.one("mousedown", function(s) {
                                        s.target === e.element[0] || s.target === i || t.contains(i, s.target) || e.close()
                                    })
                                })
                            },
                            menufocus: function(e, i) {
                                var s, n;
                                return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function() {
                                    t(e.target).trigger(e.originalEvent)
                                })) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
                                    item: n
                                }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value), void((s = i.item.attr("aria-label") || n.value) && t.trim(s).length && (this.liveRegion.children().hide(), t("<div>").text(s).appendTo(this.liveRegion))))
                            },
                            menuselect: function(t, e) {
                                var i = e.item.data("ui-autocomplete-item"),
                                    s = this.previous;
                                this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function() {
                                    this.previous = s, this.selectedItem = i
                                })), !1 !== this._trigger("select", t, {
                                    item: i
                                }) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
                            }
                        }), this.liveRegion = t("<span>", {
                            role: "status",
                            "aria-live": "assertive",
                            "aria-relevant": "additions"
                        }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
                            beforeunload: function() {
                                this.element.removeAttr("autocomplete")
                            }
                        })
                    },
                    _destroy: function() {
                        clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
                    },
                    _setOption: function(t, e) {
                        this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
                    },
                    _appendTo: function() {
                        var e = this.options.appendTo;
                        return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front")), e.length || (e = this.document[0].body), e
                    },
                    _initSource: function() {
                        var e, i, s = this;
                        t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, s) {
                            s(t.ui.autocomplete.filter(e, i.term))
                        }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, n) {
                            s.xhr && s.xhr.abort(), s.xhr = t.ajax({
                                url: i,
                                data: e,
                                dataType: "json",
                                success: function(t) {
                                    n(t)
                                },
                                error: function() {
                                    n([])
                                }
                            })
                        }) : this.source = this.options.source
                    },
                    _searchTimeout: function(t) {
                        clearTimeout(this.searching), this.searching = this._delay(function() {
                            var e = this.term === this._value(),
                                i = this.menu.element.is(":visible"),
                                s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                            (!e || e && !i && !s) && (this.selectedItem = null, this.search(null, t))
                        }, this.options.delay)
                    },
                    search: function(t, e) {
                        return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0
                    },
                    _search: function(t) {
                        this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                            term: t
                        }, this._response())
                    },
                    _response: function() {
                        var e = ++this.requestIndex;
                        return t.proxy(function(t) {
                            e === this.requestIndex && this.__response(t), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
                        }, this)
                    },
                    __response: function(t) {
                        t && (t = this._normalize(t)), this._trigger("response", null, {
                            content: t
                        }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
                    },
                    close: function(t) {
                        this.cancelSearch = !0, this._close(t)
                    },
                    _close: function(t) {
                        this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
                    },
                    _change: function(t) {
                        this.previous !== this._value() && this._trigger("change", t, {
                            item: this.selectedItem
                        })
                    },
                    _normalize: function(e) {
                        return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
                            return "string" == typeof e ? {
                                label: e,
                                value: e
                            } : t.extend({}, e, {
                                label: e.label || e.value,
                                value: e.value || e.label
                            })
                        })
                    },
                    _suggest: function(e) {
                        var i = this.menu.element.empty();
                        this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({
                            of: this.element
                        }, this.options.position)), this.options.autoFocus && this.menu.next()
                    },
                    _resizeMenu: function() {
                        var t = this.menu.element;
                        t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
                    },
                    _renderMenu: function(e, i) {
                        var s = this;
                        t.each(i, function(t, i) {
                            s._renderItemData(e, i)
                        })
                    },
                    _renderItemData: function(t, e) {
                        return this._renderItem(t, e).data("ui-autocomplete-item", e)
                    },
                    _renderItem: function(e, i) {
                        return t("<li>").text(i.label).appendTo(e)
                    },
                    _move: function(t, e) {
                        return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
                    },
                    widget: function() {
                        return this.menu.element
                    },
                    _value: function() {
                        return this.valueMethod.apply(this.element, arguments)
                    },
                    _keyEvent: function(t, e) {
                        (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
                    }
                }), t.extend(t.ui.autocomplete, {
                    escapeRegex: function(t) {
                        return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                    },
                    filter: function(e, i) {
                        var s = new RegExp(t.ui.autocomplete.escapeRegex(i), "i");
                        return t.grep(e, function(t) {
                            return s.test(t.label || t.value || t)
                        })
                    }
                }), t.widget("ui.autocomplete", t.ui.autocomplete, {
                    options: {
                        messages: {
                            noResults: "No search results.",
                            results: function(t) {
                                return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                            }
                        }
                    },
                    __response: function(e) {
                        var i;
                        this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
                    }
                });
            var g, v, _ = (t.ui.autocomplete, "ui-button ui-widget ui-state-default ui-corner-all"),
                b = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
                y = function() {
                    var e = t(this);
                    setTimeout(function() {
                        e.find(":ui-button").button("refresh")
                    }, 1)
                },
                w = function(e) {
                    var i = e.name,
                        s = e.form,
                        n = t([]);
                    return i && (i = i.replace(/'/g, "\\'"), n = s ? t(s).find("[name='" + i + "'][type=radio]") : t("[name='" + i + "'][type=radio]", e.ownerDocument).filter(function() {
                        return !this.form
                    })), n
                };
            t.widget("ui.button", {
                version: "1.11.4",
                defaultElement: "<button>",
                options: {
                    disabled: null,
                    text: !0,
                    label: null,
                    icons: {
                        primary: null,
                        secondary: null
                    }
                },
                _create: function() {
                    this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, y), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
                    var e = this,
                        i = this.options,
                        s = "checkbox" === this.type || "radio" === this.type,
                        n = s ? "" : "ui-state-active";
                    null === i.label && (i.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(_).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                        i.disabled || this === g && t(this).addClass("ui-state-active")
                    }).bind("mouseleave" + this.eventNamespace, function() {
                        i.disabled || t(this).removeClass(n)
                    }).bind("click" + this.eventNamespace, function(t) {
                        i.disabled && (t.preventDefault(), t.stopImmediatePropagation())
                    }), this._on({
                        focus: function() {
                            this.buttonElement.addClass("ui-state-focus")
                        },
                        blur: function() {
                            this.buttonElement.removeClass("ui-state-focus")
                        }
                    }), s && this.element.bind("change" + this.eventNamespace, function() {
                        e.refresh()
                    }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                        return !i.disabled && void 0
                    }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                        if (i.disabled) return !1;
                        t(this).addClass("ui-state-active"), e.buttonElement.attr("aria-pressed", "true");
                        var s = e.element[0];
                        w(s).not(s).map(function() {
                            return t(this).button("widget")[0]
                        }).removeClass("ui-state-active").attr("aria-pressed", "false")
                    }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                        return !i.disabled && (t(this).addClass("ui-state-active"), g = this, void e.document.one("mouseup", function() {
                            g = null
                        }))
                    }).bind("mouseup" + this.eventNamespace, function() {
                        return !i.disabled && void t(this).removeClass("ui-state-active")
                    }).bind("keydown" + this.eventNamespace, function(e) {
                        return !i.disabled && void((e.keyCode === t.ui.keyCode.SPACE || e.keyCode === t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active"))
                    }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                        t(this).removeClass("ui-state-active")
                    }), this.buttonElement.is("a") && this.buttonElement.keyup(function(e) {
                        e.keyCode === t.ui.keyCode.SPACE && t(this).click()
                    })), this._setOption("disabled", i.disabled), this._resetButton()
                },
                _determineButtonType: function() {
                    var t, e, i;
                    this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button", "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), (i = this.element.is(":checked")) && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
                },
                widget: function() {
                    return this.buttonElement
                },
                _destroy: function() {
                    this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(_ + " ui-state-active " + b).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
                },
                _setOption: function(t, e) {
                    return this._super(t, e), "disabled" === t ? (this.widget().toggleClass("ui-state-disabled", !!e), this.element.prop("disabled", !!e), void(e && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")))) : void this._resetButton()
                },
                refresh: function() {
                    var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
                    e !== this.options.disabled && this._setOption("disabled", e), "radio" === this.type ? w(this.element[0]).each(function() {
                        t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                    }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
                },
                _resetButton: function() {
                    if ("input" !== this.type) {
                        var e = this.buttonElement.removeClass(b),
                            i = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),
                            s = this.options.icons,
                            n = s.primary && s.secondary,
                            a = [];
                        s.primary || s.secondary ? (this.options.text && a.push("ui-button-text-icon" + (n ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (a.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || e.attr("title", t.trim(i)))) : a.push("ui-button-text-only"), e.addClass(a.join(" "))
                    } else this.options.label && this.element.val(this.options.label)
                }
            }), t.widget("ui.buttonset", {
                version: "1.11.4",
                options: {
                    items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
                },
                _create: function() {
                    this.element.addClass("ui-buttonset")
                },
                _init: function() {
                    this.refresh()
                },
                _setOption: function(t, e) {
                    "disabled" === t && this.buttons.button("option", t, e), this._super(t, e)
                },
                refresh: function() {
                    var e = "rtl" === this.element.css("direction"),
                        i = this.element.find(this.options.items),
                        s = i.filter(":ui-button");
                    i.not(":ui-button").button(), s.button("refresh"), this.buttons = i.map(function() {
                        return t(this).button("widget")[0]
                    }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
                },
                _destroy: function() {
                    this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                        return t(this).button("widget")[0]
                    }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
                }
            }), t.ui.button, t.extend(t.ui, {
                datepicker: {
                    version: "1.11.4"
                }
            }), t.extend(s.prototype, {
                markerClassName: "hasDatepicker",
                maxRows: 4,
                _widgetDatepicker: function() {
                    return this.dpDiv
                },
                setDefaults: function(t) {
                    return o(this._defaults, t || {}), this
                },
                _attachDatepicker: function(e, i) {
                    var s, n, a;
                    n = "div" === (s = e.nodeName.toLowerCase()) || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), (a = this._newInst(t(e), n)).settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, a) : n && this._inlineDatepicker(e, a)
                },
                _newInst: function(e, i) {
                    return {
                        id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                        input: e,
                        selectedDay: 0,
                        selectedMonth: 0,
                        selectedYear: 0,
                        drawMonth: 0,
                        drawYear: 0,
                        inline: i,
                        dpDiv: i ? n(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                    }
                },
                _connectDatepicker: function(e, i) {
                    var s = t(e);
                    i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
                },
                _attachments: function(e, i) {
                    var s, n, a, o = this._get(i, "appendText"),
                        r = this._get(i, "isRTL");
                    i.append && i.append.remove(), o && (i.append = t("<span class='" + this._appendClass + "'>" + o + "</span>"), e[r ? "before" : "after"](i.append)), e.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), ("focus" === (s = this._get(i, "showOn")) || "both" === s) && e.focus(this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), a = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                        src: a,
                        alt: n,
                        title: n
                    }) : t("<button type='button'></button>").addClass(this._triggerClass).html(a ? t("<img/>").attr({
                        src: a,
                        alt: n,
                        title: n
                    }) : n)), e[r ? "before" : "after"](i.trigger), i.trigger.click(function() {
                        return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
                    }))
                },
                _autoSize: function(t) {
                    if (this._get(t, "autoSize") && !t.inline) {
                        var e, i, s, n, a = new Date(2009, 11, 20),
                            o = this._get(t, "dateFormat");
                        o.match(/[DM]/) && (e = function(t) {
                            for (i = 0, s = 0, n = 0; n < t.length; n++) t[n].length > i && (i = t[n].length, s = n);
                            return s
                        }, a.setMonth(e(this._get(t, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), a.setDate(e(this._get(t, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), t.input.attr("size", this._formatDate(t, a).length)
                    }
                },
                _inlineDatepicker: function(e, i) {
                    var s = t(e);
                    s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
                },
                _dialogDatepicker: function(e, i, s, n, a) {
                    var r, l, h, c, d, u = this._dialogInst;
                    return u || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), t("body").append(this._dialogInput), (u = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, t.data(this._dialogInput[0], "datepicker", u)), o(u.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(u, i) : i, this._dialogInput.val(i), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (l = document.documentElement.clientWidth, h = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + c, h / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), u.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", u), this
                },
                _destroyDatepicker: function(e) {
                    var i, s = t(e),
                        n = t.data(e, "datepicker");
                    s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), v === n && (v = null))
                },
                _enableDatepicker: function(e) {
                    var i, s, n = t(e),
                        a = t.data(e, "datepicker");
                    n.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !1, a.trigger.filter("button").each(function() {
                        this.disabled = !1
                    }).end().filter("img").css({
                        opacity: "1.0",
                        cursor: ""
                    })) : ("div" === i || "span" === i) && ((s = n.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                        return t === e ? null : t
                    }))
                },
                _disableDatepicker: function(e) {
                    var i, s, n = t(e),
                        a = t.data(e, "datepicker");
                    n.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !0, a.trigger.filter("button").each(function() {
                        this.disabled = !0
                    }).end().filter("img").css({
                        opacity: "0.5",
                        cursor: "default"
                    })) : ("div" === i || "span" === i) && ((s = n.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                        return t === e ? null : t
                    }), this._disabledInputs[this._disabledInputs.length] = e)
                },
                _isDisabledDatepicker: function(t) {
                    if (!t) return !1;
                    for (var e = 0; e < this._disabledInputs.length; e++)
                        if (this._disabledInputs[e] === t) return !0;
                    return !1
                },
                _getInst: function(e) {
                    try {
                        return t.data(e, "datepicker")
                    } catch (t) {
                        throw "Missing instance data for this datepicker"
                    }
                },
                _optionDatepicker: function(e, i, s) {
                    var n, a, r, l, h = this._getInst(e);
                    return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : h ? "all" === i ? t.extend({}, h.settings) : this._get(h, i) : null : (n = i || {}, "string" == typeof i && ((n = {})[i] = s), void(h && (this._curInst === h && this._hideDatepicker(), a = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(h, "min"), l = this._getMinMaxDate(h, "max"), o(h.settings, n), null !== r && void 0 !== n.dateFormat && void 0 === n.minDate && (h.settings.minDate = this._formatDate(h, r)), null !== l && void 0 !== n.dateFormat && void 0 === n.maxDate && (h.settings.maxDate = this._formatDate(h, l)), "disabled" in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), h), this._autoSize(h), this._setDate(h, a), this._updateAlternate(h), this._updateDatepicker(h))))
                },
                _changeDatepicker: function(t, e, i) {
                    this._optionDatepicker(t, e, i)
                },
                _refreshDatepicker: function(t) {
                    var e = this._getInst(t);
                    e && this._updateDatepicker(e)
                },
                _setDateDatepicker: function(t, e) {
                    var i = this._getInst(t);
                    i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
                },
                _getDateDatepicker: function(t, e) {
                    var i = this._getInst(t);
                    return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
                },
                _doKeyDown: function(e) {
                    var i, s, n, a = t.datepicker._getInst(e.target),
                        o = !0,
                        r = a.dpDiv.is(".ui-datepicker-rtl");
                    if (a._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                        case 9:
                            t.datepicker._hideDatepicker(), o = !1;
                            break;
                        case 13:
                            return (n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", a.dpDiv))[0] && t.datepicker._selectDay(e.target, a.selectedMonth, a.selectedYear, n[0]), (i = t.datepicker._get(a, "onSelect")) ? (s = t.datepicker._formatDate(a), i.apply(a.input ? a.input[0] : null, [s, a])) : t.datepicker._hideDatepicker(), !1;
                        case 27:
                            t.datepicker._hideDatepicker();
                            break;
                        case 33:
                            t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(a, "stepBigMonths") : -t.datepicker._get(a, "stepMonths"), "M");
                            break;
                        case 34:
                            t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(a, "stepBigMonths") : +t.datepicker._get(a, "stepMonths"), "M");
                            break;
                        case 35:
                            (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), o = e.ctrlKey || e.metaKey;
                            break;
                        case 36:
                            (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), o = e.ctrlKey || e.metaKey;
                            break;
                        case 37:
                            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), o = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(a, "stepBigMonths") : -t.datepicker._get(a, "stepMonths"), "M");
                            break;
                        case 38:
                            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), o = e.ctrlKey || e.metaKey;
                            break;
                        case 39:
                            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), o = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(a, "stepBigMonths") : +t.datepicker._get(a, "stepMonths"), "M");
                            break;
                        case 40:
                            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), o = e.ctrlKey || e.metaKey;
                            break;
                        default:
                            o = !1
                    } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : o = !1;
                    o && (e.preventDefault(), e.stopPropagation())
                },
                _doKeyPress: function(e) {
                    var i, s, n = t.datepicker._getInst(e.target);
                    return t.datepicker._get(n, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0
                },
                _doKeyUp: function(e) {
                    var i = t.datepicker._getInst(e.target);
                    if (i.input.val() !== i.lastVal) try {
                        t.datepicker.parseDate(t.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, t.datepicker._getFormatConfig(i)) && (t.datepicker._setDateFromField(i), t.datepicker._updateAlternate(i), t.datepicker._updateDatepicker(i))
                    } catch (t) {}
                    return !0
                },
                _showDatepicker: function(e) {
                    var i, s, n, a, r, l, h;
                    ("input" !== (e = e.target || e).nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), t.datepicker._isDisabledDatepicker(e) || t.datepicker._lastInput === e) || (i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), !1 !== (n = (s = t.datepicker._get(i, "beforeShow")) ? s.apply(e, [e, i]) : {}) && (o(i.settings, n), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), a = !1, t(e).parents().each(function() {
                        return !(a |= "fixed" === t(this).css("position"))
                    }), r = {
                        left: t.datepicker._pos[0],
                        top: t.datepicker._pos[1]
                    }, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    }), t.datepicker._updateDatepicker(i), r = t.datepicker._checkOffset(i, r, a), i.dpDiv.css({
                        position: t.datepicker._inDialog && t.blockUI ? "static" : a ? "fixed" : "absolute",
                        display: "none",
                        left: r.left + "px",
                        top: r.top + "px"
                    }), i.inline || (l = t.datepicker._get(i, "showAnim"), h = t.datepicker._get(i, "duration"), i.dpDiv.css("z-index", function(t) {
                        for (var e, i; t.length && t[0] !== document;) {
                            if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                            t = t.parent()
                        }
                        return 0
                    }(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? i.dpDiv.show(l, t.datepicker._get(i, "showOptions"), h) : i.dpDiv[l || "show"](l ? h : null), t.datepicker._shouldFocusInput(i) && i.input.focus(), t.datepicker._curInst = i)))
                },
                _updateDatepicker: function(e) {
                    this.maxRows = 4, v = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
                    var i, s = this._getNumberOfMonths(e),
                        n = s[1],
                        o = e.dpDiv.find("." + this._dayOverClass + " a");
                    o.length > 0 && a.apply(o.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", 17 * n + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.focus(), e.yearshtml && (i = e.yearshtml, setTimeout(function() {
                        i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
                    }, 0))
                },
                _shouldFocusInput: function(t) {
                    return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
                },
                _checkOffset: function(e, i, s) {
                    var n = e.dpDiv.outerWidth(),
                        a = e.dpDiv.outerHeight(),
                        o = e.input ? e.input.outerWidth() : 0,
                        r = e.input ? e.input.outerHeight() : 0,
                        l = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
                        h = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
                    return i.left -= this._get(e, "isRTL") ? n - o : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > l && l > n ? Math.abs(i.left + n - l) : 0), i.top -= Math.min(i.top, i.top + a > h && h > a ? Math.abs(a + r) : 0), i
                },
                _findPos: function(e) {
                    for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[n ? "previousSibling" : "nextSibling"];
                    return [(i = t(e).offset()).left, i.top]
                },
                _hideDatepicker: function(e) {
                    var i, s, n, a, o = this._curInst;
                    !o || e && o !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(o, "showAnim"), s = this._get(o, "duration"), n = function() {
                        t.datepicker._tidyDialog(o)
                    }, t.effects && (t.effects.effect[i] || t.effects[i]) ? o.dpDiv.hide(i, t.datepicker._get(o, "showOptions"), s, n) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, (a = this._get(o, "onClose")) && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                        position: "absolute",
                        left: "0",
                        top: "-100px"
                    }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
                },
                _tidyDialog: function(t) {
                    t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
                },
                _checkExternalClick: function(e) {
                    if (t.datepicker._curInst) {
                        var i = t(e.target),
                            s = t.datepicker._getInst(i[0]);
                        (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker()
                    }
                },
                _adjustDate: function(e, i, s) {
                    var n = t(e),
                        a = this._getInst(n[0]);
                    this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(a, i + ("M" === s ? this._get(a, "showCurrentAtPos") : 0), s), this._updateDatepicker(a))
                },
                _gotoToday: function(e) {
                    var i, s = t(e),
                        n = this._getInst(s[0]);
                    this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
                },
                _selectMonthYear: function(e, i, s) {
                    var n = t(e),
                        a = this._getInst(n[0]);
                    a["selected" + ("M" === s ? "Month" : "Year")] = a["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(n)
                },
                _selectDay: function(e, i, s, n) {
                    var a, o = t(e);
                    t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || ((a = this._getInst(o[0])).selectedDay = a.currentDay = t("a", n).html(), a.selectedMonth = a.currentMonth = i, a.selectedYear = a.currentYear = s, this._selectDate(e, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)))
                },
                _clearDate: function(e) {
                    var i = t(e);
                    this._selectDate(i, "")
                },
                _selectDate: function(e, i) {
                    var s, n = t(e),
                        a = this._getInst(n[0]);
                    i = null != i ? i : this._formatDate(a), a.input && a.input.val(i), this._updateAlternate(a), (s = this._get(a, "onSelect")) ? s.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" !== _typeof(a.input[0]) && a.input.focus(), this._lastInput = null)
                },
                _updateAlternate: function(e) {
                    var i, s, n, a = this._get(e, "altField");
                    a && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(a).each(function() {
                        t(this).val(n)
                    }))
                },
                noWeekends: function(t) {
                    var e = t.getDay();
                    return [e > 0 && 6 > e, ""]
                },
                iso8601Week: function(t) {
                    var e, i = new Date(t.getTime());
                    return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
                },
                parseDate: function(e, i, s) {
                    if (null == e || null == i) throw "Invalid arguments";
                    if ("" === (i = "object" === (void 0 === i ? "undefined" : _typeof(i)) ? i.toString() : i + "")) return null;
                    var n, a, o, r, l = 0,
                        h = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                        c = "string" != typeof h ? h : (new Date).getFullYear() % 100 + parseInt(h, 10),
                        d = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
                        u = (s ? s.dayNames : null) || this._defaults.dayNames,
                        p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
                        f = (s ? s.monthNames : null) || this._defaults.monthNames,
                        m = -1,
                        g = -1,
                        v = -1,
                        _ = -1,
                        b = !1,
                        y = function(t) {
                            var i = n + 1 < e.length && e.charAt(n + 1) === t;
                            return i && n++, i
                        },
                        w = function(t) {
                            var e = y(t),
                                s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                                n = new RegExp("^\\d{" + ("y" === t ? s : 1) + "," + s + "}"),
                                a = i.substring(l).match(n);
                            if (!a) throw "Missing number at position " + l;
                            return l += a[0].length, parseInt(a[0], 10)
                        },
                        x = function(e, s, n) {
                            var a = -1,
                                o = t.map(y(e) ? n : s, function(t, e) {
                                    return [
                                        [e, t]
                                    ]
                                }).sort(function(t, e) {
                                    return -(t[1].length - e[1].length)
                                });
                            if (t.each(o, function(t, e) {
                                    var s = e[1];
                                    return i.substr(l, s.length).toLowerCase() === s.toLowerCase() ? (a = e[0], l += s.length, !1) : void 0
                                }), -1 !== a) return a + 1;
                            throw "Unknown name at position " + l
                        },
                        C = function() {
                            if (i.charAt(l) !== e.charAt(n)) throw "Unexpected literal at position " + l;
                            l++
                        };
                    for (n = 0; n < e.length; n++)
                        if (b) "'" !== e.charAt(n) || y("'") ? C() : b = !1;
                        else switch (e.charAt(n)) {
                            case "d":
                                v = w("d");
                                break;
                            case "D":
                                x("D", d, u);
                                break;
                            case "o":
                                _ = w("o");
                                break;
                            case "m":
                                g = w("m");
                                break;
                            case "M":
                                g = x("M", p, f);
                                break;
                            case "y":
                                m = w("y");
                                break;
                            case "@":
                                m = (r = new Date(w("@"))).getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                                break;
                            case "!":
                                m = (r = new Date((w("!") - this._ticksTo1970) / 1e4)).getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                                break;
                            case "'":
                                y("'") ? C() : b = !0;
                                break;
                            default:
                                C()
                        }
                        if (l < i.length && (o = i.substr(l), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
                    if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= m ? 0 : -100)), _ > -1)
                        for (g = 1, v = _; !((a = this._getDaysInMonth(m, g - 1)) >= v);) g++, v -= a;
                    if ((r = this._daylightSavingAdjust(new Date(m, g - 1, v))).getFullYear() !== m || r.getMonth() + 1 !== g || r.getDate() !== v) throw "Invalid date";
                    return r
                },
                ATOM: "yy-mm-dd",
                COOKIE: "D, dd M yy",
                ISO_8601: "yy-mm-dd",
                RFC_822: "D, d M y",
                RFC_850: "DD, dd-M-y",
                RFC_1036: "D, d M y",
                RFC_1123: "D, d M yy",
                RFC_2822: "D, d M yy",
                RSS: "D, d M y",
                TICKS: "!",
                TIMESTAMP: "@",
                W3C: "yy-mm-dd",
                _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
                formatDate: function(t, e, i) {
                    if (!e) return "";
                    var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                        a = (i ? i.dayNames : null) || this._defaults.dayNames,
                        o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                        r = (i ? i.monthNames : null) || this._defaults.monthNames,
                        l = function(e) {
                            var i = s + 1 < t.length && t.charAt(s + 1) === e;
                            return i && s++, i
                        },
                        h = function(t, e, i) {
                            var s = "" + e;
                            if (l(t))
                                for (; s.length < i;) s = "0" + s;
                            return s
                        },
                        c = function(t, e, i, s) {
                            return l(t) ? s[e] : i[e]
                        },
                        d = "",
                        u = !1;
                    if (e)
                        for (s = 0; s < t.length; s++)
                            if (u) "'" !== t.charAt(s) || l("'") ? d += t.charAt(s) : u = !1;
                            else switch (t.charAt(s)) {
                                case "d":
                                    d += h("d", e.getDate(), 2);
                                    break;
                                case "D":
                                    d += c("D", e.getDay(), n, a);
                                    break;
                                case "o":
                                    d += h("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                    break;
                                case "m":
                                    d += h("m", e.getMonth() + 1, 2);
                                    break;
                                case "M":
                                    d += c("M", e.getMonth(), o, r);
                                    break;
                                case "y":
                                    d += l("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0" : "") + e.getYear() % 100;
                                    break;
                                case "@":
                                    d += e.getTime();
                                    break;
                                case "!":
                                    d += 1e4 * e.getTime() + this._ticksTo1970;
                                    break;
                                case "'":
                                    l("'") ? d += "'" : u = !0;
                                    break;
                                default:
                                    d += t.charAt(s)
                            }
                            return d
                },
                _possibleChars: function(t) {
                    var e, i = "",
                        s = !1,
                        n = function(i) {
                            var s = e + 1 < t.length && t.charAt(e + 1) === i;
                            return s && e++, s
                        };
                    for (e = 0; e < t.length; e++)
                        if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
                        else switch (t.charAt(e)) {
                            case "d":
                            case "m":
                            case "y":
                            case "@":
                                i += "0123456789";
                                break;
                            case "D":
                            case "M":
                                return null;
                            case "'":
                                n("'") ? i += "'" : s = !0;
                                break;
                            default:
                                i += t.charAt(e)
                        }
                        return i
                },
                _get: function(t, e) {
                    return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
                },
                _setDateFromField: function(t, e) {
                    if (t.input.val() !== t.lastVal) {
                        var i = this._get(t, "dateFormat"),
                            s = t.lastVal = t.input ? t.input.val() : null,
                            n = this._getDefaultDate(t),
                            a = n,
                            o = this._getFormatConfig(t);
                        try {
                            a = this.parseDate(i, s, o) || n
                        } catch (t) {
                            s = e ? "" : s
                        }
                        t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), t.currentDay = s ? a.getDate() : 0, t.currentMonth = s ? a.getMonth() : 0, t.currentYear = s ? a.getFullYear() : 0, this._adjustInstDate(t)
                    }
                },
                _getDefaultDate: function(t) {
                    return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
                },
                _determineDate: function(e, i, s) {
                    var n, a, o = null == i || "" === i ? s : "string" == typeof i ? function(i) {
                        try {
                            return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                        } catch (t) {}
                        for (var s = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, n = s.getFullYear(), a = s.getMonth(), o = s.getDate(), r = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = r.exec(i); l;) {
                            switch (l[2] || "d") {
                                case "d":
                                case "D":
                                    o += parseInt(l[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    o += 7 * parseInt(l[1], 10);
                                    break;
                                case "m":
                                case "M":
                                    a += parseInt(l[1], 10), o = Math.min(o, t.datepicker._getDaysInMonth(n, a));
                                    break;
                                case "y":
                                case "Y":
                                    n += parseInt(l[1], 10), o = Math.min(o, t.datepicker._getDaysInMonth(n, a))
                            }
                            l = r.exec(i)
                        }
                        return new Date(n, a, o)
                    }(i) : "number" == typeof i ? isNaN(i) ? s : (n = i, (a = new Date).setDate(a.getDate() + n), a) : new Date(i.getTime());
                    return (o = o && "Invalid Date" === o.toString() ? s : o) && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
                },
                _daylightSavingAdjust: function(t) {
                    return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
                },
                _setDate: function(t, e, i) {
                    var s = !e,
                        n = t.selectedMonth,
                        a = t.selectedYear,
                        o = this._restrictMinMax(t, this._determineDate(t, e, new Date));
                    t.selectedDay = t.currentDay = o.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = o.getMonth(), t.drawYear = t.selectedYear = t.currentYear = o.getFullYear(), n === t.selectedMonth && a === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
                },
                _getDate: function(t) {
                    return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay))
                },
                _attachHandlers: function(e) {
                    var i = this._get(e, "stepMonths"),
                        s = "#" + e.id.replace(/\\\\/g, "\\");
                    e.dpDiv.find("[data-handler]").map(function() {
                        var e = {
                            prev: function() {
                                t.datepicker._adjustDate(s, -i, "M")
                            },
                            next: function() {
                                t.datepicker._adjustDate(s, +i, "M")
                            },
                            hide: function() {
                                t.datepicker._hideDatepicker()
                            },
                            today: function() {
                                t.datepicker._gotoToday(s)
                            },
                            selectDay: function() {
                                return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                            },
                            selectMonth: function() {
                                return t.datepicker._selectMonthYear(s, this, "M"), !1
                            },
                            selectYear: function() {
                                return t.datepicker._selectMonthYear(s, this, "Y"), !1
                            }
                        };
                        t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
                    })
                },
                _generateHTML: function(t) {
                    var e, i, s, n, a, o, r, l, h, c, d, u, p, f, m, g, v, _, b, y, w, x, C, k, D, S, T, I, M, P, O, E, A, z, N, H, W, B, R, F = new Date,
                        L = this._daylightSavingAdjust(new Date(F.getFullYear(), F.getMonth(), F.getDate())),
                        j = this._get(t, "isRTL"),
                        Y = this._get(t, "showButtonPanel"),
                        q = this._get(t, "hideIfNoPrevNext"),
                        U = this._get(t, "navigationAsDateFormat"),
                        V = this._getNumberOfMonths(t),
                        K = this._get(t, "showCurrentAtPos"),
                        X = this._get(t, "stepMonths"),
                        G = 1 !== V[0] || 1 !== V[1],
                        $ = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                        Q = this._getMinMaxDate(t, "min"),
                        Z = this._getMinMaxDate(t, "max"),
                        J = t.drawMonth - K,
                        tt = t.drawYear;
                    if (0 > J && (J += 12, tt--), Z)
                        for (e = this._daylightSavingAdjust(new Date(Z.getFullYear(), Z.getMonth() - V[0] * V[1] + 1, Z.getDate())), e = Q && Q > e ? Q : e; this._daylightSavingAdjust(new Date(tt, J, 1)) > e;) J--, 0 > J && (J = 11, tt--);
                    for (t.drawMonth = J, t.drawYear = tt, i = this._get(t, "prevText"), i = U ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, J - X, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, tt, J) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = U ? this.formatDate(n, this._daylightSavingAdjust(new Date(tt, J + X, 1)), this._getFormatConfig(t)) : n, a = this._canAdjustMonth(t, 1, tt, J) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "w" : "e") + "'>" + n + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "w" : "e") + "'>" + n + "</span></a>", o = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? $ : L, o = U ? this.formatDate(o, r, this._getFormatConfig(t)) : o, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", h = Y ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (j ? l : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (j ? "" : l) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, d = this._get(t, "showWeek"), u = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), m = this._get(t, "monthNamesShort"), g = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), _ = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", x = 0; x < V[0]; x++) {
                        for (C = "", this.maxRows = 4, k = 0; k < V[1]; k++) {
                            if (D = this._daylightSavingAdjust(new Date(tt, J, t.selectedDay)), S = " ui-corner-all", T = "", G) {
                                if (T += "<div class='ui-datepicker-group", V[1] > 1) switch (k) {
                                    case 0:
                                        T += " ui-datepicker-group-first", S = " ui-corner-" + (j ? "right" : "left");
                                        break;
                                    case V[1] - 1:
                                        T += " ui-datepicker-group-last", S = " ui-corner-" + (j ? "left" : "right");
                                        break;
                                    default:
                                        T += " ui-datepicker-group-middle", S = ""
                                }
                                T += "'>"
                            }
                            for (T += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + S + "'>" + (/all|left/.test(S) && 0 === x ? j ? a : s : "") + (/all|right/.test(S) && 0 === x ? j ? s : a : "") + this._generateMonthYearHeader(t, J, tt, Q, Z, x > 0 || k > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", I = d ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) M = (w + c) % 7, I += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + u[M] + "'>" + p[M] + "</span></th>";
                            for (T += I + "</tr></thead><tbody>", P = this._getDaysInMonth(tt, J), tt === t.selectedYear && J === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, P)), O = (this._getFirstDayOfMonth(tt, J) - c + 7) % 7, E = Math.ceil((O + P) / 7), A = G && this.maxRows > E ? this.maxRows : E, this.maxRows = A, z = this._daylightSavingAdjust(new Date(tt, J, 1 - O)), N = 0; A > N; N++) {
                                for (T += "<tr>", H = d ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(z) + "</td>" : "", w = 0; 7 > w; w++) W = g ? g.apply(t.input ? t.input[0] : null, [z]) : [!0, ""], B = z.getMonth() !== J, R = B && !_ || !W[0] || Q && Q > z || Z && z > Z, H += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (B ? " ui-datepicker-other-month" : "") + (z.getTime() === D.getTime() && J === t.selectedMonth && t._keyEvent || b.getTime() === z.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (R ? " " + this._unselectableClass + " ui-state-disabled" : "") + (B && !v ? "" : " " + W[1] + (z.getTime() === $.getTime() ? " " + this._currentClass : "") + (z.getTime() === L.getTime() ? " ui-datepicker-today" : "")) + "'" + (B && !v || !W[2] ? "" : " title='" + W[2].replace(/'/g, "&#39;") + "'") + (R ? "" : " data-handler='selectDay' data-event='click' data-month='" + z.getMonth() + "' data-year='" + z.getFullYear() + "'") + ">" + (B && !v ? "&#xa0;" : R ? "<span class='ui-state-default'>" + z.getDate() + "</span>" : "<a class='ui-state-default" + (z.getTime() === L.getTime() ? " ui-state-highlight" : "") + (z.getTime() === $.getTime() ? " ui-state-active" : "") + (B ? " ui-priority-secondary" : "") + "' href='#'>" + z.getDate() + "</a>") + "</td>", z.setDate(z.getDate() + 1), z = this._daylightSavingAdjust(z);
                                T += H + "</tr>"
                            }++J > 11 && (J = 0, tt++), C += T += "</tbody></table>" + (G ? "</div>" + (V[0] > 0 && k === V[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
                        }
                        y += C
                    }
                    return y += h, t._keyEvent = !1, y
                },
                _generateMonthYearHeader: function(t, e, i, s, n, a, o, r) {
                    var l, h, c, d, u, p, f, m, g = this._get(t, "changeMonth"),
                        v = this._get(t, "changeYear"),
                        _ = this._get(t, "showMonthAfterYear"),
                        b = "<div class='ui-datepicker-title'>",
                        y = "";
                    if (a || !g) y += "<span class='ui-datepicker-month'>" + o[e] + "</span>";
                    else {
                        for (l = s && s.getFullYear() === i, h = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!l || c >= s.getMonth()) && (!h || c <= n.getMonth()) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
                        y += "</select>"
                    }
                    if (_ || (b += y + (!a && g && v ? "" : "&#xa0;")), !t.yearshtml)
                        if (t.yearshtml = "", a || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
                        else {
                            for (d = this._get(t, "yearRange").split(":"), u = (new Date).getFullYear(), f = (p = function(t) {
                                    var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? u + parseInt(t, 10) : parseInt(t, 10);
                                    return isNaN(e) ? u : e
                                })(d[0]), m = Math.max(f, p(d[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, m = n ? Math.min(m, n.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                            t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
                        }
                    return b += this._get(t, "yearSuffix"), _ && (b += (!a && g && v ? "" : "&#xa0;") + y), b + "</div>"
                },
                _adjustInstDate: function(t, e, i) {
                    var s = t.drawYear + ("Y" === i ? e : 0),
                        n = t.drawMonth + ("M" === i ? e : 0),
                        a = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
                        o = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, a)));
                    t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
                },
                _restrictMinMax: function(t, e) {
                    var i = this._getMinMaxDate(t, "min"),
                        s = this._getMinMaxDate(t, "max"),
                        n = i && i > e ? i : e;
                    return s && n > s ? s : n
                },
                _notifyChange: function(t) {
                    var e = this._get(t, "onChangeMonthYear");
                    e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
                },
                _getNumberOfMonths: function(t) {
                    var e = this._get(t, "numberOfMonths");
                    return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
                },
                _getMinMaxDate: function(t, e) {
                    return this._determineDate(t, this._get(t, e + "Date"), null)
                },
                _getDaysInMonth: function(t, e) {
                    return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
                },
                _getFirstDayOfMonth: function(t, e) {
                    return new Date(t, e, 1).getDay()
                },
                _canAdjustMonth: function(t, e, i, s) {
                    var n = this._getNumberOfMonths(t),
                        a = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
                    return 0 > e && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(t, a)
                },
                _isInRange: function(t, e) {
                    var i, s, n = this._getMinMaxDate(t, "min"),
                        a = this._getMinMaxDate(t, "max"),
                        o = null,
                        r = null,
                        l = this._get(t, "yearRange");
                    return l && (i = l.split(":"), s = (new Date).getFullYear(), o = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (o += s), i[1].match(/[+\-].*/) && (r += s)), (!n || e.getTime() >= n.getTime()) && (!a || e.getTime() <= a.getTime()) && (!o || e.getFullYear() >= o) && (!r || e.getFullYear() <= r)
                },
                _getFormatConfig: function(t) {
                    var e = this._get(t, "shortYearCutoff");
                    return {
                        shortYearCutoff: e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10),
                        dayNamesShort: this._get(t, "dayNamesShort"),
                        dayNames: this._get(t, "dayNames"),
                        monthNamesShort: this._get(t, "monthNamesShort"),
                        monthNames: this._get(t, "monthNames")
                    }
                },
                _formatDate: function(t, e, i, s) {
                    e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
                    var n = e ? "object" === (void 0 === e ? "undefined" : _typeof(e)) ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                    return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
                }
            }), t.fn.datepicker = function(e) {
                if (!this.length) return this;
                t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
                var i = Array.prototype.slice.call(arguments, 1);
                return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
                    "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
                }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
            }, t.datepicker = new s, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.11.4", t.datepicker, t.widget("ui.draggable", t.ui.mouse, {
                version: "1.11.4",
                widgetEventPrefix: "drag",
                options: {
                    addClasses: !0,
                    appendTo: "parent",
                    axis: !1,
                    connectToSortable: !1,
                    containment: !1,
                    cursor: "auto",
                    cursorAt: !1,
                    grid: !1,
                    handle: !1,
                    helper: "original",
                    iframeFix: !1,
                    opacity: !1,
                    refreshPositions: !1,
                    revert: !1,
                    revertDuration: 500,
                    scope: "default",
                    scroll: !0,
                    scrollSensitivity: 20,
                    scrollSpeed: 20,
                    snap: !1,
                    snapMode: "both",
                    snapTolerance: 20,
                    stack: !1,
                    zIndex: !1,
                    drag: null,
                    start: null,
                    stop: null
                },
                _create: function() {
                    "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
                },
                _setOption: function(t, e) {
                    this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
                },
                _destroy: function() {
                    return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), void this._mouseDestroy())
                },
                _mouseCapture: function(e) {
                    var i = this.options;
                    return this._blurActiveElement(e), !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(e), !!this.handle && (this._blockFrames(!0 === i.iframeFix ? "iframe" : i.iframeFix), !0))
                },
                _blockFrames: function(e) {
                    this.iframeBlocks = this.document.find(e).map(function() {
                        var e = t(this);
                        return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
                    })
                },
                _unblockFrames: function() {
                    this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
                },
                _blurActiveElement: function(e) {
                    var i = this.document[0];
                    if (this.handleElement.is(e.target)) try {
                        i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && t(i.activeElement).blur()
                    } catch (t) {}
                },
                _mouseStart: function(e) {
                    var i = this.options;
                    return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                        return "fixed" === t(this).css("position")
                    }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), !1 === this._trigger("start", e) ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._normalizeRightBottom(), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
                },
                _refreshOffsets: function(t) {
                    this.offset = {
                        top: this.positionAbs.top - this.margins.top,
                        left: this.positionAbs.left - this.margins.left,
                        scroll: !1,
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }, this.offset.click = {
                        left: t.pageX - this.offset.left,
                        top: t.pageY - this.offset.top
                    }
                },
                _mouseDrag: function(e, i) {
                    if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                        var s = this._uiHash();
                        if (!1 === this._trigger("drag", e, s)) return this._mouseUp({}), !1;
                        this.position = s.position
                    }
                    return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
                },
                _mouseStop: function(e) {
                    var i = this,
                        s = !1;
                    return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || !0 === this.options.revert || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                        !1 !== i._trigger("stop", e) && i._clear()
                    }) : !1 !== this._trigger("stop", e) && this._clear(), !1
                },
                _mouseUp: function(e) {
                    return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.focus(), t.ui.mouse.prototype._mouseUp.call(this, e)
                },
                cancel: function() {
                    return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
                },
                _getHandle: function(e) {
                    return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length
                },
                _setHandleClassName: function() {
                    this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
                },
                _removeHandleClassName: function() {
                    this.handleElement.removeClass("ui-draggable-handle")
                },
                _createHelper: function(e) {
                    var i = this.options,
                        s = t.isFunction(i.helper),
                        n = s ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
                    return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
                },
                _setPositionRelative: function() {
                    /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
                },
                _adjustOffsetFromHelper: function(e) {
                    "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                        left: +e[0],
                        top: +e[1] || 0
                    }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
                },
                _isRootNode: function(t) {
                    return /(html|body)/i.test(t.tagName) || t === this.document[0]
                },
                _getParentOffset: function() {
                    var e = this.offsetParent.offset(),
                        i = this.document[0];
                    return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
                        top: 0,
                        left: 0
                    }), {
                        top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                        left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                    }
                },
                _getRelativeOffset: function() {
                    if ("relative" !== this.cssPosition) return {
                        top: 0,
                        left: 0
                    };
                    var t = this.element.position(),
                        e = this._isRootNode(this.scrollParent[0]);
                    return {
                        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
                    }
                },
                _cacheMargins: function() {
                    this.margins = {
                        left: parseInt(this.element.css("marginLeft"), 10) || 0,
                        top: parseInt(this.element.css("marginTop"), 10) || 0,
                        right: parseInt(this.element.css("marginRight"), 10) || 0,
                        bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                    }
                },
                _cacheHelperProportions: function() {
                    this.helperProportions = {
                        width: this.helper.outerWidth(),
                        height: this.helper.outerHeight()
                    }
                },
                _setContainment: function() {
                    var e, i, s, n = this.options,
                        a = this.document[0];
                    return this.relativeContainer = null, n.containment ? "window" === n.containment ? void(this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === n.containment ? void(this.containment = [0, 0, t(a).width() - this.helperProportions.width - this.margins.left, (t(a).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : n.containment.constructor === Array ? void(this.containment = n.containment) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), void((s = (i = t(n.containment))[0]) && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void(this.containment = null)
                },
                _convertPositionTo: function(t, e) {
                    e || (e = this.position);
                    var i = "absolute" === t ? 1 : -1,
                        s = this._isRootNode(this.scrollParent[0]);
                    return {
                        top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
                        left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
                    }
                },
                _generatePosition: function(t, e) {
                    var i, s, n, a, o = this.options,
                        r = this._isRootNode(this.scrollParent[0]),
                        l = t.pageX,
                        h = t.pageY;
                    return r && this.offset.scroll || (this.offset.scroll = {
                        top: this.scrollParent.scrollTop(),
                        left: this.scrollParent.scrollLeft()
                    }), e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, h = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, l = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a), "y" === o.axis && (l = this.originalPageX), "x" === o.axis && (h = this.originalPageY)), {
                        top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                        left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
                    }
                },
                _clear: function() {
                    this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
                },
                _normalizeRightBottom: function() {
                    "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
                },
                _trigger: function(e, i, s) {
                    return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, s)
                },
                plugins: {},
                _uiHash: function() {
                    return {
                        helper: this.helper,
                        position: this.position,
                        originalPosition: this.originalPosition,
                        offset: this.positionAbs
                    }
                }
            }), t.ui.plugin.add("draggable", "connectToSortable", {
                start: function(e, i, s) {
                    var n = t.extend({}, i, {
                        item: s.element
                    });
                    s.sortables = [], t(s.options.connectToSortable).each(function() {
                        var i = t(this).sortable("instance");
                        i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, n))
                    })
                },
                stop: function(e, i, s) {
                    var n = t.extend({}, i, {
                        item: s.element
                    });
                    s.cancelHelperRemoval = !1, t.each(s.sortables, function() {
                        var t = this;
                        t.isOver ? (t.isOver = 0, s.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
                            position: t.placeholder.css("position"),
                            top: t.placeholder.css("top"),
                            left: t.placeholder.css("left")
                        }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, n))
                    })
                },
                drag: function(e, i, s) {
                    t.each(s.sortables, function() {
                        var n = !1,
                            a = this;
                        a.positionAbs = s.positionAbs, a.helperProportions = s.helperProportions, a.offset.click = s.offset.click, a._intersectsWith(a.containerCache) && (n = !0, t.each(s.sortables, function() {
                            return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== a && this._intersectsWith(this.containerCache) && t.contains(a.element[0], this.element[0]) && (n = !1), n
                        })), n ? (a.isOver || (a.isOver = 1, s._parent = i.helper.parent(), a.currentItem = i.helper.appendTo(a.element).data("ui-sortable-item", !0), a.options._helper = a.options.helper, a.options.helper = function() {
                            return i.helper[0]
                        }, e.target = a.currentItem[0], a._mouseCapture(e, !0), a._mouseStart(e, !0, !0), a.offset.click.top = s.offset.click.top, a.offset.click.left = s.offset.click.left, a.offset.parent.left -= s.offset.parent.left - a.offset.parent.left, a.offset.parent.top -= s.offset.parent.top - a.offset.parent.top, s._trigger("toSortable", e), s.dropped = a.element, t.each(s.sortables, function() {
                            this.refreshPositions()
                        }), s.currentItem = s.element, a.fromOutside = s), a.currentItem && (a._mouseDrag(e), i.position = a.position)) : a.isOver && (a.isOver = 0, a.cancelHelperRemoval = !0, a.options._revert = a.options.revert, a.options.revert = !1, a._trigger("out", e, a._uiHash(a)), a._mouseStop(e, !0), a.options.revert = a.options._revert, a.options.helper = a.options._helper, a.placeholder && a.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(e), i.position = s._generatePosition(e, !0), s._trigger("fromSortable", e), s.dropped = !1, t.each(s.sortables, function() {
                            this.refreshPositions()
                        }))
                    })
                }
            }), t.ui.plugin.add("draggable", "cursor", {
                start: function(e, i, s) {
                    var n = t("body"),
                        a = s.options;
                    n.css("cursor") && (a._cursor = n.css("cursor")), n.css("cursor", a.cursor)
                },
                stop: function(e, i, s) {
                    var n = s.options;
                    n._cursor && t("body").css("cursor", n._cursor)
                }
            }), t.ui.plugin.add("draggable", "opacity", {
                start: function(e, i, s) {
                    var n = t(i.helper),
                        a = s.options;
                    n.css("opacity") && (a._opacity = n.css("opacity")), n.css("opacity", a.opacity)
                },
                stop: function(e, i, s) {
                    var n = s.options;
                    n._opacity && t(i.helper).css("opacity", n._opacity)
                }
            }), t.ui.plugin.add("draggable", "scroll", {
                start: function(t, e, i) {
                    i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
                },
                drag: function(e, i, s) {
                    var n = s.options,
                        a = !1,
                        o = s.scrollParentNotHidden[0],
                        r = s.document[0];
                    o !== r && "HTML" !== o.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + o.offsetHeight - e.pageY < n.scrollSensitivity ? o.scrollTop = a = o.scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (o.scrollTop = a = o.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + o.offsetWidth - e.pageX < n.scrollSensitivity ? o.scrollLeft = a = o.scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (o.scrollLeft = a = o.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(r).scrollTop() < n.scrollSensitivity ? a = t(r).scrollTop(t(r).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < n.scrollSensitivity && (a = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (e.pageX - t(r).scrollLeft() < n.scrollSensitivity ? a = t(r).scrollLeft(t(r).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < n.scrollSensitivity && (a = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))), !1 !== a && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e)
                }
            }), t.ui.plugin.add("draggable", "snap", {
                start: function(e, i, s) {
                    var n = s.options;
                    s.snapElements = [], t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
                        var e = t(this),
                            i = e.offset();
                        this !== s.element[0] && s.snapElements.push({
                            item: this,
                            width: e.outerWidth(),
                            height: e.outerHeight(),
                            top: i.top,
                            left: i.left
                        })
                    })
                },
                drag: function(e, i, s) {
                    var n, a, o, r, l, h, c, d, u, p, f = s.options,
                        m = f.snapTolerance,
                        g = i.offset.left,
                        v = g + s.helperProportions.width,
                        _ = i.offset.top,
                        b = _ + s.helperProportions.height;
                    for (u = s.snapElements.length - 1; u >= 0; u--) l = s.snapElements[u].left - s.margins.left, h = l + s.snapElements[u].width, c = s.snapElements[u].top - s.margins.top, d = c + s.snapElements[u].height, l - m > v || g > h + m || c - m > b || _ > d + m || !t.contains(s.snapElements[u].item.ownerDocument, s.snapElements[u].item) ? (s.snapElements[u].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {
                        snapItem: s.snapElements[u].item
                    })), s.snapElements[u].snapping = !1) : ("inner" !== f.snapMode && (n = Math.abs(c - b) <= m, a = Math.abs(d - _) <= m, o = Math.abs(l - v) <= m, r = Math.abs(h - g) <= m, n && (i.position.top = s._convertPositionTo("relative", {
                        top: c - s.helperProportions.height,
                        left: 0
                    }).top), a && (i.position.top = s._convertPositionTo("relative", {
                        top: d,
                        left: 0
                    }).top), o && (i.position.left = s._convertPositionTo("relative", {
                        top: 0,
                        left: l - s.helperProportions.width
                    }).left), r && (i.position.left = s._convertPositionTo("relative", {
                        top: 0,
                        left: h
                    }).left)), p = n || a || o || r, "outer" !== f.snapMode && (n = Math.abs(c - _) <= m, a = Math.abs(d - b) <= m, o = Math.abs(l - g) <= m, r = Math.abs(h - v) <= m, n && (i.position.top = s._convertPositionTo("relative", {
                        top: c,
                        left: 0
                    }).top), a && (i.position.top = s._convertPositionTo("relative", {
                        top: d - s.helperProportions.height,
                        left: 0
                    }).top), o && (i.position.left = s._convertPositionTo("relative", {
                        top: 0,
                        left: l
                    }).left), r && (i.position.left = s._convertPositionTo("relative", {
                        top: 0,
                        left: h - s.helperProportions.width
                    }).left)), !s.snapElements[u].snapping && (n || a || o || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {
                        snapItem: s.snapElements[u].item
                    })), s.snapElements[u].snapping = n || a || o || r || p)
                }
            }), t.ui.plugin.add("draggable", "stack", {
                start: function(e, i, s) {
                    var n, a = s.options,
                        o = t.makeArray(t(a.stack)).sort(function(e, i) {
                            return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                        });
                    o.length && (n = parseInt(t(o[0]).css("zIndex"), 10) || 0, t(o).each(function(e) {
                        t(this).css("zIndex", n + e)
                    }), this.css("zIndex", n + o.length))
                }
            }), t.ui.plugin.add("draggable", "zIndex", {
                start: function(e, i, s) {
                    var n = t(i.helper),
                        a = s.options;
                    n.css("zIndex") && (a._zIndex = n.css("zIndex")), n.css("zIndex", a.zIndex)
                },
                stop: function(e, i, s) {
                    var n = s.options;
                    n._zIndex && t(i.helper).css("zIndex", n._zIndex)
                }
            }), t.ui.draggable, t.widget("ui.resizable", t.ui.mouse, {
                version: "1.11.4",
                widgetEventPrefix: "resize",
                options: {
                    alsoResize: !1,
                    animate: !1,
                    animateDuration: "slow",
                    animateEasing: "swing",
                    aspectRatio: !1,
                    autoHide: !1,
                    containment: !1,
                    ghost: !1,
                    grid: !1,
                    handles: "e,s,se",
                    helper: !1,
                    maxHeight: null,
                    maxWidth: null,
                    minHeight: 10,
                    minWidth: 10,
                    zIndex: 90,
                    resize: null,
                    start: null,
                    stop: null
                },
                _num: function(t) {
                    return parseInt(t, 10) || 0
                },
                _isNumber: function(t) {
                    return !isNaN(parseInt(t, 10))
                },
                _hasScroll: function(e, i) {
                    if ("hidden" === t(e).css("overflow")) return !1;
                    var s = i && "left" === i ? "scrollLeft" : "scrollTop",
                        n = !1;
                    return e[s] > 0 || (e[s] = 1, n = e[s] > 0, e[s] = 0, n)
                },
                _create: function() {
                    var e, i, s, n, a, o = this,
                        r = this.options;
                    if (this.element.addClass("ui-resizable"), t.extend(this, {
                            _aspectRatio: !!r.aspectRatio,
                            aspectRatio: r.aspectRatio,
                            originalElement: this.element,
                            _proportionallyResizeElements: [],
                            _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
                        }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                            position: this.element.css("position"),
                            width: this.element.outerWidth(),
                            height: this.element.outerHeight(),
                            top: this.element.css("top"),
                            left: this.element.css("left")
                        })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                            marginLeft: this.originalElement.css("marginLeft"),
                            marginTop: this.originalElement.css("marginTop"),
                            marginRight: this.originalElement.css("marginRight"),
                            marginBottom: this.originalElement.css("marginBottom")
                        }), this.originalElement.css({
                            marginLeft: 0,
                            marginTop: 0,
                            marginRight: 0,
                            marginBottom: 0
                        }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                            position: "static",
                            zoom: 1,
                            display: "block"
                        })), this.originalElement.css({
                            margin: this.originalElement.css("margin")
                        }), this._proportionallyResize()), this.handles = r.handles || (t(".ui-resizable-handle", this.element).length ? {
                            n: ".ui-resizable-n",
                            e: ".ui-resizable-e",
                            s: ".ui-resizable-s",
                            w: ".ui-resizable-w",
                            se: ".ui-resizable-se",
                            sw: ".ui-resizable-sw",
                            ne: ".ui-resizable-ne",
                            nw: ".ui-resizable-nw"
                        } : "e,s,se"), this._handles = t(), this.handles.constructor === String)
                        for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, i = 0; i < e.length; i++) s = t.trim(e[i]), a = "ui-resizable-" + s, n = t("<div class='ui-resizable-handle " + a + "'></div>"), n.css({
                            zIndex: r.zIndex
                        }), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
                    this._renderAxis = function(e) {
                        var i, s, n, a;
                        e = e || this.element;
                        for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], {
                            mousedown: o._mouseDown
                        })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = t(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, a), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
                    }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.mouseover(function() {
                        o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se")
                    }), r.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                        r.disabled || (t(this).removeClass("ui-resizable-autohide"), o._handles.show())
                    }).mouseleave(function() {
                        r.disabled || o.resizing || (t(this).addClass("ui-resizable-autohide"), o._handles.hide())
                    })), this._mouseInit()
                },
                _destroy: function() {
                    this._mouseDestroy();
                    var e, i = function(e) {
                        t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                    };
                    return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                        position: e.css("position"),
                        width: e.outerWidth(),
                        height: e.outerHeight(),
                        top: e.css("top"),
                        left: e.css("left")
                    }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
                },
                _mouseCapture: function(e) {
                    var i, s, n = !1;
                    for (i in this.handles) s = t(this.handles[i])[0], (s === e.target || t.contains(s, e.target)) && (n = !0);
                    return !this.options.disabled && n
                },
                _mouseStart: function(e) {
                    var i, s, n, a = this.options,
                        o = this.element;
                    return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), a.containment && (i += t(a.containment).scrollLeft() || 0, s += t(a.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                        left: i,
                        top: s
                    }, this.size = this._helper ? {
                        width: this.helper.width(),
                        height: this.helper.height()
                    } : {
                        width: o.width(),
                        height: o.height()
                    }, this.originalSize = this._helper ? {
                        width: o.outerWidth(),
                        height: o.outerHeight()
                    } : {
                        width: o.width(),
                        height: o.height()
                    }, this.sizeDiff = {
                        width: o.outerWidth() - o.width(),
                        height: o.outerHeight() - o.height()
                    }, this.originalPosition = {
                        left: i,
                        top: s
                    }, this.originalMousePosition = {
                        left: e.pageX,
                        top: e.pageY
                    }, this.aspectRatio = "number" == typeof a.aspectRatio ? a.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), o.addClass("ui-resizable-resizing"), this._propagate("start", e), !0
                },
                _mouseDrag: function(e) {
                    var i, s, n = this.originalMousePosition,
                        a = this.axis,
                        o = e.pageX - n.left || 0,
                        r = e.pageY - n.top || 0,
                        l = this._change[a];
                    return this._updatePrevProperties(), !!l && (i = l.apply(this, [e, o, r]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1)
                },
                _mouseStop: function(e) {
                    this.resizing = !1;
                    var i, s, n, a, o, r, l, h = this.options,
                        c = this;
                    return this._helper && (n = (s = (i = this._proportionallyResizeElements).length && /textarea/i.test(i[0].nodeName)) && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, a = s ? 0 : c.sizeDiff.width, o = {
                        width: c.helper.width() - a,
                        height: c.helper.height() - n
                    }, r = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null, l = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null, h.animate || this.element.css(t.extend(o, {
                        top: l,
                        left: r
                    })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !h.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
                },
                _updatePrevProperties: function() {
                    this.prevPosition = {
                        top: this.position.top,
                        left: this.position.left
                    }, this.prevSize = {
                        width: this.size.width,
                        height: this.size.height
                    }
                },
                _applyChanges: function() {
                    var t = {};
                    return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
                },
                _updateVirtualBoundaries: function(t) {
                    var e, i, s, n, a, o = this.options;
                    a = {
                        minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
                        maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : 1 / 0,
                        minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
                        maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : 1 / 0
                    }, (this._aspectRatio || t) && (e = a.minHeight * this.aspectRatio, s = a.minWidth / this.aspectRatio, i = a.maxHeight * this.aspectRatio, n = a.maxWidth / this.aspectRatio, e > a.minWidth && (a.minWidth = e), s > a.minHeight && (a.minHeight = s), i < a.maxWidth && (a.maxWidth = i), n < a.maxHeight && (a.maxHeight = n)), this._vBoundaries = a
                },
                _updateCache: function(t) {
                    this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
                },
                _updateRatio: function(t) {
                    var e = this.position,
                        i = this.size,
                        s = this.axis;
                    return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
                },
                _respectSize: function(t) {
                    var e = this._vBoundaries,
                        i = this.axis,
                        s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                        n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                        a = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                        o = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                        r = this.originalPosition.left + this.originalSize.width,
                        l = this.position.top + this.size.height,
                        h = /sw|nw|w/.test(i),
                        c = /nw|ne|n/.test(i);
                    return a && (t.width = e.minWidth), o && (t.height = e.minHeight), s && (t.width = e.maxWidth), n && (t.height = e.maxHeight), a && h && (t.left = r - e.minWidth), s && h && (t.left = r - e.maxWidth), o && c && (t.top = l - e.minHeight), n && c && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
                },
                _getPaddingPlusBorderDimensions: function(t) {
                    for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseInt(s[e], 10) || 0, i[e] += parseInt(n[e], 10) || 0;
                    return {
                        height: i[0] + i[2],
                        width: i[1] + i[3]
                    }
                },
                _proportionallyResize: function() {
                    if (this._proportionallyResizeElements.length)
                        for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
                            height: i.height() - this.outerDimensions.height || 0,
                            width: i.width() - this.outerDimensions.width || 0
                        })
                },
                _renderProxy: function() {
                    var e = this.element,
                        i = this.options;
                    this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                        width: this.element.outerWidth() - 1,
                        height: this.element.outerHeight() - 1,
                        position: "absolute",
                        left: this.elementOffset.left + "px",
                        top: this.elementOffset.top + "px",
                        zIndex: ++i.zIndex
                    }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
                },
                _change: {
                    e: function(t, e) {
                        return {
                            width: this.originalSize.width + e
                        }
                    },
                    w: function(t, e) {
                        var i = this.originalSize;
                        return {
                            left: this.originalPosition.left + e,
                            width: i.width - e
                        }
                    },
                    n: function(t, e, i) {
                        var s = this.originalSize;
                        return {
                            top: this.originalPosition.top + i,
                            height: s.height - i
                        }
                    },
                    s: function(t, e, i) {
                        return {
                            height: this.originalSize.height + i
                        }
                    },
                    se: function(e, i, s) {
                        return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
                    },
                    sw: function(e, i, s) {
                        return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
                    },
                    ne: function(e, i, s) {
                        return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
                    },
                    nw: function(e, i, s) {
                        return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
                    }
                },
                _propagate: function(e, i) {
                    t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
                },
                plugins: {},
                ui: function() {
                    return {
                        originalElement: this.originalElement,
                        element: this.element,
                        helper: this.helper,
                        position: this.position,
                        size: this.size,
                        originalSize: this.originalSize,
                        originalPosition: this.originalPosition
                    }
                }
            }), t.ui.plugin.add("resizable", "animate", {
                stop: function(e) {
                    var i = t(this).resizable("instance"),
                        s = i.options,
                        n = i._proportionallyResizeElements,
                        a = n.length && /textarea/i.test(n[0].nodeName),
                        o = a && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
                        r = a ? 0 : i.sizeDiff.width,
                        l = {
                            width: i.size.width - r,
                            height: i.size.height - o
                        },
                        h = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                        c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
                    i.element.animate(t.extend(l, c && h ? {
                        top: c,
                        left: h
                    } : {}), {
                        duration: s.animateDuration,
                        easing: s.animateEasing,
                        step: function() {
                            var s = {
                                width: parseInt(i.element.css("width"), 10),
                                height: parseInt(i.element.css("height"), 10),
                                top: parseInt(i.element.css("top"), 10),
                                left: parseInt(i.element.css("left"), 10)
                            };
                            n && n.length && t(n[0]).css({
                                width: s.width,
                                height: s.height
                            }), i._updateCache(s), i._propagate("resize", e)
                        }
                    })
                }
            }), t.ui.plugin.add("resizable", "containment", {
                start: function() {
                    var e, i, s, n, a, o, r, l = t(this).resizable("instance"),
                        h = l.options,
                        c = l.element,
                        d = h.containment,
                        u = d instanceof t ? d.get(0) : /parent/.test(d) ? c.parent().get(0) : d;
                    u && (l.containerElement = t(u), /document/.test(d) || d === document ? (l.containerOffset = {
                        left: 0,
                        top: 0
                    }, l.containerPosition = {
                        left: 0,
                        top: 0
                    }, l.parentData = {
                        element: t(document),
                        left: 0,
                        top: 0,
                        width: t(document).width(),
                        height: t(document).height() || document.body.parentNode.scrollHeight
                    }) : (e = t(u), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, s) {
                        i[t] = l._num(e.css("padding" + s))
                    }), l.containerOffset = e.offset(), l.containerPosition = e.position(), l.containerSize = {
                        height: e.innerHeight() - i[3],
                        width: e.innerWidth() - i[1]
                    }, s = l.containerOffset, n = l.containerSize.height, a = l.containerSize.width, o = l._hasScroll(u, "left") ? u.scrollWidth : a, r = l._hasScroll(u) ? u.scrollHeight : n, l.parentData = {
                        element: u,
                        left: s.left,
                        top: s.top,
                        width: o,
                        height: r
                    }))
                },
                resize: function(e) {
                    var i, s, n, a, o = t(this).resizable("instance"),
                        r = o.options,
                        l = o.containerOffset,
                        h = o.position,
                        c = o._aspectRatio || e.shiftKey,
                        d = {
                            top: 0,
                            left: 0
                        },
                        u = o.containerElement,
                        p = !0;
                    u[0] !== document && /static/.test(u.css("position")) && (d = l), h.left < (o._helper ? l.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - l.left : o.position.left - d.left), c && (o.size.height = o.size.width / o.aspectRatio, p = !1), o.position.left = r.helper ? l.left : 0), h.top < (o._helper ? l.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - l.top : o.position.top), c && (o.size.width = o.size.height * o.aspectRatio, p = !1), o.position.top = o._helper ? l.top : 0), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css("position")), n && a ? (o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top) : (o.offset.left = o.element.offset().left, o.offset.top = o.element.offset().top), i = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - d.left : o.offset.left - l.left)), s = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - d.top : o.offset.top - l.top)), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, c && (o.size.height = o.size.width / o.aspectRatio, p = !1)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, c && (o.size.width = o.size.height * o.aspectRatio, p = !1)), p || (o.position.left = o.prevPosition.left, o.position.top = o.prevPosition.top, o.size.width = o.prevSize.width, o.size.height = o.prevSize.height)
                },
                stop: function() {
                    var e = t(this).resizable("instance"),
                        i = e.options,
                        s = e.containerOffset,
                        n = e.containerPosition,
                        a = e.containerElement,
                        o = t(e.helper),
                        r = o.offset(),
                        l = o.outerWidth() - e.sizeDiff.width,
                        h = o.outerHeight() - e.sizeDiff.height;
                    e._helper && !i.animate && /relative/.test(a.css("position")) && t(this).css({
                        left: r.left - n.left - s.left,
                        width: l,
                        height: h
                    }), e._helper && !i.animate && /static/.test(a.css("position")) && t(this).css({
                        left: r.left - n.left - s.left,
                        width: l,
                        height: h
                    })
                }
            }), t.ui.plugin.add("resizable", "alsoResize", {
                start: function() {
                    var e = t(this).resizable("instance").options;
                    t(e.alsoResize).each(function() {
                        var e = t(this);
                        e.data("ui-resizable-alsoresize", {
                            width: parseInt(e.width(), 10),
                            height: parseInt(e.height(), 10),
                            left: parseInt(e.css("left"), 10),
                            top: parseInt(e.css("top"), 10)
                        })
                    })
                },
                resize: function(e, i) {
                    var s = t(this).resizable("instance"),
                        n = s.options,
                        a = s.originalSize,
                        o = s.originalPosition,
                        r = {
                            height: s.size.height - a.height || 0,
                            width: s.size.width - a.width || 0,
                            top: s.position.top - o.top || 0,
                            left: s.position.left - o.left || 0
                        };
                    t(n.alsoResize).each(function() {
                        var e = t(this),
                            s = t(this).data("ui-resizable-alsoresize"),
                            n = {},
                            a = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        t.each(a, function(t, e) {
                            var i = (s[e] || 0) + (r[e] || 0);
                            i && i >= 0 && (n[e] = i || null)
                        }), e.css(n)
                    })
                },
                stop: function() {
                    t(this).removeData("resizable-alsoresize")
                }
            }), t.ui.plugin.add("resizable", "ghost", {
                start: function() {
                    var e = t(this).resizable("instance"),
                        i = e.options,
                        s = e.size;
                    e.ghost = e.originalElement.clone(), e.ghost.css({
                        opacity: .25,
                        display: "block",
                        position: "relative",
                        height: s.height,
                        width: s.width,
                        margin: 0,
                        left: 0,
                        top: 0
                    }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), e.ghost.appendTo(e.helper)
                },
                resize: function() {
                    var e = t(this).resizable("instance");
                    e.ghost && e.ghost.css({
                        position: "relative",
                        height: e.size.height,
                        width: e.size.width
                    })
                },
                stop: function() {
                    var e = t(this).resizable("instance");
                    e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
                }
            }), t.ui.plugin.add("resizable", "grid", {
                resize: function() {
                    var e, i = t(this).resizable("instance"),
                        s = i.options,
                        n = i.size,
                        a = i.originalSize,
                        o = i.originalPosition,
                        r = i.axis,
                        l = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
                        h = l[0] || 1,
                        c = l[1] || 1,
                        d = Math.round((n.width - a.width) / h) * h,
                        u = Math.round((n.height - a.height) / c) * c,
                        p = a.width + d,
                        f = a.height + u,
                        m = s.maxWidth && s.maxWidth < p,
                        g = s.maxHeight && s.maxHeight < f,
                        v = s.minWidth && s.minWidth > p,
                        _ = s.minHeight && s.minHeight > f;
                    s.grid = l, v && (p += h), _ && (f += c), m && (p -= h), g && (f -= c), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = o.top - u) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = o.left - d) : ((0 >= f - c || 0 >= p - h) && (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = o.top - u) : (f = c - e.height, i.size.height = f, i.position.top = o.top + a.height - f), p - h > 0 ? (i.size.width = p, i.position.left = o.left - d) : (p = h - e.width, i.size.width = p, i.position.left = o.left + a.width - p))
                }
            }), t.ui.resizable, t.widget("ui.dialog", {
                version: "1.11.4",
                options: {
                    appendTo: "body",
                    autoOpen: !0,
                    buttons: [],
                    closeOnEscape: !0,
                    closeText: "Close",
                    dialogClass: "",
                    draggable: !0,
                    hide: null,
                    height: "auto",
                    maxHeight: null,
                    maxWidth: null,
                    minHeight: 150,
                    minWidth: 150,
                    modal: !1,
                    position: {
                        my: "center",
                        at: "center",
                        of: window,
                        collision: "fit",
                        using: function(e) {
                            var i = t(this).css(e).offset().top;
                            0 > i && t(this).css("top", e.top - i)
                        }
                    },
                    resizable: !0,
                    show: null,
                    title: null,
                    width: 300,
                    beforeClose: null,
                    close: null,
                    drag: null,
                    dragStart: null,
                    dragStop: null,
                    focus: null,
                    open: null,
                    resize: null,
                    resizeStart: null,
                    resizeStop: null
                },
                sizeRelatedOptions: {
                    buttons: !0,
                    height: !0,
                    maxHeight: !0,
                    maxWidth: !0,
                    minHeight: !0,
                    minWidth: !0,
                    width: !0
                },
                resizableRelatedOptions: {
                    maxHeight: !0,
                    maxWidth: !0,
                    minHeight: !0,
                    minWidth: !0
                },
                _create: function() {
                    this.originalCss = {
                        display: this.element[0].style.display,
                        width: this.element[0].style.width,
                        minHeight: this.element[0].style.minHeight,
                        maxHeight: this.element[0].style.maxHeight,
                        height: this.element[0].style.height
                    }, this.originalPosition = {
                        parent: this.element.parent(),
                        index: this.element.parent().children().index(this.element)
                    }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
                },
                _init: function() {
                    this.options.autoOpen && this.open()
                },
                _appendTo: function() {
                    var e = this.options.appendTo;
                    return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
                },
                _destroy: function() {
                    var t, e = this.originalPosition;
                    this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
                },
                widget: function() {
                    return this.uiDialog
                },
                disable: t.noop,
                enable: t.noop,
                close: function(e) {
                    var i, s = this;
                    if (this._isOpen && !1 !== this._trigger("beforeClose", e)) {
                        if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try {
                            (i = this.document[0].activeElement) && "body" !== i.nodeName.toLowerCase() && t(i).blur()
                        } catch (t) {}
                        this._hide(this.uiDialog, this.options.hide, function() {
                            s._trigger("close", e)
                        })
                    }
                },
                isOpen: function() {
                    return this._isOpen
                },
                moveToTop: function() {
                    this._moveToTop()
                },
                _moveToTop: function(e, i) {
                    var s = !1,
                        n = this.uiDialog.siblings(".ui-front:visible").map(function() {
                            return +t(this).css("z-index")
                        }).get(),
                        a = Math.max.apply(null, n);
                    return a >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", a + 1), s = !0), s && !i && this._trigger("focus", e), s
                },
                open: function() {
                    var e = this;
                    return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
                        e._focusTabbable(), e._trigger("focus")
                    }), this._makeFocusTarget(), void this._trigger("open"))
                },
                _focusTabbable: function() {
                    var t = this._focusedElement;
                    t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).focus()
                },
                _keepFocus: function(e) {
                    function i() {
                        var e = this.document[0].activeElement;
                        this.uiDialog[0] === e || t.contains(this.uiDialog[0], e) || this._focusTabbable()
                    }
                    e.preventDefault(), i.call(this), this._delay(i)
                },
                _createWrapper: function() {
                    this.uiDialog = t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                        tabIndex: -1,
                        role: "dialog"
                    }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                        keydown: function(e) {
                            if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
                            if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                                var i = this.uiDialog.find(":tabbable"),
                                    s = i.filter(":first"),
                                    n = i.filter(":last");
                                e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function() {
                                    n.focus()
                                }), e.preventDefault()) : (this._delay(function() {
                                    s.focus()
                                }), e.preventDefault())
                            }
                        },
                        mousedown: function(t) {
                            this._moveToTop(t) && this._focusTabbable()
                        }
                    }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                        "aria-describedby": this.element.uniqueId().attr("id")
                    })
                },
                _createTitlebar: function() {
                    var e;
                    this.uiDialogTitlebar = t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                        mousedown: function(e) {
                            t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                        }
                    }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
                        label: this.options.closeText,
                        icons: {
                            primary: "ui-icon-closethick"
                        },
                        text: !1
                    }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                        click: function(t) {
                            t.preventDefault(), this.close(t)
                        }
                    }), e = t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(e), this.uiDialog.attr({
                        "aria-labelledby": e.attr("id")
                    })
                },
                _title: function(t) {
                    this.options.title || t.html("&#160;"), t.text(this.options.title)
                },
                _createButtonPane: function() {
                    this.uiDialogButtonPane = t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
                },
                _createButtons: function() {
                    var e = this,
                        i = this.options.buttons;
                    return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this.uiDialog.removeClass("ui-dialog-buttons") : (t.each(i, function(i, s) {
                        var n, a;
                        s = t.isFunction(s) ? {
                            click: s,
                            text: i
                        } : s, s = t.extend({
                            type: "button"
                        }, s), n = s.click, s.click = function() {
                            n.apply(e.element[0], arguments)
                        }, a = {
                            icons: s.icons,
                            text: s.showText
                        }, delete s.icons, delete s.showText, t("<button></button>", s).button(a).appendTo(e.uiButtonSet)
                    }), this.uiDialog.addClass("ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
                },
                _makeDraggable: function() {
                    function e(t) {
                        return {
                            position: t.position,
                            offset: t.offset
                        }
                    }
                    var i = this,
                        s = this.options;
                    this.uiDialog.draggable({
                        cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                        handle: ".ui-dialog-titlebar",
                        containment: "document",
                        start: function(s, n) {
                            t(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, e(n))
                        },
                        drag: function(t, s) {
                            i._trigger("drag", t, e(s))
                        },
                        stop: function(n, a) {
                            var o = a.offset.left - i.document.scrollLeft(),
                                r = a.offset.top - i.document.scrollTop();
                            s.position = {
                                my: "left top",
                                at: "left" + (o >= 0 ? "+" : "") + o + " top" + (r >= 0 ? "+" : "") + r,
                                of: i.window
                            }, t(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, e(a))
                        }
                    })
                },
                _makeResizable: function() {
                    function e(t) {
                        return {
                            originalPosition: t.originalPosition,
                            originalSize: t.originalSize,
                            position: t.position,
                            size: t.size
                        }
                    }
                    var i = this,
                        s = this.options,
                        n = s.resizable,
                        a = this.uiDialog.css("position"),
                        o = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
                    this.uiDialog.resizable({
                        cancel: ".ui-dialog-content",
                        containment: "document",
                        alsoResize: this.element,
                        maxWidth: s.maxWidth,
                        maxHeight: s.maxHeight,
                        minWidth: s.minWidth,
                        minHeight: this._minHeight(),
                        handles: o,
                        start: function(s, n) {
                            t(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, e(n))
                        },
                        resize: function(t, s) {
                            i._trigger("resize", t, e(s))
                        },
                        stop: function(n, a) {
                            var o = i.uiDialog.offset(),
                                r = o.left - i.document.scrollLeft(),
                                l = o.top - i.document.scrollTop();
                            s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = {
                                my: "left top",
                                at: "left" + (r >= 0 ? "+" : "") + r + " top" + (l >= 0 ? "+" : "") + l,
                                of: i.window
                            }, t(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, e(a))
                        }
                    }).css("position", a)
                },
                _trackFocus: function() {
                    this._on(this.widget(), {
                        focusin: function(e) {
                            this._makeFocusTarget(), this._focusedElement = t(e.target)
                        }
                    })
                },
                _makeFocusTarget: function() {
                    this._untrackInstance(), this._trackingInstances().unshift(this)
                },
                _untrackInstance: function() {
                    var e = this._trackingInstances(),
                        i = t.inArray(this, e); - 1 !== i && e.splice(i, 1)
                },
                _trackingInstances: function() {
                    var t = this.document.data("ui-dialog-instances");
                    return t || (t = [], this.document.data("ui-dialog-instances", t)), t
                },
                _minHeight: function() {
                    var t = this.options;
                    return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
                },
                _position: function() {
                    var t = this.uiDialog.is(":visible");
                    t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
                },
                _setOptions: function(e) {
                    var i = this,
                        s = !1,
                        n = {};
                    t.each(e, function(t, e) {
                        i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e)
                    }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n)
                },
                _setOption: function(t, e) {
                    var i, s, n = this.uiDialog;
                    "dialogClass" === t && n.removeClass(this.options.dialogClass).addClass(e), "disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({
                        label: "" + e
                    }), "draggable" === t && ((i = n.is(":data(ui-draggable)")) && !e && n.draggable("destroy"), !i && e && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && ((s = n.is(":data(ui-resizable)")) && !e && n.resizable("destroy"), s && "string" == typeof e && n.resizable("option", "handles", e), s || !1 === e || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
                },
                _size: function() {
                    var t, e, i, s = this.options;
                    this.element.show().css({
                        width: "auto",
                        minHeight: 0,
                        maxHeight: "none",
                        height: 0
                    }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
                        height: "auto",
                        width: s.width
                    }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({
                        minHeight: e,
                        maxHeight: i,
                        height: "auto"
                    }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
                },
                _blockFrames: function() {
                    this.iframeBlocks = this.document.find("iframe").map(function() {
                        var e = t(this);
                        return t("<div>").css({
                            position: "absolute",
                            width: e.outerWidth(),
                            height: e.outerHeight()
                        }).appendTo(e.parent()).offset(e.offset())[0]
                    })
                },
                _unblockFrames: function() {
                    this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
                },
                _allowInteraction: function(e) {
                    return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length
                },
                _createOverlay: function() {
                    if (this.options.modal) {
                        var e = !0;
                        this._delay(function() {
                            e = !1
                        }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                            focusin: function(t) {
                                e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                            }
                        }), this.overlay = t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                            mousedown: "_keepFocus"
                        }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
                    }
                },
                _destroyOverlay: function() {
                    if (this.options.modal && this.overlay) {
                        var t = this.document.data("ui-dialog-overlays") - 1;
                        t ? this.document.data("ui-dialog-overlays", t) : this.document.unbind("focusin").removeData("ui-dialog-overlays"), this.overlay.remove(), this.overlay = null
                    }
                }
            }), t.widget("ui.droppable", {
                version: "1.11.4",
                widgetEventPrefix: "drop",
                options: {
                    accept: "*",
                    activeClass: !1,
                    addClasses: !0,
                    greedy: !1,
                    hoverClass: !1,
                    scope: "default",
                    tolerance: "intersect",
                    activate: null,
                    deactivate: null,
                    drop: null,
                    out: null,
                    over: null
                },
                _create: function() {
                    var e, i = this.options,
                        s = i.accept;
                    this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function(t) {
                        return t.is(s)
                    }, this.proportions = function() {
                        return arguments.length ? void(e = arguments[0]) : e || (e = {
                            width: this.element[0].offsetWidth,
                            height: this.element[0].offsetHeight
                        })
                    }, this._addToManager(i.scope), i.addClasses && this.element.addClass("ui-droppable")
                },
                _addToManager: function(e) {
                    t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this)
                },
                _splice: function(t) {
                    for (var e = 0; e < t.length; e++) t[e] === this && t.splice(e, 1)
                },
                _destroy: function() {
                    var e = t.ui.ddmanager.droppables[this.options.scope];
                    this._splice(e), this.element.removeClass("ui-droppable ui-droppable-disabled")
                },
                _setOption: function(e, i) {
                    if ("accept" === e) this.accept = t.isFunction(i) ? i : function(t) {
                        return t.is(i)
                    };
                    else if ("scope" === e) {
                        var s = t.ui.ddmanager.droppables[this.options.scope];
                        this._splice(s), this._addToManager(i)
                    }
                    this._super(e, i)
                },
                _activate: function(e) {
                    var i = t.ui.ddmanager.current;
                    this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", e, this.ui(i))
                },
                _deactivate: function(e) {
                    var i = t.ui.ddmanager.current;
                    this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", e, this.ui(i))
                },
                _over: function(e) {
                    var i = t.ui.ddmanager.current;
                    i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
                },
                _out: function(e) {
                    var i = t.ui.ddmanager.current;
                    i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
                },
                _drop: function(e, i) {
                    var s = i || t.ui.ddmanager.current,
                        n = !1;
                    return !(!s || (s.currentItem || s.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                        var i = t(this).droppable("instance");
                        return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && t.ui.intersect(s, t.extend(i, {
                            offset: i.element.offset()
                        }), i.options.tolerance, e) ? (n = !0, !1) : void 0
                    }), !n && (!!this.accept.call(this.element[0], s.currentItem || s.element) && (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(s)), this.element)))
                },
                ui: function(t) {
                    return {
                        draggable: t.currentItem || t.element,
                        helper: t.helper,
                        position: t.position,
                        offset: t.positionAbs
                    }
                }
            }), t.ui.intersect = function() {
                function t(t, e, i) {
                    return t >= e && e + i > t
                }
                return function(e, i, s, n) {
                    if (!i.offset) return !1;
                    var a = (e.positionAbs || e.position.absolute).left + e.margins.left,
                        o = (e.positionAbs || e.position.absolute).top + e.margins.top,
                        r = a + e.helperProportions.width,
                        l = o + e.helperProportions.height,
                        h = i.offset.left,
                        c = i.offset.top,
                        d = h + i.proportions().width,
                        u = c + i.proportions().height;
                    switch (s) {
                        case "fit":
                            return a >= h && d >= r && o >= c && u >= l;
                        case "intersect":
                            return h < a + e.helperProportions.width / 2 && r - e.helperProportions.width / 2 < d && c < o + e.helperProportions.height / 2 && l - e.helperProportions.height / 2 < u;
                        case "pointer":
                            return t(n.pageY, c, i.proportions().height) && t(n.pageX, h, i.proportions().width);
                        case "touch":
                            return (o >= c && u >= o || l >= c && u >= l || c > o && l > u) && (a >= h && d >= a || r >= h && d >= r || h > a && r > d);
                        default:
                            return !1
                    }
                }
            }(), t.ui.ddmanager = {
                current: null,
                droppables: {
                    default: []
                },
                prepareOffsets: function(e, i) {
                    var s, n, a = t.ui.ddmanager.droppables[e.options.scope] || [],
                        o = i ? i.type : null,
                        r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
                    t: for (s = 0; s < a.length; s++)
                        if (!(a[s].options.disabled || e && !a[s].accept.call(a[s].element[0], e.currentItem || e.element))) {
                            for (n = 0; n < r.length; n++)
                                if (r[n] === a[s].element[0]) {
                                    a[s].proportions().height = 0;
                                    continue t
                                }
                            a[s].visible = "none" !== a[s].element.css("display"), a[s].visible && ("mousedown" === o && a[s]._activate.call(a[s], i), a[s].offset = a[s].element.offset(), a[s].proportions({
                                width: a[s].element[0].offsetWidth,
                                height: a[s].element[0].offsetHeight
                            }))
                        }
                },
                drop: function(e, i) {
                    var s = !1;
                    return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
                        this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
                    }), s
                },
                dragStart: function(e, i) {
                    e.element.parentsUntil("body").bind("scroll.droppable", function() {
                        e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
                    })
                },
                drag: function(e, i) {
                    e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                        if (!this.options.disabled && !this.greedyChild && this.visible) {
                            var s, n, a, o = t.ui.intersect(e, this, this.options.tolerance, i),
                                r = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                            r && (this.options.greedy && (n = this.options.scope, (a = this.element.parents(":data(ui-droppable)").filter(function() {
                                return t(this).droppable("instance").options.scope === n
                            })).length && ((s = t(a[0]).droppable("instance")).greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
                        }
                    })
                },
                dragStop: function(e, i) {
                    e.element.parentsUntil("body").unbind("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
                }
            };
            var x, C, k = (t.ui.droppable, "ui-effects-"),
                D = t;
            t.effects = {
                    effect: {}
                },
                function(t, e) {
                    function i(t, e, i) {
                        var s = c[e.type] || {};
                        return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : s.max < t ? s.max : t)
                    }

                    function s(e) {
                        var i = l(),
                            s = i._rgba = [];
                        return e = e.toLowerCase(), p(r, function(t, n) {
                            var a, o = n.re.exec(e),
                                r = o && n.parse(o),
                                l = n.space || "rgba";
                            return r ? (a = i[l](r), i[h[l].cache] = a[h[l].cache], s = i._rgba = a._rgba, !1) : void 0
                        }), s.length ? ("0,0,0,0" === s.join() && t.extend(s, a.transparent), i) : a[e]
                    }

                    function n(t, e, i) {
                        return 1 > 6 * (i = (i + 1) % 1) ? t + (e - t) * i * 6 : 1 > 2 * i ? e : 2 > 3 * i ? t + (e - t) * (2 / 3 - i) * 6 : t
                    }
                    var a, o = /^([\-+])=\s*(\d+\.?\d*)/,
                        r = [{
                            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                            parse: function(t) {
                                return [t[1], t[2], t[3], t[4]]
                            }
                        }, {
                            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                            parse: function(t) {
                                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                            }
                        }, {
                            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                            parse: function(t) {
                                return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                            }
                        }, {
                            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                            parse: function(t) {
                                return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                            }
                        }, {
                            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                            space: "hsla",
                            parse: function(t) {
                                return [t[1], t[2] / 100, t[3] / 100, t[4]]
                            }
                        }],
                        l = t.Color = function(e, i, s, n) {
                            return new t.Color.fn.parse(e, i, s, n)
                        },
                        h = {
                            rgba: {
                                props: {
                                    red: {
                                        idx: 0,
                                        type: "byte"
                                    },
                                    green: {
                                        idx: 1,
                                        type: "byte"
                                    },
                                    blue: {
                                        idx: 2,
                                        type: "byte"
                                    }
                                }
                            },
                            hsla: {
                                props: {
                                    hue: {
                                        idx: 0,
                                        type: "degrees"
                                    },
                                    saturation: {
                                        idx: 1,
                                        type: "percent"
                                    },
                                    lightness: {
                                        idx: 2,
                                        type: "percent"
                                    }
                                }
                            }
                        },
                        c = {
                            byte: {
                                floor: !0,
                                max: 255
                            },
                            percent: {
                                max: 1
                            },
                            degrees: {
                                mod: 360,
                                floor: !0
                            }
                        },
                        d = l.support = {},
                        u = t("<p>")[0],
                        p = t.each;
                    u.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = u.style.backgroundColor.indexOf("rgba") > -1, p(h, function(t, e) {
                        e.cache = "_" + t, e.props.alpha = {
                            idx: 3,
                            type: "percent",
                            def: 1
                        }
                    }), l.fn = t.extend(l.prototype, {
                        parse: function(n, o, r, c) {
                            if (n === e) return this._rgba = [null, null, null, null], this;
                            (n.jquery || n.nodeType) && (n = t(n).css(o), o = e);
                            var d = this,
                                u = t.type(n),
                                f = this._rgba = [];
                            return o !== e && (n = [n, o, r, c], u = "array"), "string" === u ? this.parse(s(n) || a._default) : "array" === u ? (p(h.rgba.props, function(t, e) {
                                f[e.idx] = i(n[e.idx], e)
                            }), this) : "object" === u ? (p(h, n instanceof l ? function(t, e) {
                                n[e.cache] && (d[e.cache] = n[e.cache].slice())
                            } : function(e, s) {
                                var a = s.cache;
                                p(s.props, function(t, e) {
                                    if (!d[a] && s.to) {
                                        if ("alpha" === t || null == n[t]) return;
                                        d[a] = s.to(d._rgba)
                                    }
                                    d[a][e.idx] = i(n[t], e, !0)
                                }), d[a] && t.inArray(null, d[a].slice(0, 3)) < 0 && (d[a][3] = 1, s.from && (d._rgba = s.from(d[a])))
                            }), this) : void 0
                        },
                        is: function(t) {
                            var e = l(t),
                                i = !0,
                                s = this;
                            return p(h, function(t, n) {
                                var a, o = e[n.cache];
                                return o && (a = s[n.cache] || n.to && n.to(s._rgba) || [], p(n.props, function(t, e) {
                                    return null != o[e.idx] ? i = o[e.idx] === a[e.idx] : void 0
                                })), i
                            }), i
                        },
                        _space: function() {
                            var t = [],
                                e = this;
                            return p(h, function(i, s) {
                                e[s.cache] && t.push(i)
                            }), t.pop()
                        },
                        transition: function(t, e) {
                            var s = l(t),
                                n = s._space(),
                                a = h[n],
                                o = 0 === this.alpha() ? l("transparent") : this,
                                r = o[a.cache] || a.to(o._rgba),
                                d = r.slice();
                            return s = s[a.cache], p(a.props, function(t, n) {
                                var a = n.idx,
                                    o = r[a],
                                    l = s[a],
                                    h = c[n.type] || {};
                                null !== l && (null === o ? d[a] = l : (h.mod && (l - o > h.mod / 2 ? o += h.mod : o - l > h.mod / 2 && (o -= h.mod)), d[a] = i((l - o) * e + o, n)))
                            }), this[n](d)
                        },
                        blend: function(e) {
                            if (1 === this._rgba[3]) return this;
                            var i = this._rgba.slice(),
                                s = i.pop(),
                                n = l(e)._rgba;
                            return l(t.map(i, function(t, e) {
                                return (1 - s) * n[e] + s * t
                            }))
                        },
                        toRgbaString: function() {
                            var e = "rgba(",
                                i = t.map(this._rgba, function(t, e) {
                                    return null == t ? e > 2 ? 1 : 0 : t
                                });
                            return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                        },
                        toHslaString: function() {
                            var e = "hsla(",
                                i = t.map(this.hsla(), function(t, e) {
                                    return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                                });
                            return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                        },
                        toHexString: function(e) {
                            var i = this._rgba.slice(),
                                s = i.pop();
                            return e && i.push(~~(255 * s)), "#" + t.map(i, function(t) {
                                return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t
                            }).join("")
                        },
                        toString: function() {
                            return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                        }
                    }), l.fn.parse.prototype = l.fn, h.hsla.to = function(t) {
                        if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                        var e, i, s = t[0] / 255,
                            n = t[1] / 255,
                            a = t[2] / 255,
                            o = t[3],
                            r = Math.max(s, n, a),
                            l = Math.min(s, n, a),
                            h = r - l,
                            c = r + l,
                            d = .5 * c;
                        return e = l === r ? 0 : s === r ? 60 * (n - a) / h + 360 : n === r ? 60 * (a - s) / h + 120 : 60 * (s - n) / h + 240, i = 0 === h ? 0 : .5 >= d ? h / c : h / (2 - c), [Math.round(e) % 360, i, d, null == o ? 1 : o]
                    }, h.hsla.from = function(t) {
                        if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                        var e = t[0] / 360,
                            i = t[1],
                            s = t[2],
                            a = t[3],
                            o = .5 >= s ? s * (1 + i) : s + i - s * i,
                            r = 2 * s - o;
                        return [Math.round(255 * n(r, o, e + 1 / 3)), Math.round(255 * n(r, o, e)), Math.round(255 * n(r, o, e - 1 / 3)), a]
                    }, p(h, function(s, n) {
                        var a = n.props,
                            r = n.cache,
                            h = n.to,
                            c = n.from;
                        l.fn[s] = function(s) {
                            if (h && !this[r] && (this[r] = h(this._rgba)), s === e) return this[r].slice();
                            var n, o = t.type(s),
                                d = "array" === o || "object" === o ? s : arguments,
                                u = this[r].slice();
                            return p(a, function(t, e) {
                                var s = d["object" === o ? t : e.idx];
                                null == s && (s = u[e.idx]), u[e.idx] = i(s, e)
                            }), c ? ((n = l(c(u)))[r] = u, n) : l(u)
                        }, p(a, function(e, i) {
                            l.fn[e] || (l.fn[e] = function(n) {
                                var a, r = t.type(n),
                                    l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s,
                                    h = this[l](),
                                    c = h[i.idx];
                                return "undefined" === r ? c : ("function" === r && (n = n.call(this, c), r = t.type(n)), null == n && i.empty ? this : ("string" === r && ((a = o.exec(n)) && (n = c + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), h[i.idx] = n, this[l](h)))
                            })
                        })
                    }), l.hook = function(e) {
                        var i = e.split(" ");
                        p(i, function(e, i) {
                            t.cssHooks[i] = {
                                set: function(e, n) {
                                    var a, o, r = "";
                                    if ("transparent" !== n && ("string" !== t.type(n) || (a = s(n)))) {
                                        if (n = l(a || n), !d.rgba && 1 !== n._rgba[3]) {
                                            for (o = "backgroundColor" === i ? e.parentNode : e;
                                                ("" === r || "transparent" === r) && o && o.style;) try {
                                                r = t.css(o, "backgroundColor"), o = o.parentNode
                                            } catch (t) {}
                                            n = n.blend(r && "transparent" !== r ? r : "_default")
                                        }
                                        n = n.toRgbaString()
                                    }
                                    try {
                                        e.style[i] = n
                                    } catch (t) {}
                                }
                            }, t.fx.step[i] = function(e) {
                                e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                            }
                        })
                    }, l.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), t.cssHooks.borderColor = {
                        expand: function(t) {
                            var e = {};
                            return p(["Top", "Right", "Bottom", "Left"], function(i, s) {
                                e["border" + s + "Color"] = t
                            }), e
                        }
                    }, a = t.Color.names = {
                        aqua: "#00ffff",
                        black: "#000000",
                        blue: "#0000ff",
                        fuchsia: "#ff00ff",
                        gray: "#808080",
                        green: "#008000",
                        lime: "#00ff00",
                        maroon: "#800000",
                        navy: "#000080",
                        olive: "#808000",
                        purple: "#800080",
                        red: "#ff0000",
                        silver: "#c0c0c0",
                        teal: "#008080",
                        white: "#ffffff",
                        yellow: "#ffff00",
                        transparent: [null, null, null, 0],
                        _default: "#ffffff"
                    }
                }(D),
                function() {
                    function e(e) {
                        var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                            a = {};
                        if (n && n.length && n[0] && n[n[0]])
                            for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (a[t.camelCase(i)] = n[i]);
                        else
                            for (i in n) "string" == typeof n[i] && (a[i] = n[i]);
                        return a
                    }
                    var i, s, n, a = ["add", "remove", "toggle"],
                        o = {
                            border: 1,
                            borderBottom: 1,
                            borderColor: 1,
                            borderLeft: 1,
                            borderRight: 1,
                            borderTop: 1,
                            borderWidth: 1,
                            margin: 1,
                            padding: 1
                        };
                    t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
                        t.fx.step[i] = function(t) {
                            ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (D.style(t.elem, i, t.end), t.setAttr = !0)
                        }
                    }), t.fn.addBack || (t.fn.addBack = function(t) {
                        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                    }), t.effects.animateClass = function(i, s, n, r) {
                        var l = t.speed(s, n, r);
                        return this.queue(function() {
                            var s, n = t(this),
                                r = n.attr("class") || "",
                                h = l.children ? n.find("*").addBack() : n;
                            h = h.map(function() {
                                return {
                                    el: t(this),
                                    start: e(this)
                                }
                            }), (s = function() {
                                t.each(a, function(t, e) {
                                    i[e] && n[e + "Class"](i[e])
                                })
                            })(), h = h.map(function() {
                                return this.end = e(this.el[0]), this.diff = function(e, i) {
                                    var s, n, a = {};
                                    for (s in i) n = i[s], e[s] !== n && (o[s] || (t.fx.step[s] || !isNaN(parseFloat(n))) && (a[s] = n));
                                    return a
                                }(this.start, this.end), this
                            }), n.attr("class", r), h = h.map(function() {
                                var e = this,
                                    i = t.Deferred(),
                                    s = t.extend({}, l, {
                                        queue: !1,
                                        complete: function() {
                                            i.resolve(e)
                                        }
                                    });
                                return this.el.animate(this.diff, s), i.promise()
                            }), t.when.apply(t, h.get()).done(function() {
                                s(), t.each(arguments, function() {
                                    var e = this.el;
                                    t.each(this.diff, function(t) {
                                        e.css(t, "")
                                    })
                                }), l.complete.call(n[0])
                            })
                        })
                    }, t.fn.extend({
                        addClass: (n = t.fn.addClass, function(e, i, s, a) {
                            return i ? t.effects.animateClass.call(this, {
                                add: e
                            }, i, s, a) : n.apply(this, arguments)
                        }),
                        removeClass: (s = t.fn.removeClass, function(e, i, n, a) {
                            return arguments.length > 1 ? t.effects.animateClass.call(this, {
                                remove: e
                            }, i, n, a) : s.apply(this, arguments)
                        }),
                        toggleClass: (i = t.fn.toggleClass, function(e, s, n, a, o) {
                            return "boolean" == typeof s || void 0 === s ? n ? t.effects.animateClass.call(this, s ? {
                                add: e
                            } : {
                                remove: e
                            }, n, a, o) : i.apply(this, arguments) : t.effects.animateClass.call(this, {
                                toggle: e
                            }, s, n, a)
                        }),
                        switchClass: function(e, i, s, n, a) {
                            return t.effects.animateClass.call(this, {
                                add: i,
                                remove: e
                            }, s, n, a)
                        }
                    })
                }(),
                function() {
                    function e(e, i, s, n) {
                        return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                            effect: e
                        }, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
                    }

                    function i(e) {
                        return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" === (void 0 === e ? "undefined" : _typeof(e)) && !e.effect))
                    }
                    var s, n, a;
                    t.extend(t.effects, {
                        version: "1.11.4",
                        save: function(t, e) {
                            for (var i = 0; i < e.length; i++) null !== e[i] && t.data(k + e[i], t[0].style[e[i]])
                        },
                        restore: function(t, e) {
                            var i, s;
                            for (s = 0; s < e.length; s++) null !== e[s] && (i = t.data(k + e[s]), void 0 === i && (i = ""), t.css(e[s], i))
                        },
                        setMode: function(t, e) {
                            return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                        },
                        getBaseline: function(t, e) {
                            var i, s;
                            switch (t[0]) {
                                case "top":
                                    i = 0;
                                    break;
                                case "middle":
                                    i = .5;
                                    break;
                                case "bottom":
                                    i = 1;
                                    break;
                                default:
                                    i = t[0] / e.height
                            }
                            switch (t[1]) {
                                case "left":
                                    s = 0;
                                    break;
                                case "center":
                                    s = .5;
                                    break;
                                case "right":
                                    s = 1;
                                    break;
                                default:
                                    s = t[1] / e.width
                            }
                            return {
                                x: s,
                                y: i
                            }
                        },
                        createWrapper: function(e) {
                            if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                            var i = {
                                    width: e.outerWidth(!0),
                                    height: e.outerHeight(!0),
                                    float: e.css("float")
                                },
                                s = t("<div></div>").addClass("ui-effects-wrapper").css({
                                    fontSize: "100%",
                                    background: "transparent",
                                    border: "none",
                                    margin: 0,
                                    padding: 0
                                }),
                                n = {
                                    width: e.width(),
                                    height: e.height()
                                },
                                a = document.activeElement;
                            try {
                                a.id
                            } catch (t) {
                                a = document.body
                            }
                            return e.wrap(s), (e[0] === a || t.contains(e[0], a)) && t(a).focus(), s = e.parent(), "static" === e.css("position") ? (s.css({
                                position: "relative"
                            }), e.css({
                                position: "relative"
                            })) : (t.extend(i, {
                                position: e.css("position"),
                                zIndex: e.css("z-index")
                            }), t.each(["top", "left", "bottom", "right"], function(t, s) {
                                i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                            }), e.css({
                                position: "relative",
                                top: 0,
                                left: 0,
                                right: "auto",
                                bottom: "auto"
                            })), e.css(n), s.css(i).show()
                        },
                        removeWrapper: function(e) {
                            var i = document.activeElement;
                            return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
                        },
                        setTransition: function(e, i, s, n) {
                            return n = n || {}, t.each(i, function(t, i) {
                                var a = e.cssUnit(i);
                                a[0] > 0 && (n[i] = a[0] * s + a[1])
                            }), n
                        }
                    }), t.fn.extend({
                        effect: function() {
                            function i(e) {
                                function i() {
                                    t.isFunction(a) && a.call(n[0]), t.isFunction(e) && e()
                                }
                                var n = t(this),
                                    a = s.complete,
                                    r = s.mode;
                                (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), i()) : o.call(n[0], s, i)
                            }
                            var s = e.apply(this, arguments),
                                n = s.mode,
                                a = s.queue,
                                o = t.effects.effect[s.effect];
                            return t.fx.off || !o ? n ? this[n](s.duration, s.complete) : this.each(function() {
                                s.complete && s.complete.call(this)
                            }) : !1 === a ? this.each(i) : this.queue(a || "fx", i)
                        },
                        show: (a = t.fn.show, function(t) {
                            if (i(t)) return a.apply(this, arguments);
                            var s = e.apply(this, arguments);
                            return s.mode = "show", this.effect.call(this, s)
                        }),
                        hide: (n = t.fn.hide, function(t) {
                            if (i(t)) return n.apply(this, arguments);
                            var s = e.apply(this, arguments);
                            return s.mode = "hide", this.effect.call(this, s)
                        }),
                        toggle: (s = t.fn.toggle, function(t) {
                            if (i(t) || "boolean" == typeof t) return s.apply(this, arguments);
                            var n = e.apply(this, arguments);
                            return n.mode = "toggle", this.effect.call(this, n)
                        }),
                        cssUnit: function(e) {
                            var i = this.css(e),
                                s = [];
                            return t.each(["em", "px", "%", "pt"], function(t, e) {
                                i.indexOf(e) > 0 && (s = [parseFloat(i), e])
                            }), s
                        }
                    })
                }(), x = {}, t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, e) {
                    x[e] = function(e) {
                        return Math.pow(e, t + 2)
                    }
                }), t.extend(x, {
                    Sine: function(t) {
                        return 1 - Math.cos(t * Math.PI / 2)
                    },
                    Circ: function(t) {
                        return 1 - Math.sqrt(1 - t * t)
                    },
                    Elastic: function(t) {
                        return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                    },
                    Back: function(t) {
                        return t * t * (3 * t - 2)
                    },
                    Bounce: function(t) {
                        for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;);
                        return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                    }
                }), t.each(x, function(e, i) {
                    t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
                        return 1 - i(1 - t)
                    }, t.easing["easeInOut" + e] = function(t) {
                        return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
                    }
                }), t.effects, t.effects.effect.blind = function(e, i) {
                    var s, n, a, o = t(this),
                        r = ["position", "top", "bottom", "left", "right", "height", "width"],
                        l = t.effects.setMode(o, e.mode || "hide"),
                        h = e.direction || "up",
                        c = /up|down|vertical/.test(h),
                        d = c ? "height" : "width",
                        u = c ? "top" : "left",
                        p = /up|left|vertical|horizontal/.test(h),
                        f = {},
                        m = "show" === l;
                    o.parent().is(".ui-effects-wrapper") ? t.effects.save(o.parent(), r) : t.effects.save(o, r), o.show(), n = (s = t.effects.createWrapper(o).css({
                        overflow: "hidden"
                    }))[d](), a = parseFloat(s.css(u)) || 0, f[d] = m ? n : 0, p || (o.css(c ? "bottom" : "right", 0).css(c ? "top" : "left", "auto").css({
                        position: "absolute"
                    }), f[u] = m ? a : n + a), m && (s.css(d, 0), p || s.css(u, a + n)), s.animate(f, {
                        duration: e.duration,
                        easing: e.easing,
                        queue: !1,
                        complete: function() {
                            "hide" === l && o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
                        }
                    })
                }, t.effects.effect.bounce = function(e, i) {
                    var s, n, a, o = t(this),
                        r = ["position", "top", "bottom", "left", "right", "height", "width"],
                        l = t.effects.setMode(o, e.mode || "effect"),
                        h = "hide" === l,
                        c = "show" === l,
                        d = e.direction || "up",
                        u = e.distance,
                        p = e.times || 5,
                        f = 2 * p + (c || h ? 1 : 0),
                        m = e.duration / f,
                        g = e.easing,
                        v = "up" === d || "down" === d ? "top" : "left",
                        _ = "up" === d || "left" === d,
                        b = o.queue(),
                        y = b.length;
                    for ((c || h) && r.push("opacity"), t.effects.save(o, r), o.show(), t.effects.createWrapper(o), u || (u = o["top" === v ? "outerHeight" : "outerWidth"]() / 3), c && ((a = {
                            opacity: 1
                        })[v] = 0, o.css("opacity", 0).css(v, _ ? 2 * -u : 2 * u).animate(a, m, g)), h && (u /= Math.pow(2, p - 1)), (a = {})[v] = 0, s = 0; p > s; s++) n = {}, n[v] = (_ ? "-=" : "+=") + u, o.animate(n, m, g).animate(a, m, g), u = h ? 2 * u : u / 2;
                    h && ((n = {
                        opacity: 0
                    })[v] = (_ ? "-=" : "+=") + u, o.animate(n, m, g)), o.queue(function() {
                        h && o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
                    }), y > 1 && b.splice.apply(b, [1, 0].concat(b.splice(y, f + 1))), o.dequeue()
                }, t.effects.effect.clip = function(e, i) {
                    var s, n, a, o = t(this),
                        r = ["position", "top", "bottom", "left", "right", "height", "width"],
                        l = "show" === t.effects.setMode(o, e.mode || "hide"),
                        h = "vertical" === (e.direction || "vertical"),
                        c = h ? "height" : "width",
                        d = h ? "top" : "left",
                        u = {};
                    t.effects.save(o, r), o.show(), s = t.effects.createWrapper(o).css({
                        overflow: "hidden"
                    }), a = (n = "IMG" === o[0].tagName ? s : o)[c](), l && (n.css(c, 0), n.css(d, a / 2)), u[c] = l ? a : 0, u[d] = l ? 0 : a / 2, n.animate(u, {
                        queue: !1,
                        duration: e.duration,
                        easing: e.easing,
                        complete: function() {
                            l || o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
                        }
                    })
                }, t.effects.effect.drop = function(e, i) {
                    var s, n = t(this),
                        a = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
                        o = t.effects.setMode(n, e.mode || "hide"),
                        r = "show" === o,
                        l = e.direction || "left",
                        h = "up" === l || "down" === l ? "top" : "left",
                        c = "up" === l || "left" === l ? "pos" : "neg",
                        d = {
                            opacity: r ? 1 : 0
                        };
                    t.effects.save(n, a), n.show(), t.effects.createWrapper(n), s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0) / 2, r && n.css("opacity", 0).css(h, "pos" === c ? -s : s), d[h] = (r ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + s, n.animate(d, {
                        queue: !1,
                        duration: e.duration,
                        easing: e.easing,
                        complete: function() {
                            "hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
                        }
                    })
                }, t.effects.effect.explode = function(e, i) {
                    function s() {
                        v.push(this), v.length === c * d && (u.css({
                            visibility: "visible"
                        }), t(v).remove(), p || u.hide(), i())
                    }
                    var n, a, o, r, l, h, c = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
                        d = c,
                        u = t(this),
                        p = "show" === t.effects.setMode(u, e.mode || "hide"),
                        f = u.show().css("visibility", "hidden").offset(),
                        m = Math.ceil(u.outerWidth() / d),
                        g = Math.ceil(u.outerHeight() / c),
                        v = [];
                    for (n = 0; c > n; n++)
                        for (r = f.top + n * g, h = n - (c - 1) / 2, a = 0; d > a; a++) o = f.left + a * m, l = a - (d - 1) / 2, u.clone().appendTo("body").wrap("<div></div>").css({
                            position: "absolute",
                            visibility: "visible",
                            left: -a * m,
                            top: -n * g
                        }).parent().addClass("ui-effects-explode").css({
                            position: "absolute",
                            overflow: "hidden",
                            width: m,
                            height: g,
                            left: o + (p ? l * m : 0),
                            top: r + (p ? h * g : 0),
                            opacity: p ? 0 : 1
                        }).animate({
                            left: o + (p ? 0 : l * m),
                            top: r + (p ? 0 : h * g),
                            opacity: p ? 1 : 0
                        }, e.duration || 500, e.easing, s)
                }, t.effects.effect.fade = function(e, i) {
                    var s = t(this),
                        n = t.effects.setMode(s, e.mode || "toggle");
                    s.animate({
                        opacity: n
                    }, {
                        queue: !1,
                        duration: e.duration,
                        easing: e.easing,
                        complete: i
                    })
                }, t.effects.effect.fold = function(e, i) {
                    var s, n, a = t(this),
                        o = ["position", "top", "bottom", "left", "right", "height", "width"],
                        r = t.effects.setMode(a, e.mode || "hide"),
                        l = "show" === r,
                        h = "hide" === r,
                        c = e.size || 15,
                        d = /([0-9]+)%/.exec(c),
                        u = !!e.horizFirst,
                        p = l !== u,
                        f = p ? ["width", "height"] : ["height", "width"],
                        m = e.duration / 2,
                        g = {},
                        v = {};
                    t.effects.save(a, o), a.show(), s = t.effects.createWrapper(a).css({
                        overflow: "hidden"
                    }), n = p ? [s.width(), s.height()] : [s.height(), s.width()], d && (c = parseInt(d[1], 10) / 100 * n[h ? 0 : 1]), l && s.css(u ? {
                        height: 0,
                        width: c
                    } : {
                        height: c,
                        width: 0
                    }), g[f[0]] = l ? n[0] : c, v[f[1]] = l ? n[1] : 0, s.animate(g, m, e.easing).animate(v, m, e.easing, function() {
                        h && a.hide(), t.effects.restore(a, o), t.effects.removeWrapper(a), i()
                    })
                }, t.effects.effect.highlight = function(e, i) {
                    var s = t(this),
                        n = ["backgroundImage", "backgroundColor", "opacity"],
                        a = t.effects.setMode(s, e.mode || "show"),
                        o = {
                            backgroundColor: s.css("backgroundColor")
                        };
                    "hide" === a && (o.opacity = 0), t.effects.save(s, n), s.show().css({
                        backgroundImage: "none",
                        backgroundColor: e.color || "#ffff99"
                    }).animate(o, {
                        queue: !1,
                        duration: e.duration,
                        easing: e.easing,
                        complete: function() {
                            "hide" === a && s.hide(), t.effects.restore(s, n), i()
                        }
                    })
                }, t.effects.effect.size = function(e, i) {
                    var s, n, a, o = t(this),
                        r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                        l = ["width", "height", "overflow"],
                        h = ["fontSize"],
                        c = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                        d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                        u = t.effects.setMode(o, e.mode || "effect"),
                        p = e.restore || "effect" !== u,
                        f = e.scale || "both",
                        m = e.origin || ["middle", "center"],
                        g = o.css("position"),
                        v = p ? r : ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                        _ = {
                            height: 0,
                            width: 0,
                            outerHeight: 0,
                            outerWidth: 0
                        };
                    "show" === u && o.show(), s = {
                        height: o.height(),
                        width: o.width(),
                        outerHeight: o.outerHeight(),
                        outerWidth: o.outerWidth()
                    }, "toggle" === e.mode && "show" === u ? (o.from = e.to || _, o.to = e.from || s) : (o.from = e.from || ("show" === u ? _ : s), o.to = e.to || ("hide" === u ? _ : s)), a = {
                        from: {
                            y: o.from.height / s.height,
                            x: o.from.width / s.width
                        },
                        to: {
                            y: o.to.height / s.height,
                            x: o.to.width / s.width
                        }
                    }, ("box" === f || "both" === f) && (a.from.y !== a.to.y && (v = v.concat(c), o.from = t.effects.setTransition(o, c, a.from.y, o.from), o.to = t.effects.setTransition(o, c, a.to.y, o.to)), a.from.x !== a.to.x && (v = v.concat(d), o.from = t.effects.setTransition(o, d, a.from.x, o.from), o.to = t.effects.setTransition(o, d, a.to.x, o.to))), ("content" === f || "both" === f) && a.from.y !== a.to.y && (v = v.concat(h).concat(l), o.from = t.effects.setTransition(o, h, a.from.y, o.from), o.to = t.effects.setTransition(o, h, a.to.y, o.to)), t.effects.save(o, v), o.show(), t.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), m && (n = t.effects.getBaseline(m, s), o.from.top = (s.outerHeight - o.outerHeight()) * n.y, o.from.left = (s.outerWidth - o.outerWidth()) * n.x, o.to.top = (s.outerHeight - o.to.outerHeight) * n.y, o.to.left = (s.outerWidth - o.to.outerWidth) * n.x), o.css(o.from), ("content" === f || "both" === f) && (c = c.concat(["marginTop", "marginBottom"]).concat(h), d = d.concat(["marginLeft", "marginRight"]), l = r.concat(c).concat(d), o.find("*[width]").each(function() {
                        var i = t(this),
                            s = i.height(),
                            n = i.width(),
                            o = i.outerHeight(),
                            r = i.outerWidth();
                        p && t.effects.save(i, l), i.from = {
                            height: s * a.from.y,
                            width: n * a.from.x,
                            outerHeight: o * a.from.y,
                            outerWidth: r * a.from.x
                        }, i.to = {
                            height: s * a.to.y,
                            width: n * a.to.x,
                            outerHeight: s * a.to.y,
                            outerWidth: n * a.to.x
                        }, a.from.y !== a.to.y && (i.from = t.effects.setTransition(i, c, a.from.y, i.from), i.to = t.effects.setTransition(i, c, a.to.y, i.to)), a.from.x !== a.to.x && (i.from = t.effects.setTransition(i, d, a.from.x, i.from), i.to = t.effects.setTransition(i, d, a.to.x, i.to)), i.css(i.from), i.animate(i.to, e.duration, e.easing, function() {
                            p && t.effects.restore(i, l)
                        })
                    })), o.animate(o.to, {
                        queue: !1,
                        duration: e.duration,
                        easing: e.easing,
                        complete: function() {
                            0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === u && o.hide(), t.effects.restore(o, v), p || ("static" === g ? o.css({
                                position: "relative",
                                top: o.to.top,
                                left: o.to.left
                            }) : t.each(["top", "left"], function(t, e) {
                                o.css(e, function(e, i) {
                                    var s = parseInt(i, 10),
                                        n = t ? o.to.left : o.to.top;
                                    return "auto" === i ? n + "px" : s + n + "px"
                                })
                            })), t.effects.removeWrapper(o), i()
                        }
                    })
                }, t.effects.effect.scale = function(e, i) {
                    var s = t(this),
                        n = t.extend(!0, {}, e),
                        a = t.effects.setMode(s, e.mode || "effect"),
                        o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === a ? 0 : 100),
                        r = e.direction || "both",
                        l = e.origin,
                        h = {
                            height: s.height(),
                            width: s.width(),
                            outerHeight: s.outerHeight(),
                            outerWidth: s.outerWidth()
                        },
                        c = "horizontal" !== r ? o / 100 : 1,
                        d = "vertical" !== r ? o / 100 : 1;
                    n.effect = "size", n.queue = !1, n.complete = i, "effect" !== a && (n.origin = l || ["middle", "center"], n.restore = !0), n.from = e.from || ("show" === a ? {
                        height: 0,
                        width: 0,
                        outerHeight: 0,
                        outerWidth: 0
                    } : h), n.to = {
                        height: h.height * c,
                        width: h.width * d,
                        outerHeight: h.outerHeight * c,
                        outerWidth: h.outerWidth * d
                    }, n.fade && ("show" === a && (n.from.opacity = 0, n.to.opacity = 1), "hide" === a && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n)
                }, t.effects.effect.puff = function(e, i) {
                    var s = t(this),
                        n = t.effects.setMode(s, e.mode || "hide"),
                        a = "hide" === n,
                        o = parseInt(e.percent, 10) || 150,
                        r = o / 100,
                        l = {
                            height: s.height(),
                            width: s.width(),
                            outerHeight: s.outerHeight(),
                            outerWidth: s.outerWidth()
                        };
                    t.extend(e, {
                        effect: "scale",
                        queue: !1,
                        fade: !0,
                        mode: n,
                        complete: i,
                        percent: a ? o : 100,
                        from: a ? l : {
                            height: l.height * r,
                            width: l.width * r,
                            outerHeight: l.outerHeight * r,
                            outerWidth: l.outerWidth * r
                        }
                    }), s.effect(e)
                }, t.effects.effect.pulsate = function(e, i) {
                    var s, n = t(this),
                        a = t.effects.setMode(n, e.mode || "show"),
                        o = "show" === a,
                        r = "hide" === a,
                        l = o || "hide" === a,
                        h = 2 * (e.times || 5) + (l ? 1 : 0),
                        c = e.duration / h,
                        d = 0,
                        u = n.queue(),
                        p = u.length;
                    for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), d = 1), s = 1; h > s; s++) n.animate({
                        opacity: d
                    }, c, e.easing), d = 1 - d;
                    n.animate({
                        opacity: d
                    }, c, e.easing), n.queue(function() {
                        r && n.hide(), i()
                    }), p > 1 && u.splice.apply(u, [1, 0].concat(u.splice(p, h + 1))), n.dequeue()
                }, t.effects.effect.shake = function(e, i) {
                    var s, n = t(this),
                        a = ["position", "top", "bottom", "left", "right", "height", "width"],
                        o = t.effects.setMode(n, e.mode || "effect"),
                        r = e.direction || "left",
                        l = e.distance || 20,
                        h = e.times || 3,
                        c = 2 * h + 1,
                        d = Math.round(e.duration / c),
                        u = "up" === r || "down" === r ? "top" : "left",
                        p = "up" === r || "left" === r,
                        f = {},
                        m = {},
                        g = {},
                        v = n.queue(),
                        _ = v.length;
                    for (t.effects.save(n, a), n.show(), t.effects.createWrapper(n), f[u] = (p ? "-=" : "+=") + l, m[u] = (p ? "+=" : "-=") + 2 * l, g[u] = (p ? "-=" : "+=") + 2 * l, n.animate(f, d, e.easing), s = 1; h > s; s++) n.animate(m, d, e.easing).animate(g, d, e.easing);
                    n.animate(m, d, e.easing).animate(f, d / 2, e.easing).queue(function() {
                        "hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
                    }), _ > 1 && v.splice.apply(v, [1, 0].concat(v.splice(_, c + 1))), n.dequeue()
                }, t.effects.effect.slide = function(e, i) {
                    var s, n = t(this),
                        a = ["position", "top", "bottom", "left", "right", "width", "height"],
                        o = t.effects.setMode(n, e.mode || "show"),
                        r = "show" === o,
                        l = e.direction || "left",
                        h = "up" === l || "down" === l ? "top" : "left",
                        c = "up" === l || "left" === l,
                        d = {};
                    t.effects.save(n, a), n.show(), s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0), t.effects.createWrapper(n).css({
                        overflow: "hidden"
                    }), r && n.css(h, c ? isNaN(s) ? "-" + s : -s : s), d[h] = (r ? c ? "+=" : "-=" : c ? "-=" : "+=") + s, n.animate(d, {
                        queue: !1,
                        duration: e.duration,
                        easing: e.easing,
                        complete: function() {
                            "hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
                        }
                    })
                }, t.effects.effect.transfer = function(e, i) {
                    var s = t(this),
                        n = t(e.to),
                        a = "fixed" === n.css("position"),
                        o = t("body"),
                        r = a ? o.scrollTop() : 0,
                        l = a ? o.scrollLeft() : 0,
                        h = n.offset(),
                        c = {
                            top: h.top - r,
                            left: h.left - l,
                            height: n.innerHeight(),
                            width: n.innerWidth()
                        },
                        d = s.offset(),
                        u = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
                            top: d.top - r,
                            left: d.left - l,
                            height: s.innerHeight(),
                            width: s.innerWidth(),
                            position: a ? "fixed" : "absolute"
                        }).animate(c, e.duration, e.easing, function() {
                            u.remove(), i()
                        })
                }, t.widget("ui.progressbar", {
                    version: "1.11.4",
                    options: {
                        max: 100,
                        value: 0,
                        change: null,
                        complete: null
                    },
                    min: 0,
                    _create: function() {
                        this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                            role: "progressbar",
                            "aria-valuemin": this.min
                        }), this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
                    },
                    _destroy: function() {
                        this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
                    },
                    value: function(t) {
                        return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), void this._refreshValue())
                    },
                    _constrainedValue: function(t) {
                        return void 0 === t && (t = this.options.value), this.indeterminate = !1 === t, "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t))
                    },
                    _setOptions: function(t) {
                        var e = t.value;
                        delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
                    },
                    _setOption: function(t, e) {
                        "max" === t && (e = Math.max(this.min, e)), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this._super(t, e)
                    },
                    _percentage: function() {
                        return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
                    },
                    _refreshValue: function() {
                        var e = this.options.value,
                            i = this._percentage();
                        this.valueDiv.toggle(this.indeterminate || e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                            "aria-valuemax": this.options.max,
                            "aria-valuenow": e
                        }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
                    }
                }), t.widget("ui.selectable", t.ui.mouse, {
                    version: "1.11.4",
                    options: {
                        appendTo: "body",
                        autoRefresh: !0,
                        distance: 0,
                        filter: "*",
                        tolerance: "touch",
                        selected: null,
                        selecting: null,
                        start: null,
                        stop: null,
                        unselected: null,
                        unselecting: null
                    },
                    _create: function() {
                        var e, i = this;
                        this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                            (e = t(i.options.filter, i.element[0])).addClass("ui-selectee"), e.each(function() {
                                var e = t(this),
                                    i = e.offset();
                                t.data(this, "selectable-item", {
                                    element: this,
                                    $element: e,
                                    left: i.left,
                                    top: i.top,
                                    right: i.left + e.outerWidth(),
                                    bottom: i.top + e.outerHeight(),
                                    startselected: !1,
                                    selected: e.hasClass("ui-selected"),
                                    selecting: e.hasClass("ui-selecting"),
                                    unselecting: e.hasClass("ui-unselecting")
                                })
                            })
                        }, this.refresh(), this.selectees = e.addClass("ui-selectee"), this._mouseInit(), this.helper = t("<div class='ui-selectable-helper'></div>")
                    },
                    _destroy: function() {
                        this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
                    },
                    _mouseStart: function(e) {
                        var i = this,
                            s = this.options;
                        this.opos = [e.pageX, e.pageY], this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
                            left: e.pageX,
                            top: e.pageY,
                            width: 0,
                            height: 0
                        }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                            var s = t.data(this, "selectable-item");
                            s.startselected = !0, e.metaKey || e.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {
                                unselecting: s.element
                            }))
                        }), t(e.target).parents().addBack().each(function() {
                            var s, n = t.data(this, "selectable-item");
                            return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {
                                selecting: n.element
                            }) : i._trigger("unselecting", e, {
                                unselecting: n.element
                            }), !1) : void 0
                        }))
                    },
                    _mouseDrag: function(e) {
                        if (this.dragged = !0, !this.options.disabled) {
                            var i, s = this,
                                n = this.options,
                                a = this.opos[0],
                                o = this.opos[1],
                                r = e.pageX,
                                l = e.pageY;
                            return a > r && (i = r, r = a, a = i), o > l && (i = l, l = o, o = i), this.helper.css({
                                left: a,
                                top: o,
                                width: r - a,
                                height: l - o
                            }), this.selectees.each(function() {
                                var i = t.data(this, "selectable-item"),
                                    h = !1;
                                i && i.element !== s.element[0] && ("touch" === n.tolerance ? h = !(i.left > r || i.right < a || i.top > l || i.bottom < o) : "fit" === n.tolerance && (h = i.left > a && i.right < r && i.top > o && i.bottom < l), h ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {
                                    selecting: i.element
                                }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, {
                                    unselecting: i.element
                                }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, {
                                    unselecting: i.element
                                })))))
                            }), !1
                        }
                    },
                    _mouseStop: function(e) {
                        var i = this;
                        return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() {
                            var s = t.data(this, "selectable-item");
                            s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {
                                unselected: s.element
                            })
                        }), t(".ui-selecting", this.element[0]).each(function() {
                            var s = t.data(this, "selectable-item");
                            s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {
                                selected: s.element
                            })
                        }), this._trigger("stop", e), this.helper.remove(), !1
                    }
                }), t.widget("ui.selectmenu", {
                    version: "1.11.4",
                    defaultElement: "<select>",
                    options: {
                        appendTo: null,
                        disabled: null,
                        icons: {
                            button: "ui-icon-triangle-1-s"
                        },
                        position: {
                            my: "left top",
                            at: "left bottom",
                            collision: "none"
                        },
                        width: null,
                        change: null,
                        close: null,
                        focus: null,
                        open: null,
                        select: null
                    },
                    _create: function() {
                        var t = this.element.uniqueId().attr("id");
                        this.ids = {
                            element: t,
                            button: t + "-button",
                            menu: t + "-menu"
                        }, this._drawButton(), this._drawMenu(), this.options.disabled && this.disable()
                    },
                    _drawButton: function() {
                        var e = this;
                        this.label = t("label[for='" + this.ids.element + "']").attr("for", this.ids.button), this._on(this.label, {
                            click: function(t) {
                                this.button.focus(), t.preventDefault()
                            }
                        }), this.element.hide(), this.button = t("<span>", {
                            class: "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
                            tabindex: this.options.disabled ? -1 : 0,
                            id: this.ids.button,
                            role: "combobox",
                            "aria-expanded": "false",
                            "aria-autocomplete": "list",
                            "aria-owns": this.ids.menu,
                            "aria-haspopup": "true"
                        }).insertAfter(this.element), t("<span>", {
                            class: "ui-icon " + this.options.icons.button
                        }).prependTo(this.button), this.buttonText = t("<span>", {
                            class: "ui-selectmenu-text"
                        }).appendTo(this.button), this._setText(this.buttonText, this.element.find("option:selected").text()), this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
                            e.menuItems || e._refreshMenu()
                        }), this._hoverable(this.button), this._focusable(this.button)
                    },
                    _drawMenu: function() {
                        var e = this;
                        this.menu = t("<ul>", {
                            "aria-hidden": "true",
                            "aria-labelledby": this.ids.button,
                            id: this.ids.menu
                        }), this.menuWrap = t("<div>", {
                            class: "ui-selectmenu-menu ui-front"
                        }).append(this.menu).appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                            role: "listbox",
                            select: function(t, i) {
                                t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t)
                            },
                            focus: function(t, i) {
                                var s = i.item.data("ui-selectmenu-item");
                                null != e.focusIndex && s.index !== e.focusIndex && (e._trigger("focus", t, {
                                    item: s
                                }), e.isOpen || e._select(s, t)), e.focusIndex = s.index, e.button.attr("aria-activedescendant", e.menuItems.eq(s.index).attr("id"))
                            }
                        }).menu("instance"), this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
                            return !1
                        }, this.menuInstance._isDivider = function() {
                            return !1
                        }
                    },
                    refresh: function() {
                        this._refreshMenu(), this._setText(this.buttonText, this._getSelectedItem().text()), this.options.width || this._resizeButton()
                    },
                    _refreshMenu: function() {
                        this.menu.empty();
                        var t, e = this.element.find("option");
                        e.length && (this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
                    },
                    open: function(t) {
                        this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t))
                    },
                    _position: function() {
                        this.menuWrap.position(t.extend({
                            of: this.button
                        }, this.options.position))
                    },
                    close: function(t) {
                        this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
                    },
                    widget: function() {
                        return this.button
                    },
                    menuWidget: function() {
                        return this.menu
                    },
                    _renderMenu: function(e, i) {
                        var s = this,
                            n = "";
                        t.each(i, function(i, a) {
                            a.optgroup !== n && (t("<li>", {
                                class: "ui-selectmenu-optgroup ui-menu-divider" + (a.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""),
                                text: a.optgroup
                            }).appendTo(e), n = a.optgroup), s._renderItemData(e, a)
                        })
                    },
                    _renderItemData: function(t, e) {
                        return this._renderItem(t, e).data("ui-selectmenu-item", e)
                    },
                    _renderItem: function(e, i) {
                        var s = t("<li>");
                        return i.disabled && s.addClass("ui-state-disabled"), this._setText(s, i.label), s.appendTo(e)
                    },
                    _setText: function(t, e) {
                        e ? t.text(e) : t.html("&#160;")
                    },
                    _move: function(t, e) {
                        var i, s, n = ".ui-menu-item";
                        this.isOpen ? i = this.menuItems.eq(this.focusIndex) : (i = this.menuItems.eq(this.element[0].selectedIndex), n += ":not(.ui-state-disabled)"), (s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0)).length && this.menuInstance.focus(e, s)
                    },
                    _getSelectedItem: function() {
                        return this.menuItems.eq(this.element[0].selectedIndex)
                    },
                    _toggle: function(t) {
                        this[this.isOpen ? "close" : "open"](t)
                    },
                    _setSelection: function() {
                        var t;
                        this.range && (window.getSelection ? ((t = window.getSelection()).removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
                    },
                    _documentClick: {
                        mousedown: function(e) {
                            this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(e))
                        }
                    },
                    _buttonEvents: {
                        mousedown: function() {
                            var t;
                            window.getSelection ? (t = window.getSelection()).rangeCount && (this.range = t.getRangeAt(0)) : this.range = document.selection.createRange()
                        },
                        click: function(t) {
                            this._setSelection(), this._toggle(t)
                        },
                        keydown: function(e) {
                            var i = !0;
                            switch (e.keyCode) {
                                case t.ui.keyCode.TAB:
                                case t.ui.keyCode.ESCAPE:
                                    this.close(e), i = !1;
                                    break;
                                case t.ui.keyCode.ENTER:
                                    this.isOpen && this._selectFocusedItem(e);
                                    break;
                                case t.ui.keyCode.UP:
                                    e.altKey ? this._toggle(e) : this._move("prev", e);
                                    break;
                                case t.ui.keyCode.DOWN:
                                    e.altKey ? this._toggle(e) : this._move("next", e);
                                    break;
                                case t.ui.keyCode.SPACE:
                                    this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                                    break;
                                case t.ui.keyCode.LEFT:
                                    this._move("prev", e);
                                    break;
                                case t.ui.keyCode.RIGHT:
                                    this._move("next", e);
                                    break;
                                case t.ui.keyCode.HOME:
                                case t.ui.keyCode.PAGE_UP:
                                    this._move("first", e);
                                    break;
                                case t.ui.keyCode.END:
                                case t.ui.keyCode.PAGE_DOWN:
                                    this._move("last", e);
                                    break;
                                default:
                                    this.menu.trigger(e), i = !1
                            }
                            i && e.preventDefault()
                        }
                    },
                    _selectFocusedItem: function(t) {
                        var e = this.menuItems.eq(this.focusIndex);
                        e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
                    },
                    _select: function(t, e) {
                        var i = this.element[0].selectedIndex;
                        this.element[0].selectedIndex = t.index, this._setText(this.buttonText, t.label), this._setAria(t), this._trigger("select", e, {
                            item: t
                        }), t.index !== i && this._trigger("change", e, {
                            item: t
                        }), this.close(e)
                    },
                    _setAria: function(t) {
                        var e = this.menuItems.eq(t.index).attr("id");
                        this.button.attr({
                            "aria-labelledby": e,
                            "aria-activedescendant": e
                        }), this.menu.attr("aria-activedescendant", e)
                    },
                    _setOption: function(t, e) {
                        "icons" === t && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(e.button), this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "disabled" === t && (this.menuInstance.option("disabled", e), this.button.toggleClass("ui-state-disabled", e).attr("aria-disabled", e), this.element.prop("disabled", e), e ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)), "width" === t && this._resizeButton()
                    },
                    _appendTo: function() {
                        var e = this.options.appendTo;
                        return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front")), e.length || (e = this.document[0].body), e
                    },
                    _toggleAttr: function() {
                        this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen), this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
                    },
                    _resizeButton: function() {
                        var t = this.options.width;
                        t || (t = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(t)
                    },
                    _resizeMenu: function() {
                        this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
                    },
                    _getCreateOptions: function() {
                        return {
                            disabled: this.element.prop("disabled")
                        }
                    },
                    _parseOptions: function(e) {
                        var i = [];
                        e.each(function(e, s) {
                            var n = t(s),
                                a = n.parent("optgroup");
                            i.push({
                                element: n,
                                index: e,
                                value: n.val(),
                                label: n.text(),
                                optgroup: a.attr("label") || "",
                                disabled: a.prop("disabled") || n.prop("disabled")
                            })
                        }), this.items = i
                    },
                    _destroy: function() {
                        this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.label.attr("for", this.ids.element)
                    }
                }), t.widget("ui.slider", t.ui.mouse, {
                    version: "1.11.4",
                    widgetEventPrefix: "slide",
                    options: {
                        animate: !1,
                        distance: 0,
                        max: 100,
                        min: 0,
                        orientation: "horizontal",
                        range: !1,
                        step: 1,
                        value: 0,
                        values: null,
                        change: null,
                        slide: null,
                        start: null,
                        stop: null
                    },
                    numPages: 5,
                    _create: function() {
                        this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
                    },
                    _refresh: function() {
                        this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
                    },
                    _createHandles: function() {
                        var e, i, s = this.options,
                            n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                            a = [];
                        for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) a.push("<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>");
                        this.handles = n.add(t(a.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(e) {
                            t(this).data("ui-slider-handle-index", e)
                        })
                    },
                    _createRange: function() {
                        var e = this.options,
                            i = "";
                        e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                            left: "",
                            bottom: ""
                        }) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : (this.range && this.range.remove(), this.range = null)
                    },
                    _setupEvents: function() {
                        this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
                    },
                    _destroy: function() {
                        this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
                    },
                    _mouseCapture: function(e) {
                        var i, s, n, a, o, r, l, h = this,
                            c = this.options;
                        return !c.disabled && (this.elementSize = {
                            width: this.element.outerWidth(),
                            height: this.element.outerHeight()
                        }, this.elementOffset = this.element.offset(), i = {
                            x: e.pageX,
                            y: e.pageY
                        }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                            var i = Math.abs(s - h.values(e));
                            (n > i || n === i && (e === h._lastChangedValue || h.values(e) === c.min)) && (n = i, a = t(this), o = e)
                        }), !1 !== this._start(e, o) && (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), r = a.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                            left: 0,
                            top: 0
                        } : {
                            left: e.pageX - r.left - a.width() / 2,
                            top: e.pageY - r.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
                        }, this.handles.hasClass("ui-state-hover") || this._slide(e, o, s), this._animateOff = !0, !0))
                    },
                    _mouseStart: function() {
                        return !0
                    },
                    _mouseDrag: function(t) {
                        var e = {
                                x: t.pageX,
                                y: t.pageY
                            },
                            i = this._normValueFromMouse(e);
                        return this._slide(t, this._handleIndex, i), !1
                    },
                    _mouseStop: function(t) {
                        return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
                    },
                    _detectOrientation: function() {
                        this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
                    },
                    _normValueFromMouse: function(t) {
                        var e, i, s, n, a;
                        return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), (s = i / e) > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a)
                    },
                    _start: function(t, e) {
                        var i = {
                            handle: this.handles[e],
                            value: this.value()
                        };
                        return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
                    },
                    _slide: function(t, e, i) {
                        var s, n, a;
                        this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1), 2 === this.options.values.length && !0 === this.options.range && (0 === e && i > s || 1 === e && s > i) && (i = s), i !== this.values(e) && ((n = this.values())[e] = i, a = this._trigger("slide", t, {
                            handle: this.handles[e],
                            value: i,
                            values: n
                        }), s = this.values(e ? 0 : 1), !1 !== a && this.values(e, i))) : i !== this.value() && (!1 !== (a = this._trigger("slide", t, {
                            handle: this.handles[e],
                            value: i
                        })) && this.value(i))
                    },
                    _stop: function(t, e) {
                        var i = {
                            handle: this.handles[e],
                            value: this.value()
                        };
                        this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
                    },
                    _change: function(t, e) {
                        if (!this._keySliding && !this._mouseSliding) {
                            var i = {
                                handle: this.handles[e],
                                value: this.value()
                            };
                            this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, i)
                        }
                    },
                    value: function(t) {
                        return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
                    },
                    values: function(e, i) {
                        var s, n, a;
                        if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
                        if (!arguments.length) return this._values();
                        if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
                        for (s = this.options.values, n = arguments[0], a = 0; a < s.length; a += 1) s[a] = this._trimAlignValue(n[a]), this._change(null, a);
                        this._refreshValue()
                    },
                    _setOption: function(e, i) {
                        var s, n = 0;
                        switch ("range" === e && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!i), this._super(e, i), e) {
                            case "orientation":
                                this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                                break;
                            case "value":
                                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                                break;
                            case "values":
                                for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
                                this._animateOff = !1;
                                break;
                            case "step":
                            case "min":
                            case "max":
                                this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                                break;
                            case "range":
                                this._animateOff = !0, this._refresh(), this._animateOff = !1
                        }
                    },
                    _value: function() {
                        var t = this.options.value;
                        return this._trimAlignValue(t)
                    },
                    _values: function(t) {
                        var e, i, s;
                        if (arguments.length) return e = this.options.values[t], this._trimAlignValue(e);
                        if (this.options.values && this.options.values.length) {
                            for (i = this.options.values.slice(), s = 0; s < i.length; s += 1) i[s] = this._trimAlignValue(i[s]);
                            return i
                        }
                        return []
                    },
                    _trimAlignValue: function(t) {
                        if (t <= this._valueMin()) return this._valueMin();
                        if (t >= this._valueMax()) return this._valueMax();
                        var e = this.options.step > 0 ? this.options.step : 1,
                            i = (t - this._valueMin()) % e,
                            s = t - i;
                        return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
                    },
                    _calculateNewMax: function() {
                        var t = this.options.max,
                            e = this._valueMin(),
                            i = this.options.step;
                        t = Math.floor(+(t - e).toFixed(this._precision()) / i) * i + e, this.max = parseFloat(t.toFixed(this._precision()))
                    },
                    _precision: function() {
                        var t = this._precisionOf(this.options.step);
                        return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
                    },
                    _precisionOf: function(t) {
                        var e = t.toString(),
                            i = e.indexOf(".");
                        return -1 === i ? 0 : e.length - i - 1
                    },
                    _valueMin: function() {
                        return this.options.min
                    },
                    _valueMax: function() {
                        return this.max
                    },
                    _refreshValue: function() {
                        var e, i, s, n, a, o = this.options.range,
                            r = this.options,
                            l = this,
                            h = !this._animateOff && r.animate,
                            c = {};
                        this.options.values && this.options.values.length ? this.handles.each(function(s) {
                            i = (l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](c, r.animate), !0 === l.options.range && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                                left: i + "%"
                            }, r.animate), 1 === s && l.range[h ? "animate" : "css"]({
                                width: i - e + "%"
                            }, {
                                queue: !1,
                                duration: r.animate
                            })) : (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                                bottom: i + "%"
                            }, r.animate), 1 === s && l.range[h ? "animate" : "css"]({
                                height: i - e + "%"
                            }, {
                                queue: !1,
                                duration: r.animate
                            }))), e = i
                        }) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? (s - n) / (a - n) * 100 : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](c, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                            width: i + "%"
                        }, r.animate), "max" === o && "horizontal" === this.orientation && this.range[h ? "animate" : "css"]({
                            width: 100 - i + "%"
                        }, {
                            queue: !1,
                            duration: r.animate
                        }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                            height: i + "%"
                        }, r.animate), "max" === o && "vertical" === this.orientation && this.range[h ? "animate" : "css"]({
                            height: 100 - i + "%"
                        }, {
                            queue: !1,
                            duration: r.animate
                        }))
                    },
                    _handleEvents: {
                        keydown: function(e) {
                            var i, s, n, a = t(e.target).data("ui-slider-handle-index");
                            switch (e.keyCode) {
                                case t.ui.keyCode.HOME:
                                case t.ui.keyCode.END:
                                case t.ui.keyCode.PAGE_UP:
                                case t.ui.keyCode.PAGE_DOWN:
                                case t.ui.keyCode.UP:
                                case t.ui.keyCode.RIGHT:
                                case t.ui.keyCode.DOWN:
                                case t.ui.keyCode.LEFT:
                                    if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, t(e.target).addClass("ui-state-active"), !1 === this._start(e, a))) return
                            }
                            switch (n = this.options.step, i = s = this.options.values && this.options.values.length ? this.values(a) : this.value(), e.keyCode) {
                                case t.ui.keyCode.HOME:
                                    s = this._valueMin();
                                    break;
                                case t.ui.keyCode.END:
                                    s = this._valueMax();
                                    break;
                                case t.ui.keyCode.PAGE_UP:
                                    s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                                    break;
                                case t.ui.keyCode.PAGE_DOWN:
                                    s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                                    break;
                                case t.ui.keyCode.UP:
                                case t.ui.keyCode.RIGHT:
                                    if (i === this._valueMax()) return;
                                    s = this._trimAlignValue(i + n);
                                    break;
                                case t.ui.keyCode.DOWN:
                                case t.ui.keyCode.LEFT:
                                    if (i === this._valueMin()) return;
                                    s = this._trimAlignValue(i - n)
                            }
                            this._slide(e, a, s)
                        },
                        keyup: function(e) {
                            var i = t(e.target).data("ui-slider-handle-index");
                            this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
                        }
                    }
                }), t.widget("ui.sortable", t.ui.mouse, {
                    version: "1.11.4",
                    widgetEventPrefix: "sort",
                    ready: !1,
                    options: {
                        appendTo: "parent",
                        axis: !1,
                        connectWith: !1,
                        containment: !1,
                        cursor: "auto",
                        cursorAt: !1,
                        dropOnEmpty: !0,
                        forcePlaceholderSize: !1,
                        forceHelperSize: !1,
                        grid: !1,
                        handle: !1,
                        helper: "original",
                        items: "> *",
                        opacity: !1,
                        placeholder: !1,
                        revert: !1,
                        scroll: !0,
                        scrollSensitivity: 20,
                        scrollSpeed: 20,
                        scope: "default",
                        tolerance: "intersect",
                        zIndex: 1e3,
                        activate: null,
                        beforeStop: null,
                        change: null,
                        deactivate: null,
                        out: null,
                        over: null,
                        receive: null,
                        remove: null,
                        sort: null,
                        start: null,
                        stop: null,
                        update: null
                    },
                    _isOverAxis: function(t, e, i) {
                        return t >= e && e + i > t
                    },
                    _isFloating: function(t) {
                        return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
                    },
                    _create: function() {
                        this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
                    },
                    _setOption: function(t, e) {
                        this._super(t, e), "handle" === t && this._setHandleClassName()
                    },
                    _setHandleClassName: function() {
                        this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), t.each(this.items, function() {
                            (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
                        })
                    },
                    _destroy: function() {
                        this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
                        for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
                        return this
                    },
                    _mouseCapture: function(e, i) {
                        var s = null,
                            n = !1,
                            a = this;
                        return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), t(e.target).parents().each(function() {
                            return t.data(this, a.widgetName + "-item") === a ? (s = t(this), !1) : void 0
                        }), t.data(e.target, a.widgetName + "-item") === a && (s = t(e.target)), !(!s || this.options.handle && !i && (t(this.options.handle, s).find("*").addBack().each(function() {
                            this === e.target && (n = !0)
                        }), !n)) && (this.currentItem = s, this._removeCurrentsFromItems(), !0)))
                    },
                    _mouseStart: function(e, i, s) {
                        var n, a, o = this.options;
                        if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                                top: this.offset.top - this.margins.top,
                                left: this.offset.left - this.margins.left
                            }, t.extend(this.offset, {
                                click: {
                                    left: e.pageX - this.offset.left,
                                    top: e.pageY - this.offset.top
                                },
                                parent: this._getParentOffset(),
                                relative: this._getRelativeOffset()
                            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
                                prev: this.currentItem.prev()[0],
                                parent: this.currentItem.parent()[0]
                            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (a = this.document.find("body"), this.storedCursor = a.css("cursor"), a.css("cursor", o.cursor), this.storedStylesheet = t("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(a)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
                            for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", e, this._uiHash(this));
                        return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
                    },
                    _mouseDrag: function(e) {
                        var i, s, n, a, o = this.options,
                            r = !1;
                        for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + o.scrollSpeed : e.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + o.scrollSpeed : e.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (e.pageY - this.document.scrollTop() < o.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < o.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed)), e.pageX - this.document.scrollLeft() < o.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < o.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed))), !1 !== r && t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                            if (s = this.items[i], n = s.item[0], a = this._intersectsWithPointer(s), a && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === a ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" !== this.options.type || !t.contains(this.element[0], n))) {
                                if (this.direction = 1 === a ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                                this._rearrange(e, s), this._trigger("change", e, this._uiHash());
                                break
                            }
                        return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
                    },
                    _mouseStop: function(e, i) {
                        if (e) {
                            if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                                var s = this,
                                    n = this.placeholder.offset(),
                                    a = this.options.axis,
                                    o = {};
                                a && "x" !== a || (o.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), a && "y" !== a || (o.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function() {
                                    s._clear(e)
                                })
                            } else this._clear(e, i);
                            return !1
                        }
                    },
                    cancel: function() {
                        if (this.dragging) {
                            this._mouseUp({
                                target: null
                            }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                            for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
                        }
                        return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                            helper: null,
                            dragging: !1,
                            reverting: !1,
                            _noFinalSort: null
                        }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
                    },
                    serialize: function(e) {
                        var i = this._getItemsAsjQuery(e && e.connected),
                            s = [];
                        return e = e || {}, t(i).each(function() {
                            var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                            i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
                        }), !s.length && e.key && s.push(e.key + "="), s.join("&")
                    },
                    toArray: function(e) {
                        var i = this._getItemsAsjQuery(e && e.connected),
                            s = [];
                        return e = e || {}, i.each(function() {
                            s.push(t(e.item || this).attr(e.attribute || "id") || "")
                        }), s
                    },
                    _intersectsWith: function(t) {
                        var e = this.positionAbs.left,
                            i = e + this.helperProportions.width,
                            s = this.positionAbs.top,
                            n = s + this.helperProportions.height,
                            a = t.left,
                            o = a + t.width,
                            r = t.top,
                            l = r + t.height,
                            h = this.offset.click.top,
                            c = this.offset.click.left,
                            d = "x" === this.options.axis || s + h > r && l > s + h,
                            u = "y" === this.options.axis || e + c > a && o > e + c,
                            p = d && u;
                        return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : a < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < o && r < s + this.helperProportions.height / 2 && n - this.helperProportions.height / 2 < l
                    },
                    _intersectsWithPointer: function(t) {
                        var e = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                            i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                            s = e && i,
                            n = this._getDragVerticalDirection(),
                            a = this._getDragHorizontalDirection();
                        return !!s && (this.floating ? a && "right" === a || "down" === n ? 2 : 1 : n && ("down" === n ? 2 : 1))
                    },
                    _intersectsWithSides: function(t) {
                        var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                            i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                            s = this._getDragVerticalDirection(),
                            n = this._getDragHorizontalDirection();
                        return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e)
                    },
                    _getDragVerticalDirection: function() {
                        var t = this.positionAbs.top - this.lastPositionAbs.top;
                        return 0 !== t && (t > 0 ? "down" : "up")
                    },
                    _getDragHorizontalDirection: function() {
                        var t = this.positionAbs.left - this.lastPositionAbs.left;
                        return 0 !== t && (t > 0 ? "right" : "left")
                    },
                    refresh: function(t) {
                        return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
                    },
                    _connectWith: function() {
                        var t = this.options;
                        return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
                    },
                    _getItemsAsjQuery: function(e) {
                        function i() {
                            r.push(this)
                        }
                        var s, n, a, o, r = [],
                            l = [],
                            h = this._connectWith();
                        if (h && e)
                            for (s = h.length - 1; s >= 0; s--)
                                for (a = t(h[s], this.document[0]), n = a.length - 1; n >= 0; n--) o = t.data(a[n], this.widgetFullName), o && o !== this && !o.options.disabled && l.push([t.isFunction(o.options.items) ? o.options.items.call(o.element) : t(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
                        for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                                options: this.options,
                                item: this.currentItem
                            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = l.length - 1; s >= 0; s--) l[s][0].each(i);
                        return t(r)
                    },
                    _removeCurrentsFromItems: function() {
                        var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
                        this.items = t.grep(this.items, function(t) {
                            for (var i = 0; i < e.length; i++)
                                if (e[i] === t.item[0]) return !1;
                            return !0
                        })
                    },
                    _refreshItems: function(e) {
                        this.items = [], this.containers = [this];
                        var i, s, n, a, o, r, l, h, c = this.items,
                            d = [
                                [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                                    item: this.currentItem
                                }) : t(this.options.items, this.element), this]
                            ],
                            u = this._connectWith();
                        if (u && this.ready)
                            for (i = u.length - 1; i >= 0; i--)
                                for (n = t(u[i], this.document[0]), s = n.length - 1; s >= 0; s--) a = t.data(n[s], this.widgetFullName), a && a !== this && !a.options.disabled && (d.push([t.isFunction(a.options.items) ? a.options.items.call(a.element[0], e, {
                                    item: this.currentItem
                                }) : t(a.options.items, a.element), a]), this.containers.push(a));
                        for (i = d.length - 1; i >= 0; i--)
                            for (o = d[i][1], r = d[i][0], s = 0, h = r.length; h > s; s++) l = t(r[s]), l.data(this.widgetName + "-item", o), c.push({
                                item: l,
                                instance: o,
                                width: 0,
                                height: 0,
                                left: 0,
                                top: 0
                            })
                    },
                    refreshPositions: function(e) {
                        var i, s, n, a;
                        for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), a = n.offset(), s.left = a.left, s.top = a.top);
                        if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                        else
                            for (i = this.containers.length - 1; i >= 0; i--) a = this.containers[i].element.offset(), this.containers[i].containerCache.left = a.left, this.containers[i].containerCache.top = a.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                        return this
                    },
                    _createPlaceholder: function(e) {
                        var i, s = (e = e || this).options;
                        s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                            element: function() {
                                var s = e.currentItem[0].nodeName.toLowerCase(),
                                    n = t("<" + s + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                                return "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(n)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, n) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
                            },
                            update: function(t, n) {
                                (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                            }
                        }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
                    },
                    _createTrPlaceholder: function(e, i) {
                        var s = this;
                        e.children().each(function() {
                            t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
                        })
                    },
                    _contactContainers: function(e) {
                        var i, s, n, a, o, r, l, h, c, d, u = null,
                            p = null;
                        for (i = this.containers.length - 1; i >= 0; i--)
                            if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
                                if (this._intersectsWith(this.containers[i].containerCache)) {
                                    if (u && t.contains(this.containers[i].element[0], u.element[0])) continue;
                                    u = this.containers[i], p = i
                                } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
                        if (u)
                            if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
                            else {
                                for (n = 1e4, a = null, o = (c = u.floating || this._isFloating(this.currentItem)) ? "left" : "top", r = c ? "width" : "height", d = c ? "clientX" : "clientY", s = this.items.length - 1; s >= 0; s--) t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (l = this.items[s].item.offset()[o], h = !1, e[d] - l > this.items[s][r] / 2 && (h = !0), Math.abs(e[d] - l) < n && (n = Math.abs(e[d] - l), a = this.items[s], this.direction = h ? "up" : "down"));
                                if (!a && !this.options.dropOnEmpty) return;
                                if (this.currentContainer === this.containers[p]) return void(this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
                                a ? this._rearrange(e, a, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
                            }
                    },
                    _createHelper: function(e) {
                        var i = this.options,
                            s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
                        return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
                            width: this.currentItem[0].style.width,
                            height: this.currentItem[0].style.height,
                            position: this.currentItem.css("position"),
                            top: this.currentItem.css("top"),
                            left: this.currentItem.css("left")
                        }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
                    },
                    _adjustOffsetFromHelper: function(e) {
                        "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                            left: +e[0],
                            top: +e[1] || 0
                        }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
                    },
                    _getParentOffset: function() {
                        this.offsetParent = this.helper.offsetParent();
                        var e = this.offsetParent.offset();
                        return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                            top: 0,
                            left: 0
                        }), {
                            top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                            left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                        }
                    },
                    _getRelativeOffset: function() {
                        if ("relative" === this.cssPosition) {
                            var t = this.currentItem.position();
                            return {
                                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                            }
                        }
                        return {
                            top: 0,
                            left: 0
                        }
                    },
                    _cacheMargins: function() {
                        this.margins = {
                            left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                            top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                        }
                    },
                    _cacheHelperProportions: function() {
                        this.helperProportions = {
                            width: this.helper.outerWidth(),
                            height: this.helper.outerHeight()
                        }
                    },
                    _setContainment: function() {
                        var e, i, s, n = this.options;
                        "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
                    },
                    _convertPositionTo: function(e, i) {
                        i || (i = this.position);
                        var s = "absolute" === e ? 1 : -1,
                            n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                            a = /(html|body)/i.test(n[0].tagName);
                        return {
                            top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s,
                            left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s
                        }
                    },
                    _generatePosition: function(e) {
                        var i, s, n = this.options,
                            a = e.pageX,
                            o = e.pageY,
                            r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                            l = /(html|body)/i.test(r[0].tagName);
                        return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((a - this.originalPageX) / n.grid[0]) * n.grid[0], a = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
                            top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : r.scrollTop()),
                            left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : r.scrollLeft())
                        }
                    },
                    _rearrange: function(t, e, i, s) {
                        i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                        var n = this.counter;
                        this._delay(function() {
                            n === this.counter && this.refreshPositions(!s)
                        })
                    },
                    _clear: function(t, e) {
                        function i(t, e, i) {
                            return function(s) {
                                i._trigger(t, s, e._uiHash(e))
                            }
                        }
                        this.reverting = !1;
                        var s, n = [];
                        if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                            for (s in this._storedCSS)("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
                            this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                        } else this.currentItem.show();
                        for (this.fromOutside && !e && n.push(function(t) {
                                this._trigger("receive", t, this._uiHash(this.fromOutside))
                            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function(t) {
                                this._trigger("update", t, this._uiHash())
                            }), this !== this.currentContainer && (e || (n.push(function(t) {
                                this._trigger("remove", t, this._uiHash())
                            }), n.push(function(t) {
                                return function(e) {
                                    t._trigger("receive", e, this._uiHash(this))
                                }
                            }.call(this, this.currentContainer)), n.push(function(t) {
                                return function(e) {
                                    t._trigger("update", e, this._uiHash(this))
                                }
                            }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
                        if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                            for (s = 0; s < n.length; s++) n[s].call(this, t);
                            this._trigger("stop", t, this._uiHash())
                        }
                        return this.fromOutside = !1, !this.cancelHelperRemoval
                    },
                    _trigger: function() {
                        !1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
                    },
                    _uiHash: function(e) {
                        var i = e || this;
                        return {
                            helper: i.helper,
                            placeholder: i.placeholder || t([]),
                            position: i.position,
                            originalPosition: i.originalPosition,
                            offset: i.positionAbs,
                            item: i.currentItem,
                            sender: e ? e.element : null
                        }
                    }
                }), t.widget("ui.spinner", {
                    version: "1.11.4",
                    defaultElement: "<input>",
                    widgetEventPrefix: "spin",
                    options: {
                        culture: null,
                        icons: {
                            down: "ui-icon-triangle-1-s",
                            up: "ui-icon-triangle-1-n"
                        },
                        incremental: !0,
                        max: null,
                        min: null,
                        numberFormat: null,
                        page: 10,
                        step: 1,
                        change: null,
                        spin: null,
                        start: null,
                        stop: null
                    },
                    _create: function() {
                        this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                            beforeunload: function() {
                                this.element.removeAttr("autocomplete")
                            }
                        })
                    },
                    _getCreateOptions: function() {
                        var e = {},
                            i = this.element;
                        return t.each(["min", "max", "step"], function(t, s) {
                            var n = i.attr(s);
                            void 0 !== n && n.length && (e[s] = n)
                        }), e
                    },
                    _events: {
                        keydown: function(t) {
                            this._start(t) && this._keydown(t) && t.preventDefault()
                        },
                        keyup: "_stop",
                        focus: function() {
                            this.previous = this.element.val()
                        },
                        blur: function(t) {
                            return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", t)))
                        },
                        mousewheel: function(t, e) {
                            if (e) {
                                if (!this.spinning && !this._start(t)) return !1;
                                this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                                    this.spinning && this._stop(t)
                                }, 100), t.preventDefault()
                            }
                        },
                        "mousedown .ui-spinner-button": function(e) {
                            function i() {
                                this.element[0] === this.document[0].activeElement || (this.element.focus(), this.previous = s, this._delay(function() {
                                    this.previous = s
                                }))
                            }
                            var s;
                            s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() {
                                delete this.cancelBlur, i.call(this)
                            }), !1 !== this._start(e) && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
                        },
                        "mouseup .ui-spinner-button": "_stop",
                        "mouseenter .ui-spinner-button": function(e) {
                            return t(e.currentTarget).hasClass("ui-state-active") ? !1 !== this._start(e) && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) : void 0
                        },
                        "mouseleave .ui-spinner-button": "_stop"
                    },
                    _draw: function() {
                        var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                        this.element.attr("role", "spinbutton"), this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()), this.options.disabled && this.disable()
                    },
                    _keydown: function(e) {
                        var i = this.options,
                            s = t.ui.keyCode;
                        switch (e.keyCode) {
                            case s.UP:
                                return this._repeat(null, 1, e), !0;
                            case s.DOWN:
                                return this._repeat(null, -1, e), !0;
                            case s.PAGE_UP:
                                return this._repeat(null, i.page, e), !0;
                            case s.PAGE_DOWN:
                                return this._repeat(null, -i.page, e), !0
                        }
                        return !1
                    },
                    _uiSpinnerHtml: function() {
                        return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
                    },
                    _buttonHtml: function() {
                        return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
                    },
                    _start: function(t) {
                        return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1), this.spinning = !0, !0)
                    },
                    _repeat: function(t, e, i) {
                        t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                            this._repeat(40, e, i)
                        }, t), this._spin(e * this.options.step, i)
                    },
                    _spin: function(t, e) {
                        var i = this.value() || 0;
                        this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && !1 === this._trigger("spin", e, {
                            value: i
                        }) || (this._value(i), this.counter++)
                    },
                    _increment: function(e) {
                        var i = this.options.incremental;
                        return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
                    },
                    _precision: function() {
                        var t = this._precisionOf(this.options.step);
                        return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
                    },
                    _precisionOf: function(t) {
                        var e = t.toString(),
                            i = e.indexOf(".");
                        return -1 === i ? 0 : e.length - i - 1
                    },
                    _adjustValue: function(t) {
                        var e, i, s = this.options;
                        return i = t - (e = null !== s.min ? s.min : 0), t = e + (i = Math.round(i / s.step) * s.step), t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && t < s.min ? s.min : t
                    },
                    _stop: function(t) {
                        this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
                    },
                    _setOption: function(t, e) {
                        if ("culture" === t || "numberFormat" === t) {
                            var i = this._parse(this.element.val());
                            return this.options[t] = e, void this.element.val(this._format(i))
                        }("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)), this._super(t, e), "disabled" === t && (this.widget().toggleClass("ui-state-disabled", !!e), this.element.prop("disabled", !!e), this.buttons.button(e ? "disable" : "enable"))
                    },
                    _setOptions: r(function(t) {
                        this._super(t)
                    }),
                    _parse: function(t) {
                        return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
                    },
                    _format: function(t) {
                        return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
                    },
                    _refresh: function() {
                        this.element.attr({
                            "aria-valuemin": this.options.min,
                            "aria-valuemax": this.options.max,
                            "aria-valuenow": this._parse(this.element.val())
                        })
                    },
                    isValid: function() {
                        var t = this.value();
                        return null !== t && t === this._adjustValue(t)
                    },
                    _value: function(t, e) {
                        var i;
                        "" !== t && (null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
                    },
                    _destroy: function() {
                        this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
                    },
                    stepUp: r(function(t) {
                        this._stepUp(t)
                    }),
                    _stepUp: function(t) {
                        this._start() && (this._spin((t || 1) * this.options.step), this._stop())
                    },
                    stepDown: r(function(t) {
                        this._stepDown(t)
                    }),
                    _stepDown: function(t) {
                        this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
                    },
                    pageUp: r(function(t) {
                        this._stepUp((t || 1) * this.options.page)
                    }),
                    pageDown: r(function(t) {
                        this._stepDown((t || 1) * this.options.page)
                    }),
                    value: function(t) {
                        return arguments.length ? void r(this._value).call(this, t) : this._parse(this.element.val())
                    },
                    widget: function() {
                        return this.uiSpinner
                    }
                }), t.widget("ui.tabs", {
                    version: "1.11.4",
                    delay: 300,
                    options: {
                        active: null,
                        collapsible: !1,
                        event: "click",
                        heightStyle: "content",
                        hide: null,
                        show: null,
                        activate: null,
                        beforeActivate: null,
                        beforeLoad: null,
                        load: null
                    },
                    _isLocal: (C = /#.*$/, function(t) {
                        var e, i;
                        e = (t = t.cloneNode(!1)).href.replace(C, ""), i = location.href.replace(C, "");
                        try {
                            e = decodeURIComponent(e)
                        } catch (t) {}
                        try {
                            i = decodeURIComponent(i)
                        } catch (t) {}
                        return t.hash.length > 1 && e === i
                    }),
                    _create: function() {
                        var e = this,
                            i = this.options;
                        this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                            return e.tabs.index(t)
                        }))).sort()), !1 !== this.options.active && this.anchors.length ? this.active = this._findActive(i.active) : this.active = t(), this._refresh(), this.active.length && this.load(i.active)
                    },
                    _initialActive: function() {
                        var e = this.options.active,
                            i = this.options.collapsible,
                            s = location.hash.substring(1);
                        return null === e && (s && this.tabs.each(function(i, n) {
                            return t(n).attr("aria-controls") === s ? (e = i, !1) : void 0
                        }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = !!this.tabs.length && 0)), !1 !== e && (-1 === (e = this.tabs.index(this.tabs.eq(e))) && (e = !i && 0)), !i && !1 === e && this.anchors.length && (e = 0), e
                    },
                    _getCreateEventData: function() {
                        return {
                            tab: this.active,
                            panel: this.active.length ? this._getPanelForTab(this.active) : t()
                        }
                    },
                    _tabKeydown: function(e) {
                        var i = t(this.document[0].activeElement).closest("li"),
                            s = this.tabs.index(i),
                            n = !0;
                        if (!this._handlePageNav(e)) {
                            switch (e.keyCode) {
                                case t.ui.keyCode.RIGHT:
                                case t.ui.keyCode.DOWN:
                                    s++;
                                    break;
                                case t.ui.keyCode.UP:
                                case t.ui.keyCode.LEFT:
                                    n = !1, s--;
                                    break;
                                case t.ui.keyCode.END:
                                    s = this.anchors.length - 1;
                                    break;
                                case t.ui.keyCode.HOME:
                                    s = 0;
                                    break;
                                case t.ui.keyCode.SPACE:
                                    return e.preventDefault(), clearTimeout(this.activating), void this._activate(s);
                                case t.ui.keyCode.ENTER:
                                    return e.preventDefault(), clearTimeout(this.activating), void this._activate(s !== this.options.active && s);
                                default:
                                    return
                            }
                            e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function() {
                                this.option("active", s)
                            }, this.delay))
                        }
                    },
                    _panelKeydown: function(e) {
                        this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
                    },
                    _handlePageNav: function(e) {
                        return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
                    },
                    _findNextTab: function(e, i) {
                        for (var s = this.tabs.length - 1; - 1 !== t.inArray((e > s && (e = 0), 0 > e && (e = s), e), this.options.disabled);) e = i ? e + 1 : e - 1;
                        return e
                    },
                    _focusNextTab: function(t, e) {
                        return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
                    },
                    _setOption: function(t, e) {
                        return "active" === t ? void this._activate(e) : "disabled" === t ? void this._setupDisabled(e) : (this._super(t, e), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", e), e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e)))
                    },
                    _sanitizeSelector: function(t) {
                        return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
                    },
                    refresh: function() {
                        var e = this.options,
                            i = this.tablist.children(":has(a[href])");
                        e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
                            return i.index(t)
                        }), this._processTabs(), !1 !== e.active && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
                    },
                    _refresh: function() {
                        this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                            "aria-selected": "false",
                            "aria-expanded": "false",
                            tabIndex: -1
                        }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                            "aria-hidden": "true"
                        }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                            "aria-selected": "true",
                            "aria-expanded": "true",
                            tabIndex: 0
                        }), this._getPanelForTab(this.active).show().attr({
                            "aria-hidden": "false"
                        })) : this.tabs.eq(0).attr("tabIndex", 0)
                    },
                    _processTabs: function() {
                        var e = this,
                            i = this.tabs,
                            s = this.anchors,
                            n = this.panels;
                        this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function(e) {
                            t(this).is(".ui-state-disabled") && e.preventDefault()
                        }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                            t(this).closest("li").is(".ui-state-disabled") && this.blur()
                        }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                            role: "tab",
                            tabIndex: -1
                        }), this.anchors = this.tabs.map(function() {
                            return t("a", this)[0]
                        }).addClass("ui-tabs-anchor").attr({
                            role: "presentation",
                            tabIndex: -1
                        }), this.panels = t(), this.anchors.each(function(i, s) {
                            var n, a, o, r = t(s).uniqueId().attr("id"),
                                l = t(s).closest("li"),
                                h = l.attr("aria-controls");
                            e._isLocal(s) ? (o = (n = s.hash).substring(1), a = e.element.find(e._sanitizeSelector(n))) : (n = "#" + (o = l.attr("aria-controls") || t({}).uniqueId()[0].id), (a = e.element.find(n)).length || (a = e._createPanel(o)).insertAfter(e.panels[i - 1] || e.tablist), a.attr("aria-live", "polite")), a.length && (e.panels = e.panels.add(a)), h && l.data("ui-tabs-aria-controls", h), l.attr({
                                "aria-controls": o,
                                "aria-labelledby": r
                            }), a.attr("aria-labelledby", r)
                        }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)))
                    },
                    _getList: function() {
                        return this.tablist || this.element.find("ol,ul").eq(0)
                    },
                    _createPanel: function(e) {
                        return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
                    },
                    _setupDisabled: function(e) {
                        t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
                        for (var i, s = 0; i = this.tabs[s]; s++) !0 === e || -1 !== t.inArray(s, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                        this.options.disabled = e
                    },
                    _setupEvents: function(e) {
                        var i = {};
                        e && t.each(e.split(" "), function(t, e) {
                            i[e] = "_eventHandler"
                        }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                            click: function(t) {
                                t.preventDefault()
                            }
                        }), this._on(this.anchors, i), this._on(this.tabs, {
                            keydown: "_tabKeydown"
                        }), this._on(this.panels, {
                            keydown: "_panelKeydown"
                        }), this._focusable(this.tabs), this._hoverable(this.tabs)
                    },
                    _setupHeightStyle: function(e) {
                        var i, s = this.element.parent();
                        "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                            var e = t(this),
                                s = e.css("position");
                            "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
                        }), this.element.children().not(this.panels).each(function() {
                            i -= t(this).outerHeight(!0)
                        }), this.panels.each(function() {
                            t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
                        }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
                            i = Math.max(i, t(this).height("").height())
                        }).height(i))
                    },
                    _eventHandler: function(e) {
                        var i = this.options,
                            s = this.active,
                            n = t(e.currentTarget).closest("li"),
                            a = n[0] === s[0],
                            o = a && i.collapsible,
                            r = o ? t() : this._getPanelForTab(n),
                            l = s.length ? this._getPanelForTab(s) : t(),
                            h = {
                                oldTab: s,
                                oldPanel: l,
                                newTab: o ? t() : n,
                                newPanel: r
                            };
                        e.preventDefault(), n.hasClass("ui-state-disabled") || n.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || !1 === this._trigger("beforeActivate", e, h) || (i.active = !o && this.tabs.index(n), this.active = a ? t() : n, this.xhr && this.xhr.abort(), l.length || r.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), r.length && this.load(this.tabs.index(n), e), this._toggle(e, h))
                    },
                    _toggle: function(e, i) {
                        function s() {
                            a.running = !1, a._trigger("activate", e, i)
                        }

                        function n() {
                            i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && a.options.show ? a._show(o, a.options.show, s) : (o.show(), s())
                        }
                        var a = this,
                            o = i.newPanel,
                            r = i.oldPanel;
                        this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
                            i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n()
                        }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({
                            "aria-selected": "false",
                            "aria-expanded": "false"
                        }), o.length && r.length ? i.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function() {
                            return 0 === t(this).attr("tabIndex")
                        }).attr("tabIndex", -1), o.attr("aria-hidden", "false"), i.newTab.attr({
                            "aria-selected": "true",
                            "aria-expanded": "true",
                            tabIndex: 0
                        })
                    },
                    _activate: function(e) {
                        var i, s = this._findActive(e);
                        s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
                            target: i,
                            currentTarget: i,
                            preventDefault: t.noop
                        }))
                    },
                    _findActive: function(e) {
                        return !1 === e ? t() : this.tabs.eq(e)
                    },
                    _getIndex: function(t) {
                        return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
                    },
                    _destroy: function() {
                        this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function() {
                            t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                        }), this.tabs.each(function() {
                            var e = t(this),
                                i = e.data("ui-tabs-aria-controls");
                            i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
                        }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
                    },
                    enable: function(e) {
                        var i = this.options.disabled;
                        !1 !== i && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function(t) {
                            return t !== e ? t : null
                        }) : t.map(this.tabs, function(t, i) {
                            return i !== e ? i : null
                        })), this._setupDisabled(i))
                    },
                    disable: function(e) {
                        var i = this.options.disabled;
                        if (!0 !== i) {
                            if (void 0 === e) i = !0;
                            else {
                                if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                                i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                            }
                            this._setupDisabled(i)
                        }
                    },
                    load: function(e, i) {
                        e = this._getIndex(e);
                        var s = this,
                            n = this.tabs.eq(e),
                            a = n.find(".ui-tabs-anchor"),
                            o = this._getPanelForTab(n),
                            r = {
                                tab: n,
                                panel: o
                            },
                            l = function(t, e) {
                                "abort" === e && s.panels.stop(!1, !0), n.removeClass("ui-tabs-loading"), o.removeAttr("aria-busy"), t === s.xhr && delete s.xhr
                            };
                        this._isLocal(a[0]) || (this.xhr = t.ajax(this._ajaxSettings(a, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (n.addClass("ui-tabs-loading"), o.attr("aria-busy", "true"), this.xhr.done(function(t, e, n) {
                            setTimeout(function() {
                                o.html(t), s._trigger("load", i, r), l(n, e)
                            }, 1)
                        }).fail(function(t, e) {
                            setTimeout(function() {
                                l(t, e)
                            }, 1)
                        })))
                    },
                    _ajaxSettings: function(e, i, s) {
                        var n = this;
                        return {
                            url: e.attr("href"),
                            beforeSend: function(e, a) {
                                return n._trigger("beforeLoad", i, t.extend({
                                    jqXHR: e,
                                    ajaxSettings: a
                                }, s))
                            }
                        }
                    },
                    _getPanelForTab: function(e) {
                        var i = t(e).attr("aria-controls");
                        return this.element.find(this._sanitizeSelector("#" + i))
                    }
                }), t.widget("ui.tooltip", {
                    version: "1.11.4",
                    options: {
                        content: function() {
                            var e = t(this).attr("title") || "";
                            return t("<a>").text(e).html()
                        },
                        hide: !0,
                        items: "[title]:not([disabled])",
                        position: {
                            my: "left top+15",
                            at: "left bottom",
                            collision: "flipfit flip"
                        },
                        show: !0,
                        tooltipClass: null,
                        track: !1,
                        close: null,
                        open: null
                    },
                    _addDescribedBy: function(e, i) {
                        var s = (e.attr("aria-describedby") || "").split(/\s+/);
                        s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
                    },
                    _removeDescribedBy: function(e) {
                        var i = e.data("ui-tooltip-id"),
                            s = (e.attr("aria-describedby") || "").split(/\s+/),
                            n = t.inArray(i, s); - 1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), (s = t.trim(s.join(" "))) ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
                    },
                    _create: function() {
                        this._on({
                            mouseover: "open",
                            focusin: "open"
                        }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable(), this.liveRegion = t("<div>").attr({
                            role: "log",
                            "aria-live": "assertive",
                            "aria-relevant": "additions"
                        }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
                    },
                    _setOption: function(e, i) {
                        var s = this;
                        return "disabled" === e ? (this[i ? "_disable" : "_enable"](), void(this.options[e] = i)) : (this._super(e, i), void("content" === e && t.each(this.tooltips, function(t, e) {
                            s._updateContent(e.element)
                        })))
                    },
                    _disable: function() {
                        var e = this;
                        t.each(this.tooltips, function(i, s) {
                            var n = t.Event("blur");
                            n.target = n.currentTarget = s.element[0], e.close(n, !0)
                        }), this.element.find(this.options.items).addBack().each(function() {
                            var e = t(this);
                            e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).removeAttr("title")
                        })
                    },
                    _enable: function() {
                        this.element.find(this.options.items).addBack().each(function() {
                            var e = t(this);
                            e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
                        })
                    },
                    open: function(e) {
                        var i = this,
                            s = t(e ? e.target : this.element).closest(this.options.items);
                        s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function() {
                            var e, s = t(this);
                            s.data("ui-tooltip-open") && ((e = t.Event("blur")).target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
                                element: this,
                                title: s.attr("title")
                            }, s.attr("title", ""))
                        }), this._registerCloseHandlers(e, s), this._updateContent(s, e))
                    },
                    _updateContent: function(t, e) {
                        var i, s = this.options.content,
                            n = this,
                            a = e ? e.type : null;
                        return "string" == typeof s ? this._open(e, t, s) : void((i = s.call(t[0], function(i) {
                            n._delay(function() {
                                t.data("ui-tooltip-open") && (e && (e.type = a), this._open(e, t, i))
                            })
                        })) && this._open(e, t, i))
                    },
                    _open: function(e, i, s) {
                        function n(t) {
                            h.of = t, o.is(":hidden") || o.position(h)
                        }
                        var a, o, r, l, h = t.extend({}, this.options.position);
                        if (s) {
                            if (a = this._find(i)) return void a.tooltip.find(".ui-tooltip-content").html(s);
                            i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), a = this._tooltip(i), o = a.tooltip, this._addDescribedBy(i, o.attr("id")), o.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), s.clone ? (l = s.clone()).removeAttr("id").find("[id]").removeAttr("id") : l = s, t("<div>").html(l).appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
                                mousemove: n
                            }), n(e)) : o.position(t.extend({
                                of: i
                            }, this.options.position)), o.hide(), this._show(o, this.options.show), this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function() {
                                o.is(":visible") && (n(h.of), clearInterval(r))
                            }, t.fx.interval)), this._trigger("open", e, {
                                tooltip: o
                            })
                        }
                    },
                    _registerCloseHandlers: function(e, i) {
                        var s = {
                            keyup: function(e) {
                                if (e.keyCode === t.ui.keyCode.ESCAPE) {
                                    var s = t.Event(e);
                                    s.currentTarget = i[0], this.close(s, !0)
                                }
                            }
                        };
                        i[0] !== this.element[0] && (s.remove = function() {
                            this._removeTooltip(this._find(i).tooltip)
                        }), e && "mouseover" !== e.type || (s.mouseleave = "close"), e && "focusin" !== e.type || (s.focusout = "close"), this._on(!0, i, s)
                    },
                    close: function(e) {
                        var i, s = this,
                            n = t(e ? e.currentTarget : this.element),
                            a = this._find(n);
                        return a ? (i = a.tooltip, void(a.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), a.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function() {
                            s._removeTooltip(t(this))
                        }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
                            t(i.element).attr("title", i.title), delete s.parents[e]
                        }), a.closing = !0, this._trigger("close", e, {
                            tooltip: i
                        }), a.hiding || (a.closing = !1)))) : void n.removeData("ui-tooltip-open")
                    },
                    _tooltip: function(e) {
                        var i = t("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
                            s = i.uniqueId().attr("id");
                        return t("<div>").addClass("ui-tooltip-content").appendTo(i), i.appendTo(this.document[0].body), this.tooltips[s] = {
                            element: e,
                            tooltip: i
                        }
                    },
                    _find: function(t) {
                        var e = t.data("ui-tooltip-id");
                        return e ? this.tooltips[e] : null
                    },
                    _removeTooltip: function(t) {
                        t.remove(), delete this.tooltips[t.attr("id")]
                    },
                    _destroy: function() {
                        var e = this;
                        t.each(this.tooltips, function(i, s) {
                            var n = t.Event("blur"),
                                a = s.element;
                            n.target = n.currentTarget = a[0], e.close(n, !0), t("#" + i).remove(), a.data("ui-tooltip-title") && (a.attr("title") || a.attr("title", a.data("ui-tooltip-title")), a.removeData("ui-tooltip-title"))
                        }), this.liveRegion.remove()
                    }
                })
        }, "function" == typeof define && define.amd ? define(["jquery"], _) : _(jQuery), v = function(t) {
            var e, i, s, n, a, o, r, l, h, c, d, u, p, f, m, g, v, _, b, y, w, x, C, k, D, S, T, I, M, P, O, E, A, z, N, H, W, B, R, F, L, j, Y, q, U, V, K, X, G, $, Q, Z, J, tt, et, it, st, nt;
            it = "function" == typeof define && define.amd, st = "undefined" != typeof module && module.exports, nt = "https:" == document.location.protocol ? "https:" : "http:", it || (st ? require("jquery-mousewheel")(t) : t.event.special.mousewheel || t("head").append(decodeURI("%3Cscript src=" + nt + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))), i = "mCustomScrollbar", s = "mCS", n = ".mCustomScrollbar", a = {
                setTop: 0,
                setLeft: 0,
                axis: "y",
                scrollbarPosition: "inside",
                scrollInertia: 950,
                autoDraggerLength: !0,
                alwaysShowScrollbar: 0,
                snapOffset: 0,
                mouseWheel: {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    deltaFactor: "auto",
                    disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                },
                scrollButtons: {
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                keyboard: {
                    enable: !0,
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                contentTouchScroll: 25,
                documentTouchScroll: !0,
                advanced: {
                    autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                    updateOnContentResize: !0,
                    updateOnImageLoad: "auto",
                    autoUpdateTimeout: 60
                },
                theme: "light",
                callbacks: {
                    onTotalScrollOffset: 0,
                    onTotalScrollBackOffset: 0,
                    alwaysTriggerOffsets: !0
                }
            }, o = 0, r = {}, l = window.attachEvent && !window.addEventListener ? 1 : 0, h = !1, c = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"], d = {
                init: function(e) {
                    var e = t.extend(!0, {}, a, e),
                        i = u.call(this);
                    if (e.live) {
                        var l = e.liveSelector || this.selector || n,
                            h = t(l);
                        if ("off" === e.live) return void f(l);
                        r[l] = setTimeout(function() {
                            h.mCustomScrollbar(e), "once" === e.live && h.length && f(l)
                        }, 500)
                    } else f(l);
                    return e.setWidth = e.set_width ? e.set_width : e.setWidth, e.setHeight = e.set_height ? e.set_height : e.setHeight, e.axis = e.horizontalScroll ? "x" : m(e.axis), e.scrollInertia = e.scrollInertia > 0 && e.scrollInertia < 17 ? 17 : e.scrollInertia, "object" !== _typeof(e.mouseWheel) && 1 == e.mouseWheel && (e.mouseWheel = {
                        enable: !0,
                        scrollAmount: "auto",
                        axis: "y",
                        preventDefault: !1,
                        deltaFactor: "auto",
                        normalizeDelta: !1,
                        invert: !1
                    }), e.mouseWheel.scrollAmount = e.mouseWheelPixels ? e.mouseWheelPixels : e.mouseWheel.scrollAmount, e.mouseWheel.normalizeDelta = e.advanced.normalizeMouseWheelDelta ? e.advanced.normalizeMouseWheelDelta : e.mouseWheel.normalizeDelta, e.scrollButtons.scrollType = g(e.scrollButtons.scrollType), p(e), t(i).each(function() {
                        var i = t(this);
                        if (!i.data(s)) {
                            i.data(s, {
                                idx: ++o,
                                opt: e,
                                scrollRatio: {
                                    y: null,
                                    x: null
                                },
                                overflowed: null,
                                contentReset: {
                                    y: null,
                                    x: null
                                },
                                bindEvents: !1,
                                tweenRunning: !1,
                                sequential: {},
                                langDir: i.css("direction"),
                                cbOffsets: null,
                                trigger: null,
                                poll: {
                                    size: {
                                        o: 0,
                                        n: 0
                                    },
                                    img: {
                                        o: 0,
                                        n: 0
                                    },
                                    change: {
                                        o: 0,
                                        n: 0
                                    }
                                }
                            });
                            var n = i.data(s),
                                a = n.opt,
                                r = i.data("mcs-axis"),
                                l = i.data("mcs-scrollbar-position"),
                                h = i.data("mcs-theme");
                            r && (a.axis = r), l && (a.scrollbarPosition = l), h && (a.theme = h, p(a)), v.call(this), n && a.callbacks.onCreate && "function" == typeof a.callbacks.onCreate && a.callbacks.onCreate.call(this), t("#mCSB_" + n.idx + "_container img:not(." + c[2] + ")").addClass(c[2]), d.update.call(null, i)
                        }
                    })
                },
                update: function(e, i) {
                    var n = e || u.call(this);
                    return t(n).each(function() {
                        var e = t(this);
                        if (e.data(s)) {
                            var n = e.data(s),
                                a = n.opt,
                                o = t("#mCSB_" + n.idx + "_container"),
                                r = t("#mCSB_" + n.idx),
                                l = [t("#mCSB_" + n.idx + "_dragger_vertical"), t("#mCSB_" + n.idx + "_dragger_horizontal")];
                            if (!o.length) return;
                            n.tweenRunning && U(e), i && n && a.callbacks.onBeforeUpdate && "function" == typeof a.callbacks.onBeforeUpdate && a.callbacks.onBeforeUpdate.call(this), e.hasClass(c[3]) && e.removeClass(c[3]), e.hasClass(c[4]) && e.removeClass(c[4]), r.css("max-height", "none"), r.height() !== e.height() && r.css("max-height", e.height()), b.call(this), "y" === a.axis || a.advanced.autoExpandHorizontalScroll || o.css("width", _(o)), n.overflowed = k.call(this), I.call(this), a.autoDraggerLength && w.call(this), x.call(this), S.call(this);
                            var h = [Math.abs(o[0].offsetTop), Math.abs(o[0].offsetLeft)];
                            "x" !== a.axis && (n.overflowed[0] ? l[0].height() > l[0].parent().height() ? D.call(this) : (V(e, h[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            }), n.contentReset.y = null) : (D.call(this), "y" === a.axis ? T.call(this) : "yx" === a.axis && n.overflowed[1] && V(e, h[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: "none"
                            }))), "y" !== a.axis && (n.overflowed[1] ? l[1].width() > l[1].parent().width() ? D.call(this) : (V(e, h[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: "none"
                            }), n.contentReset.x = null) : (D.call(this), "x" === a.axis ? T.call(this) : "yx" === a.axis && n.overflowed[0] && V(e, h[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            }))), i && n && (2 === i && a.callbacks.onImageLoad && "function" == typeof a.callbacks.onImageLoad ? a.callbacks.onImageLoad.call(this) : 3 === i && a.callbacks.onSelectorChange && "function" == typeof a.callbacks.onSelectorChange ? a.callbacks.onSelectorChange.call(this) : a.callbacks.onUpdate && "function" == typeof a.callbacks.onUpdate && a.callbacks.onUpdate.call(this)), q.call(this)
                        }
                    })
                },
                scrollTo: function(e, i) {
                    if (void 0 !== e && null != e) {
                        var n = u.call(this);
                        return t(n).each(function() {
                            var n = t(this);
                            if (n.data(s)) {
                                var a = n.data(s),
                                    o = a.opt,
                                    r = {
                                        trigger: "external",
                                        scrollInertia: o.scrollInertia,
                                        scrollEasing: "mcsEaseInOut",
                                        moveDragger: !1,
                                        timeout: 60,
                                        callbacks: !0,
                                        onStart: !0,
                                        onUpdate: !0,
                                        onComplete: !0
                                    },
                                    l = t.extend(!0, {}, r, i),
                                    h = j.call(this, e),
                                    c = l.scrollInertia > 0 && l.scrollInertia < 17 ? 17 : l.scrollInertia;
                                h[0] = Y.call(this, h[0], "y"), h[1] = Y.call(this, h[1], "x"), l.moveDragger && (h[0] *= a.scrollRatio.y, h[1] *= a.scrollRatio.x), l.dur = et() ? 0 : c, setTimeout(function() {
                                    null !== h[0] && void 0 !== h[0] && "x" !== o.axis && a.overflowed[0] && (l.dir = "y", l.overwrite = "all", V(n, h[0].toString(), l)), null !== h[1] && void 0 !== h[1] && "y" !== o.axis && a.overflowed[1] && (l.dir = "x", l.overwrite = "none", V(n, h[1].toString(), l))
                                }, l.timeout)
                            }
                        })
                    }
                },
                stop: function() {
                    var e = u.call(this);
                    return t(e).each(function() {
                        var e = t(this);
                        e.data(s) && U(e)
                    })
                },
                disable: function(e) {
                    var i = u.call(this);
                    return t(i).each(function() {
                        var i = t(this);
                        i.data(s) && (i.data(s), q.call(this, "remove"), T.call(this), e && D.call(this), I.call(this, !0), i.addClass(c[3]))
                    })
                },
                destroy: function() {
                    var e = u.call(this);
                    return t(e).each(function() {
                        var n = t(this);
                        if (n.data(s)) {
                            var a = n.data(s),
                                o = a.opt,
                                r = t("#mCSB_" + a.idx),
                                l = t("#mCSB_" + a.idx + "_container"),
                                h = t(".mCSB_" + a.idx + "_scrollbar");
                            o.live && f(o.liveSelector || t(e).selector), q.call(this, "remove"), T.call(this), D.call(this), n.removeData(s), $(this, "mcs"), h.remove(), l.find("img." + c[2]).removeClass(c[2]), r.replaceWith(l.contents()), n.removeClass(i + " _" + s + "_" + a.idx + " " + c[6] + " " + c[7] + " " + c[5] + " " + c[3]).addClass(c[4])
                        }
                    })
                }
            }, u = function() {
                return "object" !== _typeof(t(this)) || t(this).length < 1 ? n : this
            }, p = function(e) {
                e.autoDraggerLength = !(t.inArray(e.theme, ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"]) > -1) && e.autoDraggerLength, e.autoExpandScrollbar = !(t.inArray(e.theme, ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"]) > -1) && e.autoExpandScrollbar, e.scrollButtons.enable = !(t.inArray(e.theme, ["minimal", "minimal-dark"]) > -1) && e.scrollButtons.enable, e.autoHideScrollbar = t.inArray(e.theme, ["minimal", "minimal-dark"]) > -1 || e.autoHideScrollbar, e.scrollbarPosition = t.inArray(e.theme, ["minimal", "minimal-dark"]) > -1 ? "outside" : e.scrollbarPosition
            }, f = function(t) {
                r[t] && (clearTimeout(r[t]), $(r, t))
            }, m = function(t) {
                return "yx" === t || "xy" === t || "auto" === t ? "yx" : "x" === t || "horizontal" === t ? "x" : "y"
            }, g = function(t) {
                return "stepped" === t || "pixels" === t || "step" === t || "click" === t ? "stepped" : "stepless"
            }, v = function() {
                var e = t(this),
                    n = e.data(s),
                    a = n.opt,
                    o = a.autoExpandScrollbar ? " " + c[1] + "_expand" : "",
                    r = ["<div id='mCSB_" + n.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + a.theme + " mCSB_scrollTools_vertical" + o + "'><div class='" + c[12] + "'><div id='mCSB_" + n.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + n.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + a.theme + " mCSB_scrollTools_horizontal" + o + "'><div class='" + c[12] + "'><div id='mCSB_" + n.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                    l = "yx" === a.axis ? "mCSB_vertical_horizontal" : "x" === a.axis ? "mCSB_horizontal" : "mCSB_vertical",
                    h = "yx" === a.axis ? r[0] + r[1] : "x" === a.axis ? r[1] : r[0],
                    d = "yx" === a.axis ? "<div id='mCSB_" + n.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                    u = a.autoHideScrollbar ? " " + c[6] : "",
                    p = "x" !== a.axis && "rtl" === n.langDir ? " " + c[7] : "";
                a.setWidth && e.css("width", a.setWidth), a.setHeight && e.css("height", a.setHeight), a.setLeft = "y" !== a.axis && "rtl" === n.langDir ? "989999px" : a.setLeft, e.addClass(i + " _" + s + "_" + n.idx + u + p).wrapInner("<div id='mCSB_" + n.idx + "' class='mCustomScrollBox mCS-" + a.theme + " " + l + "'><div id='mCSB_" + n.idx + "_container' class='mCSB_container' style='position:relative; top:" + a.setTop + "; left:" + a.setLeft + ";' dir=" + n.langDir + " /></div>");
                var f = t("#mCSB_" + n.idx),
                    m = t("#mCSB_" + n.idx + "_container");
                "y" === a.axis || a.advanced.autoExpandHorizontalScroll || m.css("width", _(m)), "outside" === a.scrollbarPosition ? ("static" === e.css("position") && e.css("position", "relative"), e.css("overflow", "visible"), f.addClass("mCSB_outside").after(h)) : (f.addClass("mCSB_inside").append(h), m.wrap(d)), y.call(this);
                var g = [t("#mCSB_" + n.idx + "_dragger_vertical"), t("#mCSB_" + n.idx + "_dragger_horizontal")];
                g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width())
            }, _ = function(e) {
                var i = [e[0].scrollWidth, Math.max.apply(Math, e.children().map(function() {
                        return t(this).outerWidth(!0)
                    }).get())],
                    s = e.parent().width();
                return i[0] > s ? i[0] : i[1] > s ? i[1] : "100%"
            }, b = function() {
                var e = t(this),
                    i = e.data(s),
                    n = i.opt,
                    a = t("#mCSB_" + i.idx + "_container");
                if (n.advanced.autoExpandHorizontalScroll && "y" !== n.axis) {
                    a.css({
                        width: "auto",
                        "min-width": 0,
                        "overflow-x": "scroll"
                    });
                    var o = Math.ceil(a[0].scrollWidth);
                    3 === n.advanced.autoExpandHorizontalScroll || 2 !== n.advanced.autoExpandHorizontalScroll && o > a.parent().width() ? a.css({
                        width: o,
                        "min-width": "100%",
                        "overflow-x": "inherit"
                    }) : a.css({
                        "overflow-x": "inherit",
                        position: "absolute"
                    }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                        width: Math.ceil(a[0].getBoundingClientRect().right + .4) - Math.floor(a[0].getBoundingClientRect().left),
                        "min-width": "100%",
                        position: "relative"
                    }).unwrap()
                }
            }, y = function() {
                var e = t(this),
                    i = e.data(s),
                    n = i.opt,
                    a = t(".mCSB_" + i.idx + "_scrollbar:first"),
                    o = J(n.scrollButtons.tabindex) ? "tabindex='" + n.scrollButtons.tabindex + "'" : "",
                    r = ["<a href='#' class='" + c[13] + "' oncontextmenu='return false;' " + o + " />", "<a href='#' class='" + c[14] + "' oncontextmenu='return false;' " + o + " />", "<a href='#' class='" + c[15] + "' oncontextmenu='return false;' " + o + " />", "<a href='#' class='" + c[16] + "' oncontextmenu='return false;' " + o + " />"],
                    l = ["x" === n.axis ? r[2] : r[0], "x" === n.axis ? r[3] : r[1], r[2], r[3]];
                n.scrollButtons.enable && a.prepend(l[0]).append(l[1]).next(".mCSB_scrollTools").prepend(l[2]).append(l[3])
            }, w = function() {
                var e = t(this),
                    i = e.data(s),
                    n = t("#mCSB_" + i.idx),
                    a = t("#mCSB_" + i.idx + "_container"),
                    o = [t("#mCSB_" + i.idx + "_dragger_vertical"), t("#mCSB_" + i.idx + "_dragger_horizontal")],
                    r = [n.height() / a.outerHeight(!1), n.width() / a.outerWidth(!1)],
                    h = [parseInt(o[0].css("min-height")), Math.round(r[0] * o[0].parent().height()), parseInt(o[1].css("min-width")), Math.round(r[1] * o[1].parent().width())],
                    c = l && h[1] < h[0] ? h[0] : h[1],
                    d = l && h[3] < h[2] ? h[2] : h[3];
                o[0].css({
                    height: c,
                    "max-height": o[0].parent().height() - 10
                }).find(".mCSB_dragger_bar").css({
                    "line-height": h[0] + "px"
                }), o[1].css({
                    width: d,
                    "max-width": o[1].parent().width() - 10
                })
            }, x = function() {
                var e = t(this),
                    i = e.data(s),
                    n = t("#mCSB_" + i.idx),
                    a = t("#mCSB_" + i.idx + "_container"),
                    o = [t("#mCSB_" + i.idx + "_dragger_vertical"), t("#mCSB_" + i.idx + "_dragger_horizontal")],
                    r = [a.outerHeight(!1) - n.height(), a.outerWidth(!1) - n.width()],
                    l = [r[0] / (o[0].parent().height() - o[0].height()), r[1] / (o[1].parent().width() - o[1].width())];
                i.scrollRatio = {
                    y: l[0],
                    x: l[1]
                }
            }, C = function(t, e, i) {
                var s = i ? c[0] + "_expanded" : "",
                    n = t.closest(".mCSB_scrollTools");
                "active" === e ? (t.toggleClass(c[0] + " " + s), n.toggleClass(c[1]), t[0]._draggable = t[0]._draggable ? 0 : 1) : t[0]._draggable || ("hide" === e ? (t.removeClass(c[0]), n.removeClass(c[1])) : (t.addClass(c[0]), n.addClass(c[1])))
            }, k = function() {
                var e = t(this),
                    i = e.data(s),
                    n = t("#mCSB_" + i.idx),
                    a = t("#mCSB_" + i.idx + "_container"),
                    o = null == i.overflowed ? a.height() : a.outerHeight(!1),
                    r = null == i.overflowed ? a.width() : a.outerWidth(!1),
                    l = a[0].scrollHeight,
                    h = a[0].scrollWidth;
                return l > o && (o = l), h > r && (r = h), [o > n.height(), r > n.width()]
            }, D = function() {
                var e = t(this),
                    i = e.data(s),
                    n = i.opt,
                    a = t("#mCSB_" + i.idx),
                    o = t("#mCSB_" + i.idx + "_container"),
                    r = [t("#mCSB_" + i.idx + "_dragger_vertical"), t("#mCSB_" + i.idx + "_dragger_horizontal")];
                if (U(e), ("x" !== n.axis && !i.overflowed[0] || "y" === n.axis && i.overflowed[0]) && (r[0].add(o).css("top", 0), V(e, "_resetY")), "y" !== n.axis && !i.overflowed[1] || "x" === n.axis && i.overflowed[1]) {
                    var l = dx = 0;
                    "rtl" === i.langDir && (l = a.width() - o.outerWidth(!1), dx = Math.abs(l / i.scrollRatio.x)), o.css("left", l), r[1].css("left", dx), V(e, "_resetX")
                }
            }, S = function() {
                var e = t(this),
                    i = e.data(s),
                    n = i.opt;
                if (!i.bindEvents) {
                    var a;
                    if (P.call(this), n.contentTouchScroll && O.call(this), E.call(this), n.mouseWheel.enable) ! function i() {
                        a = setTimeout(function() {
                            t.event.special.mousewheel ? (clearTimeout(a), A.call(e[0])) : i()
                        }, 100)
                    }();
                    H.call(this), B.call(this), n.advanced.autoScrollOnFocus && W.call(this), n.scrollButtons.enable && R.call(this), n.keyboard.enable && F.call(this), i.bindEvents = !0
                }
            }, T = function() {
                var e = t(this),
                    i = e.data(s),
                    n = i.opt,
                    a = "mCS_" + i.idx,
                    o = ".mCSB_" + i.idx + "_scrollbar",
                    r = t("#mCSB_" + i.idx + ",#mCSB_" + i.idx + "_container,#mCSB_" + i.idx + "_container_wrapper," + o + " ." + c[12] + ",#mCSB_" + i.idx + "_dragger_vertical,#mCSB_" + i.idx + "_dragger_horizontal," + o + ">a"),
                    l = t("#mCSB_" + i.idx + "_container");
                n.advanced.releaseDraggableSelectors && r.add(t(n.advanced.releaseDraggableSelectors)), n.advanced.extraDraggableSelectors && r.add(t(n.advanced.extraDraggableSelectors)), i.bindEvents && (t(document).add(t(!z() || top.document)).unbind("." + a), r.each(function() {
                    t(this).unbind("." + a)
                }), clearTimeout(e[0]._focusTimeout), $(e[0], "_focusTimeout"), clearTimeout(i.sequential.step), $(i.sequential, "step"), clearTimeout(l[0].onCompleteTimeout), $(l[0], "onCompleteTimeout"), i.bindEvents = !1)
            }, I = function(e) {
                var i = t(this),
                    n = i.data(s),
                    a = n.opt,
                    o = t("#mCSB_" + n.idx + "_container_wrapper"),
                    r = o.length ? o : t("#mCSB_" + n.idx + "_container"),
                    l = [t("#mCSB_" + n.idx + "_scrollbar_vertical"), t("#mCSB_" + n.idx + "_scrollbar_horizontal")],
                    h = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
                "x" !== a.axis && (n.overflowed[0] && !e ? (l[0].add(h[0]).add(l[0].children("a")).css("display", "block"), r.removeClass(c[8] + " " + c[10])) : (a.alwaysShowScrollbar ? (2 !== a.alwaysShowScrollbar && h[0].css("display", "none"), r.removeClass(c[10])) : (l[0].css("display", "none"), r.addClass(c[10])), r.addClass(c[8]))), "y" !== a.axis && (n.overflowed[1] && !e ? (l[1].add(h[1]).add(l[1].children("a")).css("display", "block"), r.removeClass(c[9] + " " + c[11])) : (a.alwaysShowScrollbar ? (2 !== a.alwaysShowScrollbar && h[1].css("display", "none"), r.removeClass(c[11])) : (l[1].css("display", "none"), r.addClass(c[11])), r.addClass(c[9]))), n.overflowed[0] || n.overflowed[1] ? i.removeClass(c[5]) : i.addClass(c[5])
            }, M = function(e) {
                var i = e.type,
                    s = e.target.ownerDocument !== document ? [t(frameElement).offset().top, t(frameElement).offset().left] : null,
                    n = z() && e.target.ownerDocument !== top.document ? [t(e.view.frameElement).offset().top, t(e.view.frameElement).offset().left] : [0, 0];
                switch (i) {
                    case "pointerdown":
                    case "MSPointerDown":
                    case "pointermove":
                    case "MSPointerMove":
                    case "pointerup":
                    case "MSPointerUp":
                        return s ? [e.originalEvent.pageY - s[0] + n[0], e.originalEvent.pageX - s[1] + n[1], !1] : [e.originalEvent.pageY, e.originalEvent.pageX, !1];
                    case "touchstart":
                    case "touchmove":
                    case "touchend":
                        var a = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
                            o = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
                        return e.target.ownerDocument !== document ? [a.screenY, a.screenX, o > 1] : [a.pageY, a.pageX, o > 1];
                    default:
                        return s ? [e.pageY - s[0] + n[0], e.pageX - s[1] + n[1], !1] : [e.pageY, e.pageX, !1]
                }
            }, P = function() {
                function e(t) {
                    var e = f.find("iframe");
                    if (e.length) {
                        var i = t ? "auto" : "none";
                        e.css("pointer-events", i)
                    }
                }

                function i(t, e, i, s) {
                    if (f[0].idleTimer = d.scrollInertia < 233 ? 250 : 0, n.attr("id") === p[1]) var a = "x",
                        o = (n[0].offsetLeft - e + s) * c.scrollRatio.x;
                    else var a = "y",
                        o = (n[0].offsetTop - t + i) * c.scrollRatio.y;
                    V(r, o.toString(), {
                        dir: a,
                        drag: !0
                    })
                }
                var n, a, o, r = t(this),
                    c = r.data(s),
                    d = c.opt,
                    u = "mCS_" + c.idx,
                    p = ["mCSB_" + c.idx + "_dragger_vertical", "mCSB_" + c.idx + "_dragger_horizontal"],
                    f = t("#mCSB_" + c.idx + "_container"),
                    m = t("#" + p[0] + ",#" + p[1]),
                    g = d.advanced.releaseDraggableSelectors ? m.add(t(d.advanced.releaseDraggableSelectors)) : m,
                    v = d.advanced.extraDraggableSelectors ? t(!z() || top.document).add(t(d.advanced.extraDraggableSelectors)) : t(!z() || top.document);
                m.bind("mousedown." + u + " touchstart." + u + " pointerdown." + u + " MSPointerDown." + u, function(i) {
                    if (i.stopImmediatePropagation(), i.preventDefault(), Q(i)) {
                        h = !0, l && (document.onselectstart = function() {
                            return !1
                        }), e(!1), U(r);
                        var s = (n = t(this)).offset(),
                            c = M(i)[0] - s.top,
                            u = M(i)[1] - s.left,
                            p = n.height() + s.top,
                            f = n.width() + s.left;
                        p > c && c > 0 && f > u && u > 0 && (a = c, o = u), C(n, "active", d.autoExpandScrollbar)
                    }
                }).bind("touchmove." + u, function(t) {
                    t.stopImmediatePropagation(), t.preventDefault();
                    var e = n.offset(),
                        s = M(t)[0] - e.top,
                        r = M(t)[1] - e.left;
                    i(a, o, s, r)
                }), t(document).add(v).bind("mousemove." + u + " pointermove." + u + " MSPointerMove." + u, function(t) {
                    if (n) {
                        var e = n.offset(),
                            s = M(t)[0] - e.top,
                            r = M(t)[1] - e.left;
                        if (a === s && o === r) return;
                        i(a, o, s, r)
                    }
                }).add(g).bind("mouseup." + u + " touchend." + u + " pointerup." + u + " MSPointerUp." + u, function(t) {
                    n && (C(n, "active", d.autoExpandScrollbar), n = null), h = !1, l && (document.onselectstart = null), e(!0)
                })
            }, O = function() {
                function i(t) {
                    if (!Z(t) || h || M(t)[2]) e = 0;
                    else {
                        e = 1, x = 0, C = 0, c = 1, k.removeClass("mCS_touch_action");
                        var i = P.offset();
                        d = M(t)[0] - i.top, u = M(t)[1] - i.left, W = [M(t)[0], M(t)[1]]
                    }
                }

                function n(t) {
                    if (Z(t) && !h && !M(t)[2] && (S.documentTouchScroll || t.preventDefault(), t.stopImmediatePropagation(), (!C || x) && c)) {
                        g = X();
                        var e = I.offset(),
                            i = M(t)[0] - e.top,
                            s = M(t)[1] - e.left,
                            n = "mcsLinearOut";
                        if (E.push(i), A.push(s), W[2] = Math.abs(M(t)[0] - W[0]), W[3] = Math.abs(M(t)[1] - W[1]), D.overflowed[0]) var a = O[0].parent().height() - O[0].height(),
                            o = d - i > 0 && i - d > -a * D.scrollRatio.y && (2 * W[3] < W[2] || "yx" === S.axis);
                        if (D.overflowed[1]) var r = O[1].parent().width() - O[1].width(),
                            p = u - s > 0 && s - u > -r * D.scrollRatio.x && (2 * W[2] < W[3] || "yx" === S.axis);
                        o || p ? (F || t.preventDefault(), x = 1) : (C = 1, k.addClass("mCS_touch_action")), F && t.preventDefault(), y = "yx" === S.axis ? [d - i, u - s] : "x" === S.axis ? [null, u - s] : [d - i, null], P[0].idleTimer = 250, D.overflowed[0] && l(y[0], N, n, "y", "all", !0), D.overflowed[1] && l(y[1], N, n, "x", H, !0)
                    }
                }

                function a(t) {
                    if (!Z(t) || h || M(t)[2]) e = 0;
                    else {
                        e = 1, t.stopImmediatePropagation(), U(k), m = X();
                        var i = I.offset();
                        p = M(t)[0] - i.top, f = M(t)[1] - i.left, E = [], A = []
                    }
                }

                function o(t) {
                    if (Z(t) && !h && !M(t)[2]) {
                        c = 0, t.stopImmediatePropagation(), x = 0, C = 0, v = X();
                        var e = I.offset(),
                            i = M(t)[0] - e.top,
                            s = M(t)[1] - e.left;
                        if (!(v - g > 30)) {
                            var n = "mcsEaseOut",
                                a = 2.5 > (b = 1e3 / (v - m)),
                                o = a ? [E[E.length - 2], A[A.length - 2]] : [0, 0];
                            _ = a ? [i - o[0], s - o[1]] : [i - p, s - f];
                            var d = [Math.abs(_[0]), Math.abs(_[1])];
                            b = a ? [Math.abs(_[0] / 4), Math.abs(_[1] / 4)] : [b, b];
                            var u = [Math.abs(P[0].offsetTop) - _[0] * r(d[0] / b[0], b[0]), Math.abs(P[0].offsetLeft) - _[1] * r(d[1] / b[1], b[1])];
                            y = "yx" === S.axis ? [u[0], u[1]] : "x" === S.axis ? [null, u[1]] : [u[0], null], w = [4 * d[0] + S.scrollInertia, 4 * d[1] + S.scrollInertia];
                            var k = parseInt(S.contentTouchScroll) || 0;
                            y[0] = d[0] > k ? y[0] : 0, y[1] = d[1] > k ? y[1] : 0, D.overflowed[0] && l(y[0], w[0], n, "y", H, !1), D.overflowed[1] && l(y[1], w[1], n, "x", H, !1)
                        }
                    }
                }

                function r(t, e) {
                    var i = [1.5 * e, 2 * e, e / 1.5, e / 2];
                    return t > 90 ? e > 4 ? i[0] : i[3] : t > 60 ? e > 3 ? i[3] : i[2] : t > 30 ? e > 8 ? i[1] : e > 6 ? i[0] : e > 4 ? e : i[2] : e > 8 ? e : i[3]
                }

                function l(t, e, i, s, n, a) {
                    t && V(k, t.toString(), {
                        dur: e,
                        scrollEasing: i,
                        dir: s,
                        overwrite: n,
                        drag: a
                    })
                }
                var c, d, u, p, f, m, g, v, _, b, y, w, x, C, k = t(this),
                    D = k.data(s),
                    S = D.opt,
                    T = "mCS_" + D.idx,
                    I = t("#mCSB_" + D.idx),
                    P = t("#mCSB_" + D.idx + "_container"),
                    O = [t("#mCSB_" + D.idx + "_dragger_vertical"), t("#mCSB_" + D.idx + "_dragger_horizontal")],
                    E = [],
                    A = [],
                    N = 0,
                    H = "yx" === S.axis ? "none" : "all",
                    W = [],
                    B = P.find("iframe"),
                    R = ["touchstart." + T + " pointerdown." + T + " MSPointerDown." + T, "touchmove." + T + " pointermove." + T + " MSPointerMove." + T, "touchend." + T + " pointerup." + T + " MSPointerUp." + T],
                    F = void 0 !== document.body.style.touchAction;
                P.bind(R[0], function(t) {
                    i(t)
                }).bind(R[1], function(t) {
                    n(t)
                }), I.bind(R[0], function(t) {
                    a(t)
                }).bind(R[2], function(t) {
                    o(t)
                }), B.length && B.each(function() {
                    t(this).load(function() {
                        z(this) && t(this.contentDocument || this.contentWindow.document).bind(R[0], function(t) {
                            i(t), a(t)
                        }).bind(R[1], function(t) {
                            n(t)
                        }).bind(R[2], function(t) {
                            o(t)
                        })
                    })
                })
            }, E = function() {
                function i(t, e, i) {
                    l.type = i && n ? "stepped" : "stepless", l.scrollAmount = 10, L(a, t, e, "mcsLinearOut", i ? 60 : null)
                }
                var n, a = t(this),
                    o = a.data(s),
                    r = o.opt,
                    l = o.sequential,
                    c = "mCS_" + o.idx,
                    d = t("#mCSB_" + o.idx + "_container"),
                    u = d.parent();
                d.bind("mousedown." + c, function(t) {
                    e || n || (n = 1, h = !0)
                }).add(document).bind("mousemove." + c, function(t) {
                    if (!e && n && (window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type && document.selection.createRange().text)) {
                        var s = d.offset(),
                            a = M(t)[0] - s.top + d[0].offsetTop,
                            h = M(t)[1] - s.left + d[0].offsetLeft;
                        a > 0 && a < u.height() && h > 0 && h < u.width() ? l.step && i("off", null, "stepped") : ("x" !== r.axis && o.overflowed[0] && (0 > a ? i("on", 38) : a > u.height() && i("on", 40)), "y" !== r.axis && o.overflowed[1] && (0 > h ? i("on", 37) : h > u.width() && i("on", 39)))
                    }
                }).bind("mouseup." + c + " dragend." + c, function(t) {
                    e || (n && (n = 0, i("off", null)), h = !1)
                })
            }, A = function() {
                function e(e, s) {
                    if (U(i), !N(i, e.target)) {
                        var o = "auto" !== a.mouseWheel.deltaFactor ? parseInt(a.mouseWheel.deltaFactor) : l && e.deltaFactor < 100 ? 100 : e.deltaFactor || 100,
                            c = a.scrollInertia;
                        if ("x" === a.axis || "x" === a.mouseWheel.axis) var d = "x",
                            u = [Math.round(o * n.scrollRatio.x), parseInt(a.mouseWheel.scrollAmount)],
                            p = "auto" !== a.mouseWheel.scrollAmount ? u[1] : u[0] >= r.width() ? .9 * r.width() : u[0],
                            f = Math.abs(t("#mCSB_" + n.idx + "_container")[0].offsetLeft),
                            m = h[1][0].offsetLeft,
                            g = h[1].parent().width() - h[1].width(),
                            v = e.deltaX || e.deltaY || s;
                        else var d = "y",
                            u = [Math.round(o * n.scrollRatio.y), parseInt(a.mouseWheel.scrollAmount)],
                            p = "auto" !== a.mouseWheel.scrollAmount ? u[1] : u[0] >= r.height() ? .9 * r.height() : u[0],
                            f = Math.abs(t("#mCSB_" + n.idx + "_container")[0].offsetTop),
                            m = h[0][0].offsetTop,
                            g = h[0].parent().height() - h[0].height(),
                            v = e.deltaY || s;
                        "y" === d && !n.overflowed[0] || "x" === d && !n.overflowed[1] || ((a.mouseWheel.invert || e.webkitDirectionInvertedFromDevice) && (v = -v), a.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1), (v > 0 && 0 !== m || 0 > v && m !== g || a.mouseWheel.preventDefault) && (e.stopImmediatePropagation(), e.preventDefault()), e.deltaFactor < 2 && !a.mouseWheel.normalizeDelta && (p = e.deltaFactor, c = 17), V(i, (f - v * p).toString(), {
                            dir: d,
                            dur: c
                        }))
                    }
                }
                if (t(this).data(s)) {
                    var i = t(this),
                        n = i.data(s),
                        a = n.opt,
                        o = "mCS_" + n.idx,
                        r = t("#mCSB_" + n.idx),
                        h = [t("#mCSB_" + n.idx + "_dragger_vertical"), t("#mCSB_" + n.idx + "_dragger_horizontal")],
                        c = t("#mCSB_" + n.idx + "_container").find("iframe");
                    c.length && c.each(function() {
                        t(this).load(function() {
                            z(this) && t(this.contentDocument || this.contentWindow.document).bind("mousewheel." + o, function(t, i) {
                                e(t, i)
                            })
                        })
                    }), r.bind("mousewheel." + o, function(t, i) {
                        e(t, i)
                    })
                }
            }, z = function(t) {
                var e = null;
                if (t) {
                    try {
                        var i = t.contentDocument || t.contentWindow.document;
                        e = i.body.innerHTML
                    } catch (t) {}
                    return null !== e
                }
                try {
                    var i = top.document;
                    e = i.body.innerHTML
                } catch (t) {}
                return null !== e
            }, N = function(e, i) {
                var n = i.nodeName.toLowerCase(),
                    a = e.data(s).opt.mouseWheel.disableOver;
                return t.inArray(n, a) > -1 && !(t.inArray(n, ["select", "textarea"]) > -1 && !t(i).is(":focus"))
            }, H = function() {
                var e, i = t(this),
                    n = i.data(s),
                    a = "mCS_" + n.idx,
                    o = t("#mCSB_" + n.idx + "_container"),
                    r = o.parent(),
                    l = t(".mCSB_" + n.idx + "_scrollbar ." + c[12]);
                l.bind("mousedown." + a + " touchstart." + a + " pointerdown." + a + " MSPointerDown." + a, function(i) {
                    h = !0, t(i.target).hasClass("mCSB_dragger") || (e = 1)
                }).bind("touchend." + a + " pointerup." + a + " MSPointerUp." + a, function(t) {
                    h = !1
                }).bind("click." + a, function(s) {
                    if (e && (e = 0, t(s.target).hasClass(c[12]) || t(s.target).hasClass("mCSB_draggerRail"))) {
                        U(i);
                        var a = t(this),
                            l = a.find(".mCSB_dragger");
                        if (a.parent(".mCSB_scrollTools_horizontal").length > 0) {
                            if (!n.overflowed[1]) return;
                            var h = "x",
                                d = s.pageX > l.offset().left ? -1 : 1,
                                u = Math.abs(o[0].offsetLeft) - d * (.9 * r.width())
                        } else {
                            if (!n.overflowed[0]) return;
                            var h = "y",
                                d = s.pageY > l.offset().top ? -1 : 1,
                                u = Math.abs(o[0].offsetTop) - d * (.9 * r.height())
                        }
                        V(i, u.toString(), {
                            dir: h,
                            scrollEasing: "mcsEaseInOut"
                        })
                    }
                })
            }, W = function() {
                var e = t(this),
                    i = e.data(s),
                    n = i.opt,
                    a = "mCS_" + i.idx,
                    o = t("#mCSB_" + i.idx + "_container"),
                    r = o.parent();
                o.bind("focusin." + a, function(i) {
                    var s = t(document.activeElement),
                        a = o.find(".mCustomScrollBox").length;
                    s.is(n.advanced.autoScrollOnFocus) && (U(e), clearTimeout(e[0]._focusTimeout), e[0]._focusTimer = a ? 17 * a : 0, e[0]._focusTimeout = setTimeout(function() {
                        var t = [tt(s)[0], tt(s)[1]],
                            i = [o[0].offsetTop, o[0].offsetLeft],
                            a = [i[0] + t[0] >= 0 && i[0] + t[0] < r.height() - s.outerHeight(!1), i[1] + t[1] >= 0 && i[0] + t[1] < r.width() - s.outerWidth(!1)],
                            l = "yx" !== n.axis || a[0] || a[1] ? "all" : "none";
                        "x" === n.axis || a[0] || V(e, t[0].toString(), {
                            dir: "y",
                            scrollEasing: "mcsEaseInOut",
                            overwrite: l,
                            dur: 0
                        }), "y" === n.axis || a[1] || V(e, t[1].toString(), {
                            dir: "x",
                            scrollEasing: "mcsEaseInOut",
                            overwrite: l,
                            dur: 0
                        })
                    }, e[0]._focusTimer))
                })
            }, B = function() {
                var e = t(this),
                    i = e.data(s),
                    n = "mCS_" + i.idx,
                    a = t("#mCSB_" + i.idx + "_container").parent();
                a.bind("scroll." + n, function(e) {
                    (0 !== a.scrollTop() || 0 !== a.scrollLeft()) && t(".mCSB_" + i.idx + "_scrollbar").css("visibility", "hidden")
                })
            }, R = function() {
                var e = t(this),
                    i = e.data(s),
                    n = i.opt,
                    a = i.sequential,
                    o = "mCS_" + i.idx,
                    r = ".mCSB_" + i.idx + "_scrollbar",
                    l = t(r + ">a");
                l.bind("mousedown." + o + " touchstart." + o + " pointerdown." + o + " MSPointerDown." + o + " mouseup." + o + " touchend." + o + " pointerup." + o + " MSPointerUp." + o + " mouseout." + o + " pointerout." + o + " MSPointerOut." + o + " click." + o, function(s) {
                    function o(t, i) {
                        a.scrollAmount = n.scrollButtons.scrollAmount, L(e, t, i)
                    }
                    if (s.preventDefault(), Q(s)) {
                        var r = t(this).attr("class");
                        switch (a.type = n.scrollButtons.scrollType, s.type) {
                            case "mousedown":
                            case "touchstart":
                            case "pointerdown":
                            case "MSPointerDown":
                                if ("stepped" === a.type) return;
                                h = !0, i.tweenRunning = !1, o("on", r);
                                break;
                            case "mouseup":
                            case "touchend":
                            case "pointerup":
                            case "MSPointerUp":
                            case "mouseout":
                            case "pointerout":
                            case "MSPointerOut":
                                if ("stepped" === a.type) return;
                                h = !1, a.dir && o("off", r);
                                break;
                            case "click":
                                if ("stepped" !== a.type || i.tweenRunning) return;
                                o("on", r)
                        }
                    }
                })
            }, F = function() {
                function e(e) {
                    function s(t, e) {
                        o.type = a.keyboard.scrollType, o.scrollAmount = a.keyboard.scrollAmount, "stepped" === o.type && n.tweenRunning || L(i, t, e)
                    }
                    switch (e.type) {
                        case "blur":
                            n.tweenRunning && o.dir && s("off", null);
                            break;
                        case "keydown":
                        case "keyup":
                            var r = e.keyCode ? e.keyCode : e.which,
                                l = "on";
                            if ("x" !== a.axis && (38 === r || 40 === r) || "y" !== a.axis && (37 === r || 39 === r)) {
                                if ((38 === r || 40 === r) && !n.overflowed[0] || (37 === r || 39 === r) && !n.overflowed[1]) return;
                                "keyup" === e.type && (l = "off"), t(document.activeElement).is(d) || (e.preventDefault(), e.stopImmediatePropagation(), s(l, r))
                            } else if (33 === r || 34 === r) {
                                if ((n.overflowed[0] || n.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()), "keyup" === e.type) {
                                    U(i);
                                    var u = 34 === r ? -1 : 1;
                                    if ("x" === a.axis || "yx" === a.axis && n.overflowed[1] && !n.overflowed[0]) var p = "x",
                                        f = Math.abs(h[0].offsetLeft) - u * (.9 * c.width());
                                    else var p = "y",
                                        f = Math.abs(h[0].offsetTop) - u * (.9 * c.height());
                                    V(i, f.toString(), {
                                        dir: p,
                                        scrollEasing: "mcsEaseInOut"
                                    })
                                }
                            } else if ((35 === r || 36 === r) && !t(document.activeElement).is(d) && ((n.overflowed[0] || n.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()), "keyup" === e.type)) {
                                if ("x" === a.axis || "yx" === a.axis && n.overflowed[1] && !n.overflowed[0]) var p = "x",
                                    f = 35 === r ? Math.abs(c.width() - h.outerWidth(!1)) : 0;
                                else var p = "y",
                                    f = 35 === r ? Math.abs(c.height() - h.outerHeight(!1)) : 0;
                                V(i, f.toString(), {
                                    dir: p,
                                    scrollEasing: "mcsEaseInOut"
                                })
                            }
                    }
                }
                var i = t(this),
                    n = i.data(s),
                    a = n.opt,
                    o = n.sequential,
                    r = "mCS_" + n.idx,
                    l = t("#mCSB_" + n.idx),
                    h = t("#mCSB_" + n.idx + "_container"),
                    c = h.parent(),
                    d = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                    u = h.find("iframe"),
                    p = ["blur." + r + " keydown." + r + " keyup." + r];
                u.length && u.each(function() {
                    t(this).load(function() {
                        z(this) && t(this.contentDocument || this.contentWindow.document).bind(p[0], function(t) {
                            e(t)
                        })
                    })
                }), l.attr("tabindex", "0").bind(p[0], function(t) {
                    e(t)
                })
            }, L = function(e, i, n, a, o) {
                function r(t) {
                    h.snapAmount && (d.scrollAmount = h.snapAmount instanceof Array ? "x" === d.dir[0] ? h.snapAmount[1] : h.snapAmount[0] : h.snapAmount);
                    var i = "stepped" !== d.type,
                        s = o || (t ? i ? f / 1.5 : m : 1e3 / 60),
                        n = t ? i ? 7.5 : 40 : 2.5,
                        c = [Math.abs(u[0].offsetTop), Math.abs(u[0].offsetLeft)],
                        p = [l.scrollRatio.y > 10 ? 10 : l.scrollRatio.y, l.scrollRatio.x > 10 ? 10 : l.scrollRatio.x],
                        g = "x" === d.dir[0] ? c[1] + d.dir[1] * (p[1] * n) : c[0] + d.dir[1] * (p[0] * n),
                        v = "x" === d.dir[0] ? c[1] + d.dir[1] * parseInt(d.scrollAmount) : c[0] + d.dir[1] * parseInt(d.scrollAmount),
                        _ = "auto" !== d.scrollAmount ? v : g,
                        b = a || (t ? i ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear"),
                        y = !!t;
                    return t && 17 > s && (_ = "x" === d.dir[0] ? c[1] : c[0]), V(e, _.toString(), {
                        dir: d.dir[0],
                        scrollEasing: b,
                        dur: s,
                        onComplete: y
                    }), t ? void(d.dir = !1) : (clearTimeout(d.step), void(d.step = setTimeout(function() {
                        r()
                    }, s)))
                }
                var l = e.data(s),
                    h = l.opt,
                    d = l.sequential,
                    u = t("#mCSB_" + l.idx + "_container"),
                    p = "stepped" === d.type,
                    f = h.scrollInertia < 26 ? 26 : h.scrollInertia,
                    m = h.scrollInertia < 1 ? 17 : h.scrollInertia;
                switch (i) {
                    case "on":
                        if (d.dir = [n === c[16] || n === c[15] || 39 === n || 37 === n ? "x" : "y", n === c[13] || n === c[15] || 38 === n || 37 === n ? -1 : 1], U(e), J(n) && "stepped" === d.type) return;
                        r(p);
                        break;
                    case "off":
                        clearTimeout(d.step), $(d, "step"), U(e), (p || l.tweenRunning && d.dir) && r(!0)
                }
            }, j = function(e) {
                var i = t(this).data(s).opt,
                    n = [];
                return "function" == typeof e && (e = e()), e instanceof Array ? n = e.length > 1 ? [e[0], e[1]] : "x" === i.axis ? [null, e[0]] : [e[0], null] : (n[0] = e.y ? e.y : e.x || "x" === i.axis ? null : e, n[1] = e.x ? e.x : e.y || "y" === i.axis ? null : e), "function" == typeof n[0] && (n[0] = n[0]()), "function" == typeof n[1] && (n[1] = n[1]()), n
            }, Y = function(e, i) {
                if (null != e && void 0 !== e) {
                    var n = t(this),
                        a = n.data(s),
                        o = a.opt,
                        r = t("#mCSB_" + a.idx + "_container"),
                        l = r.parent(),
                        h = void 0 === e ? "undefined" : _typeof(e);
                    i || (i = "x" === o.axis ? "x" : "y");
                    var c = "x" === i ? r.outerWidth(!1) : r.outerHeight(!1),
                        u = "x" === i ? r[0].offsetLeft : r[0].offsetTop,
                        p = "x" === i ? "left" : "top";
                    switch (h) {
                        case "function":
                            return e();
                        case "object":
                            var f = e.jquery ? e : t(e);
                            if (!f.length) return;
                            return "x" === i ? tt(f)[1] : tt(f)[0];
                        case "string":
                        case "number":
                            if (J(e)) return Math.abs(e);
                            if (-1 !== e.indexOf("%")) return Math.abs(c * parseInt(e) / 100);
                            if (-1 !== e.indexOf("-=")) return Math.abs(u - parseInt(e.split("-=")[1]));
                            if (-1 !== e.indexOf("+=")) {
                                var m = u + parseInt(e.split("+=")[1]);
                                return m >= 0 ? 0 : Math.abs(m)
                            }
                            if (-1 !== e.indexOf("px") && J(e.split("px")[0])) return Math.abs(e.split("px")[0]);
                            if ("top" === e || "left" === e) return 0;
                            if ("bottom" === e) return Math.abs(l.height() - r.outerHeight(!1));
                            if ("right" === e) return Math.abs(l.width() - r.outerWidth(!1));
                            if ("first" === e || "last" === e) {
                                var f = r.find(":" + e);
                                return "x" === i ? tt(f)[1] : tt(f)[0]
                            }
                            return t(e).length ? "x" === i ? tt(t(e))[1] : tt(t(e))[0] : (r.css(p, e), void d.update.call(null, n[0]))
                    }
                }
            }, q = function(e) {
                function i(t) {
                    clearTimeout(r[0].autoUpdate), d.update.call(null, n[0], t)
                }
                var n = t(this),
                    a = n.data(s),
                    o = a.opt,
                    r = t("#mCSB_" + a.idx + "_container");
                return e ? (clearTimeout(r[0].autoUpdate), void $(r[0], "autoUpdate")) : void
                function e() {
                    return clearTimeout(r[0].autoUpdate), 0 === n.parents("html").length ? void(n = null) : void(r[0].autoUpdate = setTimeout(function() {
                        return o.advanced.updateOnSelectorChange && (a.poll.change.n = function() {
                            !0 === o.advanced.updateOnSelectorChange && (o.advanced.updateOnSelectorChange = "*");
                            var t = 0,
                                e = r.find(o.advanced.updateOnSelectorChange);
                            return o.advanced.updateOnSelectorChange && e.length > 0 && e.each(function() {
                                t += this.offsetHeight + this.offsetWidth
                            }), t
                        }(), a.poll.change.n !== a.poll.change.o) ? (a.poll.change.o = a.poll.change.n, void i(3)) : o.advanced.updateOnContentResize && (a.poll.size.n = n[0].scrollHeight + n[0].scrollWidth + r[0].offsetHeight + n[0].offsetHeight + n[0].offsetWidth, a.poll.size.n !== a.poll.size.o) ? (a.poll.size.o = a.poll.size.n, void i(1)) : !o.advanced.updateOnImageLoad || "auto" === o.advanced.updateOnImageLoad && "y" === o.axis || (a.poll.img.n = r.find("img").length, a.poll.img.n === a.poll.img.o) ? void((o.advanced.updateOnSelectorChange || o.advanced.updateOnContentResize || o.advanced.updateOnImageLoad) && e()) : (a.poll.img.o = a.poll.img.n, void r.find("img").each(function() {
                            ! function(e) {
                                if (t(e).hasClass(c[2])) i();
                                else {
                                    var s = new Image;
                                    s.onload = function(t, e) {
                                        return function() {
                                            return e.apply(t, arguments)
                                        }
                                    }(s, function() {
                                        this.onload = null, t(e).addClass(c[2]), i(2)
                                    }), s.src = e.src
                                }
                            }(this)
                        }))
                    }, o.advanced.autoUpdateTimeout))
                }()
            }, U = function(e) {
                var i = e.data(s),
                    n = t("#mCSB_" + i.idx + "_container,#mCSB_" + i.idx + "_container_wrapper,#mCSB_" + i.idx + "_dragger_vertical,#mCSB_" + i.idx + "_dragger_horizontal");
                n.each(function() {
                    G.call(this)
                })
            }, V = function(e, i, n) {
                function a(t) {
                    return c && d.callbacks[t] && "function" == typeof d.callbacks[t]
                }

                function o() {
                    var t = [m[0].offsetTop, m[0].offsetLeft],
                        i = [y[0].offsetTop, y[0].offsetLeft],
                        s = [m.outerHeight(!1), m.outerWidth(!1)],
                        a = [f.height(), f.width()];
                    e[0].mcs = {
                        content: m,
                        top: t[0],
                        left: t[1],
                        draggerTop: i[0],
                        draggerLeft: i[1],
                        topPct: Math.round(100 * Math.abs(t[0]) / (Math.abs(s[0]) - a[0])),
                        leftPct: Math.round(100 * Math.abs(t[1]) / (Math.abs(s[1]) - a[1])),
                        direction: n.dir
                    }
                }
                var r, l, h, c = e.data(s),
                    d = c.opt,
                    u = {
                        trigger: "internal",
                        dir: "y",
                        scrollEasing: "mcsEaseOut",
                        drag: !1,
                        dur: d.scrollInertia,
                        overwrite: "all",
                        callbacks: !0,
                        onStart: !0,
                        onUpdate: !0,
                        onComplete: !0
                    },
                    n = t.extend(u, n),
                    p = [n.dur, n.drag ? 0 : n.dur],
                    f = t("#mCSB_" + c.idx),
                    m = t("#mCSB_" + c.idx + "_container"),
                    g = m.parent(),
                    v = d.callbacks.onTotalScrollOffset ? j.call(e, d.callbacks.onTotalScrollOffset) : [0, 0],
                    _ = d.callbacks.onTotalScrollBackOffset ? j.call(e, d.callbacks.onTotalScrollBackOffset) : [0, 0];
                if (c.trigger = n.trigger, (0 !== g.scrollTop() || 0 !== g.scrollLeft()) && (t(".mCSB_" + c.idx + "_scrollbar").css("visibility", "visible"), g.scrollTop(0).scrollLeft(0)), "_resetY" !== i || c.contentReset.y || (a("onOverflowYNone") && d.callbacks.onOverflowYNone.call(e[0]), c.contentReset.y = 1), "_resetX" !== i || c.contentReset.x || (a("onOverflowXNone") && d.callbacks.onOverflowXNone.call(e[0]), c.contentReset.x = 1), "_resetY" !== i && "_resetX" !== i) {
                    if (!c.contentReset.y && e[0].mcs || !c.overflowed[0] || (a("onOverflowY") && d.callbacks.onOverflowY.call(e[0]), c.contentReset.x = null), !c.contentReset.x && e[0].mcs || !c.overflowed[1] || (a("onOverflowX") && d.callbacks.onOverflowX.call(e[0]), c.contentReset.x = null), d.snapAmount) {
                        var b = d.snapAmount instanceof Array ? "x" === n.dir ? d.snapAmount[1] : d.snapAmount[0] : d.snapAmount;
                        r = i, l = b, h = d.snapOffset, i = Math.round(r / l) * l - h
                    }
                    switch (n.dir) {
                        case "x":
                            var y = t("#mCSB_" + c.idx + "_dragger_horizontal"),
                                w = "left",
                                x = m[0].offsetLeft,
                                k = [f.width() - m.outerWidth(!1), y.parent().width() - y.width()],
                                D = [i, 0 === i ? 0 : i / c.scrollRatio.x],
                                S = v[1],
                                T = _[1],
                                I = S > 0 ? S / c.scrollRatio.x : 0,
                                M = T > 0 ? T / c.scrollRatio.x : 0;
                            break;
                        case "y":
                            var y = t("#mCSB_" + c.idx + "_dragger_vertical"),
                                w = "top",
                                x = m[0].offsetTop,
                                k = [f.height() - m.outerHeight(!1), y.parent().height() - y.height()],
                                D = [i, 0 === i ? 0 : i / c.scrollRatio.y],
                                S = v[0],
                                T = _[0],
                                I = S > 0 ? S / c.scrollRatio.y : 0,
                                M = T > 0 ? T / c.scrollRatio.y : 0
                    }
                    D[1] < 0 || 0 === D[0] && 0 === D[1] ? D = [0, 0] : D[1] >= k[1] ? D = [k[0], k[1]] : D[0] = -D[0], e[0].mcs || (o(), a("onInit") && d.callbacks.onInit.call(e[0])), clearTimeout(m[0].onCompleteTimeout), K(y[0], w, Math.round(D[1]), p[1], n.scrollEasing), (c.tweenRunning || !(0 === x && D[0] >= 0 || x === k[0] && D[0] <= k[0])) && K(m[0], w, Math.round(D[0]), p[0], n.scrollEasing, n.overwrite, {
                        onStart: function() {
                            n.callbacks && n.onStart && !c.tweenRunning && (a("onScrollStart") && (o(), d.callbacks.onScrollStart.call(e[0])), c.tweenRunning = !0, C(y), c.cbOffsets = [d.callbacks.alwaysTriggerOffsets || x >= k[0] + S, d.callbacks.alwaysTriggerOffsets || -T >= x])
                        },
                        onUpdate: function() {
                            n.callbacks && n.onUpdate && a("whileScrolling") && (o(), d.callbacks.whileScrolling.call(e[0]))
                        },
                        onComplete: function() {
                            if (n.callbacks && n.onComplete) {
                                "yx" === d.axis && clearTimeout(m[0].onCompleteTimeout);
                                var t = m[0].idleTimer || 0;
                                m[0].onCompleteTimeout = setTimeout(function() {
                                    a("onScroll") && (o(), d.callbacks.onScroll.call(e[0])), a("onTotalScroll") && D[1] >= k[1] - I && c.cbOffsets[0] && (o(), d.callbacks.onTotalScroll.call(e[0])), a("onTotalScrollBack") && D[1] <= M && c.cbOffsets[1] && (o(), d.callbacks.onTotalScrollBack.call(e[0])), c.tweenRunning = !1, m[0].idleTimer = 0, C(y, "hide")
                                }, t)
                            }
                        }
                    })
                }
            }, K = function(t, e, i, s, n, a, o) {
                function r() {
                    _.stop || (m || d.call(), m = X() - f, l(), m >= _.time && (_.time = m > _.time ? m + h - (m - _.time) : m + h - 1, _.time < m + 1 && (_.time = m + 1)), _.time < s ? _.id = c(r) : p.call())
                }

                function l() {
                    s > 0 ? (_.currVal = function(t, e, i, s, n) {
                        switch (n) {
                            case "linear":
                            case "mcsLinear":
                                return i * t / s + e;
                            case "mcsLinearOut":
                                return t /= s, t--, i * Math.sqrt(1 - t * t) + e;
                            case "easeInOutSmooth":
                                return 1 > (t /= s / 2) ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e;
                            case "easeInOutStrong":
                                return 1 > (t /= s / 2) ? i / 2 * Math.pow(2, 10 * (t - 1)) + e : (t--, i / 2 * (2 - Math.pow(2, -10 * t)) + e);
                            case "easeInOut":
                            case "mcsEaseInOut":
                                return 1 > (t /= s / 2) ? i / 2 * t * t * t + e : i / 2 * ((t -= 2) * t * t + 2) + e;
                            case "easeOutSmooth":
                                return t /= s, -i * (--t * t * t * t - 1) + e;
                            case "easeOutStrong":
                                return i * (1 - Math.pow(2, -10 * t / s)) + e;
                            case "easeOut":
                            case "mcsEaseOut":
                            default:
                                var a = (t /= s) * t,
                                    o = a * t;
                                return e + i * (.499999999999997 * o * a + -2.5 * a * a + 5.5 * o + -6.5 * a + 4 * t)
                        }
                    }(_.time, g, b, s, n), v[e] = Math.round(_.currVal) + "px") : v[e] = i + "px", u.call()
                }
                t._mTween || (t._mTween = {
                    top: {},
                    left: {}
                });
                var h, c, o = o || {},
                    d = o.onStart || function() {},
                    u = o.onUpdate || function() {},
                    p = o.onComplete || function() {},
                    f = X(),
                    m = 0,
                    g = t.offsetTop,
                    v = t.style,
                    _ = t._mTween[e];
                "left" === e && (g = t.offsetLeft);
                var b = i - g;
                _.stop = 0, "none" !== a && null != _.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(_.id) : clearTimeout(_.id), _.id = null), h = 1e3 / 60, _.time = m + h, c = window.requestAnimationFrame ? window.requestAnimationFrame : function(t) {
                    return l(), setTimeout(t, .01)
                }, _.id = c(r)
            }, X = function() {
                return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
            }, G = function() {
                var t = this;
                t._mTween || (t._mTween = {
                    top: {},
                    left: {}
                });
                for (var e = ["top", "left"], i = 0; i < e.length; i++) {
                    var s = e[i];
                    t._mTween[s].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(t._mTween[s].id) : clearTimeout(t._mTween[s].id), t._mTween[s].id = null, t._mTween[s].stop = 1)
                }
            }, $ = function(t, e) {
                try {
                    delete t[e]
                } catch (i) {
                    t[e] = null
                }
            }, Q = function(t) {
                return !(t.which && 1 !== t.which)
            }, Z = function(t) {
                var e = t.originalEvent.pointerType;
                return !(e && "touch" !== e && 2 !== e)
            }, J = function(t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            }, tt = function(t) {
                var e = t.parents(".mCSB_container");
                return [t.offset().top - e.offset().top, t.offset().left - e.offset().left]
            }, et = function() {
                var t = function() {
                    var t = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var e = 0; e < t.length; e++)
                        if (t[e] + "Hidden" in document) return t[e] + "Hidden";
                    return null
                }();
                return !!t && document[t]
            }, t.fn[i] = function(e) {
                return d[e] ? d[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" !== (void 0 === e ? "undefined" : _typeof(e)) && e ? void t.error("Method " + e + " does not exist") : d.init.apply(this, arguments)
            }, t[i] = function(e) {
                return d[e] ? d[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" !== (void 0 === e ? "undefined" : _typeof(e)) && e ? void t.error("Method " + e + " does not exist") : d.init.apply(this, arguments)
            }, t[i].defaults = a, window[i] = !0, t(window).load(function() {
                t(n)[i](), t.extend(t.expr[":"], {
                    mcsInView: t.expr[":"].mcsInView || function(e) {
                        var i, s, n = t(e),
                            a = n.parents(".mCSB_container");
                        if (a.length) return i = a.parent(), s = [a[0].offsetTop, a[0].offsetLeft], s[0] + tt(n)[0] >= 0 && s[0] + tt(n)[0] < i.height() - n.outerHeight(!1) && s[1] + tt(n)[1] >= 0 && s[1] + tt(n)[1] < i.width() - n.outerWidth(!1)
                    },
                    mcsOverflow: t.expr[":"].mcsOverflow || function(e) {
                        var i = t(e).data(s);
                        if (i) return i.overflowed[0] || i.overflowed[1]
                    }
                })
            })
        }, "undefined" != typeof module && module.exports ? module.exports = v : v(jQuery, window, document), t(document).ready(function() {
            t("input, textarea").placeholder()
        }), function(t, e) {
            function i(e, i) {
                var n = e.nodeName.toLowerCase();
                if ("area" === n) {
                    var a, o = e.parentNode,
                        r = o.name;
                    return !(!e.href || !r || "map" !== o.nodeName.toLowerCase()) && (!!(a = t("img[usemap=#" + r + "]")[0]) && s(a))
                }
                return (/input|select|textarea|button|object/.test(n) ? !e.disabled : "a" == n && e.href || i) && s(e)
            }

            function s(e) {
                return !t(e).parents().andSelf().filter(function() {
                    return "hidden" === t.curCSS(this, "visibility") || t.expr.filters.hidden(this)
                }).length
            }
            t.ui = t.ui || {}, t.ui.version || (t.extend(t.ui, {
                version: "1.8.13",
                keyCode: {
                    ALT: 18,
                    BACKSPACE: 8,
                    CAPS_LOCK: 20,
                    COMMA: 188,
                    COMMAND: 91,
                    COMMAND_LEFT: 91,
                    COMMAND_RIGHT: 93,
                    CONTROL: 17,
                    DELETE: 46,
                    DOWN: 40,
                    END: 35,
                    ENTER: 13,
                    ESCAPE: 27,
                    HOME: 36,
                    INSERT: 45,
                    LEFT: 37,
                    MENU: 93,
                    NUMPAD_ADD: 107,
                    NUMPAD_DECIMAL: 110,
                    NUMPAD_DIVIDE: 111,
                    NUMPAD_ENTER: 108,
                    NUMPAD_MULTIPLY: 106,
                    NUMPAD_SUBTRACT: 109,
                    PAGE_DOWN: 34,
                    PAGE_UP: 33,
                    PERIOD: 190,
                    RIGHT: 39,
                    SHIFT: 16,
                    SPACE: 32,
                    TAB: 9,
                    UP: 38,
                    WINDOWS: 91
                }
            }), t.fn.extend({
                _focus: t.fn.focus,
                focus: function(e, i) {
                    return "number" == typeof e ? this.each(function() {
                        var s = this;
                        setTimeout(function() {
                            t(s).focus(), i && i.call(s)
                        }, e)
                    }) : this._focus.apply(this, arguments)
                },
                scrollParent: function() {
                    var e;
                    return e = t.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                        return /(relative|absolute|fixed)/.test(t.curCSS(this, "position", 1)) && /(auto|scroll)/.test(t.curCSS(this, "overflow", 1) + t.curCSS(this, "overflow-y", 1) + t.curCSS(this, "overflow-x", 1))
                    }).eq(0) : this.parents().filter(function() {
                        return /(auto|scroll)/.test(t.curCSS(this, "overflow", 1) + t.curCSS(this, "overflow-y", 1) + t.curCSS(this, "overflow-x", 1))
                    }).eq(0), /fixed/.test(this.css("position")) || !e.length ? t(document) : e
                },
                zIndex: function(e) {
                    if (void 0 !== e) return this.css("zIndex", e);
                    if (this.length)
                        for (var i, s, n = t(this[0]); n.length && n[0] !== document;) {
                            if (("absolute" === (i = n.css("position")) || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                            n = n.parent()
                        }
                    return 0
                },
                disableSelection: function() {
                    return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(t) {
                        t.preventDefault()
                    })
                },
                enableSelection: function() {
                    return this.unbind(".ui-disableSelection")
                }
            }), t.each(["Width", "Height"], function(e, i) {
                function s(e, i, s, a) {
                    return t.each(n, function() {
                        i -= parseFloat(t.curCSS(e, "padding" + this, !0)) || 0, s && (i -= parseFloat(t.curCSS(e, "border" + this + "Width", !0)) || 0), a && (i -= parseFloat(t.curCSS(e, "margin" + this, !0)) || 0)
                    }), i
                }
                var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                    a = i.toLowerCase(),
                    o = {
                        innerWidth: t.fn.innerWidth,
                        innerHeight: t.fn.innerHeight,
                        outerWidth: t.fn.outerWidth,
                        outerHeight: t.fn.outerHeight
                    };
                t.fn["inner" + i] = function(e) {
                    return void 0 === e ? o["inner" + i].call(this) : this.each(function() {
                        t(this).css(a, s(this, e) + "px")
                    })
                }, t.fn["outer" + i] = function(e, n) {
                    return "number" != typeof e ? o["outer" + i].call(this, e) : this.each(function() {
                        t(this).css(a, s(this, e, !0, n) + "px")
                    })
                }
            }), t.extend(t.expr[":"], {
                data: function(e, i, s) {
                    return !!t.data(e, s[3])
                },
                focusable: function(e) {
                    return i(e, !isNaN(t.attr(e, "tabindex")))
                },
                tabbable: function(e) {
                    var s = t.attr(e, "tabindex"),
                        n = isNaN(s);
                    return (n || s >= 0) && i(e, !n)
                }
            }), t(function() {
                var e = document.body,
                    i = e.appendChild(i = document.createElement("div"));
                t.extend(i.style, {
                    minHeight: "100px",
                    height: "auto",
                    padding: 0,
                    borderWidth: 0
                }), t.support.minHeight = 100 === i.offsetHeight, t.support.selectstart = "onselectstart" in i, e.removeChild(i).style.display = "none"
            }), t.extend(t.ui, {
                plugin: {
                    add: function(e, i, s) {
                        var n = t.ui[e].prototype;
                        for (var a in s) n.plugins[a] = n.plugins[a] || [], n.plugins[a].push([i, s[a]])
                    },
                    call: function(t, e, i) {
                        var s = t.plugins[e];
                        if (s && t.element[0].parentNode)
                            for (var n = 0; n < s.length; n++) t.options[s[n][0]] && s[n][1].apply(t.element, i)
                    }
                },
                contains: function(t, e) {
                    return document.compareDocumentPosition ? 16 & t.compareDocumentPosition(e) : t !== e && t.contains(e)
                },
                hasScroll: function(e, i) {
                    if ("hidden" === t(e).css("overflow")) return !1;
                    var s = i && "left" === i ? "scrollLeft" : "scrollTop",
                        n = !1;
                    return e[s] > 0 || (e[s] = 1, n = e[s] > 0, e[s] = 0, n)
                },
                isOverAxis: function(t, e, i) {
                    return t > e && e + i > t
                },
                isOver: function(e, i, s, n, a, o) {
                    return t.ui.isOverAxis(e, s, a) && t.ui.isOverAxis(i, n, o)
                }
            }))
        }(jQuery), function(t, e) {
            if (t.cleanData) {
                var i = t.cleanData;
                t.cleanData = function(e) {
                    for (var s, n = 0; null != (s = e[n]); n++) t(s).triggerHandler("remove");
                    i(e)
                }
            } else {
                var s = t.fn.remove;
                t.fn.remove = function(e, i) {
                    return this.each(function() {
                        return i || (!e || t.filter(e, [this]).length) && t("*", this).add([this]).each(function() {
                            t(this).triggerHandler("remove")
                        }), s.call(t(this), e, i)
                    })
                }
            }
            t.widget = function(e, i, s) {
                var n, a = e.split(".")[0];
                n = a + "-" + (e = e.split(".")[1]), s || (s = i, i = t.Widget), t.expr[":"][n] = function(i) {
                    return !!t.data(i, e)
                }, t[a] = t[a] || {}, t[a][e] = function(t, e) {
                    arguments.length && this._createWidget(t, e)
                };
                var o = new i;
                o.options = t.extend(!0, {}, o.options), t[a][e].prototype = t.extend(!0, o, {
                    namespace: a,
                    widgetName: e,
                    widgetEventPrefix: t[a][e].prototype.widgetEventPrefix || e,
                    widgetBaseClass: n
                }, s), t.widget.bridge(e, t[a][e])
            }, t.widget.bridge = function(e, i) {
                t.fn[e] = function(s) {
                    var n = "string" == typeof s,
                        a = Array.prototype.slice.call(arguments, 1),
                        o = this;
                    return s = !n && a.length ? t.extend.apply(null, [!0, s].concat(a)) : s, n && "_" === s.charAt(0) ? o : (n ? this.each(function() {
                        var i = t.data(this, e),
                            n = i && t.isFunction(i[s]) ? i[s].apply(i, a) : i;
                        return n !== i && void 0 !== n ? (o = n, !1) : void 0
                    }) : this.each(function() {
                        var n = t.data(this, e);
                        n ? n.option(s || {})._init() : t.data(this, e, new i(s, this))
                    }), o)
                }
            }, t.Widget = function(t, e) {
                arguments.length && this._createWidget(t, e)
            }, t.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                options: {
                    disabled: !1
                },
                _createWidget: function(e, i) {
                    t.data(i, this.widgetName, this), this.element = t(i), this.options = t.extend(!0, {}, this.options, this._getCreateOptions(), e);
                    var s = this;
                    this.element.bind("remove." + this.widgetName, function() {
                        s.destroy()
                    }), this._create(), this._trigger("create"), this._init()
                },
                _getCreateOptions: function() {
                    return t.metadata && t.metadata.get(this.element[0])[this.widgetName]
                },
                _create: function() {},
                _init: function() {},
                destroy: function() {
                    this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
                },
                widget: function() {
                    return this.element
                },
                option: function(e, i) {
                    var s = e;
                    if (0 === arguments.length) return t.extend({}, this.options);
                    if ("string" == typeof e) {
                        if (void 0 === i) return this.options[e];
                        (s = {})[e] = i
                    }
                    return this._setOptions(s), this
                },
                _setOptions: function(e) {
                    var i = this;
                    return t.each(e, function(t, e) {
                        i._setOption(t, e)
                    }), this
                },
                _setOption: function(t, e) {
                    return this.options[t] = e, "disabled" === t && this.widget()[e ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", e), this
                },
                enable: function() {
                    return this._setOption("disabled", !1)
                },
                disable: function() {
                    return this._setOption("disabled", !0)
                },
                _trigger: function(e, i, s) {
                    var n = this.options[e];
                    if ((i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), s = s || {}, i.originalEvent)
                        for (var a, o = t.event.props.length; o;) a = t.event.props[--o], i[a] = i.originalEvent[a];
                    return this.element.trigger(i, s), !(t.isFunction(n) && !1 === n.call(this.element[0], i, s) || i.isDefaultPrevented())
                }
            }
        }(jQuery), m = jQuery, g = !1, m(document).mousedown(function(t) {
            g = !1
        }), m.widget("ui.mouse", {
            options: {
                cancel: ":input,option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var t = this;
                this.element.bind("mousedown." + this.widgetName, function(e) {
                    return t._mouseDown(e)
                }).bind("click." + this.widgetName, function(e) {
                    return !0 === m.data(e.target, t.widgetName + ".preventClickEvent") ? (m.removeData(e.target, t.widgetName + ".preventClickEvent"), e.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function() {
                this.element.unbind("." + this.widgetName)
            },
            _mouseDown: function(t) {
                if (!g) {
                    this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                    var e = this,
                        i = 1 == t.which,
                        s = "string" == typeof this.options.cancel && m(t.target).parents().add(t.target).filter(this.options.cancel).length;
                    return !(i && !s && this._mouseCapture(t) && (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        e.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(t), !this._mouseStarted) ? (t.preventDefault(), 0) : (!0 === m.data(t.target, this.widgetName + ".preventClickEvent") && m.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                        return e._mouseMove(t)
                    }, this._mouseUpDelegate = function(t) {
                        return e._mouseUp(t)
                    }, m(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), g = !0, 0)))
                }
            },
            _mouseMove: function(t) {
                return !m.browser.msie || document.documentMode >= 9 || t.button ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t), this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
            },
            _mouseUp: function(t) {
                return m(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target == this._mouseDownEvent.target && m.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
            },
            _mouseDistanceMet: function(t) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function(t) {
                return this.mouseDelayMet
            },
            _mouseStart: function(t) {},
            _mouseDrag: function(t) {},
            _mouseStop: function(t) {},
            _mouseCapture: function(t) {
                return !0
            }
        }), (f = jQuery).widget("ui.slider", f.ui.mouse, {
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null
            },
            _create: function() {
                var t = this,
                    e = this.options,
                    i = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                    s = e.values && e.values.length || 1,
                    n = [];
                this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all" + (e.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = f([]), e.range && (!0 === e.range && (e.values || (e.values = [this._valueMin(), this._valueMin()]), e.values.length && 2 !== e.values.length && (e.values = [e.values[0], e.values[0]])), this.range = f("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : "")));
                for (var a = i.length; s > a; a += 1) n.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>");
                this.handles = i.add(f(n.join("")).appendTo(t.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function(t) {
                    t.preventDefault()
                }).hover(function() {
                    e.disabled || f(this).addClass("ui-state-hover")
                }, function() {
                    f(this).removeClass("ui-state-hover")
                }).focus(function() {
                    e.disabled ? f(this).blur() : (f(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), f(this).addClass("ui-state-focus"))
                }).blur(function() {
                    f(this).removeClass("ui-state-focus")
                }), this.handles.each(function(t) {
                    f(this).data("index.ui-slider-handle", t)
                }), this.handles.keydown(function(e) {
                    var i, s, n, a = !0,
                        o = f(this).data("index.ui-slider-handle");
                    if (!t.options.disabled) {
                        switch (e.keyCode) {
                            case f.ui.keyCode.HOME:
                            case f.ui.keyCode.END:
                            case f.ui.keyCode.PAGE_UP:
                            case f.ui.keyCode.PAGE_DOWN:
                            case f.ui.keyCode.UP:
                            case f.ui.keyCode.RIGHT:
                            case f.ui.keyCode.DOWN:
                            case f.ui.keyCode.LEFT:
                                if (a = !1, !t._keySliding && (t._keySliding = !0, f(this).addClass("ui-state-active"), !1 === t._start(e, o))) return
                        }
                        switch (n = t.options.step, i = s = t.options.values && t.options.values.length ? t.values(o) : t.value(), e.keyCode) {
                            case f.ui.keyCode.HOME:
                                s = t._valueMin();
                                break;
                            case f.ui.keyCode.END:
                                s = t._valueMax();
                                break;
                            case f.ui.keyCode.PAGE_UP:
                                s = t._trimAlignValue(i + (t._valueMax() - t._valueMin()) / 5);
                                break;
                            case f.ui.keyCode.PAGE_DOWN:
                                s = t._trimAlignValue(i - (t._valueMax() - t._valueMin()) / 5);
                                break;
                            case f.ui.keyCode.UP:
                            case f.ui.keyCode.RIGHT:
                                if (i === t._valueMax()) return;
                                s = t._trimAlignValue(i + n);
                                break;
                            case f.ui.keyCode.DOWN:
                            case f.ui.keyCode.LEFT:
                                if (i === t._valueMin()) return;
                                s = t._trimAlignValue(i - n)
                        }
                        return t._slide(e, o, s), a
                    }
                }).keyup(function(e) {
                    var i = f(this).data("index.ui-slider-handle");
                    t._keySliding && (t._keySliding = !1, t._stop(e, i), t._change(e, i), f(this).removeClass("ui-state-active"))
                }), this._refreshValue(), this._animateOff = !1
            },
            destroy: function() {
                return this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"), this._mouseDestroy(), this
            },
            _mouseCapture: function(t) {
                var e, i, s, n, a, o, r, l, h = this.options;
                return !h.disabled && (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), e = {
                    x: t.pageX,
                    y: t.pageY
                }, i = this._normValueFromMouse(e), s = this._valueMax() - this._valueMin() + 1, a = this, this.handles.each(function(t) {
                    var e = Math.abs(i - a.values(t));
                    s > e && (s = e, n = f(this), o = t)
                }), !0 === h.range && this.values(1) === h.min && (o += 1, n = f(this.handles[o])), !1 !== this._start(t, o) && (this._mouseSliding = !0, a._handleIndex = o, n.addClass("ui-state-active").focus(), r = n.offset(), l = !f(t.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = l ? {
                    left: 0,
                    top: 0
                } : {
                    left: t.pageX - r.left - n.width() / 2,
                    top: t.pageY - r.top - n.height() / 2 - (parseInt(n.css("borderTopWidth"), 10) || 0) - (parseInt(n.css("borderBottomWidth"), 10) || 0) + (parseInt(n.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, i), this._animateOff = !0, !0))
            },
            _mouseStart: function(t) {
                return !0
            },
            _mouseDrag: function(t) {
                var e = {
                        x: t.pageX,
                        y: t.pageY
                    },
                    i = this._normValueFromMouse(e);
                return this._slide(t, this._handleIndex, i), !1
            },
            _mouseStop: function(t) {
                return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
            },
            _detectOrientation: function() {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function(t) {
                var e, i, s, n, a;
                return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), (s = i / e) > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a)
            },
            _start: function(t, e) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
            },
            _slide: function(t, e, i) {
                var s, n, a;
                this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1), 2 === this.options.values.length && !0 === this.options.range && (0 === e && i > s || 1 === e && s > i) && (i = s), i !== this.values(e) && ((n = this.values())[e] = i, a = this._trigger("slide", t, {
                    handle: this.handles[e],
                    value: i,
                    values: n
                }), s = this.values(e ? 0 : 1), !1 !== a && this.values(e, i, !0))) : i !== this.value() && !1 !== (a = this._trigger("slide", t, {
                    handle: this.handles[e],
                    value: i
                })) && this.value(i)
            },
            _stop: function(t, e) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
            },
            _change: function(t, e) {
                if (!this._keySliding && !this._mouseSliding) {
                    var i = {
                        handle: this.handles[e],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("change", t, i)
                }
            },
            value: function(t) {
                return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
            },
            values: function(t, e) {
                var i, s, n;
                if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(e), this._refreshValue(), void this._change(null, t);
                if (!arguments.length) return this._values();
                if (!f.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
                for (i = this.options.values, s = arguments[0], n = 0; n < i.length; n += 1) i[n] = this._trimAlignValue(s[n]), this._change(null, n);
                this._refreshValue()
            },
            _setOption: function(t, e) {
                var i, s = 0;
                switch (f.isArray(this.options.values) && (s = this.options.values.length), f.Widget.prototype._setOption.apply(this, arguments), t) {
                    case "disabled":
                        e ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.attr("disabled", "disabled"), this.element.addClass("ui-disabled")) : (this.handles.removeAttr("disabled"), this.element.removeClass("ui-disabled"));
                        break;
                    case "orientation":
                        this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                        break;
                    case "value":
                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                        break;
                    case "values":
                        for (this._animateOff = !0, this._refreshValue(), i = 0; s > i; i += 1) this._change(null, i);
                        this._animateOff = !1
                }
            },
            _value: function() {
                var t = this.options.value;
                return this._trimAlignValue(t)
            },
            _values: function(t) {
                var e, i, s;
                if (arguments.length) return e = this.options.values[t], this._trimAlignValue(e);
                for (i = this.options.values.slice(), s = 0; s < i.length; s += 1) i[s] = this._trimAlignValue(i[s]);
                return i
            },
            _trimAlignValue: function(t) {
                if (t <= this._valueMin()) return this._valueMin();
                if (t >= this._valueMax()) return this._valueMax();
                var e = this.options.step > 0 ? this.options.step : 1,
                    i = (t - this._valueMin()) % e;
                return alignValue = t - i, 2 * Math.abs(i) >= e && (alignValue += i > 0 ? e : -e), parseFloat(alignValue.toFixed(5))
            },
            _valueMin: function() {
                return this.options.min
            },
            _valueMax: function() {
                return this.options.max
            },
            _refreshValue: function() {
                var t, e, i, s, n, a = this.options.range,
                    o = this.options,
                    r = this,
                    l = !this._animateOff && o.animate,
                    h = {};
                this.options.values && this.options.values.length ? this.handles.each(function(i, s) {
                    t = (r.values(i) - r._valueMin()) / (r._valueMax() - r._valueMin()) * 100, h["horizontal" === r.orientation ? "left" : "bottom"] = t + "%", f(this).stop(1, 1)[l ? "animate" : "css"](h, o.animate), !0 === r.options.range && ("horizontal" === r.orientation ? (0 === i && r.range.stop(1, 1)[l ? "animate" : "css"]({
                        left: t + "%"
                    }, o.animate), 1 === i && r.range[l ? "animate" : "css"]({
                        width: t - e + "%"
                    }, {
                        queue: !1,
                        duration: o.animate
                    })) : (0 === i && r.range.stop(1, 1)[l ? "animate" : "css"]({
                        bottom: t + "%"
                    }, o.animate), 1 === i && r.range[l ? "animate" : "css"]({
                        height: t - e + "%"
                    }, {
                        queue: !1,
                        duration: o.animate
                    }))), e = t
                }) : (i = this.value(), s = this._valueMin(), n = this._valueMax(), t = n !== s ? (i - s) / (n - s) * 100 : 0, h["horizontal" === r.orientation ? "left" : "bottom"] = t + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](h, o.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                    width: t + "%"
                }, o.animate), "max" === a && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({
                    width: 100 - t + "%"
                }, {
                    queue: !1,
                    duration: o.animate
                }), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                    height: t + "%"
                }, o.animate), "max" === a && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({
                    height: 100 - t + "%"
                }, {
                    queue: !1,
                    duration: o.animate
                }))
            }
        }), f.extend(f.ui.slider, {
            version: "1.8.13"
        }), t(function() {
            function e() {
                t.ajax({
                    url: "/ajax/shops.php",
                    method: "GET",
                    dataType: "json",
                    success: function(e) {
                        function a(i, s) {
                            if (e.cities.length > 0) {
                                for (var n = "", a = ymaps.templateLayoutFactory.createClass('<div class="b-mapballoon"><div class="b-mapballoon__name">{{properties.name}}</div><div class="b-mapballoon__info">{{properties.address}}<br />{{properties.telephone}}<br />{{properties.worktime}}</div></div>'), o = 0; o < e.cities.length; o++) {
                                    n += '<h3 class="b-shops__city">' + e.cities[o].name + "</h3>";
                                    for (var r = 0; r < e.cities[o].shops.length; r++) {
                                        var l, h = e.cities[o].shops[r],
                                            c = h.address ? h.address : " ",
                                            d = h.telephone ? h.telephone : " ",
                                            u = h.worktime ? h.worktime : " ";
                                        n += '<div class="b-shops__shop">                                <a href="javascript: void(0);" id="shop_id' + h.id + '" class="b-shops__name">' + h.name + '</a>                                <div class="b-shops__address">' + c + '</div>                                <div class="b-shops__telephone">' + d + '</div>                                <div class="b-shops__worktime">' + u + "</div>                                </div>", l = s && !h.available ? "/html/build/img/map_placemark_not_available.png" : "/html/build/img/map_placemark.png";
                                        var p = new ymaps.Placemark([h.coordinates[0], h.coordinates[1]], {
                                            city: e.cities[o].name,
                                            name: h.name,
                                            address: h.address,
                                            telephone: h.telephone,
                                            worktime: h.worktime
                                        }, {
                                            balloonContentLayout: a,
                                            balloonPanelMaxMapArea: 0,
                                            iconLayout: "default#image",
                                            iconImageHref: l,
                                            iconImageSize: [32, 46],
                                            iconImageOffset: [-3, -42]
                                        });
                                        t(".b-shops__container").append(n), n = "", t("#shop_id" + h.id).attr("data-coord_1", h.coordinates[1]), t("#shop_id" + h.id).attr("data-coord_0", h.coordinates[0]), i.geoObjects.add(p)
                                    }
                                }
                                t(".b-shops__name").on("click", function() {
                                    i.setCenter([t(this).attr("data-coord_0"), t(this).attr("data-coord_1")], 14, {
                                        duration: 600,
                                        checkZoomRange: !0
                                    })
                                })
                            }
                            var f = t("#mgc-cur-city").text();
                            t(".b-shops__city:contains(" + f + ")").next().find("a").click()
                        }
                        var o = [{
                            center: e.center,
                            zoom: 12,
                            controls: [],
                            behaviors: ["drag", "scrollZoom"]
                        }, {
                            suppressMapOpenBlock: !0
                        }];
                        t("#map1").length && a(i = new ymaps.Map("map1", o[0], o[1])), t("#map2").length && a(s = new ymaps.Map("map2", o[0], o[1]), !0), t("#map").length && ((n = new ymaps.Map("map", o[0], o[1])).behaviors.disable("scrollZoom"), n.controls.add(new ymaps.control.ZoomControl({
                            options: {
                                position: {
                                    right: 20,
                                    top: 180
                                }
                            }
                        })), a(n)), t(".b-shops__container").mCustomScrollbar({
                            theme: "olimp",
                            scrollInertia: 100,
                            scrollAmount: 100
                        })
                    }
                })
            }
            var i, s, n;
            window.ymaps && (t('a[data-toggle="tab"]').on("shown.bs.tab", function(n) {
                var a = t(n.target).attr("href");
                ("#tab11" == a || "#tab13" == a) && (t("ymaps", t(a)).length ? (i.container.fitToViewport(), s.container.fitToViewport()) : ymaps.ready(e))
            }), t("ymaps").length || ymaps.ready(e))
        }), t(".js-product_count").change(function() {
            c({
                productCount: t(this).val()
            }, "")
        }), p = {
            padding: 0,
            margin: [10, 27, 10, 10],
            transitionIn: "none",
            transitionOut: "none",
            speedIn: 600,
            speedOut: 200,
            overlayShow: !0,
            helpers: {
                title: null,
                overlay: {
                    showEarly: !1,
                    locked: !0,
                    autoCenter: !1,
                    css: {
                        background: "rgba(0, 0, 0, .5)"
                    }
                }
            },
            afterShow: function() {
                t(".fancybox-wrap").has(".b-popup-sign-up").css("max-width", "700px"), t(".fancybox-wrap").has(".b-popup-avaiable").css("max-width", "900px");
                var e = t(".tab-carousel-indicator__carousel-inner .item.active img");
                t(".fancybox-wrap").has(".b-popup-product").css("max-width", e.attr("width") + "px"), t("html").addClass("fancybox-margin fancybox-lock"), t(".fancybox-overlay").append(t(".fancybox-wrap"))
            },
            afterClose: function() {
                t("#tab10").length && t('a[href="#tab10"]').tab("show"), t("#tab12").length && t('a[href="#tab12"]').tab("show")
            }
        }, t('[data-popup="open"]').length && (t('[data-popup="open"]').fancybox(p), t('a[href="#popup-product"]').click(function() {
            var e = t(".tab-carousel-indicator__carousel-inner .item.active img").attr("src");
            t("#popup-product #product-detail-image").attr("src", e)
        })), t('[data-popup="close"]').length && t('[data-popup="close"]').on("click", function() {
            t.fancybox.close()
        }), t(document).ready(function() {
            t(".b-cart__goods-arrowmin").click(function() {
                var e = t(this).parent().find("input"),
                    i = parseInt(e.val()) - 1;
                return i = 1 > i ? 1 : i, e.val(i), e.change(), !1
            }), t(".b-cart__goods-arrowplus").click(function() {
                var e = t(this).parent().find("input");
                return e.val(parseInt(e.val()) + 1), e.change(), !1
            })
        }), t(".b-tab-available__choice_by_user").children("input").change(function() {
            t("#radio22").prop("checked") ? (t(".b-tab-available__shop-block").show(), t(".b-tab-available__not-available").show(), t(".b-tab-available__shop-adress").show(), t(".b-tab-available__in-stock").show(), t(".js-empty-stores").hide()) : (t(".b-tab-available__not-available").each(function() {
                0 == t(this).siblings(".b-tab-available__in-stock").length && t(this).parents(".b-tab-available__shop-block").hide(), t(this).hide().next(".b-tab-available__shop-adress").hide()
            }), 0 == t(".b-tab-available__in-stock").length && t(".js-empty-stores").show())
        }), t(".b-product-info__size-link").on("click", function() {
            if (t(this).hasClass("b-product-info__size-link--no-size") || t(this).hasClass("b-product-info__size-link--active")) return !1;
            t(this).attr("title"), t(".b-product-info__size-link").removeClass("b-product-info__size-link--active"), t(this).addClass("b-product-info__size-link--active");
            var i = t(this).attr("data-id-offer"),
                s = t("#price_type_id").text();
            t.ajax({
                type: "POST",
                url: "/ajax/catalog.element_main.php",
                data: {
                    id: i,
                    price_type_id: s
                },
                success: function(e) {
                    t(".b-product-info__price").html(e)
                }
            }), t.ajax({
                type: "POST",
                url: "/ajax/store_amount.php",
                data: {
                    id: i
                },
                success: function(e) {
                    var i = jQuery.parseJSON(e);
                    t("[data-store]").each(function() {
                        var e = t(this).attr("data-store");
                        e && t(this).replaceWith(i[e])
                    }), t(".b-product-info__extra-link").text(t(".b-tab-available__in-stock").length + " магазинах");
                    var s = 0 == t(".b-tab-available__in-stock").length ? "наличие" : "наличие (" + t(".b-tab-available__in-stock").length + ")";
                    t("a[href = '#tab4']").text(s), t("#radio2").prop("checked") ? (t(".b-tab-available__not-available").each(function() {
                        0 == t(this).siblings(".b-tab-available__in-stock").length && t(this).parents(".b-tab-available__shop-block").hide(), t(this).hide().next(".b-tab-available__shop-adress").hide()
                    }), t(".b-tab-available__in-stock").each(function() {
                        t(this).next(".b-tab-available__shop-adress").show(), t(this).parents(".b-tab-available__shop-block").show()
                    }), 0 == t(".b-tab-available__in-stock").length && t(".js-empty-stores").show()) : (t(".b-tab-available__shop-block").show(), t(".b-tab-available__not-available").show(), t(".b-tab-available__shop-adress").show(), t(".js-empty-stores").hide())
                }
            }), t.ajax({
                type: "POST",
                url: "/ajax/catalog.element_favorite.php",
                data: {
                    id: +i,
                    action: "check",
                    price_code: t(".b-link__add-favorites").attr("data-price_code")
                },
                success: function(i) {
                    t(".b-link__add-favorites.b-link__add-favorites--button").replaceWith(i), e()
                }
            })
        }), t(".b-popup-feedback__input-popup--feedback.btn.b-btn__default[data-type = response_add]").on("click", function() {
            var e = t("#text-contact").val(),
                n = t("#text-name").val(),
                i = t("input:radio[name=rating-input-1]:checked").attr("data-vote"),
                s = t("#parent_product_id").text();
            "" != e && t.ajax({
                type: "POST",
                url: "/ajax/product_responses.php",
                data: {
                    text: e,
                    vote: i,
                      UNAME: n,
                    product: s
                },
                success: function(e) {
                    t(e).insertAfter(".b-tab-review__add-review").promise().done(function() {
                        var e, i;
                        (function() {
                            for (var e = 2 * t(".b-tab-review__star_by_user").length, i = t(".b-tab-review__user-list").length, s = e / i, n = s / 2 >> 0, a = s % 2 != 0, o = 0, r = ""; 5 != o;) r += n > o ? '<li class="b-tab-review__star"></li>' : a && n == o ? '<li class="b-tab-review__star--halfstar"></li>' : '<li class="b-tab-review__star--nostar"></li>', o++;
                            t(".b-tab-review__star-rating").html(r)
                        })(), e = t(".b-tab-review__user-list").length, i = 0 != e ? "Отзывы (" + e + ")" : "Отзывы", t(".b-tab__nav--link.tx-dec_no[href = '#tab3']").text(i), t("input:radio[name=rating-input-1]:checked").attr("checked", !1)
                    }), t(".close.b-popup__close").click(), t("#text-contact").val("")
                }
            })
        }), t(document).ready(function() {
            t(".js-range-slider").length && t(".js-range-slider").slider({
                range: !0,
                min: 0,
                max: 459,
                step: 100,
                animate: !0,
                values: [0, 459],
                create: function(e, i) {
                    t(this).find("span:first").addClass("first-a"), t(this).find("span:last").addClass("last-a"), t(".js-range-min-cost").val(0), t(".js-range-max-cost").val(459)
                },
                slide: function(e, i) {
                    t(i.handle).hasClass("first-a") && t(".js-range-min-cost").val(i.value + " руб.").attr("value", i.value), t(i.handle).hasClass("last-a") && t(".js-range-max-cost").val(i.value + " руб.").attr("value", i.value)
                }
            })
        }), t(".b-link__show-more").on("click", function() {
            var e = {
                    category_id: t(this).attr("data-category_id"),
                    current_page: t(this).attr("data-current_page"),
                    product_count: t(this).attr("data-product_count"),
                    sort_field: t(this).attr("data-sort_field"),
                    sort_order: t(this).attr("data-sort_order"),
                    filter: t(this).attr("data-filter")
                },
                s = 0;
            if (1 == t(this).attr("data-main")) {
                s = 1;
                var a = t(this).attr("data-main-type")
            }
            t.ajax({
                url: "/ajax/load_more.php",
                data: e,
                method: "GET",
                dataType: "json",
                success: function(e) {
                    var r, l = "",
                        h = t(".b-catalog-type__link--active");
                    if (t.each(e.products, function(t, a) {
                            h.hasClass("b-catalog-type__link--tile") || 1 == s ? l += i(e.products[t]) : h.hasClass("b-catalog-type__link--imagelist") ? l += n(e.products[t]) : h.hasClass("b-catalog-type__link--list") && (l += o(e.products[t]))
                        }), 1 != s ? (h.hasClass("b-catalog-type__link--tile") || 1 == s ? t(".b-product__list").append(l) : t(".b-catalog-photo__list").append(l), t(".b-link__show-more").attr("data-current_page", e.page)) : (t(".b-product__list." + a).append(l), "0" == e.more && t(".b-products__showmore." + a).hide(), t(".b-products__showmore." + a + " .b-link__show-more").attr("data-current_page", e.page)), 1 != s) {
                        var c = t(".b-pagination__page--active").text();
                        if (t(".b-pagination__page--active").replaceWith('<li class="b-pagination__page"><a class="b-pagination__pagelink" href="' + window.location.href.slice(0, window.location.href.indexOf("?")) + "?PAGEN_2=" + c + '">' + c + "</a></li>"), t('.b-pagination__pagelink:contains("' + e.page + '")').parents(".b-pagination__page").replaceWith('<li class="b-pagination__page b-pagination__page--active">' + e.page + "</li>"), parseInt(t(".b-pagination__pagelink:last").text()) < parseInt(t(".b-pagination__page--active").text()) && (t(".b-pagination__next").parent().html(""), t(".b-products__showmore").hide()), "1" != t(".b-pagination__page--active").text()) {
                            var d = parseInt(e.page) - 1;
                            t(".b-pagination__page:first").html('<a class="b-pagination__prev" href="' + window.location.href.slice(0, window.location.href.indexOf("?")) + "?PAGEN_2=" + d + '"></a>')
                        }
                        var u = t(".b-pagination__showed").text().match(/(\d+)/g),
                            p = h.hasClass("b-catalog-type__link--tile") ? t(".b-product__item").length : t(".b-catalog-photo__item").length;
                        u[1] = parseInt(u[0]) + p - 1;
                        var f = u[0] + " - " + u[1] + " из " + u[2];
                        t(".b-pagination__showed").text(f), r = t(".b-pagination__pagelink:last").text(), t(".b-pagination__page--shorten").remove(), t(".b-pagination__pagelink").each(function() {
                            var e = t(this).text(),
                                i = t(".b-pagination__page--active").text() - e;
                            Math.abs(i) > 2 && 1 != e && e != r ? t(this).parent().hide() : t(this).parent().show(), 2 == Math.abs(i) && e > 2 && r - 2 >= e && (0 > i ? t(this).parent().after('<li class="b-pagination__page--shorten"><span class="b-pagination__link" href="#" title="">...</span></li>') : t(this).parent().before('<li class="b-pagination__page--shorten"><span class="b-pagination__link" href="#" title="">...</span></li>')), parseInt(t(".b-pagination__pagelink:last").text()) < parseInt(t(".b-pagination__page--active").text()) && e == parseInt(t(".b-pagination__page--active").text()) - 2 && parseInt(t(".b-pagination__page--active").text()) > 4 && t(this).parent().before('<li class="b-pagination__page--shorten"><span class="b-pagination__link" href="#" title="">...</span></li>')
                        }), t(".b-pagination__pagelink").each(function() {
                            var e = window.location.href.slice(window.location.href.indexOf("?") + 1).replace("&&", "&").split("&");
                            if (e.forEach(function(t, i) {
                                    -1 != t.indexOf("PAGEN_") && e.splice(i, 1)
                                }), window.location.href.match(/(\?)/g)) {
                                t(this).attr("href").split("?")[1].split("&").forEach(function(t, i) {
                                    -1 != t.indexOf("PAGEN_") && e.push(t)
                                });
                                var i = "?" + e.join("&");
                                t(this).attr("href", i.replace("&&", "&"))
                            }
                        })
                    }
                }
            })
        }), t(document).ready(function() {
            var e;
            e = 6, t(window).width() >= 1590 ? e = 13 : t(window).width() >= 1280 ? e = 7 : t(window).width() >= 960 ? e = 4 : t(window).width() >= 320 && (e = 4), t(".b-brand-carousel__list").bxSlider({
                nextText: '<div class="b-btn__arrow b-btn__arrow--right b-btn-arrow-right"></div>',
                prevText: '<div class="b-btn__arrow b-btn__arrow--left b-btn-arrow-left"></div>',
                pager: !1,
                adaptiveHeight: !1,
                responsive: !1,
                minSlides: 1,
                moveSlides: 1,
                maxSlides: e,
                slideWidth: 80,
                slideMargin: 30
            })
        }), t(".bxslider-tab").length > 0) {
        if (t(".tab-carousel-indicator--desctop li").length > 3) var x = !0;
        else x = !1;
        t(".js-picture-slider-desctop").bxSlider({
            mode: "vertical",
            moveSlides: 1,
            minSlides: 4,
            maxSlides: 10,
            slideWidth: 100,
            slideMargin: 5,
            pager: !1,
            infiniteLoop: x
        }),
        t(".js-picture-slider-mobile").bxSlider({
            mode: "horizontal",
            moveSlides: 1,
            minSlides: 4,
            maxSlides: 10,
            slideWidth: 100,
            slideMargin: 10,
            pager: !1,
            infiniteLoop: x
        })
    }
    t(document).ready(function() {
        t("#tab-carousel-product").carousel({
            interval: !1
        })
    }), t(document).ready(function() {
        t(".slider-product-recent").bxSlider({
            prevText: '<div class="b-btn__arrow b-btn__arrow--left b-btn-arrow-left"></div>',
            nextText: '<div class="b-btn__arrow b-btn__arrow--right b-btn-arrow-right"></div>',
            pager: !1,
            minSlides: 2,
            moveSlides: 0,
            maxSlides: 80,
            slideWidth: 190,
            slideMargin: 16
        }), t(window).width() >= 1600 && t(".b-goods__item--recent").length > 7 && t(".b-goods__recent").addClass("b-goods__recent--arrow"), t(window).width() < 1600 && t(".b-goods__item--recent").length > 7 && t(".b-goods__recent").addClass("b-goods__recent--arrow"), t(window).width() < 1400 && t(".b-goods__item--recent").length > 6 && t(".b-goods__recent").addClass("b-goods__recent--arrow"), t(window).width() < 1280 && t(".b-goods__item--recent").length > 4 && t(".b-goods__recent").addClass("b-goods__recent--arrow"), t(window).width() < 960 && t(".b-goods__item--recent").length > 4 && t(".b-goods__recent").addClass("b-goods__recent--arrow")
    }), t(document).ready(function() {
        t(".slider-product-recommended").bxSlider({
            prevText: '<div class="b-btn__arrow b-btn__arrow--left b-btn-arrow-left"></div>',
            nextText: '<div class="b-btn__arrow b-btn__arrow--right b-btn-arrow-right"></div>',
            pager: !1,
            minSlides: 1,
            moveSlides: 1,
            maxSlides: 8,
            slideWidth: 180,
            slideMargin: 16
        })
    }), t(document).ready(function() {
        t(".slider-product-similar").bxSlider({
            prevText: '<div class="b-btn__arrow b-btn__arrow--left b-btn-arrow-left"></div>',
            nextText: '<div class="b-btn__arrow b-btn__arrow--right b-btn-arrow-right"></div>',
            pager: !1,
            minSlides: 1,
            moveSlides: 1,
            maxSlides: 4,
            slideWidth: 295
        }), t(window).width() >= 1600 && t(".b-goods__item--similar").length > 4 && t(".b-goods__similar").addClass("b-goods__similar--arrow"), t(window).width() < 1600 && t(".b-goods__item--similar").length > 3 && t(".b-goods__similar").addClass("b-goods__similar--arrow"), t(window).width() < 1280 && t(".b-goods__item--similar").length > 3 && t(".b-goods__similar").addClass("b-goods__similar--arrow")
    }), t(".js-products-sort").change(function() {
        window.location = "?sort=" + t(this).val()
    }), t(document).ready(function() {
      Array.prototype.forEach.call(document.querySelectorAll('.copy-click'), function(el) {
        el.onclick = () => document.execCommand("copy")
        el.addEventListener("copy", function(event) {
          event.preventDefault()
          if (event.clipboardData) {
            event.clipboardData.setData("text/plain", el.textContent)
            el.showPopup(el.dataset.hasOwnProperty("mess") ? el.dataset.mess : "Скопировано")
            setTimeout(() => el.hidePopup(), 1500)
          }
        })
        el.showPopup = function(text) {
          let popup = document.createElement("span")
          popup.classList.add("popup")
          popup.innerHTML = text
          this.append(popup)
        }
        el.hidePopup = function () {
          Array.prototype.forEach.call(el.querySelectorAll('.popup'), (popup) => popup.remove())
        }
      })
    });
    var C, k = new Array;
    if (t("[data-orderby]").on("click", function() {
            var e, i, s, n, a, o = t(this).data("orderby");
            switch (o) {
                case "number":
                    flag = 1;
                    break;
                default:
                    flag = 0
            }
            e = o, i = ".b-my-orders__list", s = ".js-my-orders__sort--row", n = flag, a = t(s = i + " " + s).sort(function(i, s) {
                return i = t(i).find("[data-name=" + e + "]").text(), s = t(s).find("[data-name=" + e + "]").text(), void 0 == k[e] || 0 == k[e] ? d(i, n) > d(s, n) ? 1 : d(i, n) < d(s, n) ? -1 : 0 : d(i, n) < d(s, n) ? 1 : d(i, n) > d(s, n) ? -1 : 0
            }), t(i).html(a), void 0 == k[e] || 0 == k[e] ? (k[e] = 1, t("[data-orderby=" + e + "]").addClass("up")) : (k[e] = 0, t("[data-orderby=" + e + "]").removeClass("up"))
        }), t(document).ready(function() {
            t(".yourclass").bxSlider({
                nextText: '<div class="b-btn__arrow b-btn__arrow--left b-btn-arrow-left"></div>',
                prevText: '<div class="b-btn__arrow b-btn__arrow--right b-btn-arrow-right"></div>',
                pager: !1,
                slideWidth: 500,
                minSlides: 2,
                moveSlides: 2,
                slideMargin: 20
            })
        }), t.fn.tabSwitcher = function(e) {
            function i() {
                return s.switchTab(t(this)), !1
            }
            var s = this,
                n = {
                    afterSwitch: e && t.isFunction(e.afterSwitch) ? e.afterSwitch : function() {}
                };
            this.each(function() {
                t(this).on("click", '[data-tabs-target="true"]', i)
            }), this.switchTab = function(e) {
                var i = e.closest(s).prop("id"),
                    a = e.closest(s).data("tabs-cnt"),
                    o = e.data("tabs-item");
                t("#" + i).find('[data-tabs-target="true"]').removeClass("active"), e.addClass("active"), t(a).find(t(o)).siblings().removeClass("active").end().addClass("active"), n.afterSwitch(e)
            }
        }, t("body").on("mouseover", "a[data-tooltip]", function() {
            t(".b-tooltip").length > 0 || (t(this).append('<span class="b-tooltip">' + t(this).attr("title") + "</span>"), t(this).on("mouseout", function() {
                t(".b-tooltip").remove()
            }))
        }), t(document).ready(function() {
            var e = new Validation_MOD;
            e.patternErrorText = '<div class="error-message">%ERROR%</div>', e.modeError = "after", e.errorClass = "error", e.elementErrorText = function(t) {
                return t
            }, e.elementErrorClass = function(t) {
                return t.closest(".form-row")
            }, e.lang = {
                email: "Введите корректный E-mail",
                req: "Поле обязательно для заполнения",
                min: "Слишком короткое значение",
                max: "Слишком длинное значение",
                pattern: "Введите корректное значение",
                phone: "Введите корректный телефон",
                geooff: "Вы запретили определять ваше местоположение",
                compare: "Значения не совпадают",
                date: "Введите дату в формате dd.mm.yyyy"
            }, e.keyup(t(".js-validation-change")), e.form_submit(t(".js-validation-change").parents("form"), t(".js-validation-change"))
        }), t(window).width() < 960) {
        if (t(".b-product-info--mobile").length <= 0) {
            t(".b-product-info__compare").find(".b-checkbox__item--product").addClass("b-checkbox__item--mobile");
            var D = t(".b-product-info__compare");
            t(".b-product-main").removeClass("b-product-main").addClass("b-product-info").addClass("b-product-info--mobile").prepend(t(".b-product-info__extra")).prepend(t(".b-product-info__favorite")).prepend(t(".b-product-info__bonus")).prepend(t(".b-product-info__form")).prepend(t("#tab-carousel-product").addClass("carousel-product-mobile")).prepend(t(".b-product-info__head")), t(".b-product-info__form form").prepend(t(".b-product-info__price").addClass("b-product-info__price--mobile").append(D)), t(".b-product-info--mobile").siblings(".b-product-info").remove()
        }
    } else if (t(".b-product-info--mobile").length > 0) {
        t(".b-product-info__compare").find(".b-checkbox__item--product").removeClass("b-checkbox__item--mobile");
        D = t(".b-product-info__compare");
        t(".b-product-info__action").prepend(D), t(".b-product-info--mobile").removeClass("b-product-info").removeClass("b-product-info--mobile").addClass("b-product-main"), t("#tab-carousel-product").removeClass("carousel-product-mobile"), t(".b-product-main").after('<div class="b-product-info"></div>'), t(".b-product-info").append(t(".b-product-info__head")).append(t(".b-product-info__form")).append(t(".b-product-info__bonus")).append(t(".b-product-info__favorite")).append(t(".b-product-info__extra")), t(".b-product-info__form form").append(t(".b-product-info__price").removeClass("b-product-info__price--mobile"))
    }
    t(document).ready(function() {
        t(".b-form--checkout").on("submit", function() {
            return t(".b-checkout-login").hide(), t(".b-checkout-login+.b-order").show(), !1
        })
    }), t(function() {
        t('[data-scrollbar="custom"]').mCustomScrollbar({
            theme: "custom",
            scrollInertia: 0
        })
    }), t(window).load(function() {
        t('input[type="file"]').styleFileField(), t('input[data-check="checkbox"], input[data-check="radio"]').styledCheck(), t(".b-tabs").tabSwitcher(),
            function() {
                var e = {
                    types: ["show", "hide", "toggle"]
                };
                if (t("[data-visibility]").length > 0) {
                    var i = function(i, s) {
                        for (var n = 0; n < s.length; n++) i == e.types[0] && t(s[n]).fadeIn(w.animationTime), i == e.types[1] && t(s[n]).fadeOut(w.animationTime), i == e.types[2] && (t(s[n]).is(":visible") ? t(s[n]).fadeOut(w.animationTime) : t(s[n]).fadeIn(w.animationTime))
                    };
                    t("[data-visibility]").on("click", function() {
                        for (var s = 0; s < e.types.length; s++)
                            if (t(this).data(e.types[s])) {
                                var n = t(this).data(e.types[s]).split("|");
                                i(e.types[s], n)
                            }
                        return !1
                    })
                }
            }(), t("#slider-brand").carousel()
    }), t(window).resize(function(t) {
        u()
    }), u(), t("#myTab a").click(function(e) {
        e.preventDefault(), t(this).tab("show")
    }), t(".select-header").dropkick({
        change: function() {
            console.log(this);
            var e = this.value.split(";")[0];
            t.cookie("KEY_CITY1111", e, {
                expires: 365,
                path: "/"
            }), window.location.reload()
        },
        mobile: !0
    }), t(".b-my-orders__item--open").click(function() {
        return t(this).parent().parent().parent().find(".b-my-orders__info").slideToggle("slow"), t(this).toggleClass("active"), !1
    }), t(".b-header-mobile__search").click(function() {
        return t(".b-header-mobile__list").addClass("hidden"), t(".b-header-mobile__search-list").addClass("show"), !1
    }), t(".b-header-mobile__search-list--close").click(function() {
        return t(".b-header-mobile__search-list").removeClass("show"), t(".b-header-mobile__list").removeClass("hidden"), !1
    }), t(".b-header-mobile__menu").click(function() {
        return t(".b-header-mobile__menu-dropdown").slideToggle("slow"), !1
    }), t(".js-modile-menu-link-level-one").click(function() {
        return t(this).parent().addClass("active"), t(".js-mobile-menu-level-two.js-mobile-menu-level-one").removeClass("js-mobile-menu-level-one"), t(this).parent().find(".b-header-mobile__menu--section").addClass("show"), t(".b-header-mobile__menu--nav").addClass("show"), t(".b-header-mobile__menu--item-category:not(.active)").css("display", "none"), !1
    }), t(".js-backwards-two").click(function() {
        return t(".b-header-mobile__menu--section, .b-header-mobile__menu--nav").removeClass("show"), t(".js-mobile-menu-level-two").addClass("js-mobile-menu-level-one"), t(".b-header-mobile__menu--item-category").css("display", "block"), t(".b-header-mobile__menu--item.active").removeClass("active"), !1
    }), t(".b-tab__accordion--name").click(function() {
        return t(this).parent(".b-tab__accordion--item").toggleClass("active"), !1
    }), t(".js-modile-menu-link-level-two").click(function() {
        var e = t(this).attr("id");
        return t("#level3_" + e).removeClass("hidden"), t("#level3_" + e).find(".b-header-mobile__menu--item-category").css("display", "block"), t("#level3_" + e).find(".b-header-mobile__menu--section").css("display", "block"), t(".js-mobile-menu-level-two").removeClass("show"), t(".js-mobile-menu-level-two").addClass("hidden"), !1
    }), t(".js-modile-menu-link-level-three").click(function() {
        return t(this).parents(".js-mobile-menu-level-three").addClass("hidden"), t(".js-mobile-menu-level-two").removeClass("hidden"), t(".js-mobile-menu-level-two").addClass("show"), t(".b-header-mobile__menu--nav").addClass("show"), t(".b-header-mobile__menu--item-category:not(.active)").css("display", "none"), t(".b-header-mobile__menu--section, .b-header-mobile__menu--nav").addClass("show"), !1
    }), t(".js-modile-menu-link-level-categories").click(function() {
        return t(this).parents(".js-mobile-menu-level-three").addClass("hidden"), t(".js-mobile-menu-level-two").removeClass("hidden"), t(".js-mobile-menu-level-two").addClass("show"), t(".b-header-mobile__menu--nav").addClass("show"), t(".b-header-mobile__menu--item-category:not(.active)").css("display", "none"), t(".b-header-mobile__menu--section, .b-header-mobile__menu--nav").addClass("show"), t(".b-header-mobile__menu--section, .b-header-mobile__menu--nav").removeClass("show"), t(".js-mobile-menu-level-two").addClass("js-mobile-menu-level-one"), t(".b-header-mobile__menu--item-category").css("display", "block"), t(".b-header-mobile__menu--item.active").removeClass("active"), !1
    }), t(".js-nav__see-link").click(function() {
        return t(this).parents(".b-nav-column__list").addClass("active"), !1
    }), t('[data-toggle="tooltip"]').tooltip(), t(function() {
        t(document).click(function(e) {
            t(e.target).closest(".b-header-mobile__menu-dropdown").length || "none" != t(".b-header-mobile__menu-dropdown").css("display") && t(".b-header-mobile__menu-dropdown").slideToggle("slow")
        })
    }), t('[data-action="add-review"]').click(function() {
        var e = t(this).closest(".b-personal-information__archives-product--item"),
            i = t('[data-review="true"]', e);
        return e.toggleClass("active"), e.hasClass("active") ? i.attr("data-rules", "req") : i.removeAttr("data-rules"), !1
    }), t(function() {
        t("#b-datepicker__input").datepicker()
    });
    var S = t(".b-brand-list--index li").length;
    t(".b-brand-list--index").css("width", 255 * S / 2 - 56), t(".js_substribe").length && t(".js_substribe").on("click", function() {
        var e;
        t(".popup-substribe-text").html("Отправка запроса"), e = t(this).prev('[type="email"]').length ? t(this).prev('[type="email"]').val() : t(".js_footer_substr").val(), t.post("/ajax/csubscriptionadd.php", {
            action: "add_sub",
            EMAIL: e
        }, function(e) {
            t(".popup-substribe-text").html(e), console.log(e)
        }, "html")
    }), t(".js_filter_clear").length && t(".js_filter_clear").on("click", function() {
        t("#del_filter").click()
    }), t(".b-popup-avaiable__button--not-avaiable").prop("disabled", !0), t('input[type="tel"]').inputmask("+7 (999) 999-99-99"), t(".form-feedback").submit(function(e) {
        t("#web_form_submit").prop("disabled", !0), t.ajax({
            url: t(this).attr("action"),
            data: t(this).serialize(),
            type: "post",
            success: function(e) {
                t(".message_from_feedback").html(e), t(this).hide()
            },
            error: function(e) {
                t(".message_from_feedback").html("Произошла ошибка."), t("#web_form_submit").prop("disabled", !1)
            }
        }), e.preventDefault()
    })
}(jQuery);
