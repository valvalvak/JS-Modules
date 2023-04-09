//worldRecordInSeconds, distanceInMeters, secondsPerMeter
function solve(input_values) {
  worldRecordInSeconds = Number(input_values[0]);
  distanceInMeters = Number(input_values[1]);
  secondsPerMeter = Number(input_values[2]);

  swimmerProgress = distanceInMeters * secondsPerMeter;
  slowdown = Math.floor(distanceInMeters / 15) * 12.5;

  achievement = (swimmerProgress + slowdown).toFixed(2);
  difference = Math.abs(worldRecordInSeconds - achievement).toFixed(2);

  if (worldRecordInSeconds > achievement) {
    console.log(
      `Yes, he succeeded! The new world record is ${achievement} seconds.`
    );
  } else {
    console.log(`No, he failed! He was ${difference} seconds slower.`);
  }
}
// solve(["10464", "1500", "20"]);
// solve(["55555.67", "3017", "5.03"]);
