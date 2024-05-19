function solve(mouth, year){
    let weekNumber = new Date(Number(year), Number(mouth), 0);
    return weekNumber.getDate()

}
console.log(solve(1, 2012))
console.log(solve(2, 2021))
