function solve(elements){
    let values = elements.map(Number);
    aggregate(values, 0, (a, b)=>a + b);
    aggregate(values, 0, (a, b)=>a + 1 / b);
    aggregate(values, "", (a, b)=>a + b);
 
    function aggregate(arr, initVal, func) {
        let val = initVal;
        for (let i = 0; i < arr.length; i++) {
            val = func(val, arr[i]);
        }
        console.log(val);
    }
    

    
}
// solve([1, 2, 3]);
// solve([2, 4, 8, 16]);

