var EXTEND = require('extend');

var baseClass = {
	name:"base transportLayer",
	receiveMessage:function(){},
	sendMessage:function(){}
};

var transportLayer = {
	extend:function(obj){
		return EXTEND(baseClass,obj);
	}
}


module.exports = transportLayer;