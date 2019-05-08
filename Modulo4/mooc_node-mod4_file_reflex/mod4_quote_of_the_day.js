
let fs = require("fs");

function quote_of_the_day(){

	console.log();
	console.log("quote_of_the_day:");
    
	fs.readFile('./mod4_quotes_of_the_day.json', 'utf8', function (err, data) {
	  if (err) throw err;
	  let obj = JSON.parse(data);
	  let index = Math.round(Math.random()*(obj.length-1));
	  console.log(`${obj[index]} (${index})`);
	});

	console.log();
}
module.exports = {quote_of_the_day};
