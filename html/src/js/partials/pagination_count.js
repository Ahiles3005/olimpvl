function setAttr(new_params, hash) {
    var res = '';
	var d = location.href.split("#")[0].split("?");
	var base = d[0];
	var query = d[1];
	if(query) {
		var params = query.split("&");
		for(var i = 0; i < params.length; i++) {
			var keyval = params[i].split("=");
			//if(keyval[0] != prmName) {
			if((keyval[0] in new_params) == false) {
				res += params[i] + '&';
			}
		}
	}
	$.each(new_params, function(prmName, val) {
		res += prmName + '=' + val + '&';
	});

	window.location.href = base + '?' + res + hash;
	return false;
}

$('.js-product_count').change(function() {

	var params  = {
		'productCount' : $(this).val(),
	};

	setAttr(params, '');
});