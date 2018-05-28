const crypto = require('crypto');
const fs = require('fs');


// algorithm to be used for hmac
const algorithm = 'md5';
//secret key to be used with hmac
var secrectKey = 'tjstlekr';
//creating hmac object
var hmac = crypto.createHmac(algorithm, secrectKey);



var filePath = '/home/tejas/Documents/self/30DaysOfNode/Day 9- Hashing and HMAC/sample.txt'

var fileData = fs.ReadStream(filePath);

fileData.on('data', function (data) {
    hmac.update(data);
});

fileData.on('end', function (data) {
    generatedHash = hmac.digest('hex');
    console.log('Hmac generated using ' + algorithm + ' \nHashed output is :  ' + generatedHash+ ' \nFile path is :  ' + filePath);
    fs.writeFileSync(filePath, generatedHash);
})


//In this chapter of 30 days of node tutorial series, we learned about how we can use crypto module in node.js
// for hash and HMAC operations. We learned about the snippets of SHA512 , ripemd160 , SHA256 , SHA384 , SHA224 ,
// SHA1 , md5 , whirlpool cryptographic hashing algorithms. Also, we learned about hashing a file using node.js crypto module.