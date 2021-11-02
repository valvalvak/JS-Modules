function solve(matrix) {
    let result = 0;
    for(let r = 0;r < matrix.length;r++) {
        let row = matrix[r];
        for(let c = 0;c < row.length;c++) {
            let currentElement = matrix[r][c];
            let rightElement;
            let bottomElement;

            if(c + 1 < matrix[r].length) {
                rightElement = matrix[r][c + 1];
                if(currentElement === rightElement) {
                    result += 1;
                }
            }
            if(r + 1 < matrix.length) {
                bottomElement = matrix[r + 1][c];
                if(currentElement === bottomElement) {
                    result += 1;
                }
            }
        }
    }
    return result;
}

// console.log(solve([
//     ['2', '3', '4', '7', '0'],
//     ['4', '0', '5', '3', '4'],
//     ['2', '3', '5', '4', '2'],
//     ['9', '8', '7', '5', '4']
// ]));

// console.log(solve([
//     ['test', 'yes', 'yo', 'ho'],
//     ['well', 'done', 'yo', '6'],
//     ['not', 'done', 'yet', '5']
// ]));