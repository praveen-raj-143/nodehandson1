const http=require("http");

http.createServer(function(req,res){
    if(req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>what is node ?</h1>');
        res.write('<h2>Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node and Nodejs is same.</h2>')
        res.write('<h2>Node is a cross-platform, open-source JavaScript runtime environment that allows developers to run JavaScript code outside of the web browser.</h2>')
        res.write('<ul><li>Node is an open source server environment.</li><li>Node is free</li><li>Node runs on various platforms(Windows, Linux, Unix, Mac OS X, etc.)</li><li>Node uses JavaScript on the server</li></ul>')
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