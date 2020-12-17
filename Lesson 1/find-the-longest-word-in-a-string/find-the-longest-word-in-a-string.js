// Return the length of the longest word in the provided sentence.
// Your response should be a number.

// one loop
function findLongestWordLength(str) {
    var maxLengthWord = 0, currentLengthWord = 0, i;
    for (i = 0; i < str.length; i += 1) {
        if (str[i] === ' ') {
            currentLengthWord = 0;
            continue;
        }

        currentLengthWord += 1;
        if (maxLengthWord < currentLengthWord) {
            maxLengthWord = currentLengthWord;
        }
    }

    return maxLengthWord;
}
// two loops
// function findLongestWordLength(str) {
//     var strSplit = str.split(' ');
//     var longestWord = 0, i;
//     for (i = 0; i < strSplit.length; i += 1) {
//         if (strSplit[i].length > longestWord) {
//             longestWord = strSplit[i].length;
//         }
//     }
//
//     return longestWord;
// }

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength("May the force be with you"));
console.log(findLongestWordLength("Google do a barrel roll"));
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));