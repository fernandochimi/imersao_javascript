var Queue = function() {
    var q = [];

    this.push = function(v) {
        q.push(v);
    };

    this.pop = function() {
        return q.pop();
    };

    this.print = function() {
        console.log(q);
    };
};

var queue = new Queue();
queue.print();
queue.push(3);
queue.push(5);
queue.push(8);
queue.print();
var n = queue.pop();
console.log(n);
queue.print();