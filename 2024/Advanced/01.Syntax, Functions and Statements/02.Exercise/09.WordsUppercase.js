function wordsUppercase(text) {
    let result = text
            .toUpperCase()
            .split(/\W+/gm)
            .filter(x => x !== '')
            .join(', '); 
    return console.log(result)
}