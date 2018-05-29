/*


What is express.js?

Express.js or simply express is minimal node.js web apps framework which is flexible and provide a set of featuress
such as simple APIs used for building backend of website and mobile applications. Express is open-source and
currently maintained by node.js foundation. Express also provides us with very basic  middleware and declarative routing.
Advantages of using express web application framework includes:
1. It makes routing pretty easy
2. As it is built on top of node.js, So fast I/O
 */


const express = require('express');
const app = express();

app.get('/',function (req, res) {
    res.send('Hello world!');
})

app.listen(3000, function () {
    console.log('Server is running on port 3000');
})