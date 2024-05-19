function solve(fruitType, weightInGrams, pricePerKg){
    let weight = Math.round(Number(weightInGrams) / 100);  
    let money = weight * Number(pricePerKg) ; 
    console.log(`I need ${money} to buy ${weight} kilograms ${fruitType}.`)
}
solve('orange', 2500, 1.80)