function solve(matrix){
    let a = 0;
    let b = 0;
    let size = matrix.length - 1;
    for (let i = 0; i < matrix.length; i++){
        a += matrix[i][i]
        b += matrix[i][size-i]
    }
    console.log(a, b);
}
// solve([[20, 40],
//     [10, 60]]);
// solve([[3, 5, 17],
//     [-1, 7, 14],
//     [1, -8, 89]])
