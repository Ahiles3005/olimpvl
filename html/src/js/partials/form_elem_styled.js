(function($) {
	// custom select
	$.fn.styleSelectField = function(options) {

		var boxClassName = 'field-bl_type_select';
		var textClassName = 'field-bl_type_select__tx';
		var customClassName = this.prop('class');

		var wrapper = '<div class="field-bl ' + boxClassName + ' ' + customClassName + '" />';
		var text = '<span class="' + textClassName + '" />';

		this.each(function() {

			$(this).wrap(wrapper).before(text);

			// после загрузки выбираем первый option
			setFirstOption($(this));

			$(this).on('focus', function() {
				onSelectFocus($(this));
			});

			$(this).on('blur', function() {
				onSelectBlur($(this));
			});

			$(this).on('change', function () {
				onSelectChange($(this));
			});

			if ($(this).is(':disabled')) {
				$(this).closest('.' + boxClassName).addClass('disabled');
			}

			$(this).closest('form').on('submit', function () {
				onFormSubmit($(this));
			});

		});

		function onSelectFocus(elem) {
			elem.closest('.' + boxClassName).addClass('focus');
		}

		function onSelectBlur(elem) {
			elem.closest('.' + boxClassName).removeClass('focus');
		}

		function onSelectChange(elem) {
			// для валидации плагином http://jqueryvalidation.org/

			// дергаем валидацию поля
			// $('form').validate().element(elem);

			// обнуляем классы валидации
			// elem.closest('.' + boxClassName).removeClass('error-field valid');

			// получаем и ставим новые классы валидации
			// customClassName = elem.prop('class');
			// elem.closest('.' + boxClassName).addClass(customClassName);

			var selected = elem.find('option:selected').text();
			elem.siblings('.' + textClassName).text(selected);
		}

		function setFirstOption(elem) {
			var selected = elem.find('option:selected').text();

			if (selected) {
				elem.siblings('.' + textClassName).text(selected);
			} else {
				var first = elem.find('option:first-child').text();
				elem.siblings('.' + textClassName).text(first);
			}
		}

		function onFormSubmit(form) {
			var elems = $(form).find('select');
			elems.each(function() {
				customClassName = $(this).prop('class');
				$(this).closest('.' + boxClassName).addClass(customClassName);
			});
		}

	};

	// custom file field
	$.fn.styleFileField = function(options) {

		var boxClassName = 'field-bl_type_file';
		var textClassName = 'field-bl_type_file__tx';
		var customClassName = this.prop('class');

		var wrapper = '<div class="field-bl ' + boxClassName + ' ' + customClassName + '" />';
		var textField = '<input class="' + textClassName + '" type="text" value="" name="" readonly>';
		var button = '<a class="btn" title="выберите файл">Обзор...</a>';

		this.each(function() {

			$(this).wrap(wrapper).after(textField).wrap(button);

			$(this).on('change', function () {
				onFileFieldChange($(this));
			});

			$(this).on('focus', function() {
				onFileFieldFocus($(this));
			});

			$(this).on('blur', function() {
				onFileFieldBlur($(this));
			});

			if ($(this).is(':disabled')) {
				$(this).closest('.' + boxClassName).addClass('disabled').end()
					   .closest('.' + boxClassName).find('button, .' + textClassName).prop('disabled', true);
			}

		});

		function onFileFieldChange(elem) {
			var elemTextField = elem.closest('.' + boxClassName).find('.' + textClassName);
			var selected = elem.val();
			elemTextField.attr('value', selected);
		}

		function onFileFieldFocus(elem) {
			elem.closest('.' + boxClassName).addClass('focus');
		}

		function onFileFieldBlur(elem) {
			elem.closest('.' + boxClassName).removeClass('focus');
		}

	};

	// custom radio and checkbox
	$.fn.styledCheck = function(options) {

		var self = this;

		this.each(function() {
			$(this).attr('checked', $(this).attr('checked'))
			if ($(this).prop('checked')) {
				$(this).parent('label').addClass('active');
			}
			if ($(this).prop('disabled')) {
				$(this).parent('label').addClass('disabled');
			}

		});

		this.on('click', onCheckClick);

		function onCheckClick() {
			self.switchState($(this));
		}

		this.switchState = function(elem) {

			if (elem.prop('type') == 'checkbox') {
				elem.parent().toggleClass('active');
			} else {
				var elemName = elem.attr('name');
				$('[name="' + elemName + '"]').parent('label').removeClass('active');
				elem.parent('label').addClass('active');
			}

		};

	};
})(jQuery);