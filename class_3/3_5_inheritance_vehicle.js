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

FourWheelsVehicle.prototype = new Vehicle();
TwoWheelsVehicle.prototype = new Vehicle();
Motorcycle.prototype = new TwoWheelsVehicle();
/*
var v = new Vehicle();
console.log(v.name);
console.log(v.wheels);
var m = new Motorcycle();
console.log(m.name);
console.log(m.wheels);
*/