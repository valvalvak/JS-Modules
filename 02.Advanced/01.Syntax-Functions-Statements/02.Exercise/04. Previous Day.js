function solve(year, month, day) {
    if (day)
    const date = Temporal.PlainDate.from({ year: year, month: month, day: day }); // => 2006-08-24
    date.year; // => 2006
    date.inLeapYear; // => false
    date.toString(); // => '2006-08-24'
}
solve(2016, 9, 30);
solve(2016, 10, 1);

// size = matrix.length - 1
// currentRow = x // from [x, y]
// currentCol = y // from [x, y]
// for (i = 0; i >= matrix.length; i++){
//     matrix[i][i] // @first diagonal
//     matrix[size - i][size - i] // @second diagonal
//     matrix[currentRow][i] // @row check
//     matrix[i][currentCol] // @col check
// }