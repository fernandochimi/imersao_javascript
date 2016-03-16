var MY_PROJECT = MY_PROJECT || {}
MY_PROJECT.vehicles = MY_PROJECT.vehicles || {
    Vehicle: function(name) {
        this.name = name;
        var currentSpeed = 0;
        var motor = null;
        var that = this;

        var accelerate = function() {
            currentSpeed += 10;
            return this;
        };

        var setMotor = function(_motor) {
            motor = _motor;
            return this;
        };

        return {
            setMotor: setMotor,
            accelerate: accelerate,
            toString: function() {
                return that.name;
            }
        };
    }
};

console.log(new MY_PROJECT.vehicles.
    Vehicle("Pajero").
    setMotor({type: "Gasoline", hp: 1.4}).
        accelerate().
        toString());