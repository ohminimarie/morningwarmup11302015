//BROKEN RIGHT NOW WILL FIX.

// "cat" -> "dbr"
// "baz" -> "cba"

// write a function that takes an argument of string
// splits the string into an array
// loops through the array and advances each letter to the next letter
// joins the array back into a string
// function returns new string



function encryptString (string) {
    for (var i= 0; i < string.length; i++) {
        var newArr = [];
        newArr.push(String.fromCharCode(charCode + 1));
    }
    newArr.join("");
    return newArr;
};


encryptString("abc");
// encryptString("baz");
// encryptString("hello");
