// We'll pass you an array of two numbers. Return the sum of those two numbers
// plus the sum of all the numbers between them. The lowest number will not
// always come first.
// For example, sumAll([4,1]) should return 10 because sum of all the numbers
// between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
    var min = Math.min(arr[0], arr[1]);
    var max = Math.max(arr[0], arr[1]);
    var i, sum = 0;

    for (i = min; i <= max; i += 1) {
        sum += i;
    }

    return sum;
}

sumAll([1, 4]) /*should return a number.*/
sumAll([1, 4]) /*should return 10.*/
sumAll([4, 1]) /*should return 10.*/
sumAll([5, 10]) /*should return 45.*/
sumAll([10, 5])/* should return 45.*/