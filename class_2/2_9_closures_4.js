function counter() {
    return {
        n: 0,
        count: function() {
            this["n"]++;
            return this["n"];
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
*/