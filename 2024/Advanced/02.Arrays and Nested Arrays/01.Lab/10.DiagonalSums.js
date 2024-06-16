function solve(array) {
    let leftToRightSum = 0;
    let rightToLeftSum = 0;
    let lastIndex = array.length - 1;
    for (let i = 0; i < array.length; i++) {
        leftToRightSum += array[i][i];
        rightToLeftSum += array[i][lastIndex - i];
    }
    console.log(`${leftToRightSum} ${rightToLeftSum}`)
}

solve([[20, 40], [10, 60]]);
solve([[3, 5, 17], [-1, 7, 14], [1, -8, 89]])