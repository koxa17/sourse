$(function(){

	$('.footer_social-icons a:not(:nth-child(1))').on('click', function(){

		alert('Аккаунт в данной социльной сети в процессе создания. Извините за неудобства. Вы можете связаться со мной "Вконтакте"!');

	});
	

	$(document).bind('mousewheel', function (e) { 
	    var nt = $(document.body).scrollTop()-(e.deltaY*e.deltaFactor*100); 
	    e.preventDefault(); 
	    e.stopPropagation(); 
	    $(document.body).stop().animate( { 
	         scrollTop : nt 
	     } , 1000 , 'easeInOutCubic' );  
	} )

	

});
