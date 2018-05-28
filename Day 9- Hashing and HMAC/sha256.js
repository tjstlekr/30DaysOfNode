// sha256 hash algorithm 256 comes under SHA2 and its cryptographic hash function which is used to generate hash values.
// It produces 256 hash value which is known as message digest

var crypto  = require('crypto');
var hash = crypto.createHash('sha256');
data = hash.update('Tejas Talekar', 'utf-8');
generatedHash = data.digest('hex');
console.log('Hash : '+generatedHash);

