function solve(array) {
    const newArray = []
    const initialValue = 1
    for (i = 0; i < array.length; i++) {
        switch (array[i]) {
            case 'add':
                newArray.push(i + initialValue);
                break;
            case 'remove':
                newArray.pop();
            default:
                break;
        }
    }
    if (newArray.length <= 0) {
        console.log('Empty')
    } else {
        newArray.forEach(e => console.log(e))
    }
}
// solve(['add',
//     'add',
//     'add',
//     'add'])
// solve(['add',
//     'add',
//     'remove',
//     'add',
//     'add']
//     )
// solve(['remove',
//     'remove',
//     'remove']
//     )