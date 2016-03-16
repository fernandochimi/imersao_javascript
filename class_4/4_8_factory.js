var Computer = function(name, cores, hdSize) {
    this.name = name;
    this.cores = cores;
    this.hdSize = hdSize;
};

Computer.prototype.boot = function() {
    console.log("Start " + this.name + "...");
};

Computer.prototype.process = function() {
    console.log("Process with " + this.cores + " core(s)");
};

Computer.prototype.save = function(what) {
    console.log("save " + what + " in one HD with " + this.hdSize + "GB");
};

var computer_one = new Computer("Basic", 1, 40);
computer_one.boot();
computer_one.process();
computer_one.save();

var computer_two = new Computer("Mega", 4, 500);
computer_two.boot();
computer_two.process();
computer_two.save();