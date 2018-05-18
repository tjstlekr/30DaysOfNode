var fs = require('fs');


// fs.readFile('sample.txt', (err, data) =>{
//     if (err)
//         throw  err;
//     else
//         console.log("Reading FILE ASYNCHRONOUSLY "+data);
// });


//Following is synchronous way of reading a file whereas one above is asynchonous reading of file
var fileName = 'sample.txt';
var content = fs.readFileSync(fileName);
console.log(''+ content);
