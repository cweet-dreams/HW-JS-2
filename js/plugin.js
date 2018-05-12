 //Присваивание.Задачи

//1
 a += 10;
 b *= 18;
 c -= 10;

 x += a;
 y *= z;
 i=i * y*5;

 // 2
 b *= b;

//Условные операторы.Задачи

//1
let z;

if (z === 'hidden') {
    console.log('z === visible')
} else {
    console.log('z === hidden')
}

z === 'hidden' ? console.log('z === visible') : console.log('z === hidden');

//2
let y;

if (y === 0) {
    console.log(y = 1);
} else if (y < 0) {
    console.log(y = 'less then zero')
} else {
    console.log(y *= 10);
}
;

y === 0 ? console.log(y = 1) : y < 0 ? console.log(y = 'less then zero') : console.log(y *= 10);

// Switch ... ccase. Задача
let a;

switch (a) {
    case 'block':
        console.log('block');
        break;
    case 'none':
        console.log('none');
        break;
    case 'inline':
        console.log('inline');
        break;
    default:
        console.log('default');
}

//Преобразование типов.Задачи

//1
let a = 0 || 'string';// a = string, потому что 0-false, a 'string'- true, || - останавливается на true;
let a = 1 && 'string'; // a = string, потому что оба значения true и присвоаевается последнее значение;
let a = null || 25 // a = 25, null - 0, 25 - true, оператор или присавивает true;
let a = null && 25 // a = null, оператор и останавлиается на значении false;
let a = null || 0 || 35 // a = 35, null,0 - false, 35 - true, || останавливается на true;
let a = null && 0 && 35 // a = null, && останавливатся на превом false;

//2
12 + 14 + '12' = '2612', //сначала выполнеться арифметисеский оператор с числами, потом добавлется строка и преобразцется в строку;
3 + 2 - '1' = 4 // приобразование строки '1' в число при арифмитиических операциях, кроме сложения;
'3' + 2 - 1 = '31' //сначала арифметическое действие 2-1=1, затем строка '3' канкатинируется с числом 1;
true + 2 = 3 // true преобразуется к 1;
+'10' + 1 = 11 // унарный + преобразовует '10' в число 10;
undefined + 2 = NaN //undefined  преобразуется к NaN и при сложении с числом, получается Nan;
null + 5 = 5 // null преобразуется к 0;
true + undefined // true - 1, undefined - NaN, при сложении NaN;
