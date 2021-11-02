function solve(arr) {
    let resArr = []
    for(let i = 0;i < arr.length;i++) {
        if(i % 2 == 0) {
            resArr.push(arr[i])
        }
    }
    console.log(...resArr);
}
// solve(['20', '30', '40', '50', '60']);
// solve(['5', '10']);