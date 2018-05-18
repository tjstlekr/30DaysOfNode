var fs = require('fs');

// Deleting File asynchronously

// fs.unlink('test.txt', (err) =>{
//     if (err)
//         throw err;
//     else
//         console.log("DELETED SUCCESSFULLy");
// });
// console.log("Checkign Asynchronous Behaviour");

fs.unlink('ahi.txt', (error => {
    if (error)
        throw  error;
    else
        console.log("Deleted successfully");
}));