var Point = function(x, y) {
    this.x = x;
    this.y = y;
};

var Line = function(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;

    this.length = function() {
        var dx = Math.pow((p2.x - p1.x), 2);
        var dy = Math.pow((p2.y - p1.y), 2);
        return Math.sqrt(dx + dy);
    };
};

/*
var point_one = new Point(10, 20);
var point_two = new Point(30, 60);
var line = new Line(point_one, point_two);
console.log(line.length());
*/