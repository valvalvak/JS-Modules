// Define a function named gcd_two_numbers that calculates the greatest common divisor (GCD) of two numbers.
function gcd_two_numbers(x, y) {
    // Check if both x and y are of type number, if not, return false.
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;

    // Take the absolute values of x and y to ensure positivity.
    x = Math.abs(x);
    y = Math.abs(y);

    // Iterate using the Euclidean algorithm to find the GCD.
    while(y) {
        // Store the value of y in a temporary variable t.
        var t = y;
        // Calculate the remainder of x divided by y and assign it to y.
        y = x % y;
        // Assign the value of t (previous value of y) to x.
        x = t;
    }
    // Return the GCD, which is stored in x after the loop.
    return x;
}