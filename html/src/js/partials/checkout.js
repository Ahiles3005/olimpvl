$(document).ready(function() { 
    $('.b-form--checkout').on('submit', function() {
        $('.b-checkout-login').hide();
        $('.b-checkout-login+.b-order').show();
        return false;
    });
});