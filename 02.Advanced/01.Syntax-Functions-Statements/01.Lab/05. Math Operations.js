function solve(arg1, arg2, operatorAsString) {
    switch (operatorAsString) { // The string may be one of the following: '+', '-', '*', '/', '%', '**'.
        case "+": console.log(arg1 + arg2); break;
        case "-": console.log(arg1 - arg2); break;
        case "*": console.log(arg1 * arg2); break;
        case "/": console.log(arg1 / arg2); break;
        case "%": console.log(arg1 % arg2); break;
        case "**": console.log(arg1 ** arg2); break;
    }
}

// solve(5, 6, '+')
// solve(3, 5.5, '*')
