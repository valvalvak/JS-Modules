function solve(array) {
    let resultArray = [...array];
    resultArray.sort((a,b) => a - b);
    resultArray.splice(2,resultArray.length)
    console.log(resultArray.join(" "));
}
// solve([30, 15, 50, 5]);
// solve([3, 0, 10, 4, 7, 3]);