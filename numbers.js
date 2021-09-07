const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("first number: ", (numOne) => {
  rl.question("second number: ", (numTwo) => {
    rl.question("third number ", (numThr) => {
      const arr = [];
      arr.push(Number(numOne), Number(numTwo), Number(numThr));
      console.log(arr);
      //sum
      const sum = arr.reduce((acc, cur) => {
        return acc + cur;
      }, 0);
      const avr = sum / arr.length;
      const pro = arr.reduce((acc, cur) => {
        return acc * cur;
      }, 1);
      const min = Math.min(...arr);
      const max = Math.max(...arr);
      console.log(
        "sum of all numbers: ",
        sum,
        "\n" + "average of all numbers: ",
        avr,
        "\n" + "product of all numbers: ",
        pro,
        "\n" + "maximum number: ",
        max,
        "\n" + "minimum number: ",
        min
      );
      rl.close();
    });
  });
});
