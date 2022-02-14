// my solutions

// iterative method
// Time complexity -> O(n)
function reverseArr(arr, start, end){
    let temp;
    
    while(start < end){
        temp = str[start];
        str[start]=str[end];
        str[end] = temp;
        start++;end--;
    }
    
    return str;
}

// other solutions

// Recursive method
// Time complexity -> O(n)
// explanation -> everything is same as iterative only instead of while loop call the method recursively
// with reverseArr(arr, start+1, end-1)