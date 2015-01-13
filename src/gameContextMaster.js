var gameContext = require('./gameContext.js');

var gameContextDict = {};
var createContext = function(data){
	return gameContext.extend({
		
	});
};

module.exports.getGameContext=function(data){
	var context = gameContextDict[data.key];
	
	return context?context:createContext(data);	
};