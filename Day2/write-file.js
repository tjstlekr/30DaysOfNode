var fs = require('fs');

var content = "THIS IS THE CONTENT OF THE FILE";

// This is an asynchronous way of writing into a file
fs.writeFile('writtenFile.txt', content, (err) =>{
    if (err)
        throw err;
    else
        console.log("Written File successfully");
});

// This is an synchronous way of writing a file
fs.writeFileSync('SyncWritten.txt', content, (err) => {
    if (err)
        throw err;
    else
        console.log("Created a file in a synchronoised way");
});