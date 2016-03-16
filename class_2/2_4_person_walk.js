var person = {
    legs: ["left", "right"],
    walk: function() {
        var that = this;
        function moveLegs() {
            console.log("Move the " + that.legs[0] + " leg.");
            console.log("Move the " + that.legs[1] + " leg.");
        }
        moveLegs();
    }
};