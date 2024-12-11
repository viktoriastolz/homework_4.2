"use strict";

// Проверка числа с использованием prompt и alert
const input = prompt("Введите трёхзначное число:").trim();

// Проверка длины и структуры трёхзначного числа
const isNegative = input[0] === '-';
const numberPart = isNegative ? input.slice(1) : input;

if (
    (isNegative && numberPart.length === 3 && !isNaN(Number(input))) ||
    (!isNegative && numberPart.length === 3 && !isNaN(Number(input)))
) {
    const absoluteNumber = Math.abs(Number(input));

    // Извлечение цифр
    const digit1 = Math.floor(absoluteNumber / 100); // Первая цифра
    const digit2 = Math.floor((absoluteNumber % 100) / 10); // Вторая цифра
    const digit3 = absoluteNumber % 10; // Третья цифра

    // Проверяем, одинаковы ли все цифры
    const allSame = digit1 === digit2 && digit2 === digit3;

    // Проверяем, есть ли одинаковые цифры
    const hasDuplicates = digit1 === digit2 || digit1 === digit3 || digit2 === digit3;

    alert(`Число: ${input}\nВсе цифры одинаковые: ${allSame ? "Да" : "Нет"}\nЕсть одинаковые цифры: ${hasDuplicates ? "Да" : "Нет"}`);
} else {
    alert(`Ошибка: ввод '${input}' не является трёхзначным целым числом.`);
}
