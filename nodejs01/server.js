var http=require('http');
function onrequest(request,response){

    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('Welcome to node.js');
    response.end();
};


http.createServer(onrequest).listen(8080)
console.log("server is created..!");