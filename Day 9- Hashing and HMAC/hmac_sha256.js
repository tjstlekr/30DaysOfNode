/*
One of the biggest problem with hashing includes the (rainbow table)[https://www.google.co.in/search?q=rainbow+table&oq=rainbow&aqs=chrome.1.69i57j35i39j0l4.3080j0j7&sourceid=chrome&ie=UTF-8]
which is precomputed table for reversing cryptographic hash functions

WHAT IS HMAC?
HMAC( keyed - hash HMAC ( keyed-hash message authentication code ) is a kind of MAC ( Message authentication code ) which involves performing the hash functions using a secret cryptographic key.
Just like hash, in HMAC also every generated hash using hashing algorithms is :

Unique : In hashing , for every unique input we will get unique output. we will get the same output for same input no matter how many times you input the same data But if we just slightly change the input it will change the output to a large extent.

Fixed length : Hashing algorithms always generate the hash with the same length. The length of input does not affect the length of the output.

Irreversible : Generated hashes are irreversible in nature. We can not change the hash to the input text again.
 */

var crypto = require('crypto');
// Creating hmac object

var algorithm = 'sha256'
// If you wish to used sha512, md5, whirlpool simply replace the sha256 with one you wish to use
var hmac = crypto.createHmac(algorithm, 'Vivekananda');
// passing the data to be hashed
data = hmac.update('Tejas Talekar');
//creating the hmac in required format
generatedHmac = data.digest('hex');

console.log('HMAC : '+generatedHmac);
