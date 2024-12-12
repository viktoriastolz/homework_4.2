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


    if (!Number.isInteger(Number(trimmedInput))) {
        alert(`Error: '${input}' is not a valid integer.`);
    } else if (trimmedInput.length === 3) {
        const digit1 = (trimmedInput[0]);
        const digit2 = (trimmedInput[1]);
        const digit3 = (trimmedInput[2]);

        const allSame = digit1 === digit2 && digit2 === digit3;

        const hasDuplicates = digit1 === digit2 || digit1 === digit3 || digit2 === digit3;

        alert(`Number: ${input.trim()}`); 
        alert(`All digits are the same: ${allSame}`);
        alert(`Has duplicate digits: ${hasDuplicates}`);
    } else {
        alert(`Error: '${input}' is not a valid three-digit number.`);
    }
}
