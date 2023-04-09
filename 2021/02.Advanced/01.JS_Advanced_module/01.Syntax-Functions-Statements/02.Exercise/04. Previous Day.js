function solve(year, month, date) {
    let leftMonthBool = false;
    if (date - 1 === 0) {
        month -= 1;
        leftMonthBool = true;
    };
    const theDateBefore = new Date(year, month, date);
    theDateBefore.setDate(date - 1);
    
    function printSolution(dateParams, leftMonthBool) {
        let d = dateParams.getDate();
        let m = dateParams.getMonth();
        if (leftMonthBool) {
            m += 1;
        }
        let y = dateParams.getFullYear();
        return (`${y}-${m}-${d}`);
    };

    console.log(printSolution(theDateBefore, leftMonthBool));
}