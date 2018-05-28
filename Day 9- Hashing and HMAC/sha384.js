// SHA384 hashing algorithm comes under SHA2 and its cryptographic hash function which is used to generate hash value.
// It procduces a 384-bit hash value which is known as message digest
var crypto  = require('crypto');
var hash = crypto.createHash('sha384');
data = hash.update('Tejas Talekar', 'utf-8');
generatedHash = data.digest('hex');
console.log('Hash : '+generatedHash);

