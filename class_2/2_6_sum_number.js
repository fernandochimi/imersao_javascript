Math.sum = function() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
};

/*
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = Math.sum(numbers);
console.log(sum);

sum = Math.sum.apply(Math, numbers);
console.log(sum);
*/