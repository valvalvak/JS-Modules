function solve(hallRent){
    hallRent = Number(hallRent[0])
    let cake = hallRent * 0.20
    let drinks = cake * 0.55
    let animator = hallRent / 3
    let totalSum = hallRent + cake + drinks + animator
    console.log(totalSum)
}
solve(["2250"])
