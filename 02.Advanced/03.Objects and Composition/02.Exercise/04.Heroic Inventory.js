// function solve(arr){
//     let res = [];
//     for (let str of arr){
//         let currentHero = str.split(" / ")
//         let hero = {
//         name: currentHero[0],
//         level: Number(currentHero[1]),
//         items: currentHero.slice(2)
//         };
//     res.push(hero);
//     }
// }

function solve(arr) {
    let solutionResult = [];
    for(const str of arr) {
        let [name,level,items] = str.split(" / ");
        level = Number(level);
        items = items ? items.split(", ") : [];
        let currentHero = {name,level,items}
        solutionResult.push(currentHero)
    }
    console.log(JSON.stringify(solutionResult));
}

// solve([
//     'Isaac / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antra'
// ]);

// solve(
//     ['Jake / 1000 / Gauss, HolidayGrenade']
// );