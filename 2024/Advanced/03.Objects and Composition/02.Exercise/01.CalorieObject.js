function solve(array){
    const obj = {}
    while(array.length > 0){
        let key = array.shift()
        let val = Number(array.shift())
        obj[key] = val 
    }
    console.log(obj)
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])