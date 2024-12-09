//Взяти дз №1-3 з модуля по js та типізувати їх.
//  Завдання можна копіювати з виконаних дз по js та впроваджувати типізацію безпосередньо в них, замінивши розширення файлів.
//Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log
var str1 = 'hello';
console.log(str1);
var str2 = 'owu';
console.log(str2);
var str3 = 'com';
console.log(str3);
var str4 = 'ua';
console.log(str4);
var num1 = 1;
console.log(num1);
var num2 = 10;
console.log(num2);
var num3 = -999;
console.log(num3);
var num4 = 123;
console.log(num4);
var num5 = 3.14;
console.log(num5);
var num6 = 2.7;
console.log(num6);
var num7 = 16;
console.log(num7);
var bool1 = true;
console.log(bool1);
var bool2 = false;
console.log(bool2);
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person
// (Не об'єкт, просто за допомоги конкатенації)
var firstName = 'Лазарець';
var middleName = 'Олександр';
var lastName = 'Юрійович';
var person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);
var person2 = "".concat(firstName, " ").concat(middleName, " ").concat(lastName);
console.log(person2);
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
var a = 100;
var b = '100';
var c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
var surname = prompt('Введи прізвище: ');
var your_name = prompt('Введи ім\'я: ');
var patronymic = prompt('Введи по-батькові: ');
var age = prompt('Введи свій вік: ');
var persona = "".concat(surname, " ").concat(your_name, " ").concat(patronymic);
var my_age = Number(age);
console.log(persona);
console.log(my_age);
console.log(2024 - my_age);
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
var objects = [4, 6, 2, 'hello', 'white', true, 3.14, 'okten', [11, 2, 3], -45];
console.log(objects);
console.log(objects[0]);
console.log(objects[1]);
console.log(objects[2]);
console.log(objects[3]);
console.log(objects[4]);
console.log(objects[5]);
console.log(objects[6]);
console.log(objects[7]);
console.log(objects[8]);
console.log(objects[9]);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
var book1 = {
    title: 'Володар Перснів. Частина перша: Братство Персня',
    pageCount: 704,
    genre: 'фентезі'
};
var book2 = {
    title: 'Нові Темні Віки. Книга 1. Колонія',
    pageCount: 904,
    genre: 'фантастика'
};
var book3 = {
    title: 'Довбуш. Гідність або забуття',
    pageCount: 240,
    genre: 'історичний роман'
};
console.log(book1);
console.log(book2);
console.log(book3);
var book4 = {
    title: 'Географія 10 клас',
    pageCount: 192,
    genre: 'навчальний',
    authors: [
        { name: 'Віталій Безуглий', age: 48 },
        { name: 'Галина Лисичарова', age: 42 }
    ]
};
var book5 = {
    title: 'Алгебра 10 клас',
    pageCount: 400,
    genre: 'навчальний',
    authors: [
        { name: 'Анатолій Мерзляк', age: 44 },
        { name: 'Дмитро Номіровський', age: 52 },
        { name: 'Віталій Полонський', age: 49 },
        { name: 'Михайло Якір', age: 45 }
    ]
};
var book6 = {
    title: 'Відьмак. Останнє бажання. Книга 1',
    pageCount: 288,
    genre: 'фентезі',
    authors: [
        { name: 'Анджей Сапковський', age: 73 }
    ]
};
console.log(book4);
console.log(book5);
console.log(book6);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
var users = [
    { name: 'Ivan', username: 'vanya123', password: '123123' },
    { name: 'Olga', username: 'kitness', password: 'qwerty' },
    { name: 'Mariya', username: 'milashka', password: 'masha1999' },
    { name: 'Ivan', username: 'IvanPetroxich2', password: 'derby23@' },
    { name: 'Bogdan', username: 'bodyaHost', password: 'bodya_pik' },
    { name: 'Vitaliy', username: 'vitalka345', password: 'qwe123' },
    { name: 'Olga', username: 'Lopachuk', password: 'trend45' },
    { name: 'Vasyl', username: 'metronom7', password: 'ktc2012' },
    { name: 'Maksym', username: 'krestonosecUA', password: 'romashka' },
    { name: 'Alisa', username: 'raketa56', password: '123456543' },
];
console.log(users[0]['password']);
console.log(users[1]['password']);
console.log(users[2]['password']);
console.log(users[3]['password']);
console.log(users[4]['password']);
console.log(users[5]['password']);
console.log(users[6]['password']);
console.log(users[7]['password']);
console.log(users[8]['password']);
console.log(users[9]['password']);
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде
// одновимірний масив з 21 значенням вичключаємо одразу
var temperature = [
    { day: 1, temp: { morning: 8, day: 12, evening: 9 } },
    { day: 2, temp: { morning: 8, day: 12, evening: 9 } },
    { day: 3, temp: { morning: 8, day: 12, evening: 9 } },
    { day: 4, temp: { morning: 8, day: 12, evening: 9 } },
    { day: 5, temp: { morning: 8, day: 12, evening: 9 } },
    { day: 6, temp: { morning: 8, day: 12, evening: 9 } },
    { day: 7, temp: { morning: 8, day: 12, evening: 9 } },
];
console.log(temperature);
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
var x = +prompt('Введи довільне числове значення:');
if (x !== 0) {
    console.log('Вірно');
}
else {
    console.log('Невірно');
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
var time = Math.floor(Math.random() * (59 - 0 + 1) + 0);
console.log('Час:', time);
if (time >= 0 && time < 15) {
    console.log('1 частина години');
}
else if (time >= 15 && time < 30) {
    console.log('2 частина години');
}
else if (time >= 30 && time < 45) {
    console.log('3 частина години');
}
else if (time >= 45 && time <= 59) {
    console.log('4 частина години');
}
else {
    console.log('Невірно введені дані!');
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє
// це число (у першу, другу чи третю).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
var day = Math.floor(Math.random() * (31 - 1 + 1) + 1);
console.log('День номер:', day);
if (day >= 1 && day <= 10) {
    console.log('1 декада');
}
else if (day > 10 && day <= 20) {
    console.log('2 декада');
}
else if (day > 20 && day <= 31) {
    console.log('3 декада');
}
else {
    console.log('Невірно введені дані!');
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
var day_week = +prompt('Введи номер дня тижня: ');
switch (day_week) {
    case 1:
        console.log('Monday: OktenSchool');
        break;
    case 2:
        console.log('Tuesday: English');
        break;
    case 3:
        console.log('Wednesday: OktenSchool, Gym');
        break;
    case 4:
        console.log('Thursday: English, Pool');
        break;
    case 5:
        console.log('Friday: Cinema');
        break;
    case 6:
        console.log('Saturday: Housework, Gym');
        break;
    case 7:
        console.log('Sunday: Relax');
        break;
    default:
        console.log('Невірно введені дані');
}
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
var a1 = +prompt('Введи перше число: ');
var b1 = +prompt('Введи друге число: ');
console.log('a = ', a1, 'b = ', b1);
if (a1 > b1) {
    console.log('Більше число буде:', a1);
}
else if (a1 < b1) {
    console.log('Більше число буде: ', b1);
}
else {
    console.log('Числа рівні');
}
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні,
//  тобто ті, які приводиться до false, а це 0 null undefined і тд).
var y1 = prompt('y = ');
if (y1 === 'false' || y1 === '0' || y1 === '' || y1 === undefined || y1 == null) {
    y1 = 'default';
}
console.log(y1);
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен
// його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
var coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
if (coursesAndDurationArray[0]['monthDuration'] > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[1]['monthDuration'] > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[2]['monthDuration'] > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[3]['monthDuration'] > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[4]['monthDuration'] > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[5]['monthDuration'] > 5) {
    console.log('Супер');
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
document.write("<h1 class=\"hw_title\">Homework 1</h1>");
for (var i_1 = 1; i_1 <= 10; i_1++) {
    document.write("\n    <div class=\"block_hw1\" >\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n    </div>");
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
document.write("<h1 class=\"hw_title\">Homework 2</h1>");
for (var i_2 = 1; i_2 <= 10; i_2++) {
    document.write("\n    <div class=\"block_hw2\" >\n        \u0411\u043B\u043E\u043A \u043D\u043E\u043C\u0435\u0440 ".concat(i_2, "\n    </div>"));
}
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
document.write("<h1 class=\"hw_title\">Homework 3</h1>");
var i = 1;
while (i <= 10) {
    document.write("\n    <h1 class=\"title_hw3\">\n        I love programming\n    </h1>");
    i++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
document.write("<h1 class=\"hw_title\">Homework 4</h1>");
var i1 = 1;
while (i1 <= 10) {
    document.write("\n    <h1 class=\"title_hw4\">\n        \u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043D\u043E\u043C\u0435\u0440 ".concat(i1, "\n    </h1>"));
    i1++;
}
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//  <ul>
//     <li>ITEM OF ARRAY</li>
//     <!--
//         і тд інші об'єкти масиву
//          ...
//          ...
//          ...
//     -->
// </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
document.write("<h1 class=\"hw_title\">Homework 5</h1>");
var listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write("<ul class=\"list_hw5\">");
for (var i_3 = 0; i_3 < listOfItems.length; i_3++) {
    document.write("<li>".concat(listOfItems[i_3], "</li>"));
}
document.write("</ul>");
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// 			let products = [
// 				{
// 					title: 'milk',
// 					price: 22,
// 					image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
// 				},
// 				{
// 					title: 'juice',
// 					price: 27,
// 					image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
// 				},
// 				{
// 					title: 'tomato',
// 					price: 47,
// 					image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
// 				},
// 				{
// 					title: 'tea',
// 					price: 15,
// 					image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
// 				},
// 			];
//
// ШАБЛОН
//  <div class="product-card">
//         <h3 class="product-title">TITLE. Price - PRICE</h3>
//         <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
document.write("<h1 class=\"hw_title\">Homework 6</h1>");
var products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'Помідор',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (var i_4 = 0; i_4 < products.length; i_4++) {
    document.write("\n        <div class=\"product-card\">\n            <h3 class=\"product-title\">".concat(products[i_4].title, " <br> \u0426\u0456\u043D\u0430 - ").concat(products[i_4].price, " \u0433\u0440\u043D</h3>\n            <img src=\"").concat(products[i_4].image, "\" alt=\"\" class=\"product-image\">\n        </div>\n    "));
}
// є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//  за допомоги циклу вивести:
//  - користувачів зі статусом true
//  - користувачів зі статусом false
//  - користувачів які старші за 30 років
document.write("<h1 class=\"hw_title\">Homework 7</h1>");
var users2 = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];
document.write("<h1>\u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456 \u0437\u0456 \u0441\u0442\u0430\u0442\u0443\u0441\u043E\u043C true: </h1>");
for (var i_5 = 0; i_5 < users2.length; i_5++) {
    if (users2[i_5].status) {
        document.write("\n         <p class=\"user_info\">".concat(users2[i_5].name, " ").concat(users2[i_5].age, "</p>\n    "));
        console.log(users2[i_5]);
    }
}
document.write("<h1>\u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456 \u0437\u0456 \u0441\u0442\u0430\u0442\u0443\u0441\u043E\u043C false: </h1>");
for (var i_6 = 0; i_6 < users2.length; i_6++) {
    if (!users2[i_6].status) {
        document.write("\n         <p class=\"user_info\">".concat(users2[i_6].name, " ").concat(users2[i_6].age, "</p>\n    "));
        console.log(users2[i_6]);
    }
}
document.write("<h1>\u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456 \u044F\u043A\u0456 \u0441\u0442\u0430\u0440\u0448\u0456 \u0437\u0430 30 \u0440\u043E\u043A\u0456\u0432: </h1>");
for (var i_7 = 0; i_7 < users2.length; i_7++) {
    if (users2[i_7].age > 30) {
        document.write("\n         <p class=\"user_info\">".concat(users2[i_7].name, " ").concat(users2[i_7].age, "</p>\n    "));
        console.log(users2[i_7]);
    }
}
