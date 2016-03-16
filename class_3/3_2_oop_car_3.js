var Car = function(options) {
    currentSpeed = 0;
    this.engine = options.engine;
    this.model = options.model;
    this.manufacturer = options.manufacturer;
    this.year = options.year;
    this.accelerate = function() {
        this.currentSpeed += 10;
        console.log("Accelerate until " + this.currentSpeed + "km/h...");
    };
    this.break_car = function() {
        if (this.currentSpeed === 0) {
            return;
        }
        this.currentSpeed -= 10;
        console.log("Break until " + this.currentSpeed + "km/h...");
    };
};

var gol = new Car({
    model: "Gol",
    manufacturer: "Wolkswagen",
    year: 1999,
    engine: {type: "Gasoline", hp: "1.0"},
});

/*
console.log(gol);
*/