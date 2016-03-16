var MY_PROJECT = MY_PROJECT || {}
MY_PROJECT.vehicles = MY_PROJECT.vehicles || {
    Vehicle: function(name) {
        this.name = name;
        var currentSpeed = 0;

        this.accelerate = function() {
            currentSpeed += 10;
        };

        this.accelerateTo100 = function() {
            if (currentSpeed > 100) {
                currentSpeed = 100;
            } else {
                for (var i = 0; i < 10; i++) {
                    this.accelerate();
                }
            }
        };

        this.getCurrentSpeed = function() {
            return currentSpeed;
        };
    }
};

var v = new MY_PROJECT.vehicles.Vehicle("Pajero");
v.accelerateTo100();

console.log(v.getCurrentSpeed());

v.accelerate = function() {
    console.log("PNMED");
};

v.accelerateTo100();