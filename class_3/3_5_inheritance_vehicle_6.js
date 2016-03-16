function Vehicle() {
    this.currentSpeed = 0;
}

Vehicle.prototype.accelerate = function() {
    this.currentSpeed += 10;
};

var v = new Vehicle();
v.accelerate();
console.log(v.currentSpeed);

function Car() {
    this.wheels = 4;
}

var F = function() {};

F.prototype = Vehicle.prototype;
Car.prototype = new F();
Car.prototype.constructor = Car;

var c = new Car();
c.accelerate();
console.log(c.currentSpeed);