// 1--> if Array is Sorted

let array = [1,2,3,4,5,6,7,8,10];
 const findMissingNumber = (arr) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] + 1 !== arr[i+1]){
            return arr[i] + 1;
        }
    }
    return false;
 }

 console.log(findMissingNumber(array));