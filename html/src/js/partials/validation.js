$(document).ready(function(){


    var validation = new Validation_MOD();
    //Так переопределяется стиль вывода ошибок, где вместо %ERROR%
    validation.patternErrorText = '<div class="error-message">%ERROR%</div>';
    //Так переопределение режим вставки этого стиля, after-до элемента который вернулся из поисковой функции
    //before - до этого элемента, append - добавить внутрь, replace - заменить * осторожнее с этим методом
    validation.modeError = 'after';
    //И класс ошибки
    validation.errorClass = 'error';
    //переопределение поисковой функции для текста/ Она принимет input и должна вернуть элемент который в
    // дальнейшем используется с режимом вставки modeError
    validation.elementErrorText = function($input){
        return $input;
        //Это поведение по умолчанию, так что в принципе и функция такая не нужна,
        //но как пример вот, так как нам нужно вставить текст ошибки после инпута,
        //то мы сразу его и возвращаем, и для этого мы выставили modeError в значение after
    };
    //Похожая функция, но для поиска элемента к которому припишется класс
    validation.elementErrorClass = function ($input) {
        return $input.closest('.form-row');
    };

    //Тексты ошибок переопределяются так(если все разом, именно все разом)
    validation.lang = {
        email: 'Введите корректный E-mail',
        req: 'Поле обязательно для заполнения',
        min: 'Слишком короткое значение',
        max: 'Слишком длинное значение',
        pattern: 'Введите корректное значение',
        phone: 'Введите корректный телефон',
        geooff: 'Вы запретили определять ваше местоположение',
        compare: 'Значения не совпадают',
        date: 'Введите дату в формате dd.mm.yyyy'
    };
    //или так если по одному
    //validation.lang.email = 'Текст';

    //Есть типы проверки которые записываются в data-rules и разделяются точкой с запятой
    //Ошибки выводятся по порядку важности, самые первые покажатся первыми
    //пример data-rules="email;req;min=4;max=10;pattern=^[a-zA-Z0-9_]+$;phone";

    // Пример если нужен тип паттерна ^[a-zA-Z0-9_]+$  ,
    // главное чтобы точек с запятой не было и знаков равно(это нужно доработать)


    validation.keyup($('.js-validation-change'));
    validation.form_submit($('.js-validation-change').parents('form'), $('.js-validation-change'));

});