function Vehicle() {}

function TwoWheelsVehicle() {
    this.wheels = 2;
}

TwoWheelsVehicle.prototype = new Vehicle();
TwoWheelsVehicle.prototype.accelerate = function() {};

/*
var twv = new TwoWheelsVehicle();
twv.accelerate();
*/