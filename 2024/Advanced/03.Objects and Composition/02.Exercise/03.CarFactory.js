function solve(obj) {
    const car = {}
    const engines = {
        SmallEngine: { power: 90, volume: 1800 },
        NormalEngine: { power: 120, volume: 2400 },
        MonsterEngine: { power: 200, volume: 3500 },
    }
    function getEngineSizeObj(engines, power) {
        if (power <= 90) { return engines.SmallEngine }
        else if (power <= 120) { return engines.NormalEngine }
        else { return engines.MonsterEngine }
    }
    function getOddWheelSize(currentSize) {
        if (currentSize % 2 == 0) { return currentSize - 1 }
        return currentSize
    }
    const oddWheelSize = obj.wheelsize % 2 == 0 ? obj.wheelsize - 1 : obj.wheelsize;
    const oddWheelSizeArray = new Array(4).fill(oddWheelSize, 0, 4)

    car.model = obj.model;
    car.engine = getEngineSizeObj(engines, obj.power)
    car.carriage = { type: obj.carriage, color: obj.color }
    car.wheels = oddWheelSizeArray

    return car
}

console.log(solve(
    {
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    })
)

// let input = {
//     model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14
// };

// let expected = {
//     model: 'VW Golf II',
//     engine: {
//         power: 90,
//         volume: 1800
//     },
//     carriage: {
//         type: 'hatchback',
//         color: 'blue'
//     },
//     wheels: [13, 13, 13, 13]
// };

// let output = result(input);

// expect(output.model).to.equal(expected.model, "Car model didn't match.");
// expect(output.engine.power).to.equal(expected.engine.power, "Engine power rating didn't match.");
// expect(output.engine.volume).to.equal(expected.engine.volume, "Engine volume didn't match.");
// expect(output.carriage.type).to.equal(expected.carriage.type, "Carriage type didn't match.");
// expect(output.carriage.color).to.equal(expected.carriage.color, "Car color type didn't match.");
// expect(output.wheels.length).to.equal(4, "Number of wheels didn't match.");
// expect(output.wheels[0]).to.equal(expected.wheels[0], "Wheel size didn't match.");
// expect(output.wheels[0] == output.wheels[1] &&
//     output.wheels[0] == output.wheels[2] &&
//     output.wheels[0] == output.wheels[3]).to.equal(true, "Wheel size didn't match.");