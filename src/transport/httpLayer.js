var transportLayer = require('./transportLayer.js');
var gameMaster = require('../gameMaster.js');

var connectionDict = {
	"identity":{}	//KV structure,identity<->client info(response connection)
}

var httpLayer = transportLayer.extend({
	name:"http transportLayer",
	receiveMessage:function(req,res){
		var data = {};//getdata from req
		gameMaster.receiveMessage(data, sendMessage);
	},
	sendMessage:function(data){}
});

module.exports = httpLayer;