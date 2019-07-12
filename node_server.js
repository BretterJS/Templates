// Node JS Server Template

const http = require('http');

const server = http.createServer(function(req, res) {

  res.setHeader('Content-type', 'application/json');
  res.setHeader('Acces-Control-Allow-Origin', '*');
  res.writeHead(200);

  res.end();

});

server.listen(1337, () => {

  console.log('Listeneing on Port 1337!');

});

