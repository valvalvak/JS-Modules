function subtract() {
    const firstNumber = document.getElementById("firstNumber").value;
    const secondNumber = document.getElementById("secondNumber").value;
    const resultDiv = document.getElementById("result");
    let result = Number(firstNumber) - Number(secondNumber);
    resultDiv.textContent = result

    // console.log('TODO:...');
}