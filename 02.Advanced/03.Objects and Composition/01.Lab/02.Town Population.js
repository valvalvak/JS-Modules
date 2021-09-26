function solve(array){
    function splitString(stringToSplit, separator) {
        const arrayOfStrings = stringToSplit.split(separator);
        return arrayOfStrings
    }
    const townPopulation = {}
    const solutionSeparator = " <-> "
    for (let currentString of array){
        let [town, population] = splitString(currentString, solutionSeparator);
        population = Number(population);
        if (townPopulation[town] != undefined) { population += townPopulation[town]}
        townPopulation[town] = population
    }
    for (let key in townPopulation){
        console.log(`${key} : ${townPopulation[key]}`)
    }
}

// solve(['Sofia <-> 1200000',
// 'Montana <-> 20000',
// 'New York <-> 10000000',
// 'Washington <-> 2345000',
// 'Las Vegas <-> 1000000'])

// solve(['Istanbul <-> 100000',
// 'Honk Kong <-> 2100004',
// 'Jerusalem <-> 2352344',
// 'Mexico City <-> 23401925',
// 'Istanbul <-> 1000'])