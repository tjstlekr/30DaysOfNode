const fs = require('fs');

let date = new Date()
const startTime = date.getTime();
console.log('Starting execution at : '+startTime);
const fileName = 'output.txt';

fs.readFile(fileName, function (error, data) {
  if (error) throw error;
  console.log('File Read success');
});

let date1 = new Date();
const endTime = date1.getTime();
console.log('File read complete at : '+endTime);
const executionTime = endTime - startTime;
console.log('Therefore, Total time for execution is '+executionTime);


console.log('Observe this line As we\'re using callbacks i.e. asynchronous/non-blocking-code till the read is complete the program or server utilizes time to perform other given operations. This line of code is written after the file read');
