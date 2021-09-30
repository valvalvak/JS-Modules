function solve(array) {
    function sumRow(rowArray){
        return rowArray.reduce((a, b) => a + b);
    }
    let sum = sumRow(array[0]);
    for (let row of array){
        if (sum == sumRow(row)){
            continue;
        }else{
            return false;
        }
    }
    return true
}
// console.log(solve([
//     [4, 5, 6],
//     [6, 5, 4],
//     [5, 5, 5]
// ]));

// console.log(solve([
//     [11, 32, 45],
//     [21, 0, 1],
//     [21, 1, 1]
// ]));

// console.log(solve([
//     [1, 0, 0],
//     [0, 0, 1],
//     [0, 1, 0]
// ]));
