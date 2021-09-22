function solve(givenString){
    let strArr = [];
    let re = /[A-Za-z]+/gm;
    strArr = [...givenString.matchAll(re)];
    console.log(strArr.join(", ").toUpperCase());

}
solve("Hi, how are you?");
solve('hello');