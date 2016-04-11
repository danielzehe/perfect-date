var syn = require('synaptic');
var fs = require('fs');
var perceptron = new syn.Architect.LSTM(7,30,1);
var trainer = new syn.Trainer(perceptron);

fs.readFile('./test50.json','utf8',function(err,data){
	var traindata = JSON.parse(data);

	console.log('data loaded... starting training');
	trainer.train(traindata,{
		iterations:500,
		error:.00001,
		rate:0.01,
		log:true,
		cost:syn.Trainer.cost.MSE
	});


	console.log('training done');


	var outputs =[];
	for(var i=0;i<300;i++){
	 outputs.push({
	 	input: traindata[i].input,
		output: perceptron.activate(traindata[i].input)[0].toFixed(3),
		target: traindata[i].output
	});
	}

	console.log(outputs);

});





// var outputs = [];
// outputs.push({
// 	input: '0 0',
// 	output: perceptron.activate([0,0])[0].toFixed(3),
// 	target: 0
// });
// outputs.push({
// 	input: '0 1',
// 	output: perceptron.activate([0,1])[0].toFixed(3),
// 	target: 1
// });
// outputs.push({
// 	input: '1 0',
// 	output: perceptron.activate([1,0])[0].toFixed(3),
// 	target: 1
// });
// outputs.push({
// 	input: '1 1',
// 	output: perceptron.activate([1,1])[0].toFixed(3),
// 	target: 0
// });

// console.log(outputs);