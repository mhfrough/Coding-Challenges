function AlphabetSoup(str) {

    // code goes here  
    temp = []
    for (var i = 0; i < str.length; i++) {
        temp.push(str.charAt(i).charCodeAt(0))
    }
    for (var i = 0; i < temp.length; i++) {
        for (var j = 0; j < temp.length; j++) {
            if (temp[j] > temp[i]) {
                t = temp[i]
                temp[i] = temp[j]
                temp[j] = t
            }
        }
    }
    str = ""
    for (var i = 0; i < temp.length; i++) {
        str += "" + String.fromCharCode(temp[i])
    }
    return str;

}

// keep this function call here 
console.log(AlphabetSoup(readline()));