var http = require("http");
var module1=require("./module1");
http.createServer(function(req,res){
    res.writeHead(200,{'connect-type':'text/plain'});
    res.write(module1.fun_2());
    res.end();
}).listen(8080);
console.log("server listing port no.8080");