// /*Все параграфы внутри дивов */
// $('div p')

// /*выбираем элемент с id 'something' */
// $('#something')

// Выбираем элемент с классом 'something'
// $('.something')

// /*выбираем все ссылки из параграфа с id 'something' и с роддителем div*/
// $('div p#something a')

$(function(){

	$('p').on('click', function(){
		$(this).css({'font-weight':'bold'});
	});

	$('p').on('dblclick', function(){
		$(this).fadeToggle('slow');
	});

	$('button#textNew').on('click', function(){
		$('p#newText').text('Тебе ли ж бы что то изменить, теперь текст другой, доволен, пес?');
	});

	$('p').on('mouseenter', function(){
		$(this).css({'font-style':'italic', 'text-align':'center'});
	});

	$('form input[type="submit"]').on('click', function(e){
		e.preventDefault();
		let showText = $('input[type="text"]').val();
		alert(showText);
	});

	//Замена тега, с сохранением содержимого
	$('h1').on('dblclick', function(){
		$('h1').replaceWith(function(){
			return $('<h3/>', {html: $(this).html()
			});
		});
	});

	$('img').on('click', function(){
		$(this).hide('slow');
	});	


});