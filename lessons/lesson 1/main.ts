//Взяти дз №1-3 з модуля по js та типізувати їх.
//  Завдання можна копіювати з виконаних дз по js та впроваджувати типізацію безпосередньо в них, замінивши розширення файлів.

//Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

let str1:string = 'hello';
console.log(str1);
let str2:string = 'owu';
console.log(str2);
let str3:string = 'com';
console.log(str3);
let str4:string = 'ua';
console.log(str4);
let num1:number = 1;
console.log(num1);
let num2:number = 10;
console.log(num2);
let num3:number = -999;
console.log(num3);
let num4:number = 123;
console.log(num4);
let num5:number = 3.14;
console.log(num5);
let num6:number = 2.7;
console.log(num6);
let num7:number = 16;
console.log(num7);
let bool1:boolean = true;
console.log(bool1);
let bool2:boolean = false;
console.log(bool2);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person
// (Не об'єкт, просто за допомоги конкатенації)

let firstName: string = 'Лазарець';
let middleName: string = 'Олександр';
let lastName: string = 'Юрійович';
let person: string = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);
let person2: string = `${firstName} ${middleName} ${lastName}`;
console.log(person2);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let a: number = 100;
let b: string = '100';
let c: boolean = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let surname: string = prompt('Введи прізвище: ');
let your_name: string = prompt('Введи ім\'я: ');
let patronymic: string = prompt('Введи по-батькові: ');
let age: string = prompt('Введи свій вік: ');
let persona: string = `${surname} ${your_name} ${patronymic}`;
let my_age: number = Number(age);
console.log(persona);
console.log(my_age);
console.log(2024 - my_age);

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let objects: (number | string | boolean | number[] | undefined)[] = [4, 6, 2,'hello', 'white', true, 3.14, 'okten', [11, 2, 3], -45];
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

let book1: {title: string, pageCount: number, genre: string} = {
    title: 'Володар Перснів. Частина перша: Братство Персня',
    pageCount: 704,
    genre: 'фентезі'
};
let book2: {title: string, pageCount: number, genre: string} = {
    title: 'Нові Темні Віки. Книга 1. Колонія',
    pageCount: 904,
    genre: 'фантастика'
};
let book3: {title: string, pageCount: number, genre: string} = {
    title: 'Довбуш. Гідність або забуття',
    pageCount: 240,
    genre: 'історичний роман'
};
console.log(book1);
console.log(book2);
console.log(book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється
// масивом. Кожен автор має поля name та age.

type Author = {
    name: string;
    age: number;
};

type Book = {
    title: string;
    pageCount: number;
    genre: string;
    authors: Author[];
};

let book4: Book = {
    title: 'Географія 10 клас',
    pageCount: 192,
    genre: 'навчальний',
    authors: [
        {name: 'Віталій Безуглий', age: 48},
        {name: 'Галина Лисичарова', age: 42}
    ]
};
let book5: Book = {
    title: 'Алгебра 10 клас',
    pageCount: 400,
    genre: 'навчальний',
    authors: [
        {name: 'Анатолій Мерзляк', age: 44},
        {name: 'Дмитро Номіровський', age: 52},
        {name: 'Віталій Полонський', age: 49},
        {name: 'Михайло Якір', age: 45}
    ]
};
let book6: Book = {
    title: 'Відьмак. Останнє бажання. Книга 1',
    pageCount: 288,
    genre: 'фентезі',
    authors: [
        {name: 'Анджей Сапковський', age: 73 }
    ]
};
console.log(book4);
console.log(book5);
console.log(book6);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let users: {name: string, username: string, password: string}[] = [
    {name: 'Ivan', username: 'vanya123', password: '123123'},
    {name: 'Olga', username: 'kitness', password: 'qwerty'},
    {name: 'Mariya', username: 'milashka', password: 'masha1999'},
    {name: 'Ivan', username: 'IvanPetroxich2', password: 'derby23@'},
    {name: 'Bogdan', username: 'bodyaHost', password: 'bodya_pik'},
    {name: 'Vitaliy', username: 'vitalka345', password: 'qwe123'},
    {name: 'Olga', username: 'Lopachuk', password: 'trend45'},
    {name: 'Vasyl', username: 'metronom7', password: 'ktc2012'},
    {name: 'Maksym', username: 'krestonosecUA', password: 'romashka'},
    {name: 'Alisa', username: 'raketa56', password: '123456543'},
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

let temperature: {day: number, temp: {morning: number, day: number, evening: number}}[] = [
    {day: 1, temp: {morning: 8, day: 12, evening: 9} },
    {day: 2, temp: {morning: 8, day: 12, evening: 9} },
    {day: 3, temp: {morning: 8, day: 12, evening: 9} },
    {day: 4, temp: {morning: 8, day: 12, evening: 9} },
    {day: 5, temp: {morning: 8, day: 12, evening: 9} },
    {day: 6, temp: {morning: 8, day: 12, evening: 9} },
    {day: 7, temp: {morning: 8, day: 12, evening: 9} },
];

console.log(temperature);

// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x: number = +prompt('Введи довільне числове значення:');

if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time: number = Math.floor(Math.random() * (59 - 0 + 1) + 0);
console.log('Час:', time);

if (time >= 0 && time < 15) {
    console.log('1 частина години');
} else if (time >= 15 && time < 30) {
    console.log('2 частина години');
} else if (time >= 30 && time < 45) {
    console.log('3 частина години');
} else if (time >= 45 && time <= 59) {
    console.log('4 частина години');
} else {
    console.log('Невірно введені дані!');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє
// це число (у першу, другу чи третю).

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day: number = Math.floor(Math.random() * (31 - 1 + 1) + 1);
console.log('День номер:', day);

if (day >= 1 && day <= 10) {
    console.log('1 декада');
} else if (day > 10 && day <= 20) {
    console.log('2 декада');
} else if (day > 20 && day <= 31) {
    console.log('3 декада');
} else {
    console.log('Невірно введені дані!');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let day_week: number = +prompt('Введи номер дня тижня: ');

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

let a1: number = +prompt('Введи перше число: ');
let b1: number = +prompt('Введи друге число: ');
console.log('a = ', a1, 'b = ', b1)

if (a1 > b1) {
    console.log('Більше число буде:', a1);
} else if (a1 < b1) {
    console.log('Більше число буде: ', b1);
} else {
    console.log('Числа рівні');
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні,
//  тобто ті, які приводиться до false, а це 0 null undefined і тд).

let y1: string | null = prompt('y = ');

if (y1 === 'false' || y1 === '0' || y1 === '' || y1 === undefined || y1 == null) {
    y1 = 'default';
}
console.log(y1)

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен
// його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray: {title: string, monthDuration: number}[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
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

document.write(`<h1 class="hw_title">Homework 1</h1>`)

for (let i: number = 1; i <= 10; i++) {
    document.write(`
    <div class="block_hw1" >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </div>`);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині


document.write(`<h1 class="hw_title">Homework 2</h1>`)

for (let i: number = 1; i <= 10; i++) {
    document.write(`
    <div class="block_hw2" >
        Блок номер ${i}
    </div>`);
}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
document.write(`<h1 class="hw_title">Homework 3</h1>`)

let i: number = 1;
while (i <= 10) {
    document.write(`
    <h1 class="title_hw3">
        I love programming
    </h1>`);
    i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

document.write(`<h1 class="hw_title">Homework 4</h1>`)

let i1: number = 1;
while (i1 <= 10) {
    document.write(`
    <h1 class="title_hw4">
        Заголовок номер ${i1}
    </h1>`);
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

document.write(`<h1 class="hw_title">Homework 5</h1>`)

let listOfItems: string[] = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul class="list_hw5">`)
for (let i: number = 0; i < listOfItems.length; i++) {
    document.write(`<li>${listOfItems[i]}</li>`)
}
document.write(`</ul>`)

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

document.write(`<h1 class="hw_title">Homework 6</h1>`)

let products: {title: string, price: number, image: string}[] = [
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

for (let i:number = 0; i < products.length; i++) {
    document.write(`
        <div class="product-card">
            <h3 class="product-title">${products[i].title} <br> Ціна - ${products[i].price} грн</h3>
            <img src="${products[i].image}" alt="" class="product-image">
        </div>
    `)
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

document.write(`<h1 class="hw_title">Homework 7</h1>`)

let users2: {name:string, age:number, status:boolean}[] = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

document.write(`<h1>користувачі зі статусом true: </h1>`)
for (let i:number = 0; i < users2.length; i++) {
    if (users2[i].status) {
        document.write(`
         <p class="user_info">${users2[i].name} ${users2[i].age}</p>
    `)
        console.log(users2[i])
    }
}

document.write(`<h1>користувачі зі статусом false: </h1>`)
for (let i:number = 0; i < users2.length; i++) {
    if (!users2[i].status) {
        document.write(`
         <p class="user_info">${users2[i].name} ${users2[i].age}</p>
    `)
        console.log(users2[i])
    }
}

document.write(`<h1>користувачі які старші за 30 років: </h1>`)
for (let i:number = 0; i < users2.length; i++) {
    if (users2[i].age > 30) {
        document.write(`
         <p class="user_info">${users2[i].name} ${users2[i].age}</p>
    `)
        console.log(users2[i])
    }
}





