function solution(...array){
    let allStringLength = 0;
    for (let el of array){
        allStringLength += el.length;
    }
    let averageLength = Math.floor(allStringLength / array.length);
    console.log(allStringLength);
    console.log(averageLength);
}

solution('chocolate', 'ice cream', 'cake')
solution('pasta', '5', '22.3')