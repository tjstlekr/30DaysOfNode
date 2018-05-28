/* crypto module in node.js is used to provide cryptographic functionalities. It includes a set of wrappers for OpenSSL's
hash , HMAC, verify, cipher, decipher and sign function. In Part1, we'll learn about hashand hmac functions

What is hashing?
hashing is a process of generating  a fixed length value from a string  using methematical functions. It is  used for
providing security.
--- UNIQUE! = In hashing, for every unique input we will get unique output. we will get the same output for same input
no matter how many times you input same data But if just slightly change in input it will change the output at large
extent
--- Fixed Length! = hashing algorithms always generate hash with same length . The length of input does not affect
length of output
--- Irreversible! = Geneated hashes are irreversible in nature. We cannot change the hash to the input text again
*/



// MD5 hashing algorithm
// MD5 stands for message digest 5 is a widely used hash function which produces 128-bit hashes.
var crypto  = require('crypto');
// creating hash object
var hash  = crypto.createHash('md5');
// passing the data to be hashed

data = hash.update('Tejas Talekar', 'utf-8');
// Creating the hash in the required format
generatedHash = data.digest('hex');
//printing the output on the console
console.log("Hash : "+generatedHash);



