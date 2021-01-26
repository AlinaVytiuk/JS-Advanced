// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in
// a string to their corresponding HTML entities.

function convertHTML(str) {
    var arrStr = str.split(''),
        i,
        size = arrStr.length;

    for (i = 0; i < size; i += 1) {
        switch (arrStr[i]) {
            case '&':
                arrStr[i] = "&amp;";
                break;
            case '<':
                arrStr[i] = "&lt;";
                break;
            case '>':
                arrStr[i] = "&gt;";
                break;
            case '"':
                arrStr[i] = "&quot;";
                break;
            case '\'':
                arrStr[i] = ";";
                break;
        }
    }

    return arrStr.join('');
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("<>"));
// convertHTML("Dolce & Gabbana") /*should return "Dolce &amp; Gabbana".*/
// convertHTML("Hamburgers < Pizza < Tacos") /*should return "Hamburgers &lt; Pizza &lt; Tacos".*/
// convertHTML("Sixty > twelve") /*should return "Sixty &gt; twelve".*/
// convertHTML('Stuff in "quotation marks"') /*should return "Stuff in &quot;quotation marks&quot;".*/
// convertHTML("Schindler's List") /*should return "Schindler&apos;s List".*/
// convertHTML("<>") /*should return "&lt;&gt;".*/
// convertHTML("abc") /*should return "abc".*/