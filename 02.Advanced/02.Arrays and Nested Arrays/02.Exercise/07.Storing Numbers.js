function solve(array) {
    let sortedArray = [];
    let result = [];
    sortedArray = array.sort((a,b,) => a - b);
    while(sortedArray.length > 0) {
        result.push(sortedArray.shift());
        result.push(sortedArray.pop());
    }
    return result;
    // console.log(sortedArray);
    // console.log(result);
}


// console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
