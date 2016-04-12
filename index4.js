var fs = require('fs');
var os = require('os');

	var output_train = [];
	var output_test = [];
	var output_all =[];
fs.readFile('/Users/danielzehe/Dropbox/perfect\ date/klarchiv_03126_daily_his/produkt_klima_Tageswerte_18810101_20151231_03126.txt','utf8',function(err,data){
	var lines =data.split(os.EOL);


	var min_val = 100;
	var max_val = -100;
	for(var i=25000;i<lines.length;i++){
		var oneline = lines[i].split(';');


		var airtemp = oneline[3];

		min_val=Math.min(airtemp,min_val);
		max_val=Math.max(airtemp,max_val);
	}
	console.log('min:'+min_val+" max:"+max_val);
	for(var i=25000;i<lines.length;i++){
		var oneline = lines[i].split(';');


		var airtemp = oneline[3];
		var year = oneline[1].substr(0,4);
		var month = oneline[1].substr(4,2);
		var day = oneline[1].substr(6,2);
		// console.log(year);
		var outputobject={};
		// if(i<25005){
		// outputobject ={
		// 	input:[1,1,1,1, Number(month)/12,Number(day)/31,1],
		// 	output:[(Number(airtemp)-min_val)/(max_val-min_val)]
		// };
		// }
		// else{
		// outputobject ={
		// 	input:[output_all[i-25000-4].output[0],output_all[i-25000-3].output[0],output_all[i-25000-2].output[0],output_all[i-25000-2].output[0], Number(month)/12,Number(day)/31,1],
		// 	output:[(Number(airtemp)-min_val)/(max_val-min_val)]
		// };
		// }


		outputobject = {
			input:[Number(month)/12,Number(day)/31],
			output:[(Number(airtemp)-min_val)/(max_val-min_val)]
		};
		 

		output_all.push(outputobject);


		if(i%50==0){
		// if(i==1){
			output_test.push(outputobject);
		}

		else{
			output_train.push(outputobject);
		}
	}

	// console.log(output);

	fs.writeFile('./train50.json',JSON.stringify(output_train),function(err){
		if(err) throw err;
		console.log('all done');
	});


	fs.writeFile('./test50.json',JSON.stringify(output_test),function(err){
		if(err) throw err;
		console.log('all done');
	});


});