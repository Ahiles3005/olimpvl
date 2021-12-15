/**
 * Скрывает элемент hiddenElem при клике за пределами элемента targetElem
 * 
 * @param  {Element} targetElem
 * @param  {Element} hiddenElem
 * @param  {Function} [optionalCb] отрабатывает сразу не дожидаясь завершения анимации
 */
function onOutsideClickHide(targetElem, hiddenElem, optionalCb) {
    $(document).bind('mouseup touchend', function(e) {
        if (!targetElem.is(e.target) && $(e.target).closest(targetElem).length == 0) {
            hiddenElem.stop(true, true).fadeOut(global.animationTime);
            if (optionalCb) {
                optionalCb();
            }
        }
    });
}

/**
 * Хэлпер для показа, скрытия или чередования видимости элементов
 *
 * Использование:
 * <button type="button" data-visibility="show" data-show="#elemId1"></button>
 *
 * или
 * <button type="button" data-visibility="hide" data-hide="#elemId2"></button>
 *
 * или
 * <button type="button" data-visibility="toggle" data-toggle="#elemId3"></button>
 * 
 * или
 * <button type="button" data-visibility="show" data-show="#elemId1|#elemId3"></button>
 * 
 * <div id="elemId1" style="display: none;">Text</div>
 * <div id="elemId2">Text</div>
 * <div id="elemId3" style="display: none;">Text</div>
 */
function visibilityControl() {
    var settings = {
        types: [
            'show',
            'hide',
            'toggle'
        ]
    };

    if ($('[data-visibility]').length > 0) {

        var visibilityCaller = $('[data-visibility]');

        visibilityCaller.on('click', function() {
            for (var i = 0; i < settings.types.length; i++) {
                if ($(this).data(settings.types[i])) {
                    var visibilityList = $(this).data(settings.types[i]).split('|');
                    setVisibility(settings.types[i], visibilityList);
                }
            }

            return false;
        });

        /**
         * Устанавливает видимость
         * @param {String} visibilityType тип отображения
         * @param {Array} list массив элементов, с которым работаем
         */
        function setVisibility(visibilityType, list) {
            for (var i = 0; i < list.length; i++) {
                if (visibilityType == settings.types[0]) {
                    $(list[i]).fadeIn(global.animationTime);
                }

                if (visibilityType == settings.types[1]) {
                    $(list[i]).fadeOut(global.animationTime);
                }

                if (visibilityType == settings.types[2]) {
                    if ($(list[i]).is(':visible')) {
                        $(list[i]).fadeOut(global.animationTime);
                    } else {
                        $(list[i]).fadeIn(global.animationTime);
                    }
                }
            }
        }

    }
}

