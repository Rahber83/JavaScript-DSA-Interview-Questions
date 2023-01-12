// Find Multiple Duplicates
let array = [6, 9, 15, 6, 13, 9, 11, 15];
let index = 0;
newArr = [];

const findDuplicates = (array) => {
    for(let i = 0; i < array.length - 1; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i] === array[j]){
                newArr[index] = array[i];
                index++;
            }
        }
    }
    return newArr;
}

console.log(findDuplicates(array));