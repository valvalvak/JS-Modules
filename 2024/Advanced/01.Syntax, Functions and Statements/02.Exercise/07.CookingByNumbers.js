function solve() {

    const fn = {
        'chop': (a) => a / 2,
        'dice': (a) => Math.sqrt(a),
        'spice': (a) => a + 1,
        'bake': (a) => a * 3,
        'fillet': (a) => a * .8,
    }

    value = Number(arguments[0]);

    for (let i = 1; i < arguments.length; i++) {
        operand = arguments[i];
        result = fn[operand](value)
        console.log(result)
        value = result
    }


}

// solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')