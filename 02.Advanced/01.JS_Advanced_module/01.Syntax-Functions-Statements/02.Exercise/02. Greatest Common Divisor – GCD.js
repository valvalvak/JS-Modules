// function gcd_two_numbers(x, y) {
//     if ((typeof x !== 'number') || (typeof y !== 'number')) 
//       return false;
//     x = Math.abs(x);
//     y = Math.abs(y);
//     while(y) {
//       var t = y;
//       y = x % y;
//       x = t;
//     }
//     return x;
//   }

function solve(a, b) {
    const gcd = (...arr) => {
        const _gcd = (x, y) => (!y ? x : gcd(y, x % y));
        return [...arr].reduce((a, b) => _gcd(a, b));
    }
    console.log(gcd(a, b));

}
solve(15, 5);
solve(2154, 458);

