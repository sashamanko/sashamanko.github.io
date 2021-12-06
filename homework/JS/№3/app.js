// 1
// ────────────────────────────────────────────────────────────

// let x = parseInt(prompt('x')),
//  y = parseInt(prompt('y')),
//  res = 0;

// for (let i = x; i <= y; i++) {
//     res += i;
// }
// console.log(res);

// 2
// ────────────────────────────────────────────────────────────

// const x = parseInt(prompt('x')), // 138
//  y = parseInt(prompt('y')), // 23
//  n = x > y ? y : x;

// let res = 0;

// for (let i = 2; i <= n; i++) {
//     if (x % i == 0 && y % i == 0) {
//         res = i
//     }
// }
// console.log(res);

// 3
// ────────────────────────────────────────────────────────────

// const x = parseInt(prompt('x'));

// for (let i = 1; i < x; i++) {
//     if (x % i == 0) {
//         console.log(i);
//     }
// }

// 4
// ────────────────────────────────────────────────────────────

// let x = parseInt(prompt('x')),
//  res = 0;

// for (let i; x >= 1; i++) {
//     x /= 10;
//     res++;
// }
// console.log(res);

// 5
// ────────────────────────────────────────────────────────────

// let plus = 0,
//  nulll = 0,
//  minus = 0;

// for (let i = 0; i != 10; i++) {
//     const x = parseInt(prompt('x'));
//     if (x < 0) {
//         minus++
//     } else if (x == 0) {
//         nulll++
//     } else {
//         plus++
//     }
// }

// console.log(`+ ${plus}\n0 ${nulll}\n- ${minus}`);

// 6
// ────────────────────────────────────────────────────────────

// while (true) {
//     const a = prompt('a'),
//         x = prompt('Знак'),
//         b = prompt('b');

//     let res = 0;

//     if (x == '+') res = a + b;
//     else if (x == '-') res = a - b;
//     else if (x == '*') res = a * b;
//     else if (x == '/') res = a / b;

//     if (!confirm(`${a}${x}${b}=${res}\nХотите ли вы решить еще один пример?`)) break;
// }

// 7
// ────────────────────────────────────────────────────────────

// let x = parseInt(prompt('x')),
//     y = parseInt(prompt('y'));

// let x1 = x,
//     y1,
//     length = 1,
//     n = 1;

// while (true) {
//     if (parseInt(x1 /= 10) !== 0) {
//         length++;
//     } else {
//         y1 = length - y;
//         break;
//     };
// }

// for (let i = y1; i >= 1; i--) {
//     n = n + '0';
// }

// console.log(`${x % n}${parseInt(x / n)}`);

// 8
// ────────────────────────────────────────────────────────────

// while (true) {
//     if (!confirm('Понедельник')) break;
//     else if (!confirm('Вторник')) break;
//     else if (!confirm('Среда')) break;
//     else if (!confirm('Четверг')) break;
//     else if (!confirm('Пятница')) break;
//     else if (!confirm('Суббота')) break;
//     else if (!confirm('Воскресенье')) break;
// }

// 9
// ────────────────────────────────────────────────────────────

// for (let i = 2; i <= 9; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i}*${j}=${i * j}`)
//     }
// }

// 10
// ────────────────────────────────────────────────────────────

// Не работает 

// let num = 100,
//     step = parseInt(num / 2);

// if (confirm('Загадай число от 0 до 100')) {
//     while (true) {
//         if (confirm(`Ваше число > ${step}`)) {
//             num = num - step + 1;
//         } else if (confirm(`Ваше число < ${step}`)) {
//             num = num - step - 1;
//         } else if (confirm(`Ваше число == ${step}`)) {
//             if (!confirm('Играть снова')) break;
//         }
//     }
// }