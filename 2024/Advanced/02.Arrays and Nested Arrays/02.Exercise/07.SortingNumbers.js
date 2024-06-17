function solve(array) {
    const result = []
    array.sort((a, b) => a - b)
    while (array.length > 0){
        result.push(array.shift())
        result.push(array.pop())
    }
    
    return result
}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))
console.log(solve([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]))