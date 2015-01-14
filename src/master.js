var clientContextMaster = require('clientContext/clientContextMaster.js');
var gameMaster = require('./gameMaster.js');


module.exports={
	receiveMessage:function(msg,sendMessage){
		//find client context
		var clientContext = clientContextMaster.getClientContext(msg,sendMessage);
		
		gameMaster.instance.onReceiveData(clientContext, msg.data);		
	}
}