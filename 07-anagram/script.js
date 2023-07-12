/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    let quantity = 0;
    if ((str1 == str2) || (str1.length !== str2.length)) {
        return false
    }
    for (let i=0; i<str1.length; i++) {
        for (let j=0; j<str2.length; j++) {
            if (str1[i] == str2[j]) {
                quantity += 1;
            }
        }
    }
    if ((quantity == str1.length) && (quantity == str2.length)) {
        return true
    }
    // Напишите код здесь
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false