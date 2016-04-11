var syn = require('synaptic');
var fs = require('fs');
var perceptron = new syn.Architect.LSTM(3,10,3,1);
var trainer = new syn.Trainer(perceptron);

fs.readFile('./train50.json','utf8',function(err,data){
	var traindata = JSON.parse(data);

	console.log('data loaded... starting training');
	trainer.train(traindata,{
		iterations:50,
		error:.00001,
		rate:1,
		log:true
	});


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