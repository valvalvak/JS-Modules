function solve(input) {
  firstRunner = Number(input[0]);
  secondRunner = Number(input[1]);
  thirdRunner = Number(input[2]);

  totalTime = firstRunner + secondRunner + thirdRunner;
  minutes = Math.floor(totalTime / 60);
  seconds = totalTime % 60;
  if (seconds < 10) {
    console.log(`${minutes}:0${seconds}`);
  } else {
    console.log(`${minutes}:${seconds}`);
  }
}
solve(["35", "45", "44"]);
