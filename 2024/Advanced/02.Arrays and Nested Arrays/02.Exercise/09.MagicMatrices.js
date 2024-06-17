function solve(nestedArrays) {
    const resultSums = []
    function sum(array) {
        return array.map(Number).reduce((a, b) => a + b)
    }

    for (x = 0; x < nestedArrays.length; x++) {
        let rowSum = sum(nestedArrays[x])
        resultSums.push(rowSum);
        let colArr = []
        for (y = 0; y < nestedArrays[x].length; y++) {
            colArr.push(nestedArrays[y][x])
        }
        let colSum = sum(colArr)
        // if (!colSum == rowSum) {
        //     return false
        // }
        resultSums.push(colSum);
        colArr = []
    }

    return resultSums.every((val, _, arr) => val === arr[0])
}

console.log(solve(
    [
        [4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]
    ]
))
console.log(solve(
    [
        [11, 32, 45],
        [21, 0, 1],
        [21, 1, 1]

    ]
))
console.log(solve(
    [
        [1, 0, 0],
        [0, 0, 1],
        [0, 1, 0]
    ]
))
console.log(solve(
    [
        [4, 5, 6,],
        [5, 5, 5,],
        [6, 5, 4,],
    ]
))
console.log(solve(
    [
        [1, 1],
        [1, 1]
    ]
))