function addOne(n) {
    return n + 1;
}

function multiplyByTwo(list) {
    var m = [];
    for (var i=0; i < list.length; i++) {
        m[i] = addOne(list[i] * 2);
    }
    return m;
}

/*
var a = [1, 2, 3, 4, 5];
var result = multiplyByTwo(a);
console.log(result);
*/