$(function(){

	$('.footer_social-icons a:not(:nth-child(1))').on('click', function(){

		alert('Аккаунт в данной социльной сети в процессе создания. Извините за неудобства. Вы можете связаться со мной "Вконтакте"!');

	});
	
// 	$('a[href^="#"]').click(function(event){

// //объявляем переменную, в которую заносится значение href
// //например <a href="#block"></a> отсюда в переменную занесётся  значение //#block
//    var id_clicked_element = $(this).attr('href');

// //определяем кординаты точки, где должен остановиться наш скролл
//    var destination = $(id_clicked_element).offset().top;

// //В скрипте автора показаны условия в зависимости от браузера
// // например if ($.browser.safari) означает, что пользовательпользуется Apple и использует браузер Safari, или не на Apple, но пользуется Safari, грёбаный извращенец
// //В своём варианте я же просто выбрал разом и html и body
// //и к ним уже применил jQuery-анимацию (если не знаете, то дуйте сюда https://api.jquery.com/animate/)
//    $('html, body').animate({scrollTop: destination}, 900);

// //а вот эта строчка для того, чтобы не было перезагрузки страницы и в адресную строку браузера не вносилось дополнительно значение якоря
//    return false;
//   });

	$('a[href^="#"]').click(function(event){
		var linck = $(this).attr('href');

		var dot = $(linck).offset().top;

		$('html', 'body').animate({scrollTop: dot}, 900)

		return false;
	});
	

});
