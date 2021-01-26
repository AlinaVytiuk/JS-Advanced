// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.
// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
    var arrStr = str.split(''),
        i,
        size = arrStr.length,
        arr = [];

    for (i = 0; i < size; i += 1) {
        switch (arrStr[i]) {
            case 'G':
                arr.push([arrStr[i], 'C']);
                break;
            case 'C':
                arr.push([arrStr[i], 'G']);
                break;
            case 'A':
                arr.push([arrStr[i], 'T']);
                break;
            case 'T':
                arr.push([arrStr[i], 'A']);
                break;
        }
    }

    return arr;
}

pairElement("ATCGA") /*should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].*/
pairElement("TTGAG") /*should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].*/
pairElement("CTCTA") /*should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].*/