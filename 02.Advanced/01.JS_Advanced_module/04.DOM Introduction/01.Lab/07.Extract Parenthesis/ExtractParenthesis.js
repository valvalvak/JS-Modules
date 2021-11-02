function extract(content) {
    const text = document.getElementById(content).textContent;
    const pattern = /\((.+?)\)/g;
    let match = pattern.exec(text);
    const result = []
    while(match != null) {
        result.push(match)
        match = pattern.exec(text)
    }
    return result.join("; ")
}