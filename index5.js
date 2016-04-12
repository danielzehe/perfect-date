var syn = require('synaptic');
var fs = require('fs');

var networkJSON =fs.readFileSync("./network.json",'utf8');

var network = syn.Network.fromJSON(JSON.parse(networkJSON));

var trainer = syn.Trainer(network);

fs.readFile('./train50.json','utf8',function(err,data){
	var traindata = JSON.parse(data);

	// console.log('data loaded... starting training');
	// trainer.train(traindata,{
	// 	iterations:50,
	// 	error:.00001,
	// 	rate:[0.01,0.001],
	// 	log:true,
	// 	cost:syn.Trainer.cost.MSE
	// });


	console.log('data loaded... start testing');

		var outputs =[];
		for(var i=0;i<traindata.length;i++){
		 outputs.push({
		 	input: traindata[i].input,
			output: network.activate(traindata[i].input)[0].toFixed(3),
			target: traindata[i].output
		});
		}

	console.log(outputs);


});