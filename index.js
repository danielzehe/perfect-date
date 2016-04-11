var syn = require('synaptic');
var perceptron = new syn.Architect.Perceptron(2,3,1);

var res = perceptron.trainer.XOR({
	iterations:10000,
	error:.00001,
	rate:1,
	log:true
});

var outputs = [];
outputs.push({
	input: '0 0',
	output: perceptron.activate([0,0])[0].toFixed(3),
	target: 0
});
outputs.push({
	input: '0 1',
	output: perceptron.activate([0,1])[0].toFixed(3),
	target: 1
});
outputs.push({
	input: '1 0',
	output: perceptron.activate([1,0])[0].toFixed(3),
	target: 1
});
outputs.push({
	input: '1 1',
	output: perceptron.activate([1,1])[0].toFixed(3),
	target: 0
});

console.log(outputs);