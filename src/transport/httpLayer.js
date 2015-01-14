var transportLayer = require('./transportLayer.js');
var master = require('../master.js');

var connectionDict = {
	"identity":{}	//KV structure,identity<->client info(response connection)
}

var httpLayer = transportLayer.extend({
	name:"http transportLayer",
	receiveMessage:function(req,res){
		var msg = {};//get message from req
		master.receiveMessage(msg, sendMessage);
	},
	sendMessage:function(msg){}
});

module.exports = httpLayer;