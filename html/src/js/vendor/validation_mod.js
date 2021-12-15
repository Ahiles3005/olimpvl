/**
 * Created by Fokir on 24.09.2015.
 * Kontora Ivanova
 */
var Validation_MOD = function (form) {
    this.rules = [
        'email',
        'req',
        'min',
        'max',
        'pattern',
        'phone',
        'geooff',
        'compare',
        'date'
    ];
    
    this.scroll_to_error = false;
    this.date_format_split = '.';
    this.date_format = 'dd.mm.yyyy'.split(this.date_format_split);
    this.check_email = function ($input) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test($input.val().trim());
    };
    this.check_date = function ($input) {
        var pattern = new RegExp(/^(0[1-9]|[12]\d|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/);
        return pattern.test($input.val().trim());
    };
    this.check_phone = function ($input) {
        var pattern = new RegExp(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
        return pattern.test($input.val().trim());
    };
    this.check_req = function ($input) {
        if ($input.is('select')) {
            return ($input.find(':checked').attr('value') != '' && $input.find(':checked').attr('value'))
        }
        if ($input.attr('type') == 'checkbox') {
            return $input.filter(':checked').length == 1;
        }
        return $input.val().trim().length > 0;
    };
    this.check_min = function ($input, min) {
        return $input.val().length >= min;
    };
    this.check_max = function ($input, max) {
        return $input.val().length <= max;
    };
    this.check_pattern = function ($input, re) {
        re = new RegExp(re);
        var val = $input.data('value') ? $input.data('value') : $input.val();
        return re.test(val);
    };
    this.check_geooff = function($input){
        //это событие вызывается исключительно по триггеру
        if($input.hasClass('trigger')){
            $input.removeClass('trigger');
            return false;
        }
        return true;
    };
    
    this.check_compare = function($input, id) {
        var comparedValue = $('#' + id).val(),
            currentValue = $input.data('value') ? $input.data('value') : $input.val();
        return currentValue == comparedValue;
    };

    this.go = function ($input, check) {
        check = check || false;
        var return_value = true;
        var rules = $input.data('rules').split(';');
        var self = this;
        var val = $input.val();
        if ($input.attr('type') == 'date') {
            var val_split = val.split('-');
            if(val_split.length==3){
                var return_date = self.date_format.slice();
                if (val_split[0]) {
                    return_date[self.date_format.indexOf('yyyy')] = val_split[0];
                }
                if (val_split[1]) {
                    return_date[self.date_format.indexOf('mm')] = val_split[1];
                }
                if (val_split[2]) {
                    return_date[self.date_format.indexOf('dd')] = val_split[2];
                }
                $input.attr({'data-value': return_date.join(self.date_format_split)});
            }

            if($input.data('value')){
                if(($input.data('value')+'').length == self.date_format.join(self.date_format_split).length){
                    var date_min = calcDate($input.data('min'));
                    var date_max = calcDate($input.data('max'));
                    var date = new Date($input.val());
                    if(date<date_min){
                        $input.val(date_min.getFullYear()+'-'+format_date(date_min.getMonth()+1)+'-'+format_date(date_min.getDate()));
                    }
                    if(date>date_max){
                        $input.val(date_max.getFullYear()+'-'+format_date(date_max.getMonth()+1)+'-'+format_date(date_max.getDate()));
                    }
                } else{
                }
            }
        }
        $.each(rules, function (index, element) {
            rules[index] = rules[index].split('=');
            if ($.inArray(rules[index][0], self.rules) > -1) {
                var $target_text = self.elementErrorText($input);
                var $target_class = self.elementErrorClass($input);
                if (!$target_text) $target_text = $('</div>');
                if (!$target_class) $target_class = $('</div>');
                if (!self['check_' + rules[index][0]]($input, rules[index][1])) {
                    return_value = false;
                    if (check)
                        return false;
                    if ($input.hasClass('Validation_MOD')) {
                        if (self.modeError == 'before') {
                            $target_text.prev().replaceWith($(self.patternErrorText
                                .replace('%ERROR%', self.lang[rules[index][0]])));
                        }
                        if (self.modeError == 'after') {
                            $target_text.next().replaceWith($(self.patternErrorText
                                .replace('%ERROR%', self.lang[rules[index][0]])));
                        }
                        if (self.modeError == 'replace') {
                            $target_text.replaceWith($(self.patternErrorText
                                .replace('%ERROR%', self.lang[rules[index][0]])));
                        }

                        if (self.modeError == 'append') {
                            $target_text.html('').append($(self.patternErrorText
                                .replace('%ERROR%', self.lang[rules[index][0]])));
                        }
                    }
                    else {
                        $target_class.addClass(self.errorClass);
                        if (self.modeError == 'before') {
                            $target_text.before($(self.patternErrorText
                                .replace('%ERROR%', self.lang[rules[index][0]])));
                        }

                        if (self.modeError == 'after') {
                            $target_text.after($(self.patternErrorText
                                .replace('%ERROR%', self.lang[rules[index][0]])));
                        }

                        if (self.modeError == 'replace') {
                            $target_text.replaceWith($(self.patternErrorText
                                .replace('%ERROR%', self.lang[rules[index][0]])));
                        }

                        if (self.modeError == 'append') {
                            $target_text.html('').append($(self.patternErrorText
                                .replace('%ERROR%', self.lang[rules[index][0]])));
                        }
                    }
                    $input.addClass('Validation_MOD');
                    self.showError($input);
                    return return_value;
                } else {
                    if (!check && $input.hasClass('Validation_MOD')) {
                        $input.removeClass('Validation_MOD');

                        if (!$target_class.find('.Validation_MOD').length) {
                            $target_class.removeClass(self.errorClass);
                        }
                        if (!$input.data('group') || !$('[data-group="' + $input.data('group') + '"]').filter('.Validation_MOD').length) {
                            if (self.modeError == 'before') {
                                $target_text.prev().detach();
                            }
                            if (self.modeError == 'after') {
                                $target_text.next().detach();
                            }
                            if (self.modeError == 'replace') {
                                $target_text.html('');
                            }

                            if (self.modeError == 'append') {
                                $target_text.html('');
                            }
                        }

                        self.hideError($input);
                    }
                }
            }
        });
        return return_value;
    };
    this.patternErrorText = '<div>%ERROR%</div>';
    this.modeError = 'after'; //before, replace, append
    this.errorClass = 'error';

    this.elementErrorText = function ($input) {
        return $input;
    };
    this.elementErrorClass = function ($input) {
        return $input;
    };

    this.showError = function ($input) {

    };

    this.hideError = function ($input) {

    };
    
    var self = this;
    
    function isCorrect(form, selectors) {
        var isError = false;
        form.find(selectors.not(':hidden')).each(function () {
            if (!self.go($(this), true)) {
                isError = true;
                return false;
            }
        });
        return !isError;
    }
    
    this.form_submit = function ($form, $selectors) {
        if (typeof $selectors != 'object') {
            $selectors = $($selectors);
        }
        if (typeof $form != 'object') {
            $form = $($form);
        }
        var self = this;
        $form.submit(function (e) {   
            $(this).find($selectors.not(':hidden')).each(function () {
                if (!self.go($(this))) {
                    $(this).addClass('wrong-input');
                    e.preventDefault();
                } else {
                    $(this).removeClass('wrong-input');
                }
                if ($(this).closest('#checkout').length || $(this).closest('#checkout-authorized').length) {
                    correctErrorWidths();
                }
            });
            if (self.scroll_to_error) {
                var $firts_error = $('.Validation_MOD', $(this)).not(':hidden').first();
                if ($firts_error.length) {
                    $('html, body').animate({scrollTop: $firts_error.offset().top - 100}, 400, function () {
                        $firts_error.focus();
                    });
                }
            }
            if ($(this).hasClass('form-signup')) {
                var button = $('.b-popup-feedback__input-popup--sign-up');
                isCorrect($form, $selectors) ? button.attr('data-disabled', false) : button.attr('data-disabled', true);
            }
        });
    };

    this.keyup = function ($selector) {
        if (typeof $selector != 'object') {
            $selector = $($selector);
        }
        var self = this;
        $selector.keyup(function () {
            if (!self.go($(this))) {
                $(this).addClass('wrong-input');
            } else {
                $(this).removeClass('wrong-input');
            }
            if ($(this).closest('form').hasClass('form-signup')) {
                var button = $('.b-popup-feedback__input-popup--sign-up');
                isCorrect($(this).closest('form'),$('.js-validation-change')) ? button.attr('data-disabled', false) : button.attr('data-disabled', true);
            }
            if ($(this).closest('#checkout').length || $(this).closest('#checkout-authorized').length) {
                correctErrorWidths();
            }
        }).on('show_error', function(e, param){
            console.log(param);
        });
    };
};

/**
 * Настраивает особые размеры извещений об ошибках на странице checkout.html
 */
function correctErrorWidths() {

    calculateErrorWidth($('.b-form__input--phone'));
    calculateErrorWidth($('.b-form__textarea--payment'));
    calculateErrorWidth($('.b-form__input--date'));

    /*Нужно, чтобы ошибка помещалась в блок*/
    if ($('.b-form__input--date + .error-message').length)
        $('.delivery-mobile').css('padding-bottom', '30px');
    else
        $('.delivery-mobile').css('padding-bottom', '');
    
    if ($('.b-form__input--date + .error-message').length)
        $('.delivery-authorized-mobile').css('padding-bottom', '30px');
    else
        $('.delivery-authorized-mobile').css('padding-bottom', '');
}

/**
 * Вспомогательная функция для correctErrorWidths()
 * @param {object} cur Нужный элемент
 */
function calculateErrorWidth(cur) {
    
    if (!cur.length)
        return;
    
    var curWidth = parseInt(cur.css('width'))
                   parseInt(cur.css('padding-left')) + 
                   parseInt(cur.css('padding-right')) + 
                   parseInt(cur.css('border-left-width')) + 
                   parseInt(cur.css('border-right-width'));

    cur.next('.error-message').css('min-width', curWidth + 'px');
    cur.next('.error-message').css('width', 'auto');
    
}