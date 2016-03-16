function funA() {
    try {
        console.log("funA()");
        funB();
    } catch (e) {
        console.log("Capture the exception in funA()");
        console.log(e.name);
        console.log(e.message);
    }
}

function funB() {
    console.log("funB()");
    try {
        funC();
    } catch (e) {
        console.log("Capture the exception in funB()");
        throw e;
    }
}

function funC() {
    console.log("funC()");
    throw Error("Boom!");
}

/*
funA();
*/