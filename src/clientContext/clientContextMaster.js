var clientContext = require('./clientContext.js');

var clientContextDict = {};

var createContext = function(msg, sendMessage){
	var context = clientContext.extend({
		sendMessage:sendMessage
	});
	
	clientContextDict[msg.head.id] = context;	
	
	return context;
};

module.exports.getClientContext=function(msg,sendMessage){
	var context = clientContextDict[msg.head.id];

	return context?context:createContext(msg, sendMessage);
};