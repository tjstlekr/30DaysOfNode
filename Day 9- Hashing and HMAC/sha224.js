// sha224 hashing algorithm : secure hash algorithm 224 comes with sha2
// and it is cryptographic hash function which is used to generate hash values. It  produces 224 bits hash value which
//is known as message digest

var crypto  = require('crypto');
var hash   = crypto.createHash('sha224');

data = hash.update('Tejas Talekar', 'utf-8');
generatedHash = data.digest('hex');
console.log('Hash : '+generatedHash);
