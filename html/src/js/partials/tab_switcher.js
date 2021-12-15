/**
 * Реализует переключение вкладок
 * 
 * @param  {Object} options
 *
 * Использование:
 * $('.tabs').tabSwitcher();
 *
 * Callback отрабатывает после переключения вкладки
 * @elem вкладка, на которую переключились
 * $('.tabs').tabSwitcher({
 *     afterSwitch: function(elem) {
 *         console.log(elem);
 *     }
 * });
 */
$.fn.tabSwitcher = function(options) {
    var self = this;

    var optionsCustom = {
        // callback functions
        afterSwitch: (options && $.isFunction(options.afterSwitch)) ? options.afterSwitch : function() {}
    };

    this.each(function() {
        $(this).on('click', '[data-tabs-target="true"]', onTabClick);
    });

    function onTabClick() {
        self.switchTab($(this));
        return false;
    }

    this.switchTab = function(elem) {
        // switching tab
        var selfId = elem.closest(self).prop('id'),
            contentId = elem.closest(self).data('tabs-cnt'),
            contentItemId = elem.data('tabs-item');

        $('#' + selfId).find('[data-tabs-target="true"]').removeClass('active');
        elem.addClass('active');

        $(contentId).find($(contentItemId)).siblings().removeClass('active').end().addClass('active');

        optionsCustom.afterSwitch(elem);
    };
};