// Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and
// access each member with array syntax arr[i].

// function largestOfFour(arr) {
//     let newArr = [], max;
//     arr.forEach(function (item) {
//         max = item[0];
//         item.forEach(function(number) {
//             if (max < number) {
//                 max = number;
//             }
//         });
//         newArr.push(max);
//     });
//
//     return newArr;
// }

// decision on ES5
function largestOfFour(arr) {
    var newArr = [];
    arr.forEach(function(number){
        newArr.push(Math.max.apply(Math, number))
    })

    return newArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));















