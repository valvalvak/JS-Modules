function solve(input){
    inputPassword = input[0]
    if (inputPassword == "s3cr3t!P@ssw0rd"){
        console.log("Welcome")
    }
    else{
        console.log("Wrong password!")
    }
}
solve(["s3cr3t!P@ssw0rd"])