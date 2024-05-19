function solve(value = 5){
    let stars = new Array(value).fill('*').join(' ');
    for (let index = 0; index < value; index++) {
        console.log(stars);  
    }
}
solve(3);
