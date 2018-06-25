const zlib = require('zlib'),
      fs = require('fs');

const unzip  = zlib.createUnzip();

const read = fs.createReadStream('newFile.tar.gz'),
      write = fs.createWriteStream('extracted.txt');

read.pipe(unzip).pipe(write)

console.log('Unzipped successfully');
