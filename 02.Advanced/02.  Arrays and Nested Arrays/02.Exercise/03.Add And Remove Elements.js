function solve(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "add") {
            result.push(i + 1);
        } else {
            result.pop();
        }
    }
    if (result.length < 1) {
        console.log("Empty");        
    } else {
        console.log(result.join(`\n`));
    }
}

// solve(['add',
//     'add',
//     'add',
//     'add']);

// solve(['add',
//     'add',
//     'remove',
//     'add',
//     'add']);

// solve(['remove',
//     'remove',
//     'remove']);