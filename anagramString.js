// 1---> Find if String is Anagram or Not

let str1 = "lerder";
let str2 = "readel";

const anagramString = (str1,str2) => {
    if(str1.length !== str2.length){
        return "Length is not equal. So String is not an Anagram";
    }

    let string1 = str1.split('').sort().join('');
    let string2 = str2.split('').sort().join('');

    if(string1 === string2){
        return "String is Anagram";
    }

    return "String is not an Anagram";
};
console.log(anagramString(str1,str2));