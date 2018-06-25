// require fs module for file system
const fs = require('fs');
// write data to a file  using writable stream
const writeData = 'I am working on streams for the first time';

const myWriteStream = fs.createWriteStream('aboutme.txt');


myWriteStream.write(writeData);

myWriteStream.end();
myWriteStream.on('error', function (error) {
  console.log(error);
});

myWriteStream.on('finish', function () {
  console.log('Data written successfully using streams.');
  console.log('Now trying to read the same file using read stream');
  const myreadStream = fs.createReadStream('aboutme.txt');
  // adding handlers for our read stream
  let readContent = '';
  myreadStream.on('data', function (chunk) {
    readContent += chunk;
  })
  myreadStream.on('error', function (error) {
    console.log(error);
  });
  myreadStream.on('end', function () {
    console.log('Reads :'+readContent);
  });
  console.log('Performed read and write using streams');
});
