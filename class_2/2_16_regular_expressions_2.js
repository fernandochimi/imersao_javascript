var pattern = /abc\ddef/;
var string = "aaabc1defff";

var match_one = string.match(pattern);
console.log(match_one);

var match_two = pattern.exec(string);
console.log(match_two);

var s = string.replace(pattern, "zzz");
console.log(s);

var a = string.split(pattern);
console.log(a);

var position = string.search(pattern);
console.log(position);

var bool = pattern.test(string);
console.log(bool);