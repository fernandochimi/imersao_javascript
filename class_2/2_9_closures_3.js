var counter = {
    n: 0,
    count: function() {
        this["n"]++;
        return this["n"];
    },
    reset: function() {
        this["n"] = 0;
    }
}
/*
console.log(counter.count());
counter.reset();
*/