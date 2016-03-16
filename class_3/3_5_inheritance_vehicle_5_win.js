function Vehicle() {}

Vehicle.prototype.accelerate = function() {
    console.log("Accelerating Vehicle...");
};

function TwoWheelsVehicle() {
    this.wheels = 2;
}

var F = function() {};

F.prototype = Vehicle.prototype;
TwoWheelsVehicle.prototype = new F();
TwoWheelsVehicle.prototype.constructor = TwoWheelsVehicle;

TwoWheelsVehicle.prototype.accelerate = function() {
    console.log("Accelerating Motorcycle...");
};
var twv = new TwoWheelsVehicle();
twv.accelerate();

var v = new Vehicle();
v.accelerate();