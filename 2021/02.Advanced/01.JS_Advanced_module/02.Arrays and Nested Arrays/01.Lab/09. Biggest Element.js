function solve(twoDimensionMatrix) {
    let result = Number(twoDimensionMatrix[0][0]);
    for(let array of twoDimensionMatrix) {
        if(result < Math.max(...array)) {
            result = Math.max(...array);
        }
    }
    return result

}
// console.log(solve([
//     [20, 50, 10],
//     [8, 33, 145]
// ]));

// console.log(solve([
//     [3, 5, 7, 12],
//     [-1, 4, 33, 2],
//     [8, 3, 0, 4]
// ]));
