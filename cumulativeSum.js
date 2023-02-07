// 1--> Cumulative Sum 
let array = [6, 7, 5, 1, 4, 5, 7, 8, 10];
const cumulativeSum = (arr) => {
    let result = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        result.push(arr[i] + result[i - 1])
    }
    return result;
};
console.log(cumulativeSum(array));


// 2--> Adjacent Sum
let array2 = [6, 7, 5, 1, 4, 5, 7, 8, 10];
const adjacentSum = (arr) => {
    let result = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        result.push(arr[i] + arr[i - 1])
    }
    return result
}
console.log(adjacentSum(array));