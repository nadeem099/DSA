// my solutions

// With a decrementing for loop
// Time complexity -> O(n)
function reverseStr(str){
    let newStr = "";
    for (let i=str.length-1; i>=0; i--){
        newStr += str[i]; 
    }
    return newStr;
}

console.log(reverseStr('Hello'))

// Other Solutions

// With recursion
// Time complexity -> O(n)
// link: https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
  }
  reverseString("hello");
