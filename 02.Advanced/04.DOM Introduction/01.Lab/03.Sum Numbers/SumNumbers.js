function calc() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const result = Number(num1) + Number(num2);
    document.getElementById('sum').value = result;
}
    /**
     * if control needed uncomment if following statement:
     */

    // if(Number.isNaN(result)) {
    //     document.getElementById('sum').value = "Please enter a number!";
    // } else {
    //     document.getElementById('sum').value = result;
    // }
// document.getElementById('sum').value = result;
