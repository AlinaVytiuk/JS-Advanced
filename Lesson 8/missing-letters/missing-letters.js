// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.


function fearNotLetter(str) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz',
        i,
        size = str.length,
        start = alphabet.indexOf(str[0]);

    for (i = start; i < start + size; i += 1){
        if(!str.includes(alphabet[i])){
            return alphabet[i];
        }
    }
    return undefined;
}


fearNotLetter("abce") /*should return "d".*/
fearNotLetter("abcdefghjklmno") /*should return "i".*/
fearNotLetter("stvwx") /*should return "u".*/
fearNotLetter("bcdf") /*should return "e".*/
fearNotLetter("abcdefghijklmnopqrstuvwxyz") /*should return undefined.*/