// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

function reverseString(str) {
    return str.split('').reverse().join('');
}

// function reverseString(str) {
//     var reversedStr = '',
//         i,
//         size = str.length - 1;
//
//     for (i = size; i >= 0; i -= 1) {
//         reversedStr += str[i];
//     }
//
//     return reversedStr;
// }

// function reverseString(str) {
//     var l = str.length, temp = '', rStr = [];
//
//     for (let i = 0; i < l / 2; i += 1) {
//         temp = str[i];
//         rStr[i] = str[l - i - 1];
//         rStr[l - i - 1] = temp;
//     }
//
//     return rStr.join('');
// }

console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));