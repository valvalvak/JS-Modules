function solve(array, nthElement){
    let newArray = []
    for (i = 0; i<array.length; i +=nthElement){
        newArray.push(array[i])
    }
    return newArray
}

console.log(solve(['5', 
    '20', 
    '31', 
    '4', 
    '20'], 
    2
    ))