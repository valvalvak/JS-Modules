function solve(array = []) {
    const obj = {}
    for (let el of array) {
        let [k, v] = el.split(' : ')
        v = Number(v)
        obj[k] = v;
    }
    let sortedArray = Object.keys(obj).sort((a, b) => a.localeCompare(b))
    const resultObj = {}
    for (let key of sortedArray) {
        let firstLetter = key[0];
        if (!resultObj[firstLetter]) {
            resultObj[firstLetter] = {}
        }
        resultObj[firstLetter][key] = obj[key]
    }
    for (let keyLetter in resultObj){
        console.log(keyLetter)
        for (let entries in resultObj[keyLetter]){
            console.log(`  ${entries}: ${resultObj[keyLetter][entries]}`)
        }
    }
}

// solve(
//     [
//         'Appricot : 20.4',
//         'Fridge : 1500',
//         'TV : 1499',
//         'Deodorant : 10',
//         'Boiler : 300',
//         'Apple : 1.25',
//         'Anti-Bug Spray : 15',
//         'T-Shirt : 10'
//     ]
// )
// solve(
//     [
//         'Banana : 2',
//         'Rubic\'s Cube : 5',
//         'Raspberry P : 4999',
//         'Rolex : 100000',
//         'Rollon : 10',
//         'Rali Car : 2000000',
//         'Pesho : 0.000001',
//         'Barrel : 10'
//     ]
        
// )