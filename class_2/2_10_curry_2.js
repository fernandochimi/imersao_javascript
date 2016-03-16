function multiply(a, b) {
    return a * b;
}

Function.prototype.curry = function() {
    var slice = Array.prototype.slice;
    var that = this;
    var args = slice.apply(arguments);

    return function() {
        return that.apply(this, args.concat(slice.apply(arguments)));
    };
};

/*
var multiplyBy2 = multiply.curry(2);
console.log(multiplyBy2(3));
*/