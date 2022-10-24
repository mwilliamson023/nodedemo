

// server.js
const http = require("http");

http.createServer(function(request, response) {    
   response.writeHead(200, {"Content-Type": "text/html"});
   response.write("<h1>Hello, Node.js!</h1>");   
   response.write("<h2>Mason Williamson - w35r623</h2> \
            <p>Running node server on port 3037</p>");
   response.end();
}).listen(3037);

// For local test:
// node server.js in console
// kill: ctrl+c & refresh