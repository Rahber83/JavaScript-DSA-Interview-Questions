// 1--> Fully reverse the String
let str = "hello world";

const reverseString = (rev) => {
    let newStr = "";
    for (let i = rev.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr;
};
console.log(reverseString(str));

// 2---> Reverse a string using in-built method
let str1 = "hello world";

const rev = str1.split('').reverse().join('');
console.log(rev);


// 3---> Reverse each word of the string in there place using in-built method
let str2 = "hello world"
const rev2 = (string) => {
    //here after the first split function method i give a space because 
    //i want the string to reverse each word and then join so as soon as the 
    //split method encountered the space it reverse them and same for last join method;
    return string.split(' ').map(function (item) {
        return item.split('').reverse().join('')
    }).join(' ');
}
console.log(rev2(str2));

