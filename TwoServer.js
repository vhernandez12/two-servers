var http = require("http");

var PORT = 7000;

function handleRequest(request, response) {
    response.end("You are an amazing human being:" );
}

var server = http.createServer(handleRequest);

server.listen(PORT, function () {
    console.log("Server listening on: http://localhost: " + PORT)
});

var PORT2 = 7500;

function handleRequest2(request, response) {
    response.end("You smell like corn chips:");
}

var server2 = http.createServer(handleRequest2);

server2.listen(PORT2, function () {
    console.log("Server2 listening on: http://localhost:" + PORT2);
});