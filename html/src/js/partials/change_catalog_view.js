 function catalog_tile_template(data) {
	var html = '<li class="b-product__item">';

		if (data['new'] == 1 || data['best_price'] == 1 || data['best'] == 1 || data['sale'] == 1) {
			html += '<div class="b-product__item--badge">';

			if (data['new'] == 1)
	        	html += '<a class="b-product__item--badge--item b-product__item--badge--new" title="Новинка" data-tooltip="right"></a>';

	        if (data['best_price'] == 1)
	        	html += '<a class="b-product__item--badge--item b-product__item--badge--best-price" title="Лучшая цена" data-tooltip="right"></a>';

	        if (data['best'] == 1)
	        	html += '<a class="b-product__item--badge--item b-product__item--badge--best-choice" title="Лучший выбор" data-tooltip="right"></a>';

	        if (data['sale'] == 1)
	        	html += '<a class="b-product__item--badge--item b-product__item--badge--discount" title="Скидка" data-tooltip="right"></a>';

			html += '</div>';
        }

		html += '<a href="' + data['url'] + '" class="b-product__item--name">\
		<div class="b-product__image-owerflow">\
			<div class="b-product__image-owerflow-horisontal"><img class="b-product__item--image" src="' + data['image'] +'" alt="' + data['name'] +'"></div>\
			</div>\
		<p class="b-product__item-text">' + data['name'] +'</p></a>\
		<div class="b-product__item--footer">';

		if (data['favorite'] == '1')
			html += '<a class="b-product__item--add-favorites b-product__item--add-favorites--active" href="javascript: void(0);" title="В избранном" data-tooltip="right" style="display: none"></a>';//2 спринт
		else
			html += '<a class="b-product__item--add-favorites" href="javascript: void(0);" title="В избранное" data-tooltip="right" style="display: none"></a>';//2 спринт

		html += '<a class="b-product__item--add-compare b-product__item--add-compare--active" href="javascript: void(0);" title="Сравнить" data-tooltip="right" style="display: none"></a>\
		<div class="b-product__item--price">';
			if (data['newprice'] != data['oldprice']) {
				html += '<span class="b-product__item--discount" data-discount="' + data['discount'] + '">-' + data['discount'] + '%</span>\
				<span class="b-product__item--priceold-line-through"><span class="b-product__item--priceold" data-price="' + data['oldprice'] + '">' + data['oldprice'] + '<span class="b-rouble">q</span></span></span>';
			}
			html += '<span class="b-product__item--pricenew b-price-large" data-price="' + data['newprice'] + '">' + data['newprice'] + '<span class="b-rouble">a</span></span>\
		</div>\
		</div>\
		<input type="hidden" name="artikcul" value="' + data['articul'] + '" />\
	</li>';

	return html;
}

function catalog_tile_template_all(html) {
	var html_all = '<div class="b-product b-product--inner">\
		<ul class="b-product__list">' + html + '</ul>\
    </div>';

    return html_all;
}

function catalog_imagelist_template(data) {
	var html = '<div class="b-catalog-photo__item">\
        <div class="b-catalog-photo__item--photo">\
            <a href="' + data['url'] + '" title="' + data['name'] + '" class="">\
                <img class="" src="' + data['image'] + '" alt="' + data['name'] + '" title="' + data['name'] + '" />\
            </a>\
        </div>\
        <div class="b-catalog-photo__item--text">\
            <a href="' + data['url'] + '" class="">' + data['name'] + '</a>';
            if (data['articul'] && data['articul'] !== 'undefined')
            	html += '<span class="b-catalog-photo__item--bar-code" data-articul="' + data['articul'] + '">Артикул ' + data['articul'] + '</span>';
        html += '</div>';

        if (data['new'] == 1 || data['best_price'] == 1 || data['best'] == 1 || data['sale'] == 1) {
			html += '<div class="b-product__item--badge">';

			if (data['new'] == 1)
	        	html += '<a class="b-product__item--badge--item b-product__item--badge--new" title="Новинка" data-tooltip="right"></a>';

	        if (data['best_price'] == 1)
	        	html += '<a class="b-product__item--badge--item b-product__item--badge--best-price" title="Лучшая цена" data-tooltip="right"></a>';

	        if (data['best'] == 1)
	        	html += '<a class="b-product__item--badge--item b-product__item--badge--best-choice" title="Лучший выбор" data-tooltip="right"></a>';

	        if (data['sale'] == 1)
	        	html += '<a class="b-product__item--badge--item b-product__item--badge--discount" title="Скидка" data-tooltip="right"></a>';

			html += '</div>';
        }

        if (data['newprice'] != data['oldprice']) {
        	/*html += '<div class="b-catalog-photo__item--badge b-catalog-photo__item--badge-discount text-uppercase">Скидка ' + data['discount'] + '%</div>'; */
        	html += '<span class="b-catalog-photo__item--discount" data-discount="' + data['discount'] + '">-' + data['discount'] + '%</span>\
        	<span class="b-catalog-photo__item--priceold-line-through"><span class="b-catalog-photo__item--priceold" data-price="' + data['oldprice'] + '">' + data['oldprice'] + '<span class="b-rouble">q</span></span></span>';
       	}
        html +='<p class="b-price-large b-catalog-photo__item--price" data-price="' + data['newprice'] + '">' + data['newprice'] +'<span class="b-rouble">a</span></span></p>';

		if (data['favorite'] == '1')
			html += '<a class="b-catalog-photo__item--add-favorites b-catalog-photo__item--add-favorites--active" href="javascript: void(0);" title="В избранном" style="display: none"></a>';//2 спринт
		else
			html += '<a class="b-catalog-photo__item--add-favorites" href="javascript: void(0);" title="В избранное" style="display: none"></a>';//2 спринт

        html += '<a class="b-catalog-photo__item--add-compare" href="javascript: void(0);" title="Сравнить" data-tooltip="right" style="display: none"></a>\
    </div>';

	return html;
}

function catalog_imagelist_template_all(html) {
	var html_all = '<div class="b-catalog-photo">\
        <div class="b-catalog-photo__list">' + html + '</div>\
    </div>';

    return html_all;
}

function catalog_list_template(data) {
	var html = '<div class="b-catalog-photo__item b-catalog-photo__item--no-photo">\
        <div class="b-catalog-photo__item--photo b-catalog-photo__item--photo-hidden">\
            <a href="' + data['url'] +'" title="' + data['name'] + '" class="">\
                <img class="" src="' + data['image'] + '" alt="' + data['name'] + '" title="' + data['name'] + '">\
            </a>\
        </div>\
        <div class="b-catalog-photo__item--text b-catalog-photo__item--text-no-photo">\
            <a href="' + data['url'] +'" class="">' + data['name'] + '</a>';
            if (data['articul'] && data['articul'] !== 'undefined')
            	html += '<span class="b-catalog-photo__item--bar-code b-catalog-photo__item--bar-code-no-photo" data-articul="' + data['articul'] + '">Артикул ' + data['articul'] + '</span>';
        html += '</div>';

        if (data['new'] == 1 || data['best_price'] == 1 || data['best'] == 1 || data['sale'] == 1) {
			html += '<div class="b-product__item--badge">';

			if (data['new'] == 1)
	        	html += '<a class="b-product__item--badge--item b-product__item--badge--new" title="Новинка" data-tooltip="right"></a>';

	        if (data['best_price'] == 1)
	        	html += '<a class="b-product__item--badge--item b-product__item--badge--best-price" title="Лучшая цена" data-tooltip="right"></a>';

	        if (data['best'] == 1)
	        	html += '<a class="b-product__item--badge--item b-product__item--badge--best-choice" title="Лучший выбор" data-tooltip="right"></a>';

	        if (data['sale'] == 1)
	        	html += '<a class="b-product__item--badge--item b-product__item--badge--discount" title="Скидка" data-tooltip="right"></a>';

			html += '</div>';
        }

        if (data['newprice'] != data['oldprice']) {
	        html += '<span class="b-catalog-photo__item--discount" data-discount="' + data['discount'] + '">-' + data['discount'] + '%</span>\
	        <span class="b-catalog-photo__item--priceold-line-through"><span class="b-catalog-photo__item--priceold" data-price="' + data['oldprice'] + '">' + data['oldprice'] + '<span class="b-rouble">q</span></span></span>';
        }
        html += '<p class="b-price-large b-catalog-photo__item--price" data-price="' + data['newprice'] + '">' + data['newprice'] + '<span class="b-rouble">a</span></p>';

        if (data['favorite'] == '1')
        	html += '<a class="b-catalog-photo__item--add-favorites b-catalog-photo__item--add-favorites--active" href="javascript: void(0);" title="В избранном" style="display: none"></a>';//2 спринт
        else
        	html += '<a class="b-catalog-photo__item--add-favorites" href="javascript: void(0);" title="В избранное" style="display: none"></a>';//2спринт

        html += '<a class="b-catalog-photo__item--add-compare" href="javascript: void(0);" title="Сравнить" data-tooltip="right" style="display: none"></a>\
    </div>';

	return html;
}

function catalog_list_template_all(html) {
	var html_all = '<div class="b-catalog-photo b-catalog-no-photo">\
        <div class="b-catalog-photo__list">' + html + '</div>\
    </div>';

    return html_all;
}

function change_catalog_type(current) {
	$('.b-catalog-type__link--active').removeClass('b-catalog-type__link--active');
	current.addClass('b-catalog-type__link--active');
	var catalogType = getCatalogType();
	document.cookie  = 'CATALOG_TYPE=' + catalogType + '; path=/';
}

function change_nav_links(type_old, type_new) {
	if ($('.b-catalog-navigation__list').length) {
		$('.b-catalog-navigation__list li').each(function() {
			var cur_url = $(this).find('.b-catalog-navigation__link').attr('href');
			$(this).find('.b-catalog-navigation__link').attr('href', cur_url.replace(type_old, type_new));
		});
	}
}

function getCatalogType() {
	if ($('.b-catalog-type__link--active').hasClass('b-catalog-type__link--tile'))
		var catalog_type = 'tile';
	else if ($('.b-catalog-type__link--active').hasClass('b-catalog-type__link--imagelist'))
		var catalog_type = 'imagelist';
	else if ($('.b-catalog-type__link--active').hasClass('b-catalog-type__link--list'))
		var catalog_type = 'list';

	return catalog_type;
}

$('.b-catalog-type__link').on('click', function() {
	var current_type = $(this);
	var html = '';

	if ($(this).hasClass('b-catalog-type__link--active') == false) {
		if ($('.b-catalog-type__link--active').hasClass('b-catalog-type__link--tile')) {
			change_catalog_type(current_type);

			$('.b-product__item').each(function() {
				var item_data = [];
				item_data['name']        = $(this).find('.b-product__item--name').text();
				item_data['url']         = $(this).find('.b-product__item--name').attr('href');
				item_data['image']       = $(this).find('.b-product__item--image').attr('src');
				item_data['favorite']    = $(this).find('.b-product__item--add-favorites').hasClass('b-product__item--add-favorites--active');
				item_data['articul']     = $(this).find('input[name="artikcul"]').val();
				item_data['newprice']    = $(this).find('.b-price-large').attr('data-price');

				if ($(this).find('.b-product__item--badge--new').length)
					item_data['new'] = 1;
				else
					item_data['new'] = 0;

				if ($(this).find('.b-product__item--badge--best-price').length)
					item_data['best_price'] = 1;
				else
					item_data['best_price'] = 0;

				if ($(this).find('.b-product__item--badge--best-choice').length)
					item_data['best'] = 1;
				else
					item_data['best'] = 0;

				if ($(this).find('.b-product__item--badge--discount').length)
					item_data['sale'] = 1;
				else
					item_data['sale'] = 0;

				if ($(this).find('.b-product__item--priceold').length)
					item_data['oldprice'] = $(this).find('.b-product__item--priceold').attr('data-price');
				else
					item_data['oldprice'] = item_data['newprice'];

				if ($(this).find('.b-product__item--discount').length)
					item_data['discount'] = $(this).find('.b-product__item--discount').attr('data-discount');
				else
					item_data['discount'] = 0;

				if (current_type.hasClass('b-catalog-type__link--imagelist'))
					html += catalog_imagelist_template(item_data);
			    else if (current_type.hasClass('b-catalog-type__link--list'))
			    	html += catalog_list_template(item_data);
			});

			if (current_type.hasClass('b-catalog-type__link--imagelist')) {
				var html_all = catalog_imagelist_template_all(html);
				change_nav_links('tile', 'imagelist');
			} else if (current_type.hasClass('b-catalog-type__link--list')) {
				var html_all = catalog_list_template_all(html);
				change_nav_links('tile', 'list');
			}

		    $('.b-product').replaceWith(html_all);

		} else if ($('.b-catalog-type__link--active').hasClass('b-catalog-type__link--imagelist')) {
			change_catalog_type(current_type);

			$('.b-catalog-photo__item').each(function() {
				var item_data = [];
				item_data['name']        = $(this).find('.b-catalog-photo__item--text a').text();
				item_data['url']         = $(this).find('.b-catalog-photo__item--text a').attr('href');
				item_data['image']       = $(this).find('.b-catalog-photo__item--photo img').attr('src');
				item_data['favorite']    = $(this).find('.b-product__item--add-favorites').hasClass('b-product__item--add-favorites--active');
				item_data['articul']     = $(this).find('.b-catalog-photo__item--bar-code').attr('data-articul');
				item_data['newprice']    = $(this).find('.b-price-large').attr('data-price');

				if ($(this).find('.b-product__item--badge--new').length)
					item_data['new'] = 1;
				else
					item_data['new'] = 0;

				if ($(this).find('.b-product__item--badge--best-price').length)
					item_data['best_price'] = 1;
				else
					item_data['best_price'] = 0;

				if ($(this).find('.b-product__item--badge--best-choice').length)
					item_data['best'] = 1;
				else
					item_data['best'] = 0;

				if ($(this).find('.b-product__item--badge--discount').length)
					item_data['sale'] = 1;
				else
					item_data['sale'] = 0;

				if ($(this).find('.b-catalog-photo__item--priceold').length)
					item_data['oldprice'] = $(this).find('.b-catalog-photo__item--priceold').attr('data-price');
				else
					item_data['oldprice'] = item_data['newprice'];

				if ($(this).find('.b-catalog-photo__item--discount').length)
					item_data['discount'] = $(this).find('.b-catalog-photo__item--discount').attr('data-discount');
				else
					item_data['discount'] = 0;

				if (current_type.hasClass('b-catalog-type__link--tile')) {
					html += catalog_tile_template(item_data);
					change_nav_links('imagelist', 'tile');
				} else if (current_type.hasClass('b-catalog-type__link--list')) {
			    	html += catalog_list_template(item_data);
			    	change_nav_links('imagelist', 'list');
			    }
			});

			if (current_type.hasClass('b-catalog-type__link--tile'))
				var html_all = catalog_tile_template_all(html);
			else if (current_type.hasClass('b-catalog-type__link--list'))
				var html_all = catalog_list_template_all(html);

		    $('.b-catalog-photo').replaceWith(html_all);
		} else if ($('.b-catalog-type__link--active').hasClass('b-catalog-type__link--list')) {
			change_catalog_type(current_type);

			$('.b-catalog-photo__item').each(function() {
				var item_data = [];
				item_data['name']        = $(this).find('.b-catalog-photo__item--text a').text();
				item_data['url']         = $(this).find('.b-catalog-photo__item--text a').attr('href');
				item_data['image']       = $(this).find('.b-catalog-photo__item--photo img').attr('src');
				item_data['favorite']    = $(this).find('.b-catalog-photo__item--add-favorites').hasClass('b-catalog-photo__item--add-favorites--active');
				item_data['articul']     = $(this).find('.b-catalog-photo__item--bar-code').attr('data-articul');
				item_data['newprice']    = $(this).find('.b-price-large').attr('data-price');

				if ($(this).find('.b-product__item--badge--new').length)
					item_data['new'] = 1;
				else
					item_data['new'] = 0;

				if ($(this).find('.b-product__item--badge--best-price').length)
					item_data['best_price'] = 1;
				else
					item_data['best_price'] = 0;

				if ($(this).find('.b-product__item--badge--best-choice').length)
					item_data['best'] = 1;
				else
					item_data['best'] = 0;

				if ($(this).find('.b-product__item--badge--discount').length)
					item_data['sale'] = 1;
				else
					item_data['sale'] = 0;

				if ($(this).find('.b-catalog-photo__item--priceold').length)
					item_data['oldprice'] = $(this).find('.b-catalog-photo__item--priceold').attr('data-price');
				else
					item_data['oldprice'] = item_data['newprice'];

				if ($(this).find('.b-catalog-photo__item--discount').length)
					item_data['discount'] = $(this).find('.b-catalog-photo__item--discount').attr('data-discount');
				else
					item_data['discount'] = 0;

				if (current_type.hasClass('b-catalog-type__link--tile'))
					html += catalog_tile_template(item_data);
			    else if (current_type.hasClass('b-catalog-type__link--imagelist'))
			    	html += catalog_imagelist_template(item_data);
			});

			if (current_type.hasClass('b-catalog-type__link--tile')) {
				var html_all = catalog_tile_template_all(html);
				change_nav_links('list', 'tile');
			} else if (current_type.hasClass('b-catalog-type__link--imagelist')) {
				var html_all = catalog_imagelist_template_all(html);
				change_nav_links('list', 'imagelist');
			}

		    $('.b-catalog-no-photo').replaceWith(html_all);
		}
	}
});