// // 1---> Find if String is Palindrome.
// let str = "ma";
// const palindromeString = (str) => {
//     if (str.length === "") {
//         return console.log("String is Empty");
//     }
//     let i = 0;
//     let j = str.length - 1;

//     while (i < j) {
//         if (str.charAt(i) !== str.charAt(j)) {
//             return false;
//         }
//         i++;
//         j--;
//     }
//     return true;
// }

// console.log(palindromeString(str));

//Practice
let str2 = "mala"

const palindromeStr = (str) => {
    if (str.length === "") {
        return console.log("String is empty")
    }
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
        if (str.charAt(i) !== str.charAt(j)) {
            return console.log("String is not a Palindrome")
        }
        i++;
        j--;
    }
    return console.log("String is Palindrome")
}

console.log(palindromeStr(str2))