function solve(year, month, day) {
    day--;
    const theBigDay = new Date(year, month, day);
    let y = theBigDay.getFullYear();
    let m = theBigDay.getMonth();
    let d = theBigDay.getDate();
    console.log(`${y}-${m}-${d}`);
}

solve(2020, 9, 1);
solve(2016, 10, 1);
