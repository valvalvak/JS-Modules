function solve(array) {
    function len(x) {
        return x.length
    }
    array.sort((a, b) => {
        let ascSort = len(a) - len(b);
        if (!ascSort == 0) {
            return ascSort;
        } else {
            return a.localeCompare(b);
        }
    });
    console.log(array.join(`\n`))
}

// solve([
//     'gamma',
//     'alpha',
//     'beta',
// ]);

// solve([
//     'Isacc',
//     'Theodor',
//     'Jack',
//     'Harrison',
//     'George'
// ])

// solve([
//     'test',
//     'Deny',
//     'omen',
//     'Default'
// ])