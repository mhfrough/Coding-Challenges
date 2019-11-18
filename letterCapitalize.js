function LetterCapitalize(str) {

    // code goes here 
    var temp = "";
    check = false;
    for (var i = 0; i < str.length; i++) {
        if (check || i === 0) {
            temp += "" + str.charAt(i).toUpperCase();
            check = false;
        } else {
            temp += "" + str.charAt(i)
            if (str.charAt(i).charCodeAt(0) == 32)
                check = true;
        }
    }
    return temp;

}

// keep this function call here 
console.log(LetterCapitalize(readline()));