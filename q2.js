

let inputString = prompt("Enter a string:");

for (let i = 0; i < Math.floor(inputString.length/2); i++) {
    const element = inputString[i];
    const lastElement = inputString[inputString.length - 1 - i];
    if (element !== lastElement) {
        alert("The string is not a palindrome.");
        break;
    }
    if (i === Math.floor(inputString.length/2) - 1) {
        alert("The string is a palindrome.");
    }
}