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

var gasolineCar = {
    build: function(otherstuff) {
        return extendByCopy(genericCar, otherstuff);
    }
}

var car_one = gasolineCar.build({name: "Car One"});
var car_two = gasolineCar.build({name: "Car Two"});
console.log(car_one);
console.log(car_two);