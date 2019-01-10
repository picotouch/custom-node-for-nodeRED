module.exports = function(RED) {
    function helloWorld(config) {
        RED.nodes.createNode(this,config);
        var context = this.context();
        var node = this;
        this.on('input', function(msg) {

var str = msg.payload;
var res1 = str.substring(0, 1);
var res2 = str.substring(1, 2);
var res3 = str.substring(2, 3);
var res4 = str.substring(3, 4);
var res5 = str.substring(4, 5);

        //var outMsg = {payload: "Hello World"};
    
        node.send([res1,res2,res3,res4,res5]);
        
        });
    }
    RED.nodes.registerType("Hello World",helloWorld);
};
