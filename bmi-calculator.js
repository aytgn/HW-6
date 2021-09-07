//READLINE
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

//choose system
rl.question(
  `Press i for imperial(inch and pound) system, m for metric(kg and m) system: `,
  (input) => {
    bmiCalculate(input);
  }
);
//Calculation
function bmiCalculate(input) {
  //bmi level determination
  function bmiLevel(bmi) {
    console.log(bmi);
    if (bmi < 18.5) return "Underweight";
    else if (bmi < 24.9) return "Healthy Weight";
    else if (bmi < 29.9) return "Overweight";
    else return "Obesity";
  }

  if (input == "i" || input == "İ" || input == "ı" || input == "I") {
    rl.question("enter your height in inches: ", (height) => {
      rl.question("enter your weight in pounds: ", (weight) => {
        var bmi = (weight / (height * height)) * 703;
        console.log(bmiLevel(bmi));
        rl.close();
      });
    });
  } else if (input == "m" || input == "M") {
    rl.question("enter your height in metres: ", (height) => {
      rl.question("enter your weight in kilograms: ", (weight) => {
        var bmi = (weight / (height * height));
        console.log(bmiLevel(bmi));
        rl.close();
      });
    });
  } else {
    console.log("unexpected input!");
    rl.close();
  }
}
