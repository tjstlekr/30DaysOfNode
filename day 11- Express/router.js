const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Simple example of routes');
})

app.get('/signup', function (req, res) {
    res.send('This is demo route for sign up');
})

app.get('/signin', function (req, res) {
    res.send('This is demo route sign in');
})

app.get('/signin/dashboard', function (req,res) {
    res.send('This is demo route for user who signed in and now reaches their dashboard');
})

app.listen(3000, function () {
    console.log('Server running on 3000');
})