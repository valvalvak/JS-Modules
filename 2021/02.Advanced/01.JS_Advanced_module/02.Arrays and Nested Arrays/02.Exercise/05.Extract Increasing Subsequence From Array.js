// function solve(array){
//     let res = [];
//     res.push(array[0]);
//     array.forEach(element => {
//         if (element > Math.max(.. res)){
//             res.push(element);
//         }
//     });
//     return res;
// }

// function solve(array){
//     let res = [];
//     let biggestNum = Number.MIN_SAFE_INTEGER
//     array.forEach(element => {
//         if (element > biggestNum){
//             res.push(element);
//             biggestNum = element;
//         }
//     });
//     return res;
// }

// function solve(array) {
//   const res = [];
//   for (const value of array) {
//     if (
//       value / 1 === value &&
//       (res.length == 0 || res[res.length - 1] < value)
//     ) {
//       res.push(value);
//     }
//   }
//   return res;
// }
 function solve(arr){
  const res = [];
  let biggestNum = Number.MIN_SAFE_INTEGER;
  arr.reduce((accumulated, current) => {
    if (current >= biggestNum){
      biggestNum = current;
      accumulated.push(biggestNum);
    }
    return accumulated;
  }, res)
  return res;
 }
// function solve(givenArray){
//     let res = [givenArray[0]];
//     for (const arg of givenArray){
//         if (arg < res[length res-1]){
//             continue;}
//         else{
//             res.append(arg);
//             }
//     }
//     return res;
// }

console.log(solve([NaN, "5", "6", 1, 1, 3, 8, 4, 10, 12, 3, 2, 24, NaN]));

console.log(solve([1, 2, 3, 4]));

console.log(solve([20, 3, 2, 15, 6, 1]));
