function makeMultipleLister(num) {
  return function() {
    for (let i = num; i < 100; i += num) {
      console.log(i);
    }
  };
}

let lister = makeMultipleLister(13);
lister();
// 13
// 26
// 39
// 52
// 65
// 78
// 91