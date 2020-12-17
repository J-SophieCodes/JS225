function makeCounterLogger(num1) {
  return function(num2) {
    if (num1 < num2) {
      for (let num = num1; num <= num2; num++) {
        console.log(num);
      }
    } else {
      for (let num = num1; num >= num2; num--) {
        console.log(num);
      }
    }
  };
}

let countlog = makeCounterLogger(5);
countlog(8);
// 5
// 6
// 7
// 8
countlog(2);
// 5
// 4
// 3
// 2