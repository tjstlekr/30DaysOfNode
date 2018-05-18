var fs = require('fs');


// //Asynchronous
// fs.rename('sample.txt', 'test.txt', (err) => {
//     if (err)
//         throw err;
//     else
//         console.log("Renamded File");
// });
// console.log("Asynchronous Test");
//


//Synchrnous way

fs.renameSync('writtenFile.txt', 'ahi.txt', (err) =>{
    if (err)
        throw err
    else
        console.log("Renamed File");
});
console.log("Working Asynchronously");