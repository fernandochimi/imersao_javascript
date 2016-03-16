function extendByCopy(base, otherstuff) {
    var copy = [];
    for (var i in base) {
        copy[i] = base[i];
    }
    for (var j in otherstuff) {
        copy[j] = otherstuff[j];
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

var square = extendByCopy(shape, {name: "Square"});
square.toString();