function solve(year, month, day) {
    const inputDate = new Date(year, month - 1, day);
    const newDate = new Date(inputDate);
    newDate.setDate(inputDate.getDate() -1);
    return `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`

}
console.log(solve(2016, 9, 30))
console.log(solve(2015, 5, 10))
console.log(solve(2024, 10, 1))