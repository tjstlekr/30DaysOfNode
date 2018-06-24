const app = require('express')(),
      server = require('http').Server(app),
      io = require('socket.io')(server);


server.listen(3000);
console.log('Server running on port : 3000');

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/css-color.html');
});

app.get('/admin', function (req, res) {
  res.sendFile(__dirname + '/css-color-admin.html');
});

io.on('connection', function (socket) {
  socket.on('admin', function (data) {
    console.log(data);
    console.log('about to broadcast');
    io.sockets.emit('color', {data: data})
  })
})
