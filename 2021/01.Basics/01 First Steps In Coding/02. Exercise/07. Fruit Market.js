// strawberriesPrice[0], bananasAmount[1], orangesAmount[2], raspberriesAmount[3], strawberriesAmount[4]
// цена на ягодите, количество банани, количество портокали, количество малини, количество ягоди 
function solve(input){
    strawberriesPrice = Number(input[0])
    raspberriesPrice = strawberriesPrice / 2
    raspberriesSum = raspberriesPrice * Number(input[3])
    orangesSum = raspberriesPrice * 0.6 * Number(input[2])
    bananasSum = raspberriesPrice * 0.2 * Number (input[1])
    strawberriesSum = strawberriesPrice * Number(input[4])
    totalSum = raspberriesSum + orangesSum + bananasSum + strawberriesSum
    console.log(totalSum)
}
solve(["48",
"10",
"3.3",
"6.5",
"1.7"])

solve(["63.5",
"3.57",
"6.35",
"8.15",
"2.5"])