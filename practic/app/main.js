// /*Все параграфы внутри дивов */
// $('div p')

// /*выбираем элемент с id 'something' */
// $('#something')

// Выбираем элемент с классом 'something'
// $('.something')

// /*выбираем все ссылки из параграфа с id 'something' и с роддителем div*/
// $('div p#something a')

$(function(){

	$('.header__burger').on('click', function(event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});












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

	//вывести в окно значение аттрибута(все что находится в нутри тега form)
	$('form >').on('dblclick', function(){
		let el = $(this).attr('type');
		// alert(el);
	});

	$('#textarea').on('mouseenter', function(){
		alert($(this).val());
	});

	$('button#addImg').on('click', function(){
		$('div#imgAdd').html('<img src="images/img1.jpg" alt="Картинка" width="50" height="50">');
	});
	
	//Скрыть и вывести тест в модальное окно
	$('#invis').on('mouseenter', function(){
		let textInvis = $(this).text();
		$('#invis').fadeOut('slow');		
		console.log(textInvis);
	});

	//добавить в начало каждого абзаца
	$('button#customP').on('click', function(){
		$('p').prepend('Добавить в начало каждого абзаца ');
	});
	// Удалить все <br>. (remove();полное удаление and detach();с поледующим возвратом)
	$('#delBr').on('click', function(){
		$('br').detach();
	});



});