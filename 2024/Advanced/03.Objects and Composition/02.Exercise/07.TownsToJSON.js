function solve(array) {
    // const regex = /([A-Za-z]+\s)+|([0-9]+.[0-9]+)+/g;
    array.shift()
    const res = []
    function splitInput(string) {
        let data = string.slice(2,-2);
        let result = data.split(" | ");
        return result
    }
    for (let row of array) {
        // not working in Judge!!!
        // let [town, latitude, longitude] = row.match(regex)
        // town.trim()
        
        let [town, latitude, longitude] = splitInput(row)
        
        latitude = Number(latitude).toFixed(2)
        longitude = Number(longitude).toFixed(2)
        
        if (town && latitude && longitude) {
            res.push({ Town: town, Latitude: Number(latitude), Longitude: Number(longitude) })
        }
    }
    console.log(JSON.stringify(res));
}
// solve(
//     [
//         '| Town | Latitude | Longitude |',
//         '| Sofia | 12.3456 | 12.3456 |',
//         '| Beijing | 12.3456 | 12.3456 |',
//         '| NewYork | 12.3456 | 12.3456 |',
//         '| New York | 12.3456 | 12.3456 |',
//     ]

// )

//[^[\|\s]+|[\s\|]] - escape | ???

