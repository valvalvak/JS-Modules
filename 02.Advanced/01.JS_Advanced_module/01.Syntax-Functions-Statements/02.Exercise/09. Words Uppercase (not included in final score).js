function solve(givenString){
    let re = /\w+/gm;
    strArr = [...givenString.matchAll(re)];
    console.log(strArr.join(", ").toUpperCase());
}

solve("Hi, how are you?");
solve('hello');


// function wordsUppercase([input]) {
//     function extractWords() {
//         return input.toUpperCase()
//     return extractWords().join(', ');
// }
// }

// function wordsUppercase([input]) {
//     return input.toUpperCase()
// }

function wordsUppercase(text) {
    let result = text
            .toUpperCase()
            .split(/\W+/gm)
            .filter(x => x !== '')
            .join(', '); 
    return console.log(result)
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');

