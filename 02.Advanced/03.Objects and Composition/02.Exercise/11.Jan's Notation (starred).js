function solve(array){
    const operands = [];
    let result = Number;
    array.forEach(element => {
        if (typeof element === "number"){
            operands.unshift(Number(element));
        }else{
            let a = operands.shift();
            let b = operands.shift();
            if (element == "+"){
                result = a + b;
            }else if (element == "-"){
                result = a - b;
            }else if (element == "*"){
                result = a * b;
            }else if (element == "/"){
                result = a / b;
            }
            }
        }
    );
    console.log(result)
}
solve([3, 4, '+'])