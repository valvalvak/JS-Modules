function solve() {
  const inputText = document.getElementById('input').value;
  const outputText = document.getElementById('output');

  let splittedText = inputText.split('.').filter(el => el.trim() != '');

  let text = '<p>';

  for (let i = 0; i < splittedText.length; i++) {
    let currentLine = splittedText[0];
    if (i > 0 && i % 3 == 0){
      text += '</p><p>'
    }
    text += `${currentLine}.`
  };
  text += '</p>';
  outputText.innerHTML = text
}