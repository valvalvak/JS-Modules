function solve(obj) {
    const engineSize = {
        small: {power: 90,volume: 1800},
        normal: {power: 120,volume: 2400},
        monster: {power: 200,volume: 3500}
    }
    const car = {};
    function carEngine(power) {
        if(power <= 90) {
            return engineSize.small;
        }
        else if(power <= 120) {
            return engineSize.normal;
        }
        else {
            return engineSize.monster;
        }
    }
    const oddWheelSize = obj.wheelsize % 2 == 0 ? obj.wheelsize - 1 : obj.wheelsize;

    car.model = obj.model;
    car.engine = carEngine(obj.power);
    car.carriage = {type: obj.carriage,color: obj.color};
    car.wheels = new Array(4).fill(oddWheelSize,0,4);

    return car;

}
// console.log(solve({
//     model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14 
// }))

// console.log(solve({
//     model: 'Opel Vectra',
//     power: 110,
//     color: 'grey',
//     carriage: 'coupe',
//     wheelsize: 17 
// }))