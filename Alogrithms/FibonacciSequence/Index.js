// Fibonacci is a asequence in which each number is the sum of the two proceeding ones;
// The first tow numbers in the sequence is 0 and 1.
// Examples.
// fibonacci(2) = (0,1)
// fibonacci(2) = (0,1,1) = 0 + 1 = 1 , so the third is the sum of the first two
// fibonacci (7) = (0,1,1,2,3,5,8)
// 		- the above is expressed as
// 		- 0 + 1 = 1
// 		- 1 + 1 = 2
// 		- 1 + 2 = 3
// 		- 2 + 3 = 5
// 		- 3 + 5 = 8 so, 0, 1, 1, 2, 3, 5, 8

function log(param){

	console.log(param, '\n');

}

function fibonacci(n) {

	const fib = [0, 1];

	for(let i = 2; i < n; i++){
		fib[i] = fib[i - 1] + fib[i - 2];
	}

	return fib;
}

log(fibonacci(2)); // [0, 1]
log(fibonacci(3)); // [0, 1, 1]
log(fibonacci(5)); // [0, 1, 1, 2, 3]
log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]

//Big-O = O(n) = Linear