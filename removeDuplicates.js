// 1---> Remove Duplicates from Array through loop
let array = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9, 9, 10];
const removeDuplicates = (arr) => {
    let unique = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            unique.push(arr[i]);
        }
    }
    return unique;
}

console.log(removeDuplicates(array));


//Practice
// let array2 = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9, 9, 10];
let array2 = [1, 2, 9, 7, 3, 6, 6, 4, 5, 9, 7, 8, 8];
const arrayDup = array2.sort();
const duplicateRemove = (arr) => {
    let unique = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            unique.push(arr[i])
        }
    }
    return unique;
}

console.log(duplicateRemove(arrayDup));
