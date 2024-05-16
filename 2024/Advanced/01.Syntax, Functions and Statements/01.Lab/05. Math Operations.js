function solve(val1, val2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = val1 + val2;
            break;
        case '-':
            result = val1 - val2;
            break;
        case '/':
            result = val1 / val2;
            break;
        case '*':
            result = val1 * val2;
            break;
        case '%':
            result = val1 % val2;
            break;
        case '**':
            result = val1 ** val2;
            break;
    }
    console.log(result)
}

solve(5, 6, '+')
solve(3, 5.5, '*')