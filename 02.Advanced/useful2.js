// function getCamel(text) {
//     let currentSolution = ""
//     text = text.split(" ");
//     currentSolution += text[0].toLowerCase();
//     for(let str = 1;str < text.length;str++) {
//         let currentString = text[str];
//         currentString.toLowerCase();
//         currentSolution += currentString[0].toUpperCase() + currentString.substring(1);
//     }
//     return currentSolution;
// }
// function getPascal(text) {
//     let stringResult = "";
//     let strArray = text.split(" ");
//     for (let currentString of strArray) {
//         let str = currentString.toLowerCase();
//         stringResult += str[0].toUpperCase() + str.substring(1);
//     };
//     return stringResult;
//   }
function getPascal(text) {
    let currentSolution = "";
    let strArray = text.split(" ");
    strArray.forEach(element => {
      let strEl = element.toLowerCase();
      currentSolution += strEl[0].toUpperCase() + strEl.substring(1);
    });
    return currentSolution;
  }

// let result = getCamel("this is an example");
// console.log(result);

let result = getPascal("secOND eXamPLE");
console.log(result);