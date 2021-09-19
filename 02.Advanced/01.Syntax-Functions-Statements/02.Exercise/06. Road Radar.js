function solve(speed, givenArea) {
    const speedLimits = {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20
    }

    function checkSpeed(areaSpeedLimit){
        if (speed - areaSpeedLimit <= 0) {
            console.log(`Driving ${speed} km/h in a ${areaSpeedLimit} zone`);
        } else if (speed - areaSpeedLimit <= 20) {
            console.log(`The speed is ${(speed - areaSpeedLimit)} km/h faster than the allowed speed of ${areaSpeedLimit} - ${"speeding"}`);
        } else if (speed - areaSpeedLimit <= 40) {
            console.log(`The speed is ${(speed - areaSpeedLimit)} km/h faster than the allowed speed of ${areaSpeedLimit} - ${"excessive speeding"}`);
        } else {
            console.log(`The speed is ${(speed - areaSpeedLimit)} km/h faster than the allowed speed of ${areaSpeedLimit} - ${"reckless driving"}`);
        }
    }

    for (let area in speedLimits) {
        if (area === givenArea) {
            checkSpeed(speedLimits[area]);
        }
    }
}

// solve(40, 'city');
// solve(21, 'residential');
// solve(120, 'interstate');
// solve(200, 'motorway');