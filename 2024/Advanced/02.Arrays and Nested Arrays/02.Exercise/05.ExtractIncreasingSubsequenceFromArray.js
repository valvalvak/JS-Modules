function solve(array){
    const newArray = [];
    let lastValue = Number.MIN_SAFE_INTEGER
    for (currentValue of array){
        if (currentValue >= lastValue){
            newArray.push(currentValue)
            lastValue = currentValue
        }
    }
    return newArray
}

// function solve(arr) {
//     const res = [];
//     let biggestNum = Number.MIN_SAFE_INTEGER;
//     arr.reduce((accumulated, current) => {
//       if (current >= biggestNum) {
//         biggestNum = current;
//         accumulated.push(biggestNum);
//       }
//       return accumulated;
//     }, res)
//     return res;
//   }

console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24,24,24,24]
    ))