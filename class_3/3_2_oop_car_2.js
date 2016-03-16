var Car = function(model, manufacturer, year) {
    this.engine = {
        type: "Gasoline",
        hp: "1.0",
    };
    currentSpeed = 0;
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
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

/*
var gol = new Car("Gol", "Volkswagen", 1999);
var celta = new Car("Celta", "Chevrolet", 2004);
console.log(gol);
console.log(celta);
*/