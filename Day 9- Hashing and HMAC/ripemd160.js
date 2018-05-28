// RIPEMD-160 hashing algorithm = (RIPEMD = RACE Integrity Primitives Evaluation Message Digest) 160 is an improved
// version of ripemd and it generate 40 digit hexadecimal number;

var crypto  = require('crypto');
var hash = crypto.createHash('ripemd160');
data = hash.update('Tejas Talekar', 'utf-8');
generatedHash = data.digest('hex');
console.log('Hash : '+generatedHash);