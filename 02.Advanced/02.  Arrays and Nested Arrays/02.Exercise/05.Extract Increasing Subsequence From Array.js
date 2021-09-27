// function solve(array){
//     let result = [];
//     result.push(array[0]);
//     array.forEach(element => {
//         if (element > Math.max(...result)){
//             result.push(element);
//         }        
//     });
//     return result;
// }

// function solve(array){
//     let result = [];
//     let biggestNum = Number.MIN_SAFE_INTEGER
//     array.forEach(element => {
//         if (element > biggestNum){
//             result.push(element);
//             biggestNum = element;
//         }        
//     });
//     return result;
// }

function solve(array){
    let biggestNum = Number.MIN_SAFE_INTEGER;
    const result = array.filter((element) => {
        if (element > biggestNum){
            biggestNum = element;
            return true
        }
        return false
    });
    return result;
}

// console.log(solve([
//     1,
//     3,
//     8,
//     4,
//     10,
//     12,
//     3,
//     2,
//     24]));

// console.log(solve([
//     1,
//     2,
//     3,
//     4]));

// console.log(solve([
//     20, 
//     3, 
//     2, 
//     15,
//     6, 
//     1]));
