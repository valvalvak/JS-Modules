function solve(number){
    const toArray = number.toString().split('').map(el => Number(el));
    let areAllEqual = toArray.every(a => a === toArray[0]);
    console.log(areAllEqual);
    console.log(toArray.reduce((a, b) => a+b));
}
solve(2222222);
solve(1234);