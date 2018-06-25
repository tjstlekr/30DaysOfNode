const fs = require('fs');

let date1 = new Date();
const timeStart = date1.getTime();
console.log('Starting at : '+timeStart);
console.log('Let\'s start reading a file');


// Name of the file to be read
const fileName = 'output.txt';
// Reading file Synchronously
const content = fs.readFileSync(fileName);
// console.log('Content : '+content);



// For calculating the execution time
let date2 = new Date();
const timeEnd = date2.getTime();
console.log('Finishing at : '+timeEnd );
const executionTime = timeEnd - timeStart;
console.log('Total time for execution is : '+executionTime);


// Consider it some another task in queue
console.log('Another task to be executed');
