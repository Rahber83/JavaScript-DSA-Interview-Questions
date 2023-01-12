// 1---> Find Pairs of Target Sum
let array = [2,5,6,3,0,1];
const findSumPairs = (arr) => {
    let target = 10;

    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 1; j  <arr.length; j++){
            if(arr[i]  + arr[j] === target & i !== j){
                return [arr[i],arr[j]];
            }
        }
    }
    return "No Pairs found"
};
console.log(findSumPairs(array));