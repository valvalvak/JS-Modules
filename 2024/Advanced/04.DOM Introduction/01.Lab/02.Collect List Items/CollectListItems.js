function extractText() {

    // LAB SOLUTION

    // let itemNodes = document.querySelectorAll('ul#items li');
    // let textArea = document.querySelector('#result');
    // for (let node of itemNodes){
    //     textArea.value += node.textContent + '\n'
    // }

    // IVO PAPAZOV SOLUTION

    // get ul list element
    let liElements = document.querySelectorAll('li');

    // extract list item texts
    const items = Array.from(liElements)
        .map(liElement => liElement.textContent);

        // console.log(items);

    // Get result element
    let resultTextArea = document.getElementById('result');
        
    // populate in result element
    resultTextArea.value = items.join('\n');

}
