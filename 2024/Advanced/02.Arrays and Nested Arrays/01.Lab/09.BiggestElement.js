function solve(array){
    let maxNumber = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < array.length; i++) {
        let currentValue = Math.max(...array[i]);
        if (currentValue > maxNumber){
            maxNumber = currentValue;
        }};
    return maxNumber
}
console.log(solve([[20, 50, 10], [8, 33, 145]]));