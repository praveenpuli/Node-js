var http = require("http");
var module1=require("./module1");
var module2=require("./module2");
http.createServer(function(req,res){
    res.writeHead(200,{'connect-type':'text-plain'});
    res.write(module1.fun_2()+"\n");
    res.write(module2.fun_3.user+"..."+
              module2.fun_3.password+"..."+
              module2.fun_3.C_Limit+"..."+
              module2.fun_3.funbug+"...");
    res.end();
}).listen(8080);
console.log("server listing port no.8080");