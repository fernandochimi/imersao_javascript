Function.prototype.inherits = function(superclass) {
    this.prototype = new superclass();
    this.prototype.constructor = this;
    this.uber = superclass.prototype;
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
    this.constructor.uber.say.call(this);
};

var a = new Animal("Dog");
a.say();

var h = new HumanBeing("John");
h.say();