function newPerson(name) {
  function New() {
    this.name = name;
  }
  Object.defineProperties(New.prototype, {
    log: {
      value: function() {
        console.log(this.name);
      },
      writable: false,
    },
  });

  return new New(name);
}

let me = newPerson('Shane Riley');
me.log();     // => Shane Riley
me.log = function() { console.log('Amanda Rose'); };
me.log();     // => Shane Riley