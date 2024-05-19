function solve(fruitType, weightInGrams, pricePerKg){
    let weight = Number(weightInGrams) / 1000;  
    let money = weight * Number(pricePerKg) ; 
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruitType}.`)
}
solve('orange', 2500, 1.80)