// figureType, firstValue, secondValue
function solve(input){
    figureType = input[0]
    firstValue = Number (firstValue=input[1])
    secondValue = Number (secondValue=input[2])

    squareFace = firstValue ** 2
    rectangleFace = firstValue * secondValue
    circleFace = Math.PI * (firstValue ** 2)
    triangleFace = (firstValue * secondValue) / 2
    
    if (figureType == "square"){
        console.log((squareFace).toFixed(3))
    }
    else if (figureType == "rectangle"){
        console.log((rectangleFace).toFixed(3))
    }
    else if (figureType == "circle"){
        console.log((circleFace).toFixed(3))
    }
    else if (figureType == "triangle"){
        console.log((triangleFace).toFixed(3))
    }
}
// solve([
//     "square",
//     "5"
// ])
// solve([
//     "rectangle",
//     "7",
//     "2.5"
// ])
// solve([
//     "circle",
//     "6"
// ])
// solve([
//     "triangle",
//     "4.5",
//     "20"
// ])