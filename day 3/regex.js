var  reg = "/ab*/"

var reg = new RegExp("ab*"); // This will check all the possible examples for ab, abbb but not aba, cbbb




var fs = require('fs');
var fileName = 'data.txt';
var str = fs.readFileSync(fileName).toString();
var pattern  = /man/gim
// here meaning of gim is  g= global scope, i = case insensetive, m = multiline match
var myArray = str.match(pattern)

console.log("Occurrence of the pattern is :" +myArray.length)

// 2nd example
// calculating number of tags in a file


var readFile = fs.readFileSync('data.html').toString();
var pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;

var occurrences = readFile.match(pattern);
console.log("Occurrences of pattern in the string is : " + occurrences.length);

