function countdown(count) {
  (function func(n) {
    console.log(n);
    if (n === 0) {
      console.log('Done!');
    } else {
      func(n - 1);
    }
  })(count);
}

countdown(7);
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// Done!