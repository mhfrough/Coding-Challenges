function LetterChanges(str) {

    // code goes here  
    var temp = "";
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i).charCodeAt(0) >= 97 && str.charAt(i).charCodeAt(0) < 122) {
            temp += "" + String.fromCharCode(str.charAt(i).charCodeAt(0) + 1)
        } else if (str.charAt(i).charCodeAt(0) == 122) {
            temp += "a"
        }
        else {
            temp = temp + "" + str.charAt(i)
        }
    }
    return temp.replace(/[aeiou]/g, (el) => {
        return el.toUpperCase();
    })
}

// keep this function call here 
console.log(LetterChanges(readline()));