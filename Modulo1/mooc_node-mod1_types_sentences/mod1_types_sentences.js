const mod1_exer1 = () => {
	let hour = new Date().getHours();
	let greeting;

	if (hour < 12) {
		greeting = "Good morning";
	} else if (hour < 22) {
		greeting = "Good afternoon";
	} else {
		greeting = "Good night";
	}

	return `${greeting}, its ${hour} o’clock`;
};

const mod1_exer2 = () => {
	return Math.PI.toFixed(6);
};

const mod1_exer3_4_println = (num) => {
	return `${num} dec = ${num.toString(16)} hex = ${num.toString(8)} oct = ${num.toString(2)} bin`;
};

const mod1_exer3 = () => {
	for(let i = 0; i <= 22; i++){
		console.log(mod1_exer3_4_println(i));
	}
};

const mod1_exer4 = () => {
	for(let i = 0; i <= 22; i++){
		if ((i < 10) || (i > 20)){
			if(i%2 === 1){
				console.log(mod1_exer3_4_println(i));
			}
		}
	}
};

console.log();
console.log(mod1_exer1());
console.log();
console.log(mod1_exer2());
console.log();
mod1_exer3();
console.log();
mod1_exer4();
console.log();
console.log("Hi in Chinese is written as: \u55e8\uff0c\u4f60\u597d\u5417");
console.log();
console.log("The program has finished");