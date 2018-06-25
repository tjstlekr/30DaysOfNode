const zlib = require('zlib');
const fs = require('fs');

const zip = zlib.createGzip();

const read = fs.createReadStream('testFile.txt');
const write = fs.createWriteStream('newFile.tar.gz');


read.pipe(zip).pipe(write);
console.log('Zipped successfully');
