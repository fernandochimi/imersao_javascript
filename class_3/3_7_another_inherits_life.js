Function.prototype.inherits = function(superclass) {
	var sp = superclass.prototype;
	var tp = this.prototype;

	for (var l in sp) {
		tp[l] = sp[l];
	}
	tp.uber = sp;
};

var Animal = function(name) {
    this.name = name;
};

Animal.prototype.say = function() {
    console.log(this.name + " make strange noises");
};

var HumanBeing = function(name) {
    this.name = name;
};
HumanBeing.inherits(Animal);

HumanBeing.prototype.say = function() {
    console.log("Sleeping...");
    this.uber.say.call(this);
};

var a = new Animal("Dog");
a.say();

var h = new HumanBeing("John");
h.say();