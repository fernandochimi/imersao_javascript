function multiply(a, b) {
    return a * b;
}

function multiplyBy(a) {
    return function(b) {
        return multiply(b, 3)
    };
}

/*
var multiplyBy3 = multiplyBy(3);
console.log(multiplyBy3(3));
*/