function TimeConvert(num) {

    // code goes here  
    return `${parseInt(num / 60)}:${num % 60}`;

}

// keep this function call here 
console.log(TimeConvert(readline()));