function divisionByZeroError(message) {
    var defaultMessage = "You don't do divisions by zero";
    this.message = message || defaultMessage;
    this.name = "divisionByZeroError";
}

divisionByZeroError.prototype = Error.prototype;

function divide(a, b) {
    if (b === 0) {
        throw new divisionByZeroError();
    } else {
        return a / b;
    }
}

/*
console.log(divide(4, 2));
console.log(divide(5, 0));
*/