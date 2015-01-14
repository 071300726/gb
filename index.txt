var http = require('http');

var fun = function(req, res){
	res.write('<script type="text/javascript">console.log("go");</script>');
console.log(1);
	setTimeout(function(){fun(req, res);},1000);
}

var staticPage = function(req, res){
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
	var html =' <!doctype html><html><head></head><body>ff<script type="text/javascript">(function(){var xhr = new XMLHttpRequest();xhr.onprogress=function(event){console.log(event);};xhr.open("GET","http://localhost:1337/data",true);xhr.send(null);console.log(2)})()</script></body></html>';
	res.end(html);
}
var chunkedData=function(req, res){
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.setHeader('Transfer-Encoding', 'chunked');
 
	fun(req,res);
}

var server = http.createServer(function (req, res) {
	req.url==='/'&&staticPage(req,res);
	req.url==='/data'&&chunkedData(req,res);
});


server.setTimeout(10000, function(){
	console.log('timeout');
});

server.listen(1337, '127.0.0.1');









/*
1. client->server ajax call
2. server->client chunked 



*/


















