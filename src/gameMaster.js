var extend = require("extend");

var base = {
	onReceiveData: function(clientContext, data){},
	//onReceiveMatchData: function(matchContext, clientContext, data){}
};

var instance;

module.exports.init = function(obj){
	instance = extend(base,obj);
};

module.exports.instance = instance;