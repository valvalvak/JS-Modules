function solve() {
    /**TODO:
     * The first parameter will be the text that you need to modify depending on the second parameter. 
     * The words in it will always be separated by space.
     * The second parameter will be either "Camel Case" or "Pascal Case". 
     * In case of different input, your output should be "Error!"
    */
    let textResult;
    const text = {
        inValue: document.getElementById("text").value.split(" "),
        convention: document.getElementById("naming-convention").value
    }
    function getCamelTexCase(text) {
        let strResult = "";
        strResult += text[0].toLowerCase();
        for(let i = 1;i < text.length; i++) {
            let strEl = text[i].toLowerCase();
            strResult += strEl[0].toUpperCase() + strEl.substring(1);
        }
        return strResult;
    }
    function getPascalTextCase(text) {
        let strResult = "";
        text.forEach(element => {
            let strEl = element.toLowerCase();
            strResult += strEl[0].toUpperCase() + strEl.substring(1);
        });
        return strResult;
    }

    if(text.convention == "Pascal Case") {
        textResult = getPascalTextCase(text.inValue);
    } else if(text.convention == "Camel Case") {
        textResult = getCamelTexCase(text.inValue)
    } else {
        textResult = "Error!"
    }
    document.getElementById("result").textContent = textResult;
}