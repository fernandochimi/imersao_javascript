var MY_PROJECT = MY_PROJECT || {};

MY_PROJECT.Computer = function() {
    this.decoratorsList = [];
};

MY_PROJECT.Computer.decorators = {
    withHD: {
        toString: function(pre) {
            return pre = " (with one HD)";
        }
    },

    withMemory: {
        toString: function(pre) {
            return pre = " (with Memory RAM)";
        }
    },

    withLCDScreen: {
        toString: function(pre) {
            return pre = " (with monitor LCD)";
        }
    },
};

MY_PROJECT.Computer.prototype.decorate = function(decorator) {
    this.decoratorsList.push(decorator);
};

MY_PROJECT.Computer.prototype.toString = function() {
    var text = "I am a computer ", name, i;

    for (i = 0; i < this.decoratorsList.length; i++) {
        name = this.decoratorsList[i];
        text = MY_PROJECT.Computer.decorators[name].toString(text);
    }
    return text;
};

var c = new MY_PROJECT.Computer();
c.decorate("withHD");
c.decorate("withMemory");
c.decorate("withLCDScreen");
console.log(c.toString());