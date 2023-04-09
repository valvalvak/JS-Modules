function solve(input) {
  travelCost = Number(input[0]);
  puzzles = Number(input[1]);
  dolls = Number(input[2]);
  teddyBears = Number(input[3]);
  minions = Number(input[4]);
  trucks = Number(input[5]);

  puzzlesSum = puzzles * 2.60;
  dollsSum = dolls * 3.00;
  teddyBearsSum = teddyBears * 4.10;
  minionsSum = minions * 8.20;
  trucksSum = trucks * 2.00;

  toysCount = puzzles + dolls + teddyBears + minions + trucks;

  toysSum = puzzlesSum + dollsSum + teddyBearsSum + minionsSum + trucksSum;

  if (toysCount >= 50) {
    toysSum *= 0.75;
  }

  totalSum = toysSum * 0.9;

  difference = Math.abs(totalSum - travelCost);

  if (totalSum >= travelCost) {
    console.log(`Yes! ${difference.toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`);
  }
}
// solve(["40.8", "20", "25", "30", "50", "10"])
// solve(["320", "8", "2", "5", "5", "1"]);
