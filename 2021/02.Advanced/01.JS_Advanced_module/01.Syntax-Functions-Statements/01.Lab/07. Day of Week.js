function solve(givenDay) {
    const weekDays = Array(
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    );
    if (weekDays.includes(givenDay)){
        console.log(weekDays.indexOf(givenDay) + 1);
    } else{
        console.log(`error`);
    }
}


// solve('Monday');
// solve('Friday');
// solve('Invalid');