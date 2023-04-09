function solve(number, ...operations) {
    let result = Number(number);
    function calculate(result) {
        while ([...operations].length > 0) {
            let currentOperation = operations.shift();
            if (currentOperation === "chop") {
                result = result /= 2;
            } else if (currentOperation === "dice") {
                result = Math.sqrt(result);
            } else if (currentOperation === "spice") {
                result++;
            } else if (currentOperation === "bake") {
                result *= 3;
            } else if (currentOperation === "fillet") {
                result *= 0.8;
            }
            console.log(Number(result))
        }
    }
    calculate(result);
}
// solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
