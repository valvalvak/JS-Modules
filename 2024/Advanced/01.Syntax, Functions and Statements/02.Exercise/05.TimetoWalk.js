function solve(steps, footprint, kmh) {
    function formatNumber(number) {
        if (number < 10) {
            return '0' + number.toString()
        } else {
            return number
        }
    }
    let params = {
        distance: steps * footprint,
        breakDistance: 500,
        seconds: 60,
        speedInMeters: kmh * 1000    
    }
    let travelTime = (params.distance / params.speedInMeters) + (Math.floor(params.distance / params.breakDistance) / params.seconds);
    let hours = Math.floor(travelTime)
    let minutes = Math.floor(travelTime * 60);
    let seconds = Math.round(((travelTime * 60) - minutes) * 60);
    console.log(`${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`);

}
solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);