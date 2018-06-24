const app = require('express')(),
      server = require('http').Server(app),
      io = require('socket.io')(server);

server.listen(3000);
console.log('Server started at port : 3000');

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/admin', function (req, res) {
  res.sendFile(__dirname + '/admin.html');
});

io.on('connection', function (socket) {

  socket.emit('welcome', {data : 'welcome'})

  socket.on('new', function (data) {
    console.log('About to upload quote');
    io.sockets.emit('next', { data : data })
  })
});
