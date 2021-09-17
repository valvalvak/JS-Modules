function solve(givenNumber) {
    if (givenNumber) {
        count = Number(givenNumber);
    } else {
        count = 5;
    }
    let result = new Array(count).fill("*");
    for (let _ of Array(count)) {
        console.log(`${result.join(" ")}`);
    }

}
// solve(1);
// solve(2);
// solve(5);
// solve();