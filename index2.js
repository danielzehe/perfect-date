var fs = require('fs');
var os = require('os');

	var output_train = [];
	var output_test = [];
fs.readFile('/Users/danielzehe/Dropbox/perfect\ date/klarchiv_03126_daily_his/produkt_klima_Tageswerte_18810101_20151231_03126.txt','utf8',function(err,data){
	var lines =data.split(os.EOL);

	for(var i=1;i<lines.length;i++){
		var oneline = lines[i].split(';');


		var airtemp = oneline[3];
		var year = oneline[1].substr(0,4);
		var month = oneline[1].substr(4,2);
		var day = oneline[1].substr(6,2);
		// console.log(year);
		if(i>lines.length/2){
		// if(i==1){
			output_test.push({input:[Number(year),Number(month),Number(day)],output:[Number(airtemp)]});
		}

		else{
			output_train.push({input:[Number(year),Number(month),Number(day)],output:[Number(airtemp)]});
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