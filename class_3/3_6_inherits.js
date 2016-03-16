Function.prototype.inherits = function(superclass) {
    this.prototype = new superclass();
    this.prototype.constructor = this;
};

Function.prototype.inherits = function(superclass) {
    var F = function() {};
    F.prototype = superclass.prototype;
    this.prototype = new F();
    this.prototype.constructor = this;
};

function Vehicle() {
    this.currentSpeed = 0;
}

Vehicle.prototype.accelerate = function() {
    this.currentSpeed += 10;
};

function Car() {}

Car.inherits(Vehicle);

var c = new Car();
c.accelerate();
console.log(c.currentSpeed); //does not work