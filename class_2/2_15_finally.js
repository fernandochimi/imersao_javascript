try {
    throw "Boom!";
} catch (e) {
    console.log("Boom!", e);
} finally {
    console.log("See you next time!");
}

try {
    console.log("Relax! It's Okay");
} catch (e) {
    console.log("An error occurred: ", e);
} finally {
    console.log("See you next time!");
}
