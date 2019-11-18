function LongestWord(sen) {

    // code goes here
    temp = sen.split(" ")

    for (var i = 0; i < temp.length; i++) {
        temp[i] = temp[i].replace(/[^a-zA-Z0-9]/g, '')
    }
    temp.sort((a, b) => {
        return b.length - a.length
    })
    return temp[0]

}

// keep this function call here 
console.log(LongestWord(readline()));