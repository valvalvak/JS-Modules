function solve(n, k){
    const arr = [1]
    arr.fill(0, 1, n);
    for(let i = 1; i < n; i++){
        if (i < k){
            sum = arr.reduce((a,b) => a+b);
        }else{
            let index = Number(arr.length - k);
            let newArr = arr.slice(index);
            sum = newArr.reduce((a,b) => a+b);
        }
        arr.push(sum)

    }
    return arr
}
// console.log(solve(6, 3));
// console.log(solve(8, 2));

