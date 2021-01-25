//Compare two arrays and return a new array with any items only found in one
//of the two given arrays, but not both. In other words, return the symmetric
//difference of the two arrays.
//Note: You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
    var newArr = [],
        i,
        k,
        sizeArr1 = arr1.length,
        sizeArr2 = arr2.length;

    for (i = 0; i < sizeArr1; i += 1) {
        if (!arr2.includes(arr1[i])) {
            newArr.push(arr1[i])
        }
    }
    for (k = 0; k < sizeArr2; k += 1) {
        if (!arr1.includes(arr2[k])) {
            newArr.push(arr2[k])
        }
    }

    return newArr;
}

// function diffArray(arr1, arr2) {
//     return arr1.concat(arr2).filter(function (v) {
//         return !arr1.includes(v) || !arr2.includes(v);
//     });
// }

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) /*should return an array.*/
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) /*should return ["pink wool"].*/
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) /*should return an array with one item.*/
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) /*should return ["diorite", "pink wool"].*/
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) /*should return an array with two items.*/
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]) /*should return [].*/
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]) /*should return an empty array.*/
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) /*should return [4].*/
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) /*should return an array with one item.*/
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]) /*should return ["piglet", 4].*/
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]) /*should return an array with two items.*/
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]) /*should return ["snuffleupagus", "cookie monster", "elmo"].*/
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]) /*should return an array with three items.*/
diffArray([1, "calf", 3, "piglet"], [7, "filly"]) /*should return [1, "calf", 3, "piglet", 7, "filly"].*/
diffArray([1, "calf", 3, "piglet"], [7, "filly"]) /*should return an array with six items.*/