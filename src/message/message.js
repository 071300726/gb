var extend = require('extend');

var base = {
	head:{
		id:""
	},
	data:null
}

module.exports.extend = function(obj){
	return extend(true,base,obj);
}