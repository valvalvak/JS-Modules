function solve(val1, val2) {
    let result = Number();
    val1 = Number(val1);
    val2 = Number(val2);
    for (let i = val1; i <= val2; i++) {
        result += i;
    }
    console.log(result)
}

solve('1', '5')