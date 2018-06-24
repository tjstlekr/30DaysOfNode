const express = require('express'),
      app = express(),
      path = require('path'),
      mongoClient = require('mongodb').MongoClient,
      bodyParser = require('body-parser'),
      crypto = require('crypto'),
      cors = require('cors'),
      url = 'mongodb://localhost:27017/',
      dbName = 'nodejsera';

app.use(cors());

app.get('/', function (req, res) {
  res.redirect('/public/index.html');
}).listen(3000);

console.log('Server running at port : 3000');
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  // To support URL-encoded bodies
  extended : true
}))

let getHash = function (pass, phone) {
  let hmac = crypto.createHmac('sha512', phone);

  // Passing the data to be hashed
  data = hmac.update(pass);
  // Creating hmac in requried format
  generateHmac = data.digest('hex');
  console.log('hmac : ' +generateHmac);
  return generateHmac;
}

app.post('/sign_up', function (req, res) {
  let name = req.body.name;
  let email = req.body.email;
  let pass = req.body.password;
  let phone = req.body.phone;
  let password = getHash(pass, phone);

  let data = {
    "name" : name,
    "email" : email,
    "password" : password,
    "phone" : phone
  }

  mongoClient.connect(url+dbName, function (error, db) {
    if (error) throw error;
    console.log('connection to database Successful');
    //Creating a collection in mongodb
    db.collection('details').insertOne(data, function (error, collection) {
      if (error) throw error;
      console.log('Record inserted successfully');
      console.log(collection);
    })
    console.log("DATA IS " + JSON.stringify(data));
    return res.redirect('/public/sucess.html');
  })

})
