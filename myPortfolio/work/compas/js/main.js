$(document).ready(function(){

    $('.burger').click(function(event){
        event.preventDefault();
       $('.burger-menu').toggleClass('active');
       $('html').toggleClass('lock');
       $('.burger__line_first').toggleClass('burger-active-first');
       $('.burger__line_second').toggleClass('burger-active-second');
       $('.burger__line_bottom, .burger__line_top').toggleClass('burger__line_none');
       $('.header__title, .subtitle, .arrow-down').toggleClass('hidden');
    });


});