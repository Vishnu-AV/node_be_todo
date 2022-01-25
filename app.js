// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 5500;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

var greet = require("./greet");

greet();
var fn = "vishnu";
console.log(fn);

// immediately invoked function. 
(function () {
  var fn = "av";
  console.log(fn);
}());
