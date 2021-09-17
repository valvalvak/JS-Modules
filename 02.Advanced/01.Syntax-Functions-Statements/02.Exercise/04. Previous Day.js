function solve(year, month, day) {
    let theDayBefore = new Date(date.getTime())
    theDayBefore.setDate(date.getDate() - 1);
    console.log(theDayBefore);
}
solve(2016, 9, 30);
solve(2016, 10, 1);