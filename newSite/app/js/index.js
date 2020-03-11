"use strict";

// hoisting - поднятие переменной (var)
// var a; -- Поднимает переменную но не присваивает
// let a; const a = 152;  -- Нельзя получить доступ до ее обьявления

// isNaN - не число. Вернет true/false = isNaN('s');
// parseInt/parseFloat - переобразует в целое/дробное
// Оператор разворота - spread operator = ...Array. Можно передавать массив в качестве аргумента для функции callFunc(...Array); 
// for...of перебирает массив и выводит 'значение', for...in работает с 'ключами'
// forEach() выполняет указанную функцию один раз для каждого элемента в массиве. Array.forEach(function (value)...)
// reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.
// Function Declaration - функция обьявленная как отдельная инструкция, в основном потоке кода. Инициализируется до выполнения скрипта
// Function Expression - функция создана как часть выражения "let f = function() {}" Инициализируется когда доходит до строчки кода

let name = 'Николай',
    lastName = 'Матусевич';

const persone = {
    name,
    lastName,
    get fullName() {
        return this.name + ' ' + this.lastName;
    },
    set fullName(value) {
        return this.name = value;
    }
}

let numbers = [5,5,15];

function sumForEach(...values) {
    let sum = 0;
    numbers.forEach(function(value) {
        sum += value;
    });
    console.log(sum);
}


function sumReduse(...values) {
    console.log(values.reduce(function(prevValue, currentValue) {
        return prevValue + currentValue;;
    }));
}

// ЕЖЕДНЕВНИК


const dayWeek = document.querySelector('#dayWeek');
const notes = document.querySelector('#notes');
const btnSubmit = document.querySelector('#btn_submit');
const btnPrint = document.querySelector('#btn_print');
let everyday = {};


btnSubmit.addEventListener('click', (event, property, value) => {
    event.preventDefault();
    property = dayWeek.value,
    value = notes.value;
    everyday[property] = value;
    notes.value = "";
});

btnPrint.addEventListener('click', (event) => {
    event.preventDefault();
    const out = document.querySelector('#out');
    out.innerHTML = "";
    for (let key in everyday) {
        out.innerHTML += `<li>Заметка на: <strong>${key}</strong><br>${everyday[key]}<hr></li>`;
    }
});


// Модальное окно
const modal = $.modal();

            // Задача 1
// Добавьте изображениям, по которым кликнул пользователь класс bordered в формлении которого содержится граница и тень
            // Задача 2
// ВЫведите координаты мыши относительно блока в момент движения курсора мыши внутри блока. Координаты выводить под блоком
            // Задача 3 - localStorage еще не выполнил *
// Создайте окно, котолрое всплывает через 4 секунды после загрузки страницы. В окне опция - "Согласен". Если пользователь выбирает данную опция и закрывает окно - то при следующих обновлениях окно не показывается. Если пользователь не выбрал опцию - "Согласен", то повторяйте вывод окна после обновления страницы.
            // Задача 4
// есть progress bar который заполнятся за заданное количество времени. Время задает пользователь
            // Задача 5
// Создать панель меню где пользователь может выбрать компонетны бургера. Некоторые обязательны, некоторые можно менять. Вычислить стоимость и колорийность бургера