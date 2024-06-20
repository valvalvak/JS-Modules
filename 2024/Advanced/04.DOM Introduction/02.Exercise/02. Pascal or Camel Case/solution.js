function solve() {

  let convertedResult;
  const inputElements = {
    inValue: document.getElementById("text").value.split(" "),
    convention: document.getElementById("naming-convention").value
  }
  function concatenate(strElement){
    return strElement[0].toUpperCase() + strElement.substring(1)
  }
  function getCamelCase(text) {
    let convertedResult = "";
    convertedResult += text[0].toLowerCase();
    for (let i = 1; i < text.length; i++) {
      let strElement = text[i].toLowerCase();
      convertedResult += concatenate(strElement);
    }
    return convertedResult;
  }
  function getPascalCase(text) {
    let convertedResult = "";
    text.forEach(element => {
      let strElement = element.toLowerCase();
      convertedResult += concatenate(strElement);
    });
    return convertedResult;
  }

  if (inputElements.convention == "Pascal Case") {
    convertedResult = getPascalCase(inputElements.inValue);
  } else if (inputElements.convention == "Camel Case") {
    convertedResult = getCamelCase(inputElements.inValue)
  } else {
    convertedResult = "Error!"
  }
  document.getElementById("result").textContent = convertedResult;
}