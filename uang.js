var uang = 735000;
var lmPlh = 50000;
var splh = 10000;
var lmRb = 5000;

var a = uang % lmPlh;
var b = uang - a;
var c = b/lmPlh;

var d = a % splh;
var e = a - d;
var f = e / splh;

var g = d % lmRb;
var h = d - g;
var i = h / lmRb;


console.log(c);
console.log(f);
console.log(i);


