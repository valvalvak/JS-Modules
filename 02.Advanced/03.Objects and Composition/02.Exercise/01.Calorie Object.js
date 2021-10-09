function solve(array) {
    const result = {}
    for(let i = 1;i < array.length;i += 2) {
        let product = array[i - 1];
        let value = Number(array[i]);
        result[product] = value;
    }
    console.log(result)
}

// solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
// solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);