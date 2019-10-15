$(function(){

	$('.testBut').on('click', function(){
		
		$('p').replaceWith(function(){

				return $('<h1/>', {html: $(this).html()});

			});

	});

	


});



// parseInt - переобразовать в другой тип данных
// val(); - значения
// prevrentDefault - отменить стандартное поведение браузера
// attr(); - атрибут 
// .on('click'...) - потому что может работать с динамическим контектом  

// contains() - поиск по содержимому $('p:contains("Hello")'); 
// has() - выбрать которые содержат тэг $('p:has("span")')
// parent - выбрать всех кто является родителем $('p:parent'), пустые тэги не выбирает
// empty - обратно parent, $('p:empty')

// .resize - при смене размеров окна $(window).resize
// .scroll - при прокрутке окна $(window).scroll
// .html - меняем код $('p').html('<h1>Hello dogs</h1>');
// .append(); - добавить код в конце $('ul').append('<div>Див блок</div>');
// .prepend(); - добавит код в начале $('ul').prepend('<div>Див блок</div>');
// .empte - очистить содержимое ul $('ul').empty();
// .remove - удалить ul и его содержимое $('ul').remove();
// .after - добавить тег после ul $('ul').after('<div>Блок после тега</div>');
// .before - добавить тег перед ul $('ul').before('<div>Блок после тега</div>');
// .wrap - обернуть $('ul').wrap('<div></div>');
// .unwrap - удалить обертку $('ul').unwrap();


//Замена тега, с сохранением содержимого
	// $('h1').on('dblclick', function(){
	// 	$('h1').replaceWith(function(){
	// 		return $('<h3/>', {html: $(this).html()
	// 		});
	// 	});
	// });


// Удалить все <br>. (remove();полное удаление and detach();с поледующим возвратом)
	// $('#delBr').on('click', function(){
	// 	$('br').detach();
	// });