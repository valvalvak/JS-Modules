function solve(arr) {
    let solutionResult = [];
    for(const str of arr) {
        let [name,level,items] = str.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        solutionResult.push({name,level,items});
    }
    return JSON.stringify(solutionResult);
}

solve(
    ['Jake / 1000 / Gauss, HolidayGrenade']
    )