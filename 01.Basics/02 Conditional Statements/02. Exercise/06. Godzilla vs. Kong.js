// budget, extraCrewCount, crewClothingPrice
function solve(input_values) {
  budget = Number(input_values[0]);
  extraCrewCount = Number(input_values[1]);
  crewClothingPrice = Number(input_values[2]);

  decorations = budget * 0.1;
  if (extraCrewCount > 150) {
    crewClothingPrice *= 0.9;
  }
  expenses = decorations + extraCrewCount * crewClothingPrice;
  difference = Math.abs(budget - expenses).toFixed(2);

  if (budget < expenses) {
    console.log("Not enough money!");
    console.log(`Wingard needs ${difference} leva more.`);
  } else {
    console.log("Action!");
    console.log(`Wingard starts filming with ${difference} leva left.`);
  }
}
// solve(["20000", "120", "55.5"]);
// solve(["15437.62", "186", "57.99"]);
// solve(["9587.88", "222", "55.68"]);
