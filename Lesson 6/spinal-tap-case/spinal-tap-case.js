// Convert a string to spinal case. Spinal case is
// all-lowercase-words-joined-by-dashes.

// function spinalCase(str) {
//         return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
// }

function spinalCase(str) {
    var newStr = '',
        arr = str.split(''),
        i,
        size = str.size;

    for (i = 0; i < size; i += 1) {
        if (i > 0) {
            if (arr[i] >= 'A' && arr[i] <= 'Z') {
                if (arr[i - 1] >= 'a' && arr[i - 1] <= 'z') {
                   newStr += '-';
                   newStr += arr[i].toLowerCase();
                   continue;
                }
            } else if (arr[i] === ' ' || arr[i] === '_') {
                    newStr += '-';
                    continue;
                }
            }
        newStr += arr[i].toLowerCase();
    }
    return newStr;
}


spinalCase("This Is Spinal Tap") /*should return "this-is-spinal-tap".*/
spinalCase("thisIsSpinalTap") /*should return "this-is-spinal-tap".*/
spinalCase("The_Andy_Griffith_Show") /*should return "the-andy-griffith-show".*/
spinalCase("Teletubbies say Eh-oh") /*should return "teletubbies-say-eh-oh".*/
spinalCase("AllThe-small Things") /*should return "all-the-small-things".*/