/*

Задача 
Задача. В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).

Решение:

var min = 10;
if (min >= 0 && min <= 14) {
	alert('В первую четверть.');
}
if (min >= 15 && min <= 30) {
	alert('Во вторую четверть.');
}
if (min >= 31 && min <= 45) {
	alert('В третью четверть.');
}
if (min >= 46 && min <= 59) {
	alert('В четвертую четверть.');
}

*/


//Из двух чисел с разной четностью вывести на экран нечетное число.
/*
var anyNumber = [20,19,22,24,25]

function even_odd (anyNumber) {
    var even = [];
    var odd = [];

    for (var i in anyNumber) {
        if (anyNumber[i] % 2 == 0){
            even.push(anyNumber[i])
        } else {
            odd.push(anyNumber[i]);
        }
    }
    return [even,odd];
}

console.log(even_odd(anyNumber));
 */

//Функция получает массив чисел или любых иных значений, и сортирует на четные и нечетные числа, все значения, которые не number – пропускаются. Возвращает два массива с четными и нечетными значениями.

/*
var anyNumber = [20,19,22,24,25]

function even_odd (anyNumber) {
    var odd = [];

    for (var i in anyNumber) {
        if (anyNumber[i] % 2 != 0){
            odd.push(anyNumber[i])
        }
    }
    return [even,odd];
}

console.log(even_odd(anyNumber));
 */

//Определить количество дней в году, который вводит пользователь.

/*
var year = 366;
if (year % 4 != 0) {
    console.log('Обычный')
} else {
    console.log('Высокосный')
}

*/
//Сравнивает числа, если равно 4, то true

/*
const button = document.querySelector('.buttonn');

const input = document.querySelector('.age')

button.onclick = () => {
    let num = +input.value;
    if (num == 4) {
        console.log('true')
    }
    else {
        console.log("try again");
    }
}

 */

// Сравнение чисел,выводит большее

/*
const  button_main = document.querySelector('.button__main');

const i1 = 20;
const i2 = 17;

button_main.onclick = () =>{
    if (i1 > i2){
        console.log(i1);
    }
    else {
        console.log(i2);
    }
}

 */

//Сравнение чисел, показывает большее, из двух input


/*
const button = document.querySelector('.buttonn');
const input1 = document.querySelector('.num1');
const input2 = document.querySelector('.num2');

button.onclick = () => {
    let num1 = +input1.value;
    let num2 = +input2.value;
    if (num1>num2){
        console.log(num1);
    }
    else {
        console.log(num2);
    }
}

*/



// получение значения из input при изменении состояния самого input

/*
document.querySelector('#input').oninput = () =>{
    console.log(document.querySelector('#input').value);
    document.querySelector('span').innerHTML = document.querySelector('#input').value;
}*/
