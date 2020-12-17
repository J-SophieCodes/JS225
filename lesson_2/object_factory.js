function makeCar(accelRate, brakeRate) {
  return {
    speed: 0,
    accelRate,
    brakeRate,
    accelerate() {
      this.speed += this.accelRate;
    },
    brake() {
      this.speed -= this.brakeRate;
      if (this.speed < 0) this.speed = 0;
    }
  };
}

let sedan = makeCar(8, 6);
sedan.accelerate();
console.log(sedan.speed);
// 8
sedan.brake();
console.log(sedan.speed);
// 2
sedan.brake();
console.log(sedan.speed);
// 0