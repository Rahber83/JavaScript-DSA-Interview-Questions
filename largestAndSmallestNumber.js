//Find Largest and Smallest Number

let array = [6,7,5,1,4,5,7,8,10];
const findLargestAndSmallest = (arr) => {
    let max = arr[0];
    let min = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }else if(arr[i] < min){
            min = arr[i];
        }
    }
    return {
        "max": max,
        "min": min
    }
};

console.log(findLargestAndSmallest(array));