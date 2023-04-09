function solve(input_value){
    speedIs = Number (input_value[0])
    if (speedIs <= 10){
        console.log("slow")
    }
    else if (speedIs <=50){
        console.log("average")
    }
    else if (speedIs <=150){
        console.log("fast")
    }
    else if (speedIs <=1000){
        console.log("ultra fast")
    }
    else{
        console.log("extremely fast")
    }
}
// solve(["8"])
// solve(["49.5"])
// solve(["126"])
// solve(["160"])
// solve(["3500"])