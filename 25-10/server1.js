var http = require("http");
var server = http.createServer(fun_1);
function fun_1(req,res){
    res.writeHead(200,{'connect-type':'text/plain'});
    res.write("welcome to node js server...!");
    res.end();
}
server.listen(8080);
console.log("server listing port no.8080");
