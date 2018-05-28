// Whirlpool hashing algorithm
// takes input  of any length less than (2)^256 that is 1.157920892×10⁷⁷ bits and output 512 bits hash

var crypto  = require('crypto');
var hash =  crypto.createHash('whirlpool');
data = hash.update('Tejas Talekar', 'utf-8');
generatedHash = data.digest('hex')

console.log("Hash : "+generatedHash);
