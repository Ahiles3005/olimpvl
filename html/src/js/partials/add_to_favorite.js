function addToFavorites() {
    $(".b-link__add-favorites").on( "click", function() {
        var id = $(this).attr("data-product");
        var this_button = $(this);
        $.ajax({
            type: "POST",
            url: "/ajax/catalog.element_favorite.php",
            data: {"id": +id, "price_code": $(this_button).attr('data-price_code')},
            success: function (data) {
                this_button.replaceWith(data);
                addToFavorites();
            }
        });
    });
}

addToFavorites();