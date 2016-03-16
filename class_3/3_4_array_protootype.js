Array.prototype.toSet = function() {
    var set = [];
    for (var i = 0; i < this.length; i++) {
        if (set.indexOf(this[i]) === -1) {
            set.push(this[i]);
        }
    }

    set.push = function(value) {
        if (this.indexOf(value) !== -1) {
            return;
        }
        this[this.length] = value;
    };
    return set;
};

var a = [1, 2, 3, 4, 5, 4, 3, 4, 5, 6, 7, 8];
var s = a.toSet();

/*
console.log(s.length);
s.push(10);
console.log(s.length);
s.push(8);
console.log(s.length);
*/