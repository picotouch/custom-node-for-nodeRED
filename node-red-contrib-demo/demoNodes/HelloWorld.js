module.exports = function(RED) {
    function helloWorld(config) {
        RED.nodes.createNode(this,config);
        
        var nodeName = this.name;
        this.bank = config.bank; 
        var node = this;

        this.on('input', function(msg) 	{
            
			var slovo = msg.payload.substr(0,1);
			if (slovo == node.bank)
			{	
			var res1 = msg.payload.substr(16, 1);
			var res2 = msg.payload.substr(15, 1);
			var res3 = msg.payload.substr(14, 1);
			var res4 = msg.payload.substr(13, 1);
			var res5 = msg.payload.substr(12, 1);
			var res6 = msg.payload.substr(11, 1);
			var res7 = msg.payload.substr(10, 1);
			var res8 = msg.payload.substr(9, 1);
			
			node.send([res1,res2,res3,res4,res5,res6,res7,res8]);
			}
            
            
			
										}
		
				);
        
    }
	
    RED.nodes.registerType("Hello World",helloWorld);
	
};

