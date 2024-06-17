function solve(array){
    array.sort((a, b) => {
        if (a.length < b.length){
            return -1;
        }
        if (a.length > b.length){
            return 1;
        }
        if (a.length == b.length){
            a.localeCompare(b)
        }
    })
    console.log(array.join('\n'))
}

solve(['alpha', 
    'beta', 
    'gamma']
    )

