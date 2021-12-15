function correctErrorWidths() {
    calculateErrorWidth($(".b-form__input--phone")), calculateErrorWidth($(".b-form__textarea--payment")), calculateErrorWidth($(".b-form__input--date")), $(".b-form__input--date + .error-message").length ? $(".delivery-mobile").css("padding-bottom", "30px") : $(".delivery-mobile").css("padding-bottom", ""), $(".b-form__input--date + .error-message").length ? $(".delivery-authorized-mobile").css("padding-bottom", "30px") : $(".delivery-authorized-mobile").css("padding-bottom", "")
}

function calculateErrorWidth(t) {
    if (t.length) {
        var e = parseInt(t.css("width"));
        parseInt(t.css("padding-left")), parseInt(t.css("padding-right")), parseInt(t.css("border-left-width")), parseInt(t.css("border-right-width")), t.next(".error-message").css("min-width", e + "px"), t.next(".error-message").css("width", "auto")
    }
}
if (function(t, e, i, n) {
        var s = i("html"),
            o = i(t),
            a = i(e),
            r = i.fancybox = function() {
                r.open.apply(this, arguments)
            },
            l = navigator.userAgent.match(/msie/i),
            h = null,
            c = e.createTouch !== n,
            d = function(t) {
                return t && t.hasOwnProperty && t instanceof i
            },
            u = function(t) {
                return t && "string" === i.type(t)
            },
            p = function(t) {
                return u(t) && 0 < t.indexOf("%")
            },
            f = function(t, e) {
                var i = parseInt(t, 10) || 0;
                return e && p(t) && (i *= r.getViewport()[e] / 100), Math.ceil(i)
            },
            m = function(t, e) {
                return f(t, e) + "px"
            };
        i.extend(r, {
            version: "2.1.5",
            defaults: {
                padding: 15,
                margin: 20,
                width: 800,
                height: 600,
                minWidth: 100,
                minHeight: 100,
                maxWidth: 9999,
                maxHeight: 9999,
                pixelRatio: 1,
                autoSize: !0,
                autoHeight: !1,
                autoWidth: !1,
                autoResize: !0,
                autoCenter: !c,
                fitToView: !0,
                aspectRatio: !1,
                topRatio: .5,
                leftRatio: .5,
                scrolling: "auto",
                wrapCSS: "",
                arrows: !0,
                closeBtn: !0,
                closeClick: !1,
                nextClick: !1,
                mouseWheel: !0,
                autoPlay: !1,
                playSpeed: 3e3,
                preload: 3,
                modal: !1,
                loop: !0,
                ajax: {
                    dataType: "html",
                    headers: {
                        "X-fancyBox": !0
                    }
                },
                iframe: {
                    scrolling: "auto",
                    preload: !0
                },
                swf: {
                    wmode: "transparent",
                    allowfullscreen: "true",
                    allowscriptaccess: "always"
                },
                keys: {
                    next: {
                        13: "left",
                        34: "up",
                        39: "left",
                        40: "up"
                    },
                    prev: {
                        8: "right",
                        33: "down",
                        37: "right",
                        38: "down"
                    },
                    close: [27],
                    play: [32],
                    toggle: [70]
                },
                direction: {
                    next: "left",
                    prev: "right"
                },
                scrollOutside: !0,
                index: 0,
                type: null,
                href: null,
                content: null,
                title: null,
                tpl: {
                    wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                    image: '<img class="fancybox-image" src="{href}" alt="" />',
                    iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (l ? ' allowtransparency="true"' : "") + "></iframe>",
                    error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                    closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                    next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                    prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
                },
                openEffect: "fade",
                openSpeed: 250,
                openEasing: "swing",
                openOpacity: !0,
                openMethod: "zoomIn",
                closeEffect: "fade",
                closeSpeed: 250,
                closeEasing: "swing",
                closeOpacity: !0,
                closeMethod: "zoomOut",
                nextEffect: "elastic",
                nextSpeed: 250,
                nextEasing: "swing",
                nextMethod: "changeIn",
                prevEffect: "elastic",
                prevSpeed: 250,
                prevEasing: "swing",
                prevMethod: "changeOut",
                helpers: {
                    overlay: !0,
                    title: !0
                },
                onCancel: i.noop,
                beforeLoad: i.noop,
                afterLoad: i.noop,
                beforeShow: i.noop,
                afterShow: i.noop,
                beforeChange: i.noop,
                beforeClose: i.noop,
                afterClose: i.noop
            },
            group: {},
            opts: {},
            previous: null,
            coming: null,
            current: null,
            isActive: !1,
            isOpen: !1,
            isOpened: !1,
            wrap: null,
            skin: null,
            outer: null,
            inner: null,
            player: {
                timer: null,
                isActive: !1
            },
            ajaxLoad: null,
            imgPreload: null,
            transitions: {},
            helpers: {},
            open: function(t, e) {
                return t && (i.isPlainObject(e) || (e = {}), !1 !== r.close(!0)) ? (i.isArray(t) || (t = d(t) ? i(t).get() : [t]), i.each(t, function(s, o) {
                    var a, l, h, c, p, f = {};
                    "object" === i.type(o) && (o.nodeType && (o = i(o)), d(o) ? (f = {
                        href: o.data("fancybox-href") || o.attr("href"),
                        title: o.data("fancybox-title") || o.attr("title"),
                        isDom: !0,
                        element: o
                    }, i.metadata && i.extend(!0, f, o.metadata())) : f = o), a = e.href || f.href || (u(o) ? o : null), l = e.title !== n ? e.title : f.title || "", !(c = (h = e.content || f.content) ? "html" : e.type || f.type) && f.isDom && ((c = o.data("fancybox-type")) || (c = (c = o.prop("class").match(/fancybox\.(\w+)/)) ? c[1] : null)), u(a) && (c || (r.isImage(a) ? c = "image" : r.isSWF(a) ? c = "swf" : "#" === a.charAt(0) ? c = "inline" : u(o) && (c = "html", h = o)), "ajax" === c && (a = (p = a.split(/\s+/, 2)).shift(), p = p.shift())), h || ("inline" === c ? a ? h = i(u(a) ? a.replace(/.*(?=#[^\s]+$)/, "") : a) : f.isDom && (h = o) : "html" === c ? h = a : !c && !a && f.isDom && (c = "inline", h = o)), i.extend(f, {
                        href: a,
                        type: c,
                        content: h,
                        title: l,
                        selector: p
                    }), t[s] = f
                }), r.opts = i.extend(!0, {}, r.defaults, e), e.keys !== n && (r.opts.keys = !!e.keys && i.extend({}, r.defaults.keys, e.keys)), r.group = t, r._start(r.opts.index)) : void 0
            },
            cancel: function() {
                var t = r.coming;
                t && !1 !== r.trigger("onCancel") && (r.hideLoading(), r.ajaxLoad && r.ajaxLoad.abort(), r.ajaxLoad = null, r.imgPreload && (r.imgPreload.onload = r.imgPreload.onerror = null), t.wrap && t.wrap.stop(!0, !0).trigger("onReset").remove(), r.coming = null, r.current || r._afterZoomOut(t))
            },
            close: function(t) {
                r.cancel(), !1 !== r.trigger("beforeClose") && (r.unbindEvents(), r.isActive && (r.isOpen && !0 !== t ? (r.isOpen = r.isOpened = !1, r.isClosing = !0, i(".fancybox-item, .fancybox-nav").remove(), r.wrap.stop(!0, !0).removeClass("fancybox-opened"), r.transitions[r.current.closeMethod]()) : (i(".fancybox-wrap").stop(!0).trigger("onReset").remove(), r._afterZoomOut())))
            },
            play: function(t) {
                var e = function() {
                        clearTimeout(r.player.timer)
                    },
                    i = function() {
                        e(), r.current && r.player.isActive && (r.player.timer = setTimeout(r.next, r.current.playSpeed))
                    },
                    n = function() {
                        e(), a.unbind(".player"), r.player.isActive = !1, r.trigger("onPlayEnd")
                    };
                !0 === t || !r.player.isActive && !1 !== t ? r.current && (r.current.loop || r.current.index < r.group.length - 1) && (r.player.isActive = !0, a.bind({
                    "onCancel.player beforeClose.player": n,
                    "onUpdate.player": i,
                    "beforeLoad.player": e
                }), i(), r.trigger("onPlayStart")) : n()
            },
            next: function(t) {
                var e = r.current;
                e && (u(t) || (t = e.direction.next), r.jumpto(e.index + 1, t, "next"))
            },
            prev: function(t) {
                var e = r.current;
                e && (u(t) || (t = e.direction.prev), r.jumpto(e.index - 1, t, "prev"))
            },
            jumpto: function(t, e, i) {
                var s = r.current;
                s && (t = f(t), r.direction = e || s.direction[t >= s.index ? "next" : "prev"], r.router = i || "jumpto", s.loop && (0 > t && (t = s.group.length + t % s.group.length), t %= s.group.length), s.group[t] !== n && (r.cancel(), r._start(t)))
            },
            reposition: function(t, e) {
                var n, s = r.current,
                    o = s ? s.wrap : null;
                o && (n = r._getPosition(e), t && "scroll" === t.type ? (delete n.position, o.stop(!0, !0).animate(n, 200)) : (o.css(n), s.pos = i.extend({}, s.dim, n)))
            },
            update: function(t) {
                var e = t && t.type,
                    i = !e || "orientationchange" === e;
                i && (clearTimeout(h), h = null), r.isOpen && !h && (h = setTimeout(function() {
                    var n = r.current;
                    n && !r.isClosing && (r.wrap.removeClass("fancybox-tmp"), (i || "load" === e || "resize" === e && n.autoResize) && r._setDimension(), "scroll" === e && n.canShrink || r.reposition(t), r.trigger("onUpdate"), h = null)
                }, i && !c ? 0 : 300))
            },
            toggle: function(t) {
                r.isOpen && (r.current.fitToView = "boolean" === i.type(t) ? t : !r.current.fitToView, c && (r.wrap.removeAttr("style").addClass("fancybox-tmp"), r.trigger("onUpdate")), r.update())
            },
            hideLoading: function() {
                a.unbind(".loading"), i("#fancybox-loading").remove()
            },
            showLoading: function() {
                var t, e;
                r.hideLoading(), t = i('<div id="fancybox-loading"><div></div></div>').click(r.cancel).appendTo("body"), a.bind("keydown.loading", function(t) {
                    27 === (t.which || t.keyCode) && (t.preventDefault(), r.cancel())
                }), r.defaults.fixed || (e = r.getViewport(), t.css({
                    position: "absolute",
                    top: .5 * e.h + e.y,
                    left: .5 * e.w + e.x
                }))
            },
            getViewport: function() {
                var e = r.current && r.current.locked || !1,
                    i = {
                        x: o.scrollLeft(),
                        y: o.scrollTop()
                    };
                return e ? (i.w = e[0].clientWidth, i.h = e[0].clientHeight) : (i.w = c && t.innerWidth ? t.innerWidth : o.width(), i.h = c && t.innerHeight ? t.innerHeight : o.height()), i
            },
            unbindEvents: function() {
                r.wrap && d(r.wrap) && r.wrap.unbind(".fb"), a.unbind(".fb"), o.unbind(".fb")
            },
            bindEvents: function() {
                var t, e = r.current;
                e && (o.bind("orientationchange.fb" + (c ? "" : " resize.fb") + (e.autoCenter && !e.locked ? " scroll.fb" : ""), r.update), (t = e.keys) && a.bind("keydown.fb", function(s) {
                    var o = s.which || s.keyCode,
                        a = s.target || s.srcElement;
                    return (27 !== o || !r.coming) && void(!s.ctrlKey && !s.altKey && !s.shiftKey && !s.metaKey && (!a || !a.type && !i(a).is("[contenteditable]")) && i.each(t, function(t, a) {
                        return 1 < e.group.length && a[o] !== n ? (r[t](a[o]), s.preventDefault(), !1) : -1 < i.inArray(o, a) ? (r[t](), s.preventDefault(), !1) : void 0
                    }))
                }), i.fn.mousewheel && e.mouseWheel && r.wrap.bind("mousewheel.fb", function(t, n, s, o) {
                    for (var a = i(t.target || null), l = !1; a.length && !l && !a.is(".fancybox-skin") && !a.is(".fancybox-wrap");) l = a[0] && !(a[0].style.overflow && "hidden" === a[0].style.overflow) && (a[0].clientWidth && a[0].scrollWidth > a[0].clientWidth || a[0].clientHeight && a[0].scrollHeight > a[0].clientHeight), a = i(a).parent();
                    0 !== n && !l && 1 < r.group.length && !e.canShrink && (o > 0 || s > 0 ? r.prev(o > 0 ? "down" : "left") : (0 > o || 0 > s) && r.next(0 > o ? "up" : "right"), t.preventDefault())
                }))
            },
            trigger: function(t, e) {
                var n, s = e || r.coming || r.current;
                if (s) {
                    if (i.isFunction(s[t]) && (n = s[t].apply(s, Array.prototype.slice.call(arguments, 1))), !1 === n) return !1;
                    s.helpers && i.each(s.helpers, function(e, n) {
                        n && r.helpers[e] && i.isFunction(r.helpers[e][t]) && r.helpers[e][t](i.extend(!0, {}, r.helpers[e].defaults, n), s)
                    }), a.trigger(t)
                }
            },
            isImage: function(t) {
                return u(t) && t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
            },
            isSWF: function(t) {
                return u(t) && t.match(/\.(swf)((\?|#).*)?$/i)
            },
            _start: function(t) {
                var e, n, s = {};
                if (t = f(t), !(e = r.group[t] || null)) return !1;
                if (e = (s = i.extend(!0, {}, r.opts, e)).margin, n = s.padding, "number" === i.type(e) && (s.margin = [e, e, e, e]), "number" === i.type(n) && (s.padding = [n, n, n, n]), s.modal && i.extend(!0, s, {
                        closeBtn: !1,
                        closeClick: !1,
                        nextClick: !1,
                        arrows: !1,
                        mouseWheel: !1,
                        keys: null,
                        helpers: {
                            overlay: {
                                closeClick: !1
                            }
                        }
                    }), s.autoSize && (s.autoWidth = s.autoHeight = !0), "auto" === s.width && (s.autoWidth = !0), "auto" === s.height && (s.autoHeight = !0), s.group = r.group, s.index = t, r.coming = s, !1 === r.trigger("beforeLoad")) r.coming = null;
                else {
                    if (n = s.type, e = s.href, !n) return r.coming = null, !(!r.current || !r.router || "jumpto" === r.router) && (r.current.index = t, r[r.router](r.direction));
                    if (r.isActive = !0, ("image" === n || "swf" === n) && (s.autoHeight = s.autoWidth = !1, s.scrolling = "visible"), "image" === n && (s.aspectRatio = !0), "iframe" === n && c && (s.scrolling = "scroll"), s.wrap = i(s.tpl.wrap).addClass("fancybox-" + (c ? "mobile" : "desktop") + " fancybox-type-" + n + " fancybox-tmp " + s.wrapCSS).appendTo(s.parent || "body"), i.extend(s, {
                            skin: i(".fancybox-skin", s.wrap),
                            outer: i(".fancybox-outer", s.wrap),
                            inner: i(".fancybox-inner", s.wrap)
                        }), i.each(["Top", "Right", "Bottom", "Left"], function(t, e) {
                            s.skin.css("padding" + e, m(s.padding[t]))
                        }), r.trigger("onReady"), "inline" === n || "html" === n) {
                        if (!s.content || !s.content.length) return r._error("content")
                    } else if (!e) return r._error("href");
                    "image" === n ? r._loadImage() : "ajax" === n ? r._loadAjax() : "iframe" === n ? r._loadIframe() : r._afterLoad()
                }
            },
            _error: function(t) {
                i.extend(r.coming, {
                    type: "html",
                    autoWidth: !0,
                    autoHeight: !0,
                    minWidth: 0,
                    minHeight: 0,
                    scrolling: "no",
                    hasError: t,
                    content: r.coming.tpl.error
                }), r._afterLoad()
            },
            _loadImage: function() {
                var t = r.imgPreload = new Image;
                t.onload = function() {
                    this.onload = this.onerror = null, r.coming.width = this.width / r.opts.pixelRatio, r.coming.height = this.height / r.opts.pixelRatio, r._afterLoad()
                }, t.onerror = function() {
                    this.onload = this.onerror = null, r._error("image")
                }, t.src = r.coming.href, !0 !== t.complete && r.showLoading()
            },
            _loadAjax: function() {
                var t = r.coming;
                r.showLoading(), r.ajaxLoad = i.ajax(i.extend({}, t.ajax, {
                    url: t.href,
                    error: function(t, e) {
                        r.coming && "abort" !== e ? r._error("ajax", t) : r.hideLoading()
                    },
                    success: function(e, i) {
                        "success" === i && (t.content = e, r._afterLoad())
                    }
                }))
            },
            _loadIframe: function() {
                var t = r.coming,
                    e = i(t.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", c ? "auto" : t.iframe.scrolling).attr("src", t.href);
                i(t.wrap).bind("onReset", function() {
                    try {
                        i(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                    } catch (t) {}
                }), t.iframe.preload && (r.showLoading(), e.one("load", function() {
                    i(this).data("ready", 1), c || i(this).bind("load.fb", r.update), i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), r._afterLoad()
                })), t.content = e.appendTo(t.inner), t.iframe.preload || r._afterLoad()
            },
            _preloadImages: function() {
                var t, e, i = r.group,
                    n = r.current,
                    s = i.length,
                    o = n.preload ? Math.min(n.preload, s - 1) : 0;
                for (e = 1; o >= e; e += 1) t = i[(n.index + e) % s], "image" === t.type && t.href && ((new Image).src = t.href)
            },
            _afterLoad: function () {
              var t, e, n, s, o, a = r.coming,
                l = r.current;

              if (r.hideLoading(), a && !1 !== r.isActive)
                if (!1 === r.trigger("afterLoad", a, l)) a.wrap.stop(!0).trigger("onReset").remove(), r.coming = null;
                else {
                  switch (l && (r.trigger("beforeChange", l), l.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), r.unbindEvents(), t = a.content, e = a.type, n = a.scrolling, i.extend(r, {
                    wrap: a.wrap,
                    skin: a.skin,
                    outer: a.outer,
                    inner: a.inner,
                    current: a,
                    previous: l
                  }), s = a.href, e) {
                    case "inline":
                    case "ajax":
                    case "html":
                      a.selector ? t = i("<div>").html(t).find(a.selector) : d(t) && (t.data("fancybox-placeholder") || t.data("fancybox-placeholder", i('<div class="fancybox-placeholder"></div>').insertAfter(t).hide()), t = t.show().detach(), a.wrap.bind("onReset", function () {
                        i(this).find(t).length && t.hide().replaceAll(t.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                      }));
                      break;
                    case "image":
                      t = a.tpl.image.replace("{href}", s);
                      break;
                    case "swf":
                      t = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + s + '"></param>', o = "", i.each(a.swf, function (e, i) {
                        t += '<param name="' + e + '" value="' + i + '"></param>', o += " " + e + '="' + i + '"'
                      }), t += '<embed src="' + s + '" type="application/x-shockwave-flash" width="100%" height="100%"' + o + "></embed></object>"
                  }
                  (!d(t) || !t.parent().is(a.inner)) && a.inner.append(t), r.trigger("beforeShow"), a.inner.css("overflow", "yes" === n ? "scroll" : "no" === n ? "hidden" : n), r._setDimension(), r.reposition(), r.isOpen = !1, r.coming = null, r.bindEvents(), r.isOpened ? l.prevMethod && r.transitions[l.prevMethod]() : i(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove(), r.transitions[r.isOpened ? a.nextMethod : a.openMethod](), r._preloadImages()
                }

              let parent = i(a.wrap).parent()
              if (parent.length) {
                parent[0].querySelector('.fancybox-prev') || i(a.tpl.prev).appendTo(parent).bind("click.fb", r.prev)
                parent[0].querySelector('.fancybox-next') || i(a.tpl.next).appendTo(parent).bind("click.fb", r.next)
                parent[0].querySelector('.fancybox-close') || a.closeBtn && i(a.tpl.closeBtn).appendTo(parent).bind("click.fb", function (t) {
                  t.preventDefault(), r.close()
                })
              }

            },
            _setDimension: function() {
                var t, e, n, s, o, a, l, h, c, d = r.getViewport(),
                    u = 0,
                    g = !1,
                    v = !1,
                    b = (g = r.wrap, r.skin),
                    y = r.inner,
                    _ = r.current,
                    x = (v = _.width, _.height),
                    w = _.minWidth,
                    k = _.minHeight,
                    C = _.maxWidth,
                    S = _.maxHeight,
                    D = _.scrolling,
                    T = _.scrollOutside ? _.scrollbarWidth : 0,
                    P = _.margin,
                    I = f(P[1] + P[3]),
                    E = f(P[0] + P[2]);
                if (g.add(b).add(y).width("auto").height("auto").removeClass("fancybox-tmp"), e = I + (P = f(b.outerWidth(!0) - b.width())), n = E + (t = f(b.outerHeight(!0) - b.height())), s = p(v) ? (d.w - e) * f(v) / 100 : v, o = p(x) ? (d.h - n) * f(x) / 100 : x, "iframe" === _.type) {
                    if (c = _.content, _.autoHeight && 1 === c.data("ready")) try {
                        c[0].contentWindow.document.location && (y.width(s).height(9999), a = c.contents().find("body"), T && a.css("overflow-x", "hidden"), o = a.outerHeight(!0))
                    } catch (t) {}
                } else(_.autoWidth || _.autoHeight) && (y.addClass("fancybox-tmp"), _.autoWidth || y.width(s), _.autoHeight || y.height(o), _.autoWidth && (s = y.width()), _.autoHeight && (o = y.height()), y.removeClass("fancybox-tmp"));
                if (v = f(s), x = f(o), h = s / o, w = f(p(w) ? f(w, "w") - e : w), C = f(p(C) ? f(C, "w") - e : C), k = f(p(k) ? f(k, "h") - n : k), a = C, l = S = f(p(S) ? f(S, "h") - n : S), _.fitToView && (C = Math.min(d.w - e, C), S = Math.min(d.h - n, S)), e = d.w - I, E = d.h - E, _.aspectRatio ? (v > C && (x = f((v = C) / h)), x > S && (v = f((x = S) * h)), w > v && (x = f((v = w) / h)), k > x && (v = f((x = k) * h))) : (v = Math.max(w, Math.min(v, C)), _.autoHeight && "iframe" !== _.type && (y.width(v), x = y.height()), x = Math.max(k, Math.min(x, S))), _.fitToView)
                    if (y.width(v).height(x), g.width(v + P), d = g.width(), I = g.height(), _.aspectRatio)
                        for (;
                            (d > e || I > E) && v > w && x > k && !(19 < u++);) x = Math.max(k, Math.min(S, x - 10)), v = f(x * h), w > v && (v = w, x = f(v / h)), v > C && (v = C, x = f(v / h)), y.width(v).height(x), g.width(v + P), d = g.width(), I = g.height();
                    else v = Math.max(w, Math.min(v, v - (d - e))), x = Math.max(k, Math.min(x, x - (I - E)));
                T && "auto" === D && o > x && e > v + P + T && (v += T), y.width(v).height(x), g.width(v + P), d = g.width(), I = g.height(), g = (d > e || I > E) && v > w && x > k, v = _.aspectRatio ? a > v && l > x && s > v && o > x : (a > v || l > x) && (s > v || o > x), i.extend(_, {
                    dim: {
                        width: m(d),
                        height: m(I)
                    },
                    origWidth: s,
                    origHeight: o,
                    canShrink: g,
                    canExpand: v,
                    wPadding: P,
                    hPadding: t,
                    wrapSpace: I - b.outerHeight(!0),
                    skinSpace: b.height() - x
                }), !c && _.autoHeight && x > k && S > x && !v && y.height("auto")
            },
            _getPosition: function(t) {
                var e = r.current,
                    i = r.getViewport(),
                    n = e.margin,
                    s = r.wrap.width() + n[1] + n[3],
                    o = r.wrap.height() + n[0] + n[2];
                n = {
                    position: "absolute",
                    top: n[0],
                    left: n[3]
                };
                return e.autoCenter && e.fixed && !t && o <= i.h && s <= i.w ? n.position = "fixed" : e.locked || (n.top += i.y, n.left += i.x), n.top = m(Math.max(n.top, n.top + (i.h - o) * e.topRatio)), n.left = m(Math.max(n.left, n.left + (i.w - s) * e.leftRatio)), n
            },
            _afterZoomIn: function() {
                var t = r.current;
                t && (r.isOpen = r.isOpened = !0, r.wrap.css("overflow", "visible").addClass("fancybox-opened"), r.update(), (t.closeClick || t.nextClick && 1 < r.group.length) && r.inner.css("cursor", "pointer").bind("click.fb", function(e) {
                    !i(e.target).is("a") && !i(e.target).parent().is("a") && (e.preventDefault(), r[t.closeClick ? "close" : "next"]())
                }), t.arrows && 1 < r.group.length && ((t.loop || 0 < t.index), (t.loop || t.index < r.group.length - 1)), r.trigger("afterShow"), t.loop || t.index !== t.group.length - 1 ? r.opts.autoPlay && !r.player.isActive && (r.opts.autoPlay = !1, r.play()) : r.play(!1))
            },
            _afterZoomOut: function(t) {
                t = t || r.current, i(".fancybox-wrap").trigger("onReset").remove(), i.extend(r, {
                    group: {},
                    opts: {},
                    router: !1,
                    current: null,
                    isActive: !1,
                    isOpened: !1,
                    isOpen: !1,
                    isClosing: !1,
                    wrap: null,
                    skin: null,
                    outer: null,
                    inner: null
                }), r.trigger("afterClose", t)
            }
        }), r.transitions = {
            getOrigPosition: function() {
                var t = r.current,
                    e = t.element,
                    i = t.orig,
                    n = {},
                    s = 50,
                    o = 50,
                    a = t.hPadding,
                    l = t.wPadding,
                    h = r.getViewport();
                return !i && t.isDom && e.is(":visible") && ((i = e.find("img:first")).length || (i = e)), d(i) ? (n = i.offset(), i.is("img") && (s = i.outerWidth(), o = i.outerHeight())) : (n.top = h.y + (h.h - o) * t.topRatio, n.left = h.x + (h.w - s) * t.leftRatio), ("fixed" === r.wrap.css("position") || t.locked) && (n.top -= h.y, n.left -= h.x), {
                    top: m(n.top - a * t.topRatio),
                    left: m(n.left - l * t.leftRatio),
                    width: m(s + l),
                    height: m(o + a)
                }
            },
            step: function(t, e) {
                var i, n, s = e.prop,
                    o = (n = r.current).wrapSpace,
                    a = n.skinSpace;
                ("width" === s || "height" === s) && (i = e.end === e.start ? 1 : (t - e.start) / (e.end - e.start), r.isClosing && (i = 1 - i), n = t - (n = "width" === s ? n.wPadding : n.hPadding), r.skin[s](f("width" === s ? n : n - o * i)), r.inner[s](f("width" === s ? n : n - o * i - a * i)))
            },
            zoomIn: function() {
                var t = r.current,
                    e = t.pos,
                    n = t.openEffect,
                    s = "elastic" === n,
                    o = i.extend({
                        opacity: 1
                    }, e);
                delete o.position, s ? (e = this.getOrigPosition(), t.openOpacity && (e.opacity = .1)) : "fade" === n && (e.opacity = .1), r.wrap.css(e).animate(o, {
                    duration: "none" === n ? 0 : t.openSpeed,
                    easing: t.openEasing,
                    step: s ? this.step : null,
                    complete: r._afterZoomIn
                })
            },
            zoomOut: function() {
                var t = r.current,
                    e = t.closeEffect,
                    i = "elastic" === e,
                    n = {
                        opacity: .1
                    };
                i && (n = this.getOrigPosition(), t.closeOpacity && (n.opacity = .1)), r.wrap.animate(n, {
                    duration: "none" === e ? 0 : t.closeSpeed,
                    easing: t.closeEasing,
                    step: i ? this.step : null,
                    complete: r._afterZoomOut
                })
            },
            changeIn: function() {
                var t, e = r.current,
                    i = e.nextEffect,
                    n = e.pos,
                    s = {
                        opacity: 1
                    },
                    o = r.direction;
                n.opacity = .1, "elastic" === i && (t = "down" === o || "up" === o ? "top" : "left", "down" === o || "right" === o ? (n[t] = m(f(n[t]) - 200), s[t] = "+=200px") : (n[t] = m(f(n[t]) + 200), s[t] = "-=200px")), "none" === i ? r._afterZoomIn() : r.wrap.css(n).animate(s, {
                    duration: e.nextSpeed,
                    easing: e.nextEasing,
                    complete: r._afterZoomIn
                })
            },
            changeOut: function() {
                var t = r.previous,
                    e = t.prevEffect,
                    n = {
                        opacity: .1
                    },
                    s = r.direction;
                "elastic" === e && (n["down" === s || "up" === s ? "top" : "left"] = ("up" === s || "left" === s ? "-" : "+") + "=200px"), t.wrap.animate(n, {
                    duration: "none" === e ? 0 : t.prevSpeed,
                    easing: t.prevEasing,
                    complete: function() {
                        i(this).trigger("onReset").remove()
                    }
                })
            }
        }, r.helpers.overlay = {
            defaults: {
                closeClick: !0,
                speedOut: 200,
                showEarly: !0,
                css: {},
                locked: !c,
                fixed: !0
            },
            overlay: null,
            fixed: !1,
            el: i("html"),
            create: function(t) {
                t = i.extend({}, this.defaults, t), this.overlay && this.close(), this.overlay = i('<div class="fancybox-overlay"></div>').appendTo(r.coming ? r.coming.parent : t.parent), this.fixed = !1, t.fixed && r.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
            },
            open: function(t) {
                var e = this;
                t = i.extend({}, this.defaults, t), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(t), this.fixed || (o.bind("resize.overlay", i.proxy(this.update, this)), this.update()), t.closeClick && this.overlay.bind("click.overlay", function(t) {
                    return i(t.target).hasClass("fancybox-overlay") ? (r.isActive ? r.close() : e.close(), !1) : void 0
                }), this.overlay.css(t.css).show()
            },
            close: function() {
                var t, e;
                o.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (i(".fancybox-margin").removeClass("fancybox-margin"), t = o.scrollTop(), e = o.scrollLeft(), this.el.removeClass("fancybox-lock"), o.scrollTop(t).scrollLeft(e)), i(".fancybox-overlay").remove().hide(), i.extend(this, {
                    overlay: null,
                    fixed: !1
                })
            },
            update: function() {
                var t, i = "100%";
                this.overlay.width(i).height("100%"), l ? (t = Math.max(e.documentElement.offsetWidth, e.body.offsetWidth), a.width() > t && (i = a.width())) : a.width() > o.width() && (i = a.width()), this.overlay.width(i).height(a.height())
            },
            onReady: function(t, e) {
                var n = this.overlay;
                i(".fancybox-overlay").stop(!0, !0), n || this.create(t), t.locked && this.fixed && e.fixed && (n || (this.margin = a.height() > o.height() && i("html").css("margin-right").replace("px", "")), e.locked = this.overlay.append(e.wrap), e.fixed = !1), !0 === t.showEarly && this.beforeShow.apply(this, arguments)
            },
            beforeShow: function(t, e) {
                var n, s;
                e.locked && (!1 !== this.margin && (i("*").filter(function() {
                    return "fixed" === i(this).css("position") && !i(this).hasClass("fancybox-overlay") && !i(this).hasClass("fancybox-wrap")
                }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), n = o.scrollTop(), s = o.scrollLeft(), this.el.addClass("fancybox-lock"), o.scrollTop(n).scrollLeft(s)), this.open(t)
            },
            onUpdate: function() {
                this.fixed || this.update()
            },
            afterClose: function(t) {
                this.overlay && !r.coming && this.overlay.fadeOut(t.speedOut, i.proxy(this.close, this))
            }
        }, r.helpers.title = {
            defaults: {
                type: "float",
                position: "bottom"
            },
            beforeShow: function(t) {
                var e = r.current,
                    n = e.title,
                    s = t.type;
                if (i.isFunction(n) && (n = n.call(e.element, e)), u(n) && "" !== i.trim(n)) {
                    switch (e = i('<div class="fancybox-title fancybox-title-' + s + '-wrap">' + n + "</div>"), s) {
                        case "inside":
                            s = r.skin;
                            break;
                        case "outside":
                            s = r.wrap;
                            break;
                        case "over":
                            s = r.inner;
                            break;
                        default:
                            s = r.skin, e.appendTo("body"), l && e.width(e.width()), e.wrapInner('<span class="child"></span>'), r.current.margin[2] += Math.abs(f(e.css("margin-bottom")))
                    }
                    e["top" === t.position ? "prependTo" : "appendTo"](s)
                }
            }
        }, i.fn.fancybox = function(t) {
            var e, n = i(this),
                s = this.selector || "",
                o = function(o) {
                    var a, l, h = i(this).blur(),
                        c = e;
                    !o.ctrlKey && !o.altKey && !o.shiftKey && !o.metaKey && !h.is(".fancybox-wrap") && (a = t.groupAttr || "data-fancybox-group", (l = h.attr(a)) || (a = "rel", l = h.get(0)[a]), l && "" !== l && "nofollow" !== l && (c = (h = (h = s.length ? i(s) : n).filter("[" + a + '="' + l + '"]')).index(this)), t.index = c, !1 !== r.open(h, t) && o.preventDefault())
                };
            return e = (t = t || {}).index || 0, s && !1 !== t.live ? a.undelegate(s, "click.fb-start").delegate(s + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", o) : n.unbind("click.fb-start").bind("click.fb-start", o), this.filter("[data-fancybox-start=1]").trigger("click"), this
        }, a.ready(function() {
            var e, o;
            if (i.scrollbarWidth === n && (i.scrollbarWidth = function() {
                    var t = i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                        e = (e = t.children()).innerWidth() - e.height(99).innerWidth();
                    return t.remove(), e
                }), i.support.fixedPosition === n) {
                e = i.support;
                var a = 20 === (o = i('<div style="position:fixed;top:20px;"></div>').appendTo("body"))[0].offsetTop || 15 === o[0].offsetTop;
                o.remove(), e.fixedPosition = a
            }
            i.extend(r.defaults, {
                scrollbarWidth: i.scrollbarWidth(),
                fixed: i.support.fixedPosition,
                parent: i("body")
            }), e = i(t).width(), s.addClass("fancybox-lock-test"), o = i(t).width(), s.removeClass("fancybox-lock-test"), i("<style type='text/css'>.fancybox-margin{margin-right:" + (o - e) + "px;}</style>").appendTo("head")
        })
    }(window, document, jQuery), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
! function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery),
function(t) {
    "use strict";
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            n = this;
        t(this).one("bsTransitionEnd", function() {
            i = !0
        });
        return setTimeout(function() {
            i || t(n).trigger(t.support.transition.end)
        }, e), this
    }, t(function() {
        t.support.transition = function() {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var i in e)
                if (void 0 !== t.style[i]) return {
                    end: e[i]
                };
            return !1
        }(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery),
function(t) {
    "use strict";
    var e = '[data-dismiss="alert"]',
        i = function(i) {
            t(i).on("click", e, this.close)
        };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
        function n() {
            a.detach().trigger("closed.bs.alert").remove()
        }
        var s = t(this),
            o = s.attr("data-target");
        o || (o = (o = s.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, ""));
        var a = t(o);
        e && e.preventDefault(), a.length || (a = s.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var n = t.fn.alert;
    t.fn.alert = function(e) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.alert");
            s || n.data("bs.alert", s = new i(this)), "string" == typeof e && s[e].call(n)
        })
    }, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
        return t.fn.alert = n, this
    }, t(document).on("click.bs.alert.data-api", e, i.prototype.close)
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.button"),
                o = "object" == typeof e && e;
            s || n.data("bs.button", s = new i(this, o)), "toggle" == e ? s.toggle() : e && s.setState(e)
        })
    }
    var i = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1
    };
    i.VERSION = "3.3.5", i.DEFAULTS = {
        loadingText: "loading..."
    }, i.prototype.setState = function(e) {
        var i = "disabled",
            n = this.$element,
            s = n.is("input") ? "val" : "html",
            o = n.data();
        e += "Text", null == o.resetText && n.data("resetText", n[s]()), setTimeout(t.proxy(function() {
            n[s](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i))
        }, this), 0)
    }, i.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var n = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
        return t.fn.button = n, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
        var n = t(i.target);
        n.hasClass("btn") || (n = n.closest(".btn")), e.call(n, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.carousel"),
                o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                a = "string" == typeof e ? e : o.slide;
            s || n.data("bs.carousel", s = new i(this, o)), "number" == typeof e ? s.to(e) : a ? s[a]() : o.interval && s.pause().cycle()
        })
    }
    var i = function(e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e);
        if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
        var n = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(n)
    }, i.prototype.to = function(t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, i.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, i.prototype.slide = function(e, n) {
        var s = this.$element.find(".item.active"),
            o = n || this.getItemForDirection(e, s),
            a = this.interval,
            r = "next" == e ? "left" : "right",
            l = this;
        if (o.hasClass("active")) return this.sliding = !1;
        var h = o[0],
            c = t.Event("slide.bs.carousel", {
                relatedTarget: h,
                direction: r
            });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = t(this.$indicators.children()[this.getItemIndex(o)]);
                d && d.addClass("active")
            }
            var u = t.Event("slid.bs.carousel", {
                relatedTarget: h,
                direction: r
            });
            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, s.addClass(r), o.addClass(r), s.one("bsTransitionEnd", function() {
                o.removeClass([e, r].join(" ")).addClass("active"), s.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(u)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (s.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(u)), a && this.cycle(), this
        }
    };
    var n = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = n, this
    };
    var s = function(i) {
        var n, s = t(this),
            o = t(s.attr("data-target") || (n = s.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var a = t.extend({}, o.data(), s.data()),
                r = s.attr("data-slide-to");
            r && (a.interval = !1), e.call(o, a), r && o.data("bs.carousel").to(r), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", s).on("click.bs.carousel.data-api", "[data-slide-to]", s), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(n)
    }

    function i(e) {
        return this.each(function() {
            var i = t(this),
                s = i.data("bs.collapse"),
                o = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            !s && o.toggle && /show|hide/.test(e) && (o.toggle = !1), s || i.data("bs.collapse", s = new n(this, o)), "string" == typeof e && s[e]()
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 350, n.DEFAULTS = {
        toggle: !0
    }, n.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }, n.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, s = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(s && s.length && (e = s.data("bs.collapse"), e && e.transitioning))) {
                var o = t.Event("show.bs.collapse");
                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                    s && s.length && (i.call(s, "hide"), e || s.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var r = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return r.call(this);
                    var l = t.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[a](this.$element[0][l])
                }
            }
        }
    }, n.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var s = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : s.call(this)
            }
        }
    }, n.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, n.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, n) {
            var s = t(n);
            this.addAriaAndCollapsedClass(e(s), s)
        }, this)).end()
    }, n.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var s = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = s, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
        var s = t(this);
        s.attr("data-target") || n.preventDefault();
        var o = e(s),
            a = o.data("bs.collapse") ? "toggle" : s.data();
        i.call(o, a)
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        var i = e.attr("data-target");
        i || (i = (i = e.attr("href")) && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var n = i && t(i);
        return n && n.length ? n : e.parent()
    }

    function i(i) {
        i && 3 === i.which || (t(n).remove(), t(s).each(function() {
            var n = t(this),
                s = e(n),
                o = {
                    relatedTarget: this
                };
            s.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(s[0], i.target) || (s.trigger(i = t.Event("hide.bs.dropdown", o)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), s.removeClass("open").trigger("hidden.bs.dropdown", o))))
        }))
    }
    var n = ".dropdown-backdrop",
        s = '[data-toggle="dropdown"]',
        o = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    o.VERSION = "3.3.5", o.prototype.toggle = function(n) {
        var s = t(this);
        if (!s.is(".disabled, :disabled")) {
            var o = e(s),
                a = o.hasClass("open");
            if (i(), !a) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var r = {
                    relatedTarget: this
                };
                if (o.trigger(n = t.Event("show.bs.dropdown", r)), n.isDefaultPrevented()) return;
                s.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger("shown.bs.dropdown", r)
            }
            return !1
        }
    }, o.prototype.keydown = function(i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var n = t(this);
            if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
                var o = e(n),
                    a = o.hasClass("open");
                if (!a && 27 != i.which || a && 27 == i.which) return 27 == i.which && o.find(s).trigger("focus"), n.trigger("click");
                var r = o.find(".dropdown-menu li:not(.disabled):visible a");
                if (r.length) {
                    var l = r.index(i.target);
                    38 == i.which && l > 0 && l--, 40 == i.which && l < r.length - 1 && l++, ~l || (l = 0), r.eq(l).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = function(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.dropdown");
            n || i.data("bs.dropdown", n = new o(this)), "string" == typeof e && n[e].call(i)
        })
    }, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, o.prototype.toggle).on("keydown.bs.dropdown.data-api", s, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown)
}(jQuery),
function(t) {
    "use strict";

    function e(e, n) {
        return this.each(function() {
            var s = t(this),
                o = s.data("bs.modal"),
                a = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e);
            o || s.data("bs.modal", o = new i(this, a)), "string" == typeof e ? o[e](n) : a.show && o.show(n)
        })
    }
    var i = function(e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function(e) {
        var n = this,
            s = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(s), this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            n.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var s = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), s && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
            var o = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            s ? n.$dialog.one("bsTransitionEnd", function() {
                n.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(o)
        }))
    }, i.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function(e) {
        var n = this,
            s = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && s;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + s).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function() {
                n.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
        } else e && e()
    }, i.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, i.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var n = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
        return t.fn.modal = n, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
        var n = t(this),
            s = n.attr("href"),
            o = t(n.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, "")),
            a = o.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(s) && s
            }, o.data(), n.data());
        n.is("a") && i.preventDefault(), o.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                n.is(":visible") && n.trigger("focus")
            })
        }), e.call(o, a, this)
    })
}(jQuery),
function(t) {
    "use strict";
    var e = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    e.VERSION = "3.3.5", e.TRANSITION_DURATION = 150, e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, e.prototype.init = function(e, i, n) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var s = this.options.trigger.split(" "), o = s.length; o--;) {
            var a = s[o];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != a) {
                var r = "hover" == a ? "mouseenter" : "focusin",
                    l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.getOptions = function(e) {
        return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, e.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function(t, n) {
            i[t] != n && (e[t] = n)
        }), e
    }, e.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, e.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, e.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide())
    }, e.prototype.show = function() {
        var i = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(i);
            var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (i.isDefaultPrevented() || !n) return;
            var s = this,
                o = this.tip(),
                a = this.getUID(this.type);
            this.setContent(), o.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && o.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                h = l.test(r);
            h && (r = r.replace(l, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(),
                d = o[0].offsetWidth,
                u = o[0].offsetHeight;
            if (h) {
                var p = r,
                    f = this.getPosition(this.$viewport);
                r = "bottom" == r && c.bottom + u > f.bottom ? "top" : "top" == r && c.top - u < f.top ? "bottom" : "right" == r && c.right + d > f.width ? "left" : "left" == r && c.left - d < f.left ? "right" : r, o.removeClass(p).addClass(r)
            }
            var m = this.getCalculatedOffset(r, c, d, u);
            this.applyPlacement(m, r);
            var g = function() {
                var t = s.hoverState;
                s.$element.trigger("shown.bs." + s.type), s.hoverState = null, "out" == t && s.leave(s)
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(e.TRANSITION_DURATION) : g()
        }
    }, e.prototype.applyPlacement = function(e, i) {
        var n = this.tip(),
            s = n[0].offsetWidth,
            o = n[0].offsetHeight,
            a = parseInt(n.css("margin-top"), 10),
            r = parseInt(n.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top += a, e.left += r, t.offset.setOffset(n[0], t.extend({
            using: function(t) {
                n.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), n.addClass("in");
        var l = n[0].offsetWidth,
            h = n[0].offsetHeight;
        "top" == i && h != o && (e.top = e.top + o - h);
        var c = this.getViewportAdjustedDelta(i, e, l, h);
        c.left ? e.left += c.left : e.top += c.top;
        var d = /top|bottom/.test(i),
            u = d ? 2 * c.left - s + l : 2 * c.top - o + h,
            p = d ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(u, n[0][p], d)
    }, e.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, e.prototype.hide = function(i) {
        function n() {
            "in" != s.hoverState && o.detach(), s.$element.removeAttr("aria-describedby").trigger("hidden.bs." + s.type), i && i()
        }
        var s = this,
            o = t(this.$tip),
            a = t.Event("hide.bs." + this.type);
        return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(e.TRANSITION_DURATION) : n(), this.hoverState = null, this)
    }, e.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, e.prototype.hasContent = function() {
        return this.getTitle()
    }, e.prototype.getPosition = function(e) {
        var i = (e = e || this.$element)[0],
            n = "BODY" == i.tagName,
            s = i.getBoundingClientRect();
        null == s.width && (s = t.extend({}, s, {
            width: s.right - s.left,
            height: s.bottom - s.top
        }));
        var o = n ? {
                top: 0,
                left: 0
            } : e.offset(),
            a = {
                scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            r = n ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, s, a, r, o)
    }, e.prototype.getCalculatedOffset = function(t, e, i, n) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - n,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - n / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - n / 2,
            left: e.left + e.width
        }
    }, e.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
        var s = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return s;
        var o = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var r = e.top - o - a.scroll,
                l = e.top + o - a.scroll + n;
            r < a.top ? s.top = a.top - r : l > a.top + a.height && (s.top = a.top + a.height - l)
        } else {
            var h = e.left - o,
                c = e.left + o + i;
            h < a.left ? s.left = a.left - h : c > a.right && (s.left = a.left + a.width - c)
        }
        return s
    }, e.prototype.getTitle = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, e.prototype.getUID = function(t) {
        do {
            t += ~~(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }, e.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, e.prototype.enable = function() {
        this.enabled = !0
    }, e.prototype.disable = function() {
        this.enabled = !1
    }, e.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, e.prototype.toggle = function(e) {
        var i = this;
        e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, e.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = function(i) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.tooltip"),
                o = "object" == typeof i && i;
            (s || !/destroy|hide/.test(i)) && (s || n.data("bs.tooltip", s = new e(this, o)), "string" == typeof i && s[i]())
        })
    }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i, this
    }
}(jQuery),
function(t) {
    "use strict";
    var e = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    e.VERSION = "3.3.5", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, e.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, e.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = function(i) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.popover"),
                o = "object" == typeof i && i;
            (s || !/destroy|hide/.test(i)) && (s || n.data("bs.popover", s = new e(this, o)), "string" == typeof i && s[i]())
        })
    }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() {
        return t.fn.popover = i, this
    }
}(jQuery),
function(t) {
    "use strict";

    function e(i, n) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.scrollspy"),
                o = "object" == typeof i && i;
            s || n.data("bs.scrollspy", s = new e(this, o)), "string" == typeof i && s[i]()
        })
    }
    e.VERSION = "3.3.5", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            i = "offset",
            n = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                s = e.data("target") || e.attr("href"),
                o = /^#./.test(s) && t(s);
            return o && o.length && o.is(":visible") && [
                [o[i]().top + n, s]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            n = this.options.offset + i - this.$scrollElement.height(),
            s = this.offsets,
            o = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= n) return a != (t = o[o.length - 1]) && this.activate(t);
        if (a && e < s[0]) return this.activeTarget = null, this.clear();
        for (t = s.length; t--;) a != o[t] && e >= s[t] && (void 0 === s[t + 1] || e < s[t + 1]) && this.activate(o[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            n = t(i).parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var n = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = n, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.tab");
            s || n.data("bs.tab", s = new i(this)), "string" == typeof e && s[e]()
        })
    }
    var i = function(e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            n = e.data("target");
        if (n || (n = (n = e.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var s = i.find(".active:last a"),
                o = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                a = t.Event("show.bs.tab", {
                    relatedTarget: s[0]
                });
            if (s.trigger(o), e.trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var r = t(n);
                this.activate(e.closest("li"), i), this.activate(r, r.parent(), function() {
                    s.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: s[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function(e, n, s) {
        function o() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), s && s()
        }
        var a = n.find("> .active"),
            r = s && t.support.transition && (a.length && a.hasClass("fade") || !!n.find("> .fade").length);
        a.length && r ? a.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), a.removeClass("in")
    };
    var n = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
        return t.fn.tab = n, this
    };
    var s = function(i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', s).on("click.bs.tab.data-api", '[data-toggle="pill"]', s)
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.affix"),
                o = "object" == typeof e && e;
            s || n.data("bs.affix", s = new i(this, o)), "string" == typeof e && s[e]()
        })
    }
    var i = function(e, n) {
        this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.5", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function(t, e, i, n) {
        var s = this.$target.scrollTop(),
            o = this.$element.offset(),
            a = this.$target.height();
        if (null != i && "top" == this.affixed) return i > s && "top";
        if ("bottom" == this.affixed) return null != i ? !(s + this.unpin <= o.top) && "bottom" : !(t - n >= s + a) && "bottom";
        var r = null == this.affixed,
            l = r ? s : o.top;
        return null != i && i >= s ? "top" : null != n && l + (r ? a : e) >= t - n && "bottom"
    }, i.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                n = this.options.offset,
                s = n.top,
                o = n.bottom,
                a = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof n && (o = s = n), "function" == typeof s && (s = n.top(this.$element)), "function" == typeof o && (o = n.bottom(this.$element));
            var r = this.getState(a, e, s, o);
            if (this.affixed != r) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (r ? "-" + r : ""),
                    h = t.Event(l + ".bs.affix");
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == r && this.$element.offset({
                top: a - e - o
            })
        }
    };
    var n = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
        return t.fn.affix = n, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var i = t(this),
                n = i.data();
            n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
        })
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.carousel"),
                o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                a = "string" == typeof e ? e : o.slide;
            s || n.data("bs.carousel", s = new i(this, o)), "number" == typeof e ? s.to(e) : a ? s[a]() : o.interval && s.pause().cycle()
        })
    }
    var i = function(e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e);
        if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
        var n = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(n)
    }, i.prototype.to = function(t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, i.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, i.prototype.slide = function(e, n) {
        var s = this.$element.find(".item.active"),
            o = n || this.getItemForDirection(e, s),
            a = this.interval,
            r = "next" == e ? "left" : "right",
            l = this;
        if (o.hasClass("active")) return this.sliding = !1;
        var h = o[0],
            c = t.Event("slide.bs.carousel", {
                relatedTarget: h,
                direction: r
            });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = t(this.$indicators.children()[this.getItemIndex(o)]);
                d && d.addClass("active")
            }
            var u = t.Event("slid.bs.carousel", {
                relatedTarget: h,
                direction: r
            });
            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, s.addClass(r), o.addClass(r), s.one("bsTransitionEnd", function() {
                o.removeClass([e, r].join(" ")).addClass("active"), s.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(u)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (s.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(u)), a && this.cycle(), this
        }
    };
    var n = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = n, this
    };
    var s = function(i) {
        var n, s = t(this),
            o = t(s.attr("data-target") || (n = s.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var a = t.extend({}, o.data(), s.data()),
                r = s.attr("data-slide-to");
            r && (a.interval = !1), e.call(o, a), r && o.data("bs.carousel").to(r), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", s).on("click.bs.carousel.data-api", "[data-slide-to]", s), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return t.each([{
            re: /[\xC0-\xC6]/g,
            ch: "A"
        }, {
            re: /[\xE0-\xE6]/g,
            ch: "a"
        }, {
            re: /[\xC8-\xCB]/g,
            ch: "E"
        }, {
            re: /[\xE8-\xEB]/g,
            ch: "e"
        }, {
            re: /[\xCC-\xCF]/g,
            ch: "I"
        }, {
            re: /[\xEC-\xEF]/g,
            ch: "i"
        }, {
            re: /[\xD2-\xD6]/g,
            ch: "O"
        }, {
            re: /[\xF2-\xF6]/g,
            ch: "o"
        }, {
            re: /[\xD9-\xDC]/g,
            ch: "U"
        }, {
            re: /[\xF9-\xFC]/g,
            ch: "u"
        }, {
            re: /[\xC7-\xE7]/g,
            ch: "c"
        }, {
            re: /[\xD1]/g,
            ch: "N"
        }, {
            re: /[\xF1]/g,
            ch: "n"
        }], function() {
            e = e.replace(this.re, this.ch)
        }), e
    }

    function i(t) {
        var e = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            i = "(?:" + Object.keys(e).join("|") + ")",
            n = new RegExp(i),
            s = new RegExp(i, "g"),
            o = null == t ? "" : "" + t;
        return n.test(o) ? o.replace(s, function(t) {
            return e[t]
        }) : o
    }

    function n(e, i) {
        var n = arguments,
            s = e,
            o = i;
        [].shift.apply(n);
        var a, r = this.each(function() {
            var e = t(this);
            if (e.is("select")) {
                var i = e.data("selectpicker"),
                    r = "object" == typeof s && s;
                if (i) {
                    if (r)
                        for (var l in r) r.hasOwnProperty(l) && (i.options[l] = r[l])
                } else {
                    var h = t.extend({}, d.DEFAULTS, t.fn.selectpicker.defaults || {}, e.data(), r);
                    h.template = t.extend({}, d.DEFAULTS.template, t.fn.selectpicker.defaults ? t.fn.selectpicker.defaults.template : {}, e.data().template, r.template), e.data("selectpicker", i = new d(this, h, o))
                }
                "string" == typeof s && (a = i[s] instanceof Function ? i[s].apply(i, n) : i.options[s])
            }
        });
        return void 0 !== a ? a : r
    }
    var s, o, a, r, l, h, c;
    String.prototype.includes || (r = {}.toString, l = function() {
        try {
            var t = {},
                e = Object.defineProperty,
                i = e(t, t, t) && e
        } catch (t) {}
        return i
    }(), h = "".indexOf, c = function(t) {
        if (null == this) throw new TypeError;
        var e = String(this);
        if (t && "[object RegExp]" == r.call(t)) throw new TypeError;
        var i = e.length,
            n = String(t),
            s = n.length,
            o = arguments.length > 1 ? arguments[1] : void 0,
            a = o ? Number(o) : 0;
        return a != a && (a = 0), !(s + Math.min(Math.max(a, 0), i) > i) && -1 != h.call(e, n, a)
    }, l ? l(String.prototype, "includes", {
        value: c,
        configurable: !0,
        writable: !0
    }) : String.prototype.includes = c), String.prototype.startsWith || (s = function() {
        try {
            var t = {},
                e = Object.defineProperty,
                i = e(t, t, t) && e
        } catch (t) {}
        return i
    }(), o = {}.toString, a = function(t) {
        if (null == this) throw new TypeError;
        var e = String(this);
        if (t && "[object RegExp]" == o.call(t)) throw new TypeError;
        var i = e.length,
            n = String(t),
            s = n.length,
            a = arguments.length > 1 ? arguments[1] : void 0,
            r = a ? Number(a) : 0;
        r != r && (r = 0);
        var l = Math.min(Math.max(r, 0), i);
        if (s + l > i) return !1;
        for (var h = -1; ++h < s;)
            if (e.charCodeAt(l + h) != n.charCodeAt(h)) return !1;
        return !0
    }, s ? s(String.prototype, "startsWith", {
        value: a,
        configurable: !0,
        writable: !0
    }) : String.prototype.startsWith = a), Object.keys || (Object.keys = function(t, e, i) {
        i = [];
        for (e in t) i.hasOwnProperty.call(t, e) && i.push(e);
        return i
    }), t.fn.triggerNative = function(t) {
        var e, i = this[0];
        i.dispatchEvent ? ("function" == typeof Event ? e = new Event(t, {
            bubbles: !0
        }) : (e = document.createEvent("Event")).initEvent(t, !0, !1), i.dispatchEvent(e)) : (i.fireEvent && ((e = document.createEventObject()).eventType = t, i.fireEvent("on" + t, e)), this.trigger(t))
    }, t.expr[":"].icontains = function(e, i, n) {
        var s = t(e);
        return (s.data("tokens") || s.text()).toUpperCase().includes(n[3].toUpperCase())
    }, t.expr[":"].ibegins = function(e, i, n) {
        var s = t(e);
        return (s.data("tokens") || s.text()).toUpperCase().startsWith(n[3].toUpperCase())
    }, t.expr[":"].aicontains = function(e, i, n) {
        var s = t(e);
        return (s.data("tokens") || s.data("normalizedText") || s.text()).toUpperCase().includes(n[3].toUpperCase())
    }, t.expr[":"].aibegins = function(e, i, n) {
        var s = t(e);
        return (s.data("tokens") || s.data("normalizedText") || s.text()).toUpperCase().startsWith(n[3].toUpperCase())
    };
    var d = function(e, i, n) {
        n && (n.stopPropagation(), n.preventDefault()), this.$element = t(e), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = i, null === this.options.title && (this.options.title = this.$element.attr("title")), this.val = d.prototype.val, this.render = d.prototype.render, this.refresh = d.prototype.refresh, this.setStyle = d.prototype.setStyle, this.selectAll = d.prototype.selectAll, this.deselectAll = d.prototype.deselectAll, this.destroy = d.prototype.remove, this.remove = d.prototype.remove, this.show = d.prototype.show, this.hide = d.prototype.hide, this.init()
    };
    d.VERSION = "1.7.5", d.DEFAULTS = {
        noneSelectedText: "Nothing selected",
        noneResultsText: "No results matched {0}",
        countSelectedText: function(t, e) {
            return 1 == t ? "{0} item selected" : "{0} items selected"
        },
        maxOptionsText: function(t, e) {
            return [1 == t ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == e ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
        },
        selectAllText: "Select All",
        deselectAllText: "Deselect All",
        doneButton: !1,
        doneButtonText: "Close",
        multipleSeparator: ", ",
        styleBase: "btn",
        style: "btn-default",
        size: "auto",
        title: null,
        selectedTextFormat: "values",
        width: !1,
        container: !1,
        hideDisabled: !1,
        showSubtext: !1,
        showIcon: !0,
        showContent: !0,
        dropupAuto: !0,
        header: !1,
        liveSearch: !1,
        liveSearchPlaceholder: null,
        liveSearchNormalize: !1,
        liveSearchStyle: "contains",
        actionsBox: !1,
        iconBase: "glyphicon",
        tickIcon: "glyphicon-ok",
        template: {
            caret: '<span class="caret"></span>'
        },
        maxOptions: !1,
        mobile: !1,
        selectOnTab: !1,
        dropdownAlignRight: !1
    }, d.prototype = {
        constructor: d,
        init: function() {
            var e = this,
                i = this.$element.attr("id");
            this.$element.addClass("bs-select-hidden"), this.liObj = {}, this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(".dropdown-menu"), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-right"), void 0 !== i && (this.$button.attr("data-id", i), t('label[for="' + i + '"]').click(function(t) {
                t.preventDefault(), e.$button.focus()
            })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({
                "hide.bs.dropdown": function(t) {
                    e.$element.trigger("hide.bs.select", t)
                },
                "hidden.bs.dropdown": function(t) {
                    e.$element.trigger("hidden.bs.select", t)
                },
                "show.bs.dropdown": function(t) {
                    e.$element.trigger("show.bs.select", t)
                },
                "shown.bs.dropdown": function(t) {
                    e.$element.trigger("shown.bs.select", t)
                }
            }), setTimeout(function() {
                e.$element.trigger("loaded.bs.select")
            })
        },
        createDropdown: function() {
            var e = this.multiple ? " show-tick" : "",
                n = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
                s = this.autofocus ? " autofocus" : "",
                o = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
                a = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + i(this.options.liveSearchPlaceholder) + '"') + "></div>" : "",
                r = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : "",
                l = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : "",
                h = '<div class="btn-group bootstrap-select' + e + n + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + s + '><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">' + this.options.template.caret + '</span></button><div class="dropdown-menu open">' + o + a + r + '<ul class="dropdown-menu inner" role="menu"></ul>' + l + "</div></div>";
            return t(h)
        },
        createView: function() {
            var t = this.createDropdown(),
                e = this.createLi();
            return t.find("ul")[0].innerHTML = e, t
        },
        reloadLi: function() {
            this.destroyLi();
            var t = this.createLi();
            this.$menuInner[0].innerHTML = t
        },
        destroyLi: function() {
            this.$menu.find("li").remove()
        },
        createLi: function() {
            var n = this,
                s = [],
                o = 0,
                a = document.createElement("option"),
                r = -1,
                l = function(t, e, i, n) {
                    return "<li" + (void 0 !== i & "" !== i ? ' class="' + i + '"' : "") + (void 0 !== e & null !== e ? ' data-original-index="' + e + '"' : "") + (void 0 !== n & null !== n ? 'data-optgroup="' + n + '"' : "") + ">" + t + "</li>"
                },
                h = function(t, s, o, a) {
                    return '<a tabindex="0"' + (void 0 !== s ? ' class="' + s + '"' : "") + (void 0 !== o ? ' style="' + o + '"' : "") + (n.options.liveSearchNormalize ? ' data-normalized-text="' + e(i(t)) + '"' : "") + (void 0 !== a || null !== a ? ' data-tokens="' + a + '"' : "") + ">" + t + '<span class="' + n.options.iconBase + " " + n.options.tickIcon + ' check-mark"></span></a>'
                };
            if (this.options.title && !this.multiple && (r--, !this.$element.find(".bs-title-option").length)) {
                var c = this.$element[0];
                a.className = "bs-title-option", a.appendChild(document.createTextNode(this.options.title)), a.value = "", c.insertBefore(a, c.firstChild), void 0 === t(c.options[c.selectedIndex]).attr("selected") && (a.selected = !0)
            }
            return this.$element.find("option").each(function(e) {
                var i = t(this);
                if (r++, !i.hasClass("bs-title-option")) {
                    var a = this.className || "",
                        c = this.style.cssText,
                        d = i.data("content") ? i.data("content") : i.html(),
                        u = i.data("tokens") ? i.data("tokens") : null,
                        p = void 0 !== i.data("subtext") ? '<small class="text-muted">' + i.data("subtext") + "</small>" : "",
                        f = void 0 !== i.data("icon") ? '<span class="' + n.options.iconBase + " " + i.data("icon") + '"></span> ' : "",
                        m = this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled;
                    if ("" !== f && m && (f = "<span>" + f + "</span>"), n.options.hideDisabled && m) return void r--;
                    if (i.data("content") || (d = f + '<span class="text">' + d + p + "</span>"), "OPTGROUP" === this.parentNode.tagName && !0 !== i.data("divider")) {
                        var g = " " + this.parentNode.className || "";
                        if (0 === i.index()) {
                            o += 1;
                            var v = this.parentNode.label,
                                b = void 0 !== i.parent().data("subtext") ? '<small class="text-muted">' + i.parent().data("subtext") + "</small>" : "";
                            v = (i.parent().data("icon") ? '<span class="' + n.options.iconBase + " " + i.parent().data("icon") + '"></span> ' : "") + '<span class="text">' + v + b + "</span>", 0 !== e && s.length > 0 && (r++, s.push(l("", null, "divider", o + "div"))), r++, s.push(l(v, null, "dropdown-header" + g, o))
                        }
                        s.push(l(h(d, "opt " + a + g, c, u), e, "", o))
                    } else !0 === i.data("divider") ? s.push(l("", e, "divider")) : !0 === i.data("hidden") ? s.push(l(h(d, a, c, u), e, "hidden is-hidden")) : (this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName && (r++, s.push(l("", null, "divider", o + "div"))), s.push(l(h(d, a, c, u), e)));
                    n.liObj[e] = r
                }
            }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), s.join("")
        },
        findLis: function() {
            return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis
        },
        render: function(e) {
            var i, n = this;
            !1 !== e && this.$element.find("option").each(function(t) {
                var e = n.findLis().eq(n.liObj[t]);
                n.setDisabled(t, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, e), n.setSelected(t, this.selected, e)
            }), this.tabIndex();
            var s = this.$element.find("option").map(function() {
                    if (this.selected) {
                        if (n.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled)) return;
                        var e, i = t(this),
                            s = i.data("icon") && n.options.showIcon ? '<i class="' + n.options.iconBase + " " + i.data("icon") + '"></i> ' : "";
                        return e = n.options.showSubtext && i.data("subtext") && !n.multiple ? ' <small class="text-muted">' + i.data("subtext") + "</small>" : "", void 0 !== i.attr("title") ? i.attr("title") : i.data("content") && n.options.showContent ? i.data("content") : s + i.html() + e
                    }
                }).toArray(),
                o = this.multiple ? s.join(this.options.multipleSeparator) : s[0];
            if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
                var a = this.options.selectedTextFormat.split(">");
                if (a.length > 1 && s.length > a[1] || 1 == a.length && s.length >= 2) {
                    i = this.options.hideDisabled ? ", [disabled]" : "";
                    var r = this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]' + i).length;
                    o = ("function" == typeof this.options.countSelectedText ? this.options.countSelectedText(s.length, r) : this.options.countSelectedText).replace("{0}", s.length.toString()).replace("{1}", r.toString())
                }
            }
            void 0 == this.options.title && (this.options.title = this.$element.attr("title")), "static" == this.options.selectedTextFormat && (o = this.options.title), o || (o = void 0 !== this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", t.trim(o.replace(/<[^>]*>?/g, ""))), this.$button.children(".filter-option").html(o), this.$element.trigger("rendered.bs.select")
        },
        setStyle: function(t, e) {
            this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
            var i = t || this.options.style;
            "add" == e ? this.$button.addClass(i) : "remove" == e ? this.$button.removeClass(i) : (this.$button.removeClass(this.options.style), this.$button.addClass(i))
        },
        liHeight: function(e) {
            if (e || !1 !== this.options.size && !this.sizeInfo) {
                var i = document.createElement("div"),
                    n = document.createElement("div"),
                    s = document.createElement("ul"),
                    o = document.createElement("li"),
                    a = document.createElement("li"),
                    r = document.createElement("a"),
                    l = document.createElement("span"),
                    h = this.options.header ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
                    c = this.options.liveSearch ? document.createElement("div") : null,
                    d = this.options.actionsBox && this.multiple ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
                    u = this.options.doneButton && this.multiple ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
                if (l.className = "text", i.className = this.$menu[0].parentNode.className + " open", n.className = "dropdown-menu open", s.className = "dropdown-menu inner", o.className = "divider", l.appendChild(document.createTextNode("Inner text")), r.appendChild(l), a.appendChild(r), s.appendChild(a), s.appendChild(o), h && n.appendChild(h), c) {
                    var p = document.createElement("span");
                    c.className = "bs-searchbox", p.className = "form-control", c.appendChild(p), n.appendChild(c)
                }
                d && n.appendChild(d), n.appendChild(s), u && n.appendChild(u), i.appendChild(n), document.body.appendChild(i);
                var f = r.offsetHeight,
                    m = h ? h.offsetHeight : 0,
                    g = c ? c.offsetHeight : 0,
                    v = d ? d.offsetHeight : 0,
                    b = u ? u.offsetHeight : 0,
                    y = t(o).outerHeight(!0),
                    _ = "function" == typeof getComputedStyle && getComputedStyle(n),
                    x = _ ? null : t(n),
                    w = parseInt(_ ? _.paddingTop : x.css("paddingTop")) + parseInt(_ ? _.paddingBottom : x.css("paddingBottom")) + parseInt(_ ? _.borderTopWidth : x.css("borderTopWidth")) + parseInt(_ ? _.borderBottomWidth : x.css("borderBottomWidth")),
                    k = w + parseInt(_ ? _.marginTop : x.css("marginTop")) + parseInt(_ ? _.marginBottom : x.css("marginBottom")) + 2;
                document.body.removeChild(i), this.sizeInfo = {
                    liHeight: f,
                    headerHeight: m,
                    searchHeight: g,
                    actionsHeight: v,
                    doneButtonHeight: b,
                    dividerHeight: y,
                    menuPadding: w,
                    menuExtras: k
                }
            }
        },
        setSize: function() {
            if (this.findLis(), this.liHeight(), this.options.header && this.$menu.css("padding-top", 0), !1 !== this.options.size) {
                var e, i, n, s, o = this,
                    a = this.$menu,
                    r = this.$menuInner,
                    l = t(window),
                    h = this.$newElement[0].offsetHeight,
                    c = this.sizeInfo.liHeight,
                    d = this.sizeInfo.headerHeight,
                    u = this.sizeInfo.searchHeight,
                    p = this.sizeInfo.actionsHeight,
                    f = this.sizeInfo.doneButtonHeight,
                    m = this.sizeInfo.dividerHeight,
                    g = this.sizeInfo.menuPadding,
                    v = this.sizeInfo.menuExtras,
                    b = this.options.hideDisabled ? ".disabled" : "",
                    y = function() {
                        n = o.$newElement.offset().top - l.scrollTop(), s = l.height() - n - h
                    };
                if (y(), "auto" === this.options.size) {
                    var _ = function() {
                        var l, h = function(e, i) {
                                return function(n) {
                                    return i ? n.classList ? n.classList.contains(e) : t(n).hasClass(e) : !(n.classList ? n.classList.contains(e) : t(n).hasClass(e))
                                }
                            },
                            m = o.$menuInner[0].getElementsByTagName("li"),
                            b = Array.prototype.filter ? Array.prototype.filter.call(m, h("hidden", !1)) : o.$lis.not(".hidden"),
                            _ = Array.prototype.filter ? Array.prototype.filter.call(b, h("dropdown-header", !0)) : b.filter(".dropdown-header");
                        y(), e = s - v, o.options.container ? (a.data("height") || a.data("height", a.height()), i = a.data("height")) : i = a.height(), o.options.dropupAuto && o.$newElement.toggleClass("dropup", n > s && i > e - v), o.$newElement.hasClass("dropup") && (e = n - v), l = b.length + _.length > 3 ? 3 * c + v - 2 : 0, a.css({
                            "max-height": e + "px",
                            overflow: "hidden",
                            "min-height": l + d + u + p + f + "px"
                        }), r.css({
                            "max-height": e - d - u - p - f - g + "px",
                            "overflow-y": "auto",
                            "min-height": Math.max(l - g, 0) + "px"
                        })
                    };
                    _(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", _), l.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", _)
                } else if (this.options.size && "auto" != this.options.size && this.$lis.not(b).length > this.options.size) {
                    var x = this.$lis.not(".divider").not(b).children().slice(0, this.options.size).last().parent().index(),
                        w = this.$lis.slice(0, x + 1).filter(".divider").length;
                    e = c * this.options.size + w * m + g, o.options.container ? (a.data("height") || a.data("height", a.height()), i = a.data("height")) : i = a.height(), o.options.dropupAuto && this.$newElement.toggleClass("dropup", n > s && i > e - v), a.css({
                        "max-height": e + d + u + p + f + "px",
                        overflow: "hidden",
                        "min-height": ""
                    }), r.css({
                        "max-height": e - g + "px",
                        "overflow-y": "auto",
                        "min-height": ""
                    })
                }
            }
        },
        setWidth: function() {
            if ("auto" === this.options.width) {
                this.$menu.css("min-width", "0");
                var t = this.$menu.parent().clone().appendTo("body"),
                    e = this.options.container ? this.$newElement.clone().appendTo("body") : t,
                    i = t.children(".dropdown-menu").outerWidth(),
                    n = e.css("width", "auto").children("button").outerWidth();
                t.remove(), e.remove(), this.$newElement.css("width", Math.max(i, n) + "px")
            } else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
            this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
        },
        selectPosition: function() {
            var e, i, n = this,
                s = t('<div class="bs-container" />'),
                o = function(t) {
                    s.addClass(t.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", t.hasClass("dropup")), e = t.offset(), i = t.hasClass("dropup") ? 0 : t[0].offsetHeight, s.css({
                        top: e.top + i,
                        left: e.left,
                        width: t[0].offsetWidth
                    })
                };
            this.$newElement.on("click", function() {
                n.isDisabled() || (o(t(this)), s.appendTo(n.options.container), s.toggleClass("open", !t(this).hasClass("open")), s.append(n.$menu))
            }), t(window).on("resize scroll", function() {
                o(n.$newElement)
            }), this.$element.on("hide.bs.select", function() {
                n.$menu.data("height", n.$menu.height()), s.detach()
            })
        },
        setSelected: function(t, e, i) {
            i || (i = this.findLis().eq(this.liObj[t])), i.toggleClass("selected", e)
        },
        setDisabled: function(t, e, i) {
            i || (i = this.findLis().eq(this.liObj[t])), e ? i.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1) : i.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0)
        },
        isDisabled: function() {
            return this.$element[0].disabled
        },
        checkDisabled: function() {
            var t = this;
            this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled")), -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.click(function() {
                return !t.isDisabled()
            })
        },
        tabIndex: function() {
            this.$element.is("[tabindex]") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex")))
        },
        clickListener: function() {
            var e = this,
                i = t(document);
            this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function(t) {
                t.stopPropagation()
            }), i.data("spaceSelect", !1), this.$button.on("keyup", function(t) {
                /(32)/.test(t.keyCode.toString(10)) && i.data("spaceSelect") && (t.preventDefault(), i.data("spaceSelect", !1))
            }), this.$newElement.on("click", function() {
                e.setSize(), e.$element.on("shown.bs.select", function() {
                    if (e.options.liveSearch || e.multiple) {
                        if (!e.multiple) {
                            var t = e.liObj[e.$element[0].selectedIndex];
                            if ("number" != typeof t || !1 === e.options.size) return;
                            var i = e.$lis.eq(t)[0].offsetTop - e.$menuInner[0].offsetTop;
                            i = i - e.$menuInner[0].offsetHeight / 2 + e.sizeInfo.liHeight / 2, e.$menuInner[0].scrollTop = i
                        }
                    } else e.$menuInner.find(".selected a").focus()
                })
            }), this.$menuInner.on("click", "li a", function(i) {
                var n = t(this),
                    s = n.parent().data("originalIndex"),
                    o = e.$element.val(),
                    a = e.$element.prop("selectedIndex");
                if (e.multiple && i.stopPropagation(), i.preventDefault(), !e.isDisabled() && !n.parent().hasClass("disabled")) {
                    var r = e.$element.find("option"),
                        l = r.eq(s),
                        h = l.prop("selected"),
                        c = l.parent("optgroup"),
                        d = e.options.maxOptions,
                        u = c.data("maxOptions") || !1;
                    if (e.multiple) {
                        if (l.prop("selected", !h), e.setSelected(s, !h), n.blur(), !1 !== d || !1 !== u) {
                            var p = d < r.filter(":selected").length,
                                f = u < c.find("option:selected").length;
                            if (d && p || u && f)
                                if (d && 1 == d) r.prop("selected", !1), l.prop("selected", !0), e.$menuInner.find(".selected").removeClass("selected"), e.setSelected(s, !0);
                                else if (u && 1 == u) {
                                c.find("option:selected").prop("selected", !1), l.prop("selected", !0);
                                var m = n.parent().data("optgroup");
                                e.$menuInner.find('[data-optgroup="' + m + '"]').removeClass("selected"), e.setSelected(s, !0)
                            } else {
                                var g = "function" == typeof e.options.maxOptionsText ? e.options.maxOptionsText(d, u) : e.options.maxOptionsText,
                                    v = g[0].replace("{n}", d),
                                    b = g[1].replace("{n}", u),
                                    y = t('<div class="notify"></div>');
                                g[2] && (v = v.replace("{var}", g[2][d > 1 ? 0 : 1]), b = b.replace("{var}", g[2][u > 1 ? 0 : 1])), l.prop("selected", !1), e.$menu.append(y), d && p && (y.append(t("<div>" + v + "</div>")), e.$element.trigger("maxReached.bs.select")), u && f && (y.append(t("<div>" + b + "</div>")), e.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function() {
                                    e.setSelected(s, !1)
                                }, 10), y.delay(750).fadeOut(300, function() {
                                    t(this).remove()
                                })
                            }
                        }
                    } else r.prop("selected", !1), l.prop("selected", !0), e.$menuInner.find(".selected").removeClass("selected"), e.setSelected(s, !0);
                    e.multiple ? e.options.liveSearch && e.$searchbox.focus() : e.$button.focus(), (o != e.$element.val() && e.multiple || a != e.$element.prop("selectedIndex") && !e.multiple) && (e.$element.triggerNative("change"), e.$element.trigger("changed.bs.select", [s, l.prop("selected"), h]))
                }
            }), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function(i) {
                i.currentTarget == this && (i.preventDefault(), i.stopPropagation(), e.options.liveSearch && !t(i.target).hasClass("close") ? e.$searchbox.focus() : e.$button.focus())
            }), this.$menuInner.on("click", ".divider, .dropdown-header", function(t) {
                t.preventDefault(), t.stopPropagation(), e.options.liveSearch ? e.$searchbox.focus() : e.$button.focus()
            }), this.$menu.on("click", ".popover-title .close", function() {
                e.$button.click()
            }), this.$searchbox.on("click", function(t) {
                t.stopPropagation()
            }), this.$menu.on("click", ".actions-btn", function(i) {
                e.options.liveSearch ? e.$searchbox.focus() : e.$button.focus(), i.preventDefault(), i.stopPropagation(), t(this).hasClass("bs-select-all") ? e.selectAll() : e.deselectAll(), e.$element.triggerNative("change")
            }), this.$element.change(function() {
                e.render(!1)
            })
        },
        liveSearchListener: function() {
            var n = this,
                s = t('<li class="no-results"></li>');
            this.$newElement.on("click.dropdown.data-api touchstart.dropdown.data-api", function() {
                n.$menuInner.find(".active").removeClass("active"), n.$searchbox.val() && (n.$searchbox.val(""), n.$lis.not(".is-hidden").removeClass("hidden"), s.parent().length && s.remove()), n.multiple || n.$menuInner.find(".selected").addClass("active"), setTimeout(function() {
                    n.$searchbox.focus()
                }, 10)
            }), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function(t) {
                t.stopPropagation()
            }), this.$searchbox.on("input propertychange", function() {
                if (n.$searchbox.val()) {
                    var o = n.$lis.not(".is-hidden").removeClass("hidden").children("a");
                    (o = n.options.liveSearchNormalize ? o.not(":a" + n._searchStyle() + '("' + e(n.$searchbox.val()) + '")') : o.not(":" + n._searchStyle() + '("' + n.$searchbox.val() + '")')).parent().addClass("hidden"), n.$lis.filter(".dropdown-header").each(function() {
                        var e = t(this),
                            i = e.data("optgroup");
                        0 === n.$lis.filter("[data-optgroup=" + i + "]").not(e).not(".hidden").length && (e.addClass("hidden"), n.$lis.filter("[data-optgroup=" + i + "div]").addClass("hidden"))
                    });
                    var a = n.$lis.not(".hidden");
                    a.each(function(e) {
                        var i = t(this);
                        i.hasClass("divider") && (i.index() === a.first().index() || i.index() === a.last().index() || a.eq(e + 1).hasClass("divider")) && i.addClass("hidden")
                    }), n.$lis.not(".hidden, .no-results").length ? s.parent().length && s.remove() : (s.parent().length && s.remove(), s.html(n.options.noneResultsText.replace("{0}", '"' + i(n.$searchbox.val()) + '"')).show(), n.$menuInner.append(s))
                } else n.$lis.not(".is-hidden").removeClass("hidden"), s.parent().length && s.remove();
                n.$lis.filter(".active").removeClass("active"), n.$searchbox.val() && n.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(), t(this).focus()
            })
        },
        _searchStyle: function() {
            return {
                begins: "ibegins",
                startsWith: "ibegins"
            }[this.options.liveSearchStyle] || "icontains"
        },
        val: function(t) {
            return void 0 !== t ? (this.$element.val(t), this.render(), this.$element) : this.$element.val()
        },
        changeAll: function(e) {
            void 0 === e && (e = !0), this.findLis();
            for (var i = this.$element.find("option"), n = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").toggleClass("selected", e), s = n.length, o = [], a = 0; s > a; a++) {
                var r = n[a].getAttribute("data-original-index");
                o[o.length] = i.eq(r)[0]
            }
            t(o).prop("selected", e), this.render(!1)
        },
        selectAll: function() {
            return this.changeAll(!0)
        },
        deselectAll: function() {
            return this.changeAll(!1)
        },
        keydown: function(i) {
            var n, s, o, a, r, l, h, c, d, u = t(this),
                p = u.is("input") ? u.parent().parent() : u.parent(),
                f = p.data("this"),
                m = ":not(.disabled, .hidden, .dropdown-header, .divider)",
                g = {
                    32: " ",
                    48: "0",
                    49: "1",
                    50: "2",
                    51: "3",
                    52: "4",
                    53: "5",
                    54: "6",
                    55: "7",
                    56: "8",
                    57: "9",
                    59: ";",
                    65: "a",
                    66: "b",
                    67: "c",
                    68: "d",
                    69: "e",
                    70: "f",
                    71: "g",
                    72: "h",
                    73: "i",
                    74: "j",
                    75: "k",
                    76: "l",
                    77: "m",
                    78: "n",
                    79: "o",
                    80: "p",
                    81: "q",
                    82: "r",
                    83: "s",
                    84: "t",
                    85: "u",
                    86: "v",
                    87: "w",
                    88: "x",
                    89: "y",
                    90: "z",
                    96: "0",
                    97: "1",
                    98: "2",
                    99: "3",
                    100: "4",
                    101: "5",
                    102: "6",
                    103: "7",
                    104: "8",
                    105: "9"
                };
            if (f.options.liveSearch && (p = u.parent().parent()), f.options.container && (p = f.$menu), n = t("[role=menu] li", p), !(d = f.$menu.parent().hasClass("open")) && (i.keyCode >= 48 && i.keyCode <= 57 || i.keyCode >= 96 && i.keyCode <= 105 || i.keyCode >= 65 && i.keyCode <= 90) && (f.options.container ? f.$newElement.trigger("click") : (f.setSize(), f.$menu.parent().addClass("open"), d = !0), f.$searchbox.focus()), f.options.liveSearch && (/(^9$|27)/.test(i.keyCode.toString(10)) && d && 0 === f.$menu.find(".active").length && (i.preventDefault(), f.$menu.parent().removeClass("open"), f.options.container && f.$newElement.removeClass("open"), f.$button.focus()), n = t("[role=menu] li" + m, p), u.val() || /(38|40)/.test(i.keyCode.toString(10)) || 0 === n.filter(".active").length && (n = f.$menuInner.find("li"), n = f.options.liveSearchNormalize ? n.filter(":a" + f._searchStyle() + "(" + e(g[i.keyCode]) + ")") : n.filter(":" + f._searchStyle() + "(" + g[i.keyCode] + ")"))), n.length) {
                if (/(38|40)/.test(i.keyCode.toString(10))) s = n.index(n.find("a").filter(":focus").parent()), a = n.filter(m).first().index(), r = n.filter(m).last().index(), o = n.eq(s).nextAll(m).eq(0).index(), l = n.eq(s).prevAll(m).eq(0).index(), h = n.eq(o).prevAll(m).eq(0).index(), f.options.liveSearch && (n.each(function(e) {
                    t(this).hasClass("disabled") || t(this).data("index", e)
                }), s = n.index(n.filter(".active")), a = n.first().data("index"), r = n.last().data("index"), o = n.eq(s).nextAll().eq(0).data("index"), l = n.eq(s).prevAll().eq(0).data("index"), h = n.eq(o).prevAll().eq(0).data("index")), c = u.data("prevIndex"), 38 == i.keyCode ? (f.options.liveSearch && s--, s != h && s > l && (s = l), a > s && (s = a), s == c && (s = r)) : 40 == i.keyCode && (f.options.liveSearch && s++, -1 == s && (s = 0), s != h && o > s && (s = o), s > r && (s = r), s == c && (s = a)), u.data("prevIndex", s), f.options.liveSearch ? (i.preventDefault(), u.hasClass("dropdown-toggle") || (n.removeClass("active").eq(s).addClass("active").children("a").focus(), u.focus())) : n.eq(s).children("a").focus();
                else if (!u.is("input")) {
                    var v, b = [];
                    n.each(function() {
                        t(this).hasClass("disabled") || t.trim(t(this).children("a").text().toLowerCase()).substring(0, 1) == g[i.keyCode] && b.push(t(this).index())
                    }), v = t(document).data("keycount"), v++, t(document).data("keycount", v), t.trim(t(":focus").text().toLowerCase()).substring(0, 1) != g[i.keyCode] ? (v = 1, t(document).data("keycount", v)) : v >= b.length && (t(document).data("keycount", 0), v > b.length && (v = 1)), n.eq(b[v - 1]).children("a").focus()
                }
                if ((/(13|32)/.test(i.keyCode.toString(10)) || /(^9$)/.test(i.keyCode.toString(10)) && f.options.selectOnTab) && d) {
                    if (/(32)/.test(i.keyCode.toString(10)) || i.preventDefault(), f.options.liveSearch) /(32)/.test(i.keyCode.toString(10)) || (f.$menuInner.find(".active a").click(), u.focus());
                    else {
                        var y = t(":focus");
                        y.click(), y.focus(), i.preventDefault(), t(document).data("spaceSelect", !0)
                    }
                    t(document).data("keycount", 0)
                }(/(^9$|27)/.test(i.keyCode.toString(10)) && d && (f.multiple || f.options.liveSearch) || /(27)/.test(i.keyCode.toString(10)) && !d) && (f.$menu.parent().removeClass("open"), f.options.container && f.$newElement.removeClass("open"), f.$button.focus())
            }
        },
        mobile: function() {
            this.$element.addClass("mobile-device").appendTo(this.$newElement), this.options.container && this.$menu.hide()
        },
        refresh: function() {
            this.$lis = null, this.liObj = {}, this.reloadLi(), this.render(), this.checkDisabled(), this.liHeight(!0), this.setStyle(), this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), this.$element.trigger("refreshed.bs.select")
        },
        hide: function() {
            this.$newElement.hide()
        },
        show: function() {
            this.$newElement.show()
        },
        remove: function() {
            this.$newElement.remove(), this.$element.remove()
        }
    };
    var u = t.fn.selectpicker;
    t.fn.selectpicker = n, t.fn.selectpicker.Constructor = d, t.fn.selectpicker.noConflict = function() {
        return t.fn.selectpicker = u, this
    }, t(document).data("keycount", 0).on("keydown", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', d.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', function(t) {
        t.stopPropagation()
    }), t(window).on("load.bs.select.data-api", function() {
        t(".selectpicker").each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery);
var Validation_MOD = function(t) {
    function e(t, e) {
        var n = !1;
        return t.find(e.not(":hidden")).each(function() {
            return i.go($(this), !0) ? void 0 : (n = !0, !1)
        }), !n
    }
    this.rules = ["email", "req", "min", "max", "pattern", "phone", "geooff", "compare", "date"], this.scroll_to_error = !1, this.date_format_split = ".", this.date_format = "dd.mm.yyyy".split(this.date_format_split), this.check_email = function(t) {
        return new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(t.val().trim())
    }, this.check_date = function(t) {
        return new RegExp(/^(0[1-9]|[12]\d|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/).test(t.val().trim())
    }, this.check_phone = function(t) {
        return new RegExp(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/).test(t.val().trim())
    }, this.check_req = function(t) {
        return t.is("select") ? "" != t.find(":checked").attr("value") && t.find(":checked").attr("value") : "checkbox" == t.attr("type") ? 1 == t.filter(":checked").length : t.val().trim().length > 0
    }, this.check_min = function(t, e) {
        return t.val().length >= e
    }, this.check_max = function(t, e) {
        return t.val().length <= e
    }, this.check_pattern = function(t, e) {
        e = new RegExp(e);
        var i = t.data("value") ? t.data("value") : t.val();
        return e.test(i)
    }, this.check_geooff = function(t) {
        return !t.hasClass("trigger") || (t.removeClass("trigger"), !1)
    }, this.check_compare = function(t, e) {
        var i = $("#" + e).val();
        return (t.data("value") ? t.data("value") : t.val()) == i
    }, this.go = function(t, e) {
        e = e || !1;
        var i = !0,
            n = t.data("rules").split(";"),
            s = this,
            o = t.val();
        if ("date" == t.attr("type")) {
            var a = o.split("-");
            if (3 == a.length) {
                var r = s.date_format.slice();
                a[0] && (r[s.date_format.indexOf("yyyy")] = a[0]), a[1] && (r[s.date_format.indexOf("mm")] = a[1]), a[2] && (r[s.date_format.indexOf("dd")] = a[2]), t.attr({
                    "data-value": r.join(s.date_format_split)
                })
            }
            if (t.data("value") && (t.data("value") + "").length == s.date_format.join(s.date_format_split).length) {
                var l = calcDate(t.data("min")),
                    h = calcDate(t.data("max")),
                    c = new Date(t.val());
                l > c && t.val(l.getFullYear() + "-" + format_date(l.getMonth() + 1) + "-" + format_date(l.getDate())), c > h && t.val(h.getFullYear() + "-" + format_date(h.getMonth() + 1) + "-" + format_date(h.getDate()))
            }
        }
        return $.each(n, function(o, a) {
            if (n[o] = n[o].split("="), $.inArray(n[o][0], s.rules) > -1) {
                var r = s.elementErrorText(t),
                    l = s.elementErrorClass(t);
                if (r || (r = $("</div>")), l || (l = $("</div>")), !s["check_" + n[o][0]](t, n[o][1])) return i = !1, !e && (t.hasClass("Validation_MOD") ? ("before" == s.modeError && r.prev().replaceWith($(s.patternErrorText.replace("%ERROR%", s.lang[n[o][0]]))), "after" == s.modeError && r.next().replaceWith($(s.patternErrorText.replace("%ERROR%", s.lang[n[o][0]]))), "replace" == s.modeError && r.replaceWith($(s.patternErrorText.replace("%ERROR%", s.lang[n[o][0]]))), "append" == s.modeError && r.html("").append($(s.patternErrorText.replace("%ERROR%", s.lang[n[o][0]])))) : (l.addClass(s.errorClass), "before" == s.modeError && r.before($(s.patternErrorText.replace("%ERROR%", s.lang[n[o][0]]))), "after" == s.modeError && r.after($(s.patternErrorText.replace("%ERROR%", s.lang[n[o][0]]))), "replace" == s.modeError && r.replaceWith($(s.patternErrorText.replace("%ERROR%", s.lang[n[o][0]]))), "append" == s.modeError && r.html("").append($(s.patternErrorText.replace("%ERROR%", s.lang[n[o][0]])))), t.addClass("Validation_MOD"), s.showError(t), i);
                !e && t.hasClass("Validation_MOD") && (t.removeClass("Validation_MOD"), l.find(".Validation_MOD").length || l.removeClass(s.errorClass), t.data("group") && $('[data-group="' + t.data("group") + '"]').filter(".Validation_MOD").length || ("before" == s.modeError && r.prev().detach(), "after" == s.modeError && r.next().detach(), "replace" == s.modeError && r.html(""), "append" == s.modeError && r.html("")), s.hideError(t))
            }
        }), i
    }, this.patternErrorText = "<div>%ERROR%</div>", this.modeError = "after", this.errorClass = "error", this.elementErrorText = function(t) {
        return t
    }, this.elementErrorClass = function(t) {
        return t
    }, this.showError = function(t) {}, this.hideError = function(t) {};
    var i = this;
    this.form_submit = function(t, i) {
        "object" != typeof i && (i = $(i)), "object" != typeof t && (t = $(t));
        var n = this;
        t.submit(function(s) {
            if ($(this).find(i.not(":hidden")).each(function() {
                    n.go($(this)) ? $(this).removeClass("wrong-input") : ($(this).addClass("wrong-input"), s.preventDefault()), ($(this).closest("#checkout").length || $(this).closest("#checkout-authorized").length) && correctErrorWidths()
                }), n.scroll_to_error) {
                var o = $(".Validation_MOD", $(this)).not(":hidden").first();
                o.length && $("html, body").animate({
                    scrollTop: o.offset().top - 100
                }, 400, function() {
                    o.focus()
                })
            }
            if ($(this).hasClass("form-signup")) {
                var a = $(".b-popup-feedback__input-popup--sign-up");
                e(t, i) ? a.attr("data-disabled", !1) : a.attr("data-disabled", !0)
            }
        })
    }, this.keyup = function(t) {
        "object" != typeof t && (t = $(t));
        var i = this;
        t.keyup(function() {
            if (i.go($(this)) ? $(this).removeClass("wrong-input") : $(this).addClass("wrong-input"), $(this).closest("form").hasClass("form-signup")) {
                var t = $(".b-popup-feedback__input-popup--sign-up");
                e($(this).closest("form"), $(".js-validation-change")) ? t.attr("data-disabled", !1) : t.attr("data-disabled", !0)
            }($(this).closest("#checkout").length || $(this).closest("#checkout-authorized").length) && correctErrorWidths()
        }).on("show_error", function(t, e) {
            console.log(e)
        })
    }
};
window.Modernizr = function(t, e, i) {
        function n(t) {
            f.cssText = t
        }

        function s(t, e) {
            return typeof t === e
        }

        function o(t, e) {
            return !!~("" + t).indexOf(e)
        }

        function a(t, e) {
            for (var n in t) {
                var s = t[n];
                if (!o(s, "-") && f[s] !== i) return "pfx" != e || s
            }
            return !1
        }

        function r(t, e, n) {
            var o = t.charAt(0).toUpperCase() + t.slice(1),
                r = (t + " " + _.join(o + " ") + o).split(" ");
            return s(e, "string") || s(e, "undefined") ? a(r, e) : function(t, e, n) {
                for (var o in t) {
                    var a = e[t[o]];
                    if (a !== i) return !1 === n ? t[o] : s(a, "function") ? a.bind(n || e) : a
                }
                return !1
            }(r = (t + " " + x.join(o + " ") + o).split(" "), e, n)
        }
        var l, h, c = {},
            d = e.documentElement,
            u = "modernizr",
            p = e.createElement(u),
            f = p.style,
            m = e.createElement("input"),
            g = ":)",
            v = {}.toString,
            b = " -webkit- -moz- -o- -ms- ".split(" "),
            y = "Webkit Moz O ms",
            _ = y.split(" "),
            x = y.toLowerCase().split(" "),
            w = "http://www.w3.org/2000/svg",
            k = {},
            C = {},
            S = {},
            D = [],
            T = D.slice,
            P = function(t, i, n, s) {
                var o, a, r, l, h = e.createElement("div"),
                    c = e.body,
                    p = c || e.createElement("body");
                if (parseInt(n, 10))
                    for (; n--;) r = e.createElement("div"), r.id = s ? s[n] : u + (n + 1), h.appendChild(r);
                return o = ["&#173;", '<style id="s', u, '">', t, "</style>"].join(""), h.id = u, (c ? h : p).innerHTML += o, p.appendChild(h), c || (p.style.background = "", p.style.overflow = "hidden", l = d.style.overflow, d.style.overflow = "hidden", d.appendChild(p)), a = i(h, t), c ? h.parentNode.removeChild(h) : (p.parentNode.removeChild(p), d.style.overflow = l), !!a
            },
            I = function() {
                var t = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return function(n, o) {
                    o = o || e.createElement(t[n] || "div");
                    var a = (n = "on" + n) in o;
                    return a || (o.setAttribute || (o = e.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(n, ""), a = s(o[n], "function"), s(o[n], "undefined") || (o[n] = i), o.removeAttribute(n))), o = null, a
                }
            }(),
            E = {}.hasOwnProperty;
        h = s(E, "undefined") || s(E.call, "undefined") ? function(t, e) {
            return e in t && s(t.constructor.prototype[e], "undefined")
        } : function(t, e) {
            return E.call(t, e)
        }, Function.prototype.bind || (Function.prototype.bind = function(t) {
            var e = this;
            if ("function" != typeof e) throw new TypeError;
            var i = T.call(arguments, 1),
                n = function() {
                    if (this instanceof n) {
                        var s = function() {};
                        s.prototype = e.prototype;
                        var o = new s,
                            a = e.apply(o, i.concat(T.call(arguments)));
                        return Object(a) === a ? a : o
                    }
                    return e.apply(t, i.concat(T.call(arguments)))
                };
            return n
        }), k.flexbox = function() {
            return r("flexWrap")
        }, k.flexboxlegacy = function() {
            return r("boxDirection")
        }, k.canvas = function() {
            var t = e.createElement("canvas");
            return !!t.getContext && !!t.getContext("2d")
        }, k.canvastext = function() {
            return !!c.canvas && !!s(e.createElement("canvas").getContext("2d").fillText, "function")
        }, k.webgl = function() {
            return !!t.WebGLRenderingContext
        }, k.touch = function() {
            var i;
            return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? i = !0 : P(["@media (", b.join("touch-enabled),("), u, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(t) {
                i = 9 === t.offsetTop
            }), i
        }, k.geolocation = function() {
            return "geolocation" in navigator
        }, k.postmessage = function() {
            return !!t.postMessage
        }, k.websqldatabase = function() {
            return !!t.openDatabase
        }, k.indexedDB = function() {
            return !!r("indexedDB", t)
        }, k.hashchange = function() {
            return I("hashchange", t) && (e.documentMode === i || e.documentMode > 7)
        }, k.history = function() {
            return !!t.history && !!history.pushState
        }, k.draganddrop = function() {
            var t = e.createElement("div");
            return "draggable" in t || "ondragstart" in t && "ondrop" in t
        }, k.websockets = function() {
            return "WebSocket" in t || "MozWebSocket" in t
        }, k.rgba = function() {
            return n("background-color:rgba(150,255,150,.5)"), o(f.backgroundColor, "rgba")
        }, k.hsla = function() {
            return n("background-color:hsla(120,40%,100%,.5)"), o(f.backgroundColor, "rgba") || o(f.backgroundColor, "hsla")
        }, k.multiplebgs = function() {
            return n("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(f.background)
        }, k.backgroundsize = function() {
            return r("backgroundSize")
        }, k.borderimage = function() {
            return r("borderImage")
        }, k.borderradius = function() {
            return r("borderRadius")
        }, k.boxshadow = function() {
            return r("boxShadow")
        }, k.textshadow = function() {
            return "" === e.createElement("div").style.textShadow
        }, k.opacity = function() {
            return t = "opacity:.55", n(b.join(t + ";") + (e || "")), /^0.55$/.test(f.opacity);
            var t, e
        }, k.cssanimations = function() {
            return r("animationName")
        }, k.csscolumns = function() {
            return r("columnCount")
        }, k.cssgradients = function() {
            var t = "background-image:";
            return n((t + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + t) + b.join("linear-gradient(left top,#9f9, white);" + t)).slice(0, -t.length)), o(f.backgroundImage, "gradient")
        }, k.cssreflections = function() {
            return r("boxReflect")
        }, k.csstransforms = function() {
            return !!r("transform")
        }, k.csstransforms3d = function() {
            var t = !!r("perspective");
            return t && "webkitPerspective" in d.style && P("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e, i) {
                t = 9 === e.offsetLeft && 3 === e.offsetHeight
            }), t
        }, k.csstransitions = function() {
            return r("transition")
        }, k.fontface = function() {
            var t;
            return P('@font-face {font-family:"font";src:url("https://")}', function(i, n) {
                var s = e.getElementById("smodernizr"),
                    o = s.sheet || s.styleSheet,
                    a = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "";
                t = /src/i.test(a) && 0 === a.indexOf(n.split(" ")[0])
            }), t
        }, k.generatedcontent = function() {
            var t;
            return P(["#", u, "{font:0/0 a}#", u, ':after{content:"', g, '";visibility:hidden;font:3px/1 a}'].join(""), function(e) {
                t = e.offsetHeight >= 3
            }), t
        }, k.video = function() {
            var t = e.createElement("video"),
                i = !1;
            try {
                (i = !!t.canPlayType) && ((i = new Boolean(i)).ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), i.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), i.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (t) {}
            return i
        }, k.audio = function() {
            var t = e.createElement("audio"),
                i = !1;
            try {
                (i = !!t.canPlayType) && ((i = new Boolean(i)).ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), i.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), i.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), i.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (t) {}
            return i
        }, k.localstorage = function() {
            try {
                return localStorage.setItem(u, u), localStorage.removeItem(u), !0
            } catch (t) {
                return !1
            }
        }, k.sessionstorage = function() {
            try {
                return sessionStorage.setItem(u, u), sessionStorage.removeItem(u), !0
            } catch (t) {
                return !1
            }
        }, k.webworkers = function() {
            return !!t.Worker
        }, k.applicationcache = function() {
            return !!t.applicationCache
        }, k.svg = function() {
            return !!e.createElementNS && !!e.createElementNS(w, "svg").createSVGRect
        }, k.inlinesvg = function() {
            var t = e.createElement("div");
            return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == w
        }, k.smil = function() {
            return !!e.createElementNS && /SVGAnimate/.test(v.call(e.createElementNS(w, "animate")))
        }, k.svgclippaths = function() {
            return !!e.createElementNS && /SVGClipPath/.test(v.call(e.createElementNS(w, "clipPath")))
        };
        for (var M in k) h(k, M) && (l = M.toLowerCase(), c[l] = k[M](), D.push((c[l] ? "" : "no-") + l));
        return c.input || (c.input = function(i) {
                for (var n = 0, s = i.length; s > n; n++) S[i[n]] = i[n] in m;
                return S.list && (S.list = !!e.createElement("datalist") && !!t.HTMLDataListElement), S
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), c.inputtypes = function(t) {
                for (var n, s, o, a = 0, r = t.length; r > a; a++) m.setAttribute("type", s = t[a]), n = "text" !== m.type, n && (m.value = g, m.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(s) && m.style.WebkitAppearance !== i ? (d.appendChild(m), o = e.defaultView, n = o.getComputedStyle && "textfield" !== o.getComputedStyle(m, null).WebkitAppearance && 0 !== m.offsetHeight, d.removeChild(m)) : /^(search|tel)$/.test(s) || (n = /^(url|email)$/.test(s) ? m.checkValidity && !1 === m.checkValidity() : m.value != g)), C[t[a]] = !!n;
                return C
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))), c.addTest = function(t, e) {
                if ("object" == typeof t)
                    for (var n in t) h(t, n) && c.addTest(n, t[n]);
                else {
                    if (t = t.toLowerCase(), c[t] !== i) return c;
                    e = "function" == typeof e ? e() : e, d.className += " " + (e ? "" : "no-") + t, c[t] = e
                }
                return c
            }, n(""), p = m = null,
            function(t, e) {
                function i() {
                    var t = f.elements;
                    return "string" == typeof t ? t.split(" ") : t
                }

                function n(t) {
                    var e = p[t[d]];
                    return e || (e = {}, u++, t[d] = u, p[u] = e), e
                }

                function s(t, i, s) {
                    return i || (i = e), r ? i.createElement(t) : (s || (s = n(i)), !(o = s.cache[t] ? s.cache[t].cloneNode() : c.test(t) ? (s.cache[t] = s.createElem(t)).cloneNode() : s.createElem(t)).canHaveChildren || h.test(t) || o.tagUrn ? o : s.frag.appendChild(o));
                    var o
                }

                function o(t) {
                    t || (t = e);
                    var o, l, h, c, d, u, p = n(t);
                    return f.shivCSS && !a && !p.hasCSS && (p.hasCSS = (c = "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}", d = (h = t).createElement("p"), u = h.getElementsByTagName("head")[0] || h.documentElement, d.innerHTML = "x<style>" + c + "</style>", !!u.insertBefore(d.lastChild, u.firstChild))), r || (o = t, (l = p).cache || (l.cache = {}, l.createElem = o.createElement, l.createFrag = o.createDocumentFragment, l.frag = l.createFrag()), o.createElement = function(t) {
                        return f.shivMethods ? s(t, o, l) : l.createElem(t)
                    }, o.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-]+/g, function(t) {
                        return l.createElem(t), l.frag.createElement(t), 'c("' + t + '")'
                    }) + ");return n}")(f, l.frag)), t
                }
                var a, r, l = t.html5 || {},
                    h = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    c = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    d = "_html5shiv",
                    u = 0,
                    p = {};
                ! function() {
                    try {
                        var t = e.createElement("a");
                        t.innerHTML = "<xyz></xyz>", a = "hidden" in t, r = 1 == t.childNodes.length || function() {
                            e.createElement("a");
                            var t = e.createDocumentFragment();
                            return void 0 === t.cloneNode || void 0 === t.createDocumentFragment || void 0 === t.createElement
                        }()
                    } catch (t) {
                        a = !0, r = !0
                    }
                }();
                var f = {
                    elements: l.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: "3.7.0",
                    shivCSS: !1 !== l.shivCSS,
                    supportsUnknownElements: r,
                    shivMethods: !1 !== l.shivMethods,
                    type: "default",
                    shivDocument: o,
                    createElement: s,
                    createDocumentFragment: function(t, s) {
                        if (t || (t = e), r) return t.createDocumentFragment();
                        for (var o = (s = s || n(t)).frag.cloneNode(), a = 0, l = i(), h = l.length; h > a; a++) o.createElement(l[a]);
                        return o
                    }
                };
                t.html5 = f, o(e)
            }(this, e), c._version = "2.8.3", c._prefixes = b, c._domPrefixes = x, c._cssomPrefixes = _, c.hasEvent = I, c.testProp = function(t) {
                return a([t])
            }, c.testAllProps = r, c.testStyles = P, d.className = d.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + D.join(" "), c
    }(this, this.document),
    function(t, e, i) {
        function n(t) {
            return "[object Function]" == m.call(t)
        }

        function s(t) {
            return "string" == typeof t
        }

        function o() {}

        function a(t) {
            return !t || "loaded" == t || "complete" == t || "uninitialized" == t
        }

        function r() {
            var t = g.shift();
            v = 1, t ? t.t ? p(function() {
                ("c" == t.t ? d.injectCss : d.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
            }, 0) : (t(), r()) : v = 0
        }

        function l(t, i, n, o, l) {
            return v = 0, i = i || "j", s(t) ? function(t, i, n, s, o, l, h) {
                function c(e) {
                    if (!m && a(u.readyState) && (x.r = m = 1, !v && r(), u.onload = u.onreadystatechange = null, e)) {
                        "img" != t && p(function() {
                            _.removeChild(u)
                        }, 50);
                        for (var n in S[i]) S[i].hasOwnProperty(n) && S[i][n].onload()
                    }
                }
                h = h || d.errorTimeout;
                var u = e.createElement(t),
                    m = 0,
                    b = 0,
                    x = {
                        t: n,
                        s: i,
                        e: o,
                        a: l,
                        x: h
                    };
                1 === S[i] && (b = 1, S[i] = []), "object" == t ? u.data = i : (u.src = i, u.type = t), u.width = u.height = "0", u.onerror = u.onload = u.onreadystatechange = function() {
                    c.call(this, b)
                }, g.splice(s, 0, x), "img" != t && (b || 2 === S[i] ? (_.insertBefore(u, y ? null : f), p(c, h)) : S[i].push(u))
            }("c" == i ? w : x, t, i, this.i++, n, o, l) : (g.splice(this.i++, 0, t), 1 == g.length && r()), this
        }

        function h() {
            var t = d;
            return t.loader = {
                load: l,
                i: 0
            }, t
        }
        var c, d, u = e.documentElement,
            p = t.setTimeout,
            f = e.getElementsByTagName("script")[0],
            m = {}.toString,
            g = [],
            v = 0,
            b = "MozAppearance" in u.style,
            y = b && !!e.createRange().compareNode,
            _ = y ? u : f.parentNode,
            x = (u = t.opera && "[object Opera]" == m.call(t.opera), u = !!e.attachEvent && !u, b ? "object" : u ? "script" : "img"),
            w = u ? "script" : x,
            k = Array.isArray || function(t) {
                return "[object Array]" == m.call(t)
            },
            C = [],
            S = {},
            D = {
                timeout: function(t, e) {
                    return e.length && (t.timeout = e[0]), t
                }
            };
        (d = function(t) {
            function e(t, e, s, o, a) {
                var r = function(t) {
                        t = t.split("!");
                        var e, i, n, s = C.length,
                            o = t.pop(),
                            a = t.length;
                        for (o = {
                                url: o,
                                origUrl: o,
                                prefixes: t
                            }, i = 0; a > i; i++) n = t[i].split("="), (e = D[n.shift()]) && (o = e(o, n));
                        for (i = 0; s > i; i++) o = C[i](o);
                        return o
                    }(t),
                    l = r.autoCallback;
                r.url.split(".").pop().split("?").shift(), r.bypass || (e && (e = n(e) ? e : e[t] || e[o] || e[t.split("/").pop().split("?")[0]]), r.instead ? r.instead(t, e, s, o, a) : (S[r.url] ? r.noexec = !0 : S[r.url] = 1, s.load(r.url, r.forceCSS || !r.forceJS && "css" == r.url.split(".").pop().split("?").shift() ? "c" : i, r.noexec, r.attrs, r.timeout), (n(e) || n(l)) && s.load(function() {
                    h(), e && e(r.origUrl, a, o), l && l(r.origUrl, a, o), S[r.url] = 2
                })))
            }

            function a(t, i) {
                function a(t, o) {
                    if (t) {
                        if (s(t)) o || (d = function() {
                            var t = [].slice.call(arguments);
                            u.apply(this, t), p()
                        }), e(t, d, i, 0, h);
                        else if (Object(t) === t)
                            for (l in r = function() {
                                    var e, i = 0;
                                    for (e in t) t.hasOwnProperty(e) && i++;
                                    return i
                                }(), t) t.hasOwnProperty(l) && (!o && !--r && (n(d) ? d = function() {
                                var t = [].slice.call(arguments);
                                u.apply(this, t), p()
                            } : d[l] = function(t) {
                                return function() {
                                    var e = [].slice.call(arguments);
                                    t && t.apply(this, e), p()
                                }
                            }(u[l])), e(t[l], d, i, l, h))
                    } else !o && p()
                }
                var r, l, h = !!t.test,
                    c = t.load || t.both,
                    d = t.callback || o,
                    u = d,
                    p = t.complete || o;
                a(h ? t.yep : t.nope, !!c), c && a(c)
            }
            var r, l, c = this.yepnope.loader;
            if (s(t)) e(t, 0, c, 0);
            else if (k(t))
                for (r = 0; r < t.length; r++) l = t[r], s(l) ? e(l, 0, c, 0) : k(l) ? d(l) : Object(l) === l && a(l, c);
            else Object(t) === t && a(t, c)
        }).addPrefix = function(t, e) {
            D[t] = e
        }, d.addFilter = function(t) {
            C.push(t)
        }, d.errorTimeout = 1e4, null == e.readyState && e.addEventListener && (e.readyState = "loading", e.addEventListener("DOMContentLoaded", c = function() {
            e.removeEventListener("DOMContentLoaded", c, 0), e.readyState = "complete"
        }, 0)), t.yepnope = h(), t.yepnope.executeStack = r, t.yepnope.injectJs = function(t, i, n, s, l, h) {
            var c, u, m = e.createElement("script");
            s = s || d.errorTimeout;
            m.src = t;
            for (u in n) m.setAttribute(u, n[u]);
            i = h ? r : i || o, m.onreadystatechange = m.onload = function() {
                !c && a(m.readyState) && (c = 1, i(), m.onload = m.onreadystatechange = null)
            }, p(function() {
                c || (c = 1, i(1))
            }, s), l ? m.onload() : f.parentNode.insertBefore(m, f)
        }, t.yepnope.injectCss = function(t, i, n, s, a, l) {
            var h;
            s = e.createElement("link"), i = l ? r : i || o;
            s.href = t, s.rel = "stylesheet", s.type = "text/css";
            for (h in n) s.setAttribute(h, n[h]);
            a || (f.parentNode.insertBefore(s, f), p(i, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    },
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof module && module.exports ? require("jquery") : jQuery)
    }(function(t) {
        function e(e, i) {
            var s = t(this);
            if (this.value === s.attr(a ? "placeholder-x" : "placeholder") && s.hasClass(u.customClass))
                if (this.value = "", s.removeClass(u.customClass), s.data("placeholder-password")) {
                    if (s = s.hide().nextAll('input[type="password"]:first').show().attr("id", s.removeAttr("id").data("placeholder-id")), !0 === e) return s[0].value = i, i;
                    s.focus()
                } else this == n() && this.select()
        }

        function i(i) {
            var n, s, o, r, l = t(this),
                h = this.id;
            if (!i || "blur" !== i.type || !l.hasClass(u.customClass))
                if ("" === this.value) {
                    if ("password" === this.type) {
                        if (!l.data("placeholder-textinput")) {
                            try {
                                n = l.clone().prop({
                                    type: "text"
                                })
                            } catch (e) {
                                n = t("<input>").attr(t.extend((s = this, o = {}, r = /^jQuery\d+$/, t.each(s.attributes, function(t, e) {
                                    e.specified && !r.test(e.name) && (o[e.name] = e.value)
                                }), o), {
                                    type: "text"
                                }))
                            }
                            n.removeAttr("name").data({
                                "placeholder-enabled": !0,
                                "placeholder-password": l,
                                "placeholder-id": h
                            }).bind("focus.placeholder", e), l.data({
                                "placeholder-textinput": n,
                                "placeholder-id": h
                            }).before(n)
                        }
                        this.value = "", l = l.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", l.data("placeholder-id")).show()
                    } else {
                        var c = l.data("placeholder-password");
                        c && (c[0].value = "", l.attr("id", l.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"))
                    }
                    l.addClass(u.customClass), l[0].value = l.attr(a ? "placeholder-x" : "placeholder")
                } else l.removeClass(u.customClass)
        }

        function n() {
            try {
                return document.activeElement
            } catch (t) {}
        }
        var s, o, a = !1,
            r = "[object OperaMini]" === Object.prototype.toString.call(window.operamini),
            l = "placeholder" in document.createElement("input") && !r && !a,
            h = "placeholder" in document.createElement("textarea") && !r && !a,
            c = t.valHooks,
            d = t.propHooks,
            u = {};
        l && h ? ((o = t.fn.placeholder = function() {
            return this
        }).input = !0, o.textarea = !0) : ((o = t.fn.placeholder = function(n) {
            return u = t.extend({}, {
                customClass: "placeholder"
            }, n), this.filter((l ? "textarea" : ":input") + "[" + (a ? "placeholder-x" : "placeholder") + "]").not("." + u.customClass).not(":radio, :checkbox, [type=hidden]").bind({
                "focus.placeholder": e,
                "blur.placeholder": i
            }).data("placeholder-enabled", !0).trigger("blur.placeholder")
        }).input = l, o.textarea = h, s = {
            get: function(e) {
                var i = t(e),
                    n = i.data("placeholder-password");
                return n ? n[0].value : i.data("placeholder-enabled") && i.hasClass(u.customClass) ? "" : e.value
            },
            set: function(s, o) {
                var a, r, l = t(s);
                return "" !== o && (a = l.data("placeholder-textinput"), r = l.data("placeholder-password"), a ? (e.call(a[0], !0, o) || (s.value = o), a[0].value = o) : r && (e.call(s, !0, o) || (r[0].value = o), s.value = o)), l.data("placeholder-enabled") ? ("" === o ? (s.value = o, s != n() && i.call(s)) : (l.hasClass(u.customClass) && e.call(s), s.value = o), l) : (s.value = o, l)
            }
        }, l || (c.input = s, d.value = s), h || (c.textarea = s, d.value = s), t(function() {
            t(document).delegate("form", "submit.placeholder", function() {
                var n = t("." + u.customClass, this).each(function() {
                    e.call(this, !0, "")
                });
                setTimeout(function() {
                    n.each(i)
                }, 10)
            })
        }), t(window).bind("beforeunload.placeholder", function() {
            var e = !0;
            try {
                "javascript:void(0)" === document.activeElement.toString() && (e = !1)
            } catch (t) {}
            e && t("." + u.customClass).each(function() {
                this.value = ""
            })
        }))
    }),
    function(t) {
        var e = {
            mode: "horizontal",
            slideSelector: "",
            infiniteLoop: !0,
            hideControlOnEnd: !1,
            speed: 500,
            easing: null,
            slideMargin: 0,
            startSlide: 0,
            randomStart: !1,
            captions: !1,
            ticker: !1,
            tickerHover: !1,
            adaptiveHeight: !1,
            adaptiveHeightSpeed: 500,
            video: !1,
            useCSS: !0,
            preloadImages: "visible",
            responsive: !0,
            slideZIndex: 50,
            wrapperClass: "bx-wrapper",
            touchEnabled: !0,
            swipeThreshold: 50,
            oneToOneTouch: !0,
            preventDefaultSwipeX: !0,
            preventDefaultSwipeY: !1,
            ariaLive: !0,
            ariaHidden: !0,
            keyboardEnabled: !1,
            pager: !0,
            pagerType: "full",
            pagerShortSeparator: " / ",
            pagerSelector: null,
            buildPager: null,
            pagerCustom: null,
            controls: !0,
            nextText: "Next",
            prevText: "Prev",
            nextSelector: null,
            prevSelector: null,
            autoControls: !1,
            startText: "Start",
            stopText: "Stop",
            autoControlsCombine: !1,
            autoControlsSelector: null,
            auto: !1,
            pause: 4e3,
            autoStart: !0,
            autoDirection: "next",
            stopAutoOnClick: !1,
            autoHover: !1,
            autoDelay: 0,
            autoSlideForOnePage: !1,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 0,
            slideWidth: 0,
            shrinkItems: !1,
            onSliderLoad: function() {
                return !0
            },
            onSlideBefore: function() {
                return !0
            },
            onSlideAfter: function() {
                return !0
            },
            onSlideNext: function() {
                return !0
            },
            onSlidePrev: function() {
                return !0
            },
            onSliderResize: function() {
                return !0
            }
        };
        t.fn.bxSlider = function(n) {
            if (0 === this.length) return this;
            if (this.length > 1) return this.each(function() {
                t(this).bxSlider(n)
            }), this;
            var s = {},
                o = this,
                a = t(window).width(),
                r = t(window).height();
            if (!t(o).data("bxSlider")) {
                var l = function() {
                        t(o).data("bxSlider") || (s.settings = t.extend({}, e, n), s.settings.slideWidth = parseInt(s.settings.slideWidth), s.children = o.children(s.settings.slideSelector), s.children.length < s.settings.minSlides && (s.settings.minSlides = s.children.length), s.children.length < s.settings.maxSlides && (s.settings.maxSlides = s.children.length), s.settings.randomStart && (s.settings.startSlide = Math.floor(Math.random() * s.children.length)), s.active = {
                            index: s.settings.startSlide
                        }, s.carousel = s.settings.minSlides > 1 || s.settings.maxSlides > 1, s.carousel && (s.settings.preloadImages = "all"), s.minThreshold = s.settings.minSlides * s.settings.slideWidth + (s.settings.minSlides - 1) * s.settings.slideMargin, s.maxThreshold = s.settings.maxSlides * s.settings.slideWidth + (s.settings.maxSlides - 1) * s.settings.slideMargin, s.working = !1, s.controls = {}, s.interval = null, s.animProp = "vertical" === s.settings.mode ? "top" : "left", s.usingCSS = s.settings.useCSS && "fade" !== s.settings.mode && function() {
                            for (var t = document.createElement("div"), e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], i = 0; i < e.length; i++)
                                if (void 0 !== t.style[e[i]]) return s.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), s.animProp = "-" + s.cssPrefix + "-transform", !0;
                            return !1
                        }(), "vertical" === s.settings.mode && (s.settings.maxSlides = s.settings.minSlides), o.data("origStyle", o.attr("style")), o.children(s.settings.slideSelector).each(function() {
                            t(this).data("origStyle", t(this).attr("style"))
                        }), h())
                    },
                    h = function() {
                        var e = s.children.eq(s.settings.startSlide);
                        o.wrap('<div class="' + s.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), s.viewport = o.parent(), s.settings.ariaLive && !s.settings.ticker && s.viewport.attr("aria-live", "polite"), s.loader = t('<div class="bx-loading" />'), s.viewport.prepend(s.loader), o.css({
                            width: "horizontal" === s.settings.mode ? 1e3 * s.children.length + 215 + "%" : "auto",
                            position: "relative"
                        }), s.usingCSS && s.settings.easing ? o.css("-" + s.cssPrefix + "-transition-timing-function", s.settings.easing) : s.settings.easing || (s.settings.easing = "swing"), s.viewport.css({
                            width: "100%",
                            overflow: "hidden",
                            position: "relative"
                        }), s.viewport.parent().css({
                            maxWidth: p()
                        }), s.settings.pager || s.settings.controls || s.viewport.parent().css({
                            margin: "0 auto 0px"
                        }), s.children.css({
                            float: "horizontal" === s.settings.mode ? "left" : "none",
                            listStyle: "none",
                            position: "relative"
                        }), s.children.css("width", f()), "horizontal" === s.settings.mode && s.settings.slideMargin > 0 && s.children.css("marginRight", s.settings.slideMargin), "vertical" === s.settings.mode && s.settings.slideMargin > 0 && s.children.css("marginBottom", s.settings.slideMargin), "fade" === s.settings.mode && (s.children.css({
                            position: "absolute",
                            zIndex: 0,
                            display: "none"
                        }), s.children.eq(s.settings.startSlide).css({
                            zIndex: s.settings.slideZIndex,
                            display: "block"
                        })), s.controls.el = t('<div class="bx-controls" />'), s.settings.captions && C(), s.active.last = s.settings.startSlide === g() - 1, s.settings.video && o.fitVids(), ("all" === s.settings.preloadImages || s.settings.ticker) && (e = s.children), s.settings.ticker ? s.settings.pager = !1 : (s.settings.controls && w(), s.settings.auto && s.settings.autoControls && k(), s.settings.pager && x(), (s.settings.controls || s.settings.autoControls || s.settings.pager) && s.viewport.after(s.controls.el)), c(e, d)
                    },
                    c = function(e, i) {
                        var n = e.find('img:not([src=""]), iframe').length,
                            s = 0;
                        return 0 === n ? void i() : void e.find('img:not([src=""]), iframe').each(function() {
                            t(this).one("load error", function() {
                                ++s === n && i()
                            }).each(function() {
                                this.complete && t(this).load()
                            })
                        })
                    },
                    d = function() {
                        if (s.settings.infiniteLoop && "fade" !== s.settings.mode && !s.settings.ticker) {
                            var e = "vertical" === s.settings.mode ? s.settings.minSlides : s.settings.maxSlides,
                                i = s.children.slice(0, e).clone(!0).addClass("bx-clone"),
                                n = s.children.slice(-e).clone(!0).addClass("bx-clone");
                            s.settings.ariaHidden && (i.attr("aria-hidden", !0), n.attr("aria-hidden", !0)), o.append(i).prepend(n)
                        }
                        s.loader.remove(), b(), "vertical" === s.settings.mode && (s.settings.adaptiveHeight = !0), s.viewport.height(u()), o.redrawSlider(), s.settings.onSliderLoad.call(o, s.active.index), s.initialized = !0, s.settings.responsive && t(window).bind("resize", j), s.settings.auto && s.settings.autoStart && (g() > 1 || s.settings.autoSlideForOnePage) && $(), s.settings.ticker && N(), s.settings.pager && E(s.settings.startSlide), s.settings.controls && O(), (navigator.maxTouchPoints > 0) && H(), s.settings.keyboardEnabled && !s.settings.ticker && t(document).keydown(z)
                    },
                    u = function() {
                        var e = 0,
                            n = t();
                        if ("vertical" === s.settings.mode || s.settings.adaptiveHeight)
                            if (s.carousel) {
                                var o = 1 === s.settings.moveSlides ? s.active.index : s.active.index * v();
                                for (n = s.children.eq(o), i = 1; i <= s.settings.maxSlides - 1; i++) n = o + i >= s.children.length ? n.add(s.children.eq(i - 1)) : n.add(s.children.eq(o + i))
                            } else n = s.children.eq(s.active.index);
                        else n = s.children;
                        return "vertical" === s.settings.mode ? (n.each(function(i) {
                            e += t(this).outerHeight()
                        }), s.settings.slideMargin > 0 && (e += s.settings.slideMargin * (s.settings.minSlides - 1))) : e = Math.max.apply(Math, n.map(function() {
                            return t(this).outerHeight(!1)
                        }).get()), "border-box" === s.viewport.css("box-sizing") ? e += parseFloat(s.viewport.css("padding-top")) + parseFloat(s.viewport.css("padding-bottom")) + parseFloat(s.viewport.css("border-top-width")) + parseFloat(s.viewport.css("border-bottom-width")) : "padding-box" === s.viewport.css("box-sizing") && (e += parseFloat(s.viewport.css("padding-top")) + parseFloat(s.viewport.css("padding-bottom"))), e
                    },
                    p = function() {
                        var t = "100%";
                        return s.settings.slideWidth > 0 && (t = "horizontal" === s.settings.mode ? s.settings.maxSlides * s.settings.slideWidth + (s.settings.maxSlides - 1) * s.settings.slideMargin : s.settings.slideWidth), t
                    },
                    f = function() {
                        var t = s.settings.slideWidth,
                            e = s.viewport.width();
                        if (0 === s.settings.slideWidth || s.settings.slideWidth > e && !s.carousel || "vertical" === s.settings.mode) t = e;
                        else if (s.settings.maxSlides > 1 && "horizontal" === s.settings.mode) {
                            if (e > s.maxThreshold) return t;
                            e < s.minThreshold ? t = (e - s.settings.slideMargin * (s.settings.minSlides - 1)) / s.settings.minSlides : s.settings.shrinkItems && (t = Math.floor((e + s.settings.slideMargin) / Math.ceil((e + s.settings.slideMargin) / (t + s.settings.slideMargin)) - s.settings.slideMargin))
                        }
                        return t
                    },
                    m = function() {
                        var t = 1,
                            e = null;
                        return "horizontal" === s.settings.mode && s.settings.slideWidth > 0 ? s.viewport.width() < s.minThreshold ? t = s.settings.minSlides : s.viewport.width() > s.maxThreshold ? t = s.settings.maxSlides : (e = s.children.first().width() + s.settings.slideMargin, t = Math.floor((s.viewport.width() + s.settings.slideMargin) / e)) : "vertical" === s.settings.mode && (t = s.settings.minSlides), t
                    },
                    g = function() {
                        var t = 0,
                            e = 0,
                            i = 0;
                        if (s.settings.moveSlides > 0)
                            if (s.settings.infiniteLoop) t = Math.ceil(s.children.length / v());
                            else
                                for (; e < s.children.length;) ++t, e = i + m(), i += s.settings.moveSlides <= m() ? s.settings.moveSlides : m();
                        else t = Math.ceil(s.children.length / m());
                        return t
                    },
                    v = function() {
                        return s.settings.moveSlides > 0 && s.settings.moveSlides <= m() ? s.settings.moveSlides : m()
                    },
                    b = function() {
                        var t, e, i;
                        s.children.length > s.settings.maxSlides && s.active.last && !s.settings.infiniteLoop ? "horizontal" === s.settings.mode ? (t = (e = s.children.last()).position(), y(-(t.left - (s.viewport.width() - e.outerWidth())), "reset", 0)) : "vertical" === s.settings.mode && (i = s.children.length - s.settings.minSlides, t = s.children.eq(i).position(), y(-t.top, "reset", 0)) : (t = s.children.eq(s.active.index * v()).position(), s.active.index === g() - 1 && (s.active.last = !0), void 0 !== t && ("horizontal" === s.settings.mode ? y(-t.left, "reset", 0) : "vertical" === s.settings.mode && y(-t.top, "reset", 0)))
                    },
                    y = function(e, i, n, a) {
                        var r, l;
                        s.usingCSS ? (l = "vertical" === s.settings.mode ? "translate3d(0, " + e + "px, 0)" : "translate3d(" + e + "px, 0, 0)", o.css("-" + s.cssPrefix + "-transition-duration", n / 1e3 + "s"), "slide" === i ? (o.css(s.animProp, l), 0 !== n ? o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(e) {
                            t(e.target).is(o) && (o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), M())
                        }) : M()) : "reset" === i ? o.css(s.animProp, l) : "ticker" === i && (o.css("-" + s.cssPrefix + "-transition-timing-function", "linear"), o.css(s.animProp, l), 0 !== n ? o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(e) {
                            t(e.target).is(o) && (o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), y(a.resetValue, "reset", 0), R())
                        }) : (y(a.resetValue, "reset", 0), R()))) : ((r = {})[s.animProp] = e, "slide" === i ? o.animate(r, n, s.settings.easing, function() {
                            M()
                        }) : "reset" === i ? o.css(s.animProp, e) : "ticker" === i && o.animate(r, n, "linear", function() {
                            y(a.resetValue, "reset", 0), R()
                        }))
                    },
                    _ = function() {
                        for (var e = "", i = "", n = g(), o = 0; n > o; o++) i = "", s.settings.buildPager && t.isFunction(s.settings.buildPager) || s.settings.pagerCustom ? (i = s.settings.buildPager(o), s.pagerEl.addClass("bx-custom-pager")) : (i = o + 1, s.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + o + '" class="bx-pager-link">' + i + "</a></div>";
                        s.pagerEl.html(e)
                    },
                    x = function() {
                        s.settings.pagerCustom ? s.pagerEl = t(s.settings.pagerCustom) : (s.pagerEl = t('<div class="bx-pager" />'), s.settings.pagerSelector ? t(s.settings.pagerSelector).html(s.pagerEl) : s.controls.el.addClass("bx-has-pager").append(s.pagerEl), _()), s.pagerEl.on("click touchend", "a", I)
                    },
                    w = function() {
                        s.controls.next = t('<a class="bx-next" href="">' + s.settings.nextText + "</a>"), s.controls.prev = t('<a class="bx-prev" href="">' + s.settings.prevText + "</a>"), s.controls.next.bind("click touchend", S), s.controls.prev.bind("click touchend", D), s.settings.nextSelector && t(s.settings.nextSelector).append(s.controls.next), s.settings.prevSelector && t(s.settings.prevSelector).append(s.controls.prev), s.settings.nextSelector || s.settings.prevSelector || (s.controls.directionEl = t('<div class="bx-controls-direction" />'), s.controls.directionEl.append(s.controls.prev).append(s.controls.next), s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl))
                    },
                    k = function() {
                        s.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + s.settings.startText + "</a></div>"), s.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + s.settings.stopText + "</a></div>"), s.controls.autoEl = t('<div class="bx-controls-auto" />'), s.controls.autoEl.on("click", ".bx-start", T), s.controls.autoEl.on("click", ".bx-stop", P), s.settings.autoControlsCombine ? s.controls.autoEl.append(s.controls.start) : s.controls.autoEl.append(s.controls.start).append(s.controls.stop), s.settings.autoControlsSelector ? t(s.settings.autoControlsSelector).html(s.controls.autoEl) : s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl), A(s.settings.autoStart ? "stop" : "start")
                    },
                    C = function() {
                        s.children.each(function(e) {
                            var i = t(this).find("img:first").attr("title");
                            void 0 !== i && ("" + i).length && t(this).append('<div class="bx-caption"><span>' + i + "</span></div>")
                        })
                    },
                    S = function(t) {
                        t.preventDefault(), s.controls.el.hasClass("disabled") || (s.settings.auto && s.settings.stopAutoOnClick && o.stopAuto(), o.goToNextSlide())
                    },
                    D = function(t) {
                        t.preventDefault(), s.controls.el.hasClass("disabled") || (s.settings.auto && s.settings.stopAutoOnClick && o.stopAuto(), o.goToPrevSlide())
                    },
                    T = function(t) {
                        o.startAuto(), t.preventDefault()
                    },
                    P = function(t) {
                        o.stopAuto(), t.preventDefault()
                    },
                    I = function(e) {
                        var i, n;
                        e.preventDefault(), s.controls.el.hasClass("disabled") || (s.settings.auto && s.settings.stopAutoOnClick && o.stopAuto(), void 0 !== (i = t(e.currentTarget)).attr("data-slide-index") && ((n = parseInt(i.attr("data-slide-index"))) !== s.active.index && o.goToSlide(n)))
                    },
                    E = function(e) {
                        var i = s.children.length;
                        return "short" === s.settings.pagerType ? (s.settings.maxSlides > 1 && (i = Math.ceil(s.children.length / s.settings.maxSlides)), void s.pagerEl.html(e + 1 + s.settings.pagerShortSeparator + i)) : (s.pagerEl.find("a").removeClass("active"), void s.pagerEl.each(function(i, n) {
                            t(n).find("a").eq(e).addClass("active")
                        }))
                    },
                    M = function() {
                        if (s.settings.infiniteLoop) {
                            var t = "";
                            0 === s.active.index ? t = s.children.eq(0).position() : s.active.index === g() - 1 && s.carousel ? t = s.children.eq((g() - 1) * v()).position() : s.active.index === s.children.length - 1 && (t = s.children.eq(s.children.length - 1).position()), t && ("horizontal" === s.settings.mode ? y(-t.left, "reset", 0) : "vertical" === s.settings.mode && y(-t.top, "reset", 0))
                        }
                        s.working = !1, s.settings.onSlideAfter.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index)
                    },
                    A = function(t) {
                        s.settings.autoControlsCombine ? s.controls.autoEl.html(s.controls[t]) : (s.controls.autoEl.find("a").removeClass("active"), s.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
                    },
                    O = function() {
                        1 === g() ? (s.controls.prev.addClass("disabled"), s.controls.next.addClass("disabled")) : !s.settings.infiniteLoop && s.settings.hideControlOnEnd && (0 === s.active.index ? (s.controls.prev.addClass("disabled"), s.controls.next.removeClass("disabled")) : s.active.index === g() - 1 ? (s.controls.next.addClass("disabled"), s.controls.prev.removeClass("disabled")) : (s.controls.prev.removeClass("disabled"), s.controls.next.removeClass("disabled")))
                    },
                    $ = function() {
                        s.settings.autoDelay > 0 ? setTimeout(o.startAuto, s.settings.autoDelay) : (o.startAuto(), t(window).focus(function() {
                            o.startAuto()
                        }).blur(function() {
                            o.stopAuto()
                        })), s.settings.autoHover && o.hover(function() {
                            s.interval && (o.stopAuto(!0), s.autoPaused = !0)
                        }, function() {
                            s.autoPaused && (o.startAuto(!0), s.autoPaused = null)
                        })
                    },
                    N = function() {
                        var e, i, n, a, r, l, h, c, d = 0;
                        "next" === s.settings.autoDirection ? o.append(s.children.clone().addClass("bx-clone")) : (o.prepend(s.children.clone().addClass("bx-clone")), e = s.children.first().position(), d = "horizontal" === s.settings.mode ? -e.left : -e.top), y(d, "reset", 0), s.settings.pager = !1, s.settings.controls = !1, s.settings.autoControls = !1, s.settings.tickerHover && (s.usingCSS ? (a = "horizontal" === s.settings.mode ? 4 : 5, s.viewport.hover(function() {
                            i = o.css("-" + s.cssPrefix + "-transform"), n = parseFloat(i.split(",")[a]), y(n, "reset", 0)
                        }, function() {
                            c = 0, s.children.each(function(e) {
                                c += "horizontal" === s.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
                            }), r = s.settings.speed / c, l = "horizontal" === s.settings.mode ? "left" : "top", h = r * (c - Math.abs(parseInt(n))), R(h)
                        })) : s.viewport.hover(function() {
                            o.stop()
                        }, function() {
                            c = 0, s.children.each(function(e) {
                                c += "horizontal" === s.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
                            }), r = s.settings.speed / c, l = "horizontal" === s.settings.mode ? "left" : "top", h = r * (c - Math.abs(parseInt(o.css(l)))), R(h)
                        })), R()
                    },
                    R = function(t) {
                        var e, i, n = t || s.settings.speed,
                            a = {
                                left: 0,
                                top: 0
                            },
                            r = {
                                left: 0,
                                top: 0
                            };
                        "next" === s.settings.autoDirection ? a = o.find(".bx-clone").first().position() : r = s.children.first().position(), e = "horizontal" === s.settings.mode ? -a.left : -a.top, i = "horizontal" === s.settings.mode ? -r.left : -r.top, y(e, "ticker", n, {
                            resetValue: i
                        })
                    },
                    z = function(e) {
                        var i, n, s, a, r = document.activeElement.tagName.toLowerCase();
                        if (null == new RegExp(r, ["i"]).exec("input|textarea") && (i = o, n = t(window), s = {
                                top: n.scrollTop(),
                                left: n.scrollLeft()
                            }, a = i.offset(), s.right = s.left + n.width(), s.bottom = s.top + n.height(), a.right = a.left + i.outerWidth(), a.bottom = a.top + i.outerHeight(), !(s.right < a.left || s.left > a.right || s.bottom < a.top || s.top > a.bottom))) {
                            if (39 === e.keyCode) return S(e), !1;
                            if (37 === e.keyCode) return D(e), !1
                        }
                    },
                    H = function() {
                        s.touch = {
                            start: {
                                x: 0,
                                y: 0
                            },
                            end: {
                                x: 0,
                                y: 0
                            }
                        }, s.viewport.bind("touchstart MSPointerDown pointerdown", W), s.viewport.on("click", ".bxslider a", function(t) {
                            s.viewport.hasClass("click-disabled") && (t.preventDefault(), s.viewport.removeClass("click-disabled"))
                        })
                    },
                    W = function(t) {
                        if (s.controls.el.addClass("disabled"), s.working) t.preventDefault(), s.controls.el.removeClass("disabled");
                        else {
                            s.touch.originalPos = o.position();
                            var e = t.originalEvent,
                                i = void 0 !== e.changedTouches ? e.changedTouches : [e];
                            s.touch.start.x = i[0].pageX, s.touch.start.y = i[0].pageY, s.viewport.get(0).setPointerCapture && (s.pointerId = e.pointerId, s.viewport.get(0).setPointerCapture(s.pointerId)), s.viewport.bind("touchmove MSPointerMove pointermove", F), s.viewport.bind("touchend MSPointerUp pointerup", B), s.viewport.bind("MSPointerCancel pointercancel", L)
                        }
                    },
                    L = function(t) {
                        y(s.touch.originalPos.left, "reset", 0), s.controls.el.removeClass("disabled"), s.viewport.unbind("MSPointerCancel pointercancel", L), s.viewport.unbind("touchmove MSPointerMove pointermove", F), s.viewport.unbind("touchend MSPointerUp pointerup", B), s.viewport.get(0).releasePointerCapture && s.viewport.get(0).releasePointerCapture(s.pointerId)
                    },
                    F = function(t) {
                        var e = t.originalEvent,
                            i = void 0 !== e.changedTouches ? e.changedTouches : [e],
                            n = Math.abs(i[0].pageX - s.touch.start.x),
                            o = Math.abs(i[0].pageY - s.touch.start.y),
                            a = 0,
                            r = 0;
                        3 * n > o && s.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * o > n && s.settings.preventDefaultSwipeY && t.preventDefault(), "fade" !== s.settings.mode && s.settings.oneToOneTouch && ("horizontal" === s.settings.mode ? (r = i[0].pageX - s.touch.start.x, a = s.touch.originalPos.left + r) : (r = i[0].pageY - s.touch.start.y, a = s.touch.originalPos.top + r), y(a, "reset", 0))
                    },
                    B = function(t) {
                        s.viewport.unbind("touchmove MSPointerMove pointermove", F), s.controls.el.removeClass("disabled");
                        var e = t.originalEvent,
                            i = void 0 !== e.changedTouches ? e.changedTouches : [e],
                            n = 0,
                            a = 0;
                        s.touch.end.x = i[0].pageX, s.touch.end.y = i[0].pageY, "fade" === s.settings.mode ? (a = Math.abs(s.touch.start.x - s.touch.end.x)) >= s.settings.swipeThreshold && (s.touch.start.x > s.touch.end.x ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto()) : ("horizontal" === s.settings.mode ? (a = s.touch.end.x - s.touch.start.x, n = s.touch.originalPos.left) : (a = s.touch.end.y - s.touch.start.y, n = s.touch.originalPos.top), !s.settings.infiniteLoop && (0 === s.active.index && a > 0 || s.active.last && 0 > a) ? y(n, "reset", 200) : Math.abs(a) >= s.settings.swipeThreshold ? (0 > a ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto()) : y(n, "reset", 200)), s.viewport.unbind("touchend MSPointerUp pointerup", B), s.viewport.get(0).releasePointerCapture && s.viewport.get(0).releasePointerCapture(s.pointerId)
                    },
                    j = function(e) {
                        if (s.initialized)
                            if (s.working) window.setTimeout(j, 10);
                            else {
                                var i = t(window).width(),
                                    n = t(window).height();
                                (a !== i || r !== n) && (a = i, r = n, o.redrawSlider(), s.settings.onSliderResize.call(o, s.active.index))
                            }
                    },
                    U = function(t) {
                        var e = m();
                        s.settings.ariaHidden && !s.settings.ticker && (s.children.attr("aria-hidden", "true"), s.children.slice(t, t + e).attr("aria-hidden", "false"))
                    };
                return o.goToSlide = function(e, i) {
                    var n, a, r, l, h, c = !0,
                        d = 0,
                        p = {
                            left: 0,
                            top: 0
                        },
                        f = null;
                    if (s.oldIndex = s.active.index, s.active.index = 0 > (h = e) ? s.settings.infiniteLoop ? g() - 1 : s.active.index : h >= g() ? s.settings.infiniteLoop ? 0 : s.active.index : h, !s.working && s.active.index !== s.oldIndex) {
                        if (s.working = !0, void 0 !== (c = s.settings.onSlideBefore.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index)) && !c) return s.active.index = s.oldIndex, void(s.working = !1);
                        "next" === i ? s.settings.onSlideNext.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index) || (c = !1) : "prev" === i && (s.settings.onSlidePrev.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index) || (c = !1)), s.active.last = s.active.index >= g() - 1, (s.settings.pager || s.settings.pagerCustom) && E(s.active.index), s.settings.controls && O(), "fade" === s.settings.mode ? (s.settings.adaptiveHeight && s.viewport.height() !== u() && s.viewport.animate({
                            height: u()
                        }, s.settings.adaptiveHeightSpeed), s.children.filter(":visible").fadeOut(s.settings.speed).css({
                            zIndex: 0
                        }), s.children.eq(s.active.index).css("zIndex", s.settings.slideZIndex + 1).fadeIn(s.settings.speed, function() {
                            t(this).css("zIndex", s.settings.slideZIndex), M()
                        })) : (s.settings.adaptiveHeight && s.viewport.height() !== u() && s.viewport.animate({
                            height: u()
                        }, s.settings.adaptiveHeightSpeed), !s.settings.infiniteLoop && s.carousel && s.active.last ? "horizontal" === s.settings.mode ? (p = (f = s.children.eq(s.children.length - 1)).position(), d = s.viewport.width() - f.outerWidth()) : (n = s.children.length - s.settings.minSlides, p = s.children.eq(n).position()) : s.carousel && s.active.last && "prev" === i ? (a = 1 === s.settings.moveSlides ? s.settings.maxSlides - v() : (g() - 1) * v() - (s.children.length - s.settings.maxSlides), p = (f = o.children(".bx-clone").eq(a)).position()) : "next" === i && 0 === s.active.index ? (p = o.find("> .bx-clone").eq(s.settings.maxSlides).position(), s.active.last = !1) : e >= 0 && (l = e * parseInt(v()), p = s.children.eq(l).position()), void 0 !== p ? (r = "horizontal" === s.settings.mode ? -(p.left - d) : -p.top, y(r, "slide", s.settings.speed)) : s.working = !1), s.settings.ariaHidden && U(s.active.index * v())
                    }
                }, o.goToNextSlide = function() {
                    if (s.settings.infiniteLoop || !s.active.last) {
                        var t = parseInt(s.active.index) + 1;
                        o.goToSlide(t, "next")
                    }
                }, o.goToPrevSlide = function() {
                    if (s.settings.infiniteLoop || 0 !== s.active.index) {
                        var t = parseInt(s.active.index) - 1;
                        o.goToSlide(t, "prev")
                    }
                }, o.startAuto = function(t) {
                    s.interval || (s.interval = setInterval(function() {
                        "next" === s.settings.autoDirection ? o.goToNextSlide() : o.goToPrevSlide()
                    }, s.settings.pause), s.settings.autoControls && !0 !== t && A("stop"))
                }, o.stopAuto = function(t) {
                    s.interval && (clearInterval(s.interval), s.interval = null, s.settings.autoControls && !0 !== t && A("start"))
                }, o.getCurrentSlide = function() {
                    return s.active.index
                }, o.getCurrentSlideElement = function() {
                    return s.children.eq(s.active.index)
                }, o.getSlideElement = function(t) {
                    return s.children.eq(t)
                }, o.getSlideCount = function() {
                    return s.children.length
                }, o.isWorking = function() {
                    return s.working
                }, o.redrawSlider = function() {
                    s.children.add(o.find(".bx-clone")).outerWidth(f()), s.viewport.css("height", u()), s.settings.ticker || b(), s.active.last && (s.active.index = g() - 1), s.active.index >= g() && (s.active.last = !0), s.settings.pager && !s.settings.pagerCustom && (_(), E(s.active.index)), s.settings.ariaHidden && U(s.active.index * v())
                }, o.destroySlider = function() {
                    s.initialized && (s.initialized = !1, t(".bx-clone", this).remove(), s.children.each(function() {
                        void 0 !== t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
                    }), void 0 !== t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), s.controls.el && s.controls.el.remove(), s.controls.next && s.controls.next.remove(), s.controls.prev && s.controls.prev.remove(), s.pagerEl && s.settings.controls && !s.settings.pagerCustom && s.pagerEl.remove(), t(".bx-caption", this).remove(), s.controls.autoEl && s.controls.autoEl.remove(), clearInterval(s.interval), s.settings.responsive && t(window).unbind("resize", j), s.settings.keyboardEnabled && t(document).unbind("keydown", z), t(this).removeData("bxSlider"))
                }, o.reloadSlider = function(e) {
                    void 0 !== e && (n = e), o.destroySlider(), l(), t(o).data("bxSlider", this)
                }, l(), t(o).data("bxSlider", this), this
            }
        }
    }(jQuery),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
    }(function(t) {
        function e(e) {
            var a = e || window.event,
                r = l.call(arguments, 1),
                h = 0,
                d = 0,
                u = 0,
                p = 0,
                f = 0,
                m = 0;
            if ((e = t.event.fix(a)).type = "mousewheel", "detail" in a && (u = -1 * a.detail), "wheelDelta" in a && (u = a.wheelDelta), "wheelDeltaY" in a && (u = a.wheelDeltaY), "wheelDeltaX" in a && (d = -1 * a.wheelDeltaX), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (d = -1 * u, u = 0), h = 0 === u ? d : u, "deltaY" in a && (h = u = -1 * a.deltaY), "deltaX" in a && (d = a.deltaX, 0 === u && (h = -1 * d)), 0 !== u || 0 !== d) {
                if (1 === a.deltaMode) {
                    var g = t.data(this, "mousewheel-line-height");
                    h *= g, u *= g, d *= g
                } else if (2 === a.deltaMode) {
                    var v = t.data(this, "mousewheel-page-height");
                    h *= v, u *= v, d *= v
                }
                if (p = Math.max(Math.abs(u), Math.abs(d)), (!o || o > p) && (o = p, n(a, p) && (o /= 40)), n(a, p) && (h /= 40, d /= 40, u /= 40), h = Math[h >= 1 ? "floor" : "ceil"](h / o), d = Math[d >= 1 ? "floor" : "ceil"](d / o), u = Math[u >= 1 ? "floor" : "ceil"](u / o), c.settings.normalizeOffset && this.getBoundingClientRect) {
                    var b = this.getBoundingClientRect();
                    f = e.clientX - b.left, m = e.clientY - b.top
                }
                return e.deltaX = d, e.deltaY = u, e.deltaFactor = o, e.offsetX = f, e.offsetY = m, e.deltaMode = 0, r.unshift(e, h, d, u), s && clearTimeout(s), s = setTimeout(i, 200), (t.event.dispatch || t.event.handle).apply(this, r)
            }
        }

        function i() {
            o = null
        }

        function n(t, e) {
            return c.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
        }
        var s, o, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            r = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            l = Array.prototype.slice;
        if (t.event.fixHooks)
            for (var h = a.length; h;) t.event.fixHooks[a[--h]] = t.event.mouseHooks;
        var c = t.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var i = r.length; i;) this.addEventListener(r[--i], e, !1);
                else this.onmousewheel = e;
                t.data(this, "mousewheel-line-height", c.getLineHeight(this)), t.data(this, "mousewheel-page-height", c.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var i = r.length; i;) this.removeEventListener(r[--i], e, !1);
                else this.onmousewheel = null;
                t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(e) {
                var i = t(e),
                    n = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
                return n.length || (n = t("body")), parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
            },
            getPageHeight: function(e) {
                return t(e).height()
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };
        t.fn.extend({
            mousewheel: function(t) {
                return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
            },
            unmousewheel: function(t) {
                return this.unbind("mousewheel", t)
            }
        })
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
    }(function(t) {
        function e(e) {
            var a = e || window.event,
                r = l.call(arguments, 1),
                h = 0,
                d = 0,
                u = 0,
                p = 0,
                f = 0,
                m = 0;
            if ((e = t.event.fix(a)).type = "mousewheel", "detail" in a && (u = -1 * a.detail), "wheelDelta" in a && (u = a.wheelDelta), "wheelDeltaY" in a && (u = a.wheelDeltaY), "wheelDeltaX" in a && (d = -1 * a.wheelDeltaX), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (d = -1 * u, u = 0), h = 0 === u ? d : u, "deltaY" in a && (h = u = -1 * a.deltaY), "deltaX" in a && (d = a.deltaX, 0 === u && (h = -1 * d)), 0 !== u || 0 !== d) {
                if (1 === a.deltaMode) {
                    var g = t.data(this, "mousewheel-line-height");
                    h *= g, u *= g, d *= g
                } else if (2 === a.deltaMode) {
                    var v = t.data(this, "mousewheel-page-height");
                    h *= v, u *= v, d *= v
                }
                if (p = Math.max(Math.abs(u), Math.abs(d)), (!o || o > p) && (o = p, n(a, p) && (o /= 40)), n(a, p) && (h /= 40, d /= 40, u /= 40), h = Math[h >= 1 ? "floor" : "ceil"](h / o), d = Math[d >= 1 ? "floor" : "ceil"](d / o), u = Math[u >= 1 ? "floor" : "ceil"](u / o), c.settings.normalizeOffset && this.getBoundingClientRect) {
                    var b = this.getBoundingClientRect();
                    f = e.clientX - b.left, m = e.clientY - b.top
                }
                return e.deltaX = d, e.deltaY = u, e.deltaFactor = o, e.offsetX = f, e.offsetY = m, e.deltaMode = 0, r.unshift(e, h, d, u), s && clearTimeout(s), s = setTimeout(i, 200), (t.event.dispatch || t.event.handle).apply(this, r)
            }
        }

        function i() {
            o = null
        }

        function n(t, e) {
            return c.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
        }
        var s, o, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            r = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            l = Array.prototype.slice;
        if (t.event.fixHooks)
            for (var h = a.length; h;) t.event.fixHooks[a[--h]] = t.event.mouseHooks;
        var c = t.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var i = r.length; i;) this.addEventListener(r[--i], e, !1);
                else this.onmousewheel = e;
                t.data(this, "mousewheel-line-height", c.getLineHeight(this)), t.data(this, "mousewheel-page-height", c.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var i = r.length; i;) this.removeEventListener(r[--i], e, !1);
                else this.onmousewheel = null;
                t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(e) {
                var i = t(e),
                    n = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
                return n.length || (n = t("body")), parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
            },
            getPageHeight: function(e) {
                return t(e).height()
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };
        t.fn.extend({
            mousewheel: function(t) {
                return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
            },
            unmousewheel: function(t) {
                return this.unbind("mousewheel", t)
            }
        })
    }),
    function(t) {
        "undefined" != typeof module && module.exports ? module.exports = t : t(jQuery, window, document)
    }(function(t) {
        var e, i, n, s, o, a, r, l, h, c, d, u, p, f, m, g, v, b, y, _, x, w, k, C, S, D, T, P, I, E, M, A, O, $, N, R, z, H, W, L, F, B, j, U, q, Y, V, K, G, X, Q, Z, J, tt, et, it, nt, st;
        it = "function" == typeof define && define.amd, nt = "undefined" != typeof module && module.exports, st = "https:" == document.location.protocol ? "https:" : "http:", it || (nt ? require("jquery-mousewheel")(t) : t.event.special.mousewheel || t("head").append(decodeURI("%3Cscript src=" + st + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))), i = "mCustomScrollbar", n = "mCS", s = ".mCustomScrollbar", o = {
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
        }, a = 0, r = {}, l = window.attachEvent && !window.addEventListener ? 1 : 0, h = !1, c = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"], d = {
            init: function(e) {
                var e = t.extend(!0, {}, o, e),
                    i = u.call(this);
                if (e.live) {
                    var l = e.liveSelector || this.selector || s,
                        h = t(l);
                    if ("off" === e.live) return void f(l);
                    r[l] = setTimeout(function() {
                        h.mCustomScrollbar(e), "once" === e.live && h.length && f(l)
                    }, 500)
                } else f(l);
                return e.setWidth = e.set_width ? e.set_width : e.setWidth, e.setHeight = e.set_height ? e.set_height : e.setHeight, e.axis = e.horizontalScroll ? "x" : m(e.axis), e.scrollInertia = e.scrollInertia > 0 && e.scrollInertia < 17 ? 17 : e.scrollInertia, "object" != typeof e.mouseWheel && 1 == e.mouseWheel && (e.mouseWheel = {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    preventDefault: !1,
                    deltaFactor: "auto",
                    normalizeDelta: !1,
                    invert: !1
                }), e.mouseWheel.scrollAmount = e.mouseWheelPixels ? e.mouseWheelPixels : e.mouseWheel.scrollAmount, e.mouseWheel.normalizeDelta = e.advanced.normalizeMouseWheelDelta ? e.advanced.normalizeMouseWheelDelta : e.mouseWheel.normalizeDelta, e.scrollButtons.scrollType = g(e.scrollButtons.scrollType), p(e), t(i).each(function() {
                    var i = t(this);
                    if (!i.data(n)) {
                        i.data(n, {
                            idx: ++a,
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
                        var s = i.data(n),
                            o = s.opt,
                            r = i.data("mcs-axis"),
                            l = i.data("mcs-scrollbar-position"),
                            h = i.data("mcs-theme");
                        r && (o.axis = r), l && (o.scrollbarPosition = l), h && (o.theme = h, p(o)), v.call(this), s && o.callbacks.onCreate && "function" == typeof o.callbacks.onCreate && o.callbacks.onCreate.call(this), t("#mCSB_" + s.idx + "_container img:not(." + c[2] + ")").addClass(c[2]), d.update.call(null, i)
                    }
                })
            },
            update: function(e, i) {
                var s = e || u.call(this);
                return t(s).each(function() {
                    var e = t(this);
                    if (e.data(n)) {
                        var s = e.data(n),
                            o = s.opt,
                            a = t("#mCSB_" + s.idx + "_container"),
                            r = t("#mCSB_" + s.idx),
                            l = [t("#mCSB_" + s.idx + "_dragger_vertical"), t("#mCSB_" + s.idx + "_dragger_horizontal")];
                        if (!a.length) return;
                        s.tweenRunning && q(e), i && s && o.callbacks.onBeforeUpdate && "function" == typeof o.callbacks.onBeforeUpdate && o.callbacks.onBeforeUpdate.call(this), e.hasClass(c[3]) && e.removeClass(c[3]), e.hasClass(c[4]) && e.removeClass(c[4]), r.css("max-height", "none"), r.height() !== e.height() && r.css("max-height", e.height()), y.call(this), "y" === o.axis || o.advanced.autoExpandHorizontalScroll || a.css("width", b(a)), s.overflowed = C.call(this), P.call(this), o.autoDraggerLength && x.call(this), w.call(this), D.call(this);
                        var h = [Math.abs(a[0].offsetTop), Math.abs(a[0].offsetLeft)];
                        "x" !== o.axis && (s.overflowed[0] ? l[0].height() > l[0].parent().height() ? S.call(this) : (Y(e, h[0].toString(), {
                            dir: "y",
                            dur: 0,
                            overwrite: "none"
                        }), s.contentReset.y = null) : (S.call(this), "y" === o.axis ? T.call(this) : "yx" === o.axis && s.overflowed[1] && Y(e, h[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none"
                        }))), "y" !== o.axis && (s.overflowed[1] ? l[1].width() > l[1].parent().width() ? S.call(this) : (Y(e, h[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none"
                        }), s.contentReset.x = null) : (S.call(this), "x" === o.axis ? T.call(this) : "yx" === o.axis && s.overflowed[0] && Y(e, h[0].toString(), {
                            dir: "y",
                            dur: 0,
                            overwrite: "none"
                        }))), i && s && (2 === i && o.callbacks.onImageLoad && "function" == typeof o.callbacks.onImageLoad ? o.callbacks.onImageLoad.call(this) : 3 === i && o.callbacks.onSelectorChange && "function" == typeof o.callbacks.onSelectorChange ? o.callbacks.onSelectorChange.call(this) : o.callbacks.onUpdate && "function" == typeof o.callbacks.onUpdate && o.callbacks.onUpdate.call(this)), U.call(this)
                    }
                })
            },
            scrollTo: function(e, i) {
                if (void 0 !== e && null != e) {
                    var s = u.call(this);
                    return t(s).each(function() {
                        var s = t(this);
                        if (s.data(n)) {
                            var o = s.data(n),
                                a = o.opt,
                                r = {
                                    trigger: "external",
                                    scrollInertia: a.scrollInertia,
                                    scrollEasing: "mcsEaseInOut",
                                    moveDragger: !1,
                                    timeout: 60,
                                    callbacks: !0,
                                    onStart: !0,
                                    onUpdate: !0,
                                    onComplete: !0
                                },
                                l = t.extend(!0, {}, r, i),
                                h = B.call(this, e),
                                c = l.scrollInertia > 0 && l.scrollInertia < 17 ? 17 : l.scrollInertia;
                            h[0] = j.call(this, h[0], "y"), h[1] = j.call(this, h[1], "x"), l.moveDragger && (h[0] *= o.scrollRatio.y, h[1] *= o.scrollRatio.x), l.dur = et() ? 0 : c, setTimeout(function() {
                                null !== h[0] && void 0 !== h[0] && "x" !== a.axis && o.overflowed[0] && (l.dir = "y", l.overwrite = "all", Y(s, h[0].toString(), l)), null !== h[1] && void 0 !== h[1] && "y" !== a.axis && o.overflowed[1] && (l.dir = "x", l.overwrite = "none", Y(s, h[1].toString(), l))
                            }, l.timeout)
                        }
                    })
                }
            },
            stop: function() {
                var e = u.call(this);
                return t(e).each(function() {
                    var e = t(this);
                    e.data(n) && q(e)
                })
            },
            disable: function(e) {
                var i = u.call(this);
                return t(i).each(function() {
                    var i = t(this);
                    i.data(n) && (i.data(n), U.call(this, "remove"), T.call(this), e && S.call(this), P.call(this, !0), i.addClass(c[3]))
                })
            },
            destroy: function() {
                var e = u.call(this);
                return t(e).each(function() {
                    var s = t(this);
                    if (s.data(n)) {
                        var o = s.data(n),
                            a = o.opt,
                            r = t("#mCSB_" + o.idx),
                            l = t("#mCSB_" + o.idx + "_container"),
                            h = t(".mCSB_" + o.idx + "_scrollbar");
                        a.live && f(a.liveSelector || t(e).selector), U.call(this, "remove"), T.call(this), S.call(this), s.removeData(n), X(this, "mcs"), h.remove(), l.find("img." + c[2]).removeClass(c[2]), r.replaceWith(l.contents()), s.removeClass(i + " _" + n + "_" + o.idx + " " + c[6] + " " + c[7] + " " + c[5] + " " + c[3]).addClass(c[4])
                    }
                })
            }
        }, u = function() {
            return "object" != typeof t(this) || t(this).length < 1 ? s : this
        }, p = function(e) {
            e.autoDraggerLength = !(t.inArray(e.theme, ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"]) > -1) && e.autoDraggerLength, e.autoExpandScrollbar = !(t.inArray(e.theme, ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"]) > -1) && e.autoExpandScrollbar, e.scrollButtons.enable = !(t.inArray(e.theme, ["minimal", "minimal-dark"]) > -1) && e.scrollButtons.enable, e.autoHideScrollbar = t.inArray(e.theme, ["minimal", "minimal-dark"]) > -1 || e.autoHideScrollbar, e.scrollbarPosition = t.inArray(e.theme, ["minimal", "minimal-dark"]) > -1 ? "outside" : e.scrollbarPosition
        }, f = function(t) {
            r[t] && (clearTimeout(r[t]), X(r, t))
        }, m = function(t) {
            return "yx" === t || "xy" === t || "auto" === t ? "yx" : "x" === t || "horizontal" === t ? "x" : "y"
        }, g = function(t) {
            return "stepped" === t || "pixels" === t || "step" === t || "click" === t ? "stepped" : "stepless"
        }, v = function() {
            var e = t(this),
                s = e.data(n),
                o = s.opt,
                a = o.autoExpandScrollbar ? " " + c[1] + "_expand" : "",
                r = ["<div id='mCSB_" + s.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + s.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_vertical" + a + "'><div class='" + c[12] + "'><div id='mCSB_" + s.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + s.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + s.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_horizontal" + a + "'><div class='" + c[12] + "'><div id='mCSB_" + s.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                l = "yx" === o.axis ? "mCSB_vertical_horizontal" : "x" === o.axis ? "mCSB_horizontal" : "mCSB_vertical",
                h = "yx" === o.axis ? r[0] + r[1] : "x" === o.axis ? r[1] : r[0],
                d = "yx" === o.axis ? "<div id='mCSB_" + s.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                u = o.autoHideScrollbar ? " " + c[6] : "",
                p = "x" !== o.axis && "rtl" === s.langDir ? " " + c[7] : "";
            o.setWidth && e.css("width", o.setWidth), o.setHeight && e.css("height", o.setHeight), o.setLeft = "y" !== o.axis && "rtl" === s.langDir ? "989999px" : o.setLeft, e.addClass(i + " _" + n + "_" + s.idx + u + p).wrapInner("<div id='mCSB_" + s.idx + "' class='mCustomScrollBox mCS-" + o.theme + " " + l + "'><div id='mCSB_" + s.idx + "_container' class='mCSB_container' style='position:relative; top:" + o.setTop + "; left:" + o.setLeft + ";' dir=" + s.langDir + " /></div>");
            var f = t("#mCSB_" + s.idx),
                m = t("#mCSB_" + s.idx + "_container");
            "y" === o.axis || o.advanced.autoExpandHorizontalScroll || m.css("width", b(m)), "outside" === o.scrollbarPosition ? ("static" === e.css("position") && e.css("position", "relative"), e.css("overflow", "visible"), f.addClass("mCSB_outside").after(h)) : (f.addClass("mCSB_inside").append(h), m.wrap(d)), _.call(this);
            var g = [t("#mCSB_" + s.idx + "_dragger_vertical"), t("#mCSB_" + s.idx + "_dragger_horizontal")];
            g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width())
        }, b = function(e) {
            var i = [e[0].scrollWidth, Math.max.apply(Math, e.children().map(function() {
                    return t(this).outerWidth(!0)
                }).get())],
                n = e.parent().width();
            return i[0] > n ? i[0] : i[1] > n ? i[1] : "100%"
        }, y = function() {
            var e = t(this),
                i = e.data(n),
                s = i.opt,
                o = t("#mCSB_" + i.idx + "_container");
            if (s.advanced.autoExpandHorizontalScroll && "y" !== s.axis) {
                o.css({
                    width: "auto",
                    "min-width": 0,
                    "overflow-x": "scroll"
                });
                var a = Math.ceil(o[0].scrollWidth);
                3 === s.advanced.autoExpandHorizontalScroll || 2 !== s.advanced.autoExpandHorizontalScroll && a > o.parent().width() ? o.css({
                    width: a,
                    "min-width": "100%",
                    "overflow-x": "inherit"
                }) : o.css({
                    "overflow-x": "inherit",
                    position: "absolute"
                }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                    width: Math.ceil(o[0].getBoundingClientRect().right + .4) - Math.floor(o[0].getBoundingClientRect().left),
                    "min-width": "100%",
                    position: "relative"
                }).unwrap()
            }
        }, _ = function() {
            var e = t(this),
                i = e.data(n),
                s = i.opt,
                o = t(".mCSB_" + i.idx + "_scrollbar:first"),
                a = J(s.scrollButtons.tabindex) ? "tabindex='" + s.scrollButtons.tabindex + "'" : "",
                r = ["<a href='#' class='" + c[13] + "' oncontextmenu='return false;' " + a + " />", "<a href='#' class='" + c[14] + "' oncontextmenu='return false;' " + a + " />", "<a href='#' class='" + c[15] + "' oncontextmenu='return false;' " + a + " />", "<a href='#' class='" + c[16] + "' oncontextmenu='return false;' " + a + " />"],
                l = ["x" === s.axis ? r[2] : r[0], "x" === s.axis ? r[3] : r[1], r[2], r[3]];
            s.scrollButtons.enable && o.prepend(l[0]).append(l[1]).next(".mCSB_scrollTools").prepend(l[2]).append(l[3])
        }, x = function() {
            var e = t(this),
                i = e.data(n),
                s = t("#mCSB_" + i.idx),
                o = t("#mCSB_" + i.idx + "_container"),
                a = [t("#mCSB_" + i.idx + "_dragger_vertical"), t("#mCSB_" + i.idx + "_dragger_horizontal")],
                r = [s.height() / o.outerHeight(!1), s.width() / o.outerWidth(!1)],
                h = [parseInt(a[0].css("min-height")), Math.round(r[0] * a[0].parent().height()), parseInt(a[1].css("min-width")), Math.round(r[1] * a[1].parent().width())],
                c = l && h[1] < h[0] ? h[0] : h[1],
                d = l && h[3] < h[2] ? h[2] : h[3];
            a[0].css({
                height: c,
                "max-height": a[0].parent().height() - 10
            }).find(".mCSB_dragger_bar").css({
                "line-height": h[0] + "px"
            }), a[1].css({
                width: d,
                "max-width": a[1].parent().width() - 10
            })
        }, w = function() {
            var e = t(this),
                i = e.data(n),
                s = t("#mCSB_" + i.idx),
                o = t("#mCSB_" + i.idx + "_container"),
                a = [t("#mCSB_" + i.idx + "_dragger_vertical"), t("#mCSB_" + i.idx + "_dragger_horizontal")],
                r = [o.outerHeight(!1) - s.height(), o.outerWidth(!1) - s.width()],
                l = [r[0] / (a[0].parent().height() - a[0].height()), r[1] / (a[1].parent().width() - a[1].width())];
            i.scrollRatio = {
                y: l[0],
                x: l[1]
            }
        }, k = function(t, e, i) {
            var n = i ? c[0] + "_expanded" : "",
                s = t.closest(".mCSB_scrollTools");
            "active" === e ? (t.toggleClass(c[0] + " " + n), s.toggleClass(c[1]), t[0]._draggable = t[0]._draggable ? 0 : 1) : t[0]._draggable || ("hide" === e ? (t.removeClass(c[0]), s.removeClass(c[1])) : (t.addClass(c[0]), s.addClass(c[1])))
        }, C = function() {
            var e = t(this),
                i = e.data(n),
                s = t("#mCSB_" + i.idx),
                o = t("#mCSB_" + i.idx + "_container"),
                a = null == i.overflowed ? o.height() : o.outerHeight(!1),
                r = null == i.overflowed ? o.width() : o.outerWidth(!1),
                l = o[0].scrollHeight,
                h = o[0].scrollWidth;
            return l > a && (a = l), h > r && (r = h), [a > s.height(), r > s.width()]
        }, S = function() {
            var e = t(this),
                i = e.data(n),
                s = i.opt,
                o = t("#mCSB_" + i.idx),
                a = t("#mCSB_" + i.idx + "_container"),
                r = [t("#mCSB_" + i.idx + "_dragger_vertical"), t("#mCSB_" + i.idx + "_dragger_horizontal")];
            if (q(e), ("x" !== s.axis && !i.overflowed[0] || "y" === s.axis && i.overflowed[0]) && (r[0].add(a).css("top", 0), Y(e, "_resetY")), "y" !== s.axis && !i.overflowed[1] || "x" === s.axis && i.overflowed[1]) {
                var l = dx = 0;
                "rtl" === i.langDir && (l = o.width() - a.outerWidth(!1), dx = Math.abs(l / i.scrollRatio.x)), a.css("left", l), r[1].css("left", dx), Y(e, "_resetX")
            }
        }, D = function() {
            var e, i = t(this),
                s = i.data(n),
                o = s.opt;
            s.bindEvents || (E.call(this), o.contentTouchScroll && M.call(this), A.call(this), o.mouseWheel.enable && function n() {
                e = setTimeout(function() {
                    t.event.special.mousewheel ? (clearTimeout(e), O.call(i[0])) : n()
                }, 100)
            }(), R.call(this), H.call(this), o.advanced.autoScrollOnFocus && z.call(this), o.scrollButtons.enable && W.call(this), o.keyboard.enable && L.call(this), s.bindEvents = !0)
        }, T = function() {
            var e = t(this),
                i = e.data(n),
                s = i.opt,
                o = "mCS_" + i.idx,
                a = ".mCSB_" + i.idx + "_scrollbar",
                r = t("#mCSB_" + i.idx + ",#mCSB_" + i.idx + "_container,#mCSB_" + i.idx + "_container_wrapper," + a + " ." + c[12] + ",#mCSB_" + i.idx + "_dragger_vertical,#mCSB_" + i.idx + "_dragger_horizontal," + a + ">a"),
                l = t("#mCSB_" + i.idx + "_container");
            s.advanced.releaseDraggableSelectors && r.add(t(s.advanced.releaseDraggableSelectors)), s.advanced.extraDraggableSelectors && r.add(t(s.advanced.extraDraggableSelectors)), i.bindEvents && (t(document).add(t(top.document)).unbind("." + o), r.each(function() {
                t(this).unbind("." + o)
            }), clearTimeout(e[0]._focusTimeout), X(e[0], "_focusTimeout"), clearTimeout(i.sequential.step), X(i.sequential, "step"), clearTimeout(l[0].onCompleteTimeout), X(l[0], "onCompleteTimeout"), i.bindEvents = !1)
        }, P = function(e) {
            var i = t(this),
                s = i.data(n),
                o = s.opt,
                a = t("#mCSB_" + s.idx + "_container_wrapper"),
                r = a.length ? a : t("#mCSB_" + s.idx + "_container"),
                l = [t("#mCSB_" + s.idx + "_scrollbar_vertical"), t("#mCSB_" + s.idx + "_scrollbar_horizontal")],
                h = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
            "x" !== o.axis && (s.overflowed[0] && !e ? (l[0].add(h[0]).add(l[0].children("a")).css("display", "block"), r.removeClass(c[8] + " " + c[10])) : (o.alwaysShowScrollbar ? (2 !== o.alwaysShowScrollbar && h[0].css("display", "none"), r.removeClass(c[10])) : (l[0].css("display", "none"), r.addClass(c[10])), r.addClass(c[8]))), "y" !== o.axis && (s.overflowed[1] && !e ? (l[1].add(h[1]).add(l[1].children("a")).css("display", "block"), r.removeClass(c[9] + " " + c[11])) : (o.alwaysShowScrollbar ? (2 !== o.alwaysShowScrollbar && h[1].css("display", "none"), r.removeClass(c[11])) : (l[1].css("display", "none"), r.addClass(c[11])), r.addClass(c[9]))), s.overflowed[0] || s.overflowed[1] ? i.removeClass(c[5]) : i.addClass(c[5])
        }, I = function(e) {
            var i = e.type,
                n = e.target.ownerDocument !== document ? [t(frameElement).offset().top, t(frameElement).offset().left] : null,
                s = e.target.ownerDocument !== top.document ? [t(e.view.frameElement).offset().top, t(e.view.frameElement).offset().left] : [0, 0];
            switch (i) {
                case "pointerdown":
                case "MSPointerDown":
                case "pointermove":
                case "MSPointerMove":
                case "pointerup":
                case "MSPointerUp":
                    return n ? [e.originalEvent.pageY - n[0] + s[0], e.originalEvent.pageX - n[1] + s[1], !1] : [e.originalEvent.pageY, e.originalEvent.pageX, !1];
                case "touchstart":
                case "touchmove":
                case "touchend":
                    var o = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
                        a = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
                    return e.target.ownerDocument !== document ? [o.screenY, o.screenX, a > 1] : [o.pageY, o.pageX, a > 1];
                default:
                    return n ? [e.pageY - n[0] + s[0], e.pageX - n[1] + s[1], !1] : [e.pageY, e.pageX, !1]
            }
        }, E = function() {
            function e(t) {
                var e = f.find("iframe");
                if (e.length) {
                    var i = t ? "auto" : "none";
                    e.css("pointer-events", i)
                }
            }

            function i(t, e, i, n) {
                if (f[0].idleTimer = d.scrollInertia < 233 ? 250 : 0, s.attr("id") === p[1]) var o = "x",
                    a = (s[0].offsetLeft - e + n) * c.scrollRatio.x;
                else var o = "y",
                    a = (s[0].offsetTop - t + i) * c.scrollRatio.y;
                Y(r, a.toString(), {
                    dir: o,
                    drag: !0
                })
            }
            var s, o, a, r = t(this),
                c = r.data(n),
                d = c.opt,
                u = "mCS_" + c.idx,
                p = ["mCSB_" + c.idx + "_dragger_vertical", "mCSB_" + c.idx + "_dragger_horizontal"],
                f = t("#mCSB_" + c.idx + "_container"),
                m = t("#" + p[0] + ",#" + p[1]),
                g = d.advanced.releaseDraggableSelectors ? m.add(t(d.advanced.releaseDraggableSelectors)) : m,
                v = d.advanced.extraDraggableSelectors ? t(top.document).add(t(d.advanced.extraDraggableSelectors)) : t(top.document);
            m.bind("mousedown." + u + " touchstart." + u + " pointerdown." + u + " MSPointerDown." + u, function(i) {
                if (i.stopImmediatePropagation(), i.preventDefault(), Q(i)) {
                    h = !0, l && (document.onselectstart = function() {
                        return !1
                    }), e(!1), q(r);
                    var n = (s = t(this)).offset(),
                        c = I(i)[0] - n.top,
                        u = I(i)[1] - n.left,
                        p = s.height() + n.top,
                        f = s.width() + n.left;
                    p > c && c > 0 && f > u && u > 0 && (o = c, a = u), k(s, "active", d.autoExpandScrollbar)
                }
            }).bind("touchmove." + u, function(t) {
                t.stopImmediatePropagation(), t.preventDefault();
                var e = s.offset(),
                    n = I(t)[0] - e.top,
                    r = I(t)[1] - e.left;
                i(o, a, n, r)
            }), t(document).add(v).bind("mousemove." + u + " pointermove." + u + " MSPointerMove." + u, function(t) {
                if (s) {
                    var e = s.offset(),
                        n = I(t)[0] - e.top,
                        r = I(t)[1] - e.left;
                    if (o === n && a === r) return;
                    i(o, a, n, r)
                }
            }).add(g).bind("mouseup." + u + " touchend." + u + " pointerup." + u + " MSPointerUp." + u, function(t) {
                s && (k(s, "active", d.autoExpandScrollbar), s = null), h = !1, l && (document.onselectstart = null), e(!0)
            })
        }, M = function() {
            function i(t) {
                if (!Z(t) || h || I(t)[2]) e = 0;
                else {
                    e = 1, w = 0, k = 0, c = 1, C.removeClass("mCS_touch_action");
                    var i = E.offset();
                    d = I(t)[0] - i.top, u = I(t)[1] - i.left, z = [I(t)[0], I(t)[1]]
                }
            }

            function s(t) {
                if (Z(t) && !h && !I(t)[2] && (D.documentTouchScroll || t.preventDefault(), t.stopImmediatePropagation(), (!k || w) && c)) {
                    g = K();
                    var e = P.offset(),
                        i = I(t)[0] - e.top,
                        n = I(t)[1] - e.left,
                        s = "mcsLinearOut";
                    if (A.push(i), O.push(n), z[2] = Math.abs(I(t)[0] - z[0]), z[3] = Math.abs(I(t)[1] - z[1]), S.overflowed[0]) var o = M[0].parent().height() - M[0].height(),
                        a = d - i > 0 && i - d > -o * S.scrollRatio.y && (2 * z[3] < z[2] || "yx" === D.axis);
                    if (S.overflowed[1]) var r = M[1].parent().width() - M[1].width(),
                        p = u - n > 0 && n - u > -r * S.scrollRatio.x && (2 * z[2] < z[3] || "yx" === D.axis);
                    a || p ? (L || t.preventDefault(), w = 1) : (k = 1, C.addClass("mCS_touch_action")), L && t.preventDefault(), _ = "yx" === D.axis ? [d - i, u - n] : "x" === D.axis ? [null, u - n] : [d - i, null], E[0].idleTimer = 250, S.overflowed[0] && l(_[0], N, s, "y", "all", !0), S.overflowed[1] && l(_[1], N, s, "x", R, !0)
                }
            }

            function o(t) {
                if (!Z(t) || h || I(t)[2]) e = 0;
                else {
                    e = 1, t.stopImmediatePropagation(), q(C), m = K();
                    var i = P.offset();
                    p = I(t)[0] - i.top, f = I(t)[1] - i.left, A = [], O = []
                }
            }

            function a(t) {
                if (Z(t) && !h && !I(t)[2]) {
                    c = 0, t.stopImmediatePropagation(), w = 0, k = 0, v = K();
                    var e = P.offset(),
                        i = I(t)[0] - e.top,
                        n = I(t)[1] - e.left;
                    if (!(v - g > 30)) {
                        var s = "mcsEaseOut",
                            o = 2.5 > (y = 1e3 / (v - m)),
                            a = o ? [A[A.length - 2], O[O.length - 2]] : [0, 0];
                        b = o ? [i - a[0], n - a[1]] : [i - p, n - f];
                        var d = [Math.abs(b[0]), Math.abs(b[1])];
                        y = o ? [Math.abs(b[0] / 4), Math.abs(b[1] / 4)] : [y, y];
                        var u = [Math.abs(E[0].offsetTop) - b[0] * r(d[0] / y[0], y[0]), Math.abs(E[0].offsetLeft) - b[1] * r(d[1] / y[1], y[1])];
                        _ = "yx" === D.axis ? [u[0], u[1]] : "x" === D.axis ? [null, u[1]] : [u[0], null], x = [4 * d[0] + D.scrollInertia, 4 * d[1] + D.scrollInertia];
                        var C = parseInt(D.contentTouchScroll) || 0;
                        _[0] = d[0] > C ? _[0] : 0, _[1] = d[1] > C ? _[1] : 0, S.overflowed[0] && l(_[0], x[0], s, "y", R, !1), S.overflowed[1] && l(_[1], x[1], s, "x", R, !1)
                    }
                }
            }

            function r(t, e) {
                var i = [1.5 * e, 2 * e, e / 1.5, e / 2];
                return t > 90 ? e > 4 ? i[0] : i[3] : t > 60 ? e > 3 ? i[3] : i[2] : t > 30 ? e > 8 ? i[1] : e > 6 ? i[0] : e > 4 ? e : i[2] : e > 8 ? e : i[3]
            }

            function l(t, e, i, n, s, o) {
                t && Y(C, t.toString(), {
                    dur: e,
                    scrollEasing: i,
                    dir: n,
                    overwrite: s,
                    drag: o
                })
            }
            var c, d, u, p, f, m, g, v, b, y, _, x, w, k, C = t(this),
                S = C.data(n),
                D = S.opt,
                T = "mCS_" + S.idx,
                P = t("#mCSB_" + S.idx),
                E = t("#mCSB_" + S.idx + "_container"),
                M = [t("#mCSB_" + S.idx + "_dragger_vertical"), t("#mCSB_" + S.idx + "_dragger_horizontal")],
                A = [],
                O = [],
                N = 0,
                R = "yx" === D.axis ? "none" : "all",
                z = [],
                H = E.find("iframe"),
                W = ["touchstart." + T + " pointerdown." + T + " MSPointerDown." + T, "touchmove." + T + " pointermove." + T + " MSPointerMove." + T, "touchend." + T + " pointerup." + T + " MSPointerUp." + T],
                L = void 0 !== document.body.style.touchAction;
            E.bind(W[0], function(t) {
                i(t)
            }).bind(W[1], function(t) {
                s(t)
            }), P.bind(W[0], function(t) {
                o(t)
            }).bind(W[2], function(t) {
                a(t)
            }), H.length && H.each(function() {
                t(this).load(function() {
                    $(this) && t(this.contentDocument || this.contentWindow.document).bind(W[0], function(t) {
                        i(t), o(t)
                    }).bind(W[1], function(t) {
                        s(t)
                    }).bind(W[2], function(t) {
                        a(t)
                    })
                })
            })
        }, A = function() {
            function i(t, e, i) {
                l.type = i && s ? "stepped" : "stepless", l.scrollAmount = 10, F(o, t, e, "mcsLinearOut", i ? 60 : null)
            }
            var s, o = t(this),
                a = o.data(n),
                r = a.opt,
                l = a.sequential,
                c = "mCS_" + a.idx,
                d = t("#mCSB_" + a.idx + "_container"),
                u = d.parent();
            d.bind("mousedown." + c, function(t) {
                e || s || (s = 1, h = !0)
            }).add(document).bind("mousemove." + c, function(t) {
                if (!e && s && (window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type && document.selection.createRange().text)) {
                    var n = d.offset(),
                        o = I(t)[0] - n.top + d[0].offsetTop,
                        h = I(t)[1] - n.left + d[0].offsetLeft;
                    o > 0 && o < u.height() && h > 0 && h < u.width() ? l.step && i("off", null, "stepped") : ("x" !== r.axis && a.overflowed[0] && (0 > o ? i("on", 38) : o > u.height() && i("on", 40)), "y" !== r.axis && a.overflowed[1] && (0 > h ? i("on", 37) : h > u.width() && i("on", 39)))
                }
            }).bind("mouseup." + c + " dragend." + c, function(t) {
                e || (s && (s = 0, i("off", null)), h = !1)
            })
        }, O = function() {
            function e(e, n) {
                if (q(i), !N(i, e.target)) {
                    var a = "auto" !== o.mouseWheel.deltaFactor ? parseInt(o.mouseWheel.deltaFactor) : l && e.deltaFactor < 100 ? 100 : e.deltaFactor || 100,
                        c = o.scrollInertia;
                    if ("x" === o.axis || "x" === o.mouseWheel.axis) var d = "x",
                        u = [Math.round(a * s.scrollRatio.x), parseInt(o.mouseWheel.scrollAmount)],
                        p = "auto" !== o.mouseWheel.scrollAmount ? u[1] : u[0] >= r.width() ? .9 * r.width() : u[0],
                        f = Math.abs(t("#mCSB_" + s.idx + "_container")[0].offsetLeft),
                        m = h[1][0].offsetLeft,
                        g = h[1].parent().width() - h[1].width(),
                        v = e.deltaX || e.deltaY || n;
                    else var d = "y",
                        u = [Math.round(a * s.scrollRatio.y), parseInt(o.mouseWheel.scrollAmount)],
                        p = "auto" !== o.mouseWheel.scrollAmount ? u[1] : u[0] >= r.height() ? .9 * r.height() : u[0],
                        f = Math.abs(t("#mCSB_" + s.idx + "_container")[0].offsetTop),
                        m = h[0][0].offsetTop,
                        g = h[0].parent().height() - h[0].height(),
                        v = e.deltaY || n;
                    "y" === d && !s.overflowed[0] || "x" === d && !s.overflowed[1] || ((o.mouseWheel.invert || e.webkitDirectionInvertedFromDevice) && (v = -v), o.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1), (v > 0 && 0 !== m || 0 > v && m !== g || o.mouseWheel.preventDefault) && (e.stopImmediatePropagation(), e.preventDefault()), e.deltaFactor < 2 && !o.mouseWheel.normalizeDelta && (p = e.deltaFactor, c = 17), Y(i, (f - v * p).toString(), {
                        dir: d,
                        dur: c
                    }))
                }
            }
            if (t(this).data(n)) {
                var i = t(this),
                    s = i.data(n),
                    o = s.opt,
                    a = "mCS_" + s.idx,
                    r = t("#mCSB_" + s.idx),
                    h = [t("#mCSB_" + s.idx + "_dragger_vertical"), t("#mCSB_" + s.idx + "_dragger_horizontal")],
                    c = t("#mCSB_" + s.idx + "_container").find("iframe");
                c.length && c.each(function() {
                    t(this).load(function() {
                        $(this) && t(this.contentDocument || this.contentWindow.document).bind("mousewheel." + a, function(t, i) {
                            e(t, i)
                        })
                    })
                }), r.bind("mousewheel." + a, function(t, i) {
                    e(t, i)
                })
            }
        }, $ = function(t) {
            var e = null;
            try {
                var i = t.contentDocument || t.contentWindow.document;
                e = i.body.innerHTML
            } catch (t) {}
            return null !== e
        }, N = function(e, i) {
            var s = i.nodeName.toLowerCase(),
                o = e.data(n).opt.mouseWheel.disableOver;
            return t.inArray(s, o) > -1 && !(t.inArray(s, ["select", "textarea"]) > -1 && !t(i).is(":focus"))
        }, R = function() {
            var e, i = t(this),
                s = i.data(n),
                o = "mCS_" + s.idx,
                a = t("#mCSB_" + s.idx + "_container"),
                r = a.parent(),
                l = t(".mCSB_" + s.idx + "_scrollbar ." + c[12]);
            l.bind("mousedown." + o + " touchstart." + o + " pointerdown." + o + " MSPointerDown." + o, function(i) {
                h = !0, t(i.target).hasClass("mCSB_dragger") || (e = 1)
            }).bind("touchend." + o + " pointerup." + o + " MSPointerUp." + o, function(t) {
                h = !1
            }).bind("click." + o, function(n) {
                if (e && (e = 0, t(n.target).hasClass(c[12]) || t(n.target).hasClass("mCSB_draggerRail"))) {
                    q(i);
                    var o = t(this),
                        l = o.find(".mCSB_dragger");
                    if (o.parent(".mCSB_scrollTools_horizontal").length > 0) {
                        if (!s.overflowed[1]) return;
                        var h = "x",
                            d = n.pageX > l.offset().left ? -1 : 1,
                            u = Math.abs(a[0].offsetLeft) - .9 * d * r.width()
                    } else {
                        if (!s.overflowed[0]) return;
                        var h = "y",
                            d = n.pageY > l.offset().top ? -1 : 1,
                            u = Math.abs(a[0].offsetTop) - .9 * d * r.height()
                    }
                    Y(i, u.toString(), {
                        dir: h,
                        scrollEasing: "mcsEaseInOut"
                    })
                }
            })
        }, z = function() {
            var e = t(this),
                i = e.data(n),
                s = i.opt,
                o = "mCS_" + i.idx,
                a = t("#mCSB_" + i.idx + "_container"),
                r = a.parent();
            a.bind("focusin." + o, function(i) {
                var n = t(document.activeElement),
                    o = a.find(".mCustomScrollBox").length;
                n.is(s.advanced.autoScrollOnFocus) && (q(e), clearTimeout(e[0]._focusTimeout), e[0]._focusTimer = o ? 17 * o : 0, e[0]._focusTimeout = setTimeout(function() {
                    var t = [tt(n)[0], tt(n)[1]],
                        i = [a[0].offsetTop, a[0].offsetLeft],
                        o = [i[0] + t[0] >= 0 && i[0] + t[0] < r.height() - n.outerHeight(!1), i[1] + t[1] >= 0 && i[0] + t[1] < r.width() - n.outerWidth(!1)],
                        l = "yx" !== s.axis || o[0] || o[1] ? "all" : "none";
                    "x" === s.axis || o[0] || Y(e, t[0].toString(), {
                        dir: "y",
                        scrollEasing: "mcsEaseInOut",
                        overwrite: l,
                        dur: 0
                    }), "y" === s.axis || o[1] || Y(e, t[1].toString(), {
                        dir: "x",
                        scrollEasing: "mcsEaseInOut",
                        overwrite: l,
                        dur: 0
                    })
                }, e[0]._focusTimer))
            })
        }, H = function() {
            var e = t(this),
                i = e.data(n),
                s = "mCS_" + i.idx,
                o = t("#mCSB_" + i.idx + "_container").parent();
            o.bind("scroll." + s, function(e) {
                (0 !== o.scrollTop() || 0 !== o.scrollLeft()) && t(".mCSB_" + i.idx + "_scrollbar").css("visibility", "hidden")
            })
        }, W = function() {
            var e = t(this),
                i = e.data(n),
                s = i.opt,
                o = i.sequential,
                a = "mCS_" + i.idx,
                r = ".mCSB_" + i.idx + "_scrollbar",
                l = t(r + ">a");
            l.bind("mousedown." + a + " touchstart." + a + " pointerdown." + a + " MSPointerDown." + a + " mouseup." + a + " touchend." + a + " pointerup." + a + " MSPointerUp." + a + " mouseout." + a + " pointerout." + a + " MSPointerOut." + a + " click." + a, function(n) {
                function a(t, i) {
                    o.scrollAmount = s.scrollButtons.scrollAmount, F(e, t, i)
                }
                if (n.preventDefault(), Q(n)) {
                    var r = t(this).attr("class");
                    switch (o.type = s.scrollButtons.scrollType, n.type) {
                        case "mousedown":
                        case "touchstart":
                        case "pointerdown":
                        case "MSPointerDown":
                            if ("stepped" === o.type) return;
                            h = !0, i.tweenRunning = !1, a("on", r);
                            break;
                        case "mouseup":
                        case "touchend":
                        case "pointerup":
                        case "MSPointerUp":
                        case "mouseout":
                        case "pointerout":
                        case "MSPointerOut":
                            if ("stepped" === o.type) return;
                            h = !1, o.dir && a("off", r);
                            break;
                        case "click":
                            if ("stepped" !== o.type || i.tweenRunning) return;
                            a("on", r)
                    }
                }
            })
        }, L = function() {
            function e(e) {
                function n(t, e) {
                    a.type = o.keyboard.scrollType, a.scrollAmount = o.keyboard.scrollAmount, "stepped" === a.type && s.tweenRunning || F(i, t, e)
                }
                switch (e.type) {
                    case "blur":
                        s.tweenRunning && a.dir && n("off", null);
                        break;
                    case "keydown":
                    case "keyup":
                        var r = e.keyCode ? e.keyCode : e.which,
                            l = "on";
                        if ("x" !== o.axis && (38 === r || 40 === r) || "y" !== o.axis && (37 === r || 39 === r)) {
                            if ((38 === r || 40 === r) && !s.overflowed[0] || (37 === r || 39 === r) && !s.overflowed[1]) return;
                            "keyup" === e.type && (l = "off"), t(document.activeElement).is(d) || (e.preventDefault(), e.stopImmediatePropagation(), n(l, r))
                        } else if (33 === r || 34 === r) {
                            if ((s.overflowed[0] || s.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()), "keyup" === e.type) {
                                q(i);
                                var u = 34 === r ? -1 : 1;
                                if ("x" === o.axis || "yx" === o.axis && s.overflowed[1] && !s.overflowed[0]) var p = "x",
                                    f = Math.abs(h[0].offsetLeft) - .9 * u * c.width();
                                else var p = "y",
                                    f = Math.abs(h[0].offsetTop) - .9 * u * c.height();
                                Y(i, f.toString(), {
                                    dir: p,
                                    scrollEasing: "mcsEaseInOut"
                                })
                            }
                        } else if ((35 === r || 36 === r) && !t(document.activeElement).is(d) && ((s.overflowed[0] || s.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()), "keyup" === e.type)) {
                            if ("x" === o.axis || "yx" === o.axis && s.overflowed[1] && !s.overflowed[0]) var p = "x",
                                f = 35 === r ? Math.abs(c.width() - h.outerWidth(!1)) : 0;
                            else var p = "y",
                                f = 35 === r ? Math.abs(c.height() - h.outerHeight(!1)) : 0;
                            Y(i, f.toString(), {
                                dir: p,
                                scrollEasing: "mcsEaseInOut"
                            })
                        }
                }
            }
            var i = t(this),
                s = i.data(n),
                o = s.opt,
                a = s.sequential,
                r = "mCS_" + s.idx,
                l = t("#mCSB_" + s.idx),
                h = t("#mCSB_" + s.idx + "_container"),
                c = h.parent(),
                d = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                u = h.find("iframe"),
                p = ["blur." + r + " keydown." + r + " keyup." + r];
            u.length && u.each(function() {
                t(this).load(function() {
                    $(this) && t(this.contentDocument || this.contentWindow.document).bind(p[0], function(t) {
                        e(t)
                    })
                })
            }), l.attr("tabindex", "0").bind(p[0], function(t) {
                e(t)
            })
        }, F = function(e, i, s, o, a) {
            function r(t) {
                h.snapAmount && (d.scrollAmount = h.snapAmount instanceof Array ? "x" === d.dir[0] ? h.snapAmount[1] : h.snapAmount[0] : h.snapAmount);
                var i = "stepped" !== d.type,
                    n = a || (t ? i ? f / 1.5 : m : 1e3 / 60),
                    s = t ? i ? 7.5 : 40 : 2.5,
                    c = [Math.abs(u[0].offsetTop), Math.abs(u[0].offsetLeft)],
                    p = [l.scrollRatio.y > 10 ? 10 : l.scrollRatio.y, l.scrollRatio.x > 10 ? 10 : l.scrollRatio.x],
                    g = "x" === d.dir[0] ? c[1] + d.dir[1] * p[1] * s : c[0] + d.dir[1] * p[0] * s,
                    v = "x" === d.dir[0] ? c[1] + d.dir[1] * parseInt(d.scrollAmount) : c[0] + d.dir[1] * parseInt(d.scrollAmount),
                    b = "auto" !== d.scrollAmount ? v : g,
                    y = o || (t ? i ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear"),
                    _ = !!t;
                return t && 17 > n && (b = "x" === d.dir[0] ? c[1] : c[0]), Y(e, b.toString(), {
                    dir: d.dir[0],
                    scrollEasing: y,
                    dur: n,
                    onComplete: _
                }), t ? void(d.dir = !1) : (clearTimeout(d.step), void(d.step = setTimeout(function() {
                    r()
                }, n)))
            }
            var l = e.data(n),
                h = l.opt,
                d = l.sequential,
                u = t("#mCSB_" + l.idx + "_container"),
                p = "stepped" === d.type,
                f = h.scrollInertia < 26 ? 26 : h.scrollInertia,
                m = h.scrollInertia < 1 ? 17 : h.scrollInertia;
            switch (i) {
                case "on":
                    if (d.dir = [s === c[16] || s === c[15] || 39 === s || 37 === s ? "x" : "y", s === c[13] || s === c[15] || 38 === s || 37 === s ? -1 : 1], q(e), J(s) && "stepped" === d.type) return;
                    r(p);
                    break;
                case "off":
                    clearTimeout(d.step), X(d, "step"), q(e), (p || l.tweenRunning && d.dir) && r(!0)
            }
        }, B = function(e) {
            var i = t(this).data(n).opt,
                s = [];
            return "function" == typeof e && (e = e()), e instanceof Array ? s = e.length > 1 ? [e[0], e[1]] : "x" === i.axis ? [null, e[0]] : [e[0], null] : (s[0] = e.y ? e.y : e.x || "x" === i.axis ? null : e, s[1] = e.x ? e.x : e.y || "y" === i.axis ? null : e), "function" == typeof s[0] && (s[0] = s[0]()), "function" == typeof s[1] && (s[1] = s[1]()), s
        }, j = function(e, i) {
            if (null != e && void 0 !== e) {
                var s = t(this),
                    o = s.data(n),
                    a = o.opt,
                    r = t("#mCSB_" + o.idx + "_container"),
                    l = r.parent(),
                    h = typeof e;
                i || (i = "x" === a.axis ? "x" : "y");
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
                        return t(e).length ? "x" === i ? tt(t(e))[1] : tt(t(e))[0] : (r.css(p, e), void d.update.call(null, s[0]))
                }
            }
        }, U = function(e) {
            function i(t) {
                clearTimeout(r[0].autoUpdate), d.update.call(null, s[0], t)
            }
            var s = t(this),
                o = s.data(n),
                a = o.opt,
                r = t("#mCSB_" + o.idx + "_container");
            return e ? (clearTimeout(r[0].autoUpdate), void X(r[0], "autoUpdate")) : void
            function e() {
                return clearTimeout(r[0].autoUpdate), 0 === s.parents("html").length ? void(s = null) : void(r[0].autoUpdate = setTimeout(function() {
                    return a.advanced.updateOnSelectorChange && (o.poll.change.n = function() {
                        !0 === a.advanced.updateOnSelectorChange && (a.advanced.updateOnSelectorChange = "*");
                        var t = 0,
                            e = r.find(a.advanced.updateOnSelectorChange);
                        return a.advanced.updateOnSelectorChange && e.length > 0 && e.each(function() {
                            t += this.offsetHeight + this.offsetWidth
                        }), t
                    }(), o.poll.change.n !== o.poll.change.o) ? (o.poll.change.o = o.poll.change.n, void i(3)) : a.advanced.updateOnContentResize && (o.poll.size.n = s[0].scrollHeight + s[0].scrollWidth + r[0].offsetHeight + s[0].offsetHeight + s[0].offsetWidth, o.poll.size.n !== o.poll.size.o) ? (o.poll.size.o = o.poll.size.n, void i(1)) : !a.advanced.updateOnImageLoad || "auto" === a.advanced.updateOnImageLoad && "y" === a.axis || (o.poll.img.n = r.find("img").length, o.poll.img.n === o.poll.img.o) ? void((a.advanced.updateOnSelectorChange || a.advanced.updateOnContentResize || a.advanced.updateOnImageLoad) && e()) : (o.poll.img.o = o.poll.img.n, void r.find("img").each(function() {
                        ! function(e) {
                            if (t(e).hasClass(c[2])) i();
                            else {
                                var n = new Image;
                                n.onload = function(t, e) {
                                    return function() {
                                        return e.apply(t, arguments)
                                    }
                                }(n, function() {
                                    this.onload = null, t(e).addClass(c[2]), i(2)
                                }), n.src = e.src
                            }
                        }(this)
                    }))
                }, a.advanced.autoUpdateTimeout))
            }()
        }, q = function(e) {
            var i = e.data(n),
                s = t("#mCSB_" + i.idx + "_container,#mCSB_" + i.idx + "_container_wrapper,#mCSB_" + i.idx + "_dragger_vertical,#mCSB_" + i.idx + "_dragger_horizontal");
            s.each(function() {
                G.call(this)
            })
        }, Y = function(e, i, s) {
            function o(t) {
                return c && d.callbacks[t] && "function" == typeof d.callbacks[t]
            }

            function a() {
                var t = [m[0].offsetTop, m[0].offsetLeft],
                    i = [_[0].offsetTop, _[0].offsetLeft],
                    n = [m.outerHeight(!1), m.outerWidth(!1)],
                    o = [f.height(), f.width()];
                e[0].mcs = {
                    content: m,
                    top: t[0],
                    left: t[1],
                    draggerTop: i[0],
                    draggerLeft: i[1],
                    topPct: Math.round(100 * Math.abs(t[0]) / (Math.abs(n[0]) - o[0])),
                    leftPct: Math.round(100 * Math.abs(t[1]) / (Math.abs(n[1]) - o[1])),
                    direction: s.dir
                }
            }
            var r, l, h, c = e.data(n),
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
                s = t.extend(u, s),
                p = [s.dur, s.drag ? 0 : s.dur],
                f = t("#mCSB_" + c.idx),
                m = t("#mCSB_" + c.idx + "_container"),
                g = m.parent(),
                v = d.callbacks.onTotalScrollOffset ? B.call(e, d.callbacks.onTotalScrollOffset) : [0, 0],
                b = d.callbacks.onTotalScrollBackOffset ? B.call(e, d.callbacks.onTotalScrollBackOffset) : [0, 0];
            if (c.trigger = s.trigger, (0 !== g.scrollTop() || 0 !== g.scrollLeft()) && (t(".mCSB_" + c.idx + "_scrollbar").css("visibility", "visible"), g.scrollTop(0).scrollLeft(0)), "_resetY" !== i || c.contentReset.y || (o("onOverflowYNone") && d.callbacks.onOverflowYNone.call(e[0]), c.contentReset.y = 1), "_resetX" !== i || c.contentReset.x || (o("onOverflowXNone") && d.callbacks.onOverflowXNone.call(e[0]), c.contentReset.x = 1), "_resetY" !== i && "_resetX" !== i) {
                if (!c.contentReset.y && e[0].mcs || !c.overflowed[0] || (o("onOverflowY") && d.callbacks.onOverflowY.call(e[0]), c.contentReset.x = null), !c.contentReset.x && e[0].mcs || !c.overflowed[1] || (o("onOverflowX") && d.callbacks.onOverflowX.call(e[0]), c.contentReset.x = null), d.snapAmount) {
                    var y = d.snapAmount instanceof Array ? "x" === s.dir ? d.snapAmount[1] : d.snapAmount[0] : d.snapAmount;
                    r = i, l = y, h = d.snapOffset, i = Math.round(r / l) * l - h
                }
                switch (s.dir) {
                    case "x":
                        var _ = t("#mCSB_" + c.idx + "_dragger_horizontal"),
                            x = "left",
                            w = m[0].offsetLeft,
                            C = [f.width() - m.outerWidth(!1), _.parent().width() - _.width()],
                            S = [i, 0 === i ? 0 : i / c.scrollRatio.x],
                            D = v[1],
                            T = b[1],
                            P = D > 0 ? D / c.scrollRatio.x : 0,
                            I = T > 0 ? T / c.scrollRatio.x : 0;
                        break;
                    case "y":
                        var _ = t("#mCSB_" + c.idx + "_dragger_vertical"),
                            x = "top",
                            w = m[0].offsetTop,
                            C = [f.height() - m.outerHeight(!1), _.parent().height() - _.height()],
                            S = [i, 0 === i ? 0 : i / c.scrollRatio.y],
                            D = v[0],
                            T = b[0],
                            P = D > 0 ? D / c.scrollRatio.y : 0,
                            I = T > 0 ? T / c.scrollRatio.y : 0
                }
                S[1] < 0 || 0 === S[0] && 0 === S[1] ? S = [0, 0] : S[1] >= C[1] ? S = [C[0], C[1]] : S[0] = -S[0], e[0].mcs || (a(), o("onInit") && d.callbacks.onInit.call(e[0])), clearTimeout(m[0].onCompleteTimeout), V(_[0], x, Math.round(S[1]), p[1], s.scrollEasing), (c.tweenRunning || !(0 === w && S[0] >= 0 || w === C[0] && S[0] <= C[0])) && V(m[0], x, Math.round(S[0]), p[0], s.scrollEasing, s.overwrite, {
                    onStart: function() {
                        s.callbacks && s.onStart && !c.tweenRunning && (o("onScrollStart") && (a(), d.callbacks.onScrollStart.call(e[0])), c.tweenRunning = !0, k(_), c.cbOffsets = [d.callbacks.alwaysTriggerOffsets || w >= C[0] + D, d.callbacks.alwaysTriggerOffsets || -T >= w])
                    },
                    onUpdate: function() {
                        s.callbacks && s.onUpdate && o("whileScrolling") && (a(), d.callbacks.whileScrolling.call(e[0]))
                    },
                    onComplete: function() {
                        if (s.callbacks && s.onComplete) {
                            "yx" === d.axis && clearTimeout(m[0].onCompleteTimeout);
                            var t = m[0].idleTimer || 0;
                            m[0].onCompleteTimeout = setTimeout(function() {
                                o("onScroll") && (a(), d.callbacks.onScroll.call(e[0])), o("onTotalScroll") && S[1] >= C[1] - P && c.cbOffsets[0] && (a(), d.callbacks.onTotalScroll.call(e[0])), o("onTotalScrollBack") && S[1] <= I && c.cbOffsets[1] && (a(), d.callbacks.onTotalScrollBack.call(e[0])), c.tweenRunning = !1, m[0].idleTimer = 0, k(_, "hide")
                            }, t)
                        }
                    }
                })
            }
        }, V = function(t, e, i, n, s, o, a) {
            function r() {
                b.stop || (m || d.call(), m = K() - f, l(), m >= b.time && (b.time = m > b.time ? m + h - (m - b.time) : m + h - 1, b.time < m + 1 && (b.time = m + 1)), b.time < n ? b.id = c(r) : p.call())
            }

            function l() {
                n > 0 ? (b.currVal = function(t, e, i, n, s) {
                    switch (s) {
                        case "linear":
                        case "mcsLinear":
                            return i * t / n + e;
                        case "mcsLinearOut":
                            return t /= n, t--, i * Math.sqrt(1 - t * t) + e;
                        case "easeInOutSmooth":
                            return 1 > (t /= n / 2) ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e;
                        case "easeInOutStrong":
                            return 1 > (t /= n / 2) ? i / 2 * Math.pow(2, 10 * (t - 1)) + e : (t--, i / 2 * (2 - Math.pow(2, -10 * t)) + e);
                        case "easeInOut":
                        case "mcsEaseInOut":
                            return 1 > (t /= n / 2) ? i / 2 * t * t * t + e : i / 2 * ((t -= 2) * t * t + 2) + e;
                        case "easeOutSmooth":
                            return t /= n, -i * (--t * t * t * t - 1) + e;
                        case "easeOutStrong":
                            return i * (1 - Math.pow(2, -10 * t / n)) + e;
                        case "easeOut":
                        case "mcsEaseOut":
                        default:
                            var o = (t /= n) * t,
                                a = o * t;
                            return e + i * (.499999999999997 * a * o + -2.5 * o * o + 5.5 * a + -6.5 * o + 4 * t)
                    }
                }(b.time, g, y, n, s), v[e] = Math.round(b.currVal) + "px") : v[e] = i + "px", u.call()
            }
            t._mTween || (t._mTween = {
                top: {},
                left: {}
            });
            var h, c, a = a || {},
                d = a.onStart || function() {},
                u = a.onUpdate || function() {},
                p = a.onComplete || function() {},
                f = K(),
                m = 0,
                g = t.offsetTop,
                v = t.style,
                b = t._mTween[e];
            "left" === e && (g = t.offsetLeft);
            var y = i - g;
            b.stop = 0, "none" !== o && null != b.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(b.id) : clearTimeout(b.id), b.id = null), h = 1e3 / 60, b.time = m + h, c = window.requestAnimationFrame ? window.requestAnimationFrame : function(t) {
                return l(), setTimeout(t, .01)
            }, b.id = c(r)
        }, K = function() {
            return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
        }, G = function() {
            var t = this;
            t._mTween || (t._mTween = {
                top: {},
                left: {}
            });
            for (var e = ["top", "left"], i = 0; i < e.length; i++) {
                var n = e[i];
                t._mTween[n].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(t._mTween[n].id) : clearTimeout(t._mTween[n].id), t._mTween[n].id = null, t._mTween[n].stop = 1)
            }
        }, X = function(t, e) {
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
            return d[e] ? d[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist") : d.init.apply(this, arguments)
        }, t[i] = function(e) {
            return d[e] ? d[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist") : d.init.apply(this, arguments)
        }, t[i].defaults = o, window[i] = !0, t(window).load(function() {
            t(s)[i](), t.extend(t.expr[":"], {
                mcsInView: t.expr[":"].mcsInView || function(e) {
                    var i, n, s = t(e),
                        o = s.parents(".mCSB_container");
                    return o.length ? (i = o.parent(), (n = [o[0].offsetTop, o[0].offsetLeft])[0] + tt(s)[0] >= 0 && n[0] + tt(s)[0] < i.height() - s.outerHeight(!1) && n[1] + tt(s)[1] >= 0 && n[1] + tt(s)[1] < i.width() - s.outerWidth(!1)) : void 0
                },
                mcsOverflow: t.expr[":"].mcsOverflow || function(e) {
                    var i = t(e).data(n);
                    return i ? i.overflowed[0] || i.overflowed[1] : void 0
                }
            })
        })
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        function e() {
            this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
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
            }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = i(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
        }

        function i(e) {
            var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return e.on("mouseout", i, function() {
                t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
            }).on("mouseover", i, n)
        }

        function n() {
            t.datepicker._isDisabledDatepicker(b.inline ? b.dpDiv.parent()[0] : b.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
        }

        function s(e, i) {
            t.extend(e, i);
            for (var n in i) null == i[n] && (e[n] = i[n]);
            return e
        }

        function o(t) {
            return function() {
                var e = this.element.val();
                t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
            }
        }
        t.ui = t.ui || {}, t.ui.version = "1.12.1";
        var a, r, l = 0,
            h = Array.prototype.slice;
        t.cleanData = (r = t.cleanData, function(e) {
                var i, n, s;
                for (s = 0; null != (n = e[s]); s++) try {
                    (i = t._data(n, "events")) && i.remove && t(n).triggerHandler("remove")
                } catch (t) {}
                r(e)
            }), t.widget = function(e, i, n) {
                var s, o, a, r = {},
                    l = e.split(".")[0],
                    h = l + "-" + (e = e.split(".")[1]);
                return n || (n = i, i = t.Widget), t.isArray(n) && (n = t.extend.apply(null, [{}].concat(n))), t.expr[":"][h.toLowerCase()] = function(e) {
                    return !!t.data(e, h)
                }, t[l] = t[l] || {}, s = t[l][e], o = t[l][e] = function(t, e) {
                    return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new o(t, e)
                }, t.extend(o, s, {
                    version: n.version,
                    _proto: t.extend({}, n),
                    _childConstructors: []
                }), (a = new i).options = t.widget.extend({}, a.options), t.each(n, function(e, n) {
                    return t.isFunction(n) ? void(r[e] = function() {
                        function t() {
                            return i.prototype[e].apply(this, arguments)
                        }

                        function s(t) {
                            return i.prototype[e].apply(this, t)
                        }
                        return function() {
                            var e, i = this._super,
                                o = this._superApply;
                            return this._super = t, this._superApply = s, e = n.apply(this, arguments), this._super = i, this._superApply = o, e
                        }
                    }()) : void(r[e] = n)
                }), o.prototype = t.widget.extend(a, {
                    widgetEventPrefix: s && a.widgetEventPrefix || e
                }, r, {
                    constructor: o,
                    namespace: l,
                    widgetName: e,
                    widgetFullName: h
                }), s ? (t.each(s._childConstructors, function(e, i) {
                    var n = i.prototype;
                    t.widget(n.namespace + "." + n.widgetName, o, i._proto)
                }), delete s._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
            }, t.widget.extend = function(e) {
                for (var i, n, s = h.call(arguments, 1), o = 0, a = s.length; a > o; o++)
                    for (i in s[o]) n = s[o][i], s[o].hasOwnProperty(i) && void 0 !== n && (e[i] = t.isPlainObject(n) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], n) : t.widget.extend({}, n) : n);
                return e
            }, t.widget.bridge = function(e, i) {
                var n = i.prototype.widgetFullName || e;
                t.fn[e] = function(s) {
                    var o = "string" == typeof s,
                        a = h.call(arguments, 1),
                        r = this;
                    return o ? this.length || "instance" !== s ? this.each(function() {
                        var i, o = t.data(this, n);
                        return "instance" === s ? (r = o, !1) : o ? t.isFunction(o[s]) && "_" !== s.charAt(0) ? (i = o[s].apply(o, a)) !== o && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0 : t.error("no such method '" + s + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + s + "'")
                    }) : r = void 0 : (a.length && (s = t.widget.extend.apply(null, [s].concat(a))), this.each(function() {
                        var e = t.data(this, n);
                        e ? (e.option(s || {}), e._init && e._init()) : t.data(this, n, new i(s, this))
                    })), r
                }
            }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: {
                    classes: {},
                    disabled: !1,
                    create: null
                },
                _createWidget: function(e, i) {
                    i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = l++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                        remove: function(t) {
                            t.target === i && this.destroy()
                        }
                    }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
                },
                _getCreateOptions: function() {
                    return {}
                },
                _getCreateEventData: t.noop,
                _create: t.noop,
                _init: t.noop,
                destroy: function() {
                    var e = this;
                    this._destroy(), t.each(this.classesElementLookup, function(t, i) {
                        e._removeClass(i, t)
                    }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
                },
                _destroy: t.noop,
                widget: function() {
                    return this.element
                },
                option: function(e, i) {
                    var n, s, o, a = e;
                    if (0 === arguments.length) return t.widget.extend({}, this.options);
                    if ("string" == typeof e)
                        if (a = {}, n = e.split("."), e = n.shift(), n.length) {
                            for (s = a[e] = t.widget.extend({}, this.options[e]), o = 0; n.length - 1 > o; o++) s[n[o]] = s[n[o]] || {}, s = s[n[o]];
                            if (e = n.pop(), 1 === arguments.length) return void 0 === s[e] ? null : s[e];
                            s[e] = i
                        } else {
                            if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                            a[e] = i
                        }
                    return this._setOptions(a), this
                },
                _setOptions: function(t) {
                    var e;
                    for (e in t) this._setOption(e, t[e]);
                    return this
                },
                _setOption: function(t, e) {
                    return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
                },
                _setOptionClasses: function(e) {
                    var i, n, s;
                    for (i in e) s = this.classesElementLookup[i], e[i] !== this.options.classes[i] && s && s.length && (n = t(s.get()), this._removeClass(s, i), n.addClass(this._classes({
                        element: n,
                        keys: i,
                        classes: e,
                        add: !0
                    })))
                },
                _setOptionDisabled: function(t) {
                    this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
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
                _classes: function(e) {
                    function i(i, o) {
                        var a, r;
                        for (r = 0; i.length > r; r++) a = s.classesElementLookup[i[r]] || t(), a = t(e.add ? t.unique(a.get().concat(e.element.get())) : a.not(e.element).get()), s.classesElementLookup[i[r]] = a, n.push(i[r]), o && e.classes[i[r]] && n.push(e.classes[i[r]])
                    }
                    var n = [],
                        s = this;
                    return e = t.extend({
                        element: this.element,
                        classes: this.options.classes || {}
                    }, e), this._on(e.element, {
                        remove: "_untrackClassesElement"
                    }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), n.join(" ")
                },
                _untrackClassesElement: function(e) {
                    var i = this;
                    t.each(i.classesElementLookup, function(n, s) {
                        -1 !== t.inArray(e.target, s) && (i.classesElementLookup[n] = t(s.not(e.target).get()))
                    })
                },
                _removeClass: function(t, e, i) {
                    return this._toggleClass(t, e, i, !1)
                },
                _addClass: function(t, e, i) {
                    return this._toggleClass(t, e, i, !0)
                },
                _toggleClass: function(t, e, i, n) {
                    n = "boolean" == typeof n ? n : i;
                    var s = "string" == typeof t || null === t,
                        o = {
                            extra: s ? e : i,
                            keys: s ? t : e,
                            element: s ? this.element : t,
                            add: n
                        };
                    return o.element.toggleClass(this._classes(o), n), this
                },
                _on: function(e, i, n) {
                    var s, o = this;
                    "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), t.each(n, function(n, a) {
                        function r() {
                            return e || !0 !== o.options.disabled && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
                        }
                        "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                        var l = n.match(/^([\w:-]*)\s*(.*)$/),
                            h = l[1] + o.eventNamespace,
                            c = l[2];
                        c ? s.on(h, c, r) : i.on(h, r)
                    })
                },
                _off: function(e, i) {
                    i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
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
                            this._addClass(t(e.currentTarget), null, "ui-state-hover")
                        },
                        mouseleave: function(e) {
                            this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                        }
                    })
                },
                _focusable: function(e) {
                    this.focusable = this.focusable.add(e), this._on(e, {
                        focusin: function(e) {
                            this._addClass(t(e.currentTarget), null, "ui-state-focus")
                        },
                        focusout: function(e) {
                            this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                        }
                    })
                },
                _trigger: function(e, i, n) {
                    var s, o, a = this.options[e];
                    if (n = n || {}, (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                        for (s in o) s in i || (i[s] = o[s]);
                    return this.element.trigger(i, n), !(t.isFunction(a) && !1 === a.apply(this.element[0], [i].concat(n)) || i.isDefaultPrevented())
                }
            }, t.each({
                show: "fadeIn",
                hide: "fadeOut"
            }, function(e, i) {
                t.Widget.prototype["_" + e] = function(n, s, o) {
                    "string" == typeof s && (s = {
                        effect: s
                    });
                    var a, r = s ? !0 === s || "number" == typeof s ? i : s.effect || i : e;
                    "number" == typeof(s = s || {}) && (s = {
                        duration: s
                    }), a = !t.isEmptyObject(s), s.complete = o, s.delay && n.delay(s.delay), a && t.effects && t.effects.effect[r] ? n[e](s) : r !== e && n[r] ? n[r](s.duration, s.easing, o) : n.queue(function(i) {
                        t(this)[e](), o && o.call(n[0]), i()
                    })
                }
            }), t.widget,
            function() {
                function e(t, e, i) {
                    return [parseFloat(t[0]) * (c.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (c.test(t[1]) ? i / 100 : 1)]
                }

                function i(e, i) {
                    return parseInt(t.css(e, i), 10) || 0
                }
                var n, s = Math.max,
                    o = Math.abs,
                    a = /left|center|right/,
                    r = /top|center|bottom/,
                    l = /[\+\-]\d+(\.[\d]+)?%?/,
                    h = /^\w+/,
                    c = /%$/,
                    d = t.fn.position;
                t.position = {
                    scrollbarWidth: function() {
                        if (void 0 !== n) return n;
                        var e, i, s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                            o = s.children()[0];
                        return t("body").append(s), e = o.offsetWidth, s.css("overflow", "scroll"), e === (i = o.offsetWidth) && (i = s[0].clientWidth), s.remove(), n = e - i
                    },
                    getScrollInfo: function(e) {
                        var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                            n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                            s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth;
                        return {
                            width: "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0,
                            height: s ? t.position.scrollbarWidth() : 0
                        }
                    },
                    getWithinInfo: function(e) {
                        var i = t(e || window),
                            n = t.isWindow(i[0]),
                            s = !!i[0] && 9 === i[0].nodeType;
                        return {
                            element: i,
                            isWindow: n,
                            isDocument: s,
                            offset: !n && !s ? t(e).offset() : {
                                left: 0,
                                top: 0
                            },
                            scrollLeft: i.scrollLeft(),
                            scrollTop: i.scrollTop(),
                            width: i.outerWidth(),
                            height: i.outerHeight()
                        }
                    }
                }, t.fn.position = function(n) {
                    if (!n || !n.of) return d.apply(this, arguments);
                    n = t.extend({}, n);
                    var c, u, p, f, m, g, v, b, y = t(n.of),
                        _ = t.position.getWithinInfo(n.within),
                        x = t.position.getScrollInfo(_),
                        w = (n.collision || "flip").split(" "),
                        k = {};
                    return g = 9 === (b = (v = y)[0]).nodeType ? {
                        width: v.width(),
                        height: v.height(),
                        offset: {
                            top: 0,
                            left: 0
                        }
                    } : t.isWindow(b) ? {
                        width: v.width(),
                        height: v.height(),
                        offset: {
                            top: v.scrollTop(),
                            left: v.scrollLeft()
                        }
                    } : b.preventDefault ? {
                        width: 0,
                        height: 0,
                        offset: {
                            top: b.pageY,
                            left: b.pageX
                        }
                    } : {
                        width: v.outerWidth(),
                        height: v.outerHeight(),
                        offset: v.offset()
                    }, y[0].preventDefault && (n.at = "left top"), u = g.width, p = g.height, f = g.offset, m = t.extend({}, f), t.each(["my", "at"], function() {
                        var t, e, i = (n[this] || "").split(" ");
                        1 === i.length && (i = a.test(i[0]) ? i.concat(["center"]) : r.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = a.test(i[0]) ? i[0] : "center", i[1] = r.test(i[1]) ? i[1] : "center", t = l.exec(i[0]), e = l.exec(i[1]), k[this] = [t ? t[0] : 0, e ? e[0] : 0], n[this] = [h.exec(i[0])[0], h.exec(i[1])[0]]
                    }), 1 === w.length && (w[1] = w[0]), "right" === n.at[0] ? m.left += u : "center" === n.at[0] && (m.left += u / 2), "bottom" === n.at[1] ? m.top += p : "center" === n.at[1] && (m.top += p / 2), c = e(k.at, u, p), m.left += c[0], m.top += c[1], this.each(function() {
                        var a, r, l = t(this),
                            h = l.outerWidth(),
                            d = l.outerHeight(),
                            g = i(this, "marginLeft"),
                            v = i(this, "marginTop"),
                            b = h + g + i(this, "marginRight") + x.width,
                            C = d + v + i(this, "marginBottom") + x.height,
                            S = t.extend({}, m),
                            D = e(k.my, l.outerWidth(), l.outerHeight());
                        "right" === n.my[0] ? S.left -= h : "center" === n.my[0] && (S.left -= h / 2), "bottom" === n.my[1] ? S.top -= d : "center" === n.my[1] && (S.top -= d / 2), S.left += D[0], S.top += D[1], a = {
                            marginLeft: g,
                            marginTop: v
                        }, t.each(["left", "top"], function(e, i) {
                            t.ui.position[w[e]] && t.ui.position[w[e]][i](S, {
                                targetWidth: u,
                                targetHeight: p,
                                elemWidth: h,
                                elemHeight: d,
                                collisionPosition: a,
                                collisionWidth: b,
                                collisionHeight: C,
                                offset: [c[0] + D[0], c[1] + D[1]],
                                my: n.my,
                                at: n.at,
                                within: _,
                                elem: l
                            })
                        }), n.using && (r = function(t) {
                            var e = f.left - S.left,
                                i = e + u - h,
                                a = f.top - S.top,
                                r = a + p - d,
                                c = {
                                    target: {
                                        element: y,
                                        left: f.left,
                                        top: f.top,
                                        width: u,
                                        height: p
                                    },
                                    element: {
                                        element: l,
                                        left: S.left,
                                        top: S.top,
                                        width: h,
                                        height: d
                                    },
                                    horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                                    vertical: 0 > r ? "top" : a > 0 ? "bottom" : "middle"
                                };
                            h > u && u > o(e + i) && (c.horizontal = "center"), d > p && p > o(a + r) && (c.vertical = "middle"), c.important = s(o(e), o(i)) > s(o(a), o(r)) ? "horizontal" : "vertical", n.using.call(this, t, c)
                        }), l.offset(t.extend(S, {
                            using: r
                        }))
                    })
                }, t.ui.position = {
                    fit: {
                        left: function(t, e) {
                            var i, n = e.within,
                                o = n.isWindow ? n.scrollLeft : n.offset.left,
                                a = n.width,
                                r = t.left - e.collisionPosition.marginLeft,
                                l = o - r,
                                h = r + e.collisionWidth - a - o;
                            e.collisionWidth > a ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - a - o, t.left += l - i) : t.left = h > 0 && 0 >= l ? o : l > h ? o + a - e.collisionWidth : o : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = s(t.left - r, t.left)
                        },
                        top: function(t, e) {
                            var i, n = e.within,
                                o = n.isWindow ? n.scrollTop : n.offset.top,
                                a = e.within.height,
                                r = t.top - e.collisionPosition.marginTop,
                                l = o - r,
                                h = r + e.collisionHeight - a - o;
                            e.collisionHeight > a ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - a - o, t.top += l - i) : t.top = h > 0 && 0 >= l ? o : l > h ? o + a - e.collisionHeight : o : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = s(t.top - r, t.top)
                        }
                    },
                    flip: {
                        left: function(t, e) {
                            var i, n, s = e.within,
                                a = s.offset.left + s.scrollLeft,
                                r = s.width,
                                l = s.isWindow ? s.scrollLeft : s.offset.left,
                                h = t.left - e.collisionPosition.marginLeft,
                                c = h - l,
                                d = h + e.collisionWidth - r - l,
                                u = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                                p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                                f = -2 * e.offset[0];
                            0 > c ? (0 > (i = t.left + u + p + f + e.collisionWidth - r - a) || o(c) > i) && (t.left += u + p + f) : d > 0 && (((n = t.left - e.collisionPosition.marginLeft + u + p + f - l) > 0 || d > o(n)) && (t.left += u + p + f))
                        },
                        top: function(t, e) {
                            var i, n, s = e.within,
                                a = s.offset.top + s.scrollTop,
                                r = s.height,
                                l = s.isWindow ? s.scrollTop : s.offset.top,
                                h = t.top - e.collisionPosition.marginTop,
                                c = h - l,
                                d = h + e.collisionHeight - r - l,
                                u = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                                p = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                                f = -2 * e.offset[1];
                            0 > c ? (0 > (n = t.top + u + p + f + e.collisionHeight - r - a) || o(c) > n) && (t.top += u + p + f) : d > 0 && (((i = t.top - e.collisionPosition.marginTop + u + p + f - l) > 0 || d > o(i)) && (t.top += u + p + f))
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
                }
            }(), t.ui.position, t.extend(t.expr[":"], {
                data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
                    return function(i) {
                        return !!t.data(i, e)
                    }
                }) : function(e, i, n) {
                    return !!t.data(e, n[3])
                }
            }), t.fn.extend({
                disableSelection: (a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function() {
                    return this.on(a + ".ui-disableSelection", function(t) {
                        t.preventDefault()
                    })
                }),
                enableSelection: function() {
                    return this.off(".ui-disableSelection")
                }
            });
        var c, d = "ui-effects-",
            u = "ui-effects-style",
            p = "ui-effects-animated",
            f = t;
        t.effects = {
                effect: {}
            },
            function(t, e) {
                function i(t, e, i) {
                    var n = c[e.type] || {};
                    return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : t > n.max ? n.max : t)
                }

                function n(i) {
                    var n = l(),
                        s = n._rgba = [];
                    return i = i.toLowerCase(), p(r, function(t, o) {
                        var a, r = o.re.exec(i),
                            l = r && o.parse(r),
                            c = o.space || "rgba";
                        return l ? (a = n[c](l), n[h[c].cache] = a[h[c].cache], s = n._rgba = a._rgba, !1) : e
                    }), s.length ? ("0,0,0,0" === s.join() && t.extend(s, o.transparent), n) : o[i]
                }

                function s(t, e, i) {
                    return 1 > 6 * (i = (i + 1) % 1) ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
                }
                var o, a = /^([\-+])=\s*(\d+\.?\d*)/,
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
                    l = t.Color = function(e, i, n, s) {
                        return new t.Color.fn.parse(e, i, n, s)
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
                    parse: function(s, a, r, c) {
                        if (s === e) return this._rgba = [null, null, null, null], this;
                        (s.jquery || s.nodeType) && (s = t(s).css(a), a = e);
                        var d = this,
                            u = t.type(s),
                            f = this._rgba = [];
                        return a !== e && (s = [s, a, r, c], u = "array"), "string" === u ? this.parse(n(s) || o._default) : "array" === u ? (p(h.rgba.props, function(t, e) {
                            f[e.idx] = i(s[e.idx], e)
                        }), this) : "object" === u ? (p(h, s instanceof l ? function(t, e) {
                            s[e.cache] && (d[e.cache] = s[e.cache].slice())
                        } : function(e, n) {
                            var o = n.cache;
                            p(n.props, function(t, e) {
                                if (!d[o] && n.to) {
                                    if ("alpha" === t || null == s[t]) return;
                                    d[o] = n.to(d._rgba)
                                }
                                d[o][e.idx] = i(s[t], e, !0)
                            }), d[o] && 0 > t.inArray(null, d[o].slice(0, 3)) && (d[o][3] = 1, n.from && (d._rgba = n.from(d[o])))
                        }), this) : e
                    },
                    is: function(t) {
                        var i = l(t),
                            n = !0,
                            s = this;
                        return p(h, function(t, o) {
                            var a, r = i[o.cache];
                            return r && (a = s[o.cache] || o.to && o.to(s._rgba) || [], p(o.props, function(t, i) {
                                return null != r[i.idx] ? n = r[i.idx] === a[i.idx] : e
                            })), n
                        }), n
                    },
                    _space: function() {
                        var t = [],
                            e = this;
                        return p(h, function(i, n) {
                            e[n.cache] && t.push(i)
                        }), t.pop()
                    },
                    transition: function(t, e) {
                        var n = l(t),
                            s = n._space(),
                            o = h[s],
                            a = 0 === this.alpha() ? l("transparent") : this,
                            r = a[o.cache] || o.to(a._rgba),
                            d = r.slice();
                        return n = n[o.cache], p(o.props, function(t, s) {
                            var o = s.idx,
                                a = r[o],
                                l = n[o],
                                h = c[s.type] || {};
                            null !== l && (null === a ? d[o] = l : (h.mod && (l - a > h.mod / 2 ? a += h.mod : a - l > h.mod / 2 && (a -= h.mod)), d[o] = i((l - a) * e + a, s)))
                        }), this[s](d)
                    },
                    blend: function(e) {
                        if (1 === this._rgba[3]) return this;
                        var i = this._rgba.slice(),
                            n = i.pop(),
                            s = l(e)._rgba;
                        return l(t.map(i, function(t, e) {
                            return (1 - n) * s[e] + n * t
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
                            n = i.pop();
                        return e && i.push(~~(255 * n)), "#" + t.map(i, function(t) {
                            return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t
                        }).join("")
                    },
                    toString: function() {
                        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                    }
                }), l.fn.parse.prototype = l.fn, h.hsla.to = function(t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e, i, n = t[0] / 255,
                        s = t[1] / 255,
                        o = t[2] / 255,
                        a = t[3],
                        r = Math.max(n, s, o),
                        l = Math.min(n, s, o),
                        h = r - l,
                        c = r + l,
                        d = .5 * c;
                    return e = l === r ? 0 : n === r ? 60 * (s - o) / h + 360 : s === r ? 60 * (o - n) / h + 120 : 60 * (n - s) / h + 240, i = 0 === h ? 0 : .5 >= d ? h / c : h / (2 - c), [Math.round(e) % 360, i, d, null == a ? 1 : a]
                }, h.hsla.from = function(t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e = t[0] / 360,
                        i = t[1],
                        n = t[2],
                        o = t[3],
                        a = .5 >= n ? n * (1 + i) : n + i - n * i,
                        r = 2 * n - a;
                    return [Math.round(255 * s(r, a, e + 1 / 3)), Math.round(255 * s(r, a, e)), Math.round(255 * s(r, a, e - 1 / 3)), o]
                }, p(h, function(n, s) {
                    var o = s.props,
                        r = s.cache,
                        h = s.to,
                        c = s.from;
                    l.fn[n] = function(n) {
                        if (h && !this[r] && (this[r] = h(this._rgba)), n === e) return this[r].slice();
                        var s, a = t.type(n),
                            d = "array" === a || "object" === a ? n : arguments,
                            u = this[r].slice();
                        return p(o, function(t, e) {
                            var n = d["object" === a ? t : e.idx];
                            null == n && (n = u[e.idx]), u[e.idx] = i(n, e)
                        }), c ? ((s = l(c(u)))[r] = u, s) : l(u)
                    }, p(o, function(e, i) {
                        l.fn[e] || (l.fn[e] = function(s) {
                            var o, r = t.type(s),
                                l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : n,
                                h = this[l](),
                                c = h[i.idx];
                            return "undefined" === r ? c : ("function" === r && (s = s.call(this, c), r = t.type(s)), null == s && i.empty ? this : ("string" === r && ((o = a.exec(s)) && (s = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), h[i.idx] = s, this[l](h)))
                        })
                    })
                }), l.hook = function(e) {
                    var i = e.split(" ");
                    p(i, function(e, i) {
                        t.cssHooks[i] = {
                            set: function(e, s) {
                                var o, a, r = "";
                                if ("transparent" !== s && ("string" !== t.type(s) || (o = n(s)))) {
                                    if (s = l(o || s), !d.rgba && 1 !== s._rgba[3]) {
                                        for (a = "backgroundColor" === i ? e.parentNode : e;
                                            ("" === r || "transparent" === r) && a && a.style;) try {
                                            r = t.css(a, "backgroundColor"), a = a.parentNode
                                        } catch (t) {}
                                        s = s.blend(r && "transparent" !== r ? r : "_default")
                                    }
                                    s = s.toRgbaString()
                                }
                                try {
                                    e.style[i] = s
                                } catch (t) {}
                            }
                        }, t.fx.step[i] = function(e) {
                            e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                        }
                    })
                }, l.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), t.cssHooks.borderColor = {
                    expand: function(t) {
                        var e = {};
                        return p(["Top", "Right", "Bottom", "Left"], function(i, n) {
                            e["border" + n + "Color"] = t
                        }), e
                    }
                }, o = t.Color.names = {
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
            }(f),
            function() {
                function e(e) {
                    var i, n, s = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                        o = {};
                    if (s && s.length && s[0] && s[s[0]])
                        for (n = s.length; n--;) i = s[n], "string" == typeof s[i] && (o[t.camelCase(i)] = s[i]);
                    else
                        for (i in s) "string" == typeof s[i] && (o[i] = s[i]);
                    return o
                }
                var i, n, s, o = ["add", "remove", "toggle"],
                    a = {
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
                        ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (f.style(t.elem, i, t.end), t.setAttr = !0)
                    }
                }), t.fn.addBack || (t.fn.addBack = function(t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }), t.effects.animateClass = function(i, n, s, r) {
                    var l = t.speed(n, s, r);
                    return this.queue(function() {
                        var n, s = t(this),
                            r = s.attr("class") || "",
                            h = l.children ? s.find("*").addBack() : s;
                        h = h.map(function() {
                            return {
                                el: t(this),
                                start: e(this)
                            }
                        }), (n = function() {
                            t.each(o, function(t, e) {
                                i[e] && s[e + "Class"](i[e])
                            })
                        })(), h = h.map(function() {
                            return this.end = e(this.el[0]), this.diff = function(e, i) {
                                var n, s, o = {};
                                for (n in i) s = i[n], e[n] !== s && (a[n] || (t.fx.step[n] || !isNaN(parseFloat(s))) && (o[n] = s));
                                return o
                            }(this.start, this.end), this
                        }), s.attr("class", r), h = h.map(function() {
                            var e = this,
                                i = t.Deferred(),
                                n = t.extend({}, l, {
                                    queue: !1,
                                    complete: function() {
                                        i.resolve(e)
                                    }
                                });
                            return this.el.animate(this.diff, n), i.promise()
                        }), t.when.apply(t, h.get()).done(function() {
                            n(), t.each(arguments, function() {
                                var e = this.el;
                                t.each(this.diff, function(t) {
                                    e.css(t, "")
                                })
                            }), l.complete.call(s[0])
                        })
                    })
                }, t.fn.extend({
                    addClass: (s = t.fn.addClass, function(e, i, n, o) {
                        return i ? t.effects.animateClass.call(this, {
                            add: e
                        }, i, n, o) : s.apply(this, arguments)
                    }),
                    removeClass: (n = t.fn.removeClass, function(e, i, s, o) {
                        return arguments.length > 1 ? t.effects.animateClass.call(this, {
                            remove: e
                        }, i, s, o) : n.apply(this, arguments)
                    }),
                    toggleClass: (i = t.fn.toggleClass, function(e, n, s, o, a) {
                        return "boolean" == typeof n || void 0 === n ? s ? t.effects.animateClass.call(this, n ? {
                            add: e
                        } : {
                            remove: e
                        }, s, o, a) : i.apply(this, arguments) : t.effects.animateClass.call(this, {
                            toggle: e
                        }, n, s, o)
                    }),
                    switchClass: function(e, i, n, s, o) {
                        return t.effects.animateClass.call(this, {
                            add: i,
                            remove: e
                        }, n, s, o)
                    }
                })
            }(),
            function() {
                function e(e, i, n, s) {
                    return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                        effect: e
                    }, null == i && (i = {}), t.isFunction(i) && (s = i, n = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (s = n, n = i, i = {}), t.isFunction(n) && (s = n, n = null), i && t.extend(e, i), n = n || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default, e.complete = s || i.complete, e
                }

                function i(e) {
                    return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect))
                }

                function n(t, e) {
                    var i = e.outerWidth(),
                        n = e.outerHeight(),
                        s = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || ["", 0, i, n, 0];
                    return {
                        top: parseFloat(s[1]) || 0,
                        right: "auto" === s[2] ? i : parseFloat(s[2]),
                        bottom: "auto" === s[3] ? n : parseFloat(s[3]),
                        left: parseFloat(s[4]) || 0
                    }
                }
                var s, o, a, r;
                t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = (r = t.expr.filters.animated, function(e) {
                    return !!t(e).data(p) || r(e)
                })), !1 !== t.uiBackCompat && t.extend(t.effects, {
                    save: function(t, e) {
                        for (var i = 0, n = e.length; n > i; i++) null !== e[i] && t.data(d + e[i], t[0].style[e[i]])
                    },
                    restore: function(t, e) {
                        for (var i, n = 0, s = e.length; s > n; n++) null !== e[n] && (i = t.data(d + e[n]), t.css(e[n], i))
                    },
                    setMode: function(t, e) {
                        return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                    },
                    createWrapper: function(e) {
                        if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                        var i = {
                                width: e.outerWidth(!0),
                                height: e.outerHeight(!0),
                                float: e.css("float")
                            },
                            n = t("<div></div>").addClass("ui-effects-wrapper").css({
                                fontSize: "100%",
                                background: "transparent",
                                border: "none",
                                margin: 0,
                                padding: 0
                            }),
                            s = {
                                width: e.width(),
                                height: e.height()
                            },
                            o = document.activeElement;
                        try {
                            o.id
                        } catch (t) {
                            o = document.body
                        }
                        return e.wrap(n), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), n = e.parent(), "static" === e.css("position") ? (n.css({
                            position: "relative"
                        }), e.css({
                            position: "relative"
                        })) : (t.extend(i, {
                            position: e.css("position"),
                            zIndex: e.css("z-index")
                        }), t.each(["top", "left", "bottom", "right"], function(t, n) {
                            i[n] = e.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
                        }), e.css({
                            position: "relative",
                            top: 0,
                            left: 0,
                            right: "auto",
                            bottom: "auto"
                        })), e.css(s), n.css(i).show()
                    },
                    removeWrapper: function(e) {
                        var i = document.activeElement;
                        return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e
                    }
                }), t.extend(t.effects, {
                    version: "1.12.1",
                    define: function(e, i, n) {
                        return n || (n = i, i = "effect"), t.effects.effect[e] = n, t.effects.effect[e].mode = i, n
                    },
                    scaledDimensions: function(t, e, i) {
                        if (0 === e) return {
                            height: 0,
                            width: 0,
                            outerHeight: 0,
                            outerWidth: 0
                        };
                        var n = "horizontal" !== i ? (e || 100) / 100 : 1,
                            s = "vertical" !== i ? (e || 100) / 100 : 1;
                        return {
                            height: t.height() * s,
                            width: t.width() * n,
                            outerHeight: t.outerHeight() * s,
                            outerWidth: t.outerWidth() * n
                        }
                    },
                    clipToBox: function(t) {
                        return {
                            width: t.clip.right - t.clip.left,
                            height: t.clip.bottom - t.clip.top,
                            left: t.clip.left,
                            top: t.clip.top
                        }
                    },
                    unshift: function(t, e, i) {
                        var n = t.queue();
                        e > 1 && n.splice.apply(n, [1, 0].concat(n.splice(e, i))), t.dequeue()
                    },
                    saveStyle: function(t) {
                        t.data(u, t[0].style.cssText)
                    },
                    restoreStyle: function(t) {
                        t[0].style.cssText = t.data(u) || "", t.removeData(u)
                    },
                    mode: function(t, e) {
                        var i = t.is(":hidden");
                        return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e
                    },
                    getBaseline: function(t, e) {
                        var i, n;
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
                                n = 0;
                                break;
                            case "center":
                                n = .5;
                                break;
                            case "right":
                                n = 1;
                                break;
                            default:
                                n = t[1] / e.width
                        }
                        return {
                            x: n,
                            y: i
                        }
                    },
                    createPlaceholder: function(e) {
                        var i, n = e.css("position"),
                            s = e.position();
                        return e.css({
                            marginTop: e.css("marginTop"),
                            marginBottom: e.css("marginBottom"),
                            marginLeft: e.css("marginLeft"),
                            marginRight: e.css("marginRight")
                        }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(n) && (n = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({
                            display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
                            visibility: "hidden",
                            marginTop: e.css("marginTop"),
                            marginBottom: e.css("marginBottom"),
                            marginLeft: e.css("marginLeft"),
                            marginRight: e.css("marginRight"),
                            float: e.css("float")
                        }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(d + "placeholder", i)), e.css({
                            position: n,
                            left: s.left,
                            top: s.top
                        }), i
                    },
                    removePlaceholder: function(t) {
                        var e = d + "placeholder",
                            i = t.data(e);
                        i && (i.remove(), t.removeData(e))
                    },
                    cleanUp: function(e) {
                        t.effects.restoreStyle(e), t.effects.removePlaceholder(e)
                    },
                    setTransition: function(e, i, n, s) {
                        return s = s || {}, t.each(i, function(t, i) {
                            var o = e.cssUnit(i);
                            o[0] > 0 && (s[i] = o[0] * n + o[1])
                        }), s
                    }
                }), t.fn.extend({
                    effect: function() {
                        function i(e) {
                            function i() {
                                t.isFunction(l) && l.call(a[0]), t.isFunction(e) && e()
                            }
                            var a = t(this);
                            n.mode = c.shift(), !1 === t.uiBackCompat || o ? "none" === n.mode ? (a[h](), i()) : s.call(a[0], n, function() {
                                a.removeData(p), t.effects.cleanUp(a), "hide" === n.mode && a.hide(), i()
                            }) : (a.is(":hidden") ? "hide" === h : "show" === h) ? (a[h](), i()) : s.call(a[0], n, i)
                        }
                        var n = e.apply(this, arguments),
                            s = t.effects.effect[n.effect],
                            o = s.mode,
                            a = n.queue,
                            r = a || "fx",
                            l = n.complete,
                            h = n.mode,
                            c = [],
                            d = function(e) {
                                var i = t(this),
                                    n = t.effects.mode(i, h) || o;
                                i.data(p, !0), c.push(n), o && ("show" === n || n === o && "hide" === n) && i.show(), o && "none" === n || t.effects.saveStyle(i), t.isFunction(e) && e()
                            };
                        return t.fx.off || !s ? h ? this[h](n.duration, l) : this.each(function() {
                            l && l.call(this)
                        }) : !1 === a ? this.each(d).each(i) : this.queue(r, d).queue(r, i)
                    },
                    show: (a = t.fn.show, function(t) {
                        if (i(t)) return a.apply(this, arguments);
                        var n = e.apply(this, arguments);
                        return n.mode = "show", this.effect.call(this, n)
                    }),
                    hide: (o = t.fn.hide, function(t) {
                        if (i(t)) return o.apply(this, arguments);
                        var n = e.apply(this, arguments);
                        return n.mode = "hide", this.effect.call(this, n)
                    }),
                    toggle: (s = t.fn.toggle, function(t) {
                        if (i(t) || "boolean" == typeof t) return s.apply(this, arguments);
                        var n = e.apply(this, arguments);
                        return n.mode = "toggle", this.effect.call(this, n)
                    }),
                    cssUnit: function(e) {
                        var i = this.css(e),
                            n = [];
                        return t.each(["em", "px", "%", "pt"], function(t, e) {
                            i.indexOf(e) > 0 && (n = [parseFloat(i), e])
                        }), n
                    },
                    cssClip: function(t) {
                        return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : n(this.css("clip"), this)
                    },
                    transfer: function(e, i) {
                        var n = t(this),
                            s = t(e.to),
                            o = "fixed" === s.css("position"),
                            a = t("body"),
                            r = o ? a.scrollTop() : 0,
                            l = o ? a.scrollLeft() : 0,
                            h = s.offset(),
                            c = {
                                top: h.top - r,
                                left: h.left - l,
                                height: s.innerHeight(),
                                width: s.innerWidth()
                            },
                            d = n.offset(),
                            u = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
                                top: d.top - r,
                                left: d.left - l,
                                height: n.innerHeight(),
                                width: n.innerWidth(),
                                position: o ? "fixed" : "absolute"
                            }).animate(c, e.duration, e.easing, function() {
                                u.remove(), t.isFunction(i) && i()
                            })
                    }
                }), t.fx.step.clip = function(e) {
                    e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = n(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({
                        top: e.pos * (e.end.top - e.start.top) + e.start.top,
                        right: e.pos * (e.end.right - e.start.right) + e.start.right,
                        bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
                        left: e.pos * (e.end.left - e.start.left) + e.start.left
                    })
                }
            }(), c = {}, t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, e) {
                c[e] = function(e) {
                    return Math.pow(e, t + 2)
                }
            }), t.extend(c, {
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
                    for (var e, i = 4;
                        ((e = Math.pow(2, --i)) - 1) / 11 > t;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                }
            }), t.each(c, function(e, i) {
                t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
                    return 1 - i(1 - t)
                }, t.easing["easeInOut" + e] = function(t) {
                    return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
                }
            });
        var m, g;
        t.effects;
        t.effects.define("blind", "hide", function(e, i) {
            var n = {
                    up: ["bottom", "top"],
                    vertical: ["bottom", "top"],
                    down: ["top", "bottom"],
                    left: ["right", "left"],
                    horizontal: ["right", "left"],
                    right: ["left", "right"]
                },
                s = t(this),
                o = e.direction || "up",
                a = s.cssClip(),
                r = {
                    clip: t.extend({}, a)
                },
                l = t.effects.createPlaceholder(s);
            r.clip[n[o][0]] = r.clip[n[o][1]], "show" === e.mode && (s.cssClip(r.clip), l && l.css(t.effects.clipToBox(r)), r.clip = a), l && l.animate(t.effects.clipToBox(r), e.duration, e.easing), s.animate(r, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }), t.effects.define("bounce", function(e, i) {
            var n, s, o, a = t(this),
                r = e.mode,
                l = "hide" === r,
                h = "show" === r,
                c = e.direction || "up",
                d = e.distance,
                u = e.times || 5,
                p = 2 * u + (h || l ? 1 : 0),
                f = e.duration / p,
                m = e.easing,
                g = "up" === c || "down" === c ? "top" : "left",
                v = "up" === c || "left" === c,
                b = 0,
                y = a.queue().length;
            for (t.effects.createPlaceholder(a), o = a.css(g), d || (d = a["top" === g ? "outerHeight" : "outerWidth"]() / 3), h && ((s = {
                    opacity: 1
                })[g] = o, a.css("opacity", 0).css(g, v ? 2 * -d : 2 * d).animate(s, f, m)), l && (d /= Math.pow(2, u - 1)), (s = {})[g] = o; u > b; b++) n = {}, n[g] = (v ? "-=" : "+=") + d, a.animate(n, f, m).animate(s, f, m), d = l ? 2 * d : d / 2;
            l && ((n = {
                opacity: 0
            })[g] = (v ? "-=" : "+=") + d, a.animate(n, f, m)), a.queue(i), t.effects.unshift(a, y, p + 1)
        }), t.effects.define("clip", "hide", function(e, i) {
            var n, s = {},
                o = t(this),
                a = e.direction || "vertical",
                r = "both" === a,
                l = r || "horizontal" === a,
                h = r || "vertical" === a;
            n = o.cssClip(), s.clip = {
                top: h ? (n.bottom - n.top) / 2 : n.top,
                right: l ? (n.right - n.left) / 2 : n.right,
                bottom: h ? (n.bottom - n.top) / 2 : n.bottom,
                left: l ? (n.right - n.left) / 2 : n.left
            }, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(s.clip), s.clip = n), o.animate(s, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }), t.effects.define("drop", "hide", function(e, i) {
            var n, s = t(this),
                o = "show" === e.mode,
                a = e.direction || "left",
                r = "up" === a || "down" === a ? "top" : "left",
                l = "up" === a || "left" === a ? "-=" : "+=",
                h = "+=" === l ? "-=" : "+=",
                c = {
                    opacity: 0
                };
            t.effects.createPlaceholder(s), n = e.distance || s["top" === r ? "outerHeight" : "outerWidth"](!0) / 2, c[r] = l + n, o && (s.css(c), c[r] = h + n, c.opacity = 1), s.animate(c, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }), t.effects.define("explode", "hide", function(e, i) {
            function n() {
                v.push(this), v.length === c * d && (u.css({
                    visibility: "visible"
                }), t(v).remove(), i())
            }
            var s, o, a, r, l, h, c = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
                d = c,
                u = t(this),
                p = "show" === e.mode,
                f = u.show().css("visibility", "hidden").offset(),
                m = Math.ceil(u.outerWidth() / d),
                g = Math.ceil(u.outerHeight() / c),
                v = [];
            for (s = 0; c > s; s++)
                for (r = f.top + s * g, h = s - (c - 1) / 2, o = 0; d > o; o++) a = f.left + o * m, l = o - (d - 1) / 2, u.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -o * m,
                    top: -s * g
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: m,
                    height: g,
                    left: a + (p ? l * m : 0),
                    top: r + (p ? h * g : 0),
                    opacity: p ? 0 : 1
                }).animate({
                    left: a + (p ? 0 : l * m),
                    top: r + (p ? 0 : h * g),
                    opacity: p ? 1 : 0
                }, e.duration || 500, e.easing, n)
        }), t.effects.define("fade", "toggle", function(e, i) {
            var n = "show" === e.mode;
            t(this).css("opacity", n ? 0 : 1).animate({
                opacity: n ? 1 : 0
            }, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }), t.effects.define("fold", "hide", function(e, i) {
            var n = t(this),
                s = e.mode,
                o = "show" === s,
                a = "hide" === s,
                r = e.size || 15,
                l = /([0-9]+)%/.exec(r),
                h = !!e.horizFirst ? ["right", "bottom"] : ["bottom", "right"],
                c = e.duration / 2,
                d = t.effects.createPlaceholder(n),
                u = n.cssClip(),
                p = {
                    clip: t.extend({}, u)
                },
                f = {
                    clip: t.extend({}, u)
                },
                m = [u[h[0]], u[h[1]]],
                g = n.queue().length;
            l && (r = parseInt(l[1], 10) / 100 * m[a ? 0 : 1]), p.clip[h[0]] = r, f.clip[h[0]] = r, f.clip[h[1]] = 0, o && (n.cssClip(f.clip), d && d.css(t.effects.clipToBox(f)), f.clip = u), n.queue(function(i) {
                d && d.animate(t.effects.clipToBox(p), c, e.easing).animate(t.effects.clipToBox(f), c, e.easing), i()
            }).animate(p, c, e.easing).animate(f, c, e.easing).queue(i), t.effects.unshift(n, g, 4)
        }), t.effects.define("highlight", "show", function(e, i) {
            var n = t(this),
                s = {
                    backgroundColor: n.css("backgroundColor")
                };
            "hide" === e.mode && (s.opacity = 0), t.effects.saveStyle(n), n.css({
                backgroundImage: "none",
                backgroundColor: e.color || "#ffff99"
            }).animate(s, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }), t.effects.define("size", function(e, i) {
            var n, s, o, a = t(this),
                r = ["fontSize"],
                l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                c = e.mode,
                d = "effect" !== c,
                u = e.scale || "both",
                p = e.origin || ["middle", "center"],
                f = a.css("position"),
                m = a.position(),
                g = t.effects.scaledDimensions(a),
                v = e.from || g,
                b = e.to || t.effects.scaledDimensions(a, 0);
            t.effects.createPlaceholder(a), "show" === c && (o = v, v = b, b = o), s = {
                from: {
                    y: v.height / g.height,
                    x: v.width / g.width
                },
                to: {
                    y: b.height / g.height,
                    x: b.width / g.width
                }
            }, ("box" === u || "both" === u) && (s.from.y !== s.to.y && (v = t.effects.setTransition(a, l, s.from.y, v), b = t.effects.setTransition(a, l, s.to.y, b)), s.from.x !== s.to.x && (v = t.effects.setTransition(a, h, s.from.x, v), b = t.effects.setTransition(a, h, s.to.x, b))), ("content" === u || "both" === u) && s.from.y !== s.to.y && (v = t.effects.setTransition(a, r, s.from.y, v), b = t.effects.setTransition(a, r, s.to.y, b)), p && (n = t.effects.getBaseline(p, g), v.top = (g.outerHeight - v.outerHeight) * n.y + m.top, v.left = (g.outerWidth - v.outerWidth) * n.x + m.left, b.top = (g.outerHeight - b.outerHeight) * n.y + m.top, b.left = (g.outerWidth - b.outerWidth) * n.x + m.left), a.css(v), ("content" === u || "both" === u) && (l = l.concat(["marginTop", "marginBottom"]).concat(r), h = h.concat(["marginLeft", "marginRight"]), a.find("*[width]").each(function() {
                var i = t(this),
                    n = t.effects.scaledDimensions(i),
                    o = {
                        height: n.height * s.from.y,
                        width: n.width * s.from.x,
                        outerHeight: n.outerHeight * s.from.y,
                        outerWidth: n.outerWidth * s.from.x
                    },
                    a = {
                        height: n.height * s.to.y,
                        width: n.width * s.to.x,
                        outerHeight: n.height * s.to.y,
                        outerWidth: n.width * s.to.x
                    };
                s.from.y !== s.to.y && (o = t.effects.setTransition(i, l, s.from.y, o), a = t.effects.setTransition(i, l, s.to.y, a)), s.from.x !== s.to.x && (o = t.effects.setTransition(i, h, s.from.x, o), a = t.effects.setTransition(i, h, s.to.x, a)), d && t.effects.saveStyle(i), i.css(o), i.animate(a, e.duration, e.easing, function() {
                    d && t.effects.restoreStyle(i)
                })
            })), a.animate(b, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function() {
                    var e = a.offset();
                    0 === b.opacity && a.css("opacity", v.opacity), d || (a.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(a)), i()
                }
            })
        }), t.effects.define("scale", function(e, i) {
            var n = t(this),
                s = e.mode,
                o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== s ? 0 : 100),
                a = t.extend(!0, {
                    from: t.effects.scaledDimensions(n),
                    to: t.effects.scaledDimensions(n, o, e.direction || "both"),
                    origin: e.origin || ["middle", "center"]
                }, e);
            e.fade && (a.from.opacity = 1, a.to.opacity = 0), t.effects.effect.size.call(this, a, i)
        }), t.effects.define("puff", "hide", function(e, i) {
            var n = t.extend(!0, {}, e, {
                fade: !0,
                percent: parseInt(e.percent, 10) || 150
            });
            t.effects.effect.scale.call(this, n, i)
        }), t.effects.define("pulsate", "show", function(e, i) {
            var n = t(this),
                s = e.mode,
                o = "show" === s,
                a = o || "hide" === s,
                r = 2 * (e.times || 5) + (a ? 1 : 0),
                l = e.duration / r,
                h = 0,
                c = 1,
                d = n.queue().length;
            for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), h = 1); r > c; c++) n.animate({
                opacity: h
            }, l, e.easing), h = 1 - h;
            n.animate({
                opacity: h
            }, l, e.easing), n.queue(i), t.effects.unshift(n, d, r + 1)
        }), t.effects.define("shake", function(e, i) {
            var n = 1,
                s = t(this),
                o = e.direction || "left",
                a = e.distance || 20,
                r = e.times || 3,
                l = 2 * r + 1,
                h = Math.round(e.duration / l),
                c = "up" === o || "down" === o ? "top" : "left",
                d = "up" === o || "left" === o,
                u = {},
                p = {},
                f = {},
                m = s.queue().length;
            for (t.effects.createPlaceholder(s), u[c] = (d ? "-=" : "+=") + a, p[c] = (d ? "+=" : "-=") + 2 * a, f[c] = (d ? "-=" : "+=") + 2 * a, s.animate(u, h, e.easing); r > n; n++) s.animate(p, h, e.easing).animate(f, h, e.easing);
            s.animate(p, h, e.easing).animate(u, h / 2, e.easing).queue(i), t.effects.unshift(s, m, l + 1)
        }), t.effects.define("slide", "show", function(e, i) {
            var n, s, o = t(this),
                a = {
                    up: ["bottom", "top"],
                    down: ["top", "bottom"],
                    left: ["right", "left"],
                    right: ["left", "right"]
                },
                r = e.mode,
                l = e.direction || "left",
                h = "up" === l || "down" === l ? "top" : "left",
                c = "up" === l || "left" === l,
                d = e.distance || o["top" === h ? "outerHeight" : "outerWidth"](!0),
                u = {};
            t.effects.createPlaceholder(o), n = o.cssClip(), s = o.position()[h], u[h] = (c ? -1 : 1) * d + s, u.clip = o.cssClip(), u.clip[a[l][1]] = u.clip[a[l][0]], "show" === r && (o.cssClip(u.clip), o.css(h, u[h]), u.clip = n, u[h] = s), o.animate(u, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }), !1 !== t.uiBackCompat && t.effects.define("transfer", function(e, i) {
            t(this).transfer(e, i)
        }), t.ui.focusable = function(e, i) {
            var n, s, o, a, r, l = e.nodeName.toLowerCase();
            return "area" === l ? (s = (n = e.parentNode).name, !(!e.href || !s || "map" !== n.nodeName.toLowerCase()) && ((o = t("img[usemap='#" + s + "']")).length > 0 && o.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(l) ? (a = !e.disabled) && ((r = t(e).closest("fieldset")[0]) && (a = !r.disabled)) : a = "a" === l && e.href || i, a && t(e).is(":visible") && function(t) {
                for (var e = t.css("visibility");
                    "inherit" === e;) t = t.parent(), e = t.css("visibility");
                return "hidden" !== e
            }(t(e)))
        }, t.extend(t.expr[":"], {
            focusable: function(e) {
                return t.ui.focusable(e, null != t.attr(e, "tabindex"))
            }
        }), t.ui.focusable, t.fn.form = function() {
            return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form)
        }, t.ui.formResetMixin = {
            _formResetHandler: function() {
                var e = t(this);
                setTimeout(function() {
                    var i = e.data("ui-form-reset-instances");
                    t.each(i, function() {
                        this.refresh()
                    })
                })
            },
            _bindFormResetHandler: function() {
                if (this.form = this.element.form(), this.form.length) {
                    var t = this.form.data("ui-form-reset-instances") || [];
                    t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
                }
            },
            _unbindFormResetHandler: function() {
                if (this.form.length) {
                    var e = this.form.data("ui-form-reset-instances");
                    e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
                }
            }
        }, "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function(e, i) {
            function n(e, i, n, o) {
                return t.each(s, function() {
                    i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
                }), i
            }
            var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                o = i.toLowerCase(),
                a = {
                    innerWidth: t.fn.innerWidth,
                    innerHeight: t.fn.innerHeight,
                    outerWidth: t.fn.outerWidth,
                    outerHeight: t.fn.outerHeight
                };
            t.fn["inner" + i] = function(e) {
                return void 0 === e ? a["inner" + i].call(this) : this.each(function() {
                    t(this).css(o, n(this, e) + "px")
                })
            }, t.fn["outer" + i] = function(e, s) {
                return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function() {
                    t(this).css(o, n(this, e, !0, s) + "px")
                })
            }
        }), t.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), t.ui.keyCode = {
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
        }, t.ui.escapeSelector = (g = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g, function(t) {
            return t.replace(g, "\\$1")
        }), t.fn.labels = function() {
            var e, i, n, s, o;
            return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (s = this.eq(0).parents("label"), (n = this.attr("id")) && (o = (e = this.eq(0).parents().last()).add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(n) + "']", s = s.add(o.find(i).addBack(i))), this.pushStack(s))
        }, t.fn.scrollParent = function(e) {
            var i = this.css("position"),
                n = "absolute" === i,
                s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                o = this.parents().filter(function() {
                    var e = t(this);
                    return (!n || "static" !== e.css("position")) && s.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                }).eq(0);
            return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
        }, t.extend(t.expr[":"], {
            tabbable: function(e) {
                var i = t.attr(e, "tabindex"),
                    n = null != i;
                return (!n || i >= 0) && t.ui.focusable(e, n)
            }
        }), t.fn.extend({
            uniqueId: (m = 0, function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++m)
                })
            }),
            removeUniqueId: function() {
                return this.each(function() {
                    /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
                })
            }
        }), t.widget("ui.accordion", {
            version: "1.12.1",
            options: {
                active: 0,
                animate: {},
                classes: {
                    "ui-accordion-header": "ui-corner-top",
                    "ui-accordion-header-collapsed": "ui-corner-all",
                    "ui-accordion-content": "ui-corner-bottom"
                },
                collapsible: !1,
                event: "click",
                header: "> li > :first-child, > :not(li):even",
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
                this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || !1 !== e.active && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh()
            },
            _getCreateEventData: function() {
                return {
                    header: this.active,
                    panel: this.active.length ? this.active.next() : t()
                }
            },
            _createIcons: function() {
                var e, i, n = this.options.icons;
                n && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + n.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, n.header)._addClass(i, null, n.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
            },
            _destroyIcons: function() {
                this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove()
            },
            _destroy: function() {
                var t;
                this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
            },
            _setOption: function(t, e) {
                return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), void("icons" === t && (this._destroyIcons(), e && this._createIcons())))
            },
            _setOptionDisabled: function(t) {
                this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t)
            },
            _keydown: function(e) {
                if (!e.altKey && !e.ctrlKey) {
                    var i = t.ui.keyCode,
                        n = this.headers.length,
                        s = this.headers.index(e.target),
                        o = !1;
                    switch (e.keyCode) {
                        case i.RIGHT:
                        case i.DOWN:
                            o = this.headers[(s + 1) % n];
                            break;
                        case i.LEFT:
                        case i.UP:
                            o = this.headers[(s - 1 + n) % n];
                            break;
                        case i.SPACE:
                        case i.ENTER:
                            this._eventHandler(e);
                            break;
                        case i.HOME:
                            o = this.headers[0];
                            break;
                        case i.END:
                            o = this.headers[n - 1]
                    }
                    o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault())
                }
            },
            _panelKeyDown: function(e) {
                e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus")
            },
            refresh: function() {
                var e = this.options;
                this._processPanels(), !1 === e.active && !0 === e.collapsible || !this.headers.length ? (e.active = !1, this.active = t()) : !1 === e.active ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
            },
            _processPanels: function() {
                var t = this.headers,
                    e = this.panels;
                this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
            },
            _refresh: function() {
                var e, i = this.options,
                    n = i.heightStyle,
                    s = this.element.parent();
                this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function() {
                    var e = t(this),
                        i = e.uniqueId().attr("id"),
                        n = e.next(),
                        s = n.uniqueId().attr("id");
                    e.attr("aria-controls", s), n.attr("aria-labelledby", i)
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
                }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === n ? (e = s.height(), this.element.siblings(":visible").each(function() {
                    var i = t(this),
                        n = i.css("position");
                    "absolute" !== n && "fixed" !== n && (e -= i.outerHeight(!0))
                }), this.headers.each(function() {
                    e -= t(this).outerHeight(!0)
                }), this.headers.next().each(function() {
                    t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
                }).css("overflow", "auto")) : "auto" === n && (e = 0, this.headers.next().each(function() {
                    var i = t(this).is(":visible");
                    i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide()
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
                var i, n, s = this.options,
                    o = this.active,
                    a = t(e.currentTarget),
                    r = a[0] === o[0],
                    l = r && s.collapsible,
                    h = l ? t() : a.next(),
                    c = {
                        oldHeader: o,
                        oldPanel: o.next(),
                        newHeader: l ? t() : a,
                        newPanel: h
                    };
                e.preventDefault(), r && !s.collapsible || !1 === this._trigger("beforeActivate", e, c) || (s.active = !l && this.headers.index(a), this.active = r ? t() : a, this._toggle(c), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), s.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, s.icons.activeHeader)._addClass(i, null, s.icons.header)), r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), s.icons && (n = a.children(".ui-accordion-header-icon"), this._removeClass(n, null, s.icons.header)._addClass(n, null, s.icons.activeHeader)), this._addClass(a.next(), "ui-accordion-content-active")))
            },
            _toggle: function(e) {
                var i = e.newPanel,
                    n = this.prevShow.length ? this.prevShow : e.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = n, this.options.animate ? this._animate(i, n, e) : (n.hide(), i.show(), this._toggleComplete(e)), n.attr({
                    "aria-hidden": "true"
                }), n.prev().attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }), i.length && n.length ? n.prev().attr({
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
                var n, s, o, a = this,
                    r = 0,
                    l = t.css("box-sizing"),
                    h = t.length && (!e.length || t.index() < e.index()),
                    c = this.options.animate || {},
                    d = h && c.down || c,
                    u = function() {
                        a._toggleComplete(i)
                    };
                return "number" == typeof d && (o = d), "string" == typeof d && (s = d), s = s || d.easing || c.easing, o = o || d.duration || c.duration, e.length ? t.length ? (n = t.show().outerHeight(), e.animate(this.hideProps, {
                    duration: o,
                    easing: s,
                    step: function(t, e) {
                        e.now = Math.round(t)
                    }
                }), void t.hide().animate(this.showProps, {
                    duration: o,
                    easing: s,
                    complete: u,
                    step: function(t, i) {
                        i.now = Math.round(t), "height" !== i.prop ? "content-box" === l && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(n - e.outerHeight() - r), r = 0)
                    }
                })) : e.animate(this.hideProps, o, s, u) : t.animate(this.showProps, o, s, u)
            },
            _toggleComplete: function(t) {
                var e = t.oldPanel,
                    i = e.prev();
                this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
            }
        }), t.ui.safeActiveElement = function(t) {
            var e;
            try {
                e = t.activeElement
            } catch (i) {
                e = t.body
            }
            return e || (e = t.body), e.nodeName || (e = t.body), e
        }, t.widget("ui.menu", {
            version: "1.12.1",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-caret-1-e"
                },
                items: "> *",
                menus: "ul",
                position: {
                    my: "left top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function() {
                this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
                    role: this.options.role,
                    tabIndex: 0
                }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                    "mousedown .ui-menu-item": function(t) {
                        t.preventDefault()
                    },
                    "click .ui-menu-item": function(e) {
                        var i = t(e.target),
                            n = t(t.ui.safeActiveElement(this.document[0]));
                        !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && n.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function(e) {
                        if (!this.previousFilter) {
                            var i = t(e.target).closest(".ui-menu-item"),
                                n = t(e.currentTarget);
                            i[0] === n[0] && (this._removeClass(n.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, n))
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
                            !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0])) && this.collapseAll(e)
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
                var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), e.children().each(function() {
                    var e = t(this);
                    e.data("ui-menu-submenu-caret") && e.remove()
                })
            },
            _keydown: function(e) {
                var i, n, s, o, a = !0;
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
                        a = !1, n = this.previousFilter || "", o = !1, s = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), s === n ? o = !0 : s = n + s, i = this._filterMenuItems(s), (i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i).length || (s = String.fromCharCode(e.keyCode), i = this._filterMenuItems(s)), i.length ? (this.focus(e, i), this.previousFilter = s, this.filterTimer = this._delay(function() {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter
                }
                a && e.preventDefault()
            },
            _activate: function(t) {
                this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
            },
            refresh: function() {
                var e, i, n, s, o = this,
                    a = this.options.icons.submenu,
                    r = this.element.find(this.options.menus);
                this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), i = r.filter(":not(.ui-menu)").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function() {
                    var e = t(this),
                        i = e.prev(),
                        n = t("<span>").data("ui-menu-submenu-caret", !0);
                    o._addClass(n, "ui-menu-icon", "ui-icon " + a), i.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", i.attr("id"))
                }), this._addClass(i, "ui-menu", "ui-widget ui-widget-content ui-front"), (e = r.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function() {
                    var e = t(this);
                    o._isDivider(e) && o._addClass(e, "ui-menu-divider", "ui-widget-content")
                }), s = (n = e.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), this._addClass(n, "ui-menu-item")._addClass(s, "ui-menu-item-wrapper"), e.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function() {
                return {
                    menu: "menuitem",
                    listbox: "option"
                }[this.options.role]
            },
            _setOption: function(t, e) {
                if ("icons" === t) {
                    var i = this.element.find(".ui-menu-icon");
                    this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
                }
                this._super(t, e)
            },
            _setOptionDisabled: function(t) {
                this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t)
            },
            focus: function(t, e) {
                var i, n, s;
                this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), n = this.active.children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), s = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                    this._close()
                }, this.delay), (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
                    item: e
                })
            },
            _scrollIntoView: function(e) {
                var i, n, s, o, a, r;
                this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, s = e.offset().top - this.activeMenu.offset().top - i - n, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), 0 > s ? this.activeMenu.scrollTop(o + s) : s + r > a && this.activeMenu.scrollTop(o + s - a + r))
            },
            blur: function(t, e) {
                e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {
                    item: this.active
                }), this.active = null)
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
                    var n = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                    n.length || (n = this.element), this._close(n), this.blur(e), this._removeClass(n.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = n
                }, this.delay)
            },
            _close: function(t) {
                t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
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
                var n;
                this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[e]()), this.focus(i, n)
            },
            nextPage: function(e) {
                var i, n, s;
                return this.active ? void(this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                    return 0 > (i = t(this)).offset().top - n - s
                }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(e)
            },
            previousPage: function(e) {
                var i, n, s;
                return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                    return (i = t(this)).offset().top - n + s > 0
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
                    n = RegExp("^" + i, "i");
                return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                    return n.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))
                })
            }
        }), t.widget("ui.autocomplete", {
            version: "1.12.1",
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
                var e, i, n, s = this.element[0].nodeName.toLowerCase(),
                    o = "textarea" === s,
                    a = "input" === s;
                this.isMultiLine = o || !a && this._isContentEditable(this.element), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function(s) {
                        if (this.element.prop("readOnly")) return e = !0, n = !0, void(i = !0);
                        e = !1, n = !1, i = !1;
                        var o = t.ui.keyCode;
                        switch (s.keyCode) {
                            case o.PAGE_UP:
                                e = !0, this._move("previousPage", s);
                                break;
                            case o.PAGE_DOWN:
                                e = !0, this._move("nextPage", s);
                                break;
                            case o.UP:
                                e = !0, this._keyEvent("previous", s);
                                break;
                            case o.DOWN:
                                e = !0, this._keyEvent("next", s);
                                break;
                            case o.ENTER:
                                this.menu.active && (e = !0, s.preventDefault(), this.menu.select(s));
                                break;
                            case o.TAB:
                                this.menu.active && this.menu.select(s);
                                break;
                            case o.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(s), s.preventDefault());
                                break;
                            default:
                                i = !0, this._searchTimeout(s)
                        }
                    },
                    keypress: function(n) {
                        if (e) return e = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && n.preventDefault());
                        if (!i) {
                            var s = t.ui.keyCode;
                            switch (n.keyCode) {
                                case s.PAGE_UP:
                                    this._move("previousPage", n);
                                    break;
                                case s.PAGE_DOWN:
                                    this._move("nextPage", n);
                                    break;
                                case s.UP:
                                    this._keyEvent("previous", n);
                                    break;
                                case s.DOWN:
                                    this._keyEvent("next", n)
                            }
                        }
                    },
                    input: function(t) {
                        return n ? (n = !1, void t.preventDefault()) : void this._searchTimeout(t)
                    },
                    focus: function() {
                        this.selectedItem = null, this.previous = this._value()
                    },
                    blur: function(t) {
                        return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
                    }
                }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({
                    role: null
                }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                    mousedown: function(e) {
                        e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                            delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                        })
                    },
                    menufocus: function(e, i) {
                        var n, s;
                        return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function() {
                            t(e.target).trigger(e.originalEvent)
                        })) : (s = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
                            item: s
                        }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value), void((n = i.item.attr("aria-label") || s.value) && t.trim(n).length && (this.liveRegion.children().hide(), t("<div>").text(n).appendTo(this.liveRegion))))
                    },
                    menuselect: function(e, i) {
                        var n = i.item.data("ui-autocomplete-item"),
                            s = this.previous;
                        this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = s, this._delay(function() {
                            this.previous = s, this.selectedItem = n
                        })), !1 !== this._trigger("select", e, {
                            item: n
                        }) && this._value(n.value), this.term = this._value(), this.close(e), this.selectedItem = n
                    }
                }), this.liveRegion = t("<div>", {
                    role: "status",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function() {
                clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
            },
            _setOption: function(t, e) {
                this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
            },
            _isEventTargetInWidget: function(e) {
                var i = this.menu.element[0];
                return e.target === this.element[0] || e.target === i || t.contains(i, e.target)
            },
            _closeOnClickOutside: function(t) {
                this._isEventTargetInWidget(t) || this.close()
            },
            _appendTo: function() {
                var e = this.options.appendTo;
                return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
            },
            _initSource: function() {
                var e, i, n = this;
                t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, n) {
                    n(t.ui.autocomplete.filter(e, i.term))
                }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, s) {
                    n.xhr && n.xhr.abort(), n.xhr = t.ajax({
                        url: i,
                        data: e,
                        dataType: "json",
                        success: function(t) {
                            s(t)
                        },
                        error: function() {
                            s([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function(t) {
                clearTimeout(this.searching), this.searching = this._delay(function() {
                    var e = this.term === this._value(),
                        i = this.menu.element.is(":visible"),
                        n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                    (!e || e && !i && !n) && (this.selectedItem = null, this.search(null, t))
                }, this.options.delay)
            },
            search: function(t, e) {
                return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0
            },
            _search: function(t) {
                this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                    term: t
                }, this._response())
            },
            _response: function() {
                var e = ++this.requestIndex;
                return t.proxy(function(t) {
                    e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading")
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
                this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
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
                }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
                    mousedown: "_closeOnClickOutside"
                })
            },
            _resizeMenu: function() {
                var t = this.menu.element;
                t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(e, i) {
                var n = this;
                t.each(i, function(t, i) {
                    n._renderItemData(e, i)
                })
            },
            _renderItemData: function(t, e) {
                return this._renderItem(t, e).data("ui-autocomplete-item", e)
            },
            _renderItem: function(e, i) {
                return t("<li>").append(t("<div>").text(i.label)).appendTo(e)
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
            },
            _isContentEditable: function(t) {
                if (!t.length) return !1;
                var e = t.prop("contentEditable");
                return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
            }
        }), t.extend(t.ui.autocomplete, {
            escapeRegex: function(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function(e, i) {
                var n = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
                return t.grep(e, function(t) {
                    return n.test(t.label || t.value || t)
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
        }), t.ui.autocomplete;
        var v, b, y = /ui-corner-([a-z]){2,6}/g;
        t.widget("ui.controlgroup", {
            version: "1.12.1",
            defaultElement: "<div>",
            options: {
                direction: "horizontal",
                disabled: null,
                onlyVisible: !0,
                items: {
                    button: "input[type=button], input[type=submit], input[type=reset], button, a",
                    controlgroupLabel: ".ui-controlgroup-label",
                    checkboxradio: "input[type='checkbox'], input[type='radio']",
                    selectmenu: "select",
                    spinner: ".ui-spinner-input"
                }
            },
            _create: function() {
                this._enhance()
            },
            _enhance: function() {
                this.element.attr("role", "toolbar"), this.refresh()
            },
            _destroy: function() {
                this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
            },
            _initWidgets: function() {
                var e = this,
                    i = [];
                t.each(this.options.items, function(n, s) {
                    var o, a = {};
                    return s ? "controlgroupLabel" === n ? ((o = e.element.find(s)).each(function() {
                        var e = t(this);
                        e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                    }), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), void(i = i.concat(o.get()))) : void(t.fn[n] && (a = e["_" + n + "Options"] ? e["_" + n + "Options"]("middle") : {
                        classes: {}
                    }, e.element.find(s).each(function() {
                        var s = t(this),
                            o = s[n]("instance"),
                            r = t.widget.extend({}, a);
                        if ("button" !== n || !s.parent(".ui-spinner").length) {
                            o || (o = s[n]()[n]("instance")), o && (r.classes = e._resolveClassesValues(r.classes, o)), s[n](r);
                            var l = s[n]("widget");
                            t.data(l[0], "ui-controlgroup-data", o || s[n]("instance")), i.push(l[0])
                        }
                    }))) : void 0
                }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item")
            },
            _callChildMethod: function(e) {
                this.childWidgets.each(function() {
                    var i = t(this).data("ui-controlgroup-data");
                    i && i[e] && i[e]()
                })
            },
            _updateCornerClass: function(t, e) {
                var i = this._buildSimpleOptions(e, "label").classes.label;
                this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), this._addClass(t, null, i)
            },
            _buildSimpleOptions: function(t, e) {
                var i = "vertical" === this.options.direction,
                    n = {
                        classes: {}
                    };
                return n.classes[e] = {
                    middle: "",
                    first: "ui-corner-" + (i ? "top" : "left"),
                    last: "ui-corner-" + (i ? "bottom" : "right"),
                    only: "ui-corner-all"
                }[t], n
            },
            _spinnerOptions: function(t) {
                var e = this._buildSimpleOptions(t, "ui-spinner");
                return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e
            },
            _buttonOptions: function(t) {
                return this._buildSimpleOptions(t, "ui-button")
            },
            _checkboxradioOptions: function(t) {
                return this._buildSimpleOptions(t, "ui-checkboxradio-label")
            },
            _selectmenuOptions: function(t) {
                var e = "vertical" === this.options.direction;
                return {
                    width: !!e && "auto",
                    classes: {
                        middle: {
                            "ui-selectmenu-button-open": "",
                            "ui-selectmenu-button-closed": ""
                        },
                        first: {
                            "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
                            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
                        },
                        last: {
                            "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
                            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
                        },
                        only: {
                            "ui-selectmenu-button-open": "ui-corner-top",
                            "ui-selectmenu-button-closed": "ui-corner-all"
                        }
                    }[t]
                }
            },
            _resolveClassesValues: function(e, i) {
                var n = {};
                return t.each(e, function(s) {
                    var o = i.options.classes[s] || "";
                    o = t.trim(o.replace(y, "")), n[s] = (o + " " + e[s]).replace(/\s+/g, " ")
                }), n
            },
            _setOption: function(t, e) {
                return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? void this._callChildMethod(e ? "disable" : "enable") : void this.refresh()
            },
            refresh: function() {
                var e, i = this;
                this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], function(t, n) {
                    var s = e[n]().data("ui-controlgroup-data");
                    if (s && i["_" + s.widgetName + "Options"]) {
                        var o = i["_" + s.widgetName + "Options"](1 === e.length ? "only" : n);
                        o.classes = i._resolveClassesValues(o.classes, s), s.element[s.widgetName](o)
                    } else i._updateCornerClass(e[n](), n)
                }), this._callChildMethod("refresh"))
            }
        }), t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
            version: "1.12.1",
            options: {
                disabled: null,
                label: null,
                icon: !0,
                classes: {
                    "ui-checkboxradio-label": "ui-corner-all",
                    "ui-checkboxradio-icon": "ui-corner-all"
                }
            },
            _getCreateOptions: function() {
                var e, i, n = this,
                    s = this._super() || {};
                return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function() {
                    n.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML
                }), this.originalLabel && (s.label = this.originalLabel), null != (e = this.element[0].disabled) && (s.disabled = e), s
            },
            _create: function() {
                var t = this.element[0].checked;
                this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
                    change: "_toggleClasses",
                    focus: function() {
                        this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                    },
                    blur: function() {
                        this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                    }
                })
            },
            _readType: function() {
                var e = this.element[0].nodeName.toLowerCase();
                this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type)
            },
            _enhance: function() {
                this._updateIcon(this.element[0].checked)
            },
            widget: function() {
                return this.label
            },
            _getRadioGroup: function() {
                var e = this.element[0].name,
                    i = "input[name='" + t.ui.escapeSelector(e) + "']";
                return e ? (this.form.length ? t(this.form[0].elements).filter(i) : t(i).filter(function() {
                    return 0 === t(this).form().length
                })).not(this.element) : t([])
            },
            _toggleClasses: function() {
                var e = this.element[0].checked;
                this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each(function() {
                    var e = t(this).checkboxradio("instance");
                    e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active")
                })
            },
            _destroy: function() {
                this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
            },
            _setOption: function(t, e) {
                return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), void(this.element[0].disabled = e)) : void this.refresh()) : void 0
            },
            _updateIcon: function(e) {
                var i = "ui-icon ui-icon-background ";
                this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
            },
            _updateLabel: function() {
                var t = this.label.contents().not(this.element[0]);
                this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label)
            },
            refresh: function() {
                var t = this.element[0].checked,
                    e = this.element[0].disabled;
                this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({
                    disabled: e
                })
            }
        }]), t.ui.checkboxradio, t.widget("ui.button", {
            version: "1.12.1",
            defaultElement: "<button>",
            options: {
                classes: {
                    "ui-button": "ui-corner-all"
                },
                disabled: null,
                icon: null,
                iconPosition: "beginning",
                label: null,
                showLabel: !0
            },
            _getCreateOptions: function() {
                var t, e = this._super() || {};
                return this.isInput = this.element.is("input"), null != (t = this.element[0].disabled) && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e
            },
            _create: function() {
                !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
                    keyup: function(e) {
                        e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                    }
                })
            },
            _enhance: function() {
                this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
            },
            _updateTooltip: function() {
                this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
            },
            _updateIcon: function(e, i) {
                var n = "iconPosition" !== e,
                    s = n ? this.options.iconPosition : i,
                    o = "top" === s || "bottom" === s;
                this.icon ? n && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), n && this._addClass(this.icon, null, i), this._attachIcon(s), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(s))
            },
            _destroy: function() {
                this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
            },
            _attachIconSpace: function(t) {
                this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
            },
            _attachIcon: function(t) {
                this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
            },
            _setOptions: function(t) {
                var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
                    i = void 0 === t.icon ? this.options.icon : t.icon;
                e || i || (t.showLabel = !0), this._super(t)
            },
            _setOption: function(t, e) {
                "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur())
            },
            refresh: function() {
                var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
                t !== this.options.disabled && this._setOptions({
                    disabled: t
                }), this._updateTooltip()
            }
        }), !1 !== t.uiBackCompat && (t.widget("ui.button", t.ui.button, {
            options: {
                text: !0,
                icons: {
                    primary: null,
                    secondary: null
                }
            },
            _create: function() {
                this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
            },
            _setOption: function(t, e) {
                return "text" === t ? void this._super("showLabel", e) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), void this._superApply(arguments))
            }
        }), t.fn.button = (v = t.fn.button, function() {
            return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? v.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({
                icon: !1
            }) : this.checkboxradio.apply(this, arguments))
        }), t.fn.buttonset = function() {
            return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
                button: arguments[0].items
            }), this.controlgroup.apply(this, arguments))
        }), t.ui.button, t.extend(t.ui, {
            datepicker: {
                version: "1.12.1"
            }
        }), t.extend(e.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function() {
                return this.dpDiv
            },
            setDefaults: function(t) {
                return s(this._defaults, t || {}), this
            },
            _attachDatepicker: function(e, i) {
                var n, s, o;
                s = "div" === (n = e.nodeName.toLowerCase()) || "span" === n, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), (o = this._newInst(t(e), s)).settings = t.extend({}, i || {}), "input" === n ? this._connectDatepicker(e, o) : s && this._inlineDatepicker(e, o)
            },
            _newInst: function(e, n) {
                return {
                    id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                    input: e,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: n,
                    dpDiv: n ? i(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                }
            },
            _connectDatepicker: function(e, i) {
                var n = t(e);
                i.append = t([]), i.trigger = t([]), n.hasClass(this.markerClassName) || (this._attachments(n, i), n.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
            },
            _attachments: function(e, i) {
                var n, s, o, a = this._get(i, "appendText"),
                    r = this._get(i, "isRTL");
                i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), ("focus" === (n = this._get(i, "showOn")) || "both" === n) && e.on("focus", this._showDatepicker), ("button" === n || "both" === n) && (s = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                    src: o,
                    alt: s,
                    title: s
                }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
                    src: o,
                    alt: s,
                    title: s
                }) : s)), e[r ? "before" : "after"](i.trigger), i.trigger.on("click", function() {
                    return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
                }))
            },
            _autoSize: function(t) {
                if (this._get(t, "autoSize") && !t.inline) {
                    var e, i, n, s, o = new Date(2009, 11, 20),
                        a = this._get(t, "dateFormat");
                    a.match(/[DM]/) && (e = function(t) {
                        for (i = 0, n = 0, s = 0; t.length > s; s++) t[s].length > i && (i = t[s].length, n = s);
                        return n
                    }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
                }
            },
            _inlineDatepicker: function(e, i) {
                var n = t(e);
                n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function(e, i, n, o, a) {
                var r, l, h, c, d, u = this._dialogInst;
                return u || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), (u = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, t.data(this._dialogInput[0], "datepicker", u)), s(u.settings, o || {}), i = i && i.constructor === Date ? this._formatDate(u, i) : i, this._dialogInput.val(i), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (l = document.documentElement.clientWidth, h = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + c, h / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), u.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", u), this
            },
            _destroyDatepicker: function(e) {
                var i, n = t(e),
                    s = t.data(e, "datepicker");
                n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (s.append.remove(), s.trigger.remove(), n.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && n.removeClass(this.markerClassName).empty(), b === s && (b = null))
            },
            _enableDatepicker: function(e) {
                var i, n, s = t(e),
                    o = t.data(e, "datepicker");
                s.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !1, o.trigger.filter("button").each(function() {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : ("div" === i || "span" === i) && ((n = s.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                    return t === e ? null : t
                }))
            },
            _disableDatepicker: function(e) {
                var i, n, s = t(e),
                    o = t.data(e, "datepicker");
                s.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !0, o.trigger.filter("button").each(function() {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : ("div" === i || "span" === i) && ((n = s.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                    return t === e ? null : t
                }), this._disabledInputs[this._disabledInputs.length] = e)
            },
            _isDisabledDatepicker: function(t) {
                if (!t) return !1;
                for (var e = 0; this._disabledInputs.length > e; e++)
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
            _optionDatepicker: function(e, i, n) {
                var o, a, r, l, h = this._getInst(e);
                return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : h ? "all" === i ? t.extend({}, h.settings) : this._get(h, i) : null : (o = i || {}, "string" == typeof i && ((o = {})[i] = n), void(h && (this._curInst === h && this._hideDatepicker(), a = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(h, "min"), l = this._getMinMaxDate(h, "max"), s(h.settings, o), null !== r && void 0 !== o.dateFormat && void 0 === o.minDate && (h.settings.minDate = this._formatDate(h, r)), null !== l && void 0 !== o.dateFormat && void 0 === o.maxDate && (h.settings.maxDate = this._formatDate(h, l)), "disabled" in o && (o.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), h), this._autoSize(h), this._setDate(h, a), this._updateAlternate(h), this._updateDatepicker(h))))
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
                var i, n, s, o = t.datepicker._getInst(e.target),
                    a = !0,
                    r = o.dpDiv.is(".ui-datepicker-rtl");
                if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                    case 9:
                        t.datepicker._hideDatepicker(), a = !1;
                        break;
                    case 13:
                        return (s = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv))[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, s[0]), (i = t.datepicker._get(o, "onSelect")) ? (n = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [n, o])) : t.datepicker._hideDatepicker(), !1;
                    case 27:
                        t.datepicker._hideDatepicker();
                        break;
                    case 33:
                        t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 34:
                        t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 35:
                        (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
                        break;
                    case 36:
                        (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
                        break;
                    case 37:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 38:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
                        break;
                    case 39:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 40:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
                        break;
                    default:
                        a = !1
                } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
                a && (e.preventDefault(), e.stopPropagation())
            },
            _doKeyPress: function(e) {
                var i, n, s = t.datepicker._getInst(e.target);
                return t.datepicker._get(s, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(s, "dateFormat")), n = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > n || !i || i.indexOf(n) > -1) : void 0
            },
            _doKeyUp: function(e) {
                var i = t.datepicker._getInst(e.target);
                if (i.input.val() !== i.lastVal) try {
                    t.datepicker.parseDate(t.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, t.datepicker._getFormatConfig(i)) && (t.datepicker._setDateFromField(i), t.datepicker._updateAlternate(i), t.datepicker._updateDatepicker(i))
                } catch (t) {}
                return !0
            },
            _showDatepicker: function(e) {
                var i, n, o, a, r, l, h;
                ("input" !== (e = e.target || e).nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), t.datepicker._isDisabledDatepicker(e) || t.datepicker._lastInput === e) || (i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), !1 !== (o = (n = t.datepicker._get(i, "beforeShow")) ? n.apply(e, [e, i]) : {}) && (s(i.settings, o), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), a = !1, t(e).parents().each(function() {
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
                }(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? i.dpDiv.show(l, t.datepicker._get(i, "showOptions"), h) : i.dpDiv[l || "show"](l ? h : null), t.datepicker._shouldFocusInput(i) && i.input.trigger("focus"), t.datepicker._curInst = i)))
            },
            _updateDatepicker: function(e) {
                this.maxRows = 4, b = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
                var i, s = this._getNumberOfMonths(e),
                    o = s[1],
                    a = e.dpDiv.find("." + this._dayOverClass + " a");
                a.length > 0 && n.apply(a.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), o > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + o).css("width", 17 * o + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function() {
                    i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
                }, 0))
            },
            _shouldFocusInput: function(t) {
                return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
            },
            _checkOffset: function(e, i, n) {
                var s = e.dpDiv.outerWidth(),
                    o = e.dpDiv.outerHeight(),
                    a = e.input ? e.input.outerWidth() : 0,
                    r = e.input ? e.input.outerHeight() : 0,
                    l = document.documentElement.clientWidth + (n ? 0 : t(document).scrollLeft()),
                    h = document.documentElement.clientHeight + (n ? 0 : t(document).scrollTop());
                return i.left -= this._get(e, "isRTL") ? s - a : 0, i.left -= n && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= n && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0), i.top -= Math.min(i.top, i.top + o > h && h > o ? Math.abs(o + r) : 0), i
            },
            _findPos: function(e) {
                for (var i, n = this._getInst(e), s = this._get(n, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[s ? "previousSibling" : "nextSibling"];
                return [(i = t(e).offset()).left, i.top]
            },
            _hideDatepicker: function(e) {
                var i, n, s, o, a = this._curInst;
                !a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), n = this._get(a, "duration"), s = function() {
                    t.datepicker._tidyDialog(a)
                }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), n, s) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, s), i || s(), this._datepickerShowing = !1, (o = this._get(a, "onClose")) && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
            },
            _tidyDialog: function(t) {
                t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
            },
            _checkExternalClick: function(e) {
                if (t.datepicker._curInst) {
                    var i = t(e.target),
                        n = t.datepicker._getInst(i[0]);
                    (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== n) && t.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function(e, i, n) {
                var s = t(e),
                    o = this._getInst(s[0]);
                this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(o, i + ("M" === n ? this._get(o, "showCurrentAtPos") : 0), n), this._updateDatepicker(o))
            },
            _gotoToday: function(e) {
                var i, n = t(e),
                    s = this._getInst(n[0]);
                this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(n)
            },
            _selectMonthYear: function(e, i, n) {
                var s = t(e),
                    o = this._getInst(s[0]);
                o["selected" + ("M" === n ? "Month" : "Year")] = o["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(s)
            },
            _selectDay: function(e, i, n, s) {
                var o, a = t(e);
                t(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || ((o = this._getInst(a[0])).selectedDay = o.currentDay = t("a", s).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = n, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
            },
            _clearDate: function(e) {
                var i = t(e);
                this._selectDate(i, "")
            },
            _selectDate: function(e, i) {
                var n, s = t(e),
                    o = this._getInst(s[0]);
                i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), (n = this._get(o, "onSelect")) ? n.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null)
            },
            _updateAlternate: function(e) {
                var i, n, s, o = this._get(e, "altField");
                o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), n = this._getDate(e), s = this.formatDate(i, n, this._getFormatConfig(e)), t(o).val(s))
            },
            noWeekends: function(t) {
                var e = t.getDay();
                return [e > 0 && 6 > e, ""]
            },
            iso8601Week: function(t) {
                var e, i = new Date(t.getTime());
                return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
            },
            parseDate: function(e, i, n) {
                if (null == e || null == i) throw "Invalid arguments";
                if ("" === (i = "object" == typeof i ? "" + i : i + "")) return null;
                var s, o, a, r, l = 0,
                    h = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                    c = "string" != typeof h ? h : (new Date).getFullYear() % 100 + parseInt(h, 10),
                    d = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                    u = (n ? n.dayNames : null) || this._defaults.dayNames,
                    p = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                    f = (n ? n.monthNames : null) || this._defaults.monthNames,
                    m = -1,
                    g = -1,
                    v = -1,
                    b = -1,
                    y = !1,
                    _ = function(t) {
                        var i = e.length > s + 1 && e.charAt(s + 1) === t;
                        return i && s++, i
                    },
                    x = function(t) {
                        var e = _(t),
                            n = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                            s = RegExp("^\\d{" + ("y" === t ? n : 1) + "," + n + "}"),
                            o = i.substring(l).match(s);
                        if (!o) throw "Missing number at position " + l;
                        return l += o[0].length, parseInt(o[0], 10)
                    },
                    w = function(e, n, s) {
                        var o = -1,
                            a = t.map(_(e) ? s : n, function(t, e) {
                                return [
                                    [e, t]
                                ]
                            }).sort(function(t, e) {
                                return -(t[1].length - e[1].length)
                            });
                        if (t.each(a, function(t, e) {
                                var n = e[1];
                                return i.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (o = e[0], l += n.length, !1) : void 0
                            }), -1 !== o) return o + 1;
                        throw "Unknown name at position " + l
                    },
                    k = function() {
                        if (i.charAt(l) !== e.charAt(s)) throw "Unexpected literal at position " + l;
                        l++
                    };
                for (s = 0; e.length > s; s++)
                    if (y) "'" !== e.charAt(s) || _("'") ? k() : y = !1;
                    else switch (e.charAt(s)) {
                        case "d":
                            v = x("d");
                            break;
                        case "D":
                            w("D", d, u);
                            break;
                        case "o":
                            b = x("o");
                            break;
                        case "m":
                            g = x("m");
                            break;
                        case "M":
                            g = w("M", p, f);
                            break;
                        case "y":
                            m = x("y");
                            break;
                        case "@":
                            m = (r = new Date(x("@"))).getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                            break;
                        case "!":
                            m = (r = new Date((x("!") - this._ticksTo1970) / 1e4)).getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                            break;
                        case "'":
                            _("'") ? k() : y = !0;
                            break;
                        default:
                            k()
                    }
                    if (i.length > l && (a = i.substr(l), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
                if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= m ? 0 : -100)), b > -1)
                    for (g = 1, v = b; o = this._getDaysInMonth(m, g - 1), !(o >= v);) g++, v -= o;
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
            _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
            formatDate: function(t, e, i) {
                if (!e) return "";
                var n, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    o = (i ? i.dayNames : null) || this._defaults.dayNames,
                    a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    r = (i ? i.monthNames : null) || this._defaults.monthNames,
                    l = function(e) {
                        var i = t.length > n + 1 && t.charAt(n + 1) === e;
                        return i && n++, i
                    },
                    h = function(t, e, i) {
                        var n = "" + e;
                        if (l(t))
                            for (; i > n.length;) n = "0" + n;
                        return n
                    },
                    c = function(t, e, i, n) {
                        return l(t) ? n[e] : i[e]
                    },
                    d = "",
                    u = !1;
                if (e)
                    for (n = 0; t.length > n; n++)
                        if (u) "'" !== t.charAt(n) || l("'") ? d += t.charAt(n) : u = !1;
                        else switch (t.charAt(n)) {
                            case "d":
                                d += h("d", e.getDate(), 2);
                                break;
                            case "D":
                                d += c("D", e.getDay(), s, o);
                                break;
                            case "o":
                                d += h("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                d += h("m", e.getMonth() + 1, 2);
                                break;
                            case "M":
                                d += c("M", e.getMonth(), a, r);
                                break;
                            case "y":
                                d += l("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + e.getFullYear() % 100;
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
                                d += t.charAt(n)
                        }
                        return d
            },
            _possibleChars: function(t) {
                var e, i = "",
                    n = !1,
                    s = function(i) {
                        var n = t.length > e + 1 && t.charAt(e + 1) === i;
                        return n && e++, n
                    };
                for (e = 0; t.length > e; e++)
                    if (n) "'" !== t.charAt(e) || s("'") ? i += t.charAt(e) : n = !1;
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
                            s("'") ? i += "'" : n = !0;
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
                        n = t.lastVal = t.input ? t.input.val() : null,
                        s = this._getDefaultDate(t),
                        o = s,
                        a = this._getFormatConfig(t);
                    try {
                        o = this.parseDate(i, n, a) || s
                    } catch (t) {
                        n = e ? "" : n
                    }
                    t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = n ? o.getDate() : 0, t.currentMonth = n ? o.getMonth() : 0, t.currentYear = n ? o.getFullYear() : 0, this._adjustInstDate(t)
                }
            },
            _getDefaultDate: function(t) {
                return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
            },
            _determineDate: function(e, i, n) {
                var s, o, a = null == i || "" === i ? n : "string" == typeof i ? function(i) {
                    try {
                        return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                    } catch (t) {}
                    for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, s = n.getFullYear(), o = n.getMonth(), a = n.getDate(), r = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = r.exec(i); l;) {
                        switch (l[2] || "d") {
                            case "d":
                            case "D":
                                a += parseInt(l[1], 10);
                                break;
                            case "w":
                            case "W":
                                a += 7 * parseInt(l[1], 10);
                                break;
                            case "m":
                            case "M":
                                o += parseInt(l[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(s, o));
                                break;
                            case "y":
                            case "Y":
                                s += parseInt(l[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(s, o))
                        }
                        l = r.exec(i)
                    }
                    return new Date(s, o, a)
                }(i) : "number" == typeof i ? isNaN(i) ? n : (s = i, (o = new Date).setDate(o.getDate() + s), o) : new Date(i.getTime());
                return (a = a && "Invalid Date" == "" + a ? n : a) && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a)
            },
            _daylightSavingAdjust: function(t) {
                return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
            },
            _setDate: function(t, e, i) {
                var n = !e,
                    s = t.selectedMonth,
                    o = t.selectedYear,
                    a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
                t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), s === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(n ? "" : this._formatDate(t))
            },
            _getDate: function(t) {
                return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay))
            },
            _attachHandlers: function(e) {
                var i = this._get(e, "stepMonths"),
                    n = "#" + e.id.replace(/\\\\/g, "\\");
                e.dpDiv.find("[data-handler]").map(function() {
                    var e = {
                        prev: function() {
                            t.datepicker._adjustDate(n, -i, "M")
                        },
                        next: function() {
                            t.datepicker._adjustDate(n, +i, "M")
                        },
                        hide: function() {
                            t.datepicker._hideDatepicker()
                        },
                        today: function() {
                            t.datepicker._gotoToday(n)
                        },
                        selectDay: function() {
                            return t.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function() {
                            return t.datepicker._selectMonthYear(n, this, "M"), !1
                        },
                        selectYear: function() {
                            return t.datepicker._selectMonthYear(n, this, "Y"), !1
                        }
                    };
                    t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function(t) {
                var e, i, n, s, o, a, r, l, h, c, d, u, p, f, m, g, v, b, y, _, x, w, k, C, S, D, T, P, I, E, M, A, O, $, N, R, z, H, W, L = new Date,
                    F = this._daylightSavingAdjust(new Date(L.getFullYear(), L.getMonth(), L.getDate())),
                    B = this._get(t, "isRTL"),
                    j = this._get(t, "showButtonPanel"),
                    U = this._get(t, "hideIfNoPrevNext"),
                    q = this._get(t, "navigationAsDateFormat"),
                    Y = this._getNumberOfMonths(t),
                    V = this._get(t, "showCurrentAtPos"),
                    K = this._get(t, "stepMonths"),
                    G = 1 !== Y[0] || 1 !== Y[1],
                    X = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                    Q = this._getMinMaxDate(t, "min"),
                    Z = this._getMinMaxDate(t, "max"),
                    J = t.drawMonth - V,
                    tt = t.drawYear;
                if (0 > J && (J += 12, tt--), Z)
                    for (e = this._daylightSavingAdjust(new Date(Z.getFullYear(), Z.getMonth() - Y[0] * Y[1] + 1, Z.getDate())), e = Q && Q > e ? Q : e; this._daylightSavingAdjust(new Date(tt, J, 1)) > e;) J--, 0 > J && (J = 11, tt--);
                for (t.drawMonth = J, t.drawYear = tt, i = this._get(t, "prevText"), i = q ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, J - K, 1)), this._getFormatConfig(t)) : i, n = this._canAdjustMonth(t, -1, tt, J) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>" : U ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(t, "nextText"), s = q ? this.formatDate(s, this._daylightSavingAdjust(new Date(tt, J + K, 1)), this._getFormatConfig(t)) : s, o = this._canAdjustMonth(t, 1, tt, J) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + s + "</span></a>" : U ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + s + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? X : F, a = q ? this.formatDate(a, r, this._getFormatConfig(t)) : a, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", h = j ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (B ? l : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (B ? "" : l) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, d = this._get(t, "showWeek"), u = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), m = this._get(t, "monthNamesShort"), g = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), b = this._get(t, "selectOtherMonths"), y = this._getDefaultDate(t), _ = "", w = 0; Y[0] > w; w++) {
                    for (k = "", this.maxRows = 4, C = 0; Y[1] > C; C++) {
                        if (S = this._daylightSavingAdjust(new Date(tt, J, t.selectedDay)), D = " ui-corner-all", T = "", G) {
                            if (T += "<div class='ui-datepicker-group", Y[1] > 1) switch (C) {
                                case 0:
                                    T += " ui-datepicker-group-first", D = " ui-corner-" + (B ? "right" : "left");
                                    break;
                                case Y[1] - 1:
                                    T += " ui-datepicker-group-last", D = " ui-corner-" + (B ? "left" : "right");
                                    break;
                                default:
                                    T += " ui-datepicker-group-middle", D = ""
                            }
                            T += "'>"
                        }
                        for (T += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + D + "'>" + (/all|left/.test(D) && 0 === w ? B ? o : n : "") + (/all|right/.test(D) && 0 === w ? B ? n : o : "") + this._generateMonthYearHeader(t, J, tt, Q, Z, w > 0 || C > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", P = d ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", x = 0; 7 > x; x++) I = (x + c) % 7, P += "<th scope='col'" + ((x + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + u[I] + "'>" + p[I] + "</span></th>";
                        for (T += P + "</tr></thead><tbody>", E = this._getDaysInMonth(tt, J), tt === t.selectedYear && J === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, E)), M = (this._getFirstDayOfMonth(tt, J) - c + 7) % 7, A = Math.ceil((M + E) / 7), O = G && this.maxRows > A ? this.maxRows : A, this.maxRows = O, $ = this._daylightSavingAdjust(new Date(tt, J, 1 - M)), N = 0; O > N; N++) {
                            for (T += "<tr>", R = d ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")($) + "</td>" : "", x = 0; 7 > x; x++) z = g ? g.apply(t.input ? t.input[0] : null, [$]) : [!0, ""], H = $.getMonth() !== J, W = H && !b || !z[0] || Q && Q > $ || Z && $ > Z, R += "<td class='" + ((x + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (H ? " ui-datepicker-other-month" : "") + ($.getTime() === S.getTime() && J === t.selectedMonth && t._keyEvent || y.getTime() === $.getTime() && y.getTime() === S.getTime() ? " " + this._dayOverClass : "") + (W ? " " + this._unselectableClass + " ui-state-disabled" : "") + (H && !v ? "" : " " + z[1] + ($.getTime() === X.getTime() ? " " + this._currentClass : "") + ($.getTime() === F.getTime() ? " ui-datepicker-today" : "")) + "'" + (H && !v || !z[2] ? "" : " title='" + z[2].replace(/'/g, "&#39;") + "'") + (W ? "" : " data-handler='selectDay' data-event='click' data-month='" + $.getMonth() + "' data-year='" + $.getFullYear() + "'") + ">" + (H && !v ? "&#xa0;" : W ? "<span class='ui-state-default'>" + $.getDate() + "</span>" : "<a class='ui-state-default" + ($.getTime() === F.getTime() ? " ui-state-highlight" : "") + ($.getTime() === X.getTime() ? " ui-state-active" : "") + (H ? " ui-priority-secondary" : "") + "' href='#'>" + $.getDate() + "</a>") + "</td>", $.setDate($.getDate() + 1), $ = this._daylightSavingAdjust($);
                            T += R + "</tr>"
                        }++J > 11 && (J = 0, tt++), k += T += "</tbody></table>" + (G ? "</div>" + (Y[0] > 0 && C === Y[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
                    }
                    _ += k
                }
                return _ += h, t._keyEvent = !1, _
            },
            _generateMonthYearHeader: function(t, e, i, n, s, o, a, r) {
                var l, h, c, d, u, p, f, m, g = this._get(t, "changeMonth"),
                    v = this._get(t, "changeYear"),
                    b = this._get(t, "showMonthAfterYear"),
                    y = "<div class='ui-datepicker-title'>",
                    _ = "";
                if (o || !g) _ += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
                else {
                    for (l = n && n.getFullYear() === i, h = s && s.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!l || c >= n.getMonth()) && (!h || s.getMonth() >= c) && (_ += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
                    _ += "</select>"
                }
                if (b || (y += _ + (!o && g && v ? "" : "&#xa0;")), !t.yearshtml)
                    if (t.yearshtml = "", o || !v) y += "<span class='ui-datepicker-year'>" + i + "</span>";
                    else {
                        for (d = this._get(t, "yearRange").split(":"), u = (new Date).getFullYear(), f = (p = function(t) {
                                var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? u + parseInt(t, 10) : parseInt(t, 10);
                                return isNaN(e) ? u : e
                            })(d[0]), m = Math.max(f, p(d[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f, m = s ? Math.min(m, s.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                        t.yearshtml += "</select>", y += t.yearshtml, t.yearshtml = null
                    }
                return y += this._get(t, "yearSuffix"), b && (y += (!o && g && v ? "" : "&#xa0;") + _), y + "</div>"
            },
            _adjustInstDate: function(t, e, i) {
                var n = t.selectedYear + ("Y" === i ? e : 0),
                    s = t.selectedMonth + ("M" === i ? e : 0),
                    o = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? e : 0),
                    a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, s, o)));
                t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
            },
            _restrictMinMax: function(t, e) {
                var i = this._getMinMaxDate(t, "min"),
                    n = this._getMinMaxDate(t, "max"),
                    s = i && i > e ? i : e;
                return n && s > n ? n : s
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
            _canAdjustMonth: function(t, e, i, n) {
                var s = this._getNumberOfMonths(t),
                    o = this._daylightSavingAdjust(new Date(i, n + (0 > e ? e : s[0] * s[1]), 1));
                return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
            },
            _isInRange: function(t, e) {
                var i, n, s = this._getMinMaxDate(t, "min"),
                    o = this._getMinMaxDate(t, "max"),
                    a = null,
                    r = null,
                    l = this._get(t, "yearRange");
                return l && (i = l.split(":"), n = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += n), i[1].match(/[+\-].*/) && (r += n)), (!s || e.getTime() >= s.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || r >= e.getFullYear())
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
            _formatDate: function(t, e, i, n) {
                e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
                var s = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t))
            }
        }), t.fn.datepicker = function(e) {
            if (!this.length) return this;
            t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
            var i = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
                "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
            }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
        }, t.datepicker = new e, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.12.1", t.datepicker, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
        var _ = !1;
        t(document).on("mouseup", function() {
            _ = !1
        }), t.widget("ui.mouse", {
            version: "1.12.1",
            options: {
                cancel: "input, textarea, button, select, option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var e = this;
                this.element.on("mousedown." + this.widgetName, function(t) {
                    return e._mouseDown(t)
                }).on("click." + this.widgetName, function(i) {
                    return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function() {
                this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(e) {
                if (!_) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                    var i = this,
                        n = 1 === e.which,
                        s = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                    return !(n && !s && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        i.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                        return i._mouseMove(t)
                    }, this._mouseUpDelegate = function(t) {
                        return i._mouseUp(t)
                    }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), _ = !0, !0))
                }
            },
            _mouseMove: function(e) {
                if (this._mouseMoved) {
                    if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
                    if (!e.which)
                        if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                        else if (!this.ignoreMissingWhich) return this._mouseUp(e)
                }
                return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
            },
            _mouseUp: function(e) {
                this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, _ = !1, e.preventDefault()
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
        }), t.ui.plugin = {
            add: function(e, i, n) {
                var s, o = t.ui[e].prototype;
                for (s in n) o.plugins[s] = o.plugins[s] || [], o.plugins[s].push([i, n[s]])
            },
            call: function(t, e, i, n) {
                var s, o = t.plugins[e];
                if (o && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                    for (s = 0; o.length > s; s++) t.options[o[s][0]] && o[s][1].apply(t.element, i)
            }
        }, t.ui.safeBlur = function(e) {
            e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur")
        }, t.widget("ui.draggable", t.ui.mouse, {
            version: "1.12.1",
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
                "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
            },
            _setOption: function(t, e) {
                this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
            },
            _destroy: function() {
                return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this._removeHandleClassName(), void this._mouseDestroy())
            },
            _mouseCapture: function(e) {
                var i = this.options;
                return !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(e), !!this.handle && (this._blurActiveElement(e), this._blockFrames(!0 === i.iframeFix ? "iframe" : i.iframeFix), !0))
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
                var i = t.ui.safeActiveElement(this.document[0]);
                t(e.target).closest(i).length || t.ui.safeBlur(i)
            },
            _mouseStart: function(e) {
                var i = this.options;
                return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                    return "fixed" === t(this).css("position")
                }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), !1 === this._trigger("start", e) ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
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
                    var n = this._uiHash();
                    if (!1 === this._trigger("drag", e, n)) return this._mouseUp(new t.Event("mouseup", e)), !1;
                    this.position = n.position
                }
                return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
            },
            _mouseStop: function(e) {
                var i = this,
                    n = !1;
                return t.ui.ddmanager && !this.options.dropBehaviour && (n = t.ui.ddmanager.drop(this, e)), this.dropped && (n = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !n || "valid" === this.options.revert && n || !0 === this.options.revert || t.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    !1 !== i._trigger("stop", e) && i._clear()
                }) : !1 !== this._trigger("stop", e) && this._clear(), !1
            },
            _mouseUp: function(e) {
                return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e)
            },
            cancel: function() {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", {
                    target: this.element[0]
                })) : this._clear(), this
            },
            _getHandle: function(e) {
                return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length
            },
            _setHandleClassName: function() {
                this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
            },
            _removeHandleClassName: function() {
                this._removeClass(this.handleElement, "ui-draggable-handle")
            },
            _createHelper: function(e) {
                var i = this.options,
                    n = t.isFunction(i.helper),
                    s = n ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
                return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), n && s[0] === this.element[0] && this._setPositionRelative(), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
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
                var e, i, n, s = this.options,
                    o = this.document[0];
                return this.relativeContainer = null, s.containment ? "window" === s.containment ? void(this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === s.containment ? void(this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : s.containment.constructor === Array ? void(this.containment = s.containment) : ("parent" === s.containment && (s.containment = this.helper[0].parentNode), void((n = (i = t(s.containment))[0]) && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void(this.containment = null)
            },
            _convertPositionTo: function(t, e) {
                e || (e = this.position);
                var i = "absolute" === t ? 1 : -1,
                    n = this._isRootNode(this.scrollParent[0]);
                return {
                    top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i,
                    left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i
                }
            },
            _generatePosition: function(t, e) {
                var i, n, s, o, a = this.options,
                    r = this._isRootNode(this.scrollParent[0]),
                    l = t.pageX,
                    h = t.pageY;
                return r && this.offset.scroll || (this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                }), e && (this.containment && (this.relativeContainer ? (n = this.relativeContainer.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), a.grid && (s = a.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, h = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - a.grid[1] : s + a.grid[1] : s, o = a.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), "y" === a.axis && (l = this.originalPageX), "x" === a.axis && (h = this.originalPageY)), {
                    top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                    left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
                }
            },
            _clear: function() {
                this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
            },
            _trigger: function(e, i, n) {
                return n = n || this._uiHash(), t.ui.plugin.call(this, e, [i, n, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), n.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, n)
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
            start: function(e, i, n) {
                var s = t.extend({}, i, {
                    item: n.element
                });
                n.sortables = [], t(n.options.connectToSortable).each(function() {
                    var i = t(this).sortable("instance");
                    i && !i.options.disabled && (n.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, s))
                })
            },
            stop: function(e, i, n) {
                var s = t.extend({}, i, {
                    item: n.element
                });
                n.cancelHelperRemoval = !1, t.each(n.sortables, function() {
                    var t = this;
                    t.isOver ? (t.isOver = 0, n.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
                        position: t.placeholder.css("position"),
                        top: t.placeholder.css("top"),
                        left: t.placeholder.css("left")
                    }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, s))
                })
            },
            drag: function(e, i, n) {
                t.each(n.sortables, function() {
                    var s = !1,
                        o = this;
                    o.positionAbs = n.positionAbs, o.helperProportions = n.helperProportions, o.offset.click = n.offset.click, o._intersectsWith(o.containerCache) && (s = !0, t.each(n.sortables, function() {
                        return this.positionAbs = n.positionAbs, this.helperProportions = n.helperProportions, this.offset.click = n.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (s = !1), s
                    })), s ? (o.isOver || (o.isOver = 1, n._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function() {
                        return i.helper[0]
                    }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = n.offset.click.top, o.offset.click.left = n.offset.click.left, o.offset.parent.left -= n.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= n.offset.parent.top - o.offset.parent.top, n._trigger("toSortable", e), n.dropped = o.element, t.each(n.sortables, function() {
                        this.refreshPositions()
                    }), n.currentItem = n.element, o.fromOutside = n), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(n._parent), n._refreshOffsets(e), i.position = n._generatePosition(e, !0), n._trigger("fromSortable", e), n.dropped = !1, t.each(n.sortables, function() {
                        this.refreshPositions()
                    }))
                })
            }
        }), t.ui.plugin.add("draggable", "cursor", {
            start: function(e, i, n) {
                var s = t("body"),
                    o = n.options;
                s.css("cursor") && (o._cursor = s.css("cursor")), s.css("cursor", o.cursor)
            },
            stop: function(e, i, n) {
                var s = n.options;
                s._cursor && t("body").css("cursor", s._cursor)
            }
        }), t.ui.plugin.add("draggable", "opacity", {
            start: function(e, i, n) {
                var s = t(i.helper),
                    o = n.options;
                s.css("opacity") && (o._opacity = s.css("opacity")), s.css("opacity", o.opacity)
            },
            stop: function(e, i, n) {
                var s = n.options;
                s._opacity && t(i.helper).css("opacity", s._opacity)
            }
        }), t.ui.plugin.add("draggable", "scroll", {
            start: function(t, e, i) {
                i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
            },
            drag: function(e, i, n) {
                var s = n.options,
                    o = !1,
                    a = n.scrollParentNotHidden[0],
                    r = n.document[0];
                a !== r && "HTML" !== a.tagName ? (s.axis && "x" === s.axis || (n.overflowOffset.top + a.offsetHeight - e.pageY < s.scrollSensitivity ? a.scrollTop = o = a.scrollTop + s.scrollSpeed : e.pageY - n.overflowOffset.top < s.scrollSensitivity && (a.scrollTop = o = a.scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (n.overflowOffset.left + a.offsetWidth - e.pageX < s.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + s.scrollSpeed : e.pageX - n.overflowOffset.left < s.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(r).scrollTop() < s.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < s.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (e.pageX - t(r).scrollLeft() < s.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < s.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + s.scrollSpeed)))), !1 !== o && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(n, e)
            }
        }), t.ui.plugin.add("draggable", "snap", {
            start: function(e, i, n) {
                var s = n.options;
                n.snapElements = [], t(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each(function() {
                    var e = t(this),
                        i = e.offset();
                    this !== n.element[0] && n.snapElements.push({
                        item: this,
                        width: e.outerWidth(),
                        height: e.outerHeight(),
                        top: i.top,
                        left: i.left
                    })
                })
            },
            drag: function(e, i, n) {
                var s, o, a, r, l, h, c, d, u, p, f = n.options,
                    m = f.snapTolerance,
                    g = i.offset.left,
                    v = g + n.helperProportions.width,
                    b = i.offset.top,
                    y = b + n.helperProportions.height;
                for (u = n.snapElements.length - 1; u >= 0; u--) l = n.snapElements[u].left - n.margins.left, h = l + n.snapElements[u].width, c = n.snapElements[u].top - n.margins.top, d = c + n.snapElements[u].height, l - m > v || g > h + m || c - m > y || b > d + m || !t.contains(n.snapElements[u].item.ownerDocument, n.snapElements[u].item) ? (n.snapElements[u].snapping && n.options.snap.release && n.options.snap.release.call(n.element, e, t.extend(n._uiHash(), {
                    snapItem: n.snapElements[u].item
                })), n.snapElements[u].snapping = !1) : ("inner" !== f.snapMode && (s = m >= Math.abs(c - y), o = m >= Math.abs(d - b), a = m >= Math.abs(l - v), r = m >= Math.abs(h - g), s && (i.position.top = n._convertPositionTo("relative", {
                    top: c - n.helperProportions.height,
                    left: 0
                }).top), o && (i.position.top = n._convertPositionTo("relative", {
                    top: d,
                    left: 0
                }).top), a && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: l - n.helperProportions.width
                }).left), r && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: h
                }).left)), p = s || o || a || r, "outer" !== f.snapMode && (s = m >= Math.abs(c - b), o = m >= Math.abs(d - y), a = m >= Math.abs(l - g), r = m >= Math.abs(h - v), s && (i.position.top = n._convertPositionTo("relative", {
                    top: c,
                    left: 0
                }).top), o && (i.position.top = n._convertPositionTo("relative", {
                    top: d - n.helperProportions.height,
                    left: 0
                }).top), a && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: l
                }).left), r && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: h - n.helperProportions.width
                }).left)), !n.snapElements[u].snapping && (s || o || a || r || p) && n.options.snap.snap && n.options.snap.snap.call(n.element, e, t.extend(n._uiHash(), {
                    snapItem: n.snapElements[u].item
                })), n.snapElements[u].snapping = s || o || a || r || p)
            }
        }), t.ui.plugin.add("draggable", "stack", {
            start: function(e, i, n) {
                var s, o = n.options,
                    a = t.makeArray(t(o.stack)).sort(function(e, i) {
                        return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                    });
                a.length && (s = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each(function(e) {
                    t(this).css("zIndex", s + e)
                }), this.css("zIndex", s + a.length))
            }
        }), t.ui.plugin.add("draggable", "zIndex", {
            start: function(e, i, n) {
                var s = t(i.helper),
                    o = n.options;
                s.css("zIndex") && (o._zIndex = s.css("zIndex")), s.css("zIndex", o.zIndex)
            },
            stop: function(e, i, n) {
                var s = n.options;
                s._zIndex && t(i.helper).css("zIndex", s._zIndex)
            }
        }), t.ui.draggable, t.widget("ui.resizable", t.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                classes: {
                    "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
                },
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
                return parseFloat(t) || 0
            },
            _isNumber: function(t) {
                return !isNaN(parseFloat(t))
            },
            _hasScroll: function(e, i) {
                if ("hidden" === t(e).css("overflow")) return !1;
                var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                    s = !1;
                return e[n] > 0 || (e[n] = 1, s = e[n] > 0, e[n] = 0, s)
            },
            _create: function() {
                var e, i = this.options,
                    n = this;
                this._addClass("ui-resizable"), t.extend(this, {
                    _aspectRatio: !!i.aspectRatio,
                    aspectRatio: i.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = {
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom"),
                    marginLeft: this.originalElement.css("marginLeft")
                }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", function() {
                    i.disabled || (n._removeClass("ui-resizable-autohide"), n._handles.show())
                }).on("mouseleave", function() {
                    i.disabled || n.resizing || (n._addClass("ui-resizable-autohide"), n._handles.hide())
                }), this._mouseInit()
            },
            _destroy: function() {
                this._mouseDestroy();
                var e, i = function(e) {
                    t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
                };
                return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                    position: e.css("position"),
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    top: e.css("top"),
                    left: e.css("left")
                }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
            },
            _setOption: function(t, e) {
                switch (this._super(t, e), t) {
                    case "handles":
                        this._removeHandles(), this._setupHandles()
                }
            },
            _setupHandles: function() {
                var e, i, n, s, o, a = this.options,
                    r = this;
                if (this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    } : "e,s,se"), this._handles = t(), this.handles.constructor === String)
                    for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), n = this.handles.split(","), this.handles = {}, i = 0; n.length > i; i++) e = t.trim(n[i]), s = "ui-resizable-" + e, o = t("<div>"), this._addClass(o, "ui-resizable-handle " + s), o.css({
                        zIndex: a.zIndex
                    }), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
                this._renderAxis = function(e) {
                    var i, n, s, o;
                    e = e || this.element;
                    for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], {
                        mousedown: r._mouseDown
                    })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (n = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), s = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(s, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
                }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function() {
                    r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = o && o[1] ? o[1] : "se")
                }), a.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
            },
            _removeHandles: function() {
                this._handles.remove()
            },
            _mouseCapture: function(e) {
                var i, n, s = !1;
                for (i in this.handles) n = t(this.handles[i])[0], (n === e.target || t.contains(n, e.target)) && (s = !0);
                return !this.options.disabled && s
            },
            _mouseStart: function(e) {
                var i, n, s, o = this.options,
                    a = this.element;
                return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), n = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, n += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                    left: i,
                    top: n
                }, this.size = this._helper ? {
                    width: this.helper.width(),
                    height: this.helper.height()
                } : {
                    width: a.width(),
                    height: a.height()
                }, this.originalSize = this._helper ? {
                    width: a.outerWidth(),
                    height: a.outerHeight()
                } : {
                    width: a.width(),
                    height: a.height()
                }, this.sizeDiff = {
                    width: a.outerWidth() - a.width(),
                    height: a.outerHeight() - a.height()
                }, this.originalPosition = {
                    left: i,
                    top: n
                }, this.originalMousePosition = {
                    left: e.pageX,
                    top: e.pageY
                }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, s = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === s ? this.axis + "-resize" : s), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0
            },
            _mouseDrag: function(e) {
                var i, n, s = this.originalMousePosition,
                    o = this.axis,
                    a = e.pageX - s.left || 0,
                    r = e.pageY - s.top || 0,
                    l = this._change[o];
                return this._updatePrevProperties(), !!l && (i = l.apply(this, [e, a, r]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), n = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1)
            },
            _mouseStop: function(e) {
                this.resizing = !1;
                var i, n, s, o, a, r, l, h = this.options,
                    c = this;
                return this._helper && (s = (n = (i = this._proportionallyResizeElements).length && /textarea/i.test(i[0].nodeName)) && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, o = n ? 0 : c.sizeDiff.width, a = {
                    width: c.helper.width() - o,
                    height: c.helper.height() - s
                }, r = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null, l = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null, h.animate || this.element.css(t.extend(a, {
                    top: l,
                    left: r
                })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !h.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
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
                var e, i, n, s, o, a = this.options;
                o = {
                    minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
                    maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
                    minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
                    maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
                }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, s = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), o.maxWidth > i && (o.maxWidth = i), o.maxHeight > s && (o.maxHeight = s)), this._vBoundaries = o
            },
            _updateCache: function(t) {
                this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
            },
            _updateRatio: function(t) {
                var e = this.position,
                    i = this.size,
                    n = this.axis;
                return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
            },
            _respectSize: function(t) {
                var e = this._vBoundaries,
                    i = this.axis,
                    n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                    s = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                    o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                    a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                    r = this.originalPosition.left + this.originalSize.width,
                    l = this.originalPosition.top + this.originalSize.height,
                    h = /sw|nw|w/.test(i),
                    c = /nw|ne|n/.test(i);
                return o && (t.width = e.minWidth), a && (t.height = e.minHeight), n && (t.width = e.maxWidth), s && (t.height = e.maxHeight), o && h && (t.left = r - e.minWidth), n && h && (t.left = r - e.maxWidth), a && c && (t.top = l - e.minHeight), s && c && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
            },
            _getPaddingPlusBorderDimensions: function(t) {
                for (var e = 0, i = [], n = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], s = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseFloat(n[e]) || 0, i[e] += parseFloat(s[e]) || 0;
                return {
                    height: i[0] + i[2],
                    width: i[1] + i[3]
                }
            },
            _proportionallyResize: function() {
                if (this._proportionallyResizeElements.length)
                    for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
                        height: i.height() - this.outerDimensions.height || 0,
                        width: i.width() - this.outerDimensions.width || 0
                    })
            },
            _renderProxy: function() {
                var e = this.element,
                    i = this.options;
                this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
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
                    var n = this.originalSize;
                    return {
                        top: this.originalPosition.top + i,
                        height: n.height - i
                    }
                },
                s: function(t, e, i) {
                    return {
                        height: this.originalSize.height + i
                    }
                },
                se: function(e, i, n) {
                    return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
                },
                sw: function(e, i, n) {
                    return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
                },
                ne: function(e, i, n) {
                    return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
                },
                nw: function(e, i, n) {
                    return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
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
                    n = i.options,
                    s = i._proportionallyResizeElements,
                    o = s.length && /textarea/i.test(s[0].nodeName),
                    a = o && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
                    r = o ? 0 : i.sizeDiff.width,
                    l = {
                        width: i.size.width - r,
                        height: i.size.height - a
                    },
                    h = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                    c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
                i.element.animate(t.extend(l, c && h ? {
                    top: c,
                    left: h
                } : {}), {
                    duration: n.animateDuration,
                    easing: n.animateEasing,
                    step: function() {
                        var n = {
                            width: parseFloat(i.element.css("width")),
                            height: parseFloat(i.element.css("height")),
                            top: parseFloat(i.element.css("top")),
                            left: parseFloat(i.element.css("left"))
                        };
                        s && s.length && t(s[0]).css({
                            width: n.width,
                            height: n.height
                        }), i._updateCache(n), i._propagate("resize", e)
                    }
                })
            }
        }), t.ui.plugin.add("resizable", "containment", {
            start: function() {
                var e, i, n, s, o, a, r, l = t(this).resizable("instance"),
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
                }) : (e = t(u), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, n) {
                    i[t] = l._num(e.css("padding" + n))
                }), l.containerOffset = e.offset(), l.containerPosition = e.position(), l.containerSize = {
                    height: e.innerHeight() - i[3],
                    width: e.innerWidth() - i[1]
                }, n = l.containerOffset, s = l.containerSize.height, o = l.containerSize.width, a = l._hasScroll(u, "left") ? u.scrollWidth : o, r = l._hasScroll(u) ? u.scrollHeight : s, l.parentData = {
                    element: u,
                    left: n.left,
                    top: n.top,
                    width: a,
                    height: r
                }))
            },
            resize: function(e) {
                var i, n, s, o, a = t(this).resizable("instance"),
                    r = a.options,
                    l = a.containerOffset,
                    h = a.position,
                    c = a._aspectRatio || e.shiftKey,
                    d = {
                        top: 0,
                        left: 0
                    },
                    u = a.containerElement,
                    p = !0;
                u[0] !== document && /static/.test(u.css("position")) && (d = l), h.left < (a._helper ? l.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - l.left : a.position.left - d.left), c && (a.size.height = a.size.width / a.aspectRatio, p = !1), a.position.left = r.helper ? l.left : 0), h.top < (a._helper ? l.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - l.top : a.position.top), c && (a.size.width = a.size.height * a.aspectRatio, p = !1), a.position.top = a._helper ? l.top : 0), s = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), s && o ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, a.offset.top = a.element.offset().top), i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - d.left : a.offset.left - l.left)), n = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - d.top : a.offset.top - l.top)), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, c && (a.size.height = a.size.width / a.aspectRatio, p = !1)), n + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - n, c && (a.size.width = a.size.height * a.aspectRatio, p = !1)), p || (a.position.left = a.prevPosition.left, a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height)
            },
            stop: function() {
                var e = t(this).resizable("instance"),
                    i = e.options,
                    n = e.containerOffset,
                    s = e.containerPosition,
                    o = e.containerElement,
                    a = t(e.helper),
                    r = a.offset(),
                    l = a.outerWidth() - e.sizeDiff.width,
                    h = a.outerHeight() - e.sizeDiff.height;
                e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                    left: r.left - s.left - n.left,
                    width: l,
                    height: h
                }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                    left: r.left - s.left - n.left,
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
                        width: parseFloat(e.width()),
                        height: parseFloat(e.height()),
                        left: parseFloat(e.css("left")),
                        top: parseFloat(e.css("top"))
                    })
                })
            },
            resize: function(e, i) {
                var n = t(this).resizable("instance"),
                    s = n.options,
                    o = n.originalSize,
                    a = n.originalPosition,
                    r = {
                        height: n.size.height - o.height || 0,
                        width: n.size.width - o.width || 0,
                        top: n.position.top - a.top || 0,
                        left: n.position.left - a.left || 0
                    };
                t(s.alsoResize).each(function() {
                    var e = t(this),
                        n = t(this).data("ui-resizable-alsoresize"),
                        s = {},
                        o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    t.each(o, function(t, e) {
                        var i = (n[e] || 0) + (r[e] || 0);
                        i && i >= 0 && (s[e] = i || null)
                    }), e.css(s)
                })
            },
            stop: function() {
                t(this).removeData("ui-resizable-alsoresize")
            }
        }), t.ui.plugin.add("resizable", "ghost", {
            start: function() {
                var e = t(this).resizable("instance"),
                    i = e.size;
                e.ghost = e.originalElement.clone(), e.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: i.height,
                    width: i.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }), e._addClass(e.ghost, "ui-resizable-ghost"), !1 !== t.uiBackCompat && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper)
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
                    n = i.options,
                    s = i.size,
                    o = i.originalSize,
                    a = i.originalPosition,
                    r = i.axis,
                    l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
                    h = l[0] || 1,
                    c = l[1] || 1,
                    d = Math.round((s.width - o.width) / h) * h,
                    u = Math.round((s.height - o.height) / c) * c,
                    p = o.width + d,
                    f = o.height + u,
                    m = n.maxWidth && p > n.maxWidth,
                    g = n.maxHeight && f > n.maxHeight,
                    v = n.minWidth && n.minWidth > p,
                    b = n.minHeight && n.minHeight > f;
                n.grid = l, v && (p += h), b && (f += c), m && (p -= h), g && (f -= c), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = a.top - u) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = a.left - d) : ((0 >= f - c || 0 >= p - h) && (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = a.top - u) : (f = c - e.height, i.size.height = f, i.position.top = a.top + o.height - f), p - h > 0 ? (i.size.width = p, i.position.left = a.left - d) : (p = h - e.width, i.size.width = p, i.position.left = a.left + o.width - p))
            }
        }), t.ui.resizable, t.widget("ui.dialog", {
            version: "1.12.1",
            options: {
                appendTo: "body",
                autoOpen: !0,
                buttons: [],
                classes: {
                    "ui-dialog": "ui-corner-all",
                    "ui-dialog-titlebar": "ui-corner-all"
                },
                closeOnEscape: !0,
                closeText: "Close",
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
                }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
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
                this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
            },
            widget: function() {
                return this.uiDialog
            },
            disable: t.noop,
            enable: t.noop,
            close: function(e) {
                var i = this;
                this._isOpen && !1 !== this._trigger("beforeClose", e) && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function() {
                    i._trigger("close", e)
                }))
            },
            isOpen: function() {
                return this._isOpen
            },
            moveToTop: function() {
                this._moveToTop()
            },
            _moveToTop: function(e, i) {
                var n = !1,
                    s = this.uiDialog.siblings(".ui-front:visible").map(function() {
                        return +t(this).css("z-index")
                    }).get(),
                    o = Math.max.apply(null, s);
                return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), n = !0), n && !i && this._trigger("focus", e), n
            },
            open: function() {
                var e = this;
                return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
                    e._focusTabbable(), e._trigger("focus")
                }), this._makeFocusTarget(), void this._trigger("open"))
            },
            _focusTabbable: function() {
                var t = this._focusedElement;
                t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus")
            },
            _keepFocus: function(e) {
                function i() {
                    var e = t.ui.safeActiveElement(this.document[0]);
                    this.uiDialog[0] === e || t.contains(this.uiDialog[0], e) || this._focusTabbable()
                }
                e.preventDefault(), i.call(this), this._delay(i)
            },
            _createWrapper: function() {
                this.uiDialog = t("<div>").hide().attr({
                    tabIndex: -1,
                    role: "dialog"
                }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
                    keydown: function(e) {
                        if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
                        if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                            var i = this.uiDialog.find(":tabbable"),
                                n = i.filter(":first"),
                                s = i.filter(":last");
                            e.target !== s[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== n[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function() {
                                s.trigger("focus")
                            }), e.preventDefault()) : (this._delay(function() {
                                n.trigger("focus")
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
                this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
                    mousedown: function(e) {
                        t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                    }
                }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
                    label: t("<a>").text(this.options.closeText).html(),
                    icon: "ui-icon-closethick",
                    showLabel: !1
                }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
                    click: function(t) {
                        t.preventDefault(), this.close(t)
                    }
                }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
                    "aria-labelledby": e.attr("id")
                })
            },
            _title: function(t) {
                this.options.title ? t.text(this.options.title) : t.html("&#160;")
            },
            _createButtonPane: function() {
                this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons()
            },
            _createButtons: function() {
                var e = this,
                    i = this.options.buttons;
                return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this._removeClass(this.uiDialog, "ui-dialog-buttons") : (t.each(i, function(i, n) {
                    var s, o;
                    n = t.isFunction(n) ? {
                        click: n,
                        text: i
                    } : n, n = t.extend({
                        type: "button"
                    }, n), s = n.click, o = {
                        icon: n.icon,
                        iconPosition: n.iconPosition,
                        showLabel: n.showLabel,
                        icons: n.icons,
                        text: n.text
                    }, delete n.click, delete n.icon, delete n.iconPosition, delete n.showLabel, delete n.icons, "boolean" == typeof n.text && delete n.text, t("<button></button>", n).button(o).appendTo(e.uiButtonSet).on("click", function() {
                        s.apply(e.element[0], arguments)
                    })
                }), this._addClass(this.uiDialog, "ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
            },
            _makeDraggable: function() {
                function e(t) {
                    return {
                        position: t.position,
                        offset: t.offset
                    }
                }
                var i = this,
                    n = this.options;
                this.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function(n, s) {
                        i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", n, e(s))
                    },
                    drag: function(t, n) {
                        i._trigger("drag", t, e(n))
                    },
                    stop: function(s, o) {
                        var a = o.offset.left - i.document.scrollLeft(),
                            r = o.offset.top - i.document.scrollTop();
                        n.position = {
                            my: "left top",
                            at: "left" + (a >= 0 ? "+" : "") + a + " top" + (r >= 0 ? "+" : "") + r,
                            of: i.window
                        }, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", s, e(o))
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
                    n = this.options,
                    s = n.resizable,
                    o = this.uiDialog.css("position"),
                    a = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
                this.uiDialog.resizable({
                    cancel: ".ui-dialog-content",
                    containment: "document",
                    alsoResize: this.element,
                    maxWidth: n.maxWidth,
                    maxHeight: n.maxHeight,
                    minWidth: n.minWidth,
                    minHeight: this._minHeight(),
                    handles: a,
                    start: function(n, s) {
                        i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", n, e(s))
                    },
                    resize: function(t, n) {
                        i._trigger("resize", t, e(n))
                    },
                    stop: function(s, o) {
                        var a = i.uiDialog.offset(),
                            r = a.left - i.document.scrollLeft(),
                            l = a.top - i.document.scrollTop();
                        n.height = i.uiDialog.height(), n.width = i.uiDialog.width(), n.position = {
                            my: "left top",
                            at: "left" + (r >= 0 ? "+" : "") + r + " top" + (l >= 0 ? "+" : "") + l,
                            of: i.window
                        }, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", s, e(o))
                    }
                }).css("position", o)
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
                    n = !1,
                    s = {};
                t.each(e, function(t, e) {
                    i._setOption(t, e), t in i.sizeRelatedOptions && (n = !0), t in i.resizableRelatedOptions && (s[t] = e)
                }), n && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", s)
            },
            _setOption: function(e, i) {
                var n, s, o = this.uiDialog;
                "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
                    label: t("<a>").text("" + this.options.closeText).html()
                }), "draggable" === e && ((n = o.is(":data(ui-draggable)")) && !i && o.draggable("destroy"), !n && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && ((s = o.is(":data(ui-resizable)")) && !i && o.resizable("destroy"), s && "string" == typeof i && o.resizable("option", "handles", i), s || !1 === i || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
            },
            _size: function() {
                var t, e, i, n = this.options;
                this.element.show().css({
                    width: "auto",
                    minHeight: 0,
                    maxHeight: "none",
                    height: 0
                }), n.minWidth > n.width && (n.width = n.minWidth), t = this.uiDialog.css({
                    height: "auto",
                    width: n.width
                }).outerHeight(), e = Math.max(0, n.minHeight - t), i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none", "auto" === n.height ? this.element.css({
                    minHeight: e,
                    maxHeight: i,
                    height: "auto"
                }) : this.element.height(Math.max(0, n.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
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
                    }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {
                        mousedown: "_keepFocus"
                    }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
                }
            },
            _destroyOverlay: function() {
                if (this.options.modal && this.overlay) {
                    var t = this.document.data("ui-dialog-overlays") - 1;
                    t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
                }
            }
        }), !1 !== t.uiBackCompat && t.widget("ui.dialog", t.ui.dialog, {
            options: {
                dialogClass: ""
            },
            _createWrapper: function() {
                this._super(), this.uiDialog.addClass(this.options.dialogClass)
            },
            _setOption: function(t, e) {
                "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments)
            }
        }), t.ui.dialog, t.widget("ui.droppable", {
            version: "1.12.1",
            widgetEventPrefix: "drop",
            options: {
                accept: "*",
                addClasses: !0,
                greedy: !1,
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
                    n = i.accept;
                this.isover = !1, this.isout = !0, this.accept = t.isFunction(n) ? n : function(t) {
                    return t.is(n)
                }, this.proportions = function() {
                    return arguments.length ? void(e = arguments[0]) : e || (e = {
                        width: this.element[0].offsetWidth,
                        height: this.element[0].offsetHeight
                    })
                }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable")
            },
            _addToManager: function(e) {
                t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this)
            },
            _splice: function(t) {
                for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1)
            },
            _destroy: function() {
                var e = t.ui.ddmanager.droppables[this.options.scope];
                this._splice(e)
            },
            _setOption: function(e, i) {
                if ("accept" === e) this.accept = t.isFunction(i) ? i : function(t) {
                    return t.is(i)
                };
                else if ("scope" === e) {
                    var n = t.ui.ddmanager.droppables[this.options.scope];
                    this._splice(n), this._addToManager(i)
                }
                this._super(e, i)
            },
            _activate: function(e) {
                var i = t.ui.ddmanager.current;
                this._addActiveClass(), i && this._trigger("activate", e, this.ui(i))
            },
            _deactivate: function(e) {
                var i = t.ui.ddmanager.current;
                this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i))
            },
            _over: function(e) {
                var i = t.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)))
            },
            _out: function(e) {
                var i = t.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)))
            },
            _drop: function(e, i) {
                var n = i || t.ui.ddmanager.current,
                    s = !1;
                return !(!n || (n.currentItem || n.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                    var i = t(this).droppable("instance");
                    return i.options.greedy && !i.options.disabled && i.options.scope === n.options.scope && i.accept.call(i.element[0], n.currentItem || n.element) && w(n, t.extend(i, {
                        offset: i.element.offset()
                    }), i.options.tolerance, e) ? (s = !0, !1) : void 0
                }), !s && (!!this.accept.call(this.element[0], n.currentItem || n.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(n)), this.element)))
            },
            ui: function(t) {
                return {
                    draggable: t.currentItem || t.element,
                    helper: t.helper,
                    position: t.position,
                    offset: t.positionAbs
                }
            },
            _addHoverClass: function() {
                this._addClass("ui-droppable-hover")
            },
            _removeHoverClass: function() {
                this._removeClass("ui-droppable-hover")
            },
            _addActiveClass: function() {
                this._addClass("ui-droppable-active")
            },
            _removeActiveClass: function() {
                this._removeClass("ui-droppable-active")
            }
        });
        var x, w = t.ui.intersect = function() {
            function t(t, e, i) {
                return t >= e && e + i > t
            }
            return function(e, i, n, s) {
                if (!i.offset) return !1;
                var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
                    a = (e.positionAbs || e.position.absolute).top + e.margins.top,
                    r = o + e.helperProportions.width,
                    l = a + e.helperProportions.height,
                    h = i.offset.left,
                    c = i.offset.top,
                    d = h + i.proportions().width,
                    u = c + i.proportions().height;
                switch (n) {
                    case "fit":
                        return o >= h && d >= r && a >= c && u >= l;
                    case "intersect":
                        return o + e.helperProportions.width / 2 > h && d > r - e.helperProportions.width / 2 && a + e.helperProportions.height / 2 > c && u > l - e.helperProportions.height / 2;
                    case "pointer":
                        return t(s.pageY, c, i.proportions().height) && t(s.pageX, h, i.proportions().width);
                    case "touch":
                        return (a >= c && u >= a || l >= c && u >= l || c > a && l > u) && (o >= h && d >= o || r >= h && d >= r || h > o && r > d);
                    default:
                        return !1
                }
            }
        }();
        t.ui.ddmanager = {
            current: null,
            droppables: {
                default: []
            },
            prepareOffsets: function(e, i) {
                var n, s, o = t.ui.ddmanager.droppables[e.options.scope] || [],
                    a = i ? i.type : null,
                    r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
                t: for (n = 0; o.length > n; n++)
                    if (!(o[n].options.disabled || e && !o[n].accept.call(o[n].element[0], e.currentItem || e.element))) {
                        for (s = 0; r.length > s; s++)
                            if (r[s] === o[n].element[0]) {
                                o[n].proportions().height = 0;
                                continue t
                            }
                        o[n].visible = "none" !== o[n].element.css("display"), o[n].visible && ("mousedown" === a && o[n]._activate.call(o[n], i), o[n].offset = o[n].element.offset(), o[n].proportions({
                            width: o[n].element[0].offsetWidth,
                            height: o[n].element[0].offsetHeight
                        }))
                    }
            },
            drop: function(e, i) {
                var n = !1;
                return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
                    this.options && (!this.options.disabled && this.visible && w(e, this, this.options.tolerance, i) && (n = this._drop.call(this, i) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
                }), n
            },
            dragStart: function(e, i) {
                e.element.parentsUntil("body").on("scroll.droppable", function() {
                    e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
                })
            },
            drag: function(e, i) {
                e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                        var n, s, o, a = w(e, this, this.options.tolerance, i),
                            r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                        r && (this.options.greedy && (s = this.options.scope, (o = this.element.parents(":data(ui-droppable)").filter(function() {
                            return t(this).droppable("instance").options.scope === s
                        })).length && ((n = t(o[0]).droppable("instance")).greedyChild = "isover" === r)), n && "isover" === r && (n.isover = !1, n.isout = !0, n._out.call(n, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), n && "isout" === r && (n.isout = !1, n.isover = !0, n._over.call(n, i)))
                    }
                })
            },
            dragStop: function(e, i) {
                e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            }
        }, !1 !== t.uiBackCompat && t.widget("ui.droppable", t.ui.droppable, {
            options: {
                hoverClass: !1,
                activeClass: !1
            },
            _addActiveClass: function() {
                this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass)
            },
            _removeActiveClass: function() {
                this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass)
            },
            _addHoverClass: function() {
                this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass)
            },
            _removeHoverClass: function() {
                this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
            }
        }), t.ui.droppable, t.widget("ui.progressbar", {
            version: "1.12.1",
            options: {
                classes: {
                    "ui-progressbar": "ui-corner-all",
                    "ui-progressbar-value": "ui-corner-left",
                    "ui-progressbar-complete": "ui-corner-right"
                },
                max: 100,
                value: 0,
                change: null,
                complete: null
            },
            min: 0,
            _create: function() {
                this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
                    role: "progressbar",
                    "aria-valuemin": this.min
                }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue()
            },
            _destroy: function() {
                this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove()
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
                "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
            },
            _setOptionDisabled: function(t) {
                this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t)
            },
            _percentage: function() {
                return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
            },
            _refreshValue: function() {
                var e = this.options.value,
                    i = this._percentage();
                this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": e
                }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
            }
        }), t.widget("ui.selectable", t.ui.mouse, {
            version: "1.12.1",
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
                var e = this;
                this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                    e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function() {
                        var i = t(this),
                            n = i.offset(),
                            s = {
                                left: n.left - e.elementPos.left,
                                top: n.top - e.elementPos.top
                            };
                        t.data(this, "selectable-item", {
                            element: this,
                            $element: i,
                            left: s.left,
                            top: s.top,
                            right: s.left + i.outerWidth(),
                            bottom: s.top + i.outerHeight(),
                            startselected: !1,
                            selected: i.hasClass("ui-selected"),
                            selecting: i.hasClass("ui-selecting"),
                            unselecting: i.hasClass("ui-unselecting")
                        })
                    })
                }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper")
            },
            _destroy: function() {
                this.selectees.removeData("selectable-item"), this._mouseDestroy()
            },
            _mouseStart: function(e) {
                var i = this,
                    n = this.options;
                this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(n.filter, this.element[0]), this._trigger("start", e), t(n.appendTo).append(this.helper), this.helper.css({
                    left: e.pageX,
                    top: e.pageY,
                    width: 0,
                    height: 0
                }), n.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                    var n = t.data(this, "selectable-item");
                    n.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(n.$element, "ui-selected"), n.selected = !1, i._addClass(n.$element, "ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", e, {
                        unselecting: n.element
                    }))
                }), t(e.target).parents().addBack().each(function() {
                    var n, s = t.data(this, "selectable-item");
                    return s ? (n = !e.metaKey && !e.ctrlKey || !s.$element.hasClass("ui-selected"), i._removeClass(s.$element, n ? "ui-unselecting" : "ui-selected")._addClass(s.$element, n ? "ui-selecting" : "ui-unselecting"), s.unselecting = !n, s.selecting = n, s.selected = n, n ? i._trigger("selecting", e, {
                        selecting: s.element
                    }) : i._trigger("unselecting", e, {
                        unselecting: s.element
                    }), !1) : void 0
                }))
            },
            _mouseDrag: function(e) {
                if (this.dragged = !0, !this.options.disabled) {
                    var i, n = this,
                        s = this.options,
                        o = this.opos[0],
                        a = this.opos[1],
                        r = e.pageX,
                        l = e.pageY;
                    return o > r && (i = r, r = o, o = i), a > l && (i = l, l = a, a = i), this.helper.css({
                        left: o,
                        top: a,
                        width: r - o,
                        height: l - a
                    }), this.selectees.each(function() {
                        var i = t.data(this, "selectable-item"),
                            h = !1,
                            c = {};
                        i && i.element !== n.element[0] && (c.left = i.left + n.elementPos.left, c.right = i.right + n.elementPos.left, c.top = i.top + n.elementPos.top, c.bottom = i.bottom + n.elementPos.top, "touch" === s.tolerance ? h = !(c.left > r || o > c.right || c.top > l || a > c.bottom) : "fit" === s.tolerance && (h = c.left > o && r > c.right && c.top > a && l > c.bottom), h ? (i.selected && (n._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (n._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (n._addClass(i.$element, "ui-selecting"), i.selecting = !0, n._trigger("selecting", e, {
                            selecting: i.element
                        }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (n._removeClass(i.$element, "ui-selecting"), i.selecting = !1, n._addClass(i.$element, "ui-selected"), i.selected = !0) : (n._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (n._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), n._trigger("unselecting", e, {
                            unselecting: i.element
                        }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (n._removeClass(i.$element, "ui-selected"), i.selected = !1, n._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, n._trigger("unselecting", e, {
                            unselecting: i.element
                        })))))
                    }), !1
                }
            },
            _mouseStop: function(e) {
                var i = this;
                return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() {
                    var n = t.data(this, "selectable-item");
                    i._removeClass(n.$element, "ui-unselecting"), n.unselecting = !1, n.startselected = !1, i._trigger("unselected", e, {
                        unselected: n.element
                    })
                }), t(".ui-selecting", this.element[0]).each(function() {
                    var n = t.data(this, "selectable-item");
                    i._removeClass(n.$element, "ui-selecting")._addClass(n.$element, "ui-selected"), n.selecting = !1, n.selected = !0, n.startselected = !0, i._trigger("selected", e, {
                        selected: n.element
                    })
                }), this._trigger("stop", e), this.helper.remove(), !1
            }
        }), t.widget("ui.selectmenu", [t.ui.formResetMixin, {
            version: "1.12.1",
            defaultElement: "<select>",
            options: {
                appendTo: null,
                classes: {
                    "ui-selectmenu-button-open": "ui-corner-top",
                    "ui-selectmenu-button-closed": "ui-corner-all"
                },
                disabled: null,
                icons: {
                    button: "ui-icon-triangle-1-s"
                },
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                width: !1,
                change: null,
                close: null,
                focus: null,
                open: null,
                select: null
            },
            _create: function() {
                var e = this.element.uniqueId().attr("id");
                this.ids = {
                    element: e,
                    button: e + "-button",
                    menu: e + "-menu"
                }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t()
            },
            _drawButton: function() {
                var e, i = this,
                    n = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
                this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
                    click: function(t) {
                        this.button.focus(), t.preventDefault()
                    }
                }), this.element.hide(), this.button = t("<span>", {
                    tabindex: this.options.disabled ? -1 : 0,
                    id: this.ids.button,
                    role: "combobox",
                    "aria-expanded": "false",
                    "aria-autocomplete": "list",
                    "aria-owns": this.ids.menu,
                    "aria-haspopup": "true",
                    title: this.element.attr("title")
                }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(n).appendTo(this.button), !1 !== this.options.width && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
                    i._rendered || i._refreshMenu()
                })
            },
            _drawMenu: function() {
                var e = this;
                this.menu = t("<ul>", {
                    "aria-hidden": "true",
                    "aria-labelledby": this.ids.button,
                    id: this.ids.menu
                }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                    classes: {
                        "ui-menu": "ui-corner-bottom"
                    },
                    role: "listbox",
                    select: function(t, i) {
                        t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t)
                    },
                    focus: function(t, i) {
                        var n = i.item.data("ui-selectmenu-item");
                        null != e.focusIndex && n.index !== e.focusIndex && (e._trigger("focus", t, {
                            item: n
                        }), e.isOpen || e._select(n, t)), e.focusIndex = n.index, e.button.attr("aria-activedescendant", e.menuItems.eq(n.index).attr("id"))
                    }
                }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
                    return !1
                }, this.menuInstance._isDivider = function() {
                    return !1
                }
            },
            refresh: function() {
                this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton()
            },
            _refreshMenu: function() {
                var t, e = this.element.find("option");
                this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
            },
            open: function(t) {
                this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)))
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
            _renderButtonItem: function(e) {
                var i = t("<span>");
                return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i
            },
            _renderMenu: function(e, i) {
                var n = this,
                    s = "";
                t.each(i, function(i, o) {
                    var a;
                    o.optgroup !== s && (a = t("<li>", {
                        text: o.optgroup
                    }), n._addClass(a, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), a.appendTo(e), s = o.optgroup), n._renderItemData(e, o)
                })
            },
            _renderItemData: function(t, e) {
                return this._renderItem(t, e).data("ui-selectmenu-item", e)
            },
            _renderItem: function(e, i) {
                var n = t("<li>"),
                    s = t("<div>", {
                        title: i.element.attr("title")
                    });
                return i.disabled && this._addClass(n, null, "ui-state-disabled"), this._setText(s, i.label), n.append(s).appendTo(e)
            },
            _setText: function(t, e) {
                e ? t.text(e) : t.html("&#160;")
            },
            _move: function(t, e) {
                var i, n, s = ".ui-menu-item";
                this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), s += ":not(.ui-state-disabled)"), (n = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1) : i[t + "All"](s).eq(0)).length && this.menuInstance.focus(e, n)
            },
            _getSelectedItem: function() {
                return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
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
                    this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e))
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
                var e = this.menuItems.eq(this.focusIndex).parent("li");
                e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
            },
            _select: function(t, e) {
                var i = this.element[0].selectedIndex;
                this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, {
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
                if ("icons" === t) {
                    var i = this.button.find("span.ui-icon");
                    this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
                }
                this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton()
            },
            _setOptionDisabled: function(t) {
                this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)
            },
            _appendTo: function() {
                var e = this.options.appendTo;
                return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
            },
            _toggleAttr: function() {
                this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
            },
            _resizeButton: function() {
                var t = this.options.width;
                return !1 === t ? void this.button.css("width", "") : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), void this.button.outerWidth(t))
            },
            _resizeMenu: function() {
                this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
            },
            _getCreateOptions: function() {
                var t = this._super();
                return t.disabled = this.element.prop("disabled"), t
            },
            _parseOptions: function(e) {
                var i = this,
                    n = [];
                e.each(function(e, s) {
                    n.push(i._parseOption(t(s), e))
                }), this.items = n
            },
            _parseOption: function(t, e) {
                var i = t.parent("optgroup");
                return {
                    element: t,
                    index: e,
                    value: t.val(),
                    label: t.text(),
                    optgroup: i.attr("label") || "",
                    disabled: i.prop("disabled") || t.prop("disabled")
                }
            },
            _destroy: function() {
                this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element)
            }
        }]), t.widget("ui.slider", t.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                classes: {
                    "ui-slider": "ui-corner-all",
                    "ui-slider-handle": "ui-corner-all",
                    "ui-slider-range": "ui-corner-all ui-widget-header"
                },
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
                this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
            },
            _refresh: function() {
                this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
            },
            _createHandles: function() {
                var e, i, n = this.options,
                    s = this.element.find(".ui-slider-handle"),
                    o = [];
                for (i = n.values && n.values.length || 1, s.length > i && (s.slice(i).remove(), s = s.slice(0, i)), e = s.length; i > e; e++) o.push("<span tabindex='0'></span>");
                this.handles = s.add(t(o.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(e) {
                    t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
                })
            },
            _createRange: function() {
                var e = this.options;
                e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                    left: "",
                    bottom: ""
                })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
            },
            _setupEvents: function() {
                this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
            },
            _destroy: function() {
                this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
            },
            _mouseCapture: function(e) {
                var i, n, s, o, a, r, l, h = this,
                    c = this.options;
                return !c.disabled && (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), i = {
                    x: e.pageX,
                    y: e.pageY
                }, n = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                    var i = Math.abs(n - h.values(e));
                    (s > i || s === i && (e === h._lastChangedValue || h.values(e) === c.min)) && (s = i, o = t(this), a = e)
                }), !1 !== this._start(e, a) && (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), r = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                    left: 0,
                    top: 0
                } : {
                    left: e.pageX - r.left - o.width() / 2,
                    top: e.pageY - r.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, n), this._animateOff = !0, !0))
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
                return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
            },
            _detectOrientation: function() {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function(t) {
                var e, i, n, s, o;
                return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), (n = i / e) > 1 && (n = 1), 0 > n && (n = 0), "vertical" === this.orientation && (n = 1 - n), s = this._valueMax() - this._valueMin(), o = this._valueMin() + n * s, this._trimAlignValue(o)
            },
            _uiHash: function(t, e, i) {
                var n = {
                    handle: this.handles[t],
                    handleIndex: t,
                    value: void 0 !== e ? e : this.value()
                };
                return this._hasMultipleValues() && (n.value = void 0 !== e ? e : this.values(t), n.values = i || this.values()), n
            },
            _hasMultipleValues: function() {
                return this.options.values && this.options.values.length
            },
            _start: function(t, e) {
                return this._trigger("start", t, this._uiHash(e))
            },
            _slide: function(t, e, i) {
                var n, s = this.value(),
                    o = this.values();
                this._hasMultipleValues() && (n = this.values(e ? 0 : 1), s = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), o[e] = i), i !== s && (!1 !== this._trigger("slide", t, this._uiHash(e, i, o)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)))
            },
            _stop: function(t, e) {
                this._trigger("stop", t, this._uiHash(e))
            },
            _change: function(t, e) {
                this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
            },
            value: function(t) {
                return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
            },
            values: function(e, i) {
                var n, s, o;
                if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
                if (!arguments.length) return this._values();
                if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
                for (n = this.options.values, s = arguments[0], o = 0; n.length > o; o += 1) n[o] = this._trimAlignValue(s[o]), this._change(null, o);
                this._refreshValue()
            },
            _setOption: function(e, i) {
                var n, s = 0;
                switch ("range" === e && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (s = this.options.values.length), this._super(e, i), e) {
                    case "orientation":
                        this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                        break;
                    case "value":
                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                        break;
                    case "values":
                        for (this._animateOff = !0, this._refreshValue(), n = s - 1; n >= 0; n--) this._change(null, n);
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
            _setOptionDisabled: function(t) {
                this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
            },
            _value: function() {
                var t = this.options.value;
                return this._trimAlignValue(t)
            },
            _values: function(t) {
                var e, i, n;
                if (arguments.length) return e = this.options.values[t], this._trimAlignValue(e);
                if (this._hasMultipleValues()) {
                    for (i = this.options.values.slice(), n = 0; i.length > n; n += 1) i[n] = this._trimAlignValue(i[n]);
                    return i
                }
                return []
            },
            _trimAlignValue: function(t) {
                if (this._valueMin() >= t) return this._valueMin();
                if (t >= this._valueMax()) return this._valueMax();
                var e = this.options.step > 0 ? this.options.step : 1,
                    i = (t - this._valueMin()) % e,
                    n = t - i;
                return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e), parseFloat(n.toFixed(5))
            },
            _calculateNewMax: function() {
                var t = this.options.max,
                    e = this._valueMin(),
                    i = this.options.step;
                (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
            },
            _precision: function() {
                var t = this._precisionOf(this.options.step);
                return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
            },
            _precisionOf: function(t) {
                var e = "" + t,
                    i = e.indexOf(".");
                return -1 === i ? 0 : e.length - i - 1
            },
            _valueMin: function() {
                return this.options.min
            },
            _valueMax: function() {
                return this.max
            },
            _refreshRange: function(t) {
                "vertical" === t && this.range.css({
                    width: "",
                    left: ""
                }), "horizontal" === t && this.range.css({
                    height: "",
                    bottom: ""
                })
            },
            _refreshValue: function() {
                var e, i, n, s, o, a = this.options.range,
                    r = this.options,
                    l = this,
                    h = !this._animateOff && r.animate,
                    c = {};
                this._hasMultipleValues() ? this.handles.each(function(n) {
                    i = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](c, r.animate), !0 === l.options.range && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({
                        left: i + "%"
                    }, r.animate), 1 === n && l.range[h ? "animate" : "css"]({
                        width: i - e + "%"
                    }, {
                        queue: !1,
                        duration: r.animate
                    })) : (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({
                        bottom: i + "%"
                    }, r.animate), 1 === n && l.range[h ? "animate" : "css"]({
                        height: i - e + "%"
                    }, {
                        queue: !1,
                        duration: r.animate
                    }))), e = i
                }) : (n = this.value(), s = this._valueMin(), o = this._valueMax(), i = o !== s ? (n - s) / (o - s) * 100 : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                    width: i + "%"
                }, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                    width: 100 - i + "%"
                }, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                    height: i + "%"
                }, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                    height: 100 - i + "%"
                }, r.animate))
            },
            _handleEvents: {
                keydown: function(e) {
                    var i, n, s, o = t(e.target).data("ui-slider-handle-index");
                    switch (e.keyCode) {
                        case t.ui.keyCode.HOME:
                        case t.ui.keyCode.END:
                        case t.ui.keyCode.PAGE_UP:
                        case t.ui.keyCode.PAGE_DOWN:
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.RIGHT:
                        case t.ui.keyCode.DOWN:
                        case t.ui.keyCode.LEFT:
                            if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), !1 === this._start(e, o))) return
                    }
                    switch (s = this.options.step, i = n = this._hasMultipleValues() ? this.values(o) : this.value(), e.keyCode) {
                        case t.ui.keyCode.HOME:
                            n = this._valueMin();
                            break;
                        case t.ui.keyCode.END:
                            n = this._valueMax();
                            break;
                        case t.ui.keyCode.PAGE_UP:
                            n = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case t.ui.keyCode.PAGE_DOWN:
                            n = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.RIGHT:
                            if (i === this._valueMax()) return;
                            n = this._trimAlignValue(i + s);
                            break;
                        case t.ui.keyCode.DOWN:
                        case t.ui.keyCode.LEFT:
                            if (i === this._valueMin()) return;
                            n = this._trimAlignValue(i - s)
                    }
                    this._slide(e, o, n)
                },
                keyup: function(e) {
                    var i = t(e.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
                }
            }
        }), t.widget("ui.sortable", t.ui.mouse, {
            version: "1.12.1",
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
                this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
            },
            _setOption: function(t, e) {
                this._super(t, e), "handle" === t && this._setHandleClassName()
            },
            _setHandleClassName: function() {
                var e = this;
                this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function() {
                    e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
                })
            },
            _destroy: function() {
                this._mouseDestroy();
                for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
                return this
            },
            _mouseCapture: function(e, i) {
                var n = null,
                    s = !1,
                    o = this;
                return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), t(e.target).parents().each(function() {
                    return t.data(this, o.widgetName + "-item") === o ? (n = t(this), !1) : void 0
                }), t.data(e.target, o.widgetName + "-item") === o && (n = t(e.target)), !(!n || this.options.handle && !i && (t(this.options.handle, n).find("*").addBack().each(function() {
                    this === e.target && (s = !0)
                }), !s)) && (this.currentItem = n, this._removeCurrentsFromItems(), !0)))
            },
            _mouseStart: function(e, i, n) {
                var s, o, a = this.options;
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
                    }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
                        prev: this.currentItem.prev()[0],
                        parent: this.currentItem.parent()[0]
                    }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)
                    for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", e, this._uiHash(this));
                return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0
            },
            _mouseDrag: function(e) {
                var i, n, s, o, a = this.options,
                    r = !1;
                for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)), e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))), !1 !== r && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                    if (n = this.items[i], s = n.item[0], o = this._intersectsWithPointer(n), o && n.instance === this.currentContainer && s !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== s && !t.contains(this.placeholder[0], s) && ("semi-dynamic" !== this.options.type || !t.contains(this.element[0], s))) {
                        if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
                        this._rearrange(e, n), this._trigger("change", e, this._uiHash());
                        break
                    }
                return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function(e, i) {
                if (e) {
                    if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                        var n = this,
                            s = this.placeholder.offset(),
                            o = this.options.axis,
                            a = {};
                        o && "x" !== o || (a.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function() {
                            n._clear(e)
                        })
                    } else this._clear(e, i);
                    return !1
                }
            },
            cancel: function() {
                if (this.dragging) {
                    this._mouseUp(new t.Event("mouseup", {
                        target: null
                    })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
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
                    n = [];
                return e = e || {}, t(i).each(function() {
                    var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                    i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
                }), !n.length && e.key && n.push(e.key + "="), n.join("&")
            },
            toArray: function(e) {
                var i = this._getItemsAsjQuery(e && e.connected),
                    n = [];
                return e = e || {}, i.each(function() {
                    n.push(t(e.item || this).attr(e.attribute || "id") || "")
                }), n
            },
            _intersectsWith: function(t) {
                var e = this.positionAbs.left,
                    i = e + this.helperProportions.width,
                    n = this.positionAbs.top,
                    s = n + this.helperProportions.height,
                    o = t.left,
                    a = o + t.width,
                    r = t.top,
                    l = r + t.height,
                    h = this.offset.click.top,
                    c = this.offset.click.left,
                    d = "x" === this.options.axis || n + h > r && l > n + h,
                    u = "y" === this.options.axis || e + c > o && a > e + c,
                    p = d && u;
                return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && n + this.helperProportions.height / 2 > r && l > s - this.helperProportions.height / 2
            },
            _intersectsWithPointer: function(t) {
                var e, i, n = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                    s = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width);
                return !!(n && s) && (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1))
            },
            _intersectsWithSides: function(t) {
                var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                    i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                    n = this._getDragVerticalDirection(),
                    s = this._getDragHorizontalDirection();
                return this.floating && s ? "right" === s && i || "left" === s && !i : n && ("down" === n && e || "up" === n && !e)
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
                var n, s, o, a, r = [],
                    l = [],
                    h = this._connectWith();
                if (h && e)
                    for (n = h.length - 1; n >= 0; n--)
                        for (o = t(h[n], this.document[0]), s = o.length - 1; s >= 0; s--) a = t.data(o[s], this.widgetFullName), a && a !== this && !a.options.disabled && l.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
                for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                        options: this.options,
                        item: this.currentItem
                    }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), n = l.length - 1; n >= 0; n--) l[n][0].each(i);
                return t(r)
            },
            _removeCurrentsFromItems: function() {
                var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = t.grep(this.items, function(t) {
                    for (var i = 0; e.length > i; i++)
                        if (e[i] === t.item[0]) return !1;
                    return !0
                })
            },
            _refreshItems: function(e) {
                this.items = [], this.containers = [this];
                var i, n, s, o, a, r, l, h, c = this.items,
                    d = [
                        [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                            item: this.currentItem
                        }) : t(this.options.items, this.element), this]
                    ],
                    u = this._connectWith();
                if (u && this.ready)
                    for (i = u.length - 1; i >= 0; i--)
                        for (s = t(u[i], this.document[0]), n = s.length - 1; n >= 0; n--) o = t.data(s[n], this.widgetFullName), o && o !== this && !o.options.disabled && (d.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                            item: this.currentItem
                        }) : t(o.options.items, o.element), o]), this.containers.push(o));
                for (i = d.length - 1; i >= 0; i--)
                    for (a = d[i][1], r = d[i][0], n = 0, h = r.length; h > n; n++) l = t(r[n]), l.data(this.widgetName + "-item", a), c.push({
                        item: l,
                        instance: a,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
            },
            refreshPositions: function(e) {
                var i, n, s, o;
                for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), i = this.items.length - 1; i >= 0; i--) n = this.items[i], n.instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item, e || (n.width = s.outerWidth(), n.height = s.outerHeight()), o = s.offset(), n.left = o.left, n.top = o.top);
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                return this
            },
            _createPlaceholder: function(e) {
                var i, n = (e = e || this).options;
                n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {
                    element: function() {
                        var n = e.currentItem[0].nodeName.toLowerCase(),
                            s = t("<" + n + ">", e.document[0]);
                        return e._addClass(s, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(s, "ui-sortable-helper"), "tbody" === n ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(s)) : "tr" === n ? e._createTrPlaceholder(e.currentItem, s) : "img" === n && s.attr("src", e.currentItem.attr("src")), i || s.css("visibility", "hidden"), s
                    },
                    update: function(t, s) {
                        (!i || n.forcePlaceholderSize) && (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                    }
                }), e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), n.placeholder.update(e, e.placeholder)
            },
            _createTrPlaceholder: function(e, i) {
                var n = this;
                e.children().each(function() {
                    t("<td>&#160;</td>", n.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
                })
            },
            _contactContainers: function(e) {
                var i, n, s, o, a, r, l, h, c, d, u = null,
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
                        for (s = 1e4, o = null, a = (c = u.floating || this._isFloating(this.currentItem)) ? "left" : "top", r = c ? "width" : "height", d = c ? "pageX" : "pageY", n = this.items.length - 1; n >= 0; n--) t.contains(this.containers[p].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (l = this.items[n].item.offset()[a], h = !1, e[d] - l > this.items[n][r] / 2 && (h = !0), s > Math.abs(e[d] - l) && (s = Math.abs(e[d] - l), o = this.items[n], this.direction = h ? "up" : "down"));
                        if (!o && !this.options.dropOnEmpty) return;
                        if (this.currentContainer === this.containers[p]) return void(this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
                        o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
                    }
            },
            _createHelper: function(e) {
                var i = this.options,
                    n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
                return n.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] === this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), (!n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()), (!n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()), n
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
                var e, i, n, s = this.options;
                "parent" === s.containment && (s.containment = this.helper[0].parentNode), ("document" === s.containment || "window" === s.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === s.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === s.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(s.containment) || (e = t(s.containment)[0], i = t(s.containment).offset(), n = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
            },
            _convertPositionTo: function(e, i) {
                i || (i = this.position);
                var n = "absolute" === e ? 1 : -1,
                    s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    o = /(html|body)/i.test(s[0].tagName);
                return {
                    top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n,
                    left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n
                }
            },
            _generatePosition: function(e) {
                var i, n, s = this.options,
                    o = e.pageX,
                    a = e.pageY,
                    r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    l = /(html|body)/i.test(r[0].tagName);
                return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), s.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / s.grid[1]) * s.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - s.grid[1] : i + s.grid[1] : i, n = this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0], o = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - s.grid[0] : n + s.grid[0] : n)), {
                    top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : r.scrollTop()),
                    left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : r.scrollLeft())
                }
            },
            _rearrange: function(t, e, i, n) {
                i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                var s = this.counter;
                this._delay(function() {
                    s === this.counter && this.refreshPositions(!n)
                })
            },
            _clear: function(t, e) {
                function i(t, e, i) {
                    return function(n) {
                        i._trigger(t, n, e._uiHash(e))
                    }
                }
                this.reverting = !1;
                var n, s = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (n in this._storedCSS)("auto" === this._storedCSS[n] || "static" === this._storedCSS[n]) && (this._storedCSS[n] = "");
                    this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
                } else this.currentItem.show();
                for (this.fromOutside && !e && s.push(function(t) {
                        this._trigger("receive", t, this._uiHash(this.fromOutside))
                    }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function(t) {
                        this._trigger("update", t, this._uiHash())
                    }), this !== this.currentContainer && (e || (s.push(function(t) {
                        this._trigger("remove", t, this._uiHash())
                    }), s.push(function(t) {
                        return function(e) {
                            t._trigger("receive", e, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)), s.push(function(t) {
                        return function(e) {
                            t._trigger("update", e, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) e || s.push(i("deactivate", this, this.containers[n])), this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])), this.containers[n].containerCache.over = 0);
                if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                    for (n = 0; s.length > n; n++) s[n].call(this, t);
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
            version: "1.12.1",
            defaultElement: "<input>",
            widgetEventPrefix: "spin",
            options: {
                classes: {
                    "ui-spinner": "ui-corner-all",
                    "ui-spinner-down": "ui-corner-br",
                    "ui-spinner-up": "ui-corner-tr"
                },
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
                var e = this._super(),
                    i = this.element;
                return t.each(["min", "max", "step"], function(t, n) {
                    var s = i.attr(n);
                    null != s && s.length && (e[n] = s)
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
                        this.element[0] === t.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"), this.previous = n, this._delay(function() {
                            this.previous = n
                        }))
                    }
                    var n;
                    n = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur, i.call(this)
                    }), !1 !== this._start(e) && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
                },
                "mouseup .ui-spinner-button": "_stop",
                "mouseenter .ui-spinner-button": function(e) {
                    return t(e.currentTarget).hasClass("ui-state-active") ? !1 !== this._start(e) && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) : void 0
                },
                "mouseleave .ui-spinner-button": "_stop"
            },
            _enhance: function() {
                this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
            },
            _draw: function() {
                this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
                    classes: {
                        "ui-button": ""
                    }
                }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
                    icon: this.options.icons.up,
                    showLabel: !1
                }), this.buttons.last().button({
                    icon: this.options.icons.down,
                    showLabel: !1
                }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height())
            },
            _keydown: function(e) {
                var i = this.options,
                    n = t.ui.keyCode;
                switch (e.keyCode) {
                    case n.UP:
                        return this._repeat(null, 1, e), !0;
                    case n.DOWN:
                        return this._repeat(null, -1, e), !0;
                    case n.PAGE_UP:
                        return this._repeat(null, i.page, e), !0;
                    case n.PAGE_DOWN:
                        return this._repeat(null, -i.page, e), !0
                }
                return !1
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
                var e = "" + t,
                    i = e.indexOf(".");
                return -1 === i ? 0 : e.length - i - 1
            },
            _adjustValue: function(t) {
                var e, i, n = this.options;
                return i = t - (e = null !== n.min ? n.min : 0), t = e + (i = Math.round(i / n.step) * n.step), t = parseFloat(t.toFixed(this._precision())), null !== n.max && t > n.max ? n.max : null !== n.min && n.min > t ? n.min : t
            },
            _stop: function(t) {
                this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
            },
            _setOption: function(t, e) {
                var i, n, s;
                return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, void this.element.val(this._format(i))) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (n = this.buttons.first().find(".ui-icon"), this._removeClass(n, null, this.options.icons.up), this._addClass(n, null, e.up), s = this.buttons.last().find(".ui-icon"), this._removeClass(s, null, this.options.icons.down), this._addClass(s, null, e.down)), void this._super(t, e))
            },
            _setOptionDisabled: function(t) {
                this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable")
            },
            _setOptions: o(function(t) {
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
                this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element)
            },
            stepUp: o(function(t) {
                this._stepUp(t)
            }),
            _stepUp: function(t) {
                this._start() && (this._spin((t || 1) * this.options.step), this._stop())
            },
            stepDown: o(function(t) {
                this._stepDown(t)
            }),
            _stepDown: function(t) {
                this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
            },
            pageUp: o(function(t) {
                this._stepUp((t || 1) * this.options.page)
            }),
            pageDown: o(function(t) {
                this._stepDown((t || 1) * this.options.page)
            }),
            value: function(t) {
                return arguments.length ? void o(this._value).call(this, t) : this._parse(this.element.val())
            },
            widget: function() {
                return this.uiSpinner
            }
        }), !1 !== t.uiBackCompat && t.widget("ui.spinner", t.ui.spinner, {
            _enhance: function() {
                this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
            },
            _uiSpinnerHtml: function() {
                return "<span>"
            },
            _buttonHtml: function() {
                return "<a></a><a></a>"
            }
        }), t.ui.spinner, t.widget("ui.tabs", {
            version: "1.12.1",
            delay: 300,
            options: {
                active: null,
                classes: {
                    "ui-tabs": "ui-corner-all",
                    "ui-tabs-nav": "ui-corner-all",
                    "ui-tabs-panel": "ui-corner-bottom",
                    "ui-tabs-tab": "ui-corner-top"
                },
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
            _isLocal: (x = /#.*$/, function(t) {
                var e, i;
                e = t.href.replace(x, ""), i = location.href.replace(x, "");
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
                this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                    return e.tabs.index(t)
                }))).sort()), this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
            },
            _initialActive: function() {
                var e = this.options.active,
                    i = this.options.collapsible,
                    n = location.hash.substring(1);
                return null === e && (n && this.tabs.each(function(i, s) {
                    return t(s).attr("aria-controls") === n ? (e = i, !1) : void 0
                }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = !!this.tabs.length && 0)), !1 !== e && (-1 === (e = this.tabs.index(this.tabs.eq(e))) && (e = !i && 0)), !i && !1 === e && this.anchors.length && (e = 0), e
            },
            _getCreateEventData: function() {
                return {
                    tab: this.active,
                    panel: this.active.length ? this._getPanelForTab(this.active) : t()
                }
            },
            _tabKeydown: function(e) {
                var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
                    n = this.tabs.index(i),
                    s = !0;
                if (!this._handlePageNav(e)) {
                    switch (e.keyCode) {
                        case t.ui.keyCode.RIGHT:
                        case t.ui.keyCode.DOWN:
                            n++;
                            break;
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.LEFT:
                            s = !1, n--;
                            break;
                        case t.ui.keyCode.END:
                            n = this.anchors.length - 1;
                            break;
                        case t.ui.keyCode.HOME:
                            n = 0;
                            break;
                        case t.ui.keyCode.SPACE:
                            return e.preventDefault(), clearTimeout(this.activating), void this._activate(n);
                        case t.ui.keyCode.ENTER:
                            return e.preventDefault(), clearTimeout(this.activating), void this._activate(n !== this.options.active && n);
                        default:
                            return
                    }
                    e.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, s), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function() {
                        this.option("active", n)
                    }, this.delay))
                }
            },
            _panelKeydown: function(e) {
                this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus"))
            },
            _handlePageNav: function(e) {
                return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
            },
            _findNextTab: function(e, i) {
                for (var n = this.tabs.length - 1; - 1 !== t.inArray((e > n && (e = 0), 0 > e && (e = n), e), this.options.disabled);) e = i ? e + 1 : e - 1;
                return e
            },
            _focusNextTab: function(t, e) {
                return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t
            },
            _setOption: function(t, e) {
                return "active" === t ? void this._activate(e) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e)))
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
                this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                    "aria-hidden": "true"
                }), this.active.length ? (this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
                    "aria-hidden": "false"
                })) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function() {
                var e = this,
                    i = this.tabs,
                    n = this.anchors,
                    s = this.panels;
                this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function(e) {
                    t(this).is(".ui-state-disabled") && e.preventDefault()
                }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
                    t(this).closest("li").is(".ui-state-disabled") && this.blur()
                }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
                    role: "tab",
                    tabIndex: -1
                }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function() {
                    return t("a", this)[0]
                }).attr({
                    role: "presentation",
                    tabIndex: -1
                }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function(i, n) {
                    var s, o, a, r = t(n).uniqueId().attr("id"),
                        l = t(n).closest("li"),
                        h = l.attr("aria-controls");
                    e._isLocal(n) ? (a = (s = n.hash).substring(1), o = e.element.find(e._sanitizeSelector(s))) : (s = "#" + (a = l.attr("aria-controls") || t({}).uniqueId()[0].id), (o = e.element.find(s)).length || (o = e._createPanel(a)).insertAfter(e.panels[i - 1] || e.tablist), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), h && l.data("ui-tabs-aria-controls", h), l.attr({
                        "aria-controls": a,
                        "aria-labelledby": r
                    }), o.attr("aria-labelledby", r)
                }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(n.not(this.anchors)), this._off(s.not(this.panels)))
            },
            _getList: function() {
                return this.tablist || this.element.find("ol, ul").eq(0)
            },
            _createPanel: function(e) {
                return t("<div>").attr("id", e).data("ui-tabs-destroy", !0)
            },
            _setOptionDisabled: function(e) {
                var i, n, s;
                for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), s = 0; n = this.tabs[s]; s++) i = t(n), !0 === e || -1 !== t.inArray(s, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
                this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === e)
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
                var i, n = this.element.parent();
                "fill" === e ? (i = n.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                    var e = t(this),
                        n = e.css("position");
                    "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0))
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
                    n = this.active,
                    s = t(e.currentTarget).closest("li"),
                    o = s[0] === n[0],
                    a = o && i.collapsible,
                    r = a ? t() : this._getPanelForTab(s),
                    l = n.length ? this._getPanelForTab(n) : t(),
                    h = {
                        oldTab: n,
                        oldPanel: l,
                        newTab: a ? t() : s,
                        newPanel: r
                    };
                e.preventDefault(), s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || !1 === this._trigger("beforeActivate", e, h) || (i.active = !a && this.tabs.index(s), this.active = o ? t() : s, this.xhr && this.xhr.abort(), l.length || r.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), r.length && this.load(this.tabs.index(s), e), this._toggle(e, h))
            },
            _toggle: function(e, i) {
                function n() {
                    o.running = !1, o._trigger("activate", e, i)
                }

                function s() {
                    o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, n) : (a.show(), n())
                }
                var o = this,
                    a = i.newPanel,
                    r = i.oldPanel;
                this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
                    o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), s()
                }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.hide(), s()), r.attr("aria-hidden", "true"), i.oldTab.attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function() {
                    return 0 === t(this).attr("tabIndex")
                }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
            },
            _activate: function(e) {
                var i, n = this._findActive(e);
                n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: t.noop
                }))
            },
            _findActive: function(e) {
                return !1 === e ? t() : this.tabs.eq(e)
            },
            _getIndex: function(e) {
                return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e
            },
            _destroy: function() {
                this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                    t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
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
                })), this._setOptionDisabled(i))
            },
            disable: function(e) {
                var i = this.options.disabled;
                if (!0 !== i) {
                    if (void 0 === e) i = !0;
                    else {
                        if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                        i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                    }
                    this._setOptionDisabled(i)
                }
            },
            load: function(e, i) {
                e = this._getIndex(e);
                var n = this,
                    s = this.tabs.eq(e),
                    o = s.find(".ui-tabs-anchor"),
                    a = this._getPanelForTab(s),
                    r = {
                        tab: s,
                        panel: a
                    },
                    l = function(t, e) {
                        "abort" === e && n.panels.stop(!1, !0), n._removeClass(s, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
                    };
                this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(s, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function(t, e, s) {
                    setTimeout(function() {
                        a.html(t), n._trigger("load", i, r), l(s, e)
                    }, 1)
                }).fail(function(t, e) {
                    setTimeout(function() {
                        l(t, e)
                    }, 1)
                })))
            },
            _ajaxSettings: function(e, i, n) {
                var s = this;
                return {
                    url: e.attr("href").replace(/#.*$/, ""),
                    beforeSend: function(e, o) {
                        return s._trigger("beforeLoad", i, t.extend({
                            jqXHR: e,
                            ajaxSettings: o
                        }, n))
                    }
                }
            },
            _getPanelForTab: function(e) {
                var i = t(e).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + i))
            }
        }), !1 !== t.uiBackCompat && t.widget("ui.tabs", t.ui.tabs, {
            _processTabs: function() {
                this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
            }
        }), t.ui.tabs, t.widget("ui.tooltip", {
            version: "1.12.1",
            options: {
                classes: {
                    "ui-tooltip": "ui-corner-all ui-widget-shadow"
                },
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
                track: !1,
                close: null,
                open: null
            },
            _addDescribedBy: function(e, i) {
                var n = (e.attr("aria-describedby") || "").split(/\s+/);
                n.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(n.join(" ")))
            },
            _removeDescribedBy: function(e) {
                var i = e.data("ui-tooltip-id"),
                    n = (e.attr("aria-describedby") || "").split(/\s+/),
                    s = t.inArray(i, n); - 1 !== s && n.splice(s, 1), e.removeData("ui-tooltip-id"), (n = t.trim(n.join(" "))) ? e.attr("aria-describedby", n) : e.removeAttr("aria-describedby")
            },
            _create: function() {
                this._on({
                    mouseover: "open",
                    focusin: "open"
                }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({
                    role: "log",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([])
            },
            _setOption: function(e, i) {
                var n = this;
                this._super(e, i), "content" === e && t.each(this.tooltips, function(t, e) {
                    n._updateContent(e.element)
                })
            },
            _setOptionDisabled: function(t) {
                this[t ? "_disable" : "_enable"]()
            },
            _disable: function() {
                var e = this;
                t.each(this.tooltips, function(i, n) {
                    var s = t.Event("blur");
                    s.target = s.currentTarget = n.element[0], e.close(s, !0)
                }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
                    var e = t(this);
                    return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0
                }))
            },
            _enable: function() {
                this.disabledTitles.each(function() {
                    var e = t(this);
                    e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
                }), this.disabledTitles = t([])
            },
            open: function(e) {
                var i = this,
                    n = t(e ? e.target : this.element).closest(this.options.items);
                n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")), n.data("ui-tooltip-open", !0), e && "mouseover" === e.type && n.parents().each(function() {
                    var e, n = t(this);
                    n.data("ui-tooltip-open") && ((e = t.Event("blur")).target = e.currentTarget = this, i.close(e, !0)), n.attr("title") && (n.uniqueId(), i.parents[this.id] = {
                        element: this,
                        title: n.attr("title")
                    }, n.attr("title", ""))
                }), this._registerCloseHandlers(e, n), this._updateContent(n, e))
            },
            _updateContent: function(t, e) {
                var i, n = this.options.content,
                    s = this,
                    o = e ? e.type : null;
                return "string" == typeof n || n.nodeType || n.jquery ? this._open(e, t, n) : void((i = n.call(t[0], function(i) {
                    s._delay(function() {
                        t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i))
                    })
                })) && this._open(e, t, i))
            },
            _open: function(e, i, n) {
                function s(t) {
                    h.of = t, a.is(":hidden") || a.position(h)
                }
                var o, a, r, l, h = t.extend({}, this.options.position);
                if (n) {
                    if (o = this._find(i)) return void o.tooltip.find(".ui-tooltip-content").html(n);
                    i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), a = o.tooltip, this._addDescribedBy(i, a.attr("id")), a.find(".ui-tooltip-content").html(n), this.liveRegion.children().hide(), (l = t("<div>").html(a.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"), l.removeAttr("id").find("[id]").removeAttr("id"), l.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
                        mousemove: s
                    }), s(e)) : a.position(t.extend({
                        of: i
                    }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function() {
                        a.is(":visible") && (s(h.of), clearInterval(r))
                    }, t.fx.interval)), this._trigger("open", e, {
                        tooltip: a
                    })
                }
            },
            _registerCloseHandlers: function(e, i) {
                var n = {
                    keyup: function(e) {
                        if (e.keyCode === t.ui.keyCode.ESCAPE) {
                            var n = t.Event(e);
                            n.currentTarget = i[0], this.close(n, !0)
                        }
                    }
                };
                i[0] !== this.element[0] && (n.remove = function() {
                    this._removeTooltip(this._find(i).tooltip)
                }), e && "mouseover" !== e.type || (n.mouseleave = "close"), e && "focusin" !== e.type || (n.focusout = "close"), this._on(!0, i, n)
            },
            close: function(e) {
                var i, n = this,
                    s = t(e ? e.currentTarget : this.element),
                    o = this._find(s);
                return o ? (i = o.tooltip, void(o.closing || (clearInterval(this.delayedShow), s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")), this._removeDescribedBy(s), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function() {
                    n._removeTooltip(t(this))
                }), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
                    t(i.element).attr("title", i.title), delete n.parents[e]
                }), o.closing = !0, this._trigger("close", e, {
                    tooltip: i
                }), o.hiding || (o.closing = !1)))) : void s.removeData("ui-tooltip-open")
            },
            _tooltip: function(e) {
                var i = t("<div>").attr("role", "tooltip"),
                    n = t("<div>").appendTo(i),
                    s = i.uniqueId().attr("id");
                return this._addClass(n, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[s] = {
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
            _appendTo: function(t) {
                var e = t.closest(".ui-front, dialog");
                return e.length || (e = this.document[0].body), e
            },
            _destroy: function() {
                var e = this;
                t.each(this.tooltips, function(i, n) {
                    var s = t.Event("blur"),
                        o = n.element;
                    s.target = s.currentTarget = o[0], e.close(s, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"))
                }), this.liveRegion.remove()
            }
        }), !1 !== t.uiBackCompat && t.widget("ui.tooltip", t.ui.tooltip, {
            options: {
                tooltipClass: null
            },
            _tooltip: function() {
                var t = this._superApply(arguments);
                return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t
            }
        }), t.ui.tooltip
    }), window.Inputmask = function(t, e, i, n) {
        function s(e, i, a) {
            return this instanceof s ? (this.el = n, this.events = {}, this.maskset = n, this.refreshValue = !1, void(!0 !== a && (t.isPlainObject(e) ? i = e : (i = i || {}, i.alias = e), this.opts = t.extend(!0, {}, this.defaults, i), this.noMasksCache = i && i.definitions !== n, this.userOptions = i || {}, this.isRTL = this.opts.numericInput, o(this.opts.alias, i, this.opts)))) : new s(e, i, a)
        }

        function o(e, i, a) {
            var r = s.prototype.aliases[e];
            return r ? (r.alias && o(r.alias, n, a), t.extend(!0, a, r), t.extend(!0, a, i), !0) : (null === a.mask && (a.mask = e), !1)
        }

        function a(e, i) {
            function o(e, o, a) {
                var r, l = !1;
                if (null !== e && "" !== e || (e = (l = null !== a.regex) ? (e = a.regex).replace(/^(\^)(.*)(\$)$/, "$2") : "*{*}"), 1 === e.length && !1 === a.greedy && 0 !== a.repeat && (a.placeholder = ""), a.repeat > 0 || "*" === a.repeat || "+" === a.repeat) {
                    var h = "*" === a.repeat ? 0 : "+" === a.repeat ? 1 : a.repeat;
                    e = a.groupmarker.start + e + a.groupmarker.end + a.quantifiermarker.start + h + "," + a.repeat + a.quantifiermarker.end
                }
                return s.prototype.masksCache[e] === n || !0 === i ? (r = {
                    mask: e,
                    maskToken: s.prototype.analyseMask(e, l, a),
                    validPositions: {},
                    _buffer: n,
                    buffer: n,
                    tests: {},
                    metadata: o,
                    maskLength: n
                }, !0 !== i && (s.prototype.masksCache[a.numericInput ? e.split("").reverse().join("") : e] = r, r = t.extend(!0, {}, s.prototype.masksCache[a.numericInput ? e.split("").reverse().join("") : e]))) : r = t.extend(!0, {}, s.prototype.masksCache[a.numericInput ? e.split("").reverse().join("") : e]), r
            }
            if (t.isFunction(e.mask) && (e.mask = e.mask(e)), t.isArray(e.mask)) {
                if (e.mask.length > 1) {
                    e.keepStatic = null === e.keepStatic || e.keepStatic;
                    var a = e.groupmarker.start;
                    return t.each(e.numericInput ? e.mask.reverse() : e.mask, function(i, s) {
                        a.length > 1 && (a += e.groupmarker.end + e.alternatormarker + e.groupmarker.start), a += s.mask === n || t.isFunction(s.mask) ? s : s.mask
                    }), o(a += e.groupmarker.end, e.mask, e)
                }
                e.mask = e.mask.pop()
            }
            return e.mask && e.mask.mask !== n && !t.isFunction(e.mask.mask) ? o(e.mask.mask, e.mask, e) : o(e.mask, e.mask, e)
        }

        function r(o, a, l) {
            function p(t, e, i) {
                e = e || 0;
                var s, o, a, r = [],
                    h = 0,
                    c = g(); - 1 === (U = V !== n ? V.maxLength : n) && (U = n);
                do {
                    !0 === t && f().validPositions[h] ? (a = f().validPositions[h], o = a.match, s = a.locator.slice(), r.push(!0 === i ? a.input : !1 === i ? o.nativeDef : A(h, o))) : (a = y(h, s, h - 1), o = a.match, s = a.locator.slice(), (!1 === l.jitMasking || c > h || "number" == typeof l.jitMasking && isFinite(l.jitMasking) && l.jitMasking > h) && r.push(!1 === i ? o.nativeDef : A(h, o))), h++
                } while ((U === n || U > h) && (null !== o.fn || "" !== o.def) || e > h);
                return "" === r[r.length - 1] && r.pop(), f().maskLength = h + 1, r
            }

            function f() {
                return a
            }

            function m(t) {
                var e = f();
                e.buffer = n, !0 !== t && (e.validPositions = {}, e.p = 0)
            }

            function g(t, e, i) {
                var s = -1,
                    o = -1,
                    a = i || f().validPositions;
                t === n && (t = -1);
                for (var r in a) {
                    var l = parseInt(r);
                    a[l] && (e || !0 !== a[l].generatedInput) && (t >= l && (s = l), l >= t && (o = l))
                }
                return -1 !== s && t - s > 1 || t > o ? s : o
            }

            function v(e, i, s, o) {
                var a, r = e,
                    h = t.extend(!0, {}, f().validPositions),
                    c = !1;
                for (f().p = e, a = i - 1; a >= r; a--) f().validPositions[a] !== n && (!0 !== s && (!f().validPositions[a].match.optionality && function(t) {
                    var e = f().validPositions[t];
                    if (e !== n && null === e.match.fn) {
                        var i = f().validPositions[t - 1],
                            s = f().validPositions[t + 1];
                        return i !== n && s !== n
                    }
                    return !1
                }(a) || !1 === l.canClearPosition(f(), a, g(), o, l)) || delete f().validPositions[a]);
                for (m(!0), a = r + 1; a <= g();) {
                    for (; f().validPositions[r] !== n;) r++;
                    if (r > a && (a = r + 1), f().validPositions[a] === n && P(a)) a++;
                    else {
                        var d = y(a);
                        !1 === c && h[r] && h[r].match.def === d.match.def ? (f().validPositions[r] = t.extend(!0, {}, h[r]), f().validPositions[r].input = d.input, delete f().validPositions[a], a++) : x(r, d.match.def) ? !1 !== T(r, d.input || A(a), !0) && (delete f().validPositions[a], a++, c = !0) : P(a) || (a++, r--), r++
                    }
                }
                m(!0)
            }

            function b(t, e) {
                for (var i, s = t, o = g(), a = f().validPositions[o] || w(0)[0], r = a.alternation !== n ? a.locator[a.alternation].toString().split(",") : [], h = 0; h < s.length && (!((i = s[h]).match && (l.greedy && !0 !== i.match.optionalQuantifier || (!1 === i.match.optionality || !1 === i.match.newBlockMarker) && !0 !== i.match.optionalQuantifier) && (a.alternation === n || a.alternation !== i.alternation || i.locator[a.alternation] !== n && D(i.locator[a.alternation].toString().split(","), r))) || !0 === e && (null !== i.match.fn || /[0-9a-bA-Z]/.test(i.match.def))); h++);
                return i
            }

            function y(t, e, i) {
                return f().validPositions[t] || b(w(t, e ? e.slice() : e, i))
            }

            function _(t) {
                return f().validPositions[t] ? f().validPositions[t] : w(t)[0]
            }

            function x(t, e) {
                for (var i = !1, n = w(t), s = 0; s < n.length; s++)
                    if (n[s].match && n[s].match.def === e) {
                        i = !0;
                        break
                    }
                return i
            }

            function w(e, i, s) {
                function o(i, s, a, h) {
                    function c(a, h, d) {
                        function p(e, i) {
                            var n = 0 === t.inArray(e, i.matches);
                            return n || t.each(i.matches, function(t, s) {
                                return (!0 !== s.isQuantifier || !(n = p(e, i.matches[t - 1]))) && void 0
                            }), n
                        }

                        function b(e, i, s) {
                            var o, a;
                            return (f().tests[e] || f().validPositions[e]) && t.each(f().tests[e] || [f().validPositions[e]], function(t, e) {
                                var r = s !== n ? s : e.alternation,
                                    l = e.locator[r] !== n ? e.locator[r].toString().indexOf(i) : -1;
                                (a === n || a > l) && -1 !== l && (o = e, a = l)
                            }), o ? o.locator.slice((s !== n ? s : o.alternation) + 1) : s !== n ? b(e, i) : n
                        }
                        if (u > 1e4) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + f().mask;
                        if (u === e && a.matches === n) return m.push({
                            match: a,
                            locator: h.reverse(),
                            cd: v
                        }), !0;
                        if (a.matches !== n) {
                            if (a.isGroup && d !== a) {
                                if (a = c(i.matches[t.inArray(a, i.matches) + 1], h)) return !0
                            } else if (a.isOptional) {
                                var y = a;
                                if (a = o(a, s, h, d)) {
                                    if (!p(r = m[m.length - 1].match, y)) return !0;
                                    g = !0, u = e
                                }
                            } else if (a.isAlternator) {
                                var _, x = a,
                                    w = [],
                                    k = m.slice(),
                                    C = h.length,
                                    S = s.length > 0 ? s.shift() : -1;
                                if (-1 === S || "string" == typeof S) {
                                    var D, T = u,
                                        P = s.slice(),
                                        I = [];
                                    if ("string" == typeof S) I = S.split(",");
                                    else
                                        for (D = 0; D < x.matches.length; D++) I.push(D);
                                    for (var E = 0; E < I.length; E++) {
                                        if (D = parseInt(I[E]), m = [], s = b(u, D, C) || P.slice(), !0 !== (a = c(x.matches[D] || i.matches[D], [D].concat(h), d) || a) && a !== n && I[I.length - 1] < x.matches.length) {
                                            var M = t.inArray(a, i.matches) + 1;
                                            i.matches.length > M && (a = c(i.matches[M], [M].concat(h.slice(1, h.length)), d)) && (I.push(M.toString()), t.each(m, function(t, e) {
                                                e.alternation = h.length - 1
                                            }))
                                        }
                                        _ = m.slice(), u = T, m = [];
                                        for (var A = 0; A < _.length; A++) {
                                            var O = _[A],
                                                $ = !1;
                                            O.alternation = O.alternation || C;
                                            for (var N = 0; N < w.length; N++) {
                                                var R = w[N];
                                                if ("string" != typeof S || -1 !== t.inArray(O.locator[O.alternation].toString(), I)) {
                                                    if (O.match.nativeDef === R.match.nativeDef || O.match.def === R.match.nativeDef || O.match.nativeDef === R.match.def) {
                                                        $ = !0, O.alternation == R.alternation && -1 === R.locator[R.alternation].toString().indexOf(O.locator[O.alternation]) && (R.locator[R.alternation] = R.locator[R.alternation] + "," + O.locator[O.alternation], R.alternation = O.alternation), O.match.nativeDef === R.match.def && (O.locator[O.alternation] = R.locator[R.alternation], w.splice(w.indexOf(R), 1, O));
                                                        break
                                                    }
                                                    if (O.match.def === R.match.def) {
                                                        $ = !1;
                                                        break
                                                    }
                                                    if (F = R, null === (L = O).match.fn && null !== F.match.fn && F.match.fn.test(L.match.def, f(), e, !1, l, !1)) {
                                                        O.alternation == R.alternation && -1 === O.locator[O.alternation].toString().indexOf(R.locator[R.alternation].toString().split("")[0]) && (O.na = O.na || O.locator[O.alternation].toString(), -1 === O.na.indexOf(O.locator[O.alternation].toString().split("")[0]) && (O.na = O.na + "," + O.locator[R.alternation].toString().split("")[0]), $ = !0, O.locator[O.alternation] = R.locator[R.alternation].toString().split("")[0] + "," + O.locator[O.alternation], w.splice(w.indexOf(R), 0, O));
                                                        break
                                                    }
                                                }
                                            }
                                            $ || w.push(O)
                                        }
                                    }
                                    "string" == typeof S && (w = t.map(w, function(e, i) {
                                        if (isFinite(i)) {
                                            var s = e.alternation,
                                                o = e.locator[s].toString().split(",");
                                            e.locator[s] = n, e.alternation = n;
                                            for (var a = 0; a < o.length; a++) - 1 !== t.inArray(o[a], I) && (e.locator[s] !== n ? (e.locator[s] += ",", e.locator[s] += o[a]) : e.locator[s] = parseInt(o[a]), e.alternation = s);
                                            if (e.locator[s] !== n) return e
                                        }
                                    })), m = k.concat(w), u = e, g = m.length > 0, s = P.slice()
                                } else a = c(x.matches[S] || i.matches[S], [S].concat(h), d);
                                if (a) return !0
                            } else if (a.isQuantifier && d !== i.matches[t.inArray(a, i.matches) - 1])
                                for (var z = a, H = s.length > 0 ? s.shift() : 0; H < (isNaN(z.quantifier.max) ? H + 1 : z.quantifier.max) && e >= u; H++) {
                                    var W = i.matches[t.inArray(z, i.matches) - 1];
                                    if (a = c(W, [H].concat(h), W)) {
                                        if ((r = m[m.length - 1].match).optionalQuantifier = H > z.quantifier.min - 1, p(r, W)) {
                                            if (H > z.quantifier.min - 1) {
                                                g = !0, u = e;
                                                break
                                            }
                                            return !0
                                        }
                                        return !0
                                    }
                                } else if (a = o(a, s, h, d)) return !0
                        } else u++;
                        var L, F
                    }
                    for (var d = s.length > 0 ? s.shift() : 0; d < i.matches.length; d++)
                        if (!0 !== i.matches[d].isQuantifier) {
                            var p = c(i.matches[d], [d].concat(a), h);
                            if (p && u === e) return p;
                            if (u > e) break
                        }
                }

                function a(t) {
                    return l.keepStatic && e > 0 && t.length > 1 + ("" === t[t.length - 1].match.def ? 1 : 0) && !0 !== t[0].match.optionality && !0 !== t[0].match.optionalQuantifier && null === t[0].match.fn && !/[0-9a-bA-Z]/.test(t[0].match.def) ? [b(t)] : t
                }
                var r, h, c, d = f().maskToken,
                    u = i ? s : 0,
                    p = i ? i.slice() : [0],
                    m = [],
                    g = !1,
                    v = i ? i.join("") : "";
                if (e > -1) {
                    if (i === n) {
                        for (var y, _ = e - 1;
                            (y = f().validPositions[_] || f().tests[_]) === n && _ > -1;) _--;
                        y !== n && _ > -1 && (h = y, c = [], t.isArray(h) || (h = [h]), h.length > 0 && (h[0].alternation === n ? 0 === (c = b(h.slice()).locator.slice()).length && (c = h[0].locator.slice()) : t.each(h, function(t, e) {
                            if ("" !== e.def)
                                if (0 === c.length) c = e.locator.slice();
                                else
                                    for (var i = 0; i < c.length; i++) e.locator[i] && -1 === c[i].toString().indexOf(e.locator[i]) && (c[i] += "," + e.locator[i])
                        })), v = (p = c).join(""), u = _)
                    }
                    if (f().tests[e] && f().tests[e][0].cd === v) return a(f().tests[e]);
                    for (var x = p.shift(); x < d.length && !(o(d[x], p, [x]) && u === e || u > e); x++);
                }
                return (0 === m.length || g) && m.push({
                    match: {
                        fn: null,
                        cardinality: 0,
                        optionality: !0,
                        casing: null,
                        def: "",
                        placeholder: ""
                    },
                    locator: [],
                    cd: v
                }), i !== n && f().tests[e] ? a(t.extend(!0, [], m)) : (f().tests[e] = t.extend(!0, [], m), a(f().tests[e]))
            }

            function k() {
                return f()._buffer === n && (f()._buffer = p(!1, 1), f().buffer === n && (f().buffer = f()._buffer.slice())), f()._buffer
            }

            function C(t) {
                return f().buffer !== n && !0 !== t || (f().buffer = p(!0, g(), !0)), f().buffer
            }

            function S(t, e, i) {
                var s, o;
                if (!0 === t) m(), t = 0, e = i.length;
                else
                    for (s = t; e > s; s++) delete f().validPositions[s];
                for (o = t, s = t; e > s; s++)
                    if (m(!0), i[s] !== l.skipOptionalPartCharacter) {
                        var a = T(o, i[s], !0, !0);
                        !1 !== a && (m(!0), o = a.caret !== n ? a.caret : a.pos + 1)
                    }
            }

            function D(e, i, s) {
                for (var o, a = l.greedy ? i : i.slice(0, 1), r = !1, h = s !== n ? s.split(",") : [], c = 0; c < h.length; c++) - 1 !== (o = e.indexOf(h[c])) && e.splice(o, 1);
                for (var d = 0; d < e.length; d++)
                    if (-1 !== t.inArray(e[d], a)) {
                        r = !0;
                        break
                    }
                return r
            }

            function T(e, i, o, a, r) {
                function h(t) {
                    var e = K ? t.begin - t.end > 1 || t.begin - t.end == 1 : t.end - t.begin > 1 || t.end - t.begin == 1;
                    return e && 0 === t.begin && t.end === f().maskLength ? "full" : e
                }

                function c(i, o, r) {
                    var c = !1;
                    return t.each(w(i), function(u, p) {
                        for (var b = p.match, y = o ? 1 : 0, _ = "", x = b.cardinality; x > y; x--) _ += (w = i - (x - 1), f().validPositions[w] === n ? A(w) : f().validPositions[w].input);
                        var w;
                        if (o && (_ += o), C(!0), !1 !== (c = null != b.fn ? b.fn.test(_, f(), i, r, l, h(e)) : (o === b.def || o === l.skipOptionalPartCharacter) && "" !== b.def && {
                                c: A(i, b, !0) || b.def,
                                pos: i
                            })) {
                            var k = c.c !== n ? c.c : o;
                            k = k === l.skipOptionalPartCharacter && null === b.fn ? A(i, b, !0) || b.def : k;
                            var D = i,
                                P = C();
                            if (c.remove !== n && (t.isArray(c.remove) || (c.remove = [c.remove]), t.each(c.remove.sort(function(t, e) {
                                    return e - t
                                }), function(t, e) {
                                    v(e, e + 1, !0)
                                })), c.insert !== n && (t.isArray(c.insert) || (c.insert = [c.insert]), t.each(c.insert.sort(function(t, e) {
                                    return t - e
                                }), function(t, e) {
                                    T(e.pos, e.c, !0, a)
                                })), c.refreshFromBuffer) {
                                var I = c.refreshFromBuffer;
                                if (S(!0 === I ? I : I.start, I.end, P), c.pos === n && c.c === n) return c.pos = g(), !1;
                                if ((D = c.pos !== n ? c.pos : i) !== i) return c = t.extend(c, T(D, k, !0, a)), !1
                            } else if (!0 !== c && c.pos !== n && c.pos !== i && (D = c.pos, S(i, D, C().slice()), D !== i)) return c = t.extend(c, T(D, k, !0)), !1;
                            return (!0 === c || c.pos !== n || c.c !== n) && (u > 0 && m(!0), d(D, t.extend({}, p, {
                                input: function(t, e, i) {
                                    switch (l.casing || e.casing) {
                                        case "upper":
                                            t = t.toUpperCase();
                                            break;
                                        case "lower":
                                            t = t.toLowerCase();
                                            break;
                                        case "title":
                                            var n = f().validPositions[i - 1];
                                            t = 0 === i || n && n.input === String.fromCharCode(s.keyCode.SPACE) ? t.toUpperCase() : t.toLowerCase()
                                    }
                                    return t
                                }(k, b, D)
                            }), a, h(e)) || (c = !1), !1)
                        }
                    }), c
                }

                function d(e, i, s, o) {
                    if (o || l.insertMode && f().validPositions[e] !== n && s === n) {
                        var a, r = t.extend(!0, {}, f().validPositions),
                            h = g(n, !0);
                        for (a = e; h >= a; a++) delete f().validPositions[a];
                        f().validPositions[e] = t.extend(!0, {}, i);
                        var c, d = !0,
                            p = f().validPositions,
                            v = !1,
                            b = f().maskLength;
                        for (a = c = e; h >= a; a++) {
                            var y = r[a];
                            if (y !== n)
                                for (var _ = c; _ < f().maskLength && (null === y.match.fn && p[a] && (!0 === p[a].match.optionalQuantifier || !0 === p[a].match.optionality) || null != y.match.fn);) {
                                    if (_++, !1 === v && r[_] && r[_].match.def === y.match.def) f().validPositions[_] = t.extend(!0, {}, r[_]), f().validPositions[_].input = y.input, u(_), c = _, d = !0;
                                    else if (x(_, y.match.def)) {
                                        var w = T(_, y.input, !0, !0);
                                        d = !1 !== w, c = w.caret || w.insert ? g() : _, v = !0
                                    } else if (!(d = !0 === y.generatedInput) && _ >= f().maskLength - 1) break;
                                    if (f().maskLength < b && (f().maskLength = b), d) break
                                }
                            if (!d) break
                        }
                        if (!d) return f().validPositions = t.extend(!0, {}, r), m(!0), !1
                    } else f().validPositions[e] = t.extend(!0, {}, i);
                    return m(!0), !0
                }

                function u(e) {
                    for (var i = e - 1; i > -1 && !f().validPositions[i]; i--);
                    var s, o;
                    for (i++; e > i; i++) f().validPositions[i] === n && (!1 === l.jitMasking || l.jitMasking > i) && (o = w(i, y(i - 1).locator, i - 1).slice(), "" === o[o.length - 1].match.def && o.pop(), (s = b(o)) && (s.match.def === l.radixPointDefinitionSymbol || !P(i, !0) || t.inArray(l.radixPoint, C()) < i && s.match.fn && s.match.fn.test(A(i), f(), i, !1, l)) && !1 !== (_ = c(i, A(i, s.match, !0) || (null == s.match.fn ? s.match.def : "" !== A(i) ? A(i) : C()[i]), !0)) && (f().validPositions[_.pos || i].generatedInput = !0))
                }
                o = !0 === o;
                var p = e;
                e.begin !== n && (p = K && !h(e) ? e.end : e.begin);
                var _ = !0,
                    k = t.extend(!0, {}, f().validPositions);
                if (t.isFunction(l.preValidation) && !o && !0 !== a && (_ = l.preValidation(C(), p, i, h(e), l)), !0 === _) {
                    if (u(p), h(e) && (W(n, s.keyCode.DELETE, e), p = f().p), p < f().maskLength && (_ = c(p, i, o), (!o || !0 === a) && !1 === _)) {
                        var E = f().validPositions[p];
                        if (!E || null !== E.match.fn || E.match.def !== i && i !== l.skipOptionalPartCharacter) {
                            if ((l.insertMode || f().validPositions[I(p)] === n) && !P(p, !0))
                                for (var M = p + 1, O = I(p); O >= M; M++)
                                    if (!1 !== (_ = c(M, i, o))) {
                                        ! function(e, i) {
                                            var s = f().validPositions[i];
                                            if (s)
                                                for (var o = s.locator, a = o.length, r = e; i > r; r++)
                                                    if (f().validPositions[r] === n && !P(r, !0)) {
                                                        var l = w(r).slice(),
                                                            h = b(l, !0),
                                                            u = -1;
                                                        "" === l[l.length - 1].match.def && l.pop(), t.each(l, function(t, e) {
                                                            for (var i = 0; a > i; i++) {
                                                                if (e.locator[i] === n || !D(e.locator[i].toString().split(","), o[i].toString().split(","), e.na)) {
                                                                    var s = o[i],
                                                                        r = h.locator[i],
                                                                        l = e.locator[i];
                                                                    s - r > Math.abs(s - l) && (h = e);
                                                                    break
                                                                }
                                                                i > u && (u = i, h = e)
                                                            }
                                                        }), (h = t.extend({}, h, {
                                                            input: A(r, h.match, !0) || h.match.def
                                                        })).generatedInput = !0, d(r, h, !0), f().validPositions[i] = n, c(i, s.input, !0)
                                                    }
                                        }(p, _.pos !== n ? _.pos : M), p = M;
                                        break
                                    }
                        } else _ = {
                            caret: I(p)
                        }
                    }!1 === _ && l.keepStatic && !o && !0 !== r && (_ = function(e, i, s) {
                        var o, r, h, c, d, u, p, v, b = t.extend(!0, {}, f().validPositions),
                            y = !1,
                            _ = g();
                        for (c = f().validPositions[_]; _ >= 0; _--)
                            if ((h = f().validPositions[_]) && h.alternation !== n) {
                                if (o = _, r = f().validPositions[o].alternation, c.locator[h.alternation] !== h.locator[h.alternation]) break;
                                c = h
                            }
                        if (r !== n) {
                            v = parseInt(o);
                            var x = c.locator[c.alternation || r] !== n ? c.locator[c.alternation || r] : p[0];
                            x.length > 0 && (x = x.split(",")[0]);
                            var k = f().validPositions[v],
                                C = f().validPositions[v - 1];
                            t.each(w(v, C ? C.locator : n, v - 1), function(o, h) {
                                p = h.locator[r] ? h.locator[r].toString().split(",") : [];
                                for (var c = 0; c < p.length; c++) {
                                    var _ = [],
                                        w = 0,
                                        C = 0,
                                        S = !1;
                                    if (x < p[c] && (h.na === n || -1 === t.inArray(p[c], h.na.split(",")) || -1 === t.inArray(x.toString(), p))) {
                                        f().validPositions[v] = t.extend(!0, {}, h);
                                        var D = f().validPositions[v].locator;
                                        for (f().validPositions[v].locator[r] = parseInt(p[c]), null == h.match.fn ? (k.input !== h.match.def && (S = !0, !0 !== k.generatedInput && _.push(k.input)), C++, f().validPositions[v].generatedInput = !/[0-9a-bA-Z]/.test(h.match.def), f().validPositions[v].input = h.match.def) : f().validPositions[v].input = k.input, d = v + 1; d < g(n, !0) + 1; d++) u = f().validPositions[d], u && !0 !== u.generatedInput && /[0-9a-bA-Z]/.test(u.input) ? _.push(u.input) : e > d && w++, delete f().validPositions[d];
                                        for (S && _[0] === h.match.def && _.shift(), m(!0), y = !0; _.length > 0;) {
                                            var P = _.shift();
                                            if (P !== l.skipOptionalPartCharacter && !(y = T(g(n, !0) + 1, P, !1, a, !0))) break
                                        }
                                        if (y) {
                                            f().validPositions[v].locator = D;
                                            var I = g(e) + 1;
                                            for (d = v + 1; d < g() + 1; d++)((u = f().validPositions[d]) === n || null == u.match.fn) && e + (C - w) > d && C++;
                                            y = T((e += C - w) > I ? I : e, i, s, a, !0)
                                        }
                                        if (y) return !1;
                                        m(), f().validPositions = t.extend(!0, {}, b)
                                    }
                                }
                            })
                        }
                        return y
                    }(p, i, o)), !0 === _ && (_ = {
                        pos: p
                    })
                }
                if (t.isFunction(l.postValidation) && !1 !== _ && !o && !0 !== a) {
                    var $ = l.postValidation(C(!0), _, l);
                    if ($.refreshFromBuffer && $.buffer) {
                        var N = $.refreshFromBuffer;
                        S(!0 === N ? N : N.start, N.end, $.buffer)
                    }
                    _ = !0 === $ ? _ : $
                }
                return _.pos === n && (_.pos = p), !1 === _ && (m(!0), f().validPositions = t.extend(!0, {}, k)), _
            }

            function P(t, e) {
                var i = y(t).match;
                if ("" === i.def && (i = _(t).match), null != i.fn) return i.fn;
                if (!0 !== e && t > -1) {
                    var n = w(t);
                    return n.length > 1 + ("" === n[n.length - 1].match.def ? 1 : 0)
                }
                return !1
            }

            function I(t, e) {
                var i = f().maskLength;
                if (t >= i) return i;
                for (var n = t; ++n < i && (!0 === e && (!0 !== _(n).match.newBlockMarker || !P(n)) || !0 !== e && !P(n)););
                return n
            }

            function E(t, e) {
                var i, n = t;
                if (0 >= n) return 0;
                for (; --n > 0 && (!0 === e && !0 !== _(n).match.newBlockMarker || !0 !== e && !P(n) && ((i = w(n)).length < 2 || 2 === i.length && "" === i[1].match.def)););
                return n
            }

            function M(e, i, s, o, a) {
                if (o && t.isFunction(l.onBeforeWrite)) {
                    var r = l.onBeforeWrite(o, i, s, l);
                    if (r) {
                        if (r.refreshFromBuffer) {
                            var h = r.refreshFromBuffer;
                            S(!0 === h ? h : h.start, h.end, r.buffer || i), i = C(!0)
                        }
                        s !== n && (s = r.caret !== n ? r.caret : s)
                    }
                }
                e !== n && (e.inputmask._valueSet(i.join("")), s === n || o !== n && "blur" === o.type ? F(e, i, s) : u && "input" === o.type ? setTimeout(function() {
                    N(e, s)
                }, 0) : N(e, s), !0 === a && (X = !0, t(e).trigger("input")))
            }

            function A(e, i, s) {
                if ((i = i || _(e).match).placeholder !== n || !0 === s) return t.isFunction(i.placeholder) ? i.placeholder(l) : i.placeholder;
                if (null === i.fn) {
                    if (e > -1 && f().validPositions[e] === n) {
                        var o, a = w(e),
                            r = [];
                        if (a.length > 1 + ("" === a[a.length - 1].match.def ? 1 : 0))
                            for (var h = 0; h < a.length; h++)
                                if (!0 !== a[h].match.optionality && !0 !== a[h].match.optionalQuantifier && (null === a[h].match.fn || o === n || !1 !== a[h].match.fn.test(o.match.def, f(), e, !0, l)) && (r.push(a[h]), null === a[h].match.fn && (o = a[h]), r.length > 1 && /[0-9a-bA-Z]/.test(r[0].match.def))) return l.placeholder.charAt(e % l.placeholder.length)
                    }
                    return i.def
                }
                return l.placeholder.charAt(e % l.placeholder.length)
            }

            function O(e, o, a, r, h) {
                var c = r.slice(),
                    d = "",
                    u = 0,
                    p = n;
                if (m(), f().p = I(-1), !a)
                    if (!0 !== l.autoUnmask) {
                        var v = k().slice(0, I(-1)).join(""),
                            b = c.join("").match(new RegExp("^" + s.escapeRegex(v), "g"));
                        b && b.length > 0 && (c.splice(0, b.length * v.length), u = I(u))
                    } else u = I(u);
                if (t.each(c, function(i, s) {
                        if (s !== n) {
                            var o = new t.Event("_checkval");
                            o.which = s.charCodeAt(0), d += s;
                            var r = g(n, !0),
                                h = f().validPositions[r],
                                c = y(r + 1, h ? h.locator.slice() : n, r);
                            if (w = u, D = d, -1 === k().slice(w, I(w)).join("").indexOf(D) || P(w) || _(w).match.nativeDef !== D.charAt(D.length - 1) || a || l.autoUnmask) {
                                var v = a ? i : null == c.match.fn && c.match.optionality && r + 1 < f().p ? r + 1 : f().p;
                                p = tt.keypressEvent.call(e, o, !0, !1, a, v), u = v + 1, d = ""
                            } else p = tt.keypressEvent.call(e, o, !0, !1, !0, r + 1);
                            if (!a && t.isFunction(l.onBeforeWrite)) {
                                var b = p.forwardPosition;
                                if ((p = l.onBeforeWrite(o, C(), p.forwardPosition, l)).forwardPosition = b, p && p.refreshFromBuffer) {
                                    var x = p.refreshFromBuffer;
                                    S(!0 === x ? x : x.start, x.end, p.buffer), m(!0), p.caret && (f().p = p.caret, p.forwardPosition = p.caret)
                                }
                            }
                        }
                        var w, D
                    }), o) {
                    var x = n;
                    i.activeElement === e && p && (x = l.numericInput ? E(p.forwardPosition) : p.forwardPosition), M(e, C(), x, h || new t.Event("checkval"), h && "input" === h.type)
                }
            }

            function $(e) {
                if (e) {
                    if (e.inputmask === n) return e.value;
                    e.inputmask && e.inputmask.refreshValue && tt.setValueEvent.call(e)
                }
                var i = [],
                    s = f().validPositions;
                for (var o in s) s[o].match && null != s[o].match.fn && i.push(s[o].input);
                var a = 0 === i.length ? "" : (K ? i.reverse() : i).join("");
                if (t.isFunction(l.onUnMask)) {
                    var r = (K ? C().slice().reverse() : C()).join("");
                    a = l.onUnMask(r, a, l)
                }
                return a
            }

            function N(t, s, o, a) {
                function r(t) {
                    return !0 === a || !K || "number" != typeof t || l.greedy && "" === l.placeholder || (t = C().join("").length - t), t
                }
                var c;
                if ("number" != typeof s) return t.setSelectionRange ? (s = t.selectionStart, o = t.selectionEnd) : e.getSelection ? (c = e.getSelection().getRangeAt(0), c.commonAncestorContainer.parentNode !== t && c.commonAncestorContainer !== t || (s = c.startOffset, o = c.endOffset)) : i.selection && i.selection.createRange && (c = i.selection.createRange(), s = 0 - c.duplicate().moveStart("character", -t.inputmask._valueGet().length), o = s + c.text.length), {
                    begin: r(s),
                    end: r(o)
                };
                s = r(s), o = "number" == typeof(o = r(o)) ? o : s;
                var d = parseInt(((t.ownerDocument.defaultView || e).getComputedStyle ? (t.ownerDocument.defaultView || e).getComputedStyle(t, null) : t.currentStyle).fontSize) * o;
                if (t.scrollLeft = d > t.scrollWidth ? d : 0, h || !1 !== l.insertMode || s !== o || o++, t.setSelectionRange) t.selectionStart = s, t.selectionEnd = o;
                else if (e.getSelection) {
                    if (c = i.createRange(), t.firstChild === n || null === t.firstChild) {
                        var u = i.createTextNode("");
                        t.appendChild(u)
                    }
                    c.setStart(t.firstChild, s < t.inputmask._valueGet().length ? s : t.inputmask._valueGet().length), c.setEnd(t.firstChild, o < t.inputmask._valueGet().length ? o : t.inputmask._valueGet().length), c.collapse(!0);
                    var p = e.getSelection();
                    p.removeAllRanges(), p.addRange(c)
                } else t.createTextRange && (c = t.createTextRange(), c.collapse(!0), c.moveEnd("character", o), c.moveStart("character", s), c.select());
                F(t, n, {
                    begin: s,
                    end: o
                })
            }

            function R(e) {
                var i, s, o = C(),
                    a = o.length,
                    r = g(),
                    l = {},
                    h = f().validPositions[r],
                    c = h !== n ? h.locator.slice() : n;
                for (i = r + 1; i < o.length; i++) s = y(i, c, i - 1), c = s.locator.slice(), l[i] = t.extend(!0, {}, s);
                var d = h && h.alternation !== n ? h.locator[h.alternation] : n;
                for (i = a - 1; i > r && ((s = l[i]).match.optionality || s.match.optionalQuantifier || d && (d !== l[i].locator[h.alternation] && null != s.match.fn || null === s.match.fn && s.locator[h.alternation] && D(s.locator[h.alternation].toString().split(","), d.toString().split(",")) && "" !== w(i)[0].def)) && o[i] === A(i, s.match); i--) a--;
                return e ? {
                    l: a,
                    def: l[a] ? l[a].match : n
                } : a
            }

            function z(t) {
                for (var e, i = R(), n = t.length; n > i && !P(i + 1) && (e = _(i + 1)) && !0 !== e.match.optionality && !0 !== e.match.optionalQuantifier;) i++;
                for (;
                    (e = _(i - 1)) && e.match.optionality && e.input === l.skipOptionalPartCharacter;) i--;
                return t.splice(i), t
            }

            function H(e) {
                if (t.isFunction(l.isComplete)) return l.isComplete(e, l);
                if ("*" === l.repeat) return n;
                var i = !1,
                    s = R(!0),
                    o = E(s.l);
                if (s.def === n || s.def.newBlockMarker || s.def.optionality || s.def.optionalQuantifier) {
                    i = !0;
                    for (var a = 0; o >= a; a++) {
                        var r = y(a).match;
                        if (null !== r.fn && f().validPositions[a] === n && !0 !== r.optionality && !0 !== r.optionalQuantifier || null === r.fn && e[a] !== A(a, r)) {
                            i = !1;
                            break
                        }
                    }
                }
                return i
            }

            function W(e, i, o, a) {
                if ((l.numericInput || K) && (i === s.keyCode.BACKSPACE ? i = s.keyCode.DELETE : i === s.keyCode.DELETE && (i = s.keyCode.BACKSPACE), K)) {
                    var r = o.end;
                    o.end = o.begin, o.begin = r
                }
                i === s.keyCode.BACKSPACE && (o.end - o.begin < 1 || !1 === l.insertMode) ? (o.begin = E(o.begin), f().validPositions[o.begin] === n || f().validPositions[o.begin].input !== l.groupSeparator && f().validPositions[o.begin].input !== l.radixPoint || o.begin--) : i === s.keyCode.DELETE && o.begin === o.end && (o.end = P(o.end, !0) ? o.end + 1 : I(o.end) + 1, f().validPositions[o.begin] === n || f().validPositions[o.begin].input !== l.groupSeparator && f().validPositions[o.begin].input !== l.radixPoint || o.end++), v(o.begin, o.end, !1, a), !0 !== a && function() {
                    if (l.keepStatic) {
                        for (var i = [], s = g(-1, !0), o = t.extend(!0, {}, f().validPositions), a = f().validPositions[s]; s >= 0; s--) {
                            var r = f().validPositions[s];
                            if (r) {
                                if (!0 !== r.generatedInput && /[0-9a-bA-Z]/.test(r.input) && i.push(r.input), delete f().validPositions[s], r.alternation !== n && r.locator[r.alternation] !== a.locator[r.alternation]) break;
                                a = r
                            }
                        }
                        if (s > -1)
                            for (f().p = I(g(-1, !0)); i.length > 0;) {
                                var h = new t.Event("keypress");
                                h.which = i.pop().charCodeAt(0), tt.keypressEvent.call(e, h, !0, !1, !1, f().p)
                            } else f().validPositions = t.extend(!0, {}, o)
                    }
                }();
                var h = g(o.begin, !0);
                h < o.begin ? f().p = I(h) : !0 !== a && (f().p = o.begin)
            }

            function L(n) {
                function s() {
                    q.style.position = "absolute", q.style.top = o.top + "px", q.style.left = o.left + "px", q.style.width = parseInt(n.offsetWidth) - parseInt(a.paddingLeft) - parseInt(a.paddingRight) - parseInt(a.borderLeftWidth) - parseInt(a.borderRightWidth) + "px", q.style.height = parseInt(n.offsetHeight) - parseInt(a.paddingTop) - parseInt(a.paddingBottom) - parseInt(a.borderTopWidth) - parseInt(a.borderBottomWidth) + "px", q.style.lineHeight = q.style.height, q.style.zIndex = isNaN(a.zIndex) ? -1 : a.zIndex - 1, q.style.webkitAppearance = "textfield", q.style.mozAppearance = "textfield", q.style.Appearance = "textfield"
                }
                var o = t(n).position(),
                    a = (n.ownerDocument.defaultView || e).getComputedStyle(n, null);
                n.parentNode, q = i.createElement("div"), i.body.appendChild(q);
                for (var r in a) a.hasOwnProperty(r) && isNaN(r) && "cssText" !== r && -1 == r.indexOf("webkit") && (q.style[r] = a[r]);
                n.style.backgroundColor = "transparent", n.style.color = "transparent", n.style.webkitAppearance = "caret", n.style.mozAppearance = "caret", n.style.Appearance = "caret", s(), t(e).on("resize", function(i) {
                    o = t(n).position(), a = (n.ownerDocument.defaultView || e).getComputedStyle(n, null), s()
                }), t(n).on("click", function(t) {
                    return N(n, function(t) {
                        var e, s = i.createElement("span");
                        for (var o in a) isNaN(o) && -1 !== o.indexOf("font") && (s.style[o] = a[o]);
                        s.style.textTransform = a.textTransform, s.style.letterSpacing = a.letterSpacing, s.style.position = "absolute", s.style.height = "auto", s.style.width = "auto", s.style.visibility = "hidden", s.style.whiteSpace = "nowrap", i.body.appendChild(s);
                        var r, l = n.inputmask._valueGet(),
                            h = 0;
                        for (e = 0, r = l.length; r >= e; e++) {
                            if (s.innerHTML += l.charAt(e) || "_", s.offsetWidth >= t) {
                                var c = t - h,
                                    d = s.offsetWidth - t;
                                s.innerHTML = l.charAt(e), e = d > (c -= s.offsetWidth / 3) ? e - 1 : e;
                                break
                            }
                            h = s.offsetWidth
                        }
                        return i.body.removeChild(s), e
                    }(t.clientX)), tt.clickEvent.call(this, [t])
                }), t(n).on("keydown", function(t) {
                    t.shiftKey || !1 === l.insertMode || setTimeout(function() {
                        F(n)
                    }, 0)
                })
            }

            function F(t, e, s) {
                function o() {
                    r || null !== c.fn && d.input !== n ? r && null !== c.fn && d.input !== n && (r = !1, a += "</span>") : (r = !0, a += "<span class='im-static''>")
                }
                if (q !== n) {
                    e = e || C(), s === n ? s = N(t) : s.begin === n && (s = {
                        begin: s,
                        end: s
                    });
                    var a = "",
                        r = !1;
                    if ("" != e) {
                        var h, c, d, u = 0,
                            p = g();
                        do {
                            u === s.begin && i.activeElement === t && (a += "<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>"), f().validPositions[u] ? (d = f().validPositions[u], c = d.match, h = d.locator.slice(), o(), a += d.input) : (d = y(u, h, u - 1), c = d.match, h = d.locator.slice(), (!1 === l.jitMasking || p > u || "number" == typeof l.jitMasking && isFinite(l.jitMasking) && l.jitMasking > u) && (o(), a += A(u, c))), u++
                        } while ((U === n || U > u) && (null !== c.fn || "" !== c.def) || p > u)
                    }
                    q.innerHTML = a
                }
            }
            a = a || this.maskset, l = l || this.opts;
            var B, j, U, q, Y, V = this.el,
                K = this.isRTL,
                G = !1,
                X = !1,
                Q = !1,
                Z = !1,
                J = {
                    on: function(e, i, o) {
                        var a = function(e) {
                            if (this.inputmask === n && "FORM" !== this.nodeName) {
                                var i = t.data(this, "_inputmask_opts");
                                i ? new s(i).mask(this) : J.off(this)
                            } else {
                                if ("setvalue" === e.type || "FORM" === this.nodeName || !(this.disabled || this.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || !1 === l.tabThrough && e.keyCode === s.keyCode.TAB))) {
                                    switch (e.type) {
                                        case "input":
                                            if (!0 === X) return X = !1, e.preventDefault();
                                            break;
                                        case "keydown":
                                            G = !1, X = !1;
                                            break;
                                        case "keypress":
                                            if (!0 === G) return e.preventDefault();
                                            G = !0;
                                            break;
                                        case "click":
                                            var a = this,
                                                r = arguments;
                                            return setTimeout(function() {
                                                o.apply(a, r)
                                            }, 0), !1
                                    }
                                    var h = o.apply(this, arguments);
                                    return !1 === h && (e.preventDefault(), e.stopPropagation()), h
                                }
                                e.preventDefault()
                            }
                        };
                        e.inputmask.events[i] = e.inputmask.events[i] || [], e.inputmask.events[i].push(a), -1 !== t.inArray(i, ["submit", "reset"]) ? null != e.form && t(e.form).on(i, a) : t(e).on(i, a)
                    },
                    off: function(e, i) {
                        var n;
                        e.inputmask && e.inputmask.events && (i ? (n = [])[i] = e.inputmask.events[i] : n = e.inputmask.events, t.each(n, function(i, n) {
                            for (; n.length > 0;) {
                                var s = n.pop(); - 1 !== t.inArray(i, ["submit", "reset"]) ? null != e.form && t(e.form).off(i, s) : t(e).off(i, s)
                            }
                            delete e.inputmask.events[i]
                        }))
                    }
                },
                tt = {
                    keydownEvent: function(e) {
                        var n, o, a = this,
                            r = t(a),
                            h = e.keyCode,
                            c = N(a);
                        if (h === s.keyCode.BACKSPACE || h === s.keyCode.DELETE || d && h === s.keyCode.BACKSPACE_SAFARI || e.ctrlKey && h === s.keyCode.X && (n = i.createElement("input"), (o = "oncut" in n) || (n.setAttribute("oncut", "return;"), o = "function" == typeof n.oncut), n = null, !o)) e.preventDefault(), W(a, h, c), M(a, C(!0), f().p, e, a.inputmask._valueGet() !== C().join("")), a.inputmask._valueGet() === k().join("") ? r.trigger("cleared") : !0 === H(C()) && r.trigger("complete");
                        else if (h === s.keyCode.END || h === s.keyCode.PAGE_DOWN) {
                            e.preventDefault();
                            var u = I(g());
                            l.insertMode || u !== f().maskLength || e.shiftKey || u--, N(a, e.shiftKey ? c.begin : u, u, !0)
                        } else h === s.keyCode.HOME && !e.shiftKey || h === s.keyCode.PAGE_UP ? (e.preventDefault(), N(a, 0, e.shiftKey ? c.begin : 0, !0)) : (l.undoOnEscape && h === s.keyCode.ESCAPE || 90 === h && e.ctrlKey) && !0 !== e.altKey ? (O(a, !0, !1, B.split("")), r.trigger("click")) : h !== s.keyCode.INSERT || e.shiftKey || e.ctrlKey ? !0 === l.tabThrough && h === s.keyCode.TAB ? (!0 === e.shiftKey ? (null === _(c.begin).match.fn && (c.begin = I(c.begin)), c.end = E(c.begin, !0), c.begin = E(c.end, !0)) : (c.begin = I(c.begin, !0), c.end = I(c.begin, !0), c.end < f().maskLength && c.end--), c.begin < f().maskLength && (e.preventDefault(), N(a, c.begin, c.end))) : e.shiftKey || !1 === l.insertMode && (h === s.keyCode.RIGHT ? setTimeout(function() {
                            var t = N(a);
                            N(a, t.begin)
                        }, 0) : h === s.keyCode.LEFT && setTimeout(function() {
                            var t = N(a);
                            N(a, K ? t.begin + 1 : t.begin - 1)
                        }, 0)) : (l.insertMode = !l.insertMode, N(a, l.insertMode || c.begin !== f().maskLength ? c.begin : c.begin - 1));
                        l.onKeyDown.call(this, e, C(), N(a).begin, l), Q = -1 !== t.inArray(h, l.ignorables)
                    },
                    keypressEvent: function(e, i, o, a, r) {
                        var h = t(this),
                            c = e.which || e.charCode || e.keyCode;
                        if (!(!0 === i || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || Q)) return c === s.keyCode.ENTER && B !== C().join("") && (B = C().join(""), setTimeout(function() {
                            h.trigger("change")
                        }, 0)), !0;
                        if (c) {
                            46 === c && !1 === e.shiftKey && "" !== l.radixPoint && (c = l.radixPoint.charCodeAt(0));
                            var d, u = i ? {
                                    begin: r,
                                    end: r
                                } : N(this),
                                p = String.fromCharCode(c);
                            f().writeOutBuffer = !0;
                            var g = T(u, p, a);
                            if (!1 !== g && (m(!0), d = g.caret !== n ? g.caret : i ? g.pos + 1 : I(g.pos), f().p = d), !1 !== o) {
                                var v = this;
                                if (setTimeout(function() {
                                        l.onKeyValidation.call(v, c, g, l)
                                    }, 0), f().writeOutBuffer && !1 !== g) {
                                    var b = C();
                                    M(this, b, l.numericInput && g.caret === n ? E(d) : d, e, !0 !== i), !0 !== i && setTimeout(function() {
                                        !0 === H(b) && h.trigger("complete")
                                    }, 0)
                                }
                            }
                            if (e.preventDefault(), i) return g.forwardPosition = d, g
                        }
                    },
                    pasteEvent: function(i) {
                        var n, s = i.originalEvent || i,
                            o = t(this),
                            a = this.inputmask._valueGet(!0),
                            r = N(this);
                        K && (n = r.end, r.end = r.begin, r.begin = n);
                        var h = a.substr(0, r.begin),
                            c = a.substr(r.end, a.length);
                        if (h === (K ? k().reverse() : k()).slice(0, r.begin).join("") && (h = ""), c === (K ? k().reverse() : k()).slice(r.end).join("") && (c = ""), K && (n = h, h = c, c = n), e.clipboardData && e.clipboardData.getData) a = h + e.clipboardData.getData("Text") + c;
                        else {
                            if (!s.clipboardData || !s.clipboardData.getData) return !0;
                            a = h + s.clipboardData.getData("text/plain") + c
                        }
                        var d = a;
                        if (t.isFunction(l.onBeforePaste)) {
                            if (!1 === (d = l.onBeforePaste(a, l))) return i.preventDefault();
                            d || (d = a)
                        }
                        return O(this, !1, !1, K ? d.split("").reverse() : d.toString().split("")), M(this, C(), I(g()), i, B !== C().join("")), !0 === H(C()) && o.trigger("complete"), i.preventDefault()
                    },
                    inputFallBackEvent: function(e) {
                        var i = this,
                            n = i.inputmask._valueGet();
                        if (C().join("") !== n) {
                            var o = N(i);
                            if ("." === n.charAt(o.begin - 1) && "" !== l.radixPoint && ((n = n.split(""))[o.begin - 1] = l.radixPoint.charAt(0), n = n.join("")), n.charAt(o.begin - 1) === l.radixPoint && n.length > C().length) return (a = new t.Event("keypress")).which = l.radixPoint.charCodeAt(0), tt.keypressEvent.call(i, a, !0, !0, !1, o.begin), !1;
                            if (n = n.replace(new RegExp("(" + s.escapeRegex(k().join("")) + ")*"), ""), c) {
                                var a, r = n.replace(C().join(""), "");
                                if (1 === r.length) return (a = new t.Event("keypress")).which = r.charCodeAt(0), tt.keypressEvent.call(i, a, !0, !0, !1, f().validPositions[o.begin - 1] ? o.begin : o.begin - 1), !1
                            }
                            if (o.begin > n.length && (N(i, n.length), o = N(i)), C().length - n.length != 1 || n.charAt(o.begin) === C()[o.begin] || n.charAt(o.begin + 1) === C()[o.begin] || P(o.begin)) {
                                var h = [],
                                    d = p(!0, 1).join("");
                                for (h.push(n.substr(0, o.begin)), h.push(n.substr(o.begin)); null === n.match(s.escapeRegex(d) + "$");) d = d.slice(1);
                                n = n.replace(d, ""), t.isFunction(l.onBeforeMask) && (n = l.onBeforeMask(n, l) || n), O(i, !0, !1, n.split(""), e);
                                var m = N(i).begin,
                                    g = i.inputmask._valueGet(),
                                    v = g.indexOf(h[0]);
                                if (0 === v && m !== h[0].length) N(i, h[0].length), u && setTimeout(function() {
                                    N(i, h[0].length)
                                }, 0);
                                else {
                                    for (; null === g.match(s.escapeRegex(h[1]) + "$");) h[1] = h[1].substr(1);
                                    var b = g.indexOf(h[1]); - 1 !== b && "" !== h[1] && m > b && b > v && (N(i, b), u && setTimeout(function() {
                                        N(i, b)
                                    }, 0))
                                }!0 === H(C()) && t(i).trigger("complete")
                            } else e.keyCode = s.keyCode.BACKSPACE, tt.keydownEvent.call(i, e);
                            e.preventDefault()
                        }
                    },
                    setValueEvent: function(e) {
                        this.inputmask.refreshValue = !1;
                        var i = this.inputmask._valueGet(!0);
                        t.isFunction(l.onBeforeMask) && (i = l.onBeforeMask(i, l) || i), i = i.split(""), O(this, !0, !1, K ? i.reverse() : i), B = C().join(""), (l.clearMaskOnLostFocus || l.clearIncomplete) && this.inputmask._valueGet() === k().join("") && this.inputmask._valueSet("")
                    },
                    focusEvent: function(t) {
                        var e = this.inputmask._valueGet();
                        l.showMaskOnFocus && (!l.showMaskOnHover || l.showMaskOnHover && "" === e) && (this.inputmask._valueGet() !== C().join("") ? M(this, C(), I(g())) : !1 === Z && N(this, I(g()))), !0 === l.positionCaretOnTab && !1 === Z && tt.clickEvent.apply(this, [t, !0]), B = C().join("")
                    },
                    mouseleaveEvent: function(t) {
                        if (Z = !1, l.clearMaskOnLostFocus && i.activeElement !== this) {
                            var e = C().slice(),
                                n = this.inputmask._valueGet();
                            n !== this.getAttribute("placeholder") && "" !== n && (-1 === g() && n === k().join("") ? e = [] : z(e), M(this, e))
                        }
                    },
                    clickEvent: function(e, s) {
                        if (i.activeElement === this) {
                            var o = N(this);
                            if (s && (K ? o.end = o.begin : o.begin = o.end), o.begin === o.end) switch (l.positionCaretOnClick) {
                                case "none":
                                    break;
                                case "radixFocus":
                                    if (function(e) {
                                            if ("" !== l.radixPoint) {
                                                var i = f().validPositions;
                                                if (i[e] === n || i[e].input === A(e)) {
                                                    if (e < I(-1)) return !0;
                                                    var s = t.inArray(l.radixPoint, C());
                                                    if (-1 !== s) {
                                                        for (var o in i)
                                                            if (o > s && i[o].input !== A(o)) return !1;
                                                        return !0
                                                    }
                                                }
                                            }
                                            return !1
                                        }(o.begin)) {
                                        var a = C().join("").indexOf(l.radixPoint);
                                        N(this, l.numericInput ? I(a) : a);
                                        break
                                    }
                                default:
                                    var r = o.begin,
                                        h = I(g(r, !0));
                                    if (h > r) N(this, P(r) || P(r - 1) ? r : I(r));
                                    else {
                                        var c = A(h);
                                        ("" !== c && C()[h] !== c && !0 !== _(h).match.optionalQuantifier || !P(h) && _(h).match.def === c) && (h = I(h)), N(this, h)
                                    }
                            }
                        }
                    },
                    dblclickEvent: function(t) {
                        var e = this;
                        setTimeout(function() {
                            N(e, 0, I(g()))
                        }, 0)
                    },
                    cutEvent: function(n) {
                        var o = t(this),
                            a = N(this),
                            r = n.originalEvent || n,
                            l = e.clipboardData || r.clipboardData,
                            h = K ? C().slice(a.end, a.begin) : C().slice(a.begin, a.end);
                        l.setData("text", K ? h.reverse().join("") : h.join("")), i.execCommand && i.execCommand("copy"), W(this, s.keyCode.DELETE, a), M(this, C(), f().p, n, B !== C().join("")), this.inputmask._valueGet() === k().join("") && o.trigger("cleared")
                    },
                    blurEvent: function(e) {
                        var i = t(this);
                        if (this.inputmask) {
                            var s = this.inputmask._valueGet(),
                                o = C().slice();
                            B !== o.join("") && setTimeout(function() {
                                i.trigger("change"), B = o.join("")
                            }, 0), "" !== s && (l.clearMaskOnLostFocus && (-1 === g() && s === k().join("") ? o = [] : z(o)), !1 === H(o) && (setTimeout(function() {
                                i.trigger("incomplete")
                            }, 0), l.clearIncomplete && (m(), o = l.clearMaskOnLostFocus ? [] : k().slice())), M(this, o, n, e))
                        }
                    },
                    mouseenterEvent: function(t) {
                        Z = !0, i.activeElement !== this && l.showMaskOnHover && this.inputmask._valueGet() !== C().join("") && M(this, C())
                    },
                    submitEvent: function(t) {
                        B !== C().join("") && j.trigger("change"), l.clearMaskOnLostFocus && -1 === g() && V.inputmask._valueGet && V.inputmask._valueGet() === k().join("") && V.inputmask._valueSet(""), l.removeMaskOnSubmit && (V.inputmask._valueSet(V.inputmask.unmaskedvalue(), !0), setTimeout(function() {
                            M(V, C())
                        }, 0))
                    },
                    resetEvent: function(t) {
                        V.inputmask.refreshValue = !0, setTimeout(function() {
                            j.trigger("setvalue")
                        }, 0)
                    }
                };
            if (o !== n) switch (o.action) {
                case "isComplete":
                    return V = o.el, H(C());
                case "unmaskedvalue":
                    return V !== n && o.value === n || (Y = o.value, Y = (t.isFunction(l.onBeforeMask) && l.onBeforeMask(Y, l) || Y).split(""), O(n, !1, !1, K ? Y.reverse() : Y), t.isFunction(l.onBeforeWrite) && l.onBeforeWrite(n, C(), 0, l)), $(V);
                case "mask":
                    ! function(e) {
                        J.off(e);
                        var s = function(e, s) {
                            var o = e.getAttribute("type"),
                                a = "INPUT" === e.tagName && -1 !== t.inArray(o, s.supportsInputType) || e.isContentEditable || "TEXTAREA" === e.tagName;
                            if (!a)
                                if ("INPUT" === e.tagName) {
                                    var r = i.createElement("input");
                                    r.setAttribute("type", o), a = "text" === r.type, r = null
                                } else a = "partial";
                            return !1 !== a && function(e) {
                                function o() {
                                    return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== g() || !0 !== s.nullable ? i.activeElement === this && s.clearMaskOnLostFocus ? (K ? z(C().slice()).reverse() : z(C().slice())).join("") : r.call(this) : "" : r.call(this)
                                }

                                function a(e) {
                                    l.call(this, e), this.inputmask && t(this).trigger("setvalue")
                                }
                                var r, l, h;
                                if (!e.inputmask.__valueGet) {
                                    if (!0 !== s.noValuePatching) {
                                        if (Object.getOwnPropertyDescriptor) {
                                            "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" == typeof "test".__proto__ ? function(t) {
                                                return t.__proto__
                                            } : function(t) {
                                                return t.constructor.prototype
                                            });
                                            var c = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), "value") : n;
                                            c && c.get && c.set ? (r = c.get, l = c.set, Object.defineProperty(e, "value", {
                                                get: o,
                                                set: a,
                                                configurable: !0
                                            })) : "INPUT" !== e.tagName && (r = function() {
                                                return this.textContent
                                            }, l = function(t) {
                                                this.textContent = t
                                            }, Object.defineProperty(e, "value", {
                                                get: o,
                                                set: a,
                                                configurable: !0
                                            }))
                                        } else i.__lookupGetter__ && e.__lookupGetter__("value") && (r = e.__lookupGetter__("value"), l = e.__lookupSetter__("value"), e.__defineGetter__("value", o), e.__defineSetter__("value", a));
                                        e.inputmask.__valueGet = r, e.inputmask.__valueSet = l
                                    }
                                    e.inputmask._valueGet = function(t) {
                                        return K && !0 !== t ? r.call(this.el).split("").reverse().join("") : r.call(this.el)
                                    }, e.inputmask._valueSet = function(t, e) {
                                        l.call(this.el, null === t || t === n ? "" : !0 !== e && K ? t.split("").reverse().join("") : t)
                                    }, r === n && (r = function() {
                                        return this.value
                                    }, l = function(t) {
                                        this.value = t
                                    }, function(e) {
                                        if (t.valHooks && (t.valHooks[e] === n || !0 !== t.valHooks[e].inputmaskpatch)) {
                                            var i = t.valHooks[e] && t.valHooks[e].get ? t.valHooks[e].get : function(t) {
                                                    return t.value
                                                },
                                                o = t.valHooks[e] && t.valHooks[e].set ? t.valHooks[e].set : function(t, e) {
                                                    return t.value = e, t
                                                };
                                            t.valHooks[e] = {
                                                get: function(t) {
                                                    if (t.inputmask) {
                                                        if (t.inputmask.opts.autoUnmask) return t.inputmask.unmaskedvalue();
                                                        var e = i(t);
                                                        return -1 !== g(n, n, t.inputmask.maskset.validPositions) || !0 !== s.nullable ? e : ""
                                                    }
                                                    return i(t)
                                                },
                                                set: function(e, i) {
                                                    var n, s = t(e);
                                                    return n = o(e, i), e.inputmask && s.trigger("setvalue"), n
                                                },
                                                inputmaskpatch: !0
                                            }
                                        }
                                    }(e.type), h = e, J.on(h, "mouseenter", function(e) {
                                        var i = t(this);
                                        this.inputmask._valueGet() !== C().join("") && i.trigger("setvalue")
                                    }))
                                }
                            }(e), a
                        }(e, l);
                        if (!1 !== s && (j = t(V = e), ("rtl" === V.dir || l.rightAlign) && (V.style.textAlign = "right"), ("rtl" === V.dir || l.numericInput) && (V.dir = "ltr", V.removeAttribute("dir"), V.inputmask.isRTL = !0, K = !0), !0 === l.colorMask && L(V), u && (V.hasOwnProperty("inputmode") && (V.inputmode = l.inputmode, V.setAttribute("inputmode", l.inputmode)), "rtfm" === l.androidHack && (!0 !== l.colorMask && L(V), V.type = "password")), !0 === s && (J.on(V, "submit", tt.submitEvent), J.on(V, "reset", tt.resetEvent), J.on(V, "mouseenter", tt.mouseenterEvent), J.on(V, "blur", tt.blurEvent), J.on(V, "focus", tt.focusEvent), J.on(V, "mouseleave", tt.mouseleaveEvent), !0 !== l.colorMask && J.on(V, "click", tt.clickEvent), J.on(V, "dblclick", tt.dblclickEvent), J.on(V, "paste", tt.pasteEvent), J.on(V, "dragdrop", tt.pasteEvent), J.on(V, "drop", tt.pasteEvent), J.on(V, "cut", tt.cutEvent), J.on(V, "complete", l.oncomplete), J.on(V, "incomplete", l.onincomplete), J.on(V, "cleared", l.oncleared), u || !0 === l.inputEventOnly || (J.on(V, "keydown", tt.keydownEvent), J.on(V, "keypress", tt.keypressEvent)), J.on(V, "compositionstart", t.noop), J.on(V, "compositionupdate", t.noop), J.on(V, "compositionend", t.noop), J.on(V, "keyup", t.noop), J.on(V, "input", tt.inputFallBackEvent), J.on(V, "beforeinput", t.noop)), J.on(V, "setvalue", tt.setValueEvent), k(), "" !== V.inputmask._valueGet(!0) || !1 === l.clearMaskOnLostFocus || i.activeElement === V)) {
                            var o = t.isFunction(l.onBeforeMask) && l.onBeforeMask(V.inputmask._valueGet(!0), l) || V.inputmask._valueGet(!0);
                            "" !== o && O(V, !0, !1, K ? o.split("").reverse() : o.split(""));
                            var a = C().slice();
                            B = a.join(""), !1 === H(a) && l.clearIncomplete && m(), l.clearMaskOnLostFocus && i.activeElement !== V && (-1 === g() ? a = [] : z(a)), M(V, a), i.activeElement === V && N(V, I(g()))
                        }
                    }(V);
                    break;
                case "format":
                    return Y = (t.isFunction(l.onBeforeMask) && l.onBeforeMask(o.value, l) || o.value).split(""), O(n, !0, !1, K ? Y.reverse() : Y), o.metadata ? {
                        value: K ? C().slice().reverse().join("") : C().join(""),
                        metadata: r.call(this, {
                            action: "getmetadata"
                        }, a, l)
                    } : K ? C().slice().reverse().join("") : C().join("");
                case "isValid":
                    o.value ? (Y = o.value.split(""), O(n, !0, !0, K ? Y.reverse() : Y)) : o.value = C().join("");
                    for (var et = C(), it = R(), nt = et.length - 1; nt > it && !P(nt); nt--);
                    return et.splice(it, nt + 1 - it), H(et) && o.value === C().join("");
                case "getemptymask":
                    return k().join("");
                case "remove":
                    return V && V.inputmask && (j = t(V), V.inputmask._valueSet(l.autoUnmask ? $(V) : V.inputmask._valueGet(!0)), J.off(V), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(V), "value") && V.inputmask.__valueGet && Object.defineProperty(V, "value", {
                        get: V.inputmask.__valueGet,
                        set: V.inputmask.__valueSet,
                        configurable: !0
                    }) : i.__lookupGetter__ && V.__lookupGetter__("value") && V.inputmask.__valueGet && (V.__defineGetter__("value", V.inputmask.__valueGet), V.__defineSetter__("value", V.inputmask.__valueSet)), V.inputmask = n), V;
                case "getmetadata":
                    if (t.isArray(a.metadata)) {
                        var st = p(!0, 0, !1).join("");
                        return t.each(a.metadata, function(t, e) {
                            return e.mask === st ? (st = e, !1) : void 0
                        }), st
                    }
                    return a.metadata
            }
        }
        var l = navigator.userAgent,
            h = /mobile/i.test(l),
            c = /iemobile/i.test(l),
            d = /iphone/i.test(l) && !c,
            u = /android/i.test(l) && !c;
        return s.prototype = {
            dataAttribute: "data-inputmask",
            defaults: {
                placeholder: "_",
                optionalmarker: {
                    start: "[",
                    end: "]"
                },
                quantifiermarker: {
                    start: "{",
                    end: "}"
                },
                groupmarker: {
                    start: "(",
                    end: ")"
                },
                alternatormarker: "|",
                escapeChar: "\\",
                mask: null,
                regex: null,
                oncomplete: t.noop,
                onincomplete: t.noop,
                oncleared: t.noop,
                repeat: 0,
                greedy: !0,
                autoUnmask: !1,
                removeMaskOnSubmit: !1,
                clearMaskOnLostFocus: !0,
                insertMode: !0,
                clearIncomplete: !1,
                alias: null,
                onKeyDown: t.noop,
                onBeforeMask: null,
                onBeforePaste: function(e, i) {
                    return t.isFunction(i.onBeforeMask) ? i.onBeforeMask(e, i) : e
                },
                onBeforeWrite: null,
                onUnMask: null,
                showMaskOnFocus: !0,
                showMaskOnHover: !0,
                onKeyValidation: t.noop,
                skipOptionalPartCharacter: " ",
                numericInput: !1,
                rightAlign: !1,
                undoOnEscape: !0,
                radixPoint: "",
                radixPointDefinitionSymbol: n,
                groupSeparator: "",
                keepStatic: null,
                positionCaretOnTab: !0,
                tabThrough: !1,
                supportsInputType: ["text", "tel", "password"],
                ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
                isComplete: null,
                canClearPosition: t.noop,
                preValidation: null,
                postValidation: null,
                staticDefinitionSymbol: n,
                jitMasking: !1,
                nullable: !0,
                inputEventOnly: !1,
                noValuePatching: !1,
                positionCaretOnClick: "lvp",
                casing: null,
                inputmode: "verbatim",
                colorMask: !1,
                androidHack: !1
            },
            definitions: {
                9: {
                    validator: "[0-9]",
                    cardinality: 1,
                    definitionSymbol: "*"
                },
                a: {
                    validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                    cardinality: 1,
                    definitionSymbol: "*"
                },
                "*": {
                    validator: function() {
                        return !0
                    },
                    cardinality: 1
                }
            },
            aliases: {},
            masksCache: {},
            mask: function(l) {
                var h = this;
                return "string" == typeof l && (l = i.getElementById(l) || i.querySelectorAll(l)), l = l.nodeName ? [l] : l, t.each(l, function(i, l) {
                    var c = t.extend(!0, {}, h.opts);
                    ! function(i, s, a, r) {
                        function l(t, s) {
                            null !== (s = s !== n ? s : i.getAttribute(r + "-" + t)) && ("string" == typeof s && (0 === t.indexOf("on") ? s = e[s] : "false" === s ? s = !1 : "true" === s && (s = !0)), a[t] = s)
                        }
                        var h, c, d, u, p = i.getAttribute(r);
                        if (p && "" !== p && (p = p.replace(new RegExp("'", "g"), '"'), c = JSON.parse("{" + p + "}")), c) {
                            d = n;
                            for (u in c)
                                if ("alias" === u.toLowerCase()) {
                                    d = c[u];
                                    break
                                }
                        }
                        l("alias", d), a.alias && o(a.alias, a, s);
                        for (h in s) {
                            if (c) {
                                d = n;
                                for (u in c)
                                    if (u.toLowerCase() === h.toLowerCase()) {
                                        d = c[u];
                                        break
                                    }
                            }
                            l(h, d)
                        }
                        t.extend(!0, s, a)
                    }(l, c, t.extend(!0, {}, h.userOptions), h.dataAttribute);
                    var d = a(c, h.noMasksCache);
                    d !== n && (l.inputmask !== n && l.inputmask.remove(), l.inputmask = new s(n, n, !0), l.inputmask.opts = c, l.inputmask.noMasksCache = h.noMasksCache, l.inputmask.userOptions = t.extend(!0, {}, h.userOptions), l.inputmask.isRTL = h.isRTL, l.inputmask.el = l, l.inputmask.maskset = d, t.data(l, "_inputmask_opts", c), r.call(l.inputmask, {
                        action: "mask"
                    }))
                }), l && l[0] && l[0].inputmask || this
            },
            option: function(e, i) {
                return "string" == typeof e ? this.opts[e] : "object" == typeof e ? (t.extend(this.userOptions, e), this.el && !0 !== i && this.mask(this.el), this) : void 0
            },
            unmaskedvalue: function(t) {
                return this.maskset = this.maskset || a(this.opts, this.noMasksCache), r.call(this, {
                    action: "unmaskedvalue",
                    value: t
                })
            },
            remove: function() {
                return r.call(this, {
                    action: "remove"
                })
            },
            getemptymask: function() {
                return this.maskset = this.maskset || a(this.opts, this.noMasksCache), r.call(this, {
                    action: "getemptymask"
                })
            },
            hasMaskedValue: function() {
                return !this.opts.autoUnmask
            },
            isComplete: function() {
                return this.maskset = this.maskset || a(this.opts, this.noMasksCache), r.call(this, {
                    action: "isComplete"
                })
            },
            getmetadata: function() {
                return this.maskset = this.maskset || a(this.opts, this.noMasksCache), r.call(this, {
                    action: "getmetadata"
                })
            },
            isValid: function(t) {
                return this.maskset = this.maskset || a(this.opts, this.noMasksCache), r.call(this, {
                    action: "isValid",
                    value: t
                })
            },
            format: function(t, e) {
                return this.maskset = this.maskset || a(this.opts, this.noMasksCache), r.call(this, {
                    action: "format",
                    value: t,
                    metadata: e
                })
            },
            analyseMask: function(e, i, o) {
                function a(t, e, i, n) {
                    this.matches = [], this.openGroup = t || !1, this.isGroup = t || !1, this.isOptional = e || !1, this.isQuantifier = i || !1, this.isAlternator = n || !1, this.quantifier = {
                        min: 1,
                        max: 1
                    }
                }

                function r(t, e, a) {
                    if (a = a !== n ? a : t.matches.length, i) 0 === e.indexOf("[") || b ? t.matches.splice(a++, 0, {
                        fn: new RegExp(e, o.casing ? "i" : ""),
                        cardinality: 0,
                        optionality: t.isOptional,
                        newBlockMarker: l === n || l.def !== e,
                        casing: null,
                        def: o.staticDefinitionSymbol || e,
                        placeholder: o.staticDefinitionSymbol !== n ? e : n,
                        nativeDef: e
                    }) : t.matches.splice(a++, 0, {
                        fn: null,
                        cardinality: 0,
                        optionality: t.isOptional,
                        newBlockMarker: l === n || l.def !== e,
                        casing: null,
                        def: o.staticDefinitionSymbol || e,
                        placeholder: o.staticDefinitionSymbol !== n ? e : n,
                        nativeDef: e
                    }), b = !1;
                    else {
                        var r = (o.definitions ? o.definitions[e] : n) || s.prototype.definitions[e],
                            l = t.matches[a - 1];
                        if (r && !b) {
                            for (var h = r.prevalidator, c = h ? h.length : 0, d = 1; d < r.cardinality; d++) {
                                var u = c >= d ? h[d - 1] : [],
                                    p = u.validator,
                                    f = u.cardinality;
                                t.matches.splice(a++, 0, {
                                    fn: p ? "string" == typeof p ? new RegExp(p, o.casing ? "i" : "") : new function() {
                                        this.test = p
                                    } : new RegExp("."),
                                    cardinality: f || 1,
                                    optionality: t.isOptional,
                                    newBlockMarker: l === n || l.def !== (r.definitionSymbol || e),
                                    casing: r.casing,
                                    def: r.definitionSymbol || e,
                                    placeholder: r.placeholder,
                                    nativeDef: e
                                }), l = t.matches[a - 1]
                            }
                            t.matches.splice(a++, 0, {
                                fn: r.validator ? "string" == typeof r.validator ? new RegExp(r.validator, o.casing ? "i" : "") : new function() {
                                    this.test = r.validator
                                } : new RegExp("."),
                                cardinality: r.cardinality,
                                optionality: t.isOptional,
                                newBlockMarker: l === n || l.def !== (r.definitionSymbol || e),
                                casing: r.casing,
                                def: r.definitionSymbol || e,
                                placeholder: r.placeholder,
                                nativeDef: e
                            })
                        } else t.matches.splice(a++, 0, {
                            fn: null,
                            cardinality: 0,
                            optionality: t.isOptional,
                            newBlockMarker: l === n || l.def !== e,
                            casing: null,
                            def: o.staticDefinitionSymbol || e,
                            placeholder: o.staticDefinitionSymbol !== n ? e : n,
                            nativeDef: e
                        }), b = !1
                    }
                }

                function l() {
                    if (_.length > 0) {
                        if (r(u = _[_.length - 1], c), u.isAlternator) {
                            p = _.pop();
                            for (var t = 0; t < p.matches.length; t++) p.matches[t].isGroup = !1;
                            _.length > 0 ? (u = _[_.length - 1]).matches.push(p) : y.matches.push(p)
                        }
                    } else r(y, c)
                }
                var h, c, d, u, p, f, m, g = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,
                    v = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
                    b = !1,
                    y = new a,
                    _ = [],
                    x = [];
                for (i && (o.optionalmarker.start = n, o.optionalmarker.end = n); h = i ? v.exec(e) : g.exec(e);) {
                    if (c = h[0], i) switch (c.charAt(0)) {
                        case "?":
                            c = "{+}";
                            break;
                        case "+":
                        case "*":
                            c = "{" + c + "}"
                    }
                    if (b) l();
                    else switch (c.charAt(0)) {
                        case o.escapeChar:
                            b = !0, i && l();
                            break;
                        case o.optionalmarker.end:
                        case o.groupmarker.end:
                            if ((d = _.pop()).openGroup = !1, d !== n)
                                if (_.length > 0) {
                                    if ((u = _[_.length - 1]).matches.push(d), u.isAlternator) {
                                        p = _.pop();
                                        for (var w = 0; w < p.matches.length; w++) p.matches[w].isGroup = !1;
                                        _.length > 0 ? (u = _[_.length - 1]).matches.push(p) : y.matches.push(p)
                                    }
                                } else y.matches.push(d);
                            else l();
                            break;
                        case o.optionalmarker.start:
                            _.push(new a(!1, !0));
                            break;
                        case o.groupmarker.start:
                            _.push(new a(!0));
                            break;
                        case o.quantifiermarker.start:
                            var k = new a(!1, !1, !0),
                                C = (c = c.replace(/[{}]/g, "")).split(","),
                                S = isNaN(C[0]) ? C[0] : parseInt(C[0]),
                                D = 1 === C.length ? S : isNaN(C[1]) ? C[1] : parseInt(C[1]);
                            if ("*" !== D && "+" !== D || (S = "*" === D ? 0 : 1), k.quantifier = {
                                    min: S,
                                    max: D
                                }, _.length > 0) {
                                var T = _[_.length - 1].matches;
                                (h = T.pop()).isGroup || ((m = new a(!0)).matches.push(h), h = m), T.push(h), T.push(k)
                            } else h = y.matches.pop(), h.isGroup || (m = new a(!0), m.matches.push(h), h = m), y.matches.push(h), y.matches.push(k);
                            break;
                        case o.alternatormarker:
                            (f = _.length > 0 ? (u = _[_.length - 1]).matches.pop() : y.matches.pop()).isAlternator ? _.push(f) : ((p = new a(!1, !1, !1, !0)).matches.push(f), _.push(p));
                            break;
                        default:
                            l()
                    }
                }
                for (; _.length > 0;) d = _.pop(), y.matches.push(d);
                return y.matches.length > 0 && (function e(s) {
                    s && s.matches && t.each(s.matches, function(t, a) {
                        var l = s.matches[t + 1];
                        (l === n || l.matches === n || !1 === l.isQuantifier) && a && a.isGroup && (a.isGroup = !1, i || (r(a, o.groupmarker.start, 0), !0 !== a.openGroup && r(a, o.groupmarker.end))), e(a)
                    })
                }(y), x.push(y)), o.numericInput && function t(e) {
                    e.matches = e.matches.reverse();
                    for (var i in e.matches)
                        if (e.matches.hasOwnProperty(i)) {
                            var s = parseInt(i);
                            if (e.matches[i].isQuantifier && e.matches[s + 1] && e.matches[s + 1].isGroup) {
                                var a = e.matches[i];
                                e.matches.splice(i, 1), e.matches.splice(s + 1, 0, a)
                            }
                            e.matches[i].matches !== n ? e.matches[i] = t(e.matches[i]) : e.matches[i] = ((r = e.matches[i]) === o.optionalmarker.start ? r = o.optionalmarker.end : r === o.optionalmarker.end ? r = o.optionalmarker.start : r === o.groupmarker.start ? r = o.groupmarker.end : r === o.groupmarker.end && (r = o.groupmarker.start), r)
                        }
                    var r;
                    return e
                }(x[0]), x
            }
        }, s.extendDefaults = function(e) {
            t.extend(!0, s.prototype.defaults, e)
        }, s.extendDefinitions = function(e) {
            t.extend(!0, s.prototype.definitions, e)
        }, s.extendAliases = function(e) {
            t.extend(!0, s.prototype.aliases, e)
        }, s.format = function(t, e, i) {
            return s(e).format(t, i)
        }, s.unmask = function(t, e) {
            return s(e).unmaskedvalue(t)
        }, s.isValid = function(t, e) {
            return s(e).isValid(t)
        }, s.remove = function(e) {
            t.each(e, function(t, e) {
                e.inputmask && e.inputmask.remove()
            })
        }, s.escapeRegex = function(t) {
            return t.replace(new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"].join("|\\") + ")", "gim"), "\\$1")
        }, s.keyCode = {
            ALT: 18,
            BACKSPACE: 8,
            BACKSPACE_SAFARI: 127,
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
            WINDOWS: 91,
            X: 88
        }, s
    }(window.dependencyLib || jQuery, window, document),
    function(t) {
        var e, i;
        e = jQuery, i = window.Inputmask, void 0 === e.fn.inputmask && (e.fn.inputmask = function(t, n) {
            var s, o = this[0];
            if (void 0 === n && (n = {}), "string" == typeof t) switch (t) {
                case "unmaskedvalue":
                    return o && o.inputmask ? o.inputmask.unmaskedvalue() : e(o).val();
                case "remove":
                    return this.each(function() {
                        this.inputmask && this.inputmask.remove()
                    });
                case "getemptymask":
                    return o && o.inputmask ? o.inputmask.getemptymask() : "";
                case "hasMaskedValue":
                    return !(!o || !o.inputmask) && o.inputmask.hasMaskedValue();
                case "isComplete":
                    return !o || !o.inputmask || o.inputmask.isComplete();
                case "getmetadata":
                    return o && o.inputmask ? o.inputmask.getmetadata() : void 0;
                case "setvalue":
                    e(o).val(n), o && void 0 === o.inputmask && e(o).triggerHandler("setvalue");
                    break;
                case "option":
                    if ("string" != typeof n) return this.each(function() {
                        return void 0 !== this.inputmask ? this.inputmask.option(n) : void 0
                    });
                    if (o && void 0 !== o.inputmask) return o.inputmask.option(n);
                    break;
                default:
                    return n.alias = t, s = new i(n), this.each(function() {
                        s.mask(this)
                    })
            } else {
                if ("object" == typeof t) return s = new i(t), void 0 === t.mask && void 0 === t.alias ? this.each(function() {
                    return void 0 !== this.inputmask ? this.inputmask.option(t) : void s.mask(this)
                }) : this.each(function() {
                    s.mask(this)
                });
                if (void 0 === t) return this.each(function() {
                    (s = new i(n)).mask(this)
                })
            }
        }), e.fn.inputmask
    }(),
    function(t, e) {
        e.extendAliases({
            "dd/mm/yyyy": {
                mask: "1/2/y",
                placeholder: "dd/mm/yyyy",
                regex: {
                    val1pre: new RegExp("[0-3]"),
                    val1: new RegExp("0[1-9]|[12][0-9]|3[01]"),
                    val2pre: function(t) {
                        var i = e.escapeRegex.call(this, t);
                        return new RegExp("((0[1-9]|[12][0-9]|3[01])" + i + "[01])")
                    },
                    val2: function(t) {
                        var i = e.escapeRegex.call(this, t);
                        return new RegExp("((0[1-9]|[12][0-9])" + i + "(0[1-9]|1[012]))|(30" + i + "(0[13-9]|1[012]))|(31" + i + "(0[13578]|1[02]))")
                    }
                },
                leapday: "29/02/",
                separator: "/",
                yearrange: {
                    minyear: 1900,
                    maxyear: 2099
                },
                isInYearRange: function(t, e, i) {
                    if (isNaN(t)) return !1;
                    var n = parseInt(t.concat(e.toString().slice(t.length))),
                        s = parseInt(t.concat(i.toString().slice(t.length)));
                    return !isNaN(n) && n >= e && i >= n || !isNaN(s) && s >= e && i >= s
                },
                determinebaseyear: function(t, e, i) {
                    var n = (new Date).getFullYear();
                    if (t > n) return t;
                    if (n > e) {
                        for (var s = e.toString().slice(0, 2), o = e.toString().slice(2, 4); s + i > e;) s--;
                        var a = s + o;
                        return t > a ? t : a
                    }
                    if (n >= t && e >= n) {
                        for (var r = n.toString().slice(0, 2); r + i > e;) r--;
                        var l = r + i;
                        return t > l ? t : l
                    }
                    return n
                },
                onKeyDown: function(i, n, s, o) {
                    var a = t(this);
                    if (i.ctrlKey && i.keyCode === e.keyCode.RIGHT) {
                        var r = new Date;
                        a.val(r.getDate().toString() + (r.getMonth() + 1).toString() + r.getFullYear().toString()), a.trigger("setvalue")
                    }
                },
                getFrontValue: function(t, e, i) {
                    for (var n = 0, s = 0, o = 0; o < t.length && "2" !== t.charAt(o); o++) {
                        var a = i.definitions[t.charAt(o)];
                        a ? (n += s, s = a.cardinality) : s++
                    }
                    return e.join("").substr(n, s)
                },
                postValidation: function(t, e, i) {
                    var n, s, o, a = t.join("");
                    return 0 === i.mask.indexOf("y") ? (s = a.substr(0, 4), n = a.substr(4, 11)) : (s = a.substr(6, 11), n = a.substr(0, 6)), e && (n !== i.leapday || (o = s, isNaN(o) || 29 === new Date(o, 2, 0).getDate()))
                },
                definitions: {
                    1: {
                        validator: function(t, e, i, n, s) {
                            var o = s.regex.val1.test(t);
                            return n || o || t.charAt(1) !== s.separator && -1 === "-./".indexOf(t.charAt(1)) || !(o = s.regex.val1.test("0" + t.charAt(0))) ? o : (e.buffer[i - 1] = "0", {
                                refreshFromBuffer: {
                                    start: i - 1,
                                    end: i
                                },
                                pos: i,
                                c: t.charAt(0)
                            })
                        },
                        cardinality: 2,
                        prevalidator: [{
                            validator: function(t, e, i, n, s) {
                                var o = t;
                                isNaN(e.buffer[i + 1]) || (o += e.buffer[i + 1]);
                                var a = 1 === o.length ? s.regex.val1pre.test(o) : s.regex.val1.test(o);
                                if (!n && !a) {
                                    if (a = s.regex.val1.test(t + "0")) return e.buffer[i] = t, e.buffer[++i] = "0", {
                                        pos: i,
                                        c: "0"
                                    };
                                    if (a = s.regex.val1.test("0" + t)) return e.buffer[i] = "0", i++, {
                                        pos: i
                                    }
                                }
                                return a
                            },
                            cardinality: 1
                        }]
                    },
                    2: {
                        validator: function(t, e, i, n, s) {
                            var o = s.getFrontValue(e.mask, e.buffer, s); - 1 !== o.indexOf(s.placeholder[0]) && (o = "01" + s.separator);
                            var a = s.regex.val2(s.separator).test(o + t);
                            return n || a || t.charAt(1) !== s.separator && -1 === "-./".indexOf(t.charAt(1)) || !(a = s.regex.val2(s.separator).test(o + "0" + t.charAt(0))) ? a : (e.buffer[i - 1] = "0", {
                                refreshFromBuffer: {
                                    start: i - 1,
                                    end: i
                                },
                                pos: i,
                                c: t.charAt(0)
                            })
                        },
                        cardinality: 2,
                        prevalidator: [{
                            validator: function(t, e, i, n, s) {
                                isNaN(e.buffer[i + 1]) || (t += e.buffer[i + 1]);
                                var o = s.getFrontValue(e.mask, e.buffer, s); - 1 !== o.indexOf(s.placeholder[0]) && (o = "01" + s.separator);
                                var a = 1 === t.length ? s.regex.val2pre(s.separator).test(o + t) : s.regex.val2(s.separator).test(o + t);
                                return n || a || !(a = s.regex.val2(s.separator).test(o + "0" + t)) ? a : (e.buffer[i] = "0", {
                                    pos: ++i
                                })
                            },
                            cardinality: 1
                        }]
                    },
                    y: {
                        validator: function(t, e, i, n, s) {
                            return s.isInYearRange(t, s.yearrange.minyear, s.yearrange.maxyear)
                        },
                        cardinality: 4,
                        prevalidator: [{
                            validator: function(t, e, i, n, s) {
                                var o = s.isInYearRange(t, s.yearrange.minyear, s.yearrange.maxyear);
                                if (!n && !o) {
                                    var a = s.determinebaseyear(s.yearrange.minyear, s.yearrange.maxyear, t + "0").toString().slice(0, 1);
                                    if (o = s.isInYearRange(a + t, s.yearrange.minyear, s.yearrange.maxyear)) return e.buffer[i++] = a.charAt(0), {
                                        pos: i
                                    };
                                    if (a = s.determinebaseyear(s.yearrange.minyear, s.yearrange.maxyear, t + "0").toString().slice(0, 2), o = s.isInYearRange(a + t, s.yearrange.minyear, s.yearrange.maxyear)) return e.buffer[i++] = a.charAt(0), e.buffer[i++] = a.charAt(1), {
                                        pos: i
                                    }
                                }
                                return o
                            },
                            cardinality: 1
                        }, {
                            validator: function(t, e, i, n, s) {
                                var o = s.isInYearRange(t, s.yearrange.minyear, s.yearrange.maxyear);
                                if (!n && !o) {
                                    var a = s.determinebaseyear(s.yearrange.minyear, s.yearrange.maxyear, t).toString().slice(0, 2);
                                    if (o = s.isInYearRange(t[0] + a[1] + t[1], s.yearrange.minyear, s.yearrange.maxyear)) return e.buffer[i++] = a.charAt(1), {
                                        pos: i
                                    };
                                    if (a = s.determinebaseyear(s.yearrange.minyear, s.yearrange.maxyear, t).toString().slice(0, 2), o = s.isInYearRange(a + t, s.yearrange.minyear, s.yearrange.maxyear)) return e.buffer[i - 1] = a.charAt(0), e.buffer[i++] = a.charAt(1), e.buffer[i++] = t.charAt(0), {
                                        refreshFromBuffer: {
                                            start: i - 3,
                                            end: i
                                        },
                                        pos: i
                                    }
                                }
                                return o
                            },
                            cardinality: 2
                        }, {
                            validator: function(t, e, i, n, s) {
                                return s.isInYearRange(t, s.yearrange.minyear, s.yearrange.maxyear)
                            },
                            cardinality: 3
                        }]
                    }
                },
                insertMode: !1,
                autoUnmask: !1
            },
            "mm/dd/yyyy": {
                placeholder: "mm/dd/yyyy",
                alias: "dd/mm/yyyy",
                regex: {
                    val2pre: function(t) {
                        var i = e.escapeRegex.call(this, t);
                        return new RegExp("((0[13-9]|1[012])" + i + "[0-3])|(02" + i + "[0-2])")
                    },
                    val2: function(t) {
                        var i = e.escapeRegex.call(this, t);
                        return new RegExp("((0[1-9]|1[012])" + i + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + i + "30)|((0[13578]|1[02])" + i + "31)")
                    },
                    val1pre: new RegExp("[01]"),
                    val1: new RegExp("0[1-9]|1[012]")
                },
                leapday: "02/29/",
                onKeyDown: function(i, n, s, o) {
                    var a = t(this);
                    if (i.ctrlKey && i.keyCode === e.keyCode.RIGHT) {
                        var r = new Date;
                        a.val((r.getMonth() + 1).toString() + r.getDate().toString() + r.getFullYear().toString()), a.trigger("setvalue")
                    }
                }
            },
            "yyyy/mm/dd": {
                mask: "y/1/2",
                placeholder: "yyyy/mm/dd",
                alias: "mm/dd/yyyy",
                leapday: "/02/29",
                onKeyDown: function(i, n, s, o) {
                    var a = t(this);
                    if (i.ctrlKey && i.keyCode === e.keyCode.RIGHT) {
                        var r = new Date;
                        a.val(r.getFullYear().toString() + (r.getMonth() + 1).toString() + r.getDate().toString()), a.trigger("setvalue")
                    }
                }
            },
            "dd.mm.yyyy": {
                mask: "1.2.y",
                placeholder: "dd.mm.yyyy",
                leapday: "29.02.",
                separator: ".",
                alias: "dd/mm/yyyy"
            },
            "dd-mm-yyyy": {
                mask: "1-2-y",
                placeholder: "dd-mm-yyyy",
                leapday: "29-02-",
                separator: "-",
                alias: "dd/mm/yyyy"
            },
            "mm.dd.yyyy": {
                mask: "1.2.y",
                placeholder: "mm.dd.yyyy",
                leapday: "02.29.",
                separator: ".",
                alias: "mm/dd/yyyy"
            },
            "mm-dd-yyyy": {
                mask: "1-2-y",
                placeholder: "mm-dd-yyyy",
                leapday: "02-29-",
                separator: "-",
                alias: "mm/dd/yyyy"
            },
            "yyyy.mm.dd": {
                mask: "y.1.2",
                placeholder: "yyyy.mm.dd",
                leapday: ".02.29",
                separator: ".",
                alias: "yyyy/mm/dd"
            },
            "yyyy-mm-dd": {
                mask: "y-1-2",
                placeholder: "yyyy-mm-dd",
                leapday: "-02-29",
                separator: "-",
                alias: "yyyy/mm/dd"
            },
            datetime: {
                mask: "1/2/y h:s",
                placeholder: "dd/mm/yyyy hh:mm",
                alias: "dd/mm/yyyy",
                regex: {
                    hrspre: new RegExp("[012]"),
                    hrs24: new RegExp("2[0-4]|1[3-9]"),
                    hrs: new RegExp("[01][0-9]|2[0-4]"),
                    ampm: new RegExp("^[a|p|A|P][m|M]"),
                    mspre: new RegExp("[0-5]"),
                    ms: new RegExp("[0-5][0-9]")
                },
                timeseparator: ":",
                hourFormat: "24",
                definitions: {
                    h: {
                        validator: function(t, e, i, n, s) {
                            if ("24" === s.hourFormat && 24 === parseInt(t, 10)) return e.buffer[i - 1] = "0", e.buffer[i] = "0", {
                                refreshFromBuffer: {
                                    start: i - 1,
                                    end: i
                                },
                                c: "0"
                            };
                            var o = s.regex.hrs.test(t);
                            if (!n && !o && (t.charAt(1) === s.timeseparator || -1 !== "-.:".indexOf(t.charAt(1))) && (o = s.regex.hrs.test("0" + t.charAt(0)))) return e.buffer[i - 1] = "0", e.buffer[i] = t.charAt(0), i++, {
                                refreshFromBuffer: {
                                    start: i - 2,
                                    end: i
                                },
                                pos: i,
                                c: s.timeseparator
                            };
                            if (o && "24" !== s.hourFormat && s.regex.hrs24.test(t)) {
                                var a = parseInt(t, 10);
                                return 24 === a ? (e.buffer[i + 5] = "a", e.buffer[i + 6] = "m") : (e.buffer[i + 5] = "p", e.buffer[i + 6] = "m"), 10 > (a -= 12) ? (e.buffer[i] = a.toString(), e.buffer[i - 1] = "0") : (e.buffer[i] = a.toString().charAt(1), e.buffer[i - 1] = a.toString().charAt(0)), {
                                    refreshFromBuffer: {
                                        start: i - 1,
                                        end: i + 6
                                    },
                                    c: e.buffer[i]
                                }
                            }
                            return o
                        },
                        cardinality: 2,
                        prevalidator: [{
                            validator: function(t, e, i, n, s) {
                                var o = s.regex.hrspre.test(t);
                                return n || o || !(o = s.regex.hrs.test("0" + t)) ? o : (e.buffer[i] = "0", {
                                    pos: ++i
                                })
                            },
                            cardinality: 1
                        }]
                    },
                    s: {
                        validator: "[0-5][0-9]",
                        cardinality: 2,
                        prevalidator: [{
                            validator: function(t, e, i, n, s) {
                                var o = s.regex.mspre.test(t);
                                return n || o || !(o = s.regex.ms.test("0" + t)) ? o : (e.buffer[i] = "0", {
                                    pos: ++i
                                })
                            },
                            cardinality: 1
                        }]
                    },
                    t: {
                        validator: function(t, e, i, n, s) {
                            return s.regex.ampm.test(t + "m")
                        },
                        casing: "lower",
                        cardinality: 1
                    }
                },
                insertMode: !1,
                autoUnmask: !1
            },
            datetime12: {
                mask: "1/2/y h:s t\\m",
                placeholder: "dd/mm/yyyy hh:mm xm",
                alias: "datetime",
                hourFormat: "12"
            },
            "mm/dd/yyyy hh:mm xm": {
                mask: "1/2/y h:s t\\m",
                placeholder: "mm/dd/yyyy hh:mm xm",
                alias: "datetime12",
                regex: {
                    val2pre: function(t) {
                        var i = e.escapeRegex.call(this, t);
                        return new RegExp("((0[13-9]|1[012])" + i + "[0-3])|(02" + i + "[0-2])")
                    },
                    val2: function(t) {
                        var i = e.escapeRegex.call(this, t);
                        return new RegExp("((0[1-9]|1[012])" + i + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + i + "30)|((0[13578]|1[02])" + i + "31)")
                    },
                    val1pre: new RegExp("[01]"),
                    val1: new RegExp("0[1-9]|1[012]")
                },
                leapday: "02/29/",
                onKeyDown: function(i, n, s, o) {
                    var a = t(this);
                    if (i.ctrlKey && i.keyCode === e.keyCode.RIGHT) {
                        var r = new Date;
                        a.val((r.getMonth() + 1).toString() + r.getDate().toString() + r.getFullYear().toString()), a.trigger("setvalue")
                    }
                }
            },
            "hh:mm t": {
                mask: "h:s t\\m",
                placeholder: "hh:mm xm",
                alias: "datetime",
                hourFormat: "12"
            },
            "h:s t": {
                mask: "h:s t\\m",
                placeholder: "hh:mm xm",
                alias: "datetime",
                hourFormat: "12"
            },
            "hh:mm:ss": {
                mask: "h:s:s",
                placeholder: "hh:mm:ss",
                alias: "datetime",
                autoUnmask: !1
            },
            "hh:mm": {
                mask: "h:s",
                placeholder: "hh:mm",
                alias: "datetime",
                autoUnmask: !1
            },
            date: {
                alias: "dd/mm/yyyy"
            },
            "mm/yyyy": {
                mask: "1/y",
                placeholder: "mm/yyyy",
                leapday: "donotuse",
                separator: "/",
                alias: "mm/dd/yyyy"
            },
            shamsi: {
                regex: {
                    val2pre: function(t) {
                        var i = e.escapeRegex.call(this, t);
                        return new RegExp("((0[1-9]|1[012])" + i + "[0-3])")
                    },
                    val2: function(t) {
                        var i = e.escapeRegex.call(this, t);
                        return new RegExp("((0[1-9]|1[012])" + i + "(0[1-9]|[12][0-9]))|((0[1-9]|1[012])" + i + "30)|((0[1-6])" + i + "31)")
                    },
                    val1pre: new RegExp("[01]"),
                    val1: new RegExp("0[1-9]|1[012]")
                },
                yearrange: {
                    minyear: 1300,
                    maxyear: 1499
                },
                mask: "y/1/2",
                leapday: "/12/30",
                placeholder: "yyyy/mm/dd",
                alias: "mm/dd/yyyy",
                clearIncomplete: !0
            },
            "yyyy-mm-dd hh:mm:ss": {
                mask: "y-1-2 h:s:s",
                placeholder: "yyyy-mm-dd hh:mm:ss",
                alias: "datetime",
                separator: "-",
                leapday: "-02-29",
                regex: {
                    val2pre: function(t) {
                        var i = e.escapeRegex.call(this, t);
                        return new RegExp("((0[13-9]|1[012])" + i + "[0-3])|(02" + i + "[0-2])")
                    },
                    val2: function(t) {
                        var i = e.escapeRegex.call(this, t);
                        return new RegExp("((0[1-9]|1[012])" + i + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + i + "30)|((0[13578]|1[02])" + i + "31)")
                    },
                    val1pre: new RegExp("[01]"),
                    val1: new RegExp("0[1-9]|1[012]")
                },
                onKeyDown: function(t, e, i, n) {}
            }
        })
    }(window.dependencyLib || jQuery, window.Inputmask),
    function(t) {
        var e;
        window.dependencyLib || jQuery, (e = window.Inputmask).extendDefinitions({
            A: {
                validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                cardinality: 1,
                casing: "upper"
            },
            "&": {
                validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
                cardinality: 1,
                casing: "upper"
            },
            "#": {
                validator: "[0-9A-Fa-f]",
                cardinality: 1,
                casing: "upper"
            }
        }), e.extendAliases({
            url: {
                definitions: {
                    i: {
                        validator: ".",
                        cardinality: 1
                    }
                },
                mask: "(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",
                insertMode: !1,
                autoUnmask: !1,
                inputmode: "url"
            },
            ip: {
                mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
                definitions: {
                    i: {
                        validator: function(t, e, i, n, s) {
                            return i - 1 > -1 && "." !== e.buffer[i - 1] ? (t = e.buffer[i - 1] + t, t = i - 2 > -1 && "." !== e.buffer[i - 2] ? e.buffer[i - 2] + t : "0" + t) : t = "00" + t, new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(t)
                        },
                        cardinality: 1
                    }
                },
                onUnMask: function(t, e, i) {
                    return t
                },
                inputmode: "numeric"
            },
            email: {
                mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
                greedy: !1,
                onBeforePaste: function(t, e) {
                    return (t = t.toLowerCase()).replace("mailto:", "")
                },
                definitions: {
                    "*": {
                        validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
                        cardinality: 1,
                        casing: "lower"
                    },
                    "-": {
                        validator: "[0-9A-Za-z-]",
                        cardinality: 1,
                        casing: "lower"
                    }
                },
                onUnMask: function(t, e, i) {
                    return t
                },
                inputmode: "email"
            },
            mac: {
                mask: "##:##:##:##:##:##"
            },
            vin: {
                mask: "V{13}9{4}",
                definitions: {
                    V: {
                        validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                        cardinality: 1,
                        casing: "upper"
                    }
                },
                clearIncomplete: !0,
                autoUnmask: !0
            }
        })
    }(),
    function(t, e, i) {
        function n(t, e) {
            for (var i = "", n = 0; n < t.length; n++) i += e.definitions[t.charAt(n)] || e.optionalmarker.start === t.charAt(n) || e.optionalmarker.end === t.charAt(n) || e.quantifiermarker.start === t.charAt(n) || e.quantifiermarker.end === t.charAt(n) || e.groupmarker.start === t.charAt(n) || e.groupmarker.end === t.charAt(n) || e.alternatormarker === t.charAt(n) ? "\\" + t.charAt(n) : t.charAt(n);
            return i
        }
        e.extendAliases({
            numeric: {
                mask: function(t) {
                    if (0 !== t.repeat && isNaN(t.integerDigits) && (t.integerDigits = t.repeat), t.repeat = 0, t.groupSeparator === t.radixPoint && ("." === t.radixPoint ? t.groupSeparator = "," : "," === t.radixPoint ? t.groupSeparator = "." : t.groupSeparator = ""), " " === t.groupSeparator && (t.skipOptionalPartCharacter = i), t.autoGroup = t.autoGroup && "" !== t.groupSeparator, t.autoGroup && ("string" == typeof t.groupSize && isFinite(t.groupSize) && (t.groupSize = parseInt(t.groupSize)), isFinite(t.integerDigits))) {
                        var e = Math.floor(t.integerDigits / t.groupSize),
                            s = t.integerDigits % t.groupSize;
                        t.integerDigits = parseInt(t.integerDigits) + (0 === s ? e - 1 : e), t.integerDigits < 1 && (t.integerDigits = "*")
                    }
                    t.placeholder.length > 1 && (t.placeholder = t.placeholder.charAt(0)), "radixFocus" === t.positionCaretOnClick && "" === t.placeholder && !1 === t.integerOptional && (t.positionCaretOnClick = "lvp"), t.definitions[";"] = t.definitions["~"], t.definitions[";"].definitionSymbol = "~", !0 === t.numericInput && (t.positionCaretOnClick = "radixFocus" === t.positionCaretOnClick ? "lvp" : t.positionCaretOnClick, t.digitsOptional = !1, isNaN(t.digits) && (t.digits = 2), t.decimalProtect = !1);
                    var o = "[+]";
                    if (o += n(t.prefix, t), o += !0 === t.integerOptional ? "~{1," + t.integerDigits + "}" : "~{" + t.integerDigits + "}", t.digits !== i) {
                        t.radixPointDefinitionSymbol = t.decimalProtect ? ":" : t.radixPoint;
                        var a = t.digits.toString().split(",");
                        isFinite(a[0] && a[1] && isFinite(a[1])) ? o += t.radixPointDefinitionSymbol + ";{" + t.digits + "}" : (isNaN(t.digits) || parseInt(t.digits) > 0) && (o += t.digitsOptional ? "[" + t.radixPointDefinitionSymbol + ";{1," + t.digits + "}]" : t.radixPointDefinitionSymbol + ";{" + t.digits + "}")
                    }
                    return o += n(t.suffix, t), o += "[-]", t.greedy = !1, o
                },
                placeholder: "",
                greedy: !1,
                digits: "*",
                digitsOptional: !0,
                radixPoint: ".",
                positionCaretOnClick: "radixFocus",
                groupSize: 3,
                groupSeparator: "",
                autoGroup: !1,
                allowMinus: !0,
                negationSymbol: {
                    front: "-",
                    back: ""
                },
                integerDigits: "+",
                integerOptional: !0,
                prefix: "",
                suffix: "",
                rightAlign: !0,
                decimalProtect: !0,
                min: null,
                max: null,
                step: 1,
                insertMode: !0,
                autoUnmask: !1,
                unmaskAsNumber: !1,
                inputmode: "numeric",
                preValidation: function(e, n, s, o, a) {
                    if ("-" === s || s == a.negationSymbol.front) return !0 === a.allowMinus && (a.isNegative = a.isNegative === i || !a.isNegative, "" === e.join("") || {
                        caret: n,
                        dopost: !0
                    });
                    if (!1 === o && s === a.radixPoint && a.digits !== i && (isNaN(a.digits) || parseInt(a.digits) > 0)) {
                        var r = t.inArray(a.radixPoint, e);
                        if (-1 !== r) return !0 === a.numericInput ? n === r : {
                            caret: r + 1
                        }
                    }
                    return !0
                },
                postValidation: function(n, s, o) {
                    var a = o.suffix.split(""),
                        r = o.prefix.split("");
                    if (s.pos == i && s.caret !== i && !0 !== s.dopost) return s;
                    var l = s.caret != i ? s.caret : s.pos,
                        h = n.slice();
                    o.numericInput && (l = h.length - l - 1, h = h.reverse());
                    var c = h[l];
                    if (c === o.groupSeparator && (c = h[l += 1]), l == h.length - o.suffix.length - 1 && c === o.radixPoint) return s;
                    c !== i && c !== o.radixPoint && c !== o.negationSymbol.front && c !== o.negationSymbol.back && (h[l] = "?", o.prefix.length > 0 && l >= (!1 === o.isNegative ? 1 : 0) && l < o.prefix.length - 1 + (!1 === o.isNegative ? 1 : 0) ? r[l - (!1 === o.isNegative ? 1 : 0)] = "?" : o.suffix.length > 0 && l >= h.length - o.suffix.length - (!1 === o.isNegative ? 1 : 0) && (a[l - (h.length - o.suffix.length - (!1 === o.isNegative ? 1 : 0))] = "?")), r = r.join(""), a = a.join("");
                    var d = h.join("").replace(r, "");
                    if (d = (d = (d = (d = d.replace(a, "")).replace(new RegExp(e.escapeRegex(o.groupSeparator), "g"), "")).replace(new RegExp("[-" + e.escapeRegex(o.negationSymbol.front) + "]", "g"), "")).replace(new RegExp(e.escapeRegex(o.negationSymbol.back) + "$"), ""), isNaN(o.placeholder) && (d = d.replace(new RegExp(e.escapeRegex(o.placeholder), "g"), "")), d.length > 1 && 1 !== d.indexOf(o.radixPoint) && ("0" == c && (d = d.replace(/^\?/g, "")), d = d.replace(/^0/g, "")), d.charAt(0) === o.radixPoint && !0 !== o.numericInput && (d = "0" + d), "" !== d) {
                        if (d = d.split(""), !o.digitsOptional && isFinite(o.digits)) {
                            var u = t.inArray(o.radixPoint, d),
                                p = t.inArray(o.radixPoint, h); - 1 === u && (d.push(o.radixPoint), u = d.length - 1);
                            for (var f = 1; f <= o.digits; f++) o.digitsOptional || d[u + f] !== i && d[u + f] !== o.placeholder.charAt(0) ? -1 !== p && h[p + f] !== i && (d[u + f] = d[u + f] || h[p + f]) : d[u + f] = s.placeholder || o.placeholder.charAt(0)
                        }!0 !== o.autoGroup || "" === o.groupSeparator || c === o.radixPoint && s.pos === i && !s.dopost ? d = d.join("") : (d = e(function(t, e) {
                            var i = "";
                            if (i += "(" + e.groupSeparator + "*{" + e.groupSize + "}){*}", "" !== e.radixPoint) {
                                var n = t.join("").split(e.radixPoint);
                                n[1] && (i += e.radixPoint + "*{" + n[1].match(/^\d*\??\d*/)[0].length + "}")
                            }
                            return i
                        }(d, o), {
                            numericInput: !0,
                            jitMasking: !0,
                            definitions: {
                                "*": {
                                    validator: "[0-9?]",
                                    cardinality: 1
                                }
                            }
                        }).format(d.join(""))).charAt(0) === o.groupSeparator && d.substr(1)
                    }
                    if (o.isNegative && "blur" === s.event && (o.isNegative = "0" !== d), d = r + d, d += a, o.isNegative && (d = o.negationSymbol.front + d, d += o.negationSymbol.back), d = d.split(""), c !== i)
                        if (c !== o.radixPoint && c !== o.negationSymbol.front && c !== o.negationSymbol.back) l = t.inArray("?", d), l > -1 ? d[l] = c : l = s.caret || 0;
                        else if (c === o.radixPoint || c === o.negationSymbol.front || c === o.negationSymbol.back) {
                        var m = t.inArray(c, d); - 1 !== m && (l = m)
                    }
                    o.numericInput && (l = d.length - l - 1, d = d.reverse());
                    var g = {
                        caret: c === i || s.pos !== i ? l + (o.numericInput ? -1 : 1) : l,
                        buffer: d,
                        refreshFromBuffer: s.dopost || n.join("") !== d.join("")
                    };
                    return g.refreshFromBuffer ? g : s
                },
                onBeforeWrite: function(n, s, o, a) {
                    if (n) switch (n.type) {
                        case "keydown":
                            return a.postValidation(s, {
                                caret: o,
                                dopost: !0
                            }, a);
                        case "blur":
                        case "checkval":
                            var r;
                            if ((l = a).parseMinMaxOptions === i && (null !== l.min && (l.min = l.min.toString().replace(new RegExp(e.escapeRegex(l.groupSeparator), "g"), ""), "," === l.radixPoint && (l.min = l.min.replace(l.radixPoint, ".")), l.min = isFinite(l.min) ? parseFloat(l.min) : NaN, isNaN(l.min) && (l.min = Number.MIN_VALUE)), null !== l.max && (l.max = l.max.toString().replace(new RegExp(e.escapeRegex(l.groupSeparator), "g"), ""), "," === l.radixPoint && (l.max = l.max.replace(l.radixPoint, ".")), l.max = isFinite(l.max) ? parseFloat(l.max) : NaN, isNaN(l.max) && (l.max = Number.MAX_VALUE)), l.parseMinMaxOptions = "done"), null !== a.min || null !== a.max) {
                                if (r = a.onUnMask(s.join(""), i, t.extend({}, a, {
                                        unmaskAsNumber: !0
                                    })), null !== a.min && r < a.min) return a.isNegative = a.min < 0, a.postValidation(a.min.toString().replace(".", a.radixPoint).split(""), {
                                    caret: o,
                                    dopost: !0,
                                    placeholder: "0"
                                }, a);
                                if (null !== a.max && r > a.max) return a.isNegative = a.max < 0, a.postValidation(a.max.toString().replace(".", a.radixPoint).split(""), {
                                    caret: o,
                                    dopost: !0,
                                    placeholder: "0"
                                }, a)
                            }
                            return a.postValidation(s, {
                                caret: o,
                                dopost: !0,
                                placeholder: "0",
                                event: "blur"
                            }, a);
                        case "_checkval":
                            return {
                                caret: o
                            }
                    }
                    var l
                },
                regex: {
                    integerPart: function(t, i) {
                        return i ? new RegExp("[" + e.escapeRegex(t.negationSymbol.front) + "+]?") : new RegExp("[" + e.escapeRegex(t.negationSymbol.front) + "+]?\\d+")
                    },
                    integerNPart: function(t) {
                        return new RegExp("[\\d" + e.escapeRegex(t.groupSeparator) + e.escapeRegex(t.placeholder.charAt(0)) + "]+")
                    }
                },
                definitions: {
                    "~": {
                        validator: function(t, n, s, o, a, r) {
                            var l = o ? new RegExp("[0-9" + e.escapeRegex(a.groupSeparator) + "]").test(t) : new RegExp("[0-9]").test(t);
                            if (!0 === l) {
                                if (!0 !== a.numericInput && n.validPositions[s] !== i && "~" === n.validPositions[s].match.def && !r) {
                                    var h = n.buffer.join("");
                                    h = (h = (h = h.replace(new RegExp("[-" + e.escapeRegex(a.negationSymbol.front) + "]", "g"), "")).replace(new RegExp(e.escapeRegex(a.negationSymbol.back) + "$"), "")).replace(/0/g, a.placeholder.charAt(0));
                                    var c = n._buffer.join("");
                                    for (h === a.radixPoint && (h = c); null === h.match(e.escapeRegex(c) + "$");) c = c.slice(1);
                                    l = (h = (h = h.replace(c, "")).split(""))[s] === i ? {
                                        pos: s,
                                        remove: s
                                    } : {
                                        pos: s
                                    }
                                }
                            } else o || t !== a.radixPoint || n.validPositions[s - 1] !== i || (n.buffer[s] = "0", l = {
                                pos: s + 1
                            });
                            return l
                        },
                        cardinality: 1
                    },
                    "+": {
                        validator: function(t, e, i, n, s) {
                            return s.allowMinus && ("-" === t || t === s.negationSymbol.front)
                        },
                        cardinality: 1,
                        placeholder: ""
                    },
                    "-": {
                        validator: function(t, e, i, n, s) {
                            return s.allowMinus && t === s.negationSymbol.back
                        },
                        cardinality: 1,
                        placeholder: ""
                    },
                    ":": {
                        validator: function(t, i, n, s, o) {
                            var a = "[" + e.escapeRegex(o.radixPoint) + "]",
                                r = new RegExp(a).test(t);
                            return r && i.validPositions[n] && i.validPositions[n].match.placeholder === o.radixPoint && (r = {
                                caret: n + 1
                            }), r
                        },
                        cardinality: 1,
                        placeholder: function(t) {
                            return t.radixPoint
                        }
                    }
                },
                onUnMask: function(t, i, n) {
                    if ("" === i && !0 === n.nullable) return i;
                    var s = t.replace(n.prefix, "");
                    return s = (s = s.replace(n.suffix, "")).replace(new RegExp(e.escapeRegex(n.groupSeparator), "g"), ""), "" !== n.placeholder.charAt(0) && (s = s.replace(new RegExp(n.placeholder.charAt(0), "g"), "0")), n.unmaskAsNumber ? ("" !== n.radixPoint && -1 !== s.indexOf(n.radixPoint) && (s = s.replace(e.escapeRegex.call(this, n.radixPoint), ".")), Number(s)) : s
                },
                isComplete: function(t, i) {
                    var n = t.join("");
                    if (t.slice().join("") !== n) return !1;
                    var s = n.replace(i.prefix, "");
                    return s = (s = s.replace(i.suffix, "")).replace(new RegExp(e.escapeRegex(i.groupSeparator), "g"), ""), "," === i.radixPoint && (s = s.replace(e.escapeRegex(i.radixPoint), ".")), isFinite(s)
                },
                onBeforeMask: function(t, n) {
                    if (n.isNegative = i, t = t.toString().charAt(t.length - 1) === n.radixPoint ? t.toString().substr(0, t.length - 1) : t.toString(), "" !== n.radixPoint && isFinite(t)) {
                        var s = t.split("."),
                            o = "" !== n.groupSeparator ? parseInt(n.groupSize) : 0;
                        2 === s.length && (s[0].length > o || s[1].length > o || s[0].length <= o && s[1].length < o) && (t = t.replace(".", n.radixPoint))
                    }
                    var a = t.match(/,/g),
                        r = t.match(/\./g);
                    if (t = r && a ? r.length > a.length ? (t = t.replace(/\./g, "")).replace(",", n.radixPoint) : a.length > r.length ? (t = t.replace(/,/g, "")).replace(".", n.radixPoint) : t.indexOf(".") < t.indexOf(",") ? t.replace(/\./g, "") : t = t.replace(/,/g, "") : t.replace(new RegExp(e.escapeRegex(n.groupSeparator), "g"), ""), 0 === n.digits && (-1 !== t.indexOf(".") ? t = t.substring(0, t.indexOf(".")) : -1 !== t.indexOf(",") && (t = t.substring(0, t.indexOf(",")))), "" !== n.radixPoint && isFinite(n.digits) && -1 !== t.indexOf(n.radixPoint)) {
                        var l = t.split(n.radixPoint)[1].match(new RegExp("\\d*"))[0];
                        if (parseInt(n.digits) < l.toString().length) {
                            var h = Math.pow(10, parseInt(n.digits));
                            t = t.replace(e.escapeRegex(n.radixPoint), "."), t = (t = Math.round(parseFloat(t) * h) / h).toString().replace(".", n.radixPoint)
                        }
                    }
                    return t
                },
                canClearPosition: function(t, e, i, n, s) {
                    var o = t.validPositions[e],
                        a = o.input !== s.radixPoint || null !== t.validPositions[e].match.fn && !1 === s.decimalProtect || o.input === s.radixPoint && t.validPositions[e + 1] && null === t.validPositions[e + 1].match.fn || isFinite(o.input) || e === i || o.input === s.groupSeparator || o.input === s.negationSymbol.front || o.input === s.negationSymbol.back;
                    return !a || "+" != o.match.nativeDef && "-" != o.match.nativeDef || (s.isNegative = !1), a
                },
                onKeyDown: function(i, n, s, o) {
                    var a = t(this);
                    if (i.ctrlKey) switch (i.keyCode) {
                        case e.keyCode.UP:
                            a.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(o.step)), a.trigger("setvalue");
                            break;
                        case e.keyCode.DOWN:
                            a.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(o.step)), a.trigger("setvalue")
                    }
                }
            },
            currency: {
                prefix: "$ ",
                groupSeparator: ",",
                alias: "numeric",
                placeholder: "0",
                autoGroup: !0,
                digits: 2,
                digitsOptional: !1,
                clearMaskOnLostFocus: !1
            },
            decimal: {
                alias: "numeric"
            },
            integer: {
                alias: "numeric",
                digits: 0,
                radixPoint: ""
            },
            percentage: {
                alias: "numeric",
                digits: 2,
                digitsOptional: !0,
                radixPoint: ".",
                placeholder: "0",
                autoGroup: !1,
                min: 0,
                max: 100,
                suffix: " %",
                allowMinus: !1
            }
        })
    }(window.dependencyLib || jQuery, window.Inputmask),
    function(t, e) {
        function i(t, e) {
            var i = (t.mask || t).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""),
                n = (e.mask || e).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""),
                s = (t.mask || t).split("#")[0],
                o = (e.mask || e).split("#")[0];
            return 0 === o.indexOf(s) ? -1 : 0 === s.indexOf(o) ? 1 : i.localeCompare(n)
        }
        var n = e.prototype.analyseMask;
        e.prototype.analyseMask = function(e, i, s) {
            var o = {};
            return s.phoneCodes && (s.phoneCodes && s.phoneCodes.length > 1e3 && (function t(i, n, s) {
                n = n || "", s = s || o, "" !== n && (s[n] = {});
                for (var a = "", r = s[n] || s, l = i.length - 1; l >= 0; l--) e = i[l].mask || i[l], a = e.substr(0, 1), r[a] = r[a] || [], r[a].unshift(e.substr(1)), i.splice(l, 1);
                for (var h in r) r[h].length > 500 && t(r[h].slice(), h, r)
            }((e = e.substr(1, e.length - 2)).split(s.groupmarker.end + s.alternatormarker + s.groupmarker.start)), e = function e(i) {
                var n = [];
                for (var o in i) t.isArray(i[o]) ? 1 === i[o].length ? n.push(o + i[o]) : n.push(o + s.groupmarker.start + i[o].join(s.groupmarker.end + s.alternatormarker + s.groupmarker.start) + s.groupmarker.end) : n.push(o + e(i[o]));
                return "" + (1 === n.length ? n[0] : s.groupmarker.start + n.join(s.groupmarker.end + s.alternatormarker + s.groupmarker.start) + s.groupmarker.end)
            }(o)), e = e.replace(/9/g, "\\9")), n.call(this, e, i, s)
        }, e.extendAliases({
            abstractphone: {
                groupmarker: {
                    start: "<",
                    end: ">"
                },
                countrycode: "",
                phoneCodes: [],
                mask: function(t) {
                    return t.definitions = {
                        "#": e.prototype.definitions[9]
                    }, t.phoneCodes.sort(i)
                },
                keepStatic: !0,
                onBeforeMask: function(t, e) {
                    var i = t.replace(/^0{1,2}/, "").replace(/[\s]/g, "");
                    return (i.indexOf(e.countrycode) > 1 || -1 === i.indexOf(e.countrycode)) && (i = "+" + e.countrycode + i), i
                },
                onUnMask: function(t, e, i) {
                    return e
                },
                inputmode: "tel"
            }
        })
    }(window.dependencyLib || jQuery, window.Inputmask),
    function(t) {
        var e;
        e = window.dependencyLib || jQuery, window.Inputmask.extendAliases({
            Regex: {
                mask: "r",
                greedy: !1,
                repeat: "*",
                regex: null,
                regexTokens: null,
                tokenizer: /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
                quantifierFilter: /[0-9]+[^,]/,
                isComplete: function(t, e) {
                    return new RegExp(e.regex, e.casing ? "i" : "").test(t.join(""))
                },
                definitions: {
                    r: {
                        validator: function(t, i, n, s, o) {
                            function a(t, e) {
                                this.matches = [], this.isGroup = t || !1, this.isQuantifier = e || !1, this.quantifier = {
                                    min: 1,
                                    max: 1
                                }, this.repeaterPart = void 0
                            }

                            function r(t, i) {
                                var n = !1;
                                i && (d += "(", p++);
                                for (var s = 0; s < t.matches.length; s++) {
                                    var a = t.matches[s];
                                    if (!0 === a.isGroup) n = r(a, !0);
                                    else if (!0 === a.isQuantifier) {
                                        var h = e.inArray(a, t.matches),
                                            c = t.matches[h - 1],
                                            u = d;
                                        if (isNaN(a.quantifier.max)) {
                                            for (; a.repeaterPart && a.repeaterPart !== d && a.repeaterPart.length > d.length && !(n = r(c, !0)););
                                            (n = n || r(c, !0)) && (a.repeaterPart = d), d = u + a.quantifier.max
                                        } else {
                                            for (var f = 0, m = a.quantifier.max - 1; m > f && !(n = r(c, !0)); f++);
                                            d = u + "{" + a.quantifier.min + "," + a.quantifier.max + "}"
                                        }
                                    } else if (void 0 !== a.matches)
                                        for (var g = 0; g < a.length && !(n = r(a[g], i)); g++);
                                    else {
                                        var v;
                                        if ("[" == a.charAt(0)) {
                                            v = d, v += a;
                                            for (var b = 0; p > b; b++) v += ")";
                                            n = new RegExp("^(" + v + ")$", o.casing ? "i" : "").test(l)
                                        } else
                                            for (var y = 0, _ = a.length; _ > y; y++)
                                                if ("\\" !== a.charAt(y)) {
                                                    for (v = d, v = (v += a.substr(0, y + 1)).replace(/\|$/, ""), b = 0; p > b; b++) v += ")";
                                                    if (n = new RegExp("^(" + v + ")$", o.casing ? "i" : "").test(l)) break
                                                }
                                        d += a
                                    }
                                    if (n) break
                                }
                                return i && (d += ")", p--), n
                            }
                            var l, h, c = i.buffer.slice(),
                                d = "",
                                u = !1,
                                p = 0;
                            null === o.regexTokens && function() {
                                var t, e, i = new a,
                                    n = [];
                                for (o.regexTokens = []; t = o.tokenizer.exec(o.regex);) switch (e = t[0], e.charAt(0)) {
                                    case "(":
                                        n.push(new a(!0));
                                        break;
                                    case ")":
                                        h = n.pop(), n.length > 0 ? n[n.length - 1].matches.push(h) : i.matches.push(h);
                                        break;
                                    case "{":
                                    case "+":
                                    case "*":
                                        var s = new a(!1, !0),
                                            r = (e = e.replace(/[{}]/g, "")).split(","),
                                            l = isNaN(r[0]) ? r[0] : parseInt(r[0]),
                                            c = 1 === r.length ? l : isNaN(r[1]) ? r[1] : parseInt(r[1]);
                                        if (s.quantifier = {
                                                min: l,
                                                max: c
                                            }, n.length > 0) {
                                            var d = n[n.length - 1].matches;
                                            (t = d.pop()).isGroup || ((h = new a(!0)).matches.push(t), t = h), d.push(t), d.push(s)
                                        } else t = i.matches.pop(), t.isGroup || (h = new a(!0), h.matches.push(t), t = h), i.matches.push(t), i.matches.push(s);
                                        break;
                                    default:
                                        n.length > 0 ? n[n.length - 1].matches.push(e) : i.matches.push(e)
                                }
                                i.matches.length > 0 && o.regexTokens.push(i)
                            }(), c.splice(n, 0, t), l = c.join("");
                            for (var f = 0; f < o.regexTokens.length; f++) {
                                var m = o.regexTokens[f];
                                if (u = r(m, m.isGroup)) break
                            }
                            return u
                        },
                        cardinality: 1
                    }
                }
            }
        })
    }();