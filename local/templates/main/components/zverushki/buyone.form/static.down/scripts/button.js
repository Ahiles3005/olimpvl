(function(window){
	'use strict';

	window.ZverushkiBuyoneButton = function (containerFormId) {
		window.ZverushkiBuyoneButton.superclass.constructor.apply(this, arguments);
	}

	BX.extend(window.ZverushkiBuyoneButton, window.Zverushki.Buyone.__Classes__.Button);

})(window);