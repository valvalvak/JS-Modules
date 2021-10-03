function solve(array){
    const operands = [];
    let result = Number;
    for (let element of array){
        if (typeof element === "number"){
            operands.push(Number(element));
        }else{
            if (operands.length >= 2){
                let b = operands.pop();
                let a = operands.pop();
                if (element == "+"){
                    result = a + b;
                    operands.push(result);
                }else if (element == "-"){
                    result = a - b;
                    operands.push(result);
                }else if (element == "*"){
                    result = a * b;
                    operands.push(result);
                }else if (element == "/"){
                    result = a / b;
                    operands.push(result);
                }
            }else{
                return console.log("Error: not enough operands!");
            }
        }
    }
    if (operands.length > 1){
        console.log("Error: too many operands!");
    }else{
        console.log(result)
    }
}
// solve([3, 4, '+']);
// solve([5, 3, 4, '*', '-']);
// solve([7, 33, 8, '-'])
// solve([15, '/'])