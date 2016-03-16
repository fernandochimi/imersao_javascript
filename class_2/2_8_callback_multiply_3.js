function multiplyByTwo(list, callback) {
    var m = [];
    for (var i=0; i < list.length; i++) {
        m[i] = callback(list[i] * 2);
    }
    return m;
}

/*
var a = [1, 2, 3, 4, 5];
var result = multiplyByTwo(a, function(n){
    return n + 1;
});
console.log(result);
*/