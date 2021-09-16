//value, metricIn, metricOut
function solve(input_values) {
  value = Number(input_values[0]);
  metricIn = String(input_values[1]);
  metricOut = String(input_values[2]);
  let mm = 0;
  let cm = 0;
  let m = 0;

  if (metricIn === "mm") {
    cm = value / 10;
    m = value / 1000;
    if (metricOut === "cm") {
      console.log(cm.toFixed(3));
    } else if (metricOut === "m") {
      console.log(m.toFixed(3));
    }
  } else if (metricIn === "cm") {
    mm = value * 10;
    m = value / 100;
    if (metricOut === "mm") {
      console.log(mm.toFixed(3));
    } else if (metricOut === "m") {
      console.log(m.toFixed(3));
    }
  } else if (metricIn === "m") {
    cm = value * 100;
    mm = value * 1000;
    if (metricOut === "cm") {
      console.log(cm.toFixed(3));
    } else if (metricOut === "mm") {
      console.log(mm.toFixed(3));
    }
  }
}
// solve(["12","mm","m"]);
// solve(["150","m","cm"]);
// solve(["45", "cm", "mm"]);
