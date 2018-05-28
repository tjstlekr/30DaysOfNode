//sha1 algorithm: Secure Hash algorithm is a cryptographic hash function which generates a hash value which is typically
// rendered as a hexadecimal number of exactly 40 digits long. It produces a 160 bit hash value which is known ads message digest
var crypto  = require('crypto');

var hash = crypto.createHash('sha1');

data = hash.update('Tejas Talekar', 'utf-8');

generatedHash = data.digest('hex');
console.log("Hash : "+generatedHash);
