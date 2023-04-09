function solve(input){
    depositedAmount = Number(input[0])
    timePeriod = Number(input[1])
    annualInterest= Number(input[2]) / 100

    // сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
    let totalSum = depositedAmount + timePeriod * ((depositedAmount * annualInterest) / 12)
    
    console.log(`${totalSum}`)
}

solve(
    [
        "2350",
        "6",
        "7"
]
)
