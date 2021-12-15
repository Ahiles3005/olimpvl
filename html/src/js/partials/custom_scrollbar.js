/*
Реализует кастомный скроллбар с помощью malihu-custom-scrollbar-plugin
Пример использования:
<div class="some-scroll-block" data-scrollbar="custom"></div>
*/

$(function() {
    $('[data-scrollbar="custom"]').mCustomScrollbar({
        theme: 'custom',
        scrollInertia: 0
    });
});