(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function ($) {
    var pluses = /\+/g;
    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }
    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }
    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }
    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }
        try {
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch(e) {}
    }
    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }
    var config = $.cookie = function (key, value, options) {
        if (value != undefined) {
            $.post('/ajax/geo.php');
        }
        if (arguments.length > 1 && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);
            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
            }
            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }
        var result = key ? undefined : {},
            cookies = document.cookie ? document.cookie.split('; ') : [],
            i = 0,
            l = cookies.length;
        for (; i < l; i++) {
            var parts = cookies[i].split('='),
                name = decode(parts.shift()),
                cookie = parts.join('=');
            if (key === name) {
                result = read(cookie, value);
                break;
            }
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }
        return result;
    };
    config.defaults = {};
    $.removeCookie = function (key, options) {
        $.cookie(key, '', $.extend({}, options, { expires: -1 }));
        return !$.cookie(key);
    };
}));
if(!$.cookie('KEY_CITY')) {
    $.getScript("https://api-maps.yandex.ru/2.0-stable/?load=package.standard&lang=ru-RU", function (data, textStatus, jqxhr) {
        var reserveCords = {
            latitude: 0,
            longitude: 0
        };
        var Cords = {
            latitude: 0,
            longitude: 0
        };

        if (window['ymaps']) {
            ymaps.ready(function () {
                reserveCords.latitude = ymaps.geolocation.latitude;
                reserveCords.longitude = ymaps.geolocation.longitude;
            });
        }

        var searchCity = function (c) {
            var dis = 999999999;
            var key = null;

            $('#bitrix_search_location').find('[value]').each(function () {
                var split = $(this).attr('value').split(';');
                var o = {
                    key: split[0],
                    latitude: split[1],
                    longitude: split[2]
                };
                var distance = Math.sqrt(Math.pow(o.latitude - c.latitude, 2) + Math.pow(o.longitude - c.longitude, 2));
                if (dis > distance) {
                    dis = distance;
                    key = o.key;
                }
            });
            $.cookie('KEY_CITY', key, { expires: 365, path: '/' });
            //Изначально поставить город
            $.post('/ajax/geo.php', function() {
                window.location.reload();
            });
        }

        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                Cords.latitude = position.coords.latitude;
                Cords.longitude = position.coords.longitude;
                searchCity(Cords);
            }, function () {
                searchCity(reserveCords);
            });
        } else {
            searchCity(reserveCords);
        }

    });
}
