var myVariable = "I'm Global";

function exampleClosure() {
    var myVariable = "I'm local";
    function f() {
        return myVariable;
    }
    return f();
}

/*
console.log(exampleClosure());
*/