const express = require('express');
const app = express()



app.get('/', function (req, res) {
    res.send('This is simple example of routes');
})


app.get('/signup', function (req, res) {
    // This is how we will receive params from front end

    let name = req.query.name;
    let email = req.query.email;
    let passsword = req.query.password;
    // For demo purpose
    console.log(name+ ' '+ email + ' '+passsword);
    /*
    store this in a database and perform furrther processing
     */
    res.send('In signup module');
})

app.listen(3000, function () {
    console.log("Server running on port 3000");
})