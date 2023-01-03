// When a function calls itself, it is said to be a recursion
// Useful when breaking down a proble into smaller version of same problem
// 
// Base Case - to terminate the loop 
// 
//  This is not a best solutions
function recursiveFibonacci(n){
	// f of n = f (n-1) +  f(n-2)

	// Base Case
	if(n<2) return n;

	return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
	// For 7
	// 7 - 1 = 6 
	// 6 - 1 = 5
	// 5 - 1 = 4
	// 4 - 1 = 3
	// 3 - 1 = 2 3 - 2 = 1 
	// 2 - 1 = 1 + ( 2 - 2 ) = 0 
}

// console.log(recursiveFibonacci(1), "\n");
// console.log(recursiveFibonacci(2), "\n");
// console.log(recursiveFibonacci(3), "\n");
// console.log(recursiveFibonacci(4), "\n");
// console.log(recursiveFibonacci(5), "\n");
// console.log(recursiveFibonacci(6), "\n");
console.log(recursiveFibonacci(7), "\n");

// Big-O = O(2^n)
 


function recursiveFactorial(n){

	// Base Case
	if(n == 0) return 1;

	// console.log(n * recursiveFactorial(n-1), '-----');
	return n * recursiveFactorial(n-1)
}

// console.log(recursiveFactorial(1), "\n");
// console.log(recursiveFactorial(2), "\n");
// console.log(recursiveFactorial(3), "\n");
// console.log(recursiveFactorial(4), "\n");
// console.log(recursiveFactorial(5), "\n");
// console.log(recursiveFactorial(6), "\n");
console.log(recursiveFactorial(7), "\n");

// Big-O = O(n)

