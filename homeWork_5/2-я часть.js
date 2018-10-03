// Объекты/Массивы 
// http://learn.javascript.ru/object
// http://learn.javascript.ru/object-for-in
// http://learn.javascript.ru/object-reference
// http://learn.javascript.ru/array
// http://learn.javascript.ru/array-methods
// http://learn.javascript.ru/array-iteration
// http://learn.javascript.ru/arguments-pseudoarray

/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, arg) {
    for (var i = 0; i < array.length; i++) {
        arg(array[i], i, array);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, arg) {
    var new_array = [];
    for (var i = 0; i < array.length; i++) {
        new_array[i] = arg(array[i], i, array);
    }
    return new_array;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    var arr = [];
    for (var key in obj) {
        key = key.toUpperCase();
        arr.push(key);
    }
    return arr;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
    }
    return result;
}