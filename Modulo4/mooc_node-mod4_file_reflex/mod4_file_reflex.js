
    // Imports user module mod4-quote_of_the_day.js
let my_mod = require("./mod4_quote_of_the_day");

console.log();
my_mod.quote_of_the_day();

let delay = ((Math.ceil(Math.random()*5))*1000).toFixed(0);
setTimeout(reflexes, delay);


function reflexes() {
	console.log();
	console.log("Press return:");
	let init = Date.now();
	process.stdin.resume();
	process.stdin.setEncoding('utf8');
	process.stdin.on('data', function (key) {
		console.log();
		console.log(`Your time is: ${Date.now() - init}ms`);
		process.exit();
	});
};
