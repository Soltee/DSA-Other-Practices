// Factorial
// Factorial of zero is 1
// factorial (4) = 4*3*2*1 = 24
// factorial (5) = 5*4*3*2*1 = 120

function log(param){

	console.log(param, '\n');

}

function factorial(n){

	let result = 1;

	for(let i = 2; i <= n; i++){
		result = result * i;
		// Eg of 5
		// 1*2 = 2
		// 2*3 = 6
		// 6*4 = 24
		// 24*5 = 120
	}

	return result;


}

log(factorial(0));
log(factorial(1));
log(factorial(4));
log(factorial(5));

// Big-O = O(n) = Linear
