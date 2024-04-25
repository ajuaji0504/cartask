class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.speed = 10;
    this.engineStarted = false;
  }

  start() {
    if (!this.engineStarted) {
      console.log("Starting the engine...");
      this.engineStarted = true;
    } else {
      console.log("Engine is already running.");
    }
  }

  stop() {
    if (this.engineStarted) {
      console.log("Stopping the engine...");
      this.engineStarted = false;
      this.speed = 0;
    } else {
      console.log("Engine is already off.");
    }
  }

  accelerate(speedIncrement) {
    if (this.engineStarted) {
      this.speed += speedIncrement;
      console.log(`Accelerating. Current speed: ${this.speed} mph`);
    } else {
      console.log("Can't accelerate. Engine is off.");
    }
  }

  brake() {
    if (this.speed > 0) {
      console.log("Applying brakes...");
      this.speed = 0;
    } else {
      console.log("Car is already stopped.");
    }
  }
}
  newcar = new Car();
  newcar.stop();