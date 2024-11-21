console.log("Welcome to the Simple JS Project!");

function findEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

function findOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Even numbers:", findEvenNumbers(numbers));
console.log("Odd numbers:", findOddNumbers(numbers));