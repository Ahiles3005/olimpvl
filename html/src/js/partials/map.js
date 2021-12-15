$(function() {
    
    if (!window.ymaps) return;

    var map1, map2, mapShops;
    
    /*Инициализация/перерисовка карт для попапов*/
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var href = $(e.target).attr("href");
        if (href == '#tab11' || href == '#tab13') {
            if (!$('ymaps', $(href)).length) 
                ymaps.ready(init);
            else {
                map1.container.fitToViewport();
                map2.container.fitToViewport();
            }
        }
    });
    
    /*Инициализация карты*/
    if (!$('ymaps').length) {
        ymaps.ready(init);
    }
    
    /**
     * Создаёт карту
     */
    function init () {
        
        $.ajax({

            //url: 'json/mapobjects.json',
            url: '/ajax/shops.php',
            method: 'GET',
            dataType: 'json',
            success: function (json) {

                var options = [
                    {
                        center: json['center'],
                        zoom: 12,
                        controls: [],
                        behaviors: ['drag', 'scrollZoom']
                    },
                    {
                        suppressMapOpenBlock: true
                    }
                ];

                /*
                Контейнеры для карт:
                #map1 - Попап выбора магазина
                #map2 - Попап выбора магазина для заказа
                #map - Карта магазинов
                */
                if ($('#map1').length) {
                    map1 = new ymaps.Map('map1', options[0], options[1]);
                    configureMap(map1);
                }

                if ($('#map2').length) {
                    map2 = new ymaps.Map('map2', options[0], options[1]);
                    configureMap(map2, true);
                }

                if ($('#map').length) {
                    mapShops = new ymaps.Map('map', options[0], options[1]);
                    mapShops.behaviors.disable("scrollZoom");
                    /*Кастомный ползунок зума*/
                    mapShops.controls.add(new ymaps.control.ZoomControl({options: { position: { right: 20, top: 180 }}}));
                    configureMap(mapShops);
                }

                /*Кастомный скроллбар для карты магазинов*/
                $('.b-shops__container').mCustomScrollbar({
                    theme: "olimp",
                    scrollInertia: 100,
                    scrollAmount: 100
                });

                /**
                 * Настраивает карту
                 * @param {object}  map   Объект карты
                 * @param {boolean} stock Отсутствие товара на складе
                 */
                function configureMap(map, stock) {
                if (json['cities'].length > 0) {

                    var html = '';

                    var BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
                            '<div class="b-mapballoon">' +
                                '<div class="b-mapballoon__name">{{properties.name}}</div>' +
                                '<div class="b-mapballoon__info">{{properties.address}}<br />' +
                                '{{properties.telephone}}<br />' +
                                '{{properties.worktime}}</div>' +
                            '</div>');

                    for (var i = 0; i < json['cities'].length; i++) {

                        html += '<h3 class="b-shops__city">' + json['cities'][i]['name'] + '</h3>';

                        for (var j = 0; j < json['cities'][i]['shops'].length; j++) {

                            var shop = json['cities'][i]['shops'][j];
                            var address = (shop['address']) ? shop['address'] : " ";
                            var telephone = (shop['telephone']) ? shop['telephone'] : " ";
                            var worktime = (shop['worktime']) ? shop['worktime'] : " ";

                            html += '<div class="b-shops__shop">\
                            <a href="javascript: void(0);" id="shop_id' + shop['id'] + '" class="b-shops__name">' + shop['name'] + '</a>\
                            <div class="b-shops__address">' + address + '</div>\
                            <div class="b-shops__telephone">' + telephone + '</div>\
                            <div class="b-shops__worktime">' + worktime + '</div>\
                            </div>';

                            var markerPath;
                            if (stock && !shop.available)
                                markerPath = '/html/build/img/map_placemark_not_available.png';
                            else
                                markerPath = '/html/build/img/map_placemark.png';

                            var myPlacemark = new ymaps.Placemark([shop['coordinates'][0], shop['coordinates'][1]], {
                                city: json['cities'][i]['name'],
                                name: shop['name'],
                                address: shop['address'],
                                telephone: shop['telephone'],
                                worktime: shop['worktime']
                            }, {
                                balloonContentLayout: BalloonContentLayout,
                                balloonPanelMaxMapArea: 0,
                                iconLayout: 'default#image',
                                iconImageHref: markerPath,
                                iconImageSize: [32, 46],
                                iconImageOffset: [-3, -42]
                            });

                            $('.b-shops__container').append(html);
                            html = '';

                            $('#shop_id' + shop['id']).attr('data-coord_1', shop['coordinates'][1]);
                            $('#shop_id' + shop['id']).attr('data-coord_0', shop['coordinates'][0]);

                            map.geoObjects.add(myPlacemark);
                        }
                    }

                    /*Центрирование на магазине при клике по имени (для shops.html)*/
                    $('.b-shops__name').on('click', function() {
                        map.setCenter(
                            [$(this).attr('data-coord_0'), $(this).attr('data-coord_1')],
                            14,
                            {
                                'duration': 600,
                                'checkZoomRange': true
                            }
                        );
                    });
                }

                /*Сразу переходим к выбранному магазину на странице магазинов (для shops.html)*/
                var city = $(".dk-select-options .dk-option-selected").text();
                $('.b-shops__city:contains(' + city + ')').next().find("a").click();
            }
            }
        });
    }
});