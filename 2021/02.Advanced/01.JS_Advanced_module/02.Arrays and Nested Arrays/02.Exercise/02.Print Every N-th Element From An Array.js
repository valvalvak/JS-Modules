function solve(...params) {
    let array = params[0];
    let step = params[1];
    let result = [];
    for(let s = 0;s < array.length;s += step) {
        result.push(array[s]);
    }
    return result;
}
// console.log(solve(['5',
//     '20',
//     '31',
//     '4',
//     '20'],
//     2));

// console.log(solve(['dsa',
//     'asd',
//     'test',
//     'tset'],
//     2));

// console.log(solve(['1',
//     '2',
//     '3',
//     '4',
//     '5'],
//     6));