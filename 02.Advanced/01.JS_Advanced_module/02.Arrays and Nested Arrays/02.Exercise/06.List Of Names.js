function solve(array) {
    let result = [];
    array.sort();
    for(let i = 0;i < array.length;i++) {
        console.log(`${i + 1}.${array[i]}`);
    }
}
// solve(["John", "Bob", "Christina", "Ema"]);
