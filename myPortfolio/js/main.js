new WOW().init();


$(function(){

	var mySwiper = new Swiper ('.swiper-container', {
	   	direction: 'horizontal',
	    loop: true,
	   	slidesPerView: 1,
	   	spaceBetween: 0,
		  // Responsive breakpoints
		breakpoints: {
		    // when window width is >= 320px
		    320: {
		      slidesPerView: 1,
		      spaceBetween: 0
		    },
		    // when window width is >= 640px
		    640: {
		      slidesPerView: 2,
		      spaceBetween: 0
		    },
		    840: {
		      slidesPerView: 3,
		      spaceBetween: 0
		    }, 
		    1200: {
		      slidesPerView: 3,
		      spaceBetween: 50
		    },
		  },
	   	autoplay: {
		    delay: 10000,
		},
	    // If we need pagination
	    pagination: {
	      el: '.swiper-pagination',
	      clickable: true,
	    }
 	 });

	// Бургер меню 
	$('.burger').click(function(event){
        event.preventDefault();
       $('.burger-menu').toggleClass('active');
       $('html').toggleClass('lock');
       $('.burger__line_first').toggleClass('burger-active-first');
       $('.burger__line_second').toggleClass('burger-active-second');
       $('.burger__line_bottom, .burger__line_top').toggleClass('burger__line_none');
       $('.header_title, .header_slogan, .fa-chevron-down, .header__subtitle').toggleClass('hidden');
       $('.container').toggleClass('container-off');
    });

	// Закрываем меню при переходе меню
    $('.menu_link').click(function(event) {
    	 event.preventDefault();
    	 $('.burger-menu').removeClass('active');
       $('html').removeClass('lock');
       $('.burger__line_first').removeClass('burger-active-first');
       $('.burger__line_second').removeClass('burger-active-second');
       $('.burger__line_bottom, .burger__line_top').removeClass('burger__line_none');
       $('.header_title, .header_slogan, .fa-chevron-down, .header__subtitle').removeClass('hidden');
       $('.container').removeClass('container-off');

    })
	
	$('a[href^="#"]').click(function(event){

	//объявляем переменную, в которую заносится значение href
	//например <a href="#block"></a> отсюда в переменную занесётся  значение //#block
   var id_clicked_element = $(this).attr('href');
	//определяем кординаты точки, где должен остановиться наш скролл
   var destination = $(id_clicked_element).offset().top;
	//В скрипте автора показаны условия в зависимости от браузера
	// например if ($.browser.safari) означает, что пользовательпользуется Apple и использует браузер Safari, или не на Apple, но пользуется Safari, грёбаный извращенец
	//В своём варианте я же просто выбрал разом и html и body
	//и к ним уже применил jQuery-анимацию (если не знаете, то дуйте сюда https://api.jquery.com/animate/)
   $('html, body').animate({scrollTop: destination}, 900);

	//а вот эта строчка для того, чтобы не было перезагрузки страницы и в адресную строку браузера не вносилось дополнительно значение якоря
   return false;
  });

	// Модальное окно формы обратной связи
	var modal = document.getElementById('myModal');
	var btn = document.getElementsByClassName("button")[0];
	var span = document.getElementsByClassName("close")[0];

	btn.onclick = function() {
	    modal.style.display = "block";
	}

	span.onclick = function() {
	    modal.style.display = "none";
	}

	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}
	
	//feedback
		//E-mail Ajax Send
		$("form").submit(function() { //Change
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "mail.php", //Change
				data: th.serialize()
			}).done(function() {
				alert("Thank you!");
				setTimeout(function() {
					// Done Functions
					th.trigger("reset");
				}, 1000);
			});
			return false;
		});

	// Маска на телефон
	$('.form-tel').mask('+7(000)000-00-00');


	// Галерея фото
	$('[data-fancybox]').fancybox({
		protect: true,
		keyboard: false,
		idleTime: false,
		arrows: false,
		infobar: false,
		closeExisting: false,
		smallBtn: true,
		toolbar: false,
		wheel: false,
		clickOutside: true
		});
});
