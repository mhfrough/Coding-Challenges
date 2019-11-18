function FirstReverse(str) {

  // code goes here  
  //return str.split("").reverse().join(""); 

  var temp = "";
  for (var i = str.length - 1; i >= 0; i--) {
    temp += "" + str.charAt(i)
  }
  return temp
}

// keep this function call here 
console.log(FirstReverse(readline()));