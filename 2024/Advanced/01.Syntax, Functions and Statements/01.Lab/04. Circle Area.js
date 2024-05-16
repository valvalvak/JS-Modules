function solution(inputArgument){
    let typeOfArgument = typeof(inputArgument)
    switch(typeOfArgument){
        case 'number':
            let result = Math.pow(inputArgument, 2) * Math.PI;
            console.log(result.toFixed(2));
            break;
        default:
            console.log(`We can not calculate the circle area, because we receive a ${typeOfArgument}.`);
    }
}
solution(5)
solution('name')
