function solve(numbers,k) {
    let i = 0;
    while(i < k) {
        numbers.unshift(numbers.pop());
        i++;
    }
    console.log(numbers.join(" "));
}
// solve([
//     '1',
//     '2',
//     '3',
//     '4'], 2);

// solve([
//     'Banana',
//     'Orange',
//     'Coconut',
//     'Apple'], 15);
