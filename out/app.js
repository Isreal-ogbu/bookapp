"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var portNumber = 8080;
function requestListener(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Response Text Here');
    response.end();
}
http.createServer(requestListener).listen(portNumber);
console.log('Listening on localhost:' + portNumber);
//# sourceMappingURL=app.js.map