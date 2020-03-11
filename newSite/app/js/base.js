// Случайное число
function random(maxNumber) {
    return Math.ceil(Math.random() * maxNumber);
}
// Таблица умножения
function multi(number = 1) {
    let operandRight = 9;
    for (let i = 1; i <= operandRight; i++) {
        let result = number * i;
        console.log(`${number} * ${i} = ${result}`);
    }
}

const $ = {};