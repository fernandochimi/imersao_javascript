function Vehicle() {}

Vehicle.prototype.accelerate = function() {
    console.log("Accelerating Vehicle...");
};

function TwoWheelsVehicle() {
    this.wheels = 2;
}

TwoWheelsVehicle.prototype = Vehicle.prototype;
TwoWheelsVehicle.prototype.constructor = TwoWheelsVehicle;

var twv = new TwoWheelsVehicle();
twv.accelerate();

TwoWheelsVehicle.prototype.accelerate = function() {
    console.log("Accelerating Motorcycle...");
};

var twv = new TwoWheelsVehicle();
twv.accelerate();

var v = new Vehicle();
v.accelerate();