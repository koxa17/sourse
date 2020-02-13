$(document).ready(function (){
	




});



let plus = document.getElementById('plus');
let minus = document.getElementById('minus');


plus.addEventListener('click', function() {
	let one = document.getElementById('one').value;
	let two = document.getElementById('two').value;
	let out = document.getElementById('out');

	one = parseInt(one);
	two = parseInt(two);
	
	out.innerHTML = one + two;
})

minus.addEventListener('click', function() {
	let one = document.getElementById('one').value;
	let two = document.getElementById('two').value;
	let out = document.getElementById('out');

	one = parseInt(one);
	two = parseInt(two);

	out.innerHTML = one - two;
})


// ПОИСК В ГУГЛЕ --------------------------------------


	let form = document.querySelector("form");
	let btn = document.getElementsByClassName('btnSubmit')[0];
	let o  = "";

		
	let arrRadio = document.getElementsByClassName('radioButton');

	for(let i = 0; i < arrRadio.length; i++) {
		arrRadio[i].onclick = returnAttr;
	}

	function returnAttr(){
		let search = document.getElementById('search').value;

		attrRadio = this.dataset.link;
	
		form.setAttribute('action', attrRadio + search);


	}
	

	form.addEventListener('submit', function(event){
		// let search = document.getElementById('search').value;



		// window.open('https://www.google.ru/search?q='+search, '_blank');



		// event.preventDefault();
	});

// !------------------------------------------------!


// window.onload = function () {
// 	window.setInterval(function(){

// 		let date = new Date();
// 		let year = date.getFullYear();
// 		let month = date.getMonth() + 1;
// 		let enter = document.getElementsByClassName('title')[0];
// 		let day = date.getDay();
// 		let hours = date.getHours();
// 		let minutes = date.getMinutes();
// 		let seconds = date.getSeconds();

		
// 		if(hours >= 0 && hours < 4) {
// 		enter.innerHTML = `Доброй ночи! Хватит сидеть за компом. <br>Сейчас ${date.toLocaleTimeString()}`;
// 		} 
// 		else if (hours >= 4 && hours < 12) {
// 			enter.innerHTML = `Доброе утро! <br>Сейчас ${date.toLocaleTimeString()}`
// 		}
// 		else if (hours >= 12 && hours < 18) {
// 			enter.innerHTML = `Добрый день!<br>Сейчас ${date.toLocaleTimeString()}`;
// 		}
// 		else if (hours >= 18 && hours < 22) {
// 			enter.innerHTML = `Добейший вечерочек! Вечер в хату! <br>Сейчас ${date.toLocaleTimeString()}`;
// 		}
// 		else if (hours >= 22) {
// 			enter.innerHTML = `Доброй ночи! Еще можно посидеть за компом! <br>Сейчас ${date.toLocaleTimeString()}`;
// 		}

// 	}, 1000);

// }
