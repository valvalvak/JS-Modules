function solve(array, rotationAmount){
    for (i = 0; i < rotationAmount; i++){
        array.unshift(array.pop())        
    }
    console.log(array.join(' '));
}

solve(['1', 
    '2', 
    '3', 
    '4'], 
    2
    )

console.log('*****************************')

solve(['Banana', 
    'Orange', 
    'Coconut', 
    'Apple'], 
    15
    )