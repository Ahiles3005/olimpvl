$(document).ready(function () {
    // var rTel = /[+][7][0-9]{10}/i;
    var rEmail = /^\w+@\w+\.\w{2,4}$/i;
    var valEmail = $('.personal-area-read-info__input[name=EMAIL]').val();
    var isValidEmail = rEmail.exec(valEmail);

    if (valEmail !== '') {
        $('.personal-area-read-info__input[name=EMAIL]').next().show().html('Поле должно быть заполнено');
    }
    else if (!isValidEmail) {
        $('.personal-area-read-info__input[name=EMAIL]').next().show().html('Неверно введен E-mail');
    }
});