Function.prototype.inherits = function(superclass) {
    this.prototype = new superclass();
    this.prototype.constructor = this;
};

var Animal = function(name) {
    this.name = name;

    this.breath = function() {
        console.log(this.name + " is breathing.");
    };

    this.say = function() {
        console.log(this.name + " make strange noises");
    };
};

var HumanBeing = function(name) {
    this.name = name;
};

HumanBeing.inherits(Animal);

HumanBeing.prototype.say = function() {
    console.log("My name is " + this.name + " and I can speak");
};

var a = new Animal("Dog");
a.breath();
a.say();

var h = new HumanBeing("John");
h.breath();
h.say();