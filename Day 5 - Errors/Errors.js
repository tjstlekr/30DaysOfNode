// Errors are the issue arises unexpectedly and cause our program to not function properly or halt its execution

//1. new Error(message) :--- Is used to create a new error class object. It also sets error.message property to the text
// specified
const  error = new Error('This is an error message');

// To show the description of the message we use
// error.message
console.error(error.message);

//Error codes
// This is a string label which is used to identify the type of error
console.error(error.code)

//error stack
console.error(error.stack)


//error.captureStackTrace
console.error(error.captureStackTrace);

//captureStackTraceLimit is an property to get limited number of stacks in the form of string. by default stackktrace
// captureStackTraceLimit returns 10 stack trace . if non-number/ negative number   then stack trace will not
// return anything
console.error(error.captureStackTraceLimit);

// So properties of errors are

// error = { message, coode, stack, captureStackTrace, captureStackTraceLimit}


// In node js we have several mechanism for propagating this error and handle those propagated errors
// Depends upon the type of API way of handling is changes

// Synchronous APIs =   Synchronous APIs uses blocking method that does not accept a callback functions and uses throw
// to report errors

// Asynchronous APis - Error can be reported in multiple ways
// Erro can be routed to object's error event if an asynchronous event is called on an object

// Example follows
var fs = require('fs');

fs.readFile('test',(error, data) => {
    if (error) throw error;
    console.log('File read successfully');
})


//Standard javascript errors :
// < URI > error : This error is thrown when a global URI handling function is misued.
// < Eval > error : This error is thrown when the call to eval() fails.
// < Type > error : This is a subclass of error which shows that the argument provided is not of allowed type.
// for e.g. passing an object where a string is expected would be considered a TypeError.
// < Range > error : This is a subclass of error which shows that the argument provided was not within the range of acceptable values.
// < Syntax > error : This is a subclass of error which indicates that the code written is not of valid Javascript.
// < Reference > error : This is a subclass of error which signifies that an attempt is made to access a variable which is not defined. These are very common typos or broken code .
// System errors : This type of errors are generated when the exception occurs during the run time of the program. They are generated when the application violated some constraints of operating system.
// Properties of system errors :
// error.code : This is a string which represents and error code. some common examples include EACCES , EADDRINUSE , ECONNREFUSED , etc .
// error.port : This is a number which represents the connection's port which is unavailable.
// error.address : This is a string which represents the address to which the connection failed.
// error.path : This is a string which represents the relevant invalid pathname .
// error.syscall : This is a string which represents the failed syscall .
// error.errno : This property can be a number or a string. If number , the value will be negative which corresponds to the error code. If string , it is same as error.code .
// User-specified errors : This type of errors are generated by application code.
// Assertion errors : This type of errors are raised by assert . This type of errors are special case of errors which occurs when an exceptional logic violation is detected in node.js that should never occur.
