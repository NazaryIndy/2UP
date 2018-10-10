// Объекты/Массивы 
// http://learn.javascript.ru/object
// http://learn.javascript.ru/object-for-in
// http://learn.javascript.ru/object-reference
// http://learn.javascript.ru/array
// http://learn.javascript.ru/array-methods
// http://learn.javascript.ru/array-iteration
// http://learn.javascript.ru/arguments-pseudoarray

/* ДЗ 2 - работа с массивами и объеектами */

/*s
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for (var i = 0; i < array.lenght; i++) {
        fn(array[i], i, array);
    }

    return array;
}

var arr = [1, 2, 3, 4, 5];
forEach(arr);

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    var result = [];
    for (var i = 0; i < array.lenght; i++) {
        result[i] = fn(array[i], i, array);
    }
    return result;
}

var arr = [1, 2, 3, 4, 5];
map(arr);


/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initialValue) {
    var currentValue = initialValue || array[0];

    for (var i = 0; i < array.lenght; i++) {
        currentValue = fn(currentValue, i, array);
    }
    return currentValue;
}


/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    var result = [];
    for (var key in obj) {
        key = key.toUpperCase();
        result.push(key);
    }
    return result;
}

var user = {
    name: "Вася",
    lastname: "Кошкин",
    age: 30
};

upperProps(user);



/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
    var result = [];
    
    if (to > array.length) {
        to = array.length;
    } 
    
    if (from + array.length < 0) {
        from = -array.length;
    } 
    
    if ( from < 0) {
        from = from + array.length;
    } 

    for (var i = from; i < to; i++) {
        result = result.concat(array[i]);
    }

    return result;
}

var arr = ["Почему", "надо", "учить", "JavaScript"];

slice(arr, -2, 3);

arr.slice(-2,3);
