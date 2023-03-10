const http=require("http");

http.createServer(function(req,res){
    if(req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>Hello I am default page</h1>');
        res.end();
    }
    else if(req.url==="/home"){
        res.write(JSON.stringify([1,2,3,4]));
        res.end();
    }
    else if(req.method === 'GET' && req.url==='/about'){
        res.write('<h1>Hello I am about page</h1>');
        res.end();
    }
    else if(req.method === 'GET' && req.url==='/contact'){
        res.write('<h1>Hello I am contact page</h1>');
        res.end();
    }
    
}).listen(8080);