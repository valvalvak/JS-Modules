function solve(values_input) {
  given_number = Number(values_input[0]) - 1;

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (typeof daysOfWeek[given_number] !== "undefined") {
    console.log(`${daysOfWeek[given_number]}`);
  } else {
    console.log(`Error`);
  }
}
// solve(["1"]);
// solve(["2"]);
// solve(["3"]);
// solve(["4"]);
// solve(["5"]);
// solve(["6"]);
// solve(["7"]);
// solve(["-1"]);
