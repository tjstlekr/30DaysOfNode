var  http = require('http');
var fs = require('fs')

var host = '127.0.0.1'
var port = 3000

var server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "audio/mp3"});
    fs.exists('audio.mp3', (exists) =>{
        if (exists) {
            var responseStream = fs.createReadStream('audio.mp3');
            responseStream.pipe(response)
        }else {
            response.end("File not found");
        }
    })

}).listen(port);
