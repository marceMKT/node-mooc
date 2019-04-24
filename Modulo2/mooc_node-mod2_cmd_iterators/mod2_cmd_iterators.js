
const getIndexR = () => {
	return params.findIndex(elem => elem === "-r");
};

const getNextValueR = (indexR) => {
	if(indexR !== -1){
		return params[indexR+1];
	}
};

const getUniqueParams = (nextValueR) => {
	
	if(nextValueR !== undefined){
		return params.filter(elem => ((elem !== nextValueR) && (elem !== "-r")));
	}

	return params;
};

const printParams = (uniqueParams) => {
	uniqueParams.reduce((total, currentElem, currentIndex, arr) => {
		if (arr[currentIndex] === arr[currentIndex+1]){
			total++;
		}
		else{
			console.log(`${currentElem}: ${total}`);
			total = 1;
		}
		return total;
	},1);
};

const proccessParams = () => {
	let nextValueR = getNextValueR(getIndexR());
	let uniqueParams = getUniqueParams(nextValueR);
	uniqueParams.sort();
	printParams(uniqueParams);

};

let [routeNode, routeFile, ...params] = process.argv;

console.log();
console.log(`Route to node.js: ${routeNode}`);
console.log(`Route to this file: ${routeFile}`);	
console.log();
proccessParams();
console.log();