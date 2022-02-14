// my solutions

// With a decrementing for loop
function reverseStr(str){
    let newStr = "";
    for (let i=Str.length-1; i>=0; i--){
        newStr += str[i]; 
    }
    return newStr;
}

console.log(reverseStr('Hello'))