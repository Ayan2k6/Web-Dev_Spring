// --- ЗАДАЧИ НА ПЕРЕМЕННЫЕ ---

// Задача: Работа с переменными
let admin;
let name;

name = "Джон";
admin = name;

// alert(admin); // Покажет "Джон"

// Задача: Придумайте правильные имена
let ourPlanetName = "Земля";
let currentUserName = "Джон";


// --- ЗАДАЧИ НА IF / ELSE ---

// Задача: Название JavaScript
// Используем prompt для ввода (работает в браузере)
// let officialName = prompt("Какое официальное название JavaScript?", "");

// if (officialName == "ECMAScript") {
//     alert("Верно!");
// } else {
//     alert("Не знаете? ECMAScript!");
// }

// Задача: Покажите знак числа
// let value = prompt("Введите число", 0);

// if (value > 0) {
//     alert(1);
// } else if (value < 0) {
//     alert(-1);
// } else {
//     alert(0);
// }


// --- ЗАДАЧИ НА ЦИКЛЫ (LOOPS) ---

// Задача: Вывести чётные числа от 2 до 10
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        // alert(i); // выведет 2, 4, 6, 8, 10
    }
}

// Задача: Замените for на while
let i = 0;
while (i < 3) {
    // alert( `number ${i}!` );
    i++;
}


// --- ЗАДАЧИ НА ФУНКЦИИ ---

// Задача: Перепишите функцию, используя оператор '?' или '||'
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

// Задача: Функция min(a, b)
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

// Задача: Функция pow(x, n)
function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result = result * x;
    }

    return result;
}

// Проверка работы функции (можно раскомментировать для теста)
// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n < 1) {
//     alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// } else {
//     alert( pow(x, n) );
// }