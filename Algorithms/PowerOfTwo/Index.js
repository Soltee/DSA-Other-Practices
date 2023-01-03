// Power of 2
// An integer is power of 2 if there
// 	exists an integer 'x' such than 'n' === 2 to power x
// 	
function log(param){

	console.log(param, '\n');

}

function isPowerOfTwo(n){

	if(n < 1) return false;

	//1. for linear o(n)
	while(n > 1) {

		if(n % 2 !== 0) return false

		n = n / 2

	}

	return true;

	//2. for constant O(1)
	return (n & (n - 1)) === 0

}

log(isPowerOfTwo(1)); //true
log(isPowerOfTwo(2)); //true
log(isPowerOfTwo(5)); //false
log(isPowerOfTwo(8)); //false

// Big-O = O(logn) = Logarithmic
// 