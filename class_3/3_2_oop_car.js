var car = {
    engine: {
        type: "Gasoline",
        hp: "1.0",
    },
    currentSpeed: 0,
    model: "Gol",
    manufacturer: "Volkswagen",
    year: 1999,
    accelerate: function() {
        this.currentSpeed += 10;
        console.log("Accelerate until " + this.currentSpeed + "km/h...");
    },
    break_car: function() {
        if (this.currentSpeed === 0) {
            return;
        }
        this.currentSpeed -= 10;
        console.log("Break until " + this.currentSpeed + "km/h...");
    }
};

for (var i = 0; i < 10; i++) {
    car.accelerate();
}

for (var i = 0; i < 10; i++) {
    car.break_car();
}