function solve(arg1, arg2) {
    let startingNum = Number(arg1);
    let endingNum = Number(arg2);
    let sumResult = Number();
    for (let currentNum = startingNum; currentNum <= endingNum; currentNum++) {
        sumResult += currentNum;
    }
    return sumResult    
}
console.log(solve("1", "5"));
console.log(solve("-8", "20"));