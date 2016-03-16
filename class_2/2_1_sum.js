function sum() {
    var _sum = 0;
    for (var i=0; i < arguments.length; i++) {
        _sum += arguments[i];
    }
    return _sum;
}

console.log(sum(1, 2, 3));