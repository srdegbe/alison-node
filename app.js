const http = require('http');

http.createServer((req, res) => {
   res.writeHead('200', {'Content-type': 'text/plain'});
   res.write('Hello World!');
   res.end();
}).listen(4500)