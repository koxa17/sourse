// 
// 
//       СТРОКИ
// 
// 

// Преобразование к строке. String(2019); (2019).toString(); 2019 + '';
// split() разбивает на массив строк путём разделения строки указанной подстрокой.

let str = 'Hello world';
let value;
value = str.length; // свойство длины
value = str[1]; //индекс буквы
value = str[str.length - 1] // получаем последний символ 
value = str.toUpperCase(); // Вверхнем регистре пишет пуквы
value = str.indexOf('world', 7); // Поиск "значения" , с какого места
value = str.slice(1, 4); // Можно передать отрицательное значение
value = str.substring(1, 4);
value = str.substr(1, 2);
value = str.match(/[aeiou]/gi); // вернет совпадения при сопоставлении строки с регулярным выражением // [ "e", "o", "o" ]
value = str.split(''); // [ "H", "e", "l", "l", "o"...] вернет массив из букв


// 
// 
//      Number
// 
// (0.6 + 0.7) // 1.3 | без toFixed 1.2999999999999998

// ***************** MATH **************
// Math.ceil округлять всегда в большую
// Math.round к ближайшему целому
// Math.floor округление вниз

let number = 20;
let num;

num = parseInt('20.19px'); // 20 округляет убирает лишнее
num = parseFloat('20.19px'); // 20.19 дробное убирает лишнее
num = (12.121212).toFixed(3); // Кол-во знаков после запятой 12.121

// 
// 
//      Array
// 
//

// reverse() - зазворачивает массив
// concat() возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями

// for in - работает с индексом
// for of - со значениями
// forEach(item,index,arr); ничего не возращает и позволяет изменить данный массив
// map (item,index,arr) - вернет новый массив, тоже что и forEach
// filter (item,index,arr) - вернет новый массив с элементами прошедшими проверку
// some (item,index,arr) - проверяет массив и если хотя бы один элемент отвечает условиям возращает true иначе false
// every (item,index,arr) - проверяет каждый элемент, все элементы должны пройти проверку true иначе false
// reduce (accumulator, currentValue, index, array){},0 или [] - можно сложить все элементы массива(0 - начальное значение для accumulator)
// reduceRight(accumulator, currentValue, index, array) тоже самое только справа на лево
// includes() - сравнивает массив с ()

// flat()
// find()
// indexFind()

// slice - не меняет текущий массив а возращает новый с удалеными елементами

// splice() - изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые
const myFish = ['angel', 'clown', 'mandarin', 'sturgeon']; // ['clown'] 
const removed = myFish.splice(1, 1, 'что будет добавлено'); // [ "angel", "что будет добавлено", "clown", "mandarin", "sturgeon" ]

let array = ['Hello', 'world', 1, 2, 3, 4, 7];
// array.join(); - объединяет все элементы массива в строку

// Деструктурирующее присваивание
let [helloVar, worldVar, , , ...numArray] = array; // helloVar попадет 0-й индекс массива 'Hello', ...numArray - создаст массив с остальными даными. Запятая пропускает элемент (1 и 2)


// 
// 
//      Object
// 
//

// Object.keys(obj) - глобальный обьект вывода всех ключей обьекта (obj - передаем сам обьект);
// instanceof - проверяет, присутствует ли объект constructor.prototype в цепочке прототипов object (object instanceof constructor)


let user = {
    name: "Николай",
    age: 25
};

// Деструктурирующее присваивание
let { name, age } = user; // Имена переменных в фигурных скобках должны совпадать со свойствами в обьекте name = name

// 
// 
//      Date()
// 
//

// let date = new Date(); 

// setMinutes - установить минуты (date.getMinutes + 10) получаем текущие минуты + 10
// date.toLocaleString() - изменить дату под нужный регион


// 
// 
//      Function
// 
//

// this - контект вызлва функциии
// call(1, 2) - вызывает функцию с указанным значением 1(в контексте чего будет вызвана функция), 2(аргументы) ...func.call(amd, 'Rub');
// apply(1,2) вызывает функцию с указанным значением 1(в контексте чего будет вызвана функция) и аргументами, предоставленными в виде массива. ..func.apply(amd, ['rub', 'Byu']); Если 1 не нужно передавать, указываем null 
// bind() - привязать контект вызова ...obj1.get = func.bind(obj1);



// 
// 
//      XHR - XMLHttpRequest
// 
//
{
    const requestURL = 'https://jsonplaceholder.typicode.com/users';

    // GET - получения каких либо даных
    // POST - для создания
    // DELETE - для удаления
    // PUT - для полного обновления элемента
    // PATCH - для частичного обновления элемента

    function sendRequest(method, url, body = null) {
        // 2функции resolve - вызываем если успех, reject - вызываем если есть ошибка 
        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
            // Открыли запрос
            xhr.open(method, url); //1п - метод по которуму мы будет делать запрос 2п - юрл адресс

            // Распарсить из сnроки в обьект. Тип ответа должен быть json
            xhr.responseType = 'json';

            // Указать что мы отправляем данные в формате json
            xhr.setRequestHeader('Content-Type', 'application/json'); //1 - название хедера, 2 - значение

            // При успешной загрузке попадаем в onload
            xhr.onload = () => {
                    // Все что выше 400 обозначается ошибкой
                    if (xhr.status >= 400) {
                        reject(xhr.response);
                    } else {
                        resolve(xhr.response);
                    }

                }
                // При ошибке попадаем в onerror
            xhr.onerror = () => {
                reject(xhr.response);
            }

            // отправить 
            xhr.send(JSON.stringify(body));
        })
    }

}

// // sendRequest('GET', requestURL)
// //     .then(data => console.log(data))
// //     .catch(err => console.log(err)); // если есть ошибка

// const body = {
//     name: 'Николай',
//     age: 25
// };

// // Через POST нужено тело body
// sendRequest('POST', requestURL, body)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));




// 
// 
//      FETCH
// 
//


{

    function sendRequest(method, url, body = null) {

        const headers = {
            'Content-Type': 'application/json'
        };

        // 1 - адрес запроса, 2 - обьект конфигурации
        return fetch(url, {
                method: method,
                body: JSON.stringify(body),
                headers: headers
            })
            .then(response => {
                if (response.ok) {
                    return response.json(); // парсим обьект 
                }
                // если ошибка
                return response.json().then(err => {
                    const e = new Error('Что то пошло не так');
                    e.data = err;
                    throw e;
                })

            })

    }

    // // sendRequest('GET', requestURL)
    // //     .then(data => console.log(data))
    // //     .catch(err => console.log(err)); // если есть ошибка

    // const body = {
    //     name: 'Николай',
    //     age: 25
    // };

    // // Через POST нужено тело body
    // sendRequest('POST', requestURL, body)
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err));
}


// 
// 
//      async/await
// 
//

// async/await - возвращает промис

async function get() {
    // Отлов ошибок через throw тогда в catch получим ошибку
    // throw new Error('some text');

    // Или через глобальный обьект Promise
    // return Promise.reject('error')

    // Ожидает выполнения user.getUser('userName'). await - может быть сколько угодно внутри async;
    let user = await user.getUser('userName');

    return user;
}

get()
    .then(value => console.log(value))
    .catch(errr => console.log(err));

// 
// 
//      try and catch, finally
// 
//

let data = 'hello world';

try {
    // пытаемся переобразовать json строку в обьект, будет ошибка но мы может отлавить эту ошибку, и код все равно будет выполнятся далее
    let json = JSON.parse(data);

    // если в json нет поля age, будет ошибка и выполнится catch
    if (!json.age) {
        throw new Error('Ошибка такого поля нет');
    }

} catch (err) {
    console.log(err);
} finally {
    console.log('Выполнится в любом случае!');
}

console.log('Выполнится!');