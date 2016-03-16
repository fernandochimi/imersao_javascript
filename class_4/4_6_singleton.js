// var singletonObject = {};
var MY_PROJECT = MY_PROJECT || {};

(function() {
    function Logger() {
        var info = function(message) {
            console.log("INFO: ", message);
        };

        var warning = function(message) {
            console.log("WARNING: ", message);
        };

        return {
            info: info,
            warning: warning,
        };
    }
    MY_PROJECT.Logger = new Logger();
})();

var logger = MY_PROJECT.Logger;
logger.info("Success Message");

var logger_2 = MY_PROJECT.Logger;
console.log(logger === logger_2);