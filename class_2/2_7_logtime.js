var logTime = function(target, fun) {
    var oldFunction = target[fun];
    var startTime = new Date().getMilliseconds();
    oldFunction.apply(this, arguments);
    var endTime = new Date().getMilliseconds();
    var time = endTime - startTime;
    console.log("The function during " + time + " milliseconds to be executed");
};

var numbers = [];
for (var i=0; i < 9999999; i++) {
    numbers[i] = Math.random() * 100;
}