var http=require('http');
var evaluate=require('./evaluate');
var custome=require('./custome')

function onrequest(request,response){

    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('Welcome to node.js');
    response.write("\n"+evaluate.sum(10,20));
    response.write("\n"+evaluate.str);
    response.write("\n"+custome.dt());
    response.write("\n"+custome.mystr1);
    response.write("\n"+custome.mystr2);
    response.end();
};


http.createServer(onrequest).listen(8080)
console.log("server is created..!");