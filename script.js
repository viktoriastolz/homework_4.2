"use strict";

const input = prompt("Enter a three-digit number:");

if (input === null) {
    alert("Okay, bye");
} else {
    let trimmedInput = input.trim();

    let isNegative = false;
    if (trimmedInput[0] === '-') {
        isNegative = true;
        trimmedInput = trimmedInput.slice(1); 
    }

    trimmedInput = String(Number(trimmedInput)); 

    if (trimmedInput === '') {
        trimmedInput = '0'; 
    }

    if (!Number.isInteger(Number(trimmedInput))) {
        alert(`Error: '${input}' is not a valid integer.`);
    } else if (trimmedInput.length === 3) {
        const digit1 = Number(trimmedInput[0]);
        const digit2 = Number(trimmedInput[1]);
        const digit3 = Number(trimmedInput[2]);

        const allSame = digit1 === digit2 && digit2 === digit3;

        const hasDuplicates = digit1 === digit2 || digit1 === digit3 || digit2 === digit3;

        alert(`Number: ${input.trim()}`); 
        alert(`All digits are the same: ${allSame}`);
        alert(`Has duplicate digits: ${hasDuplicates}`);
    } else {
        alert(`Error: '${input}' is not a valid three-digit number.`);
    }
}
