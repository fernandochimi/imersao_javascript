function onlyEvensAllowed(n) {
    if ((n % 2) !== 0) {
        throw Error("Only evens allowed");
    }
}

try {
    onlyEvensAllowed(5);
} catch(e) {
    console.log(e.name);
    console.log(e);
}
