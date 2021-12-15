$('.js-products-sort').change(function(){
	window.location = '?sort=' + $(this).val();
});