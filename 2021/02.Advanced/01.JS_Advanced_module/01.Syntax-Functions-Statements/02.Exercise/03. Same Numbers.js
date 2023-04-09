function solve(integer) {
    let intToString = integer.toString();
    if (new Set(intToString).size === 1){
        console.log(true);
    }
    else{
        console.log(false);
    }
    let sumOfDigits = Number();
    for (val of intToString){
        sumOfDigits += Number(val);
    }
    console.log(sumOfDigits)
}
// solve(2222222);
// solve(1234);
