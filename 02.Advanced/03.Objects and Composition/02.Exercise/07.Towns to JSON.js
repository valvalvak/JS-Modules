function solve(array){
    const townData = [];

    function splitInput(string) { 
        let data = string.slice(2, -2);
        let result = data.split(" | ");
        return result
    }
    for (let i = 1; i < array.length; i++){
        let string = splitInput(array[i]);
        let [town, latitude, longitude] = string;
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        let currentTown = {
            Town: town,
            Latitude: Number(latitude),
            Longitude: Number(longitude)
        }
        townData.push(currentTown);
        // console.log(currentTown)
    }
    console.log(JSON.stringify(townData));

}

// solve([
//     '| Town | Latitude | Longitude |',
//     '| Sofia | 42.696552 | 23.32601 |',
//     '| Beijing | 39.913818 | 116.363625 |'
// ]);