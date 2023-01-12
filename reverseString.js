// 1--> Fully reverse the String
let str = "hello world";

const reverseString = (rev) => {
    let newStr = ""; 
    for(let i = rev.length - 1; i >= 0; i--){
        newStr += str[i]
    }
    return newStr;
};
console.log(reverseString(str));