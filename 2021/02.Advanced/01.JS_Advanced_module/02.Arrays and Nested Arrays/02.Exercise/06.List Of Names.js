// function solve(array) {
//     let result = [];
//     array.sort();
//     for(let i = 0;i < array.length;i++) {
//         console.log(`${i + 1}.${array[i]}`);
//     }
// }
// solve(["John", "Bob", "Christina", "Ema"]);
function solve(array) {
    array.sort(
        (a, b) => a.localeCompare(b)
        );
    array.forEach(e => {
        console.log(`${array.indexOf(e) + 1}.${e}`);
        
    });
}       
solve(["John", "Bob", "Christina", "Ema"]);
