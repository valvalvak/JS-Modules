function solve(array){
    let result = array.sort((a, b) => a - b)
    return result.slice(Math.floor(result.length / 2), result.length)
}
console.log(solve([4, 7, 2, 5]))
console.log(solve([3, 19, 14, 7, 2, 19, 6]))