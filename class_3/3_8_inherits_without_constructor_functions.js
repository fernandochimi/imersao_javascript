function extendByCopy(base) {
    var copy = [];
    for (var i in base) {
        copy[i] = base[i];
    }
    copy.uber = base;
    return copy;
}

var shape = {
    name: "Shape",
    toString: function() {
        return this.name;
    }
};

var square = extendByCopy(shape);
square.name = 'Square';
square.toString();