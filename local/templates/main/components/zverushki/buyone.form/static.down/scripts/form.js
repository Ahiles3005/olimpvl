(function(window){
	'use strict';

	window.ZverushkiBuyoneForm = function (params) {
		params.errorClassName = 'ierror';
		params.successClassName = 'fsuccess';

		window.ZverushkiBuyoneForm.superclass.constructor.apply(this, arguments);
	};

	BX.extend(window.ZverushkiBuyoneForm, window.Zverushki.Buyone.__Classes__.Form);

})(window);