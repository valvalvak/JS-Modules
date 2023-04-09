function solve(squareMeters){
    squareMeters = Number(squareMeters)
    sum = squareMeters * 7.61
    discount = sum * 0.18
    console.log(`The final price is: ${sum-discount} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}
solve(["150"])