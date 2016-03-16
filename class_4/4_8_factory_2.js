var MY_PROJECT = MY_PROJECT || {};

MY_PROJECT.ComputerMaker = function() {};

MY_PROJECT.ComputerMaker.prototype.boot = function() {
    console.log("Start " + this.name + "...");
};

MY_PROJECT.ComputerMaker.prototype.process = function() {
    console.log("Process with " + this.cores + " core(s)");
};

MY_PROJECT.ComputerMaker.prototype.save = function(what) {
    console.log("save " + what + " in one HD with " + this.hdSize + "GB");
};

MY_PROJECT.ComputerMaker.factory = function(type) {
    if (typeof MY_PROJECT.ComputerMaker[type].prototype.boot !== 'function') {
        MY_PROJECT.ComputerMaker[type].prototype = new MY_PROJECT.ComputerMaker();
    }

    return new MY_PROJECT.ComputerMaker[type]();
};

MY_PROJECT.ComputerMaker.Basic = function() {
    this.name = "Basic";
    this.cores = 1;
    this.hdSize = 40;
};

MY_PROJECT.ComputerMaker.Mega = function() {
    this.name = "Mega";
    this.cores = 4;
    this.hdSize = 500;
};

var basicComputer = MY_PROJECT.ComputerMaker.factory('Basic');
basicComputer.boot();
basicComputer.process();
basicComputer.save('basic');

var megaComputer = MY_PROJECT.ComputerMaker.factory('Mega');
megaComputer.boot();
megaComputer.process();
megaComputer.save('mega');