'use strict';

// hoisting - поднятие переменной (var)
// var a; -- Поднимает переменную но не присваивает
// let a; const a = 152;  -- Нельзя получить доступ до ее обьявления

// isNaN - не число. Вернет true/false = isNaN('s');
// parseInt/parseFloat - переобразует в целое/дробное
// Оператор разворота - spread operator = ...Array. Можно передавать массив в качестве аргумента для функции callFunc(...Array); 
// for...of перебирает массив и выводит 'значение', for...if работает с 'ключами'
// Function Declaration - функция обьявленная как отдельная инструкция, в основном потоке кода. Инициализируется до выполнения скрипта
// Function Expression - функция создана как часть выражения "let f = function() {}" Инициализируется когда до ходит до строчки кода
// 



let arr = [];
const addArray = document.querySelector('#addArray');
const delArray = document.querySelector('#delArray');
const nameArray = document.querySelector('#nameArray');
const out = document.querySelector('#out');
// Добавляем в массив
addArray.addEventListener('click', () =>  {
    
    if(nameArray.value == '') {
        out.append(`Пусто`);
        if(out.textContent.includes('Пусто')){
            out.textContent = 'Пусто';
        }
    } else {
        out.textContent = '';
        arr.push(nameArray.value);
        out.textContent = arr;
        return arr;
    }

});
// Удаляем с массива
delArray.addEventListener('click', () => {
    
    if(nameArray.value == '' || arr.length == 0) {
       
        out.append(`Пусто`); 
        // console.log(out);
        if(out.textContent.includes('Пусто')){
           out.textContent = 'Пусто';
        }
    } else {
        if(out.textContent.includes('')) {
            out.textContent = 'Пусто';
        }
        arr.pop();
        out.textContent = arr;
        return arr;
    }
   
});

// Игра угадай число!!!
// function random(maxNumber) {
//     return Math.ceil(Math.random() * maxNumber);
// }
// let greating = 'Как вас зовут?';

// let numberRandom = random(1000);
// let namePlayer = prompt(greating);

// while (namePlayer == '' || namePlayer == null) {
//     namePlayer = prompt(greating);
// }

// alert(`Привет ${namePlayer}. Я загадал число от 1 до 1000. Попробуй отгадать его за наименьшее количество попыток. После каждой попытки я скажу "много", "мало", "угадал".`);

// let guess = prompt('Какое число я загадал 1 - до 1000!', '');
// let numberOfGuesses = 1;

// while (guess != numberRandom) {
//     numberOfGuesses = numberOfGuesses + 1;
    
//     if (guess > numberRandom) {
//         guess = prompt('Много! Попробуй еще раз');
        
//     } else if (guess < numberRandom) {
//         guess = prompt('Мало! Попробуй еще раз');
       
//     }
// }

// alert(`Ты угадал! Это число ${numberRandom}! Тебе понадобилось ${numberOfGuesses} попыток`);


//  Игра примеры

// let name = prompt('Как тебя зовут?');
// while (name == '' || name == null) {
//     name = prompt('Как тебя зовут?');
// }

// alert(`Привет, ${name}. Ты знаешь таблицу умножения? Давай проверим.`);
// game();

// function game() {
    
//     let leftOperand = random(10);
//     let leftRight = random(10);
//     let result = leftOperand + leftRight;
//     let guess = prompt(`Сколько будет ${leftOperand} + ${leftRight} = ?`);
//     let numberOfResult = 1;
    
//     while (guess != result) {
//         if(guess > result) {
//             guess = prompt(`Не правильно! Подумай еще! Сколько будет ${leftOperand} + ${leftRight} = ?. Подсказка это число МЕНЬШЕ!`);
//             numberOfResult += + 1;
//         } else if(guess < result) {
//             guess = prompt(`Не правильно! Подумай еще! Сколько будет ${leftOperand} + ${leftRight} = ?. Подсказка это число БОЛЬШЕ!`);
//             numberOfResult += + 1;
//         }
//     }
    
//     alert(`Правильно! ${leftOperand} + ${leftRight} = ${guess} Ты решил с ${numberOfResult} попытки`);

//     guess = confirm(`Для продолжения нажмите "OK". Что бы выйти нажмите "ОТМЕНА"`);
//     if(guess == true) {
//         game();
//     } else if (guess == false) {
//         return;
//     } else if (guess != '' || guess != null) {
//         guess = confirm(`Для продолжения нажмите "OK". Что бы выйти нажмите "ОТМЕНА"`);
//     }
    
// }

// document.write('<table border="1px">'); //Открываем таблицу
// let n = 1; // Для первой ячейки
// let r = 0; // Для строки
// while(r < 10){ // Количество строк (10)
//     document.write('<tr>'); // создаем строку
//     let c = 0; // Для ячеек
//     while(c < 10){ // Количество ячеек
//         document.write(`<td>${n++}</td>`); // Создаем ячейку с переменной n и увеличиваем ее с каждой итерацие 
//         c++;
//     };
//     document.write('</tr>'); //Закрываем строку 
//     r++;
// };
// document.write('/<table>'); //Закрываем таблицу

// В папке images есть изображения 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. Вывести случайное изображение из этой папки

const outImg = document.querySelector('.outImage'); // Блок для вывода картинки
let img = new Image(); //Создаем обьект картинку
// img.width = 128; // Задаем ширину картинки
// img.height = 128; // Задаем высоту картинки
img.src = '../images/1.png'; // Картинка которая будет при загрузке
outImg.prepend(img); //Выводим картинку в начало родителя

//Функция будет срабатывать с интервалом в 10 сек 
let whatImg = setInterval(function() {

    let whatImg = random(9); //Получаем случайное число от 1 - 9
    
    //Проверяем число и выводим соответствующую картинку
    switch(whatImg) {
        case 1: 
            img.src = '../images/1.png';
            img.name = 'FaceBook';
            break;
        case 2: 
            img.src = '../images/2.png';
            img.name = 'Google';
            break;
        case 3: 
            img.src = '../images/3.png';
            img.name = 'PlayMarket';
            break;
        case 4: 
            img.src = '../images/4.png';
            img.name = 'Skype';
            break;
        case 5: 
            img.src = '../images/5.png';
            img.name = 'Twitter';
            break;
        case 6: 
            img.src = '../images/6.png';
            img.name = 'Viber';
            break;
        case 7: 
            img.src = '../images/7.png';
            img.name = 'WhatsApp';
            break;
        case 8: 
            img.src = '../images/8.png';
            img.name = 'Windows';
        break;
        case 9: 
            img.src = '../images/9.png';
            img.name = 'YouTube';
            break;
        default: 
            alert("Ошибка !");
    }
    
    //Выводим полученую картинку в начало родителя
    outImg.prepend(img);
}, 10000); 

// Вывод случайной картинки из папки
let outImage2 = document.querySelector('.outImage2');
    outImage2.innerHTML = `<img src="images/1.png">`;

setInterval(function() {
    let numImg = random(9);
    outImage2.innerHTML = `<img src="images/${numImg}.png">`;
}, 10000);




function result(values) {
    console.log(arguments instanceof Array);
    var result = 0;
    Array.prototype.forEach.call(arguments, function(value){
        result += value;
    });
    console.log(result);
}


function num(...values){
    console.log(values.reduce(function(prevValue, currentValue){
        return prevValue + currentValue;
    }));
}

function num2(...values) {
    let num = 0;

    values.forEach(function(value) {
        num += value;
    });
    console.log(num);
}


// Цикл for..of и Object



let firstName = 'Николай',
    lastName = 'Матусевич',
    email = 'koxa17@mail.ru';

let persone = {
    firstName,
    lastName,
    email,
    sayHi() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }, 
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        this.firstName = value;
    }
}


// Задачи с обьектами
let city1 = {
    name: "Екатеринбург", population: 1e6,
    getName() {
        return this.name;
    },
    exportStr() {
        return `name = ${this.name} \npopulation = ${this.population}\n`
    }
}

console.log(city1);
console.log(city1.getName());
console.log(city1.exportStr());


let city2 = {
    name: "Первоуральск", population: 5e5,
    getName() {
        return this.name;
    },
    exportStr() {
        return `name = ${this.name} \npopulation = ${this.population}\n`
    }
}

console.log(city2);
console.log(city2.getName());


