function solve(mixedArray) {
    let result = [];
    for(let i = 1;i < mixedArray.length;i += 2) {
        let value = mixedArray[i] * 2;
        result.unshift(value);
    }
    return result.join(" ");

}
// console.log(solve([10, 15, 20, 25]));
// console.log(solve([3, 0, 10, 4, 7, 3]));
