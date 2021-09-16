// income, currentGrade, socialMinimum
function solve(values_input) {
  income = Number(values_input[0]);
  currentGrade = Number(values_input[1]);
  socialMinimum = Number(values_input[2]);
  socialScholarship = socialMinimum * 0.35;
  excellentScholarship = currentGrade * 25;

  if (income >= socialMinimum) {
    if (currentGrade >= 5.5) {
      if (excellentScholarship >= socialScholarship) {
        console.log(
          `You get a scholarship for excellent results ${Math.floor(
            excellentScholarship
          )} BGN`
        );
      } else {
        console.log(
          `You get a Social scholarship ${Math.floor(socialScholarship)} BGN`
        );
      }
    } else {
      console.log("You cannot get a scholarship!");
    }
  } else if (income < socialMinimum) {
    if (currentGrade >= 5.5) {
      if (excellentScholarship >= socialScholarship) {
        console.log(
          `You get a scholarship for excellent results ${Math.floor(
            excellentScholarship
          )} BGN`
        );
      } else {
        console.log(
          `You get a Social scholarship ${Math.floor(socialScholarship)} BGN`
        );
      }
    } else if (currentGrade > 4.5) {
      console.log(
        `You get a Social scholarship ${Math.floor(socialScholarship)} BGN`
      );
    } else {
      console.log("You cannot get a scholarship!");
    }
  } else {
    console.log("You cannot get a scholarship!");
  }
}

// solve(["480.00", "4.60", "450.00"]);
// solve(["300.00", "5.65", "420.00"]);
