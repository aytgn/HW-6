function powerNumber(num) {
  sqr = Math.pow(num, 2);
  cube = Math.pow(num, 3);
  console.log(num, sqr, cube);
}

function powerTen() {
  for (let i = 1; i <= 10; i++) {
    powerNumber(i);
  }
}

powerTen();
