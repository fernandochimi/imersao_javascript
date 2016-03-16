function onlyEvensAllowed(n) {
    if ((n % 2) !== 0) {
        throw Error("Only evens allowed");
    }
}

/*
onlyEvensAllowed(4);
onlyEvensAllowed(5);
*/