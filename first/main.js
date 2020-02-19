$(document).ready(function (){
	




});

let arr = ['Lemon', 'apple', 'chery'];

const number = 1;

switch(number) {
	case 0:
		console.log('Вы ввели 0');
		break;
	case 1:
		console.log('Вы ввели 1');
		break;
	case 2:
	case 3:
		console.log('Вы ввели число 2, а может и 3');
		break;
	default:
		console.log('Вы ввели число больше 3');		
}

function sayHello(name) {
	this.name = name;
	console.log(`Привет ${name}!`);
}

sayHello('Николай');



// outer: for(let i = 0; i < 3; i++) {
// 	for(let j = 0; j < 3; j++) {
// 		let input = prompt(`Значение на координатах (${i}, ${j})`, '');
// 		if(!input) continue outer;	

// 	}
// }
// alert("Готово");



// let sum = 0;

// while (true) {
// 	let value = +prompt('Введите число', '');
// 	if(!value) break;
// 	sum +=value;
// }

// alert('Сумма:' + sum);


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
