var Car = function(options) {
    this.currentSpeed = 0;
    this.engine = options.engine;
    this.model = options.model;
    this.manufacturer = options.manufacturer;
    this.year = options.year;
};

Car.prototype.accelerate = function() {
    this.currentSpeed += 10;
    console.log("Accelerate until " + this.currentSpeed + " km/h...");
};

Car.prototype.break_car = function() {
    if (this.currentSpeed === 0) {
        return;
    }
    this.currentSpeed -= 10;
    console.log("Break until " + this.currentSpeed + " km/h...");
};

var gol = new Car({
    model: "Gol",
    manufacturer: "Wolkswagen",
    year: 1999,
    engine: {type: "Gasoline", hp: "1.0"},
});

/*
gol.accelerate()
console.log(gol.currentSpeed);
gol.break_car()
console.log(gol.currentSpeed);
*/