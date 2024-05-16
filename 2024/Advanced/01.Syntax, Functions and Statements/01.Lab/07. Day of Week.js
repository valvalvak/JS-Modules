function solve(text){
    let weekDays = ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (weekDays.includes(text)){
        console.log(weekDays.indexOf(text) + 1);
    } else {
        console.log('error');
    }
}
solve('Monday')