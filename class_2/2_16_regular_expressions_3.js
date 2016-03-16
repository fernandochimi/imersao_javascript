var dateStr = "2012-04-20";

var match = dateStr.match(/(\d{4})-(\d{2})-(\d{2})/);

console.log(match);

var dateStrBr = match[3] + "/" + match[2] + "/" + match[1];

console.log(dateStrBr);

var regexp = /(\d{4})-(\d{2})-(\d{2})/;

var dateStrBr = dateStr.replace(regexp, "$3/$2/$1");

console.log(dateStrBr);