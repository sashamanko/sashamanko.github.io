// 1
// ────────────────────────────────────────────────────────────

// Прівєт
// В рядку 10 по заданію там от 0-2 і діти возростом 2-12 год випадають із жизні.
// Зробив от 0 до 12


// const i = parseInt(prompt('Ваш возраст'));

// if ((i >= 0) && (i <= 12)) console.log('Вы ребёнок!');
// else if ((i > 12) && (i < 18)) console.log('Вы подросток!');
// else if ((i >= 18) && (i < 60)) console.log('Вы взрослый!');
// else if (i >= 60) console.log('Вы пенсионер!');

// 2
// ────────────────────────────────────────────────────────────

// const i = parseInt(prompt('Введите число'));

// switch (i) {
//     case 0:
//         console.log(')');
//         break;
//     case 1:
//         console.log('!');
//         break;
//     case 2:
//         console.log('@');
//         break;
//     case 3:
//         console.log('#');
//         break;
//     case 4:
//         console.log('$');
//         break;
//     case 5:
//         console.log('%');
//         break;
//     case 6:
//         console.log('^');
//         break;
//     case 7:
//         console.log('&');
//         break;
//     case 8:
//         console.log('*');
//         break;
//     case 9:
//         console.log('(');
//         break;
//     default:
//         console.log('Спецсимвол отсутствует!');
// }

// 3
// ────────────────────────────────────────────────────────────

// const i = parseInt(prompt('Введите число')),
//     one = parseInt((i / 100) % 10),
//     two = parseInt((i / 10) % 10),
//     three = parseInt((i / 1) % 10);

// if ((one == two) || (one == three) || (two == one) || (two == three) || (three == one) || (three == two)) {
//     console.log(`В числе '${i}' есть повторяющиеся числа`);
// } else console.log(`В числе '${i}' все числа разные`);

// 4
// ────────────────────────────────────────────────────────────

// const i = parseInt(prompt('Введите год'));

// if ((i % 400 == 0) || (i % 4 == 0) && (i % 100 != 0)) {
//     console.log('Високосный год')

// } else {
//     console.log('Не високосный год');

// }

// 5
// ────────────────────────────────────────────────────────────

// const i = parseInt(prompt('Введите пятизначное число')),
//     a = (i / 10000) % 10,
//     a1 = (i / 1) % 10,

//     b = (i / 1000) % 10,
//     b1 = (i / 10) % 10;

// if (a == a1) {
//     if (b == b1) {
//         console.log(`Число ${i} является палиндромом!`);

//     }
// } else console.log(`Число ${i} не является палиндромом!`);

// 6
// ────────────────────────────────────────────────────────────

// const usd = parseInt(prompt('Введите количество USD')),
//     currency = parseInt(prompt('Введите в какую валюту конвертировать\n\n1 = EUR\n2 = UAN\n3 = AZN')),
//     eur = 0.86,
//     uan = 26.26,
//     azn = 1.70;

// if (currency == 1) console.log(usd * eur);
// else if (currency == 2) console.log(usd * uan);
// else if (currency == 3) console.log(usd * azn);

// 7
// ────────────────────────────────────────────────────────────

// const i = parseInt(prompt('Введите сумму покупки'));

// if ((i >= 200) && (i < 300)) console.log(i - (i * 3 / 100));
// else if ((i >= 300) && (i < 500)) console.log(i - (i * 5 / 100));
// else if (i >= 500) console.log(i - (i * 7 / 100));

// 8
// ────────────────────────────────────────────────────────────

// const c = parseInt(prompt('Укажите длинну окрусжность')), // Длинна окружности  // 13
//     p = parseInt(prompt('Укажите периметр квадрата')), // Периметр квадрата     // 16 
//     // Окружность
//     d = parseInt(c / Math.PI), // Узнаем диаметр
//     // Квадрат
//     a = p / 4; // Узнаем сторону квадрата

// if (d == a) console.log('Окружность помещяется'); // Если диаметр окружности равен стороне квадрата всё ок
// else console.log('Окружность не помещяется');

// 9
// ────────────────────────────────────────────────────────────

// let score = 0;
// const a = confirm('1+1=2 ?') ? score += 2 : false,
//     b = confirm('2+2=5 ?') ? false : score += 2,
//     c = confirm('π = 3,14 ?') ? score += 2 : false;

// console.log(`Ваш счет: ${score}`);

// 10
// ────────────────────────────────────────────────────────────

// let d = parseInt(prompt('Введите день своего рождения')),
//     m = parseInt(prompt('Введите месяц своего рождения')),
//     y = parseInt(prompt('Введите год своего рождения'));

// d++;

// if (m == 1 && m == 3 && m == 5 && m == 7 && m == 8 && m == 10 && m == 12 || d > 31) {
//     d = 1;
//     m++;
//     console.log('1');
// } else if (m != 2 && d > 30) {
//     d = 1;
//     m++;
//     console.log('2');
// } else if ((y % 400 == 0) || (y % 4 == 0) && (m == 2) && (d > 29) && (y % 100 != 0)) {
//     d += 1;
//     m++;
//     console.log('3');
// } else if (d > 28) {
//     d += 1;
//     m++;
//     console.log('4');
// }

// if (m == 13) {
//     m = 1;
//     y++;
// }


// console.log(d, m, y);