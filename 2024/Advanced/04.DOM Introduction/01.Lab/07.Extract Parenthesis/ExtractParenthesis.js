function extract(content) {
    // let string = document.getElementById(content).textContent;
    // let patternn = /\(([^)]+)\)/g;
    // let result = [];

    // let match = pattern.exec(string);

    // while(match){

    //     result.push(match[1]);
    //     match = pattern.exec(string)
    // }
    // return result.join('; ')
    const element = document.getElementById(content);
    const pattern = /\(([^\(\)]+)\)/g;
    const matches = element.textContent.matchAll(pattern)
    // console.log(Array.from(matches))
    const result = Array.from(matches).map(match => match[1]).join('; ')
    // console.log(result)
    return result
}