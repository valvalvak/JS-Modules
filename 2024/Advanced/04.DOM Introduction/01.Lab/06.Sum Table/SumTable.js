function sumTable() {
    // const table = document.querySelectorAll("table tr")
    // let sum = 0
    // for (let i =1; i< table.length; i++){
    //     let columns = table[i].children;
    //     let price = columns[columns.length - 1].textContent;
    //     sum += Number(price)
    // }
    // document.getElementById("sum").textContent = sum;
    const sumTdElement = document.getElementById("sum");
    const priceTdElements = document.querySelectorAll("table tr td:nth-of-type(2):not(#sum)");
    let totalSum = 0;

    for (const tdEl of priceTdElements){
        let price = Number(tdEl.textContent);
        totalSum += price;
    }
    sumTdElement.textContent = totalSum;
}