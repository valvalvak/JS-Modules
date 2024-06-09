function solve(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        if (value >= 0) {
            result.push(value)
        } else {
            result.unshift(value)
        }
    }
    result.forEach(val => {
        console.log(val) 
    });
}
solve([7, -2, 8, 9])
solve([3, -2, 0, -1])