// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or
// consonant cluster, move it to the end of the word, and add "ay" to it.
// - If a word begins with a vowel, just add "way" at the end.
// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
    var arrVowel = ["a", "o", "i", "e", "u"],
        newStr = "";

    if (arrVowel.includes(str[0])) {
        newStr = str + "way";
    } else {
        newStr = str.slice(1) + str[0] + "ay";
    }

    return newStr;
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("algorithm"));

translatePigLatin("consonant");
translatePigLatin("california") /*should return "aliforniacay".*/
translatePigLatin("paragraphs") /*should return "aragraphspay".*/
translatePigLatin("glove") /*should return "oveglay".*/
translatePigLatin("algorithm") /*should return "algorithmway".*/
translatePigLatin("eight") /*should return "eightway".*/
// Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return "artzschway".
// Should handle words without vowels. translatePigLatin("rhythm") should return "rhythmay".