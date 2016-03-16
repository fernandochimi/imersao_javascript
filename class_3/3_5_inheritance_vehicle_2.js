function Vehicle() {
    this.name = "Vehicle";
}

function FourWheelsVehicle() {
    this.wheels = 4;
}

function TwoWheelsVehicle() {
    this.wheels = 2;
}

function Motorcycle() {
    this.name = "Motorcycle";
}


/*
TwoWheelsVehicle.prototype = new Vehicle();
Motorcycle.prototype = new TwoWheelsVehicle();

var m = new Motorcycle();
console.log(m.constructor);

TwoWheelsVehicle.prototype.constructor = TwoWheelsVehicle;
Motorcycle.prototype.constructor = Motorcycle;
console.log(m.constructor);
*/