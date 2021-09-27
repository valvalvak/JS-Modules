// function solve(arr){
//     let newArr = arr.sort((a, b) => a-b);
//     newArr.forEach(element => {
//         console.log(element);
//     });
// }

function solve(givenArray) {
    let resultArray = [];
    for (i = 0; i < givenArray.length; i++) {
        if (givenArray[i] < 0) {
            resultArray.unshift(givenArray[i]);
        }else{
            resultArray.push(givenArray[i]);
        }
    }
    resultArray.forEach(element =>  console.log(element));
}

// solve([7, -2, 8, 9]);
// solve([3, -2, 0, -1]);