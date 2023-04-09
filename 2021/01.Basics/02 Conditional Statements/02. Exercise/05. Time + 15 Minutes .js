// hoursInput, minutesInput
function solve(input_values){
    hoursInput = Number (input_values[0]) * 60
    minutesInput = Number (input_values[1])
    timeSum = hoursInput + minutesInput + 15
    hoursOut = Math.floor(timeSum / 60)
    minutesOut = timeSum % 60
    if (hoursOut === 24){
        hoursOut = 0
    }
    if (minutesOut === 60){
        minutesOut = 0
    }
    if (minutesOut < 10){
        console.log(`${hoursOut}:0${minutesOut}`)
    }
    else{
        console.log(`${hoursOut}:${minutesOut}`)
    }
}
// solve(["1", "46"])
// solve(["0", "01"])
// solve(["23", "59"])
// solve(["11", "08"])
// solve(["12", "49"])
