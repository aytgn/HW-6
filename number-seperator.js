const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("input 5 digit number: ", (input) => {
  const checkNumber = (num) => {
    const numStr = num.toString();
    const numLength = numStr.length;
    if (numStr.match(/^[0-9]+$/) != null && numLength == 5) {
      const newStr = numStr.split("").join("   ");
      console.log(newStr);
    } else {
      console.log("unexpected input!");
    }
  };

  checkNumber(input);
  rl.close();
});
