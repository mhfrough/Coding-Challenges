function SimpleSymbols(str) {

    // code goes here  
    var temp = []
    for (var i = 0; i < str.length; i++) {
        temp.push(str.charAt(i))
    }

    check = false
    for (var i = 0; i < temp.length; i++) {
        if (temp[i] == "+" && temp[i + 2] == "+" || temp[i] == "=" && temp[i + 2] == "=") {
            i = i + 2;
            check = true;
        } else {
            return false
        }
    }
    return check;
    
}

// keep this function call here 
console.log(SimpleSymbols(readline()));