var extend = require('extend');

var base = {
	sendMessage:null,
	matchContext:null,
	data:null
}

module.exports.extend = function(obj){
	return extend(base,obj);
}