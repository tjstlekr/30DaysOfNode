// We are hashing contents of a file and storing it another file




var fs = require('fs');

//algorithm to be used for HASH
var algorithm = 'sha512';
var hash = crypto.createHash(algorithm);
var fileName = '/home/tejas/Documents/self/30DaysOfNode/Day 9- Hashing and HMAC/md5.js';
var fileData = fs.ReadStream(fileName);

fileData.on('data', function (data)  {
    hash.update(data, 'utf-8');
});


//creating the hash in required format and writing into a file
fileData.on('end', function () {
    var generateHash = hash.digest('hex');
    // console.log('Hash generated using '+algorithm+' \n Hash: '+generateHash+' file name is test.txt');
    console.log(generateHash);
    fs.writeFileSync('/home/tejas/Documents/self/30DaysOfNode/Day 9- Hashing and HMAC/test.txt', generateHash);
});
