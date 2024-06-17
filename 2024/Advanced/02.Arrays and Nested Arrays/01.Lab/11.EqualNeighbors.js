function solve(matrix = []) {
    let pairs = 0;
    function getNewIndex(i) {
        if (i < 0) {
            i = 0;
        }
        return i
    }
    function checkPairs(currentEl, elements) {
        for (el of elements) {
            if (el === currentEl) {
                pairs += 1
            }
        }
    }
    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix[x].length; y++) {

            let currentEl = matrix[x][y];
            let leftIndex = getNewIndex(y - 1);
            let upperIndex = getNewIndex(x - 1);

            let leftEl = ''
            let upperEl = ''

            if (upperIndex == x && leftIndex == y) {
                continue
            }
            if (upperIndex != x) {
                upperEl = matrix[upperIndex][y]
            }
            if (leftIndex != y) {
                leftEl = matrix[x][leftIndex]
            }
            checkPairs(currentEl, [leftEl, upperEl])
        }
    }
    return pairs
}


console.log(solve([
    [2, 2, 5, 7, 4,],
    [2, 5, 5, 4, 2,],
    [4, 0, 5, 3, 4,],
]))
// console.log(solve([
//     ['2', '3', '4', '7', '0'],
//     ['4', '0', '5', '3', '4'],
//     ['2', '3', '5', '4', '2'],
//     ['9', '8', '7', '5', '4'],
// ]))
// console.log(solve([
//     ['test', 'yes', 'yo', 'ho'],
//     ['well', 'done', 'yo', '6'],
//     ['not', 'done', 'yet', '5'],
// ]))