function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,
    setPrice(value) {
      if (value >= 0) {
        this.price = value;
      } else {
        alert('Invalid price!');
      }
    },
    describeProduct() {
      console.log('=> Name: ' + this.name);
      console.log('=> ID: ' + this.id);
      console.log('=> Price: $' + this.price);
      console.log('=> Stock: ' + this.stock);
    },
  };
}

let scissors = createProduct(0, 'Scissors', 8, 10);
scissors.describeProduct();

let drill = createProduct(1, 'Cordless Drill', 15, 45);
drill.describeProduct();

let saw = createProduct(2, 'Circular Saw', 12, 95);
saw.describeProduct();

let hammer = createProduct(3, 'Sledge Hammer', 78, 45);
hammer.describeProduct();

let boxCutter = createProduct(4, 'Box Cutter', 41, 15);
boxCutter.describeProduct();