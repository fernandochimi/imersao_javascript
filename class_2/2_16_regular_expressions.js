var pattern_one = RegExp("\\d");

console.log("abc123def".match(pattern_one));

var pattern_two = /\d/;

console.log("abc123def".match(pattern_two));