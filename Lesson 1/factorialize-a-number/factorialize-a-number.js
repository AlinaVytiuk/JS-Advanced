// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is
// the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to
// the function.

function factorialize(num) {
    var result = 1,
        i;
    for ( i = 1; i <= num; i += 1) {
        result *= i;
    }

    return result;
}

//recursion
// var number = prompt('Введите число: ');
//
// function factorial(n) {
//     if (n < 0) {
//         return 'error';
//     }
//
//     if (n === 0) {
//         return 1;
//     }
//
//     return n * factorial(n - 1);
// }

console.log(factorial(number));
console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(20));
console.log(factorialize(0));















