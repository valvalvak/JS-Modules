// function subtract() {
//     let firstValue = document.getElementById("firstNumber").value;
//     let secondValue = document.getElementById("secondNumber").value
//     firstValue = Number(firstValue);
//     secondValue = Number(secondValue);
//     let subtractedValue = firstValue - secondValue;
//     document.getElementById("result").textContent = subtractedValue;
//     // console.log('TODO:...');
// }
function subtract() {
    const numValues = {
        first: Number(document.getElementById("firstNumber").value),
        second: Number(document.getElementById("secondNumber").value)
    }
    let result = numValues.first - numValues.second;
    document.getElementById("result").textContent = result;
    // console.log('TODO:...');
}