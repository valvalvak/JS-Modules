function solve(param) {
    if (param) {
        count = Number(param)
        result = "*".repeat(count)
        for (let i = count; i < count; i++) {
            console.log(`${result}`)
        }
    }

}

solve(1);
solve(2);
solve(5);
solve();