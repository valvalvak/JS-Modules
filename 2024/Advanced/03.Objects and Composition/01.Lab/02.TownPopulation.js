function solve(array) {
    const cities = {}

    for (str of array) {
        let [town, population] = str.split(' <-> ')
        population = Number(population)
        if (cities[town] == undefined) { 
            cities[town] = 0 
        }
        cities[town] += population
        
    }
    for (let town in cities) {
        console.log(`${town} : ${cities[town]}`)
    }
}
solve(
    [
        'Sofia <-> 1200000',
        'Montana <-> 20000',
        'New York <-> 10000000',
        'Washington <-> 2345000',
        'Las Vegas <-> 1000000'
    ])
