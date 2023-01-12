//Count Duplicates Characters and Number of Frequency of the Characters
let str = "shubham";
const countDuplicateCharacters = (char) => {
    let duplicate = {};

    for(let i = 0; i < char.length; i++){
        if(duplicate[str[i]]){
            duplicate[str[i]]++;
        }else{
            duplicate[str[i]] = 1;
        }
    }
    return duplicate;
};
console.log(countDuplicateCharacters(str));