function solve() {
  const outputResult = document.getElementById("output");
  const inputParagraph = document.getElementById("input").value;
  let splittedText = inputParagraph.split(".").filter(el => el != "");
  let resultToOutput = "<p>";
  for(let i = 0;i < splittedText.length;i++) {
    let currentLine = splittedText[i];
    if(i > 0 && i % 3 == 0) {
      resultToOutput += "</p><p>"
    }
    resultToOutput += `${currentLine}.`;
  };
  resultToOutput += "</p>";
  outputResult.innerHTML = resultToOutput;
}