function sumTable() {
    const table = document.querySelectorAll("table tr")
    let sum = 0
    for (let i =1; i< table.length; i++){
        let columns = table[i].children;
        let price = columns[columns.length - 1].textContent;
        sum += Number(price)
    }
    document.getElementById("sum").textContent = sum;
}