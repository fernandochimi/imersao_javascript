var Square = function(width) {
    this.name = "Square";
    this.width = width;
    this.area = function() {
        return width * width;
    };
};

var Circle = function(radius) {
    var PI = 3.1415;
    this.name = "Circle";
    this.radius = radius;
    this.area = function() {
        return PI * radius * radius;
    };
};

var square = new Square(100);
var circle = new Circle(15);

function printShapeArea(shape) {
    console.log("Area of " + shape.name + ": " + shape.area());
}

printShapeArea(square);
printShapeArea(circle);