function solve(speed = Number, area = String) {
    const limits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    }
    const status = {
        '20': 'speeding',
        '40': 'excessive speeding',
        'reckless': 'reckless driving',
    }

    let limit = limits[area];
    let speeding = speed - limit;

    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`)
    } else {
        if (speeding <= 20) {
            console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status['20']}`)
        } else if (speeding <= 40) {
            console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status['40']}`)
        } else{
            console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status['reckless']}`)            
        }
    }
}

solve(40, 'city')
solve(21, 'residential')
solve(120, 'interstate')
solve(200, 'motorway')