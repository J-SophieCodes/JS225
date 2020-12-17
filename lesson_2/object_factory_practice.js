function makeCountry(name, continent, visited = false) {
  return {
    name,
    continent,
    visited,
    getDescription() {
      return this.name + ' is located in ' + this.continent + '. ' +
        'I have' + (this.visited ? " " : "n't ") + 'visited ' +
        this.name + '.';
    },
    visitCountry() {
      this.visited = true;
    }
  };
}

let chile = makeCountry('The Republic of Chile', 'South America');
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa');

[chile, canada, southAfrica].forEach(country => {
  console.log(country.getDescription());
});

canada.visitCountry();
console.log(canada.getDescription());