function solve(num1, num2, num3){
    let largestNumber = Number(num1);
    const numbersArray = Array(num1, num2, num3);
    numbersArray.forEach(getNum);
    function getNum(currentNum){
        if (currentNum > largestNumber){
            largestNumber = currentNum
        }
    }
    console.log(`The largest number is ${largestNumber}.`)

}
solve(5, -3, 16)
solve(-3, -5, -22.5)