var http = require('http');
var httpLayer = require('./httpLayer.js');

var master = {
	connectionDict:{},
	startService: function(){
		var server = http.createServer(function (req, res) {
			master.handler(req, res);
		});

		server.setTimeout(10000, function(){
			console.log('timeout');
		});

		server.listen(1337, '127.0.0.1');
	},
	handler: function(req, res){
		
	},
	
}

module.exports = master.startService;