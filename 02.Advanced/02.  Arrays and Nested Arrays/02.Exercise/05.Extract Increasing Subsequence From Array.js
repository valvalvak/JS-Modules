function solve(array){
    let result = [];
    result.push(array[0]);
    array.forEach(element => {
        if (element > Math.max(...result)){
            result.push(element);
        }        
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
