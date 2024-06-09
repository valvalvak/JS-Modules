function solve(array) {
    const newArray = array.map(Number);
    let sumFirstLast =newArray[0] + newArray[newArray.length - 1]
    return sumFirstLast
}

console.log(solve(['20', '30', '40']));