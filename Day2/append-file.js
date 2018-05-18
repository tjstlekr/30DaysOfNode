var fs = require('fs');

//Appending input to sample.txt asynchronously

var appendData = 'HIHIHIIHIHIHIHHIIHIHIIH'
fs.appendFile('sample.txt', appendData, (err) =>{
    if (err)
        throw err;
    else
        console.log("Appended successfully");
});

//appending input synchronously
fs.appendFileSync('writtenFile.txt', appendData, (error) => {
    if (error) {
        throw error;
    }
    else {
        console.log("Appended File in a Synchnoised manner");
    }
})