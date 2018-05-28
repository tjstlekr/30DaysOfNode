// SHA512 hashing algorithm : comes under SHA2 and its cryptographic function is used to generate hash values. It produces
// 512-bit hash value which is known as message digest
var crypto  = require('crypto');
var hash = crypto.createHash('sha512');
data = hash.update('Tejas Talekar', 'utf-8');
generatedHash = data.digest('hex');
console.log('Hash : '+generatedHash);
