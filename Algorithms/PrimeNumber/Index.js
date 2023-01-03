//Prime Number
// natural number Greater than 1
//  , divisible by 1 and itself

function log(param){

	console.log(param, '\n');

}

function isPrime(n){

	if(n < 2) return false;

	// for(let i = 2; i < n; i++){
	for(let i = 2; i <= Math.sqrt(n); i++){

		if(n % i == 0) return false; 

		// For 5 
		// 5 / 2 != 0
		// 5 / 3 != 0
		// 5 / 4 != 0
		// for 4
		// 4 / 2 == 0
		// 4 / 3 != 0
		
	}

	return true;


}

log(isPrime(1)); //false
log(isPrime(5)); //true
log(isPrime(4)); // false

// Big-O = O(n) = Linear
// if Math.sqrt root then O(n*n)