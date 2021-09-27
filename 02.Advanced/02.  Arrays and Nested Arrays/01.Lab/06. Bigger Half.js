function solve(array) {
    let resultArray = [...array];
    resultArray.sort((a, b) => a - b);
    resultArray.splice(0, Math.floor(resultArray.length / 2))
    return resultArray;
}
// console.log(solve([4, 7, 2, 5]));
// console.log(solve([3, 19, 14, 7, 2, 19, 6]));