// Взяти дз №4-6 з модуля по js та типізувати їх. Зверніть особливу увагу на те, що функції тепер щось повертають і це треба типізувати!
//  Завдання можна копіювати з виконаних дз по js та впроваджувати типізацію безпосередньо в них, замінивши розширення файлів.
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function squareRectangle(a, b) {
    var square;
    square = a * b;
    return square;
}
console.log('Площа прямокутника:', squareRectangle(3, 5));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function squareCircle(r) {
    var square;
    square = Math.PI * r * r;
    return square;
}
console.log('Площа круга:', squareCircle(10));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function squareCilindre(h, r) {
    var square;
    square = 2 * Math.PI * r * (h + r);
    return square;
}
console.log('Площа повної поверхні циліндра:', squareCilindre(5, 2));
// - створити функцію яка приймає масив та виводить кожен його елемент
function elementsOfArray(array) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var i = array_1[_i];
        console.log(i);
    }
}
var animals = ['cat', 'dog', 'horse', 'pig', 'chicken'];
elementsOfArray(animals);
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function addParagraph(p) {
    document.write("\n    <p class=\"paragraph\">".concat(p, "</p>"));
}
addParagraph('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
addParagraph('Другий параграф');
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий
function addList(list_item) {
    document.write("<ul class=\"list_hw6\">");
    for (var i = 1; i <= 3; i++) {
        document.write("<li>".concat(i, " ").concat(list_item, "</li>"));
    }
    document.write("</ul>");
}
addList('Елемент списку');
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
function addList2(list_item, k) {
    document.write("<ul class=\"list_hw7\">");
    for (var i = 1; i <= k; i++) {
        document.write("<li>".concat(i, " ").concat(list_item, "</li>"));
    }
    document.write("</ul>");
}
addList2('Елемент списку', 7);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write
function addListOfArray(array) {
    document.write("<ul class=\"list_hw8\">");
    for (var i = 0; i < array.length; i++) {
        document.write("<li>".concat(array[i], "</li>"));
    }
    document.write("</ul>");
}
var cars = ['Ford', 'Mercedes', 'BMW', 'Opel', 'Tesla', 'Renault', 'Volkswagen'];
addListOfArray(cars);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
function addObjectOfArray(array) {
    for (var i = 0; i < array.length; i++) {
        document.write("\n        <div class=\"users\">\n            <p class=\"users_info\">".concat(array[i].id, " ").concat(array[i].name, " ").concat(array[i].age, "</p>  \n        </div>"));
    }
}
var users = [
    { id: 1, name: 'Максим', age: 32 },
    { id: 2, name: 'Віктор', age: 23 },
    { id: 3, name: 'Олександр', age: 40 },
    { id: 4, name: 'Олександр', age: 33 },
    { id: 5, name: 'Вікторія', age: 32 },
    { id: 6, name: 'Олена', age: 25 },
    { id: 7, name: 'Марія', age: 21 },
    { id: 8, name: 'Максим', age: 32 },
    { id: 9, name: 'Віктор', age: 35 },
    { id: 10, name: 'Леонід', age: 30 },
];
addObjectOfArray(users);
// - створити функцію яка повертає найменьше число з масиву
function minElementOfArray(array) {
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}
var numbers = [];
for (var i = 0; i < 20; i++) {
    numbers.push(Math.round(Math.random() * 100));
}
console.log(numbers);
console.log(minElementOfArray(numbers));
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
function sum(arr) {
    var s = 0;
    for (var i = 0; i < arr.length; i++) {
        s = s + arr[i];
    }
    return s;
}
var elements = [];
for (var i = 0; i < 5; i++) {
    elements.push(Math.round(Math.random() * 10));
}
console.log(elements);
console.log(sum(elements));
var num = [1, 2, 10];
console.log(num);
console.log(sum(num));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    var n = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = n;
    return arr;
}
var elem = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(elem);
console.log(swap(elem, 2, 7));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (var i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            var res = (sumUAH / currencyValues[i].value).toFixed(2);
            return exchangeCurrency + ' ' + res;
        }
    }
}
var currencies = [
    { currency: 'USD', value: 37.23 },
    { currency: 'EUR', value: 40.50 },
    { currency: 'PLN', value: 9.03 },
    { currency: 'GBP', value: 45.30 },
    { currency: 'CHF', value: 41.25 },
];
var sumUAH = 10000;
var exchangeCurrency = 'PLN';
console.log(exchange(sumUAH, currencies, exchangeCurrency));
// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
var str1 = 'hello world';
var str2 = 'lorem ipsum';
var str3 = 'javascript is cool';
console.log(str1.length);
console.log(str2.length);
console.log(str3.length);
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
var str4 = 'HELLO WORLD';
var str5 = 'LOREM IPSUM';
var str6 = 'JAVASCRIPT IS COOL';
console.log(str4.toLowerCase());
console.log(str5.toLowerCase());
console.log(str6.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
var str7 = ' dirty string   ';
console.log(str7.trim());
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
var arr = [];
var stringToArray = function (str) { return arr = str.split(' '); };
var str8 = 'Ревуть воли як ясла повні';
console.log(stringToArray(str8));
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
var numbers1 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
var arr1 = numbers1.map(String);
console.log(arr1);
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
var nums = [11, 21, 3];
var sortNums = function (arr, direction) {
    if (direction === 'ascending') {
        return arr.sort(function (a, b) { return a - b; });
    }
    if (direction === 'descending') {
        return arr.sort(function (a, b) { return b - a; });
    }
};
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
var coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
var sortArr = coursesAndDurationArray.sort(function (a, b) {
    return a.monthDuration - b.monthDuration;
});
console.log(sortArr);
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
var filterArr = coursesAndDurationArray.filter(function (course) {
    if (course.monthDuration > 5) {
        return true;
    }
});
console.log(filterArr);
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
var mapArr = coursesAndDurationArray.map(function (course, index) { return ({
    id: index + 1,
    title: course.title,
    monthDuration: course.monthDuration,
}); });
console.log(mapArr);
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
//  описати колоду карт (від 6 до туза без джокерів)
var cards = [
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
];
//  - знайти піковий туз
var aceSpade = cards.filter(function (card) {
    if (card.cardSuit === 'spade' && card.value === 'ace') {
        return true;
    }
});
console.log(aceSpade);
//  - всі шістки
var sixes = cards.filter(function (card) {
    if (card.value === '6') {
        return true;
    }
});
console.log(sixes);
//  - всі червоні карти
var redCards = cards.filter(function (card) {
    if (card.color === 'red') {
        return true;
    }
});
console.log(redCards);
//  - всі буби
var diamondCards = cards.filter(function (card) {
    if (card.cardSuit === 'diamond') {
        return true;
    }
});
console.log(diamondCards);
//  - всі трефи від 9 та більше
var clubsFilter = cards.filter(function (card) {
    if (card.cardSuit === 'clubs' && card.value !== '6' && card.value !== '7' && card.value !== '8') {
        return true;
    }
});
console.log(clubsFilter);
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
var reduce = cards.reduce(function (suits, card) {
    if (card.cardSuit === 'spade') {
        suits.spades.push(card);
    }
    else if (card.cardSuit === 'diamond') {
        suits.diamonds.push(card);
    }
    else if (card.cardSuit === 'heart') {
        suits['hearts'].push(card);
    }
    else if (card.cardSuit === 'clubs') {
        suits['clubs'].push(card);
    }
    return suits;
}, { spades: [], diamonds: [], hearts: [], clubs: [] });
console.log(reduce);
