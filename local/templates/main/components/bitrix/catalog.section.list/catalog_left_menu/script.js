$( document ).ready(function() {
    var toggleSectionBtn = $('.b-category__toggle');
    var toggleList = $('.b-category__list');
    
    toggleSectionBtn.on('click', function() {
    	toggleList.slideToggle(300);
    });
});