function solve(array){
    let values = array.map(Number);
    console.log(values.reduce((a,b) => a + b, 0));
    console.log(values.reduce((a,b) => a + 1/b, 0));
    console.log(values.join(""))
}

// solve([1, 2, 3])
// solve([2, 4, 8, 16])