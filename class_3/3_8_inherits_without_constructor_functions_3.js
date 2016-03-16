function extendByCopy(base, otherstuff) {
    var copy = [];
    for (var i in base) {
        if (typeof base[i] === "object") {
            copy[i] = (base[i].constructor === Array ? [] : {});
            extendByCopy(base[i], copy[i]);
        } else {
            copy[i] = base[i];
        }
    }
    for (var j in otherstuff) {
        copy[j] = otherstuff[j];
    }
    copy.uber = base;
    return copy;
}

var genericCar = {
    name: "Generic Car",
    motor: {power: "", fuel: ""},
};

var gasolineCar = extendByCopy(genericCar, {name: "Nice Car"});
gasolineCar.motor.power = 2.0;
gasolineCar.motor.fuel = "Gasoline";

console.log(genericCar.motor);
console.log(gasolineCar.motor);