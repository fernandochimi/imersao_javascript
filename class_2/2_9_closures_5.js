function counter() {
    var n = 0;
    return {
        count: function() {
            n++;
            return n;
        },
        reset: function() {
            n = 0;
        }
    };
}

var counterA = counter();
var counterB = counter();
/*
console.log(counterA.count());
console.log(counterB.count());
counterA.reset();
counterB.reset();
counterA.n = -300;
*/